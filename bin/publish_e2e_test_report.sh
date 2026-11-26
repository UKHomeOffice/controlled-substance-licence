#!/bin/bash

# Publishes PR Playwright ZIP reports or nightly single-file Allure reports to GitHub releases.

set -euo pipefail

if [ -z "${DRONE_PULL_REQUEST:-}" ]; then
  : "${GITHUB_APP_TOKEN:?Missing GITHUB_APP_TOKEN}"
  : "${DRONE_REPO:?Missing DRONE_REPO}"
  : "${DRONE_BUILD_NUMBER:?Missing DRONE_BUILD_NUMBER}"
  : "${DRONE_COMMIT_SHA:?Missing DRONE_COMMIT_SHA}"

  REPORT_FILE="${REPORT_FILE:-allure-report/index.html}"
  if [ ! -s "$REPORT_FILE" ]; then
    echo "Missing single-file Allure report at ${REPORT_FILE}" >&2
    exit 1
  fi

  WORK_DIR="$(mktemp -d)"
  trap 'rm -rf "$WORK_DIR"' EXIT

  GH_API="https://api.github.com/repos/${DRONE_REPO}"
  TAG_NAME="nightly-allure-report"
  ASSET_PREFIX="allure-report-nightly"
  REPORT_ASSET="${ASSET_PREFIX}-build-${DRONE_BUILD_NUMBER}.html"
  RESPONSE_FILE="${WORK_DIR}/response.json"

  github_request() {
    local method="$1"
    local url="$2"
    local expected_status="$3"
    shift 3

    HTTP_CODE="$(curl -sS -o "$RESPONSE_FILE" -w "%{http_code}" \
      -X "$method" \
      -H "Authorization: Bearer ${GITHUB_APP_TOKEN}" \
      -H "Accept: application/vnd.github+json" \
      -H "X-GitHub-Api-Version: 2022-11-28" \
      "$@" "$url")"

    if ! [[ "$HTTP_CODE" =~ $expected_status ]]; then
      echo "GitHub ${method} ${url} failed (HTTP ${HTTP_CODE})" >&2
      sed -n '1,30p' "$RESPONSE_FILE" >&2
      exit 1
    fi

    if [ "$HTTP_CODE" != "204" ] && ! jq -e . "$RESPONSE_FILE" >/dev/null; then
      echo "GitHub ${method} ${url} returned invalid JSON" >&2
      exit 1
    fi
  }

  github_request GET "${GH_API}/releases/tags/${TAG_NAME}" '^(200|404)$'
  if [ "$HTTP_CODE" = "404" ]; then
    github_request POST "${GH_API}/releases" '^201$' \
      -H "Content-Type: application/json" \
      --data "$(jq -n --arg tag "$TAG_NAME" \
        --arg name "CSL Nightly Allure Report" \
        --arg commit "$DRONE_COMMIT_SHA" \
        '{tag_name:$tag,name:$name,target_commitish:$commit,prerelease:true,draft:false}')"
  fi
  RELEASE_ID="$(jq -er '.id | numbers' "$RESPONSE_FILE")"

  page=1
  : > "${WORK_DIR}/asset-ids.txt"
  while :; do
    github_request GET "${GH_API}/releases/${RELEASE_ID}/assets?per_page=100&page=${page}" '^200$'
    jq -er 'type == "array"' "$RESPONSE_FILE" >/dev/null
    jq -r --arg prefix "${ASSET_PREFIX}-" \
      '.[] | select(.name | startswith($prefix)) | .id' \
      "$RESPONSE_FILE" >> "${WORK_DIR}/asset-ids.txt"
    [ "$(jq 'length' "$RESPONSE_FILE")" -eq 100 ] || break
    page=$((page + 1))
  done

  while IFS= read -r asset_id; do
    github_request DELETE "${GH_API}/releases/assets/${asset_id}" '^204$'
  done < "${WORK_DIR}/asset-ids.txt"

  github_request POST \
    "https://uploads.github.com/repos/${DRONE_REPO}/releases/${RELEASE_ID}/assets?name=${REPORT_ASSET}" \
    '^201$' -H "Content-Type: text/html" \
    --data-binary @"$REPORT_FILE"
  DOWNLOAD_URL="$(jq -er '.browser_download_url | strings | select(length > 0)' "$RESPONSE_FILE")"
  echo "Uploaded single-file Allure report: ${DOWNLOAD_URL}"

  if [ -n "${REPORT_URL_FILE:-}" ]; then
    printf '%s\n' "$DOWNLOAD_URL" > "$REPORT_URL_FILE"
  fi
  exit 0
fi

# Required environment variables
: "${GITHUB_APP_TOKEN:?Missing GITHUB_APP_TOKEN}"
: "${DRONE_PULL_REQUEST:?Missing DRONE_PULL_REQUEST}"
: "${DRONE_REPO:?Missing DRONE_REPO}"
: "${DRONE_BUILD_NUMBER:?Missing DRONE_BUILD_NUMBER}"
: "${DRONE_BUILD_LINK:?Missing DRONE_BUILD_LINK}"

# Ensure playwright-report directory exists
if [ ! -d "playwright-report" ]; then
  echo "Missing playwright-report directory"
  exit 1
fi

# Archive the report
REPORT_ARCHIVE="playwright-report-pr-${DRONE_PULL_REQUEST}-${DRONE_BUILD_NUMBER}.zip"
zip -r "$REPORT_ARCHIVE" playwright-report

# GitHub API setup
GH_API="https://api.github.com/repos/${DRONE_REPO}"
TAG_NAME="pr-${DRONE_PULL_REQUEST}-playwright-report"

RELEASE_RESPONSE_FILE="$(mktemp)"
RELEASE_HTTP_CODE="$(curl -sS -o "$RELEASE_RESPONSE_FILE" -w "%{http_code}" \
  -H "Authorization: Bearer ${GITHUB_APP_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  "${GH_API}/releases/tags/${TAG_NAME}")"

if [ "$RELEASE_HTTP_CODE" = "404" ]; then
  RELEASE_HTTP_CODE="$(curl -sS -o "$RELEASE_RESPONSE_FILE" -w "%{http_code}" -X POST \
    -H "Authorization: Bearer ${GITHUB_APP_TOKEN}" \
    -H "Accept: application/vnd.github+json" \
    "${GH_API}/releases" \
    -d "$(jq -n --arg tag "$TAG_NAME" --arg name "Playwright Report PR #${DRONE_PULL_REQUEST}" '{tag_name:$tag,name:$name,prerelease:true,draft:false}')")"
fi

if ! [[ "$RELEASE_HTTP_CODE" =~ ^2 ]]; then
  echo "Failed to fetch/create release (HTTP ${RELEASE_HTTP_CODE})"
  echo "Response (first 30 lines):"
  sed -n '1,30p' "$RELEASE_RESPONSE_FILE"
  rm -f "$RELEASE_RESPONSE_FILE"
  exit 1
fi

if ! jq -e . "$RELEASE_RESPONSE_FILE" >/dev/null 2>&1; then
  echo "Release API returned non-JSON response"
  sed -n '1,30p' "$RELEASE_RESPONSE_FILE"
  rm -f "$RELEASE_RESPONSE_FILE"
  exit 1
fi

RELEASE_ID="$(jq -r '.id // empty' "$RELEASE_RESPONSE_FILE")"
if [ -z "$RELEASE_ID" ]; then
  echo "Release response missing id"
  sed -n '1,30p' "$RELEASE_RESPONSE_FILE"
  rm -f "$RELEASE_RESPONSE_FILE"
  exit 1
fi

for ASSET_ID in $(jq -r --arg prefix "playwright-report-pr-${DRONE_PULL_REQUEST}-" '.assets[]? | select(.name | startswith($prefix)) | .id' "$RELEASE_RESPONSE_FILE"); do
  curl -sS -X DELETE \
    -H "Authorization: Bearer ${GITHUB_APP_TOKEN}" \
    -H "Accept: application/vnd.github+json" \
    "${GH_API}/releases/assets/${ASSET_ID}" >/dev/null
done

rm -f "$RELEASE_RESPONSE_FILE"

ASSET_RESPONSE_FILE="$(mktemp)"
UPLOAD_HTTP_CODE="$(curl -sS -o "$ASSET_RESPONSE_FILE" -w "%{http_code}" -X POST \
  -H "Authorization: Bearer ${GITHUB_APP_TOKEN}" \
  -H "Content-Type: application/zip" \
  --data-binary @"${REPORT_ARCHIVE}" \
  "https://uploads.github.com/repos/${DRONE_REPO}/releases/${RELEASE_ID}/assets?name=${REPORT_ARCHIVE}")"

if ! [[ "$UPLOAD_HTTP_CODE" =~ ^2 ]]; then
  echo "Failed to upload report asset (HTTP ${UPLOAD_HTTP_CODE})"
  echo "Response (first 30 lines):"
  sed -n '1,30p' "$ASSET_RESPONSE_FILE"
  rm -f "$ASSET_RESPONSE_FILE"
  exit 1
fi

if ! jq -e . "$ASSET_RESPONSE_FILE" >/dev/null 2>&1; then
  echo "Asset upload returned non-JSON response"
  sed -n '1,30p' "$ASSET_RESPONSE_FILE"
  rm -f "$ASSET_RESPONSE_FILE"
  exit 1
fi

DOWNLOAD_URL="$(jq -r '.browser_download_url // empty' "$ASSET_RESPONSE_FILE")"
rm -f "$ASSET_RESPONSE_FILE"
if [ -z "$DOWNLOAD_URL" ]; then
  echo "Upload succeeded but browser_download_url is missing"
  exit 1
fi

# Post a comment to the PR with the report download link
COMMENT_BODY=$(cat <<EOF
Playwright HTML report for this PR build is available here:
* ${DOWNLOAD_URL}

Drone build: ${DRONE_BUILD_LINK}
EOF
)

GH_COMMENT_RESPONSE=$(curl -sS -X POST \
  -H "Authorization: Bearer ${GITHUB_APP_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  "${GH_API}/issues/${DRONE_PULL_REQUEST}/comments" \
  -d "$(jq -n --arg body "$COMMENT_BODY" '{body: $body}')")

if ! echo "$GH_COMMENT_RESPONSE" | jq -e . >/dev/null 2>&1; then
  echo "GitHub comment API returned non-JSON response"
  echo "$GH_COMMENT_RESPONSE"
  exit 1
fi

GH_COMMENT_URL="$(echo "$GH_COMMENT_RESPONSE" | jq -r '.html_url // empty')"
if [ -z "$GH_COMMENT_URL" ]; then
  echo "Failed to create GitHub PR comment"
  echo "$GH_COMMENT_RESPONSE"
  exit 1
fi

echo "Uploaded report asset: ${DOWNLOAD_URL}"
echo "Posted PR comment: ${GH_COMMENT_URL}"
