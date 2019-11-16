<template>
	<div class="goods-list-item" v-if="Object.keys(listdata).length !== 0" @click="goodClick">
		<div class="goods-item-img">
			<img :src="require('@/assets/'+listdata.img)" @load="imgload"/>
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
		props:{
			listdata:{
				type:Object,
				default:()=>{}
			}
		},
		methods:{
			imgload(){
				// console.log(this.$route.path.indexOf('/home') !== -1)
				if(this.$route.path.indexOf('/home') !== -1){
					this.$bus.$emit("HomeImgLoad")
				}else if(this.$route.path.indexOf('/detail') !== -1){
					this.$bus.$emit("DetailImgLoad")
				}
				// this.$bus.$emit("HomeimgLoad")
			},
			goodClick(){
				this.$router.push({
					path:'/detail',
					query:{
						id:this.listdata.id
					}
				})
			}
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
