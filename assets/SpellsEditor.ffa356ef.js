import{Q as P}from"./QMarkupTable.929353ff.js";import{P as E,ao as q,ad as O,ah as L,r as $,bU as U,bV as T,_ as N,V as j,a8 as A,a0 as o,Z as a,a3 as F,a4 as _,X as k,Y as r,$ as H,at as I,aI as B,aa as f,aE as R,a as J,au as K,aD as M,bF as z,w as G,bJ as W,a2 as u,bW as X,bG as Y}from"./index.814d959e.js";import{Q as Z,a as x,b as g,c as w,d as ee}from"./QFile.3241001d.js";import{n as h,g as D}from"./use-dialog-plugin-component.a48b7cfc.js";import{Q as le}from"./use-fullscreen.e4bc31b7.js";import{u as ae,N as te}from"./NewSpellDialog.04984ef1.js";import{d as oe}from"./download.223253d2.js";const se=E({name:"LoadSpellsDialog",emits:[...h.emits],setup(){const{dialogRef:e,onDialogHide:i,onDialogOK:c,onDialogCancel:v}=h(),m=q(),{t:n}=O(),l=L(),t=$(),d=$(!1),Q=()=>{if(t.value!=null){const S=new FileReader;S.addEventListener("load",b=>{var V;try{const s=JSON.parse((V=b.target)==null?void 0:V.result),y=Array.isArray(s)?U.v1:U.v2,C=T(s,y);if(C.valid){const p=l.import(Array.isArray(s)?s:Object.values(s),d.value);m.notify({message:n("editor.spellcasting.custom.importResult",{n:p.imported},p.imported),type:"positive"}),p.skipped>0&&m.notify({message:n("editor.spellcasting.custom.importSkip",{n:p.skipped},p.skipped),type:"warning"})}else m.notify({message:n("editor.spellcasting.custom.importInvalid",[C.errors.map(p=>p.stack).join(", ")]),type:"negative"}),console.error(C.errors)}catch(s){m.notify({message:n("editor.spellcasting.custom.importError",[s]),type:"negative"}),console.error(s)}}),S.addEventListener("error",b=>{m.notify({message:n("editor.spellcasting.custom.importError",[b]),type:"negative"}),console.error(b)}),S.readAsText(t.value)}};return{dialogRef:e,onDialogHide:i,onOKClick(){Q(),c()},onCancelClick:v,spellStore:l,file:t,overwrite:d}}}),ie={class:"text-h6"},ne={class:"col-12 flex items-center"};function de(e,i,c,v,m,n){return j(),A(R,{ref:"dialogRef",onHide:e.onDialogHide},{default:o(()=>[a(F,{class:"q-dialog-plugin import-spell-dialog"},{default:o(()=>[a(_,null,{default:o(()=>[k("div",ie,r(e.$t("editor.spellcasting.custom.importDialog")),1)]),_:1}),a(H),a(_,{class:"row"},{default:o(()=>[a(Z,{modelValue:e.file,"onUpdate:modelValue":i[0]||(i[0]=l=>e.file=l),class:"q-pa-md col-12",label:e.$t("editor.spellcasting.custom.importFile"),accept:".5emms.json"},null,8,["modelValue","label"]),k("div",ne,[a(I,{modelValue:e.overwrite,"onUpdate:modelValue":i[1]||(i[1]=l=>e.overwrite=l),label:e.$t("editor.spellcasting.custom.importMode")},null,8,["modelValue","label"])])]),_:1}),a(B,{align:"right"},{default:o(()=>[a(f,{color:"green",label:e.$t("editor.spellcasting.custom.import"),disabled:e.file==null,onClick:e.onOKClick},null,8,["label","disabled","onClick"]),a(f,{color:"primary",label:e.$t("editor.cancel"),onClick:e.onCancelClick},null,8,["label","onClick"])]),_:1})]),_:1})]),_:1},8,["onHide"])}var re=N(se,[["render",de]]);const me=E({name:"SpellsEditor",setup(){const{t:e}=O(),i=q(),c=L(),{ordinalSpellLevels:v,spellOptions:m}=ae(),n=$([]),l=J(()=>Object.values(c.customSpells)),{SrdCastingClassOptions:t}=K(),d=[{name:"name",field:"name",required:!0,label:e("editor.spellcasting.custom.name"),align:"left",sortable:!0},{name:"level",label:e("editor.spellcasting.custom.level"),sortable:!0,field:s=>s.level,format:s=>s===0?e("editor.spellcasting.slot.cantrip"):e("editor.spellcasting.slot.level",{ordinal:v[s]})},{name:"class",label:e("editor.spellcasting.custom.classes"),sortable:!1,field:"class",format:s=>s.map(y=>M.capitalize(y)).join(", ")},{name:"damage",label:e("editor.spellcasting.custom.damage"),sortable:!0,field:"damage"},{name:"multitarget",label:e("editor.spellcasting.custom.multitarget"),sortable:!1,field:"multitarget",format:s=>e(s?"editor.spellcasting.custom.mtTrue":"editor.spellcasting.custom.mtFalse")}];return{spells:l,columns:d,selected:n,spellOptions:m,SrdCastingClassOptions:t,addSpell:()=>{i.dialog({component:te})},deleteSpells:()=>{n.value.forEach(s=>c.deleteSpell(s.name)),n.value=[]},downloadSpells:()=>{oe(JSON.stringify(c.customSpells),"custom-spells.5emms.json","application/json")},importSpells:()=>{i.dialog({component:re})},validateNumber:z}}}),ue={class:"text-h6"};function ce(e,i,c,v,m,n){return j(),A(le,{style:{"min-height":"calc(100vh - 120px)"}},{default:o(()=>[a(ee,{selected:e.selected,"onUpdate:selected":i[0]||(i[0]=l=>e.selected=l),title:e.$t("editor.spellcasting.custom.title"),rows:e.spells,columns:e.columns,pagination:{rowsPerPage:15},"row-key":"name",class:"q-mx-auto q-my-md",selection:"multiple",style:{width:"98vw"}},{top:o(()=>[k("div",ue,r(e.$t("editor.spellcasting.custom.title")),1),a(P),G(a(f,{color:"negative",class:"q-mr-md",onClick:e.deleteSpells},{default:o(()=>[u(r(e.$t("editor.spellcasting.custom.delete",e.selected.length)),1)]),_:1},8,["onClick"]),[[W,e.selected.length!==0]]),a(f,{color:"primary",class:"q-mr-md",onClick:e.importSpells},{default:o(()=>[u(r(e.$t("editor.spellcasting.custom.import")),1)]),_:1},8,["onClick"]),a(f,{color:"primary",class:"q-mr-md",onClick:e.downloadSpells},{default:o(()=>[u(r(e.$t("editor.spellcasting.custom.export")),1)]),_:1},8,["onClick"]),a(f,{color:"positive",onClick:e.addSpell},{default:o(()=>[u(r(e.$t("editor.spellcasting.custom.create")),1)]),_:1},8,["onClick"])]),body:o(l=>[a(x,{props:l},{default:o(()=>[a(g,null,{default:o(()=>[a(X,{modelValue:l.selected,"onUpdate:modelValue":t=>l.selected=t},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(g,{key:"name",props:l},{default:o(()=>[u(r(l.row.name),1)]),_:2},1032,["props"]),a(g,{key:"level",props:l,class:"editable"},{default:o(()=>[u(r(l.cols[1].format(l.row.level))+" ",1),a(w,{modelValue:l.row.level,"onUpdate:modelValue":t=>l.row.level=t,"auto-save":"",title:e.$t("editor.spellcasting.custom.level")},{default:o(t=>[a(D,{modelValue:t.value,"onUpdate:modelValue":d=>t.value=d,options:e.spellOptions,"emit-value":"","map-options":"",label:e.$t("editor.spellcasting.custom.level")},null,8,["modelValue","onUpdate:modelValue","options","label"])]),_:2},1032,["modelValue","onUpdate:modelValue","title"])]),_:2},1032,["props"]),a(g,{key:"class",props:l,class:"editable"},{default:o(()=>[u(r(l.cols[2].format(l.row.class))+" ",1),a(w,{modelValue:l.row.class,"onUpdate:modelValue":t=>l.row.class=t,"auto-save":"",title:e.$t("editor.spellcasting.custom.classes")},{default:o(t=>[a(D,{modelValue:t.value,"onUpdate:modelValue":d=>t.value=d,options:e.SrdCastingClassOptions,multiple:"",clearable:"","emit-value":"","map-options":"","new-value-mode":"add-unique","use-input":"",label:e.$t("editor.spellcasting.custom.classes"),onClear:d=>t.value=[]},null,8,["modelValue","onUpdate:modelValue","options","label","onClear"])]),_:2},1032,["modelValue","onUpdate:modelValue","title"])]),_:2},1032,["props"]),a(g,{key:"damage",props:l,class:"editable"},{default:o(()=>[u(r(l.row.damage)+" ",1),a(w,{modelValue:l.row.damage,"onUpdate:modelValue":t=>l.row.damage=t,"auto-save":"",title:e.$t("editor.spellcasting.custom.damage")},{default:o(t=>[a(Y,{"model-value":t.value,type:"number",min:"0",label:e.$t("editor.spellcasting.custom.damage"),"onUpdate:modelValue":d=>t.value=e.validateNumber(d,0)},null,8,["model-value","label","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue","title"])]),_:2},1032,["props"]),a(g,{key:"multitarget",props:l},{default:o(()=>[u(r(l.cols[4].format(l.row.multitarget)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["selected","title","rows","columns"])]),_:1})}var ye=N(me,[["render",ce],["__scopeId","data-v-7f619a94"]]);export{ye as default};