---
sidebar_position: 3
title: API 文档
---

# API 文档

Lemwood Mirror 提供了一套 RESTful API，方便第三方集成。

## 📍 基础路径
所有 API 均以 `/api` 开头。

## 1. 获取所有状态
返回所有启动器的版本信息。

- **URL**: `/status`
- **方法**: `GET`
- **响应示例**:
```json
{
  "fcl": {
    "version": "1.2.6.3",
    "download_path": "download/fcl/1.2.6.3",
    "assets": [...]
  }
}
```

## 2. 获取最新版本
返回所有启动器的最新稳定版本信息。

- **URL**: `/latest`
- **方法**: `GET`
- **响应头**: `X-Latest-Versions` (格式: `id=v1,id2=v2`)

## 3. 获取特定启动器最新版
返回指定启动器的最新稳定版本。

- **URL**: `/latest/{launcher_id}`
- **方法**: `GET`
- **响应头**: `X-Latest-Version`

## 4. 文件列表
列出存储目录下的文件结构。

- **URL**: `/files`
- **方法**: `GET`
- **参数**: `path` (默认 `.`)
- **响应示例**:
```json
[
  {"name": "fcl", "is_dir": true, "size": 0, "mod_time": "..."},
  {"name": "README.md", "is_dir": false, "size": 1024, "mod_time": "..."}
]
```

## 5. 统计数据
获取访问和下载的统计信息。

- **URL**: `/stats`
- **方法**: `GET`

## 6. 触发扫描
手动触发一次 GitHub 更新检查。

- **URL**: `/scan`
- **方法**: `POST`
- **响应**: `202 Accepted`
