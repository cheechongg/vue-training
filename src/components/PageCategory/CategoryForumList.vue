<template>
  <div class="custom-list">
    <div class="custom-list-title">Threads</div>
    <div class="custom-list-body">
      
    </div>
  </div>
</template>

<script>

export default {
  name: "CategoryForumList",
  inject: ["threads", "users"],
  components: {
  },
  props: {
    categoryId: String,
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>