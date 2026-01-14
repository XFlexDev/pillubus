<template>
  <div class="pay">
    <div class="spinner"></div>
    <h1>Processing payment</h1>
    <p>Please wait…</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTickets } from "../composables/useTickets";

const router = useRouter();
const { addTicket } = useTickets();

function makeId(zone) {
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `PB-${new Date().getFullYear()}-${zone}-${rand}`;
}

onMounted(() => {
  const pending = JSON.parse(sessionStorage.getItem("pb_pending") || "null");

  setTimeout(() => {
    if (pending) {
      const now = Date.now();
      const id = makeId(pending.zone);
      const ticket = {
        id,
        zone: pending.zone,
        duration: pending.duration,
        createdAt: now,
        validUntil: now + pending.duration * 60_000,
      };
      addTicket(ticket);
      sessionStorage.removeItem("pb_pending");
      router.replace(`/tickets?new=${id}`);
    } else {
      router.replace("/");
    }
  }, 1400);
});
</script>

<style scoped>
.pay {
  height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
}
.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #eee;
  border-top-color: #007ac9;
  border-radius: 50%;
  animation: spin .8s linear infinite;
  margin: 0 auto 16px;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>
