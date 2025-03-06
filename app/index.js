// script(src="/main.js")
import each from 'lodash/each' //- library to use each instead of forEach method, which isn't available in Node.js

import Preloader from './components/preloader'
import About from './pages/About/Index'
import Collections from './pages/Collections/Index'
import Detail from './pages/Detail/Index'
import Home from './pages/Home/Index'


class App {
  constructor () {
    this.createPreloader()
    this.createContent()
    this.createPages()

    this.addEventListeners()
    this.addLinkListeners() // routing the pages

    this.update()
  }

  createPreloader () {
    this.preloader = new Preloader()
    this.preloader.once('completed', this.onPreloaded.bind(this))

  }

  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createPages ()  {
    this.pages = {
      about: new About(),
      collections: new Collections(),
      detail: new Detail(),
      home: new Home()
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
    await this.page.hide() //hide the current page

    const request = await window.fetch(url) //- fetch the new page here - async/await allow asynchrones requests forv fetching data
    if (request.status === 200) {
      const html = await request.text()

      const div= document.createElement('div')

      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template') // with this line, we can get the template of the new page

      this.content.setAttribute('data-template', this.template) // with this line, we can set the template of the new page

      this.content.innerHTML = divContent.innerHTML  

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
  if (this.page && this.page.onResize) {
    this.page.onResize()
  }
}
/***
 * Loop
 */
  update() {
    if (this.page && this.page.update) {
      this.page.update()
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

  /***
   * Listeners
   */

  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a') //- gather all the links of the page
    console.log("Link found :", links) // Debug

    each(links, link => {
      link.onclick = event => {
        event.preventDefault()
        
        const { href } = link //- to get the url link of the page
        console.log("Link clicked:", href) // Debug
        this.onChange(href)
      }
    })
  }
}

new App()