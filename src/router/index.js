import { createRouter, createWebHistory } from "vue-router";
import TicketsBuy from "../views/TicketsBuy.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TicketsBuy,
    },
  ],
});

export default router;
