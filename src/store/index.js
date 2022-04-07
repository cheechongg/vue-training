import { createStore } from "vuex";

import general from "./module/general";
import auth from "./module/auth";

const store = createStore({
  modules: {
    general,
    auth,
  },
});

export default store;
