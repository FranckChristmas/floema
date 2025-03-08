import { Camera, Renderer, Transform } from 'ogl'  

import Home from 'components/Home'
// Camera, Renderer and Transform are the three elements needed to create a 3D scene -
// Box, Program and Mesh are the three elements needed to create a 3D object
// all the elements are imported from the ogl library


export default class Canvas {
  constructor () {
    this.createCamera()
    this.createRenderer()
    this.createScene()
    this.createHome()

  }

  createRenderer() {
    this.renderer = new Renderer

    this.gl = this.renderer.gl

    document.body.appendChild(this.gl.canvas)
  }

  createCamera() {
    this.camera = new Camera(this.gl)
    this.camera.position.z = 5 // set the camera position on the z-axis to 5
  }

  createScene() {
    this.scene = new Transform()
  }
  createHome() {
    this.home = new Home({
      gl: this.gl,
      scene: this.scene
    })
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    
    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight
    });
  }
  update() {
    this.renderer.render({
      camera: this.camera,
      scene: this.scene,
    })
  }
}


