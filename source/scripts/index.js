const headerNav = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.header__mobile-menu');
const iframe = document.querySelector('.contacts--nojs');

headerNav.classList.remove('header__nav--nojs');
menuBtn.classList.remove('header__mobile-menu--nojs');
iframe.classList.remove('contacts--nojs');

const onMenuClick = () => menuBtn.classList.toggle('header__mobile-menu--opened');
menuBtn.addEventListener('click', onMenuClick);
