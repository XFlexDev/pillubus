<template>
  <v-container class="pt-4 pb-16">
    <v-app-bar flat>
      <v-btn icon="arrow_back" @click="$router.back()" />
      <v-toolbar-title>Ticket</v-toolbar-title>
    </v-app-bar>

    <v-card class="mt-6 pa-6 text-center" elevation="3">
      <canvas ref="canvas" class="mb-4" />
      <div class="text-h4 font-weight-bold">{{ ticket.zone }}</div>
      <div class="text-subtitle-1 mt-1">{{ remain }}</div>
      <div class="text-caption mt-2">{{ ticket.id }}</div>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import QRCode from "qrcode";

const route = useRoute();
const canvas = ref(null);

const list = JSON.parse(localStorage.getItem("pb_tickets") || "[]");
const ticket = list.find(t => t.id === route.params.id);

const remain = computed(() => {
  const m = Math.max(0, Math.floor((ticket.validUntil - Date.now()) / 60000));
  return m > 0 ? `Valid for ${m} min` : "Expired";
});

onMounted(async () => {
  await QRCode.toCanvas(canvas.value, JSON.stringify(ticket), { width: 220 });
});
</script>
