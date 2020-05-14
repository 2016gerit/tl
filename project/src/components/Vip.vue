<template>
  <div>
    <nav-bar :title="title" />
    <div class="user">
      <img src="../../static/image/user.jpg" />
      <div class="username">
        <p>有一种智慧叫放下</p>
        <p><img slot="icon" src="../../static/image/level.png"><span>15</span>
        <img slot="icon" src="../../static/image/money.png" ><span><font color="blueviolet">200</font></span>
        </p>
      </div>
    </div>
    <div class="vip">

      <mt-cell title="我的资料" is-link >
        <!-- <span icon="more"></span> -->
        <img slot="icon" src="../../static/image/mydetail.png" width="28" height="28">
      </mt-cell>
      <mt-cell title="开通会员" is-link>
        <!-- <span>icon 是图片</span> -->
        <img slot="icon" src="../../static/image/kvip.png" width="28" height="28">
      </mt-cell>
      <mt-cell title="我的收藏" is-link>
        <!-- <span>icon 是图片</span> -->
        <img slot="icon" src="../../static/image/heart.png" width="26" height="26">
      </mt-cell>
      <mt-cell title="问题反馈" is-link>
        <!-- <span>icon 是图片</span> -->
        <img slot="icon" src="../../static/image/question.png" width="28" height="28">
      </mt-cell>
      <mt-cell title="添加地址" is-link :to="{name:'kkl'}">
        <!-- <span>icon 是图片</span> -->
        <img slot="icon" src="../../static/image/house.png" width="27" height="27">
      </mt-cell>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'Vip',
    data() {
      return {
        title: '会员中心'
      }
    },
    methods: {
      handle() {
        this.$toast({
          message: 'operation success',
          iconClass: 'icon icon-success',

        });
      },

    }
  }
</script>

<style scoped>
  .vip {

    padding-bottom: 50px;
  }
/* .mint-cell-text {
    font-weight: 400 ;
    color: #5a5a5a ;
    vertical-align: middle;
    font-size: 14px ;
} */
  .user {
    margin: 0;
    padding: 5px 0 5px 5px;
  }

  .user>img {
    width: 28%;
    height: 100px;
    border: 1px solid #DDDDDD;
    border-radius: 100%;
  }

  .username {
    width: 68%;
    height: 100px;
    margin-left: 5px;
    padding-top: 5px;
    display: inline-block;
    vertical-align: top;


  }

  p>span {
    line-height: 1.8;
    display: inline-block;
    vertical-align: top;
    /* font-weight: 100; */
    font-size: 17px;
    color: #5a5a5a;

  }
  p>img{
    padding-left: 5px;
  }
</style>
