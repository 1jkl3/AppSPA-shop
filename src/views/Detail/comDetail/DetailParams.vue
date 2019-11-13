<template>
	<div class="detail-params">
		<div class="clothes-size">
			<div class="clothes-name"><span>尺码</span></div>
			<div class="clothes-item">
				<div class="detail-flex" v-for="item in getclothSize" :key="item">{{item}}</div>
			</div>
		</div>
		<div class="clothes-bust">
			<div class="clothes-name"><span>胸围</span></div>
			<div class="clothes-item">
				<div class="detail-flex" v-for="item in getbust" :key="item">{{item}}</div>
			</div>
		</div>
		<div class="clothes-sleeve">
			<div class="clothes-name"><span>袖长</span></div>
			<div class="clothes-item">
				<div class="detail-flex" v-for="item in getsleeve" :key="item">{{item}}</div>
			</div>
		</div>
		<div class="clothes-outseam">
			<div class="clothes-name"><span>裤长</span></div>
			<div class="clothes-item">
				<div class="detail-flex" v-for="item in getoutseam" :key="item">{{item}}</div>
			</div>
		</div>
		<div class="clothes-shoulder">
			<div class="clothes-name"><span>肩宽</span></div>
			<div class="clothes-item">
				<div class="detail-flex" v-for="item in getshoulder" :key="item">{{item}}</div>
			</div>
		</div>
		<div class="clothes-length">
			<div class="clothes-name"><span>衣长</span></div>
			<div class="clothes-item">
				<div class="detail-flex" v-for="item in getclothesLength" :key="item">{{item}}</div>
			</div>
		</div>
		<div class="clothes-thickness">
			<div class="clothes-name"><span>厚薄</span></div>
			<div class="clothes-item">{{getThickness}}</div>
		</div>
		<div class="factory-name">
			<div class="clothes-name"><span>厂名</span></div>
			<div class="clothes-item">{{getfactoryName}}</div>
		</div>
		<div class="clothes-color">
			<div class="clothes-name"><span>颜色</span></div>
			<div class="clothes-item">{{getcolor}}</div>
		</div>
		<div class="size-clothes">
			<div class="clothes-name"><span>尺码</span></div>
			<div class="clothes-item">{{getsize}}</div>
		</div>
		<div class="clothes-season">
			<div class="clothes-name"><span>衣长</span></div>
			<div class="clothes-item">{{getseason}}</div>
		</div>
		<div class="clothes-style">
			<div class="clothes-name"><span>季节</span></div>
			<div class="clothes-item">{{getstyle}}</div>
		</div>
		<div class="clothes-manner">
			<div class="clothes-name"><span>风格</span></div>
			<div class="clothes-item">{{getmanner}}</div>
		</div>
		<div class="clothes-tide">
			<div class="clothes-name"><span>潮流</span></div>
			<div class="clothes-item">{{gettide}}</div>
		</div>
		<div class="clothes-footer">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailParams',
		props:{
			shopParameter:{
				type:Object,
				default:()=>{}
			}
		},
		computed:{
			getclothSize(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.clothSize
				}
			},
			getbust(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.bust
				}
			},
			getsleeve(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.sleeve
				}
			},
			getoutseam(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.outseam
				}
			},
			getshoulder(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.shoulder
				}
			},
			getclothesLength(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.clothesLength
				}
			},
			getThickness(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.thickness
				}
			},
			getfactoryName(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.factoryName
				}
			},
			getcolor(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.color
				}
			},
			getsize(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.size
				}
			},
			getseason(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.season
				}
			},
			getstyle(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.style
				}
			},
			getmanner(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.manner
				}
			},
			gettide(){
				if(typeof this.shopParameter !== "undefined"){
					return this.shopParameter.tide
				}
			},
			
		}
	}
</script>

<style>
	.detail-params {
		display: flex;
		flex-flow: column;
		border-bottom: 10px solid #EEEEEE;
	}

	.clothes-size {
		padding-top: 10px;
	}
	.detail-flex{
		flex: 1;
	}
	.clothes-size,
	.clothes-bust,
	.clothes-sleeve,
	.clothes-outseam,
	.clothes-shoulder,
	.clothes-thickness,
	.factory-name,
	.clothes-color,
	.size-clothes,
	.clothes-season,
	.clothes-style,
	.clothes-manner,
	.clothes-tide {
		height: 30px;
		line-height: 30px;
		display: flex;
		border-bottom: 2px solid #EEEEEE;
	}

	.clothes-length {
		height: 30px;
		line-height: 30px;
		display: flex;
		border-bottom: 3px solid #E0E0E0;
	}

	.clothes-name {
		width: 20%;
		height: 30px;
		line-height: 30px;
	}

	.clothes-item {
		color: deeppink;
		flex: 1;
		display: flex;
	}
	.clothes-footer{
		height: 20px;
	}
</style>
