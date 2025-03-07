/*! For license information please see main.c6571815015ef09f6e77.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./node_modules/gsap/index.js"),a=s("./app/classes/Component.js"),i=s("./node_modules/lodash/each.js"),l=s.n(i),o=s("./app/utils/text.js");class r extends a.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text",images:document.querySelectorAll("img")}}),(0,o.split)({element:this.elements.title,expression:"<br>"}),(0,o.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){l()(this.elements.images,(e=>{e.src=e.getAttribute("data-src"),e.onload=()=>this.onAssetLoaded(e)}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=n.default.timeline({delay:1.5}),this.animateOut.to(this.elements.titleSpans,{duration:1,ease:"expo.Out",stagger:.3,y:"100%"}),this.animateOut.to(this.elements.numberText,{duration:.5,ease:"expo.Out",stagger:.3,y:"100%"},"-=0.3"),this.animateOut.to(this.element,{duration:.5,ease:"expo.out",scaleY:0,transformOrigin:"0 0"}),this.animateOut.call((()=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"a3ab5c5873a369dc5e9b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jNjU3MTgxNTAxNWVmMDlmNmU3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFFBS2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxXQUFBQSxHQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLDJCQUNaQyxPQUFRQyxTQUFTQyxpQkFBaUIsV0FJdENDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksVUFHZEYsRUFBQUEsRUFBQUEsT0FBTSxDQUNKUixRQUFTUyxLQUFLUixTQUFTQyxNQUN2QlEsV0FBWSxTQUlkRCxLQUFLUixTQUFTVSxXQUFhRixLQUFLUixTQUFTQyxNQUFNSyxpQkFBaUIsYUFFaEVFLEtBQUtHLE9BQVMsRUFHZEgsS0FBS0ksY0FDUCxDQUVBQSxZQUFBQSxHQUNFQyxJQUFLTCxLQUFLUixTQUFTSSxRQUFRVSxJQUV6QkEsRUFBSUMsSUFBTUQsRUFBSUUsYUFBYSxZQUMzQkYsRUFBSUcsT0FBUyxJQUFNVCxLQUFLVSxjQUFjSixFQUFJLEdBRTlDLENBRUFJLGFBQUFBLENBQWNDLEdBQ1pYLEtBQUtHLFFBQVUsRUFFZixNQUFNUyxFQUFVWixLQUFLRyxPQUFTSCxLQUFLUixTQUFTSSxPQUFPTyxPQUVuREgsS0FBS1IsU0FBU0csV0FBV2tCLFVBQVksR0FBR0MsS0FBS0MsTUFBZ0IsSUFBVkgsTUFFbkMsSUFBWkEsR0FDRlosS0FBS2dCLFVBRVQsQ0FDQUEsUUFBQUEsR0FDQSxPQUFPLElBQUlDLFNBQVFDLElBQ2pCbEIsS0FBS21CLFdBQWFDLEVBQUFBLFFBQUtDLFNBQVMsQ0FDOUJDLE1BQU8sTUFHVHRCLEtBQUttQixXQUFXSSxHQUFHdkIsS0FBS1IsU0FBU1UsV0FBWSxDQUUzQ3NCLFNBQVUsRUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsU0FJTDNCLEtBQUttQixXQUFXSSxHQUFHdkIsS0FBS1IsU0FBU0csV0FBWSxDQUMzQzZCLFNBQVUsR0FDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsUUFDRixTQUVIM0IsS0FBS21CLFdBQVdJLEdBQUd2QixLQUFLVCxRQUFTLENBQy9CaUMsU0FBVSxHQUNWQyxLQUFNLFdBQ05HLE9BQVEsRUFDUkMsZ0JBQWlCLFFBR25CN0IsS0FBS21CLFdBQVdXLE1BQUssS0FDbkI5QixLQUFLK0IsS0FBSyxZQUFZLEdBQ3RCLEdBRU4sQ0FDRUMsT0FBQUEsR0FDRWhDLEtBQUtULFFBQVEwQyxXQUFXQyxZQUFZbEMsS0FBS1QsUUFDM0Msa0JDM0ZGNEMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY2xhc3Nlcy9Db21wb25lbnRcIjtcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAnLi4vdXRpbHMvdGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6ICcucHJlbG9hZGVyX190ZXh0JyxcbiAgICAgICAgbnVtYmVyOiAnLnByZWxvYWRlcl9fbnVtYmVyJywgLy8gZ2V0IGFjY2VzcyB0byB0aGUgbG9hZGVyIG51bWJlclxuICAgICAgICBudW1iZXJUZXh0OiAnLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0JyxcbiAgICAgICAgaW1hZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgIGV4cHJlc3Npb246ICc8YnI+J1xuICAgIH0pXG5cbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogJzxicj4nXG4gICAgfSlcblxuXG4gICAgdGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKVxuXG4gICAgdGhpcy5sZW5ndGggPSAwXG5cblxuICAgIHRoaXMuY3JlYXRlTG9hZGVyKCk7XG4gIH1cblxuICBjcmVhdGVMb2FkZXIoKSB7XG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgaW1nID0+IHtcblxuICAgICAgaW1nLnNyYyA9IGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcbiAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoaW1nKVxuICAgIH0pXG4gIH1cblxuICBvbkFzc2V0TG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy5sZW5ndGggKz0gMVxuXG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMubGVuZ3RoIC8gdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChwZXJjZW50ICogMTAwKX0lYFxuXG4gICAgaWYgKHBlcmNlbnQgPT09IDEpIHtcbiAgICAgIHRoaXMub25Mb2FkZWQoKVxuICAgIH1cbiAgfVxuICBvbkxvYWRlZCgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgZGVsYXk6IDEuNVxuICAgIH0pXG4gIFxuICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMsIHtcbiAgICAgIC8vIGF1dG9BbHBoYTogMCwgcmVtb3ZlZCBiZWNhdXNlIHdlIG5vdCBnb25uYSBmYWRlIG91dCB0aGUgdGV4dCwgYnV0IG1ha2UgaXQgdHJhbnNsYXRlIGRvd25cbiAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgZWFzZTogJ2V4cG8uT3V0JyxcbiAgICAgIHN0YWdnZXI6IDAuMyxcbiAgICAgIHk6ICcxMDAlJ1xuICAgIH0pXG5cblxuICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLm51bWJlclRleHQsIHsgLy8gZmFkZSBvdXQgdGhlIDEwMCUgbnVtYmVyXG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgZWFzZTogJ2V4cG8uT3V0JyxcbiAgICAgIHN0YWdnZXI6IDAuMyxcbiAgICAgIHk6ICcxMDAlJ1xuICAgIH0sICctPTAuMycpXG5cbiAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7IC8vIHJlbW92ZSB0aGUgcHJlbG9hZGVyXG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgIHNjYWxlWTogMCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCdcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoKCkgPT4geyAvLyBjYWxsIHRoZSByZXNvbHZlIGZ1bmN0aW9uIHdoZW4gY29tcGxldGluZyB0aGUgYW5pbWF0aW9uXG4gICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZCcpXG4gICAgfSlcbiAgfSlcbn1cbiAgZGVzdHJveSgpIHsgIFxuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcbiAgfSBcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhM2FiNWM1ODczYTM2OWRjNWU5YlwiKSJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3BsaXQiLCJ0aGlzIiwiZXhwcmVzc2lvbiIsInRpdGxlU3BhbnMiLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJlYWNoIiwiaW1nIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwib25Bc3NldExvYWRlZCIsImltYWdlIiwicGVyY2VudCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9uTG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwiR1NBUCIsInRpbWVsaW5lIiwiZGVsYXkiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJ5Iiwic2NhbGVZIiwidHJhbnNmb3JtT3JpZ2luIiwiY2FsbCIsImVtaXQiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9