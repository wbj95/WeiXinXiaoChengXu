//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: [
      { url: '../image/11.jpg',title:"上汽通用五菱560全新上市" },
      { url: '../image/22.jpg', title: "宝骏基地建成投产"  },
      { url: '../image/33.jpg', title: "五菱家族全新亮相"  }],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    listnews:
    [
        { url:'/pages/image/11.jpg',title: '上汽通用五菱宝骏新车型', content: '宝骏啊啊啊啊啊啊奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥所多多所付所多' },
        { url:'/pages/image/22.jpg',title: '上汽通用五菱新基地建成投产', content: '上汽通用五菱北京基地建成投产啦蛤蛤蛤蛤蛤蛤蛤' },
      ],
       listactivity: [
      { url: '/pages/image/11.jpg', title: '标题1' },
      { url: '/pages/image/22.jpg', title: '标题2' },
    ]
  },
 
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
