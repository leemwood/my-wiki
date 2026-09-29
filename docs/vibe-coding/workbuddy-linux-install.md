---
sidebar_position: 1
title: WorkBuddy Linux 安装教程（Ubuntu 原生方案）
---

# WorkBuddy Linux 安装教程

[WorkBuddy](https://www.workbuddy.cn/)（腾讯"小龙虾"）是腾讯出品的 AI 办公工作台，支持多专家协作、微信 / 企业微信 / QQ / 飞书 / 钉钉接入。它的桌面端官方只发布了 **Windows、macOS、统信 UOS 和银河麒麟**版本，Ubuntu 用户在官网找不到直接下载链接。

本文记录在 Ubuntu 上通过**星火应用商店的 APM 软件源**安装 WorkBuddy 官方 Linux 原生版的完整过程，全程不依赖 Wine。

## 方案原理

- 腾讯官方给 UOS / 麒麟商店供了 Linux 原生包（官方适配记录可在[统信生态平台](https://ecology.chinauos.com/)查到：WorkBuddy 5.4.0+，覆盖 Intel / 海光 / 兆芯 / 鲲鹏 / 飞腾）。
- 星火应用商店收录了这份**腾讯官方署名的 deb**（`workbuddy@tencent.com`），以 **AmberPM（APM）格式**封装：把应用连同 Debian trixie 容器环境打成一个 deb，所以有 410MB。
- 山东大学镜像站同步了星火的 APM 软件源，从镜像下载速度快且稳定。

包的依赖链：`workbuddy → amber-pm-trixie（容器运行时） → apm（APM 工具）`，全部可以从软件源解决。

## 安装步骤

### 1. 添加软件源

创建 `/etc/apt/sources.list.d/spark-apm.list`：

```bash
sudo tee /etc/apt/sources.list.d/spark-apm.list <<'EOF'
deb [trusted=yes by-hash=force] https://mirrors.sdu.edu.cn/spark-store/store /
deb [trusted=yes] https://mirrors.sdu.edu.cn/spark-store/apm-deb-source /
EOF
```

> [!NOTE]
> `store` 源提供 `amber-pm-trixie` 运行时，`apm-deb-source` 源提供 `apm` 工具本体，两个都要。
> `[trusted=yes]` 会跳过签名校验——这是社区源的常见做法，介意的话可以自行导入星火的公钥。

### 2. 刷新软件源索引

如果系统里恰好有签名失效的第三方源（比如某些 PPA）导致 `apt update` 整体报错，可以**只刷新刚加的源**，不受其它源干扰：

```bash
sudo apt-get update \
  -o Dir::Etc::sourcelist="sources.list.d/spark-apm.list" \
  -o Dir::Etc::sourceparts="-" \
  -o APT::Get::List-Cleanup="0"
```

验证包可见：

```bash
apt-cache policy amber-pm-trixie apm
# 应分别显示候选版本 13.9.6-bports 和 1.3.4.0
```

### 3. 安装

```bash
sudo apt-get install -y amber-pm-trixie apm workbuddy
```

或者使用本地下载的 deb 包（`workbuddy_5.5.6_amd64.deb`，约 410MB，来自[山东大学镜像站](https://mirrors.sdu.edu.cn/spark-store/amd64-apm/office/workbuddy/)）：

```bash
sudo apt-get install -y amber-pm-trixie apm ./workbuddy_5.5.6_amd64.deb
```

### 4. 启动

应用菜单搜索 **WorkBuddy**，或命令行：

```bash
apm run workbuddy
```

首次启动会进入登录引导，微信扫码即可。

## 工作原理简述

AmberPM 是星火应用商店的打包技术，基于 `fuse-overlayfs + dpkg + bwrap 容器`：

- 每个 APM 应用安装在 `/var/lib/apm/<应用名>/` 下，以 Overlay 层的方式叠在一个 Debian 13 (trixie) 基础容器之上；
- 启动时通过 bwrap 进入容器运行，应用依赖的库全部来自容器，**与宿主发行版的库版本完全隔离**，这也是它能在 Ubuntu 上稳定跑 UOS 应用的原因；
- 桌面入口（.desktop）、图标由 APM 自动注册到系统。

所以 410MB 的包体积里，除了 WorkBuddy 本体（约 150MB），还有完整的容器环境。

## 包的来源与查找方法

星火 APM 源的目录结构遵循固定规律，想自己找包或更新版本时可以按此路径浏览（以山东大学镜像为例）：

```
https://mirrors.sdu.edu.cn/spark-store/amd64-apm/
├── categories.json              # 分类清单
├── office/applist.json          # 每个分类一个应用列表
└── office/workbuddy/workbuddy_5.5.6_amd64.deb   # 包本体
```

在 `applist.json` 中搜索应用名，条目里的 `Filename` 字段拼上分类目录就是下载地址。

截至写作时，星火源里共有三个 WorkBuddy 包，按需选择：

| 包名 | 版本 | 体积 | 性质 |
|---|---|---|---|
| `workbuddy` | 5.5.6 | 410MB | **腾讯官方署名**，本文所用 |
| `cn.workbuddy.otohime` | 5.6.2 | 148MB | 社区移植（校医软件室） |
| `com.xydw.workbuddy` | 5.6.2 | 150MB | 社区重打包 |

## 卸载

```bash
sudo apt-get remove workbuddy
# 如不再需要运行时：
sudo apt-get remove amber-pm-trixie apm
sudo rm /etc/apt/sources.list.d/spark-apm.list
```

## 附：为什么不用 Wine

在走通原生方案前，实测过 Wine 运行 Windows 版（electron-builder NSIS 安装器可以在 Wine 下静默安装，`/S` 参数有效），但最终放弃，复盘如下，给后来者省时间：

1. **stdio 句柄问题**：Electron 主进程启动时读取 stderr，桌面启动器方式下 Wine 交出的句柄无效，直接抛 `Error: open EBADF` 崩溃——需要把 stdout/stderr 重定向到文件才能绕过。
2. **启动修复机制导致静默退出**：WorkBuddy 自带 `runEarlyPreflightAndMaybeBail` 启动自检，崩溃一次后会将状态标记为异常，后续启动走"静默恢复"分支——不创建窗口、只在 Wine 托盘留图标，而 GNOME 50 根本不显示 Wine 的 XEmbed 托盘图标，用户表现为"点了没反应"。
3. **主进程必崩**：即使解决前两条，应用也会在窗口首次绘制后数秒内因 Chromium CHECK 失败（int3）自杀，退出码 3，崩溃点在其凭据保护 / 守护进程握手相关的原生代码路径，crashpad 在 Wine 下也无法生成转储。全新状态能撑得久一些，一旦状态落盘，第二次启动必死。

结论：WorkBuddy 对系统集成的依赖太深（凭据保护、命名管道守护进程、IM Hook），Wine 兼容层补不齐，原生容器方案才是正路。

## 参考链接

- [WorkBuddy 双系统会话同步教程](./workbuddy-session-sync.md) —— 装完之后，把 Windows 那边的会话也接进来
- [WorkBuddy 官网](https://www.workbuddy.cn/)
- [星火应用商店](https://spark-app.store/) / [AmberPM 项目](https://gitee.com/amber-ce/amber-pm)
- [山东大学镜像站 - 星火 APM 源](https://mirrors.sdu.edu.cn/spark-store/amd64-apm/)
- [统信生态适配平台](https://ecology.chinauos.com/)（查询官方 UOS 适配记录）
