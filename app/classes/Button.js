import Component from "./Component"
import GSAP from 'gsap'

export default class Button extends Component {
  constructor ({ element }) {
    super({ element })

    this.path = element.querySelector('path:last-child')
    this.pathLength = this.path.getTotalLength()
    // console.log(this.path.getTotalLength)

    this.timeline = GSAP.timeline({ paused: true })
    this.timeline.fromTo(this.path, 
      {
      strokeDashoffset: this.pathLength, // start from the end of the path
      strokeDasharray: `${this.pathLength} ${this.pathLength}`,
    }, {
      strokeDashoffset: 0,
      strokeDasharray: `${this.pathLength} ${this.pathLength}`,
    })
  }

  onMouseEnter () {
    this.timeline.play()
  }

  onMouseLeave () {
    this.timeline.reverse()
  }

  addEventListeners() {
    this.onMouseEnterEvent = this.onMouseEnter.bind(this) // binding the context of the class to the event listener
    this.onMouseLeaveEvent = this.onMouseLeave.bind(this)

    this.element.addEventListener('mouseenter', this.onMouseEnterEvent)
    this.element.addEventListener('mouseleave', this.onMouseLeaveEvent)
  }
  
  removeEventListeners() {  
    this.element.removeEventListener('mouseenter', this.onMouseEnterEvent)
    this.element.removeEventListener('mouseleave', this.onMouseLeaveEvent)
  }
}
