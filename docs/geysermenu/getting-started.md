---
sidebar_position: 2
title: 快速上手
---

1. 确保你的服务器已经安装了必需的前置插件：
   - Geyser-Spigot
   - Floodgate

2. 下载 GeyserMenu v1.3.0-beta1

3. 将插件放入服务器的 `plugins` 文件夹

4. 重启服务器

## 目录结构

插件首次运行会生成以下目录和文件：

```text
plugins/GeyserMenu/
├── config.yml      # 主配置文件
├── messages.yml    # 消息配置文件
├── icons/          # 图标目录
└── menus/          # 菜单文件夹
    ├── menu.yml    # 主菜单
    ├── shop.yml    # 商店菜单
    ├── teleport.yml # 传送菜单
    ├── confirm.yml # 确认菜单（模态表单示例）
    └── settings.yml # 设置菜单（自定义表单示例）
```

:::tip 提示
- 配置文件只会在首次启动时生成，之后的修改不会被覆盖
- 菜单文件请放在 menus 目录下
:::

## 配置

### 基础配置

编辑 `config.yml` 进行基础设置：

```yaml
settings:
  default-menu: "menu.yml"  # 默认菜单
  debug: false              # 调试模式
```

### 创建菜单

在 `menus` 文件夹中创建新的 YAML 文件：

#### SimpleForm（简单表单）

```yaml
menu:
  type: simple  # 可省略，默认类型
  title: "我的菜单"
  subtitle: "选择一个选项"
  content: "这是菜单内容"
  items:
    - text: "传送菜单"
      description: "打开传送菜单"
      icon: "compass"
      icon_type: "java"     # 使用 Java 版物品 ID
      submenu: "teleport.yml"
    
    - text: "执行命令"
      description: "点击执行命令"
      icon: "textures/items/diamond"
      icon_type: "bedrock"  # 使用基岩版材质路径
      command: "say 你好"
```

#### ModalForm（模态表单）

```yaml
menu:
  type: modal
  title: "确认操作"
  content: "确定要执行此操作吗？"
  button1: "确认"
  button2: "取消"
  
  on_button1:
    command: "say 已确认"
    execute_as: console
  
  on_button2:
    submenu: "menu.yml"
```

#### CustomForm（自定义表单）

```yaml
menu:
  type: custom
  title: "玩家设置"
  
  components:
    - type: label
      text: "请填写以下信息"
    
    - type: input
      text: "玩家名称"
      placeholder: "输入名称"
      default: "{player}"
    
    - type: dropdown
      text: "选择选项"
      options:
        - "选项1"
        - "选项2"
      default: 0
    
    - type: slider
      text: "数量"
      min: 1
      max: 64
      step: 1
      default: 1
    
    - type: toggle
      text: "是否公开"
      default: false
  
  on_submit:
    command: "say {0} 选择了 {1}"
    execute_as: console
```

:::tip 提示
- 每个按钮必须有 text 和 icon
- command 或 submenu 二选一
- description 是可选的
- 图标必须指定类型 (java、bedrock 或 url)
:::

## 使用方法

1. 基岩版玩家输入 `/gmenu` 打开默认菜单

2. 使用 `/gmenu help` 查看所有可用命令

3. 管理员可以使用 `/gmenu reload` 重载配置

## 图标类型

GeyserMenu 支持三种图标类型：

| 类型 | 说明 | 示例 |
|------|------|------|
| `java` | Java 版物品 ID，自动映射 | `compass` |
| `bedrock` | 基岩版材质路径 | `textures/items/diamond` |
| `url` | 网络 URL 图标 | `https://example.com/icon.png` |

## 下一步

- 查看 [配置详解](./configuration.md) 了解更多配置选项
- 查看 [图标系统](./icons.md) 了解所有可用图标
- 查看 [表单类型](./form-types.md) 了解各种表单类型
