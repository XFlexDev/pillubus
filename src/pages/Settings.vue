
<template>
  <div>
    <h1>{{ $t('settings.title') }}</h1>
    <input v-model="name" />
    <select v-model="lang">
      <option value="en">English</option>
      <option value="fi">Suomi</option>
      <option value="sv">Svenska</option>
    </select>
    <button @click="save">{{ $t('settings.save') }}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useAppStore } from "../stores/appStore";

const { locale } = useI18n();
const store = useAppStore();

const name = ref(store.name);
const lang = ref(localStorage.getItem("lang") || "en");

function save() {
  store.setName(name.value);
  localStorage.setItem("lang", lang.value);
  locale.value = lang.value;
}
</script>
