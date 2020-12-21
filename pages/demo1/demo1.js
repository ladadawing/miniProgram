// pages/demo1/demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: "首页",
        isActive: true
      },
      {
        id: 1,
        name: "原创",
        isActive: false
      },
      {
        id: 2,
        name: "分类",
        isActive: false
      },
      {
        id: 3,
        name: "关于",
        isActive: false
      },
    ]
  },
  // 子传父值
  handleItem(e) { 
    const { index } = e.detail // 接收过来的参数
    let { tabs } = this.data; // 获取原数组
    tabs.forEach((item, i) => {  // 对原数组进行遍历
      i===index ? item.isActive =true :item.isActive = false
    })
    this.setData({
      tabs
    })
  }
})