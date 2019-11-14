<template>
	<div class="belle-info">
		<div class="info-item" v-for="(item,index) in info" :key='index'>
			<div class="rec-item-img">
				<img :src="require('@/assets/'+item.img)" /> 
			</div>
			<div class="rec-item-text">{{item.text}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'belleInfo',
		props: {
			info: {
				type: Array,
				default: function() {
					return []
				}
			}
		}
	}
</script>

<style>
	.belle-info {
		display: flex;
		text-align: center;
		border-bottom: 10px solid #eee;
	}

	.info-item {
		flex: 1;
		height: 60px;
		padding-bottom: 20px;
		padding-top: 10px;
	}

	.info-item img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
</style>
