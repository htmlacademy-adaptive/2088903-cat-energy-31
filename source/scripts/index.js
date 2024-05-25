const headerNav = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.header__mobile-menu');

headerNav.classList.remove('header__nav--nojs');

const onMenuClick = () => menuBtn.classList.toggle('header__mobile-menu--opened');
menuBtn.addEventListener('click', onMenuClick);
