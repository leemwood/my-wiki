---
sidebar_position: 2
title: Getting Started
---

# Getting Started

This guide will help you understand how to deploy and use Lemwood Mirror.

## 🚀 Deployment Steps

### 1. Download
Download the build artifacts for your operating system from GitHub Releases:
- `mirror-windows.zip`
- `mirror-linux.tar.gz`

### 2. Configure
Create or modify `config.json` in the same directory as the executable. At minimum, configure `server_address` and `server_port`.

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

### 3. Run
- **Windows**: Double-click `mirror.exe` or run `./mirror.exe` in terminal.
- **Linux**: Run `./mirror`.

## 🖥️ Usage

### Home Page
Open your browser and visit `http://localhost:8080`. You will see:
- Latest version info for each launcher.
- Download statistics and trend charts.
- File browsing section.

### Manual Scan
Click the **"Manual Scan"** button on the page (triggers POST `/api/scan`), and the system will immediately check all configured repositories.

### File Browsing
In the file browser component, click folders to enter subdirectories and click file names to download directly from the mirror site.
