const iconMenu = document.querySelector('.icon_movil');
const closeMenu = document.querySelector('.icon_movil-close');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.item_link');
const active = document.getElementById('active');

iconMenu.addEventListener('click', () => {
    navbar.classList.add('navbar-active');
    active.classList.add('active')
});

closeMenu.addEventListener('click', () => {
    navbar.classList.remove('navbar-active');
    active.classList.remove('active');
});

navbarLinks.forEach( nav => {
    nav.addEventListener('click', () => {
        navbar.classList.remove('navbar-active');
        active.classList.remove('active');
    });
}) ;





