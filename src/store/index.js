import Vue from "vue";
import Vuex from "vuex";
// Modules

// import history from "@/store/history.js";

// Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {},
//     mutations: {},
//     actions: {},
//     modules: {
//         history: history,
//     },
// });

// v.2 - скопировали из HealthBook
// // Modules
// import history from "@/store/history.js";

// Vue.use(Vuex);

// export default new Vuex.Store({
//     modules: {
//         // courses: courses,
//         history: history,
//         // products_modules: products
//         // products_module: products,
//         // products: products // v3
//         // categories: categories,
//         // categories,
//         // notifications,
//     },
//     state: {},
//     mutations: {},
//     actions: {},
// });

// v.3 перенесли сюда код из модуля history.js

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        history: []
    },
    mutations: {
        SET_HISTORY(state, payload) {
            state.history = payload;
        },
    },
    actions: {
        fetchHistoryByLastMonth({ commit }) {
            let dateOneMonthAgo = new Date();
            dateOneMonthAgo.setMonth(dateOneMonthAgo.getMonth() - 1);
            // let dateStartTime = new Date("2023-01-01");

            browser.history // ERROR
                .search({
                    text: "",
                    // startTime: d,
                    startTime: dateOneMonthAgo,
                    // startTime: dateStartTime,
                    // endTime: 0,
                    endTime: new Date(),
                    // endTime: dateStartTime,

                    maxResults: 1000,
                })
                .then((response) => {
                    // commit("SET_COURSES", response.data);
                    commit("SET_HISTORY", response.data);
                    console.log("history has been fetched:", response); // <--- here
                });
        },
    },
});
