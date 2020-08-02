// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
// import VConsole from 'vconsole';
import pandora from '@jd/pandora-mobile';
// import '@jd/pandora-mobile/cjs/theme/index.scss';
import '@jd/pandora-mobile/cjs/components/toast/style/index.scss';
import '@jd/pandora-mobile/cjs/components/modal/style/index.scss';
import App from './App';
import store from './store/index';
import router from './router';
import Loading from './components/loading';
import './common/fetch';

Vue.use(pandora.Modal);
Vue.use(pandora.Toast);
Vue.use(Loading);

// new VConsole()

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
