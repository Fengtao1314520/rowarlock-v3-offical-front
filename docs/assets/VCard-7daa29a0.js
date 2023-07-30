import{Y as b,X as y,Z as w,$ as f,a as n,a0 as C,W as A,a1 as u,a3 as P,i as h,al as k,a2 as H,a4 as N,a5 as W,be as X,a6 as Y,a7 as Z,a8 as z,b0 as G,a9 as J,aa as K,ap as Q,aE as U,aj as ee,ab as ae,ar as te,ac as ne,ae as de,af as ie,bf as se,ag as le,ah as ce,ai as re,b3 as ue,q as I,L as ve,P as oe,V as me,bh as ge,au as ke}from"./index-42e8e5d3.js";const be=b()({name:"VCardActions",props:y(),setup(e,i){let{slots:t}=i;return w({VBtn:{variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ye=C("v-card-subtitle"),fe=C("v-card-title"),Ce=A({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...y(),...P()},"VCardItem"),pe=b()({name:"VCardItem",props:Ce(),setup(e,i){let{slots:t}=i;return f(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),o=!!(s||t.append),m=!!(e.title||t.title),g=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(h,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(fe,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),g&&n(ye,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(h,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ve=C("v-card-text"),he=A({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...H(),...y(),...P(),...N(),...W(),...X(),...Y(),...Z(),...z(),...G(),...J(),...K(),...Q({variant:"elevated"})},"VCard"),Ae=b()({name:"VCard",directives:{Ripple:U},props:he(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=ee(e),{borderClasses:s}=ae(e),{colorClasses:o,colorStyles:m,variantClasses:g}=te(e),{densityClasses:l}=ne(e),{dimensionStyles:d}=de(e),{elevationClasses:S}=ie(e),{loaderClasses:x}=se(e),{locationStyles:L}=le(e),{positionClasses:T}=ce(e),{roundedClasses:B}=re(e),c=ue(e,t),D=I(()=>e.link!==!1&&c.isLink.value),r=I(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const _=D.value?"a":e.tag,R=!!(a.title||e.title),E=!!(a.subtitle||e.subtitle),j=R||E,F=!!(a.append||e.appendAvatar||e.appendIcon),M=!!(a.prepend||e.prependAvatar||e.prependIcon),O=!!(a.image||e.image),$=j||M||F,q=!!(a.text||e.text);return ve(n(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,s.value,o.value,l.value,S.value,x.value,T.value,B.value,g.value,e.class],style:[m.value,d.value,L.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var p;return[O&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(me,{key:"image-img",cover:!0,src:e.image},null)]),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),$&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&n(Ve,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(be,null,{default:a.actions}),ke(r.value,"v-card")]}}),[[oe("ripple"),r.value&&e.ripple]])}),{}}});export{Ae as V,fe as a,Ve as b,pe as c,be as d};
