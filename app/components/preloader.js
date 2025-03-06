import GSAP from 'gsap';
import Component from "../classes/Components";
import each from 'lodash/each';
import { split } from '../utils/text';

export default class Preloader extends Component {
  constructor() {
    super({
      element: ".preloader",
      elements: {
        title: '.preloader__text',
        number: '.preloader__number', // get access to the loader number
        images: document.querySelectorAll('img')
      }
    });

    this.element.titleSpans = split({
      element: this.elements.title
    })

    this.length = 0

    console.log(this.element, this.elements);

    this.createLoader();
  }

  createLoader() {
    each(this.elements.images, img => {

      img.src = img.getAttribute('data-src')
      img.onload = () => this.onAssetLoaded(img)
    })
  }

  onAssetLoaded(image) {
    this.length += 1

    const percent = this.length / this.elements.images.length

    this.elements.number.innerHTML = `${Math.round(percent * 100)}%`

    if (percent === 1) {
      this.onLoaded()
    }
  }
  onLoaded() {
  return new Promise(resolve => {
    this.animateOut = GSAP.timeline({
      delay: 2

    })

    this.animateOut.to(this.element, {
      autoAlpha: 0,
      ease: 'expo.out',
    })

    this.animateOut.call(() => {
      this.emit('completed')
    })
  })
}
  destroy() {  
    this.element.parentNode.removeChild(this.element)
  } 
}