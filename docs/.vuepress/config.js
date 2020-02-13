module.exports = {
  "title": "Mellow's Blog",
  "description": "Trust The Process",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/M.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        //视区
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Mike4Ellis",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,		// 在导航栏菜单中所占的位置，默认2
        "text": "Category"	// 默认文案 “分类”
      },
      "tag": {
        "location": 3,		// 在导航栏菜单中所占的位置，默认3
        "text": "Tag"		// 默认文案 “标签”
      }
    },
    "friendLink": [
      {
        "title": "T0UGH",
        "desc": "大学同学T0UGH，真的很T0UGH",
        // "avatar": "/T.png",
        "link": "https://t0ugh.github.io/"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/M.ico",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "Mellow",
    "authorAvatar": "/海边.jpg",
    "record": "SiSYPHE",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}