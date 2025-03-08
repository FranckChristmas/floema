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
          this.element.src = this.element.getAttribute('data-src')
        }
      })
    })
    this.Observer.observe(this.element)
  }
}