import {GET_CART,GET_CART_LENGTH} from './store_type.js'
export default {
	[GET_CART](state){
		return state.shopCart
	},
	[GET_CART_LENGTH](state){
		return state.shopCart.length
	}
}