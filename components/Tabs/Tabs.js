// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: { // 接收父向子传递数据
    tabs: {
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e) { 
      const { index } = e.currentTarget.dataset; // 先获取点击的index值
      this.triggerEvent('handleChange',{index})
      // let { tabs } = this.data; // 获取原数组
      // tabs.forEach((item, i) => {  // 对原数组进行遍历
      //   i===index ? item.isActive =true :item.isActive = false
      // })
      // this.setData({
      //   tabs
      // })
    }
  }
})
