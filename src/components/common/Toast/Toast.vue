<template>
	<div class="toast" v-show="isShow">
		<div>{{message}}</div>
	</div>
</template>

<script>
	export default {
		name:'Toast',
		data(){
			return {
				message:'',
				isShow:false
			}
		},
		methods:{
			show(message,durtion=1500){
				console.log(message)
				this.isShow = true
				this.message = message
				setTimeout(()=>{
					this.isShow = false
					this.message = ''
				},durtion)
			}
		}
	}
</script>

<style>
	.toast{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background: rgba(0,0,0,.6);
		padding: 10px 15px;
		color: white;
		z-index: 999;
		font-size: 18px;
	}
</style>
