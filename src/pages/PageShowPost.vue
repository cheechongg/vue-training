<template>
  <div class="container">
    <h2>{{ thread.title }}</h2>
    <PostCard
      v-for="post in threadPost"
      :postDetails="{
        name: post.user,
        avatar: post.avatar,
        postCount: 107,
        text: post.text,
        publishedAt: post.publishedAt,
      }"
      :key="post.id"
    />
    <form @submit.prevent="submitNewPost()">
      <textarea class="post-content" v-model="newPostContent"></textarea>
      <button class="post-button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import PostCard from "@/components/PageThreadShow/PostCard.vue";

export default {
  components: {
    PostCard,
  },
  props: {
    threadId: Number,
  },
  data() {
    return {
      newPostContent: "",
    };
  },
  computed: {
    ...mapGetters({
      auth: "auth/getCurrentUser",
    }),
    thread() {
      return this.$store.getters["general/getThread"].find(
        (v) => v.id === this.threadId
      );
    },
    threadPost() {
      return this.$store.getters["general/getPost"]
        .filter((v) => v.threadId === this.threadId)
        .map((v) => {
          let user = this.$store.getters["general/getUser"].find(
            (usr) => usr.id === v.userId
          );

          return {
            ...v,
            user: user?.name || "",
            avatar: user?.avatar || "",
          };
        });
    },
  },
  methods: {
    submitNewPost() {
      let userId = "ALXhxjwgY9PinwNGHpfai6OWyDu2";
      let currentTimestamp = Math.floor(Date.now() / 1000);
      let newPost = {
        userId: this.auth.id,
        edited: {
          at: currentTimestamp,
          by: userId,
          moderated: false,
        },
        text: this.newPostContent,
        threadId: this.threadId,
        publishedAt: currentTimestamp,
        postId: `gggg_${currentTimestamp}`,
      };

      this.$store.dispatch({
        type: "general/addNewPostAction",
        newPost,
      });

      this.newPostContent = "";
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
}

.post-content {
  width: 100%;
  height: 250px;
  padding: 0.5rem;
  box-sizing: border-box;
}

.post-button {
  background: #34495e;
  color: #fff;
  font-size: 1rem;
  padding: 0.8rem 1.3rem;
  border: none;
  border-radius: 0.3rem;
  float: right;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  cursor: pointer;
}
</style>