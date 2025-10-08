class Mountain {
  constructor(dotsOneSelector, dotsTwoSelector) {
    this.dotsOne = document.querySelectorAll(dotsOneSelector);
    this.dotsTwo = document.querySelectorAll(dotsTwoSelector);
    this.duration1 = 4000; // frame1 duration
    this.duration2 = 5000; // frame2 duration
    this.played = false;
  }

  // generic helper to animate any group
  animateDots(dots, endOffsetX, endOffsetY, duration, onComplete) {
    if (!dots[0]) return;
    const startX = parseFloat(dots[0].getAttribute('cx'));
    const startY = parseFloat(dots[0].getAttribute('cy'));
    const endX = startX + endOffsetX;
    const endY = startY - endOffsetY;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentX = startX + (endX - startX) * progress;
      const currentY = startY + (endY - startY) * progress;

      dots.forEach((dot) => {
        dot.setAttribute('cx', currentX);
        dot.setAttribute('cy', currentY);
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (typeof onComplete === 'function') {
        onComplete(); // chain next animation
      }
    };

    requestAnimationFrame(animate);
  }

  play() {
    if (this.played) return;
    this.played = true;

    // Step 1: run frame1 → then frame2
    this.animateDots(this.dotsOne, 68, 85, this.duration1, () => {
      this.animateDots(this.dotsTwo, 92, 46, this.duration2);
      document
        .querySelector('.mountain-opa-inner')
        .setAttribute('fill-opacity', 1);
      document
        .querySelector('.mountain-opa-outer')
        .setAttribute('stroke-opacity', 0.25);
    });
  }
}

export const mountain = new Mountain('.mountain-dot-1', '.mountain-dot-2');
