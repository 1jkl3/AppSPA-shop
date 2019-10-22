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
		position: fixed;
		left: 0px;
		right: 0px;
		bottom: 0px;
	}
	/* .iconfont{
		color: blue;
		font-size: 35px;
	} */
</style>
