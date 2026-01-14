<template>
  <nav class="nav">
    <button :class="{ active: is('/') }" @click="go('/')">
      🏠
      <span>Home</span>
    </button>

    <button :class="{ active: is('/tickets') }" @click="go('/tickets')">
      🎟
      <span>Tickets</span>
    </button>

    <button :class="{ active: is('/settings') }" @click="go('/settings')">
      ⚙️
      <span>Settings</span>
    </button>
  </nav>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const is = (p) => route.path === p;
const go = (p) => {
  if (route.path !== p) router.push(p);
};
</script>

<style scoped>
.nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 64px;
  background: var(--card);
  border-top: 1px solid rgba(0,0,0,.08);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 50;
}
button {
  background: none;
  border: 0;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 12px;
}
button.active {
  color: #007ac9;
}
</style>
