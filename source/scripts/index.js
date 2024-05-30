const headerNav = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.header__mobile-menu');
const iframe = document.querySelector('iframe');

headerNav.classList.remove('header__nav--nojs');

iframe.style.display = 'block';

const onMenuClick = () => menuBtn.classList.toggle('header__mobile-menu--opened');
menuBtn.addEventListener('click', onMenuClick);
