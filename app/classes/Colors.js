import GSAP from 'gsap';

class Colors {
  change({
    backgroundColor,
    color,
  }) {
    GSAP.to(document.documentElement, {
      backgroundColor,
      color,
      duration: 1.2,
    })

  }
}

export const ColorsManager = new Colors();