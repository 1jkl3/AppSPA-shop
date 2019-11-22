import {ADD_CART,ADD_COUNT,ALTER_CHECKED} from './store_type.js'
export default {
	[ADD_CART](state,payload){
		payload.checked = true
		state.shopCart.push(payload)
	},
	[ADD_COUNT](state,payload){
		payload.count++
	},
	[ALTER_CHECKED](state,payload){
		let index = 0;
		if(payload.count <= 0){
			index = state.shopCart.findIndex(item => payload.id == item.id)
			state.shopCart.splice(index,1)
		}else{
			index = state.shopCart.findIndex(item => payload.id == item.id)
			state.shopCart[index].checked = payload.checked
			state.shopCart[index].count = payload.count
		}
	}
}