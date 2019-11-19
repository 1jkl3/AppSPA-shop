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
			if(this.$refs.tabcoll){
				//home
				this.tabloadoffsetTop=this.$refs.tabcoll.$el.offsetTop
			}else if(this.$refs.detailParmas){
				//detail
				this.paramsHeight=this.$refs.detailParmas.$el.offsetTop
				this.commentHeight=this.$refs.detailComment.$el.offsetTop
				this.nomInateHeight=this.$refs.detailNomInate.$el.offsetTop
			}
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