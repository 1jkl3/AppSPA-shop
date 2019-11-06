<template>
  <div id="app">
	  <keep-alive>
		<router-view/>
	  </keep-alive>
	<mult-tab/>
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
	body{
		margin: 0px;
		padding: 0px;
		height: 100%;
		width: 100%;
	}
</style>
