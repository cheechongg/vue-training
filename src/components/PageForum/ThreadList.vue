<template>
  <div class="thread-list">
    <div class="thread-title">Threads</div>
    <div class="thread-body">
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
  inject: ["threads", "users"],
  components: {
    ThreadListItem,
  },
  props: {
    threadList: Array,
  },
  methods: {
    getUser(userId) {
      let result = this.users.find((v) => v.id === userId);

      return { user: result?.name || "", avatar: result?.avatar || "" };
    },
    getThread() {
      let result = this.threads.map((v) => {
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
.thread-title {
  background-color: #34495e;
  color: #fff;
  padding: 0.5rem 0.8rem;
  border-bottom-left-radius: 14px;
}

.thread-list {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
}
</style>