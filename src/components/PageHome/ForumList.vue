<template>
  <div class="custom-list">
    <!-- <div class="forum-title">Forums</div> -->
    <div class="custom-body">
      <ForumListItem
        v-for="(forum, index) in forumList"
        :key="forum.id"
        :index="index + 1"
        :threadCount="forum.threadCount"
        :forumId="forum.id"
        :title="forum.name"
        :description="forum.description"
      />
    </div>
  </div>
</template>

<script>
import ForumListItem from "./ForumListItem.vue";

export default {
  name: "ForumList",
  inject: ["threads", "users", "forums"],
  components: {
    ForumListItem,
  },
  props: {
    categoryId: String,
  },
  data() {
    return {
      threadList: [],
    };
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
  computed: {
    forumList() {
      return this.forums
        .filter((v) => v.categoryId === this.categoryId)
        .map((v) => {
          return {
            ...v,
            threadCount: v.threads ? v.threads.length : 0,
          };
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>