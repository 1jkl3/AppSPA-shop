import axios from 'axios'
// function getData(url,params){
// 	axios.get(url,params)
// }
export function request(config){
	const instance = axios.create({
		baseURL:'http://192.168.137.1:8060',
		timeout:5000
	})
	instance.interceptors.request.use((config)=>{
		return config
	},err =>{
		return err
	})
	instance.interceptors.response.use((res)=>{
		return res.data
	},err =>{
		return err
	})
	
	return instance(config)
}
// .then(result=>{
// 		return result
// 	}).catch(e=>{
// 		return e
// 	})