<template>
  <div class="splash">
    <div class="logo">PilluBus</div>
  </div>
</template>

<style scoped>
.splash {
  position: fixed;
  inset: 0;
  background: #007ac9;
  color: white;
  display: grid;
  place-items: center;
  z-index: 9999;
  animation: fadeOut 0.6s ease forwards;
  animation-delay: 1.6s;
}

.logo {
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -0.02em;
  animation: pop 0.6s ease;
}

@keyframes pop {
  from {
    transform: scale(0.7);
    opacity: 0;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    pointer-events: none;
  }
}
</style>
