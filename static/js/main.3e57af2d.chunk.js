(this["webpackJsonpcxl-cinema-frontend"]=this["webpackJsonpcxl-cinema-frontend"]||[]).push([[0],{76:function(e,a,t){e.exports=t(99)},81:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(12),r=t.n(o),l=(t(81),t(25)),i=t(68),s=t(7),m=t(60),u=t.n(m),d=c.a.createContext({}),f=function(e){var a=e.children,t=Object(n.useState)("wss://echo.websocket.org"),o=Object(s.a)(t,2),r=o[0],m=o[1],f=Object(n.useState)(""),h=Object(s.a)(f,2),b=h[0],p=h[1],g=Object(n.useState)(!0),x=Object(s.a)(g,2),v=x[0],j=x[1],E=Object(n.useState)(""),y=Object(s.a)(E,2),O=y[0],C=y[1],w=Object(n.useState)([]),N=Object(s.a)(w,2),k=N[0],F=N[1],S=Object(n.useMemo)((function(){return{onOpen:function(){return console.log("Connection opened!")},share:!0,shouldReconnect:function(e){return!0}}}),[]),R=u()(r,S),I=Object(s.a)(R,2),M=I[0],D=I[1];Object(n.useEffect)((function(){O&&m("wss://mighty-sea-25999.herokuapp.com/ws?room="+O)}),[O]),Object(n.useEffect)((function(){if(null!==D){var e=JSON.parse(D.data);e.msg?W(e):z(e)}}),[D]);var W=function(e){F((function(a){return[].concat(Object(i.a)(a),[e])}))},z=function(e){"video"===e.command&&(localStorage.setItem("last-video",e.argument),p(e.argument)),"pause"===e.command&&j(!1),"play"===e.command&&j(!0)};return c.a.createElement(d.Provider,{value:{sendMessage:function(e){M(JSON.stringify(Object(l.a)({},e,{room:O})))},messageHistory:k,srcVideo:b,current:v,roomName:O,setRoomName:C}},a)},h=t(116),b=t(121),p=Object(h.a)({container:{width:"100%",height:" 100vh",display:"flex",flexDirection:"column",background:"black"},chatVideo:{display:"flex",flexDirection:"row",width:"100%",height:"100vh"}}),g=function(e){var a=e.videoContainer,t=e.inputMessage,n=p();return c.a.createElement(b.a,{className:n.container},c.a.createElement(b.a,{className:n.chatVideo},a),t)},x=t(64),v=t.n(x),j=t(126),E=t(125),y=t(118),O=Object(h.a)({avatarContainer:{background:"transparent",display:"flex",margin:"5px"},avatar:{width:30,height:30},card:{background:"#0000007d",display:"flex",opacity:"1",wordBreak:"break-all"},messageContainer:{margin:"auto 4px",minWidth:50},message:{lineHeight:"1.225",display:"flex",margin:"5px 0px",padding:"0px 4px",fontSize:"0.8rem",color:"white"},author:{lineHeight:"1.225",display:"flex",margin:"4px 0px 0px 3px",fontSize:"0.8rem",color:"#20d0a8",fontWeight:"bold"}});var C=function(e){var a=e.message,t=e.author,n=e.color,o=e.avatar,r=O();return c.a.createElement(j.a,{className:r.card},o&&c.a.createElement(b.a,{className:r.avatarContainer},c.a.createElement(E.a,{className:r.avatar})),c.a.createElement(b.a,{className:r.messageContainer},c.a.createElement(y.a,{className:r.author,style:{color:n}},t),c.a.createElement(y.a,{className:r.message},a)))},w=Object(h.a)({container:{width:"40vh",background:"transparent",display:"flex",overflow:"scroll",flexDirection:"column"},messageContainer:{margin:"8px 5px 0px 5px",display:"flex",justifyContent:"flex-start"}}),N=function(e){var a=e.message,t=e.author,o=e.color,r=e.avatar,l=w().messageContainer,i=Object(n.useState)(!1),m=Object(s.a)(i,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){d(!0),setTimeout((function(){d(!1)}),65e6)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{when:u},c.a.createElement(b.a,{className:l},c.a.createElement(C,{message:a,author:t,color:o,avatar:r}))))},k=function(){var e=w(),a=Object(n.useContext)(d).messageHistory,t=Object(n.useRef)(null);return Object(n.useEffect)((function(){setTimeout((function(){t.current.scrollTop=1e18}),100)}),[a]),c.a.createElement("div",{className:e.container,ref:t},a.map((function(e,t){var n=a.length>20?a.length-20:0;return e.msg&&t>=n&&c.a.createElement(N,{key:t,message:e.msg,author:e.author,color:e.color,avatar:e.avatar})})))},F=t(65),S=t.n(F),R=Object(h.a)({video:{width:"100% !important",height:"inherit !important",position:"absolute"}}),I=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],o=a[1],r=Object(n.useContext)(d),l=r.sendMessage,i=r.srcVideo,m=r.current,u=R();Object(n.useEffect)((function(){o(localStorage.getItem("last-video"))}),[]);return c.a.createElement(S.a,{className:u.video,url:i||t,playing:m,controls:!0,onPause:function(){m&&l({msg:"/pause video"})},onPlay:function(){!m&&l({msg:"/play video"})}})},M=Object(h.a)({videoContainer:{width:"100%",height:"92vh",background:"black",display:"flex",alignItems:"center"},chatContainer:{position:"relative",height:"70%",display:"flex",marginLeft:25}}),D=function(){var e=M();return c.a.createElement(b.a,{className:e.videoContainer},c.a.createElement(I,null),c.a.createElement(b.a,{className:e.chatContainer},c.a.createElement(k,null)))},W=t(119),z=t(123),J=t(66),B=t.n(J),H=t(67),P=t.n(H),T=Object(h.a)({containerInput:{width:"35%",background:"#0d0d0d",display:"flex",flexDirection:"row",border:"1px solid #5a5a5a",borderRadius:"5px",margin:"10px auto"},emoji:{width:"50px",background:"transparent",color:"#c0c0c0",display:"flex",justifyContent:"center",alignItems:"center"},submit:{width:"50px",background:"transparent",display:"flex",justifyContent:"center",alignItems:"center",color:"#c0c0c0"},input:{width:"95%",color:"#c0c0c0"}}),V=["name"],A=["#0baf15","#FD5B78","#FF6037","#FF9966","#FF9933","#FFCC33","#FFFF66","#CCFF00","#66FF66","#50BFE6","#FF6EFF","#20d0a8"],K=A[Math.round(Math.random()*A.length)],L=function(){var e=Object(n.useContext)(d).sendMessage,a=T(),t=Object(n.useRef)(""),o=function(a,t){var n=a.value,c=a.charCode,o=n.trim();13===c&&""!==o&&(o.split("/name")[1]?function(e,a){var t=a.match(/^\/(\w*)\s(.*)/),n=Object(s.a)(t,3),c=n[1],o=n[2];e.includes(c)&&"name"===c&&localStorage.setItem("user-name",o)}(V,o):e({msg:o,color:K,author:localStorage.getItem("user-name")||"Anonymous"}),t.current.value="")};return c.a.createElement(b.a,{className:a.containerInput},c.a.createElement(W.a,{className:a.emoji,"aria-label":"emoji"},c.a.createElement(B.a,{size:"small"})),c.a.createElement(z.a,{className:a.input,placeholder:"Write a message",onKeyPress:function(e){var a=e.target.value,n=e.charCode;return o({value:a,charCode:n},t)},inputRef:t}),c.a.createElement(W.a,{className:a.submit,"aria-label":"send"},c.a.createElement(P.a,{size:"small"})))},$=t(122),q=t(120),G=t(39),Q=t.n(G),U=Object(h.a)({input:{width:"185px",fontFamily:"monospace",fontSize:"15px",border:"1px solid #c0c0c0",fontWeight:"lighter",color:"#bbb8b8",padding:"10px 10px",borderRadius:"5px"},icon:{color:"white"},box:{width:"100%",height:"100vh"},head:{display:"flex",alignItems:"center",justifyContent:"flex-start",width:"100%",height:"5vh"},body:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",width:"100%",height:"25vh"}}),X=function(e){var a=e.close,t=e.back,o=U(),r=Object(n.useContext)(d).setRoomName,l=Object(n.useRef)("");return c.a.createElement(b.a,{className:o.box},c.a.createElement(b.a,{className:o.head},c.a.createElement(W.a,{className:o.icon,onClick:t},c.a.createElement(Q.a,null))),c.a.createElement(b.a,{className:o.body},c.a.createElement(z.a,{className:o.input,placeholder:"Create a room name",inputRef:l}),c.a.createElement(q.a,{variant:"contained",color:"secondary",onClick:function(){return r(l.current.value),void a()}},"Create")))},Y=Object(h.a)({input:{width:"185px",fontFamily:"monospace",fontSize:"15px",border:"1px solid #c0c0c0",fontWeight:"lighter",color:"#bbb8b8",padding:"10px 10px",borderRadius:"5px"},icon:{color:"white"},head:{display:"flex",alignItems:"center",justifyContent:"flex-start",width:"100%",height:"5vh"},body:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",width:"100%",height:"25vh"},box:{width:"100%",height:"100vh"}}),Z=function(e){var a=e.close,t=e.back,o=Y(),r=Object(n.useContext)(d).setRoomName,l=Object(n.useRef)("");return c.a.createElement(b.a,{className:o.box},c.a.createElement(b.a,{className:o.head},c.a.createElement(W.a,{className:o.icon,onClick:t},c.a.createElement(Q.a,null))),c.a.createElement(b.a,{className:o.body},c.a.createElement(z.a,{className:o.input,placeholder:"Enter a room name",inputRef:l}),c.a.createElement(q.a,{variant:"contained",color:"secondary",onClick:function(){return r(l.current.value),void a()}},"Join")))},_=Object(h.a)({button:{textTransform:"initial",width:"155px",fontFamily:"monospace",fontSize:"15px",border:"1px solid #c0c0c0",fontWeight:"lighter",color:"#bbb8b8"}}),ee=function(e){var a=e.create,t=e.join,n=_();return c.a.createElement(c.a.Fragment,null,c.a.createElement(q.a,{className:n.button,onClick:a},"Create a Room"),c.a.createElement(q.a,{className:n.button,onClick:t},"Join a Room"))},ae=Object(h.a)({box:{borderRadius:"10px",width:"50vh",height:"30vh",background:"transparent",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-evenly",border:"1px solid #c0c0c0",outline:"none"}}),te=function(e){var a=e.close,t=Object(n.useState)({create:!1,join:!1}),o=Object(s.a)(t,2),r=o[0],i=o[1],m=function(){i(Object(l.a)({},r,{create:!1,join:!1}))},u=ae();return c.a.createElement(b.a,{className:u.box},r.create?c.a.createElement(X,{close:a,back:m}):r.join?c.a.createElement(Z,{close:a,back:m}):c.a.createElement(ee,{create:function(){i(Object(l.a)({},r,{create:!0}))},join:function(){i(Object(l.a)({},r,{join:!0}))}}))},ne=Object(h.a)({modal:{alignItems:"center",display:"flex",justifyContent:"center"}}),ce=function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0],o=a[1],r=ne();return c.a.createElement($.a,{open:t,className:r.modal},c.a.createElement(te,{close:function(){o(!1)}}))},oe=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,null,c.a.createElement(ce,null),c.a.createElement(g,{inputMessage:c.a.createElement(L,null),videoContainer:c.a.createElement(D,null)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.3e57af2d.chunk.js.map