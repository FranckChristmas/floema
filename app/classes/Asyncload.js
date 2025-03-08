import Component from "classes/Component";

export default class Asyncload extends Component{
constructor({element}) {
  super({ element  })

  this.createObserver()
}

  createObserver() {
    this.Observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.element.src) {
            this.element.src = this.element.getAttribute('data-src')
            this.element.onload = _ => {
              this.element.classList.add('loaded') //classList addition is used in the base.scss file when the image is loaded, making it visible
            }
          }
        }
      })
    })
    this.Observer.observe(this.element)
  }
}