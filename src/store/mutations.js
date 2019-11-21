import {ADD_CART,ADD_COUNT} from './store_type.js'
export default {
	[ADD_CART](state,payload){
		payload.checked = true
		state.shopCart.push(payload)
	},
	[ADD_COUNT](state,payload){
		payload.count++
	}
}