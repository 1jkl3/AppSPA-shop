<template>
	<div class="nav-item">
		<head-nav>
			<div slot='left'><i class="iconfont">&#xe63c;</i></div>
			<div slot='center'><span>XX商城</span></div>
			<div slot='right'><i class="iconfont">&#xe618;</i></div>
		</head-nav>
	</div>
</template>

<script>
	import HeadNav from 'components/common/headnav/HeadNav'
	export default {
		name:'NavItem',
		components:{
			HeadNav
		}
	}
</script>

<style>
	span{
		font-size: 18px;
	}
	.nav-item{
		width: 100%;
		position: fixed;
		top: 0;
		background-color: white;
		box-shadow: 0px 2px 0.2px #9DA0A4;
		z-index: 99;
	}
</style>
