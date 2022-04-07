import { createStore } from "vuex";

import general from "./module/general";

const store = createStore({
  modules: {
    general,
  },
});

export default store;
