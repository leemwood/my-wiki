---
sidebar_position: 5
title: Consumable Items
---

# Consumable Items System

BellCommand v1.4.0 introduces sophisticated item consumption logic, allowing you to set usage limits or trigger probabilities for command items.

## Configuration Options

Consumption logic is configured under the `consumable` node in the item definition:

```yaml
items:
  limited_sword:
    material: "DIAMOND_SWORD"
    consumable:
      enabled: true          # Enable consumption system
      mode: "COUNT"          # Consumption mode
      amount: 1              # Amount/Probability (depending on mode)
      min-amount: 1          # Minimum amount for range modes
      max-amount: 3          # Maximum amount for range modes
      probability: 0.5       # Probability for probability modes (0.0-1.0)
```

## Consumption Modes

| Mode Name | Description |
| :--- | :--- |
| `COUNT` | **Fixed Consumption**: Deducts exactly `amount` of items per successful command execution. |
| `PROBABILITY` | **Probability Consumption**: Has a `probability` chance to deduct `amount` of items per execution. |
| `RANGE` | **Random Range**: Deducts a random amount between `min-amount` and `max-amount` per execution. |
| `PROBABILITY_RANGE` | **Probabilistic Range**: First checks probability, then deducts a random amount from the range. |

## Auto-Cleanup Mechanism

When an item stack count reaches 0, the plugin automatically removes the item from the player's hand.

## Notes
- Consumption is only calculated after successful command execution (cooldown ended, permission passed).
- Supports stacked items. If a player holds a stack (64 items), it will deduct according to the configuration.
