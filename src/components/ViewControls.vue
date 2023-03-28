<template>
  <div class="view-controls">
    <ViewControlsDate
      class="asd"
      @rewind-calendar="rewindCalendar"
    ></ViewControlsDate>

    <ViewControlsButtons class="asd"></ViewControlsButtons>

    <v-sheet tile height="54" class="d-flex">
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <!-- <v-btn icon class="ma-2" @click="moveBack()"> -->
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
      <v-select
        v-model="mode"
        :items="modes"
        dense
        outlined
        hide-details
        label="event-overlap-mode"
        class="ma-2"
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="ma-2"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="10" :style="myStyles">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="[0, 1, 2, 3, 4, 5, 6]"
        :type="calendarModeString"
        :events="events"
        @change="getEvents"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import moment from "moment";

import ViewControlsDate from "@/components/ViewControlsDate.vue";
import ViewControlsButtons from "@/components/ViewControlsButtons.vue";
// export default {
// };

export default {
  name: "ViewControls",

  components: {
    ViewControlsDate,
    ViewControlsButtons,
  },

  data: () => ({
    // calendar_mode: undefined,
    // calendar_mode_names: ["month", "week", "day"],
    // calendar_mode_names: ["day", "week", "month"],
    //
    // calendar
    type: "month", // month
    types: ["month", "week", "day", "4day"],
    mode: "stack",
    modes: ["stack", "column"],
    weekday: [0, 1, 2, 3, 4, 5, 6], // какие дния недели отображать в кал-ре
    weekdays: [
      // -  это вообще для selecta
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] },
    ],
    value: "",
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
    myStyles: {
      //   opacity: 0.2,
    },
  }),

  computed: {
    __dateActive() {
      let datetime = this.$store.state.history.dateCalendar; // -

      return moment(datetime).format("D MMMM YYYY");
    },

    calendarModeString() {
      //   let this.$store.state.history.calendarMode;
      return this.$store.state.history.calendarMode; // он и так в store в виде текста
    },
  },

  methods: {
    getEvents({ start, end }) {
      const events = [];
      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);
      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);
        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        });
      }
      this.events = events;
    },
    getEventColor(event) {
      return event.color;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },

    //
    moveBack() {
      //   $refs.calendar.prev();
      this.$refs.calendar.prev();
      //   let isChange = this.$refs.calendar.checkChange(); // moveBack
      this.showLog();

      //   console.log("isChange");
      //   console.log(isChange); // undefined
    },
    showLog() {
      // arrow_circle_left   // -
      //   arrow_left;   // -
      console.log("value:");
      console.log(this.value);
    },

    rewindCalendar(direction) {
      console.log(direction);
      // this.$refs.calendar.prev();
      this.$refs.calendar[direction](); // + динамическое имя метода при вызове
    },
  },

  watch: {
    __value(newValue, oldValue) {
      //   console.log("newValue");
      //   console.log(newValue);
      console.log("oldValue"); // +
      console.log(oldValue); // +

      //   console.log('$refs.calendar');
      //   console.log(this.$refs.calendar); // +

      //   console.log('$refs.calendar._props');
      //   console.log(this.$refs.calendar._props);    // +
      // start & end
      //   console.log('$refs.calendar._props.start');
      //   console.log(this.$refs.calendar._props.start);
      //   console.log('$refs.calendar._props.end');
      //   console.log(this.$refs.calendar._props.end);
      //   console.log('$refs.calendar._props.type');
      //   console.log(this.$refs.calendar._props.type);
      console.log("$refs.calendar.lastStart ");
      //   console.log(this.$refs.calendar.lastStart);  // сам object)
      console.log(this.$refs.calendar.lastStart.date);
      console.log("$refs.calendar.lastEnd ");
      //   console.log(this.$refs.calendar.lastEnd);  // сам object)
      console.log(this.$refs.calendar.lastEnd.date);

      //   changeDateCalendar

      // this.$store.dispatch("deleteItem", itemUrl);
      this.$store.dispatch("changeDateCalendar", newValue);

      let rangeCalendarArr = [
        this.$refs.calendar.lastStart.date,
        this.$refs.calendar.lastEnd.date,
      ];
      this.$store.dispatch("changeRangeCalendar", rangeCalendarArr);

      //   this.$store.dispatch("changeCalendarMode", mode);
    },

    // calendar_mode(newValue) {
    //   console.log("calendar_mode newValue"); // +
    //   console.log(newValue); // +
    // },

    value(newValue, oldValue) {
      //   console.log("newValue");
      //   console.log(newValue);
      console.log("oldValue"); // +
      console.log(oldValue); // +

      console.log("$refs.calendar.lastStart ");
      console.log(this.$refs.calendar.lastStart.date);
      console.log("$refs.calendar.lastEnd ");
      console.log(this.$refs.calendar.lastEnd.date);

      //   changeDateCalendar

      // this.$store.dispatch("deleteItem", itemUrl);
      this.$store.dispatch("changeDateCalendar", newValue);

      let rangeCalendarArr = [
        this.$refs.calendar.lastStart.date,
        this.$refs.calendar.lastEnd.date,
      ];
      this.$store.dispatch("changeRangeCalendar", rangeCalendarArr);

      //   let mode = this.calendar_mode_names[this.calendar_mode];
      //   this.$store.dispatch("changeCalendarMode", mode);

      //   this.$store.dispatch("changeCalendarMode", mode);
    },
  },
};
</script>

<style lang="scss" __scoped>
.v-calendar {
  position: absolute;
  z-index: -1;
  height: 0px !important;
  width: 0 !important;
  opacity: 0 !important;
}

.v-btn-toggle > .v-btn.v-btn--active {
  //   color: inherit;
  //   opacity: 1;

  //   color: #fff !important;
}

.v-btn-toggle > .v-btn.v-btn--active > .v-btn__content {
  color: #fff !important;
}
// .v-btn__content {
//   color: #fff !important;
// }

//
// Template:)
//
// <v-btn
//   class="mx-2"
//   fab
//   dark
//   x-small
//   color="grey darken-3"
//   @click="$refs.calendar.prev()"
// >
//   <!-- <v-icon dark> arrow_circle_left </v-icon> -->
//   <!-- <v-icon dark> arrow_back </v-icon> -->
//   <!-- <v-icon dark> navigate_before </v-icon> -->

//   <!-- <v-icon dark> arrow_back_ios </v-icon> -->
//   <!-- Не по центру -->

//   <!-- <v-icon dark> keyboard_arrow_left </v-icon> -->
//   <!-- слишком маленькая -->

//   <v-icon dark> arrow_left </v-icon>
// </v-btn>
</style>
