module.exports = {
  base: '/Mellow_Blog/',
  head: [
    [
		'link', { 
		rel: 'shortcut icon',
		type: "image/x-icon", 
		href: '/M.ico' 
		}
    ]
  ],
  theme: 'yur',
  themeConfig: {
        lang: 'zh-CN',
        logo: '/M.ico',
        author: 'Mellow',
        authorLink: 'https://github.com/Mike4Ellis/',
        locales: {
            title: 'Mellow\'s blog',
            description: 'Trust The Process'
        },
        timeline: true,
        about: true,
        avatar: '/海边.jpg',
        navs: [
            {text: '编程那点事', link: '/program/'},
            {text: '自然语言处理', link: '/nlp/'},
        ],
        links: [
            {
                name: 'Blog',
                lists: [
                    {
                        title: 'Stars so bright',
                        subtitle: 'Writing life with you',
                        link: 'https://www.gleehub.com/',
                        logo: 'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',
                        color: '#9a69ec'
                    }
                ]
            }
        ],
        social: {
            github: 'https://github.com/Mike4Ellis/',
        },
        footer: {
            icon: '/arimura_2.jpg',
            one: [
                {
                    title: 'Yur',
                    subtitle: 'VuePress Theme',
                    link: 'https://github.com/cnguu/vuepress-theme-yur'
                }
            ],
            two: [
                {
                    title: 'Hosted On GitHub',
                    link: 'https://www.github.com/',
                    type: 'cloud',
                    theme: 'filled'
                }
            ],
            three: [
                {
                    title: 'Gitter',
                    link: 'https://gitter.im/vuepress-theme/yur?utm_source=share-link&utm_medium=link&utm_campaign=share-link',
                    type: 'message',
                    theme: 'outlined'
                }
            ]
        },
        banner: '/japan_street_fixed.png',
        buttons: [
            {text: 'Read', link: '/program/', type: 'primary'},
            {text: 'About', link: '/about.html', type: 'default'}
        ],
        ityped: {
            typeSpeed: 300,
            backSpeed: 100,
            startDelay: 300,
            backDelay: 1300,
            loop: true,
            showCursor: true,
            placeholder: false,
            disableBackTyping: false,
            cursorChar: '丨'
        },
        tagSize: 100, // Default: 100
        post: {
            cover: [
                '/arimura_1.jpg',
                // '/post/2.jpg',
                // 'https://xxx.com/3.jpg',
                // 'https://xxx.com/4.jpg'
            ],
            pageSize: 12,
            pageSizeOptions: ['12', '24', '48', '96'],
        },
        nameplate: {
            title: 'Mellow',
            width: '72px',
            height: '32px',
            text: [
                {
                    fontSize: '20',
                    textAnchor: 'middle',
                    x: '50%',
                    y: '50%',
                    textTransform: 'uppercase',
                    fill: 'none',
                    stroke: '#3498db',
                    textShadow: '0 0 1px #3498db',
                    strokeWidth: '1px',
                    strokeDasharray: '90 310',
                    animate: {
                        attributeName: 'stroke-dashoffset',
                        begin: '-1.5s',
                        dur: '6s',
                        from: '0',
                        to: '-400',
                        repeatCount: 'indefinite'
                    }
                },
                {
                    fontSize: '20',
                    textAnchor: 'middle',
                    x: '50%',
                    y: '50%',
                    textTransform: 'uppercase',
                    fill: 'none',
                    stroke: '#f39c12',
                    textShadow: '0 0 1px #f39c12',
                    strokeWidth: '1px',
                    strokeDasharray: '90 310',
                    animate: {
                        attributeName: 'stroke-dashoffset',
                        begin: '-3s',
                        dur: '6s',
                        from: '0',
                        to: '-400',
                        repeatCount: 'indefinite'
                    }
                },
                {
                    fontSize: '20',
                    textAnchor: 'middle',
                    x: '50%',
                    y: '50%',
                    textTransform: 'uppercase',
                    fill: 'none',
                    stroke: '#e74c3c',
                    textShadow: '0 0 1px #e74c3c',
                    strokeWidth: '1px',
                    strokeDasharray: '90 310',
                    animate: {
                        attributeName: 'stroke-dashoffset',
                        begin: '-4.5s',
                        dur: '6s',
                        from: '0',
                        to: '-400',
                        repeatCount: 'indefinite'
                    }
                },
                {
                    fontSize: '20',
                    textAnchor: 'middle',
                    x: '50%',
                    y: '50%',
                    textTransform: 'uppercase',
                    fill: 'none',
                    stroke: '#9b59b6',
                    textShadow: '0 0 1px #9b59b6',
                    strokeWidth: '1px',
                    strokeDasharray: '90 310',
                    animate: {
                        attributeName: 'stroke-dashoffset',
                        begin: '-6s',
                        dur: '6s',
                        from: '0',
                        to: '-400',
                        repeatCount: 'indefinite'
                    }
                }
            ]
        },
        curtain: {
            tip: 'Loading...',
            textShadow: '#e91e63'
        },
    }

}