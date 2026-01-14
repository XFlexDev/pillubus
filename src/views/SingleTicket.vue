<template>
  <div class="page">
    <!-- Top bar -->
    <div class="top">
      <button class="back" @click="$router.back()">‹</button>
      <div class="title">Buy a single ticket</div>
    </div>

    <!-- Travel zone -->
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
            <span>{{ z.label }}</span>
            <small>{{ z.price.toFixed(2).replace('.', ',') }} €</small>
          </button>
        </div>
      </transition>
    </section>

    <!-- Customer group -->
    <section>
      <div class="row-head" @click="toggle('group')">
        <span>Customer group</span>
        <b>{{ group.label }}</b>
      </div>

      <transition name="accordion">
        <div v-if="open === 'group'" class="panel list">
          <button
            v-for="g in groups"
            :key="g.label"
            class="list-item"
            :class="{ active: group.label === g.label }"
            @click="group = g"
          >
            {{ g.label }}
          </button>
        </div>
      </transition>
    </section>

    <!-- Validity -->
    <section>
      <div class="row-head" @click="toggle('time')">
        <span>Validity starts</span>
        <b>{{ validity }}</b>
      </div>

      <transition name="accordion">
        <div v-if="open === 'time'" class="panel list">
          <button class="list-item" @click="validity = 'Now'">Now</button>
          <button class="list-item" @click="validity = 'Choose time'">
            Choose time
          </button>
        </div>
      </transition>
    </section>

    <!-- Payment -->
    <section>
      <div class="row-head" @click="toggle('pay')">
        <span>Payment method</span>
        <b>{{ payment }}</b>
      </div>

      <transition name="accordion">
        <div v-if="open === 'pay'" class="panel list">
          <button class="list-item" @click="payment = 'Visa'">Visa</button>
          <button class="list-item" @click="payment = 'MasterCard'">
            MasterCard
          </button>
        </div>
      </transition>
    </section>

    <div style="height:120px"></div>

    <!-- Bottom bar -->
    <div class="bar">
      <div class="price">{{ finalPrice }} €</div>
      <button class="cta" @click="confirm = true">Continue</button>
    </div>

    <!-- Confirm sheet -->
    <transition name="sheet">
      <div v-if="confirm" class="sheet" @click.self="confirm = false">
        <div class="sheet-card">
          <div class="sheet-price">{{ finalPrice }} €</div>
          <button class="confirm" @click="$router.push('/processing')">
            Confirm payment
          </button>
          <button class="cancel" @click="confirm = false">Cancel</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const zones = [
  { label: "AB", price: 2.95 },
  { label: "ABC", price: 4.1 },
  { label: "ABCD", price: 4.5 },
  { label: "BC", price: 2.95 },
  { label: "BCD", price: 4.1 },
  { label: "CD", price: 2.95 },
  { label: "D", price: 2.85 },
];

const groups = [
  { label: "Adult", mul: 1 },
  { label: "Child (7–17)", mul: 0.61 },
  { label: "Student", mul: 0.68 },
];

const zone = ref(zones[0]);
const group = ref(groups[0]);
const validity = ref("Now");
const payment = ref("Select");
const open = ref(null);
const confirm = ref(false);

function toggle(key) {
  open.value = open.value === key ? null : key;
}

const finalPrice = computed(() =>
  (zone.value.price * group.value.mul).toFixed(2).replace(".", ",")
);
</script>

<style scoped>
.page {
  background: #fff;
  min-height: 100vh;
  font-family: -apple-system, system-ui, sans-serif;
}

.top {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #e6e6e6;
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
  border-bottom: 1px solid #e6e6e6;
}
.row-head {
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;
}

.panel {
  padding: 10px 12px 16px;
  overflow: hidden;
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
.list-item.active {
  color: #007ac9;
  font-weight: 700;
}

/* Accordion */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.25s ease, opacity 0.2s ease;
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
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: #fff;
  border-top: 1px solid #e6e6e6;
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

/* Sheet */
.sheet {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
}
.sheet-card {
  background: #fff;
  width: 100%;
  padding: 20px;
  border-radius: 16px 16px 0 0;
}
.sheet-price {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 12px;
}
.confirm {
  width: 100%;
  background: #3a7d19;
  color: #fff;
  border: 0;
  border-radius: 12px;
  padding: 14px;
  font-size: 16px;
}
.cancel {
  width: 100%;
  background: none;
  border: 0;
  padding: 10px;
}

/* Sheet animation */
.sheet-enter-active,
.sheet-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.sheet-enter-from,
.sheet-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
