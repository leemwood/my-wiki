---
sidebar_position: 1
title: 首页
---

## 这是什么?
BellCommand 是一个功能强大的 Minecraft bukkit 插件，允许服务器管理员创建可以执行命令的自定义物品。玩家可以通过左键或右键点击这些物品来触发预设的命令。

## 能实现什么？
- 目前能为[杜蕾斯菜单](https://www.spigotmc.org/resources/deluxemenus.11734)，[geyser表单](https://github.com/ning-g-mo/gmenu)等插件实现快捷命令执行的菜单类物品。
- 它支持基岩版玩家，需要启用支持，你**必须**安装并配置好[floodgate](https://geysermc.org/download/?project=floodgate)才能生效！
- 丰富的命令执行方式，通过基岩版的支持，你可以一次性设置4*2=8种命令！

## 快速导航
- 📖 [基础入门](intro.md)
- 📂 [配置系统](config.md)
- ⚔️ [物品配置指南](item-config.md)
- 💎 [次数性物品](consumables.md)
- ⌨️ [指令与权限](commands.md)
- 📜 [更新日志](changelog.md)

## 1.4.0 核心更新 (Beta)
- 📂 **模块化配置**: 支持多文件夹存储物品配置，物品定义与主配置解耦。
- 🔄 **实时热重载**: 基于 `WatchService` 实现配置文件实时同步，无需指令。
- 💎 **次数性物品**: 正式支持固定次数、概率触发、随机区间等多种消耗逻辑。
- 🔒 **线程安全**: 引入读写锁 (ReentrantReadWriteLock) 保障高并发稳定性。
- 🚀 **自动化发布**: 深度集成 GitHub Actions 与 Modrinth API。
