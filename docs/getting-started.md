---
title: Getting Started
---

The easiest way to explore Kairos is to use Docker images. The following `docker-compose.yml` file will start:

- Kairos server
- Aletheia dashboard
- MongoDB instance

## Docker Compose Configuration

Below is a sample `docker-compose.yml` file that sets up the necessary services for Kairos and Aletheia. You can save
this file in your project directory and run `docker-compose up` to start the services.

```yaml
# docker-compose.yml
services:
  kairos:
    image: ghcr.io/openkairos/kairos:latest
    container_name: kairos
    ports:
      - "3000:3000"
    networks:
      - kairos_network
    depends_on:
      mongodb:
        condition: service_healthy
    environment:
      # MongoDB connection string (replace with your own if needed)
      - MONGODB_CONNECTION_STRING=mongodb://mongodb:27017/kairos
      # Application environment and credentials
      - NODE_ENV=production
      # DO NOT USE THIS KEY IN PRODUCTION - generate your own
      - APP_KEY=base64:iXOy+F/txybLC0x1ZvSShIhV6NIiquOStAo9v6lMDMw=
      # Default super admin credentials (change these in production)
      - SUPER_ADMIN_USERNAME=admin
      - SUPER_ADMIN_EMAIL=admin@example.com
      - SUPER_ADMIN_PASSWORD=secret
    healthcheck:
      test: [ 'CMD-SHELL', 'wget -qO- http://localhost:3000/ >/dev/null' ]
      interval: 5s
      timeout: 5s
      retries: 12
      start_period: 10s

  aletheia:
    image: ghcr.io/openkairos/aletheia:latest
    container_name: aletheia
    ports:
      - "8080:80"
    depends_on:
      kairos:
        condition: service_healthy
    networks:
      - kairos_network

  mongodb:
    image: mongo:8
    container_name: kairos_mongodb
    ports:
      - "27017:27017"
    networks:
      - kairos_network
    volumes:
      - kairos_mongodb_data:/data/db
    healthcheck:
      test: [ 'CMD', 'mongosh', '--quiet', '--eval', 'db.adminCommand({ ping: 1 })' ]
      interval: 5s
      timeout: 5s
      retries: 12

networks:
  kairos_network:
    driver: bridge

volumes:
  kairos_mongodb_data:
```

After starting the containers, you can access:

- Aletheia dashboard at [http://localhost:8080](http://localhost:8080)
- Kairos API at [http://localhost:3000](http://localhost:3000)

:::danger

The above configurations are for development and testing purposes only. Do not use them in production environments
without proper security measures, such as changing default credentials and using secure keys.

:::

## Generating APP Key

The application key is base64 encoded key used for encryption and signing. You can generate a secure random key using
Node.js with the following command:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

If you don't have Node.js installed, you can either run this command inside the Kairos container, or using OpenSSL:

```bash
openssl rand -base64 32
```

Before using the generated key, make sure to prepend it with `base64:` as shown in the example above. This indicates
that the key is base64 encoded.

## Kairos environment variables

You can customize the Kairos server configuration using environment variables. Below is a list of available environment
variables and their descriptions:

| Variable Name                 | Description                                                | Default Value |
|-------------------------------|------------------------------------------------------------|---------------|
| `NODE_ENV`                    | Application environment (e.g., development, production).   | development   |
| `PORT`                        | Port on which the Kairos server will listen.               | 3000          |
| `MONGODB_CONNECTION_STRING` * | Connection string for MongoDB.                             | N/A           |
| `APP_KEY` *                   | Base64 encoded application key for encryption and signing. | N/A           |
| `SUPER_ADMIN_USERNAME` *      | Default super admin username (change in production).       | N/A           |
| `SUPER_ADMIN_EMAIL` *         | Default super admin email (change in production).          | N/A           |
| `SUPER_ADMIN_PASSWORD` *      | Default super admin password (change in production).       | N/A           |
