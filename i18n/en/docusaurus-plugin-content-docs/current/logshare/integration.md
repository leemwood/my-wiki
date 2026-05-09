---
sidebar_position: 4
title: Integration Guide
---

# Logshare Integration Guide

This document describes how to integrate Logshare into your application or service.

## 🔌 Launcher Integration

### FCL Launcher

FCL has built-in Logshare integration, no additional configuration required.

### ZL2 Launcher

ZL2 also has built-in Logshare integration.

### Custom Launcher Integration

If you develop your own launcher, follow these steps:

```python
import requests

def upload_log(content, filename="server.log"):
    url = "https://logshare.cn/api/upload"
    data = {
        "content": content,
        "name": filename
    }
    response = requests.post(url, json=data)
    if response.json()["success"]:
        return response.json()["url"]
    return None
```

:::info Note
Please securely store the `url` field from the API response. This is the unique link for users to access the log.
:::

## 📱 Web Integration

### Embed Log Viewer

Embed Logshare viewer in your website:

```html
<iframe 
    src="https://logshare.cn/embed/abc123" 
    width="100%" 
    height="500px"
    frameborder="0"
></iframe>
```

### Custom Upload Button

```html
<input type="file" id="logFile" accept=".log,.txt">
<button onclick="uploadLog()">Upload Log</button>

<script>
async function uploadLog() {
    const file = document.getElementById('logFile').files[0];
    if (!file) return;
    
    const content = await file.text();
    const response = await fetch('https://logshare.cn/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, name: file.name })
    });
    
    const result = await response.json();
    if (result.success) {
        alert('Share link: ' + result.url);
    }
}
</script>
```

## 🤖 Discord Bot Integration

```javascript
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', async message => {
    if (message.attachments.size > 0) {
        const attachment = message.attachments.first();
        if (attachment.name.endsWith('.log')) {
            const response = await fetch(attachment.url);
            const content = await response.text();
            
            const upload = await fetch('https://logshare.cn/api/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content, name: attachment.name })
            });
            
            const result = await upload.json();
            if (result.success) {
                message.channel.send(`Log shared: ${result.url}`);
            }
        }
    }
});
```

## 📊 Server Integration

### Auto Upload Logs

```bash
# Add to crontab for scheduled upload
0 * * * * curl -X POST https://logshare.cn/api/upload \
  -H "Content-Type: application/json" \
  -d "{\"content\": \"$(cat /var/log/minecraft/latest.log)\", \"name\": \"latest.log\"}"
```

## 🎨 Theme Customization

Logshare supports custom themes:

```html
<!-- Specify theme in URL -->
<a href="https://logshare.cn/abc123?theme=dark">View Log (Dark Mode)</a>
```

Available themes:
- `light` - Light theme (default)
- `dark` - Dark theme
- `solarized` - Solarized theme

## 📈 Statistics Integration

Get log access statistics via API:

```javascript
async function getStats(logId) {
    const response = await fetch(`https://logshare.cn/api/stats/${logId}`);
    return await response.json();
}
```

---

> **Tip**: If you have special integration needs, feel free to contact us for custom support.