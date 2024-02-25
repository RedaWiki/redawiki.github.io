import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  head: [
    [
        'meta', 
        {property: 'og:image', content: 'https://redawiki.github.io/logo.gif'}
    ],
    [
        'meta', 
        {name: 'theme-color', content: '#bd34fe'}
    ],
    [
        'script',
        { type: 'text/javascript' },
        `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "kw2k0ehuxl");`
    ]
  ],
  cleanUrls: true,
  title: "RedaWiki",
  description: "Appunti incredibili",
  themeConfig: {
    logo: '/favicon.ico',
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
            { text: 'Appunti di storia 📜', link: '/storia/verifica-3/1-guerra-mondiale' }
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
        },

        {
            text: 'Verifica 3 ✏️',
            collapsed: false,
            items: [
              { text: '1° Guerra mondiale 🌎', link: '/storia/verifica-3/1-guerra-mondiale' },
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
