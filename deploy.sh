#!/usr/bin/env bash
# AGD Installation — build + deploy.
# Pulls latest from GitHub, rebuilds the static site with Eleventy, and swaps
# the new output in atomically. Safe to run from cron every few minutes:
# it does nothing when there are no new commits, and never serves a half-built
# site (it builds to _site.tmp and only swaps on success).
set -euo pipefail
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

cd /home/claude/agd-site

before="$(git rev-parse HEAD 2>/dev/null || echo none)"
git pull --ff-only --quiet
after="$(git rev-parse HEAD 2>/dev/null || echo none)"

# Skip the rebuild when nothing changed AND a build already exists.
if [ "$before" = "$after" ] && [ -d _site ]; then
  exit 0
fi

# Install deps only when the lockfile changed (or node_modules is missing).
if [ ! -d node_modules ] || [ package-lock.json -nt node_modules/.installed ]; then
  npm ci --no-audit --no-fund --silent
  touch node_modules/.installed
fi

# Build to a temp dir, then sync its contents INTO the live _site in place.
# IMPORTANT: do NOT `mv` the _site directory — the nginx container bind-mounts
# its inode, so replacing the directory would leave the container serving a
# stale/deleted inode. rsync updates files within the existing dir instead.
rm -rf _site.tmp
npx @11ty/eleventy --output=_site.tmp --quiet
mkdir -p _site
rsync -a --delete _site.tmp/ _site/
rm -rf _site.tmp

# Nudge nginx to drop any cached file handles (no-op if container is absent).
docker exec agd-site nginx -s reload 2>/dev/null || true
echo "deployed $after at $(date -u +%Y-%m-%dT%H:%M:%SZ)"
