
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    appName: "PilluBus",
    buy: { title: "Buy a ticket", single: "Single ticket" },
    settings: { title: "Settings", name: "Name", language: "Language", save: "Save" }
  },
  fi: {
    appName: "PilluBus",
    buy: { title: "Osta lippu", single: "Kertalippu" },
    settings: { title: "Asetukset", name: "Nimi", language: "Kieli", save: "Tallenna" }
  },
  sv: {
    appName: "PilluBus",
    buy: { title: "Köp biljett", single: "Enkelbiljett" },
    settings: { title: "Inställningar", name: "Namn", language: "Språk", save: "Spara" }
  }
};

export default createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages
});
