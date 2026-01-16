<template>
  <v-container class="fill-height d-flex flex-column align-center justify-center">
    <v-progress-circular indeterminate size="64" color="primary" />
    <div class="mt-4 text-h6">Processing payment…</div>
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function makeId(zone) {
  const r = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `PB-${new Date().getFullYear()}-${zone}-${r}`;
}

onMounted(() => {
  const pending = JSON.parse(sessionStorage.getItem("pb_pending") || "null");

  setTimeout(() => {
    if (!pending) {
      router.replace("/");
      return;
    }

    const now = Date.now();
    const ticket = {
      id: makeId(pending.zone),
      zone: pending.zone,
      duration: pending.duration,
      createdAt: now,
      validUntil: now + pending.duration * 60000,
    };

    const list = JSON.parse(localStorage.getItem("pb_tickets") || "[]");
    list.unshift(ticket);
    localStorage.setItem("pb_tickets", JSON.stringify(list));

    sessionStorage.removeItem("pb_pending");
    router.replace({ name: "tickets", query: { new: ticket.id } });
  }, 1500);
});
</script>
