/*! For license information please see main.268da581313680990398.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),n=a.n(s),o=a("./app/components/preloader.js"),i=a("./app/pages/About/Index.js"),l=a("./app/pages/Collections/Index.js"),r=a("./app/pages/Detail/Index.js"),c=a("./app/pages/Home/Index.js");new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addLinkListeners()}createPreloader(){this.preloader=new o.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new i.default,collections:new l.default,detail:new r.default,home:new c.default},console.log("Available pages:",Object.keys(this.pages)),console.log("Current template:",this.template),this.page=this.pages[this.template],console.log("Current page:",this.page),this.page?(this.page.create(),this.page.show()):console.log("page not found for the template:",this.template)}onPreloaded(){this.preloader.destroy()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show(),this.addLinkListeners()}else console.log("errrrrrrrror")}addLinkListeners(){const e=document.querySelectorAll("a");console.log("Link found :",e),n()(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:a}=e;console.log("Link clicked:",a),this.onChange(a)}}))}}}},(function(e){e.h=()=>"19a6eb89c6a5a2e70091"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNjhkYTU4MTMxMzY4MDk5MDM5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d1RBc0dBLElBNUZBLE1BQ0VBLFdBQUFBLEdBQ0VDLEtBQUtDLGtCQUNMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksa0JBQ1AsQ0FFQUgsZUFBQUEsR0FDRUQsS0FBS0ssVUFBWSxJQUFJQyxFQUFBQSxRQUNyQk4sS0FBS0ssVUFBVUUsS0FBSyxZQUFhUCxLQUFLUSxZQUFZQyxLQUFLVCxNQUV6RCxDQUVBRSxhQUFBQSxHQUNFRixLQUFLVSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDWixLQUFLYSxTQUFXYixLQUFLVSxRQUFRSSxhQUFhLGdCQUM1QyxDQUVBWCxXQUFBQSxHQUNFSCxLQUFLZSxNQUFRLENBQ1hDLE1BQU8sSUFBSUMsRUFBQUEsUUFDWEMsWUFBYSxJQUFJQyxFQUFBQSxRQUNqQkMsT0FBUSxJQUFJQyxFQUFBQSxRQUNaQyxLQUFNLElBQUlDLEVBQUFBLFNBR1pDLFFBQVFDLElBQUksbUJBQW9CQyxPQUFPQyxLQUFLM0IsS0FBS2UsUUFDakRTLFFBQVFDLElBQUksb0JBQXFCekIsS0FBS2EsVUFFdENiLEtBQUs0QixLQUFPNUIsS0FBS2UsTUFBTWYsS0FBS2EsVUFFNUJXLFFBQVFDLElBQUksZ0JBQWlCekIsS0FBSzRCLE1BRTlCNUIsS0FBSzRCLE1BQ1A1QixLQUFLNEIsS0FBS0MsU0FDVjdCLEtBQUs0QixLQUFLRSxRQUVWTixRQUFRQyxJQUFJLG1DQUFvQ3pCLEtBQUthLFNBRXpELENBRUFMLFdBQUFBLEdBQ0VSLEtBQUtLLFVBQVUwQixTQUNqQixDQUVBLGNBQU1DLENBQVNDLFNBQ1BqQyxLQUFLNEIsS0FBS00sT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBQ25DLEdBQXVCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUMxQixNQUFNQyxRQUFhSixFQUFRSyxPQUVyQkMsRUFBSzlCLFNBQVMrQixjQUFjLE9BRWxDRCxFQUFJRSxVQUFZSixFQUVoQixNQUFNSyxFQUFhSCxFQUFJN0IsY0FBYyxZQUVyQ1osS0FBS2EsU0FBVytCLEVBQVc5QixhQUFhLGlCQUV4Q2QsS0FBS1UsUUFBUW1DLGFBQWEsZ0JBQWlCN0MsS0FBS2EsVUFFaERiLEtBQUtVLFFBQVFpQyxVQUFZQyxFQUFXRCxVQUVwQzNDLEtBQUs0QixLQUFPNUIsS0FBS2UsTUFBTWYsS0FBS2EsVUFDNUJiLEtBQUs0QixLQUFLQyxTQUNWN0IsS0FBSzRCLEtBQUtFLE9BRVY5QixLQUFLSSxrQkFDUCxNQUNBb0IsUUFBUUMsSUFBSSxlQUVoQixDQUVFckIsZ0JBQUFBLEdBQ0UsTUFBTTBDLEVBQVFuQyxTQUFTb0MsaUJBQWlCLEtBQ3hDdkIsUUFBUUMsSUFBSSxlQUFnQnFCLEdBRTVCRSxJQUFLRixHQUFPRyxJQUNWQSxFQUFLQyxRQUFVQyxJQUNiQSxFQUFNQyxpQkFFTixNQUFNLEtBQUVDLEdBQVNKLEVBQ2pCekIsUUFBUUMsSUFBSSxnQkFBaUI0QixHQUM3QnJELEtBQUtnQyxTQUFTcUIsRUFBSyxDQUNwQixHQUVMLGtCQ25HRkMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNjcmlwdChzcmM9XCIvbWFpbi5qc1wiKVxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnIC8vLSBsaWJyYXJ5IHRvIHVzZSBlYWNoIGluc3RlYWQgb2YgZm9yRWFjaCBtZXRob2QsIHdoaWNoIGlzbid0IGF2YWlsYWJsZSBpbiBOb2RlLmpzXG5cbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL3ByZWxvYWRlcidcbmltcG9ydCBBYm91dCBmcm9tICcuL3BhZ2VzL0Fib3V0L0luZGV4J1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4vcGFnZXMvQ29sbGVjdGlvbnMvSW5kZXgnXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vcGFnZXMvRGV0YWlsL0luZGV4J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lL0luZGV4J1xuXG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpIC8vIHJvdXRpbmcgdGhlIHBhZ2VzXG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIgKCkge1xuICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxuXG4gIH1cblxuICBjcmVhdGVDb250ZW50ICgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuICB9XG5cbiAgY3JlYXRlUGFnZXMgKCkgIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJBdmFpbGFibGUgcGFnZXM6XCIsIE9iamVjdC5rZXlzKHRoaXMucGFnZXMpKSAvLyBEZWJ1Z1xuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCB0ZW1wbGF0ZTpcIiwgdGhpcy50ZW1wbGF0ZSkgLy8gRGVidWdcblxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cblxuICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBwYWdlOlwiLCB0aGlzLnBhZ2UpIC8vIERlYnVnXG5cbiAgICBpZiAodGhpcy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICAgIHRoaXMucGFnZS5zaG93KClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJwYWdlIG5vdCBmb3VuZCBmb3IgdGhlIHRlbXBsYXRlOlwiLCB0aGlzLnRlbXBsYXRlKSAvLyBEZWJ1Z1xuICAgIH1cbiAgfVxuXG4gIG9uUHJlbG9hZGVkKCkge1xuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UodXJsKSB7XG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKSAvL2hpZGUgdGhlIGN1cnJlbnQgcGFnZVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpIC8vLSBmZXRjaCB0aGUgbmV3IHBhZ2UgaGVyZSAtIGFzeW5jL2F3YWl0IGFsbG93IGFzeW5jaHJvbmVzIHJlcXVlc3RzIGZvcnYgZmV0Y2hpbmcgZGF0YVxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcblxuICAgICAgY29uc3QgZGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFxuXG4gICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJykgLy8gd2l0aCB0aGlzIGxpbmUsIHdlIGNhbiBnZXQgdGhlIHRlbXBsYXRlIG9mIHRoZSBuZXcgcGFnZVxuXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSkgLy8gd2l0aCB0aGlzIGxpbmUsIHdlIGNhbiBzZXQgdGhlIHRlbXBsYXRlIG9mIHRoZSBuZXcgcGFnZVxuXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUwgIFxuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICAgIHRoaXMucGFnZS5zaG93KClcblxuICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdlcnJycnJycnJyb3InKVxuICB9XG59XG5cbiAgYWRkTGlua0xpc3RlbmVycygpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKSAvLy0gZ2F0aGVyIGFsbCB0aGUgbGlua3Mgb2YgdGhlIHBhZ2VcbiAgICBjb25zb2xlLmxvZyhcIkxpbmsgZm91bmQgOlwiLCBsaW5rcykgLy8gRGVidWdcblxuICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIFxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmsgLy8tIHRvIGdldCB0aGUgdXJsIGxpbmsgb2YgdGhlIHBhZ2VcbiAgICAgICAgY29uc29sZS5sb2coXCJMaW5rIGNsaWNrZWQ6XCIsIGhyZWYpIC8vIERlYnVnXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbm5ldyBBcHAoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE5YTZlYjg5YzZhNWEyZTcwMDkxXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJwYWdlIiwiY3JlYXRlIiwic2hvdyIsImRlc3Ryb3kiLCJvbkNoYW5nZSIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=