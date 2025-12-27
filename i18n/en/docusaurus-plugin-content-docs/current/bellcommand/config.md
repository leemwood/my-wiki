---
sidebar_position: 3
title: Config System
---

# Configuration System

BellCommand v1.4.0 introduces a brand new modular configuration system designed for higher flexibility, security, and ease of use.

## 1. Modular Architecture

The plugin configuration is divided into two levels:

- **Global Config (`config.yml`)**: Controls basic plugin behavior like language, update source, and debug mode.
- **Item Config (`*_config/*.yml`)**: Defines specific command items. The plugin automatically loads all `.yml` files in folders ending with `_config`.

### Directory Structure Example
```text
plugins/BellCommand/
├── config.yml
├── lang/                   # Language folder
├── Default_config/         # Default item config folder
│   └── commands.yml        # Item definition file
└── RPG_Items_config/       # Custom folder, as long as it ends with _config
    ├── weapons.yml
    └── tools.yml
```

## 2. Real-time Hot-Reload (WatchService)

No more frequent `/bc reload`! BellCommand utilizes Java NIO `WatchService` technology.

- **Auto-Sync**: Modifications, additions, or deletions of config files on disk are detected and reloaded automatically.
- **Zero Downtime**: The reload process occurs in an asynchronous thread, ensuring no gameplay lag.
- **Thread Safety**: Internal use of `ReentrantReadWriteLock` ensures configuration access remains safe during reloads.

## 3. Smart Migration

If you are upgrading from an older version (v1.3.x):
- The plugin automatically detects the old `config.yml`.
- It distributes and applies original global `auto-give` and `auto-cleanup` settings to all migrated items.
- Old configuration files are backed up as `config.yml.bak`.

## 4. Read-Write Lock Technology

To handle high-concurrency scenarios (e.g., many players using items simultaneously in a large server):
- **Concurrent Reads**: Multiple players can read configurations and trigger commands simultaneously.
- **Exclusive Writes**: Locked only briefly during configuration reloads (hot-reload), ensuring players never read incomplete or corrupted data.
