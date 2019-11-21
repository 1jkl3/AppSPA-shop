import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/home.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/home'
	},
	{ //首页
		path: '/home',
		name: 'home',
		component: Home,
		meta:{
			title:'首页'
		}
	},
	{ //分类
		path: '/category',
		name: 'category',
		component: () => import('../views/Category/category.vue'),
		meta:{
			title:'分类'
		}
	},
	{ //我的
		path: '/profile',
		name: 'profile',
		component: () => import('../views/ProFile/profile.vue'),
		meta:{
			title:'我的'
		}
	},
	{ //购物车
		path: '/ShopCart',
		name: 'ShopCart',
		component: () => import('../views/ShopCart/ShopCart.vue'),
		meta:{
			title:'购物车'
		}
	},
	{
		path:'/detail',
		name:'detail',
		component:() => import('../views/Detail/detail.vue'),
		meta:{
			title:'商品详情页'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})
router.beforeEach((to,from,next)=>{
	document.title=to.matched[0].meta.title
	next();
})
export default router
