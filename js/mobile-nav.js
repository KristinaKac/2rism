const navBtn = document.querySelector('.mobile-nav-btn'); // кнопка
const nav = document.querySelector('.mobile-nav'); // всплывающий справа блок с меню
//const menuIcon = document.querySelector('.nav-icon');
const fade = document.querySelector('.mobile-nav-fade');

navBtn.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    navBtn.classList.toggle('mobile-nav-btn-active');
    fade.classList.toggle('mobile-nav-fade--open');
    document.body.classList.toggle('no-scroll');
}
fade.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    navBtn.classList.toggle('mobile-nav-btn-active');
    fade.classList.toggle('mobile-nav-fade--open');
    document.body.classList.toggle('no-scroll');
}