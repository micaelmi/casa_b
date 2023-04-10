let hamburger;
let menu;
window.onload = function () {
    hamburger = document.querySelector('.hamburger');
    menu = document.querySelector('.menu');
    hamburger.addEventListener('click', teste)
}
function teste() {
    const active = document.getElementById("hamburger").checked;
    if (active) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    } else {
        hamburger.classList.add('active');
        menu.classList.add('active');
    }
}
