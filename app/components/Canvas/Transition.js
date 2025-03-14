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


  }


  createProgram(texture) {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: { //used in the fragment shader (plane-fragment)
        uAlpha: { value: 1 },
        tMap: { value: texture },
      }
    })
  }

  createMesh(mesh) {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    })
    this.mesh.scale.x = mesh.scale.x
    this.mesh.scale.y = mesh.scale.y
    this.mesh.scale.z = mesh.scale.z

    this.mesh.position.x = mesh.position.x + 0.01
    this.mesh.position.y = mesh.position.y + 0.01
    this.mesh.position.z = mesh.position.z + 0.01
    
    this.mesh.setParent(this.scene) // set the parent of the mesh to the scene

  }
  /**
   * Element
   */
  setElement(element) {
    console.log(element.id)
    if (element.id === 'collections') {

      const { index, medias } = element
      const media = medias[index]

      console.log(media)

      this.createProgram(media.texture)
      this.createMesh(media.mesh)
    } else {
     
      this.createProgram(element.texture)
      this.createMesh(element)



    }   
    this.createMesh()
  }

  
   /**
    * Animations
    */
    animate (element, onComplete, flag) {
      if (this.transition === 'detail') {
  
        GSAP.to(this.mesh.scale, {
          duration: 1.5,
          ease : 'expo.inOut',
          x: element.mesh.scale.x,
          y: element.mesh.scale.y,
          z: element.mesh.scale.z,
        })
      
      GSAP.to(this.mesh.position, {
        duration: 1.5,
        ease : 'expo.inOut',
        onComplete,
        x: element.mesh.position.x,
        y: element.mesh.position.y,
        z: element.mesh.position.z,
      })
    }
  }
}