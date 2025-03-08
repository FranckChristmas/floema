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
    super.create() //- permet de ne pas override la method create de la class parent Page.js

    this.link = new Button({
    element: this.elements.link
    })
  }

  destroy () {
    this.link.removeEventListeners()
  }
}