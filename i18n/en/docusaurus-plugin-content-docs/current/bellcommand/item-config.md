---
sidebar_position: 4
title: Item Config Guide
---

# Item Configuration Guide

The core of BellCommand lies in custom command items. With simple YAML configurations, you can create items with special functions, permissions, and cooldowns.

## 1. Basic Structure

Starting from version 1.4.0, item definitions are recommended to be placed in separate `.yml` files within independent folders (default is `Default_config/`). Folder names must end with `_config`.

```yaml
items:
  example_sword:           # Unique Item ID
    item-id: DIAMOND_SWORD # Item Material (use Bukkit Material names)
    name: "&6Legendary Sword" # Display Name (supports color codes)
    lore:                  # Item Lore
      - "&7This is a cursed sword"
      - "&eRight-click to trigger power"
    permission: "sword.use" # Permission required to use (optional)
    cooldown: 5            # Cooldown in seconds
```

## 2. Interaction Actions (Commands)

You can configure different command sequences for various interaction methods:

| Action Type | Description |
| :--- | :--- |
| `right-click` | Right-click |
| `left-click` | Left-click |
| `shift-right-click` | Shift + Right-click |
| `shift-left-click` | Shift + Left-click |
| `bedrock-right-click` | Bedrock specific Right-click (Floodgate) |
| `bedrock-left-click` | Bedrock specific Left-click (Floodgate) |
| `bedrock-shift-right-click` | Bedrock specific Sneak + Right-click |
| `bedrock-shift-left-click` | Bedrock specific Sneak + Left-click |

:::tip
Since v1.4.0-beta.2, if you don't configure a Bedrock-specific action (e.g., `bedrock-right-click`), the plugin will automatically fall back and attempt to execute the corresponding general action (e.g., `right-click`).
:::

### Command Configuration Example

```yaml
    commands:
      right-click:
        1:
          command: "heal %player%" # Command to execute
          as-console: true         # Execute as console
        2:
          command: "say I am healed!"
          as-op: true              # Execute as operator (OP)
          delay: 1.5               # Execute with 1.5s delay
```

### Command Parameters

- `command`: String. The command to be executed.
- `as-console`: Boolean. If `true`, executed by the console. If `false`, executed by the player.
- `as-op`: Boolean. If `true`, the player will temporarily gain OP status to run the command (reverts immediately after).
- `delay`: Number. Delay in seconds before execution.

### Placeholder Support

The following placeholders can be used in the `command` field:

- `%player%`: Player name.
- `%uuid%`: Player UUID.
- `%world%`: Player's current world name.
- `%x%`, `%y%`, `%z%`: Player's current coordinates (integers).

## 3. Automatic Features

### Auto-Give
Configure whether players automatically receive the item on specific events.

```yaml
    auto-give:
      join: true       # Give on join (every time)
      first-join: true # Give only on first join
      respawn: true    # Give on respawn
```

### Auto-Cleanup
Configure the existence strategy of the item in player inventory. The plugin will attempt to clean up the item after a specified delay once the player receives it.

```yaml
    auto-cleanup:
      enabled: true # Whether to enable auto-cleanup
      delay: 30     # Seconds before cleanup after receiving
```

## 4. Advanced Configuration

For detailed configuration of consumable items, please refer to the [Consumables Document](consumables.md).
