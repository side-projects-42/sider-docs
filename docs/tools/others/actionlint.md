---
id: actionlint
title: actionlint
sidebar_label: actionlint (beta)
---

# actionlint

:::note

This is **BETA**. The behavior of this tool might change.

:::

| Supported Version | Language | Website                             |
| ----------------- | -------- | ----------------------------------- |
| 1.6.9             | Others   | https://github.com/rhysd/actionlint |

**actionlint** is a static checker for GitHub Actions workflow files.

## Getting Started

To start using actionlint, enable it in your [repository settings](../../getting-started/repository-settings.md).

## Configuration

You can customize the analysis via `sider.yml`:

```yaml
linter:
  actionlint:
    target:
      - .github/workflows/one_workflow.yml
      - .github/workflows/another_workflow.yml
    ignore:
      - "job .* needs job"
      - "unknown Webhook event"
```

| Name                                                                                  | Type                 | Default |
| ------------------------------------------------------------------------------------- | -------------------- | ------- |
| [`root_dir`](../../getting-started/custom-configuration.md#linteranalyzer_idroot_dir) | `string`             | -       |
| [`target`](#target)                                                                   | `string`, `string[]` | -       |
| [`ignore`](#ignore)                                                                   | `string`, `string[]` | -       |

### `target`

This option allows you to specify files to analyze via actionlint. Glob format is _not_ available.
If target is not specified, by default, all yaml files in the `.github/workflows/` directory of the repository root are analyzed.
If you specify multiple targets, configure as follows:

```yaml
linter:
  actionlint:
    target:
      - .github/workflows/one_workflow.yml
      - .github/workflows/another_workflow.yml
```

### `ignore`

This option allows you to ignore certain errors based on [regular expression matching](https://pkg.go.dev/regexp) of the actionlint error messages. For sample error messages, see [actionlint documentation](https://github.com/rhysd/actionlint/blob/main/docs/checks.md).

To ignore multiple error patterns, configure as follows:

```yaml
linter:
  actionlint:
    ignore:
      - "job .* needs job"
      - "unknown Webhook event"
```
