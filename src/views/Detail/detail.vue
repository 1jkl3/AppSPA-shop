<template>
	<div class="detail" v-if="productData.length > 0" v-cloak>
		<detail-nav @detail-coll="tabColl" :currenindex="currenindex" />
		<common-scroll class="detail-scroll" ref="scroll"
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
		<detail-bottom-bar @cartTo="proTocart"/>
		<back-top @gotoUp='gotoup' :isTop="isTop" />
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
	import DetailBottomBar from './comDetail/DetailBottomBar'
	import CommonScroll from '@/components/common/CommonScroll'
	import {imgLoadMIXIN,BackTopMIXIN} from '@/components/common/mixin.js'
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
				nomInate:[]
			}
		},
		mixins:[imgLoadMIXIN,BackTopMIXIN],
		components:{
			DetailNav,
			DetailSwiper,
			DetailInfo,
			DetailShop,
			CommonScroll,
			DetailImg,
			DetailParams,
			DetailComment,
			DetailNomInate,
			DetailBottomBar
		},
		computed:{
			getId(){
				return this.$route.query.id
			}
		},
		methods:{
			proTocart(){
				const product={}
				product.img=this.productData[0].swiper[0]
				product.title=this.productData[0].productInfo.title
				product.price=this.productData[0].productInfo.newprice
				product.shopName=this.productData[0].shopInfo.shopName
				product.count=1
				product.id=this.getId
				this.$store.dispatch("handleCart",product).then(res=>{
					this.$toast.show(res)
				})
			},
			tabColl(index){
				// console.log(index)
				switch (index){
					case 0:
					this.currenindex=index
					this.$refs.scroll.scrollTo(0,0,500)
						break;
					case 1:
					this.currenindex=index
					this.$refs.scroll.scrollTo(0,-this.paramsHeight,400)
						break;
					case 2:
					this.currenindex=index
					this.$refs.scroll.scrollTo(0,-this.commentHeight,500)
						break;
					case 3:
					this.currenindex=index
					this.$refs.scroll.scrollTo(0,-this.nomInateHeight,500)
						break;
					default:
						break;
				}	
			},
			scroll(pos){
				// console.log(-pos.y)
				if(pos.y<=-1450){
					this.isTop=true
				}else{
					this.isTop=false
				}
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
			}
		},
		created(){
			getDetailInfo().then(res=>{
				let data =res.data.filter(item => item.status == this.getId)
				this.productData.push(...data)
				this.$nextTick(()=>{
					setTimeout(()=>{
						this.paramsHeight=this.$refs.detailParmas.$el.offsetTop
						this.commentHeight=this.$refs.detailComment.$el.offsetTop
						this.nomInateHeight=this.$refs.detailNomInate.$el.offsetTop
						console.log(this.paramsHeight)
					},100)
				})
				
			}).catch(e=>{
				console.log(e)
			})
			getNominateInfo().then(res=>{
				this.nomInate.push(...res.data)
			}).catch(e=>{
				console.log(e)
			})
		},
		mounted(){
		},
		destroyed(){
			this.$bus.$off("ImgLoad",this.imgListener)
		}
	}
</script>

<style>
	[v-cloak]{
		display: none;
	}
	.detail{
		/* z-index: 9; */
		height: 100vh;
		overflow: hidden;
		position: relative;
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
