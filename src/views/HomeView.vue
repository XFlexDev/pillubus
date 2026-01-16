<template>
  <v-container class="pt-6 pb-16">
    <h1 class="mb-4">Home</h1>

    <v-card class="mb-4" elevation="2">
      <v-card-title>Buy a ticket</v-card-title>
      <v-card-text>Single tickets and zone extensions</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="$router.push('/buy')" ripple>
          Buy
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card elevation="1">
      <v-card-title>Your tickets</v-card-title>
      <v-card-text>View active tickets</v-card-text>
      <v-card-actions>
        <v-btn variant="text" @click="$router.push('/tickets')" ripple>
          Open
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
