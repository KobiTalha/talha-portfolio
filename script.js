// Photo assets (embedded data URIs from images-data.js)
if (window.IMAGES) {
  const hero = document.getElementById('heroImg');
  const friends = document.getElementById('friendsImg');
  if (hero) hero.src = IMAGES.hero;
  if (friends) friends.src = IMAGES.friends;
}

// Mobile nav
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
