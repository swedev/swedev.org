# Deploy

swedev.org is a static Next.js export served by nginx on the `saga` server
(Hetzner, `insector` hcloud context). GitHub Actions builds and rsyncs `out/` to
`/var/www/swedev.org` when a `v*` tag is pushed — see
[`.github/workflows/deploy.yaml`](../.github/workflows/deploy.yaml).

```bash
git tag v0.2.0 && git push origin v0.2.0
```

Re-deploy or roll back by running the workflow manually from the Actions tab
with the tag selected (an untagged run is refused by the tag guard).

## One-time server setup

Run as `webback` on saga:

```bash
sudo mkdir -p /var/www/swedev.org
sudo chown webback:webback /var/www/swedev.org

sudo cp swedev.org.conf /etc/nginx/sites-available/swedev.org.conf
sudo ln -s /etc/nginx/sites-available/swedev.org.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# After DNS points at saga:
sudo certbot --nginx -d swedev.org -d www.swedev.org
```

## Deploy key

A dedicated key pair for the workflow; the private half never touches the
server.

```bash
ssh-keygen -t ed25519 -C swedev.org-deploy -f swedev-deploy -N ''
# On saga: append swedev-deploy.pub to /home/webback/.ssh/authorized_keys
ssh-keyscan -H <saga-ip> > known_hosts
```

GitHub → repo settings → Environments → `production` → secrets:

| Secret | Value |
|---|---|
| `DEPLOY_SSH_KEY` | contents of `swedev-deploy` (private key) |
| `DEPLOY_KNOWN_HOSTS` | contents of `known_hosts` from `ssh-keyscan` |
| `DEPLOY_HOST` | saga's public IP or hostname |
| `DEPLOY_USER` | `webback` |

## DNS (Loopia)

`swedev.org` and `www.swedev.org` → A record to saga's IPv4 (and AAAA to its
IPv6). The nginx config redirects apex → www.

## Manual deploy

```bash
npm run build
rsync -az --delete out/ webback@saga:/var/www/swedev.org/
```
