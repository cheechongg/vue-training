import axios from "axios";

import { findById } from "@/helpers/common";

const state = () => ({
  users: [],
  categories: [],
  stats: [],
  threads: [],
  posts: [],
  forums: [],
});

const appendChildToParentMutation =
  ({ parent, child }) =>
  (state, { parentId, childId }) => {
    const resources = findById(state[parent], parentId);

    if (resources[child]) {
      resources[child].push(childId);
    } else {
      resources[child] = [childId];
    }
  };

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
  thread: (state) => (id) => {
    const thread = findById(state.threads, id);

    return {
      ...thread,
      get author() {
        return findById(state.users, thread.userId);
      },
      get repliesCount() {
        return thread.posts.length;
      },
      get contributorsCount() {
        return thread.contributors.length;
      },
    };
  },
};

const actions = {
  addNewPostAction({ commit }, { newPost }) {
    commit("addNewPost", newPost);
    commit("addNewPostToThread", {
      parentId: newPost.threadId,
      childId: newPost.postId,
    });
    // commit
  },
  updateUser(context, payload) {
    context.commit("updateUser", {
      user: payload,
      userId: payload.id,
    });
  },
  createNewThread(context, { thread, forumId }) {
    const postId = "ppppp" + thread.publishedAt;

    context.commit("addNewThread", thread);
    context.commit("addNewThreadToForum", {
      parentId: forumId,
      childId: thread.id,
    });
    context.commit("addNewPost", {
      publishedAt: thread.publishedAt,
      text: thread.text,
      threadId: thread.id,
      userId: thread.userId,
      id: postId,
    });
  },
  editThread(context, { post, thread, threadId, postId }) {
    context.commit("editPost", {
      post,
      postId,
    });
    context.commit("editThread", {
      threadId,
      thread,
    });
  },
  async getResources(context) {
    let users = await axios.get(
      "https://vue-training-2-53d6d-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
    );

    let categories = await axios.get(
      "https://vue-training-2-53d6d-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json"
    );

    let forums = await axios.get(
      "https://vue-training-2-53d6d-default-rtdb.asia-southeast1.firebasedatabase.app/forums.json"
    );

    let posts = await axios.get(
      "https://vue-training-2-53d6d-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
    );

    let stats = await axios.get(
      "https://vue-training-2-53d6d-default-rtdb.asia-southeast1.firebasedatabase.app/stats.json"
    );

    let threads = await axios.get(
      "https://vue-training-2-53d6d-default-rtdb.asia-southeast1.firebasedatabase.app/threads.json"
    );

    context.commit("getResources", {
      categories: categories.data,
      forums: forums.data,
      posts: posts.data,
      stats: stats.data,
      threads: threads.data,
      users: users.data,
    });
  },
};

const mutations = {
  addNewPost(state, payload) {
    state.posts.push(payload);
  },
  addNewThread(state, newThread) {
    state.threads.push(newThread);
  },
  addNewPostToThread: appendChildToParentMutation({
    parent: "threads",
    child: "posts",
  }),
  addNewThreadToForum: appendChildToParentMutation({
    parent: "forums",
    child: "threads",
  }),
  addThreadIdToUser: appendChildToParentMutation({
    parent: "users",
    child: "threads",
  }),
  updateUser(state, { user, userId }) {
    let selectedUserIndex = state.users.findIndex((v) => v.id === userId);
    state.users[selectedUserIndex] = user;
  },
  editPost(state, { postId, post }) {
    let index = state.posts.findIndex((v) => v.id === postId);

    state.posts[index] = { ...state.posts[index], ...post };
  },
  editThread(state, { threadId, thread }) {
    let index = state.threads.findIndex((v) => v.id === threadId);

    state.threads[index] = { ...state.threads[index], ...thread };
  },
  getResources(state, { users, forums, threads, categories, posts, stats }) {
    state.threads = threads;
    state.users = users;
    state.forums = forums;
    state.categories = categories;
    state.posts = posts;
    state.stats = stats;
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
