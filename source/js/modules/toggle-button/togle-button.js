import {ScrollLock} from '../../utils/scroll-lock';
import {header} from '../nojs/nojs';

const navigationToggle = document.querySelector('[data-navigation-toggle]');
const navigation = document.querySelector('[data-navigation]');
const promo = document.querySelector('.promo');

const scrollLock = new ScrollLock();

const openMenu = () => {
  navigationToggle.classList.add('is-active');
  header.classList.add('is-open');
  promo.style.marginTop = '62px';
  scrollLock.disableScrolling();
  window.addEventListener('mousedown', onWindowClick);
};

const closeMenu = () => {
  navigationToggle.classList.remove('is-active');
  header.classList.remove('is-open');
  promo.style.marginTop = null;
  scrollLock.enableScrolling();
  window.removeEventListener('mousedown', onWindowClick);
};

const onToggleClick = () => {
  if (!navigationToggle.classList.contains('is-active')) {
    openMenu();
    return;
  } else {
    closeMenu();
    return;
  }
};

const onWindowClick = ((e) => {
  if (e.target !== navigation && !navigation.contains(e.target)) {
    closeMenu();
  }
});

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

export {initToggle, navigation, closeMenu};
