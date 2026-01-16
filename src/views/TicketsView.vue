<template>
  <v-container class="pt-6 pb-16">
    <h1 class="mb-4">Tickets</h1>
    <v-alert type="info" variant="tonal">
      No tickets yet. Buy your first one.
    </v-alert>

    <v-btn class="mt-4" color="primary" @click="$router.push('/buy')" ripple>
      Buy ticket
    </v-btn>
  </v-container>
</template>
