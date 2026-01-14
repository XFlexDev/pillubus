<template>
  <div class="app">
    <RouterView v-slot="{ Component, route }">
      <transition :name="transitionName">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const transitionName = ref("slide-left");
const router = useRouter();

let depth = 0;

router.beforeEach((to, from, next) => {
  const toDepth = to.fullPath.split("/").length;
  const fromDepth = from.fullPath.split("/").length;

  transitionName.value = toDepth > fromDepth ? "slide-left" : "slide-right";
  depth = toDepth;
  next();
});
</script>

<style>
.app {
  min-height: 100vh;
  background: white;
}

/* forward */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-25%);
  opacity: 0.6;
}

/* back */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(25%);
  opacity: 0.6;
}
</style>
