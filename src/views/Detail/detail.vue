<template>
	<div class="detail">
		<detail-nav></detail-nav>
	</div>
</template>

<script>
	import detailNav from './comDetail/detailNav'
	export default {
		name:'detail',
		components:{
			detailNav
		},
		computed:{
			getId(){
				return this.$route.query.id
			}
		}
	}
</script>

<style>
</style>
