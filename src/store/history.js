export default {
    state: {
        value: "my value",
        history: []
    },
    mutations: {
        updateValue(state, payload) {
            state.value = payload;
        },

        SET_HISTORY(state, payload) {
            state.history = payload;
        }

    },
    getters: {
        value: (state) => {
            return state.value;
        },
    },

    actions: {
        updateValue({ commit }, payload) {
            commit("updateValue", payload);
        },

        // fetchCourses({ commit }) {
        //     CoursesServices.getCourses().then((response) => {
        //         commit("SET_COURSES", response.data);
        //         console.log("courses has been fetched:", response); // <--- here
        //     });
        // },

        fetchHistory({ commit }) {

            browser.history // ERROR
                .search({
                    text: "",
                    startTime: 0,
                })
                .then((response) => {
                    commit("SET_HISTORY", response.data);
                    console.log("history has been fetched:", response); // <--- here
                });

        },

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

                    maxResults: 1000
                })
                .then((response) => {
                    commit("SET_HISTORY", response.data);
                    console.log("history has been fetched:", response); // <--- here
                });

        }

        // browser.history // ERROR
        // .search({
        //     text: "",
        //     startTime: 0,
        // })
        // .then(renderList);



    },
};
