import Media from './Media'
import map from 'lodash/map'
import { Plane, Transform } from 'ogl'
import GSAP from 'gsap'
import Prefix from 'prefix'

export default class {
  constructor({ gl, scene, sizes, transition }) {
    this.id = 'collections' // id of the current page
    this.gl = gl
    this.sizes = sizes
    this.scene = scene
    this.transition = transition

    this.transformPrefix = Prefix('transform')

    this.group = new Transform();

    this.galleryElement = document.querySelector('.collections__gallery');
    this.galleryElementWrapper = document.querySelector('.collections__gallery__wrapper');

    this.titlesElement = document.querySelector('.collections__titles');

    this.collectionsElements = document.querySelectorAll('.collections__article');
    this.collectionsElementsActive = 'collections__article--active';

    this.mediasElements = document.querySelectorAll('.collections__gallery__media');

    document.querySelectorAll('.collections__gallery__link').forEach(link => {
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

    this.onResize({
      sizes: this.sizes
    })
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
  async show() {
    if (this.transition) {
      this.media.opacity.multiplier = 0

      const { src } = this.transition.mesh.program.uniforms.tMap.value.image
      const texture = window.TEXTURES[src]
      const media = this.medias.find(media => media.texture === texture)

      GSAP.delayedCall(1, _ => {
        this.scroll.current = this.scroll.target = this.scroll.last = this.scroll.start = -media.mesh.position.x
      })

      this.transition.animate(this.medias[0].mesh, _ => {
        this.media.opacity.multiplier = 1
      })

      map(this.medias, media => {
        if (media !== this.media) {
          media.show()
        }
        })
        } else {
          map(this.medias, media => media.show())
        }
      }

    hide() {
    map(this.medias, media => media.hide())
    }
    
  /**
   * 
   * events
   */
  onResize( event ) {
    
    this.bounds = this.galleryElementWrapper.getBoundingClientRect(); // get the size of the gallery element for the Web GL 
      
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

    this.media = this.medias[this.index]
  }

  /**
   * Update
   */
  update() {

    this.scroll.target = GSAP.utils.clamp(-this.scroll.limit, 0, this.scroll.target)

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp) 

    this.galleryElement.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`

    if(this.scroll.last < this.scroll.current) {
      this.scroll.direction = 'right'
    } else if (this.scroll.last > this.scroll.current) {
      this.scroll.direction = 'left'
    }

    this.scroll.last = this.scroll.current

    const index = Math.floor(Math.abs((this.scroll.current - this.medias[0].bounds.width / 2)) / this.scroll.limit) * (this.medias.length -1) // get the index of the current scroll position - MAthi.floor to get the integer value of each item

    if (this.index !== index) {
      
      this.onChange(index)

    } // prevent to have weird index values

    map(this.medias, (media, index) => {
      media.update(this.scroll.current, this.index)

      media.update()

    })
  }

  /**
   * Destroy
   */
  destroy() {
    this.scene.removeChild(this.group)
  }
}