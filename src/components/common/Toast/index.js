import Toast from './Toast'

const obj = {}

obj.install = function(Vue){
	//创建一个vue构造器
	const toastConstructor = Vue.extend(Toast)
	//new这个构造器生成一个vue实例对象
	const toast = new toastConstructor()
	//将一个div挂载到toast这个vue实例上
	toast.$mount(document.createElement('div'))
	//将Toast组件的dom添加到div里
	document.body.appendChild(toast.$el)
	//生成对应的方法
	Vue.prototype.$toast = toast
}
export default obj