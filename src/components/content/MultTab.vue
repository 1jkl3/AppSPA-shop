<template>
	<div class="tab-list">
		<tab-bar>
			<tab-bar-item path='/home'>
				<div slot='icon'><i class="iconfont">&#xe607;</i></div>
				<div slot='text'><span>首页</span></div>
			</tab-bar-item>
			<tab-bar-item path='/category'>
				<div slot='icon'><i class="iconfont">&#xe7f8;</i></div>
				<div slot='text'><span>分类</span></div>
			</tab-bar-item>
			<tab-bar-item path='/shopcart'>
				<div slot='icon'><i class="iconfont">&#xe63b;</i></div>
				<div slot='text'><span>购物车</span></div>
			</tab-bar-item>
			<tab-bar-item path='/profile'>
				<div slot='icon'><i class="iconfont">&#xe61a;</i></div>
				<div slot='text'><span>我的</span></div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from '../common/tab/TabBar'
	import TabBarItem from '../common/tab/TabBarItem'
	export default {
		name:'multTab',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
	.iconfont{
		font-size: 26px;
	}
</style>
