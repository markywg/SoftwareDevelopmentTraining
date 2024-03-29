import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios';

axios.defaults.withCredentials = true

Vue.config.productionTip = false;
Vue.prototype.axios = axios
Vue.prototype.console = window.console

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
