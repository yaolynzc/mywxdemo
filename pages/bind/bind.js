// This is our App Service
// This is our data.
var helloData = {
    name:'WeChat',
    message:'Hello Mina!',
    array:[1,2,3,4,5],
    view:'APP',
    staffA:{firstName:'Hulk',lastName:'Hu'},
    staffB:{firstName:'Shang',lastName:'You'},
    staffC:{firstName:'Giden',lastName:'Lin'},
    count:1,
    id:0,
    flag:true,
    a:1,
    b:2,
    c:3,
    length:6,
    zero:0,
    obj1:{
        a:1,
        b:2
    },
    obj2:{
        c:3,
        d:4
    }
}

// Register a Page.
Page({
  data:helloData,
  changeName:function(e){
      // sent data change to view.
      this.setData({
          name:'框架'
      })
  },
  add:function(e){
      this.setData({
          count:this.data.count + 1
      })
  }
})