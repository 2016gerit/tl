<template>
	<div>
	<nav-bar :title="title"/>
 <mt-search @keyup.native="jj" :placeholder="value" @keyup.enter.native="search" style="height:auto;">

 </mt-search>
 <mt-cell v-show="show"
     v-for="(item,index) in result"
     :key="index"
     :title="item.title"
     :value="item.value">
   </mt-cell>
 <!-- <div>{{value}}</div>
 <div>{{num}}</div> -->
	</div>
</template>

<script>
	export default {
		name:'Find',
		data(){
			return {
				title:'查找中心',
        result:[
          {title:'成功',value:123},
          {title:'失败',value : 456,}
        ],
        show:false,
        value:12,
        v:0

			}
		},
    mounted(){
      // this.kk();



         setInterval(this.kk,2000);

    },
    // watch:{
    //

    methods:{
      search(){
        this.show=true;

      },
      kk(){
        // if(document.hasFocus())
        //   {

        //      clearInterval(k)
        //   }
        this.value= Math.floor(Math.random()*10+1);
      },
      jj(){
        console.log(this.v++)
      }



    }
	}
</script>

<style>
</style>
