import GSAP from 'gsap' //- library Green Sock App to animate elements
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

    console.log("Constructor - Element:", this.selector);
    console.log("Constructor - Elements:", this.selectorChildren);
    console.log("Constructor - ID:", this.id);
  }
  create() {
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
    return new Promise(resolve => {
      GSAP.from(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      })
    })
  }

  hide() {
    return new Promise(resolve => {
      GSAP.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      })
    })
  }
}
