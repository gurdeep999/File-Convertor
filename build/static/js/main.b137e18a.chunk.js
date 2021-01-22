(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(0),c=t.n(a),o=t(24),i=t.n(o),s=(t(36),t(6)),l=t(5);function u(){var e=Object(s.a)(["\nmargin-left: auto;\n\nspan {\n  margin-left: 2rem;\n}\n"]);return u=function(){return e},e}function d(){var e=Object(s.a)(["\ndisplay: flex;\nwidth: 100%;\npadding: 1rem 2rem;\nfont-size: 2.2rem;\nmargin-bottom: 2rem;\n"]);return d=function(){return e},e}var f=l.a.header(d()),p=l.a.nav(u()),b=function(){return Object(r.jsxs)(f,{children:[Object(r.jsx)("div",{children:"File Convertor"}),Object(r.jsxs)(p,{children:[Object(r.jsx)("span",{children:"Home"}),Object(r.jsx)("span",{children:"Github"}),Object(r.jsx)("span",{children:"About"})]})]})},j=function(){return Object(r.jsx)("div",{className:"container__footer",children:Object(r.jsxs)("div",{children:["Made with \u2764\ufe0f by ",Object(r.jsx)("a",{href:"https://gurdeepsingh.netlify.app/",children:"gurdeepsingh"})]})})},m=t(10),x=t(4),h=t.n(x),g=t(7),v=t(8),O=t(30),w=t(13),y=t.n(w),k="/api/convert",N={upload:function(){var e=Object(g.a)(h.a.mark((function e(n){var t,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{"Content-Type":"multipart/form-data"}},e.next=3,y.a.post("".concat(k,"/file"),n,t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),download:function(){var e=Object(g.a)(h.a.mark((function e(n){var t,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={responseType:"blob"},e.next=3,y.a.get("".concat(k,"/download/").concat(n),t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},F=t(29),C=t.n(F);function S(){var e=Object(s.a)(["\nbackground-color: rgb(248,249,249);\nborder-radius: 15px;\npadding: 4rem 5rem;\n\n  form {\n    display: grid;\n    grid-template-areas: 'from to'\n                        'file file'\n                        'button button';\n    gap: 2rem 5rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 150px 150px auto;\n    align-items: center;\n    justify-items:center;\n    .from {\n      grid-area: from;\n    }\n\n    .to {\n      grid-area: to;\n    }\n\n    .file-section {\n      grid-area: file;\n\n      .remove-file {\n        color: blue;\n        display: inline-block;\n        margin: 0 10px;\n      }\n    }\n   \n    button {\n      grid-area: button;\n      align-self: center;\n      justify-self: center;\n      padding: 1.5rem 2rem;\n      border-radius: 15px;\n      font-weight: 500;\n      letter-spacing: 1px;\n      box-shadow: 1px 3px rgb(156,156,156);\n      transition: 0.2s;\n      outline:none;\n      color: #fff;\n      background-color: #007bff;\n      border-color: #007bff;\n      margin-bottom: 40px;\n    }\n\n    button:focus {\n\n\n    }\n    button:active {\n      box-shadow: 1px 1px rgb(156,156,156);\n      transform: translateY(2px);\n    }\n  }\n\n  .drop-zone {\n    margin-bottom: 10px;\n    padding: 40px 10px;\n    height: inherit;\n    border: 2px dashed #e9ebeb;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    width: 100%;\n    \n    &:focus {\n      outline: none;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    form {\n      grid-template-areas: 'from'\n                          'to'\n                        'file'\n                        'button';\n    gap: 2rem 5rem;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr auto auto;\n    }\n  }\n"]);return S=function(){return e},e}var T={csv:["json"],json:["csv"],svg:["png","jpg"]},D=l.a.div(S()),P=function(){var e=Object(a.useState)(null),n=Object(v.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)("default"),i=Object(v.a)(o,2),s=i[0],l=i[1],u=Object(a.useState)("default"),d=Object(v.a)(u,2),f=d[0],p=d[1],b=Object(a.useCallback)((function(e){var n=Object(v.a)(e,1)[0];c(n)}),[]),j=Object(O.a)({onDrop:b}),x=j.getRootProps,w=j.getInputProps,y=j.rootRef,k=function(){var e=Object(g.a)(h.a.mark((function e(n,t,r){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.replace(/^\d+-/,""),e.prev=1,e.abrupt("return",C()(n,a,r));case 5:e.prev=5,e.t0=e.catch(1),console.log("error while downloading file");case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(n,t,r){return e.apply(this,arguments)}}(),F=function(){var e=Object(g.a)(h.a.mark((function e(n){var r,a,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,"default"===s&&"default"===f){e.next=24;break}if(!t){e.next=21;break}return(r=new FormData).append("file",t),r.append("from",s),r.append("to",f),c(""),l("default"),p("default"),e.next=13,N.upload(r);case 13:return a=e.sent,e.next=16,N.download(a.fileName);case 16:return o=e.sent,e.next=19,k(o,a.fileName,a.mimetype);case 19:e.next=22;break;case 21:console.log("please select a file to upload");case 22:e.next=25;break;case 24:console.log("please select file type to be converted and the target type");case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(1),e.t0.response&&console.log(e.t0.message);case 30:case"end":return e.stop()}}),e,null,[[1,27]])})));return function(n){return e.apply(this,arguments)}}();return Object(r.jsx)(D,{className:"shadow p-3 mb-5",children:Object(r.jsxs)("form",{onSubmit:F,children:[Object(r.jsxs)("div",{className:"from",children:[Object(r.jsx)("label",{htmlFor:"from",children:"From"}),Object(r.jsx)("div",{className:"select",children:Object(r.jsxs)("select",{value:s,onChange:function(e){return l(e.target.value)},id:"from",children:[Object.keys(T).map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)})),Object(r.jsx)("option",{value:"default",children:"Select File Type"})]})})]}),Object(r.jsxs)("div",{className:"to",children:[Object(r.jsx)("label",{htmlFor:"to",children:"To"}),Object(r.jsxs)("div",{className:"select",children:[Object(r.jsxs)("select",{value:f,onChange:function(e){return p(e.target.value)},id:"to",children:["default"!==s?T[s].map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)})):null,Object(r.jsx)("option",{value:"default",children:"Select File Type"})]}),Object(r.jsx)("div",{className:"focus"})]})]}),Object(r.jsx)("div",{className:"file-section",children:Object(r.jsxs)("div",Object(m.a)(Object(m.a)({},x({className:"drop-zone"})),{},{ref:y,children:[Object(r.jsx)("input",Object(m.a)({},w())),t?Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Selected File: "}),t.name,Object(r.jsx)("div",{className:"remove-file",onClick:function(e){c(null),e.stopPropagation()},children:"remove"})]}):Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Drag 'n' drop some files here, or "}),"click to select files"]})]}))}),Object(r.jsx)("button",{className:"",children:"CONVERT"})]})})};function z(){var e=Object(s.a)(["\n\n"]);return z=function(){return e},e}function I(){var e=Object(s.a)(["\nfont-size: 1.6rem;\nmin-height: 100vh;\ndisplay: flex;\nflex-direction: column;\nflex: 1 1 0%;\nwidth: 100%;\nalign-items: center;\n\n\n"]);return I=function(){return e},e}var R=l.a.div(I()),B=l.a.div(z()),E=function(){return Object(r.jsxs)(R,{children:[Object(r.jsx)(b,{}),Object(r.jsx)(B,{children:Object(r.jsx)(P,{})}),Object(r.jsx)(j,{})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,59)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root")),J()}},[[58,1,2]]]);
//# sourceMappingURL=main.b137e18a.chunk.js.map