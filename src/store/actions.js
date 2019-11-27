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
        var addcart = true;
        context.state.shopCart.forEach((item, index1) => {
          var addshop = true
          item.forEach((item2, index2) => {
            if (item2.shopName === payload.shopName) { //比较店铺是否相同
              addcart = false
              if (item2.id === payload.id) { //比较商品是否相同
                context.commit(ADD_COUNT, item2)
                resolve("商品数量增加")
                addshop = false
              }
            }
          })
          if (addshop) { //是否添加商品
            if (addcart == false) {
              let obj = {}
              obj.code = index1
              obj.date = payload
              context.commit(ADD_COMMODITY, obj)
              resolve("添加商品")
            }
          }
        })
        if (addcart) { //是否添加店铺
          let array = []
          array.push(payload)
          context.commit(ADD_CART, array)
          resolve("添加店铺")
        }
      }
    })
  }
}
