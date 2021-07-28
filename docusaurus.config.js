module.exports = {
  title: "Sider Documentation",
  tagline: "The documentation site for Sider.",
  url: "https://help.sider.review",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "sider",
  projectName: "sider-docs",

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          editUrl: "https://github.com/sider/sider-docs/edit/master/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/og-thumb.png",
    navbar: {
      title: "Sider Docs",
      logo: {
        src: "img/header-logo.svg",
        alt: "Sider logo",
      },
      items: [
        { to: "getting-started/setup", label: "Getting Started" },
        { to: "enterprise/index", label: "Enterprise" },
        { to: "news/2021", label: "News" },
        { href: "https://sider.review/", label: "Sider Top", position: "right" },
      ],
    },
    footer: {
      logo: {
        src: "img/footer-logo.svg",
        alt: "Sider logo",
        href: "/",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Sider Corporation`,
      links: [
        {
          title: "Docs",
          items: [
            { to: "getting-started/setup", label: "Getting Started" },
            { href: "/#analysis-tools", label: "Analysis Tools" },
            { to: "enterprise/index", label: "Enterprise" },
          ],
        },
        {
          title: "Sider",
          items: [
            { href: "https://sider.review/", label: "Sider Top" },
            { href: "https://sider.review/terms", label: "Terms of Service" },
            { href: "https://sider.review/privacy", label: "Privacy" },
          ],
        },
        {
          title: "Social",
          items: [
            { href: "https://siderlabs.com/blog", label: "Blog" },
            { href: "https://github.com/sider", label: "GitHub" },
          ],
        },
      ],
    },
    googleAnalytics: {
      trackingID: "UA-48995135-1",
    },
    algolia: {
      apiKey: "049a35b7a22ba1310e14ad116d32c18b",
      indexName: "sider",
    },
  },

  clientModules: [require.resolve("./src/js/intercom.js")],
};
