<template>
  <div class="col-full push-top">
    <h1>
      Edit thread <i>{{ thread.title }}</i>
    </h1>
    {{ text }}
    <thread-editor
      :text="text"
      :title="thread.title"
      @save="editThread"
      @navigate-forum="navigateBackToForum"
    ></thread-editor>
  </div>
</template>

<script>
import ThreadEditor from "@/components/PageThreadCreate/ThreadEditor.vue";

export default {
  components: {
    ThreadEditor,
  },
  props: {
    threadId: {
      type: String,
      required: true,
    },
  },
  computed: {
    thread() {
      let selectedThread = this.$store.getters["general/getThread"].find(
        (v) => v.id === this.threadId
      );
      console.log(selectedThread);
      return selectedThread;
    },
    text() {
      let postId = this.thread.posts[0];
      let selectedPost = this.$store.getters["general/getPost"].find((v) => {
        return v.id === postId;
      });

      return selectedPost?.text || "";
    },
  },
  methods: {
    editThread({ text, title }) {
      let selectedThread = this.thread;
      let postId = selectedThread.posts[0];
      let userId = this.$store.getters["auth/getCurrentUser"]?.id || "";

      let thread = {
        title,
      };
      let post = {
        text,
        edited: {
          at: Math.floor(Date.now() / 1000),
          by: userId,
          moderated: false,
        },
      };

      this.$store.dispatch("general/editThread", {
        post,
        thread,
        postId,
        threadId: this.threadId,
      });

      this.navigateBackToForum();
    },

    navigateBackToForum() {
      this.$router.push({
        name: "thread",
        props: {
          threadId: this.thread.id,
        },
      });
    },
  },
};
</script>