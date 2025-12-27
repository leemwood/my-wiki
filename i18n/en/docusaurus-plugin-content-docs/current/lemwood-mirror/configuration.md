---
sidebar_position: 4
title: Configuration
---

# Configuration

Lemwood Mirror is highly customizable via `config.json`.

## ⚙️ Core Options

| Option | Description | Default |
| :--- | :--- | :--- |
| `server_address` | Server access address (without port) | `http://127.0.0.1` |
| `server_port` | Listening port | `8080` |
| `storage_path` | Root directory for downloads | `download` |
| `check_cron` | Update check interval (Cron expression) | `*/10 * * * *` |
| `github_token` | GitHub Personal Access Token | (Empty) |
| `concurrent_downloads` | Max concurrent downloads | `3` |
| `download_timeout_minutes` | Single file download timeout (mins) | `40` |

## 🚀 Proxy & Acceleration

- **`proxy_url`**: Proxy for API requests (e.g., `http://127.0.0.1:7890`).
- **`asset_proxy_url`**: Proxy prefix for file downloads.
- **`xget_enabled`**: Whether to enable Xget acceleration service.
- **`xget_domain`**: Xget service domain.

## 🕹️ Launcher Config (`launchers`)

Each launcher object contains:
- **`name`**: Launcher identifier (used for directory naming).
- **`source_url`**: GitHub repository URL.
- **`repo_selector`**: (Optional) CSS selector to extract repo link if source_url is a webpage.

## 🔒 Environment Variables
You can override some configs via env vars:
- `GITHUB_TOKEN`: Overrides `github_token`.
