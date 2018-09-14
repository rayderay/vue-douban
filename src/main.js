// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import book from './components/book/book';
import home from './components/home/home';
import mine from './components/mine/mine';
import './common/css/common.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(VueRouter);
const routes = [
  { path: '/home', component: home },
  { path: '/book', component: book },
  { path: '/mine', component: mine }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  render: h => h(App),
  router
}).$mount('#app');
