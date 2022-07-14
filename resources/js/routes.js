import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComp from './pages/HomeComp'

const router = new VueRouter({
	mode: 'history', // cosi resta in cronologia i cambi di pagina anche essendo una singlepageapplication
	routes: [
        {
            path:'/',
            name:'home',
            component: HomeComp
        }

	]
});

export default router;
