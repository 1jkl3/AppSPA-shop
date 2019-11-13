<template>
	<div class="detail" v-if="flag">
		<detail-nav @detail-coll="tabColl" :currenindex="currenindex" ref="detailNav"/>
		<common-scroll class="detail-scroll" ref="detail"
		@scroll="scroll"
		:listenScroll="true"
		:pulldown="pulldown"
		:data="productData[0]">
			<detail-swiper :productSwiper="getSwiper" @detail-isswiper="swiperloading"/>
			<detail-info :productInfo="getSection" />
			<detail-shop :shopInfo="getShop" />
			<detail-img :detailImage="getDetailImage" @detail-image="imgloading"/>	
			<detail-params :shopParameter="getShopParameter" ref="detailParmas"/>
		</common-scroll>
	</div>
</template>

<script>
	import detailNav from './comDetail/detailNav'
	import DetailSwiper from './comDetail/DetailSwiper'
	import DetailInfo from './comDetail/DetailInfo'
	import DetailShop from './comDetail/DetailShop'
	import DetailImg from './comDetail/DetailImg'
	import DetailParams from './comDetail/DetailParams'
	
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
				productDetail:{},
				pulldown: true,
				currenindex:0
			}
		},
		components:{
			detailNav,
			DetailSwiper,
			DetailInfo,
			DetailShop,
			CommonScroll,
			DetailImg,
			DetailParams
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
			},
			getShopParameter(){
				if(typeof this.productData[0] !== "undefined"){
					return this.productData[0].shopParameter
				}
			}
		},
		methods:{
			swiperloading(){
				let top = this.$refs.detailParmas.$el.offsetTop
				console.log(top)
			},
			imgloading(){
				let top = this.$refs.detailParmas.$el.offsetTop
				console.log(top)
			},
			tabColl(index){
				// console.log(index)
				let top = this.$refs.detailParmas.$el.offsetTop-229
				console.log(top)
					switch (index){
						case 0:
						this.$refs.detail.scrollTo(0,0,500)
						this.currenindex=index
							break;
						case 1:
						this.$refs.detail.scrollTo(0,-top,500)
						this.currenindex=index
							break;
						case 2:
						this.currenindex=index
							break;
						case 3:
						this.currenindex=index
							break;
						default:
							break;
					}
			},
			scroll(pos){
				let top = this.$refs.detailParmas.$el.offsetTop-229
				// console.log(pos.y)
				// console.log(top)
				if(pos.y == 0){
					// this.tabColl(0)
					this.currenindex=0
				}else if(pos.y == -top){
					this.currenindex=1
				}
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
			console.log(window.innerHeight)
			this.$nextTick(function(){
				this.getProductItem()
				this.flag=true
			})
		},
		updated(){
			
			// console.log(window.innerHeight)
		}
	}
</script>

<style>
	.detail{
		height: 100vh;
		overflow: hidden;
		position: relative;
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
