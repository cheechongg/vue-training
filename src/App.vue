<template>
  <router-view></router-view>
</template>

<script>
import forumData from "@/data.json";

export default {
  name: 'App',
  provide() {
    return {
      threads: this.threads,
      users: this.users,
      posts: this.posts,
      addNewPost: this.addNewPost
    }
  },
  data() {
    return {
      threads: forumData.threads,
      users: forumData.users,
      posts: forumData.posts
    }
  },
  methods: {
    addNewPost(newPost) {
      let threadIndex = this.getThreadIndex(newPost.threadId);
      this.threads[threadIndex].posts.push(newPost.postId);
      this.posts.push(newPost);

      console.log(this.posts);
    },
    getThreadIndex(threadId) {
      return this.threads.findIndex((v) => v.id === threadId);
    }
  },
  
}
</script>

<style>
.container {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}
</style>
