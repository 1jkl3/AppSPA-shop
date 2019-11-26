<template>
	<div class="cart-item">
		<div class="cart-info" v-if="Object.keys(listItem).length !== 0">
			<div class="cart-shopname">
				<div class="cart-check">
					<input type="radio" :checked="isSelectAll" @click="alterCheckedTop" />
				</div>
				<div class="cart-text">
					<span>{{listItem[0].shopName}}</span>
				</div>
				<div class="to-shop"><i class="iconfont">&#xe74b;</i></div>
			</div>
			<div class="cart-shops" v-for="(item,index) in listItem" :key="index">
				<div class="shops-check">
					<check-button :isChecked="item.checked" :shop_Id="item.id" @CheckedBom="alterCheckedBom" />
				</div>
				<div class="shops-img">
					<img :src="require('@/assets/'+item.img)" />
				</div>
				<div class="shops-info">
					<div class="shop-item-title">
						<span>{{item.title}}</span>
					</div>
					<div class="shop-item-price">
						<div class="item-price">￥{{item.price}}元</div>
						<div class="item-commodity">
							<button @click="lessenCount(item.id)">-</button>
							<span>{{item.count}}</span>
							<button @click="addCount(item.id)">+</button>
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
				type:Array,
				default:null
			}
		},
		data(){
			return {
				isCheckedTop:true
			}
		},
		computed:{
			isSelectAll(){
				let isSelect = false
				isSelect = this.listItem.every(item => item.checked);
				return isSelect;
			}
		},
		components:{
			CheckButton
		},
		methods:{
			//店铺选择
			alterCheckedTop(){
				if(this.isSelectAll){
					this.listItem.map(item=>{
						item.checked = false
						this.$store.commit("check_shop",item)
					})
				}else{
					this.listItem.map(item=>{
						item.checked = true
						this.$store.commit("check_shop",item)
					})
				}
			},
			//商品选择
			alterCheckedBom(obj){
				obj.checked = !obj.checked
				this.$store.commit("check_item",obj)
				// this.listItem.forEach(item=>{
				// 	if(item.id == obj.id){
				// 		this.$store.commit("check_item",item)
				// 	}
				// })
			},
			lessenCount(id){
				this.listItem.map(item=>{
					if(item.id == id){
						item.count--
						this.$store.commit("alter_checked",item)
					}
				})
			},
			addCount(id){
				this.listItem.map(item=>{
					if(item.id == id){
						item.count++
						this.$store.commit("alter_checked",item)
					}
				})
			}
		}
	}
</script>

<style>
	.cart-item{
		padding: 5px 0px;
		box-sizing: border-box;
	}
	.cart-info{
		background: white;
		display: flex;
		flex-flow: column;
		margin: 0 auto;
		width: 90%;
	}
	.cart-shopname{
		display: flex;
		height: 40px;
		line-height: 40px;
		background: red;
		border-bottom: 2px solid white;
	}
	.cart-check{
		width: 10%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cart-check input{
		transform: scale(1.5,1.5);
	}
	.cart-text{
		flex: 1;
	}
	.to-shop{
		width: 30px;
	}
	.cart-shops{
		background: white;
		border-radius: 5px;
		display: flex;
		height: 100px;
		border-bottom: 2px solid red;
	}
	.shops-check{
		width: 10%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.shops-img{
		width: 30%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.shops-img img{
		width: 80%;
		height: 80%;
		border-radius: 20px;
	}
	.shops-info{
		width: 60%;
		display: flex;
		flex-flow: column;
	}
	.shop-item-title{
		flex: 1;
		word-break:normal; 
		word-wrap : break-word ;
	}
	.shop-item-price{
		height: 30px;
		background: #0000FF;
		display: flex;
		align-items: center;
	}
	.item-price{
		flex: 1;
		text-align: center;
	}
	.item-commodity{
		flex: 1;
		display: flex;
		justify-content: space-around;
	}
</style>