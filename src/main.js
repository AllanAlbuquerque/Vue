import BaseIcon from '@/components/BaseIcon.vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.component('BaseIcon', BaseIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => { return h(App); }
}).$mount('#app');
