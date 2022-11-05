const buttonsScroll = document.querySelectorAll('[data-scroll]');

for (let buttonScroll of buttonsScroll) {
  buttonScroll.addEventListener('click', function (e) {
    e.preventDefault();
    const link = buttonScroll.getAttribute('href');

    document.querySelector(link).scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  });
}
