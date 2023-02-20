<template>
  <div class="day">
    <div class="day__title">title</div>
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

      <div v-for="item in history" :key="item.id">
      <!-- <div v-for="item in myHistory" :key="item.id"> -->
        <div class="history__item-time">
          {{ item.lastVisitTime }}
        </div>
        <div class="history__item-favicon">
          {{ item.lastVisitTime }}
        </div>
        <div class="history__item-title">
          {{ item.title }}
        </div>
        <div class="history__item-link">
          <a v-bind:href="item.title"  class="asd">Link</a>
        </div>
        <div class="history__item-button">X</div>
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
export default {
  name: "Day",

//   data() {
//     return {
//         myHistory: [1,2,3]
//     };
//   },



  created() {
    this.$store.dispatch("fetchHistoryByLastMonth");
    // this.$store.dispatch("fetchCoursesTypes");
    console.log("Create HOOK");
  },

  computed: {
    history() {
      //   return this.$store.state.courses;
      return this.$store.state.history.history; // -
      // перенесли код из модуля в store/index.js, 
      //   return this.$store.state.history; 
    },

  },  


  
};

</script>

<style lang="scss" scoped></style>
