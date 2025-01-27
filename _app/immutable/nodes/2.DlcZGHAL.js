var qt=n=>{throw TypeError(n)};var Mt=(n,t,e)=>t.has(n)||qt("Cannot "+e);var i=(n,t,e)=>(Mt(n,t,"read from private field"),e?e.call(n):t.get(n)),k=(n,t,e)=>t.has(n)?qt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),w=(n,t,e,r)=>(Mt(n,t,"write to private field"),r?r.call(n,e):t.set(n,e),e),p=(n,t,e)=>(Mt(n,t,"access private method"),e);import{o as et,c as T,d as Pe,t as Z}from"../chunks/D0jBrUWs.js";import"../chunks/DCcrQR1j.js";import{J as nt,B as Me,g as E,E as ke,aB as Se,L as R,N as ct,M as Y,K as kt,aj as $t,Q as ne,aA as De}from"../chunks/Cv05xH-A.js";import{s as ut}from"../chunks/BQ57WLDl.js";import{l as re,s as ae,i as dt,b as _e,c as We}from"../chunks/CeF-ulw7.js";import{S as Ce,t as Lt,u as $,v as _t,r as vt,b as Te,w as jt,x as Ht,y as Ee,i as Fe,z as Re,A as At,n as se,B as Ye,C as Qe,I as ie,q as oe,D as Bt,E as Ne,F as Ie}from"../chunks/DrFUeHVP.js";import{i as qe}from"../chunks/BzRNSMT5.js";import{r as $e,d as St,g as Le}from"../chunks/COrVE5_A.js";var C,h,gt,D,J,rt,X,q,bt,at,st,z,K,U,it,m,ft,Wt,Ct,Tt,Et,Ft,Rt,Yt,ce,ee,je=(ee=class extends Ce{constructor(t,e){super();k(this,m);k(this,C);k(this,h);k(this,gt);k(this,D);k(this,J);k(this,rt);k(this,X);k(this,q);k(this,bt);k(this,at);k(this,st);k(this,z);k(this,K);k(this,U);k(this,it,new Set);this.options=e,w(this,C,t),w(this,q,null),w(this,X,Lt()),this.options.experimental_prefetchInRender||i(this,X).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(i(this,h).addObserver(this),Xt(i(this,h),this.options)?p(this,m,ft).call(this):this.updateResult(),p(this,m,Et).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Qt(i(this,h),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Qt(i(this,h),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,p(this,m,Ft).call(this),p(this,m,Rt).call(this),i(this,h).removeObserver(this)}setOptions(t,e){const r=this.options,a=i(this,h);if(this.options=i(this,C).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof $(this.options.enabled,i(this,h))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");p(this,m,Yt).call(this),i(this,h).setOptions(this.options),r._defaulted&&!_t(this.options,r)&&i(this,C).getQueryCache().notify({type:"observerOptionsUpdated",query:i(this,h),observer:this});const s=this.hasListeners();s&&Ut(i(this,h),a,this.options,r)&&p(this,m,ft).call(this),this.updateResult(e),s&&(i(this,h)!==a||$(this.options.enabled,i(this,h))!==$(r.enabled,i(this,h))||vt(this.options.staleTime,i(this,h))!==vt(r.staleTime,i(this,h)))&&p(this,m,Wt).call(this);const o=p(this,m,Ct).call(this);s&&(i(this,h)!==a||$(this.options.enabled,i(this,h))!==$(r.enabled,i(this,h))||o!==i(this,U))&&p(this,m,Tt).call(this,o)}getOptimisticResult(t){const e=i(this,C).getQueryCache().build(i(this,C),t),r=this.createResult(e,t);return Ae(this,r)&&(w(this,D,r),w(this,rt,this.options),w(this,J,i(this,h).state)),r}getCurrentResult(){return i(this,D)}trackResult(t,e){const r={};return Object.keys(t).forEach(a=>{Object.defineProperty(r,a,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(a),e==null||e(a),t[a])})}),r}trackProp(t){i(this,it).add(t)}getCurrentQuery(){return i(this,h)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=i(this,C).defaultQueryOptions(t),r=i(this,C).getQueryCache().build(i(this,C),e);return r.fetch().then(()=>this.createResult(r,e))}fetch(t){return p(this,m,ft).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),i(this,D)))}createResult(t,e){var L;const r=i(this,h),a=this.options,s=i(this,D),o=i(this,J),c=i(this,rt),l=t!==r?t.state:i(this,gt),{state:f}=t;let u={...f},x=!1,O;if(e._optimisticResults){const v=this.hasListeners(),F=!v&&Xt(t,e),H=v&&Ut(t,r,e,a);(F||H)&&(u={...u,...Re(f.data,t.options)}),e._optimisticResults==="isRestoring"&&(u.fetchStatus="idle")}let{error:S,errorUpdatedAt:_,status:P}=u;if(e.select&&u.data!==void 0)if(s&&u.data===(o==null?void 0:o.data)&&e.select===i(this,bt))O=i(this,at);else try{w(this,bt,e.select),O=e.select(u.data),O=At(s==null?void 0:s.data,O,e),w(this,at,O),w(this,q,null)}catch(v){w(this,q,v)}else O=u.data;if(e.placeholderData!==void 0&&O===void 0&&P==="pending"){let v;if(s!=null&&s.isPlaceholderData&&e.placeholderData===(c==null?void 0:c.placeholderData))v=s.data;else if(v=typeof e.placeholderData=="function"?e.placeholderData((L=i(this,st))==null?void 0:L.state.data,i(this,st)):e.placeholderData,e.select&&v!==void 0)try{v=e.select(v),w(this,q,null)}catch(F){w(this,q,F)}v!==void 0&&(P="success",O=At(s==null?void 0:s.data,v,e),x=!0)}i(this,q)&&(S=i(this,q),O=i(this,at),_=Date.now(),P="error");const N=u.fetchStatus==="fetching",y=P==="pending",b=P==="error",M=y&&N,j=O!==void 0,W={status:P,fetchStatus:u.fetchStatus,isPending:y,isSuccess:P==="success",isError:b,isInitialLoading:M,isLoading:M,data:O,dataUpdatedAt:u.dataUpdatedAt,error:S,errorUpdatedAt:_,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>l.dataUpdateCount||u.errorUpdateCount>l.errorUpdateCount,isFetching:N,isRefetching:N&&!y,isLoadingError:b&&!j,isPaused:u.fetchStatus==="paused",isPlaceholderData:x,isRefetchError:b&&j,isStale:Nt(t,e),refetch:this.refetch,promise:i(this,X)};if(this.options.experimental_prefetchInRender){const v=A=>{W.status==="error"?A.reject(W.error):W.data!==void 0&&A.resolve(W.data)},F=()=>{const A=w(this,X,W.promise=Lt());v(A)},H=i(this,X);switch(H.status){case"pending":t.queryHash===r.queryHash&&v(H);break;case"fulfilled":(W.status==="error"||W.data!==H.value)&&F();break;case"rejected":(W.status!=="error"||W.error!==H.reason)&&F();break}}return W}updateResult(t){const e=i(this,D),r=this.createResult(i(this,h),this.options);if(w(this,J,i(this,h).state),w(this,rt,this.options),i(this,J).data!==void 0&&w(this,st,i(this,h)),_t(r,e))return;w(this,D,r);const a={},s=()=>{if(!e)return!0;const{notifyOnChangeProps:o}=this.options,c=typeof o=="function"?o():o;if(c==="all"||!c&&!i(this,it).size)return!0;const d=new Set(c??i(this,it));return this.options.throwOnError&&d.add("error"),Object.keys(i(this,D)).some(l=>{const f=l;return i(this,D)[f]!==e[f]&&d.has(f)})};(t==null?void 0:t.listeners)!==!1&&s()&&(a.listeners=!0),p(this,m,ce).call(this,{...a,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&p(this,m,Et).call(this)}},C=new WeakMap,h=new WeakMap,gt=new WeakMap,D=new WeakMap,J=new WeakMap,rt=new WeakMap,X=new WeakMap,q=new WeakMap,bt=new WeakMap,at=new WeakMap,st=new WeakMap,z=new WeakMap,K=new WeakMap,U=new WeakMap,it=new WeakMap,m=new WeakSet,ft=function(t){p(this,m,Yt).call(this);let e=i(this,h).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Te)),e},Wt=function(){p(this,m,Ft).call(this);const t=vt(this.options.staleTime,i(this,h));if(jt||i(this,D).isStale||!Ht(t))return;const r=Ee(i(this,D).dataUpdatedAt,t)+1;w(this,z,setTimeout(()=>{i(this,D).isStale||this.updateResult()},r))},Ct=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(i(this,h)):this.options.refetchInterval)??!1},Tt=function(t){p(this,m,Rt).call(this),w(this,U,t),!(jt||$(this.options.enabled,i(this,h))===!1||!Ht(i(this,U))||i(this,U)===0)&&w(this,K,setInterval(()=>{(this.options.refetchIntervalInBackground||Fe.isFocused())&&p(this,m,ft).call(this)},i(this,U)))},Et=function(){p(this,m,Wt).call(this),p(this,m,Tt).call(this,p(this,m,Ct).call(this))},Ft=function(){i(this,z)&&(clearTimeout(i(this,z)),w(this,z,void 0))},Rt=function(){i(this,K)&&(clearInterval(i(this,K)),w(this,K,void 0))},Yt=function(){const t=i(this,C).getQueryCache().build(i(this,C),this.options);if(t===i(this,h))return;const e=i(this,h);w(this,h,t),w(this,gt,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},ce=function(t){se.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(i(this,D))}),i(this,C).getQueryCache().notify({query:i(this,h),type:"observerResultsUpdated"})})},ee);function He(n,t){return $(t.enabled,n)!==!1&&n.state.data===void 0&&!(n.state.status==="error"&&t.retryOnMount===!1)}function Xt(n,t){return He(n,t)||n.state.data!==void 0&&Qt(n,t,t.refetchOnMount)}function Qt(n,t,e){if($(t.enabled,n)!==!1){const r=typeof e=="function"?e(n):e;return r==="always"||r!==!1&&Nt(n,t)}return!1}function Ut(n,t,e,r){return(n!==t||$(r.enabled,n)===!1)&&(!e.suspense||n.state.status!=="error")&&Nt(n,e)}function Nt(n,t){return $(t.enabled,n)!==!1&&n.isStaleByTime(vt(t.staleTime,n))}function Ae(n,t){return!_t(n.getCurrentResult(),t)}function Be(){return Ye()}function Xe(n){return Qe()}function Ue(n){return"subscribe"in n&&typeof n.subscribe=="function"}function Ge(){}function Ve(n,t,e){const r=Xe(),a=Be(),s=Ue(n)?n:$e(n),o=St([s,a],([f,u])=>{const x=r.defaultQueryOptions(f);return x._optimisticResults=u?"isRestoring":"optimistic",x}),c=new t(r,Le(o));o.subscribe(f=>{c.setOptions(f,{listeners:!1})});const d=St(a,(f,u)=>{const x=f?Ge:c.subscribe(se.batchCalls(u));return c.updateResult(),x}),{subscribe:l}=St([d,o],([f,u])=>(f=c.getOptimisticResult(u),u.notifyOnChangeProps?f:c.trackResult(f)));return{subscribe:l}}function Je(n,t){return Ve(n,je)}function ze(n,t){const e=re(t,["children","$$slots","$$events","$$legacy"]);ie(n,ae({name:"chevron-left"},()=>e,{iconNode:[["path",{d:"m15 18-6-6 6-6"}]],children:(a,s)=>{var o=et(),c=nt(o);oe(c,t,"default",{}),T(a,o)},$$slots:{default:!0}}))}function Ke(n,t){const e=re(t,["children","$$slots","$$events","$$legacy"]);ie(n,ae({name:"chevron-right"},()=>e,{iconNode:[["path",{d:"m9 18 6-6-6-6"}]],children:(a,s)=>{var o=et(),c=nt(o);oe(c,t,"default",{}),T(a,o)},$$slots:{default:!0}}))}const Ze=async({page:n,limit:t})=>{const e=(n-1)*t,r=e+t-1,{data:a,error:s}=await Bt.from("blogs").select("*",{count:"exact"}).order("created_at",{ascending:!1}).range(e,r);if(s)return{status:500,error:s.message,blogs:[],total:0};const{count:o}=await Bt.from("blogs").select("*",{count:"exact"});return{blogs:a||[],total:o||0}},ue=6048e5,tn=864e5,Gt=Symbol.for("constructDateFrom");function G(n,t){return typeof n=="function"?n(t):n&&typeof n=="object"&&Gt in n?n[Gt](t):n instanceof Date?new n.constructor(t):new Date(t)}function Q(n,t){return G(t||n,n)}let en={};function wt(){return en}function mt(n,t){var c,d,l,f;const e=wt(),r=(t==null?void 0:t.weekStartsOn)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??e.weekStartsOn??((f=(l=e.locale)==null?void 0:l.options)==null?void 0:f.weekStartsOn)??0,a=Q(n,t==null?void 0:t.in),s=a.getDay(),o=(s<r?7:0)+s-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function pt(n,t){return mt(n,{...t,weekStartsOn:1})}function de(n,t){const e=Q(n,t==null?void 0:t.in),r=e.getFullYear(),a=G(e,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const s=pt(a),o=G(e,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const c=pt(o);return e.getTime()>=s.getTime()?r+1:e.getTime()>=c.getTime()?r:r-1}function Vt(n){const t=Q(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function he(n,...t){const e=G.bind(null,t.find(r=>typeof r=="object"));return t.map(e)}function Jt(n,t){const e=Q(n,t==null?void 0:t.in);return e.setHours(0,0,0,0),e}function le(n,t,e){const[r,a]=he(e==null?void 0:e.in,n,t),s=Jt(r),o=Jt(a),c=+s-Vt(s),d=+o-Vt(o);return Math.round((c-d)/tn)}function nn(n,t){const e=de(n,t),r=G(n,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),pt(r)}function rn(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function an(n){return!(!rn(n)&&typeof n!="number"||isNaN(+Q(n)))}function sn(n,t){const e=Q(n,t==null?void 0:t.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}const on={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},cn=(n,t,e)=>{let r;const a=on[n];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r};function Dt(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const un={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},dn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},hn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ln={date:Dt({formats:un,defaultWidth:"full"}),time:Dt({formats:dn,defaultWidth:"full"}),dateTime:Dt({formats:hn,defaultWidth:"full"})},fn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},mn=(n,t,e,r)=>fn[n];function ht(n){return(t,e)=>{const r=e!=null&&e.context?String(e.context):"standalone";let a;if(r==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,c=e!=null&&e.width?String(e.width):o;a=n.formattingValues[c]||n.formattingValues[o]}else{const o=n.defaultWidth,c=e!=null&&e.width?String(e.width):n.defaultWidth;a=n.values[c]||n.values[o]}const s=n.argumentCallback?n.argumentCallback(t):t;return a[s]}}const gn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},bn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},wn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},yn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},vn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},pn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},On=(n,t)=>{const e=Number(n),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},xn={ordinalNumber:On,era:ht({values:gn,defaultWidth:"wide"}),quarter:ht({values:bn,defaultWidth:"wide",argumentCallback:n=>n-1}),month:ht({values:wn,defaultWidth:"wide"}),day:ht({values:yn,defaultWidth:"wide"}),dayPeriod:ht({values:vn,defaultWidth:"wide",formattingValues:pn,defaultFormattingWidth:"wide"})};function lt(n){return(t,e={})=>{const r=e.width,a=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],s=t.match(a);if(!s)return null;const o=s[0],c=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],d=Array.isArray(c)?Mn(c,u=>u.test(o)):Pn(c,u=>u.test(o));let l;l=n.valueCallback?n.valueCallback(d):d,l=e.valueCallback?e.valueCallback(l):l;const f=t.slice(o.length);return{value:l,rest:f}}}function Pn(n,t){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&t(n[e]))return e}function Mn(n,t){for(let e=0;e<n.length;e++)if(t(n[e]))return e}function kn(n){return(t,e={})=>{const r=t.match(n.matchPattern);if(!r)return null;const a=r[0],s=t.match(n.parsePattern);if(!s)return null;let o=n.valueCallback?n.valueCallback(s[0]):s[0];o=e.valueCallback?e.valueCallback(o):o;const c=t.slice(a.length);return{value:o,rest:c}}}const Sn=/^(\d+)(th|st|nd|rd)?/i,Dn=/\d+/i,_n={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Wn={any:[/^b/i,/^(a|c)/i]},Cn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Tn={any:[/1/i,/2/i,/3/i,/4/i]},En={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Fn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Rn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Yn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Qn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Nn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},In={ordinalNumber:kn({matchPattern:Sn,parsePattern:Dn,valueCallback:n=>parseInt(n,10)}),era:lt({matchPatterns:_n,defaultMatchWidth:"wide",parsePatterns:Wn,defaultParseWidth:"any"}),quarter:lt({matchPatterns:Cn,defaultMatchWidth:"wide",parsePatterns:Tn,defaultParseWidth:"any",valueCallback:n=>n+1}),month:lt({matchPatterns:En,defaultMatchWidth:"wide",parsePatterns:Fn,defaultParseWidth:"any"}),day:lt({matchPatterns:Rn,defaultMatchWidth:"wide",parsePatterns:Yn,defaultParseWidth:"any"}),dayPeriod:lt({matchPatterns:Qn,defaultMatchWidth:"any",parsePatterns:Nn,defaultParseWidth:"any"})},fe={code:"en-US",formatDistance:cn,formatLong:ln,formatRelative:mn,localize:xn,match:In,options:{weekStartsOn:0,firstWeekContainsDate:1}};function qn(n,t){const e=Q(n,t==null?void 0:t.in);return le(e,sn(e))+1}function $n(n,t){const e=Q(n,t==null?void 0:t.in),r=+pt(e)-+nn(e);return Math.round(r/ue)+1}function me(n,t){var f,u,x,O;const e=Q(n,t==null?void 0:t.in),r=e.getFullYear(),a=wt(),s=(t==null?void 0:t.firstWeekContainsDate)??((u=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:u.firstWeekContainsDate)??a.firstWeekContainsDate??((O=(x=a.locale)==null?void 0:x.options)==null?void 0:O.firstWeekContainsDate)??1,o=G((t==null?void 0:t.in)||n,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const c=mt(o,t),d=G((t==null?void 0:t.in)||n,0);d.setFullYear(r,0,s),d.setHours(0,0,0,0);const l=mt(d,t);return+e>=+c?r+1:+e>=+l?r:r-1}function Ln(n,t){var c,d,l,f;const e=wt(),r=(t==null?void 0:t.firstWeekContainsDate)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??e.firstWeekContainsDate??((f=(l=e.locale)==null?void 0:l.options)==null?void 0:f.firstWeekContainsDate)??1,a=me(n,t),s=G((t==null?void 0:t.in)||n,0);return s.setFullYear(a,0,r),s.setHours(0,0,0,0),mt(s,t)}function jn(n,t){const e=Q(n,t==null?void 0:t.in),r=+mt(e,t)-+Ln(e,t);return Math.round(r/ue)+1}function g(n,t){const e=n<0?"-":"",r=Math.abs(n).toString().padStart(t,"0");return e+r}const B={y(n,t){const e=n.getFullYear(),r=e>0?e:1-e;return g(t==="yy"?r%100:r,t.length)},M(n,t){const e=n.getMonth();return t==="M"?String(e+1):g(e+1,2)},d(n,t){return g(n.getDate(),t.length)},a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(n,t){return g(n.getHours()%12||12,t.length)},H(n,t){return g(n.getHours(),t.length)},m(n,t){return g(n.getMinutes(),t.length)},s(n,t){return g(n.getSeconds(),t.length)},S(n,t){const e=t.length,r=n.getMilliseconds(),a=Math.trunc(r*Math.pow(10,e-3));return g(a,t.length)}},tt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},zt={G:function(n,t,e){const r=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});case"GGGG":default:return e.era(r,{width:"wide"})}},y:function(n,t,e){if(t==="yo"){const r=n.getFullYear(),a=r>0?r:1-r;return e.ordinalNumber(a,{unit:"year"})}return B.y(n,t)},Y:function(n,t,e,r){const a=me(n,r),s=a>0?a:1-a;if(t==="YY"){const o=s%100;return g(o,2)}return t==="Yo"?e.ordinalNumber(s,{unit:"year"}):g(s,t.length)},R:function(n,t){const e=de(n);return g(e,t.length)},u:function(n,t){const e=n.getFullYear();return g(e,t.length)},Q:function(n,t,e){const r=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return g(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,t,e){const r=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return g(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,t,e){const r=n.getMonth();switch(t){case"M":case"MM":return B.M(n,t);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(n,t,e){const r=n.getMonth();switch(t){case"L":return String(r+1);case"LL":return g(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(n,t,e,r){const a=jn(n,r);return t==="wo"?e.ordinalNumber(a,{unit:"week"}):g(a,t.length)},I:function(n,t,e){const r=$n(n);return t==="Io"?e.ordinalNumber(r,{unit:"week"}):g(r,t.length)},d:function(n,t,e){return t==="do"?e.ordinalNumber(n.getDate(),{unit:"date"}):B.d(n,t)},D:function(n,t,e){const r=qn(n);return t==="Do"?e.ordinalNumber(r,{unit:"dayOfYear"}):g(r,t.length)},E:function(n,t,e){const r=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});case"EEEE":default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(n,t,e,r){const a=n.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return g(s,2);case"eo":return e.ordinalNumber(s,{unit:"day"});case"eee":return e.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(a,{width:"short",context:"formatting"});case"eeee":default:return e.day(a,{width:"wide",context:"formatting"})}},c:function(n,t,e,r){const a=n.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return g(s,t.length);case"co":return e.ordinalNumber(s,{unit:"day"});case"ccc":return e.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(a,{width:"narrow",context:"standalone"});case"cccccc":return e.day(a,{width:"short",context:"standalone"});case"cccc":default:return e.day(a,{width:"wide",context:"standalone"})}},i:function(n,t,e){const r=n.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return g(a,t.length);case"io":return e.ordinalNumber(a,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});case"iiii":default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(n,t,e){const a=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(n,t,e){const r=n.getHours();let a;switch(r===12?a=tt.noon:r===0?a=tt.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(n,t,e){const r=n.getHours();let a;switch(r>=17?a=tt.evening:r>=12?a=tt.afternoon:r>=4?a=tt.morning:a=tt.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(n,t,e){if(t==="ho"){let r=n.getHours()%12;return r===0&&(r=12),e.ordinalNumber(r,{unit:"hour"})}return B.h(n,t)},H:function(n,t,e){return t==="Ho"?e.ordinalNumber(n.getHours(),{unit:"hour"}):B.H(n,t)},K:function(n,t,e){const r=n.getHours()%12;return t==="Ko"?e.ordinalNumber(r,{unit:"hour"}):g(r,t.length)},k:function(n,t,e){let r=n.getHours();return r===0&&(r=24),t==="ko"?e.ordinalNumber(r,{unit:"hour"}):g(r,t.length)},m:function(n,t,e){return t==="mo"?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):B.m(n,t)},s:function(n,t,e){return t==="so"?e.ordinalNumber(n.getSeconds(),{unit:"second"}):B.s(n,t)},S:function(n,t){return B.S(n,t)},X:function(n,t,e){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return Zt(r);case"XXXX":case"XX":return V(r);case"XXXXX":case"XXX":default:return V(r,":")}},x:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"x":return Zt(r);case"xxxx":case"xx":return V(r);case"xxxxx":case"xxx":default:return V(r,":")}},O:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Kt(r,":");case"OOOO":default:return"GMT"+V(r,":")}},z:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Kt(r,":");case"zzzz":default:return"GMT"+V(r,":")}},t:function(n,t,e){const r=Math.trunc(+n/1e3);return g(r,t.length)},T:function(n,t,e){return g(+n,t.length)}};function Kt(n,t=""){const e=n>0?"-":"+",r=Math.abs(n),a=Math.trunc(r/60),s=r%60;return s===0?e+String(a):e+String(a)+t+g(s,2)}function Zt(n,t){return n%60===0?(n>0?"-":"+")+g(Math.abs(n)/60,2):V(n,t)}function V(n,t=""){const e=n>0?"-":"+",r=Math.abs(n),a=g(Math.trunc(r/60),2),s=g(r%60,2);return e+a+t+s}const te=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},ge=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Hn=(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],r=e[1],a=e[2];if(!a)return te(n,t);let s;switch(r){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",te(r,t)).replace("{{time}}",ge(a,t))},An={p:ge,P:Hn},Bn=/^D+$/,Xn=/^Y+$/,Un=["D","DD","YY","YYYY"];function Gn(n){return Bn.test(n)}function Vn(n){return Xn.test(n)}function Jn(n,t,e){const r=zn(n,t,e);if(console.warn(r),Un.includes(n))throw new RangeError(r)}function zn(n,t,e){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Kn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Zn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tr=/^'([^]*?)'?$/,er=/''/g,nr=/[a-zA-Z]/;function rr(n,t,e){var f,u,x,O,S,_,P,N;const r=wt(),a=(e==null?void 0:e.locale)??r.locale??fe,s=(e==null?void 0:e.firstWeekContainsDate)??((u=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:u.firstWeekContainsDate)??r.firstWeekContainsDate??((O=(x=r.locale)==null?void 0:x.options)==null?void 0:O.firstWeekContainsDate)??1,o=(e==null?void 0:e.weekStartsOn)??((_=(S=e==null?void 0:e.locale)==null?void 0:S.options)==null?void 0:_.weekStartsOn)??r.weekStartsOn??((N=(P=r.locale)==null?void 0:P.options)==null?void 0:N.weekStartsOn)??0,c=Q(n,e==null?void 0:e.in);if(!an(c))throw new RangeError("Invalid time value");let d=t.match(Zn).map(y=>{const b=y[0];if(b==="p"||b==="P"){const M=An[b];return M(y,a.formatLong)}return y}).join("").match(Kn).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const b=y[0];if(b==="'")return{isToken:!1,value:ar(y)};if(zt[b])return{isToken:!0,value:y};if(b.match(nr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return{isToken:!1,value:y}});a.localize.preprocessor&&(d=a.localize.preprocessor(c,d));const l={firstWeekContainsDate:s,weekStartsOn:o,locale:a};return d.map(y=>{if(!y.isToken)return y.value;const b=y.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&Vn(b)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&Gn(b))&&Jn(b,t,String(n));const M=zt[b[0]];return M(c,b,a.localize,l)}).join("")}function ar(n){const t=n.match(tr);return t?t[1].replace(er,"'"):n}function sr(n,t,e){var u,x;const[r,a]=he(e==null?void 0:e.in,n,t),s=wt(),o=s.locale??fe,c=s.weekStartsOn??((x=(u=s.locale)==null?void 0:u.options)==null?void 0:x.weekStartsOn)??0,d=le(r,a);if(isNaN(d))throw new RangeError("Invalid time value");let l;d<-6?l="other":d<-1?l="lastWeek":d<0?l="yesterday":d<1?l="today":d<2?l="tomorrow":d<7?l="nextWeek":l="other";const f=o.formatRelative(l,r,a,{locale:o,weekStartsOn:c});return rr(r,f,{locale:o,weekStartsOn:c})}function ir(n,t=12){const e=n.split(" ");return e.length<=t?n:e.slice(0,t).join(" ")+"..."}function or(n,t,e,r){ne(t,E(t)+1),e().refetch()}function cr(n,t,e,r){E(t)>1&&(ne(t,E(t)-1),e().refetch())}var ur=Z('<div class="mx-auto my-6 h-40 w-40 animate-spin justify-center self-center rounded-full border-8 border-blue-500 border-t-transparent"></div>'),dr=Z("<p> </p>"),hr=Z("<p>No blog posts found.</p>"),lr=Z('<div class="rounded-lg bg-gray-600 p-6 shadow"><h2 class="text-xl font-bold"> </h2> <p class="text-white"> </p> <p class="py-4 text-sm text-white"> </p> <a href="/" class="text-blue-300 hover:text-blue-700">Read more...</a></div>'),fr=Z('<nav class="fixed bottom-5 left-1/2 flex w-full max-w-md -translate-x-1/2 transform items-center justify-between px-4"><button class="rounded-md px-1.5 py-1 ring ring-white disabled:opacity-40"><!></button> <p> </p> <button class="rounded-md px-1.5 py-1 ring ring-white disabled:opacity-40"><!></button></nav>'),mr=Z('<div class="space-y-6"><!> <!></div>');function gr(n,t){Me(t,!1);const[e,r]=_e(),a=()=>We(c,"$data",e);let s=Se(1),o=4;const c=Je({queryKey:["blogs",{page:E(s),limit:o}],queryFn:async()=>await Ze({page:E(s),limit:o})});qe();var d=mr(),l=R(d);{var f=S=>{var _=ur();T(S,_)},u=S=>{var _=et(),P=nt(_);{var N=b=>{var M=dr(),j=R(M);Y(M),kt(()=>ut(j,`Error: ${a().error.message??""}`)),T(b,M)},y=b=>{var M=et(),j=nt(M);{var I=L=>{var v=hr();T(L,v)},W=L=>{var v=et(),F=nt(v);{var H=A=>{var ot=et(),be=nt(ot);Ne(be,1,()=>a().data.blogs,Ie,(we,yt)=>{var Ot=lr(),xt=R(Ot),ye=R(xt,!0);Y(xt);var Pt=ct(xt,2),ve=R(Pt);Y(Pt);var It=ct(Pt,2),pe=R(It,!0);Y(It),De(2),Y(Ot),kt((Oe,xe)=>{ut(ye,E(yt).title),ut(ve,`posted ${Oe??""} by ${E(yt).author_email??""}`),ut(pe,xe)},[()=>sr(new Date(E(yt).created_at),new Date),()=>ir(E(yt).content)],$t),T(we,Ot)}),T(A,ot)};dt(F,A=>{var ot;(ot=a().data)!=null&&ot.blogs&&A(H)},!0)}T(L,v)};dt(j,L=>{var v,F;((F=(v=a().data)==null?void 0:v.blogs)==null?void 0:F.length)===0?L(I):L(W,!1)},!0)}T(b,M)};dt(P,b=>{a().error?b(N):b(y,!1)},!0)}T(S,_)};dt(l,S=>{a().isFetching?S(f):S(u,!1)})}var x=ct(l,2);{var O=S=>{var _=fr(),P=R(_);P.__click=[cr,s,a,c];var N=R(P);ze(N,{}),Y(P);var y=ct(P,2),b=R(y);Y(y);var M=ct(y,2);M.__click=[or,s,a,c];var j=R(M);Ke(j,{}),Y(M),Y(_),kt((I,W)=>{P.disabled=E(s)<=1,ut(b,`Page ${E(s)??""} of ${I??""}`),M.disabled=W},[()=>{var I;return Math.round(((I=a().data)==null?void 0:I.total)/4)},()=>{var I;return E(s)>=Math.round(((I=a().data)==null?void 0:I.total)/4)}],$t),T(S,_)};dt(x,S=>{a().isFetching||S(O)})}Y(d),T(n,d),ke(),r()}Pe(["click"]);var br=Z('<main class="mx-auto max-w-4xl px-4 py-8"><!></main>');function Sr(n){var t=br(),e=R(t);gr(e,{}),Y(t),T(n,t)}export{Sr as component};