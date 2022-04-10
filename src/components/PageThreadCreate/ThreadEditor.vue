<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="thread_title">Title:</label>
      <input
        v-model="threadTitle"
        type="text"
        id="thread_title"
        class="form-input"
        name="title"
      />
    </div>

    <div class="form-group">
      <label for="thread_content">Content:</label>
      <textarea
        v-model="threadText"
        id="thread_content"
        class="form-input"
        name="content"
        rows="8"
        cols="140"
      ></textarea>
    </div>

    <div class="btn-group">
      <button class="btn btn-ghost" @click="this.$emit('navigate-forum')">
        Cancel
      </button>
      <button class="btn btn-blue" type="submit" name="Publish">
        {{ existing }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
    text: { type: String, default: "" },
  },
  data() {
    return {
      threadTitle: this.title,
      threadText: this.text,
    };
  },
  computed: {
    existing() {
      return this.title === "" ? "Publish" : "Update";
    },
  },
  methods: {
    submitForm() {
      this.$emit("save", {
        title: this.threadTitle,
        text: this.threadText,
      });

      this.threadTitle = "";
      this.threadText = "";
    },
  },
};
</script>
