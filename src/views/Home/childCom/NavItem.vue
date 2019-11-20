<template>
	<div class="nav-item">
		<head-nav>
			<template #left><i class="iconfont">&#xe63c;</i></template>
			<template #center><span>XX商城</span></template>
			<template #right><i class="iconfont">&#xe618;</i></template>
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
	}
</style>
