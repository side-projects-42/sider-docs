---
id: installation
title: Sider Enterprise Installation
sidebar_label: Installation
---

# Installation

Sider Enterprise runs on Docker, and it requires MySQL, Redis, MinIO, and GitHub Enterprise Server. Also, you should put a load balancer in front of Sider Enterprise. Before the installation of Sider Enterprise, you should first set up these services.

- [Load Balancer](./load-balancer.md)
- [MySQL](./mysql.md)
- [Redis](./redis.md)
- [MinIO](./minio.md)
- [GitHub Enterprise Server](./github.md)

## Get Docker Image

We provide Sider Enterprise as a Docker image for our customers. After you contract with Sider Corporation, we send you a credential, with which you can get the Sider Enterprise Docker image.

To get the Sider Enterprise Docker image, you need to install [AWS CLI](https://aws.amazon.com/cli/). And run the following command to configure the credential.

```bash
# Configure your AWS credentials and region
aws configure --profile sider-enterprise set region us-east-1
aws configure --profile sider-enterprise
```

Next, run the following commands with your credentials and the Sider Enterprise Docker image tag, and you can get the Docker image.

```bash
# Log in
aws ecr get-login-password --profile sider-enterprise | \
  docker login --username AWS --password-stdin docker.sider.review

# Pull image
docker pull docker.sider.review/sideci_onprem:{tag}

# Log out
docker logout docker.sider.review
```

:::note

If your organization requires your machine to access via an HTTP proxy server, you should configure Docker to use it.
See [Configure Docker to use a proxy server](https://docs.docker.com/network/proxy/) for more details.

:::

## Prepare Environment Variables for Sider Enterprise

Sider Enterprise is configured with environment variables. We recommend creating an environment variables file to reuse among [**sideci-web** and **sideci-worker**](./system-overview.md).

This is an example of the environment variables file located in `/etc/sider-env`. Of course, you can put the file anywhere, but make sure this file should be readable only to specific users.

```bash
RAILS_ENV=onprem
SECRET_KEY_BASE=topsecret...
DATABASE_URL=mysql2://mysql.example.com:3306/sideci
BASE_URL=https://sider.example.com
REDIS_URL=redis://redis.example.com:6379/0
GITHUB_APP_ID=1
GITHUB_APP_NAME=sider
GITHUB_APP_PRIVATE_KEY=long_string...
GITHUB_APP_OAUTH2_CLIENT_ID=v1.abc...
GITHUB_APP_OAUTH2_CLIENT_SECRET=secret...
GITHUB_APP_WEBHOOK_SECRET=webhook_secret...
GITHUB_API_ENDPOINT=https://ghe.example.com/api/v3/
GITHUB_ENDPOINT=https://ghe.example.com/
ENCRYPTION_SERVICE_KEY=topsecret...
ENCRYPTION_SERVICE_SALT=topsecret...
RUNNERS_TRACES_S3_BUCKET_NAME=runners-traces
DOCKER_RUNNERS_CONFIG={"docker_host_url":"unix:///var/run/docker.sock","s3_endpoint":"http://minio.example.com:9000","aws_access_key_id":"access-key","aws_secret_access_key":"secret-key","network_mode":"bridge"}
```

These parameters depend on MySQL, Redis, MinIO, and GitHub Enterprise Server configurations, so please be careful to **correctly** write the parameters. See [Sider Enterprise Configuration](./config.md)

## Run Sider Enterprise

Now, you can run Sider Enterprise on your host. First, you have to run the following command to set up the database.

```bash
docker run --env-file /etc/sider-env --rm \
  docker.sider.review/sideci_onprem:{tag} \
  bundle exec rails db:setup
```

After that, you can run the Sider Enterprise services like these commands (See [Operation](./operation.md) for more details):

```bash
docker run --detach \
  --restart=always \
  --env-file=/etc/sider-env \
  --publish=80:3000 \
  docker.sider.review/sideci_onprem:{tag} \
  bundle exec puma

docker run --detach \
  --restart=always \
  --env-file=/etc/sider-env \
  --volume=/var/run/docker.sock:/var/run/docker.sock:ro \
  docker.sider.review/sideci_onprem:{tag} \
  bundle exec sidekiq
```

## What's next

- [Sider Enterprise Configuration](./config.md)
- [Operation](./operation.md)
- [Update](./updating.md)
