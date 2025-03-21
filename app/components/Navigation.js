import Component from "../classes/Component";
import GSAP from 'gsap'
import {COLOR_QUARTER_SPANISH_WHITE, COLOR_BRIGHT_GREY  } from 'utils/colors'

export default class Navigation extends Component {
  constructor({template}) {
    super({
      element: ".navigation",
      elements: {
       links: ('.navigation__list__link'),
       items: ('.navigation__list__item')
      }
    });
    this.onChange(template) 
  }
  onChange(template) {
    if (template === 'about') {
      GSAP.to(this.element, {
        color: COLOR_BRIGHT_GREY,
        duration: 1.2
      })
      GSAP.to(this.elements.items[0], {
        autoAlpha: 1,
        delay: 0.75,
        duration: 0.75,
      })
      GSAP.to(this.elements.items[1], {
        autoAlpha: 0,
        duration: 0.75,

      })
    } else {
      GSAP.to(this.element, {
        color: COLOR_QUARTER_SPANISH_WHITE,
        duration: 1.2
      })
      GSAP.to(this.elements.items[0], {
        autoAlpha: 0,
        duration: 0.75,
      })
      GSAP.to(this.elements.items[1], {
        autoAlpha: 1,
        delay: 0.75,
        duration: 0.75,
      })
    } 
  }
}