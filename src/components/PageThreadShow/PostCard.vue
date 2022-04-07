<template>
  <base-card>
    <template #user-title>{{ postDetails.name }}</template>
    <template #user-image>
      <img :src="postDetails.avatar" alt="user-avatar"
    /></template>
    <template #user-posts>{{ postDetails.postCount }} posts</template>
    <template #content>{{ postDetails.text }}</template>
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
</style>