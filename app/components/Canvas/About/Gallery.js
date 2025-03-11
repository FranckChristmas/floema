import { last, map } from "lodash"
import Media from "./Media"
import GSAP from "gsap"
import { Transform } from "ogl"


export default class Gallery {
  constructor({ element, geometry, index, gl, scene, sizes }) {
    
    this.element = element
    this.geometry = geometry
    this.index = index
    this.gl = gl
    this.scene = scene
    this.sizes = sizes

    this.group = new Transform()
    
    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      lerp: 0.1,

    }
    
    this.createMedias()

    this.group.setParent(this.scene)
  } 

  createMedias() {
    this.mediasElements = this.element.querySelectorAll('.about__gallery__media')
    this.medias = map(this.mediasElements, (element, index) => {
      return new Media({
        element,
        geometry: this.geometry,
        gl: this.gl,
        scene: this.scene,
        index,
        sizes: this.sizes,
      
       
      })
    })
  }
/**
 * 
  * events
 */
  onResize( event ) {
    this.bounds = this.element.getBoundingClientRect(); // get the size of the gallery element

    this.sizes = event.sizes;

    
    this.width = this.bounds.width / window.innerWidth * this.sizes.width

    this.scroll.current = this.scroll.target = 0

    map(this.medias, media => media.onResize( event, this.scroll.current))
    }
  
  onTouchDown ({ x, y }) { 
    this.scroll.start = this.scroll.current
  }

  onTouchMove ({ x, y }) {
    const distance = x.start - x.end

    this.scroll.target = this.scroll.start - distance
    console.log("test du scroll target", this.scroll.target)
  }

  onTouchUp ({ x, y }) {
  }

  /**
   * Update
   */
  update() {
    if (!this.bounds) return
    
    if(this.scroll.current < this.scroll.current) {
      this.x.direction = 'right'
    } else if (this.scroll.current > this.scroll.current) {
      this.x.direction = 'left'
    }

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp) 

   // console.log("test du x direction", this.x.direction)

    map(this.medias, (media, index) => {
      const scaleX = media.mesh.scale.x / 2
      
      if (this.direction === 'left') {
        const x = media.mesh.position.x + scaleX
        if (x < -this.sizes.width / 2) {
          media.extra.x += this.gallerySizes.width
          media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.02, Math.PI * 0.02);

        }
      } else if (this.direction === 'right') {
        const x = media.mesh.position.x - scaleX
        if (x > this.sizes.width / 2) {
          media.extra.x -= this.gallerySizes.width
          media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.02, Math.PI * 0.02);
        }
      }

      media.update(this.scroll.current)
    })
  }
}