<template>
	<div class="detail-shop">
		<div class="shop-name">
			<div class="shop-img">
				<img class="img-shop" :src="getshopImg" />
			</div>
			<div class="shopname">{{getshopName}}</div>
		</div>
		<div class="shop-data">
			<div class="data-left">
				<div class="top-data">
					<span>{{getallSales}}</span><br />
					<span>总销量</span>
				</div>
				<div class="bottom-data">
					<span>{{getalldetail}}</span><br />
					<span>全部宝贝</span>
				</div>
			</div>
			<div class="data-right">
				<div class="span-describe">
					<div class="span-left">
						<span>描述相符:</span><span :class="[{colorspan:isdescribe==0},{colorspan2:isdescribe==1}]">{{getdescribe}}</span>
					</div>
					<div class="span-rigth">
						<span :class="[{isheight:isdescribe==0},{isheight2:isdescribe==1}]">{{judgeDescribe}}</span>
					</div>
				</div>
				<div class="span-describe">
					<div class="span-left">
						<span>价格合理:</span><span :class="[{colorspan:ispriceParma==0},{colorspan2:ispriceParma==1}]">{{getpriceParma}}</span>
					</div>
					<div class="span-rigth">
						<span :class="[{isheight:ispriceParma==0},{isheight2:ispriceParma==1}]">{{judgepriceParma}}</span>
					</div>
				</div>
				<div class="span-describe">
					<div class="span-left">
						<span>质量满意:</span><span :class="[{colorspan:ismassMay==0},{colorspan2:ismassMay==1}]">{{getmassMay}}</span>
					</div>
					<div class="span-rigth">
						<span :class="[{isheight:ismassMay==0},{isheight2:ismassMay==1}]">{{judgemassMay}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="shop-footer">
			<button class="shop-click">进店逛逛</button>
		</div>
	</div>
</template>

<script>
	import {giveformat} from '@/common/util/moenyformat.js'
	export default {
		name:'DetailShop',
		data(){
			return {
				isdescribe:0,
				ispriceParma:0,
				ismassMay:0
			}
		},
		props:{
			shopInfo:{
				type:Object,
				default:()=>{}
			}
		},
		computed:{
			getshopImg(){
				if(typeof this.shopInfo !== "undefined"){
					return require('@/assets/'+this.shopInfo.shopImg)
				}
			},
			getshopName(){
				if(typeof this.shopInfo !== "undefined"){
					return this.shopInfo.shopName
				}
			},
			getallSales(){
				if(typeof this.shopInfo !== "undefined"){
					return giveformat(this.shopInfo.allSales,"万")
				}
			},
			getalldetail(){
				if(typeof this.shopInfo !== "undefined"){
					return this.shopInfo.alldetail
				}
			},
			getdescribe(){
				if(typeof this.shopInfo !== "undefined"){
					return this.shopInfo.describe
				}
			},
			getpriceParma(){
				if(typeof this.shopInfo !== "undefined"){
					return this.shopInfo.priceParma
				}
			},
			getmassMay(){
				if(typeof this.shopInfo !== "undefined"){
					return this.shopInfo.massMay
				}
			},
			judgeDescribe(){
				let then = this
				if(then.getdescribe>=4.5){
					then.isdescribe=0
					return "高"
				}else{
					then.isdescribe=1
					return "低"
				}
			},
			judgepriceParma(){
				let then = this
				if(then.getpriceParma>=4.5){
					then.ispriceParma=0
					return "高"
				}else{
					then.ispriceParma=1
					return "低"
				}
			},
			judgemassMay(){
				let then = this
				if(then.getmassMay>=4.5){
					then.ismassMay=0
					return "高"
				}else{
					then.ismassMay=1
					return "低"
				}
			}
		},
	}
</script>

<style>
	.detail-shop{
		
	}
	.shop-name{
		display: flex;
		height: 80px;
		line-height: 80px;
	}
	.shop-img{
		width: 50px;
		display: flex;
	}
	.img-shop{
		align-self: center;
		width: 100%;
		height: 50%;
		border-radius: 50%;
	}
	.shopname{
		flex: 1;
		height: 100%;
		align-self: center;
		font-size: 18px;
	}
	.shop-data{
		height: 150px;
		display: flex;
		height: 100px;
	}
	.data-left{
		height: 100%;
		flex: 1;
		text-align: center;
		position: relative;
		display: flex;
		align-items: center;
	}
	.data-left ::after{
		content: '';
		position: absolute;
		right: 0;
		top: 15px;
		bottom: 15px;
		width: 0.5px;
		background-color: gray;
	}
	.top-data{
		flex: 1;
	}
	.bottom-data{
		flex: 1;
	}
	.data-right{
		flex: 1;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: space-between;
	}
	.span-describe{
		flex: 1;
		display: flex;
		flex-wrap: nowrap;
	}
	.span-left{
		width: 120px;
	}
	.span-rigth{
		flex: 1;
	}
	.colorspan{
		color: deeppink;
	}
	.colorspan2{
		color: #007AFF;
	}
	.isheight{
		background-color: deeppink;
		color: white;
	}
	.isheight2{
		background-color: #007AFF;
		color: white;
	}
	.shop-footer{
		height: 50px;
		margin: 0 auto;
		text-align: center;
		border-bottom: 10px solid #eee;
	}
	.shop-click{
		height: 36px;
		width: 200px;
		outline: none;
		border: 0px;
		color: gray;
	}
</style>
