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
        ]
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