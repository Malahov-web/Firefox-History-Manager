import moment from "moment";

export default {
    state: {
        value: "my value",
        history: [],

        // dateCalendar: "",
        dateCalendar: new Date(), // OK
        // dateCalendar: new Date("06-03-2023"), // TEST - Invalid Date
        // dateCalendar: new Date("2023-03-06"), // TEST
        rangeCalendar: [],
        calendarMode: "day",

        dateToday: new Date(),
        // dateToday: new Date('10-02-2023'),
    },

    mutations: {
        updateValue(state, payload) {
            state.value = payload;
        },

        SET_HISTORY(state, payload) {
            state.history = payload;
        },

        // __DELETE_URL_FROM_HISTORY(state, removedItemId) {
        //   // state.history = id;

        //   let newHistory = state.history.filter((item) => {
        //     // return item !== removedItemId
        //     return item.id !== item.removedItemId;
        //   });
        //   // state.productsCompareIds = newProductsCompareIds;
        //   state.history = newHistory;
        // },

        // REMOVE_FROM_COMPARE(state, removeProductId) {
        DELETE_URL_FROM_HISTORY(state, urlToRemove) {
            // state.history = id;
            // let my = urlToRemove;

            let newHistory = state.history.filter((item) => {
                return item.url !== urlToRemove;
            });
            // state.productsCompareIds = newProductsCompareIds;
            state.history = newHistory;
        },

        SET_DATE_CALENDAR(state, datetime) {
            state.dateCalendar = datetime;
            // console.log('state.dateCalendar in SET_DATE_CALENDAR');
            // console.log(state.dateCalendar); // +
        },
        SET_RANGE_CALENDAR(state, rangeArr) {
            state.rangeCalendar = rangeArr;
            // console.log('state.dateCalendar in SET_DATE_CALENDAR');
            // console.log(state.dateCalendar); // +
        },

        SET_CALENDAR_MODE(state, mode) {
            state.calendarMode = mode;
        },
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
                    maxResults: 10000,
                })
                .then((response) => {
                    // commit("SET_HISTORY", response.data);
                    commit("SET_HISTORY", response);
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

                    maxResults: 1000,
                })
                .then((response) => {
                    // commit("SET_COURSES", response.data);
                    // commit("SET_HISTORY", response.data); // -
                    commit("SET_HISTORY", response); // +

                    // this.myHistory = response.data;  // undefined ???
                    // this.myHistory = response;  // undefined ???

                    console.log("history has been fetched:", response); // <--- here
                });
        },

        ____fetchHistoryByDay({ commit }) {
            // Дата за вчерашнее число)  start
            let dateOneDayAgo = new Date();
            dateOneDayAgo.setDate(dateOneDayAgo.getDate() - 1);
            dateOneDayAgo.setHours(0, 0, 0);

            let endTimeOneDayAgo = new Date();
            endTimeOneDayAgo.setHours(0, 0, 0);
            // let endTimeOneDayAgo = dateOneDayAgo.setDate(dateOneDayAgo.getDate() + 1);
            console.log("dateOneDayAgo");
            console.log(dateOneDayAgo);
            console.log("endTimeOneDayAgo");
            console.log(endTimeOneDayAgo);
            // Дата за вчерашнее число)  end

            browser.history // ERROR
                // .search({ text: "" }) // по умолчанию за последнеи 24 часа
                .search({
                    text: "",
                    // startTime: dateOneDayAgo,
                    // // endTime: new Date(),
                    // endTime: endTimeOneDayAgo,
                    //
                    // TEMP DEV: за конкретную фикс дату - 6 марта
                    startTime: new Date("2023-03-06"),
                    // endTime: new Date(),
                    endTime: new Date("2023-03-07"),
                })
                .then((response) => {
                    commit("SET_HISTORY", response);
                    console.log("history has been fetched:", response); // <--- here
                });
        },

        __fetchHistoryByDay({ commit }) {
            // Дата за вчерашнее число)  start
            let dateOneDayAgo = new Date();
            dateOneDayAgo.setDate(dateOneDayAgo.getDate() - 1);
            dateOneDayAgo.setHours(0, 0, 0);

            let endTimeOneDayAgo = new Date();
            endTimeOneDayAgo.setHours(0, 0, 0);
            // let endTimeOneDayAgo = dateOneDayAgo.setDate(dateOneDayAgo.getDate() + 1);
            console.log("dateOneDayAgo");
            console.log(dateOneDayAgo);
            console.log("endTimeOneDayAgo");
            console.log(endTimeOneDayAgo);
            // Дата за вчерашнее число)  end

            browser.history // ERROR
                // .search({ text: "" }) // по умолчанию за последнеи 24 часа
                .search({
                    text: "",
                    // startTime: dateOneDayAgo,
                    // // endTime: new Date(),
                    // endTime: endTimeOneDayAgo,
                    //
                    // TEMP DEV: за конкретную фикс дату - 6 марта
                    // startTime: new Date("2023-03-06T23:59:50"), // +
                    // startTime: new Date("2023-03-06T00:00:00"), // +
                    startTime: new Date("2023-03-06"), // +  === 2023-03-06T00:00:00
                    // endTime: new Date(),
                    endTime: new Date("2023-03-06T23:59:59"),
                })
                .then((response) => {
                    commit("SET_HISTORY", response);
                    console.log("history has been fetched:", response); // <--- here
                });
        },

        fetchHistoryByDay({ commit, state }) {
            // // v. by Range
            // let startDateTime = new Date(state.rangeCalendar[0]);
            // let endDateTime = new Date(`${state.rangeCalendar[0]}T23:59:59`);

            // v. by Range
            let startDateTime = new Date(state.dateCalendar);
            let endDateTime = new Date(`${state.dateCalendar}`);
            endDateTime.setHours(23, 59, 59);

            console.log("endDateTime");
            console.log(endDateTime);

            browser.history
                .search({
                    text: "",
                    startTime: startDateTime,
                    endTime: endDateTime,
                })
                .then((response) => {
                    commit("SET_HISTORY", response);
                    console.log("history has been fetched:", response); // <--- here
                });
        },

        fetchHistoryByMonth({ commit, state }) {
            // v. by Range
            // let startDateTime = new Date(state.dateCalendar);
            // let endDateTime = new Date(`${state.dateCalendar}`);
            // endDateTime.setHours(23, 59, 59);

            // Прикол в том , что moment() возвращает НЕ new Date(), а какой-то объект
            // let startDateTime = moment(state.dateCalendar).startOf('month').format("X");
            // let endDateTime = moment(state.dateCalendar).endOf('month').format("X");

            // timestamp тоже не подходит
            // let startDateTime = moment(state.dateCalendar).startOf('month').format("X");
            // let endDateTime = moment(state.dateCalendar).endOf('month').format("X");

            // а вот метод .format()  - возвращает как раз объект Date()
            let startDateTime = moment(state.dateCalendar).startOf("month").format();
            let endDateTime = moment(state.dateCalendar).endOf("month").format();

            console.log("startDateTime");
            console.log(startDateTime);
            console.log("endDateTime");
            console.log(endDateTime);

            browser.history
                .search({
                    text: "",
                    startTime: startDateTime,
                    endTime: endDateTime,
                    maxResults: 1000,
                })
                .then((response) => {
                    commit("SET_HISTORY", response);
                    console.log("history has been fetched:", response); // <--- here
                });
        },

        fetchHistoryBy({ state, dispatch }, mode) {
            console.log("mode in action fetchHistoryBy:");
            console.log(state.calendarMode);
            console.log(mode);

            switch (state.calendarMode) {
                case "day":
                    dispatch("fetchHistoryByDay");

                    break;
                case "month":
                    dispatch("fetchHistoryByMonth");

                    break;

                default:
                    break;
            }
        },

        // __deleteItem({ commit }, value) {
        //   // let deletingUrl = browser.history.deleteUrl({ url: urlToRemove });
        //   browser.history
        //     .deleteUrl({
        //       url: urlToRemove,
        //     })
        //     .then((response) => {
        //       // commit("SET_HISTORY", response);
        //       console.log("history item has been removed:", response);

        //       commit("DELETE_URL_FROM_HISTORY", value);
        //     });
        // },

        deleteItem({ commit }, value) {
            // itemUrl
            // let deletingUrl = browser.history.deleteUrl({ url: urlToRemove });
            browser.history
                .deleteUrl({
                    url: value,
                    // url: "abrakadabra",
                })
                .then((response) => {
                    // commit("SET_HISTORY", response);
                    console.log("history item has been removed:", response);

                    commit("DELETE_URL_FROM_HISTORY", value);
                });
        },

        // browser.history // ERROR
        // .search({
        //     text: "",
        //     startTime: 0,
        // })
        // .then(renderList);

        changeDateCalendar({ commit }, dateStr) {
            let datetime = new Date(dateStr);
            commit("SET_DATE_CALENDAR", datetime);
            // console.log('datetime to SET_DATE_CALENDAR');
            // console.log(datetime);
        },

        changeRangeCalendar({ commit }, rangeArr) {
            commit("SET_RANGE_CALENDAR", rangeArr);
        },

        changeCalendarMode({ commit }, mode) {
            commit("SET_CALENDAR_MODE", mode);
        },
    },
};

/*

{

    id: "ot-4ClD9pnRr"
    lastVisitTime: 1676935642299
    title: "Volar: The Official Language Feature Extension for VS Code - A..."
    url: "https://vueschool.io/lessons/volar-the-official-language-feature-extension-for-vs-code"
    visitCount: 1
}
*/
