document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 66) {
      ROOT_HEADER.classList.add('header__fixed');
      ROOT_MAIN.style.marginTop = '66px';
    } else {
      ROOT_HEADER.classList.remove('header__fixed');
      ROOT_MAIN.style.marginTop = '0';
    };
  });
});
