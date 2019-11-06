<template>
	<div class="goods-list-item">
		<div class="goods-item-img">
			<img :src="require('@/assets/'+this.listdata.img)" />
			<!-- <img :src="require('@/assets/img/list/7a695b382e.jpg')"/> -->
		</div>
		<div class="goods-item-txt">
			<p>{{listdata.title}}</p>
			<span>${{listdata.price}}&nbsp;<i class="iconfont goods-icon">&#xe60b;</i></span>&nbsp;
			<span>{{listdata.like}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'goodsListItem',
		data(){
			return{
				
			}
		},
		props:{
			listdata:{
				type:Object,
				default:()=>{}
			}
		},
		created(){
		},
		beforeUpdate(){
			this.$nextTick(function(){
			// console.log(this.listdata)
			})
		}
	}
</script>

<style scoped>
	.goods-list-item{
		width: 100%;
		height: 400px;
		break-inside: avoid;
		margin-bottom: 10px;
		background-color: #9DA0A4;
		text-align: center;
	}
	.goods-item-img{
		height: 80%;
	}
	.goods-item-img img{
		width: 100%; height: 100%;
		border-radius: 5px;
	}
	.goods-item-txt{
		height: 17%;
		margin-top: 5%;
	}
	.goods-item-txt p{
		margin-top: 0px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.goods-icon{
		font-size: 19px;
	}
</style>
