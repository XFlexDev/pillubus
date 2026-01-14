import { ref } from "vue";

const name = ref(localStorage.getItem("pb_name") || "Guest");
const theme = ref(localStorage.getItem("pb_theme") || "light");

export function useUser() {
  const setName = (v) => {
    name.value = v;
    localStorage.setItem("pb_name", v);
  };

  const setTheme = (v) => {
    theme.value = v;
    localStorage.setItem("pb_theme", v);
  };

  return { name, theme, setName, setTheme };
}
