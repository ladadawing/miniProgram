Component({
  data: {
    price: 2,
    priceAll: 0,
    amount: 1,
    sum: 0,
    num1: null,
    num2: null

  },
  properties: {},
  observers: {
    'amount'() {  //单个监听
      console.log('当前数量改变的amount',this.data.amount)
    },
    'amount,price'(amount,price) {  //多个监听
      this.setData({
        priceAll: amount*price
      })
    },
    'num1,num2'(num1, num2) { 
      this.setData({
        sum:Number(num1)+Number(num2)
        }
      )
    }
  },
  methods: {
    change(e) { 
      console.log(e)
      let amounts = e.detail.value
      this.setData({
        amount:amounts
      })
      console.log(this.data.amount,'看看到底是什么')
    },
    input1(e) {
      this.setData({
        num1: e.detail.value
      })
    },
    input2(e) {
      this.setData({
        num2: e.detail.value,
      })
    }
  }
})