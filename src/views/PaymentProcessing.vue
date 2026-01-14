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
    router.replace("/");
  }, 2500);
});
</script>

<style scoped>
.pay {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, system-ui, sans-serif;
}
.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e6e6e6;
  border-top-color: #007ac9;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 16px;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
