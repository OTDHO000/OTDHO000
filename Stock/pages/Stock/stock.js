Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotpoint:[
    {newid:'1',image:'/image/rdbk00202.jpg',title:'医疗健康',source:'yicai'},
    {newid:'2',image:'/image/rdbk004.jpg',title:'猪周期',source:'yicai'},
    {newid:'2',image:'/image/rdbk00302.jpg',title:'食品饮料',source:'yicai'}

    ],
   
    news:[
    {newid:'3',image:'/image/yicai002.jpg',title:'华为“实体清单”下首个季报出炉，相关概念再度爆发',source:'yicai'},
    {newid:'3',image:'/image/yicaiicon001.jpg',title:'下周关注丨逾千家公司集中披露三季报，这些投资机会最靠谱',source:'yicai'},
    {newid:'3',image:'/image/ice.jpg',title:'大盘震荡，食品饮料走强',source:'yicai'}
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 500
  },

Todetail:function(){
  var that= this
  wx.navigateTo({
  url: '../new-detail/newdetail?newid='+that.data.hotpoint[mewid],
  events: {
    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
    acceptDataFromOpenedPage: function(data) {
      console.log(data)
    }
   
  },
  success: function(res) {
    // 通过eventChannel向被打开页面传送数据
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: that.data.news })
  }
})

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  }


})