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
  }

  createTexture() {
    const { index, medias } = this.collections

    this.media = medias[index]
  }


  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: { //used in the fragment shader (plane-fragment)
        uAlpha: { value: 1 },
        tMap: { value: this.media.texture },
      }
    })
  }

  createMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    })

    this.mesh.scale.x = this.media.mesh.scale.x
    this.mesh.scale.y = this.media.mesh.scale.y
    this.mesh.scale.z = this.media.mesh.scale.z

    this.mesh.position.z = this.media.mesh.position.z + 0.01

    this.mesh.setParent(this.scene) // set the parent of the mesh to the scene

  }
  
   /**
    * Animations
    */
    animateDetail(element) {
        console.log(element)
    }
        // GSAP.to(this.program.uniforms.uAlpha, {
}