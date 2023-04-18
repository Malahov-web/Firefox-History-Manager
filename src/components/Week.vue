<template>
  <!-- <div>Week</div> -->

  <div class="weekdays">
    <!-- <div v-for="item in weekdaysDates" :key="item.id">
      {{ item }}
    </div> -->

    <!-- <div v-for="item in historyGroupedByDay" :key="item.id">
      {{ item }}
    </div> -->

    <div class="weekday" v-for="item in weekdaysDates" :key="item.id">
      <div class="weekday__title">
        <!-- {{ item }} <br /> -->
        {{ formatWeekdayName(item) }}
        <br />
        <span> {{ formatWeekdayDate(item) }}</span>
      </div>
      <div class="weekday__history">
        <div
          v-for="historyItem in historyGroupedByDay[item]"
          :key="historyItem.id"
          class="weekdayhistory__item-outer"
        >
          <WeekdayHistoryItem
            :class="'id_' + historyItem.id"
            :item="historyItem"
          ></WeekdayHistoryItem>
        </div>

        <div class="weekdayhistory__item" style="display: none">
          <div class="weekdayhistory__item-top">
            <div class="weekdayhistory__item-favicon">
              <img src="" alt="" />
              <!-- <img __src="" alt="" v-bind:src="generateFaviconUrl(item.url)" /> -->
            </div>
            <div class="history__item-title">item.title</div>
          </div>
          <div class="weekdayhistory__item-bottom">
            <div class="weekdayhistory__item-time">
              <!-- <div
              class="history__item-time"
              v-bind:lastVisitTime="humanDateTEMP(item.lastVisitTime)"
            > -->
              <v-icon dense __color="grey lighten-1"> history </v-icon>
              <span>Last visit:</span> 2:20
            </div>

            <div class="weekdayhistory__item-link">
              <a href="#" class="asd">
                <!-- <a v-bind:href="item.url" class="asd"> -->
                <v-icon dense __color="grey lighten-1"> link </v-icon>
                Link
              </a>
            </div>

            <div class="weekdayhistory__item-button">
              <!-- <div class="weekdayhistory__item-button" @click="onDeleteItem(item.url)"> -->
              <v-icon dense __color="grey lighten-1"> close </v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import WeekdayHistoryItem from "@/components/WeekdayHistoryItem.vue";

export default {
  name: "Week",

  components: {
    WeekdayHistoryItem,
  },
  created() {
    this.$store.dispatch("fetchHistoryByWeek");
    console.log("Create HOOK");
  },

  computed: {
    history() {
      return this.$store.state.history.history; // -
    },

    dateCalendar() {
      return this.$store.state.history.dateCalendar;
    },

    weekdaysDates() {
      return this.getWeekdaysDates(this.dateCalendar);
    },

    historyGroupedByDay() {
      return this.groupHistoryByDay(this.history);
      //   return this.groupHistoryByDay(this.historyCleaned);
    },
  },

  methods: {
    getWeekdaysDates(dateCalendar) {
      let weekdaysDates = [];
      let startWeekDate = moment(dateCalendar).startOf("week");
      //   let endWeekDate = moment(dateCalendar).endOf("week");

      let date = startWeekDate;
      for (let i = 0; i < 7; i++) {
        // v3
        date.add(1, "days");
        // const nextWeekday = moment(date);
        const nextWeekday = moment(date).format("D-MMMM-YYYY");
        weekdaysDates.push(nextWeekday);
      }

      //   debugger;
      return weekdaysDates;
    },

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

    formatWeekdayName(date) {
      // 6-March-2023
      //   let dateArr = date.split("-");
      //   return moment(`${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`).format("dddd"); //
      //   return moment(date).format("dddd");

      //   return moment(date); // +
      return moment(date).format("dddd");
    },

    formatWeekdayDate(date) {
      return moment(date).format("D MMM");
    },
  },
};
</script>

<style lang="scss" scoped></style>
