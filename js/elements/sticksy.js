import 'sticksy';
import { ResizeSensor } from 'css-element-queries';

window.ResizeSensor = ResizeSensor;

class Stickmy {
  constructor(selector, options) {
    this.element = document.querySelector(selector);
    this.options = options;
    this.instance = null;

    this.media = window.matchMedia('(min-width: 1024px)');
    this.media.addEventListener('change', () => this.init());
  }

  init() {
    if (!this.element) return;

    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }

    if (this.media.matches) {
      this.instance = new Sticksy(this.element, this.options);
    }
  }
}

export const stickme = new Stickmy('[data-stickme]', {
  topSpacing: +document.querySelector('[data-top]')?.dataset.top || 0,
  listen: true,
});
