import { HeadConfig, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    head.push(['meta', { property: 'og:image', content: "https://redawiki.github.io/logo.gif"}])
    head.push(['meta', { name: 'theme-color', content: '#bd34fe' }])
    
    return head
  },
  cleanUrls: true,
  title: "RedaWiki",
  description: "Appunti incredibili",
  themeConfig: {
    logo: '/logo.gif',
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: {
    '/categorie': [
        {
            text: 'Categorie 🗂️',
            collapsed: false,
            items: [
            { text: 'Appunti di italiano 📚', link: '/italiano/verifica-2/leopardi' },
            { text: 'Appunti di storia 📜', link: '/storia/verifica-2/3-guerra-di-indipendenza' }
            ]
        } 
    ],
    '/italiano/': [
        {
        text: 'Verifica 2 ✏️',
        collapsed: false,
        items: [
            { text: 'Giacomo Leopardi 😭', link: '/italiano/verifica-2/leopardi' },
        ]
        } 
    ],
    '/storia/': [
        {
          text: 'Verifica 2 ✏️',
          collapsed: false,
          items: [
            { text: '3° Guerra di indipendenza ⚔️', link: '/storia/verifica-2/3-guerra-di-indipendenza' },
          ]
        } 
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RedaWiki/redawiki.github.io' }
    ],

    search: {
      provider: 'local'
    }
  }
})
