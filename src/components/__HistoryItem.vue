<template>
  <div class="history__item">
    <div class="asd">Hi i'm HistoryItem comp!</div>

    <div
      class="history__item-time"
      v-bind:mydata="humanDateTEMP(item.lastVisitTime)"
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
    <div class="history__item-button" @click="deleteItem(item.url)">
      <v-icon dense __color="grey lighten-1"> close </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryItem",

  props: {
    item: {
      type: Number,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
