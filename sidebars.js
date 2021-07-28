module.exports = {
  docs: [
    "index",
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/intro-videos",
        "getting-started/setup",
        "getting-started/dashboard",
        "getting-started/repository-settings",
        "getting-started/custom-configuration",
        "getting-started/recommended-rules",
        "getting-started/working-with-issues",
        "getting-started/code-quality",
        "getting-started/permissions",
        "getting-started/skip-analyzing",
      ],
    },
    {
      type: "category",
      label: "Analysis Tools",
      items: [
        {
          type: "category",
          label: "Ruby",
          items: [
            "tools/ruby/rubocop",
            "tools/ruby/reek",
            "tools/ruby/querly",
            "tools/ruby/brakeman",
            "tools/ruby/haml-lint",
            "tools/ruby/slim-lint",
            "tools/ruby/rails-best-practices",
          ],
        },
        {
          type: "category",
          label: "Java",
          items: ["tools/java/checkstyle", "tools/java/pmd", "tools/java/javasee"],
        },
        {
          type: "category",
          label: "Kotlin",
          items: ["tools/kotlin/ktlint", "tools/kotlin/detekt"],
        },
        {
          type: "category",
          label: "JavaScript and Flavors",
          items: [
            "tools/javascript/eslint",
            "tools/javascript/jshint",
            "tools/javascript/tyscan",
            "tools/javascript/coffeelint",
          ],
        },
        {
          type: "category",
          label: "CSS",
          items: ["tools/css/stylelint", "tools/css/scss-lint"],
        },
        {
          type: "category",
          label: "PHP",
          items: ["tools/php/code-sniffer", "tools/php/phpmd", "tools/php/phinder"],
        },
        {
          type: "category",
          label: "Python",
          items: ["tools/python/flake8", "tools/python/pylint"],
        },
        {
          type: "category",
          label: "Swift",
          items: ["tools/swift/swiftlint"],
        },
        {
          type: "category",
          label: "Go",
          items: ["tools/go/golangci-lint"],
        },
        {
          type: "category",
          label: "C/C++",
          items: ["tools/cplusplus/cppcheck", "tools/cplusplus/cpplint", "tools/cplusplus/clang-tidy"],
        },
        {
          type: "category",
          label: "C#",
          items: ["tools/csharp/fxcop"],
        },
        {
          type: "category",
          label: "Shell script",
          items: ["tools/shellscript/shellcheck"],
        },
        {
          type: "category",
          label: "Dockerfile",
          items: ["tools/dockerfile/hadolint"],
        },
        {
          type: "category",
          label: "Markdown",
          items: ["tools/markdown/remark-lint"],
        },
        {
          type: "category",
          label: "Others",
          items: [
            "tools/others/goodcheck",
            "tools/others/misspell",
            "tools/others/languagetool",
            "tools/others/pmd-cpd",
            "tools/others/secret-scan",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Custom Rules",
      items: ["custom-rules/introduction-to-custom-rules", "custom-rules/goodcheck", "custom-rules/tips"],
    },
    {
      type: "category",
      label: "Advanced Settings",
      items: [
        "advanced-settings/inline-comments",
        "advanced-settings/private-dependencies",
        "advanced-settings/restricting-access-to-close-button",
        "advanced-settings/transferring-a-repository",
      ],
    },
    "billing-and-plans",
    "troubleshooting",
    {
      type: "category",
      label: "Enterprise",
      items: [
        "enterprise/index",
        "enterprise/system-overview",
        "enterprise/installation",
        "enterprise/config",
        "enterprise/operation",
        "enterprise/updating",
        "enterprise/load-balancer",
        "enterprise/mysql",
        "enterprise/redis",
        "enterprise/minio",
        "enterprise/amazon-s3",
        "enterprise/github",
        "enterprise/clustering",
        {
          type: "category",
          label: "Example Deployments",
          items: ["enterprise/examples/single-node-with-docker-compose"],
        },
        {
          type: "category",
          label: "Releases",
          items: [
            "enterprise/releases/index",
            "enterprise/releases/202107",
            "enterprise/releases/202106",
            "enterprise/releases/202104",
            "enterprise/releases/202103",
            "enterprise/releases/202102",
            "enterprise/releases/202101",
            "enterprise/releases/202012",
            "enterprise/releases/202010",
            "enterprise/releases/202009",
            "enterprise/releases/202008",
            "enterprise/releases/202007",
            "enterprise/releases/202006",
            "enterprise/releases/202005",
            "enterprise/releases/202004",
            "enterprise/releases/202002",
            "enterprise/releases/202001",
            "enterprise/releases/201911",
            "enterprise/releases/2018010801-201909.0",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "News",
      items: ["news/2021", "news/2020", "news/2019"],
    },
  ],
};
