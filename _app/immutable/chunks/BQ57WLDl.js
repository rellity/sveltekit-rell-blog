import{i as m,j as b,H,k as L,m as p,s as c,n as T,o as O,p as _,q as C,t as I,v as Y,w as j,x as k,y as M,z as S,A as V,B as $,C as w,D as q,E as z,c as B}from"./Cv05xH-A.js";import{a as P,r as A,h,b as W,i as F}from"./D0jBrUWs.js";function Q(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function G(t,e){return D(t,e)}function U(t,e){m(),e.intro=e.intro??!1;const r=e.target,l=w,u=_;try{for(var a=b(r);a&&(a.nodeType!==8||a.data!==H);)a=L(a);if(!a)throw p;c(!0),T(a),O();const d=D(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==C)throw I(),p;return c(!1),d}catch(d){if(d===p)return e.recover===!1&&Y(),m(),j(r),c(!1),G(t,e);throw d}finally{c(l),T(u)}}const o=new Map;function D(t,{target:e,anchor:r,props:l={},events:u,context:a,intro:d=!0}){m();var v=new Set,y=i=>{for(var s=0;s<i.length;s++){var n=i[s];if(!v.has(n)){v.add(n);var f=F(n);e.addEventListener(n,h,{passive:f});var R=o.get(n);R===void 0?(document.addEventListener(n,h,{passive:f}),o.set(n,1)):o.set(n,R+1)}}};y(k(P)),A.add(y);var g=void 0,N=M(()=>{var i=r??e.appendChild(S());return V(()=>{if(a){$({});var s=B;s.c=a}u&&(l.$$events=u),w&&W(i,null),g=t(i,l)||{},w&&(q.nodes_end=_),a&&z()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=o.get(s);--n===0?(document.removeEventListener(s,h),o.delete(s)):o.set(s,n)}A.delete(y),i!==r&&((f=i.parentNode)==null||f.removeChild(i))}});return E.set(g,N),g}let E=new WeakMap;function X(t,e){const r=E.get(t);return r?(E.delete(t),r(e)):Promise.resolve()}export{U as h,G as m,Q as s,X as u};
