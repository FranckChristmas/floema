// script(src="/main.js")
import NormalizeWheel from 'normalize-wheel'
import each from 'lodash/each' //- library to use each instead of forEach method, which isn't available in Node.js
import Canvas from './components/Canvas/Index'
import Preloader from './components/preloader'
import About from './pages/About/Index'
import Collections from './pages/Collections/Index'
import Detail from './pages/Detail/Index'
import Home from './pages/Home/Index'
import Navigation from './components/Navigation'

class App {
  constructor () {
    this.createContent()
    this.createCanvas()
    this.createPreloader()
    this.createNavigation()
    this.createPages()

    this.addEventListeners()
    this.addLinkListeners() // routing the pages

    this.update()
  }

  createNavigation() {
    this.navigation = new Navigation({
      template: this.template,
    });
  }

  createPreloader () {
    this.preloader = new Preloader({canvas : this.canvas})
    this.preloader.once('completed', this.onPreloaded.bind(this))

  }

  createCanvas() {
    this.canvas = new Canvas({
      template: this.template,
    })
  }

  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createPages ()  {
    this.pages = {
      about: new About(),
      collections: new Collections(),
      home: new Home(),
      detail: new Detail(),
    }

    this.page = this.pages[this.template]
    this.page.create()
  }

  /***
   * Events
   */
  onPreloaded() {
    this.preloader.destroy()
    this.onResize()
    this.page.show()

  }

  async onChange(url) {
    this.canvas.onChangeStart(this.template)
    await this.page.hide() //hide the current page

    const request = await window.fetch(url) //- fetch the new page here - async/await allow asynchrones requests forv fetching data
    if (request.status === 200) {
      const html = await request.text()

      const div= document.createElement('div')

      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template') // with this line, we can get the template of the new page
      
      // console.log("canvas:", this.canvas);

      
      this.navigation.onChange(this.template)
      
      this.content.setAttribute('data-template', this.template) // with this line, we can set the template of the new page
      
      this.content.innerHTML = divContent.innerHTML  
      
      this.canvas.onChangeEnd(this.template)
      
      this.page = this.pages[this.template]
      
      this.page.create()
      
      this.onResize()
      
      this.page.show()
      
      this.addLinkListeners()
    } else {
    console.log('errrrrrrrror')
  }
}

onResize() {
  if (this.page && this.page.onResize) { // to explain : if the page exists and the method onResize of the page exists, then execute the method onResize of the page
    this.page.onResize()
  }
  window.requestAnimationFrame((_) => {
    if (this.canvas && this.canvas.onResize) {  
      this.canvas.onResize()
    }
  })
}
// if (this.canvas && this.canvas.onResize) {  // to explain : if the canvas exists and the method onResize of the canvas exists, then execute the method onResize of the canvas
//   this.canvas.onResize()
// }

onTouchDown(event) {
  if (this.canvas && this.canvas.onTouchDown) {  
    this.canvas.onTouchDown(event)
  }
}
onTouchMove(event) {
  if (this.canvas && this.canvas.onTouchMove) {  
    this.canvas.onTouchMove(event)
  }
  
}
onTouchUp(event) {
  if (this.canvas && this.canvas.onTouchUp) {  
    this.canvas.onTouchUp(event)
  }
}

onWheel(event) {
  const normalizeWheel = NormalizeWheel(event)
  if (this.canvas && this.canvas.onWheel) {
    this.canvas.onWheel(normalizeWheel)
  }

  if (this.page && this.page.onWheel) {
    this.page.onWheel(normalizeWheel)
  }
}

/***
 * Loop
 */
  update() {
    
    if (this.page && this.page.update) {
      this.page.update()
    }

    if (this.canvas && this.canvas.update) {
      this.canvas.update(this.page.scroll)
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

  /***
   * Listeners
   */

  addEventListeners() {
    window.addEventListener('mousewheel', this.onWheel.bind(this))
    window.addEventListener('mousedown', this.onTouchDown.bind(this))
    window.addEventListener('mousemove', this.onTouchMove.bind(this))
    window.addEventListener('mouseup', this.onTouchUp.bind(this))

    window.addEventListener('touchstart', this.onTouchDown.bind(this))
    window.addEventListener('touchmove', this.onTouchMove.bind(this))
    window.addEventListener('touchend', this.onTouchUp.bind(this))

    window.addEventListener('resize', this.onResize.bind(this))
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a') //- gather all the links of the page
    each(links, link => {
      link.onclick = event => {
        event.preventDefault()
        
        const { href } = link //- to get the url link of the page
          this.onChange(href)
      }
    })
  }
}
document.addEventListener('DOMContentLoaded', () => {
new App()
})