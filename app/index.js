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

    console.log("Template actuel :", this.template) // <-- Debug

  }

  createPages ()  {
    this.pages = {
      about: new About(),
      collections: new Collections(),
      detail: new Detail(),
      home: new Home()
    }


  console.log("Pages disponibles :", Object.keys(this.pages)) // <-- Debug
  console.log("Page actuelle :", this.template, this.pages[this.template]) // <-- Debug 


    this.page = this.pages[this.template]
    this.page.create()
    this.page.show()
  }
  addLinkListeners() {
    const links = document.querySelectorAll('a') //- permet de selectionner tous les liens de la page

    each(links, link => {
      link.onclick = event => {
        event.preventDefault()

        console.log(event)
      }
    })
  }
}

new App()