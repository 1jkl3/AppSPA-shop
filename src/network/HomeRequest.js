import {request} from './request.js'
const getImg = function(){
	return request({
		url:'/api/swiper'
	})
}
const getGoods = function(type){
	return request({
		url: `/api/${type}`
	})
};
const getLists = function(){
	return request({
		url: '/api/list'
	})
};
const getRecom = function(){
	return request({
		url: '/api/recom'
	})
};
export {getImg,getGoods,getLists,getRecom}