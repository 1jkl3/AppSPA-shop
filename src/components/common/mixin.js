import {throttle} from '@/common/util/throttle.js'
import BackTop from '@/components/common/BackTop'
export const imgLoadMIXIN = {
	data(){
		return {
			imgListener:null
		}
	},
	mounted(){
		this.imgListener = ()=>{
			throttle(this.$refs.scroll.refresh(),100)
		}
		this.$bus.$on("ImgLoad",this.imgListener)
	}
}

export const BackTopMIXIN = {
	components:{
		BackTop
	},
	data(){
		return {
			isTop:false,
		}
	},
	methods:{
		gotoup(scrllTop){
			this.$refs.scroll.scrollTo(0,scrllTop,500)
		}
	}
}
