import{m as F,i as m,e as r,a as g,h as $,z as b,k as v,aP as x,aQ as C,r as P,bT as Q,q as h,bs as q,d as B,o as E,bU as y}from"./index.983957c9.js";var R=F({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:l}){const{proxy:{$q:o}}=v(),e=m(x,r);if(e===r)return console.error("QPage needs to be a deep child of QLayout"),r;if(m(C,r)===r)return console.error("QPage needs to be child of QPageContainer"),r;const a=g(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const i=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return t.styleFn(n,i)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":o.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":o.screen.height-n+"px"}}),u=g(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>$("main",{class:u.value,style:a.value},b(l.default))}});let d=0;const w={fullscreen:Boolean,noRouteFullscreenExit:Boolean},z=["update:fullscreen","fullscreen"];function I(){const t=v(),{props:l,emit:o,proxy:e}=t;let s,a,u;const n=P(!1);Q(t)===!0&&h(()=>e.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&c()}),h(()=>l.fullscreen,f=>{n.value!==f&&i()}),h(n,f=>{o("update:fullscreen",f),o("fullscreen",f)});function i(){n.value===!0?c():p()}function p(){n.value!==!0&&(n.value=!0,u=e.$el.parentNode,u.replaceChild(a,e.$el),document.body.appendChild(e.$el),d++,d===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:c},y.add(s))}function c(){n.value===!0&&(s!==void 0&&(y.remove(s),s=void 0),u.replaceChild(e.$el,a),n.value=!1,d=Math.max(0,d-1),d===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),e.$el.scrollIntoView!==void 0&&setTimeout(()=>{e.$el.scrollIntoView()})))}return q(()=>{a=document.createElement("span")}),B(()=>{l.fullscreen===!0&&p()}),E(c),Object.assign(e,{toggleFullscreen:i,setFullscreen:p,exitFullscreen:c}),{inFullscreen:n,toggleFullscreen:i}}export{R as Q,z as a,I as b,w as u};
