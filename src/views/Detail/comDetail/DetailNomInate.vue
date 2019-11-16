<template>
	<div class="detail-nominate" v-if="nomInate.length > 0">
		<div class="shop-nominate">
			<span>推荐商品</span>
		</div>
		<goods-list :goodslistdata="nomInate" />
	</div>
</template>

<script>
	import goodsList from '@/components/content/goods/goodsList'
	export default {
		name:'DetailNomInate',
		props:{
			nomInate:{
				type:Array,
				default:null
			}
		},
		computed:{
			getnom(){
				console.log(this.nomInate)
				return this.nomInate
			}
		},
		components:{
			goodsList
		}
	}
</script>

<style>
	.shop-nominate{
		text-align: center;
		padding: 10px 0 10px 0;
	}
</style>
