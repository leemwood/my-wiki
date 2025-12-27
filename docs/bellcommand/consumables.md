---
sidebar_position: 5
title: 次数性物品
---

# 次数性物品系统

BellCommand v1.4.0 引入了精细的物品消耗逻辑，允许你为命令物品设置使用次数或触发概率。

## 配置项

消耗逻辑在物品定义的 `consumable` 节点下配置：

```yaml
items:
  limited_sword:
    material: "DIAMOND_SWORD"
    consumable:
      enabled: true          # 是否开启消耗系统
      mode: "COUNT"          # 消耗模式
      amount: 1              # 消耗数值/概率 (对应模式)
      min-amount: 1          # 随机模式下的最小值
      max-amount: 3          # 随机模式下的最大值
      probability: 0.5       # 概率模式下的触发概率 (0.0-1.0)
```

## 消耗模式 (Modes)

| 模式名称 | 说明 |
| :--- | :--- |
| `COUNT` | **固定消耗**: 每次成功触发命令，固定扣除 `amount` 个物品。 |
| `PROBABILITY` | **概率消耗**: 每次成功触发命令，有 `probability` 的概率扣除 `amount` 个物品。 |
| `RANGE` | **区间随机**: 每次成功触发命令，随机扣除 `min-amount` 到 `max-amount` 之间的数量。 |
| `PROBABILITY_RANGE` | **概率+区间**: 先按概率判定是否消耗，若判定成功，再从区间中随机选择扣除数量。 |

## 自动清理机制

当物品堆叠数量降至 0 时，插件会自动将该物品从玩家手中移除。

## 注意事项
- 只有在命令执行成功（且冷却结束、权限通过）后，才会计算消耗。
- 消耗逻辑支持堆叠物品。如果玩家手持一组（64个）物品，它将按配置扣除。
