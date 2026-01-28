---
sidebar_position: 1
title: Project Overview
---

# FCL to ZL2 Control Converter

A modern web application designed to solve the configuration incompatibility between Minecraft launchers **Fold Craft Launcher (FCL)** and **ZalithLauncher 2 (ZL2)**.

## 🌐 Online Access

You can access the converter directly online:
- **URL**: [https://ftzc.lemwood.cn/](https://ftzc.lemwood.cn/)

## 📖 Background

FCL and ZL2 use completely different control definition protocols:
- **FCL**: Uses numeric keycodes and a per-thousand coordinate system.
- **ZL2**: Uses GLFW keycodes, a per-ten-thousand coordinate system, and special \"Compose Color\" values.

Manually converting these complex JSON configurations is time-consuming and prone to errors that cause game crashes. This tool provides an automated, type-safe conversion process.

## ✨ Key Features

- ✅ **Automatic Conversion**: Complete migration of buttons, direction pads, styles, and event systems.
- ⌨️ **Smart Key Mapping**: Handles 50+ common keys (letters, numbers, function keys, mouse buttons).
- 📍 **Precise Coordinate Scaling**: Automatically scales coordinates from 1:1000 to 1:10000, with **v1.0.4 Enhanced Safety Checks** to prevent crashes from negative coordinates.
- 🎨 **Safe Colors & Styles**: Uses verified safe color values and automatically clamps style parameters (font size, border width, etc.) to official limits.
- 🛡️ **Smart Robustness (v1.0.5)**: 
  - **Auto-Format Inference**: Automatically identifies pasted JSON formats and suggests switching modes if incorrect.
  - **Third-party Format Recognition**: Recognizes common non-standard formats like PojavLauncher/Board and provides friendly feedback.
  - **Null-Safety**: Deeply optimized reverse conversion logic with automatic null-safety for missing fields, ensuring safe conversion of incomplete configurations.
- 🕹️ **Interaction Logic Simulation**: Uses **Swipple (Sliding Linkage)** to enhance D-pad smoothness and supports **Deep Touch Detection** for touch event distribution.
- 🚀 **Modern UI**: Built with Vue 3 + Tailwind CSS, featuring real-time preview and one-click copy/download.

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript (Type-safe)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn-vue
- **Architecture**: Modular conversion engine

## Quick Navigation

- [📖 User Guide](user-guide.md)
