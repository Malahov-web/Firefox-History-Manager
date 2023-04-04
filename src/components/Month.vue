<template>
  <div class="days">
    <div
      class="day"
      v-for="(dayHistory, name) in historyGroupedByDay"
      :key="name"
    >
      <div class="day__title">
        {{ getDayDateDMMMMdddd(name) }}
      </div>

      <div class="day__history">
        <div class="day__history">
          <HistoryItem
            class="asd"
            v-for="item in dayHistory"
            :key="item.id"
            :item="item"
          >
          </HistoryItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import HistoryServices from "@/services/HistoryServices.js";
import HistoryItem from "@/components/HistoryItem.vue";

export default {
  components: {
    HistoryItem,
  },

  name: "Feed",

  created() {
    this.$store.dispatch("fetchHistoryByLastMonth");
    // this.$store.dispatch("fetchHistory");
    console.log("Create HOOK");
  },

  computed: {
    history() {
      //   return this.$store.state.courses;
      return this.$store.state.history.history; // -
      // перенесли код из модуля в store/index.js,
      //   return this.$store.state.history;
    },

    dayDate() {
      // return this.getDayDate(this.history);
      //   return this.getDayDateFormatted(this.history);

      // v. при подключении кода из HistoryServices.js
      return HistoryServices.getDayDateFormatted(this.history);
    },

    historyGroupedByDay() {
      return this.groupHistoryByDay(this.history);
      //   return this.groupHistoryByDay(this.historyHumanReadable);
    },
  },

  methods: {
    groupHistoryByDay(historyArr) {
      let historyGroupedObj = {};
      // пройтись циклом

      for (let i = 0; i < historyArr.length; i++) {
        const element = historyArr[i];

        // 0.прочесть дату
        let date = new Date(element.lastVisitTime);
        // console.log("date");
        // console.log(date); // +

        // 1. узнать к какому дню относится
        let dateDMMYYYY = moment(date).format("D-MMMM-YYYY");

        // 2. если нет такого объекта с датой этого дня - создать его, потом добавить
        if (undefined == historyGroupedObj[dateDMMYYYY]) {
          historyGroupedObj[dateDMMYYYY] = [];
        }
        historyGroupedObj[dateDMMYYYY].push(element);
      } // end for

      console.log("historyGroupedObj");
      console.log(historyGroupedObj);

      return historyGroupedObj;
    },
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
      } // end for

      console.log("historyGroupedObj");
      console.log(historyGroupedObj);

      return historyGroupedObj;
    },
    // Добавить даты чп

    getDayDateDMMMMdddd(dateStr) {
      let date = moment(dateStr).format("D MMMM, dddd");
      return date;
    },
  },
};
</script>

<style lang="scss" scoped></style>
