---
sidebar_position: 1
title: Home
---

# GeyserMenu v1.3.0-beta2

A lightweight and simple custom form plugin for Bedrock Edition.

## Features

- Menu system designed specifically for Bedrock Edition players
- Fully customizable menu configuration
- Built-in security check mechanism
- High performance and lightweight
- PlaceholderAPI variable support
- Supports three form types:
  - SimpleForm - Multi-button list
  - ModalForm - Confirmation dialog
  - CustomForm - Multi-component input
- Supports three icon types:
  - Java Edition item IDs (automatically mapped to Bedrock Edition)
  - Bedrock Edition texture paths (used directly)
  - URL icons (loaded from network)
- 100+ built-in icon mappings

## What's New (v1.3.0-beta2)

### Configuration Migration System
- Automatically detects and migrates old configuration files
- Automatic backup to backup directory before migration
- Supports configuration version migration from v1 to v3

### Permission Management System
- Unified permission management interface
- Permission caching mechanism for improved performance
- Dynamic menu permission registration
- Supports permission inheritance (admin permission automatically includes all sub-permissions)

### Internationalization Support
- Supports Chinese (zh_cn) and English (en) languages
- Language can be set in config.yml
- All log messages support internationalization

### Enhanced Command Security
- Supports command prefix matching
- Prevents bypassing blocked commands by adding arguments
- Stricter security checks

## System Requirements

- Java 21 or higher
- Paper 1.21.4 or higher
- [Geyser-Spigot](https://geysermc.org/) and [Floodgate](https://wiki.geysermc.org/floodgate/)

## Quick Start

1. Download the latest version of GeyserMenu
2. Place the plugin in the server's plugins folder
3. Start the server, the plugin will automatically generate configuration files
4. Edit `plugins/GeyserMenu/config.yml` for basic configuration
5. Edit or add menus in `plugins/GeyserMenu/menus/`

## Basic Commands

- `/gmenu` - Open the default menu
- `/gmenu help` - Display help information
- `/gmenu reload` - Reload configuration files
- `/gmenu open <player> <menu>` - Open a menu for a specified player

## Permission Nodes

- `geysermenu.use` - Allows using menu commands
- `geysermenu.reload` - Allows reloading the plugin configuration
- `geysermenu.open` - Allows opening menus for other players
- `geysermenu.admin` - Admin permission (includes all feature permissions)
- `geysermenu.menu.*` - Allows using all menus
- `geysermenu.*` - Allows using all features
