import Page from "classes/Page";

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
    super.create();

    this.link = new Button({
      element: this.elements.link,
    });
  }
}