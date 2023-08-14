// Components
import App from "./App.vue";
// Composable
import { createApp } from "vue";
import { createVuetify } from "vuetify";

// Plugins
import { registerPlugins } from "@/plugins";
import router from "@/router";

// pinia
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify();

registerPlugins(app);
app.use(pinia);
app.use(vuetify);
// Use calendar defaults (optional)
app.use(router);
app.mount("#app");
