function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function u(t,n,e,o,r,i,c){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(s){const r=a(n,e,o,c);t.p(r,s)}}function l(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function f(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function d(t){const n={};for(const e in t)n[e]=!0;return n}function h(n){return n&&i(n.destroy)?n.destroy:t}let _,m=!1;function p(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function g(t,n){m?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let t=0;t<n.length;t++){const i=p(1,r+1,(t=>n[e[t]].claim_order),n[t].claim_order)-1;o[t]=e[i]+1;const c=i+1;e[c]=t,r=Math.max(c,r)}const i=[],c=[];let s=n.length-1;for(let t=e[r]+1;0!=t;t=o[t-1]){for(i.push(n[t-1]);s>=t;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<c.length;n++){for(;e<i.length&&c[n].claim_order>=i[e].claim_order;)e++;const o=e<i.length?i[e]:null;t.insertBefore(c[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function $(t,n,e){m&&!e?g(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function y(t){t.parentNode.removeChild(t)}function b(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function x(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function E(){return w(" ")}function k(){return w("")}function A(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function N(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function S(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:N(t,o,n[o])}function j(t){return Array.from(t.childNodes)}function O(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function B(t,n,e,o){return O(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?v(n):x(n)))}function C(t,n){return O(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>w(n)),!0)}function L(t){return C(t," ")}function M(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function T(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function I(t,n,e){t.classList[e?"add":"remove"](n)}function P(t){_=t}function q(){if(!_)throw new Error("Function called outside component initialization");return _}function z(t){q().$$.on_mount.push(t)}function D(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const F=[],G=[],H=[],J=[],K=Promise.resolve();let Q=!1;function R(t){H.push(t)}let U=!1;const V=new Set;function W(){if(!U){U=!0;do{for(let t=0;t<F.length;t+=1){const n=F[t];P(n),X(n.$$)}for(P(null),F.length=0;G.length;)G.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];V.has(n)||(V.add(n),n())}H.length=0}while(F.length);for(;J.length;)J.pop()();Q=!1,U=!1,V.clear()}}function X(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(R)}}const Y=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function nt(){Z.r||r(Z.c),Z=Z.p}function et(t,n){t&&t.i&&(Y.delete(t),t.i(n))}function ot(t,n,e,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),Z.c.push((()=>{Y.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function rt(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],s=n[i];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[i]=s}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function it(t){t&&t.c()}function ct(t,n){t&&t.l(n)}function st(t,n,o,c){const{fragment:s,on_mount:a,on_destroy:u,after_update:l}=t.$$;s&&s.m(n,o),c||R((()=>{const n=a.map(e).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(R)}function at(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){-1===t.$$.dirty[0]&&(F.push(t),Q||(Q=!0,K.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function lt(n,e,i,c,s,a,u=[-1]){const l=_;P(n);const f=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let d=!1;if(f.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&s(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&ut(n,t)),e})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!c&&c(f.ctx),e.target){if(e.hydrate){m=!0;const t=j(e.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();e.intro&&et(n.$$.fragment),st(n,e.target,e.anchor,e.customElement),m=!1,W()}P(l)}class ft{$destroy(){at(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{L as A,S as B,I as C,h as D,nt as E,rt as F,f as G,l as H,tt as I,d as J,v as K,k as L,t as M,b as N,z as O,ft as S,B as a,j as b,it as c,ct as d,x as e,y as f,T as g,$ as h,lt as i,ot as j,at as k,w as l,st as m,C as n,g as o,M as p,N as q,A as r,c as s,et as t,q as u,D as v,u as w,s as x,n as y,E as z};