import {headerNavigation} from '../toggle-button/togle-button';

const header = document.querySelector('.header');

const removeNoJs = () => {
  headerNavigation.classList.remove('is-open');
  header.classList.remove('no--js');
};

export {removeNoJs, header};
