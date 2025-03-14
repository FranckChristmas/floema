import {Mesh, Program} from 'ogl'
import GSAP from 'gsap'
import vertex from 'shaders/collections-vertex.glsl'
import fragment from 'shaders/collections-fragment.glsl'


// The Media class is responsible for creating the 3D objects that will be displayed on the canvas
// The Media class is imported in the Home class
export default class {
  constructor({ element, geometry, gl, scene, index, sizes }) {
    this.element = element 
    this.gl = gl
    this.geometry = geometry
    this.scene = scene
    this.index = index
    this.sizes = sizes

    this.createTexture()
    this.createProgram()
    this.createMesh()

    this.extra = {
      x: 0,
      y: 0
    }

    this.opacity = {
      current: 0,
      target: 0,
      lerp: 0.1,
      multiplier: 0,
    }
  }

  createTexture() {
    const image = this.element.querySelector('.collections__gallery__media__image')
    
    this.texture = window.TEXTURES[image.getAttribute('data-src')]
  }
  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: { //used in the fragment shader (plane-fragment)
        tMap: { value: this.texture },
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
     GSAP.fromTo(this.opacity, {
       multiplier: 0
     }, {
       multiplier: 1,
       // duration: 1,
       // delay: 1
     })  
   }
 
   hide() {
     GSAP.to(this.program.uniforms.uAlpha, {
       multiplier: 0, 
       // duration: 1,
       // delay: 1
     })
   }

  /**
  * 
  * Events
  */
  onResize(sizes, scroll) {
    this.extra = {
      x: 0,
      y: 0
    }
    this.createBounds(sizes)
    this.updateX(scroll && scroll.x)
    this.updateY(scroll && scroll.y)
  }
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
  
  updateX(x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth
    this.mesh.position.x = (-this.sizes.width / 2 )+ (this.mesh.scale.x / 2) + (this.x * this.sizes.width) + this.extra.x
    
    // console.log("test du mesh position x", this.mesh.position.x)
    // console.log("test du x", this.x)
  }
  
  updateY(y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight
    this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) -  (this.y * this.sizes.height) + this.extra.y

    // console.log("test du mesh position y", this.mesh.position.y)
    // console.log("test du y", this.y)
  }
  update(scroll, index)  {
    if (!this.bounds) return

    this.updateX(scroll)
    this.updateY()

    this.program.uniforms.uAlpha.value = this.opacity.multiplier
  }

}