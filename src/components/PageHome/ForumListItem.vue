<template>
  <div class="forum-item" :class="isEven">
    <div class="forum-topic">
      <div class="topic">
        <router-link :to="{ name: 'forum', params: { forumId } }">{{
          title
        }}</router-link>
      </div>
      <div class="sub-topic">
        {{ description }}
      </div>
    </div>
    <div class="forum-thread-count">{{ getThreadCountLabel(threadCount) }}</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default {
  name: "ForumListItem",
  props: {
    title: String,
    threadCount: Number,
    forumId: String,
    description: String,
    index: Number,
  },
  computed: {
    isEven() {
      return {
        even: this.index % 2 === 0,
      };
    },
  },
  methods: {
    getThreadCountLabel(amount) {
      return amount ? `${amount} thread${amount > 1 ? "s" : ""}` : "No thread";
    },
  },
};
</script>

<style lang="scss" scoped>
.forum-item {
  font-size: 1rem;
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

  .forum-topic {
    flex: 4;
    align-items: center;

    .topic {
      margin-bottom: 0.25rem;
      font-size: 1.25rem;

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
      font-size: 0.85rem;
    }
  }

  .forum-thread-count {
    flex: 1;
    align-self: center;
  }
}
</style> 