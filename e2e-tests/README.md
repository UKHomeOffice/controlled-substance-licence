# Controlled Substance Licence E2E Tests

This directory contains the Playwright BDD end-to-end tests for the Controlled
Substance Licence (CSL) service. The tests use the UAT service by default when
configured as below; they do not build or start the application locally.

## Run Locally Against UAT

### Prerequisites

- Node.js (the version range in the root `package.json`).
- Yarn and access to the CSL UAT service.
- Approved UAT test accounts and a test mailbox authorized for these scenarios.

From the repository root, install dependencies and the Chromium browser:

```powershell
yarn install
yarn playwright install chromium
```

Create or update the **root** `.env` file (next to `package.json`), not a file
inside `e2e-tests`. Set the UAT URL and the required test secrets:

```dotenv
PLAYWRIGHT_BASE_URL=https://csl.uat.sas-notprod.homeoffice.gov.uk/
PASSWORD_CDA=your-cda-test-password
PASSWORD_LTHCC=your-lthcc-test-password
PASSWORD_PCA=your-pca-test-password
PASSWORD_PENDING=your-pending-test-password
SAS_HOF_EMAIL=your-approved-test-mailbox@example.com
```

Use the passwords and mailbox issued for your team's UAT test accounts. Test
usernames are currently defined in `utility-helper/constants-lib.ts`; they are
not read from `.env`. Keep `.env` local and never commit credentials.

`playwright.config.ts` loads `.env` and uses `PLAYWRIGHT_BASE_URL` as the
browser base URL. When this variable is set, Playwright skips starting the local
web server and navigates to UAT. If it is missing, the config instead targets
`http://localhost:8080` and starts `yarn start:dev`.

### Generate and Run Tests

Run these steps from the repository root:

1. Generate Playwright tests from the Gherkin feature files. The generated
  tests are written to `.features-gen`:

  ```powershell
  yarn bddgen
  ```

2. List the generated tests without running them. Use the output to find a
  test's generated file path and line number:

  ```powershell
  yarn playwright test --list
  ```

3. Run one scenario or Examples row by replacing the path and line placeholders
  with values from the list. `--workers=1` runs tests serially, and
  `--retries=0` prevents automatic reruns after a failure:

  ```powershell
  yarn playwright test '<generated-spec-path>:<line>' --workers=1 --retries=0
  ```

4. Optionally run one journey project. This example runs only `cda`; the other
  projects are `lthcc`, `pca`, and `reg`:

  ```powershell
  yarn playwright test --project=cda --workers=1 --retries=0
  ```

5. After checking individual scenarios, run the full suite serially without
  retries. This script runs `bddgen` before Playwright:

  ```powershell
  yarn test:e2e --workers=1 --retries=0
  ```

These tests create or update real UAT registrations, uploads, saved drafts, and
submissions. Use only the authorized test accounts, and run serially because
scenarios may share account state. The `--retries=0` option avoids automatically
repeating a failed state-changing test.

## Nightly Playwright Reporting in Drone

The `nightly_e2e_playwright` Drone cron runs the suite against the configured
CSL UAT URL (`https://csl.internal.uat.sas-notprod.homeoffice.gov.uk/`). Set
`NIGHTLY_E2E_BASE_URL` in Drone to this URL, and configure the test credentials
as Drone secrets named `SAS_HOF_EMAIL`, `PASSWORD_CDA`, `PASSWORD_LTHCC`,
`PASSWORD_PCA`, and `PASSWORD_PENDING`. Do not put these credentials in the
pipeline or commit them.

The nightly run writes Playwright's JSON report and a compact JSON outcome
summary, then generates and publishes a single-file Allure HTML report when
Allure results exist, including after failed tests. The report is published as
a GitHub release asset using the existing CSL GitHub App secrets
`hof_ukho_gh_app_id`, `hof_ukho_gh_app_pk`, and
`hof_ukho_gh_app_install_id`. Configure the `nightly_e2e_playwright` cron in
Drone and provide the `slack_sas_hof_e2e_tests_webhook` secret for its
notification step.

The Slack preview contains only the report heading, “Nightly Playwright Tests,”
and Playwright's `Status: Passed|Failed`. Its colored attachment contains the
actual Drone build status separately from Playwright test status, the branch,
environment URL, build link, and outcome percentages and counts. It contains no
individual test details and uses Slack's native “Show more” / “Show less”
behavior. A green attachment means this build's Playwright run and result data
are valid and its saved exit code is zero; otherwise it is red. The exit code is
tagged with the current Drone build number, so stale or missing status data is
reported as failed. Missing or invalid JSON results are explicitly marked
`Results: INVALID`, not as a successful zero-test run.

The report link downloads the single-file Allure HTML report, which must be
opened in a browser. If Allure results were not generated or publication failed,
the Slack attachment says that the report is unavailable. The nightly release
replaces its previous Allure report asset.


## Test Structure

- `features/`: Gherkin scenarios, organized by journey (`cda`, `lthcc`, `pca`,
  and `Reg`), plus `smokeTest.feature`.
- `steps/`: journey-specific step definitions and shared CSL navigation/actions.
- `pages/`: typed page objects and locators; `base-page.ts` contains shared
  page interactions. Journey-specific page objects are grouped in subfolders.
- `fixture/fixtures.ts`: Playwright BDD fixture setup and page-object instances.
- `utility-helper/constants-lib.ts`: shared scenario data and required
  environment-variable reads.
- `test-data/user-upload-files/`: upload files used by the scenarios.

BDD-generated tests are written to `.features-gen`. Playwright reports and test
artifacts are written to the configured report/result directories in the
repository root.
