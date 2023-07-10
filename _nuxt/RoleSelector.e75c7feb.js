import{r as _,b as m,a as N,O as L,p as ae,e as A,i as Z,h as $,F as G,f as le,w as oe,l as D,j as ne,y as ie,o as M,z as E,v as T,t as I,q as B,u as j,C as K,I as se,E as re,m as Q,D as ue}from"./entry.6edba235.js";import{_ as de}from"./CheckMark.ac8a70c6.js";import{u as P,o as x,c as ve,l as F,K as pe,H as z,T as ce,t as q,p as fe,N as W,a as b}from"./open-closed.ae49d5b9.js";import{x as be,a as S,u as me}from"./use-tracked-pointer.6f07f908.js";import{b as xe}from"./use-resolve-button-type.164e2760.js";import{y as ge,w as he,h as ye,O as Se}from"./use-outside-click.461443a9.js";import{f as Oe,a as _e}from"./hidden.a52f3787.js";function J(t={},i=null,n=[]){for(let[g,e]of Object.entries(t))Y(n,X(i,g),e);return n}function X(t,i){return t?t+"["+i+"]":i}function Y(t,i,n){if(Array.isArray(n))for(let[g,e]of n.entries())Y(t,X(i,g.toString()),e);else n instanceof Date?t.push([i,n.toISOString()]):typeof n=="boolean"?t.push([i,n?"1":"0"]):typeof n=="string"?t.push([i,n]):typeof n=="number"?t.push([i,`${n}`]):n==null?t.push([i,""]):J(n,i,t)}function we(t,i,n){let g=_(n==null?void 0:n.value),e=m(()=>t.value!==void 0);return[m(()=>e.value?t.value:g.value),function(p){return e.value||(g.value=p),i==null?void 0:i(p)}]}function Re(t,i){return t===i}var Le=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Le||{}),ke=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(ke||{}),Pe=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(Pe||{});function Ie(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let ee=Symbol("ListboxContext");function U(t){let i=ne(ee,null);if(i===null){let n=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}return i}let Te=N({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Re},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:i,attrs:n,emit:g}){let e=_(1),p=_(null),h=_(null),v=_(null),c=_([]),a=_(""),l=_(null),w=_(1);function O(o=s=>s){let s=l.value!==null?c.value[l.value]:null,u=Se(o(c.value.slice()),y=>x(y.dataRef.domRef)),d=s?u.indexOf(s):null;return d===-1&&(d=null),{options:u,activeOptionIndex:d}}let k=m(()=>t.multiple?1:0),[R,V]=we(m(()=>t.modelValue===void 0?P(k.value,{[1]:[],[0]:void 0}):t.modelValue),o=>g("update:modelValue",o),m(()=>t.defaultValue)),r={listboxState:e,value:R,mode:k,compare(o,s){if(typeof t.by=="string"){let u=t.by;return(o==null?void 0:o[u])===(s==null?void 0:s[u])}return t.by(o,s)},orientation:m(()=>t.horizontal?"horizontal":"vertical"),labelRef:p,buttonRef:h,optionsRef:v,disabled:m(()=>t.disabled),options:c,searchQuery:a,activeOptionIndex:l,activationTrigger:w,closeListbox(){t.disabled||e.value!==1&&(e.value=1,l.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(o,s,u){if(t.disabled||e.value===1)return;let d=O(),y=be(o===S.Specific?{focus:S.Specific,id:s}:{focus:o},{resolveItems:()=>d.options,resolveActiveIndex:()=>d.activeOptionIndex,resolveId:C=>C.id,resolveDisabled:C=>C.dataRef.disabled});a.value="",l.value=y,w.value=u??1,c.value=d.options},search(o){if(t.disabled||e.value===1)return;let s=a.value!==""?0:1;a.value+=o.toLowerCase();let u=(l.value!==null?c.value.slice(l.value+s).concat(c.value.slice(0,l.value+s)):c.value).find(y=>y.dataRef.textValue.startsWith(a.value)&&!y.dataRef.disabled),d=u?c.value.indexOf(u):-1;d===-1||d===l.value||(l.value=d,w.value=1)},clearSearch(){t.disabled||e.value!==1&&a.value!==""&&(a.value="")},registerOption(o,s){let u=O(d=>[...d,{id:o,dataRef:s}]);c.value=u.options,l.value=u.activeOptionIndex},unregisterOption(o){let s=O(u=>{let d=u.findIndex(y=>y.id===o);return d!==-1&&u.splice(d,1),u});c.value=s.options,l.value=s.activeOptionIndex,w.value=1},select(o){t.disabled||V(P(k.value,{[0]:()=>o,[1]:()=>{let s=L(r.value.value).slice(),u=L(o),d=s.findIndex(y=>r.compare(u,L(y)));return d===-1?s.push(u):s.splice(d,1),s}}))}};ge([h,v],(o,s)=>{var u;r.closeListbox(),he(s,ye.Loose)||(o.preventDefault(),(u=x(h))==null||u.focus())},m(()=>e.value===0)),ae(ee,r),ve(m(()=>P(e.value,{[0]:F.Open,[1]:F.Closed})));let f=m(()=>{var o;return(o=x(h))==null?void 0:o.closest("form")});return A(()=>{Z([f],()=>{if(!f.value||t.defaultValue===void 0)return;function o(){r.select(t.defaultValue)}return f.value.addEventListener("reset",o),()=>{var s;(s=f.value)==null||s.removeEventListener("reset",o)}},{immediate:!0})}),()=>{let{name:o,modelValue:s,disabled:u,form:d,...y}=t,C={open:e.value===0,disabled:u,value:R.value};return $(G,[...o!=null&&R.value!=null?J({[o]:R.value}).map(([H,te])=>$(Oe,pe({features:_e.Hidden,key:H,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:d,name:H,value:te}))):[],z({ourProps:{},theirProps:{...n,...ce(y,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:C,slots:i,attrs:n,name:"Listbox"})])}}}),De=N({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${q()}`}},setup(t,{attrs:i,slots:n,expose:g}){let e=U("ListboxButton");g({el:e.buttonRef,$el:e.buttonRef});function p(a){switch(a.key){case b.Space:case b.Enter:case b.ArrowDown:a.preventDefault(),e.openListbox(),D(()=>{var l;(l=x(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(S.First)});break;case b.ArrowUp:a.preventDefault(),e.openListbox(),D(()=>{var l;(l=x(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(S.Last)});break}}function h(a){switch(a.key){case b.Space:a.preventDefault();break}}function v(a){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),D(()=>{var l;return(l=x(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(a.preventDefault(),e.openListbox(),Ie(()=>{var l;return(l=x(e.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let c=xe(m(()=>({as:t.as,type:i.type})),e.buttonRef);return()=>{var a,l;let w={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:O,...k}=t,R={ref:e.buttonRef,id:O,type:c.value,"aria-haspopup":"listbox","aria-controls":(a=x(e.optionsRef))==null?void 0:a.id,"aria-expanded":e.disabled.value?void 0:e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(l=x(e.labelRef))==null?void 0:l.id,O].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:p,onKeyup:h,onClick:v};return z({ourProps:R,theirProps:k,slot:w,attrs:i,slots:n,name:"ListboxButton"})}}}),Ve=N({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${q()}`}},setup(t,{attrs:i,slots:n,expose:g}){let e=U("ListboxOptions"),p=_(null);g({el:e.optionsRef,$el:e.optionsRef});function h(a){switch(p.value&&clearTimeout(p.value),a.key){case b.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case b.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeOptionIndex.value!==null){let l=e.options.value[e.activeOptionIndex.value];e.select(l.dataRef.value)}e.mode.value===0&&(e.closeListbox(),D(()=>{var l;return(l=x(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case P(e.orientation.value,{vertical:b.ArrowDown,horizontal:b.ArrowRight}):return a.preventDefault(),a.stopPropagation(),e.goToOption(S.Next);case P(e.orientation.value,{vertical:b.ArrowUp,horizontal:b.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),e.goToOption(S.Previous);case b.Home:case b.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToOption(S.First);case b.End:case b.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToOption(S.Last);case b.Escape:a.preventDefault(),a.stopPropagation(),e.closeListbox(),D(()=>{var l;return(l=x(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case b.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(e.search(a.key),p.value=setTimeout(()=>e.clearSearch(),350));break}}let v=fe(),c=m(()=>v!==null?(v.value&F.Open)===F.Open:e.listboxState.value===0);return()=>{var a,l,w,O;let k={open:e.listboxState.value===0},{id:R,...V}=t,r={"aria-activedescendant":e.activeOptionIndex.value===null||(a=e.options.value[e.activeOptionIndex.value])==null?void 0:a.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(O=(l=x(e.labelRef))==null?void 0:l.id)!=null?O:(w=x(e.buttonRef))==null?void 0:w.id,"aria-orientation":e.orientation.value,id:R,onKeydown:h,role:"listbox",tabIndex:0,ref:e.optionsRef};return z({ourProps:r,theirProps:V,slot:k,attrs:i,slots:n,features:W.RenderStrategy|W.Static,visible:c.value,name:"ListboxOptions"})}}}),Ce=N({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${q()}`}},setup(t,{slots:i,attrs:n,expose:g}){let e=U("ListboxOption"),p=_(null);g({el:p,$el:p});let h=m(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t.id:!1),v=m(()=>P(e.mode.value,{[0]:()=>e.compare(L(e.value.value),L(t.value)),[1]:()=>L(e.value.value).some(r=>e.compare(L(r),L(t.value)))})),c=m(()=>P(e.mode.value,{[1]:()=>{var r;let f=L(e.value.value);return((r=e.options.value.find(o=>f.some(s=>e.compare(L(s),L(o.dataRef.value)))))==null?void 0:r.id)===t.id},[0]:()=>v.value})),a=m(()=>({disabled:t.disabled,value:t.value,textValue:"",domRef:p}));A(()=>{var r,f;let o=(f=(r=x(p))==null?void 0:r.textContent)==null?void 0:f.toLowerCase().trim();o!==void 0&&(a.value.textValue=o)}),A(()=>e.registerOption(t.id,a)),le(()=>e.unregisterOption(t.id)),A(()=>{Z([e.listboxState,v],()=>{e.listboxState.value===0&&v.value&&P(e.mode.value,{[1]:()=>{c.value&&e.goToOption(S.Specific,t.id)},[0]:()=>{e.goToOption(S.Specific,t.id)}})},{immediate:!0})}),oe(()=>{e.listboxState.value===0&&h.value&&e.activationTrigger.value!==0&&D(()=>{var r,f;return(f=(r=x(p))==null?void 0:r.scrollIntoView)==null?void 0:f.call(r,{block:"nearest"})})});function l(r){if(t.disabled)return r.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),D(()=>{var f;return(f=x(e.buttonRef))==null?void 0:f.focus({preventScroll:!0})}))}function w(){if(t.disabled)return e.goToOption(S.Nothing);e.goToOption(S.Specific,t.id)}let O=me();function k(r){O.update(r)}function R(r){O.wasMoved(r)&&(t.disabled||h.value||e.goToOption(S.Specific,t.id,0))}function V(r){O.wasMoved(r)&&(t.disabled||h.value&&e.goToOption(S.Nothing))}return()=>{let{disabled:r}=t,f={active:h.value,selected:v.value,disabled:r},{id:o,value:s,disabled:u,...d}=t,y={id:o,ref:p,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":v.value,disabled:void 0,onClick:l,onFocus:w,onPointerenter:k,onMouseenter:k,onPointermove:R,onMousemove:R,onPointerleave:V,onMouseleave:V};return z({ourProps:y,theirProps:d,slot:f,attrs:n,slots:i,name:"ListboxOption"})}}});const Be={},je={width:"100%",height:"100%",viewBox:"0 0 48 48",fill:"currentColor"},Ae=T("path",{d:"M24,30.8L12,18.8L14.15,16.65L24,26.5L33.85,16.65L36,18.8L24,30.8Z"},null,-1),Me=[Ae];function Ee(t,i){return M(),E("svg",je,Me)}const Fe=ie(Be,[["render",Ee]]),Ne={class:"relative"},ze={class:"relative mt-1"},Ue={class:"block truncate"},Ke={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},qe={class:"text-xs text-gray-400"},He={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-500"},Ye={__name:"RoleSelector",setup(t){const i=[{name:"admin",description:"Full control of everything."},{name:"artist",description:"Can view and use assets"},{name:"manager",description:"Can view, edit, add and remove assets"}],n=_(i[0]);return(g,e)=>{const p=Fe,h=de;return M(),E("div",Ne,[I(j(Te),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=v=>n.value=v)},{default:B(()=>[T("div",ze,[I(j(De),{class:"relative w-40 bg-gray-700 grow-0 shrink-0 rounded-lg py-2 pl-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"},{default:B(()=>[T("span",Ue,K(n.value.name),1),T("span",Ke,[I(p,{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),I(se,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:B(()=>[I(j(Ve),{class:"z-40 bg-gray-700 absolute max-h-60 w-60 overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:B(()=>[(M(),E(G,null,re(i,v=>I(j(Ce),{key:v.name,value:v,as:"template"},{default:B(({active:c,selected:a})=>[T("li",{class:Q([c?"bg-gray-600 text-white":"","relative cursor-pointer select-none py-2 pl-10 pr-4"])},[T("span",{class:Q([a?"font-medium":"font-normal","block truncate text-white"])},K(v.name),3),T("span",qe,K(v.description),1),a?(M(),E("span",He,[I(h,{class:"h-5 w-5"})])):ue("",!0)],2)]),_:2},1032,["value"])),64))]),_:1})]),_:1})])]),_:1},8,["modelValue"])])}}};export{Ye as _};
