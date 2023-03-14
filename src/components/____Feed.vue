<template>
  <div class="day">
    <div class="day__title">{{ dayDate }}</div>

    <div class="day__history">
      hist
      <div class="history__item">
        <div class="history__item-time"></div>
        <div class="history__item-favicon"></div>
        <div class="history__item-title"></div>
        <div class="history__item-link"></div>
        <div class="history__item-button"></div>
      </div>
      <!-- <p>history: {{ history }} </p> -->
      <!-- <p>myHistory: {{ myHistory }} </p> -->

      <div v-for="item in historyHumanReadable" :key="item.id">
        <!-- <div v-for="item in history" :key="item.id"> -->
        <!-- <div v-for="item in myHistory" :key="item.id"> -->
        <div class="history__item-time">
          <!-- {{ item.dateHumanReadable }} -->
          {{ formatDate(item.lastVisitTime) }}
        </div>
        <div class="history__item-favicon">
          {{ item.lastVisitTime }}
        </div>
        <div class="history__item-title">
          {{ item.title }}
        </div>
        <div class="history__item-link">
          <a v-bind:href="item.title" class="asd">Link</a>
        </div>
        <div class="history__item-button">X</div>
      </div>
      <p v-if="1">
        {{ historyGroupedByDay }}
      </p>

      <!-- <div class="history__item">
        <div class="history__item-time"></div>
        <div class="history__item-favicon"></div>
        <div class="history__item-title"></div>
        <div class="history__item-link"></div>
        <div class="history__item-button"></div>
      </div> -->
    </div>
  </div>
</template>

<script>
import moment from "moment";
import HistoryServices from "@/services/HistoryServices.js";

export default {
  name: "Day",

  //   data() {
  //     return {
  //         myHistory: [1,2,3]
  //     };
  //   },

  created() {
    // this.$store.dispatch("fetchHistoryByLastMonth");
    this.$store.dispatch("fetchHistory");
    console.log("Create HOOK");
  },

  computed: {
    history() {
      //   return this.$store.state.courses;
      return this.$store.state.history.history; // -
      // перенесли код из модуля в store/index.js,
      //   return this.$store.state.history;
    },

    historyHumanReadable() {
      //   return this.addDatesToHistoryItems(history); // -
      return this.addDatesToHistoryItems(this.history);
    },

    dayDate() {
      // return this.getDayDate(this.history);
      //   return this.getDayDateFormatted(this.history);

      // v. при подключении кода из HistoryServices.js
      return HistoryServices.getDayDateFormatted(this.history);
    },

    historyGroupedByDay() {
      return this.groupHistoryByDay(this.history);
    },
  },

  methods: {
    // Добавить даты чп
    name() {},
    addDatesToHistoryItems(historyArr) {
      let newArr = [];

      newArr = historyArr.map((currentValue) => {
        let dateHumanReadable = new Date(currentValue.lastVisitTime);
        // currentValue["dateHumanReadable"] = "123";
        currentValue["dateHumanReadable"] = dateHumanReadable;

        return currentValue;
      });

      //   return 1;
      return newArr;
    },

    formatDate(datetime) {
      let date = new Date(datetime);

      let day = date.getDate();
      let month = date.getMonth() + 1;

      return day + " " + month;
    },
    groupByDays() {},

    __groupHistoryByDay(historyArr) {
      let historyGroupedObj = {};
      // пройтись циклом

      for (let i = 0; i < historyArr.length; i++) {
        const element = historyArr[i];

        // 0.прочесть дату
        let date = new Date(element.dateHumanReadable);
        // console.log("date");
        // console.log(date); // +

        // 1. узнать к какому дню относится
        let dateDay = date.getDate();

        // если есть такой объект с датой этого дня
        if (undefined == historyGroupedObj[dateDay]) {
          historyGroupedObj[dateDay] = [];
        }
        historyGroupedObj[dateDay].push(element);

        // if (historyGroupedObj[dateDay]) {
        //     historyGroupedObj[dateDay].push(element);
        // }

        // for (const key in object) {
        //     if (Object.hasOwnProperty.call(object, key)) {
        //         const element = object[key];

        //     }
        // }
      } // end for

      console.log("historyGroupedObj");
      console.log(historyGroupedObj);

      return historyGroupedObj;
    },

    groupHistoryByDay(historyArr) {
      let historyGroupedObj = {};
      // пройтись циклом

      for (let i = 0; i < historyArr.length; i++) {
        const element = historyArr[i];

        // 0.прочесть дату
        let date = new Date(element.dateHumanReadable);
        // console.log("date");
        // console.log(date); // +

        // 1. узнать к какому дню относится
        // let dateDay = date.getDate();
        // let weekDayName = moment(dayDate).format("dddd"); // +
        let dateDMMYYYY = moment(date).format("D-MMMM-YYYY");

        // 2. если есть такой объект с датой этого дня
        if (undefined == historyGroupedObj[dateDMMYYYY]) {
          historyGroupedObj[dateDMMYYYY] = [];
        }
        historyGroupedObj[dateDMMYYYY].push(element);
      } // end for

      console.log("historyGroupedObj");
      console.log(historyGroupedObj);

      return historyGroupedObj;
    },
  },
};
</script>

<style lang="scss" scoped></style>
