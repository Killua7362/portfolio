(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,c){},18:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var r=c(1),o=c(13),n=c.n(o),s=(c(12),c(5)),a=(c(18),c(0)),i=c(6),j=c(11),b=c(10),l=c(2),u=c(7),x=c(4),O=c(3),f=function(e){Object(l.f)(),Object(x.b)();var t=Object(r.useRef)(),c=Object(r.useRef)(),o=Object(r.useRef)(),n=(Object(r.useRef)(),Object(r.useState)("I")),f=Object(s.a)(n,2),m=(f[0],f[1],Object(r.useRef)()),h=Object(r.useRef)(),d=new a.c,g={path:[{x:0,y:0},{x:0,y:100},{x:0,y:200},{x:0,y:300},{x:0,y:400},{x:0,y:500},{x:0,y:600},{x:0,y:700},{x:0,y:800},{x:0,y:900}]},p={path:[{x:0,y:0},{x:0,y:100},{x:0,y:200},{x:0,y:300},{x:0,y:400},{x:0,y:500}]};Object(r.useEffect)((function(){document.title="portfolio",i.a.registerPlugin(j.a,b.a),i.a.core.globals("MotionPathPlugin",j.a),i.a.core.globals("ScrollTrigger",b.a),i.a.fromTo(c.current,{backgroundColor:i.a.getProperty("html","--light")},{scrollTrigger:{trigger:h.current,scrub:!0,end:"bottom bottom"},backgroundColor:i.a.getProperty("html","--dark")}),d.to(t.current,1,{scrollTrigger:{trigger:m.current,start:"top",end:"bottom center",scrub:!0},motionPath:g,ease:"none",css:{opacity:0}}).to(o.current,1,{scrollTrigger:{trigger:h.current,start:"top center",end:"bottom",scrub:!0},motionPath:p,ease:"none"})}),[]);return Object(O.jsxs)("div",{className:"wrap",ref:c,children:[Object(O.jsxs)("section",{ref:m,className:"container",children:[Object(O.jsx)("div",{className:"text text_NOT",children:"NOT YOUR AVERAGE ENGINEER"}),Object(O.jsx)("div",{ref:t,className:"sun"})]}),Object(O.jsxs)("section",{ref:h,className:"container-1",children:[Object(O.jsx)("div",{ref:o,className:"moon"}),Object(O.jsxs)("div",{className:"text_container",children:[Object(O.jsx)(u.b,{to:"/portfolio/about",style:{textDecoration:"none"},className:"text text_I"}),Object(O.jsx)("div",{className:"text text_AM"}),Object(O.jsx)("div",{className:"text text_AKSHAY"})]})]})]})};c(20);var m=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),c=t[0],o=t[1],n=Object(r.useState)(),a=Object(s.a)(n,2),i=a[0],j=a[1],b=Object(r.useState)(),l=Object(s.a)(b,2),u=l[0],x=l[1],f=function(){fetch("https://animechan.vercel.app/api/random").then((function(e){return e.json()})).then((function(e){o(e.quote),j(e.anime),x(e.character)}))};return Object(r.useEffect)((function(){f()}),[]),Object(O.jsxs)("div",{onClick:function(){f()},className:"quoteContainer",children:[Object(O.jsx)("h1",{className:"quote_quote",children:c}),Object(O.jsxs)("h1",{className:"quote_anime",children:["(",i,")"]}),Object(O.jsx)("h1",{className:"quote_char",children:u})]})};Object(x.b)();var h=function(){return Object(O.jsx)(u.a,{basename:"/portfolio",children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/portfolio",element:Object(O.jsx)(f,{})}),Object(O.jsx)(l.a,{path:"/portfolio/about",element:Object(O.jsx)(m,{})})]})})};n.a.render(Object(O.jsx)(h,{className:"background"}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.fbea1f4c.chunk.js.map