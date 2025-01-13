import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PCL2 Lobby Guide",
  base: "/PCL2-Lobby-Guide"
  description: "PCL2 社区版联机服务端实现规范",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: './' },
      { text: 'GetStart', link: './before/getstart' }
    ],

    sidebar: [
      {
        text: '开始之前',
        items: [
          { text: '一些你需要知道的基本事项', link: './before/getstart' }
        ]
      },
      {
        text: 'API 接口',
        items: [
          { text: '1.1 登录接口文档', link: './start/login' },
          { text: '1.2 联机大厅接口文档', link: './start/lobby' },
          { text: '1.3 管理接口文档', link: './start/admin' }
        ]
      },
      {
        text: '拓展功能文档',
        items: [
          { text: '1.1 端口复用技术文档', link: './feature/reuse-port' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
