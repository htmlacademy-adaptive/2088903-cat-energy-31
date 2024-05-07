const menuBtn = document.getElementById('mobile-menu');

const onMenuClick = () => {
  if (menuBtn.classList.contains('header__mobile-menu--opened')) {
    menuBtn.classList.remove('header__mobile-menu--opened');
  } else {
    menuBtn.classList.add('header__mobile-menu--opened');
  }
};

document.addEventListener('DOMContentLoaded', () => menuBtn.addEventListener('click', onMenuClick));
