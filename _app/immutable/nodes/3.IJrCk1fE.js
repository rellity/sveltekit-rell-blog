import{l as C,d as D,e as K,c as P,t as A}from"../chunks/D0jBrUWs.js";import"../chunks/DCcrQR1j.js";import{O as N,b as O,P as Q,C as R,Q as p,g as i,K as $,R as h,N as d,L as s,M as l}from"../chunks/Cv05xH-A.js";import{s as g}from"../chunks/BQ57WLDl.js";import{r as L}from"../chunks/CE6czqr7.js";function U(a,e,n=e){var o=N();C(a,"input",r=>{var t=r?a.defaultValue:a.value;if(t=y(a)?x(t):t,n(t),o&&t!==(t=e())){var u=a.selectionStart,v=a.selectionEnd;a.value=t??"",v!==null&&(a.selectionStart=u,a.selectionEnd=Math.min(v,a.value.length))}}),(R&&a.defaultValue!==a.value||O(e)==null&&a.value)&&n(y(a)?x(a.value):a.value),Q(()=>{var r=e();y(a)&&r===x(a.value)||a.type==="date"&&!r&&!a.value||r!==a.value&&(a.value=r??"")})}function y(a){var e=a.type;return e==="number"||e==="range"}function x(a){return a===""?null:+a}var j=A('<div class="card w-full max-w-sm"><div class="card-header"><h2 class="card-title"> </h2> <button class="btn btn-link"> </button></div> <div class="card-content"><form class="space-y-4"><input type="text" placeholder="Username"> <input type="password" placeholder="Password"> <button type="submit" class="btn btn-primary w-full"> </button></form></div></div>');function q(a){let e=h(""),n=h(""),o=h(!1);function r(){}var t=j(),u=s(t),v=s(u),E=s(v,!0);l(v);var m=d(v,2);m.__click=function(...c){var k;(k=p(o,!i(o)))==null||k.apply(this,c)};var M=s(m,!0);l(m),l(u);var w=d(u,2),f=s(w),_=s(f);L(_);var b=d(_,2);L(b);var S=d(b,2),V=s(S,!0);l(S),l(f),l(w),l(t),$(()=>{g(E,i(o)?"Sign Up":"Login"),g(M,i(o)?"Already have an account? Login":"Don't have an account? Sign up"),g(V,i(o)?"Sign Up":"Login")}),K("submit",f,r),U(_,()=>i(e),c=>p(e,c)),U(b,()=>i(n),c=>p(n,c)),P(a,t)}D(["click"]);var z=A('<main class="mx-auto max-w-4xl px-4 py-8"><!></main>');function J(a){var e=z(),n=s(e);q(n),l(e),P(a,e)}export{J as component};
