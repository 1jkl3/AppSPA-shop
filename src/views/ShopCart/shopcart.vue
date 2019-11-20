<template>
	<div class="shop-cart">
		<cart-nav />
		<common-scroll class="shop-scroll" :listenScroll="true">
			<cart-item></cart-item>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
			<div>1</div>
		</common-scroll>
	</div>
</template>

<script>
	import cartNav from './comShopCart/cartNav'
	import cartItem from './comShopCart/cartItem'
	import CommonScroll from '@/components/common/CommonScroll'
	export default {
		name:'shopcart',
		components:{
			cartNav,
			CommonScroll,
			cartItem
		}
	}
</script>

<style>
	.shop-cart{
		height: 100vh;
	}
	.shop-scroll{
		background: #9DA0A4;
		height: calc(100% - 44px - 49px);
		overflow: hidden;
	}
</style>
