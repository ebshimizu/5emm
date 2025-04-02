import{Q as P}from"./QMarkupTable.6228698c.js";import{P as S,ao as D,ad as N,r as k,_ as U,V as E,a8 as I,a0 as l,Z as t,a3 as j,a4 as h,X as u,Y as o,$ as B,at as V,a2 as p,aI as H,aa as b,aE as R,a as Q,U as A,w as F,bJ as J,bX as K,Q as T,bG as M}from"./index.983957c9.js";import{Q as X,a as z,b as v,c as G,d as Y}from"./QFile.159e0ce6.js";import{u as O,a as Z,Q as W}from"./QBadge.83f550af.js";import{Q as x}from"./use-fullscreen.d8e60070.js";import{d as ee}from"./download.223253d2.js";import{A as te}from"./useCr.3f9fd181.js";import{Q as le}from"./QTooltip.a0c8303d.js";import{n as q}from"./use-dialog-plugin-component.b489df9b.js";const ae=S({name:"LoadSpellsDialog",emits:[...q.emits],setup(){const{dialogRef:e,onDialogHide:s,onDialogOK:d,onDialogCancel:f}=q(),r=D(),{t:m}=N(),i=O(),a=k(),n=k(!1),c=k(!1),L=()=>{if(a.value!=null){const _=new FileReader;_.addEventListener("load",y=>{var w;try{const $=JSON.parse((w=y.target)==null?void 0:w.result),C=Object.values($);c.value&&(console.log("found v1 templates, updating..."),Z(C));const g=i.import(C,n.value);r.notify({message:m("editor.template.importResult",{n:g.imported},g.imported),type:"positive"}),g.skipped>0&&r.notify({message:m("editor.template.importSkip",{n:g.skipped},g.skipped),type:"warning"})}catch($){r.notify({message:m("editor.template.importError",[$]),type:"negative"}),console.error($)}}),_.addEventListener("error",y=>{r.notify({message:m("editor.template.importError",[y]),type:"negative"}),console.error(y)}),_.readAsText(a.value)}};return{dialogRef:e,onDialogHide:s,onOKClick(){L(),d()},onCancelClick:f,templateStore:i,file:a,overwrite:n,isV1:c}}}),oe={class:"text-h6"},se={class:"col-6 flex items-center"},ie={class:"col-6 flex items-center"};function ne(e,s,d,f,r,m){return E(),I(R,{ref:"dialogRef",onHide:e.onDialogHide},{default:l(()=>[t(j,{class:"q-dialog-plugin import-spell-dialog"},{default:l(()=>[t(h,null,{default:l(()=>[u("div",oe,o(e.$t("editor.template.importDialog")),1)]),_:1}),t(B),t(h,{class:"row"},{default:l(()=>[t(X,{modelValue:e.file,"onUpdate:modelValue":s[0]||(s[0]=i=>e.file=i),class:"q-pa-md col-12",label:e.$t("editor.template.importFile"),accept:".5emmt.json"},null,8,["modelValue","label"]),u("div",se,[t(V,{modelValue:e.overwrite,"onUpdate:modelValue":s[1]||(s[1]=i=>e.overwrite=i),label:e.$t("editor.template.importMode")},null,8,["modelValue","label"])]),u("div",ie,[t(V,{modelValue:e.isV1,"onUpdate:modelValue":s[2]||(s[2]=i=>e.isV1=i),label:e.$t("editor.template.legacyImport")},{default:l(()=>[t(le,{class:"text-body2"},{default:l(()=>[p(o(e.$t("editor.template.legacyImportHint")),1)]),_:1})]),_:1},8,["modelValue","label"])])]),_:1}),t(H,{align:"right"},{default:l(()=>[t(b,{color:"green",label:e.$t("editor.template.import"),disabled:e.file==null,onClick:e.onOKClick},null,8,["label","disabled","onClick"]),t(b,{color:"primary",label:e.$t("editor.cancel"),onClick:e.onCancelClick},null,8,["label","onClick"])]),_:1})]),_:1})]),_:1},8,["onHide"])}var re=U(ae,[["render",ne]]);const de=S({name:"SpellsEditor",setup(){const{t:e}=N(),s=D(),d=O(),f=Q(()=>Object.values(d.customTemplates)),r=k([]),m=[{name:"templateName",field:"templateName",required:!0,label:e("editor.template.name"),align:"left",sortable:!0},{name:"type",field:"type",label:e("editor.template.type.type"),sortable:!0},{name:"name",field:"name",required:!0,label:e("editor.template.instanceName"),align:"left",sortable:!0},{name:"icon",label:e("editor.template.icon"),sortable:!0,field:"icon",align:"left"}],i=()=>{r.value.forEach(c=>d.deleteCustomTemplate(c.templateName)),r.value=[]},a=()=>{ee(JSON.stringify(d.customTemplates),"custom-templates.5emmt.json","application/json")},n=()=>{s.dialog({component:re})};return{columns:m,selected:r,templates:f,downloadTemplates:a,deleteTemplates:i,subtitles:Q(()=>d.allTemplateSubtitles),actionColor:te,importTemplates:n}}}),me={class:"text-h6"},pe={href:"https://quasar.dev/vue-components/icon#webfont-usage",target:"_blank"},ue={href:"https://fonts.google.com/icons?selected=Material+Icons&icon.style=Filled",target:"_blank"},ce={href:"https://materialdesignicons.com/",target:"_blank"},fe={href:"https://fontawesome.com/search?m=free",target:"_blank"};function ge(e,s,d,f,r,m){const i=A("i18n-t");return E(),I(x,{style:{"min-height":"calc(100vh - 120px)"}},{default:l(()=>[t(Y,{selected:e.selected,"onUpdate:selected":s[0]||(s[0]=a=>e.selected=a),title:e.$t("editor.template.title"),rows:e.templates,columns:e.columns,pagination:{rowsPerPage:15},"row-key":"name",class:"q-mx-auto q-my-md",selection:"multiple",style:{width:"98vw"}},{top:l(()=>[u("div",me,o(e.$t("editor.template.title")),1),t(P),F(t(b,{color:"negative",class:"q-mr-md",onClick:e.deleteTemplates},{default:l(()=>[p(o(e.$t("editor.template.delete",e.selected.length)),1)]),_:1},8,["onClick"]),[[J,e.selected.length!==0]]),t(b,{color:"primary",class:"q-mr-md",onClick:e.importTemplates},{default:l(()=>[p(o(e.$t("editor.template.import")),1)]),_:1},8,["onClick"]),t(b,{color:"primary",class:"q-mr-md",onClick:e.downloadTemplates},{default:l(()=>[p(o(e.$t("editor.template.export")),1)]),_:1},8,["onClick"])]),body:l(a=>[t(z,{props:a},{default:l(()=>[t(v,null,{default:l(()=>[t(K,{modelValue:a.selected,"onUpdate:modelValue":n=>a.selected=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(v,{key:"templateName",props:a},{default:l(()=>[p(o(a.row.templateName),1)]),_:2},1032,["props"]),t(v,{key:"type",props:a},{default:l(()=>[t(W,{color:e.actionColor[a.row.type]},{default:l(()=>[p(o(e.$t(`editor.template.type.${a.row.type}`)),1)]),_:2},1032,["color"])]),_:2},1032,["props"]),t(v,{key:"name",props:a},{default:l(()=>[p(o(a.row.name),1)]),_:2},1032,["props"]),t(v,{key:"icon",props:a,class:"editable"},{default:l(()=>[p(o(a.row.icon)+" ",1),t(T,{name:a.row.icon,size:"2em",class:"q-ml-sm"},null,8,["name"]),t(G,{modelValue:a.row.icon,"onUpdate:modelValue":n=>a.row.icon=n,"auto-save":"",title:e.$t("editor.template.icon")},{default:l(n=>[t(M,{modelValue:n.value,"onUpdate:modelValue":c=>n.value=c,label:e.$t("editor.template.icon"),"bottom-slots":"",class:"q-mb-xl"},{hint:l(()=>[t(i,{keypath:"editor.template.availableIcons"},{default:l(()=>[u("a",pe,o(e.$t("editor.template.link0")),1),u("a",ue,o(e.$t("editor.template.link1")),1),u("a",ce,o(e.$t("editor.template.link2")),1),u("a",fe,o(e.$t("editor.template.link3")),1)]),_:1})]),after:l(()=>[t(T,{name:n.value,class:"overflow-hidden"},null,8,["name"])]),_:2},1032,["modelValue","onUpdate:modelValue","label"])]),_:2},1032,["modelValue","onUpdate:modelValue","title"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["selected","title","rows","columns"])]),_:1})}var Ve=U(de,[["render",ge],["__scopeId","data-v-d2390aee"]]);export{Ve as default};
