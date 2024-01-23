import{U as z,a as r,t as J,T as te,R as D,cz as Ie,S as W,aL as Ce,a7 as de,a8 as ve,ar as fe,ai as me,aM as Pe,W as we,aj as F,X as ee,Z as K,cX as le,$ as xe,a0 as Te,a3 as Ae,aQ as Be,a6 as Re,cY as Ee,cZ as _e,aP as De,au as Oe,aa as Me,as as Fe,ab as ze,ae as Le,ah as $e,c_ as Ge,al as He,aR as qe,c$ as Ne,l as _,H as ne,M as Xe,av as Ue,d0 as We,h as G,ak as H,aN as je,F as U,g as se,aG as he,B as X,ac as Ye,aA as E,C as ie,y as oe,aC as pe,cN as Z,d1 as Ke,O as Ze,an as Qe,a1 as Je,d2 as ea,ad as aa,d3 as ta,aI as q,z as la}from"./index-P16LGiY5.js";import{b as N,d as na,s as re,c as sa,g as ia,n as oa,e as ra}from"./forwardRefs-Kopzt2dF.js";const ca=D({target:[Object,Array]},"v-dialog-transition"),Ia=z()({name:"VDialogTransition",props:ca(),setup(e,n){let{slots:l}=n;const s={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,o){var k;await new Promise(m=>requestAnimationFrame(m)),await new Promise(m=>requestAnimationFrame(m)),a.style.visibility="";const{x:d,y:u,sx:c,sy:v,speed:g}=ue(e.target,a),V=N(a,[{transform:`translate(${d}px, ${u}px) scale(${c}, ${v})`,opacity:0},{}],{duration:225*g,easing:na});(k=ce(a))==null||k.forEach(m=>{N(m,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*g,easing:re})}),V.finished.then(()=>o())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,o){var k;await new Promise(m=>requestAnimationFrame(m));const{x:d,y:u,sx:c,sy:v,speed:g}=ue(e.target,a);N(a,[{},{transform:`translate(${d}px, ${u}px) scale(${c}, ${v})`,opacity:0}],{duration:125*g,easing:sa}).finished.then(()=>o()),(k=ce(a))==null||k.forEach(m=>{N(m,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*g,easing:re})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?r(te,J({name:"dialog-transition"},s,{css:!1}),l):r(te,{name:"dialog-transition"},l)}});function ce(e){var l;const n=(l=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:l.children;return n&&[...n]}function ue(e,n){const l=ia(e),s=oa(n),[a,o]=getComputedStyle(n).transformOrigin.split(" ").map(h=>parseFloat(h)),[d,u]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=l.left+l.width/2;d==="left"||u==="left"?c-=l.width/2:(d==="right"||u==="right")&&(c+=l.width/2);let v=l.top+l.height/2;d==="top"||u==="top"?v-=l.height/2:(d==="bottom"||u==="bottom")&&(v+=l.height/2);const g=l.width/s.width,V=l.height/s.height,k=Math.max(1,g,V),m=g/k||0,b=V/k||0,y=s.width*s.height/(window.innerWidth*window.innerHeight),t=y>.12?Math.min(1.5,(y-.12)*10+1):1;return{x:c-(a+s.left),y:v-(o+s.top),sx:m,sy:b,speed:t}}const ge=Symbol.for("vuetify:v-chip-group"),ua=D({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ie},...W(),...Ce({selectedClass:"v-chip--selected"}),...de(),...ve(),...fe({variant:"tonal"})},"VChipGroup");z()({name:"VChipGroup",props:ua(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const{themeClasses:s}=me(e),{isSelected:a,select:o,next:d,prev:u,selected:c}=Pe(e,ge);return we({VChip:{color:F(e,"color"),disabled:F(e,"disabled"),filter:F(e,"filter"),variant:F(e,"variant")}}),ee(()=>r(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},s.value,e.class],style:e.style},{default:()=>{var v;return[(v=l.default)==null?void 0:v.call(l,{isSelected:a,select:o,next:d,prev:u,selected:c.value})]}})),{}}});const da=D({activeClass:String,appendAvatar:String,appendIcon:K,closable:Boolean,closeIcon:{type:K,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:K,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:le(),onClickOnce:le(),...xe(),...W(),...Te(),...Ae(),...Be(),...Re(),...Ee(),..._e(),...de({tag:"span"}),...ve(),...fe({variant:"tonal"})},"VChip"),Ca=z()({name:"VChip",directives:{Ripple:De},props:da(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:l,emit:s,slots:a}=n;const{t:o}=Oe(),{borderClasses:d}=Me(e),{colorClasses:u,colorStyles:c,variantClasses:v}=Fe(e),{densityClasses:g}=ze(e),{elevationClasses:V}=Le(e),{roundedClasses:k}=$e(e),{sizeClasses:m}=Ge(e),{themeClasses:b}=me(e),y=He(e,"modelValue"),t=qe(e,ge,!1),h=Ne(e,l),I=_(()=>e.link!==!1&&h.isLink.value),P=_(()=>!e.disabled&&e.link!==!1&&(!!t||e.link||h.isClickable.value)),T=_(()=>({"aria-label":o(e.closeLabel),onClick(f){f.stopPropagation(),y.value=!1,s("click:close",f)}}));function L(f){var w;s("click",f),P.value&&((w=h.navigate)==null||w.call(h,f),t==null||t.toggle())}function j(f){(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),L(f))}return()=>{const f=h.isLink.value?"a":e.tag,w=!!(e.appendIcon||e.appendAvatar),A=!!(w||a.append),B=!!(a.close||e.closable),R=!!(a.filter||e.filter)&&t,$=!!(e.prependIcon||e.prependAvatar),Y=!!($||a.prepend),O=!t||t.isSelected.value;return y.value&&ne(r(f,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":P.value,"v-chip--filter":R,"v-chip--pill":e.pill},b.value,d.value,O?u.value:void 0,g.value,V.value,k.value,m.value,v.value,t==null?void 0:t.selectedClass.value,e.class],style:[O?c.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:h.href.value,tabindex:P.value?0:void 0,onClick:L,onKeydown:P.value&&!I.value&&j},{default:()=>{var x;return[Ue(P.value,"v-chip"),R&&r(We,{key:"filter"},{default:()=>[ne(r("div",{class:"v-chip__filter"},[a.filter?r(H,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},a.filter):r(G,{key:"filter-icon",icon:e.filterIcon},null)]),[[je,t.isSelected.value]])]}),Y&&r("div",{key:"prepend",class:"v-chip__prepend"},[a.prepend?r(H,{key:"prepend-defaults",disabled:!$,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},a.prepend):r(U,null,[e.prependIcon&&r(G,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&r(se,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),r("div",{class:"v-chip__content"},[((x=a.default)==null?void 0:x.call(a,{isSelected:t==null?void 0:t.isSelected.value,selectedClass:t==null?void 0:t.selectedClass.value,select:t==null?void 0:t.select,toggle:t==null?void 0:t.toggle,value:t==null?void 0:t.value.value,disabled:e.disabled}))??e.text]),A&&r("div",{key:"append",class:"v-chip__append"},[a.append?r(H,{key:"append-defaults",disabled:!w,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},a.append):r(U,null,[e.appendIcon&&r(G,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&r(se,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),B&&r("div",J({key:"close",class:"v-chip__close"},T.value),[a.close?r(H,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},a.close):r(G,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Xe("ripple"),P.value&&e.ripple,null]])}}}),va=D({renderless:Boolean,...W()},"VVirtualScrollItem"),fa=z()({name:"VVirtualScrollItem",inheritAttrs:!1,props:va(),emits:{"update:height":e=>!0},setup(e,n){let{attrs:l,emit:s,slots:a}=n;const{resizeRef:o,contentRect:d}=he(void 0,"border");X(()=>{var u;return(u=d.value)==null?void 0:u.height},u=>{u!=null&&s("update:height",u)}),ee(()=>{var u,c;return e.renderless?r(U,null,[(u=a.default)==null?void 0:u.call(a,{itemRef:o})]):r("div",J({ref:o,class:["v-virtual-scroll__item",e.class],style:e.style},l),[(c=a.default)==null?void 0:c.call(a)])})}}),ma=-1,ha=1,Q=100,pa=D({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function ga(e,n){const l=Ye(),s=E(0);ie(()=>{s.value=parseFloat(e.itemHeight||0)});const a=E(0),o=E(Math.ceil((parseInt(e.height)||l.height.value)/(s.value||16))||1),d=E(0),u=E(0),c=oe(),v=oe();let g=0;const{resizeRef:V,contentRect:k}=he();ie(()=>{V.value=c.value});const m=_(()=>{var i;return c.value===document.documentElement?l.height.value:((i=k.value)==null?void 0:i.height)||parseInt(e.height)||0}),b=_(()=>!!(c.value&&v.value&&m.value&&s.value));let y=Array.from({length:n.value.length}),t=Array.from({length:n.value.length});const h=E(0);let I=-1;function P(i){return y[i]||s.value}const T=Ke(()=>{const i=performance.now();t[0]=0;const p=n.value.length;for(let S=1;S<=p-1;S++)t[S]=(t[S-1]||0)+P(S-1);h.value=Math.max(h.value,performance.now()-i)},h),L=X(b,i=>{i&&(L(),g=v.value.offsetTop,T.immediate(),x(),~I&&Ze(()=>{Qe&&window.requestAnimationFrame(()=>{ae(I),I=-1})}))});X(m,(i,p)=>{p&&x()}),pe(()=>{T.clear()});function j(i,p){const S=y[i],C=s.value;s.value=C?Math.min(s.value,p):p,(S!==p||C!==s.value)&&(y[i]=p,T())}function f(i){return i=Z(i,0,n.value.length-1),t[i]||0}function w(i){return ya(t,i)}let A=0,B=0,R=0;function $(){if(!c.value||!v.value)return;const i=c.value.scrollTop,p=performance.now();p-R>500?(B=Math.sign(i-A),g=v.value.offsetTop):B=i-A,A=i,R=p,x()}function Y(){!c.value||!v.value||(B=0,R=0,x())}let O=-1;function x(){cancelAnimationFrame(O),O=requestAnimationFrame(ye)}function ye(){if(!c.value||!m.value)return;const i=A-g,p=Math.sign(B),S=Math.max(0,i-Q),C=Z(w(S),0,n.value.length),Ve=i+m.value+Q,M=Z(w(Ve)+1,C+1,n.value.length);if((p!==ma||C<a.value)&&(p!==ha||M>o.value)){const be=f(a.value)-f(C),Se=f(M)-f(o.value);Math.max(be,Se)>Q?(a.value=C,o.value=M):(C<=0&&(a.value=C),M>=n.value.length&&(o.value=M))}d.value=f(a.value),u.value=f(n.value.length)-f(o.value)}function ae(i){const p=f(i);!c.value||i&&!p?I=i:c.value.scrollTop=p}const ke=_(()=>n.value.slice(a.value,o.value).map((i,p)=>({raw:i,index:p+a.value})));return X(n,()=>{y=Array.from({length:n.value.length}),t=Array.from({length:n.value.length}),T.immediate(),x()},{deep:!0}),{containerRef:c,markerRef:v,computedItems:ke,paddingTop:d,paddingBottom:u,scrollToIndex:ae,handleScroll:$,handleScrollend:Y,handleItemResize:j}}function ya(e,n){let l=e.length-1,s=0,a=0,o=null,d=-1;if(e[l]<n)return l;for(;s<=l;)if(a=s+l>>1,o=e[a],o>n)l=a-1;else if(o<n)d=a,s=a+1;else return o===n?a:s;return d}const ka=D({items:{type:Array,default:()=>[]},renderless:Boolean,...pa(),...W(),...Je()},"VVirtualScroll"),Pa=z()({name:"VVirtualScroll",props:ka(),setup(e,n){let{slots:l}=n;const s=ea("VVirtualScroll"),{dimensionStyles:a}=aa(e),{containerRef:o,markerRef:d,handleScroll:u,handleScrollend:c,handleItemResize:v,scrollToIndex:g,paddingTop:V,paddingBottom:k,computedItems:m}=ga(e,F(e,"items"));return ta(()=>e.renderless,()=>{function b(){var h,I;const t=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";o.value===document.documentElement?(document[t]("scroll",u,{passive:!0}),document[t]("scrollend",c)):((h=o.value)==null||h[t]("scroll",u,{passive:!0}),(I=o.value)==null||I[t]("scrollend",c))}la(()=>{o.value=ra(s.vnode.el,!0),b(!0)}),pe(b)}),ee(()=>{const b=m.value.map(y=>r(fa,{key:y.index,renderless:e.renderless,"onUpdate:height":t=>v(y.index,t)},{default:t=>{var h;return(h=l.default)==null?void 0:h.call(l,{item:y.raw,index:y.index,...t})}}));return e.renderless?r(U,null,[r("div",{ref:d,class:"v-virtual-scroll__spacer",style:{paddingTop:q(V.value)}},null),b,r("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:q(k.value)}},null)]):r("div",{ref:o,class:["v-virtual-scroll",e.class],onScrollPassive:u,onScrollend:c,style:[a.value,e.style]},[r("div",{ref:d,class:"v-virtual-scroll__container",style:{paddingTop:q(V.value),paddingBottom:q(k.value)}},[b])])}),{scrollToIndex:g}}});export{Ca as V,Ia as a,Pa as b};