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

## Core Conversion Rules

### Coordinate Conversion
FCL uses a range of `0-1000`, while ZL2 uses `0-10000`. The converter automatically multiplies all coordinates by 10.

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

## FAQ

- **Q: Receiving a "JSON Format Error" after pasting?**
  - A: Ensure you pasted the complete JSON content and that there are no extra characters.
- **Q: Control positions are wrong after importing to ZL2?**
  - A: The converter scales coordinates proportionally. If the screen aspect ratio is different, you might need to make minor adjustments in the ZL2 editor.
