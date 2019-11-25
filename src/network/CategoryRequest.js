import {request} from './request.js'
const getCategoryLeftInfo = function(){
	return request({
		url:`/api/leftInfo`
	})
}
const getCategoryRightInfo = function(){
	return request({
		url:`/api/rightInfo`
	})
}
export {getCategoryLeftInfo,getCategoryRightInfo}