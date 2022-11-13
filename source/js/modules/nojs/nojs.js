import {headerNavigation} from '../toggle-button/togle-button';

const header = document.querySelector('[data-header]');

const removeNoJs = () => {
  headerNavigation.classList.remove('is-open');
  header.classList.remove('nojs');
};

export {removeNoJs, header};
