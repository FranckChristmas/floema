/*! For license information please see main.eb8ecf3868e73ddeec09.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,n)=>{n.r(t);var s=n("./node_modules/normalize-wheel/index.js"),a=n.n(s),i=n("./node_modules/lodash/each.js"),o=n.n(i),h=n("./app/components/Canvas/Index.js"),d=n("./app/components/preloader.js"),c=n("./app/pages/About/Index.js"),r=n("./app/pages/Collections/Index.js"),p=n("./app/pages/Detail/Index.js"),l=n("./app/pages/Home/Index.js"),u=n("./app/components/Navigation.js");class v{constructor(){this.createContent(),this.createCanvas(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.onResize(),this.update()}createNavigation(){this.navigation=new u.default({template:this.template})}createPreloader(){this.preloader=new d.default({canvas:this.canvas}),this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new h.default({template:this.template})}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new c.default,collections:new r.default,home:new l.default,detail:new p.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.onResize(),this.canvas.onPreloaded(),this.page.show()}async onChange(e){this.canvas.onChangeStart(this.template),await this.page.hide();const t=await window.fetch(e);if(200===t.status){const n=await t.text(),s=document.createElement("div");window.history.pushState({},"",e),s.innerHTML=n;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.canvas.onChangeEnd(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else console.log("errrrrrrrror")}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=a()(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),this.frame=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");o()(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}}document.addEventListener("DOMContentLoaded",(()=>{new v}))}},(function(e){e.h=()=>"2db067380e460a4e0b38"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUVDLEdBQVNILEVBQ2Z2RSxLQUFLb0MsU0FBU3NDLEVBQUssQ0FDdEIsR0FFTCxFQUVGckQsU0FBUzhDLGlCQUFpQixvQkFBb0IsS0FDOUMsSUFBSXJFLENBQUssbUJDNU1UNkUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNjcmlwdChzcmM9XCIvbWFpbi5qc1wiKVxuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gJ25vcm1hbGl6ZS13aGVlbCdcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJyAvLy0gbGlicmFyeSB0byB1c2UgZWFjaCBpbnN0ZWFkIG9mIGZvckVhY2ggbWV0aG9kLCB3aGljaCBpc24ndCBhdmFpbGFibGUgaW4gTm9kZS5qc1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NvbXBvbmVudHMvQ2FudmFzL0luZGV4J1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvcHJlbG9hZGVyJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvQWJvdXQvSW5kZXgnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnLi9wYWdlcy9Db2xsZWN0aW9ucy9JbmRleCdcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi9wYWdlcy9EZXRhaWwvSW5kZXgnXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUvSW5kZXgnXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpXG4gICAgdGhpcy5jcmVhdGVDYW52YXMoKVxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcbiAgICB0aGlzLmNyZWF0ZU5hdmlnYXRpb24oKVxuICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCkgLy8gcm91dGluZyB0aGUgcGFnZXNcblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY3JlYXRlTmF2aWdhdGlvbigpIHtcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbih7XG4gICAgICB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVByZWxvYWRlciAoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKHtjYW52YXMgOiB0aGlzLmNhbnZhc30pXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxuXG4gIH1cblxuICBjcmVhdGVDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHtcbiAgICAgIHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLFxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVDb250ZW50ICgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuICB9XG5cbiAgY3JlYXRlUGFnZXMgKCkgIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxuICAgIH1cblxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgfVxuXG4gIC8qKipcbiAgICogRXZlbnRzXG4gICAqL1xuICBvblByZWxvYWRlZCgpIHtcbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIHRoaXMuY2FudmFzLm9uUHJlbG9hZGVkKClcbiAgICAgICAgXG4gICAgdGhpcy5wYWdlLnNob3coKVxuXG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSh1cmwpIHtcbiAgICB0aGlzLmNhbnZhcy5vbkNoYW5nZVN0YXJ0KHRoaXMudGVtcGxhdGUpXG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKSAvL2hpZGUgdGhlIGN1cnJlbnQgcGFnZVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpIC8vLSBmZXRjaCB0aGUgbmV3IHBhZ2UgaGVyZSAtIGFzeW5jL2F3YWl0IGFsbG93IGFzeW5jaHJvbmVzIHJlcXVlc3RzIGZvcnYgZmV0Y2hpbmcgZGF0YVxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcbiAgICAgIGNvbnN0IGRpdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKSAvLyB0byB1cGRhdGUgdGhlIHVybCBvZiB0aGUgcGFnZVxuXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFxuXG4gICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJykgLy8gd2l0aCB0aGlzIGxpbmUsIHdlIGNhbiBnZXQgdGhlIHRlbXBsYXRlIG9mIHRoZSBuZXcgcGFnZVxuICAgICAgXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNhbnZhczpcIiwgdGhpcy5jYW52YXMpO1xuXG4gICAgICBcbiAgICAgIHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuICAgICAgXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSkgLy8gd2l0aCB0aGlzIGxpbmUsIHdlIGNhbiBzZXQgdGhlIHRlbXBsYXRlIG9mIHRoZSBuZXcgcGFnZVxuICAgICAgXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUwgIFxuICAgICAgXG4gICAgICB0aGlzLmNhbnZhcy5vbkNoYW5nZUVuZCh0aGlzLnRlbXBsYXRlKVxuICAgICAgXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgICBcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgXG4gICAgICB0aGlzLm9uUmVzaXplKClcbiAgICAgIFxuICAgICAgdGhpcy5wYWdlLnNob3coKVxuICAgICAgXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2VycnJycnJycnJvcicpXG4gIH1cbn1cblxub25SZXNpemUoKSB7XG4gIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7IC8vIHRvIGV4cGxhaW4gOiBpZiB0aGUgcGFnZSBleGlzdHMgYW5kIHRoZSBtZXRob2Qgb25SZXNpemUgb2YgdGhlIHBhZ2UgZXhpc3RzLCB0aGVuIGV4ZWN1dGUgdGhlIG1ldGhvZCBvblJlc2l6ZSBvZiB0aGUgcGFnZVxuICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpXG4gIH1cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoXykgPT4ge1xuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblJlc2l6ZSkgeyAgXG4gICAgICB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpXG4gICAgfVxuICB9KVxufVxuLy8gaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKSB7ICAvLyB0byBleHBsYWluIDogaWYgdGhlIGNhbnZhcyBleGlzdHMgYW5kIHRoZSBtZXRob2Qgb25SZXNpemUgb2YgdGhlIGNhbnZhcyBleGlzdHMsIHRoZW4gZXhlY3V0ZSB0aGUgbWV0aG9kIG9uUmVzaXplIG9mIHRoZSBjYW52YXNcbi8vICAgdGhpcy5jYW52YXMub25SZXNpemUoKVxuLy8gfVxuXG5vblRvdWNoRG93bihldmVudCkge1xuICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaERvd24pIHsgIFxuICAgIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKGV2ZW50KVxuICB9XG59XG5vblRvdWNoTW92ZShldmVudCkge1xuICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUpIHsgIFxuICAgIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKGV2ZW50KVxuICB9XG4gIFxufVxub25Ub3VjaFVwKGV2ZW50KSB7XG4gIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoVXApIHsgIFxuICAgIHRoaXMuY2FudmFzLm9uVG91Y2hVcChldmVudClcbiAgfVxufVxuXG5vbldoZWVsKGV2ZW50KSB7XG4gIGNvbnN0IG5vcm1hbGl6ZVdoZWVsID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpXG4gIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vbldoZWVsKSB7XG4gICAgdGhpcy5jYW52YXMub25XaGVlbChub3JtYWxpemVXaGVlbClcbiAgfVxuXG4gIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uV2hlZWwpIHtcbiAgICB0aGlzLnBhZ2Uub25XaGVlbChub3JtYWxpemVXaGVlbClcbiAgfVxufVxuXG4vKioqXG4gKiBMb29wXG4gKi9cbiAgdXBkYXRlKCkge1xuICAgIFxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnVwZGF0ZSkge1xuICAgICAgdGhpcy5jYW52YXMudXBkYXRlKHRoaXMucGFnZS5zY3JvbGwpXG4gICAgfVxuXG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcbiAgfVxuXG4gIC8qKipcbiAgICogTGlzdGVuZXJzXG4gICAqL1xuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbldoZWVsLmJpbmQodGhpcykpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXG4gIH1cblxuICBhZGRMaW5rTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpIC8vLSBnYXRoZXIgYWxsIHRoZSBsaW5rcyBvZiB0aGUgcGFnZVxuICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIFxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmsgLy8tIHRvIGdldCB0aGUgdXJsIGxpbmsgb2YgdGhlIHBhZ2VcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbm5ldyBBcHAoKVxufSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyZGIwNjczODBlNDYwYTRlMGIzOFwiKSJdLCJuYW1lcyI6WyJBcHAiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlQ2FudmFzIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVBhZ2VzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRMaW5rTGlzdGVuZXJzIiwib25SZXNpemUiLCJ1cGRhdGUiLCJuYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbiIsInRlbXBsYXRlIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwiY2FudmFzIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsIkNhbnZhcyIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiQWJvdXQiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiaG9tZSIsIkhvbWUiLCJkZXRhaWwiLCJEZXRhaWwiLCJwYWdlIiwiY3JlYXRlIiwic2hvdyIsIm9uQ2hhbmdlIiwidXJsIiwib25DaGFuZ2VTdGFydCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsIm9uQ2hhbmdlRW5kIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl8iLCJvblRvdWNoRG93biIsImV2ZW50Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwibm9ybWFsaXplV2hlZWwiLCJOb3JtYWxpemVXaGVlbCIsInNjcm9sbCIsImZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==