import { ref } from "vue";

const tickets = ref(JSON.parse(localStorage.getItem("pb_tickets") || "[]"));

export function useTickets() {
  const save = () =>
    localStorage.setItem("pb_tickets", JSON.stringify(tickets.value));

  const addTicket = (t) => {
    tickets.value.unshift(t);
    save();
  };

  const removeTicket = (id) => {
    tickets.value = tickets.value.filter((t) => t.id !== id);
    save();
  };

  return { tickets, addTicket, removeTicket };
}
