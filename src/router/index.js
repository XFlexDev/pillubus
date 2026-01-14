import { createRouter, createWebHistory } from "vue-router";
import TicketsBuy from "../views/TicketsBuy.vue";
import SingleTicket from "../views/SingleTicket.vue";
import PaymentProcessing from "../views/PaymentProcessing.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TicketsBuy },
    { path: "/single", component: SingleTicket },
    { path: "/processing", component: PaymentProcessing },
  ],
});
