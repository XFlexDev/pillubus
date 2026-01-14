<template>
  <div :class="['app', theme]">
    <RouterView v-slot="{ Component, route }">
      <transition :name="transitionName">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </RouterView>

    <BottomNav />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import BottomNav from "./components/BottomNav.vue";
import { useUser } from "./composables/useUser";

const { theme } = useUser();

const transitionName = ref("slide-left");
const router = useRouter();

router.beforeEach((to, from, next) => {
  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;
  transitionName.value = toDepth > fromDepth ? "slide-left" : "slide-right";
  next();
});
</script>

<style>
.app {
  min-height: 100vh;
  background: var(--bg);
  color: var(--fg);
}

/* Themes */
.app.light {
  --bg: #ffffff;
  --fg: #111111;
  --card: #ffffff;
  --muted: #666;
}
.app.dark {
  --bg: #0f0f12;
  --fg: #f2f2f2;
  --card: #1a1b20;
  --muted: #9aa0a6;
}

/* forward */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform .28s ease;
}
.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

/* back */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform .28s ease;
}
.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
