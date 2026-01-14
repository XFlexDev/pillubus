<template>
  <div class="wrap">
    <h1>Settings</h1>

    <label>
      Your name
      <input v-model="local" />
    </label>

    <button @click="save">Save</button>

    <label class="row">
      Dark mode
      <input type="checkbox" :checked="theme==='dark'" @change="toggle" />
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUser } from "../composables/useUser";

const { name, setName, theme, setTheme } = useUser();
const local = ref(name.value);

function save() { setName(local.value); }
function toggle(e) { setTheme(e.target.checked ? "dark" : "light"); }
</script>

<style scoped>
.wrap { padding: 16px 16px 96px; }
label { display: block; margin: 12px 0; }
input[type="text"], input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}
button {
  margin-top: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 0;
  background: #007ac9;
  color: #fff;
}
.row { display: flex; align-items: center; gap: 12px; }
</style>
