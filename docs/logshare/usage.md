---
sidebar_position: 2
title: 使用指南
---

# Logshare 使用指南

Logshare 提供多种方式分享 Minecraft 日志，以下是详细的使用方法。

## 🚀 快速开始

### 方法一：网页上传

1. 打开 [Logshare 官网](https://logshare.cn/)
2. 点击上传区域或拖拽日志文件到页面
3. 等待上传完成后复制分享链接

### 方法二：启动器内置

FCL 和 ZL2 启动器已内置 Logshare 上传功能：

1. 在启动器中找到日志管理界面
2. 选择要分享的日志文件
3. 点击"分享日志"按钮
4. 自动生成分享链接

### 方法三：命令行工具

```bash
# 使用 curl 上传
curl -X POST https://logshare.cn/api/upload \
  -H "Content-Type: application/json" \
  -d '{"content": "'"$(cat server.log)"'"}'
```

:::tip 提示
Windows 用户可以使用 PowerShell 的 `Invoke-RestMethod` 命令替代 curl。
:::

## 📁 支持的日志类型

| 日志类型 | 说明 |
| :--- | :--- |
| `server.log` | Minecraft 服务端日志 |
| `latest.log` | 客户端最新日志 |
| `launcher.log` | 启动器日志 |
| `crash-reports/` | 崩溃报告 |

## 💡 使用技巧

### 1. 快速定位问题

分享日志后，可以在链接后添加行号定位：

```
https://logshare.cn/abc123#L100
```

### 2. 分享特定部分

可以只分享日志中相关的部分，避免不必要的信息泄露。

### 3. 配合 Discord 使用

将日志链接直接粘贴到 Discord，会自动展开预览。

## 🔒 隐私保护

- 日志内容仅在您分享链接后才会公开
- 建议在分享前检查是否包含敏感信息
- 您可以随时删除已分享的日志

:::warning 隐私警告
分享日志前请务必检查内容，确保不包含个人隐私信息如密码、IP 地址、真实姓名等。
:::

## ❓ 常见问题

**Q: 日志会保存多久？**

A: 日志会永久保存，除非您手动删除。

**Q: 支持多大的日志文件？**

A: 单条日志最大支持 10MB。

**Q: 是否支持中文日志？**

A: 完全支持，日志会自动识别并正确显示中文。

**Q: 如何删除分享的日志？**

A: 在日志页面找到删除按钮，或通过 API 调用删除接口。