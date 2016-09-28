var order = ['red','yellow','green','blue','red']
Page({
  data:{
    // text:"这是一个页面"
    toView:"red",
    scrollTop:100,
    imgUrls:[
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots:false,
    autoplay:false,
    interval:5000,
    duration:1000
  },
  changeIndicationDots:function(e){
      this.setData({
          indicatorDots:!this.data.indicatorDots
      })
  },
  changeAutoplay:function(e){
      this.setData({
          autoplay:!this.data.autopaly
      })
  },
  intervalChange:function(e){
      this.setData({
          interval:e.detail.value
      })
  },
  durationChange:function(e){
      this.setData({
          duration:e.detail.value
      })
  },
  upper:function(e){
      console.log(e);
  },
  lower:function(e){
      console.log(e);
  },
  scroll:function(e){
      console.log(e)
  },
  tap:function(e){
      for(var i=0;i<order.length;i++){
          if(order[i] === this.data.toView){
              this.setData({
                  toView:order[i + 1]
              })
              break
          }
      }
  },
  tapMove:function(e){
      this.setData({
          scrollTop:this.data.scrollTop + 10
      })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})