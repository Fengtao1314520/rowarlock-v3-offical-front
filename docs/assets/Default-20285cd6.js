import{g as u,c as t,m as g,d as p,o as i,a as m,w as l,b as y,r as b,e as k,p as B,u as C}from"./index-0e1a64cd.js";import{u as _,V as T,a as x,m as f,b as w,c as A}from"./VCol-997d228c.js";import{m as P,V as L,a as R,u as S,b as $,c as M}from"./VAppBar-c590de64.js";const I="/assets/rowarlock-high-resolution-logo-color-on-transparent-background-8478ebc7.png",N=u()({name:"VAppBarTitle",props:P(),setup(e,s){let{slots:a}=s;return _(()=>t(L,g(e,{class:"v-app-bar-title"}),a)),{}}}),D=y("p",{class:"text-h6 font-italic text-blue-accent-4"},"RoWarlock",-1),H=p({__name:"AppBar",setup(e){return(s,a)=>(i(),m(R,{rounded:"",elevation:"1"},{default:l(()=>[t(x,{cols:"1"},{default:l(()=>[t(T,{src:I,"max-height":"42"})]),_:1}),t(N,null,{default:l(()=>[D]),_:1})]),_:1}))}});const W=u()({name:"VMain",props:{scrollable:Boolean,...f(),...w({tag:"main"})},setup(e,s){let{slots:a}=s;const{mainStyles:o}=S(),{ssrBootStyles:c}=A();return _(()=>t(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,c.value,e.style]},{default:()=>{var r,n;return[e.scrollable?t("div",{class:"v-main__scroller"},[(r=a.default)==null?void 0:r.call(a)]):(n=a.default)==null?void 0:n.call(a)]}})),{}}}),j=p({__name:"View",setup(e){return(s,a)=>{const o=b("router-view");return i(),m(W,null,{default:l(()=>[t(o)]),_:1})}}});const q=u()({name:"VApp",props:{...f(),...$({fullHeight:!0}),...k()},setup(e,s){let{slots:a}=s;const o=B(e),{layoutClasses:c,layoutStyles:r,getLayoutItem:n,items:v,layoutRef:V}=M(e),{rtlClasses:h}=C();return _(()=>{var d;return t("div",{ref:V,class:["v-application",o.themeClasses.value,c.value,h.value,e.class],style:[r.value,e.style]},[t("div",{class:"v-application__wrap"},[(d=a.default)==null?void 0:d.call(a)])])}),{getLayoutItem:n,items:v,theme:o}}}),G=p({__name:"Default",setup(e){return(s,a)=>(i(),m(q,null,{default:l(()=>[t(H),t(j)]),_:1}))}});export{G as default};
