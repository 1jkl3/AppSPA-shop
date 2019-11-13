<template>
	<div class="detail-img">
		<div class="info-start">
			<div class="start"></div>
			<div class="info-content">
				<span>{{getAnchor}}</span>
			</div>
			<div class="end"></div>
		</div>
		<div class="info-img">
			<p>{{getKey}}</p>
			<div class="img-info" v-for="item in getList" :key="item">
				<img style="width: 100%;" @load="detailimg" :src="require('@/assets/'+item)" />
			</div>
		</div>
		<div class="info-message">
			<div class="info-style"></div>
			<div class="body-msg">
				<div>价格说明</div>
				<span>指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。</span>
			</div>
			<div class="info-declare">
				<span>*交易中请勿使用阿里旺旺以外的聊天工具沟通，不要接收可疑文件和不要点击不明来源的链接，支付前核实好域名和支付详情。</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailImg',
		data(){
			return{
				isimg:false
			}
		},
		props:{
			detailImage:{
				type:Object,
				default:()=>{}
			}
		},
		computed:{
			getAnchor(){
				if(typeof this.detailImage !== "undefined"){
					return this.detailImage.anchor
				}
			},
			getKey(){
				if(typeof this.detailImage !== "undefined"){
					return this.detailImage.key
				}
			},
			getList(){
				if(typeof this.detailImage !== "undefined"){
					return this.detailImage.listImg
				}
			}
		},
		methods:{
			detailimg(){
				if(!this.isimg){
					this.$emit("detail-image")
					this.isimg=true
				}
			}
		}
	}
</script>

<style>
	.info-start{
		padding: 15px 0;
	}
	.info-start .start,.info-start .end{
		width: 90px;
		height: 1px;
		background-color: #a3a3a5;
		position: relative;
	}
	.info-start .end{
		float: right;
	}
	.info-start .start::before,.info-start .end::after{
		content: '';
		position: absolute;
		bottom: 0;
		width: 5px;
		height: 5px;
		background: #333;
	}
	.info-start .end::after{
		right: 0;
	}
	.info-content{
		height: 60px;
	}
	.info-message{
		padding: 10px 0;
		border-bottom: 10px solid #eee;
		position: relative;
	}
	.info-style{
		height: 2px;
		width: 150px;
		background: #a3a3a5;
		position: absolute;
		right: 0;
	}
	.body-msg{
		height: 80px;
		border-left: 20px solid deeppink;
	}
	.body-msg div{
		font-size: 18px;
	}
	.body-msg span{
		font-size: 16px;
	}
	.info-declare span{
		font-size: 14px;
	}
</style>
