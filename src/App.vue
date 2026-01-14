<template>
  <div :class="['app', theme]">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="transitionName" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>

    <BottomNav />
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
import BottomNav from "./components/BottomNav.vue";
import { useUser } from "./composables/useUser";

const { theme } = useUser();
const route = useRoute();
const transitionName = ref("slide-forward");

let lastDepth = route.fullPath.split("/").length;

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
  background: #f2f2f2;
  color: #111;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.app.dark {
  background: #0f0f0f;
  color: #f5f5f5;
}

/* ========== ROUTE TRANSITIONS ========== */

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
  transition: transform 0.35s cubic-bezier(.25,.8,.25,1),
              opacity 0.25s ease;
}

/* forward: new from right, old to left */
.slide-forward-enter-from {
  transform: translateX(100%);
}
.slide-forward-leave-to {
  transform: translateX(-30%);
  opacity: 0.5;
}

/* back: new from left, old to right */
.slide-back-enter-from {
  transform: translateX(-30%);
  opacity: 0.5;
}
.slide-back-leave-to {
  transform: translateX(100%);
}
</style>
