<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer" app>
    </v-navigation-drawer> -->

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>FireFox History Manager</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container grid-list-xs>
        <v-row :align="align" no-gutters __style="height: 150px">
          <v-col lg="8">
            <!-- Search placeholder  -->
          </v-col>
          <v-col lg="4">
            <ViewControls class="asd"></ViewControls>
          </v-col>
        </v-row>
      </v-container>
      <v-container grid-list-xs>
        <!-- <Day class="asd"></Day> -->
        <!-- <Feed class="asd"></Feed> -->
        <!-- <Month class="asd"></Month> -->
        <!-- <Week class="asd"></Week> -->

        <!-- -->
        <component v-bind:is="currentModeName"></component>
      </v-container>
      <!--  -->
      <!-- <hello-world /> -->
      <!-- I'm Vue -->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import Day from "@/components/Day.vue";
// import Feed from "@/components/Feed.vue";
import Month from "@/components/Month.vue";
import Week from "@/components/Week.vue";
import ViewControls from "@/components/ViewControls.vue";

export default {
  name: "App",

  components: {
    Day,
    // Feed,
    Month,
    Week,
    ViewControls,
    //   HelloWorld
  },

  data: () => ({ drawer: null }),

  computed: {
    calendarMode() {
      // return this.data
      //   return this.$store.state.history.calendarMode; // calendarMode
      return this.$store.state.history.calendarMode; // calendarMode
    },

    currentModeName() {
      return this.toTitleCase(this.calendarMode);
    },
  },

  methods: {
    toTitleCase(str) {
      return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/style"; // main styles
</style>
