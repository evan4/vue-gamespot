import Vue from 'vue';
import { MdCard } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate'

Vue.use(MdCard);

Vue.use(VueResource);
Vue.http.options.root = "https://auth-user-a126c.firebaseio.com/";

Vue.use(Vuelidate);

import store from './components/Store/store.js';

import App from './App.vue'
import router from './routes';

import Button from './components/utils/button';

Vue.component('app-button', Button);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
