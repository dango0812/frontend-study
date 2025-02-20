import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Frontend Study",
  description: "Frontend 개발의 기본 개념부터 핵심까지, JavaScript, TypeScript, React, Next.js, CS 등 다양한 주제를 다뤄요. 🐍",
  lastUpdated: true,

  head: [
    [
      "link",
      { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
    ],
    [
      "link", { rel: "manifest", href: "/favicon/site.webmanifest" }
    ],
    [
      "link", { rel: "apple-touch-icon", href: "/favicon/apple-touch-icon.png" }
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/icons/logo.svg",

    nav: [
      { text: "홈", link: "/" },
    ],

    outline: {
      label: "페이지 내용"
    },
    docFooter: {
      prev: "이전 페이지",
      next: "다음 페이지"
    },
    lastUpdated: {
      text: "마지막 업데이트"
    },

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is frontend study?", link: "/study/" }
        ]
      },
      {
        text: "Javascript",
        items: [
          { text: "var, let, const", link: "/study/javascript/var-let-const" }
        ]
      },
      {
        text: "Typescript",
        items: []
      },
      {
        text: "React",
        items: []
      },
      {
        text: "Next.js",
        items: []
      },
      {
        text: "CS",
        items: []
      },
      {
        text: "Tech interview",
        items: []
      }
    ],

    editLink: {
      pattern: "https://github.com/dango0812/frontend-study/edit/main/:path"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/dango0812/frontend-study" }
    ]
  }
})
