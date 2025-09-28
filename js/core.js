import { header } from "./elements/header.js";
import { lenis } from "./elements/lenis.js";
import { anime } from "./elements/animate.js";
import { mygsap } from "./elements/gsap.js";
import { counter } from "./elements/counter.js";
import { scrollnavline } from "./elements/scrollnavline";
import { youtube, vimeo } from "./elements/popup.js";
import { testimonialSwiper } from "./elements/swiper.js";
import { accordion } from "./elements/accordion.js";

document.addEventListener("DOMContentLoaded", () => {
  header.init();
  lenis.init();
  anime.init();
  mygsap.init();
  counter.init();
  scrollnavline.init();
  youtube.init();
  vimeo.init();
  testimonialSwiper.init();
  accordion.init();
});
