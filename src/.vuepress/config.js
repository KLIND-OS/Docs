module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "KLIND OS Dokumentace",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Dokumentace pro KLIND OS",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://raw.githubusercontent.com/JZITNIK-github/KLIND-OS-Server/main/logo.png",
      },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Návod",
        link: "/navod/",
      },
      {
        text: "Vývoj aplikací",
        link: "/vyvoj-aplikaci/",
      },
      {
        text: "Developers",
        link: "/developers/",
      },
    ],
    sidebar: {
      "/navod/": [
        {
          title: "Návod",
          collapsable: false,
          children: [
            "",
            "instalace",
            "zacatek",
            "internet",
            "bluetooth",
            "spravce-souboru",
            "prohlizec",
            "kalkulacka",
            "editor-registru",
            "dalsi",
          ],
        },
      ],
      "/vyvoj-aplikaci/": [
        {
          title: "Vývoj aplikací",
          collapsable: false,
          children: [
            "",
            "prvni-aplikace",
            "otestovat-aplikaci",
            "kompilace",
            "jsstyles",
            "storage",
            "appdata",
            "control",
            "filemanagerapi",
            "filelocker",
            "trackingstatus",
            "shortcuts"
          ],
        },
      ],
      "/developers/": [
        {
          title: "Developers",
          collapsable: false,
          children: [""],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
