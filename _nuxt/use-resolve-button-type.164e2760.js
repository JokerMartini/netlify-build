import{o as u}from"./open-closed.ae49d5b9.js";import{r as a,e as l,w as f}from"./entry.6edba235.js";function r(t,n){if(t)return t;let e=n??"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function v(t,n){let e=a(r(t.value.type,t.value.as));return l(()=>{e.value=r(t.value.type,t.value.as)}),f(()=>{var o;e.value||u(n)&&u(n)instanceof HTMLButtonElement&&!((o=u(n))!=null&&o.hasAttribute("type"))&&(e.value="button")}),e}export{v as b};
