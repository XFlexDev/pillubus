<template>
  <v-bottom-navigation
    v-if="visible"
    grow
    class="nav"
    bg-color="surface"
  >
    <v-btn
      :active="is('home')"
      @click="go('home')"
      prepend-icon="home"
      ripple
    >
      Home
    </v-btn>

    <v-btn
      :active="is('tickets')"
      @click="go('tickets')"
      prepend-icon="confirmation_number"
      ripple
    >
      Tickets
    </v-btn>

    <v-btn
      :active="is('settings')"
      @click="go('settings')"
      prepend-icon="settings"
      ripple
    >
      Settings
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const visible = computed(() => {
  // hide on overlay routes
  return !["/buy", "/processing"].some(p => route.path.startsWith(p)) &&
         !route.path.startsWith("/ticket/");
});

const is = (name) => route.name === name;
const go = (name) => {
  if (route.name !== name) router.push({ name });
};
</script>

<style scoped>
.nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid rgba(0,0,0,.08);
}
</style>
