export default {
	addCart(state,payload){
		let product = state.shopCart.find(item =>item.id == payload.id )
		if(product){
			console.log("吡大赛")
			product.count+=1
		}else{
			state.shopCart.push(payload)
		}
	}
}