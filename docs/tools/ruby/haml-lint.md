---
id: haml-lint
title: HAML-Lint
sidebar_label: HAML-Lint
---

# HAML-Lint

| Version                   | Language    | Website                          |
| ------------------------- | ----------- | -------------------------------- |
| 0.26.0+ (default: 0.40.0) | HAML (Ruby) | https://github.com/sds/haml-lint |

**HAML-Lint** is a static analysis tool to help keep your [HAML](https://haml.info) files clean and readable.
In addition to HAML-specific style and lint checks, it can check them by integrated RuboCop rules.

## Getting Started

To start using HAML-Lint, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Default Configuration

You can configure HAML-Lint via a file named `.haml-lint.yml`.
But, if this file does not exist in your repository, Sider uses the [default configuration](https://github.com/sider/runners/blob/HEAD/images/haml_lint/sider_recommended_haml_lint.yml) instead.

Similarly, if a `.rubocop.yml` file does not exist, Sider uses the [default configuration for RuboCop](rubocop.md#default-configuration-for-rubocop).

See also the [HAML-Lint configuration](https://github.com/sds/haml-lint#configuration) for details.

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  haml_lint:
    target: src
    include_linter:
      - EmptyScript
      - LineLength
      - MultilinePipe
    exclude_linter:
      - TagName
    config: my-haml-lint.yml
    exclude:
      - app/views/layouts/application.html.haml
    parallel: true
```

You can use several options to fine-tune HAML-Lint to your project.

| Name                                                                                          | Type                 | Default |
| --------------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`             | -       |
| [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) | `string[]`, `map[]`  | -       |
| [`target`](#target)                                                                           | `string`, `string[]` | `.`     |
| [`include_linter`](#include_linter)                                                           | `string`, `string[]` | -       |
| [`exclude_linter`](#exclude_linter)                                                           | `string`, `string[]` | -       |
| [`config`](#config)                                                                           | `string`             | -       |
| [`exclude`](#exclude)                                                                         | `string`, `string[]` | -       |
| [`parallel`](#parallel)                                                                       | `boolean`            | `true`  |

### `target`

This option allows you to specify files or directories you want to analyze. Glob is also available.

### `file`

:::caution

This option is **deprecated**. Use the [`target`](#target) option instead.

:::

### `include_linter`

This option allows you to specify rule names you want to run.
See also the [`--include-linter`](https://github.com/sds/haml-lint#command-line-flags) option.

### `exclude_linter`

This option allows you to specify rule names you _don't_ want to run.
See also the [`--exclude-linter`](https://github.com/sds/haml-lint#command-line-flags) option.

### `config`

This option allows you to specify your config file path for HAML-Lint.
See also the [`--config`](https://github.com/sds/haml-lint#command-line-flags) option and ["Default Configuration"](#default-configuration).

### `exclude`

This option allows you to exclude files from being analyzed.
See also the [`--exclude`](https://github.com/sds/haml-lint#command-line-flags) option.

### `parallel`

This option allows you to run linters in parallel (since [0.36.0](https://github.com/sds/haml-lint/releases/tag/v0.36.0)).
See also the [`--parallel`](https://github.com/sds/haml-lint#command-line-flags) option.
