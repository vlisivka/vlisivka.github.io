import{S as t,i as r,s,C as a,e,c as l,a as o,b as h,d as n,f as c,g as i,h as f,m,t as p,j as u,k as d,l as g,n as $,o as b,p as v,q as x,r as E}from"../Card-200e6198.js";function w(t){let r,s,a=t[0].frontmatter.excerpt+"";return{c(){r=e("p"),s=g(a)},l(t){r=o(t,"P",{});var e=h(r);s=$(e,a),e.forEach(c)},m(t,a){f(t,r,a),b(r,s)},p(t,r){1&r&&a!==(a=t[0].frontmatter.excerpt+"")&&v(s,a)},d(t){t&&c(r)}}}function I(t){let r,s,a;return{c(){r=e("div"),s=e("img"),this.h()},l(t){r=o(t,"DIV",{slot:!0});var a=h(r);s=o(a,"IMG",{src:!0,alt:!0,style:!0}),a.forEach(c),this.h()},h(){x(s.src,a=t[0].frontmatter.thumb)||E(s,"src",a),E(s,"alt","Thumbnail for blog post"),i(s,"width","100%"),E(r,"slot","thumb")},m(t,a){f(t,r,a),b(r,s)},p(t,r){1&r&&!x(s.src,a=t[0].frontmatter.thumb)&&E(s,"src",a)},d(t){t&&c(r)}}}function k(t){let r,s,a,l,n,i=t[0].frontmatter.title+"";return{c(){r=e("div"),s=e("h4"),a=e("a"),l=g(i),this.h()},l(t){r=o(t,"DIV",{slot:!0});var e=h(r);s=o(e,"H4",{});var n=h(s);a=o(n,"A",{href:!0});var f=h(a);l=$(f,i),f.forEach(c),n.forEach(c),e.forEach(c),this.h()},h(){E(a,"href",n=t[1].permalinks.blog({slug:t[0].slug})),E(r,"slot","header")},m(t,e){f(t,r,e),b(r,s),b(s,a),b(a,l)},p(t,r){1&r&&i!==(i=t[0].frontmatter.title+"")&&v(l,i),3&r&&n!==(n=t[1].permalinks.blog({slug:t[0].slug}))&&E(a,"href",n)},d(t){t&&c(r)}}}function y(t){let r,s,g;return s=new a({props:{$$slots:{header:[k],thumb:[I],default:[w]},$$scope:{ctx:t}}}),{c(){r=e("div"),l(s.$$.fragment),this.h()},l(t){r=o(t,"DIV",{style:!0});var a=h(r);n(s.$$.fragment,a),a.forEach(c),this.h()},h(){i(r,"width","300px"),i(r,"padding","1em"),i(r,"max-width","300px")},m(t,a){f(t,r,a),m(s,r,null),g=!0},p(t,[r]){const a={};7&r&&(a.$$scope={dirty:r,ctx:t}),s.$set(a)},i(t){g||(p(s.$$.fragment,t),g=!0)},o(t){u(s.$$.fragment,t),g=!1},d(t){t&&c(r),d(s)}}}function D(t,r,s){let{blog:a}=r,{helpers:e}=r;return t.$$set=t=>{"blog"in t&&s(0,a=t.blog),"helpers"in t&&s(1,e=t.helpers)},[a,e]}class V extends t{constructor(t){super(),r(this,t,D,y,s,{blog:0,helpers:1})}}export{V as default};