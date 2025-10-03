import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

class mySwiper {
  constructor(selector) {
    this.eles = document.querySelectorAll(selector);
  }
  init() {
    if (this.eles.length === 0) return;
    const media = window.matchMedia('(min-width: 1024px)');
    Array.from(this.eles).forEach((ele) => {
      if (ele.dataset.type === 'testimonialSwiper') {
        new Swiper(ele, {
          modules: [Navigation, Pagination],
          // loop: true,
          pagination: {
            el: ele.querySelector('.swiper-pagination'),
            clickable: true,
          },
          navigation: {
            nextEl: ele.querySelector('.swiper-button-next'),
            prevEl: ele.querySelector('.swiper-button-prev'),
          },
        });
      }
      if (ele.dataset.type === 'valuePropsSwiper') {
        let valueSwiper = null;
        function checkMySwiper() {
          if (!media.matches) {
            if (!valueSwiper) {
              valueSwiper = new Swiper(ele, {
                slidesPerView: 1,
                modules: [Navigation, Pagination],
                pagination: {
                  el: ele.querySelector('.swiper-pagination'),
                  clickable: true,
                },
                navigation: {
                  nextEl: ele.querySelector('.swiper-button-next'),
                  prevEl: ele.querySelector('.swiper-button-prev'),
                },
                breakpoints: {
                  760: {
                    slidesPerView: 'auto',
                  },
                },
                on: {
                  slideChange: function (e) {
                    Array.from(e.slidesEl.children).forEach((ele) => {
                      if (!ele.classList.contains('visible')) {
                        const animationClass = ele.dataset.animate;
                        ele.classList.add('visible');
                        ele.classList.add(animationClass);
                      }
                    });
                  },
                },
              });
            }
          } else {
            if (valueSwiper) {
              valueSwiper.destroy(true, true);
              valueSwiper = null;
            }
          }
        }
        checkMySwiper();
        media.addEventListener('change', checkMySwiper);
      }
      if (ele.dataset.type === 'scrollNavSlider') {
        let navSwiper = null;
        function scrollNavSwiper() {
          if (!media.matches) {
            if (!navSwiper) {
              navSwiper = new Swiper(ele, {
                slidesPerView: 1,
                modules: [Navigation, Pagination],
                pagination: {
                  el: ele.querySelector('.swiper-pagination'),
                  clickable: true,
                },
                navigation: {
                  nextEl: ele.querySelector('.swiper-button-next'),
                  prevEl: ele.querySelector('.swiper-button-prev'),
                },
                on: {
                  slideChange: function (e) {
                    Array.from(e.slidesEl.children).forEach((ele) => {
                      if (!ele.classList.contains('visible')) {
                        const animationClass = ele.dataset.animate;
                        ele.classList.add('visible');
                        ele.classList.add(animationClass);
                      }
                    });
                  },
                },
              });
            }
          } else {
            if (navSwiper) {
              navSwiper.destroy(true, true);
              navSwiper = null;
            }
          }
        }
        scrollNavSwiper();
        media.addEventListener('change', scrollNavSwiper);
      }
    });
  }
}
export const testimonialSwiper = new mySwiper('.our-testimonial-swiper');
export const valuePropsSwiper = new mySwiper('.value-props-swiper');
export const scrolNavSwiper = new mySwiper('.scroll-nav-swiper');
