---
sidebar_position: 1
title: Home
---

# GeyserMenu v1.3.0-beta1

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
- `geysermenu.*` - Allows using all features
