<template>
	<div class="cart-item">
		<div class="cart-info">
			<div class="cart-checked-top">
				<div class="cart-input-top">
					<input type="radio" :checked="isCheckedTop" @click="alterCheckedTop"/>
				</div>
				<div class="cart-shopname">
					<span>&nbsp;&nbsp;&nbsp;{{listItem.shopName}}</span>
				</div>
			</div>
			<div class="cart-checked-bottom" :class="{cartBackground:listItem.checked}">
				<div class="cart-input-bottom">
					<check-button :isChecked="listItem.checked" @CheckedBom="alterCheckedBom"/>
				</div>
				<div class="cart-msg">
					<div class="cart-img">
						<img :src="require('@/assets/'+listItem.img)" />
					</div>
					<div class="cart-surplus-info">
						<div>{{listItem.title}}</div>
						<div class="cart-count">
							<div>￥{{listItem.price}}</div>
							<div>
								<button>-</button>
								<span>{{listItem.count}}</span>
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
	import CheckButton from '@/components/content/CheckButton'
	export default {
		name:'CartItem',
		props:{
			listItem:{
				type:Object,
				default:()=>{}
			}
		},
		data(){
			return {
				isCheckedTop:false
			}
		},
		components:{
			CheckButton
		},
		created(){
			this.isCheckedTop = this.listItem.checked
		},
		methods:{
			alterCheckedTop(){
				this.isCheckedTop = !this.isCheckedTop
				if(this.isCheckedTop){
					this.listItem.checked = true
				}else{
					this.listItem.checked = false
				}
			},
			alterCheckedBom(){
				this.listItem.checked = !this.listItem.checked
				if(this.listItem.checked){
					this.isCheckedTop = true
				}else{
					this.isCheckedTop = false
				}
			}
		}
	}
</script>

<style>
	.cart-item{
		padding: 5px 0px;
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
		text-align: center;
	}
	.cart-shopname{
		flex: 1;
	}
	.cart-input-top input{
		transform: scale(1.5,1.5);
	}
	.cart-checked-bottom{
		height: 85px;
		display: flex;
	}
	.cartBackground{
		background:#f5f5f5;
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
