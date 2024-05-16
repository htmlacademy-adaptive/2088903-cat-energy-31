// Menu button
const menuBtn = document.getElementById('mobile-menu');

const onMenuClick = () => {
  if (menuBtn.classList.contains('header__mobile-menu--opened')) {
    menuBtn.classList.remove('header__mobile-menu--opened');
  } else {
    menuBtn.classList.add('header__mobile-menu--opened');
  }
};

document.addEventListener('DOMContentLoaded', () => menuBtn.addEventListener('click', onMenuClick));


// Slider
/* const slider = document.getElementById('slider');
const slideContainer = document.getElementById('img1');

const onInputChange = () => {
  slideContainer.style.width = `${slider.value}%`;
  slider.style.setProperty('--pseudo-content', `${slider.value - 1}%`);
};

document.addEventListener('DOMContentLoaded', () => slider.addEventListener('change', onInputChange)); */
