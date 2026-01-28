---
sidebar_position: 2
---

# Configuration

The TpaGui configuration file `config.yml` allows you to customize almost all interface text and functional settings.

## Message Configuration (messages)

The messages section supports the use of `&` color codes.

### Basic Messages
- `prefix`: Prefix for plugin messages.
- `player-offline`: Prompt when a player attempts an operation on a player who is already offline.
- `no-players-online`: Prompt when opening the menu when there are no other online players on the server.

### GUI Menu (gui)
Chest menu configuration for Java Edition players:
- `title`: Menu title, supports the `{page}` placeholder.
- `skull`:
  - `name`: Display name for player heads, supports `{player}`.
  - `lore`: Operation guide below the skull.
- `navigation`: Text for Previous Page/Next Page buttons.

### Form Interface (form)
Form configuration for Bedrock Edition players:
- `title`: Main menu title.
- `player-select`: Label for the player selection dropdown.
- `tpahere-toggle`: Switch between "Teleport to him" or "Let him teleport to me".
- `request`:
  - `title`: Title for the teleport request pop-up.
  - `content-to`: Content when applying to teleport to the other party.
  - `content-here`: Content when applying for the other party to teleport to oneself.
  - `accept/deny`: Button text.

## Command Settings (commands)

This is the core of TpaGui's flexibility, allowing you to adjust commands based on the base plugins your server uses (such as EssentialsX, CMI, etc.).

### TPA Core Commands
- `to-player`: Set the command to apply to teleport to the other party (default is `tpa`).
- `here`: Set the command to apply for the other party to teleport to oneself (default is `tpahere`).

### Listening Settings
- `listen-commands`: The plugin will listen for these commands to pop up a confirmation window for Bedrock players.

### Response Commands
- `accept`: List of commands to accept teleport requests.
- `deny`: List of commands to deny teleport requests.

## Update Check (update-check)

- `enabled`: Whether to enable automatic update checking.
- `interval`: Check interval (minutes). Set to `0` to check only once when the server starts.
