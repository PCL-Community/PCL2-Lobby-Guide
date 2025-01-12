import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PCL2 Lobby Guide",
  description: "PCL2 社区版联机服务端实现规范",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '开始之前',
        items: [
          { text: '一些你需要知道的基本事项', link: '/before/getstart' }
        ]
      },
      {
        text: '登录',
        items: [
          { text: '1.1 登录与刷新', link: '/start/login' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
