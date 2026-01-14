
<template>
  <div>
    <h1>{{ $t('buy.title') }}</h1>
    <button @click="$router.push('/tickets/single')">
      {{ $t('buy.single') }}
    </button>
  </div>
</template>
