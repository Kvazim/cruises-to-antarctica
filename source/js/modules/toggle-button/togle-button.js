const headerNavigation = document.querySelector('.header__navigation');
const navigationToggle = document.querySelector('.navigation__toggle');
const promo = document.querySelector('.promo');

const createIndents = () => {

  if (headerNavigation.classList.contains('is-open')) {

    promo.style.marginTop = '62px';

  } else {
    promo.style.marginTop = null;
  }
};

navigationToggle.addEventListener('click', () => {

  navigationToggle.classList.toggle('is-active');
  headerNavigation.classList.toggle('is-open');
  createIndents();
});

export {headerNavigation};
