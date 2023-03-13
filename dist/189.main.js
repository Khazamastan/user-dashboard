"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[189],{189:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var n=r(294),o=r(137),a=r(379),i=r.n(a),l=r(795),u=r.n(l),s=r(569),c=r.n(s),m=r(565),f=r.n(m),d=r(216),p=r.n(d),b=r(589),y=r.n(b),g=r(476),v={};v.styleTagTransform=y(),v.setAttributes=f(),v.insert=c().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=p(),i()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;var h=r(893),x=function(e){var t=e.formItems,r=void 0===t?[]:t,n=e.formData,o=void 0===n?{}:n,a=e.onChangeForm,i=e.onSubmit,l=e.submitText,u=e.formTitle,s=e.resetForm;return(0,h.jsx)("div",{className:"form-container",children:(0,h.jsxs)("form",{children:[u&&(0,h.jsx)("h1",{children:u}),r.map((function(e){var t=e.filedName,r=e.type,n=e.key,i=e.options,l=e.testId;return(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{children:t}),(0,h.jsxs)("p",{children:["text"===r||"number"===r||"email"===r?(0,h.jsx)("input",{name:n,"data-testid":l,defaultValue:o[n],value:o[n],type:r,onChange:a}):"","textarea"===r?(0,h.jsx)("textarea",{defaultValue:o[n],value:o[n],name:n,onChange:a,children:o[n]}):"","select"===r?(0,h.jsx)("select",{defaultValue:o[n],value:o[n],name:n,onChange:a,children:i.map((function(e){return(0,h.jsx)("option",{value:e,children:e})}))}):""]})]})})),(0,h.jsxs)("div",{className:"form-footer",children:[(0,h.jsx)("button",{type:"button",onClick:i,children:l}),(0,h.jsx)("button",{type:"button",className:"reset",onClick:s,children:"Reset"})]})]})})},N=r(61),j=r(32),k=r(581),O=r(998),w=r(289);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===S(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=function(e){var t,r,a=(0,O.I0)(),i=(0,o.k6)(),l=null==e||null===(t=e.match)||void 0===t||null===(r=t.params)||void 0===r?void 0:r.id,u=C((0,n.useState)({id:"",firstName:"",lastName:"",gender:"",age:"",address:"",mobileNumber:"",emailId:"",passport:""}),2),s=u[0],c=u[1],m=C((0,n.useState)(!1),2),f=m[0],d=m[1],p=function(){c({id:"",firstName:"",lastName:"",gender:"",age:"",address:"",mobileNumber:"",emailId:"",passport:""})};return(0,n.useEffect)((function(){l&&function(e){d(!0),j.g.getUser(e).then((function(e){var t=(null==e?void 0:e.data)||{};c(t)})).catch((function(e){console.log(e)})).finally((function(){d(!1)}))}(l)}),[]),(0,h.jsxs)("div",{className:"register",children:[f?(0,h.jsx)("div",{className:"spinner-container",children:(0,h.jsx)(k.Z,{})}):null,(0,h.jsx)(x,{formTitle:"Register",formData:s,resetForm:p,submitText:l?"Update User":"Create User",formItems:N.l,onChangeForm:function(e){var t,r,n=null==e||null===(t=e.target)||void 0===t?void 0:t.value,o=null==e||null===(r=e.target)||void 0===r?void 0:r.name,a=Object.assign({},P(P({},s),{},A({},o,n)));c(a)},onSubmit:function(){var e=Object.assign({},P({},s));d(!0),(l?j.g.updateUser(l,e):j.g.registerUser(e)).then((function(e){a(l?(0,w.xy)(e.data):(0,w.H)([e.data])),i.push("/users")})).catch((function(e){console.log(e)})).finally((function(){d(!1)})),p()}})]})}},61:function(e,t,r){r.d(t,{l:function(){return n},v:function(){return o}});var n=[{filedName:"First Name",type:"text",key:"firstName",testId:"firstName"},{filedName:"Last Name",type:"text",key:"lastName"},{filedName:"Gender",type:"select",key:"gender",options:["Male","Fe-Male"]},{filedName:"Age",type:"number",key:"age"},{filedName:"Mobile Number",type:"number",key:"mobileNumber"},{filedName:"Email Id",type:"email",key:"emailId"},{filedName:"Address",type:"textarea",key:"address"},{filedName:"Passport",type:"text",key:"passport"}],o=[{columnName:"First Name",key:"firstName"},{columnName:"Last Name",key:"lastName"},{columnName:"Gender",key:"gender"},{columnName:"Age",key:"age"},{columnName:"Mobile Number",key:"mobileNumber"},{columnName:"Email Id",key:"emailId"},{columnName:"Address",key:"address"},{columnName:"Passport",key:"passport"},{columnName:"",width:"10%",className:"table-actions text-center",key:"actions",cellRenderer:function(){}}]},476:function(e,t,r){var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,".form-container{width:460px;margin:auto;border:1px solid #f5f5f5;background-color:#fff;padding:30px 60px;margin-top:30px}.form-container h1{margin-top:0}.form-container p{margin:5px 0 20px 0}.form-container input,.form-container select,.form-container textarea{padding:10px;width:100%;background:#f5f5f5;border:0}.form-container select{width:150px}.form-container button{padding:15px;background:#000;color:#fff;border:0}.form-footer{display:flex;text-align:center;align-items:center;justify-content:space-between}.form-footer button{margin:0 0px}.form-footer button.reset{background-color:#f5f5f5;color:#000}",""]),t.Z=i}}]);