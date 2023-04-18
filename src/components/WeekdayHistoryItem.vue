<template>
  <div class="weekdayhistory__item">
    <div class="weekdayhistory__item-top">
      <div class="weekdayhistory__item-favicon">
        <img __src="" alt="" v-bind:src="generateFaviconUrl(item.url)" />
      </div>
      <div class="weekdayhistory__item-title">
        <a :href="item.url"> {{ item.title }} </a>
      </div>
    </div>
    <div class="weekdayhistory__item-bottom">
      <div class="weekdayhistory__item-time">
        <!-- <div
              class="history__item-time"
              v-bind:lastVisitTime="humanDateTEMP(item.lastVisitTime)"
            > -->
        <v-icon dense __color="grey lighten-1"> history </v-icon>
        <span> Last visit:</span>
        {{ getHistoryItemTimeFormatted(item.lastVisitTime) }}
      </div>

      <div class="weekdayhistory__item-link">
        <!-- <a href="#" class="asd"> -->
        <a v-bind:href="item.url" class="asd">
          <v-icon dense __color="grey lighten-1"> link </v-icon>
          Link
        </a>
      </div>

      <!-- <div class="weekdayhistory__item-button"> -->
      <div class="weekdayhistory__item-button">
        <span @click="onDeleteItem(item.url)">
          <v-icon dense __color="grey lighten-1"> close </v-icon> Delete item
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "WeekdayHistoryItem",

  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  methods: {
    getHistoryItemTimeFormatted(datetime) {
      return moment(datetime).format("H:mm");
    },

    generateFaviconUrl(itemUrlString) {
      let urlObj = new URL(itemUrlString);
      let faviconUrlString = urlObj.origin + "/favicon.ico";

      return faviconUrlString; //itemUrlString;
    },

    humanDateTEMP(datetime) {
      return moment(datetime).format();
    },

    onDeleteItem(itemUrl) {
      console.log("Delete item in component: " + itemUrl);

      this.$store.dispatch("deleteItem", itemUrl);
    },

    // for Week custom
  },
};
</script>

<style lang="scss" scoped></style>
