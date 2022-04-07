<template>
  <div class="w-100">
    <div class="forum-topic">{{ forum.name }}</div>
    <div class="forum-description">
      <div class="description">{{ forum.description }}</div>
      <div class="cta">
        <button type="button" @click="createNewThread()">Start a thread</button>
      </div>
    </div>
    <ThreadList :threadList="threadsListing" />
  </div>
</template>

<script>
import ThreadList from "@/components/PageForum/ThreadList.vue";

export default {
  name: "PageForum",
  components: { ThreadList },
  props: {
    forumId: String,
  },
  data() {
    return {
      threadsList: [],
    };
  },
  computed: {
    postList() {
      let thread = this.getThread(this.forumId);
      let result = this.getPostWithPostArr(thread.posts);

      return result;
    },
    forum() {
      let res = this.getForum(this.forumId);
      return res;
    },
    threadsListing() {
      let thread = this.getThread(this.forumId).map((v) => {
        let usr = this.getUser(v.userId);

        return {
          ...v,
          avatar: usr.avatar,
          user: usr.name,
          postCount: v.posts.length,
        };
      });

      return thread;
    },
  },
  methods: {
    getThread(forumId) {
      let res = this.$store.getters["general/getThread"].filter(
        (v) => v.forumId === forumId
      );

      return res;
    },
    getPostWithPostArr(postArr) {
      let result = this.$store.getters["general/getPost"]
        .filter((v) => postArr.includes(v.id))
        .map((v) => {
          let user = this.$store.getters["general/getUser"].find(
            (usr) => usr.id === v.userId
          );
          let postsCount = this.$store.getters["general/getPost"].filter(
            (pst) => pst.userId === v.userId
          ).length;

          return {
            ...v,
            user,
            postsCount,
          };
        });

      return result;
    },
    getForum(forumId) {
      let res = this.$store.getters["general/getForum"].find(
        (v) => v.id === forumId
      );

      return res;
    },
    getUser(userId) {
      return this.$store.getters["general/getUser"].find(
        (usr) => usr.id === userId
      );
    },
    createNewThread() {
      let forum = this.getForum(this.forumId);

      this.$router.push({
        name: "new-thread",
        params: {
          forum,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.forum-topic {
  font-size: 2rem;
  font-weight: bold;
}

.forum-description {
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cta button {
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 0.3rem;
  background-color: #42b883;
  color: #fff;
  cursor: pointer;
}
</style>