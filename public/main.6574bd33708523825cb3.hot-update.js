/*! For license information please see main.6574bd33708523825cb3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/About/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./node_modules/gsap/index.js"),n=s("./app/shaders/plane-vertex.glsl"),o=s("./app/shaders/plane-fragment.glsl");class d{constructor({element:e,geometry:t,gl:s,scene:i,index:h,sizes:a}){this.element=e,this.gl=s,this.geometry=t,this.scene=i,this.index=h,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl);const e=this.element.querySelector("img");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=r.default.utils.random(.02*-Math.PI,.02*Math.PI)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}onResize(e,t){this.extra={x:0,y:0},this.createBounds(e),this.updateX(t&&t.x),this.updateY(t&&t.y)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.updateX(e),this.updateY(0))}}}},(function(e){e.h=()=>"c65da5c4650c7b7bdc57"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUzNDLEVBQUtOLEtBQUtELE1BQU00QyxPQUFTLEVBQU0zQyxLQUFLeUIsS0FBS3NCLE1BQU16QyxFQUFJLEVBQU9OLEtBQUtNLEVBQUlOLEtBQUtELE1BQU00QyxPQUFVM0MsS0FBS0ksTUFBTUUsQ0FJeEgsQ0FDQTZDLE1BQUFBLENBQU9ULEdBQ0ExQyxLQUFLb0MsU0FDVnBDLEtBQUt1QyxRQUFRRyxHQUNiMUMsS0FBS3dDLFFBQVEsR0FDZixrQkNoSEZZLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lc2gsIFRleHR1cmUsIFByb2dyYW19IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuXG4vLyBUaGUgTWVkaWEgY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoZSAzRCBvYmplY3RzIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIGNhbnZhc1xuLy8gVGhlIE1lZGlhIGNsYXNzIGlzIGltcG9ydGVkIGluIHRoZSBIb21lIGNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBzY2VuZSwgaW5kZXgsIHNpemVzIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50IFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKClcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG5cbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpXG4gICAgIFxuICAgIFxuICAgIC8vIGdldCB0aGUgaW1hZ2UgZWxlbWVudCBmcm9tIHRoZSBtZWRpYSBlbGVtZW50IHRocm91Z2ggdGhlIGltZyB0YWcgLSBuYiA6IHRoZSBpbWcgdGFnIGlzIHRoZSBjaGlsZCBvZiB0aGUgbWVkaWEgZWxlbWVudCwgYnV0IGluIGFueSBjYXNlIHdlIGdvbm5hIHVzZSB0aGUgXCJmaWd1cmVcIiAoY2YgaW5zcGVjdG9yKSBmcm9tIHdlYkdMXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcbiAgICB0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcbiAgICB0aGlzLmltYWdlLnNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcblxuICB9XG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3JtczogeyAvL3VzZWQgaW4gdGhlIGZyYWdtZW50IHNoYWRlciAocGxhbmUtZnJhZ21lbnQpXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW1cbiAgICB9KVxuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKSAvLyBzZXQgdGhlIHBhcmVudCBvZiB0aGUgbWVzaCB0byB0aGUgc2NlbmVcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMiwgTWF0aC5QSSAqIDAuMDIpOyAvLyBzZXQgdGhlIHJvdGF0aW9uIG9mIHRoZSBtZXNoIG9uIHRoZSB6LWF4aXMgdG8gYSByYW5kb20gdmFsdWUgYmV0d2VlbiAtMC4wMiBhbmQgMC4wMiwgaW4gb3JkZXIgdG8gZ2l2ZSBhIG1vcmUgcmVhbGlzdGljIGxvb2sgdG8gdGhlIDNEIG9iamVjdFxuXG4gIH1cbiAgY3JlYXRlQm91bmRzICh7IHNpemVzIH0pIHtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXMgLy8gdGhpcyBhbGxvdyB0byByZXNpemUgdGhlIG9iamVjdCBkZXBlbmRpbmcgb24gdGhlIHNpemUgb2YgdGhlIHdpbmRvdyBhdm9pZGluZyBzdHJldGNoaW5nIG9yIHNocmlua2luZyB0aGUgb2JqZWN0XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgLy8gZ2V0IHRoZSBzaXplIG9mIHRoZSBlbGVtZW50XG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlIChzaXplcylcbiAgICB0aGlzLnVwZGF0ZVggKClcbiAgICB0aGlzLnVwZGF0ZVkgKClcbiAgICB9XG4gLyoqXG4gICogXG4gICogRXZlbnRzXG4gICovXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbCAmJiBzY3JvbGwueClcbiAgICB0aGlzLnVwZGF0ZVkoc2Nyb2xsICYmIHNjcm9sbC55KVxuICB9XG4vKipcbiAqIFVwZGF0ZSBsb29wXG4gKi9cbiAgdXBkYXRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuXG4gICAvLyBjb25zb2xlLmxvZyhcInRlc3QgZHUgc2NhbGVcIiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gIH1cbiAgXG4gIHVwZGF0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9ICgtdGhpcy5zaXplcy53aWR0aCAvIDIgKSsgKHRoaXMubWVzaC5zY2FsZS54IC8gMikgKyAodGhpcy54ICogdGhpcy5zaXplcy53aWR0aCkgKyB0aGlzLmV4dHJhLnhcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInRlc3QgZHUgbWVzaCBwb3NpdGlvbiB4XCIsIHRoaXMubWVzaC5wb3NpdGlvbi54KVxuICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdCBkdSB4XCIsIHRoaXMueClcbiAgfVxuICBcbiAgdXBkYXRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID0gKHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMikgLSAodGhpcy5tZXNoLnNjYWxlLnkgLyAyKSAtICAodGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQpICsgdGhpcy5leHRyYS55XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcInRlc3QgZHUgbWVzaCBwb3NpdGlvbiB5XCIsIHRoaXMubWVzaC5wb3NpdGlvbi55KVxuICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdCBkdSB5XCIsIHRoaXMueSlcbiAgfVxuICB1cGRhdGUoc2Nyb2xsKSAge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG4gIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM2NWRhNWM0NjUwYzdiN2JkYzU3XCIpIl0sIm5hbWVzIjpbIk1lZGlhIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsInNjZW5lIiwiaW5kZXgiLCJzaXplcyIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJleHRyYSIsIngiLCJ5IiwidGV4dHVyZSIsIlRleHR1cmUiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50Iiwicm90YXRpb24iLCJ6IiwiR1NBUCIsInV0aWxzIiwicmFuZG9tIiwiTWF0aCIsIlBJIiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsIm9uUmVzaXplIiwic2Nyb2xsIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==