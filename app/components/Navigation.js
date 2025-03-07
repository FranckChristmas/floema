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
    GSAP.to(this.element, {
      color: template === 'about' ? COLOR_BRIGHT_GREY : COLOR_QUARTER_SPANISH_WHITE,
      duration: 1.2
    })
  } 
}