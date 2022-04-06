import { createApp } from 'vue';

import App from '@/App.vue'
import router from "@/router/router";

import BaseCard from "@/components/Base/BaseCard";
import BaseDate from "@/components/Base/BaseDate"

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-date', BaseDate);

app.use(router);
app.mount('#app')
