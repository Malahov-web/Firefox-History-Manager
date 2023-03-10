<template>
  <div class="day">
    <div class="day__title">{{ dayDate }}</div>

    <div class="day__history">
      <div
        class="history__item"
        v-for="item in historyHumanReadable"
        :key="item.id"
      >
        <div class="history__item-time">
          {{ getHistoryItemTimeFormatted(item.lastVisitTime) }}
        </div>
        <div class="history__item-favicon">
          <img __src="" alt="" v-bind:src="generateFaviconUrl(item.url)" />
        </div>
        <div class="history__item-title">
          {{ item.title }}
        </div>
        <div class="history__item-link">
          <a v-bind:href="item.url" class="asd">
            <v-icon dense __color="grey lighten-1"> link </v-icon>
            Link
          </a>
        </div>
        <!-- <div class="history__item-button" @click="deleteItem(item.id)"> -->
        <div class="history__item-button" @click="deleteItem(item.url)">
          <!-- <span>X</span> -->
          <v-icon dense __color="grey lighten-1"> close </v-icon>
        </div>
      </div>

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

export default {
  name: "Day",

  //   data() {
  //     return {
  //         myHistory: [1,2,3]
  //     };
  //   },

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
      return this.getDayDateFormatted(this.history);
    },

    // moment(this.day);

    // DEV Test +
    // dayTodayFromMoment() {
    //   return moment(this.day);
    // },
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

    getDayDate(historyArr) {
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

    getDayDateFormatted(historyArr) {
      if (historyArr[0] == undefined) {
        return;
      }
      let dayDate = new Date(historyArr[0].lastVisitTime);

      return moment(dayDate).format("D MMMM, dddd");
    },

    getHistoryItemTimeFormatted(datetime) {
      return moment(datetime).format("H:mm");
    },

    generateFaviconUrl(itemUrlString) {
      let urlObj = new URL(itemUrlString);
      let faviconUrlString = urlObj.origin + "/favicon.ico";

      return faviconUrlString; //itemUrlString;
    },

    __deleteItem(itemId) {
      // alert("deleteItem");
      // return itemId;

      // this.$store.dispatch("setCompareMode", key);
      this.$store.dispatch("deleteItem", itemId);
    },

    deleteItem(itemUrl) {
      console.log("Delete item in component: " + itemUrl);

      this.$store.dispatch("deleteItem", itemUrl);
    },
  },
};
</script>

<style lang="scss" scoped></style>
