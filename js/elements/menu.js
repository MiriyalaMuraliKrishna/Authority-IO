class Menu {
  constructor(btn, header, nav) {
    this.btn = document.querySelector(btn);
    this.header = document.querySelector(header);
    this.nav = document.querySelector(nav);
  }
  init() {
    this.btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.currentTarget.classList.toggle('open');
      this.header.classList.toggle('nav-open');
      this.nav.classList.toggle('open');
    });
  }
}
export const menu = new Menu(
  '.humburger-btn',
  'header.site-header',
  '.header_right'
);
