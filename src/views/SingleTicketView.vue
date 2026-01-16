<template>
  <v-container class="pt-4 pb-16">
    <v-app-bar flat>
      <v-btn icon="arrow_back" @click="$router.back()" />
      <v-toolbar-title>Single ticket</v-toolbar-title>
    </v-app-bar>

    <v-list class="mt-2" lines="two">
      <v-list-item
        title="Travel zone"
        :subtitle="zone.label"
        prepend-icon="map"
        @click="open = 'zone'"
      />
      <v-list-item
        title="Customer group"
        subtitle="Adult"
        prepend-icon="person"
      />
      <v-list-item
        title="Validity"
        :subtitle="`${duration} minutes`"
        prepend-icon="schedule"
        @click="open = 'duration'"
      />
      <v-list-item
        title="Payment method"
        subtitle="Visa"
        prepend-icon="credit_card"
      />
    </v-list>

    <v-card class="mt-4 pa-3" variant="tonal">
      Duration: <b>{{ duration }} min</b>
    </v-card>

    <!-- Bottom bar -->
    <v-sheet
      class="d-flex align-center justify-space-between px-4"
      height="64"
      elevation="3"
      style="position: fixed; left: 0; right: 0; bottom: 0;"
    >
      <div class="text-h5 font-weight-bold">
        {{ euro(zone.price) }}
      </div>
      <v-btn color="primary" size="large" @click="sheet = true">
        Continue
      </v-btn>
    </v-sheet>

    <!-- Zone chooser -->
    <v-dialog v-model="openZone" width="auto">
      <v-card>
        <v-card-title>Choose zone</v-card-title>
        <v-card-text>
          <v-btn
            v-for="z in zones"
            :key="z.label"
            class="ma-1"
            :variant="zone.label === z.label ? 'flat' : 'tonal'"
            color="primary"
            @click="zone = z"
          >
            {{ z.label }} · {{ euro(z.price) }}
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="text" @click="open = null">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Duration chooser -->
    <v-dialog v-model="openDuration" width="auto">
      <v-card>
        <v-card-title>Duration</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="d in durations"
              :key="d"
              :title="`${d} minutes`"
              @click="duration = d"
            />
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="text" @click="open = null">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Payment confirm sheet -->
    <v-bottom-sheet v-model="sheet">
      <v-card class="pa-6">
        <div class="text-center">
          <div class="text-h3 font-weight-bold">
            {{ euro(zone.price) }}
          </div>
          <div class="text-caption mb-4">Incl. VAT</div>
        </div>
        <v-btn
          block
          size="large"
          color="success"
          @click="confirm"
        >
          Confirm payment
        </v-btn>
      </v-card>
    </v-bottom-sheet>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const zones = [
  { label: "AB", price: 2.95 },
  { label: "ABC", price: 4.1 },
  { label: "ABCD", price: 4.5 },
  { label: "BC", price: 2.95 },
  { label: "BCD", price: 4.1 },
  { label: "CD", price: 2.95 },
  { label: "D", price: 2.85 },
];

const durations = [60, 80, 100, 120];

const zone = ref(zones[0]);
const duration = ref(80);
const open = ref(null);
const sheet = ref(false);

const openZone = computed({
  get: () => open.value === "zone",
  set: v => (open.value = v ? "zone" : null),
});
const openDuration = computed({
  get: () => open.value === "duration",
  set: v => (open.value = v ? "duration" : null),
});

const euro = n => n.toFixed(2).replace(".", ",") + " €";

function confirm() {
  sessionStorage.setItem(
    "pb_pending",
    JSON.stringify({
      zone: zone.value.label,
      price: zone.value.price,
      duration: duration.value,
    })
  );
  router.push("/processing");
}
</script>
