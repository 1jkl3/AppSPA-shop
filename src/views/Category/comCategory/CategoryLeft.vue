<template>
	<div class="cate-gory-left" v-if="leftInfo.length !==0">
		<div class="cate-gory-left-item" v-for="(item,index) in leftInfo" 
		:class="{selectActive:isActive == index}" 
		:key="index" 
		@click="SelectBtn(index)">{{item}}</div>
	</div>
</template>

<script>
	export default {
		name:'CategoryLeft',
		props:{
			leftInfo:{
				type:Array,
				default:null
			},
			current:Number
		},
		watch:{
			current:function(val,oldval){
				this.SelectBtn(val)
			}
		},
		data(){
			return {
				isActive:0
			}
		},
		methods:{
			SelectBtn(index){
				this.isActive = index
				this.$emit("SkipCate",index)
			}
		}
	}
</script>

<style>
	.cate-gory-left-item{
		text-align: center;
		height: 50px;
		line-height: 50px;
	}
	.selectActive:before {
		content: "";
		position: absolute;
		display: block;
		width: 8px;
		height: 50px;
		background: red;
	}
</style>
