<template>
  <div class="col-full push-top">
    <h1>
      Create new thread in <i>{{ forum.name }}</i>
    </h1>

    <thread-editor @save="save" @navigate-forum="navigateBackToForum"></thread-editor>
  </div>
</template>
<script>

import ThreadEditor from "@/components/PageThreadCreate/ThreadEditor.vue";

export default {
  components: {
    ThreadEditor
  },
  props: {
    forumId: { type: String, required: true },
  },
  data() {
    return {
      title: "",
      text: "",
    };
  },
  computed: {
    forum() {
      let forum = this.$store.getters['general/getForum'].find((v) => v.id === this.forumId);

      return forum;
    }
  },
  methods: {
    save({title, text}) {
      const threadId = "tttt" + Math.floor(Date.now() / 1000);
      const currentUser =  this.$store.getters['auth/getCurrentUser'];

      this.$store.dispatch("general/createNewThread", {
        thread: {
          forumId: this.forumId,
          lastPostAt: Math.floor(Date.now() / 1000),
          lastPostId: threadId,
          title: title,
          text: text,
          id: "tttt" + Math.floor(Date.now() / 1000),
          posts: [],
          publishedAt: Math.floor(Date.now() / 1000),
          slug: title.replace(' ', '-'),
          userId: currentUser.id
        },
        forumId: this.forumId,
      });
      this.navigateBackToForum();
    },
    navigateBackToForum() {
      this.$router.push({
        name: 'forum',
        props: {
          forumId: this.forumId
        }
      })
    }
  },
};
</script>