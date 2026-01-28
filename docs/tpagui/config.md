---
sidebar_position: 2
---

# 配置说明

TpaGui 的配置文件 `config.yml` 允许你自定义几乎所有的界面文本和功能设置。

## 消息配置 (messages)

消息部分支持使用 `&` 颜色代码。

### 基础消息
- `prefix`: 插件消息的前缀。
- `player-offline`: 当玩家尝试对已离线玩家操作时的提示。
- `no-players-online`: 当服务器没有其他在线玩家时打开菜单的提示。

### GUI 菜单 (gui)
针对 Java 版玩家的箱子菜单配置：
- `title`: 菜单标题，支持 `{page}` 占位符。
- `skull`:
  - `name`: 玩家头颅显示的名称，支持 `{player}`。
  - `lore`: 头颅下方的操作指南。
- `navigation`: 上一页/下一页按钮的文本。

### 表单界面 (form)
针对基岩版玩家的表单配置：
- `title`: 主菜单标题。
- `player-select`: 玩家选择下拉框的标签。
- `tpahere-toggle`: 切换“传送到他”或“让他传送到我”的开关。
- `request`:
  - `title`: 传送请求弹窗的标题。
  - `content-to`: 申请传送到对方时的内容。
  - `content-here`: 申请对方传送到自己时的内容。
  - `accept/deny`: 按钮文本。

## 命令设置 (commands)

这是 TpaGui 灵活性的核心，你可以根据服务器使用的基础插件（如 EssentialsX, CMI 等）来调整命令。

### TPA 核心命令
- `to-player`: 设置申请传送到对方的命令（默认为 `tpa`）。
- `here`: 设置申请对方传送到自己的命令（默认为 `tpahere`）。

### 监听设置
- `listen-commands`: 插件会监听这些命令的发送，以便为基岩版玩家弹出确认窗口。

### 响应命令
- `accept`: 接受传送请求的命令列表。
- `deny`: 拒绝传送请求的命令列表。

## 更新检查 (update-check)

- `enabled`: 是否开启自动更新检查。
- `interval`: 检查间隔（分钟）。设置为 `0` 则仅在服务器启动时检查一次。
