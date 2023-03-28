<template>
  <div class="view-controls__buttons">
    <v-btn-toggle v-model="calendar_mode" mandatory>
      <v-btn
        color="primary"
        elevation="2"
        large
        raised
        v-for="item in calendar_mode_names"
        :key="item"
      >
        {{ item }}</v-btn
      >
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  name: "ViewControlsButtons",

  data() {
    return {
      //   calendar_mode: "month",
      //   calendar_mode: undefined,
      calendar_mode: 0,
      calendar_mode_names: ["day", "week", "month"],
    };
  },

  watch: {
    calendar_mode(newValue) {
      console.log("calendar_mode newValue"); // +
      console.log(newValue); // +

      //   this.$emit("update-view", newValue);
      //   this.$store.dispatch("changeCalendarMode", newValue);

      let mode = this.calendar_mode_names[newValue];
      this.$store.dispatch("changeCalendarMode", mode);
    },
  },
};
</script>

<style lang="scss" scoped></style>
