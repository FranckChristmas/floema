import Component from "../classes/Components";

export default class Preloader extends Component {
  constructor() {
    super({
      element: ".preloader",
      elements: {
        title: '.preloader__text',
        number: '.preloader__number' // get access to the loader number
      }
    });

    console.log(this.elements, this.element);

    setTimeout(_ => {
      this.emit('completed');
    }, 1000)
  }
}