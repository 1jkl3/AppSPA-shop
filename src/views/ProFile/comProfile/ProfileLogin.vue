<template>
	<div class="profile-login">
		<div class="profile-sign">
			<div class="profile-print">
				<img src="@/assets/img/deatil/1.jpg" />
			</div>
		</div>
		<div class="login-component">
			<span>登录/注册</span>
			<span><i class="iconfont">&#xe853;</i>暂无绑定手机号</span>
		</div>
		<div class="profile-arrows">
			<span><i class="iconfont">&#xe74b;</i></span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'ProfileLogin'
	}
</script>

<style>
	.profile-login{
		height: 120px;
		display: flex;
		background: hotpink;
		color: white;
		border-bottom: 2px solid #eee;
	}
	.profile-sign{
		width: 30%;
		display: flex;
		align-items: center;
	}
	.profile-print{
		margin: 0 auto;
		width: 80%;
		height: 80%;
	}
	.profile-print img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.login-component{
		width: 60%;
		height: 100%;
		display: flex;
		flex-flow: column;
		justify-content: center;
		
	}
	.login-component span:nth-of-type(1){
		font-size: 24px;
		margin-bottom: 5px;
	}
	.profile-arrows{
		flex: 1;
		height: 100%;
		display: flex;
		align-items: center;
	}
</style>
