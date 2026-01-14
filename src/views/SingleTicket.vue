<template>
  <div class="page">
    <div class="top">
      <button class="back" @click="$router.back()">‹</button>
      <div class="title">Single ticket</div>
    </div>

    <!-- Zone -->
    <section>
      <div class="row-head" @click="toggle('zone')">
        <span>Travel zone</span>
        <b>{{ zone.label }}</b>
      </div>

      <transition name="accordion">
        <div v-if="open === 'zone'" class="panel">
          <button
            v-for="z in zones"
            :key="z.label"
            class="pill"
            :class="{ active: zone.label === z.label }"
            @click="zone = z"
          >
            {{ z.label }} · {{ z.price.toFixed(2).replace('.', ',') }} €
          </button>
        </div>
      </transition>
    </section>

    <!-- Duration -->
    <section>
      <div class="row-head" @click="toggle('dur')">
        <span>Validity duration</span>
        <b>{{ duration }} min</b>
      </div>

      <transition name="accordion">
        <div v-if="open === 'dur'" class="panel list">
          <button v-for="d in durations" :key="d" class="list-item" @click="duration = d">
            {{ d }} minutes
          </button>
        </div>
      </transition>
    </section>

    <div style="height:120px"></div>

    <div class="bar">
      <div class="price">{{ finalPrice }} €</div>
      <button class="cta" @click="continuePay">Continue</button>
    </div>
  </div>
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

const toggle = (k) => (open.value = open.value === k ? null : k);

const finalPrice = computed(() =>
  zone.value.price.toFixed(2).replace(".", ",")
);

function continuePay() {
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

<style scoped>
.page {
  min-height: 100vh;
}
.top {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.back {
  background: none;
  border: 0;
  font-size: 28px;
}
.title {
  font-size: 18px;
  font-weight: 700;
}

section {
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.row-head {
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;
}
.panel {
  padding: 10px 12px 16px;
}
.pill {
  border: 0;
  border-radius: 999px;
  padding: 10px 14px;
  margin: 6px;
  background: #f1f1f1;
}
.pill.active {
  background: #007ac9;
  color: #fff;
}

.list-item {
  width: 100%;
  text-align: left;
  border: 0;
  background: none;
  padding: 12px 8px;
  font-size: 16px;
}

/* Accordion */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height .25s ease, opacity .2s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Bottom bar */
.bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 64px; /* above BottomNav */
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: var(--card);
  border-top: 1px solid rgba(0,0,0,.1);
}
.price {
  font-size: 28px;
  font-weight: 800;
}
.cta {
  background: #007ac9;
  color: #fff;
  border: 0;
  border-radius: 12px;
  padding: 12px 20px;
  font-size: 16px;
}
</style>
