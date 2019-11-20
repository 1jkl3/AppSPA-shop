<template>
	<div class="detail-bottom-bar">
		<div class="bottom-left">
			<div><i class="iconfont">&#xe637;</i><div>客服</div></div>
			<div><i class="iconfont">&#xe655;</i><div>店铺</div></div>
			<div @click="collectProduct"><i class="iconfont" :class="{collectActive:controlClass}">&#xe60b;</i><div>收藏</div></div>
		</div>
		<div class="bottom-right">
			<div @click="JoinCart">加入购物车</div>
			<div @click="BuyShop">购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailBottomBar',
		data(){
			return {
				controlClass:false
			}
		},
		methods:{
			collectProduct(){
				this.controlClass = !this.controlClass
			},
			JoinCart(){
				this.$emit("cartTo")
			},
			BuyShop(){
				
			}
		}
	}
</script>

<style>
	.detail-bottom-bar{
		display: flex;
		height: 49px;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.bottom-left{
		flex: 1;
		text-align: center;
		display: flex;
		background: white;
	}
	.bottom-left div{
		flex: 1;
	}
	.bottom-right{
		text-align: center;
		flex: 1;
		display: flex;
		background: blue;
	}
	.bottom-right div{
		flex: 1;
		line-height: 49px;
	}
	.bottom-right div:nth-of-type(1){
		background: yellow;
	}
	.bottom-right div:nth-of-type(2){
		background: deeppink;
	}
	.collectActive{
		color: yellow;
	}
</style>
