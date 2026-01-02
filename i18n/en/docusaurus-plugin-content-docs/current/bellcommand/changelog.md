# Changelog

## v1.4.0-beta.3 (2026-01-03)

### Internationalization Refactoring
- **Deep Cleanup of Hardcoding**: Removed all hardcoded Chinese prompt strings from the code, unified access via `LanguageManager`.
- **Enhanced Robustness**: Added localization keys for various edge cases such as update source initialization failure, configuration backup exceptions, file monitoring thread errors, and language file loading failures.
- **Self-Healing Prompt Mechanism**: Optimized the Fallback logic of `LanguageManager`. Even if the external language file is missing or corrupted, clear error guidance can be provided through built-in resources.

## v1.4.0-beta.2 (2026-01-02)

### Core Fixes and Optimizations
- **Bedrock Click Fallback**: Added a fallback mechanism for Bedrock click events. If `bedrock-*` clicks are not defined, it will automatically try to use the corresponding non-Bedrock click configuration, greatly simplifying cross-platform configuration.
- **Version Comparison Algorithm Optimization**: Enhanced the robustness of the version check system for parsing non-pure numeric version numbers (e.g., `v1.4.0-beta.2`).
- **CI/CD Enhancement**: Completed the supported version list for Modrinth release, including all official versions from 1.13 to 1.21.1.

### Command System Enhancement
- **Tab Completion**: Added full parameter completion support for the main command `/bc`.
- **High Privilege Execution**: Item commands support `as-op: true` mode, allowing player commands to be executed with administrator privileges.
- **New Placeholders**: Added support for `%world%`, `%x%`, `%y%`, `%z%` coordinate placeholders.

## v1.4.0-beta.1 (2025-12-28)

### Core Features
- **Modular Configuration Refactoring**: Introduced `Default_config/` mechanism, supporting independent configuration of items in multiple files.
- **Real-time Configuration Reloading**: Based on Java `WatchService`, modifications to configuration take effect immediately without manual reload commands.
- **Security and Thread Locks**: Introduced `ReentrantReadWriteLock` to ensure safe configuration reading in asynchronous tasks.
- **Automatic Migration System**: Supports automatic migration of `commands.yml` from 1.3.x and earlier versions to the new architecture.

### Item System Upgrade
- **Consumable Item Modes**:
  - `COUNT`: Fixed consumption.
  - `PROBABILITY`: Probability trigger.
  - `RANGE`: Range random consumption.
  - `PROBABILITY_RANGE`: Probability trigger + range random.
- **Fine-grained Control**: Auto-give (`auto-give`) and auto-cleanup (`auto-cleanup`) now support independent configuration per item.

### Updates and Internationalization
- **Multi-source Update Checking**: Supports GitHub, Gitee, and custom API interfaces.
- **Multilingual Framework**: Improved the basic architecture of `LanguageManager`.
