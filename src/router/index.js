import { createRouter, createWebHistory } from "vue-router";
import TicketsBuy from "../views/TicketsBuy.vue";
import SingleTicket from "../views/SingleTicket.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TicketsBuy },
    { path: "/single", component: SingleTicket },
  ],
});
