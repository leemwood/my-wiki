---
sidebar_position: 3
title: API Documentation
---

# Logshare API Documentation

Logshare provides RESTful API endpoints for third-party applications to integrate log upload functionality.

## Basic Information

- **API Base URL**: `https://logshare.cn/api`
- **Content-Type**: `application/json`
- **Encoding**: UTF-8

## Endpoints

### 1. Upload Log

**POST** `/api/upload`

Upload Minecraft log file and return share link.

#### Request Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `content` | string | Yes | Log content |
| `name` | string | No | Log file name |
| `format` | string | No | Response format: `json` or `plain`, default `json` |

#### Request Example

```bash title="Upload Log File"
curl -X POST https://logshare.cn/api/upload \
  -H "Content-Type: application/json" \
  --data-binary @server.log
```

```bash title="Using JSON Data"
curl -X POST https://logshare.cn/api/upload \
  -H "Content-Type: application/json" \
  -d '{"content": "Log content", "name": "server.log"}'
```

#### Success Response

```json title="Success Response"
{
  "success": true,
  "url": "https://logshare.cn/abc123",
  "shortUrl": "https://logshare.cn/s/abc123",
  "id": "abc123",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

#### Error Response

```json title="Error Response"
{
  "success": false,
  "error": "Content cannot be empty",
  "code": 400
}
```

### 2. Get Log Content

**GET** `/api/log/{id}`

Get log content by log ID.

#### Request Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | string | Yes | Log ID |

#### Request Example

```bash
curl https://logshare.cn/api/log/abc123
```

#### Success Response

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

### 3. Get Statistics

**GET** `/api/stats/{id}`

Get access statistics for a log.

#### Request Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | string | Yes | Log ID |

#### Success Response

```json title="Success Response"
{
  "success": true,
  "id": "abc123",
  "views": 15,
  "uniqueViews": 12,
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### 4. Health Check

**GET** `/api/health`

Check service health status.

#### Success Response

```json title="Health Check Response"
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

## Error Codes

| Code | Description |
| :--- | :--- |
| 400 | Bad request |
| 404 | Log not found |
| 413 | Request too large |
| 500 | Internal server error |

## Limits

- Maximum log size: 10MB
- Maximum uploads per IP per minute: 10
- Log retention: Permanent

:::caution Rate Limiting
Please be aware of API rate limits. Exceeding limits will return 429 errors. It is recommended to implement retry mechanisms on the client side.
:::

:::danger Security Notice
Do not include sensitive information in log content, such as passwords or API keys. Once uploaded, logs are stored permanently.
:::