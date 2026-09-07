# cv-agl

## Local development

```bash
pnpm install
pnpm run dev
```

## Validation

```bash
pnpm run lint
pnpm run build
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

## Production deployment

The production site is served at [https://agutierrez.ovh](https://agutierrez.ovh).
GitHub Actions publishes the private Docker Hub image; the homelab then checks
for a new `latest` image once per day and deploys it only after the container
health check succeeds.

Deployment configuration intentionally lives with the homelab rather than in
this application repository:

- Stack: `/opt/homelab/cv-agl/docker-compose.yml`
- Traefik route and Cloudflare DNS label: `agutierrez.ovh`
- Dashboard and health monitoring: Homepage and Uptime Kuma

To request an update immediately on the homelab, run:

```bash
systemctl --user start cv-agl-update.service
```

The Docker Hub credential is configured only on the deployment host and must
not be committed to this repository.
