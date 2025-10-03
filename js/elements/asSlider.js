import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

class mySlider {
  constructor(selector) {
    this.eles = document.querySelector(selector)
      ? document.querySelector(selector)
      : '';
  }
  slider() {
    if (this.eles.length === 0) return;
    Array.from([this.eles]).forEach((ele) => {
      if (ele.dataset.type === 'asSeenSlider') {
        const autoScrollSpeed = ele.dataset.speed
          ? parseFloat(ele.dataset.speed)
          : 0.5;

        const direction = ele.dataset.direction === 'reversed' ? -1 : 1;

        const splide = new Splide(ele, {
          pagination: false,
          arrows: false,
          direction: 'ltr',
          type: 'loop',
          autoWidth: true,
          autoScroll: {
            speed:
              ele.hasAttribute('data-direction') &&
              $(this).data('direction') === 'reversed'
                ? autoScrollSpeed * -1
                : autoScrollSpeed,
            pauseOnHover: false,
          },
          extensions: { AutoScroll },
        }).mount({ AutoScroll });
      }
    });
  }
}
export const asSeen = new mySlider('.as-seen-slider');
