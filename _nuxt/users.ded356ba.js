import{_ as x}from"./Search.373286d3.js";import{_ as h}from"./Close.ba90426a.js";import{_ as w}from"./nuxt-link.5d9bcad0.js";import{_ as y}from"./RoleSelector.8ad6ea72.js";import{a as v,b as g,r as b,i as C,o as n,e as i,h as e,f as l,q as k,v as L,u as r,H as N,F as V,y as B,t as R,A as S,z as c}from"./entry.ab0ca42c.js";import{u as d}from"./dummy.99150ef3.js";import"./CheckMark.c299417e.js";import"./use-resolve-button-type.b8776773.js";import"./use-tracked-pointer.2e375be3.js";const U={class:"flex justify-center w-full"},$={class:"flex flex-col items-start w-full max-w-7xl p-6 space-y-6"},j={class:"w-full flex items-center justify-between"},A=e("div",null,[e("div",{class:"text-2xl font-semibold text-white"},"Manager Users"),e("p",{class:"mt-2 text-sm"}," A list of all the users registered in Hunter. ")],-1),D={class:"relative flex rounded-lg bg-gray-700 items-center px-2"},E=["disabled"],F={class:"w-full flow-root"},H={class:"min-w-full table-fixed divide-y divide-gray-500"},M=e("thead",null,[e("tr",null,[e("th",{class:"text-gray-400 uppercase text-sm text-left whitespace-nowrap py-2"}," Name "),e("th",{class:"text-gray-400 uppercase text-sm text-left whitespace-nowrap py-2"}," Email "),e("th",{class:"text-gray-400 uppercase text-sm text-left whitespace-nowrap py-2"}," Role ")])],-1),T={class:"divide-y divide-gray-700"},q={class:"py-2 font-semibold"},z={class:"py-2"},G={class:"py-2"},ee=v({__name:"users",setup(I){g();const o=b(""),_=C(()=>{const a=o.value.toLowerCase();return a.trim()===""?d:d.filter(t=>t.firstname.toLowerCase().includes(a)||t.lastname.toLowerCase().includes(a)||t.role.toLowerCase().includes(a)||t.email.toLowerCase().includes(a))});return(a,t)=>{const u=x,m=h,p=w,f=y;return n(),i("div",U,[e("div",$,[e("div",j,[A,e("div",null,[e("div",D,[e("div",null,[l(u,{class:"w-5 h-5 text-gray-500"})]),k(e("input",{id:"search","onUpdate:modelValue":t[0]||(t[0]=s=>N(o)?o.value=s:null),type:"search",name:"search",autocomplete:"off",class:"block w-full p-2 placeholder-gray-500 bg-transparent focus:outline-none",placeholder:"Search..."},null,512),[[L,r(o)]]),e("div",null,[e("button",{disabled:r(o).length===0,class:"inline-flex items-center hover:text-white rounded-full p-1 disabled:text-gray-600",onClick:t[1]||(t[1]=s=>o.value="")},[l(m,{class:"w-5 h-5"})],8,E)])])])]),e("div",F,[e("table",H,[M,e("tbody",T,[(n(!0),i(V,null,B(r(_),s=>(n(),i("tr",{key:s.id,class:"hover:bg-gray-700/20"},[e("td",q,[l(p,{to:"/user/"+s.id,class:"text-muted-link"},{default:R(()=>[S(c(s.firstname)+" "+c(s.lastname),1)]),_:2},1032,["to"])]),e("td",z,c(s.email),1),e("td",G,[l(f)])]))),128))])])])])])}}});export{ee as default};
