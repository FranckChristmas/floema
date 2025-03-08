import Component from "./Component"

export default classes Button Component
  constructor({ element )} {
    super({ element })
  }

  addEventListeners() {
    this.element.addEventListener('mouseenter', this.onMouseEnter)
    this.element.addEventListener('mouseleave', this.onMouseLeave)
  }

  removeEventListeners() {  
    this.element.removeEventListener('mouseenter', this.onMouseEnter)
    this.element.removeEventListener('mouseleave', this.onMouseLeave)
  }