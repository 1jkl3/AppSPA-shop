<template>
	<div class="swiper-active">
		<swiper :options="swiperOption">
		    <swiper-slide><img src="@/assets/img/TB1Ih7cj.T1gK0jSZFhXXaAtVXa-520-280.jpg_q90_.webp"></swiper-slide>
		    <swiper-slide><img src="@/assets/img/TB1tVbMia67gK0jSZFHSuu9jVXa.jpg"></swiper-slide>
		    <swiper-slide><img src="@/assets/img/TB1VESgj7L0gK0jSZFxSutWHVXa.jpg"></swiper-slide>
		    <swiper-slide><img src="@/assets/img/TB1562Aj7P2gK0jSZPxXXacQpXa-520-280.jpg_q90_.webp"></swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name:'HomeSwiper',
		components:{
			swiper,
			swiperSlide
		},
		data(){
			return {
				swiperOption:{
					pagination:{
						el:'.swiper-pagination'
					},
					autoplay:{
						delay:2000,
						disableOnInteraction:false,
					},
					loop:true,
					speed: 1500,
					lazyLoading :true
				}
			}
		}
	}
</script>

<style>
	.swiper-active{
		height: 200px;
		border-bottom: 10px solid #eee;
	}
	.swiper-active img{
		height:200px
	}
</style>
