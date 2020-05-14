<template>
	<div>
		<mt-header  title="管理系统"></mt-header>
    <transition name="fade" model="out-in">
		<router-view/>
    </transition>
		<mt-tabbar v-model="selected">

			<mt-tab-item id="Home">
        <div @click="change('Home')" class="kk" >
				<img slot="icon" src="../static/image/index.png"><span>首页</span>
        </div>
			</mt-tab-item>
			<mt-tab-item id="Vip">
        <div @click="change('Vip')" class="kk">
				<img slot="icon" src="../static/image/vip.png"><span>会员</span>
        </div>
			</mt-tab-item>
			<mt-tab-item id="Purchase">
        <div @click="change('Purchase')" class="kk" >
				<img slot="icon" src="../static/image/purchase.png"><span>购物车 <mt-badge size="small" type="error">{{totalNum}}</mt-badge></span>
			</div>
      </mt-tab-item>
			<mt-tab-item id="Find">
        <div @click="change('Find')" class="kk" >
				<img slot="icon" src="../static/image/find.png"> <span>查找</span>
        </div>
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
  import Mybuy from './Mybuy';
	export default {
		name: 'App',
    created() {
      Mybuy.$on('addShop',(num)=>{
        this.totalNum+=num;
      });
      // Mybuy.$on('del',(n)=>{
      //   this.totalNum-=n;
      // });
      Mybuy.$on('shopNum',(num)=>{
        this.totalNum=num;
      });
    },
		data (){
			return {
				selected:'',
				totalNum:0
			}
		},
    methods:{
      change(val) {
        // this.selected=val;
        this.$router.push({
        	name:val
        })
      }
    }
		// watch:{
		// 	selected:function(newV,oldV){
		// 		console.log(this.$router);
		// 		this.$router.push({
		// 			name:newV
		// 		})
		// 	}
		// }
	}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* .mint-tab-item-label>img{
  width: 24px;
  height: 24px;
} */
.kk>span{
  display: block;
  padding-top: 5px;


}
.kk>img{
  width: 24px;
  height: 24px;

}
</style>
