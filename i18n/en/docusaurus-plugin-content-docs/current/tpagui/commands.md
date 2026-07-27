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

### Console

Running `/tpagui` from the console prints the current online player list (vanished players are hidden; in Velocity mode it shows network-wide players), handy for a quick look without extra plugins.

## Permission Nodes

| Permission | Description | Default Owner |
| :--- | :--- | :--- |
| `tpagui.use` | Allows use of the `/tpagui` command | All players |
| `tpagui.admin` | Receives plugin update notifications | Administrator (OP) |

---

:::tip Tip
If your server uses a permission plugin (such as LuckPerms), it is recommended to check whether the default group already includes `tpagui.use`.
:::
