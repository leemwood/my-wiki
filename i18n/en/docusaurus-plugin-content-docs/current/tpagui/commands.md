---
sidebar_position: 3
---

# Commands & Permissions

TpaGui's command design is very concise, primarily revolving around one core command.

## Command List

### Player Commands

| Command | Description | Aliases |
| :--- | :--- | :--- |
| `/tpagui` | Open the main teleport request interface | `/tpag`, `/tgui` |

### Admin Commands

| Command | Description | Permission |
| :--- | :--- | :--- |
| `/tpagui reload` | Reload the plugin configuration file | `tpagui.admin` |

## Permission Nodes

| Permission | Description | Default Owner |
| :--- | :--- | :--- |
| `tpagui.use` | Allows use of the `/tpagui` command | All players |
| `tpagui.admin` | Allows use of administrative commands (e.g., reload) | Administrator (OP) |

---

:::tip Tip
If your server uses a permission plugin (such as LuckPerms), it is recommended to check if the default permission group already includes `tpagui.use`.
:::
