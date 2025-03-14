import {Mesh, Plane, Program} from 'ogl'
import GSAP from 'gsap'
import vertex from 'shaders/plane-vertex.glsl'
import fragment from 'shaders/plane-fragment.glsl'

// The Media class is responsible for creating the 3D objects that will be displayed on the canvas
// The Media class is imported in the Home class
export default class {
  constructor({ gl, scene, sizes, url, collections }) {
    this.collections = collections 
    this.gl = gl
    this.geometry = new Plane(this.gl)
    this.scene = scene
    this.sizes = sizes
    this.url = url 

    this.createTexture()
    this.createProgram()
    this.createMesh()

    this.extra = {
      x: 0,
      y: 0
    }
  }

  createTexture() {
    console.log(this.collections)
    // const image = this.element.querySelector('.collections__gallery__media__image')
    
    // this.texture = window.TEXTURES[image.getAttribute('data-src')]
  }
  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: { //used in the fragment shader (plane-fragment)
        tMap: { value: this.texture },
        uAlpha: { value: 1 }
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
  
   /**
    * Animations
    */
    transition() {

    }
}