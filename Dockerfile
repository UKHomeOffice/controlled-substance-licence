FROM node:20.19.3-alpine3.22@sha256:9d015b82e81e8107ef0d341a8ef2d6ca4a6bc6f3b6659bd5869316eef3779761
USER root

# Update the package index and upgrade all installed packages to their latest versions
RUN apk update && apk upgrade --no-cache

# Update npm to latest version to address vulnerabilities
RUN npm install -g npm@latest

# Setup nodejs group & nodejs user
RUN addgroup --system nodejs --gid 998 && \
    adduser --system nodejs --uid 999 --home /app/ && \
    chown -R 999:998 /app/

USER 999

WORKDIR /app

COPY --chown=999:998 . /app

RUN yarn install --frozen-lockfile --production --ignore-optional && \
    yarn run postinstall

HEALTHCHECK --interval=5m --timeout=3s \
 CMD curl --fail http://localhost:8080 || exit 1

CMD ["sh", "/app/run.sh"]

EXPOSE 8080
