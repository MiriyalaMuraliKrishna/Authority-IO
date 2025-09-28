class Accordion {
  constructor(aList, aHeader, aContent) {
    this._aList = document.querySelectorAll(aList);
    this._aHeader = aHeader;
    this._aContent = aContent;
  }

  init() {
    const items = this._aList;
    if (items.length === 0) return;

    items.forEach((el) => {
      const header = el.querySelector(this._aHeader);
      const content = el.querySelector(this._aContent);

      header.addEventListener('click', () => {
        const isOpen = el.dataset.open === 'true';

        // close all
        items.forEach((item) => {
          item.dataset.open = 'false';
          item.querySelector(this._aHeader)?.classList.remove('open');
          item.querySelector(this._aContent).style.maxHeight = '';
        });

        // open current if it wasn't already open
        if (!isOpen) {
          el.dataset.open = 'true';
          header.classList.add('open');
          content.style.maxHeight = `${content.scrollHeight}px`;
        }
      });
    });

    // one global resize listener
    window.addEventListener('resize', () => {
      items.forEach((el) => {
        if (el.dataset.open === 'true') {
          const content = el.querySelector(this._aContent);
          content.style.maxHeight = `${content.scrollHeight}px`;
        }
      });
    });
  }
}

export let accordion = new Accordion(
  '.accordion-list',
  '.accordion-header',
  '.accordion-content'
);
