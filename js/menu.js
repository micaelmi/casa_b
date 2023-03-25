document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function () {
        var ativado = document.getElementById("hamburger").checked;
        if (ativado) {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        } else {
            hamburger.classList.add('active');
            menu.classList.add('active');
        }
    });
});
