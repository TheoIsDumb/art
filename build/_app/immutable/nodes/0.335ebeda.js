import{C as z,S as M,i as N,s as b,k as h,l as y,m as O,h as c,n as _,b as m,D as k,E as g,F as w,G as $,H as G,I as d,J as S,K as L,a as P,e as j,c as V,d as f,f as I,g as u,L as A,M as B,N as F,O as H,P as J,Q as K,y as Q,z as R,A as T,B as U,v as q,R as W}from"../chunks/index.ea71852d.js";import{v,i as X}from"../chunks/store.333c0c6a.js";function Y({url:r}){return{url:r.pathname}}const Z=!0,x="always",ne=Object.freeze(Object.defineProperty({__proto__:null,load:Y,prerender:Z,trailingSlash:x},Symbol.toStringTag,{value:"Module"}));function p(r,{delay:s=0,duration:a=400,easing:l=z}={}){const i=+getComputedStyle(r).opacity;return{delay:s,duration:a,easing:l,css:n=>`opacity: ${n*i}`}}function C(r){let s,a;return{c(){s=h("img"),this.h()},l(l){s=y(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){_(s,"class","h-1/2"),S(s.src,a=r[0].replace("thumb","img"))||_(s,"src",a),_(s,"alt","bro")},m(l,i){m(l,s,i)},p(l,i){i&1&&!S(s.src,a=l[0].replace("thumb","img"))&&_(s,"src",a)},d(l){l&&c(s)}}}function ee(r){let s,a,l,i,n,e=r[0]!=="null"&&C(r);return{c(){s=h("div"),e&&e.c(),this.h()},l(t){s=y(t,"DIV",{class:!0});var o=O(s);e&&e.l(o),o.forEach(c),this.h()},h(){_(s,"class","splash flex justify-center items-center fixed top-0 left-0 svelte-1l6ujtq")},m(t,o){m(t,s,o),e&&e.m(s,null),l=!0,i||(n=[k(s,"click",g(r[1]),!0),k(s,"keypress",g(r[1]),!0)],i=!0)},p(t,[o]){t[0]!=="null"?e?e.p(t,o):(e=C(t),e.c(),e.m(s,null)):e&&(e.d(1),e=null)},i(t){l||(w(()=>{l&&(a||(a=$(s,p,{},!0)),a.run(1))}),l=!0)},o(t){a||(a=$(s,p,{},!1)),a.run(0),l=!1},d(t){t&&c(s),e&&e.d(),t&&a&&a.end(),i=!1,G(n)}}}function te(r,s,a){let l,i;d(r,v,e=>a(2,l=e)),d(r,X,e=>a(0,i=e));function n(){L(v,l=!1,l)}return[i,n]}class se extends M{constructor(s){super(),N(this,s,te,ee,b,{})}}function D(r){let s,a,l,i;const n=r[3].default,e=A(n,r,r[2],null);return{c(){s=h("div"),e&&e.c()},l(t){s=y(t,"DIV",{});var o=O(s);e&&e.l(o),o.forEach(c)},m(t,o){m(t,s,o),e&&e.m(s,null),i=!0},p(t,o){e&&e.p&&(!i||o&4)&&B(e,n,t,t[2],i?H(n,t[2],o,null):F(t[2]),null)},i(t){i||(u(e,t),w(()=>{i&&(l&&l.end(1),a=J(s,p,{duration:500}),a.start())}),i=!0)},o(t){f(e,t),a&&a.invalidate(),l=K(s,p,{}),i=!1},d(t){t&&c(s),e&&e.d(t),t&&l&&l.end()}}}function E(r){let s,a;return s=new se({}),{c(){Q(s.$$.fragment)},l(l){R(s.$$.fragment,l)},m(l,i){T(s,l,i),a=!0},i(l){a||(u(s.$$.fragment,l),a=!0)},o(l){f(s.$$.fragment,l),a=!1},d(l){U(s,l)}}}function le(r){let s=r[0],a,l,i,n=D(r),e=r[1]&&E();return{c(){n.c(),a=P(),e&&e.c(),l=j()},l(t){n.l(t),a=V(t),e&&e.l(t),l=j()},m(t,o){n.m(t,o),m(t,a,o),e&&e.m(t,o),m(t,l,o),i=!0},p(t,[o]){o&1&&b(s,s=t[0])?(q(),f(n,1,1,W),I(),n=D(t),n.c(),u(n,1),n.m(a.parentNode,a)):n.p(t,o),t[1]?e?o&2&&u(e,1):(e=E(),e.c(),u(e,1),e.m(l.parentNode,l)):e&&(q(),f(e,1,1,()=>{e=null}),I())},i(t){i||(u(n),u(e),i=!0)},o(t){f(n),f(e),i=!1},d(t){n.d(t),t&&c(a),e&&e.d(t),t&&c(l)}}}function ae(r,s,a){let l;d(r,v,t=>a(1,l=t));let{$$slots:i={},$$scope:n}=s,{data:e}=s;return r.$$set=t=>{"data"in t&&a(0,e=t.data),"$$scope"in t&&a(2,n=t.$$scope)},[e,l,n,i]}class oe extends M{constructor(s){super(),N(this,s,ae,le,b,{data:0})}}export{oe as component,ne as universal};
