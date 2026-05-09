---
sidebar_position: 3
title: API 文档
---

# Logshare API 文档

Logshare 提供 RESTful API 接口，方便第三方应用集成日志上传功能。

## 基础信息

- **API 地址**: `https://logshare.cn/api`
- **Content-Type**: `application/json`
- **字符编码**: UTF-8

## 接口列表

### 1. 上传日志

**POST** `/api/upload`

上传 Minecraft 日志文件并返回分享链接。

#### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `content` | string | 是 | 日志内容 |
| `name` | string | 否 | 日志文件名 |
| `format` | string | 否 | 返回格式：`json` 或 `plain`，默认 `json` |

#### 请求示例

```bash title="上传日志"
curl -X POST https://logshare.cn/api/upload \
  -H "Content-Type: application/json" \
  -d '{
    "content": "[19:30:45] [Server thread/INFO]: Starting minecraft server version 1.20.1",
    "name": "server.log"
  }'
```

#### 成功响应

```json title="响应示例"
{
  "success": true,
  "url": "https://logshare.cn/abc123",
  "shortUrl": "https://logshare.cn/s/abc123",
  "id": "abc123",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

#### 失败响应

```json title="错误响应"
{
  "success": false,
  "error": "内容不能为空",
  "code": 400
}
```

### 2. 获取日志内容

**GET** `/api/log/{id}`

根据日志 ID 获取日志内容。

#### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `id` | string | 是 | 日志 ID |

#### 请求示例

```bash
curl https://logshare.cn/api/log/abc123
```

#### 成功响应

```json
{
  "success": true,
  "id": "abc123",
  "content": "[19:30:45] [Server thread/INFO]: Starting minecraft server version 1.20.1",
  "name": "server.log",
  "views": 15,
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### 3. 获取统计信息

**GET** `/api/stats/{id}`

获取日志的访问统计信息。

#### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `id` | string | 是 | 日志 ID |

#### 成功响应

```json title="响应示例"
{
  "success": true,
  "id": "abc123",
  "views": 15,
  "uniqueViews": 12,
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### 4. 检查服务状态

**GET** `/api/health`

检查服务健康状态。

#### 成功响应

```json title="健康检查响应"
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

## 错误码

| 错误码 | 说明 |
| :--- | :--- |
| 400 | 请求参数错误 |
| 404 | 日志不存在 |
| 413 | 请求体过大 |
| 500 | 服务器内部错误 |

## 限制说明

- 单条日志最大长度：10MB
- 单 IP 每分钟最多上传 10 条日志
- 日志保留时间：永久

:::caution 速率限制
请注意 API 的速率限制，超出限制将返回 429 错误。建议在客户端实现重试机制。
:::

:::danger 安全提示
请勿在日志内容中包含敏感信息，如密码、API密钥等。日志一旦上传将永久保存。
:::