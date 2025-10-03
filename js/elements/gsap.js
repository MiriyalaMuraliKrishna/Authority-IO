import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

var DrawSVGPlugin = DrawSVGPlugin || window.DrawSVGPlugin;
var CountUp = CountUp || window.CountUp;

class Gsap {
  constructor({ lines, chars, drawSvg } = {}) {
    this.lines = lines ? document.querySelectorAll(lines) : '';
    this.drawSvg = drawSvg ? document.querySelectorAll(drawSvg) : '';
  }
  init() {
    if (this.lines.length === 0) return;
    this.lines.forEach((ele) => {
      const linesplit = new SplitText(ele, {
        type: 'lines',
        // linesClass: 'word',
      });
      const tl = gsap.timeline({ paused: true });
      tl.from(linesplit.lines, {
        rotationX: -100,
        transformOrigin: '50% 50% -160px',
        opacity: 0,
        duration: 0.8,
        ease: 'power3',
        stagger: 0.25,
      });

      ele.tl = tl;
    });
  }
}

export const gsapme = new Gsap({
  lines: '[data-animate="lines"]',
});
