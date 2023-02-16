import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import "./css/styles.css";
import "./css/animations.css";

createApp(App).use(createPinia()).mount("#app");
