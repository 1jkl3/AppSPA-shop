<template>
	<div class="profile-footer">
		<div class="app-func">
			<div>
				<i class="iconfont i-center">&#xe63b;</i>
			</div>
			<div>
				<span>我的购物车</span>
			</div>
		</div>
		<div class="app-func">
			<div>
				<i class="iconfont i-center">&#xe623;</i>
			</div>
			<div>
				<span>下载购物App</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ProfileFooter'
	}
</script>

<style>
	.profile-footer{
		box-sizing: border-box;
		display: flex;
		flex-flow: column;
	}
	.app-func{
		flex: 1;
		display: flex;
	}
	.profile-footer .app-func:nth-of-type(2) div:nth-of-type(2){
		border-top: 1px solid #eee;
	}
	.app-func div:nth-of-type(1){
		width: 40px;
		text-align: center;
		color: hotpink;
	}
	.app-func div:nth-of-type(2){
		flex: 1;
	}
	.app-func span{
		display: inline-block;
		line-height: 50px;
	}
</style>
