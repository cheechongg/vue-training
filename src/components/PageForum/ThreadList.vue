<template>
  <div class="custom-list">
    <div class="custom-list-title">Threads</div>
    <div class="custom-list-body">
      <ThreadListItem
        v-for="(thread, index) in threadList"
        :key="thread.id"
        :avatar="thread.avatar"
        :index="index + 1"
        :publishedAt="thread.publishedAt"
        :repliesCount="thread.postCount"
        :threadId="thread.id"
        :title="thread.title"
        :user="thread.user"
      />
    </div>
  </div>
</template>

<script>
import ThreadListItem from "./ThreadListItem.vue";

export default {
  name: "ThreadList",
  components: {
    ThreadListItem,
  },
  props: {
    threadList: Array,
  },
  methods: {
    getUser(userId) {
      let result = this.$store.getters["general/getUser"].find(
        (v) => v.id === userId
      );

      return { user: result?.name || "", avatar: result?.avatar || "" };
    },
    getThread() {
      let result = this.$store.getters["general/getThread"].map((v) => {
        let user = this.getUser(v.userId);

        return {
          ...v,
          ...user,
          postCount: v.posts.length,
        };
      });

      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>