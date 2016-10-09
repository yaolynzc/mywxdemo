var toastNum = 2
var pageData = {
    data:{
        // text:"这是一个页面"
        actionSheetHidden:true,
        actionSheetItems:['item1','item2','item3','item4'],
        modalHidden:true,
        modalHidden2:true,
        hidden:true
    },
    loadingTap:function(){
        this.setData({
            hidden:false
        });
        var that = this;
        setTimeout(function(){
            that.setData({
                hidden:true
            })
            that.update()
        },3000)
    },
    modalTap:function(e){
        this.setData({
            modalHidden:false
        })
    },
    modalChange:function(e){
        this.setData({
            modalHidden:true
        })
    },
    modalTap2:function(e){
        this.setData({
            modalHidden2:false
        })
    },
    modalChange2:function(e){
        this.setData({
            modalHidden2:true
        })
    },
    actionSheetTap:function(e){
        this.setData({
            actionSheetHidden:!this.data.actionSheetHidden
        })
    },
    actionSheetChange:function(e){
        this.setData({
            actionSheetHidden:!this.data.actionSheetHidden
        })
    },
    bindItemTap:function(e){
        console.log('tap ' + e.currentTarget.dataset.name)
    },
    onLoad:function(options){
        this.sestData({
            title:options.title
        })
    }
}

for(var i=0;i<=toastNum;++i){
    pageData.data['toast' + i + 'Hidden']=true;
    (function(index){
        pageData['toast' + index + 'Change'] = function(e){
            var obj = {}
            obj['toast' + index + 'Hidden'] = true
            this.setData(obj)
        }
        pageData['toast' + index + 'Tap'] = function(e){
            var obj = {}
            obj['toast' + index + 'Hidden'] = false
            this.setData(obj)
        }
    })(i)
}

Page(pageData)