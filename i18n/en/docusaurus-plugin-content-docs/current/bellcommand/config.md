---
sidebar_position: 3
title: Config System
---

BellCommand v1.4.0 introduces a brand new modular configuration system.

## Directory Structure
```text
plugins/BellCommand/
├── config.yml              # Global settings
├── lang/                   # Language folder
└── Default_config/         # Default item config folder
    └── commands.yml        # Item definition file
```

## Global Config (config.yml)
```yaml
config-version: 3
debug: false
language: "en"
update-source:
  enabled: true
  source: "github"
  github:
    owner: "ning-g-mo"
    repo: "BellCommand"
```

## Real-time Hot-Reload
Powered by `WatchService`, modifications to config files are detected and reloaded automatically upon saving. No commands required.

## Thread Safety
Internal use of `ReentrantReadWriteLock` ensures that player interactions remain stable and atomic even during configuration reloads.
