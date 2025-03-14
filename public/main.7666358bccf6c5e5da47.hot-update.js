/*! For license information please see main.7666358bccf6c5e5da47.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var o=t("./node_modules/ogl/src/extras/Plane.js"),i=t("./node_modules/ogl/src/core/Program.js"),a=t("./node_modules/ogl/src/core/Mesh.js"),l=t("./node_modules/gsap/index.js"),h=t("./app/shaders/plane-vertex.glsl"),n=t("./app/shaders/plane-fragment.glsl");const r=class{constructor({gl:e,scene:s,sizes:t,url:i,collections:a}){this.collections=a,this.gl=e,this.geometry=new o.Plane(this.gl),this.scene=s,this.sizes=t,this.url=i}createProgram(e){this.program=new i.Program(this.gl,{fragment:n.default,vertex:h.default,uniforms:{uAlpha:{value:1},tMap:{value:e}}})}createMesh(e){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=e.scale.x,this.mesh.scale.y=e.scale.y,this.mesh.scale.z=e.scale.z,this.mesh.position.x=e.position.x+.01,this.mesh.position.y=e.position.y+.01,this.mesh.position.z=e.position.z+.01,this.mesh.setParent(this.scene)}setElement(e){if(console.log(e.id),"collections"===e.id){const{index:s,medias:t}=e,o=t[s];console.log(o),this.createProgram(o.texture),this.createMesh(o.mesh)}else this.createProgram(e.texture),this.createMesh(e);this.createMesh()}animate(e,s,t){"detail"===this.transition&&(l.default.to(this.mesh.scale,{duration:1.5,ease:"expo.inOut",x:e.mesh.scale.x,y:e.mesh.scale.y,z:e.mesh.scale.z}),l.default.to(this.mesh.position,{duration:1.5,ease:"expo.inOut",onComplete:s,x:e.mesh.position.x,y:e.mesh.position.y,z:e.mesh.position.z}))}}}},(function(e){e.h=()=>"27e2a2f54f1d293f4073"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NjY2MzU4YmNjZjZjNWU1ZGE0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Z1lBT0EsY0FDRUEsV0FBQUEsRUFBWSxHQUFFQyxFQUFFLE1BQUVDLEVBQUssTUFBRUMsRUFBSyxJQUFFQyxFQUFHLFlBQUVDLElBQ25DQyxLQUFLRCxZQUFjQSxFQUNuQkMsS0FBS0wsR0FBS0EsRUFDVkssS0FBS0MsU0FBVyxJQUFJQyxFQUFBQSxNQUFNRixLQUFLTCxJQUMvQkssS0FBS0osTUFBUUEsRUFDYkksS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0YsSUFBTUEsQ0FHYixDQUdBSyxhQUFBQSxDQUFjQyxHQUNaSixLQUFLSyxRQUFVLElBQUlDLEVBQUFBLFFBQVFOLEtBQUtMLEdBQUksQ0FDbENZLFNBQVEsVUFDUkMsT0FBTSxVQUNOQyxTQUFVLENBQ1JDLE9BQVEsQ0FBRUMsTUFBTyxHQUNqQkMsS0FBTSxDQUFFRCxNQUFPUCxLQUdyQixDQUVBUyxVQUFBQSxDQUFXQyxHQUNUZCxLQUFLYyxLQUFPLElBQUlDLEVBQUFBLEtBQUtmLEtBQUtMLEdBQUksQ0FDNUJNLFNBQVVELEtBQUtDLFNBQ2ZJLFFBQVNMLEtBQUtLLFVBRWhCTCxLQUFLYyxLQUFLRSxNQUFNQyxFQUFJSCxFQUFLRSxNQUFNQyxFQUMvQmpCLEtBQUtjLEtBQUtFLE1BQU1FLEVBQUlKLEVBQUtFLE1BQU1FLEVBQy9CbEIsS0FBS2MsS0FBS0UsTUFBTUcsRUFBSUwsRUFBS0UsTUFBTUcsRUFFL0JuQixLQUFLYyxLQUFLTSxTQUFTSCxFQUFJSCxFQUFLTSxTQUFTSCxFQUFJLElBQ3pDakIsS0FBS2MsS0FBS00sU0FBU0YsRUFBSUosRUFBS00sU0FBU0YsRUFBSSxJQUN6Q2xCLEtBQUtjLEtBQUtNLFNBQVNELEVBQUlMLEVBQUtNLFNBQVNELEVBQUksSUFFekNuQixLQUFLYyxLQUFLTyxVQUFVckIsS0FBS0osTUFFM0IsQ0FJQTBCLFVBQUFBLENBQVdDLEdBRVQsR0FEQUMsUUFBUUMsSUFBSUYsRUFBUUcsSUFDRCxnQkFBZkgsRUFBUUcsR0FBc0IsQ0FFaEMsTUFBTSxNQUFFQyxFQUFLLE9BQUVDLEdBQVdMLEVBQ3BCTSxFQUFRRCxFQUFPRCxHQUVyQkgsUUFBUUMsSUFBSUksR0FFWjdCLEtBQUtHLGNBQWMwQixFQUFNekIsU0FDekJKLEtBQUthLFdBQVdnQixFQUFNZixLQUN4QixNQUVFZCxLQUFLRyxjQUFjb0IsRUFBUW5CLFNBQzNCSixLQUFLYSxXQUFXVSxHQUtsQnZCLEtBQUthLFlBQ1AsQ0FNRWlCLE9BQUFBLENBQVNQLEVBQVNRLEVBQVlDLEdBQ0osV0FBcEJoQyxLQUFLaUMsYUFFUEMsRUFBQUEsUUFBS0MsR0FBR25DLEtBQUtjLEtBQUtFLE1BQU8sQ0FDdkJvQixTQUFVLElBQ1ZDLEtBQU8sYUFDUHBCLEVBQUdNLEVBQVFULEtBQUtFLE1BQU1DLEVBQ3RCQyxFQUFHSyxFQUFRVCxLQUFLRSxNQUFNRSxFQUN0QkMsRUFBR0ksRUFBUVQsS0FBS0UsTUFBTUcsSUFHMUJlLEVBQUFBLFFBQUtDLEdBQUduQyxLQUFLYyxLQUFLTSxTQUFVLENBQzFCZ0IsU0FBVSxJQUNWQyxLQUFPLGFBQ1BOLGFBQ0FkLEVBQUdNLEVBQVFULEtBQUtNLFNBQVNILEVBQ3pCQyxFQUFHSyxFQUFRVCxLQUFLTSxTQUFTRixFQUN6QkMsRUFBR0ksRUFBUVQsS0FBS00sU0FBU0QsSUFHL0Isa0JDaEdGbUIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9UcmFuc2l0aW9uLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZXNoLCBQbGFuZSwgUHJvZ3JhbX0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5cbi8vIFRoZSBNZWRpYSBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIDNEIG9iamVjdHMgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgY2FudmFzXG4vLyBUaGUgTWVkaWEgY2xhc3MgaXMgaW1wb3J0ZWQgaW4gdGhlIEhvbWUgY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB1cmwsIGNvbGxlY3Rpb25zIH0pIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25zID0gY29sbGVjdGlvbnMgXG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMudXJsID0gdXJsIFxuXG5cbiAgfVxuXG5cbiAgY3JlYXRlUHJvZ3JhbSh0ZXh0dXJlKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3JtczogeyAvL3VzZWQgaW4gdGhlIGZyYWdtZW50IHNoYWRlciAocGxhbmUtZnJhZ21lbnQpXG4gICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMSB9LFxuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0ZXh0dXJlIH0sXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2gobWVzaCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgfSlcbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IG1lc2guc2NhbGUueFxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gbWVzaC5zY2FsZS55XG4gICAgdGhpcy5tZXNoLnNjYWxlLnogPSBtZXNoLnNjYWxlLnpcblxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gbWVzaC5wb3NpdGlvbi54ICsgMC4wMVxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID0gbWVzaC5wb3NpdGlvbi55ICsgMC4wMVxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi56ID0gbWVzaC5wb3NpdGlvbi56ICsgMC4wMVxuICAgIFxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSkgLy8gc2V0IHRoZSBwYXJlbnQgb2YgdGhlIG1lc2ggdG8gdGhlIHNjZW5lXG5cbiAgfVxuICAvKipcbiAgICogRWxlbWVudFxuICAgKi9cbiAgc2V0RWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc29sZS5sb2coZWxlbWVudC5pZClcbiAgICBpZiAoZWxlbWVudC5pZCA9PT0gJ2NvbGxlY3Rpb25zJykge1xuXG4gICAgICBjb25zdCB7IGluZGV4LCBtZWRpYXMgfSA9IGVsZW1lbnRcbiAgICAgIGNvbnN0IG1lZGlhID0gbWVkaWFzW2luZGV4XVxuXG4gICAgICBjb25zb2xlLmxvZyhtZWRpYSlcblxuICAgICAgdGhpcy5jcmVhdGVQcm9ncmFtKG1lZGlhLnRleHR1cmUpXG4gICAgICB0aGlzLmNyZWF0ZU1lc2gobWVkaWEubWVzaClcbiAgICB9IGVsc2Uge1xuICAgICBcbiAgICAgIHRoaXMuY3JlYXRlUHJvZ3JhbShlbGVtZW50LnRleHR1cmUpXG4gICAgICB0aGlzLmNyZWF0ZU1lc2goZWxlbWVudClcblxuXG5cbiAgICB9ICAgXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgfVxuXG4gIFxuICAgLyoqXG4gICAgKiBBbmltYXRpb25zXG4gICAgKi9cbiAgICBhbmltYXRlIChlbGVtZW50LCBvbkNvbXBsZXRlLCBmbGFnKSB7XG4gICAgICBpZiAodGhpcy50cmFuc2l0aW9uID09PSAnZGV0YWlsJykge1xuICBcbiAgICAgICAgR1NBUC50byh0aGlzLm1lc2guc2NhbGUsIHtcbiAgICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICAgIGVhc2UgOiAnZXhwby5pbk91dCcsXG4gICAgICAgICAgeDogZWxlbWVudC5tZXNoLnNjYWxlLngsXG4gICAgICAgICAgeTogZWxlbWVudC5tZXNoLnNjYWxlLnksXG4gICAgICAgICAgejogZWxlbWVudC5tZXNoLnNjYWxlLnosXG4gICAgICAgIH0pXG4gICAgICBcbiAgICAgIEdTQVAudG8odGhpcy5tZXNoLnBvc2l0aW9uLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGVhc2UgOiAnZXhwby5pbk91dCcsXG4gICAgICAgIG9uQ29tcGxldGUsXG4gICAgICAgIHg6IGVsZW1lbnQubWVzaC5wb3NpdGlvbi54LFxuICAgICAgICB5OiBlbGVtZW50Lm1lc2gucG9zaXRpb24ueSxcbiAgICAgICAgejogZWxlbWVudC5tZXNoLnBvc2l0aW9uLnosXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI3ZTJhMmY1NGYxZDI5M2Y0MDczXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidXJsIiwiY29sbGVjdGlvbnMiLCJ0aGlzIiwiZ2VvbWV0cnkiLCJQbGFuZSIsImNyZWF0ZVByb2dyYW0iLCJ0ZXh0dXJlIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwiY3JlYXRlTWVzaCIsIm1lc2giLCJNZXNoIiwic2NhbGUiLCJ4IiwieSIsInoiLCJwb3NpdGlvbiIsInNldFBhcmVudCIsInNldEVsZW1lbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImlkIiwiaW5kZXgiLCJtZWRpYXMiLCJtZWRpYSIsImFuaW1hdGUiLCJvbkNvbXBsZXRlIiwiZmxhZyIsInRyYW5zaXRpb24iLCJHU0FQIiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=