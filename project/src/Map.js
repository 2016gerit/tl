let map = {

  init() {
    
    const AK = "4OCDrEoimAIp0IXpsz8lPbMSI8czMp6v";
        const BMap_URL = "http://api.map.baidu.com/api?v=2.0&ak="+ AK +"&s=1&callback=onBMapCallback";
        return new Promise((resolve, reject) => {
          // 如果已加载直接返回
          if(typeof BMap !== "undefined") {
            resolve(BMap);
            return true;
          }
          // 百度地图异步加载回调处理
          window.onBMapCallback = function () {
            console.log("百度地图脚本初始化成功...");
            resolve(BMap);
          };
    
          // 插入script脚本
          let scriptNode = document.createElement("script");
          scriptNode.setAttribute("type", "text/javascript");
          scriptNode.setAttribute("src", BMap_URL);
          document.body.appendChild(scriptNode);
        });
      }
    
    // var mapp = document.createElement("script");
    // let src = "http://api.map.baidu.com/api?v=2.0&ak=4OCDrEoimAIp0IXpsz8lPbMSI8czMp6v";
    // mapp.src = src;
    // let nn = document.getElementsByTagName("head")[0];
    // nn.appendChild(mapp);

  }

export default map;
