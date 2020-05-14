<template>
	<div>

		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,index) of msg" :key="index"><img :src="item.cimg |changs()" alt="" width="100%" height="200px"></mt-swipe-item>

		</mt-swipe>
		<div class="nine">
			<ul>
				<li v-for="(item,index) in moudle" :key="index"><router-link :to="item.href"><img :src="item.sr"><p>{{item.title}}</p></router-link>
				</li>
			</ul>

		</div>
	</div>

</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				msg:[],
				moudle:[
				{href:'/News',title:'新闻资讯',sr:'./static/image/news.png'},
				{href:{name:'Picture'},title:'图文分享',sr:'./static/image/image.png'},
				{href:{name:'goodsList',params:{page:9}},title:'商品展示',sr:'./static/image/store.png'},
				{href:{name:'kkl'},title:'留言反馈',sr:'./static/image/words.png'},
				{href:'/',title:'搜索咨询',sr:'./static/image/finds.png'},
				{href:'/',title:'联系我们',sr:'./static/image/contacts.png'}
				]
			}
		},
		created (){

			this.$axios.get('getGoodsList/3').then(res=>{

				console.log(res);
				this.msg=res.data.data;
			}).catch(err=>console.log(err));
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nine{
	margin-top: 20px;
	padding: 0;
}
.mint-swipe{
  height: 200px;
}
ul{
	margin: 0;
	padding: 0;
	overflow: hidden;
}
ul li{
	display: inline-block;
  font-size: 14px;
	margin: 20px 0 0 0;
	width: 33.33%;
	/* height: 50px; */
	text-align: center;
}
a{
	text-decoration: none;
	color: black;
}
li img{
	width: 50px;
	height: 50px;
  border-radius: 20%;
	text-align: center;
}
p{
	text-align: center;
}
</style>
