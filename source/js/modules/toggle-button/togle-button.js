import {ScrollLock} from '../../utils/scroll-lock';

const headerNavigation = document.querySelector('[data-navigation]');
const navigationToggle = document.querySelector('[data-navigation-toggle]');
const promo = document.querySelector('.promo');

const scrollLock = new ScrollLock();

const createIndents = () => {

  if (headerNavigation.classList.contains('is-open')) {
    promo.style.marginTop = '62px';
    scrollLock.disableScrolling();
  } else {
    promo.style.marginTop = null;
    scrollLock.enableScrolling();
  }
};

const onToggleClick = () => {
  navigationToggle.classList.toggle('is-active');
  headerNavigation.classList.toggle('is-open');
  createIndents();
};

const initToggle = () => {
  if (navigationToggle) {
    breakpointChecker();
  }
};

const breakpointToggle = window.matchMedia('(min-width:768px)');
const breakpointChecker = () => {
  if (breakpointToggle.matches) {
    navigationToggle.removeEventListener('click', onToggleClick);
  } else {
    navigationToggle.addEventListener('click', onToggleClick);
  }
};
breakpointToggle.addListener(breakpointChecker);

export {initToggle, headerNavigation};
