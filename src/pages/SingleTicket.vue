
<template>
  <div>
    <h1>Single ticket</h1>
    <button @click="buy">Buy fake ticket</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAppStore } from "../stores/appStore";

const router = useRouter();
const store = useAppStore();

function buy() {
  store.addTicket({ id: Date.now(), text: "PilluBus ticket QR123" });
  router.push("/tickets/your");
}
</script>
