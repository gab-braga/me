// ── Scroll reveal ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);

const revealed = document.querySelectorAll(".reveal");
revealed.forEach((el) => observer.observe(el));
