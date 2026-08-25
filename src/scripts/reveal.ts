// ── Scroll reveal ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.remove("opacity-0", "translate-y-5");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);

const revealed = document.querySelectorAll("[data-reveal]");
revealed.forEach((el) => observer.observe(el));
