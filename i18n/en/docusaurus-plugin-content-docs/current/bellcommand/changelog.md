---
sidebar_position: 7
title: Changelog
---

# Changelog

Records of all version changes for BellCommand.

## v1.4.0-beta.1 (2025-12-28)

### Core Features
- **Modular Config Refactoring**: Introduced `Default_config/` mechanism, supporting independent item configurations.
- **Real-time Config Hot Reload**: Based on Java `WatchService`, changes take effect immediately without manual commands.
- **Consumable Item System**: Supports various consumption modes (Fixed, Probability, Range, Probabilistic Range).
- **Thread Safety Enhancement**: Introduced `ReentrantReadWriteLock` for core configuration access.
- **Smooth Config Migration**: Automatically identifies and migrates old configurations to the new structure with backups.

### Improvements
- Optimized Floodgate Bedrock player detection and interaction logic.
- Removed all unnecessary emojis for clean documentation standards.
- Added detailed migration and operation logs.

### Fixes
- Fixed potential item reading issues during config reload under extreme high concurrency.
- Fixed an issue where delayed commands might not execute in certain environments.

---

## Historical Versions (Alpha)
- **v1.4.0-alpha.3**: Initial introduction of the consumable item system.
- **v1.4.0-alpha.2**: Basic config hot reload functionality.
- **v1.4.0-alpha.1**: Config architecture refactoring for folder-based loading.
