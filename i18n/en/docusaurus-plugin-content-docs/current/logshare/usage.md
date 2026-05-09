---
sidebar_position: 2
title: Usage Guide
---

# Logshare Usage Guide

Logshare provides multiple ways to share Minecraft logs. Here are detailed usage instructions.

## 🚀 Quick Start

### Method 1: Web Upload

1. Open [Logshare website](https://logshare.cn/)
2. Click the upload area or drag log files to the page
3. Copy the share link after upload completes

### Method 2: Launcher Integration

FCL and ZL2 launchers have built-in Logshare upload functionality:

1. Find the log management interface in the launcher
2. Select the log file to share
3. Click the "Share Log" button
4. Share link is automatically generated

### Method 3: Command Line

```bash
# Upload using curl
curl -X POST https://logshare.cn/api/upload \
  -H "Content-Type: application/json" \
  -d '{"content": "'"$(cat server.log)"'"}'
```

## 📁 Supported Log Types

| Log Type | Description |
| :--- | :--- |
| `server.log` | Minecraft server log |
| `latest.log` | Latest client log |
| `launcher.log` | Launcher log |
| `crash-reports/` | Crash reports |

## 💡 Tips

### 1. Quick Navigation

Add line number to link for quick navigation:

```
https://logshare.cn/abc123#L100
```

### 2. Share Specific Sections

You can share only relevant parts of logs to avoid unnecessary information exposure.

### 3. Use with Discord

Paste log links directly into Discord, they will automatically expand.

## 🔒 Privacy Protection

- Log content is only public when you share the link
- Check for sensitive information before sharing
- You can delete shared logs at any time

:::warning Privacy Warning
Please check the content before sharing logs. Ensure no personal information such as passwords, IP addresses, real names, etc. is included.
:::

## ❓ FAQ

**Q: How long are logs stored?**

A: Logs are stored permanently unless manually deleted.

**Q: What is the maximum log size?**

A: Maximum 10MB per log.

**Q: Does it support Chinese logs?**

A: Fully supported, Chinese is automatically recognized and displayed correctly.

**Q: How to delete shared logs?**

A: Find the delete button on the log page or use the API delete endpoint.