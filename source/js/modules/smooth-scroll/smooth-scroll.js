import {navigation, closeMenu} from '../toggle-button/togle-button';

const buttonsScroll = document.querySelectorAll('[data-scroll]');

for (let buttonScroll of buttonsScroll) {
  buttonScroll.addEventListener('click', function (e) {
    e.preventDefault();

    if (navigation.contains(e.target)) {
      closeMenu();
    }
    const link = buttonScroll.getAttribute('href');

    document.querySelector(link).scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  });
}
