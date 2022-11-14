const header = document.querySelector('[data-header]');

const removeNoJs = () => {
  header.classList.remove('is-open');
  header.classList.remove('nojs');
};

export {removeNoJs, header};
