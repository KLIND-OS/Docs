import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  themeConfig: {
    search: {
      provider: "local",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/KLIND-OS" }],
  },
  head: [["link", { rel: "icon", href: "/favicon.png" }]],

  locales: {
    root: {
      label: "English",
      lang: "en",

      title: "KLIND OS Documentation",
      description: "Documentation for KLIND OS",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Getting started", link: "/get-started/" },
          { text: "Creating apps", link: "/apps/" },
          { text: "Developers", link: "/developers/" },
        ],

        sidebar: [
          {
            text: "Getting started",
            items: [
              { text: "Introduction", link: "/get-started/" },
              { text: "Installation", link: "/get-started/installation" },
              { text: "Internet", link: "/get-started/internet" },
              { text: "Bluetooth", link: "/get-started/bluetooth" },
              { text: "File manager", link: "/get-started/file-manager" },
              { text: "Browser", link: "/get-started/browser" },
              { text: "Calculator", link: "/get-started/calculator" },
              { text: "More", link: "/get-started/more" },
            ],
          },
          {
            text: "Creating apps",
            items: [
              { text: "Introduction", link: "/apps/" },
              { text: "First app", link: "/apps/first-app" },
              { text: "Testing of apps", link: "/apps/test" },
              { text: "Compilation", link: "/apps/compilation" },
              {
                text: "APP class",
                link: "/apps/appclass",
              },
              { text: "Control API", link: "/apps/control" },
              { text: "File manager API", link: "/apps/filemanager" },
              {
                text: "Tracking status API",
                link: "/apps/trackingstatus",
              },
              { text: "Shortcuts API", link: "/apps/shortcuts" },
              { text: "Contextmenu API", link: "/apps/contextmenu" },
            ],
          },
          {
            text: "Developers",
            items: [{ text: "Download", link: "/developers/" }],
          },
        ],
      },
    },
    cs: {
      label: "Čeština",
      lang: "cs",
      title: "KLIND OS Dokumentace",
      description: "Dokumentace pro KLIND OS",
      themeConfig: {
        nav: [
          { text: "Domov", link: "/cs/" },
          { text: "Začínáme", link: "/cs/get-started/" },
          { text: "Vytváření aplikací", link: "/cs/apps/" },
          { text: "Developers", link: "/cs/developers/" },
        ],

        sidebar: [
          {
            text: "Začínáme",
            items: [
              { text: "Úvod", link: "/cs/get-started/" },
              { text: "Instalace", link: "/cs/get-started/installation" },
              { text: "Internet", link: "/cs/get-started/internet" },
              { text: "Bluetooth", link: "/cs/get-started/bluetooth" },
              { text: "Správce souborů", link: "/cs/get-started/file-manager" },
              { text: "Prohlížeč", link: "/cs/get-started/browser" },
              { text: "Kalkulačka", link: "/cs/get-started/calculator" },
              { text: "Další", link: "/cs/get-started/more" },
            ],
          },
          {
            text: "Vytváření aplikací",
            items: [
              { text: "Úvod", link: "/cs/apps/" },
              { text: "První aplikace", link: "/cs/apps/first-app" },
              { text: "Otestovat aplikaci", link: "/cs/apps/test" },
              { text: "Compilation", link: "/cs/apps/compilation" },
              {
                text: "Třída APP",
                link: "/cs/apps/appclass",
              },
              { text: "Control API", link: "/cs/apps/control" },
              { text: "File manager API", link: "/cs/apps/filemanager" },
              {
                text: "Tracking status API",
                link: "/cs/apps/trackingstatus",
              },
              { text: "Shortcuts API", link: "/cs/apps/shortcuts" },
              { text: "Contextmenu API", link: "/cs/apps/contextmenu" },
            ],
          },
          {
            text: "Developers",
            items: [{ text: "Stažení", link: "/cs/developers/" }],
          },
        ],
      },
    },
  },
});
