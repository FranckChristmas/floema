class App {
  constructor () {
    console.log('App')
  }

  createPages ()  {
    this.pages = {
      home: new Home(),
      collections: new Collections(),
      detail: new Detail(),
      about: new About(),
    }
  }
}

new App()