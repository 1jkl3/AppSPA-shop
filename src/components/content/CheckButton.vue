<template>
	<div class="check-button">
		<input id="che" type="radio" :checked="isChecked" @click="alterCheckedBom"/>
		<!-- <label v-if="islabel" for="che" class="label-check">全选</label> -->
	</div>
</template>

<script>
	export default {
		name:'CheckButton',
		props:{
			isChecked:{
				type:Boolean,
				default:false
			},
			shop_Id:{
				type:Number,
				default:0
			},
			islabel:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			alterCheckedBom(){
				let obj = {}
				obj.checked = this.isChecked
				obj.id = this.shop_Id
				this.$emit("CheckedBom",obj)
			}
		}
	}
</script>

<style>
	.check-button{
		text-align: center;
	}
	#che{
		transform: scale(1.5,1.5);
	}
	.label-check{
		font-size: 14px;
		padding-left: 5px;
	}
</style>
