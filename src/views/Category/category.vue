<template>
	<div class="cate-gory">
		<category-nav />
		<div class="cate-gory-main">
			<common-scroll class="left-scroll" ref="leftScroll">
				<category-left :leftInfo="leftInfo" :current="currentindex" @SkipCate="toType"/>
			</common-scroll>
			<common-scroll class="rigth-scroll" ref="scroll" :listenScroll="true" @scroll="scrollH">
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
				rightTop:[],
				currentindex:0
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
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 1:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 2:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 3:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 4:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 5:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 6:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 7:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 8:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 9:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 10:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 11:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 12:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 13:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 14:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 15:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 16:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					case 17:
					this.$refs.scroll.scrollTo(0,this.rightTop[index])
						break;
					default:
						break;
				}	
			},
			Topto(top){
				this.rightTop.push(...top)
			},
			scrollH(options){
				if(options.y >= this.rightTop[0]){
					this.currentindex = 0
				}else if(options.y >= this.rightTop[1]){
					this.currentindex = 1
				}else if(options.y >= this.rightTop[2]){
					this.currentindex = 2
				}else if(options.y >= this.rightTop[3]){
					this.currentindex = 3
				}else if(options.y >= this.rightTop[4]){
					this.currentindex = 4
				}else if(options.y >= this.rightTop[5]){
					this.currentindex = 5
				}else if(options.y >= this.rightTop[6]){
					this.currentindex = 6
				}else if(options.y >= this.rightTop[7]){
					this.currentindex = 7
				}else if(options.y >= this.rightTop[8]){
					this.currentindex = 8
				}else if(options.y >= this.rightTop[9]){
					this.currentindex = 9
				}else if(options.y >= this.rightTop[10]){
					this.currentindex = 10
				}else if(options.y >= this.rightTop[11]){
					this.currentindex = 11
				}else if(options.y >= this.rightTop[12]){
					this.currentindex = 12
				}else if(options.y >= this.rightTop[13]){
					this.currentindex = 13
				}else if(options.y >= this.rightTop[14]){
					this.currentindex = 14
				}else if(options.y >= this.rightTop[15]){
					this.currentindex = 15
				}else if(options.y >= this.rightTop[16]){
					this.currentindex = 16
				}else{
					this.currentindex = 17
				}
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
