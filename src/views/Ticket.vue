<template>
  <div class="wrap">
    <button class="back" @click="$router.back()">‹</button>
    <div class="card">
      <canvas ref="canvas"></canvas>
      <h2>{{ ticket.zone }}</h2>
      <p>{{ remain }}</p>
      <small>{{ ticket.id }}</small>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useTickets } from "../composables/useTickets";
import QRCode from "qrcode";

const route = useRoute();
const { tickets } = useTickets();
const canvas = ref(null);

const ticket = tickets.value.find(t => t.id === route.params.id);

const remain = computed(() => {
  const m = Math.max(0, Math.floor((ticket.validUntil - Date.now()) / 60000));
  return m > 0 ? `Valid for ${m} min` : "Expired";
});

onMounted(async () => {
  await QRCode.toCanvas(canvas.value, JSON.stringify(ticket), { width: 220 });
});
</script>

<style scoped>
.wrap { padding: 16px 16px 96px; text-align: center; }
.back { border: 0; background: none; font-size: 28px; }
.card {
  margin-top: 24px;
  padding: 24px;
  border-radius: 16px;
  background: var(--card);
  box-shadow: 0 10px 24px rgba(0,0,0,.12);
}
</style>
