const navbar = document.querySelector('.header-inner-content')
const menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', () => {
    navbar.classList.toggle("show-menu");
})