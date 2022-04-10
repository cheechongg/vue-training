import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "@/App.vue";
import router from "@/router/router";
import store from "@/store";
import fontAwesomePlugin from "@/plugins/fontawesome";

import BaseCard from "@/components/Base/BaseCard";
import BaseDate from "@/components/Base/BaseDate";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.use(fontAwesomePlugin);

app.component("base-card", BaseCard);
app.component("base-date", BaseDate);

app.mount("#app");
