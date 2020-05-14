<template>
	<div>
		<nav-bar :title="title" />
		<div>
			<ul>
				<li v-for="(item,index) in msg" :key="index">
					<router-link :to="{name:'Newsdetail',params:{id:item.id}}"><img :src="item.news_img">
						<div class="right">
							<h3>{{item.news_title}}</h3>
							<p>{{item.ctime |coverTime('YYYY-MM-DD')}}</p>
						</div>

					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'News',
		data() {
			return {
				title: '新闻资讯',
				msg: []
			}
		},
		created() {
			this.$axios.get('http://guangaitang.e3e2.com/api/News/news').then(res => {
				console.log(res);
				this.msg = res.data.data;
			}).catch(err => console.log(err));
		}
	}
</script>

<style scoped>
	/* .list {
		overflow-y: scroll;

	} */

	ul {
		margin: 0;
		padding: 0px 5px;
		list-style: none;
	}
	li{
		margin: 5px 0;
		border-bottom: 1px solid green;
		padding-bottom: 3px;

	}
	a{
		color: black;
		text-decoration: none;
	}
	img {
		width: 100px;
		height: 100px;

		border-radius: 50%;
		position: absolute;
	}
	.right{
		margin: 0;
		padding: 0;
		display: inline-block;
		margin-left: 115px;
		position: relative;
	}
	.mint-tabbar{
		position: fixed;
		bottom: 0;
	}
</style>
