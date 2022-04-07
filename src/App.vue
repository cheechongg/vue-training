<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      // threads: this.threads,
      // users: this.users,
      // posts: this.posts,
      // forums: this.forums,
      // categories: this.categories,
      addNewPost: this.addNewPost,
    };
  },
  data() {
    return {
      // threads: forumData.threads,
      // users: forumData.users,
      // posts: forumData.posts,
      // forums: forumData.forums,
      // categories: forumData.categories,
    };
  },
  methods: {
    addNewPost(newPost) {
      let threadIndex = this.getThreadIndex(newPost.threadId);
      this.threads[threadIndex].posts.push(newPost.postId);
      this.posts.push(newPost);
    },
    getThreadIndex(threadId) {
      return this.threads.findIndex((v) => v.id === threadId);
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}

.custom-list {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);

  &-title {
    background-color: #34495e;
    color: #fff;
    padding: 0.5rem 0.8rem;
    border-bottom-left-radius: 14px;

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &-item {
    font-size: 0.75rem;
    display: flex;
    padding: 0.5rem 0.8rem;

    &.even {
      background: rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 14px;
    }

    .topic,
    .user {
      color: #42b883;
    }

    &-topic {
      flex: 4;
      align-items: center;

      .topic {
        margin-bottom: 0.25rem;
        font-size: 0.85rem;

        a {
          text-decoration: none;
          color: inherit;
          transition: all 100ms ease-in-out;

          &:hover {
            color: #34495e;
          }
        }
      }

      .sub-topic {
        font-size: 0.65rem;
      }
    }

    &-replies {
      flex: 1;
      align-self: center;
    }

    &-user {
      flex: 1;
      display: flex;
      align-items: center;

      .user-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: grey;
        margin-right: 0.35rem;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .user-info {
        display: flex;
        flex-direction: column;
      }
    }

    &-count {
      flex: 1;
      align-self: center;
    }
  }
}
</style>
