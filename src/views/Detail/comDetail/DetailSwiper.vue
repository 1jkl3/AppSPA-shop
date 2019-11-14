<template>
	<div class="detail-swiper">
		<swiper :options="detailSwiperOption">
			<swiper-slide v-for='(item,index) in productSwiper' :key="index">
				<img class="swiper-detail-img" :src="require('@/assets/'+item)" />
			</swiper-slide>
			<template #pagination><div class="swiper-pagination"></div></template>
		</swiper>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name:'DetailSwiper',
		props:{
			productSwiper:{
				type:Array,
				default:null
			}
		},
		components:{
			swiper,
			swiperSlide
		},
		data(){
			return{
				detailSwiperOption:{
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
	.detail-swiper{
		height: 250px;
	}
	.swiper-detail-img{
		height: 250px;
		width: 100%;
	}
</style>
