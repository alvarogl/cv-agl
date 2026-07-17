# cv-agl

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Docker

Build the production image locally:

```bash
docker build -t cv-agl:local .
```

Run it locally on port `8080`:

```bash
docker run --rm -p 8080:80 cv-agl:local
```

## GitHub Actions push to Docker Hub

This repository now builds and pushes a production image to Docker Hub on pushes to `master`.

Configure these GitHub repository secrets before enabling the workflow:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

Configure this GitHub repository variable:

- `DOCKERHUB_REPOSITORY`

Example value for `DOCKERHUB_REPOSITORY`:

```text
your-dockerhub-user/your-private-repo
```

The workflow publishes:

- `latest` on `master`
- a commit SHA tag for traceability
