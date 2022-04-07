<template>
  <div class="w-100">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <user-profile-card
          v-if="isEdit"
          :user="user"
          @change-is-edit="changeIsEdit"
        ></user-profile-card>
        <profile-card v-else :user="user" />

        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>

        <div class="text-center">
          <hr />
          <a
            href="#"
            class="btn-green btn-small"
            @click.prevent="changeIsEdit()"
            >Edit Profile</a
          >
        </div>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
          <a href="#">See only started threads?</a>
        </div>
        <hr />
        <PostList
          v-for="post in user.posts"
          :key="post.id"
          :postDetails="{ ...post, avatar: user.avatar }"
        />
      </div>
    </div>
  </div>
</template>
<script>
import PostList from "@/components/PageThreadShow/PostCard";
import ProfileCard from "@/components/PageProfile/ProfileCard";
import UserProfileCard from "@/components/PageProfile/UserProfileCard.vue";

import { mapGetters } from "vuex";

export default {
  components: { PostList, ProfileCard, UserProfileCard },
  computed: {
    ...mapGetters({
      user: "auth/getCurrentUser",
    }),
  },
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    changeIsEdit(bool = null) {
      this.isEdit = bool || !this.isEdit;
    },
  },
};
</script>