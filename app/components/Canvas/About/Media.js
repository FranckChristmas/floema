import {Mesh, Texture, Program} from 'ogl'
import vertex from 'shaders/plane-vertex.glsl'
import fragment from 'shaders/plane-fragment.glsl'
import GSAP from 'gsap'

// The Media class is responsible for creating the 3D objects that will be displayed on the canvas
// The Media class is imported in the Home class
export default class Media {
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
      y: 0,
    }
  }

  createTexture() {
    this.texture = new Texture(this.gl)
     
    
    // get the image element from the media element through the img tag - nb : the img tag is the child of the media element, but in any case we gonna use the "figure" (cf inspector) from webGL
    const image = this.element.querySelector('img')

    this.image = new window.Image()
    this.image.crossOrigin = 'anonymous'
    this.image.src = image.getAttribute('data-src')
    this.image.onload = _ => (this.texture.image = this.image)

  }
  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {//used in the fragment shader (plane-fragment)
        uAlpha: { value: 0 },
        tMap: { value: this.texture }
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

    // console.log("test du bounds", this.bounds)

    this.updateScale()
    this.updateX()
    this.updateY()
    }

      /**
    * Animations
    */
   show() {
    GSAP.fromTo(this.program.uniforms.uAlpha, {
      value: 0
    }, {
      value: 1,
      // duration: 1,
      // delay: 1
    })  
  }

  hide() {
    GSAP.to(this.program.uniforms.uAlpha, {
      value: 0, 
      // duration: 1,
      // delay: 1
    })
  }

 /**
  * 
  * Events
  */
  onResize(sizes, scroll) {
    this.extra = 0

    this.createBounds(sizes)
    this.updateX(scroll)
    this.updateY(0)
  }
/**
 * Update loop
 */
updateRotation() {
  this.mesh.rotation.z = GSAP.utils.mapRange(
    -this.sizes.width / 2,
    this.sizes.width / 2,
    Math.PI * 0.11,
    -Math.PI * 0.11,
    this.mesh.position.x
  )
}
  updateScale() {
    this.height = this.bounds.height / window.innerHeight
    this.width = this.bounds.width / window.innerWidth

    this.mesh.scale.x = this.sizes.width * this.width
    this.mesh.scale.y = this.sizes.height * this.height

    const scale = GSAP.utils.mapRange(0, this.sizes.width / 2, 1, 0, Math.abs(this.mesh.position.x))
    this.mesh.scale.x += scale
    this.mesh.scale.y += scale
  }
  
  updateX(x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth
    
    this.mesh.position.x = (-this.sizes.width / 2 )+ (this.mesh.scale.x / 2) + (this.x * this.sizes.width) + this.extra
    
    // console.log("test du mesh position x", this.mesh.position.x)
    // console.log("test du x", this.x)
  }
  
  updateY(y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight
    this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) -  (this.y * this.sizes.height) 
    this.mesh.position.y += Math.cos((this.mesh.position.x / this.sizes.width) * Math.PI * 0.1) * 40 - 40

    // console.log("test du mesh position y", this.mesh.position.y)
    // console.log("test du y", this.y)
  }
  update(scroll)  {
    if (!this.bounds) return

    // console.log("test du scroll", scroll) 
    this.updateRotation()
    this.updateScale()
    this.updateX(scroll)
    this.updateY(0)
  }

}