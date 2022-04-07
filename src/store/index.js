import { createStore } from 'vuex';

import general from "./module/general";

import sourceData from "@/data.json";

const store = createStore({
    modules: {
        general
    }
})

export default store;
