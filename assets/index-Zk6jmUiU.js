(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qu={exports:{}},tl={},Ku={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),oc=Symbol.for("react.portal"),uc=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),sc=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),hc=Symbol.for("react.lazy"),Oo=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=Oo&&e[Oo]||e["@@iterator"],typeof e=="function"?e:null)}var Gu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yu=Object.assign,Xu={};function on(e,t,n){this.props=e,this.context=t,this.refs=Xu,this.updater=n||Gu}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zu(){}Zu.prototype=on.prototype;function Ui(e,t,n){this.props=e,this.context=t,this.refs=Xu,this.updater=n||Gu}var $i=Ui.prototype=new Zu;$i.constructor=Ui;Yu($i,on.prototype);$i.isPureReactComponent=!0;var Do=Array.isArray,Ju=Object.prototype.hasOwnProperty,Bi={current:null},qu={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Ju.call(t,r)&&!qu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Xn,type:e,key:i,ref:o,props:l,_owner:Bi.current}}function gc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function yc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fo=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yc(""+e.key):t.toString(36)}function xr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xn:case oc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+wl(o,0):r,Do(l)?(n="",e!=null&&(n=e.replace(Fo,"$&/")+"/"),xr(l,t,n,"",function(c){return c})):l!=null&&(Vi(l)&&(l=gc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Fo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Do(e))for(var u=0;u<e.length;u++){i=e[u];var a=r+wl(i,u);o+=xr(i,t,n,a,l)}else if(a=vc(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=r+wl(i,u++),o+=xr(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return xr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function xc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},wr={transition:null},wc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Bi};function ea(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=on;T.Fragment=uc;T.Profiler=sc;T.PureComponent=Ui;T.StrictMode=ac;T.Suspense=pc;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wc;T.act=ea;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yu({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Bi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Ju.call(t,a)&&!qu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Xn,type:e.type,key:l,ref:i,props:r,_owner:o}};T.createContext=function(e){return e={$$typeof:fc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cc,_context:e},e.Consumer=e};T.createElement=bu;T.createFactory=function(e){var t=bu.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:dc,render:e}};T.isValidElement=Vi;T.lazy=function(e){return{$$typeof:hc,_payload:{_status:-1,_result:e},_init:xc}};T.memo=function(e,t){return{$$typeof:mc,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};T.unstable_act=ea;T.useCallback=function(e,t){return ae.current.useCallback(e,t)};T.useContext=function(e){return ae.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};T.useEffect=function(e,t){return ae.current.useEffect(e,t)};T.useId=function(){return ae.current.useId()};T.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ae.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};T.useRef=function(e){return ae.current.useRef(e)};T.useState=function(e){return ae.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ae.current.useTransition()};T.version="18.3.1";Ku.exports=T;var Ae=Ku.exports;const kc=ic(Ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=Ae,Sc=Symbol.for("react.element"),Ec=Symbol.for("react.fragment"),Nc=Object.prototype.hasOwnProperty,Cc=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jc={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Nc.call(t,r)&&!jc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Sc,type:e,key:i,ref:o,props:l,_owner:Cc.current}}tl.Fragment=Ec;tl.jsx=ta;tl.jsxs=ta;Qu.exports=tl;var d=Qu.exports,Kl={},na={exports:{}},xe={},ra={exports:{}},la={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,z){var P=E.length;E.push(z);e:for(;0<P;){var W=P-1>>>1,X=E[W];if(0<l(X,z))E[W]=z,E[P]=X,P=W;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var z=E[0],P=E.pop();if(P!==z){E[0]=P;e:for(var W=0,X=E.length,er=X>>>1;W<er;){var gt=2*(W+1)-1,xl=E[gt],yt=gt+1,tr=E[yt];if(0>l(xl,P))yt<X&&0>l(tr,xl)?(E[W]=tr,E[yt]=P,W=yt):(E[W]=xl,E[gt]=P,W=gt);else if(yt<X&&0>l(tr,P))E[W]=tr,E[yt]=P,W=yt;else break e}}return z}function l(E,z){var P=E.sortIndex-z.sortIndex;return P!==0?P:E.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],c=[],v=1,h=null,m=3,x=!1,w=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=E)r(c),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(c)}}function g(E){if(k=!1,p(E),!w)if(n(a)!==null)w=!0,gl(S);else{var z=n(c);z!==null&&yl(g,z.startTime-E)}}function S(E,z){w=!1,k&&(k=!1,f(j),j=-1),x=!0;var P=m;try{for(p(z),h=n(a);h!==null&&(!(h.expirationTime>z)||E&&!je());){var W=h.callback;if(typeof W=="function"){h.callback=null,m=h.priorityLevel;var X=W(h.expirationTime<=z);z=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(a)&&r(a),p(z)}else r(a);h=n(a)}if(h!==null)var er=!0;else{var gt=n(c);gt!==null&&yl(g,gt.startTime-z),er=!1}return er}finally{h=null,m=P,x=!1}}var N=!1,C=null,j=-1,H=5,L=-1;function je(){return!(e.unstable_now()-L<H)}function sn(){if(C!==null){var E=e.unstable_now();L=E;var z=!0;try{z=C(!0,E)}finally{z?cn():(N=!1,C=null)}}else N=!1}var cn;if(typeof s=="function")cn=function(){s(sn)};else if(typeof MessageChannel<"u"){var Io=new MessageChannel,lc=Io.port2;Io.port1.onmessage=sn,cn=function(){lc.postMessage(null)}}else cn=function(){F(sn,0)};function gl(E){C=E,N||(N=!0,cn())}function yl(E,z){j=F(function(){E(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,gl(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var P=m;m=z;try{return E()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,z){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var P=m;m=E;try{return z()}finally{m=P}},e.unstable_scheduleCallback=function(E,z,P){var W=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?W+P:W):P=W,E){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,E={id:v++,callback:z,priorityLevel:E,startTime:P,expirationTime:X,sortIndex:-1},P>W?(E.sortIndex=P,t(c,E),n(a)===null&&E===n(c)&&(k?(f(j),j=-1):k=!0,yl(g,P-W))):(E.sortIndex=X,t(a,E),w||x||(w=!0,gl(S))),E},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(E){var z=m;return function(){var P=m;m=z;try{return E.apply(this,arguments)}finally{m=P}}}})(la);ra.exports=la;var zc=ra.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc=Ae,ye=zc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ia=new Set,Mn={};function Lt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)ia.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,Tc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ao={},Uo={};function Lc(e){return Gl.call(Uo,e)?!0:Gl.call(Ao,e)?!1:Tc.test(e)?Uo[e]=!0:(Ao[e]=!0,!1)}function Mc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rc(e,t,n,r){if(t===null||typeof t>"u"||Mc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hi=/[\-:]([a-z])/g;function Wi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hi,Wi);ee[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hi,Wi);ee[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hi,Wi);ee[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qi(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rc(t,n,l,r)&&(n=null),r||l===null?Lc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),It=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Ki=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),oa=Symbol.for("react.provider"),ua=Symbol.for("react.context"),Gi=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),aa=Symbol.for("react.offscreen"),$o=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,kl;function xn(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var _l=!1;function Sl(e,t){if(!e||_l)return"";_l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{_l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xn(e):""}function Ic(e){switch(e.tag){case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case It:return"Portal";case Yl:return"Profiler";case Ki:return"StrictMode";case Xl:return"Suspense";case Zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ua:return(e.displayName||"Context")+".Consumer";case oa:return(e._context.displayName||"Context")+".Provider";case Gi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yi:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function Oc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===Ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dc(e){var t=sa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Dc(e))}function ca(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fa(e,t){t=t.checked,t!=null&&Qi(e,"checked",t,!1)}function bl(e,t){fa(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&ei(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ei(e,t,n){(t!=="number"||Lr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ho(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(wn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function da(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,ma=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fc=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Fc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function ha(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function va(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ha(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ac=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,t){if(t){if(Ac[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function li(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function Xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,Gt=null,Yt=null;function Qo(e){if(e=qn(e)){if(typeof oi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=ol(t),oi(e.stateNode,e.type,t))}}function ga(e){Gt?Yt?Yt.push(e):Yt=[e]:Gt=e}function ya(){if(Gt){var e=Gt,t=Yt;if(Yt=Gt=null,Qo(e),t)for(e=0;e<t.length;e++)Qo(t[e])}}function xa(e,t){return e(t)}function wa(){}var El=!1;function ka(e,t,n){if(El)return e(t,n);El=!0;try{return xa(e,t,n)}finally{El=!1,(Gt!==null||Yt!==null)&&(wa(),ya())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ui=!1;if(Ke)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){ui=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{ui=!1}function Uc(e,t,n,r,l,i,o,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(v){this.onError(v)}}var En=!1,Mr=null,Rr=!1,ai=null,$c={onError:function(e){En=!0,Mr=e}};function Bc(e,t,n,r,l,i,o,u,a){En=!1,Mr=null,Uc.apply($c,arguments)}function Vc(e,t,n,r,l,i,o,u,a){if(Bc.apply(this,arguments),En){if(En){var c=Mr;En=!1,Mr=null}else throw Error(y(198));Rr||(Rr=!0,ai=c)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _a(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ko(e){if(Mt(e)!==e)throw Error(y(188))}function Hc(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Ko(l),e;if(i===r)return Ko(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Sa(e){return e=Hc(e),e!==null?Ea(e):null}function Ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ea(e);if(t!==null)return t;e=e.sibling}return null}var Na=ye.unstable_scheduleCallback,Go=ye.unstable_cancelCallback,Wc=ye.unstable_shouldYield,Qc=ye.unstable_requestPaint,Q=ye.unstable_now,Kc=ye.unstable_getCurrentPriorityLevel,Zi=ye.unstable_ImmediatePriority,Ca=ye.unstable_UserBlockingPriority,Ir=ye.unstable_NormalPriority,Gc=ye.unstable_LowPriority,ja=ye.unstable_IdlePriority,nl=null,Ue=null;function Yc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Jc,Xc=Math.log,Zc=Math.LN2;function Jc(e){return e>>>=0,e===0?32:31-(Xc(e)/Zc|0)|0}var or=64,ur=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=kn(u):(i&=o,i!==0&&(r=kn(i)))}else o=n&~l,o!==0?r=kn(o):i!==0&&(r=kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Me(i),u=1<<o,a=l[o];a===-1?(!(u&n)||u&r)&&(l[o]=qc(u,t)):a<=t&&(e.expiredLanes|=u),i&=~u}}function si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function za(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function ef(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Ji(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function Pa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ta,qi,La,Ma,Ra,ci=!1,ar=[],lt=null,it=null,ot=null,On=new Map,Dn=new Map,et=[],tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yo(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function pn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qn(t),t!==null&&qi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function nf(e,t,n,r,l){switch(t){case"focusin":return lt=pn(lt,e,t,n,r,l),!0;case"dragenter":return it=pn(it,e,t,n,r,l),!0;case"mouseover":return ot=pn(ot,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return On.set(i,pn(On.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Dn.set(i,pn(Dn.get(i)||null,e,t,n,r,l)),!0}return!1}function Ia(e){var t=kt(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=_a(n),t!==null){e.blockedOn=t,Ra(e.priority,function(){La(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ii=r,n.target.dispatchEvent(r),ii=null}else return t=qn(n),t!==null&&qi(t),e.blockedOn=n,!1;t.shift()}return!0}function Xo(e,t,n){kr(e)&&n.delete(t)}function rf(){ci=!1,lt!==null&&kr(lt)&&(lt=null),it!==null&&kr(it)&&(it=null),ot!==null&&kr(ot)&&(ot=null),On.forEach(Xo),Dn.forEach(Xo)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,rf)))}function Fn(e){function t(l){return mn(l,e)}if(0<ar.length){mn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&mn(lt,e),it!==null&&mn(it,e),ot!==null&&mn(ot,e),On.forEach(t),Dn.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Ia(n),n.blockedOn===null&&et.shift()}var Xt=Ze.ReactCurrentBatchConfig,Dr=!0;function lf(e,t,n,r){var l=R,i=Xt.transition;Xt.transition=null;try{R=1,bi(e,t,n,r)}finally{R=l,Xt.transition=i}}function of(e,t,n,r){var l=R,i=Xt.transition;Xt.transition=null;try{R=4,bi(e,t,n,r)}finally{R=l,Xt.transition=i}}function bi(e,t,n,r){if(Dr){var l=fi(e,t,n,r);if(l===null)Ol(e,t,r,Fr,n),Yo(e,r);else if(nf(l,e,t,n,r))r.stopPropagation();else if(Yo(e,r),t&4&&-1<tf.indexOf(e)){for(;l!==null;){var i=qn(l);if(i!==null&&Ta(i),i=fi(e,t,n,r),i===null&&Ol(e,t,r,Fr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Fr=null;function fi(e,t,n,r){if(Fr=null,e=Xi(r),e=kt(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_a(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function Oa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kc()){case Zi:return 1;case Ca:return 4;case Ir:case Gc:return 16;case ja:return 536870912;default:return 16}default:return 16}}var nt=null,eo=null,_r=null;function Da(){if(_r)return _r;var e,t=eo,n=t.length,r,l="value"in nt?nt.value:nt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return _r=l.slice(e,1<r?1-r:void 0)}function Sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Zo(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sr:Zo,this.isPropagationStopped=Zo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=we(un),Jn=B({},un,{view:0,detail:0}),uf=we(Jn),Cl,jl,hn,rl=B({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Cl=e.screenX-hn.screenX,jl=e.screenY-hn.screenY):jl=Cl=0,hn=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),Jo=we(rl),af=B({},rl,{dataTransfer:0}),sf=we(af),cf=B({},Jn,{relatedTarget:0}),zl=we(cf),ff=B({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),df=we(ff),pf=B({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mf=we(pf),hf=B({},un,{data:0}),qo=we(hf),vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yf[e])?!!t[e]:!1}function no(){return xf}var wf=B({},Jn,{key:function(e){if(e.key){var t=vf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kf=we(wf),_f=B({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bo=we(_f),Sf=B({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),Ef=we(Sf),Nf=B({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cf=we(Nf),jf=B({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zf=we(jf),Pf=[9,13,27,32],ro=Ke&&"CompositionEvent"in window,Nn=null;Ke&&"documentMode"in document&&(Nn=document.documentMode);var Tf=Ke&&"TextEvent"in window&&!Nn,Fa=Ke&&(!ro||Nn&&8<Nn&&11>=Nn),eu=" ",tu=!1;function Aa(e,t){switch(e){case"keyup":return Pf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ua(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dt=!1;function Lf(e,t){switch(e){case"compositionend":return Ua(t);case"keypress":return t.which!==32?null:(tu=!0,eu);case"textInput":return e=t.data,e===eu&&tu?null:e;default:return null}}function Mf(e,t){if(Dt)return e==="compositionend"||!ro&&Aa(e,t)?(e=Da(),_r=eo=nt=null,Dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fa&&t.locale!=="ko"?null:t.data;default:return null}}var Rf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rf[e.type]:t==="textarea"}function $a(e,t,n,r){ga(r),t=Ar(t,"onChange"),0<t.length&&(n=new to("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cn=null,An=null;function If(e){Ja(e,0)}function ll(e){var t=Ut(e);if(ca(t))return e}function Of(e,t){if(e==="change")return t}var Ba=!1;if(Ke){var Pl;if(Ke){var Tl="oninput"in document;if(!Tl){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),Tl=typeof ru.oninput=="function"}Pl=Tl}else Pl=!1;Ba=Pl&&(!document.documentMode||9<document.documentMode)}function lu(){Cn&&(Cn.detachEvent("onpropertychange",Va),An=Cn=null)}function Va(e){if(e.propertyName==="value"&&ll(An)){var t=[];$a(t,An,e,Xi(e)),ka(If,t)}}function Df(e,t,n){e==="focusin"?(lu(),Cn=t,An=n,Cn.attachEvent("onpropertychange",Va)):e==="focusout"&&lu()}function Ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(An)}function Af(e,t){if(e==="click")return ll(t)}function Uf(e,t){if(e==="input"||e==="change")return ll(t)}function $f(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:$f;function Un(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Gl.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var n=iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iu(n)}}function Ha(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ha(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wa(){for(var e=window,t=Lr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bf(e){var t=Wa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ha(n.ownerDocument.documentElement,n)){if(r!==null&&lo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ou(n,i);var o=ou(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vf=Ke&&"documentMode"in document&&11>=document.documentMode,Ft=null,di=null,jn=null,pi=!1;function uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pi||Ft==null||Ft!==Lr(r)||(r=Ft,"selectionStart"in r&&lo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&Un(jn,r)||(jn=r,r=Ar(di,"onSelect"),0<r.length&&(t=new to("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var At={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Ll={},Qa={};Ke&&(Qa=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function il(e){if(Ll[e])return Ll[e];if(!At[e])return e;var t=At[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qa)return Ll[e]=t[n];return e}var Ka=il("animationend"),Ga=il("animationiteration"),Ya=il("animationstart"),Xa=il("transitionend"),Za=new Map,au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){Za.set(e,t),Lt(t,[e])}for(var Ml=0;Ml<au.length;Ml++){var Rl=au[Ml],Hf=Rl.toLowerCase(),Wf=Rl[0].toUpperCase()+Rl.slice(1);mt(Hf,"on"+Wf)}mt(Ka,"onAnimationEnd");mt(Ga,"onAnimationIteration");mt(Ya,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(Xa,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vc(r,t,void 0,e),e.currentTarget=null}function Ja(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==i&&l.isPropagationStopped())break e;su(l,u,c),i=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,c=u.currentTarget,u=u.listener,a!==i&&l.isPropagationStopped())break e;su(l,u,c),i=a}}}if(Rr)throw e=ai,Rr=!1,ai=null,e}function O(e,t){var n=t[yi];n===void 0&&(n=t[yi]=new Set);var r=e+"__bubble";n.has(r)||(qa(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),qa(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[fr]){e[fr]=!0,ia.forEach(function(n){n!=="selectionchange"&&(Qf.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Il("selectionchange",!1,t))}}function qa(e,t,n,r){switch(Oa(t)){case 1:var l=lf;break;case 4:l=of;break;default:l=bi}n=l.bind(null,t,n,e),l=void 0,!ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;u!==null;){if(o=kt(u),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}u=u.parentNode}}r=r.return}ka(function(){var c=i,v=Xi(n),h=[];e:{var m=Za.get(e);if(m!==void 0){var x=to,w=e;switch(e){case"keypress":if(Sr(n)===0)break e;case"keydown":case"keyup":x=kf;break;case"focusin":w="focus",x=zl;break;case"focusout":w="blur",x=zl;break;case"beforeblur":case"afterblur":x=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ef;break;case Ka:case Ga:case Ya:x=df;break;case Xa:x=Cf;break;case"scroll":x=uf;break;case"wheel":x=zf;break;case"copy":case"cut":case"paste":x=mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=bo}var k=(t&4)!==0,F=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var s=c,p;s!==null;){p=s;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=In(s,f),g!=null&&k.push(Bn(s,g,p)))),F)break;s=s.return}0<k.length&&(m=new x(m,w,null,n,v),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==ii&&(w=n.relatedTarget||n.fromElement)&&(kt(w)||w[Ge]))break e;if((x||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=c,w=w?kt(w):null,w!==null&&(F=Mt(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=c),x!==w)){if(k=Jo,g="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(k=bo,g="onPointerLeave",f="onPointerEnter",s="pointer"),F=x==null?m:Ut(x),p=w==null?m:Ut(w),m=new k(g,s+"leave",x,n,v),m.target=F,m.relatedTarget=p,g=null,kt(v)===c&&(k=new k(f,s+"enter",w,n,v),k.target=p,k.relatedTarget=F,g=k),F=g,x&&w)t:{for(k=x,f=w,s=0,p=k;p;p=Rt(p))s++;for(p=0,g=f;g;g=Rt(g))p++;for(;0<s-p;)k=Rt(k),s--;for(;0<p-s;)f=Rt(f),p--;for(;s--;){if(k===f||f!==null&&k===f.alternate)break t;k=Rt(k),f=Rt(f)}k=null}else k=null;x!==null&&cu(h,m,x,k,!1),w!==null&&F!==null&&cu(h,F,w,k,!0)}}e:{if(m=c?Ut(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var S=Of;else if(nu(m))if(Ba)S=Uf;else{S=Ff;var N=Df}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Af);if(S&&(S=S(e,c))){$a(h,S,n,v);break e}N&&N(e,m,c),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&ei(m,"number",m.value)}switch(N=c?Ut(c):window,e){case"focusin":(nu(N)||N.contentEditable==="true")&&(Ft=N,di=c,jn=null);break;case"focusout":jn=di=Ft=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,uu(h,n,v);break;case"selectionchange":if(Vf)break;case"keydown":case"keyup":uu(h,n,v)}var C;if(ro)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Dt?Aa(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Fa&&n.locale!=="ko"&&(Dt||j!=="onCompositionStart"?j==="onCompositionEnd"&&Dt&&(C=Da()):(nt=v,eo="value"in nt?nt.value:nt.textContent,Dt=!0)),N=Ar(c,j),0<N.length&&(j=new qo(j,e,null,n,v),h.push({event:j,listeners:N}),C?j.data=C:(C=Ua(n),C!==null&&(j.data=C)))),(C=Tf?Lf(e,n):Mf(e,n))&&(c=Ar(c,"onBeforeInput"),0<c.length&&(v=new qo("onBeforeInput","beforeinput",null,n,v),h.push({event:v,listeners:c}),v.data=C))}Ja(h,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ar(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=In(e,n),i!=null&&r.unshift(Bn(e,i,l)),i=In(e,t),i!=null&&r.push(Bn(e,i,l))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,l?(a=In(n,i),a!=null&&o.unshift(Bn(n,a,u))):l||(a=In(n,i),a!=null&&o.push(Bn(n,a,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Kf=/\r\n?/g,Gf=/\u0000|\uFFFD/g;function fu(e){return(typeof e=="string"?e:""+e).replace(Kf,`
`).replace(Gf,"")}function dr(e,t,n){if(t=fu(t),fu(e)!==t&&n)throw Error(y(425))}function Ur(){}var mi=null,hi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,Yf=typeof clearTimeout=="function"?clearTimeout:void 0,du=typeof Promise=="function"?Promise:void 0,Xf=typeof queueMicrotask=="function"?queueMicrotask:typeof du<"u"?function(e){return du.resolve(null).then(e).catch(Zf)}:gi;function Zf(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Fn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Fe="__reactFiber$"+an,Vn="__reactProps$"+an,Ge="__reactContainer$"+an,yi="__reactEvents$"+an,Jf="__reactListeners$"+an,qf="__reactHandles$"+an;function kt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pu(e);e!==null;){if(n=e[Fe])return n;e=pu(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Fe]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ol(e){return e[Vn]||null}var xi=[],$t=-1;function ht(e){return{current:e}}function D(e){0>$t||(e.current=xi[$t],xi[$t]=null,$t--)}function I(e,t){$t++,xi[$t]=e.current,e.current=t}var pt={},ie=ht(pt),de=ht(!1),Ct=pt;function bt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function $r(){D(de),D(ie)}function mu(e,t,n){if(ie.current!==pt)throw Error(y(168));I(ie,t),I(de,n)}function ba(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Oc(e)||"Unknown",l));return B({},n,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Ct=ie.current,I(ie,e),I(de,de.current),!0}function hu(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=ba(e,t,Ct),r.__reactInternalMemoizedMergedChildContext=e,D(de),D(ie),I(ie,e)):D(de),I(de,n)}var Ve=null,ul=!1,Fl=!1;function es(e){Ve===null?Ve=[e]:Ve.push(e)}function bf(e){ul=!0,es(e)}function vt(){if(!Fl&&Ve!==null){Fl=!0;var e=0,t=R;try{var n=Ve;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,ul=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Na(Zi,vt),l}finally{R=t,Fl=!1}}return null}var Bt=[],Vt=0,Vr=null,Hr=0,ke=[],_e=0,jt=null,He=1,We="";function xt(e,t){Bt[Vt++]=Hr,Bt[Vt++]=Vr,Vr=e,Hr=t}function ts(e,t,n){ke[_e++]=He,ke[_e++]=We,ke[_e++]=jt,jt=e;var r=He;e=We;var l=32-Me(r)-1;r&=~(1<<l),n+=1;var i=32-Me(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,He=1<<32-Me(t)+l|n<<l|r,We=i+e}else He=1<<i|n<<l|r,We=e}function io(e){e.return!==null&&(xt(e,1),ts(e,1,0))}function oo(e){for(;e===Vr;)Vr=Bt[--Vt],Bt[Vt]=null,Hr=Bt[--Vt],Bt[Vt]=null;for(;e===jt;)jt=ke[--_e],ke[_e]=null,We=ke[--_e],ke[_e]=null,He=ke[--_e],ke[_e]=null}var ge=null,ve=null,A=!1,Le=null;function ns(e,t){var n=Se(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,ve=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:He,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Se(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,ve=null,!0):!1;default:return!1}}function wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(A){var t=ve;if(t){var n=t;if(!vu(e,t)){if(wi(e))throw Error(y(418));t=ut(n.nextSibling);var r=ge;t&&vu(e,t)?ns(r,n):(e.flags=e.flags&-4097|2,A=!1,ge=e)}}else{if(wi(e))throw Error(y(418));e.flags=e.flags&-4097|2,A=!1,ge=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!A)return gu(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=ve)){if(wi(e))throw rs(),Error(y(418));for(;t;)ns(e,t),t=ut(t.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ge?ut(e.stateNode.nextSibling):null;return!0}function rs(){for(var e=ve;e;)e=ut(e.nextSibling)}function en(){ve=ge=null,A=!1}function uo(e){Le===null?Le=[e]:Le.push(e)}var ed=Ze.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function ls(e){function t(f,s){if(e){var p=f.deletions;p===null?(f.deletions=[s],f.flags|=16):p.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function l(f,s){return f=ft(f,s),f.index=0,f.sibling=null,f}function i(f,s,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<s?(f.flags|=2,s):p):(f.flags|=2,s)):(f.flags|=1048576,s)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,s,p,g){return s===null||s.tag!==6?(s=Wl(p,f.mode,g),s.return=f,s):(s=l(s,p),s.return=f,s)}function a(f,s,p,g){var S=p.type;return S===Ot?v(f,s,p.props.children,g,p.key):s!==null&&(s.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&yu(S)===s.type)?(g=l(s,p.props),g.ref=vn(f,s,p),g.return=f,g):(g=Tr(p.type,p.key,p.props,null,f.mode,g),g.ref=vn(f,s,p),g.return=f,g)}function c(f,s,p,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=Ql(p,f.mode,g),s.return=f,s):(s=l(s,p.children||[]),s.return=f,s)}function v(f,s,p,g,S){return s===null||s.tag!==7?(s=Nt(p,f.mode,g,S),s.return=f,s):(s=l(s,p),s.return=f,s)}function h(f,s,p){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Wl(""+s,f.mode,p),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case rr:return p=Tr(s.type,s.key,s.props,null,f.mode,p),p.ref=vn(f,null,s),p.return=f,p;case It:return s=Ql(s,f.mode,p),s.return=f,s;case qe:var g=s._init;return h(f,g(s._payload),p)}if(wn(s)||fn(s))return s=Nt(s,f.mode,p,null),s.return=f,s;mr(f,s)}return null}function m(f,s,p,g){var S=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:u(f,s,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:return p.key===S?a(f,s,p,g):null;case It:return p.key===S?c(f,s,p,g):null;case qe:return S=p._init,m(f,s,S(p._payload),g)}if(wn(p)||fn(p))return S!==null?null:v(f,s,p,g,null);mr(f,p)}return null}function x(f,s,p,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,u(s,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rr:return f=f.get(g.key===null?p:g.key)||null,a(s,f,g,S);case It:return f=f.get(g.key===null?p:g.key)||null,c(s,f,g,S);case qe:var N=g._init;return x(f,s,p,N(g._payload),S)}if(wn(g)||fn(g))return f=f.get(p)||null,v(s,f,g,S,null);mr(s,g)}return null}function w(f,s,p,g){for(var S=null,N=null,C=s,j=s=0,H=null;C!==null&&j<p.length;j++){C.index>j?(H=C,C=null):H=C.sibling;var L=m(f,C,p[j],g);if(L===null){C===null&&(C=H);break}e&&C&&L.alternate===null&&t(f,C),s=i(L,s,j),N===null?S=L:N.sibling=L,N=L,C=H}if(j===p.length)return n(f,C),A&&xt(f,j),S;if(C===null){for(;j<p.length;j++)C=h(f,p[j],g),C!==null&&(s=i(C,s,j),N===null?S=C:N.sibling=C,N=C);return A&&xt(f,j),S}for(C=r(f,C);j<p.length;j++)H=x(C,f,j,p[j],g),H!==null&&(e&&H.alternate!==null&&C.delete(H.key===null?j:H.key),s=i(H,s,j),N===null?S=H:N.sibling=H,N=H);return e&&C.forEach(function(je){return t(f,je)}),A&&xt(f,j),S}function k(f,s,p,g){var S=fn(p);if(typeof S!="function")throw Error(y(150));if(p=S.call(p),p==null)throw Error(y(151));for(var N=S=null,C=s,j=s=0,H=null,L=p.next();C!==null&&!L.done;j++,L=p.next()){C.index>j?(H=C,C=null):H=C.sibling;var je=m(f,C,L.value,g);if(je===null){C===null&&(C=H);break}e&&C&&je.alternate===null&&t(f,C),s=i(je,s,j),N===null?S=je:N.sibling=je,N=je,C=H}if(L.done)return n(f,C),A&&xt(f,j),S;if(C===null){for(;!L.done;j++,L=p.next())L=h(f,L.value,g),L!==null&&(s=i(L,s,j),N===null?S=L:N.sibling=L,N=L);return A&&xt(f,j),S}for(C=r(f,C);!L.done;j++,L=p.next())L=x(C,f,j,L.value,g),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?j:L.key),s=i(L,s,j),N===null?S=L:N.sibling=L,N=L);return e&&C.forEach(function(sn){return t(f,sn)}),A&&xt(f,j),S}function F(f,s,p,g){if(typeof p=="object"&&p!==null&&p.type===Ot&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:e:{for(var S=p.key,N=s;N!==null;){if(N.key===S){if(S=p.type,S===Ot){if(N.tag===7){n(f,N.sibling),s=l(N,p.props.children),s.return=f,f=s;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&yu(S)===N.type){n(f,N.sibling),s=l(N,p.props),s.ref=vn(f,N,p),s.return=f,f=s;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===Ot?(s=Nt(p.props.children,f.mode,g,p.key),s.return=f,f=s):(g=Tr(p.type,p.key,p.props,null,f.mode,g),g.ref=vn(f,s,p),g.return=f,f=g)}return o(f);case It:e:{for(N=p.key;s!==null;){if(s.key===N)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){n(f,s.sibling),s=l(s,p.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=Ql(p,f.mode,g),s.return=f,f=s}return o(f);case qe:return N=p._init,F(f,s,N(p._payload),g)}if(wn(p))return w(f,s,p,g);if(fn(p))return k(f,s,p,g);mr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,s!==null&&s.tag===6?(n(f,s.sibling),s=l(s,p),s.return=f,f=s):(n(f,s),s=Wl(p,f.mode,g),s.return=f,f=s),o(f)):n(f,s)}return F}var tn=ls(!0),is=ls(!1),Wr=ht(null),Qr=null,Ht=null,ao=null;function so(){ao=Ht=Qr=null}function co(e){var t=Wr.current;D(Wr),e._currentValue=t}function _i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Qr=e,ao=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Qr===null)throw Error(y(308));Ht=e,Qr.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var _t=null;function fo(e){_t===null?_t=[e]:_t.push(e)}function os(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,fo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var be=!1;function po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,fo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ji(e,n)}}function xu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var l=e.updateQueue;be=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==o&&(u===null?v.firstBaseUpdate=c:u.next=c,v.lastBaseUpdate=a))}if(i!==null){var h=l.baseState;o=0,v=c=a=null,u=i;do{var m=u.lane,x=u.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,k=u;switch(m=t,x=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(x,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(x,h,m):w,m==null)break e;h=B({},h,m);break e;case 2:be=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[u]:m.push(u))}else x={eventTime:x,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(c=v=x,a=h):v=v.next=x,o|=m;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(v===null&&(a=h),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=h}}function wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var bn={},$e=ht(bn),Hn=ht(bn),Wn=ht(bn);function St(e){if(e===bn)throw Error(y(174));return e}function mo(e,t){switch(I(Wn,t),I(Hn,e),I($e,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ni(t,e)}D($e),I($e,t)}function nn(){D($e),D(Hn),D(Wn)}function as(e){St(Wn.current);var t=St($e.current),n=ni(t,e.type);t!==n&&(I(Hn,e),I($e,n))}function ho(e){Hn.current===e&&(D($e),D(Hn))}var U=ht(0);function Gr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function vo(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Nr=Ze.ReactCurrentDispatcher,Ul=Ze.ReactCurrentBatchConfig,zt=0,$=null,G=null,Z=null,Yr=!1,zn=!1,Qn=0,td=0;function ne(){throw Error(y(321))}function go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function yo(e,t,n,r,l,i){if(zt=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nr.current=e===null||e.memoizedState===null?id:od,e=n(r,l),zn){i=0;do{if(zn=!1,Qn=0,25<=i)throw Error(y(301));i+=1,Z=G=null,t.updateQueue=null,Nr.current=ud,e=n(r,l)}while(zn)}if(Nr.current=Xr,t=G!==null&&G.next!==null,zt=0,Z=G=$=null,Yr=!1,t)throw Error(y(300));return e}function xo(){var e=Qn!==0;return Qn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?$.memoizedState=Z=e:Z=Z.next=e,Z}function Ce(){if(G===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=Z===null?$.memoizedState:Z.next;if(t!==null)Z=t,G=e;else{if(e===null)throw Error(y(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},Z===null?$.memoizedState=Z=e:Z=Z.next=e}return Z}function Kn(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,a=null,c=i;do{var v=c.lane;if((zt&v)===v)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=h,o=r):a=a.next=h,$.lanes|=v,Pt|=v}c=c.next}while(c!==null&&c!==i);a===null?o=r:a.next=u,Ie(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=Ce(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ie(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ss(){}function cs(e,t){var n=$,r=Ce(),l=t(),i=!Ie(r.memoizedState,l);if(i&&(r.memoizedState=l,fe=!0),r=r.queue,wo(ps.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Gn(9,ds.bind(null,n,r,l,t),void 0,null),J===null)throw Error(y(349));zt&30||fs(n,t,l)}return l}function fs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ds(e,t,n,r){t.value=n,t.getSnapshot=r,ms(t)&&hs(e)}function ps(e,t,n){return n(function(){ms(t)&&hs(e)})}function ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function hs(e){var t=Ye(e,1);t!==null&&Re(t,e,1,-1)}function ku(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=ld.bind(null,$,e),[t.memoizedState,e]}function Gn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vs(){return Ce().memoizedState}function Cr(e,t,n,r){var l=De();$.flags|=e,l.memoizedState=Gn(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=Ce();r=r===void 0?null:r;var i=void 0;if(G!==null){var o=G.memoizedState;if(i=o.destroy,r!==null&&go(r,o.deps)){l.memoizedState=Gn(t,n,i,r);return}}$.flags|=e,l.memoizedState=Gn(1|t,n,i,r)}function _u(e,t){return Cr(8390656,8,e,t)}function wo(e,t){return al(2048,8,e,t)}function gs(e,t){return al(4,2,e,t)}function ys(e,t){return al(4,4,e,t)}function xs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ws(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,xs.bind(null,t,e),n)}function ko(){}function ks(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ss(e,t,n){return zt&21?(Ie(n,t)||(n=za(),$.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function nd(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{R=n,Ul.transition=r}}function Es(){return Ce().memoizedState}function rd(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e))Cs(t,n);else if(n=os(e,t,n,r),n!==null){var l=ue();Re(n,e,r,l),js(n,t,r)}}function ld(e,t,n){var r=ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Cs(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,Ie(u,o)){var a=t.interleaved;a===null?(l.next=l,fo(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=os(e,t,l,r),n!==null&&(l=ue(),Re(n,e,r,l),js(n,t,r))}}function Ns(e){var t=e.alternate;return e===$||t!==null&&t===$}function Cs(e,t){zn=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function js(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ji(e,n)}}var Xr={readContext:Ne,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},id={readContext:Ne,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:_u,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,xs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rd.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:ku,useDebugValue:ko,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=ku(!1),t=e[0];return e=nd.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=De();if(A){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),J===null)throw Error(y(349));zt&30||fs(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,_u(ps.bind(null,r,i,e),[e]),r.flags|=2048,Gn(9,ds.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=De(),t=J.identifierPrefix;if(A){var n=We,r=He;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=td++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},od={readContext:Ne,useCallback:ks,useContext:Ne,useEffect:wo,useImperativeHandle:ws,useInsertionEffect:gs,useLayoutEffect:ys,useMemo:_s,useReducer:$l,useRef:vs,useState:function(){return $l(Kn)},useDebugValue:ko,useDeferredValue:function(e){var t=Ce();return Ss(t,G.memoizedState,e)},useTransition:function(){var e=$l(Kn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:ss,useSyncExternalStore:cs,useId:Es,unstable_isNewReconciler:!1},ud={readContext:Ne,useCallback:ks,useContext:Ne,useEffect:wo,useImperativeHandle:ws,useInsertionEffect:gs,useLayoutEffect:ys,useMemo:_s,useReducer:Bl,useRef:vs,useState:function(){return Bl(Kn)},useDebugValue:ko,useDeferredValue:function(e){var t=Ce();return G===null?t.memoizedState=e:Ss(t,G.memoizedState,e)},useTransition:function(){var e=Bl(Kn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:ss,useSyncExternalStore:cs,useId:Es,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Si(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ct(e),i=Qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Re(t,e,l,r),Er(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ct(e),i=Qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Re(t,e,l,r),Er(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ct(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(Re(t,e,r,n),Er(t,e,r))}};function Su(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function zs(e,t,n){var r=!1,l=pt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ne(i):(l=pe(t)?Ct:ie.current,r=t.contextTypes,i=(r=r!=null)?bt(e,l):pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function Ei(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},po(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ne(i):(i=pe(t)?Ct:ie.current,l.context=bt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Si(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&sl.enqueueReplaceState(l,l.state,null),Kr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Ic(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ni(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function Ps(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Oi=r),Ni(e,t)},n}function Ts(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ni(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ni(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ad;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=_d.bind(null,e,t,n),t.then(e,e))}function Cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ju(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var sd=Ze.ReactCurrentOwner,fe=!1;function oe(e,t,n,r){t.child=e===null?is(t,null,n,r):tn(t,e.child,n,r)}function zu(e,t,n,r,l){n=n.render;var i=t.ref;return Zt(t,l),r=yo(e,t,n,r,i,l),n=xo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(A&&n&&io(t),t.flags|=1,oe(e,t,r,l),t.child)}function Pu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Po(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ls(e,t,i,r,l)):(e=Tr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ft(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ls(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Ci(e,t,n,r,l)}function Ms(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Qt,he),he|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Qt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,I(Qt,he),he|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,I(Qt,he),he|=r;return oe(e,t,l,n),t.child}function Rs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ci(e,t,n,r,l){var i=pe(n)?Ct:ie.current;return i=bt(t,i),Zt(t,l),n=yo(e,t,n,r,i,l),r=xo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(A&&r&&io(t),t.flags|=1,oe(e,t,n,l),t.child)}function Tu(e,t,n,r,l){if(pe(n)){var i=!0;Br(t)}else i=!1;if(Zt(t,l),t.stateNode===null)jr(e,t),zs(t,n,r),Ei(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=pe(n)?Ct:ie.current,c=bt(t,c));var v=n.getDerivedStateFromProps,h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==c)&&Eu(t,o,r,c),be=!1;var m=t.memoizedState;o.state=m,Kr(t,r,o,l),a=t.memoizedState,u!==r||m!==a||de.current||be?(typeof v=="function"&&(Si(t,n,v,r),a=t.memoizedState),(u=be||Su(t,n,u,r,m,a,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,us(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Pe(t.type,u),o.props=c,h=t.pendingProps,m=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ne(a):(a=pe(n)?Ct:ie.current,a=bt(t,a));var x=n.getDerivedStateFromProps;(v=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==h||m!==a)&&Eu(t,o,r,a),be=!1,m=t.memoizedState,o.state=m,Kr(t,r,o,l);var w=t.memoizedState;u!==h||m!==w||de.current||be?(typeof x=="function"&&(Si(t,n,x,r),w=t.memoizedState),(c=be||Su(t,n,c,r,m,w,a)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ji(e,t,n,r,i,l)}function ji(e,t,n,r,l,i){Rs(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&hu(t,n,!1),Xe(e,t,i);r=t.stateNode,sd.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,u,i)):oe(e,t,u,i),t.memoizedState=r.state,l&&hu(t,n,!0),t.child}function Is(e){var t=e.stateNode;t.pendingContext?mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mu(e,t.context,!1),mo(e,t.containerInfo)}function Lu(e,t,n,r,l){return en(),uo(l),t.flags|=256,oe(e,t,n,r),t.child}var zi={dehydrated:null,treeContext:null,retryLane:0};function Pi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Os(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),I(U,l&1),e===null)return ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=dl(o,r,0,null),e=Nt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Pi(n),t.memoizedState=zi,e):_o(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return cd(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ft(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=ft(u,i):(i=Nt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Pi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=zi,r}return i=e.child,e=i.sibling,r=ft(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _o(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&uo(r),tn(t,e.child,null,n),e=_o(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cd(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(y(422))),hr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=dl({mode:"visible",children:r.children},l,0,null),i=Nt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=Pi(o),t.memoizedState=zi,i);if(!(t.mode&1))return hr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(y(419)),r=Vl(i,r,void 0),hr(e,t,o,r)}if(u=(o&e.childLanes)!==0,fe||u){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),Re(r,e,l,-1))}return zo(),r=Vl(Error(y(421))),hr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Sd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ve=ut(l.nextSibling),ge=t,A=!0,Le=null,e!==null&&(ke[_e++]=He,ke[_e++]=We,ke[_e++]=jt,He=e.id,We=e.overflow,jt=t),t=_o(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_i(e.return,t,n)}function Hl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Ds(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Gr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Hl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Gr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Hl(t,!0,n,null,i);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fd(e,t,n){switch(t.tag){case 3:Is(t),en();break;case 5:as(t);break;case 1:pe(t.type)&&Br(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;I(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Os(e,t,n):(I(U,U.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);I(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ds(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Ms(e,t,n)}return Xe(e,t,n)}var Fs,Ti,As,Us;Fs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ti=function(){};As=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,St($e.current);var i=null;switch(n){case"input":l=ql(e,l),r=ql(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=ti(e,l),r=ti(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ri(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&O("scroll",e),i||u===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Us=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dd(e,t,n){var r=t.pendingProps;switch(oo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&$r(),re(t),null;case 3:return r=t.stateNode,nn(),D(de),D(ie),vo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Ai(Le),Le=null))),Ti(e,t),re(t),null;case 5:ho(t);var l=St(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)As(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return re(t),null}if(e=St($e.current),pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fe]=t,r[Vn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<_n.length;l++)O(_n[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Bo(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Ho(r,i),O("invalid",r)}ri(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,u,e),l=["children",""+u]):Mn.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":lr(r),Vo(r,i,!0);break;case"textarea":lr(r),Wo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Fe]=t,e[Vn]=r,Fs(e,t,!1,!1),t.stateNode=e;e:{switch(o=li(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<_n.length;l++)O(_n[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":Bo(e,r),l=ql(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),O("invalid",e);break;case"textarea":Ho(e,r),l=ti(e,r),O("invalid",e);break;default:l=r}ri(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?va(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ma(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Rn(e,a):typeof a=="number"&&Rn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&O("scroll",e):a!=null&&Qi(e,i,a,o))}switch(n){case"input":lr(e),Vo(e,r,!1);break;case"textarea":lr(e),Wo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Kt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Us(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=St(Wn.current),St($e.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(i=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return re(t),null;case 13:if(D(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ve!==null&&t.mode&1&&!(t.flags&128))rs(),en(),t.flags|=98560,i=!1;else if(i=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Fe]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),i=!1}else Le!==null&&(Ai(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?Y===0&&(Y=3):zo())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return nn(),Ti(e,t),e===null&&$n(t.stateNode.containerInfo),re(t),null;case 10:return co(t.type._context),re(t),null;case 17:return pe(t.type)&&$r(),re(t),null;case 19:if(D(U),i=t.memoizedState,i===null)return re(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)gn(i,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Gr(e),o!==null){for(t.flags|=128,gn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>ln&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Gr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!A)return re(t),null}else 2*Q()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=U.current,I(U,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return jo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function pd(e,t){switch(oo(t),t.tag){case 1:return pe(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),D(de),D(ie),vo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ho(t),null;case 13:if(D(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(U),null;case 4:return nn(),null;case 10:return co(t.type._context),null;case 22:case 23:return jo(),null;case 24:return null;default:return null}}var vr=!1,le=!1,md=typeof WeakSet=="function"?WeakSet:Set,_=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Li(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ru=!1;function hd(e,t){if(mi=Dr,e=Wa(),lo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,a=-1,c=0,v=0,h=e,m=null;t:for(;;){for(var x;h!==n||l!==0&&h.nodeType!==3||(u=o+l),h!==i||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++c===l&&(u=o),m===i&&++v===r&&(a=o),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(hi={focusedElem:e,selectionRange:n},Dr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,F=w.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Pe(t.type,k),F);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){V(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return w=Ru,Ru=!1,w}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Li(t,n,i)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $s(e){var t=e.alternate;t!==null&&(e.alternate=null,$s(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Vn],delete t[yi],delete t[Jf],delete t[qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bs(e){return e.tag===5||e.tag===3||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}function Ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}var q=null,Te=!1;function Je(e,t,n){for(n=n.child;n!==null;)Vs(e,t,n),n=n.sibling}function Vs(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:le||Wt(n,t);case 6:var r=q,l=Te;q=null,Je(e,t,n),q=r,Te=l,q!==null&&(Te?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Te?(e=q,n=n.stateNode,e.nodeType===8?Dl(e.parentNode,n):e.nodeType===1&&Dl(e,n),Fn(e)):Dl(q,n.stateNode));break;case 4:r=q,l=Te,q=n.stateNode.containerInfo,Te=!0,Je(e,t,n),q=r,Te=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Li(n,t,o),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!le&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){V(n,t,u)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Je(e,t,n),le=r):Je(e,t,n);break;default:Je(e,t,n)}}function Ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new md),t.forEach(function(r){var l=Ed.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:q=u.stateNode,Te=!1;break e;case 3:q=u.stateNode.containerInfo,Te=!0;break e;case 4:q=u.stateNode.containerInfo,Te=!0;break e}u=u.return}if(q===null)throw Error(y(160));Vs(i,o,l),q=null,Te=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){V(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hs(t,e),t=t.sibling}function Hs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Oe(e),r&4){try{Pn(3,e,e.return),cl(3,e)}catch(k){V(e,e.return,k)}try{Pn(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:ze(t,e),Oe(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(ze(t,e),Oe(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var l=e.stateNode;try{Rn(l,"")}catch(k){V(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&fa(l,i),li(u,o);var c=li(u,i);for(o=0;o<a.length;o+=2){var v=a[o],h=a[o+1];v==="style"?va(l,h):v==="dangerouslySetInnerHTML"?ma(l,h):v==="children"?Rn(l,h):Qi(l,v,h,c)}switch(u){case"input":bl(l,i);break;case"textarea":da(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Kt(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Kt(l,!!i.multiple,i.defaultValue,!0):Kt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Vn]=i}catch(k){V(e,e.return,k)}}break;case 6:if(ze(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){V(e,e.return,k)}}break;case 3:if(ze(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:ze(t,e),Oe(e);break;case 13:ze(t,e),Oe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(No=Q())),r&4&&Ou(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(le=(c=le)||v,ze(t,e),le=c):ze(t,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(_=e,v=e.child;v!==null;){for(h=_=v;_!==null;){switch(m=_,x=m.child,m.tag){case 0:case 11:case 14:case 15:Pn(4,m,m.return);break;case 1:Wt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){V(r,n,k)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){Fu(h);continue}}x!==null?(x.return=m,_=x):Fu(h)}v=v.sibling}e:for(v=null,h=e;;){if(h.tag===5){if(v===null){v=h;try{l=h.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=ha("display",o))}catch(k){V(e,e.return,k)}}}else if(h.tag===6){if(v===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){V(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;v===h&&(v=null),h=h.return}v===h&&(v=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ze(t,e),Oe(e),r&4&&Ou(e);break;case 21:break;default:ze(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bs(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Rn(l,""),r.flags&=-33);var i=Iu(e);Ii(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Iu(e);Ri(e,u,o);break;default:throw Error(y(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vd(e,t,n){_=e,Ws(e)}function Ws(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var l=_,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||vr;if(!o){var u=l.alternate,a=u!==null&&u.memoizedState!==null||le;u=vr;var c=le;if(vr=o,(le=a)&&!c)for(_=l;_!==null;)o=_,a=o.child,o.tag===22&&o.memoizedState!==null?Au(l):a!==null?(a.return=o,_=a):Au(l);for(;i!==null;)_=i,Ws(i),i=i.sibling;_=l,vr=u,le=c}Du(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,_=i):Du(e)}}function Du(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wu(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var h=v.dehydrated;h!==null&&Fn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}le||t.flags&512&&Mi(t)}catch(m){V(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Fu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Au(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(a){V(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){V(t,l,a)}}var i=t.return;try{Mi(t)}catch(a){V(t,i,a)}break;case 5:var o=t.return;try{Mi(t)}catch(a){V(t,o,a)}}}catch(a){V(t,t.return,a)}if(t===e){_=null;break}var u=t.sibling;if(u!==null){u.return=t.return,_=u;break}_=t.return}}var gd=Math.ceil,Zr=Ze.ReactCurrentDispatcher,So=Ze.ReactCurrentOwner,Ee=Ze.ReactCurrentBatchConfig,M=0,J=null,K=null,b=0,he=0,Qt=ht(0),Y=0,Yn=null,Pt=0,fl=0,Eo=0,Tn=null,ce=null,No=0,ln=1/0,Be=null,Jr=!1,Oi=null,st=null,gr=!1,rt=null,qr=0,Ln=0,Di=null,zr=-1,Pr=0;function ue(){return M&6?Q():zr!==-1?zr:zr=Q()}function ct(e){return e.mode&1?M&2&&b!==0?b&-b:ed.transition!==null?(Pr===0&&(Pr=za()),Pr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Oa(e.type)),e):1}function Re(e,t,n,r){if(50<Ln)throw Ln=0,Di=null,Error(y(185));Zn(e,n,r),(!(M&2)||e!==J)&&(e===J&&(!(M&2)&&(fl|=n),Y===4&&tt(e,b)),me(e,r),n===1&&M===0&&!(t.mode&1)&&(ln=Q()+500,ul&&vt()))}function me(e,t){var n=e.callbackNode;bc(e,t);var r=Or(e,e===J?b:0);if(r===0)n!==null&&Go(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Go(n),t===1)e.tag===0?bf(Uu.bind(null,e)):es(Uu.bind(null,e)),Xf(function(){!(M&6)&&vt()}),n=null;else{switch(Pa(r)){case 1:n=Zi;break;case 4:n=Ca;break;case 16:n=Ir;break;case 536870912:n=ja;break;default:n=Ir}n=qs(n,Qs.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qs(e,t){if(zr=-1,Pr=0,M&6)throw Error(y(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Or(e,e===J?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=br(e,r);else{t=r;var l=M;M|=2;var i=Gs();(J!==e||b!==t)&&(Be=null,ln=Q()+500,Et(e,t));do try{wd();break}catch(u){Ks(e,u)}while(!0);so(),Zr.current=i,M=l,K!==null?t=0:(J=null,b=0,t=Y)}if(t!==0){if(t===2&&(l=si(e),l!==0&&(r=l,t=Fi(e,l))),t===1)throw n=Yn,Et(e,0),tt(e,r),me(e,Q()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!yd(l)&&(t=br(e,r),t===2&&(i=si(e),i!==0&&(r=i,t=Fi(e,i))),t===1))throw n=Yn,Et(e,0),tt(e,r),me(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:wt(e,ce,Be);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=No+500-Q(),10<t)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=gi(wt.bind(null,e,ce,Be),t);break}wt(e,ce,Be);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Me(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gd(r/1960))-r,10<r){e.timeoutHandle=gi(wt.bind(null,e,ce,Be),r);break}wt(e,ce,Be);break;case 5:wt(e,ce,Be);break;default:throw Error(y(329))}}}return me(e,Q()),e.callbackNode===n?Qs.bind(null,e):null}function Fi(e,t){var n=Tn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=br(e,t),e!==2&&(t=ce,ce=n,t!==null&&Ai(t)),e}function Ai(e){ce===null?ce=e:ce.push.apply(ce,e)}function yd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ie(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Eo,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function Uu(e){if(M&6)throw Error(y(327));Jt();var t=Or(e,0);if(!(t&1))return me(e,Q()),null;var n=br(e,t);if(e.tag!==0&&n===2){var r=si(e);r!==0&&(t=r,n=Fi(e,r))}if(n===1)throw n=Yn,Et(e,0),tt(e,t),me(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ce,Be),me(e,Q()),null}function Co(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(ln=Q()+500,ul&&vt())}}function Tt(e){rt!==null&&rt.tag===0&&!(M&6)&&Jt();var t=M;M|=1;var n=Ee.transition,r=R;try{if(Ee.transition=null,R=1,e)return e()}finally{R=r,Ee.transition=n,M=t,!(M&6)&&vt()}}function jo(){he=Qt.current,D(Qt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(oo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:nn(),D(de),D(ie),vo();break;case 5:ho(r);break;case 4:nn();break;case 13:D(U);break;case 19:D(U);break;case 10:co(r.type._context);break;case 22:case 23:jo()}n=n.return}if(J=e,K=e=ft(e.current,null),b=he=t,Y=0,Yn=null,Eo=fl=Pt=0,ce=Tn=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}_t=null}return e}function Ks(e,t){do{var n=K;try{if(so(),Nr.current=Xr,Yr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Yr=!1}if(zt=0,Z=G=$=null,zn=!1,Qn=0,So.current=null,n===null||n.return===null){Y=1,Yn=t,K=null;break}e:{var i=e,o=n.return,u=n,a=t;if(t=b,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,v=u,h=v.tag;if(!(v.mode&1)&&(h===0||h===11||h===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var x=Cu(o);if(x!==null){x.flags&=-257,ju(x,o,u,i,t),x.mode&1&&Nu(i,c,t),t=x,a=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(a),t.updateQueue=k}else w.add(a);break e}else{if(!(t&1)){Nu(i,c,t),zo();break e}a=Error(y(426))}}else if(A&&u.mode&1){var F=Cu(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),ju(F,o,u,i,t),uo(rn(a,u));break e}}i=a=rn(a,u),Y!==4&&(Y=2),Tn===null?Tn=[i]:Tn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ps(i,a,t);xu(i,f);break e;case 1:u=a;var s=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(st===null||!st.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Ts(i,u,t);xu(i,g);break e}}i=i.return}while(i!==null)}Xs(n)}catch(S){t=S,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Gs(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function zo(){(Y===0||Y===3||Y===2)&&(Y=4),J===null||!(Pt&268435455)&&!(fl&268435455)||tt(J,b)}function br(e,t){var n=M;M|=2;var r=Gs();(J!==e||b!==t)&&(Be=null,Et(e,t));do try{xd();break}catch(l){Ks(e,l)}while(!0);if(so(),M=n,Zr.current=r,K!==null)throw Error(y(261));return J=null,b=0,Y}function xd(){for(;K!==null;)Ys(K)}function wd(){for(;K!==null&&!Wc();)Ys(K)}function Ys(e){var t=Js(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Xs(e):K=t,So.current=null}function Xs(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pd(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,K=null;return}}else if(n=dd(n,t,he),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function wt(e,t,n){var r=R,l=Ee.transition;try{Ee.transition=null,R=1,kd(e,t,n,r)}finally{Ee.transition=l,R=r}return null}function kd(e,t,n,r){do Jt();while(rt!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ef(e,i),e===J&&(K=J=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,qs(Ir,function(){return Jt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var o=R;R=1;var u=M;M|=4,So.current=null,hd(e,n),Hs(n,e),Bf(hi),Dr=!!mi,hi=mi=null,e.current=n,vd(n),Qc(),M=u,R=o,Ee.transition=i}else e.current=n;if(gr&&(gr=!1,rt=e,qr=l),i=e.pendingLanes,i===0&&(st=null),Yc(n.stateNode),me(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=Oi,Oi=null,e;return qr&1&&e.tag!==0&&Jt(),i=e.pendingLanes,i&1?e===Di?Ln++:(Ln=0,Di=e):Ln=0,vt(),null}function Jt(){if(rt!==null){var e=Pa(qr),t=Ee.transition,n=R;try{if(Ee.transition=null,R=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,qr=0,M&6)throw Error(y(331));var l=M;for(M|=4,_=e.current;_!==null;){var i=_,o=i.child;if(_.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(_=c;_!==null;){var v=_;switch(v.tag){case 0:case 11:case 15:Pn(8,v,i)}var h=v.child;if(h!==null)h.return=v,_=h;else for(;_!==null;){v=_;var m=v.sibling,x=v.return;if($s(v),v===c){_=null;break}if(m!==null){m.return=x,_=m;break}_=x}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}_=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,_=o;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,_=f;break e}_=i.return}}var s=e.current;for(_=s;_!==null;){o=_;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,_=p;else e:for(o=s;_!==null;){if(u=_,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:cl(9,u)}}catch(S){V(u,u.return,S)}if(u===o){_=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,_=g;break e}_=u.return}}if(M=l,vt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{R=n,Ee.transition=t}}return!1}function $u(e,t,n){t=rn(n,t),t=Ps(e,t,1),e=at(e,t,1),t=ue(),e!==null&&(Zn(e,1,t),me(e,t))}function V(e,t,n){if(e.tag===3)$u(e,e,n);else for(;t!==null;){if(t.tag===3){$u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=rn(n,e),e=Ts(t,e,1),t=at(t,e,1),e=ue(),t!==null&&(Zn(t,1,e),me(t,e));break}}t=t.return}}function _d(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(b&n)===n&&(Y===4||Y===3&&(b&130023424)===b&&500>Q()-No?Et(e,0):Eo|=n),me(e,t)}function Zs(e,t){t===0&&(e.mode&1?(t=ur,ur<<=1,!(ur&130023424)&&(ur=4194304)):t=1);var n=ue();e=Ye(e,t),e!==null&&(Zn(e,t,n),me(e,n))}function Sd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zs(e,n)}function Ed(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Zs(e,n)}var Js;Js=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,fd(e,t,n);fe=!!(e.flags&131072)}else fe=!1,A&&t.flags&1048576&&ts(t,Hr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jr(e,t),e=t.pendingProps;var l=bt(t,ie.current);Zt(t,n),l=yo(null,t,r,e,l,n);var i=xo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(i=!0,Br(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,po(t),l.updater=sl,t.stateNode=l,l._reactInternals=t,Ei(t,r,e,n),t=ji(null,t,r,!0,i,n)):(t.tag=0,A&&i&&io(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Cd(r),e=Pe(r,e),l){case 0:t=Ci(null,t,r,e,n);break e;case 1:t=Tu(null,t,r,e,n);break e;case 11:t=zu(null,t,r,e,n);break e;case 14:t=Pu(null,t,r,Pe(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Ci(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Tu(e,t,r,l,n);case 3:e:{if(Is(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,us(e,t),Kr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rn(Error(y(423)),t),t=Lu(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(y(424)),t),t=Lu(e,t,r,n,l);break e}else for(ve=ut(t.stateNode.containerInfo.firstChild),ge=t,A=!0,Le=null,n=is(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Xe(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return as(t),e===null&&ki(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,vi(r,l)?o=null:i!==null&&vi(r,i)&&(t.flags|=32),Rs(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&ki(t),null;case 13:return Os(e,t,n);case 4:return mo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),zu(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,I(Wr,r._currentValue),r._currentValue=o,i!==null)if(Ie(i.value,o)){if(i.children===l.children&&!de.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Qe(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?a.next=a:(a.next=v.next,v.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),_i(i.return,n,t),u.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),_i(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zt(t,n),l=Ne(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Pe(r,t.pendingProps),l=Pe(r.type,l),Pu(e,t,r,l,n);case 15:return Ls(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),jr(e,t),t.tag=1,pe(r)?(e=!0,Br(t)):e=!1,Zt(t,n),zs(t,r,l),Ei(t,r,l,n),ji(null,t,r,!0,e,n);case 19:return Ds(e,t,n);case 22:return Ms(e,t,n)}throw Error(y(156,t.tag))};function qs(e,t){return Na(e,t)}function Nd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,n,r){return new Nd(e,t,n,r)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cd(e){if(typeof e=="function")return Po(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gi)return 11;if(e===Yi)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Se(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Po(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ot:return Nt(n.children,l,i,t);case Ki:o=8,l|=8;break;case Yl:return e=Se(12,n,t,l|2),e.elementType=Yl,e.lanes=i,e;case Xl:return e=Se(13,n,t,l),e.elementType=Xl,e.lanes=i,e;case Zl:return e=Se(19,n,t,l),e.elementType=Zl,e.lanes=i,e;case aa:return dl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oa:o=10;break e;case ua:o=9;break e;case Gi:o=11;break e;case Yi:o=14;break e;case qe:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Se(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Nt(e,t,n,r){return e=Se(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=Se(22,e,r,t),e.elementType=aa,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Se(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function To(e,t,n,r,l,i,o,u,a){return e=new jd(e,t,n,u,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Se(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},po(i),e}function zd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bs(e){if(!e)return pt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(pe(n))return ba(e,n,t)}return t}function ec(e,t,n,r,l,i,o,u,a){return e=To(n,r,!0,e,l,i,o,u,a),e.context=bs(null),n=e.current,r=ue(),l=ct(n),i=Qe(r,l),i.callback=t??null,at(n,i,l),e.current.lanes=l,Zn(e,l,r),me(e,r),e}function pl(e,t,n,r){var l=t.current,i=ue(),o=ct(l);return n=bs(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,o),e!==null&&(Re(e,l,o,i),Er(e,l,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lo(e,t){Bu(e,t),(e=e.alternate)&&Bu(e,t)}function Pd(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}ml.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));pl(e,t,null,null)};ml.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tt(function(){pl(null,e,null,null)}),t[Ge]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ma();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Ia(e)}};function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Td(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=el(o);i.call(c)}}var o=ec(t,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=o,e[Ge]=o.current,$n(e.nodeType===8?e.parentNode:e),Tt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=el(a);u.call(c)}}var a=To(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=a,e[Ge]=a.current,$n(e.nodeType===8?e.parentNode:e),Tt(function(){pl(t,a,n,r)}),a}function vl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var a=el(o);u.call(a)}}pl(t,o,e,l)}else o=Td(n,t,e,l,r);return el(o)}Ta=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(Ji(t,n|1),me(t,Q()),!(M&6)&&(ln=Q()+500,vt()))}break;case 13:Tt(function(){var r=Ye(e,1);if(r!==null){var l=ue();Re(r,e,1,l)}}),Lo(e,1)}};qi=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ue();Re(t,e,134217728,n)}Lo(e,134217728)}};La=function(e){if(e.tag===13){var t=ct(e),n=Ye(e,t);if(n!==null){var r=ue();Re(n,e,t,r)}Lo(e,t)}};Ma=function(){return R};Ra=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};oi=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(y(90));ca(r),bl(r,l)}}}break;case"textarea":da(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};xa=Co;wa=Tt;var Ld={usingClientEntryPoint:!1,Events:[qn,Ut,ol,ga,ya,Co]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Md={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sa(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Pd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{nl=yr.inject(Md),Ue=yr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ld;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ro(t))throw Error(y(200));return zd(e,t,null,n)};xe.createRoot=function(e,t){if(!Ro(e))throw Error(y(299));var n=!1,r="",l=tc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=To(e,1,!1,null,null,n,!1,r,l),e[Ge]=t.current,$n(e.nodeType===8?e.parentNode:e),new Mo(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Sa(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Tt(e)};xe.hydrate=function(e,t,n){if(!hl(t))throw Error(y(200));return vl(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Ro(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=tc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ec(t,null,e,1,n??null,l,!1,i,o),e[Ge]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ml(t)};xe.render=function(e,t,n){if(!hl(t))throw Error(y(200));return vl(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!hl(e))throw Error(y(40));return e._reactRootContainer?(Tt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};xe.unstable_batchedUpdates=Co;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return vl(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(e){console.error(e)}}nc(),na.exports=xe;var Rd=na.exports,Hu=Rd;Kl.createRoot=Hu.createRoot,Kl.hydrateRoot=Hu.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rc=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Od={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=Ae.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...u},a)=>Ae.createElement("svg",{ref:a,...Od,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:rc("lucide",l),...u},[...o.map(([c,v])=>Ae.createElement(c,v)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=(e,t)=>{const n=Ae.forwardRef(({className:r,...l},i)=>Ae.createElement(Dd,{ref:i,iconNode:t,className:rc(`lucide-${Id(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=te("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=te("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=te("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=te("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=te("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=te("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=te("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=te("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=te("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=te("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=te("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=te("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=te("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=te("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=te("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=te("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),ep=[{title:"Home",id:"home"},{title:"About",id:"about"},{title:"Service",id:"service"},{title:"Contact",id:"contact"}],tp=[{id:"hunza",title:"Hunza Valley",text:"Terraced orchards, glacial peaks, and villages irrigated by 2,000-year-old channels carved straight into the mountainside. Hunza is the valley every other itinerary is measured against.",mainImage:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",raisedImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNgSle7KSvQlrZGMPIOXLXNSCK4FWhXR_GBzZVBA42Q&s=10",reverse:!1},{id:"fairy-meadows",title:"Fairy Meadows",text:"A pine-forest plateau facing Nanga Parbat's sheer north wall — the ninth-highest mountain on earth, close enough that you can hear the seracs shift at night.",mainImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Kk0XzZHU1hhNbN7FeQ9MeWgB42nFwoAjkuvsXfYAOw&s=10",raisedImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBbVb7ZqhV6gPpUvWsZAoYGh-fTmH-aubIE9hTyZHdQ&s=10",reverse:!0},{id:"deosai",title:"Deosai Plains",text:"The second-highest plateau on earth: 4,100 square kilometers of wildflowers, brown bears, and a night sky with no light pollution for fifty kilometers in any direction.",mainImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXS9a7bkhTBthAP6Jy5Lu0_w70i0ikOb1PXOhvnCi9Mg&s=10",raisedImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMAXD1MfIAecK25V-bZ3roBsi3Temmq59ezUbyKNk8w&s=10",reverse:!1}],np=[{id:"hunza-trek",name:"Hunza Valley Trek",days:6,price:"PKR 45,000",image:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&q=80",text:"Village-to-village walking beneath Rakaposhi's north face."},{id:"fairy-meadows",name:"Fairy Meadows Base Camp",days:4,price:"PKR 38,000",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Kk0XzZHU1hhNbN7FeQ9MeWgB42nFwoAjkuvsXfYAOw&s=10",text:"A jeep track, a pine forest, and Nanga Parbat rising straight ahead."},{id:"swat-valley",name:"Swat Valley Discovery",days:3,price:"PKR 22,000",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNgSle7KSvQlrZGMPIOXLXNSCK4FWhXR_GBzZVBA42Q&s=10",text:"Terraced fields and Buddhist ruins in the Switzerland of Pakistan."},{id:"k2-basecamp",name:"K2 Base Camp Expedition",days:14,price:"PKR 165,000",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBbVb7ZqhV6gPpUvWsZAoYGh-fTmH-aubIE9hTyZHdQ&s=10",text:"The Baltoro glacier and four 8,000m peaks in one sightline."},{id:"deosai",name:"Deosai Plains Camping",days:3,price:"PKR 28,000",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXS9a7bkhTBthAP6Jy5Lu0_w70i0ikOb1PXOhvnCi9Mg&s=10",text:"Wildflowers, brown bears, and the darkest skies in the north."},{id:"chitral",name:"Chitral & Kalash Valleys",days:7,price:"PKR 52,000",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMAXD1MfIAecK25V-bZ3roBsi3Temmq59ezUbyKNk8w&s=10",text:"Cross the Lowari Pass into a centuries-old distinct culture."}],rp=[{id:"guiding",icon:$d,title:"Guided Trekking",text:"Local guides who grew up on these trails lead every route, at a pace set by the group."},{id:"permits",icon:Gd,title:"Permits & Documentation",text:"We handle trekking permits, national park fees, and any required local registrations."},{id:"gear",icon:Ad,title:"Gear Rental",text:"Tents, sleeping bags, and cold-weather gear available to rent so you can pack light."},{id:"planning",icon:Ud,title:"Custom Itineraries",text:"Tell us your dates and fitness level — we'll build a route that actually fits them."}];function Wu({onNavClick:e,orientation:t="row"}){return d.jsx("ul",{className:`nav-links nav-links--${t}`,children:ep.map(n=>d.jsx("li",{children:d.jsx("button",{onClick:()=>e(n.id),children:n.title})},n.id))})}function lp({onNavClick:e}){const[t,n]=Ae.useState(!1),r=l=>{n(!1),e(l)};return d.jsxs("header",{className:"navbar",children:[d.jsxs("div",{className:"navbar__inner",children:[d.jsxs("button",{className:"navbar__logo",onClick:()=>r("home"),children:["Kohsar",d.jsx("span",{children:"Journeys"})]}),d.jsxs("div",{className:"navbar__desktop",children:[d.jsx(Wu,{onNavClick:r,orientation:"row"}),d.jsx("button",{className:"btn btn--primary",onClick:()=>r("contact"),children:"Sign Up"})]}),d.jsx("button",{className:"navbar__toggle",onClick:()=>n(l=>!l),"aria-label":"Toggle menu",children:t?d.jsx(qd,{size:24}):d.jsx(Qd,{size:24})})]}),d.jsxs("div",{className:`navbar__sidebar ${t?"navbar__sidebar--open":""}`,children:[d.jsx(Wu,{onNavClick:r,orientation:"column"}),d.jsx("button",{className:"btn btn--primary",onClick:()=>r("contact"),children:"Sign Up"})]})]})}function ip({image:e,eyebrow:t,title:n,text:r,buttonText:l,onButtonClick:i}){return d.jsx("section",{id:"home",className:"hero",style:{backgroundImage:`linear-gradient(180deg, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.8)), url(${e})`},children:d.jsxs("div",{className:"hero__content",children:[d.jsxs("div",{className:"hero__badge",children:[d.jsx(Xd,{size:14,fill:"currentColor"}),d.jsx("span",{children:"Rated 4.9/5 by 1,200+ Explorers"})]}),d.jsx("p",{className:"hero__eyebrow",children:t}),d.jsx("h1",{className:"hero__title",children:n}),d.jsx("p",{className:"hero__text",children:r}),d.jsx("button",{className:"btn btn--primary btn--lg btn--hero animate-bounce-subtle",onClick:i,children:l})]})})}function op(){return d.jsx("section",{className:"stats-bar",children:d.jsxs("div",{className:"stats-bar__inner",children:[d.jsxs("div",{className:"stat-item",children:[d.jsx(Fd,{size:28,className:"stat-item__icon"}),d.jsxs("div",{children:[d.jsx("h4",{children:"10+ Years"}),d.jsx("p",{children:"Guiding Experience"})]})]}),d.jsxs("div",{className:"stat-item",children:[d.jsx(Jd,{size:28,className:"stat-item__icon"}),d.jsxs("div",{children:[d.jsx("h4",{children:"5,000+"}),d.jsx("p",{children:"Happy Trekkers"})]})]}),d.jsxs("div",{className:"stat-item",children:[d.jsx(Yd,{size:28,className:"stat-item__icon"}),d.jsxs("div",{children:[d.jsx("h4",{children:"100% Safely"}),d.jsx("p",{children:"Track Record"})]})]})]})})}function up({destination:e}){const{title:t,text:n,mainImage:r,raisedImage:l,reverse:i}=e;return d.jsxs("div",{className:`destination ${i?"destination--reverse":""}`,children:[d.jsxs("div",{className:"destination__images",children:[d.jsx("div",{className:"destination__main-wrap",children:d.jsx("img",{src:r,alt:t,className:"destination__main-image",loading:"lazy"})}),d.jsx("img",{src:l,alt:"",className:"destination__raised-image",loading:"lazy"})]}),d.jsxs("div",{className:"destination__text",children:[d.jsx("p",{className:"destination__eyebrow",children:"Explore peaks"}),d.jsx("h3",{children:t}),d.jsx("p",{className:"destination__desc",children:n})]})]})}function ap(){return d.jsxs("section",{className:"section",children:[d.jsxs("div",{className:"section__heading",children:[d.jsx("span",{className:"section__subtitle",children:"Incredible Places"}),d.jsx("h2",{className:"gradient-text",children:"Popular destinations"}),d.jsx("div",{className:"section__divider"}),d.jsx("p",{children:"The routes people ask for by name."})]}),d.jsx("div",{className:"destinations-list",children:tp.map(e=>d.jsx(up,{destination:e},e.id))})]})}function sp({trip:e}){return d.jsxs("article",{className:"trip-card",children:[d.jsxs("div",{className:"trip-card__image-wrap",children:[d.jsx("img",{src:e.image,alt:e.name,className:"trip-card__image",loading:"lazy"}),d.jsxs("span",{className:"trip-card__duration",children:[e.days," Days"]})]}),d.jsxs("div",{className:"trip-card__body",children:[d.jsx("h3",{children:e.name}),d.jsx("p",{children:e.text}),d.jsxs("div",{className:"trip-card__meta",children:[d.jsx("span",{className:"trip-card__price",children:e.price}),d.jsx("button",{className:"trip-card__link",children:"Book Now →"})]})]})]})}function cp(){return d.jsxs("section",{className:"section section--muted",children:[d.jsxs("div",{className:"section__heading",children:[d.jsx("span",{className:"section__subtitle",children:"Explore Package"}),d.jsx("h2",{className:"gradient-text",children:"Recent trips"}),d.jsx("div",{className:"section__divider"}),d.jsx("p",{children:"Six routes across the north, from a weekend plateau camp to a two-week glacier trek."})]}),d.jsx("div",{className:"trip-grid",children:np.map(e=>d.jsx(sp,{trip:e},e.id))})]})}function fp({service:e}){const t=e.icon;return d.jsxs("div",{className:"service-card",children:[d.jsx("div",{className:"service-card__icon-wrapper",children:d.jsx(t,{size:26,strokeWidth:1.8})}),d.jsx("h3",{children:e.title}),d.jsx("p",{children:e.text})]})}function dp(){return d.jsxs("section",{id:"service",className:"section",children:[d.jsxs("div",{className:"section__heading",children:[d.jsx("span",{className:"section__subtitle",children:"Our Services"}),d.jsx("h2",{className:"gradient-text",children:"What we handle"}),d.jsx("div",{className:"section__divider"}),d.jsx("p",{children:'Everything between "I want to go" and standing at the trailhead.'})]}),d.jsx("div",{className:"service-grid",children:rp.map(e=>d.jsx(fp,{service:e},e.id))})]})}function pp(){return d.jsx("section",{id:"about",className:"section section--muted",children:d.jsxs("div",{className:"about",children:[d.jsxs("div",{className:"section__heading",children:[d.jsx("span",{className:"section__subtitle",children:"Who We Are"}),d.jsx("h2",{className:"gradient-text",children:"About Kohsar Journeys"}),d.jsx("div",{className:"section__divider"})]}),d.jsx("p",{className:"about__para",children:"We started in 2014 with a single jeep and a handful of routes through Gilgit-Baltistan that most agencies weren't running yet. A decade later, our guides are still the same people who grew up walking these valleys — not contractors we hired in from the city."}),d.jsx("p",{className:"about__para",children:"Every itinerary on this site has been walked by our own team, more than once, in more than one season. If a trail changes — a bridge washes out, a pass closes early — we know before the trip leaves, not after."})]})})}function mp(){const[e,t]=Ae.useState(!1),n=r=>{r.preventDefault(),t(!0)};return d.jsxs("section",{id:"contact",className:"section",children:[d.jsxs("div",{className:"section__heading",children:[d.jsx("span",{className:"section__subtitle",children:"Get In Touch"}),d.jsx("h2",{className:"gradient-text",children:"Plan a trip"}),d.jsx("div",{className:"section__divider"}),d.jsx("p",{children:"Tell us roughly what you're after — we'll reply with a route and a price."})]}),d.jsxs("form",{className:"contact-form",onSubmit:n,children:[d.jsxs("div",{className:"contact-form__row",children:[d.jsx("input",{type:"text",placeholder:"Name",required:!0}),d.jsx("input",{type:"email",placeholder:"Email",required:!0})]}),d.jsx("input",{type:"text",placeholder:"Subject",required:!0}),d.jsx("textarea",{placeholder:"Message",rows:5,required:!0}),d.jsx("button",{type:"submit",className:"btn btn--primary btn--submit",children:e?"Sent — thank you":"Send message"})]})]})}function hp(){return d.jsxs("footer",{className:"footer",children:[d.jsxs("div",{className:"footer__top",children:[d.jsxs("div",{children:[d.jsxs("p",{className:"footer__logo",children:["Kohsar",d.jsx("span",{children:"Journeys"})]}),d.jsx("p",{className:"footer__tagline",children:"Small-group treks through Hunza, Gilgit-Baltistan, and Chitral."})]}),d.jsxs("div",{className:"footer__social",children:[d.jsx("a",{href:"#","aria-label":"Facebook",children:d.jsx(Bd,{size:18})}),d.jsx("a",{href:"#","aria-label":"Twitter",children:d.jsx(Zd,{size:18})}),d.jsx("a",{href:"#","aria-label":"Instagram",children:d.jsx(Vd,{size:18})}),d.jsx("a",{href:"#","aria-label":"Youtube",children:d.jsx(bd,{size:18})})]})]}),d.jsxs("div",{className:"footer__bottom",children:[d.jsxs("div",{children:[d.jsx("h4",{children:"Company"}),d.jsx("a",{href:"#about",children:"About"}),d.jsx("a",{href:"#service",children:"Service"}),d.jsx("a",{href:"#home",children:"Careers"})]}),d.jsxs("div",{children:[d.jsx("h4",{children:"Destinations"}),d.jsx("a",{href:"#home",children:"Hunza Valley"}),d.jsx("a",{href:"#home",children:"Fairy Meadows"}),d.jsx("a",{href:"#home",children:"Deosai Plains"})]}),d.jsxs("div",{children:[d.jsx("h4",{children:"Support"}),d.jsx("a",{href:"#contact",children:"Contact"}),d.jsx("a",{href:"#service",children:"Gear rental"}),d.jsx("a",{href:"#service",children:"Permits"})]}),d.jsxs("div",{children:[d.jsx("h4",{children:"Reach us"}),d.jsxs("p",{children:[d.jsx(Wd,{size:14})," Islamabad, Pakistan"]}),d.jsxs("p",{children:[d.jsx(Kd,{size:14})," +92 300 0000000"]}),d.jsxs("p",{children:[d.jsx(Hd,{size:14})," hello@kohsarjourneys.pk"]})]})]}),d.jsx("p",{className:"footer__muted",children:"© 2026 Kohsar Journeys. Built with absolute premium aesthetic standards."})]})}function vp(){const e=t=>{var n;(n=document.getElementById(t))==null||n.scrollIntoView({behavior:"smooth"})};return d.jsxs("div",{className:"site",children:[d.jsx("style",{children:gp}),d.jsx(lp,{onNavClick:e}),d.jsx(ip,{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eK8OPtw0jILOHgRTXw5uTIGvImarUkQ_lFQEgEV0Tg&s=10",eyebrow:"Northern Pakistan, on foot",title:"The mountains don't move. Your itinerary should.",text:"Small-group treks through Hunza, Gilgit-Baltistan, and Chitral — planned by guides who grew up on these trails.",buttonText:"See recent trips",onButtonClick:()=>e("trips")}),d.jsx(op,{}),d.jsx(ap,{}),d.jsx("div",{id:"trips",children:d.jsx(cp,{})}),d.jsx(dp,{}),d.jsx(pp,{}),d.jsx(mp,{}),d.jsx(hp,{})]})}const gp=`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');

  :root { 
    --ink: #0f172a;       
    --stone: #475569;     
    --mist: #f8fafc;      
    --card: #ffffff; 
    --pine: #e0f2fe;      
    --pine-dark: rgba(15, 23, 42, 0.85); 
    --accent-blue: #38bdf8; 
    --clay: #0284c7;      
    --line: #f1f5f9;      
    --radius: 18px;       
    --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  .site { 
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; 
    color: var(--ink); 
    background: var(--mist); 
    line-height: 1.75; 
    overflow-x: hidden; 
  }

  /* Typography */
  h1, h2, h3 {
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--ink);
  }

  .gradient-text {
    background: linear-gradient(135deg, #0f172a 30%, #0369a1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Glassmorphism Navbar with Absolute Fixed Position rules */
  .navbar { 
    position: sticky; 
    top: 0; 
    z-index: 100; 
    background: var(--pine-dark); 
    backdrop-filter: blur(16px); 
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07); 
    color: white; 
    transition: var(--transition);
  }
  
  .navbar__inner { 
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 18px 24px; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
  }
  
  .navbar__logo { 
    background: none; 
    border: none; 
    cursor: pointer; 
    color: white; 
    font-family: 'Playfair Display', Georgia, serif; 
    font-size: 1.45rem; 
    font-weight: 700; 
  }
  
  .navbar__logo span { 
    color: var(--accent-blue); 
    font-weight: 400; 
    font-style: italic;
  }
  
  .navbar__desktop { 
    display: flex; 
    align-items: center; 
    gap: 40px; 
  }
  
  .nav-links { 
    list-style: none; 
    display: flex; 
    gap: 36px; 
    margin: 0; 
    padding: 0; 
  }
  
  .nav-links button { 
    background: none; 
    border: none; 
    color: rgba(255, 255, 255, 0.8); 
    font-family: 'Plus Jakarta Sans', sans-serif; 
    font-size: 0.92rem; 
    font-weight: 500;
    cursor: pointer; 
    padding: 6px 0; 
    border-bottom: 2px solid transparent; 
    transition: var(--transition); 
  }
  
  .nav-links button:hover { 
    color: white; 
    border-bottom-color: var(--accent-blue); 
  }
  
  .navbar__toggle { 
    display: none; 
    background: none; 
    border: none; 
    color: white; 
    cursor: pointer; 
  }

  /* Sidebar - Desktop par fully hidden */
  .navbar__sidebar { 
    display: none; 
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(15, 23, 42, 0.98);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    flex-direction: column;
    gap: 20px;
    z-index: 99;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  }

  /* Ultra-Premium Buttons */
  .btn { 
    font-family: 'Plus Jakarta Sans', sans-serif; 
    font-size: 0.9rem; 
    font-weight: 600;
    padding: 12px 26px; 
    border-radius: 100px; 
    border: 1px solid transparent; 
    cursor: pointer; 
    transition: var(--transition); 
    box-shadow: 0 4px 14px rgba(2, 132, 199, 0.15);
  }
  
  .btn:hover { 
    transform: translateY(-3px); 
    box-shadow: 0 8px 24px rgba(2, 132, 199, 0.3);
  }
  
  .btn--primary { 
    background: var(--clay); 
    color: white; 
  }
  
  .btn--primary:hover { 
    background: #0369a1; 
  }
  
  .btn--lg { 
    padding: 16px 40px; 
    font-size: 1rem; 
  }

  @media (max-width: 800px) {
    .navbar__desktop { display: none; }
    .navbar__toggle { display: block; }
    .navbar__sidebar--open { display: flex; }
    .nav-links--column { flex-direction: column; gap: 20px; }
  }

  /* Immersive Hero Section */
  .hero { 
    min-height: 88vh; 
    background-size: cover; 
    background-position: center; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    text-align: center; 
    color: white; 
    padding: 80px 24px; 
  }
  
  .hero__content { 
    max-width: 780px; 
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero__badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #f1f5f9;
    margin-bottom: 24px;
    backdrop-filter: blur(8px);
  }

  .hero__badge svg {
    color: #fbbf24; 
  }
  
  .hero__eyebrow { 
    text-transform: uppercase; 
    letter-spacing: 0.24em; 
    font-weight: 700;
    font-size: 0.8rem; 
    color: var(--accent-blue); 
    margin-bottom: 20px; 
  }
  
  .hero__title { 
    font-size: clamp(2.4rem, 6.5vw, 4.2rem); 
    line-height: 1.12; 
    margin: 0 0 24px; 
    color: white;
    text-shadow: 0 4px 20px rgba(0,0,0,0.6); 
  }
  
  .hero__text { 
    color: #f8fafc; 
    font-size: 1.15rem; 
    font-weight: 400;
    max-width: 600px; 
    margin: 0 auto 38px; 
    text-shadow: 0 2px 8px rgba(0,0,0,0.5); 
    line-height: 1.8;
    opacity: 0.95;
  }

  .btn--hero {
    background: var(--clay);
    box-shadow: 0 4px 25px rgba(2, 132, 199, 0.5);
  }
  .btn--hero:hover {
    background: #0284c7;
  }

  /* Stats Bar Section */
  .stats-bar {
    background: white;
    border-bottom: 1px solid #e2e8f0;
    padding: 30px 24px;
    position: relative;
    z-index: 10;
  }

  .stats-bar__inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: center;
  }

  .stat-item__icon {
    color: var(--clay);
    background: var(--pine);
    padding: 10px;
    box-sizing: content-box;
    border-radius: 14px;
  }

  .stat-item h4 {
    margin: 0 0 2px;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--ink);
  }

  .stat-item p {
    margin: 0;
    font-size: 0.85rem;
    color: var(--stone);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .stats-bar__inner {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  /* Section Styling */
  .section { 
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 110px 24px; 
  }
  
  .section--muted { 
    background: #f8fafc; 
    max-width: none; 
    border-top: 1px solid #f1f5f9;
    border-bottom: 1px solid #f1f5f9;
  }
  
  .section--muted > * { 
    max-width: 1200px; 
    margin-left: auto; 
    margin-right: auto; 
  }
  
  .section__heading { 
    text-align: center; 
    max-width: 600px; 
    margin: 0 auto 64px; 
  }

  .section__subtitle {
    text-transform: uppercase;
    color: var(--clay);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    display: block;
    margin-bottom: 10px;
  }
  
  .section__heading h2 { 
    font-size: 2.3rem; 
    margin: 0 0 14px; 
  }

  .section__divider {
    width: 64px;
    height: 4px;
    background: linear-gradient(90deg, var(--clay), var(--accent-blue));
    margin: 14px auto;
    border-radius: 4px;
  }
  
  .section__heading p { 
    color: var(--stone); 
    font-size: 1.05rem;
    margin: 8px 0 0; 
  }

  /* Popular Destinations overlapping layout */
  .destinations-list {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  .destination { 
    display: flex; 
    align-items: center; 
    gap: 80px; 
  }
  
  .destination--reverse { 
    flex-direction: row-reverse; 
  }
  
  .destination__images { 
    position: relative; 
    flex: 1.2; 
    min-width: 0; 
  }

  .destination__main-wrap {
    overflow: hidden;
    border-radius: var(--radius);
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
  }
  
  .destination__main-image { 
    width: 100%; 
    height: 380px; 
    object-fit: cover; 
    display: block; 
    transition: var(--transition);
  }

  .destination:hover .destination__main-image {
    transform: scale(1.05);
  }
  
  .destination__raised-image { 
    position: absolute; 
    width: 45%; 
    height: 200px; 
    object-fit: cover; 
    border-radius: var(--radius); 
    border: 6px solid white; 
    bottom: -38px; 
    right: -28px; 
    box-shadow: 0 16px 36px rgba(0,0,0,0.15); 
    transition: var(--transition);
  }

  .destination:hover .destination__raised-image {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px rgba(0,0,0,0.22);
  }
  
  .destination--reverse .destination__raised-image { 
    right: auto; 
    left: -28px; 
  }
  
  .destination__text { 
    flex: 1; 
    min-width: 0; 
  }
  
  .destination__eyebrow { 
    text-transform: uppercase; 
    letter-spacing: 0.12em; 
    font-size: 0.8rem; 
    font-weight: 700;
    color: var(--clay); 
    margin: 0 0 12px; 
  }
  
  .destination__text h3 { 
    font-size: 2.2rem; 
    margin: 0 0 18px; 
  }
  
  .destination__desc { 
    color: var(--stone); 
    font-size: 1.02rem;
    line-height: 1.8;
    margin: 0; 
  }

  @media (max-width: 850px) {
    .destinations-list { gap: 60px; }
    .destination, .destination--reverse { flex-direction: column; gap: 40px; }
    .destination__raised-image { bottom: -24px; right: 12px !important; left: auto !important; }
  }

  /* Trip Cards */
  .trip-grid { 
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 32px; 
  }
  
  .trip-card { 
    background: var(--card); 
    border-radius: var(--radius); 
    overflow: hidden; 
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.04); 
    transition: var(--transition);
    border: 1px solid rgba(226, 232, 240, 0.5);
  }

  .trip-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px rgba(15, 23, 42, 0.12);
  }
  
  .trip-card__image-wrap { 
    height: 220px; 
    overflow: hidden; 
    position: relative;
  }
  
  .trip-card__image { 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    display: block; 
    transition: var(--transition); 
  }
  
  .trip-card:hover .trip-card__image { 
    transform: scale(1.08); 
  }

  .trip-card__duration {
    position: absolute;
    top: 16px;
    left: 16px;
    background: rgba(15, 23, 42, 0.8);
    color: white;
    padding: 4px 14px;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 20px;
    backdrop-filter: blur(4px);
  }
  
  .trip-card__body { 
    padding: 26px; 
  }
  
  .trip-card__body h3 { 
    font-size: 1.3rem; 
    margin: 0 0 10px; 
  }
  
  .trip-card__body p { 
    color: var(--stone); 
    font-size: 0.95rem; 
    margin: 0 0 22px; 
    line-height: 1.65;
  }
  
  .trip-card__meta { 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    font-size: 0.9rem; 
    border-top: 1px solid #f1f5f9;
    padding-top: 18px;
  }
  
  .trip-card__price { 
    font-weight: 700; 
    color: var(--ink); 
    font-size: 1.1rem;
  }

  .trip-card__link {
    background: none;
    border: none;
    color: var(--clay);
    font-weight: 700;
    cursor: pointer;
    font-size: 0.9rem;
    transition: var(--transition);
    padding: 0;
  }

  .trip-card__link:hover {
    color: #0369a1;
    transform: translateX(4px);
  }

  @media (max-width: 950px) { .trip-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 620px) { .trip-grid { grid-template-columns: 1fr; } }

  /* Premium Services Section */
  .service-grid { 
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    gap: 28px; 
  }
  
  .service-card { 
    background: var(--card); 
    border: 1px solid rgba(226, 232, 240, 0.7); 
    border-radius: var(--radius); 
    padding: 36px 28px; 
    transition: var(--transition);
    box-shadow: 0 4px 18px rgba(0,0,0,0.01);
  }

  .service-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
    border-color: var(--accent-blue);
  }
  
  .service-card__icon-wrapper { 
    color: var(--clay); 
    background: var(--pine);
    width: 56px;
    height: 56px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px; 
    transition: var(--transition);
  }

  .service-card:hover .service-card__icon-wrapper {
    background: var(--clay);
    color: white;
  }
  
  .service-card h3 { 
    color: var(--ink); 
    font-size: 1.25rem; 
    margin: 0 0 12px; 
  }
  
  .service-card p { 
    font-size: 0.92rem; 
    color: var(--stone);
    margin: 0; 
    line-height: 1.65;
  }

  @media (max-width: 950px) { .service-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) { .service-grid { grid-template-columns: 1fr; } }

  /* About Block */
  .about { 
    max-width: 820px; 
    margin: 0 auto; 
    text-align: center; 
  }
  
  .about__para { 
    margin: 0 0 22px; 
    font-size: 1.1rem;
    line-height: 1.9;
    color: var(--stone);
  }

  /* Premium Form Design */
  .contact-form { 
    max-width: 700px; 
    margin: 0 auto; 
    display: flex; 
    flex-direction: column; 
    gap: 22px; 
  }
  
  .contact-form__row { 
    display: flex; 
    gap: 22px; 
  }
  
  .contact-form input, .contact-form textarea { 
    font-family: inherit;
    font-size: 0.95rem; 
    padding: 16px 20px; 
    border: 1px solid #cbd5e1; 
    border-radius: var(--radius); 
    background: white; 
    width: 100%;
    transition: var(--transition);
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.01);
  }
  
  .contact-form input:focus, .contact-form textarea:focus { 
    outline: none;
    border-color: var(--clay); 
    box-shadow: 0 0 0 4px rgba(2, 132, 199, 0.15);
  }

  .btn--submit {
    align-self: center;
    padding: 16px 44px;
    font-size: 1rem;
  }

  @media (max-width: 560px) { .contact-form__row { flex-direction: column; gap: 20px; } }

  /* Footer Design */
  .footer { 
    background: #090d16; 
    color: #94a3b8; 
    padding: 90px 24px 36px; 
    border-top: 1px solid rgba(255,255,255,0.05);
  }
  
  .footer__top { 
    max-width: 1200px; 
    margin: 0 auto; 
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
    flex-wrap: wrap; 
    gap: 32px; 
    padding-bottom: 44px; 
    border-bottom: 1px solid rgba(255,255,255,0.08); 
  }
  
  .footer__logo { 
    font-family: 'Playfair Display', Georgia, serif; 
    font-size: 1.5rem; 
    font-weight: 700;
    color: white; 
    margin: 0 0 10px; 
  }
  
  .footer__logo span { 
    color: var(--accent-blue); 
    font-style: italic;
    font-weight: 400;
  }
  
  .footer__tagline { 
    max-width: 340px; 
    font-size: 0.9rem; 
    margin: 0; 
    line-height: 1.7;
    opacity: 0.8; 
  }
  
  .footer__social { 
    display: flex; 
    gap: 16px; 
  }

  .footer__social a {
    width: 44px;
    height: 44px;
    background: rgba(255,255,255,0.04);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
  }

  .footer__social a:hover {
    background: var(--clay);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(2, 132, 199, 0.4);
  }
  
  .footer__bottom { 
    max-width: 1200px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    gap: 32px; 
    padding: 56px 0 36px; 
  }
  
  .footer__bottom h4 { 
    color: white; 
    font-size: 0.9rem; 
    text-transform: uppercase; 
    letter-spacing: 0.12em; 
    margin: 0 0 18px; 
  }
  
  .footer__bottom a, .footer__bottom p { 
    display: flex; 
    align-items: center; 
    gap: 10px; 
    font-size: 0.9rem; 
    margin: 0 0 14px; 
    opacity: 0.8; 
    transition: var(--transition);
  }
  
  .footer__bottom a:hover { 
    opacity: 1; 
    color: white;
    transform: translateX(4px);
  }
  
  .footer__muted { 
    max-width: 1200px; 
    margin: 0 auto; 
    text-align: center; 
    font-size: 0.82rem; 
    opacity: 0.5; 
    padding-top: 28px; 
    border-top: 1px solid rgba(255,255,255,0.04);
  }

  /* Smooth Custom Animations */
  @keyframes bounceSubtle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .animate-bounce-subtle {
    animation: bounceSubtle 3s ease-in-out infinite;
  }

  @media (max-width: 760px) { .footer__bottom { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .footer__bottom { grid-template-columns: 1fr; } }
`;Kl.createRoot(document.getElementById("root")).render(d.jsx(kc.StrictMode,{children:d.jsx(vp,{})}));
