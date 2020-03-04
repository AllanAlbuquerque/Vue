import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: () => { return import('../views/EventList.vue'); }
  },
  {
    path: '/event/:id',
    name: 'event-show',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import(/* webpackChunkName: "about" */ '../views/EventShow.vue'); }
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: () => { return import('../views/EventCreate.vue'); }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
