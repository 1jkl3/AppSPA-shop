import {ADD_CART,ADD_COUNT,ALTER_CHECKED,ADD_COMMODITY,CHECK_ALL,CHECK_SHOP,CHECK_ITEM} from './store_type.js'
export default {
  //添加店铺
	[ADD_CART](state,payload){
		state.shopCart.push(payload)
	},
  //添加商品
  [ADD_COMMODITY](state,payload){
    state.shopCart[payload.code].unshift(payload.date)
  },
  //添加商品数量
	[ADD_COUNT](state,payload){
		payload.count++
	},
	//全选控件
	[CHECK_ALL](state,payload){
		if(payload){
			state.shopCart.forEach(item=>{
				item.forEach(item2=>{
					item2.checked = payload
				})
			})
		}
	},
	//店铺全选
	[CHECK_SHOP](state,payload){
		state.shopCart.forEach(item=>{
			item.forEach(item2=>{
				if(item2.id === payload.id){
					item2.checked = payload.checked
				}
			})
		})
	},
	//商品选项
	[CHECK_ITEM](state,payload){
		state.shopCart.forEach(item=>{
			item.forEach(item2=>{
				if(item2.id === payload.id){
					item2.checked = payload.checked
				}
			})
		})
	},
  //操作增删商品数量
	[ALTER_CHECKED](state,payload){
		let index = 0;
		let index2 = 0;
		if(payload.count <= 0){
			state.shopCart.forEach((item1,index1)=>{
				index2 = index1
				index = item1.findIndex(item => payload.id == item.id)
			})
			state.shopCart[index2].splice(index,1)
		}else{
			state.shopCart.forEach((item,index1)=>{
				index2 = index1
				index = item.findIndex(item => payload.id == item.id)
			})
			state.shopCart[index2][index].count = payload.count
		}
	}
}
