//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    work: []
  },
  onLoad: function () {
    let that = this;
    var global = getApp().globalData;
    wx.request({
      url: global.baseUrl + "botgjxhgl/leadershipArrangement/listData",
      method: 'POST',
      dataType: 'json',
      header: global.formHeader,
      success(res) {
        console.log(res);
        let work = res.data.pageList;
        that.setData({
          work:work
        });
      }
    });
    wx.request({
      url: global.baseUrl + "dept/list?page=1&limit=10",
      method: 'POST',
      dataType: 'json',
      header: global.formHeader,
      success(res) {
        console.log(res);
      }
    });
  }
})
