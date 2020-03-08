// pages/home/home.js
Page({
  data: {
    name:"coders",
    age: 18,
    students:[
      {id:110,name:'looun',age:18},
      { id: 110, name: 'looun', age: 18 },
      { id: 110, name: 'looun', age: 18 }
    ],
    counter:0
  },
  handleBtnClick(){
    //1.错误做法
    // this.data.counter += 1
    // console.log(this.data.counter)

    //2.this。setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnClick2(){
    this.setData({
      counter: this.data.counter - 1
    })
  }

  
})