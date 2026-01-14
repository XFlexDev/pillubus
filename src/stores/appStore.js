
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    name: localStorage.getItem("name") || "Twin",
    tickets: []
  }),
  actions: {
    setName(n) {
      this.name = n;
      localStorage.setItem("name", n);
    },
    addTicket(ticket) {
      this.tickets.unshift(ticket);
    }
  }
});
