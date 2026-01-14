<template>
  <div class="wrap">
    <!-- Top tabs -->
    <div class="tabs">
      <button class="tab active">Buy a ticket</button>
      <button class="tab ghost">Your tickets</button>
      <div class="underline"></div>
    </div>

    <h1 class="title">Buy a ticket</h1>

    <!-- Main cards -->
    <div class="cards">
      <button class="card blue" @click="$router.push('/single')">
        <div class="icon">⏱</div>
        <div class="text">
          <div class="name">Single ticket</div>
          <div class="desc">Single and zone extensions ticket</div>
        </div>
      </button>

      <button class="card blue">
        <div class="icon">10×</div>
        <div class="text">
          <div class="name">Multi-journey ticket</div>
          <div class="desc">Buy 10 or 20 single tickets in one go</div>
        </div>
      </button>

      <button class="card blue">
        <div class="icon">📅</div>
        <div class="text">
          <div class="name">Day ticket</div>
          <div class="desc">1 – 13 days</div>
        </div>
      </button>

      <button class="card blue">
        <div class="icon">🗓</div>
        <div class="text">
          <div class="name">Season ticket</div>
          <div class="desc">Auto-renewing or one-off purchase</div>
        </div>
      </button>
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

<style scoped>
.wrap {
  padding: 16px;
  padding-bottom: 40px;
  background: #fff;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}

/* Tabs */
.tabs {
  position: relative;
  display: flex;
  gap: 28px;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 14px;
}
.tab {
  background: none;
  border: 0;
  padding: 12px 0 10px;
  font-size: 18px;
  font-weight: 700;
  color: #007ac9;
}
.tab.ghost {
  opacity: .55;
}
.underline {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 130px;
  height: 3px;
  background: #007ac9;
  border-radius: 3px;
}

/* Title */
.title {
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -0.4px;
  margin: 12px 0 18px;
}

/* Cards */
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
}
.card.blue {
  background: #007ac9;
  color: white;
}
.card:active {
  transform: scale(0.985);
}

.icon {
  width: 44px;
  text-align: center;
  font-size: 26px;
}

.name {
  font-size: 20px;
  font-weight: 800;
  line-height: 1.1;
}
.desc {
  font-size: 14px;
  opacity: .9;
}

/* Lower list */
.list {
  margin-top: 22px;
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
  width: 28px;
  text-align: center;
  font-size: 20px;
}
.row-title {
  font-weight: 700;
  color: #007ac9;
}
.row-desc {
  font-size: 13px;
  color: #666;
}
</style>
