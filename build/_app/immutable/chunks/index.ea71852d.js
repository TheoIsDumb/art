function x(){}const I=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function v(t){t.forEach(Z)}function P(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function Lt(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Ft(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function It(t,e,n,i,r,u){if(r){const c=tt(e,n,i,u);t.p(c,r)}}function Wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Gt(t,e,n){return t.set(n),e}const et=typeof window<"u";let W=et?()=>window.performance.now():()=>Date.now(),G=et?t=>requestAnimationFrame(t):x;const k=new Set;function nt(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&G(nt)}function J(t){let e;return k.size===0&&G(nt),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let T=!1;function pt(){T=!0}function gt(){T=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,_=(r>0&&e[n[r]].claim_order<=l?r+1:yt(1,r,h=>e[n[h]].claim_order,l))-1;i[o]=n[_]+1;const a=_+1;n[a]=o,r=Math.max(a,r)}const u=[],c=[];let s=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);s>=o;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);u.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<u.length&&c[o].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(c[o],_)}}function bt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=st("style");return wt(it(t),e),e.sheet}function wt(t,e){return bt(t.head||t,e),e.sheet}function vt(t,e){if(T){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){T&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function Kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function K(t){return document.createTextNode(t)}function Qt(){return K(" ")}function Ut(){return K("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t){return function(e){e.target===this&&t.call(this,e)}}function Yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zt(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Nt(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,r=!1){kt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const o=n(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const o=n(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ot(t,e,n,i){return ct(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function te(t,e,n){return ot(t,e,n,st)}function ee(t,e,n){return ot(t,e,n,Et)}function At(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>K(e),!0)}function ne(t){return At(t," ")}function ie(t,e){e=""+e,t.data!==e&&(t.data=e)}function re(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function se(t,e){return new t(e)}const R=new Map;let z=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:$t(e),rules:{}};return R.set(t,n),n}function B(t,e,n,i,r,u,c,s=0){const o=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=o){const g=e+(n-e)*u(p);l+=p*100+`%{${c(g,1-g)}}
`}const _=l+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Ct(_)}_${s}`,h=it(t),{stylesheet:f,rules:d}=R.get(h)||jt(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,z+=1,a}function L(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),z-=r,z||Mt())}function Mt(){G(()=>{z||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&rt(e)}),R.clear())})}let O;function M(t){O=t}function lt(){if(!O)throw new Error("Function called outside component initialization");return O}function ce(t){lt().$$.on_mount.push(t)}function oe(t){lt().$$.after_update.push(t)}const N=[],X=[];let A=[];const Y=[],ut=Promise.resolve();let H=!1;function at(){H||(H=!0,ut.then(ft))}function le(){return at(),ut}function S(t){A.push(t)}const F=new Set;let E=0;function ft(){if(E!==0)return;const t=O;do{try{for(;E<N.length;){const e=N[E];E++,M(e),Ot(e.$$)}}catch(e){throw N.length=0,E=0,e}for(M(null),N.length=0,E=0;X.length;)X.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];F.has(n)||(F.add(n),n())}A.length=0}while(N.length);for(;Y.length;)Y.pop()();H=!1,F.clear(),M(t)}function Ot(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function Pt(t){const e=[],n=[];A.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),A=e}let j;function Q(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function w(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const D=new Set;let y;function ue(){y={r:0,c:[],p:y}}function ae(){y.r||v(y.c),y=y.p}function qt(t,e){t&&t.i&&(D.delete(t),t.i(e))}function fe(t,e,n,i){if(t&&t.o){if(D.has(t))return;D.add(t),y.c.push(()=>{D.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const U={duration:0};function _e(t,e,n){const i={direction:"in"};let r=e(t,n,i),u=!1,c,s,o=0;function l(){c&&L(t,c)}function _(){const{delay:h=0,duration:f=300,easing:d=I,tick:m=x,css:p}=r||U;p&&(c=B(t,0,1,f,h,d,p,o++)),m(0,1);const g=W()+h,C=g+f;s&&s.abort(),u=!0,S(()=>w(t,!0,"start")),s=J(b=>{if(u){if(b>=C)return m(1,0),w(t,!0,"end"),l(),u=!1;if(b>=g){const $=d((b-g)/f);m($,1-$)}}return u})}let a=!1;return{start(){a||(a=!0,L(t),P(r)?(r=r(i),Q().then(_)):_())},invalidate(){a=!1},end(){u&&(l(),u=!1)}}}function de(t,e,n){const i={direction:"out"};let r=e(t,n,i),u=!0,c;const s=y;s.r+=1;function o(){const{delay:l=0,duration:_=300,easing:a=I,tick:h=x,css:f}=r||U;f&&(c=B(t,1,0,_,l,a,f));const d=W()+l,m=d+_;S(()=>w(t,!1,"start")),J(p=>{if(u){if(p>=m)return h(0,1),w(t,!1,"end"),--s.r||v(s.c),!1;if(p>=d){const g=a((p-d)/_);h(1-g,g)}}return u})}return P(r)?Q().then(()=>{r=r(i),o()}):o(),{end(l){l&&r.tick&&r.tick(1,0),u&&(c&&L(t,c),u=!1)}}}function he(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),c=i?0:1,s=null,o=null,l=null;function _(){l&&L(t,l)}function a(f,d){const m=f.b-c;return d*=Math.abs(m),{a:c,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:p=I,tick:g=x,css:C}=u||U,b={start:W()+d,b:f};f||(b.group=y,y.r+=1),s||o?o=b:(C&&(_(),l=B(t,c,f,m,d,p,C)),f&&g(0,1),s=a(b,m),S(()=>w(t,f,"start")),J($=>{if(o&&$>o.start&&(s=a(o,m),o=null,w(t,s.b,"start"),C&&(_(),l=B(t,c,s.b,s.duration,0,p,u.css))),s){if($>=s.end)g(c=s.b,1-c),w(t,s.b,"end"),o||(s.b?_():--s.group.r||v(s.group.c)),s=null;else if($>=s.start){const _t=$-s.start;c=s.a+s.d*p(_t/s.duration),g(c,1-c)}}return!!(s||o)}))}return{run(f){P(u)?Q().then(()=>{u=u(r),h(f)}):h(f)},end(){_(),s=o=null}}}function me(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||S(()=>{const c=t.$$.on_mount.map(Z).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...c):v(c),t.$$.on_mount=[]}),u.forEach(S)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(Pt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(N.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,i,r,u,c,s=[-1]){const o=O;M(t);const l=t.$$={fragment:null,ctx:[],props:u,update:x,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:V(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};c&&c(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return l.ctx&&r(l.ctx[a],l.ctx[a]=d)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](d),_&&zt(t,a)),h}):[],l.update(),_=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){pt();const a=Nt(e.target);l.fragment&&l.fragment.l(a),a.forEach(rt)}else l.fragment&&l.fragment.c();e.intro&&qt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),gt(),ft()}M(o)}class ye{$destroy(){Rt(this,1),this.$destroy=x}$on(e,n){if(!P(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Dt as A,Rt as B,I as C,Vt as D,Xt as E,S as F,he as G,v as H,Tt as I,Lt as J,Gt as K,Ft as L,It as M,Wt as N,Ht as O,_e as P,de as Q,x as R,ye as S,vt as T,Et as U,ee as V,Zt as W,Kt as X,Qt as a,Jt as b,ne as c,fe as d,Ut as e,ae as f,qt as g,rt as h,ge as i,oe as j,st as k,te as l,Nt as m,Yt as n,ce as o,re as p,K as q,At as r,Bt as s,le as t,ie as u,ue as v,X as w,se as x,me as y,pe as z};
