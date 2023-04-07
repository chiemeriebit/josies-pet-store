let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('icofont-close');
    navbar.classList.toggle('active');
    searchicon.classList.remove('icofont-close');
    searchform.classList.remove('active');
}