import sourceData from "@/data.json";

const state = () => ({
  ...sourceData,
});

const getters = {
  getTest() {
    return state.categories;
  },
  getCategory:
    (state) =>
    (id = null) => {
      if (id) {
        return state.categories.find((x) => x.id === id);
      } else {
        return state.categories;
      }
    },
  getForum:
    (state) =>
    (id = null) => {
      if (id) {
        return state.forums.find((x) => x.id === id);
      } else {
        return state.forums;
      }
    },
  getThread:
    (state) =>
    (id = null) => {
      if (id) {
        return state.threads.find((x) => x.id === id);
      } else {
        return state.threads;
      }
    },
  getUser:
    (state) =>
    (id = null) => {
      if (id) {
        return state.users.find((x) => x.id === id);
      } else {
        return state.users;
      }
    },
  getPost:
    (state) =>
    (id = null) => {
      if (id) {
        return state.posts.find((x) => x.id === id);
      } else {
        return state.posts;
      }
    },
  getThreadIndex: (state) => (id) => {
    return state.threads.findIndex((x) => x.id === id);
  }
};

const actions = {
  addNewPostAction({state, commit, getters}, payload) {
    let threadIndex = getters.getThreadIndex(payload.threadId);
    let newThread = state.thread.map((x, i) => {
      return {
        ...x,
        posts: i === threadIndex ? [...x.posts, payload.postId] : x.posts
      }
    });


    commit('general/addNewPost', {
      threads: newThread,
      newPost: payload
    })
    // commit
  }
};

const mutations = {
  addNewPost(state, payload) {
    state.posts.push(payload.newPost);
    state.threads = payload.threads;
  }
}

const general = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

export default general;
