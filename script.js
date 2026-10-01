// 1. Highlights the menu item for whichever section is in view.
// 2. Shows the floating back-to-top link once the page is scrolled.
// Scrolling itself is handled by CSS (scroll-behavior: smooth).

const links = document.querySelectorAll(".menu a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach((link) => {
        link.classList.toggle("active", link.hash === "#" + id);
      });
    });
  },
  { rootMargin: "-30% 0px -60% 0px" }
);

document.querySelectorAll("main section").forEach((section) => {
  observer.observe(section);
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  toTop.classList.toggle("visible", window.scrollY > 100);
});
