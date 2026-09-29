---
sidebar_position: 2
title: WorkBuddy 双系统会话同步教程（Windows ⇄ Linux）
---

# WorkBuddy 双系统会话同步教程

同一台笔记本上装了 Windows 和 Debian，两边都跑 WorkBuddy。问题是**会话是各记各的**：Windows 上的对话在 `C:\Users\<用户>\.workbuddy\projects\`，Linux 上的在 `~/.workbuddy/projects/`，互相看不见。

本文记录把它俩打通的过程：**Linux 启动时把 Windows 系统盘只读挂上，直接读它的会话目录**，归档成 Markdown 供 AI 读上下文。不需要网络，也不需要 Windows 那边配合。

## 为什么不用 WorkBuddy 自带的同步

WorkBuddy 内置了一个 `edge-sync` 扩展（端云一体同步），但它的方向是单向的：

- 本地 → 云端：把本地会话事件推上去；
- 云端 → 本地：只下发 `session.create` / `session.stop` / `prompt.submit` / `session.set_*` 这几类指令。

**没有**把云端会话导回本地会话列表的口子。所以"换台机器接着看历史对话"这件事，靠内置同步走不通，只能自己搬文件。

## 先搞清楚盘符对照

双系统是同一块物理盘，两边各有一套"名字"，不先对上号就会觉得"目录怎么对不上"：

| Windows | Linux 挂载点 | 分区 | 用途 |
| --- | --- | --- | --- |
| `C:` | `/mnt/win-c`（图形界面点是 `/run/media/lemwood/AAC49639C4960829`） | `sda3` | Windows 系统盘，**会话数据在这里** |
| `D:` | `/run/media/lemwood/data` | `sda5` | 主要放 Windows 程序目录 |
| `E:` | `/run/media/lemwood/project` | `sda6` | 两系统共用的数据盘 |

于是 Windows 上的工作目录 `E:\logshare-app-source\logshare-app`，在 Linux 上就是 `/run/media/lemwood/project/logshare-app-source/logshare-app` —— 同一份东西。

:::warning 注意
两边 `.workbuddy` 里给同一个工程起的目录名不一样：

- Windows：`e-logshare-app-source-logshare-app`
- Linux：`run-media-lemwood-project-logshare-app-source-logshare-app`

这是 WorkBuddy 按工作目录路径生成的 slug，不是同步出错。归档里的「工程对照」表会把两边成对列出。
:::

## 一次性配置

### 最省事：文件管理器点一下

在文件管理器左侧栏点一下 Windows 那个盘（268G 那个），它会被挂到 `/run/media/lemwood/<卷>`，之后直接同步即可。缺点是**重启就没了**，下次开机得再点一次。

### 一劳永逸：只读挂载写进 fstab

```bash
sudo bash ~/WorkBuddy/Claw/scripts/setup-win-mount.sh
```

脚本会：

1. 在所有 NTFS 分区里找哪块是 Windows 系统盘（认它下面有没有 `Users` 目录）；
2. 往 `/etc/fstab` 追加一条**只读**挂载项（带 `nofail`，挂不上也不会拦住开机，改前备份 fstab）；
3. 立刻挂到 `/mnt/win-c` 并列出找到的 Windows 用户目录。

之后每次开机 `/mnt/win-c` 都在，同步脚本直接读 `/mnt/win-c/Users/*/.workbuddy`（配置里就是通配符写的，用户名变了也不用改）。

:::tip 为什么强制只读
Windows 开着快速启动时，NTFS 处于"脏"状态（休眠缓存没落盘）。只读读数据没问题；一旦可写就有把 Windows 文件系统搞坏的风险。同步只需要读，不需要写。
:::

## 日常同步

```bash
# 沙箱 / 终端里跑（沙箱看不到 /run/media，要加 /host 前缀）
WIN_SYNC_PATH_PREFIX=/host python3 ~/WorkBuddy/Claw/scripts/win-session-sync.py

# 先看看会拉什么
WIN_SYNC_PATH_PREFIX=/host python3 ~/WorkBuddy/Claw/scripts/win-session-sync.py --dry-run
```

脚本是纯标准库的，只读远端、只写归档目录。已有开机自启（`~/.config/autostart/workbuddy-win-sync.desktop`，登录后延迟 15 秒跑一次），正常情况下不用手动敲。

| 参数 | 作用 |
| --- | --- |
| `--dry-run` | 只列出将要拉取的文件，不落盘 |
| `--config <路径>` | 指定配置文件 |
| `--no-rewrite` | 不给已有转写补写工程路径 |
| `--quiet` | 不打印日志（自启用的就是这个） |

## 产物长什么样

```
~/WorkBuddy/Claw/synced/windows-sessions/
├── INDEX.md          # 总索引：盘符映射 + 工程对照表 + 会话清单
├── projects/         # 远端 .workbuddy/projects 的原样镜像（目录名保持 Windows 那套）
├── transcripts/      # 由 jsonl 转的 Markdown，头部标了「工程：Windows 路径 → Linux 路径」
└── extra/            # workbuddy.db 快照（含 -wal/-shm），用来取标题和 cwd
```

`INDEX.md` 里的「工程对照」表大致长这样：

| 状态 | Windows 工作目录 | Linux 对应目录 | 本机工程目录名 | 会话 |
| --- | --- | --- | --- | --- |
| ✅ 已挂载 | `E:\logshare-app-source\logshare-app` | `/run/media/lemwood/project/logshare-app-source/logshare-app` | `run-media-lemwood-project-logshare-app-source-logshare-app` | 2 |
| ⚠️ 未挂载 | `C:\Users\Administrator\WorkBuddy\Claw` | `/mnt/win-c/Users/Administrator/WorkBuddy/Claw` | …… | 2 |

✅ 表示那个盘现在挂着、随时能读；⚠️ 表示盘还没挂，挂上就能读。

`projects/` 下的目录名**故意保持 Windows 原样**：一一镜像，增量比对才能一处对应一处、不会重复拉。要看 Linux 对应哪个目录，看对照表那一列。

## 关键配置

配置文件在 `~/.workbuddy/win-sync/config.json`：

```json
{
  "enabled": true,
  "remoteRoot": "projects",
  "archiveDir": "~/WorkBuddy/Claw/synced/windows-sessions",
  "stateFile": "~/.workbuddy/win-sync/state.json",
  "driveMap": {
    "C:": ["/mnt/win-c", "/run/media/lemwood/AAC49639C4960829"],
    "D:": "/run/media/lemwood/data",
    "E:": "/run/media/lemwood/project"
  },
  "extraFiles": ["workbuddy.db", "workbuddy.db-wal", "workbuddy.db-shm"],
  "sources": [
    {"name": "Windows C 盘 · 图形界面挂载", "type": "dir", "enabled": true, "path": "/run/media/lemwood/*/Users/*/.workbuddy"},
    {"name": "Windows C 盘 · 固定挂载点",   "type": "dir", "enabled": true, "path": "/mnt/win-c/Users/*/.workbuddy"},
    {"name": "落地区 · 手动拷贝/网盘",       "type": "dir", "enabled": true, "path": "~/WorkBuddy/Claw/win-drop"}
  ]
}
```

- `driveMap`：Windows 盘符 → 本机挂载点，值可以写数组，脚本优先用**当前已挂载**的那个。它决定索引里「工程对照」怎么翻译。
- `sources`：可以同时开多条，`path` 支持 `*` 通配、`~` 和 `$VAR`，同名文件按源分别记录，不会互相覆盖。
- `extraFiles`：抓 `workbuddy.db` 快照只为取会话标题和工作目录（读的时候先复制到临时目录，归档原件不会被 SQLite 改动）。
- 环境变量 `WIN_SYNC_PATH_PREFIX`：给所有 `dir` 源路径加前缀。沙箱里看不到 `/run/media`，所以要设成 `/host`；登录自启时留空。

## 排错

**提示"路径没匹配到任何目录"** —— 盘没挂。按上面「一次性配置」处理。

**提示认不出系统盘** —— 多半是 **BitLocker 加密**了，Linux 没密钥读不了。退回落地区方案：Windows 上把 `%USERPROFILE%\.workbuddy\projects` 拷到 E: 盘，Linux 这边从 `/run/media/lemwood/project/...` 收。

**挂载时提示降级为只读** —— 这是正常现象（NTFS 脏分区），不是出错。

**每次都重复拉 `workbuddy.db-wal`** —— 老版本的毛病：读标题时 SQLite 会把归档副本里的 wal 合并删掉，导致下次又判定"变了"。现版本改为复制到临时目录再读，已修。

## 备选通道

**落地区**：Windows 上把 `%USERPROFILE%\.workbuddy\projects` 拷到本机 `~/WorkBuddy/Claw/win-drop/`，保持 `win-drop/projects/<工程目录>/<会话>.jsonl` 结构即可，脚本每次只拉变化过的文件。

**公网 HTTP（frp 中转）**：Linux 没开机、想远程拉的时候，Windows 侧起静态服务再用 frpc 暴露出去。⚠️ 一旦暴露就是公网可访问，里面是全部会话内容，务必换强 token 或改用 `stcp`/`xtcp` 只允许自己连。

## 有意没做的事

- **没把同步来的会话写进 WorkBuddy 的会话列表** —— 那要改它自己的数据库和索引，版本一升就废。归档在 `synced/windows-sessions/`，带 `INDEX.md`，AI 读上下文毫无障碍。
- **没做双向同步** —— Windows 那边只会被拉过来，不会因为 Linux 而改变。
- **没在 Linux 侧写 Windows 分区** —— 挂载是 ro 的，物理上也做不到。

## 相关

- 脚本与详细说明：`~/WorkBuddy/Claw/scripts/README-win-sync.md`
- [WorkBuddy Linux 安装教程](./workbuddy-linux-install.md)
