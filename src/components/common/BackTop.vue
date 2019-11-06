<template>
	<div class="back-top" v-show="scrollY.isTop" @click="gotoup">
		<i class="iconfont">&#xe654;</i>
	</div>
</template>

<script>
	export default {
		name:'BackTop',
		props:{
			scrollY:{
				type:Object,
				default:()=>{}
			}
		},
		data(){
			return{
				scroll:{
					x:0,
					y:0,
					time:500,
					isTop:false
				}
			}
		},
		methods:{
			gotoup(){
				this.$emit("gotoUp",this.scrollY)
			}
		},
		mounted(){
		}
	}
</script>

<style>
	.back-top{
		width: 60px;
		height: 60px;
		line-height: 60px;
		position: fixed;
		bottom: 80px;
		right: 10px;
		border-radius: 50%;
	}
	.back-top .iconfont{
		font-size: 60px;
		text-align: center;
		color: red;
	}
</style>
