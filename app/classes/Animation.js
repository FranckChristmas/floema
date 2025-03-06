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
          console.log('animatein')
          this.animateIn()
        } else {
          console.log('animateOut')
          this.animateOut()
        }
      })
    })
    this.Observer.observe(this.element)
  }

  animateIn() {
    console.log('animateIn')
  }

  animateOut() {
    console.log('animateOut')
  }
}