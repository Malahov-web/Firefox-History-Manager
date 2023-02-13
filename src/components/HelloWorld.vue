<template>
  <div>
    <h2>{{ defaultText }}</h2>
    <p>123 {{ descriptionText }}</p>
  </div>
</template>

<script>
// I needed to correct this from
// import { store } from './store/store.js';
// to
// import store from "./store/index.js";
// import store from "src/store/index.js";
// ("src\store\index.js");

export default {
  name: "HelloWorld",
  mounted() {
    browser.runtime.sendMessage({});
  },

  created() {
    // this.$store.dispatch("fetchHistory");
    this.$store.dispatch("fetchHistoryByLastMonth");
    // this.$store.dispatch("fetchCoursesTypes");
    // console.log("Create HOOK");
  },

  computed: {
    defaultText() {
      return browser.i18n.getMessage("extName");
    },

    descriptionText() {
      return "This is history page";
    },

    history() {
      //   return this.$store.state.courses;
      // return this.$store.state.courses.courses;

      return this.$store.state.history.history;
      //   return this.$store.state.history;
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
