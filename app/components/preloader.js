import GSAP from 'gsap';
import Component from "../classes/Component";
import each from 'lodash/each';
import { split } from '../utils/text';

export default class Preloader extends Component {
  constructor() {
    super({
      element: ".preloader",
      elements: {
        title: '.preloader__text',
        number: '.preloader__number', // get access to the loader number
        numberText: '.preloader__number__text',
        images: document.querySelectorAll('img')
      }
    });

    split({
      element: this.elements.title,
      expression: '<br>'
    })

    split({
      element: this.elements.title,
      expression: '<br>'
    })


    this.elements.titleSpans = this.elements.title.querySelectorAll('span span')

    this.length = 0


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

    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`

    if (percent === 1) {
      this.onLoaded()
    }
  }
  onLoaded() {
  return new Promise(resolve => {
    this.animateOut = GSAP.timeline({
      delay: 1.5
    })
  
    this.animateOut.to(this.elements.titleSpans, {
      // autoAlpha: 0, removed because we not gonna fade out the text, but make it translate down
      duration: 1,
      ease: 'expo.Out',
      stagger: 0.3,
      y: '100%'
    })


    this.animateOut.to(this.elements.numberText, { // fade out the 100% number
      duration: 0.5,
      ease: 'expo.Out',
      stagger: 0.3,
      y: '100%'
    }, '-=0.3')

    this.animateOut.to(this.element, { // remove the preloader
      duration: 0.5,
      ease: 'expo.out',
      scaleY: 0,
      transformOrigin: '0 0'
    })

    this.animateOut.call(() => { // call the resolve function when completing the animation
      this.emit('completed')
    })
  })
}
  destroy() {  
    this.element.parentNode.removeChild(this.element)
  } 
}