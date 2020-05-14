<template>
  <div class="show">
    <nav-bar title="商品展示" />
    <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :auto-fill="autoFill"
      ref="loadmore">
      <ul>
        <li v-for="(item,index) in gdlist" :key="index">
          <router-link :to="{name:'goodsDetails',params:{goods_id:item.id}}">
          <div class="thumbnail">
            <img :src="item.cimg |changs()" alt="...">
            <div class="caption">
              <div align="center">{{item.cname | controll(10)}}</div>
              <div class="price"><span>￥{{item.id}}</span><s>￥{{item.id*10}}</s></div>
              <div class="detail">
                <div class="hot">热卖中</div>
                <div class="count">剩余{{item.id}}件</div>
              </div>

            </div>
          </div>
          </router-link>
        </li>
      </ul>
    </mt-loadmore>
  </div>


</template>

<script>
  export default {
    name: 'goodsList',
    data() {
      return {
        gdlist: [],
        allLoaded: false,
        autoFill:false,
        page:this.$route.params.page,
      }
    },
    methods: {
      loadBottom() {
        console.log('上拉调用');
        this.loadGoodByPage()
        this.$refs.loadmore.onBottomLoaded();
      },
      handleBottomChange(staus) {
        console.log(staus);

      },
      loadGoodByPage(){
        this.$axios.get('getGoodsList?page='+this.page).then(res => {
        let { length } = res.data.data;
        if(length<6)
        {
          this.$toast('没有更多数据了');
          this.allLoaded=true;
          return;
        }
        if(this.page===9)
        {
          this.gdlist = res.data.data;
        }
        else{
          this.gdlist=this.gdlist.concat(res.data.data);
        }
        this.page++;
      }).catch(err => console.log(err))
      },

    },
    created() {
      // let {
      //   page
      // } = this.$route.params;
      this.loadGoodByPage();

    }
  }
</script>

<style>
  .show ul {
    padding: 0;
    height: 100%;
    margin: 0 0 50px 0;
     overflow-x:hidden ;
     overflow-y: scroll;


  }
ul::-webkit-scrollbar {
  display:none
  }
  /* 隐藏滚动条 */
  .show a{
    text-decoration: none;
  }
  .show ul li {
    width: 50%;
    height: 250px;
    display: inline-block;
  }

  .thumbnail {
    padding: 2px;
    height: 220px;
    line-height: 1.42857143;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;


  }

  .thumbnail>img {
    display: block;
    vertical-align: middle;
    border: 0;
    width: 100%;
    height: 150px;
  }

  .thumbnail .caption {
    padding: 2px;
    color: #333;
  }

  .price>span {
    color: red;
  }

  .detail {
    font-size: 14px;
  }

  .hot {
    float: left;
  }

  .count {
    float: right;
  }
ul{

}

</style>
