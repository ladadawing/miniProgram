Page({
  data: {
    message: '你猜猜',
    num:999,
    person: {
      age: 18,
      height: 180,
      name:'八辈          '
    },
    isChecked: false,
    list: [
      {
        id: 0,
        name: "孙悟空"
      },
      {
        id: 1,
        name: "美猴王"
      },
      {
        id: 2,
        name: "金丝猴"
      },
    ],
    isShow: false,
    num: 0
  },
  handleInput(e) { 
    console.log('值呢',e)
    this.setData({
      num:e.detail.value
    })
  },
  handleTap(e) { 
    const operation = e.currentTarget.dataset.operation
    this.setData({
      num:this.data.num + operation
    })
  }
})