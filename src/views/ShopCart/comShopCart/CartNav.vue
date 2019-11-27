<template>
	<div class="cart-nav">
		<head-nav>
			<template #center>
				<div>购物车({{get_cart_length}})</div>
			</template>
		</head-nav>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import HeadNav from 'components/common/headnav/HeadNav'
	export default {
		name:'CartNav',
		components:{
			HeadNav
		},
		computed:{
			...mapGetters(['get_cart_length'])
		}
	}
</script>

<style>
</style>
