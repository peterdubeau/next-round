(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,n){e.exports=n(61)},35:function(e,t,n){},36:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),u=n.n(c),o=(n(35),n(36),n(9)),s=n(2);var l=Object(s.e)((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to next round!"),r.a.createElement(o.b,{to:"/create-room"},r.a.createElement("button",null,"Create Room")),r.a.createElement(o.b,{to:"/join-room"},r.a.createElement("button",null,"Join Room")))})),m=n(12),i=n(10),p=n(1),f=n.n(p),d=n(4),E=n(29),v=n.n(E).a.create({baseURL:"https://next-round-app.herokuapp.com/"}),h=function(){var e=Object(d.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/users/",{user:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("on_hooks/",t);case 2:return n=e.sent,e.next=5,v.post("off_hooks/",t);case 5:return a=e.sent,e.abrupt("return",(n.data,a.data));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("tasks");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/tasks",{task:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("tasks/".concat(t,"/users"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function x(e){var t=Object(a.useState)({username:"",isAdmin:!1,code:""}),n=Object(i.a)(t,2),c=n[0],u=n[1],s=function(){var t=Object(d.a)(f.a.mark((function t(){var n,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O({code:e.code});case 2:return t.sent,t.next=5,k();case 5:return n=t.sent,a=n.filter((function(t){return t.code===e.code}))[0].id,t.next=9,b({task_id:a});case 9:return r=t.sent,console.log(r.id),t.next=13,h({username:c.username,task_id:a,is_admin:e.admin,on_hook_id:r.id});case 13:t.sent;case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Username:",r.a.createElement("input",{type:"text",name:"username",value:c.username,onChange:function(e){e.preventDefault();var t=e.target.value;u({username:t,isAdmin:!1})}})),r.a.createElement(o.b,{to:"/tasks/".concat(e.code)},r.a.createElement("button",{onClick:s},"Enter Room")))}function g(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"off-hook-list"},r.a.createElement("h3",null,"On The Hook"),e.component.map((function(e){return r.a.createElement("p",null,e.username)}))))}function w(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"off-hook-list"},r.a.createElement("h3",null,"Off The Hook"),e.component.map((function(e){return r.a.createElement("p",null,e.username)}))))}n(60);var y=Object(s.e)((function(e,t){var n=Object(a.useState)({users:[]}),c=Object(i.a)(n,2),u=c[0],o=c[1],s=function(){var t=Object(d.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e.match.params.code);case 2:n=t.sent,o({users:n.data.users});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),console.log(t.name),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hook-list"},r.a.createElement(g,{component:u.users}),r.a.createElement(w,{component:u.users})))}));var A=Object(s.e)((function(e){var t=Object(a.useState)({username:"",name:"",isAdmin:!0}),n=Object(i.a)(t,2),c=n[0],u=n[1];return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("p",null,"Room Code: ",e.component),r.a.createElement("label",null,"Enter task:",r.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:function(e){var t;e.preventDefault();var n=e.target,a=n.name,r=n.value;u((t={},Object(m.a)(t,a,r),Object(m.a)(t,"isAdmin",!0),t))},onSubmit:function(){}})),r.a.createElement(x,{code:e.component,admin:c.isAdmin}),r.a.createElement(y,{name:c.name})))}));function C(){var e=Object(a.useState)({username:"",code:"",isAdmin:""}),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("label",null,"Room Code:",r.a.createElement("input",{type:"text",name:"code",value:n.code,onChange:function(e){var t,n=e.target,a=n.name,r=n.value;c((t={},Object(m.a)(t,a,r),Object(m.a)(t,"isAdmin",!1),t))}})),r.a.createElement(x,{code:n.code,admin:n.isAdmin})))}function F(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZ".length,n=0;n<t;n++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random()*t));return e.slice(0,5)}var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{path:"/",exact:!0},r.a.createElement(l,null)),r.a.createElement(s.a,{path:"/create-room"},r.a.createElement(A,{component:F()})),r.a.createElement(s.a,{path:"/join-room"},r.a.createElement(C,null)),r.a.createElement(s.a,{path:"/tasks/:code"},r.a.createElement(y,null)))};u.a.render(r.a.createElement(o.a,null,r.a.createElement(R,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.3d1ea702.chunk.js.map