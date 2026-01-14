import { createRouter, createWebHistory } from "vue-router";

import TicketsBuy from "../views/TicketsBuy.vue";
import SingleTicket from "../views/SingleTicket.vue";
import YourTickets from "../views/YourTickets.vue";
import Routes from "../views/Routes.vue";
import More from "../views/More.vue";
import Settings from "../views/Settings.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/tickets" },

    { path: "/tickets", component: TicketsBuy },
    { path: "/tickets/single", component: SingleTicket },
    { path: "/tickets/yours", component: YourTickets },

    { path: "/routes", component: Routes },
    { path: "/more", component: More },
    { path: "/settings", component: Settings },
  ],
});

export default router;
