import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/PageHome";
import Post from "@/pages/PageShowPost";
import Forum from "@/pages/PageForum";
import NotFound from "@/pages/PageNotFound";

import threadData from "@/data.json";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/forum/:forumId",
    name: "forum",
    component: Forum,
    props: true,
  },
  {
    path: "/thread/:threadId",
    name: "thread",
    component: Post,
    props: true,
    beforeEnter(to, from, next) {
      let threadId = to.params.threadId;
      let result = threadData.threads.find((v) => v.id === threadId);

      if (result && Object.values(result).length !== 0) {
        next();
      } else {
        next({
          name: "NotFound",
          // preserve current path and remove the first char to avoid the target URL starting with `//`
          params: { pathMatch: to.path.substring(1).split("/") },
          // preserve existing query and hash if any
          query: to.query,
          hash: to.hash,
        });
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
