---
sidebar_position: 5
title: 表单类型
---

# 表单类型

GeyserMenu 支持三种表单类型，每种类型适用于不同的场景。

## 表单类型概览

| 类型 | 描述 | 适用场景 |
|------|------|---------|
| SimpleForm | 简单表单，包含多个按钮 | 主菜单、导航菜单 |
| ModalForm | 模态表单，包含两个按钮 | 确认操作、Yes/No 选择 |
| CustomForm | 自定义表单，支持多种输入组件 | 设置界面、用户输入收集 |

## SimpleForm（简单表单）

SimpleForm 是最常用的表单类型，包含一个标题、内容和多个带图标的按钮。

### 配置示例

```yaml
menu:
  type: simple  # 可省略，默认为 simple
  title: "主菜单"
  subtitle: "选择一个选项"
  content: "这是菜单内容"
  footer: "当前在线: %server_online%"
  
  items:
    - text: "传送菜单"
      description: "打开传送菜单"
      icon: "compass"
      icon_type: "java"
      submenu: "teleport.yml"
    
    - text: "商店菜单"
      description: "打开商店菜单"
      icon: "diamond"
      icon_type: "java"
      submenu: "shop.yml"
    
    - text: "返回出生点"
      description: "点击传送到出生点"
      icon: "nether_star"
      icon_type: "java"
      command: "spawn"
```

### 配置项说明

| 配置项 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| `type` | string | 否 | 表单类型，默认 `simple` |
| `title` | string | 是 | 表单标题 |
| `subtitle` | string | 否 | 副标题 |
| `content` | string | 否 | 主要内容 |
| `footer` | string | 否 | 页脚 |
| `items` | list | 是 | 按钮列表 |

### 按钮配置项

| 配置项 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| `text` | string | 是 | 按钮文本 |
| `description` | string | 否 | 按钮描述 |
| `icon` | string | 是 | 图标 |
| `icon_type` | string | 是 | 图标类型 |
| `command` | string | 否 | 点击执行的命令 |
| `execute_as` | string | 否 | 命令执行方式 |
| `submenu` | string | 否 | 点击打开的子菜单 |

## ModalForm（模态表单）

ModalForm 是一种确认对话框，只包含两个按钮，适用于需要用户确认的操作。

### 配置示例

```yaml
menu:
  type: modal
  title: "确认购买"
  content: |-
    你确定要花费 100 金币购买钻石吗？
    此操作无法撤销！
  button1: "确认购买"
  button2: "取消"
  
  on_button1:
    command: "eco take {player} 100 && give {player} diamond 1"
    execute_as: console
  
  on_button2:
    submenu: "shop.yml"
```

### 配置项说明

| 配置项 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| `type` | string | 是 | 必须为 `modal` |
| `title` | string | 是 | 表单标题 |
| `content` | string | 是 | 表单内容 |
| `button1` | string | 是 | 第一个按钮文本 |
| `button2` | string | 是 | 第二个按钮文本 |
| `on_button1` | section | 否 | 点击第一个按钮的动作 |
| `on_button2` | section | 否 | 点击第二个按钮的动作 |

### 使用场景

- 确认购买操作
- 确认删除操作
- 重要操作前的二次确认
- 简单的 Yes/No 选择

## CustomForm（自定义表单）

CustomForm 是最灵活的表单类型，支持多种输入组件，适用于需要收集用户输入的场景。

### 配置示例

```yaml
menu:
  type: custom
  title: "玩家设置"
  
  components:
    - type: label
      text: "=== 玩家设置面板 ==="
    
    - type: dropdown
      text: "选择语言"
      options:
        - "简体中文"
        - "English"
        - "日本語"
      default: 0
    
    - type: toggle
      text: "接收私聊消息"
      default: true
    
    - type: slider
      text: "渲染距离"
      min: 2
      max: 32
      step: 2
      default: 12
    
    - type: input
      text: "自定义昵称"
      placeholder: "输入你的昵称"
      default: "{player}"
  
  on_submit:
    command: "settings set {player} lang={0} pm={1} distance={2} name={3}"
    execute_as: console
```

### 组件类型

#### Label（标签）

显示静态文本，不收集输入。

```yaml
- type: label
  text: "这是标签文本"
```

#### Input（文本输入）

文本输入框。

```yaml
- type: input
  text: "输入名称"
  placeholder: "请输入..."
  default: ""
```

| 配置项 | 说明 |
|--------|------|
| `text` | 输入框标签 |
| `placeholder` | 占位符文本 |
| `default` | 默认值 |

#### Dropdown（下拉菜单）

下拉选择菜单。

```yaml
- type: dropdown
  text: "选择选项"
  options:
    - "选项1"
    - "选项2"
    - "选项3"
  default: 0
```

| 配置项 | 说明 |
|--------|------|
| `text` | 下拉菜单标签 |
| `options` | 选项列表 |
| `default` | 默认选中项索引（从 0 开始） |

#### Slider（滑块）

数值滑块。

```yaml
- type: slider
  text: "数量"
  min: 1
  max: 64
  step: 1
  default: 1
```

| 配置项 | 说明 |
|--------|------|
| `text` | 滑块标签 |
| `min` | 最小值 |
| `max` | 最大值 |
| `step` | 步进值 |
| `default` | 默认值 |

#### Toggle（开关）

布尔开关。

```yaml
- type: toggle
  text: "启用功能"
  default: false
```

| 配置项 | 说明 |
|--------|------|
| `text` | 开关标签 |
| `default` | 默认状态 |

### 引用组件值

在 `on_submit` 中使用 `{0}`, `{1}`, `{2}...` 引用组件值：

```yaml
on_submit:
  command: "say {0} 选择了 {1}"
```

- `{0}` - 第一个组件的值
- `{1}` - 第二个组件的值
- 以此类推...

:::tip 提示
Label 组件不计入索引，只有输入类组件才会被索引。
:::

## 使用建议

1. **选择合适的表单类型**
   - 简单导航：使用 SimpleForm
   - 确认操作：使用 ModalForm
   - 收集输入：使用 CustomForm

2. **组合使用**
   - 可以在 SimpleForm 的按钮中打开 ModalForm 进行确认
   - 确认后再打开 CustomForm 进行详细设置

3. **错误处理**
   - 始终为 ModalForm 的两个按钮提供处理逻辑
   - 在 CustomForm 中验证用户输入

## 完整示例

### 购买流程示例

1. 主菜单（SimpleForm）-> 商店菜单
2. 商店菜单（SimpleForm）-> 确认购买
3. 确认购买（ModalForm）-> 执行购买或返回

```yaml
# menu.yml
menu:
  type: simple
  title: "主菜单"
  items:
    - text: "商店"
      icon: "emerald"
      icon_type: "java"
      submenu: "shop.yml"

# shop.yml
menu:
  type: simple
  title: "商店"
  items:
    - text: "钻石 - 100金币"
      icon: "diamond"
      icon_type: "java"
      submenu: "confirm_diamond.yml"

# confirm_diamond.yml
menu:
  type: modal
  title: "确认购买"
  content: "确定花费 100 金币购买钻石吗？"
  button1: "确认"
  button2: "取消"
  on_button1:
    command: "eco take {player} 100 && give {player} diamond 1"
    execute_as: console
  on_button2:
    submenu: "shop.yml"
```
