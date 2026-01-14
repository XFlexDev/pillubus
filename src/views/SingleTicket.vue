<template>
  <div class="page" :class="{ dim: sheetOpen }">
    <header class="top">
      <button class="back" @click="$router.back()">‹</button>
      <div class="title">Buy a single ticket</div>
    </header>

    <!-- Rows -->
    <section class="rows">
      <div class="row" @click="toggle('zone')">
        <div class="left">
          <div class="label">Travel zone</div>
        </div>
        <div class="right">
          <b>{{ zone.label }}</b>
          <span class="chev">⌃</span>
        </div>
      </div>

      <transition name="accordion">
        <div v-if="open === 'zone'" class="panel">
          <button
            v-for="z in zones"
            :key="z.label"
            class="pill"
            :class="{ active: z.label === zone.label }"
            @click="zone = z"
          >
            {{ z.label }} · {{ euro(z.price) }}
          </button>
        </div>
      </transition>

      <div class="row">
        <div class="left">
          <div class="label">Customer group</div>
        </div>
        <div class="right">
          <b>Adult</b>
          <span class="chev">⌃</span>
        </div>
      </div>

      <div class="row" @click="toggle('dur')">
        <div class="left">
          <div class="label">Validity starts</div>
        </div>
        <div class="right">
          <b>Now</b>
          <span class="chev">⌃</span>
        </div>
      </div>

      <transition name="accordion">
        <div v-if="open === 'dur'" class="panel list">
          <button v-for="d in durations" :key="d" class="list-item" @click="duration = d">
            {{ d }} minutes
          </button>
        </div>
      </transition>

      <div class="row">
        <div class="left">
          <div class="label">Payment method</div>
        </div>
        <div class="right">
          <b>Visa</b>
          <span class="chev">⌃</span>
        </div>
      </div>

      <div class="duration-box">Duration {{ duration }} min</div>
    </section>

    <!-- Bottom bar -->
    <div class="bar">
      <div class="price">{{ euro(zone.price) }}</div>
      <button class="cta" @click="openSheet">Continue</button>
    </div>

    <!-- Overlay -->
    <transition name="fade">
      <div v-if="sheetOpen" class="overlay" @click="closeSheet"></div>
    </transition>

    <!-- Bottom sheet -->
    <transition name="sheet">
      <div v-if="sheetOpen" class="sheet">
        <button class="close" @click="closeSheet">×</button>
        <div class="sheet-content">
          <div class="sheet-price">
            <div class="big">{{ euro(zone.price) }}</div>
            <div class="vat">Incl. VAT</div>
          </div>
          <button class="confirm" @click="confirm">Confirm payment</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
const sheetOpen = ref(false);

const toggle = (k) => (open.value = open.value === k ? null : k);
const euro = (n) => n.toFixed(2).replace(".", ",") + " €";

function openSheet() {
  sheetOpen.value = true;
}
function closeSheet() {
  sheetOpen.value = false;
}
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

<style scoped>
.page {
  min-height: 100vh;
  background: #f2f2f2;
}
.page.dim {
  filter: grayscale(.1);
}

.top {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
.back {
  border: 0;
  background: none;
  font-size: 28px;
}
.title {
  font-weight: 700;
}

.rows {
  background: #e6e6e6;
}
.row {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: #e6e6e6;
  border-bottom: 1px solid #d0d0d0;
}
.label {
  color: #666;
}
.chev {
  margin-left: 8px;
}

.panel {
  padding: 12px 12px 16px;
  background: #f2f2f2;
}
.pill {
  border: 0;
  border-radius: 999px;
  padding: 10px 14px;
  margin: 6px;
  background: #fff;
}
.pill.active {
  background: #007ac9;
  color: #fff;
}

.list-item {
  width: 100%;
  text-align: left;
  border: 0;
  background: #fff;
  padding: 12px;
  margin-bottom: 6px;
  border-radius: 8px;
}

.duration-box {
  margin: 12px;
  padding: 12px;
  background: #ddd;
  border-radius: 10px;
}

.bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 64px;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: #fff;
  border-top: 1px solid #ddd;
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
}

/* Overlay & sheet */
.overlay {
  position: fixed;
  inset: 0;
  backdrop-filter: blur(4px);
  background: rgba(0,0,0,.25);
}
.sheet {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-radius: 16px 16px 0 0;
  padding: 16px;
}
.close {
  position: absolute;
  top: 8px;
  right: 12px;
  border: 0;
  background: none;
  font-size: 26px;
}
.sheet-content {
  margin-top: 24px;
  text-align: center;
}
.big {
  font-size: 40px;
  font-weight: 800;
}
.vat {
  color: #666;
}
.confirm {
  margin-top: 16px;
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 0;
  background: #3b7f1e;
  color: #fff;
  font-size: 18px;
}

/* Animations */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height .25s ease, opacity .2s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sheet-enter-active,
.sheet-leave-active {
  transition: transform .3s cubic-bezier(.25,.8,.25,1);
}
.sheet-enter-from,
.sheet-leave-to {
  transform: translateY(100%);
}
</style>
