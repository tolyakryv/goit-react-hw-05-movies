"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[621],{4621:function(n,t,e){e.r(t),e.d(t,{default:function(){return i}});var r=e(885),c=e(2791),u=e(501),a=e(2225),o=e(184),i=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],i=t[1];return(0,c.useEffect)((function(){(0,a.b2)().then((function(n){return i(n.results)}))}),[]),(0,o.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.title;return(0,o.jsx)("li",{children:(0,o.jsx)(u.OL,{to:"movies/".concat(t),children:e})},t)}))})}},2225:function(n,t,e){e.d(t,{IB:function(){return p},b2:function(){return s},jC:function(){return v},nH:function(){return h},u5:function(){return l}});var r=e(5861),c=e(7757),u=e.n(c),a=e(4569),o=e.n(a),i="0511407effa2ffe16d4a1629eed8759a",f="https://api.themoviedb.org/3",s=function(){return o().get("".concat(f,"/trending/movie/day?api_key=").concat(i)).then((function(n){return n.data}))},p=function(n){return o().get("".concat(f,"/search/movie/?api_key=").concat(i,"&query=").concat(n)).then((function(n){return n.data}))};function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(f,"/movie/").concat(t,"?api_key=").concat(i)).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var l=function(n){return o().get("".concat(f,"/movie/").concat(n,"/credits?api_key=").concat(i)).then((function(n){return n.data}))},v=function(n){return o().get("".concat(f,"/movie/").concat(n,"/reviews?api_key=").concat(i)).then((function(n){return n.data}))}}}]);
//# sourceMappingURL=621.1b38ddaf.chunk.js.map