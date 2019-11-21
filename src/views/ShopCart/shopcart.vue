<template>
	<div class="shop-cart">
		<cart-nav />
		<common-scroll class="shop-scroll" :listenScroll="true"  ref="shopScroll">
			<cart-list />
		</common-scroll>
		<cart-collect />
	</div>
</template>

<script>
	import CartNav from './comShopCart/CartNav'
	import CartList from './comShopCart/CartList'
	import CartCollect from './comShopCart/CartCollect'
	import CommonScroll from '@/components/common/CommonScroll'
	export default {
		name:'ShopCart',
		components:{
			CartNav,
			CommonScroll,
			CartList,
			CartCollect
		},
		computed:{
			getcart(){
				let arr ={}
				arr.cart=this.$store.getters.get_cart
				return arr
			}
		},
		activated(){
			this.$refs.shopScroll.refresh()
		},
		watch:{
			getcart:function(val){
				this.$refs.shopScroll.refresh()
			}
		}
	}
</script>

<style>
	.shop-cart{
		height: 100vh;
	}
	.shop-scroll{
		background: #f5fffa;
		height: calc(100% - 44px - 49px - 40px);
		overflow: hidden;
	}
</style>
