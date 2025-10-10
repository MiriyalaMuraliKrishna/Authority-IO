class Cards {
  constructor(selector) {
    this.ele = document.querySelector(selector);
  }
  init() {}
}
export const cards = new Cards('.our-team-cards');
