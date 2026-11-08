// Photo assets (embedded data URIs from images-data.js)
(function () {
  var imgs = window.IMAGES || {};
  var hero = document.getElementById('heroImg');
  var friends = document.getElementById('friendsImg');
  if (hero && imgs.hero) hero.src = imgs.hero;
  if (friends && imgs.friends) friends.src = imgs.friends;
})();

// Mobile nav
var burger = document.getElementById('burger');
var navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', function () { navLinks.classList.toggle('open'); });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { navLinks.classList.remove('open'); });
  });
}

// Scroll reveal
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
