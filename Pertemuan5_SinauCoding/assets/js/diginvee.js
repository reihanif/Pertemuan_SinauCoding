function toggleScrolled() {
  const body = document.querySelector("body");
  const navbar = document.querySelector("nav");
  if (
    !navbar.classList.contains("scroll-up-sticky") &&
    !navbar.classList.contains("sticky-top") &&
    !navbar.classList.contains("fixed-top")
  )
    return;
  window.scrollY > 100
    ? body.classList.add("scrolled")
    : body.classList.remove("scrolled");
}

document.addEventListener('scroll', toggleScrolled);
window.addEventListener('load', toggleScrolled);