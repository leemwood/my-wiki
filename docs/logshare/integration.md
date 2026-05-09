---
sidebar_position: 4
title: 集成方案
---

# Logshare 集成方案

本文介绍如何将 Logshare 集成到您的应用或服务中。

## 🔌 启动器集成

### FCL 启动器

FCL 已内置 Logshare 集成，无需额外配置。

### ZL2 启动器

ZL2 同样内置了 Logshare 集成功能。

### 自定义启动器集成

如果您开发自己的启动器，可以参考以下步骤：

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

:::info 注意事项
请妥善保管 API 响应中的 `url` 字段，这是用户访问日志的唯一链接。
:::

## 📱 网页集成

### 嵌入日志查看器

您可以在自己的网站中嵌入 Logshare 日志查看器：

```html
<iframe 
    src="https://logshare.cn/embed/abc123" 
    width="100%" 
    height="500px"
    frameborder="0"
></iframe>
```

### 自定义上传按钮

```html
<input type="file" id="logFile" accept=".log,.txt">
<button onclick="uploadLog()">上传日志</button>

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
        alert('分享链接: ' + result.url);
    }
}
</script>
```

## 🤖 Discord 机器人集成

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
                message.channel.send(`日志已分享: ${result.url}`);
            }
        }
    }
});
```

## 📊 服务端集成

### 自动上传日志

```bash
# 添加到 crontab 定时上传
0 * * * * curl -X POST https://logshare.cn/api/upload \
  -H "Content-Type: application/json" \
  -d "{\"content\": \"$(cat /var/log/minecraft/latest.log)\", \"name\": \"latest.log\"}"
```

## 🎨 主题定制

Logshare 支持自定义主题颜色：

```html
<!-- 在 URL 中指定主题 -->
<a href="https://logshare.cn/abc123?theme=dark">查看日志（深色模式）</a>
```

支持的主题：
- `light` - 浅色主题（默认）
- `dark` - 深色主题
- `solarized` - Solarized 主题

## 📈 统计集成

通过 API 获取日志访问统计：

```javascript
async function getStats(logId) {
    const response = await fetch(`https://logshare.cn/api/stats/${logId}`);
    return await response.json();
}
```

---

> **提示**: 如果您有特殊的集成需求，欢迎联系我们获取定制支持。