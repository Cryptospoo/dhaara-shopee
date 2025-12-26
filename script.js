/* =====================================================
   Dhaara Shopee - JavaScript Interactions
   Author: You ✨
   ===================================================== */

// Wait until page resources are loaded
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 1200); // Wait 1.2s before fading out
});

// Smooth Scroll to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Newsletter Popup
const newsletterPopup = document.getElementById("newsletterPopup");
const closePopup = document.getElementById("closePopup");
const subscribeBtn = document.getElementById("subscribeBtn");

window.addEventListener("load", () => {
  // Show popup after 5 seconds
  setTimeout(() => {
    newsletterPopup.classList.remove("hidden");
  }, 5000);
});

closePopup.addEventListener("click", () => {
  newsletterPopup.classList.add("hidden");
});

subscribeBtn.addEventListener("click", () => {
  const emailInput = document.getElementById("newsletterEmail");
  const email = emailInput.value.trim();

  if (email === "") {
    alert("Please enter a valid email address.");
  } else {
    alert(`Thank you for subscribing, ${email}!`);
    newsletterPopup.classList.add("hidden");
  }
});

// Floating Chat Widget (Demo)
const chatWidget = document.getElementById("chatWidget");
chatWidget.addEventListener("click", () => {
  alert("💬 Chat feature placeholder. Integrate your chat service here later.");
});
