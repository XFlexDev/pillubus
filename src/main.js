import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ripple from "./directives/ripple";
import "./main.css";

const app = createApp(App);
app.directive("ripple", ripple);
app.use(router);
app.mount("#app");
