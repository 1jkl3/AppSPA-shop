//防抖
//  function(fn,wait){
// 	let timer
// 	return function(){
// 		const then = this
// 		let args = arguments
// 		if(!timer){
// 			timer = setTimeout(()=>{
// 				fn.apply(then,args)
// 				timer = null
// 			},wait)
// 		}
// 	}
// }
//节流
// export default function(fn,wait){
// 	let timer;
// 	return function(){
// 		const then = this
// 		let args = arguments
// 		if(timer) {
// 			clearTimeout(timer)
// 		}
// 		timer = setTimeout(()=>{
// 			fn.apply(then,args)
// 		},wait)
// 	}
// }
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 防抖，2 节流
 */
export default function(func, wait, type) {
	let timer;
	if (type == 1) {
		return function() {
			let then = this
			let args = arguments
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(() => {
				fn.apply(then, args)
			}, wait)
		}
	} else if (type == 2) {
		return function() {
			const then = this
			let args = arguments
			if (!timer) {
				timer = setTimeout(() => {
					fn.apply(then, args)
					timer = null
				}, wait)
			}
		}
	}
}
