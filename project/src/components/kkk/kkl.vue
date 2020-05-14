<template>
    <div>
      <nav-bar title="当前位置"/>
      <div ref="allmap" style="width: 100%;height: 78%; margin:5px 0px;"></div>
    </div>


</template>

<script>
  import Map from '@/Map';
  import { MessageBox } from 'mint-ui';
  export default {
    name:'kkl',
    data() {
      return {

      }
  },

 mounted(){
   Map.init().then((BMap)=>{
     console.log(BMap);
      this.ini();

   });

 },
  methods:{
    ini(){
      var map = new BMap.Map(this.$refs.allmap);
      var point = new BMap.Point(116.331398,39.897445);
      map.enableScrollWheelZoom(true);//鼠标滚动缩放
      map.centerAndZoom(point,12);
       var gc = new BMap.Geocoder();
      //  var icon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {
      //             offset: new BMap.Size(10, 25),              // 定位图标尺寸
      //             imageOffset: new BMap.Size(0, 0 - 11 * 25)  // 设置图片偏移
      //         });
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
      var mk = new BMap.Marker(r.point);
      map.addOverlay(mk);
      map.panTo(r.point);
      gc.getLocation(r.point, function(rs){
          var addComp = rs.addressComponents;
          //alert(addComp.city);

          MessageBox({
                       title: '当前位置',
                       message: addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber,

                       confirmButtonText:"确定"

                     })
         //alert(addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber);
      });
      // alert('您的位置：'+r.point.lng+','+r.point.lat);
       // alert(addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber);
      }
      else {
      alert('failed'+this.getStatus());
      }        
      },{enableHighAccuracy: true})
    }
  }
  }
</script>

<style>
</style>
