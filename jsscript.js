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

// === EmailJS Contact Form ===
// Replace placeholders below with your actual EmailJS credentials:
// emailjs.init("YOUR_PUBLIC_KEY");
// emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {...})

if (typeof emailjs !== "undefined") {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace later

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
          from_name: this.name.value,
          from_email: this.email.value,
          message: this.message.value,
        })
        .then(() => {
          window.location.href = "thankyou.html";
        })
        .catch(() => {
          document.getElementById("form-status").innerText = "❌ Error sending message.";
        });
    });
  }
}

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
    alert("💬 Hi there! Chat support coming soon. Visit our Contact page to reach us!");
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
