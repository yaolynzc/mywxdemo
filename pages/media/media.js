var pageObject = {
    data:{
        src:"",
        poster:'http://pic.pimg.tw/pam86591/1408719752-3322564110_n.jpg',
        name:'Sugar',
        author:'Maroon 5',
        array:[{
            mode:'scaleToFill',
            text:'scaleToFill:不保持纵横比缩放图片，使图片完全适应'
        },{
            mode:'aspectFit',
            text:'aspectFit:保持纵横比缩放图片，使图片的长边能完全显示出来'
        },{
            mode:'aspectFill',
            text:'aspectFill:保持纵横比缩放图片，只保证图片的短边能完全显示出来'
        },{
            mode:'top',
            text:'top:不缩放图片，只显示图片的顶部区域'
        },{
            mode:'bottom',
            text:'bottom:不缩放图片，只显示图片的底部区域'
        },{
            mode:'center',
            text:'center:不缩放图片，只显示图片的中间区域'
        },{
            mode:'left',
            text:'left:不缩放图片，只显示图片的左边区域'
        },{
            mode:'right',
            text:'rignt:不缩放图片，只显示图片的右边区域'
        },{
            mode:'top left',
            text:'top left:不缩放图片，只显示图片的左上边区域'  
        },{
            mode:'top right',
            text:'top right:不缩放图片，只显示图片的右上边区域'
        },{
            mode:'bottom left',
            text:'bottom left:不缩放图片，只显示图片的左下边区域'
        },{
            mode:'bottom right',
            text:'bottom right:不缩放图片，只显示图片的右下边区域'
        }],
        srcp:'../../image/cat.jpg'
    },
    audioPlay:function(){
        this.setData({
            action:{
                method:'play'
            }
        })
    },
    audioPause:function(){
        this.setData({
            action:{
                method:'pause'
            }
        })
    },
    audioPlaybackRateSpeedUp:function(){
        this.setData({
            action:{
                method:'setPlaybackRate',
                data:2
            }
        })
    },
    audioPlaybackRateNormal:function(){
        this.setData({
            action:{
                method:'setPlaybackRate',
                data:1
            }
        })
    },
    audioPlaybackRateSlowDown:function(){
        this.setData({
            action:{
                method:'setPlaybackRate',
                data:0.5
            }
        })
    },
    audio14:function(){
        this.setData({
            action:{
                method:'setCurrentTime',
                data:14
            }
        })
    },
    audioStart:function(){
        this.setData({
            action:{
                method:'setCurrentTime',
                data:0
            }
        })
    },
    bindButtonTap:function(){
        var that = this;
        wx.chooseVideo({
            sourceType:['album','camera'],
            maxDuration:60,
            camera:['front','back'],
            success:function(res){
                that.setData({
                    src:res.tempFilePath
                })
            }
        })
    },
    videoErrorCallback:function(e){
        console.log('视频错误信息：')
        console.log(e.detail.errMsg)
    }
}

Page(pageObject)