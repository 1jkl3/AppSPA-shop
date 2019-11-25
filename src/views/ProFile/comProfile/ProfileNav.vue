<template>
	<div class="profile-nav">
		<head-nav>
			<template #center>
				<span>个人中心</span>
			</template>
		</head-nav>
	</div>
</template>

<script>
	import HeadNav from 'components/common/headnav/HeadNav'
	export default {
		name:'ProfileNav',
		components:{
			HeadNav
		}
	}
</script>

<style>
</style>
