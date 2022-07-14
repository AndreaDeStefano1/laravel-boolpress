import Vue from 'vue';

import RouterVue from 'vue-router';

Vue.use(RouterVue);

import HomeComp from './partials/HomeComp'

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
