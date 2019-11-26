<template>
	<div class="profile-discounts">
		<div class="discounts-balance">
			<div class="content-text">
				<div style="margin-bottom: 5px;">
					<span class="text-number">0.00</span><span>元</span>
				</div>
				<div>
					<span>我的余额</span>
				</div>
			</div>
		</div>
		<div class="discounts-d">
			<div class="content-text">
				<div style="margin-bottom: 5px;">
					<span class="text-number">0</span><span>元</span>
				</div>
				<div>
					<span>我的优惠</span>
				</div>
			</div>
		</div>
		<div class="discounts-integral">
			<div class="content-text">
				<div style="margin-bottom: 5px;">
					<span class="text-number">0</span><span>分</span>
				</div>
				<div>
					<span>我的积分</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'ProfileDiscounts'
	}
</script>

<style>
	.profile-discounts{
		display: flex;
		height: 100px;
		align-items: center;
		text-align: center;
		border-bottom: 10px solid #eee;
	}
	.discounts-balance{
		flex: 1;
	}
	.discounts-d{
		flex: 1;
		border-left: 0.5px solid gray;
		border-right: 0.5px solid gray;
	}
	.discounts-integral{
		flex: 1;
	}
	.content-text{
		
	}
	.text-number{
		color: orangered;
		font-size: 24px;
	}
</style>
