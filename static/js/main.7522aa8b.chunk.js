(this["webpackJsonpchat-frontend"]=this["webpackJsonpchat-frontend"]||[]).push([[0],{136:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n.n(r),s=n(61),o=n.n(s),i=(n(71),n.p,n(72),n(4)),l=n.n(i),u=n(15),d=n(14),p=n(16),m=n.n(p),j=n(2),x="http",b="192.168.56.1",f="api/v1",h=("".concat(x,"://").concat(b).concat(":5000","/"),"".concat(x,"://").concat(b).concat(":5000","/").concat(f),"https"),O="chatmake.herokuapp.com",v="api/v1",g="".concat(h,"://").concat(O).concat(""),y={protocol:h,host:O,port:"",apiUrl:v,endpoint:"".concat(h,"://").concat(O).concat("","/").concat(v),hostUrl:g},N=(window.location.hostname,window.location.port,y),w=n(1),k=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(j.g)(),s=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("".concat(N.endpoint,"/user/auth/signup"),{username:n});case 2:a.push("/dashboard?username=".concat(n));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"home-box container py-5",children:[Object(w.jsx)("h1",{className:"text-center text-primary mb-5",children:"Chat Make"}),Object(w.jsxs)("div",{className:"bg-primary d-flex flex-column p-5 rounded-3 justify-content-center align-items-center",style:{height:"60vh"},children:[Object(w.jsx)("input",{className:"w-75 rounded-3 px-3 py-2",onChange:function(e){return c(e.target.value)},value:n,placeholder:"username",type:"text"}),Object(w.jsx)("div",{onClick:s,className:"btn btn-light mt-3 text-primary px-4",children:"Enter"})]})]})})},S=n(65),C=n(66),E=n(28),U=n.n(E),F=n(64),I=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],s=U.a.parse(Object(j.h)().search),o=s.username,i=s.room,l=Object(r.useState)([]),u=Object(d.a)(l,2),p=u[0],m=u[1],x=Object(r.useRef)(null);return Object(r.useEffect)((function(){(c=Object(F.io)(N.hostUrl)).emit("join",{username:o,room:i});var e=JSON.parse(localStorage.getItem(i));e&&m(e)}),[]),Object(r.useEffect)((function(){c.on("message",(function(e){m((function(t){return[].concat(Object(C.a)(t),[e])}))}))}),[]),Object(r.useEffect)((function(){localStorage.setItem(i,JSON.stringify(p)),x.current.scrollTop=x.current.scrollHeight}),[p]),Object(w.jsx)("div",{className:"bg-primary w-100 vh-100 d-flex justify-content-center align-items-center",children:Object(w.jsxs)("div",{className:"bg-light rounded-3 d-flex flex-column justify-content-end",style:{height:"80%",width:"60%"},children:[Object(w.jsx)("div",{ref:x,className:"chat-box d-flex flex-column mt-2",style:{overflowY:"scroll"},children:null===p||void 0===p?void 0:p.map((function(e){return e.username===o?Object(w.jsx)("div",{className:"align-self-end text-primary d-flex align-items-center",children:Object(w.jsx)("div",{className:"bg-primary py-2 px-3 rounded-pill text-light m-2",children:e.message})}):Object(w.jsxs)("div",{className:"align-self-start text-primary d-flex align-items-center",children:[Object(w.jsx)("div",{className:"bg-primary py-2 px-3 rounded-pill text-light m-2",children:e.message}),Object(w.jsx)("div",{className:"",children:e.username})]})}))}),Object(w.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),n&&(c.emit("sendMessage",{username:o,room:i,message:n}),a(""))}(e)},className:"d-flex m-2",children:[Object(w.jsx)("input",{className:"border border-1 rounded-pill flex-grow-1 px-3 py-2",type:"text",value:n,onChange:function(e){return a(e.target.value)}}),Object(w.jsx)("input",{type:"submit",value:"send",className:"bg-primary text-light rounded-pill px-4 ms-2"})]})]})})},J=function(){return Object(w.jsx)("div",{className:"vh-100",children:Object(w.jsx)("div",{className:"container h-100 d-flex justify-content-center align-items-center",children:Object(w.jsx)("h1",{className:"display-1",children:"Opps!! Wrong URL"})})})},D=function(){var e=U.a.parse(Object(j.h)().search).username,t=Object(r.useState)([]),n=Object(d.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),o=Object(d.a)(s,2),i=o[0],p=o[1],x=Object(r.useState)([]),b=Object(d.a)(x,2),f=b[0],h=b[1],O=Object(j.g)(),v=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("".concat(N.endpoint,"/user/get-all'"),{username:e});case 2:n=t.sent,a(n.data.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(N.endpoint,"/room/get-groups"));case 2:t=e.sent,h(t.data.groups);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var t=Object(u.a)(l.a.mark((function t(n){var c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("".concat(N.endpoint,"/room/one-to-one"),{username1:e,username2:n});case 2:c=t.sent,r=c.data.data,O.push("/chat?username=".concat(e,"&room=").concat(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O.push("/chat?username=".concat(e,"&room=").concat(n));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,m.a.post("".concat(N.endpoint,"/room/create-group"),{username:e,groupname:i});case 3:g();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){v(),g()}),[]),Object(w.jsx)("div",{className:"w-100 vh-100",children:Object(w.jsxs)("div",{className:"container h-100 pb-5 d-flex flex-column justify-content-center align-items-center",children:[Object(w.jsxs)("div",{className:"d-flex my-5 w-100 justify-content-between",children:[Object(w.jsx)("div",{onClick:function(){O.push("/")},className:"btn btn-primary fs-5 px-4 text-light",children:"back"}),Object(w.jsxs)("div",{className:"text-primary fs-5 text-center",children:["Welcome, ",e]})]}),Object(w.jsxs)("div",{className:"w-100 h-75 d-flex",children:[Object(w.jsxs)("div",{className:"w-50 p-3 flex-grow-1 d-flex flex-column",children:[Object(w.jsx)("div",{className:"w-100 rounded-3 bg-primary text-center py-2 text-light fw-bold",children:"Users"}),Object(w.jsx)("div",{className:"p-2 pt-3 d-flex flex-wrap",children:null===c||void 0===c?void 0:c.map((function(e){return Object(w.jsx)("div",{onClick:function(){return y(e.username)},className:"border border-primary px-4 py-1 m-2 rounded-pill text-primary",style:{cursor:"pointer"},children:e.username})}))})]}),Object(w.jsxs)("div",{className:"w-50 p-3 flex-grow-1 d-flex flex-column",children:[Object(w.jsx)("div",{className:"w-100 rounded-3 bg-primary text-center py-2 text-light fw-bold",children:"Groups"}),Object(w.jsxs)("form",{onSubmit:function(e){return S(e)},className:"d-flex py-3 px-5",action:"",children:[Object(w.jsx)("input",{className:"rounded-start border border-primary flex-grow-1 px-2 py-1",type:"text",value:i,onChange:function(e){return p(e.target.value)}}),Object(w.jsx)("input",{className:"bg-primary text-light rounded-end px-5",type:"submit"})]}),Object(w.jsx)("div",{className:"p-2 pt-3 d-flex flex-wrap",children:null===f||void 0===f?void 0:f.map((function(e){return Object(w.jsx)("div",{onClick:function(){return k(e.id)},className:"border border-primary px-4 py-1 m-2 rounded-pill text-primary",style:{cursor:"pointer"},children:e.name})}))})]})]})]})})};var L=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(S.a,{children:Object(w.jsxs)(j.d,{children:[Object(w.jsx)(j.b,{exact:!0,path:"/",component:k}),Object(w.jsx)(j.b,{exact:!0,path:"/dashboard",component:D}),Object(w.jsx)(j.b,{exact:!0,path:"/chat",component:I}),Object(w.jsx)(j.b,{exact:!0,path:"/error",component:J}),Object(w.jsx)(j.a,{from:"**",to:"/error"})]})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};o.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(L,{})}),document.getElementById("root")),M()},71:function(e,t,n){},72:function(e,t,n){}},[[136,1,2]]]);
//# sourceMappingURL=main.7522aa8b.chunk.js.map