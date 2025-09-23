// import { animate } from "animejs";
import $ from "jquery";
import "is-in-viewport";

class Animate {
  constructor(selector) {
    this.eles = document.querySelectorAll(selector);
  }
  init() {
    const checkInView = () => {
      this.eles.forEach((ele) => {
        const $ele = $(ele);
        const animateType = $ele.data("animate");
        if ($ele.is(":in-viewport")) {
          $ele.addClass(animateType + " visible");
        }
      });
    };
    checkInView();
    document.addEventListener("load", checkInView);
    document.addEventListener("scroll", checkInView);
  }
}
export const anime = new Animate("[data-animate]");
