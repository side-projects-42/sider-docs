---
id: querly
title: Querly
sidebar_label: Querly
---

# Querly

| Supported Version       | Language | Website                           |
| ----------------------- | -------- | --------------------------------- |
| 0.5.0+ (default: 1.3.0) | Ruby     | https://github.com/soutaro/querly |

**Querly** is a customizable and pattern-based analysis tool for Ruby.
You can easily write your own rule for your project via the YAML configuration file.

## Getting Started

To start using Querly, enable it in your [repository settings](../../getting-started/repository-settings.md),
and put a `querly.yml` config in your repository's root directory.

Visit the Querly project page for more information about writing rules:

- [Configuration](https://github.com/soutaro/querly/blob/HEAD/manual/configuration.md)
- [Examples](https://github.com/soutaro/querly/blob/HEAD/manual/examples.md)
- [Patterns](https://github.com/soutaro/querly/blob/HEAD/manual/patterns.md)

<div className="Video">
  <iframe src="https://www.youtube.com/embed/WtHmNuWJzPA" frameBorder="0" allowFullScreen></iframe>
</div>

## Configuration

Here is an example configuration via `sider.yml`:

```yaml
linter:
  querly:
    dependencies:
      - slim
    config: .config/querly.yml
```

| Name                                                                                          | Type                | Default |
| --------------------------------------------------------------------------------------------- | ------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir)         | `string`            | -       |
| [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) | `string[]`, `map[]` | -       |
| [`config`](#config)                                                                           | `string`            | -       |

### `config`

This option allows you to specify a configuration file path you want to use.

## Analyzing View Templates

Querly has a mechanism called [preprocessor](https://github.com/soutaro/querly/blob/HEAD/manual/configuration.md#preprocessor) for analyzing templates which contain Ruby code.
Sider finds the following gems in `Gemfile.lock` and installs them automatically for backward compatibility:

- [Slim](https://github.com/slim-template/slim)
- [Haml](https://github.com/haml/haml)

Note that these gems are not installed automatically when the [`dependencies`](../../getting-started/custom-configuration.md#linteranalyzer_iddependencies) option is specified.
