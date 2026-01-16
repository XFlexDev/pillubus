<template>
  <div :class="['app', theme]">
    <!-- Splash -->
    <Splash v-if="showSplash" />

    <!-- Main app -->
    <div v-else class="app-shell">
      <RouterView v-slot="{ Component, route }">
        <Transition :name="transitionName" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>

      <BottomNav />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import BottomNav from "./components/BottomNav.vue";
import Splash from "./components/Splash.vue";
import { useUser } from "./composables/useUser";

const { theme } = useUser();
const route = useRoute();

const showSplash = ref(true);
const transitionName = ref("slide-forward");

let lastDepth = route.fullPath.split("/").length;

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false;
  }, 1800);
});

watch(
  () => route.fullPath,
  (to) => {
    const depth = to.split("/").length;
    transitionName.value = depth >= lastDepth ? "slide-forward" : "slide-back";
    lastDepth = depth;
  }
);
</script>

<style>
.app {
  min-height: 100vh;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
  background: #f2f2f2;
  color: #111;
}

.app.dark {
  background: #0f0f0f;
  color: #f5f5f5;
}

.app-shell {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* ===== ROUTE TRANSITIONS ===== */

.slide-forward-enter-active,
.slide-forward-leave-active,
.slide-back-enter-active,
.slide-back-leave-active {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  will-change: transform, opacity;
  transition: transform 0.38s cubic-bezier(.25,.8,.25,1),
              opacity 0.28s ease;
}

/* Forward: new from right, old to left */
.slide-forward-enter-from {
  transform: translateX(100%);
}
.slide-forward-leave-to {
  transform: translateX(-30%);
  opacity: 0.4;
}

/* Back: new from left, old to right */
.slide-back-enter-from {
  transform: translateX(-30%);
  opacity: 0.4;
}
.slide-back-leave-to {
  transform: translateX(100%);
}
</style>
