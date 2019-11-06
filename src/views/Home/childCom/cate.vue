<template>
	<div class="cate">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:'cate',
		
	}
</script>

<style>
	.cate{
		display: flex;
		text-align: center;
	}
</style>
