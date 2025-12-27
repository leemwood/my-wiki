---
sidebar_position: 4
title: 物品配置指南
---

# 物品配置指南

BellCommand 的核心在于自定义命令物品。通过简单的 YAML 配置，你可以创建具有特殊功能、权限和冷却时间的物品。

## 1. 基础结构

从版本 1.4.0 开始，物品定义建议放在独立的文件夹（默认为 `Default_config/`）中的 `.yml` 文件内。

```yaml
items:
  example_sword:           # 物品唯一标识 ID
    item-id: DIAMOND_SWORD # 物品材质 (使用 Bukkit Material 名称)
    name: "&6传奇之剑"      # 物品显示名称 (支持颜色代码)
    lore:                  # 物品描述
      - "&7这是一把被诅咒的剑"
      - "&e右键点击触发神力"
    permission: "sword.use" # 使用该物品所需的权限 (可选)
    cooldown: 5            # 冷却时间 (秒)
```

## 2. 交互动作 (Commands)

你可以为不同的交互方式配置不同的命令序列：

| 动作类型 | 说明 |
| :--- | :--- |
| `right-click` | 右键点击 |
| `left-click` | 左键点击 |
| `shift-right-click` | Shift + 右键 |
| `shift-left-click` | Shift + 左键 |
| `bedrock-right-click` | 基岩版专用右键 (Floodgate) |
| `bedrock-left-click` | 基岩版专用左键 (Floodgate) |
| `bedrock-shift-right-click` | 基岩版专用 Shift + 右键 |
| `bedrock-shift-left-click` | 基岩版专用 Shift + 左键 |

### 命令配置示例

```yaml
    commands:
      right-click:
        1:
          command: "heal %player%" # 执行的命令
          as-console: true         # 是否以控制台身份执行
        2:
          command: "say 我被治愈了！"
          as-console: false        # 以玩家身份执行
          delay: 1.5               # 延迟 1.5 秒执行
```

## 3. 自动功能

### 自动给予 (Auto-Give)
配置玩家在特定事件发生时是否自动获得该物品。

```yaml
    auto-give:
      join: true    # 玩家加入服务器时给予
      respawn: true # 玩家重生时给予
```

### 自动清理 (Auto-Cleanup)
配置物品在玩家背包中的存在策略。

```yaml
    auto-cleanup:
      enabled: true # 是否开启自动清理
      delay: 30     # 玩家获得物品后多少秒执行清理
```

## 4. 进阶配置

关于次数性消耗物品（Consumables）的详细配置，请参考 [次数性物品文档](consumables.md)。
