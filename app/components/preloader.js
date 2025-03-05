import { resolve } from "path-browserify";
import Component from "../classes/Components";
import each from 'lodash/each';
import GSAP from 'gsap';

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
    this.length = 0

    console.log(this.elements, this.element);

    this.createLoader();
  }

  createLoader() {
    each(this.elements.images, element => {
      const image = new Image()

      image.onload = this.onAssetLoaded(image)
      image.src = element.getAttribute('data-src')

      console.log(image);
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
    this.animateOut = GSAP.timeline()

    this.animateOut.to(this.elements, {
      autoAlpha: 0
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