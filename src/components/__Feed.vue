<template>
  <div class="day">
    <div class="day__title">title Im Feed comp</div>

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

      <!-- <div v-for="item in historyHumanReadable" :key="item.id"> -->
      <div v-for="item in history" :key="item.id">
        <!-- <div v-for="item in myHistory" :key="item.id"> -->
        <div class="history__item-time">
          <!-- {{ item.dateHumanReadable }} -->
          {{ item.lastVisitTime }}
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Feed",

  created() {
    // this.$store.dispatch("fetchHistoryByLastMonth");
    this.$store.dispatch("fetchHistoryByDay");
    console.log("Create HOOK");
  },

  computed: {
    history() {
      console.log("history in comp:");
      console.log(this.$store.state.history.history);

      //   return this.$store.state.courses;
      return this.$store.state.history.history; // -
      // перенесли код из модуля в store/index.js,
      //   return this.$store.state.history;
    },
  },

  methods: {
    name() {},
  },
};
</script>

<style lang="scss" scoped></style>
