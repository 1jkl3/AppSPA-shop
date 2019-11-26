<template>
	<div class="cart-list" v-if="get_cart_length > 0">
		<cart-item v-for="(item,index) in get_cart" :key="index" :listItem="item"/>
	</div>
</template>

<script>
	import CartItem from './CartItem'
	
	import {mapGetters} from 'vuex'
	export default {
		name:'CartList',
		components:{
			CartItem
		},
		computed:{
			...mapGetters(['get_cart','get_cart_length'])
		}
	}
</script>

<style>
</style>
