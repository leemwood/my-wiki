---
sidebar_position: 2
title: Initial Prompt Words
---
Here we provide guidance on how to write initial prompt words.

## Format
There are no strict regulations; let AI understand your ideas.

## Example
```txt
Chinese name world alias variables
English name world alias variables
Abbreviation & command scv
Package name cn.ningmo
API: bukkit 1.21
Description: Set any alias for your world and apply it elsewhere in placeholder form.
Function: Call world name to generate world alias placeholder named %wav% and apply it elsewhere.
World alias supports any string and color codes.
Configuration file
#-------------------
#     +wav config file+
#     Author:柠枺
#-------------------
#Tips
#Variable placeholder is %wav_<world>%
#Whether to enable debug logs
debug: false
#Applied worlds
world:
 - world
 - world_end
 - etc...

#World alias
world_alias_variables:
 world: "&aMain World"
 world_end: "&sEnd "
 etc...
```

:::::info Tips
Prompt words don't need to include configuration file content; let AI understand your ideas.
For blank projects (meaning no files in the project directory), you need to provide package name and project name.
::::warning Attention
If you have already created a blank project through IDEA's Minecraft plugin, be sure to tell AI your project name and package name!
:::info Tips
If you provide the main class in the chat context, then package name and project name are not necessary.
:::::

## Practical Example (Cursor's Claude3.5 as demonstration)
First create a blank project, open it through cursor, then ctrl+i to open cursor's AI dialog box, switch to claude3.5, change the mode to edit mode, and enter the following content:
![Enter prompt words](/img/promptwords/promptwords.png)
Press Enter to confirm and wait for AI to complete the task.
![Task completed](/img/promptwords/image.png)
Click the accept all button to accept all changes from AI. So far, your project has been initialized.

:::danger Attention
Don't give AI excessive functional tasks or very difficult functional tasks at one time, otherwise what AI writes won't match your ideas.
:::