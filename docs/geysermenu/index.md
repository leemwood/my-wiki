---
sidebar_position: 1
title: 首页
footer: true
---

# GeyserMenu v1.3.0-beta2

一个轻量化且简单的基岩版自定义表单插件。

## 特性

- 专为基岩版玩家设计的菜单系统
- 完全可自定义的菜单配置
- 内置安全检查机制
- 高性能且轻量化
- 支持 PlaceholderAPI 变量
- 支持三种表单类型：
  - SimpleForm（简单表单）- 多按钮列表
  - ModalForm（模态表单）- 确认对话框
  - CustomForm（自定义表单）- 多组件输入
- 支持三种图标类型：
  - Java 版物品 ID（自动映射到基岩版）
  - 基岩版材质路径（直接使用）
  - URL 图标（从网络加载）
- 100+ 内置图标映射

## 新功能 (v1.3.0-beta2)

### 配置迁移系统
- 自动检测并迁移旧版本配置文件
- 迁移前自动备份到 backup 目录
- 支持从 v1 到 v3 的配置版本迁移

### 权限管理系统
- 统一的权限管理接口
- 权限缓存机制提升性能
- 动态注册菜单权限
- 支持权限继承 (admin 权限自动包含所有子权限)

### 国际化支持
- 支持中文 (zh_cn) 和英文 (en) 语言
- 可在 config.yml 中设置语言
- 所有日志消息支持国际化

### 增强的命令安全
- 支持命令前缀匹配
- 防止通过添加参数绕过阻止命令
- 更严格的安全检查

## 系统要求

- Java 21 或更高版本
- Spigot/Paper 1.21.1 或更高版本
- [Geyser-Spigot](https://geysermc.org/) 和 [Floodgate](https://wiki.geysermc.org/floodgate/)

## 快速开始

1. 下载最新版本的 GeyserMenu
2. 将插件放入服务器的 plugins 文件夹
3. 启动服务器，插件将自动生成配置文件
4. 编辑 `plugins/GeyserMenu/config.yml` 进行基础配置
5. 在 `plugins/GeyserMenu/menus/` 中编辑或添加菜单

## 基础命令

- `/gmenu` - 打开默认菜单
- `/gmenu help` - 显示帮助信息
- `/gmenu reload` - 重载配置文件
- `/gmenu open <玩家> <菜单>` - 为指定玩家打开菜单

## 权限节点

- `geysermenu.use` - 允许使用菜单命令
- `geysermenu.reload` - 允许重载插件配置
- `geysermenu.open` - 允许为其他玩家打开菜单
- `geysermenu.admin` - 管理员权限（包含所有功能权限）
- `geysermenu.menu.*` - 允许使用所有菜单
- `geysermenu.*` - 允许使用所有功能
