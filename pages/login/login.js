const util = require('../../utils/util.js');
Page({
  data: {

  },
  onLoad: function () {
  
  },
  loginForm: function (data) {
    var username = data.detail.value.username
    var password = data.detail.value.password;
    this.login(username, password);
  },
  login: function (username, password) {
    var secretKey = 'thinkgem,jeesite,com';
    var userNameEncode = util.encode(username, secretKey);
    var passwordEncode = util.encode(password, secretKey);
    console.log(userNameEncode + '=' + passwordEncode)
    wx.request({
      url: 'http://192.168.1.115:8980/js/a/login?__login=true&__ajax=json',
      method: 'POST',
      data: {
        username: userNameEncode,
        password: passwordEncode
      },
      dataType: 'json',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        wx.setStorageSync("sessionid", "jeesite.session.id=" + res.data.sessionid);
        console.log(res.data.user.userCode + res.data.message);
        wx.switchTab({
          url: '../index/index',
        })
      }
    });
  }
});
