<template>
	<div class="detail" v-if="productData.length > 0">
		<detail-nav @detail-coll="tabColl" :currenindex="currenindex" />
		<common-scroll class="detail-scroll" ref="detail"
		@scroll="scroll"
		:listenScroll="true"
		:pulldown="pulldown"
		:data="productData[0]">
			<detail-swiper :productSwiper="productData[0].swiper" />
			<detail-info :productInfo="productData[0].productInfo" />
			<detail-shop :shopInfo="productData[0].shopInfo" />
			<detail-img :detailImage="productData[0].detailImage"/>	
			<detail-params :shopParameter="productData[0].shopParameter" ref="detailParmas"/>
			<detail-comment :commentInfo="productData[0].comment" ref="detailComment"/>
			<detail-nom-inate :nomInate="nomInate" ref="detailNomInate" />
		</common-scroll>
	</div>
</template>

<script>
	import DetailNav from './comDetail/DetailNav'
	import DetailSwiper from './comDetail/DetailSwiper'
	import DetailInfo from './comDetail/DetailInfo'
	import DetailShop from './comDetail/DetailShop'
	import DetailImg from './comDetail/DetailImg'
	import DetailParams from './comDetail/DetailParams'
	import DetailComment from './comDetail/DetailComment'
	import DetailNomInate from './comDetail/DetailNomInate'
	import CommonScroll from '@/components/common/CommonScroll'
	
	import {throttle} from '@/common/util/throttle.js'
	import {
		getDetailInfo,
		getNominateInfo
	} from '@/network/DetailRequest.js'
	export default {
		name:'detail',
		data(){
			return {
				productData:[],
				pulldown: true,
				currenindex:0,
				paramsHeight:0,
				commentHeight:0,
				nomInateHeight:0,
				nomInate:[],
			}
		},
		components:{
			DetailNav,
			DetailSwiper,
			DetailInfo,
			DetailShop,
			CommonScroll,
			DetailImg,
			DetailParams,
			DetailComment,
			DetailNomInate
		},
		computed:{
			getId(){
				return this.$route.query.id
			}
		},
		methods:{
			imgloading(){
				console.log("d")
				this.$bus.$on("DetailImgLoad",()=>{
					throttle(this.$refs.detail.refresh(),100)
					this.paramsHeight=this.$refs.detailParmas.$el.offsetTop
					this.commentHeight=this.$refs.detailComment.$el.offsetTop
					this.nomInateHeight=this.$refs.detailNomInate.$el.offsetTop
				})
			},
			tabColl(index){
				// console.log(index)
				switch (index){
					case 0:
					this.currenindex=index
					this.$refs.detail.scrollTo(0,0,500)
						break;
					case 1:
					this.currenindex=index
					this.$refs.detail.scrollTo(0,-this.paramsHeight,400)
						break;
					case 2:
					this.currenindex=index
					this.$refs.detail.scrollTo(0,-this.commentHeight,500)
						break;
					case 3:
					this.currenindex=index
					this.$refs.detail.scrollTo(0,-this.nomInateHeight,500)
						break;
					default:
						break;
				}	
			},
			scroll(pos){
				// console.log(-pos.y)
				if(-pos.y < this.paramsHeight){
					this.currenindex=0
				}
				if(this.paramsHeight <= -pos.y){
					this.currenindex=1
				}
				if(this.commentHeight <= -pos.y){
					this.currenindex=2
				}
				if(this.nomInateHeight <=-pos.y){
					this.currenindex=3
				}
			},
			getProductItem(){
				getDetailInfo().then(res=>{
					let data =res.data.filter(item => item.status == this.getId)
					this.productData.push(...data)
				}).catch(e=>{
					console.log(e)
				})
			},
			getNominate(){
				getNominateInfo().then(res=>{
					this.nomInate.push(...res.data)
				}).catch(e=>{
					console.log(e)
				})
			}
		},
		created(){
			setTimeout(()=>{
				this.getProductItem()
				this.getNominate()
			},20)
		},
		mounted(){
			this.imgloading()
		},
		destroyed(){
			this.$bus.$off("DetailImgLoad")
		}
	}
</script>

<style>
	.detail{
		height: 100vh;
		overflow: hidden;
		position: relative;
		z-index: 9;
		background-color: #FFFFFF;
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
