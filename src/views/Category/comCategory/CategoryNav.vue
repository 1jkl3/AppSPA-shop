<template>
	<div class="category-nav">
		<head-nav>
			<template #center>
				<span>分类</span>
			</template>
		</head-nav>
	</div>
</template>

<script>
	import HeadNav from 'components/common/headnav/HeadNav'
	export default {
		name:'CategoryNav',
		components:{
			HeadNav
		}
	}
</script>

<style>
	.category-nav{
		width: 100%;
		position: relative;
		top: 0;
		background-color: white;
	}
</style>
