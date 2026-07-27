---
sidebar_position: 2
---

# Configuration

TpaGui's main configuration file is `plugins/TpaGui/config.yml`. Interface text lives in the `lang/` language files (zh_CN / zh_TW / en_US) in the plugin data folder, all supporting `&` color codes.

## Language (language)

- `language`: Interface and log language. Options: `zh_CN`, `zh_TW`, `en_US`.

## Velocity Cross-server Sync (velocity)

- `enabled`: Enable Velocity cross-server mode. When enabled, the plugin fetches the network-wide player list from the proxy and supports cross-server teleport requests; otherwise it runs in local mode even behind a proxy.
- `server-name`: This server's name in Velocity (must match velocity.toml), used to identify local players.
- `show-cross-server-players`: Whether to show players from other servers in the GUI.
- `sync-interval`: Player list sync interval (seconds). `0` means sync on demand when the GUI opens.

:::tip
The same jar also works as a Velocity plugin: drop it into the proxy's `plugins/` folder to aggregate players and forward requests across servers.
:::

## Update Check (update-check)

- `enabled`: Whether to enable automatic update checking.
- `interval`: Check interval (minutes). `0` means check only once at startup.

## Interface Settings (java-dialog-gui)

This section applies to the Java chest GUI, Bedrock forms, and the cross-server player list:

- `enabled`: Enable native Dialog request prompts for 1.21.6+ clients. Note that Dialogs require an external datapack providing `tpagui:request_to` / `tpagui:request_here`; without it, the plugin falls back to chat messages automatically.
- `players-per-page`: Number of players per page (the Java chest GUI is capped at 45).
- `show-avatars`: Whether Bedrock forms show player avatars (requires network access to the avatar API).
- `avatar-api`: Avatar API URL, supports `{uuid}` and `{name}` placeholders.

## Back Button (back-button)

- `enabled`: Whether to show a back button in the player selection menu.
- `material`: Button material for the Java GUI (Bukkit Material name, e.g. `BARRIER`, `ARROW`).
- `java-command`: Command executed when clicked on Java Edition (e.g. `cd`).
- `bedrock-command`: Command executed when clicked on Bedrock Edition (e.g. `gmenu`).

## Command Settings (commands)

This is the core of TpaGui's flexibility — adjust it to match your TPA plugin (EssentialsX, HuskHomes, CMI, etc.).

### TPA Core Commands (tpa)
- `to-player`: Command to request teleporting to another player (default `tpa`).
- `here`: Command to request another player teleport to you (default `tpahere`).

### Listening Settings
- `listen-commands`: The plugin listens for these commands to push a request confirmation UI to the target player (Bedrock form / Dialog / chat message).

### Response Commands
- `accept`: List of commands to accept teleport requests (default `tpaccept`).
- `deny`: List of commands to deny teleport requests (default `tpdeny`).
