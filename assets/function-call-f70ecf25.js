import{m as re,u as ce}from"./mount-component-49243326.js";import{m as me,c as Q,l as $,H as x,L as ue,q as J,w as ve,o as ge,p as de,d as fe,e as he}from"./use-translate-ad5eefa4.js";import{u as we}from"./use-expose-c87283be.js";import{I as Pe}from"./index-1c02023b.js";import{a as Ie,S as Se}from"./index-a14bebed.js";import{P as xe}from"./index-c47f1bdb.js";import{u as ye}from"./use-touch-06ff9235.js";import{I as be}from"./index-4f7987dc.js";import{L as Ce}from"./index-5b517ddf.js";import{A as ee,H as oe,y as Z,D as H,u as Y,e as c,M as pe,q as Te,B as te,Q as Ye}from"./vue-libs-6a67f9c6.js";import{d as D,n as q,t as M,b as Xe,c as N,u as F,m as U}from"./with-install-0d9206aa.js";import{T as V,L as Ze,H as Re}from"./constant-ee6e27d7.js";import{c as ze}from"./interceptor-e18d38f8.js";const G=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),He=e=>({x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}),k=Q("image-preview")[1],K=2.6,De=ee({props:{src:String,show:Boolean,active:Number,minZoom:D(q),maxZoom:D(q),rootWidth:D(Number),rootHeight:D(Number),disableZoom:Boolean},emits:["scale","close","longPress"],setup(e,{emit:r,slots:m}){const o=oe({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,initializing:!1,imageRatio:0}),i=ye(),y=Z(),R=Z(),w=Z(!1),d=Z(!1);let P=0;const E=H(()=>{const{scale:t,moveX:a,moveY:n,moving:l,zooming:g,initializing:p}=o,z={transitionDuration:g||l||p?"0s":".3s"};return(t!==1||d.value)&&(z.transform=`matrix(${t}, 0, 0, ${t}, ${a}, ${n})`),z}),u=H(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:a}=e,n=w.value?a/o.imageRatio:t;return Math.max(0,(o.scale*n-t)/2)}return 0}),h=H(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:a}=e,n=w.value?a:t*o.imageRatio;return Math.max(0,(o.scale*n-a)/2)}return 0}),b=(t,a)=>{var n;if(t=x(t,+e.minZoom,+e.maxZoom+1),t!==o.scale){const l=t/o.scale;if(o.scale=t,a){const g=J((n=y.value)==null?void 0:n.$el),p={x:g.width*.5,y:g.height*.5},z=o.moveX-(a.x-g.left-p.x)*(l-1),le=o.moveY-(a.y-g.top-p.y)*(l-1);o.moveX=x(z,-u.value,u.value),o.moveY=x(le,-h.value,h.value)}else o.moveX=0,o.moveY=d.value?P:0;r("scale",{scale:t,index:e.active})}},C=()=>{b(1)},A=()=>{const t=o.scale>1?1:2;b(t,t===2||d.value?{x:i.startX.value,y:i.startY.value}:void 0)};let I,S,s,f,v,L,X,O,_=!1;const ae=t=>{const{touches:a}=t;if(I=a.length,I===2&&e.disableZoom)return;const{offsetX:n}=i;i.start(t),S=o.moveX,s=o.moveY,O=Date.now(),_=!1,o.moving=I===1&&(o.scale!==1||d.value),o.zooming=I===2&&!n.value,o.zooming&&(f=o.scale,v=G(a))},ie=t=>{const{touches:a}=t;if(i.move(t),o.moving){const{deltaX:n,deltaY:l}=i,g=n.value+S,p=l.value+s;if((g>u.value||g<-u.value)&&!_&&i.isHorizontal()){o.moving=!1;return}_=!0,$(t,!0),o.moveX=x(g,-u.value,u.value),o.moveY=x(p,-h.value,h.value)}if(o.zooming&&($(t,!0),a.length===2)){const n=G(a),l=f*n/v;L=He(a),b(l,L)}},se=()=>{if(I>1)return;const{offsetX:t,offsetY:a}=i,n=Date.now()-O,l=250;t.value<V&&a.value<V&&(n<l?X?(clearTimeout(X),X=null,A()):X=setTimeout(()=>{r("close"),X=null},l):n>Ze&&r("longPress"))},B=t=>{let a=!1;if((o.moving||o.zooming)&&(a=!0,o.moving&&S===o.moveX&&s===o.moveY&&(a=!1),!t.touches.length)){o.zooming&&(o.moveX=x(o.moveX,-u.value,u.value),o.moveY=x(o.moveY,-h.value,h.value),o.zooming=!1),o.moving=!1,S=0,s=0,f=1,o.scale<1&&C();const n=+e.maxZoom;o.scale>n&&b(n,L)}$(t,a),se(),i.reset()},j=()=>{const{rootWidth:t,rootHeight:a}=e,n=a/t,{imageRatio:l}=o;w.value=o.imageRatio>n&&l<K,d.value=o.imageRatio>n&&l>=K,d.value&&(P=(l*t-a)/2,o.moveY=P,o.initializing=!0,ue(()=>{o.initializing=!1})),C()},ne=t=>{const{naturalWidth:a,naturalHeight:n}=t.target;o.imageRatio=n/a,j()};return Y(()=>e.active,C),Y(()=>e.show,t=>{t||C()}),Y(()=>[e.rootWidth,e.rootHeight],j),me("touchmove",ie,{target:H(()=>{var t;return(t=R.value)==null?void 0:t.$el})}),()=>{const t={loading:()=>c(Ce,{type:"spinner"},null)};return c(Ie,{ref:R,class:k("swipe-item"),onTouchstartPassive:ae,onTouchend:B,onTouchcancel:B},{default:()=>[m.image?c("div",{class:k("image-wrap")},[m.image({src:e.src})]):c(be,{ref:y,src:e.src,fit:"contain",class:k("image",{vertical:w.value}),style:E.value,onLoad:ne},t)]})}}});function Me(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ye(e)}const[Ne,T]=Q("image-preview"),We=["show","teleport","transition","overlayStyle","closeOnPopstate"],Ee={show:Boolean,loop:M,images:Xe(),minZoom:N(1/3),maxZoom:N(3),overlay:M,closeable:Boolean,showIndex:M,className:F,closeIcon:U("clear"),transition:String,beforeClose:Function,overlayClass:F,overlayStyle:Object,swipeDuration:N(300),startPosition:N(0),showIndicators:Boolean,closeOnPopstate:M,closeIconPosition:U("top-right"),teleport:[String,Object]},Ae=ee({name:Ne,props:Ee,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:r,slots:m}){const o=Z(),i=oe({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),y=()=>{if(o.value){const s=J(o.value.$el);i.rootWidth=s.width,i.rootHeight=s.height,o.value.resize()}},R=s=>r("scale",s),w=s=>r("update:show",s),d=()=>{ze(e.beforeClose,{args:[i.active],done:()=>w(!1)})},P=s=>{s!==i.active&&(i.active=s,r("change",s))},E=()=>{if(e.showIndex)return c("div",{class:T("index")},[m.index?m.index({index:i.active}):`${i.active+1} / ${e.images.length}`])},u=()=>{if(m.cover)return c("div",{class:T("cover")},[m.cover()])},h=()=>{i.disableZoom=!0},b=()=>{i.disableZoom=!1},C=()=>{let s;return c(Se,{ref:o,lazyRender:!0,loop:e.loop,class:T("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:P,onDragEnd:b,onDragStart:h},Me(s=e.images.map((f,v)=>c(De,{src:f,show:e.show,active:i.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:i.rootWidth,rootHeight:i.rootHeight,disableZoom:i.disableZoom,onScale:R,onClose:d,onLongPress:()=>r("longPress",{index:v})},{image:m.image})))?s:{default:()=>[s]})},A=()=>{if(e.closeable)return c(Pe,{role:"button",name:e.closeIcon,class:[T("close-icon",e.closeIconPosition),Re],onClick:d},null)},I=()=>r("closed"),S=(s,f)=>{var v;return(v=o.value)==null?void 0:v.swipeTo(s,f)};return we({swipeTo:S}),pe(y),Y([ve,ge],y),Y(()=>e.startPosition,s=>P(+s)),Y(()=>e.show,s=>{const{images:f,startPosition:v}=e;s?(P(+v),Te(()=>{y(),S(+v,{immediate:!0})})):r("close",{index:i.active,url:f[i.active]})}),()=>c(xe,te({class:[T(),e.className],overlayClass:[T("overlay"),e.overlayClass],onClosed:I,"onUpdate:show":w},de(e,We)),{default:()=>[A(),C(),E(),u()]})}});let W;const Le={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function _e(){({instance:W}=re({setup(){const{state:e,toggle:r}=ce(),m=()=>{e.images=[]};return()=>c(Ae,te(e,{onClosed:m,"onUpdate:show":r}),null)}}))}const eo=(e,r=0)=>{if(fe)return W||_e(),e=Array.isArray(e)?{images:e,startPosition:r}:e,W.open(he({},Le,e)),W};export{Ae as _,eo as s};
