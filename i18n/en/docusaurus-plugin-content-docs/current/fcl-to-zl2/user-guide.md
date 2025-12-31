---
sidebar_position: 3
title: User Guide
---

# User Guide

This guide will show you how to use the converter to migrate your FCL control configurations to ZL2.

## Conversion Workflow

### 1. Prepare FCL Configuration
Export or open your control configuration file (usually a JSON file) in the FCL launcher. Copy its entire content.

### 2. Paste and Convert
1. Open the converter web page.
2. Paste the copied content into the **FCL Input Area** on the left.
3. Click the **"Start Conversion"** button in the center or bottom of the page.

### 3. Get the Results
1. Once converted, the **ZL2 Output Area** on the right will display the converted JSON.
2. You can click **"Copy to Clipboard"** to use it immediately, or click **"Download File"** to save it.

## Core Conversion Rules (v1.0.4 Update)

### Coordinate & Size Safety
- **Scaling**: FCL (`0-1000`) is automatically converted to ZL2 (`0-10000`).
- **Coordinate Clamping**: All coordinates are forced within the `0-10000` range to prevent ZL2 rendering issues caused by negative values.
- **Minimum Limits**: 
  - Minimum percentage size: `500` (5%)
  - Minimum DP size: `5dp`
  - *Note: If the original size is too small, it will be automatically increased to these limits to ensure controls are visible.*

### Style Constraints
To ensure the configuration file complies with official ZL2 specifications, the converter automatically applies the following limits:
- **Font Size**: `2 - 30`
- **Border Width**: `0 - 50`
- **Alpha**: `0.0 - 1.0`

### Interaction Logic
- **Swipple (Sliding Linkage)**: Converted D-pads have `isSwipple` enabled by default, allowing for smooth triggers across multiple buttons, simulating a joystick feel.
- **Deep Touch Detection**: Accurately maps FCL's `pointerFollow` property to ZL2's `isPenetrable`, ensuring touch events are distributed correctly based on z-index.
- **Toggle Mode**: FCL's `autoKeep` property maps to ZL2's `isToggleable`.

### D-Pad Handling
ZL2 does not natively support FCL-style integrated D-Pads. The converter breaks it down into 8 buttons (Up, Down, Left, Right, and four diagonal keys), arranged as follows:
```text
◤  ▲  ◥
◀  ○  ▶
◣  ▼  ◢
```

### Safe Color Mechanism
To prevent ZL2 from crashing due to non-standard color values, the converter defaults to the following safe colors:
- **Background**: Semi-transparent black
- **Border/Text**: White/Gray

## Reverse Conversion (ZL2 → FCL) Robustness (v1.0.5)

In version **v1.0.5**, we have significantly improved the stability of the reverse converter:
- **Null-Safety**: Automatically handles missing `layers`, `styles`, or `clickEvents` fields in ZL2 configurations, preventing crashes on incomplete files.
- **Style Auto-completion**: If a ZL2 button references a non-existent style UUID, the converter generates a "Default Style" to ensure FCL can load correctly.
- **Safe Event Parsing**: Safely ignores undefined custom event types in ZL2, ensuring core keybinding migration.

## FAQ

- **Q: Receiving a "JSON Format Error" after pasting?**
  - A: Ensure you pasted the complete JSON content and that there are no extra characters.
- **Q: Control positions are wrong after importing to ZL2?**
  - A: The converter scales coordinates proportionally. If the screen aspect ratio is different, you might need to make minor adjustments in the ZL2 editor.
- **Q: Some styles are lost during reverse conversion?**
  - A: The converter tries its best to restore styles. If a style is undefined or the reference is broken in ZL2, it will fallback to system defaults.
