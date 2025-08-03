import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue } from 'bootstrap-vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(store);

// ✅ Production-safe loader hide logic
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
});

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
