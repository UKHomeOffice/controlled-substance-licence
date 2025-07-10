FROM ubuntu:22.04

# Set environment variables to avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Update package index and install dependencies
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y curl gnupg ca-certificates build-essential git

# Install Node.js v20.19.0
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g n && \
    n 20.19.0 && \
    apt-get purge -y nodejs && \
    apt-get autoremove -y

# Install Yarn v1.22.2
RUN npm install -g yarn@1.22.2

# Setup nodejs group & user
RUN groupadd -g 998 nodejs && \
    useradd -m -u 999 -g 998 -d /app nodejs && \
    mkdir -p /app && chown -R 999:998 /app

USER 999

WORKDIR /app

COPY --chown=999:998 . /app

RUN yarn install --frozen-lockfile --production --ignore-optional && \
    yarn run postinstall

HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl --fail http://localhost:8080 || exit 1

CMD ["sh", "/app/run.sh"]

EXPOSE 8080
