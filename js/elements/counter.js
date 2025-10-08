// import { CountUp } from 'countup.js';

// class MyCounter {
//   constructor(selector) {
//     this.eles = document.querySelectorAll(selector);
//   }

//   init() {
//     this.eles.forEach((el) => {
//       const targetValue = Number(el.getAttribute('data-count-to'));
//       const startVal = Number(el.textContent.trim());
//       const duration = Number(el.getAttribute('data-duration')) / 1000;

//       el.counter = new CountUp(el, targetValue, {
//         startVal: startVal > 1 ? startVal : 0,
//         duration: duration,
//       });

//       el.counter.start();
//     });
//   }
// }

// export const counter = new MyCounter('[data-count-to]');

import { CountUp } from 'countup.js';
export const counter = {
  $ele: document.querySelectorAll('[data-count-to]'),
  init() {
    const _ = this;
    _.$ele.forEach(($el) => {
      $el.counter = new CountUp($el, $el.getAttribute('data-count-to'), {
        startVal: Number($($el).html()) > 1 ? Number($($el).html()) : '',
        duration: Number(($el.getAttribute('data-duration') / 1000) * 1),
      });
    });
  },
};
