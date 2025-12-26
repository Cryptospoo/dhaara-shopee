// === Preloader ===
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.transition = "opacity 0.6s ease";
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);
  }
});

// === Smooth Scroll ===
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// === Sticky Header Active Link Highlight ===
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// === Optional Console Check ===
console.log("✅ Dhaara Shopee site scripts loaded successfully!");
