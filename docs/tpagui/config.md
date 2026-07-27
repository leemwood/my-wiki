---
sidebar_position: 2
---

# 配置说明

TpaGui 的主配置文件为 `plugins/TpaGui/config.yml`，界面文本则位于插件数据目录的 `lang/` 语言文件中（zh_CN / zh_TW / en_US），均支持 `&` 颜色代码。

## 语言 (language)

- `language`: 界面与日志语言，可选 `zh_CN`、`zh_TW`、`en_US`。

## Velocity 跨服同步 (velocity)

- `enabled`: 是否启用 Velocity 跨服模式。启用后从代理获取全服玩家列表并支持跨服传送请求；未启用时即使处于代理子服环境也以本地模式运行。
- `server-name`: 当前服务器在 Velocity 中的名称（需与 velocity.toml 一致），用于识别本服玩家。
- `show-cross-server-players`: 是否在 GUI 中显示其他服务器的玩家。
- `sync-interval`: 玩家列表同步间隔（秒），`0` 表示仅在打开 GUI 时按需同步。

:::tip
同一个 jar 同时可作为 Velocity 插件使用：将 jar 放入代理端的 `plugins/` 目录即可实现跨服玩家汇总与请求转发。
:::

## 更新检查 (update-check)

- `enabled`: 是否开启自动更新检查。
- `interval`: 检查间隔（分钟），`0` 表示仅在启动时检查一次。

## 界面设置 (java-dialog-gui)

该配置节同时作用于 Java 箱子菜单、基岩版表单与跨服玩家列表：

- `enabled`: 是否对 1.21.6+ 客户端启用原生 Dialog 请求提示。注意 Dialog 依赖外部数据包提供 `tpagui:request_to` / `tpagui:request_here` 定义，未安装数据包时自动降级为聊天消息提示。
- `players-per-page`: 每页显示的玩家数量（Java 箱子菜单受界面限制上限为 45）。
- `show-avatars`: 基岩版表单是否显示玩家头像（需要可访问头像 API 的网络环境）。
- `avatar-api`: 头像 API 地址，支持 `{uuid}` 和 `{name}` 占位符。

## 返回按钮 (back-button)

- `enabled`: 是否在玩家选择菜单中显示返回按钮。
- `material`: Java 版按钮材质（Bukkit Material 名称，如 `BARRIER`、`ARROW`）。
- `java-command`: Java 版点击后执行的命令（如 `cd`）。
- `bedrock-command`: 基岩版点击后执行的命令（如 `gmenu`）。

## 命令设置 (commands)

这是 TpaGui 灵活性的核心，可根据服务器使用的 TPA 插件（EssentialsX、HuskHomes、CMI 等）调整。

### TPA 核心命令 (tpa)
- `to-player`: 申请传送到对方的命令（默认 `tpa`）。
- `here`: 申请对方传送到自己的命令（默认 `tpahere`）。

### 监听设置
- `listen-commands`: 插件监听这些命令，以便向目标玩家推送请求确认界面（基岩表单 / Dialog / 聊天提示）。

### 响应命令
- `accept`: 接受传送请求的命令列表（默认 `tpaccept`）。
- `deny`: 拒绝传送请求的命令列表（默认 `tpdeny`）。
