<template>
  <div id="app" v-cloak>
	  <keep-alive exclude="detail">
		<router-view/>
	  </keep-alive>
	<mult-tab v-if="$route.name !== 'detail'" ref="tab"/>
  </div>
</template>
<script>
	import MultTab from './components/content/MultTab'
	export default {
		name:'app',
		components:{
			MultTab//tab组件
		}
	}
</script>
<style>
	[v-cloak]{
		display: none;
	}
	body{
		margin: 0px;
		padding: 0px;
		height: 100%;
		width: 100%;
	}
</style>
