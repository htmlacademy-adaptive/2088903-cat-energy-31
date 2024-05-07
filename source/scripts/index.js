const menuBtn = document.querySelector('.header__mobile-menu');

const clickHandler = () => {
  if (menuBtn.classList.contains('header__mobile-menu--opened')) {
    menuBtn.classList.remove('header__mobile-menu--opened');
    menuBtn.classList.add('header__mobile-menu--closed');
  } else {
    menuBtn.classList.remove('header__mobile-menu--closed');
    menuBtn.classList.add('header__mobile-menu--opened');
  }
};

document.addEventListener('DOMContentLoaded', () => menuBtn.addEventListener('click', clickHandler));
