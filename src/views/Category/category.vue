<template>
	<div class="cate-gory">
		<category-nav />
		<div class="cate-gory-main">
			<common-scroll class="left-scroll" ref="leftScroll">
				<category-left :leftInfo="leftInfo" @SkipCate="toType"/>
			</common-scroll>
			<common-scroll class="rigth-scroll" ref="scroll" :listenScroll="true">
				<category-right :rightInfo="rightInfo" @infoTop="Topto"/>
			</common-scroll>
		</div>
	</div>
</template>

<script>
	import CategoryNav from './comCategory/CategoryNav'
	import CommonScroll from '@/components/common/CommonScroll'
	import CategoryLeft from './comCategory/CategoryLeft'
	import CategoryRight from './comCategory/CategoryRight'
	import {imgLoadMIXIN} from '@/components/common/mixin.js'
	import {getCategoryLeftInfo,getCategoryRightInfo} from '@/network/CategoryRequest'
	export default {
		name:'category',
		data(){
			return {
				leftInfo:[],
				rightInfo:[],
				rightTop:[]
			}
		},
		mixins:[imgLoadMIXIN],
		components:{
			CommonScroll,
			CategoryNav,
			CategoryLeft,
			CategoryRight
		},
		methods:{
			toType(index){
				switch (index){
					case 0:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 1:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 2:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 3:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 4:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 5:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 6:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 7:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 8:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 9:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 10:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 11:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 12:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 13:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 14:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 15:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 16:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					case 17:
					this.$refs.scroll.scrollTo(0,this.rightTop[index],100)
						break;
					default:
						break;
				}	
			},
			Topto(top){
				this.rightTop.push(...top)
			}
		},
		created(){
			getCategoryLeftInfo().then(res=>{
				this.leftInfo.push(...res.data)
				this.$nextTick(()=>{
					this.$refs.leftScroll.refresh()
				})
			}).catch(e=>{
				console.log(e)
			})
			
			getCategoryRightInfo().then(res=>{
				this.rightInfo.push(...res.data)
			}).catch(e=>{
				console.log(e)
			})
		},
		deactivated(){
			this.$bus.$off("ImgLoad",this.imgListener)
		}
	}
</script>

<style>
	.cate-gory{
		height: 100vh;
		width: 100vw;
	}
	.cate-gory-main{
		display: flex;
		height: calc(100% - 44px - 49px);
		overflow: hidden;
	}
	.left-scroll{
		width: 30vw;
	}
	.rigth-scroll{
		flex: 1;
		/* background: blue; */
	}
</style>
