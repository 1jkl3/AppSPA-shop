<template>
	<div class="goods-list">
		<goods-list-item v-for="(item,index) in goodslistdata" :key='index' :listdata="item"></goods-list-item>
	</div>
</template>

<script>
	import goodsListItem from './goodsListItem'
	export default {
		name:'goodsList',
		components:{
			goodsListItem
		},
		props:{
			goodslistdata:{
					type:Array,
					default:null
				}
		}
	}
</script>

<style>
	.goods-list{
		/* margin: 20px 1% 10px 1%; */
		width: 100%;
		margin: 0 auto;
		/* display: flex; */
		column-count: 2;
		column-gap: 8px;
		/* flex-wrap: wrap;/* 换行符的意思,其中的儿子的宽控制其在一行多大时换行 */ 
		/* justify-content: space-around;/* flex中的div居中 */ 
	}
</style>
