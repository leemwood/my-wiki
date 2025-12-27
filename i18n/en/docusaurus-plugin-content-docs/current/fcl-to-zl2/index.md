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
- **ZL2**: Uses GLFW keycodes, a per-ten-thousand coordinate system, and special "Compose Color" values.

Manually converting these complex JSON configurations is time-consuming and prone to errors that cause game crashes. This tool provides an automated, type-safe conversion process.

## ✨ Key Features

- ✅ **Automatic Conversion**: Complete migration of buttons, direction pads, styles, and event systems.
- ⌨️ **Smart Key Mapping**: Handles 50+ common keys (letters, numbers, function keys, mouse buttons).
- 📍 **Precise Coordinate Scaling**: Automatically scales coordinates from 1:1000 to 1:10000, ensuring UI layout consistency.
- 🎨 **Safe Color Handling**: Uses verified safe color values to prevent ZL2 import crashes.
- 🕹️ **D-Pad Optimization**: Intelligently converts FCL direction pad controls into ZL2 8-way independent button groups.
- 🚀 **Modern UI**: Built with Vue 3 + Tailwind CSS, featuring real-time preview and one-click copy/download.

## 🛠️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript (Type-safe)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn-vue
- **Architecture**: Modular conversion engine

## Quick Navigation

- [📖 User Guide](user-guide.md)
