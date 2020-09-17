import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";
import UUID from "vue-uuid";
import VueMeta from 'vue-meta'

Vue.use(UUID);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAL_Xz9D6B-WE69uiknFSZpgkgOajQzBRU",
    libraries: "places",
  },
});
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
