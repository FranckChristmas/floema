import { Box, Camera, Renderer, Program, Mesh, Transform, } from 'ogl'  
import vertex from 'shaders/plane-vertex.glsl'
import fragment from 'shaders/plane-fragment.glsl'
// Camera, Renderer and Transform are the three elements needed to create a 3D scene -
// Box, Program and Mesh are the three elements needed to create a 3D object
// all the elements are imported from the ogl library


export default class Canvas {
  constructor () {
    this.createCamera()
    this.createRenderer()
    this.createScene()
    this.createCube()

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
    this.scene = new Transform
  }
  createCube() {
    this.geometry = new Box(this.gl)

  this.program = new Program(this.gl, { // create a new program with the following vertex and fragment shaders
      vertex,
      fragment,
  });

  this.mesh = new Mesh(this.gl, { // create a new mesh with the following parameters
    geometry : this.geometry,
    program : this.program
  }) // create a new mesh with the geometry and the program

  this.mesh.setParent(this.scene) // set the parent of the mesh to the scene
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    
    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight
    });
  }
  update() {
    this.mesh.rotation.y -= 0.01 // rotate the mesh on the y-axis
    this.mesh.rotation.x -= 0.01 // rotate the mesh on the x-axis

    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    })
  }
}


