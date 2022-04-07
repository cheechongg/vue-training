<template>
  <div class="custom-list-item" :class="isEven">
    <div class="custom-list-item-topic">
      <div class="topic">
        <router-link :to="{ name: 'forum', params: { forumId } }">{{
          title
        }}</router-link>
      </div>
      <div class="sub-topic">
        {{ description }}
      </div>
    </div>
    <div class="custom-list-item-count">{{ getThreadCountLabel(threadCount) }}</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default {
  name: "ForumListItem",
  props: {
    title: String,
    threadCount: Number,
    forumId: String,
    description: String,
    index: Number,
  },
  computed: {
    isEven() {
      return {
        even: this.index % 2 === 0,
      };
    },
  },
  methods: {
    getThreadCountLabel(amount) {
      return amount ? `${amount} thread${amount > 1 ? "s" : ""}` : "No thread";
    },
  },
};
</script>

<style lang="scss" scoped>

</style> 