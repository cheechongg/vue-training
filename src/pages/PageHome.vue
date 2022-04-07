<template>
  <div class="home">
    <h2>Welcome to the Forum</h2>
    <CategoryList />
    <ForumList />
  </div>
</template>

<script>
import ForumList from "@/components/PageHome/ForumList.vue";
import CategoryList from "@/components/PageHome/CategoriesList.vue";

export default {
  name: "Forum",
  components: {
    ForumList,
    CategoryList,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.home {
  width: 94%;
  margin: 0 auto;
}

h2 {
  text-align: center;
}
</style>

