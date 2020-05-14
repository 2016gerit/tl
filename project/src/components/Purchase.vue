<template>
  <div class="tmp">
    <nav-bar :title="title" />
    <div class="pay">
      <ul>
        <li v-for="(item,index) in shopcart" :key="index">
          <mt-switch v-model="item.isSelected"></mt-switch>
          <img :src="item.cimg |changs()">
          <div class="pay-calc"></div>
          <p>{{item.cname}}</p>
          <div class="calc">
            <div class="calc1">￥{{item.id}}</div>
            <span @click="down(item)">-</span>
            <span>{{item.buynum}}</span>
            <span @click="add(item)">+</span>

            <a href="javascript:;" @click="del(item,index)">删除</a>
          </div>
        </li>
      </ul>
      <div class="sum">
        <span>总计(不含运费)</span>
        <span>已经选择商品{{pay.count}}件，总价￥{{pay.total}}元<mt-button size="small" type="danger" @click="pay">去结算</mt-button></span>
      </div>
    </div>

  </div>
</template>

<script>
  import Mybuy from '@/Mybuy';
  // import { MessageBox } from 'mint-ui';
  export default {
    name: 'Purchase',
    data() {
      return {
        title: '购物车',
        shopcart: []
      }
    },
    beforeRouteLeave(to, from, next) {

      // let result = MessageBox({
      //   title: '提示',
      //   message: '确定执行此操作?',
      //   showCancelButton: true
      // });console.log(result);
      // result.confirm(message,title);
       this.$messagebox({
                    title: '提示',
                    message: '确定执行此操作吗?',
                    showCancelButton: true,
                    confirmButtonText:"确定",
                    cancelButtonText:"取消"
                  }).then(action => {
                    if(action == 'confirm'){
                      let total = Object.values(test.goodsObj).reduce((prev, cur) => prev + cur);
                      Mybuy.$emit('shopNum', total);
                      next();
                    }else{
                      next(false);
                    }
                })
      // let result = confirm('确定要离开吗？');

      // if (result) {
      //   let total = Object.values(test.goodsObj).reduce((prev, cur) => prev + cur);
      //   Mybuy.$emit('shopNum', total);
      //   next();
      // } else {
      //   next(false);
      // }

    },
    methods: {
      del(goods, index) {
        this.shopcart.splice(index, 1);
        delete test.goodsObj[goods.id];
        // Mybuy.$emit('del', goods.buynum);

      },
      down(goods) {
        if (goods.buynum == 1) {
          return;
        } else {
          goods.buynum--;
          test.goodsObj[goods.id]--;
          // Mybuy.$emit('del',1);
        }



      },
      add(goods) {
        if (goods.buynum >= 6) {
          return;
        } else {
          goods.buynum++;
          test.goodsObj[goods.id]++;
          // Mybuy.$emit('addShop',1);
        }

      }
    },
    computed: {
      pay() {
        let count = 0;
        let total = 0;
        this.shopcart.forEach(goods => {
          if (goods.isSelected) {
            count += goods.buynum;
            total += goods.buynum * goods.id;
          }
        });
        return {
          count,
          total
        }
      }
    },

    async created() {
      let url = 'getGoodsDetails?goods_id=' + Object.keys(test.goodsObj).join(',');
      this.shopcart = (await this.$axios.get(url)).data.data;
      for (let i = 0; i < this.shopcart.length; i++) {
        let goods = this.shopcart[i];
        let num = test.goodsObj[goods.id];
        if (num) {
          // this.shopcart[i].buynum=num;
          // this.shopcart[i].isSelected=true;
          this.$set(goods, 'buynum', num);
          this.$set(goods, 'isSelected', true)
        }
      }
    }

  }
</script>

<style scoped>
  ul {
    padding: 0;

  }

  .sum {
    width: 100%;
    height: 100px;
    margin-bottom: 40px;
    background-color: grey;
    border-radius: 4px;
  }

  .sum>span {
    display: block;
    margin: 3px 0 0 6px;
    padding: 6px 0 0 0;
  }

  li {
    margin-bottom: 10px;
    border-bottom: 1px solid #333333;
  }

  .mint-button--small {

    float: right;
    margin-right: 15px;
  }

  .mint-switch {
    display: inline-block;
    vertical-align: top;
  }

  .calc {
    margin-bottom: 3px;
    padding: 0;
  }

  .calc1 {
    display: inline-block;
    margin-right: 3px;
  }

  .calc>span:nth-child(odd) {
    display: inline-block;
    text-align: center;
    width: 35px;
    height: 20px;
    margin-left: -5px;
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
  }

  .calc>span:nth-child(even) {
    display: inline-block;
    text-align: center;
    margin-left: -5px;
    width: 35px;
    height: 20px;
    border: 1px solid #333333;
  }

  img {
    display: inline-block;
    margin-left: 20px;
    width: 35%;
    height: 120px;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 16px;
    color: blue;
  }
</style>
