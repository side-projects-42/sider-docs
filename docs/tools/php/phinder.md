---
id: phinder
title: Phinder
sidebar_label: Phinder
---

# Phinder

| Supported Version | Language | Website                          |
| ----------------- | -------- | -------------------------------- |
| 0.9.4             | PHP      | https://github.com/sider/phinder |

**Phinder** is a static analysis tool that aims to make your custom rules via your YAML file.

## Getting Started

To start using Phinder, enable it in your [repository settings](../../getting-started/repository-settings.md) and put a `phinder.yml` config file in your repository.
Visit the project page on GitHub to see a [sample `phinder.yml`](https://github.com/sider/phinder/blob/HEAD/sample/phinder.yml):

<div className="Video">
  <iframe src="https://www.youtube.com/embed/ErHtinxR3ns" frameBorder="0" allowFullScreen></iframe>
</div>

## Configuration

Here's a sample Phinder configuration in `sider.yml`:

```yaml
linter:
  phinder:
    rule: config/phinder.yml
    target: src
```

| Name                                                                                  | Type     | Default |
| ------------------------------------------------------------------------------------- | -------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string` | -       |
| [`rule`](#rule)                                                                       | `string` | -       |
| [`target`](#target)                                                                   | `string` | -       |

### `rule`

This option allows you to specify a file or directory where your Phinder ruleset is located.
If you set a file, Phinder will use the file as a configuration instead of `phinder.yml`.
If a directory, Phinder will use all the `.yml` files under the directory as a configuration.

```yaml
linter:
  phinder:
    rule: rules # Phinder will use './rules/*.yml' when analyzing.
```

### `target`

This option allows you to specify a path to your project to analyze.
If it is a file, Phinder will analyze merely the file.
If a directory, Phinder will analyze all the `.php` files under the directory.

```yaml
linter:
  phinder:
    target: src # Phinder will analyze '.php' files in '/src' directory.
```

_alias:_ `php`
