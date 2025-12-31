---
sidebar_position: 2
---

# Configuration

Doubledoor provides concise configuration options that you can adjust according to your server's needs.

## config.yml Details

```yaml
# Whether to allow different materials for double doors
# When enabled, oak doors and spruce doors placed together can also double-open
allow-different-materials: true

# Whether to allow redstone signals to trigger double doors
# When enabled, redstone signals controlling one door will sync the other
enable-redstone: false

# Whether to allow double-opening while sneaking
# Default is false, meaning sneaking and right-clicking a door only operates that single door
allow-sneaking: false
```

## Modifying Configuration

1. Find `config.yml` in the server's `plugins/Doubledoor/` directory.
2. Modify values using a text editor.
3. Restart the server or reload the plugin for changes to take effect.
