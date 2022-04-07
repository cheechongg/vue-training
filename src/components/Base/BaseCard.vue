<template>
  <div class="custom-card">
    <div class="user-container">
      <div class="user-title">
        <slot name="user-title"></slot>
      </div>
      <div class="user-image">
        <slot name="user-image"></slot>
      </div>
      <div class="user-posts">
        <slot name="user-posts"></slot>
      </div>
    </div>
    <div class="content-container">
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="post-id">
        <slot name="post-id"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.custom-card {
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 1rem;
  border-radius: 0.15rem;
  min-height: 130px;
  font-size: 0.85rem;
  margin-bottom: 1.8rem;
  width: 100%;
  background: #fff;

  .user-container {
    display: flex;
    flex-direction: column;
    margin-right: 1.5rem;
    align-items: center;
    width: 100px;

    .user-image,
    .user-title,
    .user-posts {
      margin-bottom: 1rem;
      text-align: center;
    }

    .user-image {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: grey;
      overflow: hidden;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    }
  }

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    .content {
      text-align: justify;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }

    .post-id {
      align-self: flex-end;
    }
  }
}
</style>