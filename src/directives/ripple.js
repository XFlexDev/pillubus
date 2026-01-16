export default {
  mounted(el) {
    el.style.position ||= "relative";
    el.style.overflow = "hidden";

    el.addEventListener("pointerdown", (e) => {
      const rect = el.getBoundingClientRect();
      const ripple = document.createElement("span");

      const size = Math.max(rect.width, rect.height) * 1.5;
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";

      ripple.className = "ripple";
      el.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  },
};
