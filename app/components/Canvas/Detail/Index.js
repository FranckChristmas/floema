import {Mesh, Program, Plane} from 'ogl'
import GSAP from 'gsap'
import vertex from 'shaders/plane-vertex.glsl'
import fragment from 'shaders/plane-fragment.glsl'
import _ from 'lodash'

// The Media class is responsible for creating the 3D objects that will be displayed on the canvas
// The Media class is imported in the Home class
export default class {
  constructor({ gl, scene, sizes , transition}) {
    this.id = 'detail' // id of the current page

    this.element = document.querySelector('.detail__media__image') 
    this.gl = gl
    this.scene = scene
    this.sizes = sizes
    this.transition = transition

    this.geometry = new Plane(this.gl)

    this.createTexture()
    this.createProgram()
    this.createMesh()
    this.createBounds({ 
      sizes: this.sizes
    })

    this.show()
  }

  createTexture() {
    const image = this.element.getAttribute('data-src')
    
    this.texture = window.TEXTURES[image]
  }
  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: { //used in the fragment shader (plane-fragment)
        tMap: { value: 1 },
        uAlpha: { value: this.texture }
      }
    })
  }

  createMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    })

    this.mesh.setParent(this.scene) // set the parent of the mesh to the scene

  }
  createBounds ({ sizes }) {
    this.sizes = sizes // this allow to resize the object depending on the size of the window avoiding stretching or shrinking the object

    this.bounds = this.element.getBoundingClientRect() // get the size of the element

    this.updateScale (sizes)
    this.updateX ()
    this.updateY ()
    }
 
   /**
    * Animations
    */
   show() { 
    if (this.transition) {
      this.transition.animate(this.mesh, _ => {
        this.program.uniforms.uAlpha.value = 1
      })
    }
   }
 
   hide() {
   }

  /**
  * 
  * Events
  */
  onResize(sizes, ) {
    this.createBounds(sizes)
    this.updateX()
    this.updateY()
  }

  onTouchDown() {}

  onTouchMove() {}

  onTouchUp() {}
/**
 * Update loop
 */
  updateScale() {
    this.height = this.bounds.height / window.innerHeight
    this.width = this.bounds.width / window.innerWidth

    this.mesh.scale.x = this.sizes.width * this.width
    this.mesh.scale.y = this.sizes.height * this.height

   // console.log("test du scale", this.width, this.height)
  }
  
  updateX() {
    this.x = (this.bounds.left) / window.innerWidth
    this.mesh.position.x = (-this.sizes.width / 2 )+ (this.mesh.scale.x / 2) + (this.x * this.sizes.width)
    
    // console.log("test du mesh position x", this.mesh.position.x)
    // console.log("test du x", this.x)
  }
  
  updateY() {
    this.y = (this.bounds.top) / window.innerHeight
    this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) -  (this.y * this.sizes.height)

    // console.log("test du mesh position y", this.mesh.position.y)
    // console.log("test du y", this.y)
  }
  update()  {
    if (!this.bounds) return

    this.updateX(scroll)
    this.updateY()
  }
}