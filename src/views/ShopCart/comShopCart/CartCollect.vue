<template>
	<div class="cart-collect">
		<div class="cart-collect-one">
			<check-button :isChecked="isCheckedAll" :islabel="islabel" @CheckedBom="alterCheckedBom"/>
		</div>
		<div class="cart-collect-two">
			<div><span>合计：￥{{count_Money}}</span></div>
		</div>
		<div class="cart-collect-there" @click="toShoping">
			<span>合算</span>
		</div>
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
				isCheckedAtler:false
			}
		},
		computed:{
			...mapGetters(['get_cart','get_cart_length']),
			isCheckedAll(){
				let ischeck = false
				if(this.get_cart_length === 0) return this.isCheckedAtler
				this.get_cart.forEach(item=>{
					ischeck = item.every(item1 => item1.checked)
				})
				return ischeck
			},
			count_Money(){
				var num = 0;
				this.get_cart.forEach(item => {
					item.forEach(item2=>{
						if(item2.checked){
							num+=item2.price
						}
					})
				})
				return num;
			}
		},
		methods:{
			alterCheckedBom(){
				if(this.get_cart_length === 0){
					this.isCheckedAtler = !this.isCheckedAtler
				}else{
					if(this.isCheckedAll){
						this.get_cart.forEach(item=>{
							item.map(item1 => {
								item1.checked = false
							})
						})
						this.$store.commit("check_all",false)
					}else {
						this.get_cart.forEach(item=>{
							item.map(item1 => {
								item1.checked = true
							})
						})
						this.$store.commit("check_all",true)
					}
				}
			},
			toShoping(){
				
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
	}
	.cart-collect-there{
		flex: 1;
		background: red;
		color: white;
	}
	.cart-collect-there>span{
		display: inline-block;
		height: 40px;
		width: 100%;
		text-align: center;
		line-height: 40px;
	}
</style>
