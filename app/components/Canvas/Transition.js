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

      this.createProgram(media.texture)
      this.createMesh(media.mesh)

     this.transition = 'detail' 
    } else {
        this.createProgram(element.texture)
        this.createMesh(element.mesh)

        this.transition = 'collections'
      }
    }   

  
   /**
    * Animations
    */
  animate (element, onComplete) {
    if (this.transition === 'detail') {
      const timeline = GSAP.timeline({
        onComplete,
      })

      timeline.to(this.mesh.scale, {
          duration: 1.5,
          ease : 'expo.inOut',
          x: element.scale.x,
          y: element.scale.y,
          z: element.scale.z,
        }, 0)
      
      timeline.to(this.mesh.position, {
        duration: 1.5,
        ease : 'expo.inOut',
        x: element.position.x,
        y: element.position.y,
        z: element.position.z,
      }, 0)
    } else {
      const timeline = GSAP.timeline({
        onComplete,
      })

      timeline.to(this.mesh.scale, {
          duration: 1.5,
          ease : 'expo.inOut',
          x: element.scale.x,
          y: element.scale.y,
          z: element.scale.z,
        }, 0)
      
      timeline.to(this.mesh.position, {
        duration: 1.5,
        ease : 'expo.inOut',
        x: element.position.x,
        y: element.position.y,
        z: element.position.z,
      }, 0)

      timeline.call(_ => {
        this.scene.removeChild(this.mesh)
      })
    }
  }
}