import Vue from "vue";
import App from "./App.vue";
// import store from "./store";  //  --
import store from "../store"; // +

import Vuetify from "vuetify";

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    store,
    vuetify: new Vuetify(),
    render: (h) => h(App),
});

// import Vue from 'vue'
// import App from './App.vue'

// import Vuetify from "vuetify";

// Vue.use(Vuetify);

// new Vue({
//   el: '#app',
//   vuetify: new Vuetify(),
//   render: h => h(App)
// });
