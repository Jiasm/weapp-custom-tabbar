const app = getApp()

// step1: 引入tabbar的js文件
//        用来合并config 添加tabbar所需要的一些事件之类的东西
const mergeTabbar = require('../lib/tabbar')

// step2: 设置tabbar所需的数据
const tabbarConfig = Object.assign({}, app.tabbar)

const initConfig = {
  data: {
    tabbarConfig
  },
  onLoad () {
    wx.setNavigationBarTitle({
      title: 'Page2'
    })

    let self = this
    let {
      tabbarConfig
    } = self.data
    tabbarConfig.cursor = 'page2'
    self.setData({
      tabbarConfig
    })
  },
  onUnload () {
    clearInterval(this.intervalKey)
  }
}

// step3: 将之前传入Page中的json对象先传入 tabbar中
//        tabbar会接入一些自己的事件供tabbar组件使用
const config = mergeTabbar(initConfig)

// step4: 将合并后的config传入Page
//        well done-.-
Page(config)
