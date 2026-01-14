<template>
  <div class="wrap">
    <header class="head">
      <div class="hi">Hi, {{ name }}</div>
      <h1>Buy a ticket</h1>
    </header>

    <div class="cards">
      <button class="card blue" @click="$router.push('/single')">
        <div class="icon">⏱</div>
        <div class="text">
          <div class="name">Single ticket</div>
          <div class="desc">Single and zone extensions ticket</div>
        </div>
      </button>

      <button class="card ghost" disabled>
        <div class="icon">10×</div>
        <div class="text">
          <div class="name">Multi-journey</div>
          <div class="desc">Coming soon</div>
        </div>
      </button>

      <button class="card ghost" disabled>
        <div class="icon">📅</div>
        <div class="text">
          <div class="name">Day ticket</div>
          <div class="desc">Coming soon</div>
        </div>
      </button>

      <button class="card ghost" disabled>
        <div class="icon">🗓</div>
        <div class="text">
          <div class="name">Season ticket</div>
          <div class="desc">Coming soon</div>
        </div>
      </button>
    </div>

    <section class="list">
      <div class="row" @click="$router.push('/tickets')">
        <span class="row-icon">🎟</span>
        <div class="row-text">
          <div class="row-title">Your tickets</div>
          <div class="row-desc">View active tickets</div>
        </div>
      </div>

      <div class="row" @click="$router.push('/settings')">
        <span class="row-icon">⚙️</span>
        <div class="row-text">
          <div class="row-title">Settings</div>
          <div class="row-desc">Profile and preferences</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useUser } from "../composables/useUser";
const { name } = useUser();
</script>

<style scoped>
.wrap {
  padding: 16px 16px 96px;
}
.head h1 {
  font-size: 34px;
  margin: 6px 0 18px;
}
.hi {
  color: var(--muted);
  font-weight: 600;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card {
  border: 0;
  border-radius: 14px;
  padding: 18px 16px;
  display: flex;
  gap: 14px;
  align-items: center;
  text-align: left;
  background: var(--card);
  box-shadow: 0 6px 16px rgba(0,0,0,.08);
  animation: pop .25s ease;
}
.card.blue {
  background: #007ac9;
  color: white;
}
.card.ghost {
  opacity: .5;
}
@keyframes pop {
  from { transform: scale(.97); opacity: 0; }
}

.icon {
  width: 44px;
  text-align: center;
  font-size: 26px;
}
.name {
  font-size: 20px;
  font-weight: 800;
}
.desc {
  font-size: 14px;
  opacity: .9;
}

.list {
  margin-top: 22px;
  border-top: 1px solid rgba(0,0,0,.1);
}
.row {
  display: flex;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(0,0,0,.1);
  align-items: center;
}
.row-icon {
  width: 28px;
  text-align: center;
  font-size: 20px;
}
.row-title {
  font-weight: 700;
}
.row-desc {
  font-size: 13px;
  color: var(--muted);
}
</style>
