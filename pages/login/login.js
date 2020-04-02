const util = require('../../utils/des.js');
const { $Toast } = require('../../components/iview/base/index');
Page({
  data: {
    username : '',
    password : '',
    inputType : 'password'
  },
  onLoad: function () {
  
  },
  loginForm: function (data) {
    var username = data.detail.value.username
    var password = data.detail.value.password;
    this.login(username, password);
  },
  clearAccount: function(e){
    this.setData({
      username : ''
    });
  },
  showPsd: function(){
    this.setData({
      inputType: 'text'
    });
  },
  //登录
  login: function (username, password) {
    if (!username || !password){
      $Toast({
        content: '请输入账号或密码',
        type: 'warning'
      });
      return ;
    }
    var secretKey = 'thinkgem,jeesite,com';
    var global = getApp().globalData;
    var isJeesite = global.frame == 'jessite';
    if (isJeesite){
      username = util.encode(username, secretKey);
      password = util.encode(password, secretKey);
    }
    console.log(username + '=' + password);
    wx.request({
      url: global.baseUrl + (isJeesite ? global.jessiteLogin : global.gunsLogin),
      method: 'POST',
      data: {
        username: username,
        password: password
      },
      dataType: 'json',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        if (isJeesite){
          if (res.data.user) {
            wx.setStorageSync("sessionid", "jeesite.session.id=" + res.data.sessionid);
            global.user.userCode = res.data.user.userCode;
            global.user.username = res.data.user.userName;
            global.formHeader.Cookie = "jeesite.session.id=" + res.data.sessionid;
            global.jsonHeader.Cookie = "jeesite.session.id=" + res.data.sessionid;
            wx.switchTab({
              url: '../index/index',
            });
          } else {
            $Toast({
              content: '用户名或密码错误！',
              type: 'error'
            });
          }
        }else{
          if(res.data.success){
            global.user.userCode = res.data.data.account;
            global.user.username = res.data.data.name;
            global.formHeader.Cookie = "Authorization=" + res.data.message;
            global.jsonHeader.Cookie = "Authorization=" + res.data.message;
            wx.setStorageSync("Authorization",res.data.message);
            wx.switchTab({
              url: '../index/index',
            });
          } else {
            $Toast({
              content: '用户名或密码错误！',
              type: 'error'
            });
          }
        }
        
      },
      fail(err){
        $Toast({
          content: '网络错误，请检查网络设置！',
          type: 'error'
        });
      }
    });
   
  }
});
