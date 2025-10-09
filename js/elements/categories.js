import $ from 'jquery';

class Categories {
  constructor(btn, ele, form) {
    this.btn = document.querySelectorAll(btn);
    this.eles = document.querySelectorAll(ele);
    this.forms = document.querySelectorAll(form);
  }

  init() {
    this.btn.forEach((ele) => {
      ele.addEventListener('click', this.handler.bind(this));
    });

    this.forms.forEach((form) => {
      form.addEventListener('click', this.formHandler.bind(this));
    });
  }

  handler(e) {
    this.btn.forEach((ele) => ele.classList.remove('open'));

    const currentBtn = e.currentTarget;
    currentBtn.classList.toggle('open');

    const myele = currentBtn
      .closest('.blog-post-select')
      .querySelector('.post-categories-wrap');

    this.eles.forEach((ele) => $(ele).hide());
    $(myele).slideToggle(800);
  }

  formHandler(e) {
    if (e.target && e.target.type === 'checkbox') {
      const checkbox = e.target;
      const parent = checkbox.parentElement;

      if (checkbox.checked) {
        const txt = checkbox.getAttribute('value');

        // find the matching button for this form
        const parentBlock = checkbox.closest('.blog-post-select');
        const relatedBtn = parentBlock.querySelector('.post-categories-btn');

        if (relatedBtn) {
          const span = relatedBtn.querySelector('span.post-categories-text');
          if (span) span.textContent = txt;
        }

        parent.classList.add('checked');
      } else {
        parent.classList.remove('checked');
      }
    }
  }
}

export const categories = new Categories(
  '.post-categories-btn',
  '.post-categories-wrap',
  'form.post-categories-form'
);
