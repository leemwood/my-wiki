---
sidebar_position: 6
title: 指令与权限
---

# 指令与权限

本文档列出了 BellCommand 插件的所有基础指令及其对应的权限节点。

## 1. 基础指令

| 指令 | 说明 | 权限节点 |
| :--- | :--- | :--- |
| `/bc` | 显示插件帮助信息 | 无 |
| `/bc reload` | 重载插件配置 (含所有物品文件) | `bellcommand.reload` |
| `/bc give <玩家> <物品ID> [数量]` | 给予玩家指定的命令物品 | `bellcommand.give` |
| `/bc list` | 列出当前已加载的所有命令物品 | `bellcommand.list` |

## 2. 权限说明

### 管理权限
- `bellcommand.reload`: 允许执行重载指令。
- `bellcommand.give`: 允许执行给予物品指令。
- `bellcommand.list`: 允许查看已加载的物品列表。

### 物品使用权限
在物品配置文件中，你可以为每个物品单独设置 `permission` 节点。
- 如果设置了权限，玩家必须拥有该权限才能触发该物品的命令。
- 如果未设置权限，则所有玩家均可使用。

## 3. 示例场景

如果你想让玩家只能使用名为 `magic_wand` 的物品，你可以在 `commands.yml` 中设置：
```yaml
items:
  magic_wand:
    item-id: STICK
    permission: "myplugin.magic"
    # ... 其他配置
```
然后给玩家赋予 `myplugin.magic` 权限即可。
