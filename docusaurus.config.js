module.exports = {
  title: "NKA",
  tagline: "NKA",
  url: "https://example.io",
  baseUrl: "/example/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "example",
  projectName: "cpp-bank",
  favicon: "img/favicon.ico",
  themeConfig: {
    image: "img/icon.png",
    navbar: {
      title: "NKA",
      hideOnScroll: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://example.com",
          lastVersion: "current",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
