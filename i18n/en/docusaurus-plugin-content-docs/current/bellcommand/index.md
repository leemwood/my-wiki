---
sidebar_position: 1
title: Home
---

## What is this?
BellCommand is a powerful Minecraft bukkit plugin that allows server administrators to create custom items that can execute commands. Players can trigger preset commands by left-clicking or right-clicking these items.

## What can it achieve?
- Currently implements shortcut command execution for menu-like items for plugins such as [DeluxeMenus](https://www.spigotmc.org/resources/deluxemenus.11734) and [GMenu](https://github.com/ning-g-mo/gmenu).
- It supports Bedrock players, requires enabling support, and you **must** install and configure [Floodgate](https://geysermc.org/download/?project=floodgate) for it to work!
- Rich command execution methods. With Bedrock support, you can set 4*2=8 types of commands at once!

## Quick Navigation
- 📖 [Getting Started](intro.md)
- 📂 [Configuration System](config.md)
- ⚔️ [Item Config Guide](item-config.md)
- 💎 [Consumable Items](consumables.md)
- ⌨️ [Commands & Permissions](commands.md)
- 📜 [Changelog](changelog.md)

## 1.4.0 Core Updates (Beta)
- 📂 **Modular Config**: Supports multi-folder storage for item configurations, decoupling item definitions from the main config.
- 🔄 **Real-time Hot Reload**: Based on `WatchService` for automatic synchronization of config files without commands.
- 💎 **Consumable Items**: Official support for various consumption logics such as fixed count, probability trigger, and random range.
- 🔒 **Thread Safety**: Introduces `ReentrantReadWriteLock` to ensure high-concurrency stability.
- 🚀 **Automated Publishing**: Deep integration with GitHub Actions and Modrinth API.
