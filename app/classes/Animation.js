export default class Animation {
  constructor ({ element}) {
    this.element = element

    this.createObserver()

    }

  createObserver() {
    this.Observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('animatein')
        } else {
          console.log('animateOut')
        }
      })
    })
    this.Observer.observe(this.element)
  }
}