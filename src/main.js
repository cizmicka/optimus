import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "primeflex/primeflex.css";

createApp(App)
  .use(PrimeVue)
  .use(store)
  .use(router)
  .mount("#app");
