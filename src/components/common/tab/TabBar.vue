<template>
	<div class="tab-nav">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'TabBar'
	}
</script>

<style>
	.tab-nav{
		height: 49px;
		display: flex;
	}
</style>
