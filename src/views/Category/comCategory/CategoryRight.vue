<template>
	<div class="cate-gory-right" v-if="rightInfo.length !==0">
		<div class="cate-gory-info" v-for="(item,index) in rightInfo" :key="index" ref="info" @click="offsetTo">
			<div class="cate-gory-name">
				<span>{{item.name}}</span>
			</div>
			<div class="cate-gory-img" >
				<div class="cate-gory-goutimg" v-for="(chilren ,ind) in item.data" :key="ind">
					<img v-lazy="require('@/assets/'+chilren.img)" @load="ImgLoad"/>
					<div class="cate-gory-text">{{chilren.text}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'CategoryRight',
		data(){
			return {
				InfoTop:[]
			}
		},
		props:{
			rightInfo:{
				type:Array,
				default:null
			}
		},
		methods:{
			ImgLoad(){
				this.$bus.$emit("ImgLoad")
			},
			offsetTo(){
				this.$refs.info.forEach(item=>{
					this.InfoTop.push(-(item.offsetTop-44))
				})
				this.$emit("infoTop",this.InfoTop)
			}
		},
		updated(){
			this.offsetTo()
		}
	}
</script>

<style>
	.cate-gory-info{
		box-sizing: content-box;
	}
	.cate-gory-name{
		width: 100%;
		text-align: center;
		padding: 10px 5px;
	}
	.cate-gory-name span{
		font-size: 1.125rem;
	}
	.cate-gory-img{
		column-count: 3;
		column-gap: 5px;
	}
	.cate-gory-goutimg{
		break-inside: avoid;
		box-sizing: border-box;
		width: 100%;
		height: 150px;
	}
	.cate-gory-goutimg img{
		width: 100%;
		height: 80%;
	}
	.cate-gory-text{
		height: 20%;
		text-align: center;
	}
</style>
