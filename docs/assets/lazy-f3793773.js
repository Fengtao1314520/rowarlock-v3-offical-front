import{a0 as v,W as n,a2 as k,X as h,a4 as P,a5 as g,a6 as C,a7 as S,a8 as f,a9 as y,aa as V,Y as B,aj as L,aD as R,ak as b,ab as p,ae as w,af as z,ag as D,ah as E,ai as T,$ as x,a as F,aE as $,q as j,G as q}from"./index-ba160bc8.js";const N=v("flex-grow-1","div","VSpacer");const A=n({color:String,...k(),...h(),...P(),...g(),...C(),...S(),...f(),...y(),...V()},"VSheet"),W=B()({name:"VSheet",props:A(),setup(e,s){let{slots:a}=s;const{themeClasses:o}=L(e),{backgroundColorClasses:t,backgroundColorStyles:l}=R(b(e,"color")),{borderClasses:r}=p(e),{dimensionStyles:u}=w(e),{elevationClasses:c}=z(e),{locationStyles:i}=D(e),{positionClasses:m}=E(e),{roundedClasses:d}=T(e);return x(()=>F(e.tag,{class:["v-sheet",o.value,t.value,r.value,c.value,m.value,d.value,e.class],style:[l.value,u.value,i.value,e.style]},a)),{}}}),X=n({eager:Boolean},"lazy");function Y(e,s){const a=$(!1),o=j(()=>a.value||e.eager||s.value);q(s,()=>a.value=!0);function t(){e.eager||(a.value=!1)}return{isBooted:a,hasContent:o,onAfterLeave:t}}export{N as V,W as a,X as m,Y as u};