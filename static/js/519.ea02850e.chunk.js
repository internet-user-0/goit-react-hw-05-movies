"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[519],{713:function(e,n,r){r.d(n,{Df:function(){return l},Hu:function(){return f},V0:function(){return p},a2:function(){return h},mU:function(){return d}});var t=r(861),a=r(757),c=r.n(a),s=r(243),i="https://api.themoviedb.org/3",u="37314a167a558e9a6582597c5654a5d7",o="".concat(i,"/trending/movie/week"),l=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"?api_key=").concat(u,"&page=1"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t.cast);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},519:function(e,n,r){r.r(n),r.d(n,{default:function(){return v}});var t=r(861),a=r(439),c=r(757),s=r.n(c),i=r(87),u=r(689),o=r(713),l=r(791),p="movieCard_container__+Vj3f",d="movieCard_filmContainer__n1pQ1",h="movieCard_detailedInformation__i6fTe",f=r(184),v=function(){var e,n=(0,l.useState)(""),r=(0,a.Z)(n,2),c=r[0],v=r[1],m=(0,u.UO)().currentId,x=(0,u.TH)();return(0,l.useEffect)((function(){function e(){return(e=(0,t.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,(0,o.mU)(m);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[m]),(0,f.jsxs)("main",{className:p,children:[(0,f.jsx)(i.OL,{to:null!==(e="".concat(x.state.from.pathname))&&void 0!==e?e:"/home",children:"Go back"}),(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(c.poster_path),alt:"#",width:"300"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsxs)("h2",{children:[c.title," ",(0,f.jsxs)("span",{children:["(","".concat(c.release_date).slice(0,4),")"]})]})}),(0,f.jsxs)("li",{children:["user score ",(0,f.jsx)("p",{children:c.vote_average})]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:"Overvier"}),(0,f.jsx)("p",{children:c.overview})]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("h4",{children:"Gernes"}),(0,f.jsx)("ul",{children:c&&c.genres.map((function(e){return(0,f.jsx)("li",{children:e.name},e.id)}))})]})]})]}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("p",{children:"additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,f.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=519.ea02850e.chunk.js.map