var hamburger = document.querySelector('.hamburger');
var ul = document.querySelector('nav ul');
var links = document.querySelector('.nav-item');

hamburger.addEventListener('click', () => {
    ul.classList.toggle("open");
});