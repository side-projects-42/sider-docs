---
id: rubocop
title: RuboCop
sidebar_label: RuboCop
---

# RuboCop

| Supported Version         | Language | Website             |
| ------------------------- | -------- | ------------------- |
| 0.61.0+ (default: 1.27.0) | Ruby     | https://rubocop.org |

**RuboCop** is a pluggable static code analyzer and code formatter for Ruby.
It has been community-driven developed and has many rules and plugins including third-party's ones.

## Getting Started

To start using RuboCop, enable it in your [repository settings](../../getting-started/repository-settings.md).

If you want to customize RuboCop, run the following command in your project' root directory:

```console
$ rubocop --init
```

See also the [user guide](https://docs.rubocop.org/rubocop/usage/basic_usage) for details.

## Default Configuration for RuboCop

If a `.rubocop.yml` file does not exist in your repository,
Sider uses our [recommended ruleset](https://github.com/sider/runners/blob/HEAD/images/rubocop/sider_recommended_rubocop.yml) for RuboCop.
For more details, please visit [Recommended Ruleset](../../getting-started/recommended-rules.md).

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  rubocop:
    config: config/.rubocop.yml
    safe: true
```

You can use the following options to make analysis fitter for your project.

| Name                                                                                          | Type                | Default |
| --------------------------------------------------------------------------------------------- | ------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`            | -       |
| [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) | `string[]`, `map[]` | -       |
| [`config`](#config)                                                                           | `string`            | -       |
| [`safe`](#safe)                                                                               | `boolean`           | `false` |

### `config`

This option allows you to specify your configuration file. If omitted, the RuboCop default configuration is used.

### `safe`

This option allows you to select whether running only [safe cops](https://docs.rubocop.org/rubocop/usage/auto_correct#safe-auto-correct) or not.
If confirming whether a cop is _safe_ or not, see the [cops' document](https://docs.rubocop.org/rubocop/cops).

### `rails`

:::caution

The option is ignored when using the version `0.72.0` or later, and will be removed in the future.
Use [`rubocop-rails`](https://github.com/rubocop/rubocop-rails) instead.

:::

This option allows you to select whether using Rails cops or not. If omitted, Sider automatically determines it.
