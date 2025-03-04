// script(src="/main.js")
import each from 'lodash/each' //- library to use each instead of forEach method, which isn't available in Node.js

import About from './pages/About'
import Collections from './pages/Collections'
import Detail from './pages/Detail'
import Home from './pages/Home'

class App {
  constructor () {
    this.createContent()
    this.createPages()

    this.addLinkListeners() // routing the pages
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

    console.log("Available pages:", Object.keys(this.pages)) // Debug
    console.log("Current template:", this.template) // Debug

    this.page = this.pages[this.template]

    console.log("Current page:", this.page) // Debug

    if (this.page) {
      this.page.create()
      this.page.show()
    } else {
      console.log("page not found for the template:", this.template) // Debug
    }
  }

  async onChange(url) {
    await this.page.hide() //hide the current page

    const request = await window.fetch(url) //- fetch the new page here - async/await allow asynchrones requests forv fetching data
    if (request.status === 200) {
      const html = await request.text()

      const div= document.createElement('div')

      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.content.setAttribute('data-template', divContent.getAttribute('data-template'))

      this.content.innerHTML = divContent.innerHTML  

      this.page = this.pages[this.template]
      this.page.create()
      this.page.show()
    } else {
    console.log('errrrrrrrror')
  }
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