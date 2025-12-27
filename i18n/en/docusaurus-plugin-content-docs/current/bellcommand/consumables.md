---
sidebar_position: 4
title: Consumables
---

You can set precise consumption logic for your items.

## Configuration Example
Configure under the `consumable` node of an item:

```yaml
items:
  example_item:
    material: "STICK"
    consumable:
      enabled: true
      mode: "COUNT"
      value: 1
```

## Consumption Modes
- **COUNT**: Consumes a fixed number of items.
- **PROBABILITY**: Chance-based consumption (0.0-1.0).
- **RANGE**: Random range consumption.
- **PROBABILITY_RANGE**: Random range consumption triggered by probability.
