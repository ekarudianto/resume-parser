import 'vue-material/dist/theme/default.css';
import 'vue-material/dist/vue-material.min.css';
import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueResource from 'vue-resource';
import App from './App.vue';

/* eslint-disable no-new */
Vue.use(VueMaterial);
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App),
});
