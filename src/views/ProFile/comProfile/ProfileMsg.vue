<template>
	<div class="profile-msg">
		<div class="my-message">
			<div>
				<i class="iconfont i-center">&#xe617;</i>
			</div>
			<div>
				<span>我的消息</span>
			</div>
		</div>
		<div class="my-message">
			<div>
				<i class="iconfont i-center">&#xe61b;</i>
			</div>
			<div>
				<span>积分商城</span>
			</div>
		</div>
		<div class="my-message">
			<div>
				<i class="iconfont i-center">&#xe656;</i>
			</div>
			<div>
				<span>会员卡</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'ProfileMsg'
	}
</script>

<style>
	.profile-msg{
		box-sizing: border-box;
		display: flex;
		flex-flow: column;
		border-bottom: 10px solid #eee;
	}
	.my-message{
		flex: 1;
		display: flex;
	}
	.my-message div:nth-of-type(1){
		width: 40px;
		text-align: center;
		color: hotpink;
	}
	.my-message div:nth-of-type(2){
		flex: 1;
	}
	.profile-msg .my-message:nth-of-type(2) div:nth-of-type(2){
		border-bottom: 1px solid #eee;
		border-top: 1px solid #eee;
	}
	.i-center{
		line-height: 50px;
	}
	.my-message span{
		display: inline-block;
		line-height: 50px;
	}
</style>
