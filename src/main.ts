// Components
import App from "./App.vue";
// Composable
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import { setupCalendar } from "v-calendar";

const app = createApp(App);

registerPlugins(app);
// Use calendar defaults (optional)
app.use(setupCalendar, {});
app.mount("#app");
