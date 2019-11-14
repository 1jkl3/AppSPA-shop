<template>
	<div class="recommend">
		<div style="padding: 10px 0px 15px 0px;"><span>本周流行</span></div>
		<div class="recommend-item">
			<div class="rec-item" v-for="(item,index) in beforefirst" :key='index'>
				<div class="rec-item-img">
					<img :src="require('@/assets/'+item.img)" />
				</div>
				<div class="rec-item-text">{{item.text}}</div>
			</div>
		</div>
		<div class="recommend-item">
			<div class="rec-item" v-for="(item,index) in afterfirst" :key='index'>
				<div class="rec-item-img">
					<!-- <img :src="item.img" /> -->
					<img src="@/assets/img/list/7a695b382e.jpg" />
				</div>
				<div class="rec-item-text">{{item.text}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'recomMend',
		props: {
			rec: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		computed: {
			beforefirst() {
				return this.rec.filter((item, index) => index < this.rec.length / 2)
			},
			afterfirst() {
				return this.rec.filter((item, index) => index >= this.rec.length / 2)
			}
		}
	}
</script>

<style>
	.recommend {
		text-align: center;
	}

	.recommend-item {
		display: flex;
		height: 60px;
		/* margin-bottom: 10px; */
		padding-bottom: 20px;
	}

	.recommend span {
		font-size: 1.125rem;
	}

	.rec-item {
		flex: 1;
		height: 100%;
	}

	.rec-item img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.rec-item-img {
		margin: 0 auto;
		background: red;
		width: 50%;
		height: 80%;
		border-radius: 50%;
	}
	
	.rec-item-text{
		height: 20%;
	}
</style>
