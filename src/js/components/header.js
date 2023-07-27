const toggleSearchField = () => {
  const showSearchBtn = document.querySelector('.button-search');
  const searchField = document.querySelector('.search');
  const closeSearchBtn = document.querySelector('.search__close');

  showSearchBtn.addEventListener('click', function () {
    searchField.className = 'header__search search search--active';
  });

  closeSearchBtn.addEventListener('click', function () {
    searchField.className = 'header__search search';
  });
};

const toggleBurgerMenu = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuLinks = menu.querySelectorAll('.nav__link');
  const closeBtn = menu.querySelector('.nav__close');

  burger.addEventListener('click', function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  });

  [...menuLinks, closeBtn].forEach(function (el) {
    el.addEventListener('click', function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    });
  });
};

toggleSearchField();
toggleBurgerMenu();
