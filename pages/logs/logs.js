//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    wx.request({
      url: "http://192.168.1.115:8980/js/a/botgjxhgl/leadershipArrangement/listData",
      method: 'POST',
      dataType: 'json',
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        'cookie': wx.getStorageSync("sessionid")
      },
      success(res) {
        console.log(res);
      }
    })
  }
})
