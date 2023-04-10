<template>
  <!-- <div>
    My comp is here!!!

    <br />
    TODO: если весь шаблон сразу скопировать то не будет работать), нужно
    переносить по частям - или вместе с кодом функций
  </div> -->

  <div class="history__item">
    <div
      class="history__item-time"
      v-bind:lastVisitTime="humanDateTEMP(item.lastVisitTime)"
    >
      {{ getHistoryItemTimeFormatted(item.lastVisitTime) }}
    </div>
    <div class="history__item-favicon">
      <img __src="" alt="" v-bind:src="generateFaviconUrl(item.url)" />
    </div>
    <div class="history__item-title">
      {{ item.title }}
    </div>
    <div class="history__item-link">
      <a v-bind:href="item.url" class="asd">
        <v-icon dense __color="grey lighten-1"> link </v-icon>
        Link
      </a>
    </div>
    <div class="history__item-button" @click="onDeleteItem(item.url)">
      <v-icon dense __color="grey lighten-1"> close </v-icon>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "HistoryItem",

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
  },
};
</script>

<style lang="scss" scoped></style>
