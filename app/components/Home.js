import Media from './Media'
import map from 'lodash/map'
import { Plane, Transform } from 'ogl'
import { lerp } from 'utils/math'
import GSAP from 'gsap'

export default class Home {
  constructor({ gl, scene, sizes }) {
    this.gl = gl
    this.sizes = sizes
    this.group = new Transform()

    this.mediaElements = document.querySelectorAll('.home__gallery__media__image')

    this.createGeometry()
    this.createGallery()

    this.group.setParent(scene)

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
   * 
   * events
   */
  onResize( event ) {
    map(this.medias, media => media.onResize( event ))
  }
  onTouchDown (x, y) { 
    this.scrollCurrent.x = this.scroll.x
    this.scrollCurrent.y = this.scroll.y
  }
  onTouchMove (x, y) {
    const xDistance = x.start - x.end
    const yDistance = y.start - y.end

    this.x.target = this.scrollCurrent.x - xDistance
    this.y.target = this.scrollCurrent.y - yDistance

    console.log(this.x.target, this.y.target)

  }
  onTouchUp (x, y) {

  }

  /**
   * Update
   */
  update() {
    this.scroll.current = GSAP.utils.interpolate(this.x.current, this.x.target, this.x.lerp) 
    this.scroll.current = GSAP.utils.interpolate(this.y.current, this.y.target, this.y.lerp) 

    this.scroll.x = this.x.current
    this.scroll.y = this.y.current

    map(this.medias, media => {
      media.update(this.scroll)
    })
  }
}