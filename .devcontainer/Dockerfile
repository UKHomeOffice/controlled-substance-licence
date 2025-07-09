FROM node:20.19.3-alpine3.22@sha256:9d015b82e81e8107ef0d341a8ef2d6ca4a6bc6f3b6659bd5869316eef3779761

USER root

# Update the package index and upgrade all installed packages to their latest versions
RUN apk update && apk upgrade

# Setup nodejs group & nodejs user
RUN addgroup --system nodejs --gid 998 && \
    adduser --system nodejs --uid 999 --home /app/ && \
    chown -R 999:998 /app/

USER 999

WORKDIR /app
