import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import mock from './mock/index.js';  // 该项目所有请求使用mockjs模拟
import './login.js' 
import './ui.js'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
Vue.prototype.loginmock = mock.login;
// import hello from './views/hello.js'
Vue.config.productionTip = false;
// Vue.prototype.$hello=hello;
var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


