const pageConfig = {
  // 获取点击的tab
  bindTabBarTap ({
    currentTarget: {
      dataset: {
        key,
        cursor,
        url
      }
    }
  }) {
    if (key !== cursor) {
      console.log(`redirect to : ${url}`)
      wx.redirectTo({
        url
      })
    }
  }
}

module.exports = (config) => {
  let {
    tabbarConfig
  } = config.data

  // 增加一些自定义的inline-style
  config.data.tabbarConfig = Object.assign(tabbarConfig, {
    wrapStyle: tabbarConfig.wrap ? json2style(tabbarConfig.wrap) : null,
    itemStyle: tabbarConfig.item ? json2style(tabbarConfig.item) : null,
    itemSelectedStyle: tabbarConfig.itemSelected ? json2style(tabbarConfig.itemSelected) : null,
    titleStyle: tabbarConfig.title ? json2style(tabbarConfig.title) : null,
    titleSelectedStyle: tabbarConfig.titleSelected ? json2style(tabbarConfig.titleSelected) : null,
    iconStyle: tabbarConfig.icon ? json2style(tabbarConfig.icon) : null,
    iconSelectedStyle: tabbarConfig.iconSelected ? json2style(tabbarConfig.iconSelected) : null
  })

  return Object.assign({}, pageConfig, config)
}

function json2style (obj) {
  let style = []
  for (let key in obj) {
    style.push(`${camelCase2middleLine(key)}: ${obj[key]}`)
  }

  return style.join('; ')
}

function camelCase2middleLine (str) {
  return str.replace(/[A-Z]/g, a => `-${a.toLowerCase()}`)
}
