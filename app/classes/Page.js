import GSAP from 'gsap' //- library Green Sock App to animate elements
import Prefix from 'prefix' //- library to use prefixes for CSS properties
import normalizeWheel from 'normalize-wheel' //- library to normalize the mouse wheel

import Title from '../animations/Title'
import Highlight from '../animations/Highlight'
import Paragraph from '../animations/Paragraph'
import Label from '../animations/Label'

import each from 'lodash/each' //- library to use each instead of forEach method, which isn't available in Node.js
import map from 'lodash/map'

import { ColorsManager } from './Colors'
import Preloader from '../components/preloader'
import Asyncload from './Asyncload'


export default class Page {
  constructor ({ 
    element, 
    elements,
    id }) {
      this.selector = element
      this.selectorChildren = {
        ...elements,

        animationsLabels: '[data-animation="label"]',  //those in between brackets are selectors (syntaxe for js)
        animationsTitles: '[data-animation="title"]', 
        animationsParagraphs: '[data-animation="paragraph"]',
        animationsHighlights: '[data-animation="highlight"]',

        preloaders: '[data-src]' // allow to preload all the img depending on the page loaded (cf below in createPreloader)
      }

    this.id = id
    this.transformPrefix = Prefix('transform')

    this.onMouseWheelEvent = this.onMouseWheel.bind(this)
    
    this.scroll =  {
      current: 0,
      target: 0,
      last: 0,
      limit: 1000
    }
  
  }

  create() {
    this.element = document.querySelector(this.selector)
    this.elements = {}

    this.scroll =  {
      current: 0,
      target: 0,
      last: 0,
      limit: 0
    }

    each(this.selectorChildren, (entry, key)  => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry
      } else {
        this.elements[key] = document.querySelectorAll(entry)
        
        if (this.elements[key].length === 0) {
          this.elements[key] = null
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry)
        }
      }
    })
    this.createAnimations()
    this.createPreloader()
  }

  createAnimations() {
    this.animations = [];

//Titles
    this.animationsTitles = map(this.elements.animationsTitles, (element) => {
      return new Title({
        element,
      })
  })

  this.animations.push(...this.animationsTitles)

  //Paragraphs
    this.animationsParagraphs = map(this.elements.animationsParagraphs, (element) => {
      return new Paragraph({
        element,
      })
  })

  this.animations.push(...this.animationsParagraphs)

  //Labels
    this.animationsLabels = map(this.elements.animationsLabels, (element) => {
      return new Label({
        element,
      })
  })
  this.animations.push(...this.animationsLabels)

    //Highlights
    this.animationsHighlights = map(this.elements.animationsHighlights, (element) => {
      return new Highlight({
        element,
      })
  })
  this.animations.push(...this.animationsHighlights)
}

createPreloader() {
  this.preloaders = map(this.elements.preloaders, (element) => {  //allows to preload all the img depending on the page loaded
    return new Asyncload({ element })
  })
}
/**
 * Animations
 */
  show() { // to be decided if necessary to animate this page because it is a little buggy
    return new Promise(resolve => {
      ColorsManager.change({
        backgroundColor: this.element.getAttribute('data-background'),
        color: this.element.getAttribute('data-color'),
      })

      this.animateIn = GSAP.timeline()

      this.animateIn.fromTo(this.element, {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      })

      this.animateIn.call(_ => {
        this.addEventListeners()

        resolve()
      })

    })
  }

  hide() {
    return new Promise(resolve => {
      this.destroy()

      this.animateOut = GSAP.timeline()

      this.animateOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      })
    }) 
  }

  /**
   * Events
   */
  onMouseWheel (event)  { // allows to scroll the page smoothly
    const { pixelY } = normalizeWheel(event)    
    this.scroll.target += pixelY
  }

  onResize() {
    if (this.elements.wrapper) { this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight
    }
    each(this.animations, (animation) => animation.onResize());
  }
/**
 * Loops
 */
  update() {
    this.scroll.current = GSAP.utils.clamp(
      0, this.scroll.limit, 
      this.scroll.target
    );

    this.scroll.current = GSAP.utils.interpolate(
      this.scroll.current, 
      this.scroll.target, 0.
    );

    if (this.scroll.target < 0.01) {
      this.scroll.target = 0
    }
    if (this.elements.wrapper) {  
      this.elements.wrapper.style[
        this.transformPrefix
      ] = `translateY(-${this.scroll.current}px)`
    }
  }
     
  /**
   * Listeners
   */
  addEventListeners () {
    window.addEventListener('mousewheel', this.onMouseWheelEvent)
  } 
  
  removeEventListeners () {
    window.removeEventListener('mousewheel', this.onMouseWheelEvent)
  } 
/**
 * Destroy, remove the listeners 
 */
  destroy() {
    this.removeEventListeners()
  }

}
