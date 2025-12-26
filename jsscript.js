// === Preloader ===
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden");
      document.body.classList.add("loaded");
    }, 800);
  }
});

// === Back to Top Button ===
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) backToTop.style.display = "flex";
  else backToTop.style.display = "none";
});
if (backToTop) {
  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

// === Chat Widget ===
const chatWidget = document.getElementById("chatWidget");
if (chatWidget) {
  chatWidget.addEventListener("click", () => {
    alert("💬 Chat support coming soon! Please use our Contact page.");
  });
}

// === Newsletter Popup ===
const popup = document.getElementById("newsletterPopup");
const closePopup = document.getElementById("closePopup");
const subscribeBtn = document.getElementById("subscribeBtn");

setTimeout(() => {
  if (popup) popup.classList.remove("hidden");
}, 6000);

if (closePopup) closePopup.addEventListener("click", () => popup.classList.add("hidden"));

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    const email = document.getElementById("newsletterEmail").value;
    if (email.includes("@")) {
      alert("🎉 Thanks for subscribing!");
      popup.classList.add("hidden");
    } else {
      alert("⚠️ Please enter a valid email address.");
    }
  });
}

