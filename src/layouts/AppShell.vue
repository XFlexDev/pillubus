<template>
  <v-app>
    <div class="shell">
      <!-- Keep root tabs alive -->
      <keep-alive>
        <RouterView v-slot="{ Component, route }">
          <Transition :name="route.meta?.overlay ? 'overlay' : 'slide'">
            <component :is="Component" :key="route.fullPath" />
          </Transition>
        </RouterView>
      </keep-alive>

      <BottomNav />
    </div>
  </v-app>
</template>

<script setup>
import BottomNav from "../components/BottomNav.vue";
</script>

<style scoped>
.shell {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Root tab transitions */
.slide-enter-active,
.slide-leave-active {
  transition: transform .35s cubic-bezier(.25,.8,.25,1), opacity .25s ease;
  position: absolute;
  inset: 0;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-30%);
  opacity: .5;
}

/* Overlay pages (buy, ticket, processing) */
.overlay-enter-active,
.overlay-leave-active {
  transition: transform .35s cubic-bezier(.25,.8,.25,1), opacity .25s ease;
  position: absolute;
  inset: 0;
}
.overlay-enter-from {
  transform: translateX(100%);
}
.overlay-leave-to {
  transform: translateX(100%);
  opacity: .6;
}
</style>
