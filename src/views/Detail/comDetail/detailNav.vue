<template>
	<div class="detail-nav">
		<head-nav>
			<template #left>
				<div @click="backUp">
					<i class="iconfont">&#xe63c;</i>
				</div>
			</template>
			<template #center>
				<div class="detail-nav-center">
					<div class="detail-nav-item" 
					v-for="(item,index) in titles"
					:key='item'
					:class="{detailActive:index == currenindex}"
					@click="detailActiveUp(index)">
						{{item}}
					</div>
				</div>
				
			</template>
		</head-nav>
	</div>
</template>

<script>
	import HeadNav from 'components/common/headnav/HeadNav'
	export default {
		name:'comDetail',
		components:{
			HeadNav
		},
		props:{
			currenindex:{
				type:Number,
				default:0
			}
		},
		data(){
			return {
				titles:['商品','参数','评论','推荐']
			}
		},
		methods:{
			backUp(){
				this.$router.back()
			},
			detailActiveUp(index){
				this.$nextTick(function(){
					this.$emit("detail-coll",index)
				})
			}
		}
	}
</script>

<style>
	.detail-nav-center{
		display: flex;
	}
	.detail-nav-item{
		flex: 1;
	}
	.detailActive{
		color: red;
	}
</style>
