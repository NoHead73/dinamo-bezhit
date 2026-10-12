/* ============================================================
   Мобильное меню (бургер)
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
    var burger = document.querySelector('.header__burger');
    var menu = document.querySelector('.header__mobile-menu');

    if (burger && menu) {
        burger.addEventListener('click', function () {
            menu.classList.toggle('is-open');
            burger.classList.toggle('is-active');
        });

        // Закрываем меню при клике на ссылку
        var links = menu.querySelectorAll('.header__mobile-link');
        links.forEach(function (link) {
            link.addEventListener('click', function () {
                menu.classList.remove('is-open');
                burger.classList.remove('is-active');
            });
        });
    }
});﻿
