
<template>
  <div>
    <h1>Your tickets</h1>
    <div v-for="t in store.tickets" :key="t.id">
      {{ t.text }}
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "../stores/appStore";
const store = useAppStore();
</script>
