import Media from './Media'
import map from 'lodash/map'
import { Plane, Transform } from 'ogl'
import GSAP from 'gsap'
import Prefix from 'prefix'

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl
    this.sizes = sizes
    this.scene = scene

    this.transformPrefix = Prefix('transform')

    this.group = new Transform();

    this.galleryElement = document.querySelector('.collections__gallery');
    this.galleryElementWrapper = document.querySelector('.collections__gallery__wrapper');

    this.titlesElement = document.querySelector('.collections__titles');

    this.collectionsElements = document.querySelectorAll('.collections__article');
    this.collectionsElementsActive = 'collections__article--active';

    this.mediasElements = document.querySelectorAll('.collections__gallery__media');

    document.querySelectorAll('.collections__gallery__link').forEach(link => {
      console.log('Lien détecté :', link.href);
      console.log('z-index du canvas :', this.gl.canvas.style.zIndex);
    });

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
    this.medias = map(this.mediasElements, (element, index) => {
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
    
    this.bounds = this.galleryElementWrapper.getBoundingClientRect(); // get the size of the gallery element
      
    this.scroll.last = this.scroll.target = 0
    
    map(this.medias, media => media.onResize( event, this.scroll ))

    this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth
    }
  
  onTouchDown ({ x, y }) { 
    this.scroll.last = this.scroll.current
  }

  onTouchMove ({ x, y }) {
    const distance = x.start - x.end

    this.scroll.target = this.scroll.last - distance
  }

  onTouchUp ({ x, y }) {
  }

  onWheel({ pixelY }) {
    this.scroll.target -= pixelY  // reversed down and up the scroll direction
  }
  /**
   * Changed
   */
  onChange(index) {
    this.index = index

    const selectedCollection = parseInt(this.mediasElements[this.index].getAttribute('data-index'))

    map(this.collectionsElements, (element, elementIndex) => {
      if (elementIndex === selectedCollection) {
        element.classList.add(this.collectionsElementsActive)
      } else {
        element.classList.remove(this.collectionsElementsActive)
      }
    })

    this.titlesElement.style[this.transformPrefix] = `translateY(-${25 * selectedCollection}%) translate(-50%, -50%) rotate(-90deg)`

  }

  /**
   * Update
   */
  update() {
    if (!this.bounds) return

    this.scroll.target = GSAP.utils.clamp(-this.scroll.limit, 0, this.scroll.target)

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp) 

    this.galleryElement.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`

    if(this.scroll.last < this.scroll.current) {
      this.scroll.direction = 'right'
    } else if (this.scroll.last > this.scroll.current) {
      this.scroll.direction = 'left'
    }

    this.scroll.last = this.scroll.current

    map(this.medias, (media, index) => {
      media.update(this.scroll.current)
    })

    const index = Math.floor(Math.abs(this.scroll.current / this.scroll.limit) * this.medias.length) // get the index of the current scroll position - MAthi.floor to get the integer value of each item

    if (this.index !== index) {
      
      this.onChange(index)

    } // prevent to have weird index values
  }

  /**
   * Destroy
   */
  destroy() {
    this.scene.removeChild(this.group)
  }
}