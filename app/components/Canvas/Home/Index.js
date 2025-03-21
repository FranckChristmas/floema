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

    this.galleryElement = document.querySelector('.home__gallery');
    this.mediaElements = document.querySelectorAll('.home__gallery__media__image');

    this.x = {
      current: 0,
      target: 0,
      lerp: 0.1,
    }

    this.y = {
      current: 0,
      target: 0,
      lerp: 0.1,
    }

    this.scrollCurrent = {
      x: 0, 
      y: 0, 
    }


    this.scroll = {
      x: 0,
      y: 0,
    }

    this.speed = {
      target: 0,
      current: 0,
      lerp: 0.1,
    }
    this.createGeometry();
    this.createGallery();
    this.onResize({
      sizes: this.sizes
    })

    this.group.setParent(this.scene)

    this.show()
  }

  createGeometry() { // apply the Plane class to the geometry property
    this.geometry = new Plane(this.gl, {
      heightSegments: 20,
      widthSegments: 20,
    } )
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
    
    this.galleryBounds = this.galleryElement.getBoundingClientRect(); // get the size of the gallery element

    
    this.gallerySizes = {
      height: (this.galleryBounds.height / window.innerHeight) * this.sizes.height,
      width:(this.galleryBounds.width / window.innerWidth) * this.sizes.width,
    }
    this.scroll.x = this.x.target = 0
    this.scroll.y = this.y.target = 0
    this.sizes = event.sizes;
    map(this.medias, media => media.onResize( event, this.scroll ))
    }
  
  onTouchDown ({ x, y }) {  
    this.speed.target = 1
    this.scrollCurrent.x = this.scroll.x
    this.scrollCurrent.y = this.scroll.y
  }

  onTouchMove ({ x, y }) {
    const xDistance = x.start - x.end
    const yDistance = y.start - y.end

    this.x.target = this.scrollCurrent.x - xDistance
    this.y.target = this.scrollCurrent.y - yDistance
  }

  onTouchUp ({ x, y }) {
    this.speed.target = 0

  }

   onWheel ({ pixelX, pixelY }) {
    this.y.target -= pixelY

    this.velocity = pixelY > 0 ? 2 : -2
  }

  /**
   * Update
   */
  update() {
    this.speed.current = GSAP.utils.interpolate(this.speed.current, this.speed.target, this.speed.lerp)

    this.x.current = GSAP.utils.interpolate(this.x.current, this.x.target, this.x.lerp) 
    this.y.current = GSAP.utils.interpolate(this.y.current, this.y.target, this.y.lerp) 

    if(this.scroll.x < this.x.current) {
      this.x.direction = 'right'
    } else if (this.scroll.x > this.x.current) {
      this.x.direction = 'left'
    }
    if(this.scroll.y < this.y.current) {
      this.y.direction = 'top'
    } else if (this.scroll.y > this.y.current) {
      this.y.direction = 'bottom'
    }

   // console.log("test du x direction", this.x.direction)

    this.scroll.x = this.x.current
    this.scroll.y = this.y.current


    // console.log(this.gallerySizes.height)

    map(this.medias, (media, index) => {
      const scaleX = media.mesh.scale.x
      const offsetX = this.sizes.width / 2

      
      if (this.x.direction === 'left') {
        const x = media.mesh.position.x + scaleX / 2
        if (x < -offsetX) {
          media.extra.x += this.gallerySizes.width
          media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.02, Math.PI * 0.02);

        }
      } else if (this.x.direction === 'right') {
        const x = media.mesh.position.x - scaleX / 2
        if (x > offsetX) {
          media.extra.x -= this.gallerySizes.width
          media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.02, Math.PI * 0.02);
        }
      }

      const scaleY = media.mesh.scale.y
      const offsetY = this.sizes.height / 2
      
      if (this.y.direction === 'top') {
        const y = media.mesh.position.y + scaleY / 2
        if (y < -offsetY) {
          media.extra.y += this.gallerySizes.height
          media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.02, Math.PI * 0.02);

        }
      } else if (this.y.direction === 'bottom') {
        const y = media.mesh.position.y - scaleY / 2
        if (y > offsetY) {
          media.extra.y -= this.gallerySizes.height
          media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.02, Math.PI * 0.02);
        }
      }
      media.update(this.scroll, this.speed.current)
    })
  }

  /**
   * Destroy
   */
  destroy() {
    this.scene.removeChild(this.group)
  }
}