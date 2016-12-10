const {
  tabbar
} = require('config.js')

// app.js
App({
  onLaunch () {
    wx.showNavigationBarLoading()

    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  tabbar
})
