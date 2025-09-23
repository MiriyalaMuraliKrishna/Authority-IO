import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

class Popup {
  constructor(selector) {
    this.video = document.querySelectorAll(selector);
  }
  init() {
    if (this.video.length === 0) return;
    this.video.forEach((ele) => {
      if (ele.dataset.type === "youtube") {
        Fancybox.bind(".popup-youtube", {
          type: "inline",
        });
      }
      if (ele.dataset.type === "vimeo") {
        Fancybox.bind(".popup-vimeo", {
          type: "inline",
        });
      }
    });
  }
}
export const youtube = new Popup(".popup-youtube");
export const vimeo = new Popup(".popup-vimeo");
