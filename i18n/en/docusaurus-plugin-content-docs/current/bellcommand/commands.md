---
sidebar_position: 6
title: Commands & Permissions
---

# Commands and Permissions

This document lists all basic commands and their corresponding permission nodes for the BellCommand plugin.

## 1. Basic Commands

| Command | Description | Permission Node |
| :--- | :--- | :--- |
| `/bc` | Show plugin help information | None |
| `/bc reload` | Reload plugin configuration (including all item files) | `bellcommand.reload` |
| `/bc give <player> <item_id> [amount]` | Give a specified command item to a player | `bellcommand.give` |
| `/bc list` | List all currently loaded command items | `bellcommand.list` |

## 2. Permission Descriptions

### Admin Permissions
- `bellcommand.reload`: Allows executing the reload command.
- `bellcommand.give`: Allows executing the give item command.
- `bellcommand.list`: Allows viewing the list of loaded items.

### Item Usage Permissions
In the item configuration files, you can set a `permission` node for each item individually.
- If a permission is set, players must have that permission to trigger the item's commands.
- If no permission is set, all players can use it.

## 3. Example Scenario

If you want players to only be able to use an item named `magic_wand`, you can set it in `commands.yml`:
```yaml
items:
  magic_wand:
    item-id: STICK
    permission: "myplugin.magic"
    # ... other configs
```
Then grant the player the `myplugin.magic` permission.
