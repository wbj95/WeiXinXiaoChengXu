//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        background: [],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        circular: false,
        interval: 2000,
        duration: 500,
        previousMargin: 0,
        nextMargin: 0,
        listnews:[],
        listactivity: [
            {url: '/pages/image/11.jpg', title: '标题1'},
            {url: '/pages/image/22.jpg', title: '标题2'},
        ]
    },

onLoad:function(options){
  var that = this;
  wx.request({
    url: 'http://localhost:8081/news/getnewbypage?offset=0&limit=3',
    method: "GET",
    data: {},
    header: {
      'Accept': 'application/json'
    },
    success: function (res) {
      console.log(res.data);
      that.setData({ background: res.data.newlist });
    }
  })
 wx.request({
   url: 'http://localhost:8081/news/getnewbypage?offset=0&limit=2',
   method: "GET",
   data: {},
   header: {
     'Accept': 'application/json'
   },
   success: function (res) {
     console.log(res.data);
     that.setData({ listnews: res.data.newlist });
   }
 })
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
