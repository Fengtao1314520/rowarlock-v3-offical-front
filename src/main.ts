// Components
import App from "./App.vue";
// Composable
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import router from "@/router";

const app = createApp(App);

registerPlugins(app);
// Use calendar defaults (optional)
app.use(router);
app.mount("#app");
