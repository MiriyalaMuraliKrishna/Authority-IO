import { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";

class mySwiper {
  constructor(selector) {
    this.eles = document.querySelectorAll(selector);
  }
  init() {
    if (this.eles.length === 0) return;
    this.eles.forEach((ele) => {
      if (ele.dataset.type === "testimonialSwiper") {
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
export const testimonialSwiper = new mySwiper(".our-testimonial-swiper");
