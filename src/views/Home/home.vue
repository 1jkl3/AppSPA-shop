<template>
	<div id="home">
		<nav-item />
		<tab-coll :titles='titlespan' @click-tab='getgoodslist' ref="tabcoll1" v-show="istabFixed" class="tab-item"/>
		<common-scroll class="comscroll"
		@scroll="sctop"
		:listenScroll="true"
		:data="goodlist"
		:pulldown="pulldown"
		ref="scroll">
			<home-swiper @imgload="swiperimgload"/>
			<belle-info :info="person"/>
			<recom-mend :rec="recom"/>
			<tab-coll :titles='titlespan' @click-tab='getgoodslist' ref="tabcoll"/>
			<goods-list :goodslistdata="goodlist[currentype]"/>
		</common-scroll>
		<back-top @gotoUp='gotoup' :scrollY="scrollY"></back-top>
	</div>
</template>

<script>
	import NavItem from './childCom/NavItem.vue'
	import HomeSwiper from './childCom/HomeSwiper'
	import {
		request
	} from '@/network/request'
	import belleInfo from './childCom/belleInfo'
	import recomMend from './childCom/recomMend'
	import tabColl from '@/components/content/tabColl'
	import goodsList from '@/components/content/goods/goodsList'
	import CommonScroll from '@/components/common/CommonScroll'
	import BackTop from '@/components/common/BackTop'
	
	export default {
		name: 'home',
		components: {
			NavItem,
			belleInfo,
			HomeSwiper,
			recomMend,
			tabColl,
			goodsList,
			CommonScroll,
			BackTop
		},
		data() {
			return {
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
				scrollY:{
					x:0,
					y:0,
					time:500,
					isTop:false
				},
				tabloadoffsetTop:0,
				istabFixed:false
			}
		},
		methods: {
			/**
			 * 显示回到顶部按钮
			 * @param {Object} poc
			 */
			sctop(poc){
				if(poc.y<=-1450){
					this.scrollY.isTop=true
				}else{
					this.scrollY.isTop=false
				}
				this.istabFixed=(-poc.y)>this.tabloadoffsetTop
			},
			/**
			 * 回到顶部
			 */
			gotoup(scrllTop){
				this.$refs.scroll.scrollTo(scrllTop.x,scrllTop.y,scrllTop.time)
			},
			/**
			 * 按钮请求
			 */
			getgoodslist: function(index) {
				switch (index) {
					case 0:
						this.currentype = 'pop'
							request({
								url: `/api/${this.currentype}`
							}).then(res => {
								this.goodlist[this.currentype] = res.data
								// console.log(res.data)
							}).catch(e => {
								console.log(e)
							})
						break;
					case 1:
						this.currentype = 'news'
							request({
								url: `/api/${this.currentype}`
							}).then(res => {
								this.goodlist[this.currentype] = res.data
							}).catch(e => {
								console.log(e)
							})
						break;
					case 2:
						this.currentype = 'sell'
							request({
								url: `/api/${this.currentype}`
							}).then(res => {
								this.goodlist[this.currentype] = res.data
							}).catch(e => {
								console.log(e)
							})
						break;
					default:
						break;
				}
				this.$nextTick(function(){
					this.$refs.tabcoll1.currenactive=index
					this.$refs.tabcoll.currenactive=index
				})
			},
			/**
			 * 初始请求
			 */
			getlist: function() {
				request({
					url: '/api/list'
				}).then(res => {
					this.person.push(...res.data)
				}).catch(e => {
					console.log(e)
				})
			},
			getrecom: function() {
				request({
					url: '/api/recom'
				}).then(res => {
					this.recom.push(...res.data)
				}).catch(e => {
					console.log(e)
				})
			},
			/**
			 * tabcoll动态位置
			 */
			swiperimgload(){
				this.tabloadoffsetTop=this.$refs.tabcoll.$el.offsetTop+90
			}
		},
		/**
		 * 发送请求
		 */
		created() {
			//初始化
			this.$nextTick(function(){
				this.getgoodslist()
				this.getlist()
				this.getrecom()
			})	
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
