<template>
	<div class="back-top" v-show="isTop" @click="gotoup">
		<i class="iconfont">&#xe654;</i>
	</div>
</template>

<script>
	export default {
		name:'BackTop',
		data(){
			return {
				scrollY:0
			}
		},
		props:{
			isTop:Boolean,
			default:false
		},
		methods:{
			gotoup(){
				this.$emit("gotoUp",this.scrollY)
			}
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
	}
</style>
