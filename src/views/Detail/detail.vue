<template>
	<div class="detail" >
		<detail-nav @detail-coll="tabColl" :currenindex="currenindex" />
		<common-scroll class="detail-scroll" ref="detail"
		@scroll="scroll"
		:listenScroll="true"
		:pulldown="pulldown"
		:data="getproductdata">
			<detail-swiper :productSwiper="getSwiper" />
			<detail-info :productInfo="getSection" />
			<detail-shop :shopInfo="getShop" />
			<detail-img :detailImage="getDetailImage" @detail-image="imgloading"/>	
			<detail-params :shopParameter="getShopParameter" ref="detailParmas"/>
			<detail-comment :commentInfo="getCommentInfo" ref="detailComment"/>
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
			<div>1</div>
			<div>1</div>
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
	
	import CommonScroll from '@/components/common/CommonScroll'
	import {
		request
	} from '@/network/request'
	export default {
		name:'detail',
		data(){
			return {
				productData:[],
				productDetail:{},
				pulldown: true,
				currenindex:0,
				paramsHeight:0,
				commentHeight:0
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
			DetailComment
		},
		computed:{
			getId(){
				return this.$route.query.id
			},
			getproductdata(){
				if(typeof this.productData[0] !== "undefined"){
					return this.productData[0]
				}
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
			},
			getCommentInfo(){
				if(typeof this.productData[0] !== "undefined"){
					// if(this.productData[0].comment !== null){
						return this.productData[0].comment
					// }else{
						// return null
					// }
				}
			}
		},
		methods:{
			imgloading(){
				this.$refs.detail.refresh()
				let paramsTop = this.$refs.detailParmas.$el.offsetTop
				let commentTop = this.$refs.detailComment.$el.offsetTop
				this.paramsHeight=paramsTop
				this.commentHeight=commentTop
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
					this.$refs.detail.scrollTo(0,-this.commentHeight-100,500)
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
				if(this.commentHeight+100 <=-pos.y){
					this.currenindex=3
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
			this.$nextTick(function(){
				this.getProductItem()
			})
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
