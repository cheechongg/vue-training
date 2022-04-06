<template>
  <div class="category-list" v-for="category in list" :key="category.id">
    <div class="category-title">{{ category.name }}</div>
    <ForumList :categoryId="category.id" />
  </div>
</template>

<script>
import ForumList from "./ForumList.vue";

export default {
  name: "CategoriesList",
  components: { ForumList },
  inject: ["categories", "forums"],
  computed: {
    list() {
      let categories = this.categories.map((v) => {
        let forumsList = this.getForumByCategoryId(v.id);

        return {
          ...v,
          forums: forumsList,
        };
      });

      return categories;
    },
  },
  methods: {
    getForumByCategoryId(categoryId) {
      return this.forums.filter((v) => v.categoryId === categoryId);
    },
  },
};
</script>

<style lang="scss" scoped>
.category-title {
  background-color: #34495e;
  color: #fff;
  padding: 0.5rem 0.8rem;
  border-bottom-left-radius: 14px;
}

.category-list {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}
</style>