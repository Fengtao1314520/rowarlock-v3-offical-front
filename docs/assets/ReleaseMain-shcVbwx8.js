import{d as I,y as h,o as n,c,w as a,a as e,ap as ee,u as de,f as H,aw as O,j as T,i as E,ax as fe,x as me,v as ve,h as z,b as g,k as w,I as S,e as Y,F as N,E as V,ay as pe,p as G,_ as _e,R as te,S as ke,U as ae,X as le,a4 as be,a5 as ye,a6 as Ve,ar as he,a8 as ge,az as xe,al as Re,af as Ce,ag as we,am as Se,ai as Ie,as as Te,ah as Ne,aA as oe,B as Q,z as Pe,aB as $e,av as De,aq as Fe,ak as Be,t as J,aC as Le,O as Ee,aD as Oe,aE as Ae}from"./index-P16LGiY5.js";import{a as Me,b as Ue,r as re}from"./smallThird-8U9rlEVy.js";import{g as F,r as We,c as ze,a as x,V as Ge}from"./lazy-rxlL08dK.js";import{V as K,m as je,c as He,a as qe}from"./VTextField-9OexEt6f.js";import{V as R,a as y,b as C,c as U,d as W}from"./VRow-8oaHaMli.js";import{f as se,m as Qe,V as Z}from"./forwardRefs-Kopzt2dF.js";var ne=(t=>(t.Official="Official",t.Test="Test",t.FieldTest="FieldTest",t))(ne||{}),B=(t=>(t.New="New",t.Improve="Improve",t.Fix="Fix",t))(B||{});function Xe(){let t=re(),l=Me(),o=[];return l.forEach(r=>{for(let s=0;s<t;s++)o.push(Je(r))}),o}function Ye(t){return t.reduce((l,o)=>{const r=o.year;return l[r]||(l[r]={year:r,items:[]}),l[r].items.push(o),l},{})}function Je(t){let l={branchNumber:F(49999,89999),isHotfix:We(),productName:"RoWarlock",releaseDate:Ue().toString(),releaseType:ne.Official,releaseVersion:`${t}-${F(1,3)}
    -${F(1,3)}
    -${F(6,10)}
    .${F(1e3,3e3)}`,tagNumber:re(),tagType:"SVN"},o=[{key:"All Config Entry.pdf",value:"56445"}],r=[{id:"N-1004",type:B.New,feature:"息记录新增表情分类，查找会话表情更便捷"},{id:"N-1005",type:B.Improve,feature:"会话中的图片、视频等文件，可使用“多选”批量保存"},{id:"N-1006",type:B.Improve,feature:"远程协助可自适应屏幕大小，自如缩放，操作更便捷"},{id:"N-1007",type:B.Fix,feature:"GIF热图新增搜索功能，热图便捷搜，斗图趣无穷"}],s=[{key:"Windows 10",value:"10.0.19044.2965"},{key:"Linux Redhat",value:"7.1.4 Rel"}],u={author:"Nate Ford",createDate:Date.now().toString(),description:"RoWarlock 最新释放",modifyDate:Date.now().toString(),taskId:ze(),title:"RoWarlock 释放",basicInfos:l,relatedConfig:o,testEnv:s,content:r};return{year:t,release:u}}const Ke={class:"font-weight-bold ml-2"},Ze={class:"font-weight-bold ml-2"},et=I({__name:"ReleaseNav",props:{releaseRecord:Array},emits:["selectSingleReleaseRecord"],setup(t,{emit:l}){const o=l,r=t,s=h(!1);let u=r.releaseRecord,p=Ye(u);function _(d){o("selectSingleReleaseRecord",d)}return(d,f)=>(n(),c(pe,{rail:s.value,onClick:f[1]||(f[1]=m=>s.value=!1),location:"right"},{default:a(()=>[e(H,{title:"释放记录","prepend-icon":"mdi-clipboard-list-outline"},{append:a(()=>[e(ee,{variant:"text",icon:"mdi-chevron-left",onClick:f[0]||(f[0]=de(m=>s.value=!s.value,["stop"]))})]),_:1}),e(O),e(Y,null,{default:a(()=>[(n(!0),T(N,null,E(V(p),(m,k)=>(n(),c(fe,{class:"rounded-e-xl",key:k,"append-icon":"mdi-chevron-down"},{activator:a(({props:i})=>[e(H,me(ve(i)),{prepend:a(()=>[e(z,{class:"mr-0",color:"deep-purple-accent-4"},{default:a(()=>[g("mdi-sun-compass")]),_:1})]),title:a(()=>[e(x,{color:"blue-accent-2",class:"ml-2 text-h6 text-white rounded-e-xl"},{default:a(()=>[w("p",Ke,S(m.year),1)]),_:2},1024)]),_:2},1040)]),default:a(()=>[e(Y,null,{default:a(()=>[(n(!0),T(N,null,E(m.items,(i,v)=>(n(),c(H,{onClick:b=>_(i),class:"py-0",key:v},{prepend:a(()=>[e(z,{class:"mr-0",color:"deep-purple-accent-4"},{default:a(()=>[g("mdi-alpha-t-box")]),_:1})]),title:a(()=>[e(x,{color:"blue-accent-2",class:"ml-2 text-body-2 text-white"},{default:a(()=>[w("p",Ze,S(i.release.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["rail"]))}}),tt={class:"text-body-2 pt-3 font-weight-bold"},at=I({__name:"CViewTextItem",props:{color:{},label:{},prefield:{},values:{}},setup(t){const l=t;return(o,r)=>(n(),c(x,null,{default:a(()=>[e(x,{class:"ma-2 d-flex"},{default:a(()=>[w("div",tt,S(l.prefield),1),l.label?(n(),c(K,{key:1,density:"compact","hide-details":"auto","hide-no-data":!0,placeholder:l.prefield,label:l.label,variant:"outlined",color:"primary",modelValue:l.values,"onUpdate:modelValue":r[1]||(r[1]=s=>l.values=s),clearable:!0},null,8,["placeholder","label","modelValue"])):(n(),c(K,{key:0,density:"compact","hide-details":"auto","hide-no-data":!0,placeholder:l.prefield,variant:"outlined",color:"primary",modelValue:l.values,"onUpdate:modelValue":r[0]||(r[0]=s=>l.values=s),clearable:!0,class:"customer-90"},null,8,["placeholder","modelValue"]))]),_:1}),l.color?(n(),c(O,{key:0,thickness:2,class:"border-opacity-75",color:l.color},null,8,["color"])):G("",!0)]),_:1}))}}),L=_e(at,[["__scopeId","data-v-6bc1c212"]]),q=I({__name:"CViewTextItemList",props:{values:{},color:{}},setup(t){const l=t;return(o,r)=>(n(),c(x,null,{default:a(()=>[(n(!0),T(N,null,E(l.values,(s,u)=>(n(),c(x,{class:"ma-2",key:u},{default:a(()=>[e(L,{prefield:s.prefield,values:s.values},null,8,["prefield","values"])]),_:2},1024))),128)),l.color?(n(),c(O,{key:0,thickness:1.5,class:"border-opacity-75",color:l.color},null,8,["color"])):G("",!0)]),_:1}))}});function lt(t){switch(t){case"branchNumber":return"分支版本号:";case"isHotfix":return"是否热修复:";case"productName":return"产品名称:";case"releaseDate":return"发布日期:";case"releaseType":return"发布类型:";case"releaseVersion":return"发布版本号:";case"tagNumber":return"年度释放号:";case"tagType":return"分支类型:";default:return t}}function ot(t){let l=[];return t.forEach((o,r)=>{l.push({prefield:`关联配置_${r+1}:`,label:o.key,values:o.value})}),l}function rt(t){const l=t.reduce((o,r)=>{const{id:s,type:u,feature:p}=r,_=`${s} : ${p}`;return o[u]?o[u].push(_):o[u]=[_],o},{});return Object.entries(l).map(([o,r])=>({key:o,value:r}))}const st={class:"text-overline mt-n2"},nt=I({__name:"CViewContentListItem",props:{values:{},icon:{}},setup(t){return(l,o)=>(n(),c(x,{border:""},{default:a(()=>[(n(!0),T(N,null,E(l.values,(r,s)=>(n(),c(R,{class:"ma-0 d-flex",key:s},{default:a(()=>[s!==0?(n(),c(O,{key:0,thickness:2,class:"border-opacity-75 mx-4",color:"indigo-accent-4"})):G("",!0),e(y,{cols:"1",class:"pb-0"},{default:a(()=>[e(z,{color:"amber-accent-4",icon:l.icon,size:"x-small"},null,8,["icon"])]),_:1}),e(y,{class:"pb-0"},{default:a(()=>[w("div",st,S(r),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}))}}),ut={class:"text-overline mr-4 pt-1"},it=I({__name:"CViewContentList",props:{prefield:{},values:{}},setup(t){return(l,o)=>(n(),c(x,null,{default:a(()=>[e(x,{class:"ma-2 d-flex"},{default:a(()=>[e(R,null,{default:a(()=>[e(y,null,{default:a(()=>[w("div",ut,S(l.prefield),1),e(nt,{icon:"mdi-tag-multiple",values:l.values},null,8,["values"])]),_:1})]),_:1})]),_:1}),e(O,{thickness:2,class:"border-opacity-75",color:"deep-purple-accent-3"})]),_:1}))}}),ct=te({...ke(),...je()},"VForm"),dt=ae()({name:"VForm",props:ct(),emits:{"update:modelValue":t=>!0,submit:t=>!0},setup(t,l){let{slots:o,emit:r}=l;const s=He(t),u=h();function p(d){d.preventDefault(),s.reset()}function _(d){const f=d,m=s.validate();f.then=m.then.bind(m),f.catch=m.catch.bind(m),f.finally=m.finally.bind(m),r("submit",f),f.defaultPrevented||m.then(k=>{var v;let{valid:i}=k;i&&((v=u.value)==null||v.submit())}),f.preventDefault()}return le(()=>{var d;return e("form",{ref:u,class:["v-form",t.class],style:t.style,novalidate:!0,onReset:p,onSubmit:_},[(d=o.default)==null?void 0:d.call(o,s)])}),se(s,u)}});function ft(t){const l=oe(t);let o=-1;function r(){clearInterval(o)}function s(){r(),Ee(()=>l.value=t)}function u(p){const _=p?getComputedStyle(p):{transitionDuration:.2},d=parseFloat(_.transitionDuration)*1e3||200;if(r(),l.value<=0)return;const f=performance.now();o=window.setInterval(()=>{const m=performance.now()-f+d;l.value=Math.max(t-m,0),l.value<=0&&r()},d)}return Le(r),{clear:r,time:l,start:u,reset:s}}const mt=te({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...be({location:"bottom"}),...ye(),...Ve(),...he(),...ge(),...xe(Qe({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),vt=ae()({name:"VSnackbar",props:mt(),emits:{"update:modelValue":t=>!0},setup(t,l){let{slots:o}=l;const r=Re(t,"modelValue"),{locationStyles:s}=Ce(t),{positionClasses:u}=we(t),{scopeId:p}=Se(),{themeClasses:_}=Ie(t),{colorClasses:d,colorStyles:f,variantClasses:m}=Te(t),{roundedClasses:k}=Ne(t),i=ft(Number(t.timeout)),v=h(),b=h(),P=oe(!1);Q(r,A),Q(()=>t.timeout,A),Pe(()=>{r.value&&A()});let $=-1;function A(){i.reset(),window.clearTimeout($);const D=Number(t.timeout);if(!r.value||D===-1)return;const j=$e(b.value);i.start(j),$=window.setTimeout(()=>{r.value=!1},D)}function ue(){i.reset(),window.clearTimeout($)}function ie(){P.value=!0,ue()}function ce(){P.value=!1,A()}return le(()=>{const D=Z.filterProps(t),j=!!(o.default||o.text||t.text);return e(Z,J({ref:v,class:["v-snackbar",{"v-snackbar--active":r.value,"v-snackbar--multi-line":t.multiLine&&!t.vertical,"v-snackbar--timer":!!t.timer,"v-snackbar--vertical":t.vertical},u.value,t.class],style:t.style},D,{modelValue:r.value,"onUpdate:modelValue":M=>r.value=M,contentProps:J({class:["v-snackbar__wrapper",_.value,d.value,k.value,m.value],style:[s.value,f.value],onPointerenter:ie,onPointerleave:ce},D.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},p),{default:()=>{var M,X;return[De(!1,"v-snackbar"),t.timer&&e("div",{key:"timer",class:"v-snackbar__timer"},[e(Fe,{ref:b,active:!P.value,color:typeof t.timer=="string"?t.timer:"info",max:t.timeout,"model-value":i.time.value},null)]),j&&e("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((M=o.text)==null?void 0:M.call(o))??t.text,(X=o.default)==null?void 0:X.call(o)]),o.actions&&e(Be,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[e("div",{class:"v-snackbar__actions"},[o.actions()])]})]},activator:o.activator})}),se({},v)}}),pt=w("p",{class:"ml-2"},"更多信息",-1),_t=w("strong",null,"保存",-1),kt=I({__name:"ReleaseView",props:{release:{}},setup(t){const l=t,o=h(!1),r=h();let s=h({status:!1,text:"编辑",color:"primary",icon:"mdi-lock-outline"}),u=h([]),p=h([]),_=h([]),d=h([]);Q(()=>l.release,k=>{r.value=k,u.value=[],p.value=[],d.value=[],_.value=ot(k.relatedConfig);const i=Object.entries(k.basicInfos);for(const[b,P]of i){let $=lt(b);u.value.push({prefield:$,values:P})}k.testEnv.forEach(b=>{p.value.push({prefield:b.key,values:b.value})}),rt(k.content).forEach(b=>{d.value.push({prefield:b.key,values:b.value})})},{immediate:!0,deep:!0});function f(){s.value.status?(s.value={status:!s.value.status,text:"编辑",color:"primary",icon:"mdi-lock-outline"},o.value=!0):s.value={status:!s.value.status,text:"保存",color:"success",icon:"mdi-lock-open-outline"}}function m(k){}return(k,i)=>(n(),T(N,null,[e(C,{color:"grey-lighten-4",variant:"flat",class:"ma-2"},{default:a(()=>[e(Oe,{border:"",density:"compact"},{default:a(()=>[e(qe,{icon:"mdi-record-player"}),e(Ae,null,{default:a(()=>[g("释放记录")]),_:1}),e(Ge),e(ee,{color:V(s).color,variant:"text",onClick:i[0]||(i[0]=v=>f())},{default:a(()=>[e(z,null,{default:a(()=>[g(S(V(s).icon),1)]),_:1}),g(" "+S(V(s).text),1)]),_:1},8,["color"])]),_:1}),e(C,{color:"white",variant:"flat"},{default:a(()=>[r.value?(n(),c(dt,{key:1,disabled:!V(s).status},{default:a(()=>[e(R,null,{default:a(()=>[e(y,{cols:"8"},{default:a(()=>[e(L,{values:r.value.title,color:"deep-purple-accent-3",prefield:"任务名称:"},null,8,["values"])]),_:1}),e(y,null,{default:a(()=>[e(L,{values:r.value.author,color:"deep-purple-accent-3",prefield:"创建人:"},null,8,["values"])]),_:1})]),_:1}),e(R,null,{default:a(()=>[e(y,null,{default:a(()=>[e(L,{values:r.value.description,color:"deep-purple-accent-3",prefield:"任务描述:"},null,8,["values"])]),_:1}),e(y,null,{default:a(()=>[e(L,{values:r.value.taskId,color:"deep-purple-accent-3",prefield:"任务id:"},null,8,["values"])]),_:1})]),_:1}),e(R,null,{default:a(()=>[e(y,{cols:"7"},{default:a(()=>[e(C,{variant:"outlined",color:"indigo-accent-4",class:"rounded-lg"},{default:a(()=>[e(U,null,{default:a(()=>[g("基本信息")]),_:1}),e(W,null,{default:a(()=>[e(q,{values:V(u),color:"deep-purple-accent-3"},null,8,["values"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(C,{variant:"outlined",color:"indigo-accent-4",class:"rounded-lg"},{default:a(()=>[e(U,null,{default:a(()=>[g("测试环境")]),_:1}),e(W,null,{default:a(()=>[e(q,{values:V(p),color:"deep-purple-accent-3"},null,8,["values"])]),_:1})]),_:1}),e(C,{variant:"outlined",color:"indigo-accent-4",class:"rounded-lg mt-4"},{default:a(()=>[e(U,null,{default:a(()=>[g("关联设置")]),_:1}),e(W,null,{default:a(()=>[e(q,{values:V(_),color:"deep-purple-accent-3"},null,8,["values"])]),_:1})]),_:1})]),_:1})]),_:1}),e(R,null,{default:a(()=>[e(y,null,{default:a(()=>[e(C,{variant:"outlined",color:"indigo-accent-4",class:"rounded-lg"},{default:a(()=>[e(U,null,{default:a(()=>[g("更新详情")]),_:1}),e(W,null,{default:a(()=>[e(R,null,{default:a(()=>[(n(!0),T(N,null,E(V(d),(v,b)=>(n(),c(y,{key:b,class:"px-0"},{default:a(()=>[e(it,{prefield:v.prefield,values:v.values},null,8,["prefield","values"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(R,null,{default:a(()=>[e(y,null,{default:a(()=>[e(x,{rounded:"",border:"",color:"blue-accent-2",class:"font-weight-bold",onClick:i[1]||(i[1]=v=>(r.value.taskId,void 0))},{default:a(()=>[pt]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled"])):(n(),c(x,{key:0}))]),_:1})]),_:1}),e(vt,{location:"top right",timeout:1e3,color:"success",variant:"tonal",modelValue:o.value,"onUpdate:modelValue":i[2]||(i[2]=v=>o.value=v)},{default:a(()=>[g(" 所有信息 "),_t,g(" 成功. ")]),_:1},8,["modelValue"])],64))}}),Rt=I({__name:"ReleaseMain",setup(t){const l=Xe();let o=h();function r(s){o.value=s.release}return(s,u)=>(n(),c(C,{variant:"flat"},{default:a(()=>[e(et,{"release-record":V(l),onSelectSingleReleaseRecord:r},null,8,["release-record"]),V(o)?(n(),c(kt,{key:0,release:V(o)},null,8,["release"])):G("",!0)]),_:1}))}});export{Rt as default};
