import Vue from "vue";
import Vuex from "vuex";
// Modules

import history from "@/store/history.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        history: history,
    },
});
