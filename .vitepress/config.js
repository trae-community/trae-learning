import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/trae-learning/',
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
            { text: '心流与效率', link: '/guide/flow-and-efficiency' },
            { text: 'Prompt 工程指南', link: '/guide/prompt-engineering' },
            { text: '最佳实践', link: '/guide/best-practices' }
          ]
        }
      ],
      '/tutorials/': [
        {
          text: '实战教程',
          items: [
            { text: '入门项目', link: '/tutorials/getting-started' },
            { text: 'REST API', link: '/tutorials/rest-api' },
            { text: 'React 组件', link: '/tutorials/react-components' },
            { text: '自动化测试', link: '/tutorials/automated-testing' },
            { text: '系统设计', link: '/tutorials/system-design' },
            { text: '性能优化', link: '/tutorials/performance-optimization' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/trae-community/trae-learning-projects' }
    ]
  }
})
