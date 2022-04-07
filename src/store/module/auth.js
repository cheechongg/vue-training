const state = () => ({
  isLogin: true,
  userId: "VXjpr2WHa8Ux4Bnggym8QFLdv5C3",
});

const getters = {
  isLogin(state) {
    return state.isLogin;
  },
  getCurrentUser(state, __, rootState, rootGetters) {
    if (!state.isLogin) return {};

    let current = rootState.general.users.find((x) => x.id === state.userId);

    return {
      ...current,
      get posts() {
        return rootGetters["general/getPost"].filter(
          (v) => v.userId === current.id
        );
      },
      get threads() {
        return rootGetters["general/getThread"].filter(
          (v) => v.userId === current.id
        );
      },
      get postsCount() {
        return this.posts.length;
      },
      get threadsCount() {
        return this.threads.length;
      },
    };
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
