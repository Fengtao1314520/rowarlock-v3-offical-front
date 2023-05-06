import{m as te,b as ae,u as K,f as de,h as me,i as fe,p as ge,j as ye,l as he,n as be,V as pe,d as Z,e as Se,c as xe}from"./VCol-997d228c.js";import{f as S,X as Ie,n as W,A as z,Y as Te,j as A,i as X,l as n,J as E,S as $,q as oe,N as le,s as Re,h as ne,Z as Ve,_ as we,Q as Be,g as Y,c as y,e as Pe,x as q,p as $e,C as Ce,$ as Le,R as ze,a0 as ke,k as Ne,m as _e}from"./index-0e1a64cd.js";function Ee(e){const s=S(),t=S();if(Ie){const l=new ResizeObserver(a=>{e==null||e(a,l),a.length&&(t.value=a[0].contentRect)});W(()=>{l.disconnect()}),z(s,(a,o)=>{o&&(l.unobserve(o),t.value=void 0),a&&l.observe(a)},{flush:"post"})}return{resizeRef:s,contentRect:Te(t)}}const O=Symbol.for("vuetify:layout"),se=Symbol.for("vuetify:layout-item"),G=1e3,Xe=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ae=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ye(){const e=X(O);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function He(e){const s=X(O);if(!s)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Re()}`,l=oe("useLayoutItem");ne(se,{id:t});const a=S(!1);Ve(()=>a.value=!0),we(()=>a.value=!1);const{layoutItemStyles:o,layoutItemScrimStyles:r}=s.register(l,{...e,active:n(()=>a.value?!1:e.active.value),id:t});return W(()=>s.unregister(t)),{layoutItemStyles:o,layoutRect:s.layoutRect,layoutItemScrimStyles:r}}const Me=(e,s,t,l)=>{let a={top:0,left:0,right:0,bottom:0};const o=[{id:"",layer:{...a}}];for(const r of e){const d=s.get(r),h=t.get(r),b=l.get(r);if(!d||!h||!b)continue;const v={...a,[d.value]:parseInt(a[d.value],10)+(b.value?parseInt(h.value,10):0)};o.push({id:r,layer:v}),a=v}return o};function Fe(e){const s=X(O,null),t=n(()=>s?s.rootZIndex.value-100:G),l=S([]),a=E(new Map),o=E(new Map),r=E(new Map),d=E(new Map),h=E(new Map),{resizeRef:b,contentRect:v}=Ee(),B=n(()=>{const c=new Map,I=e.overlaps??[];for(const i of I.filter(p=>p.includes(":"))){const[p,f]=i.split(":");if(!l.value.includes(p)||!l.value.includes(f))continue;const P=a.get(p),L=a.get(f),k=o.get(p),N=o.get(f);!P||!L||!k||!N||(c.set(f,{position:P.value,amount:parseInt(k.value,10)}),c.set(p,{position:L.value,amount:-parseInt(N.value,10)}))}return c}),g=n(()=>{const c=[...new Set([...r.values()].map(i=>i.value))].sort((i,p)=>i-p),I=[];for(const i of c){const p=l.value.filter(f=>{var P;return((P=r.get(f))==null?void 0:P.value)===i});I.push(...p)}return Me(I,a,o,d)}),m=n(()=>!Array.from(h.values()).some(c=>c.value)),x=n(()=>g.value[g.value.length-1].layer),T=n(()=>({"--v-layout-left":$(x.value.left),"--v-layout-right":$(x.value.right),"--v-layout-top":$(x.value.top),"--v-layout-bottom":$(x.value.bottom),...m.value?void 0:{transition:"none"}})),R=n(()=>g.value.slice(1).map((c,I)=>{let{id:i}=c;const{layer:p}=g.value[I],f=o.get(i),P=a.get(i);return{id:i,...p,size:Number(f.value),position:P.value}})),C=c=>R.value.find(I=>I.id===c),u=oe("createLayout"),V=S(!1);le(()=>{V.value=!0}),ne(O,{register:(c,I)=>{let{id:i,order:p,position:f,layoutSize:P,elementSize:L,active:k,disableTransitions:N,absolute:ie}=I;r.set(i,p),a.set(i,f),o.set(i,P),d.set(i,k),N&&h.set(i,N);const F=Be(se,u==null?void 0:u.vnode).indexOf(c);F>-1?l.value.splice(F,0,i):l.value.push(i);const J=n(()=>R.value.findIndex(_=>_.id===i)),U=n(()=>t.value+g.value.length*2-J.value*2),re=n(()=>{const _=f.value==="left"||f.value==="right",j=f.value==="right",ve=f.value==="bottom",Q={[f.value]:0,zIndex:U.value,transform:`translate${_?"X":"Y"}(${(k.value?0:-110)*(j||ve?-1:1)}%)`,position:ie.value||t.value!==G?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!V.value)return Q;const w=R.value[J.value];if(!w)throw new Error(`[Vuetify] Could not find layout item "${i}"`);const D=B.value.get(i);return D&&(w[D.position]+=D.amount),{...Q,height:_?`calc(100% - ${w.top}px - ${w.bottom}px)`:L.value?`${L.value}px`:void 0,left:j?void 0:`${w.left}px`,right:j?`${w.right}px`:void 0,top:f.value!=="bottom"?`${w.top}px`:void 0,bottom:f.value!=="top"?`${w.bottom}px`:void 0,width:_?L.value?`${L.value}px`:void 0:`calc(100% - ${w.left}px - ${w.right}px)`}}),ce=n(()=>({zIndex:U.value-1}));return{layoutItemStyles:re,layoutItemScrimStyles:ce,zIndex:U}},unregister:c=>{r.delete(c),a.delete(c),o.delete(c),d.delete(c),h.delete(c),l.value=l.value.filter(I=>I!==c)},mainRect:x,mainStyles:T,getLayoutItem:C,items:R,layoutRect:v,rootZIndex:t});const H=n(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),M=n(()=>({zIndex:t.value,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:H,layoutStyles:M,getLayoutItem:C,items:R,layoutRect:v,layoutRef:b}}const Oe=A({text:String,...te(),...ae()},"v-toolbar-title"),Ue=Y()({name:"VToolbarTitle",props:Oe(),setup(e,s){let{slots:t}=s;return K(()=>{const l=!!(t.default||t.text||e.text);return y(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[l&&y("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),je=[null,"prominent","default","comfortable","compact"],ue=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>je.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...de(),...te(),...me(),...fe(),...ae({tag:"header"}),...Pe()},"v-toolbar"),ee=Y()({name:"VToolbar",props:ue(),setup(e,s){var g;let{slots:t}=s;const{backgroundColorClasses:l,backgroundColorStyles:a}=ge(q(e,"color")),{borderClasses:o}=ye(e),{elevationClasses:r}=he(e),{roundedClasses:d}=be(e),{themeClasses:h}=$e(e),b=S(!!(e.extended||(g=t.extension)!=null&&g.call(t))),v=n(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),B=n(()=>b.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ce({VBtn:{variant:"text"}}),K(()=>{var R;const m=!!(e.title||t.title),x=!!(t.image||e.image),T=(R=t.extension)==null?void 0:R.call(t);return b.value=!!(e.extended||T),y(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,o.value,r.value,d.value,h.value,e.class],style:[a.value,e.style]},{default:()=>[x&&y("div",{key:"image",class:"v-toolbar__image"},[t.image?y(Z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):y(pe,{key:"image-img",cover:!0,src:e.image},null)]),y(Z,{defaults:{VTabs:{height:$(v.value)}}},{default:()=>{var C,u,V;return[y("div",{class:"v-toolbar__content",style:{height:$(v.value)}},[t.prepend&&y("div",{class:"v-toolbar__prepend"},[(C=t.prepend)==null?void 0:C.call(t)]),m&&y(Ue,{key:"title",text:e.title},{text:t.title}),(u=t.default)==null?void 0:u.call(t),t.append&&y("div",{class:"v-toolbar__append"},[(V=t.append)==null?void 0:V.call(t)])])]}}),y(Z,{defaults:{VTabs:{height:$(B.value)}}},{default:()=>[y(Se,null,{default:()=>[b.value&&y("div",{class:"v-toolbar__extension",style:{height:$(B.value)}},[T])]})]})]})}),{contentHeight:v,extensionHeight:B}}}),De=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ze(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=s;let l=0;const a=S(null),o=S(0),r=S(0),d=S(0),h=S(!1),b=S(!1),v=n(()=>Number(e.scrollThreshold)),B=n(()=>Le((v.value-o.value)/v.value||0)),g=()=>{const m=a.value;!m||t&&!t.value||(l=o.value,o.value="window"in m?m.pageYOffset:m.scrollTop,b.value=o.value<l,d.value=Math.abs(o.value-v.value))};return z(b,()=>{r.value=r.value||o.value}),z(h,()=>{r.value=0}),le(()=>{z(()=>e.scrollTarget,m=>{var T;const x=m?document.querySelector(m):window;if(!x){ze(`Unable to locate element with identifier ${m}`,ke());return}x!==a.value&&((T=a.value)==null||T.removeEventListener("scroll",g),a.value=x,a.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),W(()=>{var m;(m=a.value)==null||m.removeEventListener("scroll",g)}),t&&z(t,g,{immediate:!0}),{scrollThreshold:v,currentScroll:o,currentThreshold:d,isScrollActive:h,scrollRatio:B,isScrollingUp:b,savedScroll:r}}const Je=Y()({name:"VAppBar",props:{scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ue(),...Ae(),...De(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const l=S(),a=Ne(e,"modelValue"),o=n(()=>{var V;const u=new Set(((V=e.scrollBehavior)==null?void 0:V.split(" "))??[]);return{hide:u.has("hide"),inverted:u.has("inverted"),collapse:u.has("collapse"),elevate:u.has("elevate"),fadeImage:u.has("fade-image")}}),r=n(()=>{const u=o.value;return u.hide||u.inverted||u.collapse||u.elevate||u.fadeImage||!a.value}),{currentScroll:d,scrollThreshold:h,isScrollingUp:b,scrollRatio:v}=Ze(e,{canScroll:r}),B=n(()=>e.collapse||o.value.collapse&&(o.value.inverted?v.value>0:v.value===0)),g=n(()=>e.flat||o.value.elevate&&(o.value.inverted?d.value>0:d.value===0)),m=n(()=>o.value.fadeImage?o.value.inverted?1-v.value:v.value:void 0),x=n(()=>{var H,M;if(o.value.hide&&o.value.inverted)return 0;const u=((H=l.value)==null?void 0:H.contentHeight)??0,V=((M=l.value)==null?void 0:M.extensionHeight)??0;return u+V});function T(){o.value.hide?o.value.inverted?a.value=d.value>h.value:a.value=b.value||d.value<h.value:a.value=!0}z(d,T,{immediate:!0}),z(o,T);const{ssrBootStyles:R}=xe(),{layoutItemStyles:C}=He({id:e.name,order:n(()=>parseInt(e.order,10)),position:q(e,"location"),layoutSize:x,elementSize:S(void 0),active:a,absolute:q(e,"absolute")});return K(()=>{const[u]=ee.filterProps(e);return y(ee,_e({ref:l,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...C.value,"--v-toolbar-image-opacity":m.value,height:void 0,...R.value},e.style]},u,{collapse:B.value,flat:g.value}),t)}),{}}});export{Ue as V,Je as a,Xe as b,Fe as c,Ee as d,Oe as m,Ye as u};
