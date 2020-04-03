//logs.js
const util = require('../../utils/util.js')
let loading = true;
Page({
  data: {
    page:{
      pageNo: 0,
      pageSize: 4,
      pages: 0,
      list: []
    }
  },
  onLoad: function () {
    let that = this;
    this.fetchList(1,true);
    /* wx.request({
      url: global.baseUrl + "dept/list?page=1&limit=10",
      method: 'POST',
      dataType: 'json',
      header: global.formHeader,
      success(res) {
        console.log(res);
      }
    });  */
  },
  //上拉加载
  onReachBottom: function(){
    const pageNo = this.data.page.pageNo;
    if (!this.loading && pageNo < this.data.page.pages){
       this.fetchList(pageNo + 1,true)
    }
  },
  //下拉刷新
  onPullDownRefresh: function() {
    if (!this.loading){
      this.fetchList(1, false).then(() => {
        console.log("处理完成后，终止下拉刷新");
        // 处理完成后，终止下拉刷新
        wx.stopPullDownRefresh();
      });
    }
  },
  //后台分页查询
  listData: function(pageNo){
    let global = getApp().globalData;
    const that = this;
    return new Promise(function (resolve, reject){
      wx.request({
        url: global.baseUrl + `botgjxhgl/leadershipArrangement/listData?pageNo=${pageNo}
        &pageSize=${that.data.page.pageSize}`,
        method: 'POST',
        dataType: 'json',
        header: global.formHeader,
        success(res) {
          resolve(res.data);
        }
      });
    });
  },
  //刷新
  fetchList: function (pageNo,override){
    this.loading = true;
    return this.listData(pageNo).then(res => {
        const list = res.pageList;
        this.setData({
          page: {
            pageNo: pageNo,
            pageSize: this.data.page.pageSize,
            pages: res.pages,
            list: override ? this.data.page.list.concat(list) : list
          }
        });
      }).catch(err => {
        console.log("错误：" + err );
      }).then(() => this.loading = false);
  }
})
