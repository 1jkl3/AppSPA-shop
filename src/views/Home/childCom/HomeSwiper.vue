<template>
	<div class="swiper-active">
		<swiper :options="swiperOption">
		    <swiper-slide v-for="item in Swiper" :key="item">
				<img :src="require('@/assets/'+item)" @load="imgLoad"/>
			</swiper-slide>
			<template #pagination><div class="swiper-pagination"></div></template>
		</swiper>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name:'HomeSwiper',
		props:{
			Swiper:{
				type:Array,
				default:()=>{
					return []
				}
			}
		},
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
					speed: 1500
				}
			}
		},
		methods:{
			imgLoad(){
				this.$bus.$emit("ImgLoad")
			}
		}
	}
</script>

<style>
	.swiper-active{
		height: 200px;
	}
	.swiper-active img{
		height:200px;
		width: 100%;
	}
</style>
