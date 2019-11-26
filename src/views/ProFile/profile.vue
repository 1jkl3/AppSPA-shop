<template>
	<div class="profile">
		<profile-nav />
		<common-scroll class="profile-scroll">
			<profile-login />
			<profile-discounts />
			<profile-msg />
			<profile-footer />
		</common-scroll>
	</div>
</template>

<script>
	import ProfileNav from './comProfile/ProfileNav'
	import ProfileLogin from './comProfile/ProfileLogin'
	import ProfileDiscounts from './comProfile/ProfileDiscounts'
	import ProfileMsg from './comProfile/ProfileMsg'
	import ProfileFooter from './comProfile/ProfileFooter'
	import CommonScroll from '@/components/common/CommonScroll'
	export default {
		name:'profile',
		components:{
			ProfileNav,
			CommonScroll,
			ProfileLogin,
			ProfileDiscounts,
			ProfileMsg,
			ProfileFooter
		}
	}
</script>

<style>
	.profile{
		height: 100vh;
	}
	.profile-scroll{
		height: calc(100% - 44px - 49px);
		overflow: hidden;
	}
</style>
