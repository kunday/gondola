# CLAUDE.md — Gondola

Lightweight Docker UI for browsing containers, images, and Dockerfile layer history.

## Tech Stack

- **Backend**: Ruby 2.5.1, Sinatra 1.4.5, Rack 1.5.2, Unicorn, Excon (Docker API client)
- **Frontend**: Backbone.js SPA with RequireJS, jQuery, Underscore templates, Bootstrap CSS
- **Server**: Unicorn on port 8080 (Dockerfile exposes 9292, compose maps 59292:8080)

## Architecture

```
Browser (Backbone SPA)  →  Sinatra API proxy (/api/request/*)  →  Docker daemon (unix socket)
```

- `config.ru` — Rack URL routing: `/app/*` → Web, `/api/request/*` → Api, `/` → redirect
- `lib/applications/api.rb` — Proxies requests to Docker API via Excon
- `lib/applications/web.rb` — Serves `public/index.html` for all `/app/*` routes
- `lib/docker/connection.rb` — Excon wrapper for unix socket / HTTP / HTTPS Docker connections
- `lib/environment.rb` — Reads `DOCKER_HOST` (default: `unix:///var/run/docker.sock`) and `DOCKER_VERSION`

## Frontend Modules (public/js/app/)

- `containers/` — List running/all containers (auto-refreshes every 60s)
- `container/` — Detail views: info, stats, logs, filesystem changes
- `images/` — List images, view layer history with Dockerfile commands and sizes
- `system/` — Docker version and daemon info
- `shared/` — Module wrapper view, DiskHelper (byte formatting)

## Commands

```bash
# Dev
docker-compose up              # Build and run (mounts docker socket + source)

# Build & Deploy
make install                   # docker build -t kunday/gondola
make tag                       # Tag with version from version.txt (currently 5)
make push                      # Push tagged + latest to Docker Hub

# Test
bundle exec rake spec          # RSpec tests (spec/)
```

## Environment Variables

- `DOCKER_HOST` — Docker socket URL (default: `unix:///var/run/docker.sock`)
- `DOCKER_VERSION` — Docker API version (default: `1`)
