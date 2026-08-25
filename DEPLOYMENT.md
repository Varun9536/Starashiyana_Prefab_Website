# Deploying to the VPS (starashiyanaprefab.com)

The app runs in Docker on the VPS, bound to `127.0.0.1:3005` only (port 3000
was already taken on this VPS — see `docker-compose.yml`). Nginx on
the host is the only thing exposed to the internet — it terminates TLS and
reverse-proxies to the container. This is the setup Next.js itself recommends
for self-hosting (see `PROGRESS_TRACKER.md` for why).

## 0. One-time server setup

```bash
# Docker
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER   # log out/in after this

# Nginx + certbot
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx

# Firewall — only 22/80/443 exposed; 3005 stays internal
sudo ufw allow OpenSSH
sudo ufw allow "Nginx Full"
sudo ufw enable
```

Point the domain's DNS at the VPS before continuing (A records for both
`starashiyanaprefab.com` and `www.starashiyanaprefab.com` → the VPS's IP).

## 1. Get the code onto the server

```bash
git clone https://github.com/Varun9536/Starashiyana_Prefab_Website.git
cd Starashiyana_Prefab_Website
cp .env.example .env   # edit if the domain ever changes
```

## 2. Build and run the container

```bash
docker compose build
docker compose up -d
docker compose ps        # should show "healthy" after ~10s
curl -I http://127.0.0.1:3005
```

## 3. Wire up nginx

```bash
sudo cp deploy/nginx/starashiyanaprefab.com.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/starashiyanaprefab.com.conf /etc/nginx/sites-enabled/
sudo mkdir -p /var/www/certbot
sudo nginx -t && sudo systemctl reload nginx
```

At this point `http://starashiyanaprefab.com` should already proxy to the
container (the config's HTTP block forwards everything except the ACME
challenge path to HTTPS, so it'll 301 to `https://` which doesn't have a
certificate yet — that's expected, fixed by the next step).

## 4. Issue the TLS certificate

```bash
sudo certbot --nginx -d starashiyanaprefab.com -d www.starashiyanaprefab.com
```

Certbot edits the nginx config's `ssl_certificate` lines in place and reloads
nginx. Auto-renewal is installed as a systemd timer by the certbot package —
verify it with `sudo certbot renew --dry-run`.

## 5. Verify

```bash
curl -I https://starashiyanaprefab.com
curl -I https://www.starashiyanaprefab.com   # should 301 -> apex
```

## Redeploying after a code change

```bash
git pull
docker compose build
docker compose up -d
```

`NEXT_PUBLIC_SITE_URL` is baked into the client bundle at **build** time
(see `.env.example`) — if it ever needs to change, edit `.env` and rebuild;
restarting the container alone won't pick it up.

## Rolling back

```bash
git log --oneline -5   # find the previous good commit
git checkout <commit>
docker compose build
docker compose up -d
```
