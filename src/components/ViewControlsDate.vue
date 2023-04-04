<template>
  <div class="view-controls__date date">
    <div class="date__change-buttons">
      <!-- <v-btn
        class="mx-2"
        fab
        dark
        x-small
        __color="grey darken-3"
        @click.prevent="rewindCalendar('prev')"
      >
        <v-icon dark> arrow_left </v-icon>
      </v-btn> -->

      <!-- <v-btn
        class="mx-2"
        fab
        dark
        x-small
        color="white"
        @click.prevent="rewindCalendar('prev')"
      >
        <v-icon dark> arrow_left </v-icon>
      </v-btn> -->

      <v-btn icon color="grey darken-3" @click.prevent="rewindCalendar('prev')">
        <v-icon>navigate_before</v-icon>
      </v-btn>

      <!-- <v-btn
        class="mx-2"
        fab
        dark
        x-small
        @click.prevent="rewindCalendar('next')"
        color="grey darken-3"
      >
        <v-icon dark> arrow_right </v-icon>
      </v-btn> -->

      <v-btn icon color="grey darken-3" @click.prevent="rewindCalendar('next')">
        <v-icon>navigate_next</v-icon>
      </v-btn>
    </div>
    <div class="date__value">
      <!-- <span>20-27</span>
        <span>January</span>
        <span>2023</span> -->
      <span> {{ dateActiveFormatted }} </span>
    </div>
    <div class="date__datepicker-icon"></div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ViewControlsDate",

  props: {
    // dateActive: {
    //   type: String,
    //   default: "",
    // },
  },

  computed: {
    dateActiveFormatted() {
      let mode = this.$store.state.history.calendarMode;
      let datetime = ""; // -
      let dateFormatted = "";

      //   console.log("mode");
      //   console.log(mode);

      switch (mode) {
        case "day":
          datetime = this.$store.state.history.dateCalendar; // -
          dateFormatted = moment(datetime).format("D MMMM YYYY");
          break;
        case "week":
          datetime = this.$store.state.history.dateCalendar; // -
          //   console.log(
          //     "Начала недели -",
          //     moment(datetime).startOf("isoWeek").format("DD/MM/YYYY HH:mm:ss")
          //   );
          //   console.log(
          //     "Конец недели  -",
          //     moment(datetime).endOf("isoWeek").format("DD/MM/YYYY HH:mm:ss")
          //   );
          dateFormatted = `${moment(datetime)
            .startOf("isoWeek")
            .format("DD MMM")} - ${moment(datetime)
            .endOf("isoWeek")
            .format("DD MMM YYYY")}`;
          break;
        case "month":
          datetime = this.$store.state.history.dateCalendar; // -
          dateFormatted = moment(datetime).format("MMMM YYYY");
          break;
        default:
          break;
      }

      return dateFormatted;
    },
  },

  methods: {
    // setRating(event, value) {
    //   this.activeRating = value;
    //   this.cleanHoverRating();
    //   //   this.$emit("myEvent");
    //   this.$emit("set-rating", value);

    //   this.$emit("input", event.target.value);
    // },

    rewindCalendar(direction) {
      this.$emit("rewind-calendar", direction);
    },
  },
};
</script>

<style lang="scss" scoped></style>
