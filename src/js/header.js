const mobileMenu = () => {
  const mobileMenuButton = document.querySelector('.header-nav-mobile-button');
  const mobileMenu = document.querySelector('.header_logo_inner_mobile');
  const mobileMenuButtonClose = document.querySelector(
    '.header-nav-mobile-button-close'
  );
  const mobileMenuItems = document.querySelectorAll('.header-nav-mobile-item');
  const header = document.querySelector('.header');
  const header_pc_item = document.querySelectorAll('.header-nav-pc-item');
  header_pc_item.forEach(item => {
    item.addEventListener('click', evt => {
      header_pc_item.forEach(item2 => {
        item2.classList.remove('active');
      });
      evt.currentTarget.classList.add('active');
    });
  });
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    mobileMenuButton.classList.add('active');
    mobileMenuButtonClose.classList.add('active');
  });

  mobileMenuButtonClose.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    mobileMenuButton.classList.remove('active');
    mobileMenuButtonClose.classList.remove('active');
  });

  mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      mobileMenuButton.classList.remove('active');
      mobileMenuButtonClose.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    header.classList.toggle('scroll', window.scrollY > 0);
  });
};

export default mobileMenu;
