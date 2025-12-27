---
sidebar_position: 3
title: API Documentation
---

# API Documentation

Lemwood Mirror provides a RESTful API for third-party integration.

## 📍 Base Path
All APIs start with `/api`.

## 1. Get All Status
Returns version information for all launchers.

- **URL**: `/status`
- **Method**: `GET`
- **Example Response**:
```json
{
  "fcl": {
    "version": "1.2.6.3",
    "download_path": "download/fcl/1.2.6.3",
    "assets": [...]
  }
}
```

## 2. Get Latest Versions
Returns information for the latest stable versions of all launchers.

- **URL**: `/latest`
- **Method**: `GET`
- **Headers**: `X-Latest-Versions` (Format: `id=v1,id2=v2`)

## 3. Get Specific Launcher Latest
Returns the latest stable version for a specified launcher.

- **URL**: `/latest/{launcher_id}`
- **Method**: `GET`
- **Headers**: `X-Latest-Version`

## 4. File List
Lists the file structure under the storage directory.

- **URL**: `/files`
- **Method**: `GET`
- **Parameters**: `path` (default `.`)
- **Example Response**:
```json
[
  {"name": "fcl", "is_dir": true, "size": 0, "mod_time": "..."},
  {"name": "README.md", "is_dir": false, "size": 1024, "mod_time": "..."}
]
```

## 5. Statistics
Fetch visit and download statistics.

- **URL**: `/stats`
- **Method**: `GET`

## 6. Trigger Scan
Manually trigger a GitHub update check.

- **URL**: `/scan`
- **Method**: `POST`
- **Response**: `202 Accepted`
