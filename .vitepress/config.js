import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/trae-learning-projects/',
  title: "TRAE Learning",
  description: "Vibecoding 进阶指南",
  appearance: 'force-dark',
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    logo: 'https://vitepress.dev/vitepress-logo-mini.png',
    nav: [
      { text: '指南', link: '/guide/what-is-vibecoding' },
      { text: '社区教程', link: '/tutorials/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '核心理念',
          items: [
            { text: '什么是 Vibecoding', link: '/guide/what-is-vibecoding' },
            { text: '心流与效率', link: '/guide/flow-and-efficiency' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/trae-community/trae-learning-projects' }
    ]
  }
})
