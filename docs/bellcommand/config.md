---
sidebar_position: 3
title: 配置系统
---

BellCommand v1.4.0 引入了全新的模块化配置系统。

## 目录结构
```text
plugins/BellCommand/
├── config.yml              # 全局设置
├── lang/                   # 语言文件夹
└── Default_config/         # 默认物品配置文件夹
    └── commands.yml        # 物品定义文件
```

## 全局配置 (config.yml)
```yaml
config-version: 3
debug: false
language: "zh_CN"
update-source:
  enabled: true
  source: "github"
  github:
    owner: "ning-g-mo"
    repo: "BellCommand"
```

## 实时热重载
基于 `WatchService` 技术，你只需在磁盘上保存文件，插件就会自动感知并重载配置，无需输入任何指令。

## 线程安全
内部使用 `ReentrantReadWriteLock` 确保在重载配置时，玩家使用物品触发命令的操作依然保持原子性和稳定性。
