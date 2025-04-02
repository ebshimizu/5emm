import{A,aY as D,aZ as M,f as T,B as h,C as X,D as Y,E as m,F as y,a_ as w,a$ as C,G as b,H as g,s as z}from"./index.983957c9.js";import{c as B}from"./use-dialog-plugin-component.b489df9b.js";function P(o){if(o===!1)return 0;if(o===!0||o===void 0)return 1;const t=parseInt(o,10);return isNaN(t)?0:t}var S=A({name:"close-popup",beforeMount(o,{value:t}){const n={depth:P(t),handler(l){n.depth!==0&&setTimeout(()=>{const e=D(o);e!==void 0&&M(e,l,n.depth)})},handlerKey(l){T(l,13)===!0&&n.handler(l)}};o.__qclosepopup=n,o.addEventListener("click",n.handler),o.addEventListener("keyup",n.handlerKey)},updated(o,{value:t,oldValue:n}){t!==n&&(o.__qclosepopup.depth=P(t))},beforeUnmount(o){const t=o.__qclosepopup;o.removeEventListener("click",t.handler),o.removeEventListener("keyup",t.handlerKey),delete o.__qclosepopup}});const q={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},F=Object.keys(q);q.all=!0;function L(o){const t={};for(const n of F)o[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?q:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const O=["INPUT","TEXTAREA"];function k(o,t){return t.event===void 0&&o.target!==void 0&&o.target.draggable!==!0&&typeof t.handler=="function"&&O.includes(o.target.nodeName.toUpperCase())===!1&&(o.qClonedBy===void 0||o.qClonedBy.indexOf(t.uid)===-1)}function E(o,t,n){const l=b(o);let e,r=l.left-t.event.x,i=l.top-t.event.y,a=Math.abs(r),u=Math.abs(i);const s=t.direction;s.horizontal===!0&&s.vertical!==!0?e=r<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=i<0?"up":"down":s.up===!0&&i<0?(e="up",a>u&&(s.left===!0&&r<0?e="left":s.right===!0&&r>0&&(e="right"))):s.down===!0&&i>0?(e="down",a>u&&(s.left===!0&&r<0?e="left":s.right===!0&&r>0&&(e="right"))):s.left===!0&&r<0?(e="left",a<u&&(s.up===!0&&i<0?e="up":s.down===!0&&i>0&&(e="down"))):s.right===!0&&r>0&&(e="right",a<u&&(s.up===!0&&i<0?e="up":s.down===!0&&i>0&&(e="down")));let v=!1;if(e===void 0&&n===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};e=t.event.lastDir,v=!0,e==="left"||e==="right"?(l.left-=r,a=0,r=0):(l.top-=i,u=0,i=0)}return{synthetic:v,payload:{evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:l,direction:e,isFirst:t.event.isFirst,isFinal:n===!0,duration:Date.now()-t.event.time,distance:{x:a,y:u},offset:{x:r,y:i},delta:{x:l.left-t.event.lastX,y:l.top-t.event.lastY}}}}let x=0;var U=A({name:"touch-pan",beforeMount(o,{value:t,modifiers:n}){if(n.mouse!==!0&&h.has.touch!==!0)return;function l(r,i){n.mouse===!0&&i===!0?z(r):(n.stop===!0&&C(r),n.prevent===!0&&w(r))}const e={uid:"qvtp_"+x++,handler:t,modifiers:n,direction:L(n),noop:X,mouseStart(r){k(r,e)&&Y(r)&&(m(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(k(r,e)){const i=r.target;m(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,i){if(h.is.firefox===!0&&y(o,!0),e.lastEvt=r,i===!0||n.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=r.type.indexOf("mouse")!==-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&w(s),r.cancelBubble===!0&&C(s),Object.assign(s,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:s}}C(r)}const{left:a,top:u}=b(r);e.event={x:a,y:u,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:u}},move(r){if(e.event===void 0)return;const i=b(r),a=i.left-e.event.x,u=i.top-e.event.y;if(a===0&&u===0)return;e.lastEvt=r;const s=e.event.mouse===!0,v=()=>{l(r,s);let d;n.preserveCursor!==!0&&n.preservecursor!==!0&&(d=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),B(),e.styleCleanup=f=>{if(e.styleCleanup=void 0,d!==void 0&&(document.documentElement.style.cursor=d),document.body.classList.remove("non-selectable"),s===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{_(),f()},50):_()}else f!==void 0&&f()}};if(e.event.detected===!0){e.event.isFirst!==!0&&l(r,e.event.mouse);const{payload:d,synthetic:f}=E(r,e,!1);d!==void 0&&(e.handler(d)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&v(),e.event.lastX=d.position.left,e.event.lastY=d.position.top,e.event.lastDir=f===!0?void 0:d.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){v(),e.event.detected=!0,e.move(r);return}const c=Math.abs(a),p=Math.abs(u);c!==p&&(e.direction.horizontal===!0&&c>p||e.direction.vertical===!0&&c<p||e.direction.up===!0&&c<p&&u<0||e.direction.down===!0&&c<p&&u>0||e.direction.left===!0&&c>p&&a<0||e.direction.right===!0&&c>p&&a>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,i){if(e.event!==void 0){if(g(e,"temp"),h.is.firefox===!0&&y(o,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(E(r===void 0?e.lastEvt:r,e).payload);const{payload:a}=E(r===void 0?e.lastEvt:r,e,!0),u=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(u):u()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(o.__qtouchpan=e,n.mouse===!0){const r=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";m(e,"main",[[o,"mousedown","mouseStart",`passive${r}`]])}h.has.touch===!0&&m(e,"main",[[o,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[o,"touchmove","noop","notPassiveCapture"]])},updated(o,t){const n=o.__qtouchpan;n!==void 0&&(t.oldValue!==t.value&&(typeof value!="function"&&n.end(),n.handler=t.value),n.direction=L(t.modifiers))},beforeUnmount(o){const t=o.__qtouchpan;t!==void 0&&(t.event!==void 0&&t.end(),g(t,"main"),g(t,"temp"),h.is.firefox===!0&&y(o,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete o.__qtouchpan)}});export{S as C,U as T,L as g,k as s};
