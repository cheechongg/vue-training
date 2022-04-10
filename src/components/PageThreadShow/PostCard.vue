<template>
  <base-card>
    <template #user-title>{{ postDetails.name }}</template>
    <template #user-image>
      <img :src="postDetails.avatar" alt="user-avatar"
    /></template>
    <template #user-posts>{{ postDetails.postCount }} posts</template>
    <template #content>
      <div class="content">
        <p>{{ postDetails.text }}</p>
        <fa class="edit-post" icon="pencil-alt" />
      </div>
    </template>
    <template #post-id>
      <base-date :timestamp="postDetails.publishedAt"></base-date>
    </template>
  </base-card>
</template>

<script>
export default {
  name: "ForumCard",
  props: {
    postDetails: Object,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}

.content {
  display: flex;
  justify-content: space-between;
}

.edit-post {
  margin-top: 0.3rem;
  cursor: pointer;

  &:hover {
    color: #263959;
  }
}
</style>