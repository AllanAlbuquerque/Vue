import 'nprogress/nprogress.css';
import VueFilterDateFormat from 'vue-filter-date-format';
import BaseIcon from '@/components/BaseIcon.vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueFilterDateFormat);
Vue.component('BaseIcon', BaseIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
