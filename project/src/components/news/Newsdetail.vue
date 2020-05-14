<template>
	<div>
		<nav-bar title="新闻详情"/>
		<h2 align="center">{{newsInfo.news_title}}</h2>
	<div class="sp">
		<span>0次点击</span>
		<span>分类：名声经济</span>
		<span>添加时间：2015-01-02</span>
	</div>
	<div class="content" v-html="newsInfo.news_content"></div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				newsInfo:{},
				
			}
		},
		created() {
			const id=this.$route.params;
			console.log(id.id);
			let url= 'http://guangaitang.e3e2.com/api/News/news';
			this.$axios.get(url)
			.then(res=>{
				
				for(var i=0;i<res.data.data.length;i++)
				{
					
					if(res.data.data[i].id===id.id)
					{
						this.newsInfo=res.data.data[i];
						break;
					}
				}
				
			}).catch(err=>console.log(err));
		}
	}
</script>

<style>
	
	.content{
		padding:10 5px;
		margin: 0;
		width: 100%;
		height: 100%;
	}
	.content img{
		width: 100%;
		height: 200px;
	}
	.mint-tabbar{
		position: fixed;
		bottom: 0;
	
	}
	.sp span{
		margin-right: 10px;
	}
</style>