/*! For license information please see main.8de5b8139afb05683b37.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var i=s("./node_modules/ogl/src/core/Renderer.js"),o=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/Index.js"),c=s("./app/components/Canvas/About/Index.js"),l=s("./app/components/Canvas/Collections/Index.js"),a=s("./app/components/Canvas/Transition.js"),r=s("./app/components/Canvas/Detail/Index.js"),d=s.n(r);class u{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createCamera(),this.createRenderer(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createCollections(){this.collections=new l.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createDetail(){this.detail=new(d())({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyDetail(){this.detail&&(this.detail.destroy(),this.detail=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(e,t){this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.home&&this.home.hide(),this.isFromCollectionsToDetail="collections"===this.template&&t.indexOf("detail")>-1,this.isFromDetailToCollections="detail"===this.template&&t.indexOf("collections")>-1,(this.isFromCollectionsToDetail||this.isFromDetailToCollections)&&(this.transition=new a.default({collections:this.collections,gl:this.gl,scene:this.scene,sizes:this.sizes,url:t}))}onChangeEnd(e){"about"===e?this.createAbout():this.about&&this.destroyAbout(),"collections"===e?this.createCollections():this.collections&&this.destroyCollections(),"detail"===e?this.createDetail():this.detail&&this.destroyDetail(),"home"===e?this.createHome():this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const i={sizes:this.sizes};this.about&&this.about.onResize(i),this.collections&&this.collections.onResize(i),this.home&&this.home.onResize(i)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.about&&this.about.onTouchDown(t),this.collections&&this.collections.onTouchDown(t),this.detail&&this.detail.onTouchDown(t),this.home&&this.home.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.about&&this.about.onTouchMove(i),this.collections&&this.collections.onTouchMove(i),this.detail&&this.detail.onTouchMove(i),this.home&&this.home.onTouchMove(i)}onTouchUp(e){this.isDown=!1;const t=e.changedTouches?e.changedTouches[0].clientX:e.clientX,s=e.changedTouches?e.changedTouches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.about&&this.about.onTouchUp(i),this.collections&&this.collections.onTouchUp(i),this.detail&&this.detail.onTouchUp(i),this.home&&this.home.onTouchUp(i)}onWheel(e){this.collections&&this.collections.onWheel(e),this.home&&this.home.onWheel(e)}update(e){this.collections&&this.collections.update(),this.about&&this.about.update(e),this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"1981d86ce049b3cecfe0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S2dDLGFBQ05oQyxLQUFLZ0MsWUFBWXlDLFVBQVVSLEdBRzFCakUsS0FBS3dDLFFBQ054QyxLQUFLd0MsT0FBT2lDLFVBQVVSLEdBR3JCakUsS0FBSzBCLE1BQ04xQixLQUFLMEIsS0FBSytDLFVBQVVSLEVBRXhCLENBRUFVLE9BQUFBLENBQVFSLEdBQ0huRSxLQUFLZ0MsYUFDTmhDLEtBQUtnQyxZQUFZMkMsUUFBUVIsR0FHeEJuRSxLQUFLMEIsTUFDTjFCLEtBQUswQixLQUFLaUQsUUFBUVIsRUFFdEIsQ0FJQVMsTUFBQUEsQ0FBT0MsR0FDRDdFLEtBQUtnQyxhQUNQaEMsS0FBS2dDLFlBQVk0QyxTQUVmNUUsS0FBS29DLE9BQ1BwQyxLQUFLb0MsTUFBTXdDLE9BQU9DLEdBRWpCN0UsS0FBSzBCLE1BQ04xQixLQUFLMEIsS0FBS2tELFNBRVo1RSxLQUFLVSxTQUFTb0UsT0FBTyxDQUNuQjNELE9BQVFuQixLQUFLbUIsT0FDYkksTUFBT3ZCLEtBQUt1QixPQUVoQixrQkN2VUZ3RCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJyAgXG5cbmltcG9ydCBIb21lIGZyb20gJ2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvSW5kZXgnXG5pbXBvcnQgQWJvdXQgZnJvbSAnY29tcG9uZW50cy9DYW52YXMvQWJvdXQvSW5kZXgnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnY29tcG9uZW50cy9DYW52YXMvQ29sbGVjdGlvbnMvSW5kZXgnXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdjb21wb25lbnRzL0NhbnZhcy9UcmFuc2l0aW9uJ1xuaW1wb3J0IERldGFpbCBmcm9tICdjb21wb25lbnRzL0NhbnZhcy9EZXRhaWwvSW5kZXgnXG4vLyBDYW1lcmEsIFJlbmRlcmVyIGFuZCBUcmFuc2Zvcm0gYXJlIHRoZSB0aHJlZSBlbGVtZW50cyBuZWVkZWQgdG8gY3JlYXRlIGEgM0Qgc2NlbmUgLVxuLy8gQm94LCBQcm9ncmFtIGFuZCBNZXNoIGFyZSB0aGUgdGhyZWUgZWxlbWVudHMgbmVlZGVkIHRvIGNyZWF0ZSBhIDNEIG9iamVjdFxuLy8gYWxsIHRoZSBlbGVtZW50cyBhcmUgaW1wb3J0ZWQgZnJvbSB0aGUgb2dsIGxpYnJhcnlcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvciAoeyB0ZW1wbGF0ZSB9KSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgdGhpcy54ID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGVuZDogMCxcbiAgICB9XG4gICAgdGhpcy55ID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGVuZDogMCxcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gIH1cblxuICBjcmVhdGVSZW5kZXJlcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHsgLy8gaXQgYWxsb3dzXG4gICAgICBhbHBoYTogdHJ1ZSwgLy8gbWFrZSBvdXIgY2FudmFzIHRyYW5zcGFyZW50XG4gICAgICBhbnRpYWxpYXM6IHRydWUsIC8vIG1ha2Ugb3VyIGNhbnZhcyBzbW9vdGhcbiAgICB9KVxuXG4gICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG4gIH1cblxuICBjcmVhdGVDYW1lcmEoKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDUgLy8gc2V0IHRoZSBjYW1lcmEgcG9zaXRpb24gb24gdGhlIHotYXhpcyB0byA1XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpIHtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG4gIH1cbiAgLyoqXG4gICAqIEhvbWVcbiAgKi9cbiBjcmVhdGVIb21lKCkge1xuICAgdGhpcy5ob21lID0gbmV3IEhvbWUoe1xuICAgICBnbDogdGhpcy5nbCxcbiAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICB9KVxuIH1cbiBcbiAgZGVzdHJveUhvbWUoKSB7XG4gICAgaWYgKCF0aGlzLmhvbWUpIHJldHVyblxuICAgIHRoaXMuaG9tZS5kZXN0cm95KClcbiAgICB0aGlzLmhvbWUgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICogQWJvdXRcbiAgICovXG4gIGNyZWF0ZUNvbGxlY3Rpb25zKCkge1xuICAgIHRoaXMuY29sbGVjdGlvbnMgPSBuZXcgQ29sbGVjdGlvbnMoe1xuICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSlcbiAgfVxuICBkZXN0cm95Q29sbGVjdGlvbnMoKSB7XG4gICAgaWYgKCF0aGlzLmNvbGxlY3Rpb25zKSByZXR1cm5cbiAgICB0aGlzLmNvbGxlY3Rpb25zLmRlc3Ryb3koKVxuICAgIHRoaXMuY29sbGVjdGlvbnMgPSBudWxsXG4gIH1cblxuICAgIC8qKlxuICAgKiBDb2xsZWN0aW9uc1xuICAgKi9cbiAgICBjcmVhdGVBYm91dCgpIHtcbiAgICAgIHRoaXMuYWJvdXQgPSBuZXcgQWJvdXQoe1xuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICB9KVxuICAgIH1cbiAgICBkZXN0cm95QWJvdXQoKSB7XG4gICAgICBpZiAoIXRoaXMuYWJvdXQpIHJldHVyblxuICAgICAgdGhpcy5hYm91dC5kZXN0cm95KClcbiAgICAgIHRoaXMuYWJvdXQgPSBudWxsXG4gICAgfVxuICAvKipcbiAgICogRGV0YWlsXG4gICAqL1xuICBjcmVhdGVEZXRhaWwoKSB7XG4gICAgdGhpcy5kZXRhaWwgPSBuZXcgRGV0YWlsKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIH0pXG4gIH1cbiAgZGVzdHJveURldGFpbCgpIHtcbiAgICBpZiAoIXRoaXMuZGV0YWlsKSByZXR1cm5cbiAgICB0aGlzLmRldGFpbC5kZXN0cm95KClcbiAgICB0aGlzLmRldGFpbCA9IG51bGxcbiAgfVxuLyoqXG4gKiBFdmVudHNcbiAqL1xub25QcmVsb2FkZWQoKSB7XG4gIHRoaXMub25DaGFuZ2VFbmQodGhpcy50ZW1wbGF0ZSlcbn1cblxuICBvbkNoYW5nZVN0YXJ0KHRlbXBsYXRlLCB1cmwpIHtcbiAgICBpZiAodGhpcy5hYm91dCkge1xuICAgICAgdGhpcy5hYm91dC5oaWRlKClcbiAgICB9IFxuXG4gICAgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcbiAgICAgIHRoaXMuY29sbGVjdGlvbnMuaGlkZSgpXG4gICAgfSBcblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5oaWRlKClcbiAgICB9XG5cbiAgICB0aGlzLmlzRnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwgPSB0aGlzLnRlbXBsYXRlID09PSAnY29sbGVjdGlvbnMnICYmIHVybC5pbmRleE9mKCdkZXRhaWwnKSA+IC0xXG4gICAgdGhpcy5pc0Zyb21EZXRhaWxUb0NvbGxlY3Rpb25zID0gdGhpcy50ZW1wbGF0ZSA9PT0gJ2RldGFpbCcgJiYgdXJsLmluZGV4T2YoJ2NvbGxlY3Rpb25zJykgPiAtMVxuXG4gICAgaWYgKHRoaXMuaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCB8fCB0aGlzLmlzRnJvbURldGFpbFRvQ29sbGVjdGlvbnMpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHtcbiAgICAgICAgY29sbGVjdGlvbnMgOiB0aGlzLmNvbGxlY3Rpb25zLFxuICAgICAgICBnbCA6IHRoaXMuZ2wsXG4gICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLCBcbiAgICAgICAgc2l6ZXMgOiB0aGlzLnNpemVzLFxuICAgICAgICB1cmwsXG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cbiAgb25DaGFuZ2VFbmQodGVtcGxhdGUpIHtcbiAgICBpZiAodGVtcGxhdGUgPT09ICdhYm91dCcpIHtcbiAgICAgIHRoaXMuY3JlYXRlQWJvdXQoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5hYm91dCkge1xuICAgICAgdGhpcy5kZXN0cm95QWJvdXQoKVxuICAgIH1cblxuICAgIGlmICh0ZW1wbGF0ZSA9PT0gJ2NvbGxlY3Rpb25zJykge1xuICAgICAgdGhpcy5jcmVhdGVDb2xsZWN0aW9ucygpXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcbiAgICAgIHRoaXMuZGVzdHJveUNvbGxlY3Rpb25zKClcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlID09PSAnZGV0YWlsJykge1xuICAgICAgdGhpcy5jcmVhdGVEZXRhaWwoKVxuXG4gICAgfSBlbHNlIGlmICh0aGlzLmRldGFpbCkge1xuICAgICAgdGhpcy5kZXN0cm95RGV0YWlsKClcbiAgICB9XG5cbiAgICBpZiAodGVtcGxhdGUgPT09ICdob21lJykge1xuICAgICAgdGhpcy5jcmVhdGVIb21lKClcbiAgICB9IGVsc2UgIHtcbiAgICAgIHRoaXMuZGVzdHJveUhvbWUoKVxuICAgIH1cblxuICB9XG5cblxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuICAgIFxuICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcbiAgICAgIGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9KTtcbiAgICBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcbiAgICBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG4gICAgY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuICAgIHRoaXMuc2l6ZXMgPSB7XG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aFxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfVxuXG4gIGlmICh0aGlzLmFib3V0KSB7XG4gICAgdGhpcy5hYm91dC5vblJlc2l6ZSh2YWx1ZXMpXG4gIH1cblxuICBpZiAodGhpcy5jb2xsZWN0aW9ucykge1xuICAgIHRoaXMuY29sbGVjdGlvbnMub25SZXNpemUodmFsdWVzKVxuICB9XG5cbiAgaWYgKHRoaXMuaG9tZSkge1xuICAgIHRoaXMuaG9tZS5vblJlc2l6ZSh2YWx1ZXMpXG4gIH1cblxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWVcbiAgICB0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgfVxuXG4gICAgaWYodGhpcy5hYm91dCkge1xuICAgICAgdGhpcy5hYm91dC5vblRvdWNoRG93bih2YWx1ZXMpXG4gICAgfVxuICAgIGlmKHRoaXMuY29sbGVjdGlvbnMpIHtcbiAgICAgIHRoaXMuY29sbGVjdGlvbnMub25Ub3VjaERvd24odmFsdWVzKVxuICAgIH1cbiAgICBpZih0aGlzLmRldGFpbCkge1xuICAgICAgdGhpcy5kZXRhaWwub25Ub3VjaERvd24odmFsdWVzKVxuICAgIH1cbiAgIFxuICAgIGlmKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uVG91Y2hEb3duKHZhbHVlcylcbiAgICB9XG4gIH1cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHsgLy8gYWxsb3dzIHRvIG1vdmUgdGhlIHdlYiBHTCBwYWdlIHdpdGggdGhlIG1vdXNlXG4gICAgaWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICBjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIHRoaXMueC5lbmQgPSB4XG4gICAgdGhpcy55LmVuZCA9IHlcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICB9XG5cbiAgICBpZih0aGlzLmFib3V0KSB7XG4gICAgICB0aGlzLmFib3V0Lm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbGxlY3Rpb25zKSB7XG4gICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICB9XG5cbiAgICBpZih0aGlzLmRldGFpbCkge1xuICAgICAgdGhpcy5kZXRhaWwub25Ub3VjaE1vdmUodmFsdWVzKVxuICAgIH1cbiAgIFxuICAgIGlmKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICB9XG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gICAgY29uc3QgeCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9IHhcbiAgICB0aGlzLnkuZW5kID0geVxuXG4gICAgLy8gdGhpcy54LmRpc3RhbmNlID0gdGhpcy54LnN0YXJ0IC0gdGhpcy54LmVuZFxuICAgIC8vIHRoaXMueS5kaXN0YW5jZSA9IHRoaXMueS5zdGFydCAtIHRoaXMueS5lbmRcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICB9XG5cbiAgICBpZih0aGlzLmFib3V0KSB7XG4gICAgICB0aGlzLmFib3V0Lm9uVG91Y2hVcCh2YWx1ZXMpXG4gICAgfVxuXG4gICAgaWYodGhpcy5jb2xsZWN0aW9ucykge1xuICAgICAgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoVXAodmFsdWVzKVxuICAgIH1cbiAgXG4gICAgaWYodGhpcy5kZXRhaWwpIHtcbiAgICAgIHRoaXMuZGV0YWlsLm9uVG91Y2hVcCh2YWx1ZXMpXG4gICAgfVxuICBcbiAgICBpZih0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoVXAodmFsdWVzKVxuICAgIH1cbiAgfSBcblxuICBvbldoZWVsKGV2ZW50KSB7XG4gICAgaWYodGhpcy5jb2xsZWN0aW9ucykge1xuICAgICAgdGhpcy5jb2xsZWN0aW9ucy5vbldoZWVsKGV2ZW50KSBcbiAgICB9XG5cbiAgICBpZih0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vbldoZWVsKGV2ZW50KSBcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIExvb3BzXG4gICAqL1xuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcbiAgICAgIHRoaXMuY29sbGVjdGlvbnMudXBkYXRlKClcbiAgICB9XG4gICAgaWYgKHRoaXMuYWJvdXQpIHtcbiAgICAgIHRoaXMuYWJvdXQudXBkYXRlKHNjcm9sbClcbiAgICB9XG4gICAgaWYodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUudXBkYXRlKClcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYSxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgIH0pXG4gIH1cbn1cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxOTgxZDg2Y2UwNDliM2NlY2ZlMFwiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwidGhpcyIsIngiLCJzdGFydCIsImRpc3RhbmNlIiwiZW5kIiwieSIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsIlRyYW5zZm9ybSIsImNyZWF0ZUhvbWUiLCJob21lIiwiSG9tZSIsInNpemVzIiwiZGVzdHJveUhvbWUiLCJkZXN0cm95IiwiY3JlYXRlQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGVzdHJveUNvbGxlY3Rpb25zIiwiY3JlYXRlQWJvdXQiLCJhYm91dCIsIkFib3V0IiwiZGVzdHJveUFib3V0IiwiY3JlYXRlRGV0YWlsIiwiZGV0YWlsIiwiRGV0YWlsIiwiZGVzdHJveURldGFpbCIsIm9uUHJlbG9hZGVkIiwib25DaGFuZ2VFbmQiLCJvbkNoYW5nZVN0YXJ0IiwidXJsIiwiaGlkZSIsImlzRnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwiLCJpbmRleE9mIiwiaXNGcm9tRGV0YWlsVG9Db2xsZWN0aW9ucyIsInRyYW5zaXRpb24iLCJUcmFuc2l0aW9uIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJ2YWx1ZXMiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJjaGFuZ2VkVG91Y2hlcyIsIm9uV2hlZWwiLCJ1cGRhdGUiLCJzY3JvbGwiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=