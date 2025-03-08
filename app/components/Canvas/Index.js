import { Camera, Renderer, Transform } from 'ogl'  

import Home from 'components/Home'
// Camera, Renderer and Transform are the three elements needed to create a 3D scene -
// Box, Program and Mesh are the three elements needed to create a 3D object
// all the elements are imported from the ogl library


export default class Canvas {
  constructor () {
    this.x = {
      start: 0,
      distance: 0,
      end: 0,
    }
    this.y = {
      start: 0,
      distance: 0,
      end: 0,
    }
    this.createCamera()
    this.createRenderer()
    this.createScene()

    this.onResize()

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
      scene: this.scene,
      sizes: this.sizes
    })
  }
/**
 * Events
 */
  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    
    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight

      
    });
    const fov = this.camera.fov * (Math.PI / 180)
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z
    const width = height * this.camera.aspect

    this.sizes = {
      height,
      width
    }
  if (this.home) {
    this.home.onResize({
      sizes: this.sizes
    })
  }
  }

  onTouchDown(event) {
    this.isDown = true
    this.x.start = event.touches ? event.touches[0].clientX : event.clientX
    this.y.start = event.touches ? event.touches[0].clientY : event.clientY

    if(this.home) {
      this.home.onTouchDown({
        start: this.x.start,
      end: this.x.end
    }, {
      start: this.y.start,
      end: this.y.end
    })
    }

  }
  onTouchMove(event) {
    if (!this.isDown) return
    const x = event.touches ? event.touches[0].clientX : event.clientX
    const y = event.touches ? event.touches[0].clientY : event.clientY

    this.x.end = x
    this.y.end = y

    if(this.home) {
      this.home.onTouchMove({
        start: this.x.start,
        end: this.x.end
      }, {
        start: this.y.start,
        end: this.y.end
      })
    }
  }
  onTouchUp(event) {
    this.isDown = false
    const x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX
    const y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY

    this.x.end = x
    this.y.end = y

    if(this.home) {
      this.home.onTouchUp({
        start: this.x.start,
        end: this.x.end
      }, {
        start: this.y.start,
        end: this.y.end
      })
    }
  } 

  /**
   * Loops
   */
  update() {
    if(this.home) {
      this.home.update()
    }
    this.renderer.render({
      camera: this.camera,
      scene: this.scene,
    })
  }
}


