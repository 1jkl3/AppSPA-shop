<template>
  <div id="home">
	  <head-nav class="nav"/>
	  <home-swiper/>
  </div>
</template>

<script>
import HeadNav from 'components/common/headnav/HeadNav'
import HomeSwiper from './childCom/HomeSwiper'
export default {
  name: 'home',
  components: {
	  HeadNav,
	  HomeSwiper
  }
}
</script>
<style>
	#home{
		
	}
	.nav{
		box-shadow: 0px 2px 0.2px red;
	}
</style>
