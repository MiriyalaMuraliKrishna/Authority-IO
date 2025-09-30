import { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
class mySlider {
  constructor(selector) {
    this.eles = document.querySelector(selector)
      ? document.querySelector(selector)
      : "";
  }
  slider() {
    if (this.eles.length === 0) return;
    Array.from(this.eles).forEach((ele) => {
      if (ele.dataset.type === "asSeenSlider") {
        new Swiper(ele, {
          modules: [Navigation, Pagination],
          // loop: true,
          pagination: {
            el: ele.querySelector(".swiper-pagination"),
            clickable: true,
          },
          navigation: {
            nextEl: ele.querySelector(".swiper-button-next"),
            prevEl: ele.querySelector(".swiper-button-prev"),
          },
        });
      }
    });
  }
}
export const asSeen = new mySlider(".as-seen-slider");
