(this["webpackJsonpgithub-jobs-react-app"]=this["webpackJsonpgithub-jobs-react-app"]||[]).push([[0],{43:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAG1BMVEXMzMyWlpa+vr7FxcWxsbGcnJyjo6O3t7eqqqo+ze+QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAt0lEQVRYhe3PvQvCMBCH4UuN0PGKuGuk4tiixbUOdpZI6OzH4FiH7l2E/tmmnRSRNIs4/J7huOXlOCIAAAAA+CfiZWf2Tyr/ZFDRJdLk8bSih2YWtQ7N3J0U6lpuD/K8tElTF+rkTjTFs4DHSWCTJD3SgCtMIr5xt9gh+O2971c02SujPtGUuhKlul9WE9mEfTLglyjamPyuW9qXfSLNzpF8WFDmm7Tr1jfJootvQol3AQAAAD/wBH9kFdmhubTQAAAAAElFTkSuQmCC"},44:function(e,t,a){e.exports=a(74)},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),l=a(15),s=a(7),i=a(36),u=a(22),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_JOBS":return t.jobs;case"LOAD_MORE_JOBS":return[].concat(Object(u.a)(e),Object(u.a)(t.jobs));default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERRORS":return{error:t.error};case"RESET_ERRORS":return{};default:return e}},b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,E=Object(s.e)(Object(s.c)({jobs:m,errors:d}),b(Object(s.a)(i.a)));console.log(E.getState());var p=E,f=a(11),O=a(5),h=a(20),j=a.n(h),v=a(21),g=a.n(v),y=a(37),A=a(38),S=a.n(A),N=a(13),_=a.n(N),C=function(e){return{type:"SET_JOBS",jobs:e}},R=function(e){return{type:"LOAD_MORE_JOBS",jobs:e}},w=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"title"},"Github Job Search"))},k=a(12),x=a(77),T=a(76),I=a(40),L=a(78),D=c.a.createContext(),J=function(){var e=Object(n.useContext)(D).onSearch,t=Object(n.useState)({description:"",location:"",full_time:!1}),a=Object(O.a)(t,2),r=a[0],o=a[1],l=function(e){var t=e.target,a=t.name,n=t.value;o("full_time"===a?function(e){return Object(f.a)({},r,Object(k.a)({},a,!e.full_time))}:Object(f.a)({},r,Object(k.a)({},a,n)))};return c.a.createElement("div",{className:"search-section"},c.a.createElement(x.a,{className:"search-form",onSubmit:function(t){t.preventDefault(),console.log(r),e(r)}},c.a.createElement(T.a,null,c.a.createElement(I.a,null,c.a.createElement(x.a.Group,{controlId:"description"},c.a.createElement(x.a.Control,{type:"text",name:"description",value:r.description||"",placeholder:"Enter search term",onChange:l}))),c.a.createElement(I.a,null,c.a.createElement(x.a.Group,{controlId:"location"},c.a.createElement(x.a.Control,{type:"text",name:"location",value:r.location||"",placeholder:"Enter location",onChange:l}))),c.a.createElement(I.a,null,c.a.createElement(L.a,{variant:"primary",type:"submit",className:"btn-search"},"Search"))),c.a.createElement("div",{className:"filters"},c.a.createElement(x.a.Group,{controlId:"full_time"},c.a.createElement(x.a.Check,{type:"checkbox",name:"full_time",className:"full-time-checkbox",label:"Full time only",checked:r.full_time,onChange:l})))))},M=function(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var t=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting?(c||r(!0),t.unobserve(e.target)):r(!1)}))})),a=e.current;return t.observe(a),function(){t.unobserve(a)}}),[c,e]),[c]},B=a(41),G=a(43),F=a.n(G),P=function(e){var t=e.src,a=e.alt,r=Object(B.a)(e,["src","alt"]),o=Object(n.useState)(!1),l=Object(O.a)(o,2),s=l[0],i=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",Object.assign({src:F.a,alt:a,style:{display:s?"none":"inline"}},r)),c.a.createElement("img",Object.assign({src:t,alt:a,onLoad:function(){i(!0)},style:{display:s?"inline":"none"}},r)))},Q=function(e){var t=Object(n.useContext)(D).onItemClick,a=Object(n.useRef)(),r=M(a),o=Object(O.a)(r,1)[0],l=e.id,s=e.type,i=e.created_at,u=e.company,m=e.location,d=e.title,b=e.company_logo,E=e.index;return c.a.createElement("div",{className:"job-item",index:E+1,onClick:function(){return t(l)}},c.a.createElement("div",{className:"company-logo",ref:a},o&&c.a.createElement(P,{src:b,alt:u,width:"100",height:"100"})),c.a.createElement("div",{className:"job-info"},c.a.createElement("div",{className:"job-title"},d),c.a.createElement("div",{className:"job-location"},m," | ",s),c.a.createElement("div",{className:"company-name"},u)),c.a.createElement("div",{className:"post-info"},c.a.createElement("div",{className:"post-time"},"Posted ",_()(new Date(i)).fromNow())))},U=function(){var e=Object(n.useContext)(D).results;return c.a.createElement("div",{className:"search-results"},e.map((function(e,t){return c.a.createElement(Q,Object.assign({key:e.id},e,{index:t}))})))},W=function(){var e=Object(n.useContext)(D),t=e.details,a=e.onResetPage;Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]);var r=t.type,o=t.title,l=t.description,s=t.location,i=t.company,u=t.company_url,m=t.company_logo,d=t.how_to_apply;return c.a.createElement("div",{className:"job-details"},c.a.createElement("div",{className:"back-link"},c.a.createElement("a",{href:"/#",onClick:a},"<< Back to results")),c.a.createElement("div",null,r," / ",s),c.a.createElement("div",{className:"main-section"},c.a.createElement("div",{className:"left-section"},c.a.createElement("div",{className:"title"},o),c.a.createElement("hr",null),c.a.createElement("div",{className:"job-description",dangerouslySetInnerHTML:{__html:l}})),c.a.createElement("div",{className:"right-section"},c.a.createElement("div",{className:"company-details"},c.a.createElement("h3",null,"About company"),c.a.createElement(P,{src:m,alt:i,className:"company-logo"}),c.a.createElement("div",{className:"company-name"},i),c.a.createElement("a",{className:"company-url",href:u},u)),c.a.createElement("div",{className:"how-to-apply"},c.a.createElement("h3",null,"How to apply"),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:d}})))))},H=a(9),X=function(e){var t=Object(n.useState)(document.createElement("div")),a=Object(O.a)(t,1)[0],c=document.querySelector("#loader");return Object(n.useEffect)((function(){c.appendChild(a).classList.add("message")}),[c,a]),Object(n.useEffect)((function(){e.show?(c.classList.remove("hide"),document.body.classList.add("loader-open")):(c.classList.add("hide"),document.body.classList.remove("loader-open"))}),[c,e.show]),o.a.createPortal(e.children,a)};X.propTypes={show:a.n(H).a.bool.isRequired};var q=X,z=Object(l.b)((function(e){return{jobs:e.jobs,errors:e.errors}}))((function(e){var t=Object(n.useState)([]),a=Object(O.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(null),s=Object(O.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(!1),d=Object(O.a)(m,2),b=d[0],E=d[1],p=Object(n.useState)(-1),h=Object(O.a)(p,2),v=h[0],A=h[1],N=Object(n.useState)("home"),k=Object(O.a)(N,2),x=k[0],T=k[1],I=Object(n.useState)(1),L=Object(O.a)(I,2),M=L[0],B=L[1],G=Object(n.useState)(null),F=Object(O.a)(G,2),P=F[0],Q=F[1],H=Object(n.useState)(!1),X=Object(O.a)(H,2),z=X[0],K=X[1];Object(n.useEffect)((function(){o(e.jobs)}),[e.jobs]),Object(n.useEffect)((function(){u(e.errors)}),[e.errors]);var V=function(t){var a=e.dispatch,n=t.description,c=t.location,r=t.full_time,o=t.page,l=void 0===o?1:o,s=!1;t.hasOwnProperty("page")&&(s=!0),a({type:"RESET_ERRORS"}),E(!0),a(function(e,t){return function(){var a=Object(y.a)(g.a.mark((function a(n){var c,r,o,l,s,i;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c=e.description,r=e.full_time,o=e.location,l=e.page,c=c?encodeURIComponent(c):"",o=o?encodeURIComponent(o):"",r=r?"&full_time=true":"",l&&(l=parseInt(l),l=isNaN(l)?"":"&page=".concat(l)),a.next=8,S.a.get("".concat("","/jobs?description=").concat(c,"&location=").concat(o).concat(r).concat(l));case 8:if(s=a.sent,i=s.data.sort((function(e,t){return _()(new Date(t.created_at))-_()(new Date(e.created_at))})),!t){a.next=14;break}return a.abrupt("return",n(R(i)));case 14:return a.abrupt("return",n(C(i)));case 15:a.next=20;break;case 17:a.prev=17,a.t0=a.catch(0),a.t0.response&&n({type:"SET_ERRORS",error:a.t0.response.data});case 20:case"end":return a.stop()}}),a,null,[[0,17]])})));return function(e){return a.apply(this,arguments)}}()}({description:n,location:c,full_time:r,page:l},s)).then((function(e){e&&0===e.jobs.length?K(!0):K(!1),E(!1)})).catch((function(){return E(!1)}))},Z={};"details"===x&&(Z=r.find((function(e){return e.id===v})));var Y={results:r,details:Z,onSearch:function(e){V(e),Q(e)},onItemClick:function(e){T("details"),A(e)},onResetPage:function(){T("home")}};return c.a.createElement(D.Provider,{value:Y},c.a.createElement(q,{show:b},"Loading..."),c.a.createElement("div",{className:"".concat("details"===x&&"hide")},c.a.createElement(w,null),c.a.createElement(J,null),!j.a.isEmpty(i)&&c.a.createElement("div",{className:"errorMsg"},c.a.createElement("p",null,i.error)),c.a.createElement(U,null),r.length>0&&j.a.isEmpty(i)&&!z&&c.a.createElement("div",{className:"load-more",onClick:b?null:function(){V(Object(f.a)({},P,{page:M+1})),B(M+1)}},c.a.createElement("button",{disabled:b,className:"".concat(b?"disabled":"")},"Load More Jobs"))),c.a.createElement("div",{className:"".concat("home"===x&&"hide")},"details"===x&&c.a.createElement(W,null)))}));a(72),a(73);o.a.render(c.a.createElement(l.a,{store:p},c.a.createElement(z,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e380b970.chunk.js.map