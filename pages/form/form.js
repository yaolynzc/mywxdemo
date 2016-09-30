var types = ['default','primary','warn']
var pageObject = {
    data:{
        defaultSize:'default',
        primarySize:'default',
        warnSize:'default',
        disabled:false,
        plain:false,
        loading:false,
        items:[
            {name:'USA',value:'美国'},
            {name:'CHN',value:'中国',checked:'true'},
            {name:'BRA',value:'巴西'},
            {name:'JPN',value:'日本'},
            {name:'ENG',value:'英国'},
            {name:'TUR',value:'法国'}
        ],
        focus:false,
        inputValue:"",
        array:['美国','中国','巴西','日本'],
        index:0,
        date:'2016-09-01',
        time:'12:01'
    },
    bindPickerChange:function(e){
        console.log('picker发送选择改变，携带值为',e.detail.value)
        this.setData({
            index:e.detail.value
        })
    },
    bindDateChange:function(e){
        this.setData({
            date:e.detail.value
        })
    },
    bindTimeChange:function(e){
        this.setData({
            time:e.detail.time
        })
    },
    bindButtonTap:function(){
        this.setData({
            focus:Date.now()
        })
    },
    bindKeyInput:function(e){
        this.setData({
            inputValue:e.detail.value
        })
    },
    bindReplaceInput:function(e){
        var value = e.detail.value;
        var pos = e.detail.cursor;
        if(pos != -1){
            // 光标在中间
            var left = e.detail.value.slice(0,pos);
            // 计算光标的位置
            pos = left.replace(/11/g,'2').length;
        }

        // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
        return{
            value:value.replace(/11/g,'2'),
            cursor:pos
        }
    },
    bindHideKeyboard:function(e){
        if(e.detail.value === "123"){
            //收起键盘
            wx.hideKeyboard();
        }   
    },
    formSubmit:function(e){
        console.log('form发生了submit事件，携带数据为：',e.detail.value)
    },
    formReset:function(e){
        console.log('form发生了reset事件')
    },
    checkboxChange:function(e){
        console.log('checkbox发生change事件，携带value值为：',e.detail.value)
    },
    setDisabled:function(e){
        this.setData({
            disabled:!this.data.disabled
        })
    },
    setPlain:function(e){
        this.setData({
            plain:!this.data.plain
        })
    },
    setLoading:function(e){
        this.setData({
            loading:!this.data.loading
        })
    }
}

for(var i=0;i<types.length;++i){
    (function(type){
        pageObject[type] = function(e){
            var key = type + 'Size'
            var changeData = {}
            changeData[key] = 
                this.data[key] === 'default'?'mini':'default'
            this.setData(changeData)
        }
    })(types[i])
}

Page(pageObject)