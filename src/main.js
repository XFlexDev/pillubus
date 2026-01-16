import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import { md3 } from "vuetify/blueprints";

const vuetify = createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#007AC9",
          success: "#3B7F1E",
        },
      },
      dark: {
        colors: {
          primary: "#007AC9",
          success: "#3B7F1E",
        },
      },
    },
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
