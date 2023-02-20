<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer" app>
    </v-navigation-drawer> -->

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container grid-list-xs>
        <day class="asd"></day>
      </v-container>
      <!--  -->
      <!-- <hello-world /> -->
      i am Vue!
    </v-main>
  </v-app>

  <!-- <div class="asd">
    <hello-world />
    i am Vue!
  </div> -->
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import Day from "@/components/Day.vue";

export default {
  name: "App",
  components: { Day, 
//   HelloWorld
   },

  data: () => ({ drawer: null }),
};
</script>

<style lang="scss">
.container {
  max-width: 1600px !important;
}
</style>
