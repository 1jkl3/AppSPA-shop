import {ADD_CART,ADD_COUNT} from './store_type.js'
export default {
	handleCart(context,payload){
		return new Promise((resolve,reject)=>{
			let index = context.state.shopCart.findIndex(item =>item.id == payload.id )
			if(index == -1){
				context.commit(ADD_CART,payload)
				resolve("添加购物车成功")
			}else{
				context.commit(ADD_COUNT,context.state.shopCart[index])
				resolve("商品数量加一")
			}
		})
	}
}