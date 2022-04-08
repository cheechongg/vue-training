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
  createNewThread(context, { thread, forumId}) {
    const postId = 'ppppp' + thread.publishedAt;

    context.commit("addNewThread", thread);
    context.commit("addNewThreadToForum", {
      forumId, threadId: thread.id
    });
    context.commit("addNewPost", {
      publishedAt: thread.publishedAt,
      text: thread.text,
      threadId: thread.id,
      userId: thread.userId,
      id: postId
    })
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
    state.users[selectedUserIndex] = user;
  },
  addNewThreadToForum(state, { forumId, threadId}) {
    const forumIndex = state.forums.findIndex((v) => v.id === forumId);
    state.forums[forumIndex].threads.push(threadId);
  },
  addNewThread(state, newThread) {
    state.threads.push(newThread);
  },
  addThreadIdToUser(state, { threadId, userId }){
    const selectedUserIndex = state.users.findIndex((v) => v.id === userId);

    if(state.users[selectedUserIndex].threads) {
      state.users[selectedUserIndex].thread.push(threadId)
    } else {
      state.users[selectedUserIndex].thread = threadId;
    }
    
  }
};

const general = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default general;
 