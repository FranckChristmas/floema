import Page from "classes/Page";
import Button from "classes/Button";

export default class Home extends Page {
    constructor () {
      super({ 
        element: '.home',
        id: 'Home',
        
        elements: {
          navigation: document.querySelector('.navigation'),
          link: '.home__link'
        }
    })
  }

  create() {
    super.create() // avoid overriding the parent class method create of Page.js

    this.link = new Button({
    element: this.elements.link
    })
  }

  destroy () {
    super.destroy() // avoid overriding the parent class method destroy of Page.js
    this.link.removeEventListeners()
  }
}