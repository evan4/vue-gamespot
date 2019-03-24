import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Singin from './components/SingIn';

Vue.use(VueRouter);

const routes = [
    { path:'/',component:Home },
    { path:'/singin',component:Singin },
];

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(from, to, savePosition){
        return { x: 0, y: 0}
    }
})