<template>
  <div>
    <nav-bar title="商品详情" />
    <div class="thumbnail">
      <img :src="gdDetails.cimg |changs()" alt="...">
      <div class="caption">
        <h2>{{gdDetails.cname | controll(6)}}</h2>
        <div class="price">市场价:<s>￥{{gdDetails.id}}</s><span>现售价:￥{{gdDetails.sid*100}}</span></div>
      </div>
      <div>
        <ul>


          <li class="num">购买数量:&nbsp;<span @click="down">-</span><span>{{buynum}}</span><span @click="add">+</span></li>
          <li class="buy">
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click="addShop">加入购物车</mt-button>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import Mybuy from '@/Mybuy';
  import Goods from '@/Goods';
  export default {
    name: 'goodsDetails',
    data() {
      return {
        goods_id: this.$route.params.goods_id,
        gdDetails: {},
        buynum:1,
      }
    },
    methods:{
      addShop(){
        Goods.addShop({
          id:this.goods_id,
          num:this.buynum
        });
        Mybuy.$emit('addShop',this.buynum);
      },
      down(){
        if(this.buynum==1) return;
        this.buynum--;
      },
      add(){
        if(this.buynum>=5) return;
        this.buynum++;
      }
    },
    created() {
      this.$axios.get('getGoodsDetail?goods_id=' + this.goods_id).then(res => {
        this.gdDetails = res.data.data;
      }).catch(err => console.log(err))
    }
  }
</script>

<style scoped>
  .thumbnail {
    padding: 5px;
    /* height: 0px; */
    line-height: 1.42857143;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: auto;


  }

  ul {
    list-style: none;
    padding: 0;
  }
.thumbnail>img {
    display: block;
    vertical-align: middle;
    border: 0;
    width: 100%;
    height: 150px;
  }
  .num>span:nth-child(odd){
    display: inline-block;
    text-align: center;

    width: 35px;
    height: 20px;
    border: 1px solid #333333;
  }
  .num>span:nth-child(even){
    display: inline-block;
    text-align: center;

    width: 35px;
    height: 20px;
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
  }
  .price>span {
    float: right;
    color: red;
  }
  .buy{
    margin-top: 5px;
  }
</style>
