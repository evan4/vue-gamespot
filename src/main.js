import Vue from 'vue';
import { MdCard } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

Vue.use(MdCard);

import App from './App.vue'
import router from './routes';

import Button from './components/utils/button';

Vue.component('app-button', Button);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
