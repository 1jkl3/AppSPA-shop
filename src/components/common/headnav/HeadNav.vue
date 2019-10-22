<template>
  <div id="hean-nav">
	  <div class="nav-left"><slot name="left"></slot></div>
	  <div class="nav-center"><slot name="center"></slot></div>
	  <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'HeadNav',
  components: {
  }
}
</script>
<style>
	#hean-nav{
		display: flex;
		height: 44px;
		line-height: 44px;
	}
	.nav-center{
		flex: 1;
		background-color: red;
	}
	.nav-left,.nav-right{
		width: 13%;
		background-color: yellow;
	}
</style>
