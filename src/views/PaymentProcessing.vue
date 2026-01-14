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

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    const id = Date.now();

    tickets.unshift({
      id,
      zone: "AB",
      validUntil: new Date(Date.now() + 60 * 60 * 1000).toLocaleString(),
    });

    localStorage.setItem("tickets", JSON.stringify(tickets));
    router.replace(`/tickets/yours?new=${id}`);
  }, 1800);
});
</script>

<style scoped>
.pay {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #eee;
  border-top-color: #007ac9;
  border-radius: 50%;
  animation: spin .8s linear infinite;
  margin-bottom: 16px;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
