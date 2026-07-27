---
sidebar_position: 1
---

# Introduction

TpaGui is a graphical user interface plugin for TPA requests designed for Minecraft servers. It does not implement teleportation itself — instead, it acts as a GUI layer on top of your existing TPA plugin (EssentialsX, HuskHomes, etc.), replacing cumbersome commands with an intuitive interface.

## Core Features

- **Multi-platform Support**: Works on Paper 1.21+ (and forks), with optional Velocity proxy integration for cross-server player lists.
- **Cross-platform Optimization**:
  - **Java Edition**: Chest GUI displaying online player heads; on 1.21.6+, incoming requests can show a native Dialog.
  - **Bedrock Edition (Geyser)**: Automatically detected and served a native Form interface, with accept/deny pop-ups for teleport requests.
- **Back Button**: Available on both editions, with configurable material and command (e.g. `/cd` for Java, `/gmenu` for Bedrock to return to a main menu).
- **Privacy Friendly**: Vanished players are automatically hidden (SuperVanish compatible).
- **Highly Customizable**: All interface text supports multiple languages (Simplified Chinese / Traditional Chinese / English) and color codes; all TPA-related commands are configurable.
- **Smart Update Detection**: Startup and periodic checks notify admins of new versions.

## Downloads and Links

- **Modrinth**: [tpagui](https://modrinth.com/plugin/tpagui)
- **GitHub**: [RunicWonders/tpagui](https://github.com/RunicWonders/tpagui)

## Why choose TpaGui?

Traditional TPA plugins usually require players to memorize complex commands (such as `/tpa [player_name]`). TpaGui transforms this into intuitive operations:
1. Enter `/tpagui`.
2. Find the player you want to teleport to in the interface.
3. **Left-click**: Request to teleport to that player.
4. **Right-click**: Request that player to teleport to you.

Bedrock players automatically receive a form with "Accept/Deny" buttons; Java players on 1.21.6+ can receive a native Dialog request prompt (falling back to a chat message if the datapack is not installed), greatly enhancing the cross-platform experience.
