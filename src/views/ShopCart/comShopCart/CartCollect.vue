<template>
	<div class="cart-collect">
		<div class="cart-collect-one">
			<check-button :isChecked="ischecked" :islabel="islabel" @CheckedBom="alterCheckedBom"/>
		</div>
		<div class="cart-collect-two">
			<div><span>合计：￥{{}}</span></div>
		</div>
		<div class="cart-collect-there"></div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import CheckButton from '@/components/content/CheckButton'
	export default {
		name:'CartCollect',
		components:{
			CheckButton
		},
		data(){
			return {
				islabel:true,
				ischecked:false
			}
		},
		computed:{
			...mapGetters(['get_cart','get_cart_length'])
		},
		methods:{
			alterCheckedBom(){
				this.ischecked = !this.ischecked
				console.log(this.get_cart)
				var num=0
				if(this.ischecked){
					this.get_cart.forEach(item =>{
						num+=item.price
					})
					console.log(num)
				}
			}
		}
	}
</script>

<style>
	.cart-collect{
		height: 40px;
		background: #f5f5f5;
		display: flex;
		align-items: center;
	}
	.cart-collect-one{
		width: 20%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.cart-collect-two{
		width: 60%;
		/* background: black; */
	}
	.cart-collect-there{
		flex: 1;
		background: blue;
	}
</style>
