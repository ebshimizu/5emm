import{m as H,a as u,h as o,z as ae,k as U,r as A,bY as I,aJ as xe,l as bt,aa as G,aO as mt,Q as Ae,aR as St,q as J,bs as yt,d as ht,y as _t,x as wt,o as Ct,aS as qt,aN as De,j as Le,J as Qe,bl as Pt,L as He,bm as kt,bZ as ke,b_ as Me,b$ as xt,c0 as Ft,bX as Pe,$ as pt,a$ as Rt,s as Ie,B as Tt,c1 as Ot,aq as Bt,bp as Vt,br as jt,bt as Dt,c2 as Mt,bu as Ee,bq as Et,a_ as Nt}from"./index.983957c9.js";import{a as $t,o as zt,q as At,b as Lt,t as Ue,g as Qt,w as Ht,Q as It}from"./use-dialog-plugin-component.b489df9b.js";import{a as Ut}from"./QMarkupTable.6228698c.js";import{u as Wt,a as Kt,b as Xt}from"./use-fullscreen.d8e60070.js";var xl=H({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const a=U(),v=u(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return o("td",{class:v.value},ae(l.default));const n=a.vnode.key,s=(e.props.colsMap!==void 0?e.props.colsMap[n]:null)||e.props.col;if(s===void 0)return;const{row:i}=e.props;return o("td",{class:v.value+s.__tdClass(i),style:s.__tdStyle(i)},ae(l.default))}}});function le(e,l=new WeakMap){if(Object(e)!==e)return e;if(l.has(e))return l.get(e);const a=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const v=e.valueOf();if(Object(v)!==v){const n=new e.constructor(v);return l.set(e,n),n}}return l.set(e,a),e instanceof Set?e.forEach(v=>{a.add(le(v,l))}):e instanceof Map&&e.forEach((v,n)=>{a.set(n,le(v,l))}),Object.assign(a,...Object.keys(e).map(v=>({[v]:le(e[v],l)})))}var Fl=H({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:l,emit:a}){const{proxy:v}=U(),{$q:n}=v,s=A(null),i=A(""),c=A("");let f=!1;const h=u(()=>I({initialValue:i.value,validate:e.validate,set:r,cancel:m,updatePosition:P},"value",()=>c.value,w=>{c.value=w}));function r(){e.validate(c.value)!==!1&&(k()===!0&&(a("save",c.value,i.value),a("update:modelValue",c.value)),F())}function m(){k()===!0&&a("cancel",c.value,i.value),F()}function P(){xe(()=>{s.value.updatePosition()})}function k(){return bt(c.value,i.value)===!1}function F(){f=!0,s.value.hide()}function b(){f=!1,i.value=le(e.modelValue),c.value=le(e.modelValue),a("beforeShow")}function y(){a("show")}function j(){f===!1&&k()===!0&&(e.autoSave===!0&&e.validate(c.value)===!0?(a("save",c.value,i.value),a("update:modelValue",c.value)):a("cancel",c.value,i.value)),a("beforeHide")}function g(){a("hide")}function R(){const w=l.default!==void 0?[].concat(l.default(h.value)):[];return e.title&&w.unshift(o("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&w.push(o("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[o(G,{flat:!0,color:e.color,label:e.labelCancel||n.lang.label.cancel,onClick:m}),o(G,{flat:!0,color:e.color,label:e.labelSet||n.lang.label.set,onClick:r})])),w}return Object.assign(v,{set:r,cancel:m,show(w){s.value!==null&&s.value.show(w)},hide(w){s.value!==null&&s.value.hide(w)},updatePosition:P}),()=>{if(e.disable!==!0)return o($t,{ref:s,class:"q-popup-edit",cover:e.cover,onBeforeShow:b,onShow:y,onBeforeHide:j,onHide:g,onEscapeKey:m},R)}}}),pl=H({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:l}){const a=u(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>o("tr",{class:a.value},ae(l.default))}}),Yt=H({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:a}){const v=U(),{proxy:{$q:n}}=v,s=i=>{a("click",i)};return()=>{if(e.props===void 0)return o("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:s},ae(l.default));let i,c;const f=v.vnode.key;if(f){if(i=e.props.colsMap[f],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const r=i.align==="right"?"unshift":"push";c=mt(l.default,[]),c[r](o(Ae,{class:i.__iconClass,name:n.iconSet.table.arrowUp}))}else c=ae(l.default);const h={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:r=>{i.sortable===!0&&e.props.sort(i),s(r)}};return o("th",h,c)}}});function We(e,l){return o("div",e,[o("table",{class:"q-table"},l)])}const Gt={list:Lt,table:Ut},Jt=["list","table","__qtable"];var Zt=H({name:"QVirtualScroll",props:{...zt,type:{type:String,default:"list",validator:e=>Jt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:St},setup(e,{slots:l,attrs:a}){let v;const n=A(null),s=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:c,padVirtualScroll:f,onVirtualScrollEvt:h}=At({virtualScrollLength:s,getVirtualScrollTarget:F,getVirtualScrollEl:k}),r=u(()=>{if(s.value===0)return[];const g=(R,w)=>({index:i.value.from+w,item:R});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(g):e.itemsFn(i.value.from,i.value.to-i.value.from).map(g)}),m=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),P=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});J(s,()=>{c()}),J(()=>e.scrollTarget,()=>{y(),b()});function k(){return n.value.$el||n.value}function F(){return v}function b(){v=qt(k(),e.scrollTarget),v.addEventListener("scroll",h,De.passive)}function y(){v!==void 0&&(v.removeEventListener("scroll",h,De.passive),v=void 0)}function j(){let g=f(e.type==="list"?"div":"tbody",r.value.map(l.default));return l.before!==void 0&&(g=l.before().concat(g)),Le(l.after,g)}return yt(()=>{c()}),ht(()=>{b()}),_t(()=>{b()}),wt(()=>{y()}),Ct(()=>{y()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?We({ref:n,class:"q-table__middle "+m.value},j()):o(Gt[e.type],{...a,ref:n,class:[a.class,m.value],...P.value},j)}}});const el={xs:2,sm:4,md:6,lg:10,xl:14};function Ne(e,l,a){return{transform:l===!0?`translateX(${a.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var tl=H({name:"QLinearProgress",props:{...Qe,...Pt,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:a}=U(),v=He(e,a.$q),n=kt(e,el),s=u(()=>e.indeterminate===!0||e.query===!0),i=u(()=>e.reverse!==e.query),c=u(()=>({...n.value!==null?n.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),f=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),h=u(()=>Ne(e.buffer!==void 0?e.buffer:1,i.value,a.$q)),r=u(()=>`with${e.instantFeedback===!0?"out":""}-transition`),m=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${r.value} q-linear-progress__track--${v.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),P=u(()=>Ne(s.value===!0?1:e.value,i.value,a.$q)),k=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${r.value} q-linear-progress__model--${s.value===!0?"in":""}determinate`),F=u(()=>({width:`${e.value*100}%`})),b=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${r.value}`);return()=>{const y=[o("div",{class:m.value,style:h.value}),o("div",{class:k.value,style:P.value})];return e.stripe===!0&&s.value===!1&&y.push(o("div",{class:b.value,style:F.value})),o("div",{class:f.value,style:c.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Le(l.default,y))}}});function ll(e,l){return new Date(e)-new Date(l)}const al={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function nl(e,l,a,v){const n=u(()=>{const{sortBy:c}=l.value;return c&&a.value.find(f=>f.name===c)||null}),s=u(()=>e.sortMethod!==void 0?e.sortMethod:(c,f,h)=>{const r=a.value.find(k=>k.name===f);if(r===void 0||r.field===void 0)return c;const m=h===!0?-1:1,P=typeof r.field=="function"?k=>r.field(k):k=>k[r.field];return c.sort((k,F)=>{let b=P(k),y=P(F);return r.rawSort!==void 0?r.rawSort(b,y,k,F)*m:b==null?-1*m:y==null?1*m:r.sort!==void 0?r.sort(b,y,k,F)*m:ke(b)===!0&&ke(y)===!0?(b-y)*m:Me(b)===!0&&Me(y)===!0?ll(b,y)*m:typeof b=="boolean"&&typeof y=="boolean"?(b-y)*m:([b,y]=[b,y].map(j=>(j+"").toLocaleString().toLowerCase()),b<y?-1*m:b===y?0:m)})});function i(c){let f=e.columnSortOrder;if(xt(c)===!0)c.sortOrder&&(f=c.sortOrder),c=c.name;else{const m=a.value.find(P=>P.name===c);m!==void 0&&m.sortOrder&&(f=m.sortOrder)}let{sortBy:h,descending:r}=l.value;h!==c?(h=c,r=f==="da"):e.binaryStateSort===!0?r=!r:r===!0?f==="ad"?h=null:r=!1:f==="ad"?r=!0:h=null,v({sortBy:h,descending:r,page:1})}return{columnToSort:n,computedSortMethod:s,sort:i}}const rl={filter:[String,Object],filterMethod:Function};function ol(e,l){const a=u(()=>e.filterMethod!==void 0?e.filterMethod:(v,n,s,i)=>{const c=n?n.toLowerCase():"";return v.filter(f=>s.some(h=>{const r=i(h,f)+"";return(r==="undefined"||r==="null"?"":r.toLowerCase()).indexOf(c)!==-1}))});return J(()=>e.filter,()=>{xe(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:a}}function il(e,l){for(const a in l)if(l[a]!==e[a])return!1;return!0}function $e(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const ul={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function sl(e,l){const{props:a,emit:v}=e,n=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:a.rowsPerPageOptions.length!==0?a.rowsPerPageOptions[0]:5},a.pagination)),s=u(()=>{const r=a["onUpdate:pagination"]!==void 0?{...n.value,...a.pagination}:n.value;return $e(r)}),i=u(()=>s.value.rowsNumber!==void 0);function c(r){f({pagination:r,filter:a.filter})}function f(r={}){xe(()=>{v("request",{pagination:r.pagination||s.value,filter:r.filter||a.filter,getCellValue:l})})}function h(r,m){const P=$e({...s.value,...r});if(il(s.value,P)===!0){i.value===!0&&m===!0&&c(P);return}if(i.value===!0){c(P);return}a.pagination!==void 0&&a["onUpdate:pagination"]!==void 0?v("update:pagination",P):n.value=P}return{innerPagination:n,computedPagination:s,isServerSide:i,requestServerInteraction:f,setPagination:h}}function cl(e,l,a,v,n,s){const{props:i,emit:c,proxy:{$q:f}}=e,h=u(()=>v.value===!0?a.value.rowsNumber||0:s.value),r=u(()=>{const{page:w,rowsPerPage:V}=a.value;return(w-1)*V}),m=u(()=>{const{page:w,rowsPerPage:V}=a.value;return w*V}),P=u(()=>a.value.page===1),k=u(()=>a.value.rowsPerPage===0?1:Math.max(1,Math.ceil(h.value/a.value.rowsPerPage))),F=u(()=>m.value===0?!0:a.value.page>=k.value),b=u(()=>(i.rowsPerPageOptions.includes(l.value.rowsPerPage)?i.rowsPerPageOptions:[l.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(V=>({label:V===0?f.lang.table.allRows:""+V,value:V})));J(k,(w,V)=>{if(w===V)return;const x=a.value.page;w&&!x?n({page:1}):w<x&&n({page:w})});function y(){n({page:1})}function j(){const{page:w}=a.value;w>1&&n({page:w-1})}function g(){const{page:w,rowsPerPage:V}=a.value;m.value>0&&w*V<h.value&&n({page:w+1})}function R(){n({page:k.value})}return i["onUpdate:pagination"]!==void 0&&c("update:pagination",{...a.value}),{firstRowIndex:r,lastRowIndex:m,isFirstPage:P,isLastPage:F,pagesNumber:k,computedRowsPerPageOptions:b,computedRowsNumber:h,firstPage:y,prevPage:j,nextPage:g,lastPage:R}}const dl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},vl=["update:selected","selection"];function fl(e,l,a,v){const n=u(()=>{const F={};return e.selected.map(v.value).forEach(b=>{F[b]=!0}),F}),s=u(()=>e.selection!=="none"),i=u(()=>e.selection==="single"),c=u(()=>e.selection==="multiple"),f=u(()=>a.value.length!==0&&a.value.every(F=>n.value[v.value(F)]===!0)),h=u(()=>f.value!==!0&&a.value.some(F=>n.value[v.value(F)]===!0)),r=u(()=>e.selected.length);function m(F){return n.value[F]===!0}function P(){l("update:selected",[])}function k(F,b,y,j){l("selection",{rows:b,added:y,keys:F,evt:j});const g=i.value===!0?y===!0?b:[]:y===!0?e.selected.concat(b):e.selected.filter(R=>F.includes(v.value(R))===!1);l("update:selected",g)}return{hasSelectionMode:s,singleSelection:i,multipleSelection:c,allRowsSelected:f,someRowsSelected:h,rowsSelectedNumber:r,isRowSelected:m,clearSelection:P,updateSelection:k}}function ze(e){return Array.isArray(e)?e.slice():[]}const gl={expanded:Array},bl=["update:expanded"];function ml(e,l){const a=A(ze(e.expanded));J(()=>e.expanded,i=>{a.value=ze(i)});function v(i){return a.value.includes(i)}function n(i){e.expanded!==void 0?l("update:expanded",i):a.value=i}function s(i,c){const f=a.value.slice(),h=f.indexOf(i);c===!0?h===-1&&(f.push(i),n(f)):h!==-1&&(f.splice(h,1),n(f))}return{isRowExpanded:v,setExpanded:n,updateExpanded:s}}const Sl={visibleColumns:Array};function yl(e,l,a){const v=u(()=>{if(e.columns!==void 0)return e.columns;const c=e.rows[0];return c!==void 0?Object.keys(c).map(f=>({name:f,label:f.toUpperCase(),field:f,align:ke(c[f])?"right":"left",sortable:!0})):[]}),n=u(()=>{const{sortBy:c,descending:f}=l.value;return(e.visibleColumns!==void 0?v.value.filter(r=>r.required===!0||e.visibleColumns.includes(r.name)===!0):v.value).map(r=>{const m=r.align||"right",P=`text-${m}`;return{...r,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:P+(r.headerClasses!==void 0?" "+r.headerClasses:"")+(r.sortable===!0?" sortable":"")+(r.name===c?` sorted ${f===!0?"sort-desc":""}`:""),__tdStyle:r.style!==void 0?typeof r.style!="function"?()=>r.style:r.style:()=>null,__tdClass:r.classes!==void 0?typeof r.classes!="function"?()=>P+" "+r.classes:k=>P+" "+r.classes(k):()=>P}})}),s=u(()=>{const c={};return n.value.forEach(f=>{c[f.name]=f}),c}),i=u(()=>e.tableColspan!==void 0?e.tableColspan:n.value.length+(a.value===!0?1:0));return{colList:v,computedCols:n,computedColsMap:s,computedColspan:i}}const fe="q-table__bottom row items-center",Ke={};Ue.forEach(e=>{Ke[e]={}});var Rl=H({name:"QTable",props:{rows:{type:Array,required:!0},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{},...Ke,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Qe,...Wt,...Sl,...rl,...ul,...gl,...dl,...al},emits:["request","virtualScroll",...Kt,...bl,...vl],setup(e,{slots:l,emit:a}){const v=U(),{proxy:{$q:n}}=v,s=He(e,n),{inFullscreen:i,toggleFullscreen:c}=Xt(),f=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),h=A(null),r=A(null),m=u(()=>e.grid!==!0&&e.virtualScroll===!0),P=u(()=>" q-table__card"+(s.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),k=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":P.value)+(s.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),F=u(()=>k.value+(e.loading===!0?" q-table--loading":""));J(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+k.value,()=>{m.value===!0&&r.value!==null&&r.value.reset()});const{innerPagination:b,computedPagination:y,isServerSide:j,requestServerInteraction:g,setPagination:R}=sl(v,K),{computedFilterMethod:w}=ol(e,R),{isRowExpanded:V,setExpanded:x,updateExpanded:E}=ml(e,a),$=u(()=>{let t=e.rows;if(j.value===!0||t.length===0)return t;const{sortBy:d,descending:S}=y.value;return e.filter&&(t=w.value(t,e.filter,z.value,K)),Xe.value!==null&&(t=Ye.value(e.rows===t?t.slice():t,d,S)),t}),p=u(()=>$.value.length),T=u(()=>{let t=$.value;if(j.value===!0)return t;const{rowsPerPage:d}=y.value;return d!==0&&(oe.value===0&&e.rows!==t?t.length>ie.value&&(t=t.slice(0,ie.value)):t=t.slice(oe.value,ie.value)),t}),{hasSelectionMode:L,singleSelection:ne,multipleSelection:Z,allRowsSelected:W,someRowsSelected:re,rowsSelectedNumber:ee,isRowSelected:C,clearSelection:D,updateSelection:M}=fl(e,a,T,f),{colList:te,computedCols:z,computedColsMap:Fe,computedColspan:pe}=yl(e,y,L),{columnToSort:Xe,computedSortMethod:Ye,sort:be}=nl(e,y,te,R),{firstRowIndex:oe,lastRowIndex:ie,isFirstPage:me,isLastPage:Se,pagesNumber:ue,computedRowsPerPageOptions:Ge,computedRowsNumber:se,firstPage:ye,prevPage:he,nextPage:_e,lastPage:we}=cl(v,b,y,j,R,p),Je=u(()=>T.value.length===0),Ze=u(()=>{const t={};return Ue.forEach(d=>{t[d]=e[d]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){m.value===!0&&r.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?Ve:null;if(m.value===!0){const S=l["top-row"],_=l["bottom-row"],q={default:B=>Te(B.item,l.body,B.index)};if(S!==void 0){const B=o("tbody",S({cols:z.value}));q.before=t===null?()=>B:()=>[t()].concat(B)}else t!==null&&(q.before=t);return _!==void 0&&(q.after=()=>o("tbody",_({cols:z.value}))),o(Zt,{ref:r,class:e.tableClass,style:e.tableStyle,...Ze.value,scrollTarget:e.virtualScrollTarget,items:T.value,type:"__qtable",tableColspan:pe.value,onVirtualScroll:at},q)}const d=[nt()];return t!==null&&d.unshift(t()),We({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},d)}function lt(t,d){if(r.value!==null){r.value.scrollTo(t,d);return}t=parseInt(t,10);const S=h.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(S!==null){const _=h.value.querySelector(".q-table__middle.scroll"),q=S.offsetTop-e.virtualScrollStickySizeStart,B=q<_.scrollTop?"decrease":"increase";_.scrollTop=q,a("virtualScroll",{index:t,from:0,to:b.value.rowsPerPage-1,direction:B})}}function at(t){a("virtualScroll",t)}function Re(){return[o(tl,{class:"q-table__linear-progress",color:e.color,dark:s.value,indeterminate:!0,trackColor:"transparent"})]}function Te(t,d,S){const _=f.value(t),q=C(_);if(d!==void 0)return d(Oe({key:_,row:t,pageIndex:S,__trClass:q?"selected":""}));const B=l["body-cell"],O=z.value.map(N=>{const de=l[`body-cell-${N.name}`],ve=de!==void 0?de:B;return ve!==void 0?ve(rt({key:_,row:t,pageIndex:S,col:N})):o("td",{class:N.__tdClass(t),style:N.__tdStyle(t)},K(N,t))});if(L.value===!0){const N=l["body-selection"],de=N!==void 0?N(ot({key:_,row:t,pageIndex:S})):[o(Pe,{modelValue:q,color:e.color,dark:s.value,dense:e.dense,"onUpdate:modelValue":(ve,gt)=>{M([_],[t],ve,gt)}})];O.unshift(o("td",{class:"q-table--col-auto-width"},de))}const Q={key:_,class:{selected:q}};return e.onRowClick!==void 0&&(Q.class["cursor-pointer"]=!0,Q.onClick=N=>{a("rowClick",N,t,S)}),e.onRowDblclick!==void 0&&(Q.class["cursor-pointer"]=!0,Q.onDblclick=N=>{a("rowDblclick",N,t,S)}),e.onRowContextmenu!==void 0&&(Q.class["cursor-pointer"]=!0,Q.onContextmenu=N=>{a("rowContextmenu",N,t,S)}),o("tr",Q,O)}function nt(){const t=l.body,d=l["top-row"],S=l["bottom-row"];let _=T.value.map((q,B)=>Te(q,t,B));return d!==void 0&&(_=d({cols:z.value}).concat(_)),S!==void 0&&(_=_.concat(S({cols:z.value}))),o("tbody",_)}function Oe(t){return Ce(t),t.cols=t.cols.map(d=>I({...d},"value",()=>K(d,t.row))),t}function rt(t){return Ce(t),I(t,"value",()=>K(t.col,t.row)),t}function ot(t){return Ce(t),t}function Ce(t){Object.assign(t,{cols:z.value,colsMap:Fe.value,sort:be,rowIndex:oe.value+t.pageIndex,color:e.color,dark:s.value,dense:e.dense}),L.value===!0&&I(t,"selected",()=>C(t.key),(d,S)=>{M([t.key],[t.row],d,S)}),I(t,"expand",()=>V(t.key),d=>{E(t.key,d)})}function K(t,d){const S=typeof t.field=="function"?t.field(d):d[t.field];return t.format!==void 0?t.format(S,d):S}const X=u(()=>({pagination:y.value,pagesNumber:ue.value,isFirstPage:me.value,isLastPage:Se.value,firstPage:ye,prevPage:he,nextPage:_e,lastPage:we,inFullscreen:i.value,toggleFullscreen:c}));function it(){const t=l.top,d=l["top-left"],S=l["top-right"],_=l["top-selection"],q=L.value===!0&&_!==void 0&&ee.value>0,B="q-table__top relative-position row items-center";if(t!==void 0)return o("div",{class:B},[t(X.value)]);let O;if(q===!0?O=_(X.value).slice():(O=[],d!==void 0?O.push(o("div",{class:"q-table__control"},[d(X.value)])):e.title&&O.push(o("div",{class:"q-table__control"},[o("div",{class:["q-table__title",e.titleClass]},e.title)]))),S!==void 0&&(O.push(o("div",{class:"q-table__separator col"})),O.push(o("div",{class:"q-table__control"},[S(X.value)]))),O.length!==0)return o("div",{class:B},O)}const Be=u(()=>re.value===!0?null:W.value);function Ve(){const t=ut();return e.loading===!0&&l.loading===void 0&&t.push(o("tr",{class:"q-table__progress"},[o("th",{class:"relative-position",colspan:pe.value},Re())])),o("thead",t)}function ut(){const t=l.header,d=l["header-cell"];if(t!==void 0)return t(qe({header:!0})).slice();const S=z.value.map(_=>{const q=l[`header-cell-${_.name}`],B=q!==void 0?q:d,O=qe({col:_});return B!==void 0?B(O):o(Yt,{key:_.name,props:O},()=>_.label)});if(ne.value===!0&&e.grid!==!0)S.unshift(o("th",{class:"q-table--col-auto-width"}," "));else if(Z.value===!0){const _=l["header-selection"],q=_!==void 0?_(qe({})):[o(Pe,{color:e.color,modelValue:Be.value,dark:s.value,dense:e.dense,"onUpdate:modelValue":je})];S.unshift(o("th",{class:"q-table--col-auto-width"},q))}return[o("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},S)]}function qe(t){return Object.assign(t,{cols:z.value,sort:be,colsMap:Fe.value,color:e.color,dark:s.value,dense:e.dense}),Z.value===!0&&I(t,"selected",()=>Be.value,je),t}function je(t){re.value===!0&&(t=!1),M(T.value.map(f.value),T.value,t)}const ce=u(()=>{const t=[e.iconFirstPage||n.iconSet.table.firstPage,e.iconPrevPage||n.iconSet.table.prevPage,e.iconNextPage||n.iconSet.table.nextPage,e.iconLastPage||n.iconSet.table.lastPage];return n.lang.rtl===!0?t.reverse():t});function st(){if(e.hideBottom===!0)return;if(Je.value===!0){if(e.hideNoData===!0)return;const S=e.loading===!0?e.loadingLabel||n.lang.table.loading:e.filter?e.noResultsLabel||n.lang.table.noResults:e.noDataLabel||n.lang.table.noData,_=l["no-data"],q=_!==void 0?[_({message:S,icon:n.iconSet.table.warning,filter:e.filter})]:[o(Ae,{class:"q-table__bottom-nodata-icon",name:n.iconSet.table.warning}),S];return o("div",{class:fe+" q-table__bottom--nodata"},q)}const t=l.bottom;if(t!==void 0)return o("div",{class:fe},[t(X.value)]);const d=e.hideSelectedBanner!==!0&&L.value===!0&&ee.value>0?[o("div",{class:"q-table__control"},[o("div",[(e.selectedRowsLabel||n.lang.table.selectedRecords)(ee.value)])])]:[];if(e.hidePagination!==!0)return o("div",{class:fe+" justify-end"},dt(d));if(d.length!==0)return o("div",{class:fe},d)}function ct(t){R({page:1,rowsPerPage:t.value})}function dt(t){let d;const{rowsPerPage:S}=y.value,_=e.paginationLabel||n.lang.table.pagination,q=l.pagination,B=e.rowsPerPageOptions.length>1;if(t.push(o("div",{class:"q-table__separator col"})),B===!0&&t.push(o("div",{class:"q-table__control"},[o("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||n.lang.table.recordsPerPage]),o(Qt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:S,options:Ge.value,displayValue:S===0?n.lang.table.allRows:S,dark:s.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),q!==void 0)d=q(X.value);else if(d=[o("span",S!==0?{class:"q-table__bottom-item"}:{},[S?_(oe.value+1,Math.min(ie.value,se.value),se.value):_(1,p.value,se.value)])],S!==0&&ue.value>1){const O={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(O.size="sm"),ue.value>2&&d.push(o(G,{key:"pgFirst",...O,icon:ce.value[0],disable:me.value,onClick:ye})),d.push(o(G,{key:"pgPrev",...O,icon:ce.value[1],disable:me.value,onClick:he}),o(G,{key:"pgNext",...O,icon:ce.value[2],disable:Se.value,onClick:_e})),ue.value>2&&d.push(o(G,{key:"pgLast",...O,icon:ce.value[3],disable:Se.value,onClick:we}))}return t.push(o("div",{class:"q-table__control"},d)),t}function vt(){const t=e.gridHeader===!0?[o("table",{class:"q-table"},[Ve()])]:e.loading===!0&&l.loading===void 0?Re():void 0;return o("div",{class:"q-table__middle"},t)}function ft(){const t=l.item!==void 0?l.item:d=>{const S=d.cols.map(q=>o("div",{class:"q-table__grid-item-row"},[o("div",{class:"q-table__grid-item-title"},[q.label]),o("div",{class:"q-table__grid-item-value"},[q.value])]));if(L.value===!0){const q=l["body-selection"],B=q!==void 0?q(d):[o(Pe,{modelValue:d.selected,color:e.color,dark:s.value,dense:e.dense,"onUpdate:modelValue":(O,Q)=>{M([d.key],[d.row],O,Q)}})];S.unshift(o("div",{class:"q-table__grid-item-row"},B),o(pt,{dark:s.value}))}const _={class:["q-table__grid-item-card"+P.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(_.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(_.onClick=q=>{a("RowClick",q,d.row,d.pageIndex)}),e.onRowDblclick!==void 0&&(_.onDblclick=q=>{a("RowDblclick",q,d.row,d.pageIndex)})),o("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(d.selected===!0?" q-table__grid-item--selected":"")},[o("div",_,S)])};return o("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},T.value.map((d,S)=>t(Oe({key:f.value(d),row:d,pageIndex:S}))))}return Object.assign(v.proxy,{requestServerInteraction:g,setPagination:R,firstPage:ye,prevPage:he,nextPage:_e,lastPage:we,isRowSelected:C,clearSelection:D,isRowExpanded:V,setExpanded:x,sort:be,resetVirtualScroll:et,scrollTo:lt,getCellValue:K}),Ft(v.proxy,{filteredSortedRows:()=>$.value,computedRows:()=>T.value,computedRowsNumber:()=>se.value}),()=>{const t=[it()],d={ref:h,class:F.value};return e.grid===!0?t.push(vt()):Object.assign(d,{class:[d.class,e.cardClass],style:e.cardStyle}),t.push(tt(),st()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),o("div",d,t)}}});function Y(e,l,a,v){const n=[];return e.forEach(s=>{v(s)===!0?n.push(s):l.push({failedPropValidation:a,file:s})}),n}function ge(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),Ie(e)}const hl={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},_l=["rejected"];function wl({editable:e,dnd:l,getFileInput:a,addFilesToQueue:v}){const{props:n,emit:s,proxy:i}=U(),c=A(null),f=u(()=>n.accept!==void 0?n.accept.split(",").map(g=>(g=g.trim(),g==="*"?"*/":(g.endsWith("/*")&&(g=g.slice(0,g.length-1)),g.toUpperCase()))):null),h=u(()=>parseInt(n.maxFiles,10)),r=u(()=>parseInt(n.maxTotalSize,10));function m(g){if(e.value)if(g!==Object(g)&&(g={target:null}),g.target!==null&&g.target.matches('input[type="file"]')===!0)g.clientX===0&&g.clientY===0&&Rt(g);else{const R=a();R&&R!==g.target&&R.click(g)}}function P(g){e.value&&g&&v(null,g)}function k(g,R,w,V){let x=Array.from(R||g.target.files);const E=[],$=()=>{E.length!==0&&s("rejected",E)};if(n.accept!==void 0&&f.value.indexOf("*/")===-1&&(x=Y(x,E,"accept",p=>f.value.some(T=>p.type.toUpperCase().startsWith(T)||p.name.toUpperCase().endsWith(T))),x.length===0))return $();if(n.maxFileSize!==void 0){const p=parseInt(n.maxFileSize,10);if(x=Y(x,E,"max-file-size",T=>T.size<=p),x.length===0)return $()}if(n.multiple!==!0&&x.length!==0&&(x=[x[0]]),x.forEach(p=>{p.__key=p.webkitRelativePath+p.lastModified+p.name+p.size}),V===!0){const p=w.map(T=>T.__key);x=Y(x,E,"duplicate",T=>p.includes(T.__key)===!1)}if(x.length===0)return $();if(n.maxTotalSize!==void 0){let p=V===!0?w.reduce((T,L)=>T+L.size,0):0;if(x=Y(x,E,"max-total-size",T=>(p+=T.size,p<=r.value)),x.length===0)return $()}if(typeof n.filter=="function"){const p=n.filter(x);x=Y(x,E,"filter",T=>p.includes(T))}if(n.maxFiles!==void 0){let p=V===!0?w.length:0;if(x=Y(x,E,"max-files",()=>(p++,p<=h.value)),x.length===0)return $()}if($(),x.length!==0)return x}function F(g){ge(g),l.value!==!0&&(l.value=!0)}function b(g){Ie(g),(g.relatedTarget!==null||Tt.is.safari!==!0?g.relatedTarget!==c.value:document.elementsFromPoint(g.clientX,g.clientY).includes(c.value)===!1)===!0&&(l.value=!1)}function y(g){ge(g);const R=g.dataTransfer.files;R.length!==0&&v(null,R),l.value=!1}function j(g){if(l.value===!0)return o("div",{ref:c,class:`q-${g}__dnd absolute-full`,onDragenter:ge,onDragover:ge,onDragleave:b,onDrop:y})}return Object.assign(i,{pickFiles:m,addFiles:P}),{pickFiles:m,addFiles:P,onDragover:F,onDragleave:b,processFiles:k,getDndNode:j,maxFilesNumber:h,maxTotalSizeNumber:r}}var Tl=H({name:"QFile",inheritAttrs:!1,props:{...Ot,...Bt,...hl,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Vt,..._l],setup(e,{slots:l,emit:a,attrs:v}){const{proxy:n}=U(),s=jt(),i=A(null),c=A(!1),f=Dt(e),{pickFiles:h,onDragover:r,onDragleave:m,processFiles:P,getDndNode:k}=wl({editable:s.editable,dnd:c,getFileInput:ne,addFilesToQueue:Z}),F=Mt(e),b=u(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),y=u(()=>Ee(b.value)),j=u(()=>b.value.map(C=>C.name).join(", ")),g=u(()=>Ht(b.value.reduce((C,D)=>C+D.size,0))),R=u(()=>({totalSize:g.value,filesNumber:b.value.length,maxFiles:e.maxFiles})),w=u(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:f.value,...v,id:s.targetUid.value,disabled:s.editable.value!==!0})),V=u(()=>"q-file q-field--auto-height"+(c.value===!0?" q-file--dnd":"")),x=u(()=>e.multiple===!0&&e.append===!0);function E(C){const D=b.value.slice();D.splice(C,1),p(D)}function $(C){const D=b.value.indexOf(C);D!==-1&&E(D)}function p(C){a("update:modelValue",e.multiple===!0?C:C[0])}function T(C){C.keyCode===13&&Nt(C)}function L(C){(C.keyCode===13||C.keyCode===32)&&h(C)}function ne(){return i.value}function Z(C,D){const M=P(C,D,b.value,x.value),te=ne();te!=null&&(te.value=""),M!==void 0&&((e.multiple===!0?e.modelValue&&M.every(z=>b.value.includes(z)):e.modelValue===M[0])||p(x.value===!0?b.value.concat(M):M))}function W(){return[o("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function re(){if(l.file!==void 0)return b.value.length===0?W():b.value.map((D,M)=>l.file({index:M,file:D,ref:this}));if(l.selected!==void 0)return b.value.length===0?W():l.selected({files:b.value,ref:this});if(e.useChips===!0)return b.value.length===0?W():b.value.map((D,M)=>o(It,{key:"file-"+M,removable:s.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{E(M)}},()=>o("span",{class:"ellipsis",textContent:D.name})));const C=e.displayValue!==void 0?e.displayValue:j.value;return C.length!==0?[o("div",{class:e.inputClass,style:e.inputStyle,textContent:C})]:W()}function ee(){const C={ref:i,...w.value,...F.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:Z};return e.multiple===!0&&(C.multiple=!0),o("input",C)}return Object.assign(s,{fieldClass:V,emitValue:p,hasValue:y,inputRef:i,innerValue:b,floatingLabel:u(()=>y.value===!0||Ee(e.displayValue)),computedCounter:u(()=>{if(e.counterLabel!==void 0)return e.counterLabel(R.value);const C=e.maxFiles;return`${b.value.length}${C!==void 0?" / "+C:""} (${g.value})`}),getControlChild:()=>k("file"),getControl:()=>{const C={ref:s.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return s.editable.value===!0&&Object.assign(C,{onDragover:r,onDragleave:m,onKeydown:T,onKeyup:L}),o("div",C,[ee()].concat(re()))}}),Object.assign(n,{removeAtIndex:E,removeFile:$,getNativeElement:()=>i.value}),I(n,"nativeEl",()=>i.value),Et(s)}});export{Tl as Q,pl as a,xl as b,Fl as c,Rl as d};
