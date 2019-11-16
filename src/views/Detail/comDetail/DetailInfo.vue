<template>
	<div class="detail-info" v-if="Object.keys(productInfo).length !== 0">
		<div class="section-title"><strong>{{productInfo.title}}</strong></div>
		<div class="section-price">
			<span class="oldprice-span">{{getOldPrice}}</span>
			<s class="newprice-span">{{getNewPrice}}</s>
			<div class="info-icon-price">今日特价</div>
			<div class="sell-data">
				<div class="sell-left">{{getSales}}</div>
				<div class="sell-center">{{getCollect}}</div>
				<div class="sell-right">{{productInfo.deliveryTime}}</div>
			</div>
		</div>
		<div class="section-footer">
			<div>延误比赔</div>
			<div>退货补运费</div>
			<div>全国包邮</div>
			<div>7天无理由退货</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailInfo',
		props:{
			productInfo:{
				type:Object,
				default:()=>{}
			}
		},
		computed:{
			getOldPrice(){
				if(typeof this.productInfo !== "undefined"){
					return "￥"+this.productInfo.oldprice;
				}
			},
			getNewPrice(){
				if(typeof this.productInfo !== "undefined"){
					return "￥"+this.productInfo.newprice;
				}
			},
			getSales(){
				if(typeof this.productInfo !== "undefined"){
					return "销量"+this.productInfo.sales;
				}
			},
			getCollect(){
				if(typeof this.productInfo !== "undefined"){
					return "收藏"+this.productInfo.collect+"人";
				}
			}
		}
	}
</script>

<style>
	.detail-info{
		margin-top: 15px;
	}
	.section-title{
		margin: 0px 0 10px 0;
		font-size: 22px;
	}
	.section-price{
		border-bottom: 10px solid #eee;
	}
	.oldprice-span{
		font-size: 22px;
		color: deeppink;
	}
	.newprice-span{
		font-size: 16px;
		color: lightgrey;
	}
	.info-icon-price{
		display: inline-block;
		width: 65px;
		height: 20px;
		line-height: 20px;
		font-size: 12px;
		text-align: center;
		position: relative;
		top: -5px;
		background: deeppink;
		border-radius: 20px;
		color: white;
	}
	.sell-data{
		display: flex;
		margin: 20px 0 10px 0;
		color: gray;
	}
	.sell-data div{
		flex: 1;
	}
	.sell-left{
		text-align: left;
	}
	.sell-center{
		text-align: center;
	}
	.sell-right{
		text-align: right;
	}
	.section-footer{
		height: 50px;
		line-height: 50px;
		display: flex;
		justify-content: space-around;
		border-bottom: 10px solid #eee;
	}
</style>
