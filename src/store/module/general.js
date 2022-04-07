import sourceData from "@/data.json";

const state = () => ({
  ...sourceData,
});

const getters = {
  getTest() {
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
  addNewPostAction({ state, commit }, payload) {
    let threadIndex = state.general.thread.findIndex(
      (v) => v.id === payload.threadId
    );
    let newThread = state.thread.map((x, i) => {
      return {
        ...x,
        posts: i === threadIndex ? [...x.posts, payload.postId] : x.posts,
      };
    });

    commit("general/addNewPost", {
      threads: newThread,
      newPost: payload,
    });
    // commit
  },
};

const mutations = {
  addNewPost(state, payload) {
    state.posts.push(payload.newPost);
    state.threads = payload.threads;
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
