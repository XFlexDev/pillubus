<template>
  <div class="page">
    <!-- Top tabs -->
    <div class="top-tabs">
      <div class="tab active">{{ $t("buy.title") }}</div>
      <div class="tab ghost" @click="$router.push('/tickets')">
        {{ $t("buy.yours") }}
      </div>
    </div>

    <h1 class="title">{{ $t("buy.title") }}</h1>

    <!-- Big cards -->
    <div class="cards">
      <div class="card blue" @click="$router.push('/tickets/single')">
        <div class="icon">🕒</div>
        <div class="text">
          <div class="name">{{ $t("buy.single") }}</div>
          <div class="desc">Single and zone extensions ticket</div>
        </div>
      </div>

      <div class="card blue">
        <div class="icon">10×</div>
        <div class="text">
          <div class="name">Multi-journey ticket</div>
          <div class="desc">Buy 10 or 20 single tickets in one go</div>
        </div>
      </div>

      <div class="card blue">
        <div class="icon">📅</div>
        <div class="text">
          <div class="name">Day ticket</div>
          <div class="desc">1 – 13 days</div>
        </div>
      </div>

      <div class="card blue">
        <div class="icon">🗓️</div>
        <div class="text">
          <div class="name">Season ticket</div>
          <div class="desc">Auto-renewing or one-off purchase</div>
        </div>
      </div>
    </div>

    <!-- Lower list -->
    <div class="list">
      <div class="row">
        <span class="row-icon">🎫</span>
        <div class="row-text">
          <div class="row-title">Ticket with a code</div>
          <div class="row-desc">Redeem a ticket with a code</div>
        </div>
      </div>

      <div class="row">
        <span class="row-icon">🚲</span>
        <div class="row-text">
          <div class="row-title">City bikes</div>
          <div class="row-desc">Buy a daily, weekly or season pass</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page {
  padding: 16px;
  padding-bottom: 80px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

.top-tabs {
  display: flex;
  gap: 24px;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 16px;
}

.tab {
  padding: 12px 0;
  font-weight: 600;
  color: #007ac9;
  position: relative;
}

.tab.active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 3px;
  background: #007ac9;
  border-radius: 2px;
}

.tab.ghost {
  color: #007ac9;
  opacity: 0.6;
}

.title {
  font-size: 32px;
  font-weight: 700;
  margin: 12px 0 20px;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card {
  display: flex;
  gap: 16px;
  padding: 18px;
  border-radius: 14px;
  align-items: center;
}

.card.blue {
  background: #007ac9;
  color: white;
}

.icon {
  font-size: 28px;
  width: 40px;
  text-align: center;
}

.name {
  font-size: 20px;
  font-weight: 700;
}

.desc {
  font-size: 14px;
  opacity: 0.9;
}

.list {
  margin-top: 20px;
  border-top: 1px solid #e6e6e6;
}

.row {
  display: flex;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
}

.row-icon {
  font-size: 20px;
  width: 28px;
  text-align: center;
}

.row-title {
  font-weight: 600;
  color: #007ac9;
}

.row-desc {
  font-size: 13px;
  color: #666;
}
</style>
