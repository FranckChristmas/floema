import Page from "classes/Page";
import Button from "classes/Button";

export default class Detail extends Page {
  constructor () {
    super({ 
      element: '.detail',
      id: 'Detail',
      elements: {
        button: '.detail__button',
      }
    })  
  }

  create() {
      super.create() // avoid overriding the parent class method create of Page.js
  
      this.link = new Button({
      element: this.elements.button
      })
    }
  
    destroy () {
      super.destroy() // avoid overriding the parent class method destroy of Page.js
      this.link.removeEventListeners()
    }
}