# 图标系统

GeyserMenu 支持三种类型的图标：Java 版物品 ID、基岩版材质路径和 URL 图标。

## 基础用法

### 1. Java 版物品 ID

使用 Java 版的物品 ID，插件会自动转换为对应的基岩版材质路径：

```yaml
items:
  - text: "传送菜单"
    icon: "compass"
    icon_type: "java"      # 使用 Java 版物品 ID
```

### 2. 基岩版材质路径

直接使用基岩版的材质路径：

```yaml
items:
  - text: "商店菜单"
    icon: "textures/items/diamond"
    icon_type: "bedrock"   # 使用基岩版材质路径
```

### 3. URL 图标

从网络 URL 加载图标：

```yaml
items:
  - text: "自定义按钮"
    icon: "https://example.com/icon.png"
    icon_type: "url"       # 使用 URL 图标
```

:::warning 注意
URL 图标需要在 config.yml 中启用 `icons.allow_url: true`，并且默认只允许 HTTPS 链接。
:::

## 使用资源包图标

你可以通过基岩版资源包添加自定义图标：

1. 创建资源包目录结构：
```
my_resource_pack/
├── manifest.json
├── pack_icon.png
└── textures/
    └── gui/
        └── icons/
            ├── my_icon1.png
            └── my_icon2.png
```

2. 在菜单中使用自定义图标：
```yaml
items:
  - text: "自定义按钮"
    icon: "textures/gui/icons/my_icon1"
    icon_type: "bedrock"
```

3. 将资源包应用到基岩版客户端：
   - 在基岩版客户端导入资源包
   - 或通过服务器自动分发资源包

## 图标映射配置

在 config.yml 中配置 Java 版到基岩版的材质映射：

```yaml
icons:
  # 默认图标
  default: "textures/items/paper"
  
  # 是否允许URL图标
  allow_url: true
  
  # URL图标设置
  url:
    https-only: true
    max-length: 256
    allowed-domains: []
  
  # 图标类型映射
  mappings:
    grass_block: "textures/blocks/grass_side"
    diamond: "textures/items/diamond"
    compass: "textures/items/compass_item"
```

## 内置图标映射列表

### 方块类

| Java ID | 基岩版路径 |
|---------|-----------|
| `grass_block` | textures/blocks/grass_side |
| `stone` | textures/blocks/stone |
| `dirt` | textures/blocks/dirt |
| `cobblestone` | textures/blocks/cobblestone |
| `oak_log` | textures/blocks/log_oak |
| `oak_planks` | textures/blocks/planks_oak |
| `sand` | textures/blocks/sand |
| `gravel` | textures/blocks/gravel |
| `gold_block` | textures/blocks/gold_block |
| `iron_block` | textures/blocks/iron_block |
| `diamond_block` | textures/blocks/diamond_block |
| `emerald_block` | textures/blocks/emerald_block |
| `netherite_block` | textures/blocks/netherite_block |
| `redstone_block` | textures/blocks/redstone_block |
| `lapis_block` | textures/blocks/lapis_block |
| `coal_block` | textures/blocks/coal_block |
| `quartz_block` | textures/blocks/quartz_block |
| `obsidian` | textures/blocks/obsidian |
| `glass` | textures/blocks/glass |
| `tnt` | textures/blocks/tnt_side |
| `ice` | textures/blocks/ice |
| `glowstone` | textures/blocks/glowstone |
| `netherrack` | textures/blocks/netherrack |
| `soul_sand` | textures/blocks/soul_sand |
| `end_stone` | textures/blocks/end_stone |

### 武器类

| Java ID | 基岩版路径 |
|---------|-----------|
| `diamond_sword` | textures/items/diamond_sword |
| `iron_sword` | textures/items/iron_sword |
| `stone_sword` | textures/items/stone_sword |
| `wood_sword` | textures/items/wood_sword |
| `golden_sword` | textures/items/gold_sword |
| `netherite_sword` | textures/items/netherite_sword |
| `bow` | textures/items/bow_standby |
| `crossbow` | textures/items/crossbow_standby |
| `trident` | textures/items/trident |
| `arrow` | textures/items/arrow |
| `shield` | textures/items/shield |

### 工具类

| Java ID | 基岩版路径 |
|---------|-----------|
| `diamond_pickaxe` | textures/items/diamond_pickaxe |
| `iron_pickaxe` | textures/items/iron_pickaxe |
| `stone_pickaxe` | textures/items/stone_pickaxe |
| `diamond_axe` | textures/items/diamond_axe |
| `iron_axe` | textures/items/iron_axe |
| `diamond_shovel` | textures/items/diamond_shovel |
| `iron_shovel` | textures/items/iron_shovel |
| `diamond_hoe` | textures/items/diamond_hoe |
| `fishing_rod` | textures/items/fishing_rod_uncast |
| `flint_and_steel` | textures/items/flint_and_steel |
| `compass` | textures/items/compass_item |
| `clock` | textures/items/clock_item |
| `spyglass` | textures/items/spyglass |

### 防具类

| Java ID | 基岩版路径 |
|---------|-----------|
| `diamond_helmet` | textures/items/diamond_helmet |
| `diamond_chestplate` | textures/items/diamond_chestplate |
| `diamond_leggings` | textures/items/diamond_leggings |
| `diamond_boots` | textures/items/diamond_boots |
| `iron_helmet` | textures/items/iron_helmet |
| `iron_chestplate` | textures/items/iron_chestplate |
| `golden_helmet` | textures/items/gold_helmet |
| `netherite_helmet` | textures/items/netherite_helmet |
| `turtle_helmet` | textures/items/turtle_helmet |
| `elytra` | textures/items/elytra |

### 食物类

| Java ID | 基岩版路径 |
|---------|-----------|
| `apple` | textures/items/apple |
| `golden_apple` | textures/items/apple_golden |
| `bread` | textures/items/bread |
| `cooked_beef` | textures/items/beef_cooked |
| `cooked_porkchop` | textures/items/porkchop_cooked |
| `cooked_chicken` | textures/items/chicken_cooked |
| `cooked_cod` | textures/items/fish_cooked |
| `carrot` | textures/items/carrot |
| `golden_carrot` | textures/items/carrot_golden |
| `potato` | textures/items/potato |
| `baked_potato` | textures/items/potato_baked |
| `cookie` | textures/items/cookie |
| `cake` | textures/items/cake |
| `pumpkin_pie` | textures/items/pumpkin_pie |

### 矿物类

| Java ID | 基岩版路径 |
|---------|-----------|
| `diamond` | textures/items/diamond |
| `emerald` | textures/items/emerald |
| `gold_ingot` | textures/items/gold_ingot |
| `iron_ingot` | textures/items/iron_ingot |
| `copper_ingot` | textures/items/copper_ingot |
| `netherite_ingot` | textures/items/netherite_ingot |
| `coal` | textures/items/coal |
| `charcoal` | textures/items/charcoal |
| `redstone` | textures/items/redstone_dust |
| `quartz` | textures/items/quartz |
| `amethyst_shard` | textures/items/amethyst_shard |

### 特殊物品类

| Java ID | 基岩版路径 |
|---------|-----------|
| `nether_star` | textures/items/nether_star |
| `beacon` | textures/items/beacon |
| `ender_pearl` | textures/items/ender_pearl |
| `ender_eye` | textures/items/ender_eye |
| `blaze_rod` | textures/items/blaze_rod |
| `ghast_tear` | textures/items/ghast_tear |
| `slime_ball` | textures/items/slimeball |
| `enchanted_book` | textures/items/book_enchanted |
| `book` | textures/items/book_normal |
| `name_tag` | textures/items/name_tag |
| `saddle` | textures/items/saddle |
| `lead` | textures/items/lead |
| `bone` | textures/items/bone |
| `string` | textures/items/string |
| `feather` | textures/items/feather |
| `gunpowder` | textures/items/gunpowder |
| `leather` | textures/items/leather |

### 药水类

| Java ID | 基岩版路径 |
|---------|-----------|
| `potion` | textures/items/potion_bottle_drinkable |
| `splash_potion` | textures/items/potion_bottle_splash |
| `lingering_potion` | textures/items/potion_bottle_lingering |
| `experience_bottle` | textures/items/bottle_o_enchanting |
| `glass_bottle` | textures/items/glass_bottle |

### 红石类

| Java ID | 基岩版路径 |
|---------|-----------|
| `redstone_torch` | textures/blocks/redstone_torch_on |
| `lever` | textures/blocks/lever |
| `stone_button` | textures/blocks/stone_button |
| `repeater` | textures/items/repeater |
| `comparator` | textures/items/comparator |
| `observer` | textures/blocks/observer_front |
| `hopper` | textures/blocks/hopper_front |
| `dropper` | textures/blocks/dropper_front_horizontal |
| `dispenser` | textures/blocks/dispenser_front_horizontal |
| `piston` | textures/blocks/piston_side |
| `sticky_piston` | textures/blocks/piston_side_sticky |

### 装饰类

| Java ID | 基岩版路径 |
|---------|-----------|
| `chest` | textures/blocks/chest_front |
| `trapped_chest` | textures/blocks/chest_trapped_front |
| `barrel` | textures/blocks/barrel_side |
| `shulker_box` | textures/blocks/shulker_box_top |
| `crafting_table` | textures/blocks/crafting_table_top |
| `furnace` | textures/blocks/furnace_front_on |
| `blast_furnace` | textures/blocks/blast_furnace_front_on |
| `smoker` | textures/blocks/smoker_front_on |
| `anvil` | textures/blocks/anvil_base |
| `grindstone` | textures/blocks/grindstone_side |
| `stonecutter` | textures/blocks/stonecutter_top |
| `loom` | textures/blocks/loom_top |
| `smithing_table` | textures/blocks/smithing_table_top |
| `lectern` | textures/blocks/lectern_top |
| `bell` | textures/blocks/bell_side |
| `lantern` | textures/blocks/lantern |
| `campfire` | textures/blocks/campfire_log |

### 交通工具类

| Java ID | 基岩版路径 |
|---------|-----------|
| `minecart` | textures/items/minecart_normal |
| `chest_minecart` | textures/items/minecart_chest |
| `furnace_minecart` | textures/items/minecart_furnace |
| `rail` | textures/blocks/rail_normal |
| `powered_rail` | textures/blocks/rail_golden |
| `detector_rail` | textures/blocks/rail_detector |
| `boat` | textures/items/boat_oak |
| `oak_boat` | textures/items/boat_oak |

### 染料类

| Java ID | 基岩版路径 |
|---------|-----------|
| `white_dye` | textures/items/dye_powder_white |
| `orange_dye` | textures/items/dye_powder_orange |
| `magenta_dye` | textures/items/dye_powder_magenta |
| `light_blue_dye` | textures/items/dye_powder_light_blue |
| `yellow_dye` | textures/items/dye_powder_yellow |
| `lime_dye` | textures/items/dye_powder_lime |
| `pink_dye` | textures/items/dye_powder_pink |
| `gray_dye` | textures/items/dye_powder_gray |
| `cyan_dye` | textures/items/dye_powder_cyan |
| `purple_dye` | textures/items/dye_powder_purple |
| `blue_dye` | textures/items/dye_powder_blue |
| `brown_dye` | textures/items/dye_powder_brown |
| `green_dye` | textures/items/dye_powder_green |
| `red_dye` | textures/items/dye_powder_red |
| `black_dye` | textures/items/dye_powder_black |

## 最佳实践

1. 使用资源包时：
   - 图片尺寸建议为 32x32 或 64x64
   - 使用 PNG 格式，支持透明度
   - 文件名使用小写字母和下划线
   - 路径使用 `textures/gui/icons/` 前缀

2. 选择图标类型：
   - 如果使用 Java 版物品，选择 `icon_type: "java"`
   - 如果使用自定义图标，选择 `icon_type: "bedrock"`
   - 如果使用网络图标，选择 `icon_type: "url"`

3. URL 图标注意事项：
   - 确保使用 HTTPS 协议
   - 图片大小不宜过大
   - 考虑使用 CDN 加速加载

:::tip 提示
- 自定义图标必须通过基岩版资源包加载
- 资源包可以在服务器或客户端加载
- 图标路径区分大小写
- 可以在 config.yml 中添加自定义映射
:::

:::warning 注意
- 如果图标路径无效，将使用默认图标
- 资源包需要符合基岩版的格式要求
- 建议测试所有图标是否正常显示
- URL 图标需要网络连接才能显示
:::
