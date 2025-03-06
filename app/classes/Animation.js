import Component from 'classes/Component.js'

export default class Animation extends Component {
  constructor ({ element, elements}) {
    super({
      element,
      elements
    })

    this.createObserver()

    this.animateOut()

    }

  createObserver() {
    this.Observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateIn()
        } else {
          this.animateOut()
        }
      })
    })
    this.Observer.observe(this.element)
  }

  animateIn() {
  }

  animateOut() {
  }
}