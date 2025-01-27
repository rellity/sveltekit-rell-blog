import{as as v,ab as h,at as S,x as E,ao as M,a6 as I,W as O,r as y,g as m,au as W,av as P,w as f,j as c,h as V,f as C}from"./ByYTnEOl.js";function H(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const D=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function X(e){return D.includes(e)}const R={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function J(e){return e=e.toLowerCase(),R[e]??e}const j=["touchstart","touchmove"];function K(e){return j.includes(e)}const B=["textarea","script","style","title"];function Q(e){return B.includes(e)}function U(e){var t=S,r=E;v(null),h(null);try{return e()}finally{v(t),h(r)}}const $=new Set,q=new Set;function Y(e,t,r,u){function n(a){if(u.capture||F.call(t,a),!a.cancelBubble)return U(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?M(()=>{t.addEventListener(e,n,u)}):t.addEventListener(e,n,u),n}function Z(e){for(var t=0;t<e.length;t++)$.add(e[t]);for(var r of q)r(e)}function F(e){var b;var t=this,r=t.ownerDocument,u=e.type,n=((b=e.composedPath)==null?void 0:b.call(e))||[],a=n[0]||e.target,o=0,l=e.__root;if(l){var i=n.indexOf(l);if(i!==-1&&(t===document||t===window)){e.__root=t;return}var w=n.indexOf(t);if(w===-1)return;i<=w&&(o=i)}if(a=n[o]||e.target,a!==t){I(e,"currentTarget",{configurable:!0,get(){return a||r}});var k=S,L=E;v(null),h(null);try{for(var d,T=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var _=a["__"+u];if(_!==void 0&&!a.disabled)if(O(_)){var[x,...A]=_;x.apply(a,[e,...A])}else _.call(a,e)}catch(p){d?T.push(p):d=p}if(e.cancelBubble||g===t||g===null)break;a=g}if(d){for(let p of T)queueMicrotask(()=>{throw p});throw d}}finally{e.__root=t,delete e.currentTarget,v(k),h(L)}}}function N(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function s(e,t){var r=E;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ee(e,t){var r=(t&W)!==0,u=(t&P)!==0,n,a=!e.startsWith("<!>");return()=>{if(f)return s(c,null),c;n===void 0&&(n=N(a?e:"<!>"+e),r||(n=m(n)));var o=u?document.importNode(n,!0):n.cloneNode(!0);if(r){var l=m(o),i=o.lastChild;s(l,i)}else s(o,o);return o}}function te(e,t,r="svg"){var u=!e.startsWith("<!>"),n=`<${r}>${u?e:"<!>"+e}</${r}>`,a;return()=>{if(f)return s(c,null),c;if(!a){var o=N(n),l=m(o);a=m(l)}var i=a.cloneNode(!0);return s(i,i),i}}function re(e=""){if(!f){var t=y(e+"");return s(t,t),t}var r=c;return r.nodeType!==3&&(r.before(r=y()),C(r)),s(r,r),r}function ae(){if(f)return s(c,null),c;var e=document.createDocumentFragment(),t=document.createComment(""),r=y();return e.append(t,r),s(t,r),e}function ne(e,t){if(f){E.nodes_end=c,V();return}e!==null&&e.before(t)}const G="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(G);export{$ as a,s as b,ne as c,ae as d,re as e,Z as f,Q as g,F as h,K as i,H as j,Y as k,X as l,te as m,J as n,q as r,ee as t};
