import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomerComponent from '../components/home/home.vue'

const router = new VueRouter({
	routes: [
		{path:'/',component: HomerComponent}
	]
})

export default router;