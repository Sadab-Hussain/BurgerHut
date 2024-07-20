// script.js
const menuToggle = document.querySelector('#mobile-menu');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
