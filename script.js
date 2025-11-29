const header = document.getElementById('main-header');
let lastScrollTop = 0;

// Sembunyikan header saat scroll ke bawah, munculkan saat scroll ke atas
window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = '-90px';
  } else {
    header.style.top = '0';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Toggle menu sidebar
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('show');
});

// Efek blur di header saat scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
