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
        var shopindex = -1;
        var cartIndex = -1;

        context.state.shopCart.forEach((item, index1) => {

          //是否有相同id
          item.forEach((item3,index3)=>{
            if(item3.shopName === payload.shopName && item3.id === payload.id){
              shopindex = index3
            }
          })
          //相同店铺名的数据下标
          item.forEach((item2)=>{
            if(item2.shopName === payload.shopName){
              cartIndex = index1
            }
          })
        })
        //是否添加店铺
        if (cartIndex == -1) {
          let array = []
          array.push(payload)
          context.commit(ADD_CART, array)
          resolve("添加店铺")
        }{//是否添加商品
          if(shopindex == -1){
            let obj = {}
            obj.code = cartIndex
            obj.date = payload
            console.log(cartIndex)
            context.commit(ADD_COMMODITY, obj)
            resolve("添加商品")
          }else {//是否添加商品数量
            context.commit(ADD_COUNT, context.state.shopCart[cartIndex][shopindex])
            resolve("增加商品数量")
          }
        }
      }
    })
  }
}
