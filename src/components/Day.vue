<template>
  <div class="day">
    <div class="day__title">{{ dayDate }}</div>

    <div class="day__history">
      <HistoryItem
        class="asd"
        v-for="item in historyHumanReadable"
        :key="item.id"
        :item="item"
      >
      </HistoryItem>

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
import HistoryItem from "@/components/HistoryItem.vue";

export default {
  name: "Day",

  components: {
    HistoryItem,
  },

  created() {
    // this.$store.dispatch("fetchHistoryByLastMonth");
    this.$store.dispatch("fetchHistoryByDay");
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

    // Останется как пример окда, возможно перенести куда-то в свою библиотеку
    __getDayDate(historyArr) {
      if (historyArr[0] == undefined) {
        // historyArr[0] = {};
        return;
      }

      let dayDate = new Date(historyArr[0].lastVisitTime);

      let day = dayDate.getDate(); // 3
      let month = dayDate.getMonth();
      // let weekDay = dayDate.getDay();
      // let weekDayName = moment().day(weekDay); // возвращает дату полную 2 Fri Mar 03 2023 22:21:08 GMT+0300
      // let weekDayName = moment().weekday(weekDay); //
      // let weekDayName = moment.weekday(1); // -
      // let weekDayName = moment(dayDate).weekday(1); // +-

      let weekDayName = moment(dayDate).format("dddd"); // +

      // return day;
      return `${day} ${month} ${weekDayName} `;
      // return ` ${weekDayName} `; // +
    },
  },
};
</script>

<style lang="scss" scoped></style>
