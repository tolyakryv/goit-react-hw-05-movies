"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[627],{2627:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(885),c=e(2791),u=e(501),a=e(6871),o=e(2225),i=e(184),s=function(){var t=(0,u.lr)(),n=(0,r.Z)(t,2),e=n[0],s=n[1],p=(0,c.useState)(""),f=(0,r.Z)(p,2),l=f[0],h=f[1],v=(0,c.useState)([]),d=(0,r.Z)(v,2),m=d[0],x=d[1],k=e.get("query"),y=(0,a.TH)();(0,c.useEffect)((function(){k&&(h(k),(0,o.IB)(k).then((function(t){var n=t.results;x(n)})))}),[k]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==l?(s({query:l}),(0,o.IB)(k).then((function(t){var n=t.results;x(n)}))):alert("enter text")},children:[(0,i.jsx)("input",{type:"text",value:l,onChange:function(t){h(t.currentTarget.value.trim())}}),(0,i.jsx)("button",{type:"submit",children:"Search "})]}),e&&(0,i.jsx)("ul",{children:m.map((function(t){var n=t.id,e=t.original_title;return(0,i.jsx)("li",{children:(0,i.jsx)(u.OL,{to:"".concat(n),state:{from:y},children:e})},n)}))})]})}},2225:function(t,n,e){e.d(n,{IB:function(){return f},b2:function(){return p},jC:function(){return v},nH:function(){return l},u5:function(){return h}});var r=e(5861),c=e(7757),u=e.n(c),a=e(4569),o=e.n(a),i="https://api.themoviedb.org/3",s="306e564986f0782b8ec4bf227b0f3c28",p=function(){var t=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(i,"/trending/movie/day?api_key=").concat(s)).then((function(t){return t.data}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(){var n,e=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"",t.prev=1,t.next=4,o().get("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(n,"&page=1")).then((function(t){return t.data}));case 4:return t.abrupt("return",t.sent);case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(i,"/movie/").concat(n,"?api_key=").concat(s)).then((function(t){return t.data}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(s)).then((function(t){return t.data}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(s)).then((function(t){return t.data}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=627.b2ecc2ac.chunk.js.map