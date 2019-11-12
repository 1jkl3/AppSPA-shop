<template>
	<div class="detail" v-if="flag">
		<detail-nav></detail-nav>
		<common-scroll class="detail-scroll" ref="detail"
		@scroll="scroll"
		:listenScroll="true"
		:data="productData[0]">
			<detail-swiper :productSwiper="getSwiper" />
			<detail-info :productInfo="getSection" />
			<detail-shop :shopInfo="getShop" />
			<detail-img :detailImage="getDetailImage"/>
		</common-scroll>
	</div>
</template>

<script>
	import detailNav from './comDetail/detailNav'
	import DetailSwiper from './comDetail/DetailSwiper'
	import DetailInfo from './comDetail/DetailInfo'
	import DetailShop from './comDetail/DetailShop'
	import DetailImg from './comDetail/DetailImg'
	
	import CommonScroll from '@/components/common/CommonScroll'
	import {
		request
	} from '@/network/request'
	export default {
		name:'detail',
		data(){
			return {
				flag:false,
				productData:[],
				productDetail:{}
			}
		},
		components:{
			detailNav,
			DetailSwiper,
			DetailInfo,
			DetailShop,
			CommonScroll,
			DetailImg
		},
		computed:{
			getId(){
				return this.$route.query.id
			},
			getSwiper(){
				if(typeof this.productData[0] !== "undefined"){
					return this.productData[0].swiper
				}
			},
			getSection(){
				if(typeof this.productData[0] !== "undefined"){
					return this.productData[0].productInfo
				}
			},
			getShop(){
				if(typeof this.productData[0] !== "undefined"){
					return this.productData[0].shopInfo
				}
			},
			getDetailImage(){
				if(typeof this.productData[0] !== "undefined"){
					return this.productData[0].detailImage
				}
			}
		},
		methods:{
			scroll(pos){
				// console.log(pos.y)
			},
			getProductItem(){
				request({
					url:'/api/product'
				}).then(res=>{
					let data =res.data.filter(item => item.status == this.getId)
					this.productData.push(...data)
				}).catch(e=>{
					console.log(e)
				})
			}
		},
		created(){
			this.$nextTick(function(){
				this.getProductItem()
				this.flag=true
			})
		}
	}
</script>

<style>
	.detail{
		height: 100vh;
	}
	.detail-scroll {
		position: absolute;
		top: 44px;
		left: 0;
		right: 0;
		bottom: 49px;
		overflow: hidden;
	}
</style>
