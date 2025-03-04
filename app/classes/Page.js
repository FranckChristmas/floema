import GSAP from 'gsap' //- library to animate elements
import each from 'lodash/each' //- library to use each instead of forEach method, which isn't available in Node.js


export default class Page {
  constructor ({ 
    element, 
    elements,
    id }) {
      this.selector = element
      this.selectorChildren = {
        ...elements
      }

    this.id = id
  }
  create () {
    this.element = document.querySelector(this.selector)
    this.elements = {}

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
      console.log(this.elements[key], entry)
    })
  }
  addEventsListeners () {
  }

  show() {
    GSAP.from(this.element, {
      autoAlpha: 0,
      delay: 2,
    })
  }

  hide() {
    GSAP.to(this.element, {
      autoAlpha: 0,
    })
  }
}
