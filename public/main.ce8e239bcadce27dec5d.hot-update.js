/*! For license information please see main.ce8e239bcadce27dec5d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/About/Gallery.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>h});var i=e("./node_modules/lodash/lodash.js"),r=e("./app/components/Canvas/About/Media.js"),l=e("./node_modules/gsap/index.js"),o=e("./node_modules/ogl/src/core/Transform.js");class h{constructor({element:t,geometry:s,index:e,gl:i,scene:r,sizes:l}){this.element=t,this.elementWrapper=this.element.querySelector(".about__gallery__wrapper"),this.geometry=s,this.index=e,this.gl=i,this.scene=r,this.sizes=l,this.group=new o.Transform,this.scroll={current:0,target:0,start:0,lerp:.1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=(0,i.map)(this.mediasElements,((t,s)=>new r.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(t){this.bounds=this.elementWrapper.getBoundingClientRect(),this.sizes=t.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,(0,i.map)(this.medias,(s=>s.onResize(t,this.scroll.current)))}onTouchDown({x:t,y:s}){this.scroll.start=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.start-e}onTouchUp({x:t,y:s}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=l.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),(0,i.map)(this.medias,((t,s)=>{const e=t.mesh.scale.x/2;if("left"===this.direction){t.mesh.position.x+e<-this.sizes.width/2&&(t.extra+=this.width)}else if("right"===this.direction){t.mesh.position.x-e>this.sizes.width/2&&(t.extra-=this.width)}t.update(this.scroll.current)})))}}}},(function(t){t.h=()=>"95d8dfadb14d35287a86"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9DLFFBQVEsSUFHckMsa0JDdEhGb0MsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9HYWxsZXJ5LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGFzdCwgbWFwIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIlxuaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9nbFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICBcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5lbGVtZW50V3JhcHBlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX2dhbGxlcnlfX3dyYXBwZXInKVxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuICAgIFxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgbGVycDogMC4xLFxuXG4gICAgfVxuICAgIFxuICAgIHRoaXMuY3JlYXRlTWVkaWFzKClcblxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH0gXG5cbiAgY3JlYXRlTWVkaWFzKCkge1xuICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X19nYWxsZXJ5X19tZWRpYScpXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdCBkdSBtZWRpYXNFbGVtZW50c1wiLCB0aGlzLm1lZGlhc0VsZW1lbnRzLCB0aGlzLmVsZW1lbnQpXG5cbiAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXMsXG4gICAgICBcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuLyoqXG4gKiBcbiAgKiBldmVudHNcbiAqL1xuICBvblJlc2l6ZSggZXZlbnQgKSB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnRXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyBnZXQgdGhlIHNpemUgb2YgdGhlIGdhbGxlcnkgZWxlbWVudFxuXG4gICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzO1xuICAgIFxuICAgIHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMDtcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhKSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwuY3VycmVudCkpXG4gICAgfVxuICBcbiAgb25Ub3VjaERvd24gKHsgeCwgeSB9KSB7IFxuICAgIHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgb25Ub3VjaE1vdmUgKHsgeCwgeSB9KSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLnN0YXJ0IC0gZGlzdGFuY2VcbiAgICAvLyBjb25zb2xlLmxvZyhcInRlc3QgZHUgc2Nyb2xsIGN1cnJlbnRcIiwgdGhpcy5zY3JvbGwuY3VycmVudClcbiAgICAvLyBjb25zb2xlLmxvZyhcInRlc3QgZHUgc2Nyb2xsIHRhcmdldFwiLCB0aGlzLnNjcm9sbC50YXJnZXQpXG4gIH1cblxuICBvblRvdWNoVXAgKHsgeCwgeSB9KSB7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlXG4gICAqL1xuICB1cGRhdGUoKSB7XG5cbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXG4gICAgaWYodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0J1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwubGVycCkgXG5cblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuICAgICAgXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG4gICAgICAgIGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSAtPSB0aGlzLndpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gICAgfSlcblxuICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTVkOGRmYWRiMTRkMzUyODdhODZcIikiXSwibmFtZXMiOlsiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiaW5kZXgiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZWxlbWVudFdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0Iiwic3RhcnQiLCJsZXJwIiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwibWFwIiwiTWVkaWEiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWVkaWEiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImRpcmVjdGlvbiIsIkdTQVAiLCJ1dGlscyIsImludGVycG9sYXRlIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==