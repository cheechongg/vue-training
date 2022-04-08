import sourceData from "@/data.json";

const state = () => ({
  ...sourceData,
});

const getters = {
  getTest() {
    console.log('hihihihiih')
    return state.categories;
  },
  getCategory(state) {
    return state.categories;
  },
  getForum(state) {
    return state.forums;
  },
  getThread(state) {
    return state.threads;
  },
  getUser(state) {
    return state.users;
  },
  getPost(state) {
    return state.posts;
  },
};

const actions = {
  addNewPostAction({ commit }, { newPost }) {
    commit("addNewPost", newPost);
    commit("addNewPostToThread", {
      threadId: newPost.threadId,
      postId: newPost.postId,
    });
    // commit
  },
  updateUser(context, payload) {
    context.commit("updateUser", {
      user: payload,
      userId: payload.id,
    });
  },
  createNewThread(context, payload) {
    context.commit("addNewThread", payload);
    context.commit("addNewThreadToForum", {});
  },
};

const mutations = {
  addNewPost(state, payload) {
    state.posts.push(payload);
  },
  addNewPostToThread(state, { postId, threadId }) {
    const thread = state.threads.find((v) => v.id === threadId);
    thread.posts.push(postId);
  },
  updateUser(state, { user, userId }) {
    let selectedUserIndex = state.users.findIndex((v) => v.id === userId);
    console.log("hihhi");
    state.users[selectedUserIndex] = user;
  },
};

const general = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default general;
