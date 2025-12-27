---
sidebar_position: 4
title: 配置说明
---

# 配置说明

Lemwood Mirror 通过 `config.json` 进行高度自定义。

## ⚙️ 核心配置项

| 配置项 | 说明 | 默认值 |
| :--- | :--- | :--- |
| `server_address` | 服务器访问地址（不含端口） | `http://127.0.0.1` |
| `server_port` | 服务监听端口 | `8080` |
| `storage_path` | 文件存储根目录 | `download` |
| `check_cron` | 更新检查周期 (Cron 表达式) | `*/10 * * * *` |
| `github_token` | GitHub Personal Access Token | (留空) |
| `concurrent_downloads` | 并发下载数 | `3` |
| `download_timeout_minutes` | 单文件下载超时（分钟） | `40` |

## 🚀 代理与加速

- **`proxy_url`**: 用于 API 请求的代理（如 `http://127.0.0.1:7890`）。
- **`asset_proxy_url`**: 用于加速文件下载的代理前缀。
- **`xget_enabled`**: 是否启用 Xget 加速服务。
- **`xget_domain`**: Xget 服务域名。

## 🕹️ 启动器配置 (`launchers`)

每个启动器对象包含：
- **`name`**: 启动器标识符（用于目录名）。
- **`source_url`**: GitHub 仓库地址。
- **`repo_selector`**: (可选) 若 source_url 是网页，用于提取仓库链接的 CSS 选择器。

## 🔒 环境变量
你可以通过环境变量覆盖部分配置：
- `GITHUB_TOKEN`: 覆盖 `github_token`。
