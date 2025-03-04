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
    super.create() //- permet de ne pas override la method create de la class parent Page.js
    
    this.elements.link.addEventListener('click', _ => console.log('oh you clicked me !!')) //- appel le link de home__link lorsque l'on clicque dessus
  }
}