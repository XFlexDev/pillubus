import { createRouter, createWebHistory } from "vue-router";

import AppShell from "../layouts/AppShell.vue";
import HomeView from "../views/HomeView.vue";
import TicketsView from "../views/TicketsView.vue";
import SettingsView from "../views/SettingsView.vue";

import SingleTicketView from "../views/SingleTicketView.vue";
import PaymentProcessingView from "../views/PaymentProcessingView.vue";
import TicketView from "../views/TicketView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: AppShell,
      children: [
        { path: "", name: "home", component: HomeView },
        { path: "tickets", name: "tickets", component: TicketsView },
        { path: "settings", name: "settings", component: SettingsView },
      ],
    },

    { path: "/buy", component: SingleTicketView },
    { path: "/processing", component: PaymentProcessingView },
    { path: "/ticket/:id", component: TicketView },
  ],
});
