var initData = 'this is first line\n this is second line'
Page({
  data:{
    // text:"这是一个页面"
    iconSize:[20,30,40,50,60,70],
    iconColor:[
        'red','orange','yellow','green','rgb(0,255,255)','blue','purple'
    ],
    iconType:[
        'success','info','warn','waiting','safe_success','safe_warn',
        'success_circle','success_no_circle','waiting_circle','circle','download',
        'info_circle','cancel','search','clear'
    ],
    zero:0,
    text:initData
  },
  extraLine:[],
  add:function(e){
      this.extraLine.push('other line')
      this.setData({
          text:initData + '\n' + this.extraLine.join('\n')
      })
  },
  remove:function(e){
      if(this.extraLine.length > 0){
          this.extraLine.pop()
          this.setData({
              text:initData + '\n' + this.extraLine.join('\n')
          })
      }
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