import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComp from './pages/HomeComp';
import BlogComp from './pages/BlogComp';
import ContactsComp from './pages/ContactsComp';
import AboutComp from './pages/AboutComp'
import ShowComp from './pages/ShowComp'

const router = new VueRouter({
	mode: 'history',
    linkExactActiveClass: 'active', // cosi resta in cronologia i cambi di pagina anche essendo una singlepageapplication
	routes: [
        {
            path:'/',
            name:'home',
            component: HomeComp
        },
        {
            path:'/blog',
            name:'blog',
            component: BlogComp
        },
        {
            path:'/chi-siamo',
            name:'about',
            component: AboutComp
        },
        {
            path:'/contatti',
            name:'contacts',
            component: ContactsComp
        },
        {
            path:'/dettagli/:slug',
            name:'show',
            component: ShowComp
        },

	]
});

export default router;
