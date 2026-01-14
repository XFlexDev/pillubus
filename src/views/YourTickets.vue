<template>
  <div class="wrap">
    <h1>Your tickets</h1>

    <div v-for="t in tickets" :key="t.id" :ref="el => refs[t.id] = el" class="ticket">
      <div class="zone">{{ t.zone }}</div>
      <div class="time">Valid until {{ t.validUntil }}</div>
    </div>

    <transition name="snack">
      <div v-if="snackbar" class="snackbar">Lippu ostettu</div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const tickets = ref([]);
const snackbar = ref(false);
const refs = {};

onMounted(() => {
  tickets.value = JSON.parse(localStorage.getItem("tickets") || "[]");

  const id = route.query.new;
  if (id && refs[id]) {
    snackbar.value = true;
    setTimeout(() => snackbar.value = false, 2200);
    setTimeout(() => refs[id].scrollIntoView({ behavior: "smooth", block: "center" }), 50);
  }
});
</script>

<style scoped>
.wrap {
  padding: 16px;
}
.ticket {
  background: #fff;
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,.08);
}
.zone {
  font-size: 24px;
  font-weight: 800;
}
.snackbar {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  background: #2e7d32;
  color: white;
  padding: 12px 18px;
  border-radius: 999px;
}
.snack-enter-from,
.snack-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}
.snack-enter-active,
.snack-leave-active {
  transition: .25s ease;
}
</style>
