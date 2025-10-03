// import { animate } from "animejs";
import $ from 'jquery';
import 'is-in-viewport';

class Animate {
  constructor(selector) {
    this.eles = document.querySelectorAll(selector);
  }
  init() {
    const checkInView = () => {
      this.eles.forEach((ele) => {
        const $ele = $(ele);
        const timeline = $ele[0].tl;
        const animateType = $ele.data('animate');

        if ($ele.is(':in-viewport')) {
          $ele.addClass(animateType + ' visible');
          if (timeline && !timeline.played) {
            timeline.restart().play();
            timeline.played = true; // mark as played (avoid repeat)
          }
        }
      });
    };
    checkInView();
    document.addEventListener('load', checkInView);
    document.addEventListener('scroll', checkInView);
  }
}
export const anime = new Animate('[data-animate]');
