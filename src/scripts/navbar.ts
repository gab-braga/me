// ── Navbar scroll ──
const navbar = document.getElementById("navbar");

if (navbar)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.style.background = "rgba(8,12,16,0.92)";
      navbar.style.backdropFilter = "blur(16px)";
      navbar.style.borderBottomColor = "var(--border)";
    } else {
      navbar.style.background = "transparent";
      navbar.style.backdropFilter = "none";
      navbar.style.borderBottomColor = "transparent";
    }
  });
