document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links'); // Using getElementById
  const menuBtnIcon = menuBtn.querySelector('i');

  if (menuBtn && navLinks && menuBtnIcon) {
      menuBtn.addEventListener('click', function() {
          navLinks.classList.toggle('open');
          const isOpen = navLinks.classList.contains('open');
          menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-3-line');
      });

      navLinks.addEventListener('click', function() {
          navLinks.classList.remove('open');
          menuBtnIcon.setAttribute('class', 'ri-menu-3-line');
      });
  }
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});

document.getElementById("getDemo").addEventListener("click", function() {
  window.location.href = "/FaceRecognition";
});