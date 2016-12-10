module.exports = {
  tabbar: {
    list: [{
      pagePath: '/pages/demo/page1',
      title: 'Page1',
      key: 'page1',
      iconPath: '/images/icon_live_nor.png',
      selectedIconPath: '/images/icon_live_sel.png',
      hint: true
    }, {
      pagePath: '/pages/demo/page2',
      title: 'Page2',
      key: 'page2',
      iconPath: '/images/icon_msg_nor.png',
      selectedIconPath: '/images/icon_msg_sel.png',
      hint: 1
    }],
    position: 'bottom',
    wrap: {
      backgroundColor: '#FBFBFB'
    },
    item: {
      color: '#626567'
    },
    itemSelected: {
      color: '#2A8CE5'
    }
  }
}
