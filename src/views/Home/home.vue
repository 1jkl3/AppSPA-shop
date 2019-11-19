<template>
	<div id="home" v-cloak>
		<nav-item />
		<tab-coll :titles='titlespan' @click-tab='getgoodslist' ref="tabcoll1" v-show="istabFixed" class="tab-item"/>
		<common-scroll class="comscroll"
		@scroll="scroll"
		:listenScroll="true"
		:data="goodlist"
		:pulldown="pulldown"
		ref="scroll">
			<home-swiper :Swiper="swiper"/>
			<belle-info :info="person"/>
			<recom-mend :rec="recom"/>
			<tab-coll :titles='titlespan' @click-tab='getgoodslist' ref="tabcoll"/>
			<goods-list :goodslistdata="goodlist[currentype]"/>
		</common-scroll>
		<back-top @gotoUp='gotoup' :isTop="isTop" />
	</div>
</template>

<script>
	import NavItem from './childCom/NavItem.vue'
	import HomeSwiper from './childCom/HomeSwiper'
	import belleInfo from './childCom/belleInfo'
	import recomMend from './childCom/recomMend'
	import tabColl from '@/components/content/tabColl'
	import goodsList from '@/components/content/goods/goodsList'
	import CommonScroll from '@/components/common/CommonScroll'
	import {getImg,getGoods,getLists,getRecom} from '@/network/HomeRequest.js'
	import {imgLoadMIXIN,BackTopMIXIN} from '@/components/common/mixin.js'
	export default {
		name: 'home',
		components: {
			NavItem,
			belleInfo,
			HomeSwiper,
			recomMend,
			tabColl,
			goodsList,
			CommonScroll
		},
		data() {
			return {
				swiper:[],
				person: [],
				recom: [],
				titlespan: ['流行', '新款', '精选'],
				currentype: 'pop',
				goodlist: {
					"pop": [],
					"news": [],
					"sell": []
				},
				pulldown: true,
				tabloadoffsetTop:0,
				istabFixed:false,
			}
		},
		mixins:[imgLoadMIXIN,BackTopMIXIN],
		methods: {
			/**
			 * 显示回到顶部按钮
			 * @param {Object} poc
			 */
			scroll(poc){
				if(poc.y<=-1450){
					this.isTop=true
				}else{
					this.isTop=false
				}
				this.istabFixed=(-poc.y)>this.tabloadoffsetTop
			},
			/**
			 * 按钮请求
			 */
			getgoodslist: function(index) {
				switch (index) {
					case 0:
						this.currentype = 'pop'
						getGoods(this.currentype).then(res => {
							this.goodlist[this.currentype] = res.data
						}).catch(e =>{
							console.log(e)
						})
						break;
					case 1:
						this.currentype = 'news'
						getGoods(this.currentype).then(res => {
								this.goodlist[this.currentype] = res.data
							}).catch(e => {
								console.log(e)
							})
						break;
					case 2:
						this.currentype = 'sell'
						getGoods(this.currentype).then(res => {
								this.goodlist[this.currentype] = res.data
							}).catch(e => {
								console.log(e)
							})
						break;
					default:
						break;
				}
				this.$refs.tabcoll1.currenactive=index
				this.$refs.tabcoll.currenactive=index
				this.$refs.scroll.refresh()
			},
			/**
			 * 初始请求
			 */
			getSwiper:function(){
				getImg().then(res =>{
					this.swiper.push(...res.data)
				}).catch(e=>{
					console.log(e)
				})
			},
			getlist: function() {
				getLists().then(res => {
					this.person.push(...res.data)
				}).catch(e => {
					console.log(e)
				})
			},
			getrecom: function() {
				getRecom().then(res => {
					this.recom.push(...res.data)
				}).catch(e => {
					console.log(e)
				})
			}
		},
		/**
		 * 发送请求
		 */
		created() {
			//初始化
			setTimeout(()=>{
				this.getgoodslist(0)
				this.getSwiper()
				this.getlist()
				this.getrecom()
			},20)
		},
		mounted(){
			// this.toThrottle()
		},
		deactivated(){
			this.$bus.$off("ImgLoad",this.imgListener)
		}
	}
</script>
<style scoped>
	#home {
		height: 100vh;
	}
	.tab-item{
		position: relative;
		top: 44px;
		right: 0;
		left: 0;
		z-index: 99;
	}
	.comscroll {
		position: absolute;
		top: 44px;
		left: 0;
		right: 0;
		bottom: 49px;
		overflow: hidden;
	}
</style>
