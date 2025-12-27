---
sidebar_position: 2
title: 快速上手
---

# 快速上手

本指南将帮助你了解如何部署和使用 Lemwood Mirror。

## 🚀 部署步骤

### 1. 下载程序
从 GitHub Releases 下载对应操作系统的构建产物：
- `mirror-windows.zip`
- `mirror-linux.tar.gz`

### 2. 配置环境
在程序同级目录下创建或修改 `config.json`。至少需要配置 `server_address` 和 `server_port`。

```json
{
  "server_address": "http://your-ip-or-domain",
  "server_port": 8080,
  "launchers": [
    {
      "name": "fcl",
      "source_url": "https://github.com/FCL-Team/FoldCraftLauncher"
    }
  ]
}
```

### 3. 运行服务
- **Windows**: 双击 `mirror.exe` 或在终端运行 `./mirror.exe`。
- **Linux**: 运行 `./mirror`。

## 🖥️ 使用说明

### 访问首页
打开浏览器访问 `http://localhost:8080`。你将看到：
- 各启动器的最新版本信息。
- 下载统计和趋势图表。
- 文件浏览区域。

### 手动触发更新
点击页面上的 **“手动扫描”** 按钮（需要 POST `/api/scan`），系统会立即检查所有配置的仓库。

### 文件浏览
在文件浏览组件中，你可以点击文件夹进入子目录，点击文件名直接从镜像站下载。
