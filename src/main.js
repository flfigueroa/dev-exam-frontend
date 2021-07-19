import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import { BootstrapVue } from "bootstrap-vue";
import moment from "moment";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.prototype.moment = moment;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
