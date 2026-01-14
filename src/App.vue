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
  background: white;
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
