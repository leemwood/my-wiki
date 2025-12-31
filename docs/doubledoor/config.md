---
sidebar_position: 2
---

# 配置文件

Doubledoor 提供了简洁的配置选项，您可以根据服务器的需求进行调整。

## config.yml 详解

```yaml
# 是否允许不同材质的木门进行双开
# 开启后，橡木门和云杉木门放在一起也能双开
allow-different-materials: true

# 是否允许红石信号触发双开门
# 开启后，红石信号控制其中一扇门时，另一扇门也会同步
enable-redstone: false

# 是否允许潜行时双开门
# 默认为 false，即潜行右键门时只操作单扇门
allow-sneaking: false
```

## 修改配置

1. 在服务器 `plugins/Doubledoor/` 目录下找到 `config.yml`。
2. 使用文本编辑器修改数值。
3. 重启服务器或重新加载插件以生效。
