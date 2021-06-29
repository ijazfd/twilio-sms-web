(this["webpackJsonptwilio-sms-web"]=this["webpackJsonptwilio-sms-web"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(14),o=n.n(s),r=(n(44),n(45),n(18)),i=n(4),u=n(3),l=n(1),d=a.a.createContext({}),b=a.a.createContext((function(){})),j=function(){return[Object(c.useContext)(d),Object(c.useContext)(b)]},h=function(e){var t=e.children,n=Object(c.useState)({}),a=Object(u.a)(n,2),s=a[0],o=a[1];return Object(l.jsx)(d.Provider,{value:s,children:Object(l.jsx)(b.Provider,{value:function(e){return o(e)},children:t})})},m=n(11),p=n.n(m),f=function(e){var t=e.onSuccess,n=void 0===t?function(){}:t,c=e.onError,a=void 0===c?function(){}:c,s=e.onComplete,o=void 0===s?function(){}:s;return function(e){var t=e.accountSid,c=e.authToken,s="https://api.twilio.com/2010-04-01/Accounts/".concat(t,".json");p.a.get(s,{auth:{username:t,password:c}}).then((function(e){return n(e)})).catch((function(e){return a(e)})).then((function(){return o()}))}},O=function(e){var t=e.accountSid,n=void 0===t?"":t,c=e.authToken,a=void 0===c?"":c,s=e.loading,o=void 0===s||s,r=e.onAccountSidChange,i=void 0===r?function(){}:r,u=e.onAuthTokenChange,d=void 0===u?function(){}:u,b=e.onSubmit,j=void 0===b?function(){}:b;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{onSubmit:j,children:[Object(l.jsxs)("label",{className:"form-label",children:["Account SID",Object(l.jsx)("input",{className:"form-input",type:"text",name:"AccountSid",value:n,onChange:function(e){return i(e.target.value)},disabled:o,placeholder:"See Twilio console 'Account SID' "})]}),Object(l.jsxs)("label",{className:"form-label",children:["Auth Token",Object(l.jsx)("input",{className:"form-input",type:"password",name:"AuthToken",value:a,onChange:function(e){return d(e.target.value)},disabled:o,placeholder:"See Twilio console 'Auth Token'"})]}),Object(l.jsx)("div",{className:"text-center m-2",children:Object(l.jsx)("button",{className:"btn btn-primary ".concat(o?"loading":""),type:"submit",children:"Authenticate"})})]})})},v=function(e){var t=e.accountInfo,n=void 0===t?"":t;return 0===Object.keys(n).length?null:Object(l.jsx)("div",{className:"flex-centered",style:{marginTop:"2em"},children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-header bg-success text-center",children:Object(l.jsx)("h6",{children:"Authentication Success"})}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("p",{className:"text-small",style:{marginBottom:".5em"},children:"You are authenticated with the following account:"}),Object(l.jsx)("span",{className:"text-bold",children:"Name: "}),n.name,Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"text-bold",children:"Type: "}),n.type,Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"text-bold",children:"Status: "}),n.status,Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"text-bold",children:"Created: "}),n.dateCreated,Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"text-bold",children:"Updated: "}),n.dateUpdated,Object(l.jsx)("br",{})]})]})})},x=n(95),g=function(e){var t=e.children,n=Object(i.f)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"container grid-lg",children:Object(l.jsxs)("header",{className:"navbar bg-primary",style:{padding:".5em"},children:[Object(l.jsxs)("section",{className:"navbar-section",children:[Object(l.jsx)("span",{className:"btn btn-link text-light",onClick:function(){n.push("/authentication")},children:"Authentication"}),Object(l.jsx)("span",{className:"btn btn-link text-light",onClick:function(){n.push("/phone-numbers")},children:"Messages"})]}),Object(l.jsx)("section",{className:"navbar-center",children:Object(l.jsx)("span",{className:"h5",children:"Twilio SMS Web"})}),Object(l.jsx)("section",{className:"navbar-section",children:Object(l.jsxs)("a",{className:"btn btn-link text-light",href:"https://github.com/rafasantos/twilio-sms-web",target:"_blank",rel:"noreferrer",children:["GitHub ",Object(l.jsx)(x.a,{})]})})]})}),Object(l.jsx)("div",{className:"container grid-lg text-left",style:{marginTop:"1em"},children:t})]})},N=function(e){var t=e.error;return t?Object(l.jsx)("span",{className:"label label-error",style:{padding:".5em",margin:".5em 0em .5em 0em"},children:t instanceof Error?"".concat(t.name,": ").concat(t.message):"Error: ".concat(String(t))}):null},S=function(){var e=j(),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(n.accountInfo),o=Object(u.a)(s,2),r=o[0],i=o[1],d=Object(c.useState)(n.accountSid),b=Object(u.a)(d,2),h=b[0],m=b[1],p=Object(c.useState)(n.authToken),x=Object(u.a)(p,2),S=x[0],C=x[1],y=Object(c.useState)(!1),w=Object(u.a)(y,2),T=w[0],k=w[1],E=Object(c.useState)(null),A=Object(u.a)(E,2),I=A[0],H=A[1],D=f({onSuccess:function(e){var t={name:e.data.friendly_name,type:e.data.type,status:e.data.status,dateCreated:e.data.date_created,dateUpdated:e.data.date_updated};i(t),a({accountSid:h,authToken:S,accountInfo:t})},onError:function(e){H(e)},onComplete:function(){k(!1)}});return Object(l.jsxs)(g,{children:[Object(l.jsx)("h4",{children:"Authentication"}),Object(l.jsx)(N,{error:I}),Object(l.jsx)(O,{accountSid:h,authToken:S,loading:T,onAccountSidChange:function(e){return m(e)},onAuthTokenChange:function(e){return C(e)},onSubmit:function(e){e.preventDefault(),k(!0),D({accountSid:h,authToken:S})}}),Object(l.jsx)(v,{accountInfo:r})]})},C=(n(73),n(26)),y=n.n(C),w=n(37),T=function(){var e=j(),t=Object(u.a)(e,1)[0];return function(){var e=Object(w.a)(y.a.mark((function e(n){var c,a,s,o,r,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.phoneNumber,a="https://api.twilio.com/2010-04-01/Accounts/".concat(t.accountSid,"/Messages.json"),s=[],e.next=5,p.a.get(a,{auth:{username:t.accountSid,password:t.authToken},params:{From:c}});case 5:return o=e.sent,e.next=8,p.a.get(a,{auth:{username:t.accountSid,password:t.authToken},params:{To:c}});case 8:return r=e.sent,s=s.concat(o.data.messages).concat(r.data.messages),i=function(e,t){return Date.parse(e.date_created)>Date.parse(t.date_created)?-1:1},e.abrupt("return",s.sort(i));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=(n(75),n(96)),E=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"text-center message-list-loading-container",children:Object(l.jsx)(k.a,{className:"message-list-loading text-primary"})})})},A=function(e){var t=e.phoneNumber,n=void 0===t?"":t,a=e.onComplete,s=void 0===a?function(){}:a,o=e.onError,r=void 0===o?function(){}:o,i=Object(c.useState)(!0),d=Object(u.a)(i,2),b=d[0],j=d[1],h=Object(c.useState)([]),m=Object(u.a)(h,2),p=m[0],f=m[1],O=Object(c.useState)(!1),v=Object(u.a)(O,2),x=v[0],g=v[1],N=Object(c.useState)(null),S=Object(u.a)(N,2),C=S[0],y=S[1],w=Object(c.useCallback)((function(e){var t=e.map((function(e){return{messageSid:e.sid,direction:e.direction,from:e.from,to:e.to,date:e.date_created,status:e.status,body:e.body}}));f(t),j(!1)}),[f,j]),k=T({onSuccess:w,onComplete:s,onError:r});Object(c.useEffect)((function(){g(!0)}),[g]),Object(c.useEffect)((function(){x&&(null===n||void 0===n?void 0:n.length)>0&&C!==n&&(k({phoneNumber:n}).then(w).catch(r).then(s),y(n),j(!0))}),[x,n,C,k,p,w,r,s,y,j]);var A=function(e){var t,n=e.message;return Object(l.jsxs)("div",{className:"panel message-list-panel",children:[Object(l.jsx)("div",{className:"panel-header text-small",children:Object(l.jsxs)("div",{className:"message-list-header",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"from:"})," ",n.from]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"To:"})," ",n.to]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Direction:"})," ",n.direction]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{children:"Status:"})," ",n.status]})]})}),Object(l.jsx)("div",{className:"panel-body text-code",children:n.body}),Object(l.jsxs)("div",{className:"panel-footer text-small text-gray",children:["Date: ",null===(t=new Date(n.date))||void 0===t?void 0:t.toLocaleString()]})]})};return b?Object(l.jsx)(E,{}):p.map((function(e){return Object(l.jsx)(A,{message:e},e.messageSid)}))},I=(n(76),function(e){var t=e.onSuccess,n=void 0===t?function(){}:t,c=e.onError,a=void 0===c?function(){}:c,s=e.onComplete,o=void 0===s?function(){}:s,r=j(),i=Object(u.a)(r,1)[0];return function(e){var t=e.to,c=e.from,s=e.body,r=new URLSearchParams;r.append("To",t),r.append("From",c),r.append("Body",s);var u="https://api.twilio.com/2010-04-01/Accounts/".concat(i.accountSid,"/Messages.json");p.a.post(u,r,{auth:{username:i.accountSid,password:i.authToken},headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return n(e)})).catch((function(e){return a(e)})).then((function(){return o()}))}}),H=function(e){var t=e.text;return null!==t&&t.length>0?Object(l.jsx)("span",{className:"label label-success",style:{padding:".5em",margin:".5em 0em .5em 0em"},children:t}):null},D=function(e){var t=e.value,n=void 0===t?"":t,a=e.label,s=void 0===a?"Label":a,o=e.pristineHint,r=void 0===o?"Enter a value":o,i=e.invalidHint,d=void 0===i?"Invalid value":i,b=e.validHint,j=void 0===b?"":b,h=e.validation,m=void 0===h?function(){return null}:h,p=e.placeholder,f=void 0===p?"Input placeholder":p,O=e.isRequired,v=void 0!==O&&O,x=e.type,g=void 0===x?"text":x,N=e.onChange,S=void 0===N?function(){}:N,C=Object(c.useState)(!0),y=Object(u.a)(C,2),w=y[0],T=y[1],k=m(n),E=null!==k&&k,A="form-label ".concat(w||E?"":"has-error"),I=!w&&!E,H=!w&&E;return Object(l.jsxs)("label",{className:A,children:[s,":",v&&Object(l.jsx)("sup",{className:"text-error",children:"\u2217 "}),Object(l.jsx)("input",{type:g,className:"form-input",placeholder:f,required:v,value:n,onChange:S,onBlur:function(){return T(!1)}}),H&&Object(l.jsx)("span",{className:"form-input-hint",children:j}),I&&Object(l.jsx)("span",{className:"form-input-hint",children:d}),w&&Object(l.jsx)("span",{className:"form-input-hint",children:r})]})},F=function(e){var t=e.value,n=void 0===t?"":t,a=e.label,s=void 0===a?"Label":a,o=e.pristineHint,r=void 0===o?"Enter a value":o,i=e.invalidHint,d=void 0===i?"Invalid value":i,b=e.validHint,j=void 0===b?"":b,h=e.validation,m=void 0===h?function(){return null}:h,p=e.placeholder,f=void 0===p?"Input placeholder":p,O=e.isRequired,v=void 0!==O&&O,x=e.rows,g=void 0===x?5:x,N=e.onChange,S=void 0===N?function(){}:N,C=Object(c.useState)(!0),y=Object(u.a)(C,2),w=y[0],T=y[1],k=m(n),E=null!==k&&k,A="form-label ".concat(w||E?"":"has-error"),I=!w&&!E,H=!w&&E;return Object(l.jsxs)("label",{className:A,children:[s,":",v&&Object(l.jsx)("sup",{className:"text-error",children:"\u2217 "}),Object(l.jsx)("textarea",{className:"form-input",placeholder:f,required:v,value:n,rows:g,onChange:S,onBlur:function(){return T(!1)}}),H&&Object(l.jsx)("span",{className:"form-input-hint",children:j}),I&&Object(l.jsx)("span",{className:"form-input-hint",children:d}),w&&Object(l.jsx)("span",{className:"form-input-hint",children:r})]})},P=function(e){var t=e.phoneNumber,n=void 0===t?"":t,a=Object(c.useState)(!1),s=Object(u.a)(a,2),o=s[0],r=s[1],i=Object(c.useState)(""),d=Object(u.a)(i,2),b=d[0],j=d[1],h=Object(c.useState)(!1),m=Object(u.a)(h,2),p=m[0],f=m[1],O=Object(c.useState)("+"),v=Object(u.a)(O,2),x=v[0],g=v[1],S=Object(c.useState)(""),C=Object(u.a)(S,2),y=C[0],w=C[1],T=I({onSuccess:function(e){f(!0),setTimeout((function(){return f(!1)}),5e3)},onError:function(e){j(e)},onComplete:function(){r(!1)}});return Object(l.jsxs)("div",{children:[Object(l.jsx)(N,{error:b}),Object(l.jsxs)("form",{className:"form-group",onSubmit:function(e){e.preventDefault(),r(!0),T({to:x,from:n,body:y})},children:[Object(l.jsxs)("fieldset",{disabled:o,children:[Object(l.jsx)(D,{label:"To",type:"tel",value:x,onChange:function(e){var t="+"+e.target.value.replace(/\D/g,"");t.length<13&&g(t)},validation:function(e){return e.match("^\\+\\d{11}")},placeholder:"Enter the recipient's phone number",pristineHint:"Enter the recipient's phone number",invalidHint:"Phone number is invalid, it must contain the country followed by 10 digits",validHint:"Phone number is valid",isRequired:!0}),Object(l.jsx)(F,{label:"Message",value:y,isRequired:!0,placeholder:"Enter the message to sent to: ".concat(x," from: ").concat(n),pristineHint:"Enter the message to sent to: ".concat(x," from: ").concat(n),validHint:"This message is going to be sent to: ".concat(x," from: ").concat(n),invalidHint:"Invalid message, it must be between 3 and 200 characters",rows:"3",validation:function(e){return e.match("[\\w\\d]{3,}")},onChange:function(e){var t=e.target.value;t.length<200&&w(t)}})]}),Object(l.jsx)("div",{className:"text-center m-2",children:Object(l.jsx)("button",{className:"message-composer-submit btn btn-primary ".concat(o?"loading":""),type:"submit",children:"Send"})})]}),Object(l.jsx)("div",{className:"text-center",children:p&&Object(l.jsx)(H,{text:"Message sent successfully."})})]})},_=function(e){var t=e.phoneNumber,n=void 0===t?"":t,a=Object(c.useState)("messages"),s=Object(u.a)(a,2),o=s[0],r=s[1],i="messages"===o,d="composer"===o,b="tab-item messages-page-tabs-area ".concat(i?"active":""),j="tab-item messages-page-tabs-area ".concat(d?"active":"");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"messages-page-tabs-container",children:Object(l.jsx)("div",{className:"messages-page-tabs-content",children:Object(l.jsxs)("ul",{className:"tab tab-block",children:[Object(l.jsx)("li",{className:b,onClick:function(){return r("messages")},children:"Messages"}),Object(l.jsx)("li",{className:j,onClick:function(){return r("composer")},children:"Composer"})]})})}),i&&Object(l.jsx)(A,{phoneNumber:n}),d&&Object(l.jsx)(P,{phoneNumber:n})]})},M=n(38),L=function(e){var t=e.onSuccess,n=void 0===t?function(){}:t,c=e.onError,a=void 0===c?function(){}:c,s=e.onComplete,o=void 0===s?function(){}:s,r=j(),i=Object(u.a)(r,1)[0];return function(){var e="https://api.twilio.com/2010-04-01/Accounts/".concat(i.accountSid,"/IncomingPhoneNumbers.json?Beta=false");p.a.get(e,{auth:{username:i.accountSid,password:i.authToken}}).then((function(e){return n(e)})).catch((function(e){return a(e)})).then((function(){return o()}))}},B=(n(77),function(e){var t=e.onError,n=void 0===t?function(){}:t,a=e.onComplete,s=void 0===a?function(){}:a,o=e.onPhoneNumberChange,r=void 0===o?function(){}:o,i=Object(c.useState)(!0),d=Object(u.a)(i,2),b=d[0],j=d[1],h=Object(c.useState)([]),m=Object(u.a)(h,2),p=m[0],f=m[1],O=L({onSuccess:function(e){var t,n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.incoming_phone_numbers.filter((function(e){return e.capabilities.sms})).map((function(e){return e.phone_number})).sort();f(n)},onError:n,onComplete:function(){j(!1),s()}}),v=function(e){var t=e.substr(0,2);return t+=" "+e.substr(2,3),t+=" "+e.substr(5,3),t+=" "+e.substr(8)},x=p.map((function(e){return{value:e,label:v(e)}})),g=b?"Loading phone numbers...":"Select (or type) a phone number...";return Object(c.useEffect)((function(){0===p.length&&O()}),[O,p]),Object(l.jsx)(M.a,{placeholder:g,isLoading:b,options:x,onChange:function(e){r(e.value)}})}),q=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(u.a)(s,2),r=o[0],d=o[1],b=j(),h=Object(u.a)(b,1)[0],m=Object(i.f)();if(!(null===h||void 0===h?void 0:h.accountSid))return m.push("/authentication"),null;var p=12===r.length;return Object(l.jsxs)(g,{children:[Object(l.jsx)("h4",{children:"Messages"}),Object(l.jsx)(N,{error:n}),Object(l.jsx)(B,{onError:function(e){return a(e)},onPhoneNumberChange:function(e){return d(e)}}),p&&Object(l.jsx)(_,{phoneNumber:r})]})},R=(n(90),n(91),n(92),function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(h,{children:Object(l.jsx)(r.a,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/",component:S}),Object(l.jsx)(i.a,{path:"/authentication",component:S}),Object(l.jsx)(i.a,{path:"/phone-numbers",component:q})]})})})})}),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root")),U()}},[[93,1,2]]]);
//# sourceMappingURL=main.9692ab86.chunk.js.map