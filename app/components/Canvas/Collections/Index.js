import Media from './Media'
import map from 'lodash/map'
import { Plane, Transform } from 'ogl'
import GSAP from 'gsap'

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl
    this.sizes = sizes
    this.scene = scene

    this.group = new Transform();

    this.galleryElement = document.querySelector('.collections__gallery__wrapper');
    this.mediaElements = document.querySelectorAll('.collections__gallery__media');

    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      lerp: 0.1,
      velocity: 1,
    }

    this.createGeometry();
    this.createGallery();

    this.group.setParent(this.scene)

    this.show()
  }

  createGeometry() {
    this.geometry = new Plane(this.gl)
  }

  createGallery() {
    this.medias = map(this.mediaElements, (element, index) => {
      return new Media({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes,  
      })

    })
  }
      /**
     * Animations
     */
      show() {
        map(this.medias, media => media.show())
       }  
       hide() {
        map(this.medias, media => media.hide())
       }
    
  /**
   * 
   * events
   */
  onResize( event ) {
    
    this.bounds = this.galleryElement.getBoundingClientRect(); // get the size of the gallery element
    
    this.width = this.bounds.width / window.innerWidth * this.sizes.width
  
    this.scroll.x = this.scroll.target = 0

    this.sizes = event.sizes;
    map(this.medias, media => media.onResize( event, this.scroll ))
    }
  
  onTouchDown ({ x, y }) { 
    this.scroll.last = this.scroll.current
  }

  onTouchMove ({ x, y }) {
    const distance = x.start - x.end

    this.x.target = this.scroll.last - distance
  }

  onTouchUp ({ x, y }) {
  }

  onWheel({ pixelY }) {
    this.y.target -= pixelY  // reversed down and up the scroll direction
  }

  /**
   * Update
   */
  update() {
    if (!this.bounds) return

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp) 

    if(this.scroll.last < this.scroll.current) {
      this.x.direction = 'right'
    } else if (this.scroll.last > this.scroll.current) {
      this.x.direction = 'left'
    }

    this.scroll.last = this.scroll.current

    map(this.medias, (media, index) => {
      media.update(this.scroll)
    })
  }

  /**
   * Destroy
   */
  destroy() {
    this.scene.removeChild(this.group)
  }
}