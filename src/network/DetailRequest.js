import {request} from './request.js'
const getDetailInfo = function(){
	return request({
		url:`/api/product`
	})
}
const getNominateInfo = function(){
	return request({
		url:`/api/pop`
	})
}
export {getDetailInfo,getNominateInfo}