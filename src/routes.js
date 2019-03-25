import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Singin from './components/SingIn';
import Dashboard from './components/Dashboard';
import store from './components/Store/store';

Vue.use(VueRouter);

const authGuard = {
    beforeEnter: (to, from, next) => {
        if (store.state.admin.token) {
            next();
        }else{
            next('/');
        }
    }
};

const routes = [
    { path:'/',component:Home },
    { path:'/singin',component:Singin },
    { path:'/dashboard',component:Dashboard,
    children:[
        
    ], ...authGuard },
];

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(from, to, savePosition){
        return { x: 0, y: 0}
    }
})