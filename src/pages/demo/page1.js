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
      title: 'Page1'
    })

    let self = this
    let {
      tabbarConfig
    } = self.data
    tabbarConfig.cursor = 'page1'
    self.setData({
      tabbarConfig
    })
    self.intervalKey = setInterval(() => {
      let {
        tabbarConfig
      } = self.data

      // 这一步是为了更新当前页面的data
      tabbarConfig.list[1].hint = Math.min(99, tabbarConfig.list[1].hint + 1)
      self.setData({
        tabbarConfig
      })

      // 这一步为了更新全局的tabbar数据 避免切换到其他页面后 数据没有变化
      app.tabbar.list[1].hint = Math.min(99, app.tabbar.list[1].hint + 1)
    }, 1000)
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
