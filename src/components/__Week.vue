<template>
  <!-- <div>Week</div> -->

  <div class="weekdays">
    <div v-for="item in weekdaysDates" :key="item.id">
      {{ item }}
    </div>

    <div class="weekday">
      <div class="weekday__title">weekday__title</div>
      <div class="weekday__history">
        <div class="weekdayhistory__item">
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

export default {
  name: "Week",

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
  },

  methods: {
    getWeekdaysDates(dateCalendar) {
      let weekdaysDates = [];
      let startWeekDate = moment(dateCalendar).startOf("week");
      //   let endWeekDate = moment(dateCalendar).endOf("week");

      let date = startWeekDate;
      for (let i = 0; i < 7; i++) {
        // v1
        // const nextWeekday = moment(date).add(1, "days"); // - нет это Не изменяет date кот-й снаружи
        // weekdaysDates.push(nextWeekday);
        //  v2
        // date.add(1, "days"); // - нет, так все становятся одинаковыми, т.к. объеек - по ссылке
        // weekdaysDates.push(date);
        // v3
        date.add(1, "days");
        const nextWeekday = moment(date);
        weekdaysDates.push(nextWeekday);
      }

      debugger;
      return weekdaysDates;
    },
  },
};
</script>

<style lang="scss" scoped></style>
