<template>
  <div class="custom-list" v-for="category in list" :key="category.id">
    <div class="custom-list-title"><router-link :to="{name: 'home'}">{{ category.name }}</router-link></div>
    <ForumList :categoryId="category.id" />
  </div>
</template>

<script>
import ForumList from "./ForumList.vue";

export default {
  name: "CategoriesList",
  components: { ForumList },
  computed: {
    list() {
      console.log(this.$store.getters['general/getUser']());
      let categories = this.$store.state.map((v) => {
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

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.category-list {
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}
</style>