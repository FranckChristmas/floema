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
  }
  create() {
    this.element = document.querySelector(this.selector)
    this.elements = {}


    console.log("Created element:", this.element) // Debug

    if (!this.element) {
      console.error("Element not found for this selector:", this.selector) // Debug
      return
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
  }

  show() { // to be decided if necessary to animate this page because it is a little buggy
    return new Promise(resolve => {
      GSAP.fromTo(this.element, {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        onComplete: resolve,
      })
      console.log("Show - Element:", this.element) // Debug

    })
  }

  hide() {
    return new Promise(resolve => {
      GSAP.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      })
      console.log("Hide - Element:", this.element) // Debug
    })
  }
}
