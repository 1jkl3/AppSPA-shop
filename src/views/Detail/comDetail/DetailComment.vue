<template>
	<div class="detail-comment">
		<div class="comment-title">
			<div class="user-comment">用户评价</div>
			<div class="comment-more">更多</div>
		</div>
		<div class="comment-info" v-for="(item,index) in commentInfo" :key="index">
			<div class="info-user">
				<div class="info-comment-img">
					<img class="comment-src" :src="require('@/assets/'+item.userHead)" /> 
				</div>
				<div class="info-comment-name">{{item.username}}</div>
			</div>
			<div class="info-msg">
				<div class="item-usermsg"><span>{{item.usermsg}}</span></div>
				<div>{{item.commentTime}}</div>
				<div class="info-msg-src">
					<div class="info-src-item" v-for="itemImg in getSrcImg(item.productImg)" :key="itemImg">
						<img :src="require('@/assets/'+itemImg)" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailComment',
		props:{
			commentInfo:{
				type:Array,
				default:null
			}
		},
		methods:{
			getSrcImg(arr){
				let _newarr = arr.filter((item,index) =>{
					return index<3;
				})
				return _newarr
			}
		}
	}
</script>

<style>
	.comment-title{
		height: 50px;
		line-height: 50px;
		border-bottom: 5px solid #EEEEEE;
		display: flex;
	}
	.user-comment{
		width: 80%;
		padding-left: 10px;
	}
	.comment-more{
		width: 20%;
		text-align: center;
	}
	.comment-info{
		display: flex;
		flex-flow: column;
	}
	.info-user{
		height: 50px;
		display: flex;
		line-height: 50px;
	}
	.info-comment-img{
		width: 50px;
	}
	.info-comment-name{
		flex: 1;
		padding-left: 20px;
	}
	.comment-src{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.info-msg{
		font-size: 14px;
		color: black;
	}
	.info-msg div:nth-of-type(2) {
		padding: 0 0 5px 0;
	}
	.item-usermsg{
		padding: 5px 0 5px 0;
	}
	.info-msg-src{
		display: flex;
		padding-bottom: 5px;
		border-bottom: 5px solid #EEEEEE;
		flex-wrap: wrap;
	}
	.info-src-item{
		width: 80px;
		height: 65px;
	}
	.info-src-item img{
		width: 100%;
		height: 100%;
	}
</style>
