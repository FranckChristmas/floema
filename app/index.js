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

    this.addLinkListeners()
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
    const links = document.querySelectorAll('a') //- permet de selectionner tous les liens de la page

    each(links, link => {
      link.onclick = event => {
        event.preventDefault()
        
        const { href } = link //- permet de recuperer l'url de chaque lien

        this.onChange(href)
      }
    })
  }
}

new App()