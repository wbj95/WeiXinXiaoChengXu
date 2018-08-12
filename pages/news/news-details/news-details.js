// pages/news/news-details/news-details.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       title:null,
       content:null,
       image_url:null,
       date:null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that = this;
      var id=options.id;
      console.log(id);
      wx.request({
        url: 'http://localhost:8081/news//getnewbyid?id='+id,
        method: 'GET',
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          console.log(res);
          that.setData({
            title: res.data.newsList.title,
            content: res.data.newsList.content,
            image_url: res.data.newsList.imageUrl,
            date: res.data.newsList.lastEditDate
          });
        }
      })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})