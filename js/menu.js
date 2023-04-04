const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.onclick = function () {
    const active = document.getElementById("hamburger").checked;
    if (active) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    } else {
        hamburger.classList.add('active');
        menu.classList.add('active');
    }
}
