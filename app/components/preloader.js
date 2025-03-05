import Component from "../classes/Components";
import each from 'lodash/each';

export default class Preloader extends Component {
  constructor() {
    super({
      element: ".preloader",
      elements: {
        title: '.preloader__text',
        number: '.preloader__number', // get access to the loader number
        images: document.querySelectorAll('img')
      }
    });
    this.length = 0

    console.log(this.elements, this.element);

    this.createLoader();
  }

  createLoader() {
    each(this.elements.images, element => {
      const image = new Image()

      image.onload = this.onAssetLoaded(image)
      image.src = this.element.getAttribute('data-src')

      console.log(image);
    })
  }

  onAssetLoaded(image) {
    this.length += 1
    console.log(Math.round(this.length / this.elements.images.length * 100));
  }
}