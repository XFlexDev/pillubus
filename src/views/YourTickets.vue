<template>
  <div class="wrap">
    <header class="head">
      <h1>{{ name }}’s tickets</h1>
    </header>

    <div v-if="tickets.length === 0" class="empty">
      <p>You don’t have any tickets yet.</p>
      <button @click="$router.push('/')">Buy your first ticket</button>
    </div>

    <div
      v-for="t in tickets"
      :key="t.id"
      :ref="el => refs[t.id] = el"
      class="ticket"
      @click="$router.push('/ticket/' + t.id)"
    >
      <div class="zone">{{ t.zone }}</div>
      <div class="time">{{ remain(t) }}</div>
    </div>

    <transition name="snack">
      <div v-if="snackbar" class="snackbar">Lippu ostettu</div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useTickets } from "../composables/useTickets";
import { useUser } from "../composables/useUser";

const { tickets } = useTickets();
const { name } = useUser();
const route = useRoute();
const snackbar = ref(false);
const refs = {};

function remain(t) {
  const m = Math.max(0, Math.floor((t.validUntil - Date.now()) / 60000));
  return m > 0 ? `Valid for ${m} min` : "Expired";
}

onMounted(() => {
  const id = route.query.new;
  if (id) {
    snackbar.value = true;
    setTimeout(() => (snackbar.value = false), 2200);
    setTimeout(() => {
      refs[id]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 60);
  }
});
</script>

<style scoped>
.wrap { padding: 16px 16px 96px; }
.head h1 { font-size: 28px; }
.ticket {
  background: var(--card);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,.08);
}
.zone { font-size: 24px; font-weight: 800; }
.time { color: var(--muted); }

.empty { text-align: center; padding: 40px 0; }
.empty button {
  margin-top: 12px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 0;
  background: #007ac9;
  color: #fff;
}

.snackbar {
  position: fixed;
  left: 50%;
  bottom: 88px;
  transform: translateX(-50%);
  background: #2e7d32;
  color: white;
  padding: 12px 18px;
  border-radius: 999px;
}
.snack-enter-from,
.snack-leave-to { opacity: 0; transform: translate(-50%, 20px); }
.snack-enter-active,
.snack-leave-active { transition: .25s ease; }
</style>
