import {
  ADD_CART,
  ADD_COUNT,
  ADD_COMMODITY
} from './store_type.js'
export default {
  handleCart(context, payload) {
    return new Promise((resolve, reject) => {
      if (context.state.shopCart.length == 0) {
        let arr = []
        arr.push(payload)
        context.commit(ADD_CART, arr)
        resolve("添加购物车成功")
      } else {
        var index = true;
        context.state.shopCart.forEach((item,index1)=>{
          let isbtn=true
           item.forEach((item2,index2)=>{
                if (item2.shopName === payload.shopName) {
                  if (item2.id === payload.id) {
                   context.commit(ADD_COUNT, item2)
                   resolve("商品数量增加")
                   index = false
                   isbtn = false
                  }
                  if (isbtn) {
                    let obj = {}
                    obj.code = index1
                    obj.date = payload
                    context.commit(ADD_COMMODITY, obj)
                    resolve("添加商品")
                    index = false
                  }
                }
           })
        })
        if (index) {
          let array = []
          array.push(payload)
          context.commit(ADD_CART, array)
          resolve("添加店铺")
        }
      }
    })
  }
}
