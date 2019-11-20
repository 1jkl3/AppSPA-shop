<template>
  <div id="hean-nav">
	  <div class="nav-left"><slot name="left"></slot></div>
	  <div class="nav-center"><slot name="center"></slot></div>
	  <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'HeadNav'
}
</script>
<style>
	#hean-nav{
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		box-shadow: 0px 1px 2px #9DA0A4;
	}
	.nav-center{
		flex: 1;
	}
	.nav-left,.nav-right{
		width: 13%;
		/* background-color: yellow; */
	}
</style>
