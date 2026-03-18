---
sidebar_position: 2
title: Getting Started
---

1. Ensure your server has the required prerequisites installed:
   - Geyser-Spigot
   - Floodgate

2. Download GeyserMenu v1.3.0-beta1

3. Place the plugin in the server's `plugins` folder

4. Restart the server

## Directory Structure

On the first run, the plugin will generate the following directories and files:

```text
plugins/GeyserMenu/
├── config.yml      # Main configuration file
├── messages.yml    # Message configuration file
├── icons/          # Icon directory
└── menus/          # Menu folder
    ├── menu.yml    # Main menu
    ├── shop.yml    # Shop menu
    ├── teleport.yml # Teleport menu
    ├── confirm.yml # Confirm menu (ModalForm example)
    └── settings.yml # Settings menu (CustomForm example)
```

:::tip Tip
- Configuration files are only generated on the first startup; subsequent modifications will not be overwritten.
- Place menu files in the `menus` directory.
:::

## Configuration

### Basic Configuration

Edit `config.yml` for basic settings:

```yaml
settings:
  default-menu: "menu.yml"  # Default menu
  debug: false              # Debug mode
```

### Creating Menus

Create new YAML files in the `menus` folder:

#### SimpleForm

```yaml
menu:
  type: simple  # Can be omitted, default type
  title: "My Menu"
  subtitle: "Choose an option"
  content: "This is the menu content"
  items:
    - text: "Teleport Menu"
      description: "Open the teleport menu"
      icon: "compass"
      icon_type: "java"     # Use Java Edition item ID
      submenu: "teleport.yml"
    
    - text: "Execute Command"
      description: "Click to execute a command"
      icon: "textures/items/diamond"
      icon_type: "bedrock"  # Use Bedrock Edition texture path
      command: "say Hello"
```

#### ModalForm

```yaml
menu:
  type: modal
  title: "Confirm Action"
  content: "Are you sure you want to proceed?"
  button1: "Confirm"
  button2: "Cancel"
  
  on_button1:
    command: "say Confirmed"
    execute_as: console
  
  on_button2:
    submenu: "menu.yml"
```

#### CustomForm

```yaml
menu:
  type: custom
  title: "Player Settings"
  
  components:
    - type: label
      text: "Please fill in the following information"
    
    - type: input
      text: "Player Name"
      placeholder: "Enter name"
      default: "{player}"
    
    - type: dropdown
      text: "Select Option"
      options:
        - "Option 1"
        - "Option 2"
      default: 0
    
    - type: slider
      text: "Quantity"
      min: 1
      max: 64
      step: 1
      default: 1
    
    - type: toggle
      text: "Public"
      default: false
  
  on_submit:
    command: "say {0} selected {1}"
    execute_as: console
```

:::tip Tip
- Each button must have `text` and `icon`
- Choose either `command` or `submenu`
- `description` is optional
- Icons must specify their type (java, bedrock, or url)
:::

## Usage

1. Bedrock Edition players can open the default menu by typing `/gmenu`

2. Use `/gmenu help` to view all available commands

3. Administrators can use `/gmenu reload` to reload the configuration

## Icon Types

GeyserMenu supports three icon types:

| Type | Description | Example |
|------|-------------|---------|
| `java` | Java Edition item ID, auto-mapped | `compass` |
| `bedrock` | Bedrock Edition texture path | `textures/items/diamond` |
| `url` | Network URL icon | `https://example.com/icon.png` |

## Next Steps

- See [Configuration](./configuration.md) for more configuration options
- See [Icon System](./icons.md) for all available icons
- See [Form Types](./form-types.md) for various form types
