"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[378],{1378:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r=n(885),i=n(2791),s=function(t,e,n){var r=e-t;return((n-t)%r+r)%r+t};var a=n(8219),c=n(1413),o=n(184),l=function(t){return(0,o.jsx)(a.E.path,(0,c.Z)({fill:"transparent",strokeWidth:"3",stroke:"hsl(0, 0%, 18%)",strokeLinecap:"round"},t))},u=function(t){var e=t.toggle;return(0,o.jsx)("button",{onClick:e,children:(0,o.jsxs)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[(0,o.jsx)(l,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),(0,o.jsx)(l,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),(0,o.jsx)(l,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})})},d={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},p=["#FF008C","#D309E1","#9C1AFF","#7700FF","#4400FF"],f=function(t){var e=t.i,n={border:"2px solid ".concat(p[e])};return(0,o.jsxs)(a.E.li,{variants:d,whileHover:{scale:1.1},whileTap:{scale:.95},children:[(0,o.jsx)("div",{className:"icon-placeholder",style:n}),(0,o.jsx)("div",{className:"text-placeholder",style:n})]})},h={open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},v=[0,1,2,3,4],g=function(){return(0,o.jsx)(a.E.ul,{variants:h,children:v.map((function(t){return(0,o.jsx)(f,{i:t},t)}))})},x={open:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return{clipPath:"circle(".concat(2*t+200,"px at 40px 40px)"),transition:{type:"spring",stiffness:20,restDelta:2}}},closed:{clipPath:"circle(30px at 40px 40px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}};function y(){var t=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=(0,i.useRef)(0),c=(0,i.useState)(e[a.current]),o=(0,r.Z)(c,2),l=o[0],u=o[1],d=(0,i.useCallback)((function(t){a.current="number"!==typeof t?s(0,e.length,a.current+1):t,u(e[a.current])}),[e.length].concat(e));return[l,d]}(!1,!0),e=(0,r.Z)(t,2),n=e[0],c=e[1],l=(0,i.useRef)(null),d=function(t){var e=(0,i.useRef)({width:0,height:0});return(0,i.useEffect)((function(){e.current.width=t.current.offsetWidth,e.current.height=t.current.offsetHeight}),[]),e.current}(l).height;return(0,o.jsxs)(a.E.nav,{initial:!1,animate:n?"open":"closed",custom:d,ref:l,children:[(0,o.jsx)(a.E.div,{className:"background",variants:x}),(0,o.jsx)(g,{}),(0,o.jsx)(u,{toggle:function(){return c()}})]})}}}]);
//# sourceMappingURL=378.6e5226db.chunk.js.map