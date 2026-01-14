<template>
  <div class="page">
    <button class="back" @click="$router.back()">←</button>
    <h1>Single ticket</h1>
  </div>
</template>

<style scoped>
.page {
  padding: 16px;
}
.back {
  border: 0;
  background: none;
  font-size: 20px;
  margin-bottom: 12px;
}
</style>
