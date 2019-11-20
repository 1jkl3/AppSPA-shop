import {ADD_CART,ADD_COUNT} from './store_type.js'
export default {
	handleCart(context,payload){
		let index = context.state.shopCart.findIndex(item =>item.id == payload.id )
		if(index == -1){
			context.commit(ADD_CART,payload)
		}else{
			context.commit(ADD_COUNT,context.state.shopCart[index])
		}
	}
}