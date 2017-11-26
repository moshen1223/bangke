import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import store from './store'


import 'common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(MintUI);

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
