import Vue from 'vue';
import VueRouter from 'vue-router';
import template from './template.html';
import myItems from './components/items';

const router = new VueRouter({
  routes: [
    { path: '/', redirect: 'list' },
    { path: '/list', component: myItems, name: 'list' },
  ],
});

Vue.use(VueRouter);
const app = new Vue({
  el: '#demo-items',
  router,
  template,
});
