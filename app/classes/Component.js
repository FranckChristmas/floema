
import each from 'lodash/each' //- library to use each instead of forEach method, which isn't available in Node.js
import EventEmitter from 'events'

export default class Component extends EventEmitter{
  constructor ({ 
    element, 
    elements
  }) {
    super()
    
      this.selector = element
      this.selectorChildren = {
        ...elements
      }

      this.create()

      this.addEventListeners()
  }
  create() {
    if (this.selector instanceof window.HTMLElement) {
      this.element = this.selector
    } else {
    this.element = document.querySelector(this.selector)
  }
    this.elements = {}

    if (!this.element) {
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

  addEventListeners() {

  }

  removeEventListeners() {

  }
}
