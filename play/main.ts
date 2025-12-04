import { createApp } from "vue";
import App from "./app.vue";
import oulin from "@oulin/components";
const app = createApp(App);
app.use(oulin);
app.mount("#app");
