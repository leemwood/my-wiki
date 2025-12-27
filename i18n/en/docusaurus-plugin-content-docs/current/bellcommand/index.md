---
sidebar_position: 1
title: Home
---

## What is this?
BellCommand is a powerful Minecraft bukkit plugin that allows server administrators to create custom items that execute commands. Players trigger preset commands by left or right-clicking these items.

## What can it do?
- Create menu items for plugins like [DeluxeMenus](https://www.spigotmc.org/resources/deluxemenus.11734) or [GeyserMenu](https://github.com/ning-g-mo/gmenu).
- Support for Bedrock players (requires [Floodgate](https://geysermc.org/download/?project=floodgate)).
- Rich interaction modes, up to 8 different commands per item with Bedrock support.

## 1.4.0 Core Updates (Beta)
- 📂 **Modular Config**: Store item configurations in multiple folders, decoupled from the main config.
- 🔄 **Real-time Hot-Reload**: Automatic config synchronization via `WatchService`, no commands needed.
- 💎 **Consumable Items**: Support for fixed count, probability-based, and random range consumption.
- 🔒 **Thread Safety**: Implementation of `ReentrantReadWriteLock` for high concurrency stability.
- 🚀 **Automated Release**: Deep integration with GitHub Actions and Modrinth API.
