var app = getApp() 
Page({

  /**
   * 页面的初始数据
   */
  data: {
      SZ:2800,
      SC:9300,
      ScreenWidth:0,
      dataArr:[
            ["2017/10/1", [2320.26,2302.6,2287.3,2362.94]], 
            ["2017/10/2", [2300,2291.3,2288.26,2308.38]], 
            ["2017/10/3", [2295.35,2346.5,2295.35,2346.92]], 
            ["2017/10/4", [2347.22,2358.98,2337.35,2363.8]], 
            ["2017/10/5", [2360.75,2382.48,2347.89,2383.76]], 
            ["2017/10/6", [2383.43,2385.42,2371.23,2391.82]], 
            ["2017/10/7", [2377.41,2419.02,2369.57,2421.15]], 
            ["2017/10/8", [2425.92,2428.15,2417.58,2440.38]],
            ["2017/10/9", [2411,2433.13,2403.3,2437.42]],
            ["2017/10/10", [2432.68,2434.48,2427.7,2441.73]],
            ["2017/10/11", [2430.69,2418.53,2394.22,2433.89]],
            ["2017/10/12", [2416.62,2432.4,2414.4,2443.03]],
            ["2017/10/13", [2441.91,2421.56,2415.43,2444.8]],
            ["2017/10/14", [2420.26,2382.91,2373.53,2427.07]],
            ["2017/10/15", [2383.49,2397.18,2370.61,2397.94]],
            ["2017/10/16", [2378.82,2325.95,2309.17,2378.82]],
            ["2017/10/17", [2322.94,2314.16,2308.76,2330.88]],
            ["2017/10/18", [2320.62,2325.82,2315.01,2338.78]],
            ["2017/10/19", [2313.74,2293.34,2289.89,2340.71]],
            ["2017/10/20", [2297.77,2313.22,2292.03,2324.63]],
            ["2017/10/21", [2322.32,2365.59,2308.92,2366.16]],
            ["2017/10/22", [2364.54,2359.51,2330.86,2369.65]],
            ["2017/10/23", [2332.08,2273.4,2259.25,2333.54]],
            ["2017/10/24", [2274.81,2326.31,2270.1,2328.14]],
            ["2017/10/25", [2333.61,2347.18,2321.6,2351.44]],
            ["2017/10/26", [2340.44,2324.29,2304.27,2352.02]],
            ["2017/10/27", [2326.42,2318.61,2314.59,2333.67]],
            ["2017/10/28", [2314.68,2310.59,2296.58,2320.96]],
            ["2017/10/29", [2309.16,2286.6,2264.83,2333.29]],
            ["2017/10/30", [2282.17,2263.97,2253.25,2286.33]], 
            ["2017/11/1", [2320.26,2302.6,2287.3,2362.94]],
            ["2017/11/2", [2300,2291.3,2288.26,2308.38]], 
            ["2017/11/3", [2295.35,2346.5,2295.35,2346.92]], 
            ["2017/11/4", [2347.22,2358.98,2337.35,2363.8]], 
            ["2017/11/5", [2360.75,2382.48,2347.89,2383.76]], 
            ["2017/11/6", [2383.43,2385.42,2371.23,2391.82]], 
            ["2017/11/7", [2377.41,2419.02,2369.57,2421.15]], 
            ["2017/11/8", [2425.92,2428.15,2417.58,2440.38]],
            ["2017/11/9", [2411,2433.13,2403.3,2437.42]],
            ["2017/11/10", [2432.68,2434.48,2427.7,2441.73]],
            ["2017/11/11", [2430.69,2418.53,2394.22,2433.89]],
            ["2017/11/12", [2416.62,2432.4,2414.4,2443.03]],
            ["2017/11/13", [2441.91,2421.56,2415.43,2444.8]],
            ["2017/11/14", [2420.26,2382.91,2373.53,2427.07]],
            ["2017/11/15", [2383.49,2397.18,2370.61,2397.94]],
            ["2017/11/16", [2378.82,2325.95,2309.17,2378.82]],
            ["2017/11/17", [2322.94,2314.16,2308.76,2330.88]],
            ["2017/11/18", [2320.62,2325.82,2315.01,2338.78]],
            ["2017/11/19", [2313.74,2293.34,2289.89,2340.71]],
            ["2017/11/20", [2297.77,2313.22,2292.03,2324.63]],
            ["2017/11/21", [2322.32,2365.59,2308.92,2366.16]],
            ["2017/11/22", [2364.54,2359.51,2330.86,2369.65]],
            ["2017/11/23", [2332.08,2273.4,2259.25,2333.54]],
            ["2017/11/24", [2274.81,2326.31,2270.1,2328.14]],
            ["2017/11/25", [2333.61,2347.18,2321.6,2351.44]],
            ["2017/11/26", [2340.44,2324.29,2304.27,2352.02]],
            ["2017/11/27", [2326.42,2318.61,2314.59,2333.67]],
            ["2017/11/28", [2314.68,2310.59,2296.58,2320.96]],
            ["2017/11/29", [2309.16,2286.6,2264.83,2333.29]],
            ["2017/11/30", [2282.17,2263.97,2253.25,2286.33]]
        ]
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   //var that = this
    var Swidth
    wx.getSystemInfo({
      success: function(res){
         
         Swidth = res.windowWidth
          console.log(Swidth)
      },      
    })
     this.setData({
          ScreenWidth: Swidth
         
        })
      console.log(this.data.ScreenWidth)

   /* const ctx = wx.createCanvasContext('Sgraphic');
   ctx.setFillStyle('red');
    ctx.fillRect(0, 10, 250, 75);
    ctx.stroke();
    ctx.draw();  */
   var dataArr= this.data.dataArr;
   this.goChart(dataArr)

  },

  goChart:function (dataArr){
           var that = this;
            // 声明所需变量 
            var canvas;  //canvas DOM    canvas上下文
            // 图表属性
            var cWidth, cHeight, cMargin, cSpace;  //canvas中部的宽/高  canvas内边距/文字边距
            var originX, originY; //坐标轴原点
            // 图属性
            var bMargin, tobalBars, bWidth, maxValue, minValue;  //每个k线图间间距  数量 宽度   所有k线图的最大值/最小值 
            var totalYNomber;  //y轴上的标识数量
            var showArr;       //显示出来的数据部分（因为可以选择范围，所以需要这个数据）
            
            //范围选择属性
            var dragBarX,dragBarWidth; //范围选择条中的调节按钮的位置，宽度

            // 运动相关变量
            var ctr, numctr, speed;    //运动的起步，共有多少步，运动速度（timer的时间）
            //鼠标移动
            var mousePosition = {};     //用户存放鼠标位置

            // 创建canvas并获得canvas上下文
               //canvas = wx.createCanvasContext('Sgraphic');
               const ctx = wx.createCanvasContext('Sgraphic'); //小程序中的获取canvasID
            initChart(); // 图表初始化
            
            // 图表初始化
            function initChart(){
                // 图表信息
                cMargin = 6;
                cSpace = 8;
                //var that = this;
                //canvas.width = that.data.ScreenWidth  ;
                //canvas.height = 200;
                ctx.width = that.data.ScreenWidth  ;
                ctx.height = 200;
                
                //cHeight = canvas.height - cMargin*2-cSpace*2;
                //cWidth = canvas.width - cMargin*2-cSpace*2;
                cHeight = ctx.height - cMargin*2-cSpace*2;
                cWidth = ctx.width - cMargin*2-cSpace*2;
                originX = cMargin + cSpace;
                originY = cMargin + cHeight;
                
                showArr = dataArr.slice( 0,parseInt(dataArr.length/2) );

                // 柱状图信息
                tobalBars = showArr.length;
                bWidth = parseInt( cWidth/tobalBars/3);
                bMargin = parseInt( (cWidth-bWidth*tobalBars)/(tobalBars+1) );
                //算最大值，最小值
                maxValue = 0;
                minValue = 9999999;
                for(var i=0; i<dataArr.length; i++){
                    var barVal =  dataArr[i][1][3] ;
                    if( barVal > maxValue ){
                        maxValue = barVal;
                    }
                    var barVal2 =  dataArr[i][1][2] ;
                    if( barVal2 < minValue ){
                        minValue = barVal2;
                    }
                    
                }
                maxValue += 2; //上面预留20的空间
                minValue -= 2; //下面预留20的空间
                totalYNomber = 10;
                // 运动相关
                ctr = 1;
                numctr = 50;
                speed = 2;
                
                dragBarWidth = 30;
                dragBarX = cWidth/2+cSpace+cMargin-dragBarWidth/2;

            }

            drawLineLabelMarkers(); // 绘制图表轴、标签和标记
            // 绘制图表轴、标签和标记
            function drawLineLabelMarkers  (){
                ctx.font = "24px Arial";
                ctx.lineWidth = 2;
                ctx.fillStyle = "#000";
                ctx.strokeStyle = "#000";
                // y轴
               drawLine(originX, originY, originX, cMargin);
                // x轴
                drawLine(originX, originY, originX+cWidth, originY);

                // 绘制标记
                drawMarkers();
            }

            // 画线的方法
             function drawLine(x, y, X, Y){
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(X, Y);
                ctx.stroke();
                ctx.draw();
                ctx.closePath();
            }

            // 绘制标记
            function drawMarkers  (){
                ctx.strokeStyle = "#E0E0E0";
                // 绘制 y
                var oneVal = (maxValue-minValue)/totalYNomber;
                ctx.textAlign = "right";
                for(var i=0; i<=totalYNomber; i++){
                    var markerVal =  parseInt(i*oneVal+minValue);;
                    var xMarker = originX-10;
                    var yMarker = parseInt( originY-cHeight*(markerVal-minValue)/(maxValue-minValue) );
                    
                    ctx.fillText(markerVal, xMarker, yMarker+3, cSpace); // 文字
                    if(i>0){
                        drawLine(originX+2, yMarker, originX+cWidth, yMarker);
                    }
                }
                
                // 绘制 x
                var textNb = 6;
                ctx.textAlign = "center";
                for(var i=0; i<tobalBars; i++){
                    if(tobalBars>textNb &&  i%parseInt(tobalBars/6) != 0 ){
                        continue;
                    }
                    var markerVal = dataArr[i][0];
                    var xMarker = parseInt( originX+cWidth*(i/tobalBars)+bMargin+bWidth/2 );
                    var yMarker = originY+30;
                    ctx.fillText(markerVal, xMarker, yMarker, cSpace); // 文字
                }
                // 绘制标题 y
                ctx.save();
                ctx.rotate(-Math.PI/2);
                ctx.fillText("指 数", -ctx.height/2, cSpace-2);
                ctx.restore();
                // 绘制标题 x
                ctx.fillText("日 期", originX+cWidth/2, originY+cSpace-2);
            };
       
          drawBarAnimate(); // 绘制柱状图的动画
            //绘制k形图
            function drawBarAnimate(mouseMove){
                var parsent = ctr/numctr;
                for(var i=0; i<tobalBars; i++){
                    var oneVal = parseInt(maxValue/totalYNomber);
                    var data = dataArr[i][1];
                    var color = "#30C7C9";
                    var barVal = data[0];
                    var disY = 0;
                    //开盘0 收盘1 最低2 最高3   跌30C7C9  涨D7797F
                    if(data[1]>data[0]){ //涨
                        color = "#D7797F";
                        barVal = data[1];
                        disY = data[1]-data[0];
                    }else{
                        disY = data[0]-data[1];
                    }
                    var showH = disY/(maxValue-minValue)*cHeight*parsent;
                    showH = showH>2 ? showH : 2 ;
                    
                    var barH = parseInt( cHeight*(barVal-minValue)/(maxValue-minValue));
                    var y = originY - barH;
                    var x = originX + ((bWidth+bMargin)*i + bMargin)*parsent;
                    
                    drawRect( x, y, bWidth, showH, mouseMove, color,true);  //开盘收盘  高度减一避免盖住x轴
                    
                    //最高最低的线
                    showH = (data[3]-data[2])/(maxValue-minValue)*cHeight*parsent;
                    showH = showH>2 ? showH : 2 ;
                    
                    y = originY - parseInt( cHeight*(data[3]-minValue)/(maxValue-minValue));
                    drawRect( parseInt(x+bWidth/2-1), y, 2, showH, mouseMove, color);  //最高最低  高度减一避免盖住x轴
                }
                if(ctr<numctr){
                    ctr++;
                    setTimeout(function(){
                        ctx.clearRect(0,0,ctx.width, ctx.height);
                        drawLineLabelMarkers();
                        drawBarAnimate();
                        //drawDragBar();
                    }, speed*=0.03);
                }
            }

            //绘制方块
            function drawRect( x, y, X, Y, mouseMove , color, ifBigBar,ifDrag){

                ctx.beginPath();
                
                if( parseInt(x)%2 !== 0){  //避免基数像素在普通分辨率屏幕上出现方块模糊的情况
                    x += 1;
                }
                if( parseInt(y)%2 !== 0){
                    y += 1;
                }if( parseInt(X)%2 !== 0){
                    X += 1;
                }
                if( parseInt(Y)%2 !== 0){
                    Y += 1;
                }
                ctx.rect( parseInt(x), parseInt(y), parseInt(X), parseInt(Y) );
                
                if(ifBigBar && mouseMove && ctx.isPointInPath(mousePosition.x*2, mousePosition.y*2)){ //如果是鼠标移动的到柱状图上，重新绘制图表
                    ctx.strokeStyle = color;
                    ctx.strokeWidth = 20;
                    ctx.stroke();
                }
                //如果移动到拖动选择范围按钮
                /*ctx.style.cursor = "default";
                if(ifDrag && ctx.isPointInPath(mousePosition.x*2, mousePosition.y*2)){ //如果是鼠标移动的到调节范围按钮上，改变鼠标样式
                    //console.log(123);
                    ctx.style.cursor = "all-scroll";
                }*/
                ctx.fillStyle = color;
                ctx.fill();
                ctx.closePath();

            }

           

  }

  
})