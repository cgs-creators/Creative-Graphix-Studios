
window.onload = () => {
  gsap.from(".navbar", { duration: 1, y: -60, opacity: 0, ease: "power2.out" });
  gsap.from(".logo", { duration: 1, opacity: 0, y: -50, delay: 0.3 });
  gsap.from("h1", { duration: 1, opacity: 0, y: 20, delay: 0.6 });
  gsap.from(".tagline", { duration: 1, opacity: 0, y: 20, delay: 1 });
  gsap.from(".services-intro h2", { duration: 1, opacity: 0, y: 30, delay: 1.4 });
  gsap.from(".services-intro p", { duration: 1, opacity: 0, y: 30, delay: 1.6 });
  gsap.from(".service-card", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.2,
    delay: 1.8
  });
};

gsap.from(".about-section h2", { duration: 1, opacity: 0, y: 30, delay: 2.4 });
gsap.from(".about-section p", { duration: 1, opacity: 0, y: 30, delay: 2.6 });
gsap.from(".about-card", {
  duration: 1,
  opacity: 0,
  y: 30,
  stagger: 0.2,
  delay: 2.8
});

gsap.from(".contact-section h2", { duration: 1, opacity: 0, y: 30, delay: 3.4 });
gsap.from(".contact-section p", { duration: 1, opacity: 0, y: 30, delay: 3.6 });
gsap.from(".contact-card", {
  duration: 1,
  opacity: 0,
  y: 30,
  stagger: 0.2,
  delay: 3.8
});

// Smooth section fade-in
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});

// Preloader fade-out
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  preloader.style.transition = "opacity 0.6s ease";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 600);
});
