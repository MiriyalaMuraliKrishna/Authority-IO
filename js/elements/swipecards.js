import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

class Cards {
  constructor(selector) {
    this.ele = document.querySelector(selector);
  }
  init() {
    new Swiper(this.ele, {
      effect: 'cards',
      cardsEffect: {
        rotate: true,
      },
      grabCursor: true,
      initialSlide: 2,
      speed: 500,
      loop: true,
      mousewheel: {
        invert: false,
      },
    });
  }
}
export const cards = new Cards('.our-team-swiper');
