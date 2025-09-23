# Statistics Features

## BStats Statistics

GeyserMenu integrates BStats statistics functionality to collect anonymous plugin usage data, helping developers understand plugin usage and improve plugin quality.

### Configuration Options

In `config.yml`, you can find the following statistics-related configurations:

```yaml
settings:
  statistics:
    # Whether to enable BStats statistics - helps developers understand plugin usage
    enable-bstats: true
    
    # Whether to collect custom statistics data
    collect-custom-data: true
```

### Configuration Description

- `enable-bstats`: Controls whether to enable BStats statistics functionality
  - `true`: Enable statistics (default)
  - `false`: Disable statistics

- `collect-custom-data`: Controls whether to collect custom statistics data
  - `true`: Collect detailed plugin usage statistics (default)
  - `false`: Only collect basic statistics

## Collected Data

### Basic Statistics
- Server version distribution
- Java version distribution
- Online player count
- Server software type (Paper, Spigot, Bukkit, etc.)

### Plugin-Specific Statistics
- Number of configured menus
- Enabled features (PAPI cache, command security check, update check, etc.)
- Menu type usage (main menu, teleport menu, shop menu)
- Performance configuration settings
- PlaceholderAPI usage

## Privacy Statement

### Information Collected
- **Anonymous Data**: All statistics data is anonymous and does not contain any identifiable server or player information
- **Server Information**: Technical information such as server version, Java version, plugin version
- **Usage Statistics**: Feature usage, configuration options, etc.

### Information NOT Collected
- Server IP address or domain name
- Player usernames or UUIDs
- Chat content or command content
- Sensitive information in server configuration

## How to Disable

If you do not wish to send statistics data, you can disable it through the following methods:

### Method 1: Plugin Configuration
Set in `config.yml`:
```yaml
settings:
  statistics:
    enable-bstats: false
```

### Method 2: Global Disable
Set in the server's `plugins/bStats/config.yml`:
```yaml
enabled: false
```

## View Statistics

You can view GeyserMenu's public statistics on the [bStats official website](https://bstats.org/plugin/bukkit/GeyserMenu/26736).

::: tip Tip
Keeping statistics enabled helps developers understand plugin usage, thereby better improving the plugin. All data is anonymous and no sensitive information is collected.
:::

::: warning Note
If your server has special privacy requirements, you can disable statistics functionality in the configuration at any time.
:::