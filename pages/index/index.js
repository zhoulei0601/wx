//index.js
const util = require('../../utils/util.js')
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  login:function(){
    console.log("login");
    var secretKey = 'thinkgem,jeesite,com';
    var userNameEncode = util.encode('system', secretKey);
    var passwordEncode = util.encode('123456', secretKey);
    console.log(userNameEncode + '=' + passwordEncode)
    wx.request({
      url: 'http://192.168.1.115:8980/js/a/login?__login=true&__ajax=json', 
      method:'POST',
      data: {
        username: userNameEncode,
        password: passwordEncode
      },
      dataType: 'json',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        wx.setStorageSync("sessionid","jeesite.session.id="+ res.data.sessionid);
        console.log(res.data.user.userCode + res.data.message);
      }
    });
  }
})
