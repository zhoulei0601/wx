const { $Toast } = require('../../components/iview/base/index');

Page({
    data: {
      images: []
    },
    onLoad:function(options) {
    
    },
    //选择图片
    chooseImage: function(e) {
      wx.chooseImage({
        sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
        sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
        count: 3,//图片个数
        success: res => {
          const images = this.data.images.concat(res.tempFilePaths)
          // 限制最多只能留下3张照片
          this.setData({
            images: images.length <= 3 ? images : images.slice(0, 3)
          });
        }
      });
    },
    //删除图片
    removeImage: function(e) {
      const idx = e.target.dataset.idx;
      this.data.images.splice(idx, 1);
      this.setData({
        images: this.data.images
      });
    },
    //预览
    handleImagePreview: function(e) {
      const idx = e.target.dataset.idx;
      const images = this.data.images;
      wx.previewImage({
        current: images[idx],  //当前预览的图片
        urls: images,  //所有要预览的图片
      })
    },
    //上传
    uploadPic: function(){
      var global = getApp().globalData;
      const img = this.data.images;
      if(img.length < 1){
        return;
      }
      wx.showLoading({
        title: '正在上传...',
        mask: true
      });
      const imgArr = img.map(path =>{
        return wx.uploadFile({
          url: `${global.baseUrl}excel/uploadPhoto`,
          filePath: path,
          name: 'file',
          header: global.formHeader,
          formData: {
            'usercode': global.user.usercode
          }
        });
      });
      Promise.all(imgArr).then(res => {
        this.data.images = [];
        wx.hideLoading();
        $Toast({
          content: '上传成功！',
          type: 'success'
        });
      }).catch(err => {
        console.error(err);
        $Toast({
          content: '上传失败！',
          type: 'warning'
        });
      });
    }
});