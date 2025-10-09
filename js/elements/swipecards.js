import { Swiper } from 'swiper';
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Mousewheel,
} from 'swiper/modules';

Swiper.use([EffectCoverflow, Navigation, Pagination, Mousewheel]);

class Cards {
  constructor(selector) {
    this.ele = document.querySelector(selector);
  }
  init() {
    const swiper = new Swiper('.our-team-swiper', {
      modules: [EffectCoverflow, Mousewheel],
      initialSlide: 2,
      centeredSlides: true,
      speed: 1000,
      grabCursor: true,
      allowTouchMove: false,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: -10,
        stretch: -45,
        depth: 90,
        modifier: 1,
        slideShadows: true,
      },
      mousewheel: {
        thresholdDelta: 50,
        sensitivity: 1,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
  }
}
export const cards = new Cards('.our-team-swiper');
