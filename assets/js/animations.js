/* Scroll-reveal helper. Elements are visible by default; this only adds a fade-up when they enter view. */
(function () {
  window.initializeAnimations = function () {
    const els = document.querySelectorAll(".reveal-on-scroll:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.05 });
    els.forEach((el) => io.observe(el));
  };

  document.addEventListener("DOMContentLoaded", () => window.initializeAnimations());
})();
