(this.webpackJsonpaaaaaaa=this.webpackJsonpaaaaaaa||[]).push([[0],{46:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(16),n=a.n(c),r=a(12),l=(a(46),a(23)),i=a.n(l),o=a(39),u=a(9),d=a(4),j=a.n(d),m=a(1),b=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(u.a)(n,2),l=r[0],d=r[1],b=Object(s.useState)(""),h=Object(u.a)(b,2),g=h[0],p=h[1],v=function(){var e=Object(o.a)(i.a.mark((function e(t){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"3798591d-4c30-4094-a425-6e999ab2369b","User-Name":a,"User-Secret":l},e.prev=2,e.next=5,j.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",l),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),p("Oops, inccorect credentials");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("h1",{className:"title",children:"Chat Application"}),Object(m.jsxs)("form",{onSubmit:v,children:[Object(m.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"Usename",required:!0}),Object(m.jsx)("input",{type:"text",value:l,onChange:function(e){return d(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(m.jsx)("div",{align:"center",children:Object(m.jsx)("button",{type:"submit",className:"button",children:Object(m.jsx)("span",{children:"Start Chatting"})})}),Object(m.jsx)("h2",{className:"error",children:g})]})]})})},h=a(8),g=a(96),p=a(97),v=function(e){var t=Object(s.useState)(""),a=Object(u.a)(t,2),c=a[0],n=a[1],r=e.chatId,l=e.creds,i=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(h.o)(l,r,{text:t}),n("")};return Object(m.jsxs)("form",{className:"message-form",onSubmit:i,children:[Object(m.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:c,onChange:function(t){n(t.target.value),Object(h.l)(e,r)},onSubmit:i}),Object(m.jsx)("label",{htmlFor:"unload-button",children:Object(m.jsx)("span",{className:"image-button",children:Object(m.jsx)(g.a,{className:"picture-icon"})})}),Object(m.jsx)("input",{type:"file",multiple:!1,id:"unload-button",style:{display:"none"},onChange:function(e){Object(h.o)(l,r,{files:e.target.files,text:""})}}),Object(m.jsx)("button",{type:"submit",className:"send-button",children:Object(m.jsx)(p.a,{className:"send-icon"})})]})},x=function(e){var t,a=e.message;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(m.jsx)("img",{src:a.attachments[0].file,alt:"message-attachent",className:"message-image",style:{float:"right"}}):Object(m.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:a.text})},O=function(e){var t,a,s=e.lastMessage,c=e.message,n=!s||s.sender.username!==c.sender.username;return Object(m.jsxs)("div",{className:"message-row",children:[n&&Object(m.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===c||void 0===c||null===(t=c.sender)||void 0===t?void 0:t.avatar,")")}}),(null===c||void 0===c||null===(a=c.attachments)||void 0===a?void 0:a.length)>0?Object(m.jsx)("img",{src:c.attachments[0].file,alt:"message-attachent",className:"message-image",style:{marginLeft:n?"4px":"48px"}}):Object(m.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:n?"4px":"48px"},children:c.text})]})},f=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a],l=function(e,t){return n.people.map((function(a,s){var c;return a.last_read===e.id&&Object(m.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===a||void 0===a||null===(c=a.person)||void 0===c?void 0:c.avatar,")")}},"read_".concat(s))}))},i=function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],r=0===a?null:e[a-1],i=s===n.sender.username;return Object(m.jsxs)("div",{style:{width:"100%"},children:[Object(m.jsx)("div",{className:"message-block",children:i?Object(m.jsx)(x,{message:n}):Object(m.jsx)(O,{message:n,lastMessage:c[r]})}),Object(m.jsx)("div",{className:"read-receipts",style:{marginRight:i?"18px":"0px",marginLeft:i?"0px":"68px"},children:l(n,i)})]},"msg_".concat(a))}))};return i(),n?Object(m.jsxs)("div",{className:"chat-feed",children:[Object(m.jsxs)("div",{className:"chat-title-container",children:[Object(m.jsx)("div",{className:"chat-title",children:null===n||void 0===n?void 0:n.title}),Object(m.jsx)("div",{className:"chat-subtitle",children:n.people.map((function(e){return"".concat(e.person.username)}))})]}),i(),Object(m.jsx)("div",{style:{height:"100px"}}),Object(m.jsx)("div",{className:"message-form-container",children:Object(m.jsx)(v,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]}):"Loading..."};var N=function(){return localStorage.getItem("username")?Object(m.jsx)(h.d,{height:"100vh",projectID:"3798591d-4c30-4094-a425-6e999ab2369b",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(m.jsx)(f,Object(r.a)({},e))}}):Object(m.jsx)(b,{})};n.a.render(Object(m.jsx)(N,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.e35d2821.chunk.js.map