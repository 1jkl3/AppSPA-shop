<template>
	<div class="tab-item-nav" @click="cutpath">
		<div :style="{color:iscolor}"><slot name="icon"></slot></div>
		<div :style="{color:iscolor}"><slot name="text"></slot></div>
	</div>
</template>

<script>
	export default {
		name:'TabBarItem',
		props:{
			path:{
				type:String
			}
		},
		data(){
			return{
				changecolor:""
			}
		},
		computed:{
			iscolor(){
				return this.$route.path==this.path ? this.changecolor='black':this.changecolor='white';
			}
		},
		methods:{
			cutpath(){
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.tab-item-nav{
		flex: 1;
		background-color: yellow;
		text-align: center;
	}
</style>
