
import { createRouter, createWebHistory } from "vue-router";
import TicketsBuy from "../pages/TicketsBuy.vue";
import TicketsYour from "../pages/TicketsYour.vue";
import SingleTicket from "../pages/SingleTicket.vue";
import Routes from "../pages/Routes.vue";
import More from "../pages/More.vue";
import Settings from "../pages/Settings.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/tickets/buy" },
    { path: "/tickets/buy", component: TicketsBuy },
    { path: "/tickets/your", component: TicketsYour },
    { path: "/tickets/single", component: SingleTicket },
    { path: "/routes", component: Routes },
    { path: "/more", component: More },
    { path: "/settings", component: Settings }
  ]
});
