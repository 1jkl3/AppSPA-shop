<template>
	<div class="cart-item" v-if="get_cart_length > 0">
		<div class="cart-info">
			<div class="cart-checked-top">
				<div class="cart-input-top">
					<input type="radio" :checked="isCheckedTop" @click="alterCheckedTop"/>
				</div>
				<div class="cart-shopname">
					<span>&nbsp;&nbsp;&nbsp;{{get_cart[0].shopName}}</span>
				</div>
			</div>
			<div class="cart-checked-bottom" :class="{cartBackground:isCheckedBom}">
				<div class="cart-input-bottom">
					<input type="radio" :checked="isCheckedBom" @click="alterCheckedBom"/>
				</div>
				<div class="cart-msg">
					<div class="cart-img">
						<img :src="require('@/assets/'+get_cart[0].img)" />
					</div>
					<div class="cart-surplus-info">
						<div>{{get_cart[0].title}}</div>
						<div class="cart-count">
							<div>￥{{get_cart[0].price}}</div>
							<div>
								<button>-</button>
								<span>{{get_cart[0].count}}</span>
								<button>+</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		name:'cartItem',
		data(){
			return {
				isCheckedTop:false,
				isCheckedBom:false
			}
		},
		methods:{
			alterCheckedTop(){
				this.isCheckedTop = !this.isCheckedTop
				if(this.isCheckedTop){
					this.isCheckedBom = true
				}else{
					this.isCheckedBom = false
				}
			},
			alterCheckedBom(){
				this.isCheckedBom = !this.isCheckedBom
				if(this.isCheckedBom){
					this.isCheckedTop = true
				}
			}
		},
		computed:{
			...mapGetters(['get_cart','get_cart_length'])
		}
	}
</script>

<style>
	.cart-item{
		transform: translateY(10px);
	}
	.cart-info{
		background: white;
		display: flex;
		flex-flow: column;
		margin: 0 auto;
		height: 120px;
		width: 90%;
		border-radius: 5px;
		margin-bottom: 5px;
	}
	.cart-checked-top{
		display: flex;
		height: 35px;
		width: 100%;
		line-height: 35px;
	}
	.cart-input-top{
		width: 10%;
	}
	.cart-shopname{
		flex: 1;
	}
	.cart-input-top input,.cart-input-bottom input{
		margin-left: 10px;
		transform: scale(1.5,1.5);
	}
	.cart-checked-bottom{
		height: 85px;
		display: flex;
	}
	.cartBackground{
		background: #9DA0A4;
	}
	.cart-input-bottom{
		width: 10%;
		line-height: 85px;
	}
	.cart-msg{
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.cart-img{
		width: 30%;
		height: 90%;
	}
	.cart-img img{
		width: 100%;
		height: 90%;
	}
	.cart-surplus-info{
		height: 90%;
		width: 65%;
		display: flex;
		flex-flow: column;
	}
	.cart-surplus-info div{
		flex: 1;
	}
	.cart-count{
		display: flex;
	}
	.cart-count div{
		flex: 1;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cart-count div span{
		display: inline-block;
		margin: 0 auto;
	}
</style>
