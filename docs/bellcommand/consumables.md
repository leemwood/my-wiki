---
sidebar_position: 4
title: 次数性物品
---

你可以为物品设置精细的消耗逻辑。

## 配置示例
在物品定义的 `consumable` 节点下配置：

```yaml
items:
  example_item:
    material: "STICK"
    consumable:
      enabled: true
      mode: "COUNT"
      value: 1
```

## 消耗模式
- **COUNT**: 固定消耗指定数量。
- **PROBABILITY**: 按概率消耗（0.0-1.0）。
- **RANGE**: 随机区间消耗数量。
- **PROBABILITY_RANGE**: 概率触发后的随机区间消耗。
