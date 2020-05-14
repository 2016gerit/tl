<template>

  <div class="pic">
    <nav-bar title="图文列表"/>
    <mt-navbar v-model="selected" >
      <mt-tab-item id="1">风景</mt-tab-item>
      <mt-tab-item id="2">建筑</mt-tab-item>
      <mt-tab-item id="3">美食</mt-tab-item>
      <mt-tab-item id="4">汽车</mt-tab-item>
      <mt-tab-item id="5">美女</mt-tab-item>
      <mt-tab-item id="6">旅游</mt-tab-item>



    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div>
          <ul>
            <li>
              <img src="../../../static/image/1.jpg" />
            </li>
            <li>
              <img src="../../../static/image/2.jpg" />
            </li>
            <li>
              <img src="../../../static/image/3.jpg" />
            </li>
          </ul>
        </div>

      </mt-tab-container-item>
      <mt-tab-container-item id="2">
       <div>
         <ul>
           <li>
             <img src="../../../static/image/21.jpg" />
           </li>
           <li>
             <img src="../../../static/image/22.jpg" />
           </li>
           <li>
             <img src="../../../static/image/23.jpg" />
           </li>
         </ul>
       </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div>
          <ul>
            <li>
              <img src="../../../static/image/31.jpg" />
            </li>
            <li>
              <img src="../../../static/image/32.jpg" />
            </li>
            <li>
              <img src="../../../static/image/33.jpg" />
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    name:'Picture',
    data () {
      return {
        selected:''
      }

    }
  }
</script>

<style scoped>
  .mint-tab-container {
      overflow: hidden;
      position: relative;
      top: 5px;
  }
  .pic{
    margin-bottom: 55px;
  }
  li{
    padding: 0 5;
  }
  ul{
    list-style: none;
    padding: 0;
  }
  li>img{
    width: 100%;
    height: 150px;
    border-radius: 4px;
  }
  
</style>
