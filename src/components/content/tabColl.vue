<template>
	<div class="tabcoll">
		<div v-for="(item,index) in titles" :key="index" class="tab-coll-item" :class="{active: index === currenactive}"
		 @click="tabclik(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tabColl',
		props: {
			titles: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {
				currenactive: 0
			}
		},
		methods: {
			tabclik(index) {
				this.currenactive = index
				this.$emit("click-tab",this.currenactive)
			}
		},
		created(){
			this.$nextTick(function(){
				this.tabclik(this.currenactive)
			})
		}
	}
</script>

<style>
	.tabcoll {
		display: flex;
		text-align: center;
		background-color: white;
		height: 40px;
		line-height: 40px;
		margin-bottom: 10px;
	}

	.tab-coll-item {
		flex: 1;
	}

	.active span {
		padding: 5px;
		color: red;
		border-bottom: 2px solid red;
	}

</style>
