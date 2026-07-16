(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wa={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),rc=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),uc=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),dc=Symbol.for("react.lazy"),Do=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=Do&&e[Do]||e["@@iterator"],typeof e=="function"?e:null)}var Qa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ka=Object.assign,Ga={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Ga,this.updater=n||Qa}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xa(){}Xa.prototype=ln.prototype;function Ai(e,t,n){this.props=e,this.context=t,this.refs=Ga,this.updater=n||Qa}var Ui=Ai.prototype=new Xa;Ui.constructor=Ai;Ka(Ui,ln.prototype);Ui.isPureReactComponent=!0;var Oo=Array.isArray,Ya=Object.prototype.hasOwnProperty,Bi={current:null},Za={key:!0,ref:!0,__self:!0,__source:!0};function Ja(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Ya.call(t,r)&&!Za.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Xn,type:e,key:i,ref:o,props:l,_owner:Bi.current}}function mc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function hc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fo=/\/+/g;function yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hc(""+e.key):t.toString(36)}function yr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xn:case rc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+yl(o,0):r,Oo(l)?(n="",e!=null&&(n=e.replace(Fo,"$&/")+"/"),yr(l,t,n,"",function(c){return c})):l!=null&&(Vi(l)&&(l=mc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Fo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Oo(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+yl(i,a);o+=yr(i,t,n,u,l)}else if(u=pc(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+yl(i,a++),o+=yr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function tr(e,t,n){if(e==null)return e;var r=[],l=0;return yr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function vc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},wr={transition:null},gc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Bi};function qa(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!Vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=ln;P.Fragment=lc;P.Profiler=oc;P.PureComponent=Ai;P.StrictMode=ic;P.Suspense=cc;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gc;P.act=qa;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ka({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Bi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Ya.call(t,u)&&!Za.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xn,type:e.type,key:l,ref:i,props:r,_owner:o}};P.createContext=function(e){return e={$$typeof:uc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};P.createElement=Ja;P.createFactory=function(e){var t=Ja.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:sc,render:e}};P.isValidElement=Vi;P.lazy=function(e){return{$$typeof:dc,_payload:{_status:-1,_result:e},_init:vc}};P.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};P.unstable_act=qa;P.useCallback=function(e,t){return ae.current.useCallback(e,t)};P.useContext=function(e){return ae.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};P.useEffect=function(e,t){return ae.current.useEffect(e,t)};P.useId=function(){return ae.current.useId()};P.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return ae.current.useMemo(e,t)};P.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};P.useRef=function(e){return ae.current.useRef(e)};P.useState=function(e){return ae.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return ae.current.useTransition()};P.version="18.3.1";Wa.exports=P;var He=Wa.exports;const wl=nc(He);var Ql={},ba={exports:{}},ye={},eu={exports:{}},tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,R){var z=S.length;S.push(R);e:for(;0<z;){var H=z-1>>>1,X=S[H];if(0<l(X,R))S[H]=R,S[z]=X,z=H;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var R=S[0],z=S.pop();if(z!==R){S[0]=z;e:for(var H=0,X=S.length,bn=X>>>1;H<bn;){var vt=2*(H+1)-1,gl=S[vt],gt=vt+1,er=S[gt];if(0>l(gl,z))gt<X&&0>l(er,gl)?(S[H]=er,S[gt]=z,H=gt):(S[H]=gl,S[vt]=z,H=vt);else if(gt<X&&0>l(er,z))S[H]=er,S[gt]=z,H=gt;else break e}}return R}function l(S,R){var z=S.sortIndex-R.sortIndex;return z!==0?z:S.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,m=null,p=3,y=!1,w=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(S){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=S)r(c),R.sortIndex=R.expirationTime,t(u,R);else break;R=n(c)}}function v(S){if(k=!1,d(S),!w)if(n(u)!==null)w=!0,hl(E);else{var R=n(c);R!==null&&vl(v,R.startTime-S)}}function E(S,R){w=!1,k&&(k=!1,f(C),C=-1),y=!0;var z=p;try{for(d(R),m=n(u);m!==null&&(!(m.expirationTime>R)||S&&!Ce());){var H=m.callback;if(typeof H=="function"){m.callback=null,p=m.priorityLevel;var X=H(m.expirationTime<=R);R=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(u)&&r(u),d(R)}else r(u);m=n(u)}if(m!==null)var bn=!0;else{var vt=n(c);vt!==null&&vl(v,vt.startTime-R),bn=!1}return bn}finally{m=null,p=z,y=!1}}var _=!1,N=null,C=-1,$=5,T=-1;function Ce(){return!(e.unstable_now()-T<$)}function un(){if(N!==null){var S=e.unstable_now();T=S;var R=!0;try{R=N(!0,S)}finally{R?sn():(_=!1,N=null)}}else _=!1}var sn;if(typeof s=="function")sn=function(){s(un)};else if(typeof MessageChannel<"u"){var Io=new MessageChannel,tc=Io.port2;Io.port1.onmessage=un,sn=function(){tc.postMessage(null)}}else sn=function(){F(un,0)};function hl(S){N=S,_||(_=!0,sn())}function vl(S,R){C=F(function(){S(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,hl(E))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(S){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var z=p;p=R;try{return S()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,R){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var z=p;p=S;try{return R()}finally{p=z}},e.unstable_scheduleCallback=function(S,R,z){var H=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?H+z:H):z=H,S){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=z+X,S={id:h++,callback:R,priorityLevel:S,startTime:z,expirationTime:X,sortIndex:-1},z>H?(S.sortIndex=z,t(c,S),n(u)===null&&S===n(c)&&(k?(f(C),C=-1):k=!0,vl(v,z-H))):(S.sortIndex=X,t(u,S),w||y||(w=!0,hl(E))),S},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(S){var R=p;return function(){var z=p;p=R;try{return S.apply(this,arguments)}finally{p=z}}}})(tu);eu.exports=tu;var yc=eu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wc=He,ge=yc;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nu=new Set,Ln={};function Tt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)nu.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=Object.prototype.hasOwnProperty,kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jo={},Ao={};function xc(e){return Kl.call(Ao,e)?!0:Kl.call(jo,e)?!1:kc.test(e)?Ao[e]=!0:(jo[e]=!0,!1)}function Ec(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sc(e,t,n,r){if(t===null||typeof t>"u"||Ec(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];b[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){b[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){b[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){b[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){b[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var $i=/[\-:]([a-z])/g;function Hi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($i,Hi);b[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($i,Hi);b[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($i,Hi);b[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){b[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});b.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){b[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wi(e,t,n,r){var l=b.hasOwnProperty(t)?b[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sc(t,n,l,r)&&(n=null),r||l===null?xc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ye=wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),It=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),Qi=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),ru=Symbol.for("react.provider"),lu=Symbol.for("react.context"),Ki=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),Gi=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),iu=Symbol.for("react.offscreen"),Uo=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Uo&&e[Uo]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,kl;function yn(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var xl=!1;function El(e,t){if(!e||xl)return"";xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function _c(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case It:return"Portal";case Gl:return"Profiler";case Qi:return"StrictMode";case Xl:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case ru:return(e._context.displayName||"Context")+".Provider";case Ki:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gi:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function Nc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Qi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cc(e){var t=ou(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Cc(e))}function au(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ou(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uu(e,t){t=t.checked,t!=null&&Wi(e,"checked",t,!1)}function ql(e,t){uu(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $o(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(wn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function su(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ho(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rc=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){Rc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function du(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function pu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=du(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var zc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ni(e,t){if(t){if(zc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function Xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,Kt=null,Gt=null;function Wo(e){if(e=Jn(e)){if(typeof ii!="function")throw Error(g(280));var t=e.stateNode;t&&(t=ll(t),ii(e.stateNode,e.type,t))}}function mu(e){Kt?Gt?Gt.push(e):Gt=[e]:Kt=e}function hu(){if(Kt){var e=Kt,t=Gt;if(Gt=Kt=null,Wo(e),t)for(e=0;e<t.length;e++)Wo(t[e])}}function vu(e,t){return e(t)}function gu(){}var Sl=!1;function yu(e,t,n){if(Sl)return e(t,n);Sl=!0;try{return vu(e,t,n)}finally{Sl=!1,(Kt!==null||Gt!==null)&&(gu(),hu())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var oi=!1;if(Qe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){oi=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{oi=!1}function Pc(e,t,n,r,l,i,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Sn=!1,Lr=null,Mr=!1,ai=null,Tc={onError:function(e){Sn=!0,Lr=e}};function Lc(e,t,n,r,l,i,o,a,u){Sn=!1,Lr=null,Pc.apply(Tc,arguments)}function Mc(e,t,n,r,l,i,o,a,u){if(Lc.apply(this,arguments),Sn){if(Sn){var c=Lr;Sn=!1,Lr=null}else throw Error(g(198));Mr||(Mr=!0,ai=c)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qo(e){if(Lt(e)!==e)throw Error(g(188))}function Ic(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Qo(l),e;if(i===r)return Qo(l),t;i=i.sibling}throw Error(g(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function ku(e){return e=Ic(e),e!==null?xu(e):null}function xu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xu(e);if(t!==null)return t;e=e.sibling}return null}var Eu=ge.unstable_scheduleCallback,Ko=ge.unstable_cancelCallback,Dc=ge.unstable_shouldYield,Oc=ge.unstable_requestPaint,W=ge.unstable_now,Fc=ge.unstable_getCurrentPriorityLevel,Yi=ge.unstable_ImmediatePriority,Su=ge.unstable_UserBlockingPriority,Ir=ge.unstable_NormalPriority,jc=ge.unstable_LowPriority,_u=ge.unstable_IdlePriority,el=null,je=null;function Ac(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Vc,Uc=Math.log,Bc=Math.LN2;function Vc(e){return e>>>=0,e===0?32:31-(Uc(e)/Bc|0)|0}var ir=64,or=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=kn(a):(i&=o,i!==0&&(r=kn(i)))}else o=n&~l,o!==0?r=kn(o):i!==0&&(r=kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),l=1<<n,r|=e[n],t&=~l;return r}function $c(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Le(i),a=1<<o,u=l[o];u===-1?(!(a&n)||a&r)&&(l[o]=$c(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nu(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function Wc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Le(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var M=0;function Cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ru,Ji,zu,Pu,Tu,si=!1,ar=[],rt=null,lt=null,it=null,Dn=new Map,On=new Map,be=[],Qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Go(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function dn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Jn(t),t!==null&&Ji(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Kc(e,t,n,r,l){switch(t){case"focusin":return rt=dn(rt,e,t,n,r,l),!0;case"dragenter":return lt=dn(lt,e,t,n,r,l),!0;case"mouseover":return it=dn(it,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Dn.set(i,dn(Dn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,On.set(i,dn(On.get(i)||null,e,t,n,r,l)),!0}return!1}function Lu(e){var t=kt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=wu(n),t!==null){e.blockedOn=t,Tu(e.priority,function(){zu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);li=r,n.target.dispatchEvent(r),li=null}else return t=Jn(n),t!==null&&Ji(t),e.blockedOn=n,!1;t.shift()}return!0}function Xo(e,t,n){kr(e)&&n.delete(t)}function Gc(){si=!1,rt!==null&&kr(rt)&&(rt=null),lt!==null&&kr(lt)&&(lt=null),it!==null&&kr(it)&&(it=null),Dn.forEach(Xo),On.forEach(Xo)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,si||(si=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,Gc)))}function Fn(e){function t(l){return pn(l,e)}if(0<ar.length){pn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),lt!==null&&pn(lt,e),it!==null&&pn(it,e),Dn.forEach(t),On.forEach(t),n=0;n<be.length;n++)r=be[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(n=be[0],n.blockedOn===null);)Lu(n),n.blockedOn===null&&be.shift()}var Xt=Ye.ReactCurrentBatchConfig,Or=!0;function Xc(e,t,n,r){var l=M,i=Xt.transition;Xt.transition=null;try{M=1,qi(e,t,n,r)}finally{M=l,Xt.transition=i}}function Yc(e,t,n,r){var l=M,i=Xt.transition;Xt.transition=null;try{M=4,qi(e,t,n,r)}finally{M=l,Xt.transition=i}}function qi(e,t,n,r){if(Or){var l=ci(e,t,n,r);if(l===null)Dl(e,t,r,Fr,n),Go(e,r);else if(Kc(l,e,t,n,r))r.stopPropagation();else if(Go(e,r),t&4&&-1<Qc.indexOf(e)){for(;l!==null;){var i=Jn(l);if(i!==null&&Ru(i),i=ci(e,t,n,r),i===null&&Dl(e,t,r,Fr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var Fr=null;function ci(e,t,n,r){if(Fr=null,e=Xi(r),e=kt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function Mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fc()){case Yi:return 1;case Su:return 4;case Ir:case jc:return 16;case _u:return 536870912;default:return 16}default:return 16}}var tt=null,bi=null,xr=null;function Iu(){if(xr)return xr;var e,t=bi,n=t.length,r,l="value"in tt?tt.value:tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return xr=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Yo(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ur:Yo,this.isPropagationStopped=Yo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=we(on),Zn=B({},on,{view:0,detail:0}),Zc=we(Zn),Nl,Cl,mn,tl=B({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Nl=e.screenX-mn.screenX,Cl=e.screenY-mn.screenY):Cl=Nl=0,mn=e),Nl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),Zo=we(tl),Jc=B({},tl,{dataTransfer:0}),qc=we(Jc),bc=B({},Zn,{relatedTarget:0}),Rl=we(bc),ef=B({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),tf=we(ef),nf=B({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rf=we(nf),lf=B({},on,{data:0}),Jo=we(lf),of={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},af={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uf[e])?!!t[e]:!1}function to(){return sf}var cf=B({},Zn,{key:function(e){if(e.key){var t=of[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?af[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ff=we(cf),df=B({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=we(df),pf=B({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),mf=we(pf),hf=B({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=we(hf),gf=B({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yf=we(gf),wf=[9,13,27,32],no=Qe&&"CompositionEvent"in window,_n=null;Qe&&"documentMode"in document&&(_n=document.documentMode);var kf=Qe&&"TextEvent"in window&&!_n,Du=Qe&&(!no||_n&&8<_n&&11>=_n),bo=" ",ea=!1;function Ou(e,t){switch(e){case"keyup":return wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function xf(e,t){switch(e){case"compositionend":return Fu(t);case"keypress":return t.which!==32?null:(ea=!0,bo);case"textInput":return e=t.data,e===bo&&ea?null:e;default:return null}}function Ef(e,t){if(Ot)return e==="compositionend"||!no&&Ou(e,t)?(e=Iu(),xr=bi=tt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Du&&t.locale!=="ko"?null:t.data;default:return null}}var Sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sf[e.type]:t==="textarea"}function ju(e,t,n,r){mu(r),t=jr(t,"onChange"),0<t.length&&(n=new eo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nn=null,jn=null;function _f(e){Xu(e,0)}function nl(e){var t=At(e);if(au(t))return e}function Nf(e,t){if(e==="change")return t}var Au=!1;if(Qe){var zl;if(Qe){var Pl="oninput"in document;if(!Pl){var na=document.createElement("div");na.setAttribute("oninput","return;"),Pl=typeof na.oninput=="function"}zl=Pl}else zl=!1;Au=zl&&(!document.documentMode||9<document.documentMode)}function ra(){Nn&&(Nn.detachEvent("onpropertychange",Uu),jn=Nn=null)}function Uu(e){if(e.propertyName==="value"&&nl(jn)){var t=[];ju(t,jn,e,Xi(e)),yu(_f,t)}}function Cf(e,t,n){e==="focusin"?(ra(),Nn=t,jn=n,Nn.attachEvent("onpropertychange",Uu)):e==="focusout"&&ra()}function Rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(jn)}function zf(e,t){if(e==="click")return nl(t)}function Pf(e,t){if(e==="input"||e==="change")return nl(t)}function Tf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Tf;function An(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Kl.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function la(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ia(e,t){var n=la(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=la(n)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vu(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lf(e){var t=Vu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bu(n.ownerDocument.documentElement,n)){if(r!==null&&ro(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ia(n,i);var o=ia(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mf=Qe&&"documentMode"in document&&11>=document.documentMode,Ft=null,fi=null,Cn=null,di=!1;function oa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;di||Ft==null||Ft!==Tr(r)||(r=Ft,"selectionStart"in r&&ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cn&&An(Cn,r)||(Cn=r,r=jr(fi,"onSelect"),0<r.length&&(t=new eo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jt={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},Tl={},$u={};Qe&&($u=document.createElement("div").style,"AnimationEvent"in window||(delete jt.animationend.animation,delete jt.animationiteration.animation,delete jt.animationstart.animation),"TransitionEvent"in window||delete jt.transitionend.transition);function rl(e){if(Tl[e])return Tl[e];if(!jt[e])return e;var t=jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $u)return Tl[e]=t[n];return e}var Hu=rl("animationend"),Wu=rl("animationiteration"),Qu=rl("animationstart"),Ku=rl("transitionend"),Gu=new Map,aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Gu.set(e,t),Tt(t,[e])}for(var Ll=0;Ll<aa.length;Ll++){var Ml=aa[Ll],If=Ml.toLowerCase(),Df=Ml[0].toUpperCase()+Ml.slice(1);pt(If,"on"+Df)}pt(Hu,"onAnimationEnd");pt(Wu,"onAnimationIteration");pt(Qu,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Ku,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Of=new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));function ua(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mc(r,t,void 0,e),e.currentTarget=null}function Xu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;ua(l,a,c),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;ua(l,a,c),i=u}}}if(Mr)throw e=ai,Mr=!1,ai=null,e}function D(e,t){var n=t[gi];n===void 0&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Yu(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),Yu(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[cr]){e[cr]=!0,nu.forEach(function(n){n!=="selectionchange"&&(Of.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Il("selectionchange",!1,t))}}function Yu(e,t,n,r){switch(Mu(t)){case 1:var l=Xc;break;case 4:l=Yc;break;default:l=qi}n=l.bind(null,t,n,e),l=void 0,!oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=kt(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}yu(function(){var c=i,h=Xi(n),m=[];e:{var p=Gu.get(e);if(p!==void 0){var y=eo,w=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":y=ff;break;case"focusin":w="focus",y=Rl;break;case"focusout":w="blur",y=Rl;break;case"beforeblur":case"afterblur":y=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=qc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=mf;break;case Hu:case Wu:case Qu:y=tf;break;case Ku:y=vf;break;case"scroll":y=Zc;break;case"wheel":y=yf;break;case"copy":case"cut":case"paste":y=rf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qo}var k=(t&4)!==0,F=!k&&e==="scroll",f=k?p!==null?p+"Capture":null:p;k=[];for(var s=c,d;s!==null;){d=s;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=In(s,f),v!=null&&k.push(Bn(s,v,d)))),F)break;s=s.return}0<k.length&&(p=new y(p,w,null,n,h),m.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==li&&(w=n.relatedTarget||n.fromElement)&&(kt(w)||w[Ke]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?kt(w):null,w!==null&&(F=Lt(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(k=Zo,v="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(k=qo,v="onPointerLeave",f="onPointerEnter",s="pointer"),F=y==null?p:At(y),d=w==null?p:At(w),p=new k(v,s+"leave",y,n,h),p.target=F,p.relatedTarget=d,v=null,kt(h)===c&&(k=new k(f,s+"enter",w,n,h),k.target=d,k.relatedTarget=F,v=k),F=v,y&&w)t:{for(k=y,f=w,s=0,d=k;d;d=Mt(d))s++;for(d=0,v=f;v;v=Mt(v))d++;for(;0<s-d;)k=Mt(k),s--;for(;0<d-s;)f=Mt(f),d--;for(;s--;){if(k===f||f!==null&&k===f.alternate)break t;k=Mt(k),f=Mt(f)}k=null}else k=null;y!==null&&sa(m,p,y,k,!1),w!==null&&F!==null&&sa(m,F,w,k,!0)}}e:{if(p=c?At(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var E=Nf;else if(ta(p))if(Au)E=Pf;else{E=Rf;var _=Cf}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=zf);if(E&&(E=E(e,c))){ju(m,E,n,h);break e}_&&_(e,p,c),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&bl(p,"number",p.value)}switch(_=c?At(c):window,e){case"focusin":(ta(_)||_.contentEditable==="true")&&(Ft=_,fi=c,Cn=null);break;case"focusout":Cn=fi=Ft=null;break;case"mousedown":di=!0;break;case"contextmenu":case"mouseup":case"dragend":di=!1,oa(m,n,h);break;case"selectionchange":if(Mf)break;case"keydown":case"keyup":oa(m,n,h)}var N;if(no)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ot?Ou(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Du&&n.locale!=="ko"&&(Ot||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ot&&(N=Iu()):(tt=h,bi="value"in tt?tt.value:tt.textContent,Ot=!0)),_=jr(c,C),0<_.length&&(C=new Jo(C,e,null,n,h),m.push({event:C,listeners:_}),N?C.data=N:(N=Fu(n),N!==null&&(C.data=N)))),(N=kf?xf(e,n):Ef(e,n))&&(c=jr(c,"onBeforeInput"),0<c.length&&(h=new Jo("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=N))}Xu(m,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=In(e,n),i!=null&&r.unshift(Bn(e,i,l)),i=In(e,t),i!=null&&r.push(Bn(e,i,l))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sa(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,l?(u=In(n,i),u!=null&&o.unshift(Bn(n,u,a))):l||(u=In(n,i),u!=null&&o.push(Bn(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ff=/\r\n?/g,jf=/\u0000|\uFFFD/g;function ca(e){return(typeof e=="string"?e:""+e).replace(Ff,`
`).replace(jf,"")}function fr(e,t,n){if(t=ca(t),ca(e)!==t&&n)throw Error(g(425))}function Ar(){}var pi=null,mi=null;function hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,Af=typeof clearTimeout=="function"?clearTimeout:void 0,fa=typeof Promise=="function"?Promise:void 0,Uf=typeof queueMicrotask=="function"?queueMicrotask:typeof fa<"u"?function(e){return fa.resolve(null).then(e).catch(Bf)}:vi;function Bf(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Fn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function da(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Fe="__reactFiber$"+an,Vn="__reactProps$"+an,Ke="__reactContainer$"+an,gi="__reactEvents$"+an,Vf="__reactListeners$"+an,$f="__reactHandles$"+an;function kt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=da(e);e!==null;){if(n=e[Fe])return n;e=da(e)}return t}e=n,n=e.parentNode}return null}function Jn(e){return e=e[Fe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function At(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function ll(e){return e[Vn]||null}var yi=[],Ut=-1;function mt(e){return{current:e}}function O(e){0>Ut||(e.current=yi[Ut],yi[Ut]=null,Ut--)}function I(e,t){Ut++,yi[Ut]=e.current,e.current=t}var dt={},le=mt(dt),fe=mt(!1),Nt=dt;function qt(e,t){var n=e.type.contextTypes;if(!n)return dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function Ur(){O(fe),O(le)}function pa(e,t,n){if(le.current!==dt)throw Error(g(168));I(le,t),I(fe,n)}function Zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(g(108,Nc(e)||"Unknown",l));return B({},n,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,Nt=le.current,I(le,e),I(fe,fe.current),!0}function ma(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=Zu(e,t,Nt),r.__reactInternalMemoizedMergedChildContext=e,O(fe),O(le),I(le,e)):O(fe),I(fe,n)}var Be=null,il=!1,Fl=!1;function Ju(e){Be===null?Be=[e]:Be.push(e)}function Hf(e){il=!0,Ju(e)}function ht(){if(!Fl&&Be!==null){Fl=!0;var e=0,t=M;try{var n=Be;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,il=!1}catch(l){throw Be!==null&&(Be=Be.slice(e+1)),Eu(Yi,ht),l}finally{M=t,Fl=!1}}return null}var Bt=[],Vt=0,Vr=null,$r=0,ke=[],xe=0,Ct=null,Ve=1,$e="";function yt(e,t){Bt[Vt++]=$r,Bt[Vt++]=Vr,Vr=e,$r=t}function qu(e,t,n){ke[xe++]=Ve,ke[xe++]=$e,ke[xe++]=Ct,Ct=e;var r=Ve;e=$e;var l=32-Le(r)-1;r&=~(1<<l),n+=1;var i=32-Le(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ve=1<<32-Le(t)+l|n<<l|r,$e=i+e}else Ve=1<<i|n<<l|r,$e=e}function lo(e){e.return!==null&&(yt(e,1),qu(e,1,0))}function io(e){for(;e===Vr;)Vr=Bt[--Vt],Bt[Vt]=null,$r=Bt[--Vt],Bt[Vt]=null;for(;e===Ct;)Ct=ke[--xe],ke[xe]=null,$e=ke[--xe],ke[xe]=null,Ve=ke[--xe],ke[xe]=null}var ve=null,he=null,j=!1,Te=null;function bu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ha(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,he=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ct!==null?{id:Ve,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,he=null,!0):!1;default:return!1}}function wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(j){var t=he;if(t){var n=t;if(!ha(e,t)){if(wi(e))throw Error(g(418));t=ot(n.nextSibling);var r=ve;t&&ha(e,t)?bu(r,n):(e.flags=e.flags&-4097|2,j=!1,ve=e)}}else{if(wi(e))throw Error(g(418));e.flags=e.flags&-4097|2,j=!1,ve=e}}}function va(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function dr(e){if(e!==ve)return!1;if(!j)return va(e),j=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hi(e.type,e.memoizedProps)),t&&(t=he)){if(wi(e))throw es(),Error(g(418));for(;t;)bu(e,t),t=ot(t.nextSibling)}if(va(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ve?ot(e.stateNode.nextSibling):null;return!0}function es(){for(var e=he;e;)e=ot(e.nextSibling)}function bt(){he=ve=null,j=!1}function oo(e){Te===null?Te=[e]:Te.push(e)}var Wf=Ye.ReactCurrentBatchConfig;function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ga(e){var t=e._init;return t(e._payload)}function ts(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function l(f,s){return f=ct(f,s),f.index=0,f.sibling=null,f}function i(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,s,d,v){return s===null||s.tag!==6?(s=Hl(d,f.mode,v),s.return=f,s):(s=l(s,d),s.return=f,s)}function u(f,s,d,v){var E=d.type;return E===Dt?h(f,s,d.props.children,v,d.key):s!==null&&(s.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&ga(E)===s.type)?(v=l(s,d.props),v.ref=hn(f,s,d),v.return=f,v):(v=Pr(d.type,d.key,d.props,null,f.mode,v),v.ref=hn(f,s,d),v.return=f,v)}function c(f,s,d,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Wl(d,f.mode,v),s.return=f,s):(s=l(s,d.children||[]),s.return=f,s)}function h(f,s,d,v,E){return s===null||s.tag!==7?(s=_t(d,f.mode,v,E),s.return=f,s):(s=l(s,d),s.return=f,s)}function m(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Hl(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case nr:return d=Pr(s.type,s.key,s.props,null,f.mode,d),d.ref=hn(f,null,s),d.return=f,d;case It:return s=Wl(s,f.mode,d),s.return=f,s;case Je:var v=s._init;return m(f,v(s._payload),d)}if(wn(s)||cn(s))return s=_t(s,f.mode,d,null),s.return=f,s;pr(f,s)}return null}function p(f,s,d,v){var E=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:a(f,s,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case nr:return d.key===E?u(f,s,d,v):null;case It:return d.key===E?c(f,s,d,v):null;case Je:return E=d._init,p(f,s,E(d._payload),v)}if(wn(d)||cn(d))return E!==null?null:h(f,s,d,v,null);pr(f,d)}return null}function y(f,s,d,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,a(s,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nr:return f=f.get(v.key===null?d:v.key)||null,u(s,f,v,E);case It:return f=f.get(v.key===null?d:v.key)||null,c(s,f,v,E);case Je:var _=v._init;return y(f,s,d,_(v._payload),E)}if(wn(v)||cn(v))return f=f.get(d)||null,h(s,f,v,E,null);pr(s,v)}return null}function w(f,s,d,v){for(var E=null,_=null,N=s,C=s=0,$=null;N!==null&&C<d.length;C++){N.index>C?($=N,N=null):$=N.sibling;var T=p(f,N,d[C],v);if(T===null){N===null&&(N=$);break}e&&N&&T.alternate===null&&t(f,N),s=i(T,s,C),_===null?E=T:_.sibling=T,_=T,N=$}if(C===d.length)return n(f,N),j&&yt(f,C),E;if(N===null){for(;C<d.length;C++)N=m(f,d[C],v),N!==null&&(s=i(N,s,C),_===null?E=N:_.sibling=N,_=N);return j&&yt(f,C),E}for(N=r(f,N);C<d.length;C++)$=y(N,f,C,d[C],v),$!==null&&(e&&$.alternate!==null&&N.delete($.key===null?C:$.key),s=i($,s,C),_===null?E=$:_.sibling=$,_=$);return e&&N.forEach(function(Ce){return t(f,Ce)}),j&&yt(f,C),E}function k(f,s,d,v){var E=cn(d);if(typeof E!="function")throw Error(g(150));if(d=E.call(d),d==null)throw Error(g(151));for(var _=E=null,N=s,C=s=0,$=null,T=d.next();N!==null&&!T.done;C++,T=d.next()){N.index>C?($=N,N=null):$=N.sibling;var Ce=p(f,N,T.value,v);if(Ce===null){N===null&&(N=$);break}e&&N&&Ce.alternate===null&&t(f,N),s=i(Ce,s,C),_===null?E=Ce:_.sibling=Ce,_=Ce,N=$}if(T.done)return n(f,N),j&&yt(f,C),E;if(N===null){for(;!T.done;C++,T=d.next())T=m(f,T.value,v),T!==null&&(s=i(T,s,C),_===null?E=T:_.sibling=T,_=T);return j&&yt(f,C),E}for(N=r(f,N);!T.done;C++,T=d.next())T=y(N,f,C,T.value,v),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?C:T.key),s=i(T,s,C),_===null?E=T:_.sibling=T,_=T);return e&&N.forEach(function(un){return t(f,un)}),j&&yt(f,C),E}function F(f,s,d,v){if(typeof d=="object"&&d!==null&&d.type===Dt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case nr:e:{for(var E=d.key,_=s;_!==null;){if(_.key===E){if(E=d.type,E===Dt){if(_.tag===7){n(f,_.sibling),s=l(_,d.props.children),s.return=f,f=s;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&ga(E)===_.type){n(f,_.sibling),s=l(_,d.props),s.ref=hn(f,_,d),s.return=f,f=s;break e}n(f,_);break}else t(f,_);_=_.sibling}d.type===Dt?(s=_t(d.props.children,f.mode,v,d.key),s.return=f,f=s):(v=Pr(d.type,d.key,d.props,null,f.mode,v),v.ref=hn(f,s,d),v.return=f,f=v)}return o(f);case It:e:{for(_=d.key;s!==null;){if(s.key===_)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(f,s.sibling),s=l(s,d.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=Wl(d,f.mode,v),s.return=f,f=s}return o(f);case Je:return _=d._init,F(f,s,_(d._payload),v)}if(wn(d))return w(f,s,d,v);if(cn(d))return k(f,s,d,v);pr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(n(f,s.sibling),s=l(s,d),s.return=f,f=s):(n(f,s),s=Hl(d,f.mode,v),s.return=f,f=s),o(f)):n(f,s)}return F}var en=ts(!0),ns=ts(!1),Hr=mt(null),Wr=null,$t=null,ao=null;function uo(){ao=$t=Wr=null}function so(e){var t=Hr.current;O(Hr),e._currentValue=t}function xi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yt(e,t){Wr=e,ao=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(Wr===null)throw Error(g(308));$t=e,Wr.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var xt=null;function co(e){xt===null?xt=[e]:xt.push(e)}function rs(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,co(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ls(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,co(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function Sr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var l=e.updateQueue;qe=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(i!==null){var m=l.baseState;o=0,h=c=u=null,a=i;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(p=t,y=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){m=w.call(y,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,p=typeof w=="function"?w.call(y,m,p):w,p==null)break e;m=B({},m,p);break e;case 2:qe=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,u=m):h=h.next=y,o|=p;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;p=a,a=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(u=m),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);zt|=o,e.lanes=o,e.memoizedState=m}}function wa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var qn={},Ae=mt(qn),$n=mt(qn),Hn=mt(qn);function Et(e){if(e===qn)throw Error(g(174));return e}function po(e,t){switch(I(Hn,t),I($n,e),I(Ae,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ti(t,e)}O(Ae),I(Ae,t)}function tn(){O(Ae),O($n),O(Hn)}function is(e){Et(Hn.current);var t=Et(Ae.current),n=ti(t,e.type);t!==n&&(I($n,e),I(Ae,n))}function mo(e){$n.current===e&&(O(Ae),O($n))}var A=mt(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jl=[];function ho(){for(var e=0;e<jl.length;e++)jl[e]._workInProgressVersionPrimary=null;jl.length=0}var _r=Ye.ReactCurrentDispatcher,Al=Ye.ReactCurrentBatchConfig,Rt=0,U=null,K=null,Y=null,Gr=!1,Rn=!1,Wn=0,Qf=0;function te(){throw Error(g(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function go(e,t,n,r,l,i){if(Rt=i,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_r.current=e===null||e.memoizedState===null?Yf:Zf,e=n(r,l),Rn){i=0;do{if(Rn=!1,Wn=0,25<=i)throw Error(g(301));i+=1,Y=K=null,t.updateQueue=null,_r.current=Jf,e=n(r,l)}while(Rn)}if(_r.current=Xr,t=K!==null&&K.next!==null,Rt=0,Y=K=U=null,Gr=!1,t)throw Error(g(300));return e}function yo(){var e=Wn!==0;return Wn=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?U.memoizedState=Y=e:Y=Y.next=e,Y}function Ne(){if(K===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Y===null?U.memoizedState:Y.next;if(t!==null)Y=t,K=e;else{if(e===null)throw Error(g(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Y===null?U.memoizedState=Y=e:Y=Y.next=e}return Y}function Qn(e,t){return typeof t=="function"?t(e):t}function Ul(e){var t=Ne(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,c=i;do{var h=c.lane;if((Rt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,o=r):u=u.next=m,U.lanes|=h,zt|=h}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=a,Ie(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,U.lanes|=i,zt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=Ne(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ie(i,t.memoizedState)||(ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function os(){}function as(e,t){var n=U,r=Ne(),l=t(),i=!Ie(r.memoizedState,l);if(i&&(r.memoizedState=l,ce=!0),r=r.queue,wo(cs.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Y!==null&&Y.memoizedState.tag&1){if(n.flags|=2048,Kn(9,ss.bind(null,n,r,l,t),void 0,null),Z===null)throw Error(g(349));Rt&30||us(n,t,l)}return l}function us(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ss(e,t,n,r){t.value=n,t.getSnapshot=r,fs(t)&&ds(e)}function cs(e,t,n){return n(function(){fs(t)&&ds(e)})}function fs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function ds(e){var t=Ge(e,1);t!==null&&Me(t,e,1,-1)}function ka(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=Xf.bind(null,U,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ps(){return Ne().memoizedState}function Nr(e,t,n,r){var l=Oe();U.flags|=e,l.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function ol(e,t,n,r){var l=Ne();r=r===void 0?null:r;var i=void 0;if(K!==null){var o=K.memoizedState;if(i=o.destroy,r!==null&&vo(r,o.deps)){l.memoizedState=Kn(t,n,i,r);return}}U.flags|=e,l.memoizedState=Kn(1|t,n,i,r)}function xa(e,t){return Nr(8390656,8,e,t)}function wo(e,t){return ol(2048,8,e,t)}function ms(e,t){return ol(4,2,e,t)}function hs(e,t){return ol(4,4,e,t)}function vs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){return n=n!=null?n.concat([e]):null,ol(4,4,vs.bind(null,t,e),n)}function ko(){}function ys(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ks(e,t,n){return Rt&21?(Ie(n,t)||(n=Nu(),U.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function Kf(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Al.transition;Al.transition={};try{e(!1),t()}finally{M=n,Al.transition=r}}function xs(){return Ne().memoizedState}function Gf(e,t,n){var r=st(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Es(e))Ss(t,n);else if(n=rs(e,t,n,r),n!==null){var l=oe();Me(n,e,r,l),_s(n,t,r)}}function Xf(e,t,n){var r=st(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Es(e))Ss(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Ie(a,o)){var u=t.interleaved;u===null?(l.next=l,co(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=rs(e,t,l,r),n!==null&&(l=oe(),Me(n,e,r,l),_s(n,t,r))}}function Es(e){var t=e.alternate;return e===U||t!==null&&t===U}function Ss(e,t){Rn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _s(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var Xr={readContext:_e,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},Yf={readContext:_e,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:xa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nr(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nr(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gf.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:ka,useDebugValue:ko,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=ka(!1),t=e[0];return e=Kf.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,l=Oe();if(j){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),Z===null)throw Error(g(349));Rt&30||us(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,xa(cs.bind(null,r,i,e),[e]),r.flags|=2048,Kn(9,ss.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Oe(),t=Z.identifierPrefix;if(j){var n=$e,r=Ve;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zf={readContext:_e,useCallback:ys,useContext:_e,useEffect:wo,useImperativeHandle:gs,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:ws,useReducer:Ul,useRef:ps,useState:function(){return Ul(Qn)},useDebugValue:ko,useDeferredValue:function(e){var t=Ne();return ks(t,K.memoizedState,e)},useTransition:function(){var e=Ul(Qn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:os,useSyncExternalStore:as,useId:xs,unstable_isNewReconciler:!1},Jf={readContext:_e,useCallback:ys,useContext:_e,useEffect:wo,useImperativeHandle:gs,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:ws,useReducer:Bl,useRef:ps,useState:function(){return Bl(Qn)},useDebugValue:ko,useDeferredValue:function(e){var t=Ne();return K===null?t.memoizedState=e:ks(t,K.memoizedState,e)},useTransition:function(){var e=Bl(Qn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:os,useSyncExternalStore:as,useId:xs,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ei(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),l=st(e),i=We(r,l);i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Me(t,e,l,r),Sr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),l=st(e),i=We(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Me(t,e,l,r),Sr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=st(e),l=We(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(Me(t,e,r,n),Sr(t,e,r))}};function Ea(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!An(n,r)||!An(l,i):!0}function Ns(e,t,n){var r=!1,l=dt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=de(t)?Nt:le.current,r=t.contextTypes,i=(r=r!=null)?qt(e,l):dt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Sa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function Si(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},fo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=de(t)?Nt:le.current,l.context=qt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ei(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&al.enqueueReplaceState(l,l.state,null),Qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=_c(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qf=typeof WeakMap=="function"?WeakMap:Map;function Cs(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zr||(Zr=!0,Di=r),_i(e,t)},n}function Rs(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){_i(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_i(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function _a(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=dd.bind(null,e,t,n),t.then(e,e))}function Na(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ca(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var bf=Ye.ReactCurrentOwner,ce=!1;function ie(e,t,n,r){t.child=e===null?ns(t,null,n,r):en(t,e.child,n,r)}function Ra(e,t,n,r,l){n=n.render;var i=t.ref;return Yt(t,l),r=go(e,t,n,r,i,l),n=yo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(j&&n&&lo(t),t.flags|=1,ie(e,t,r,l),t.child)}function za(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!zo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,zs(e,t,i,r,l)):(e=Pr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:An,n(o,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function zs(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(An(i,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Ni(e,t,n,r,l)}function Ps(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Wt,me),me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Wt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,I(Wt,me),me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,I(Wt,me),me|=r;return ie(e,t,l,n),t.child}function Ts(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ni(e,t,n,r,l){var i=de(n)?Nt:le.current;return i=qt(t,i),Yt(t,l),n=go(e,t,n,r,i,l),r=yo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(j&&r&&lo(t),t.flags|=1,ie(e,t,n,l),t.child)}function Pa(e,t,n,r,l){if(de(n)){var i=!0;Br(t)}else i=!1;if(Yt(t,l),t.stateNode===null)Cr(e,t),Ns(t,n,r),Si(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=de(n)?Nt:le.current,c=qt(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Sa(t,o,r,c),qe=!1;var p=t.memoizedState;o.state=p,Qr(t,r,o,l),u=t.memoizedState,a!==r||p!==u||fe.current||qe?(typeof h=="function"&&(Ei(t,n,h,r),u=t.memoizedState),(a=qe||Ea(t,n,a,r,p,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ls(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ze(t.type,a),o.props=c,m=t.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=de(n)?Nt:le.current,u=qt(t,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||p!==u)&&Sa(t,o,r,u),qe=!1,p=t.memoizedState,o.state=p,Qr(t,r,o,l);var w=t.memoizedState;a!==m||p!==w||fe.current||qe?(typeof y=="function"&&(Ei(t,n,y,r),w=t.memoizedState),(c=qe||Ea(t,n,c,r,p,w,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ci(e,t,n,r,i,l)}function Ci(e,t,n,r,l,i){Ts(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&ma(t,n,!1),Xe(e,t,i);r=t.stateNode,bf.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=en(t,e.child,null,i),t.child=en(t,null,a,i)):ie(e,t,a,i),t.memoizedState=r.state,l&&ma(t,n,!0),t.child}function Ls(e){var t=e.stateNode;t.pendingContext?pa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pa(e,t.context,!1),po(e,t.containerInfo)}function Ta(e,t,n,r,l){return bt(),oo(l),t.flags|=256,ie(e,t,n,r),t.child}var Ri={dehydrated:null,treeContext:null,retryLane:0};function zi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ms(e,t,n){var r=t.pendingProps,l=A.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),I(A,l&1),e===null)return ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=cl(o,r,0,null),e=_t(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=zi(n),t.memoizedState=Ri,e):xo(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return ed(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ct(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=ct(a,i):(i=_t(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?zi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ri,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xo(e,t){return t=cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&oo(r),en(t,e.child,null,n),e=xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ed(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(g(422))),mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=cl({mode:"visible",children:r.children},l,0,null),i=_t(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&en(t,e.child,null,o),t.child.memoizedState=zi(o),t.memoizedState=Ri,i);if(!(t.mode&1))return mr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(g(419)),r=Vl(i,r,void 0),mr(e,t,o,r)}if(a=(o&e.childLanes)!==0,ce||a){if(r=Z,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ge(e,l),Me(r,e,l,-1))}return Ro(),r=Vl(Error(g(421))),mr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=pd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,he=ot(l.nextSibling),ve=t,j=!0,Te=null,e!==null&&(ke[xe++]=Ve,ke[xe++]=$e,ke[xe++]=Ct,Ve=e.id,$e=e.overflow,Ct=t),t=xo(t,r.children),t.flags|=4096,t)}function La(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xi(e.return,t,n)}function $l(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Is(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ie(e,t,r.children,n),r=A.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&La(e,n,t);else if(e.tag===19)La(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(A,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),$l(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}$l(t,!0,n,null,i);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function td(e,t,n){switch(t.tag){case 3:Ls(t),bt();break;case 5:is(t);break;case 1:de(t.type)&&Br(t);break;case 4:po(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;I(Hr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(A,A.current&1),t.flags|=128,null):n&t.child.childLanes?Ms(e,t,n):(I(A,A.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);I(A,A.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Is(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(A,A.current),r)break;return null;case 22:case 23:return t.lanes=0,Ps(e,t,n)}return Xe(e,t,n)}var Ds,Pi,Os,Fs;Ds=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pi=function(){};Os=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Et(Ae.current);var i=null;switch(n){case"input":l=Jl(e,l),r=Jl(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=ei(e,l),r=ei(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ar)}ni(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ln.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&D("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Fs=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!j)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function nd(e,t,n){var r=t.pendingProps;switch(io(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return de(t.type)&&Ur(),ne(t),null;case 3:return r=t.stateNode,tn(),O(fe),O(le),ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(ji(Te),Te=null))),Pi(e,t),ne(t),null;case 5:mo(t);var l=Et(Hn.current);if(n=t.type,e!==null&&t.stateNode!=null)Os(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return ne(t),null}if(e=Et(Ae.current),dr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fe]=t,r[Vn]=i,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<xn.length;l++)D(xn[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Bo(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":$o(r,i),D("invalid",r)}ni(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,a,e),l=["children",""+a]):Ln.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&D("scroll",r)}switch(n){case"input":rr(r),Vo(r,i,!0);break;case"textarea":rr(r),Ho(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ar)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Fe]=t,e[Vn]=r,Ds(e,t,!1,!1),t.stateNode=e;e:{switch(o=ri(n,r),n){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<xn.length;l++)D(xn[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":Bo(e,r),l=Jl(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),D("invalid",e);break;case"textarea":$o(e,r),l=ei(e,r),D("invalid",e);break;default:l=r}ni(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?pu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Mn(e,u):typeof u=="number"&&Mn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ln.hasOwnProperty(i)?u!=null&&i==="onScroll"&&D("scroll",e):u!=null&&Wi(e,i,u,o))}switch(n){case"input":rr(e),Vo(e,r,!1);break;case"textarea":rr(e),Ho(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ar)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Fs(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=Et(Hn.current),Et(Ae.current),dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return ne(t),null;case 13:if(O(A),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(j&&he!==null&&t.mode&1&&!(t.flags&128))es(),bt(),t.flags|=98560,i=!1;else if(i=dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(g(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[Fe]=t}else bt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else Te!==null&&(ji(Te),Te=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||A.current&1?G===0&&(G=3):Ro())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return tn(),Pi(e,t),e===null&&Un(t.stateNode.containerInfo),ne(t),null;case 10:return so(t.type._context),ne(t),null;case 17:return de(t.type)&&Ur(),ne(t),null;case 19:if(O(A),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)vn(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Kr(e),o!==null){for(t.flags|=128,vn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(A,A.current&1|2),t.child}e=e.sibling}i.tail!==null&&W()>rn&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!j)return ne(t),null}else 2*W()-i.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=W(),t.sibling=null,n=A.current,I(A,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Co(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function rd(e,t){switch(io(t),t.tag){case 1:return de(t.type)&&Ur(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),O(fe),O(le),ho(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mo(t),null;case 13:if(O(A),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));bt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(A),null;case 4:return tn(),null;case 10:return so(t.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var hr=!1,re=!1,ld=typeof WeakSet=="function"?WeakSet:Set,x=null;function Ht(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Ti(e,t,n){try{n()}catch(r){V(e,t,r)}}var Ma=!1;function id(e,t){if(pi=Or,e=Vu(),ro(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var y;m!==n||l!==0&&m.nodeType!==3||(a=o+l),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break t;if(p===n&&++c===l&&(a=o),p===i&&++h===r&&(u=o),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Or=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,F=w.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:ze(t.type,k),F);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return w=Ma,Ma=!1,w}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ti(t,n,i)}l=l.next}while(l!==r)}}function ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Li(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function js(e){var t=e.alternate;t!==null&&(e.alternate=null,js(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Vn],delete t[gi],delete t[Vf],delete t[$f])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function As(e){return e.tag===5||e.tag===3||e.tag===4}function Ia(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||As(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ar));else if(r!==4&&(e=e.child,e!==null))for(Mi(e,t,n),e=e.sibling;e!==null;)Mi(e,t,n),e=e.sibling}function Ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}var J=null,Pe=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Us(e,t,n),n=n.sibling}function Us(e,t,n){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(el,n)}catch{}switch(n.tag){case 5:re||Ht(n,t);case 6:var r=J,l=Pe;J=null,Ze(e,t,n),J=r,Pe=l,J!==null&&(Pe?(e=J,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):J.removeChild(n.stateNode));break;case 18:J!==null&&(Pe?(e=J,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),Fn(e)):Ol(J,n.stateNode));break;case 4:r=J,l=Pe,J=n.stateNode.containerInfo,Pe=!0,Ze(e,t,n),J=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ti(n,t,o),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!re&&(Ht(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){V(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Ze(e,t,n),re=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Da(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ld),t.forEach(function(r){var l=md.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:J=a.stateNode,Pe=!1;break e;case 3:J=a.stateNode.containerInfo,Pe=!0;break e;case 4:J=a.stateNode.containerInfo,Pe=!0;break e}a=a.return}if(J===null)throw Error(g(160));Us(i,o,l),J=null,Pe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){V(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bs(t,e),t=t.sibling}function Bs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),De(e),r&4){try{zn(3,e,e.return),ul(3,e)}catch(k){V(e,e.return,k)}try{zn(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:Re(t,e),De(e),r&512&&n!==null&&Ht(n,n.return);break;case 5:if(Re(t,e),De(e),r&512&&n!==null&&Ht(n,n.return),e.flags&32){var l=e.stateNode;try{Mn(l,"")}catch(k){V(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&uu(l,i),ri(a,o);var c=ri(a,i);for(o=0;o<u.length;o+=2){var h=u[o],m=u[o+1];h==="style"?pu(l,m):h==="dangerouslySetInnerHTML"?fu(l,m):h==="children"?Mn(l,m):Wi(l,h,m,c)}switch(a){case"input":ql(l,i);break;case"textarea":su(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Qt(l,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Qt(l,!!i.multiple,i.defaultValue,!0):Qt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Vn]=i}catch(k){V(e,e.return,k)}}break;case 6:if(Re(t,e),De(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){V(e,e.return,k)}}break;case 3:if(Re(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:Re(t,e),De(e);break;case 13:Re(t,e),De(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(_o=W())),r&4&&Da(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||h,Re(t,e),re=c):Re(t,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(x=e,h=e.child;h!==null;){for(m=x=h;x!==null;){switch(p=x,y=p.child,p.tag){case 0:case 11:case 14:case 15:zn(4,p,p.return);break;case 1:Ht(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){V(r,n,k)}}break;case 5:Ht(p,p.return);break;case 22:if(p.memoizedState!==null){Fa(m);continue}}y!==null?(y.return=p,x=y):Fa(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=du("display",o))}catch(k){V(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){V(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Re(t,e),De(e),r&4&&Da(e);break;case 21:break;default:Re(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(As(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Mn(l,""),r.flags&=-33);var i=Ia(e);Ii(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ia(e);Mi(e,a,o);break;default:throw Error(g(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function od(e,t,n){x=e,Vs(e)}function Vs(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var l=x,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||hr;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||re;a=hr;var c=re;if(hr=o,(re=u)&&!c)for(x=l;x!==null;)o=x,u=o.child,o.tag===22&&o.memoizedState!==null?ja(l):u!==null?(u.return=o,x=u):ja(l);for(;i!==null;)x=i,Vs(i),i=i.sibling;x=l,hr=a,re=c}Oa(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,x=i):Oa(e)}}function Oa(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wa(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wa(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Fn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}re||t.flags&512&&Li(t)}catch(p){V(t,t.return,p)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function Fa(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function ja(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ul(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){V(t,l,u)}}var i=t.return;try{Li(t)}catch(u){V(t,i,u)}break;case 5:var o=t.return;try{Li(t)}catch(u){V(t,o,u)}}}catch(u){V(t,t.return,u)}if(t===e){x=null;break}var a=t.sibling;if(a!==null){a.return=t.return,x=a;break}x=t.return}}var ad=Math.ceil,Yr=Ye.ReactCurrentDispatcher,Eo=Ye.ReactCurrentOwner,Se=Ye.ReactCurrentBatchConfig,L=0,Z=null,Q=null,q=0,me=0,Wt=mt(0),G=0,Gn=null,zt=0,sl=0,So=0,Pn=null,se=null,_o=0,rn=1/0,Ue=null,Zr=!1,Di=null,ut=null,vr=!1,nt=null,Jr=0,Tn=0,Oi=null,Rr=-1,zr=0;function oe(){return L&6?W():Rr!==-1?Rr:Rr=W()}function st(e){return e.mode&1?L&2&&q!==0?q&-q:Wf.transition!==null?(zr===0&&(zr=Nu()),zr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Mu(e.type)),e):1}function Me(e,t,n,r){if(50<Tn)throw Tn=0,Oi=null,Error(g(185));Yn(e,n,r),(!(L&2)||e!==Z)&&(e===Z&&(!(L&2)&&(sl|=n),G===4&&et(e,q)),pe(e,r),n===1&&L===0&&!(t.mode&1)&&(rn=W()+500,il&&ht()))}function pe(e,t){var n=e.callbackNode;Hc(e,t);var r=Dr(e,e===Z?q:0);if(r===0)n!==null&&Ko(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ko(n),t===1)e.tag===0?Hf(Aa.bind(null,e)):Ju(Aa.bind(null,e)),Uf(function(){!(L&6)&&ht()}),n=null;else{switch(Cu(r)){case 1:n=Yi;break;case 4:n=Su;break;case 16:n=Ir;break;case 536870912:n=_u;break;default:n=Ir}n=Ys(n,$s.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $s(e,t){if(Rr=-1,zr=0,L&6)throw Error(g(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Dr(e,e===Z?q:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qr(e,r);else{t=r;var l=L;L|=2;var i=Ws();(Z!==e||q!==t)&&(Ue=null,rn=W()+500,St(e,t));do try{cd();break}catch(a){Hs(e,a)}while(!0);uo(),Yr.current=i,L=l,Q!==null?t=0:(Z=null,q=0,t=G)}if(t!==0){if(t===2&&(l=ui(e),l!==0&&(r=l,t=Fi(e,l))),t===1)throw n=Gn,St(e,0),et(e,r),pe(e,W()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!ud(l)&&(t=qr(e,r),t===2&&(i=ui(e),i!==0&&(r=i,t=Fi(e,i))),t===1))throw n=Gn,St(e,0),et(e,r),pe(e,W()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:wt(e,se,Ue);break;case 3:if(et(e,r),(r&130023424)===r&&(t=_o+500-W(),10<t)){if(Dr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vi(wt.bind(null,e,se,Ue),t);break}wt(e,se,Ue);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Le(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ad(r/1960))-r,10<r){e.timeoutHandle=vi(wt.bind(null,e,se,Ue),r);break}wt(e,se,Ue);break;case 5:wt(e,se,Ue);break;default:throw Error(g(329))}}}return pe(e,W()),e.callbackNode===n?$s.bind(null,e):null}function Fi(e,t){var n=Pn;return e.current.memoizedState.isDehydrated&&(St(e,t).flags|=256),e=qr(e,t),e!==2&&(t=se,se=n,t!==null&&ji(t)),e}function ji(e){se===null?se=e:se.push.apply(se,e)}function ud(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ie(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~So,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function Aa(e){if(L&6)throw Error(g(327));Zt();var t=Dr(e,0);if(!(t&1))return pe(e,W()),null;var n=qr(e,t);if(e.tag!==0&&n===2){var r=ui(e);r!==0&&(t=r,n=Fi(e,r))}if(n===1)throw n=Gn,St(e,0),et(e,t),pe(e,W()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,se,Ue),pe(e,W()),null}function No(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(rn=W()+500,il&&ht())}}function Pt(e){nt!==null&&nt.tag===0&&!(L&6)&&Zt();var t=L;L|=1;var n=Se.transition,r=M;try{if(Se.transition=null,M=1,e)return e()}finally{M=r,Se.transition=n,L=t,!(L&6)&&ht()}}function Co(){me=Wt.current,O(Wt)}function St(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Af(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(io(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:tn(),O(fe),O(le),ho();break;case 5:mo(r);break;case 4:tn();break;case 13:O(A);break;case 19:O(A);break;case 10:so(r.type._context);break;case 22:case 23:Co()}n=n.return}if(Z=e,Q=e=ct(e.current,null),q=me=t,G=0,Gn=null,So=sl=zt=0,se=Pn=null,xt!==null){for(t=0;t<xt.length;t++)if(n=xt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}xt=null}return e}function Hs(e,t){do{var n=Q;try{if(uo(),_r.current=Xr,Gr){for(var r=U.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(Rt=0,Y=K=U=null,Rn=!1,Wn=0,Eo.current=null,n===null||n.return===null){G=1,Gn=t,Q=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=q,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Na(o);if(y!==null){y.flags&=-257,Ca(y,o,a,i,t),y.mode&1&&_a(i,c,t),t=y,u=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){_a(i,c,t),Ro();break e}u=Error(g(426))}}else if(j&&a.mode&1){var F=Na(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ca(F,o,a,i,t),oo(nn(u,a));break e}}i=u=nn(u,a),G!==4&&(G=2),Pn===null?Pn=[i]:Pn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Cs(i,u,t);ya(i,f);break e;case 1:a=u;var s=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ut===null||!ut.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Rs(i,a,t);ya(i,v);break e}}i=i.return}while(i!==null)}Ks(n)}catch(E){t=E,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function Ws(){var e=Yr.current;return Yr.current=Xr,e===null?Xr:e}function Ro(){(G===0||G===3||G===2)&&(G=4),Z===null||!(zt&268435455)&&!(sl&268435455)||et(Z,q)}function qr(e,t){var n=L;L|=2;var r=Ws();(Z!==e||q!==t)&&(Ue=null,St(e,t));do try{sd();break}catch(l){Hs(e,l)}while(!0);if(uo(),L=n,Yr.current=r,Q!==null)throw Error(g(261));return Z=null,q=0,G}function sd(){for(;Q!==null;)Qs(Q)}function cd(){for(;Q!==null&&!Dc();)Qs(Q)}function Qs(e){var t=Xs(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Ks(e):Q=t,Eo.current=null}function Ks(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rd(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Q=null;return}}else if(n=nd(n,t,me),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);G===0&&(G=5)}function wt(e,t,n){var r=M,l=Se.transition;try{Se.transition=null,M=1,fd(e,t,n,r)}finally{Se.transition=l,M=r}return null}function fd(e,t,n,r){do Zt();while(nt!==null);if(L&6)throw Error(g(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Wc(e,i),e===Z&&(Q=Z=null,q=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,Ys(Ir,function(){return Zt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Se.transition,Se.transition=null;var o=M;M=1;var a=L;L|=4,Eo.current=null,id(e,n),Bs(n,e),Lf(mi),Or=!!pi,mi=pi=null,e.current=n,od(n),Oc(),L=a,M=o,Se.transition=i}else e.current=n;if(vr&&(vr=!1,nt=e,Jr=l),i=e.pendingLanes,i===0&&(ut=null),Ac(n.stateNode),pe(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Zr)throw Zr=!1,e=Di,Di=null,e;return Jr&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===Oi?Tn++:(Tn=0,Oi=e):Tn=0,ht(),null}function Zt(){if(nt!==null){var e=Cu(Jr),t=Se.transition,n=M;try{if(Se.transition=null,M=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Jr=0,L&6)throw Error(g(331));var l=L;for(L|=4,x=e.current;x!==null;){var i=x,o=i.child;if(x.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(x=c;x!==null;){var h=x;switch(h.tag){case 0:case 11:case 15:zn(8,h,i)}var m=h.child;if(m!==null)m.return=h,x=m;else for(;x!==null;){h=x;var p=h.sibling,y=h.return;if(js(h),h===c){x=null;break}if(p!==null){p.return=y,x=p;break}x=y}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}x=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,x=o;else e:for(;x!==null;){if(i=x,i.flags&2048)switch(i.tag){case 0:case 11:case 15:zn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,x=f;break e}x=i.return}}var s=e.current;for(x=s;x!==null;){o=x;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,x=d;else e:for(o=s;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(E){V(a,a.return,E)}if(a===o){x=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,x=v;break e}x=a.return}}if(L=l,ht(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(el,e)}catch{}r=!0}return r}finally{M=n,Se.transition=t}}return!1}function Ua(e,t,n){t=nn(n,t),t=Cs(e,t,1),e=at(e,t,1),t=oe(),e!==null&&(Yn(e,1,t),pe(e,t))}function V(e,t,n){if(e.tag===3)Ua(e,e,n);else for(;t!==null;){if(t.tag===3){Ua(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=nn(n,e),e=Rs(t,e,1),t=at(t,e,1),e=oe(),t!==null&&(Yn(t,1,e),pe(t,e));break}}t=t.return}}function dd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(q&n)===n&&(G===4||G===3&&(q&130023424)===q&&500>W()-_o?St(e,0):So|=n),pe(e,t)}function Gs(e,t){t===0&&(e.mode&1?(t=or,or<<=1,!(or&130023424)&&(or=4194304)):t=1);var n=oe();e=Ge(e,t),e!==null&&(Yn(e,t,n),pe(e,n))}function pd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gs(e,n)}function md(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),Gs(e,n)}var Xs;Xs=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,td(e,t,n);ce=!!(e.flags&131072)}else ce=!1,j&&t.flags&1048576&&qu(t,$r,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Cr(e,t),e=t.pendingProps;var l=qt(t,le.current);Yt(t,n),l=go(null,t,r,e,l,n);var i=yo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,de(r)?(i=!0,Br(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,fo(t),l.updater=al,t.stateNode=l,l._reactInternals=t,Si(t,r,e,n),t=Ci(null,t,r,!0,i,n)):(t.tag=0,j&&i&&lo(t),ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Cr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=vd(r),e=ze(r,e),l){case 0:t=Ni(null,t,r,e,n);break e;case 1:t=Pa(null,t,r,e,n);break e;case 11:t=Ra(null,t,r,e,n);break e;case 14:t=za(null,t,r,ze(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Ni(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Pa(e,t,r,l,n);case 3:e:{if(Ls(t),e===null)throw Error(g(387));r=t.pendingProps,i=t.memoizedState,l=i.element,ls(e,t),Qr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=nn(Error(g(423)),t),t=Ta(e,t,r,n,l);break e}else if(r!==l){l=nn(Error(g(424)),t),t=Ta(e,t,r,n,l);break e}else for(he=ot(t.stateNode.containerInfo.firstChild),ve=t,j=!0,Te=null,n=ns(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bt(),r===l){t=Xe(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return is(t),e===null&&ki(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,hi(r,l)?o=null:i!==null&&hi(r,i)&&(t.flags|=32),Ts(e,t),ie(e,t,o,n),t.child;case 6:return e===null&&ki(t),null;case 13:return Ms(e,t,n);case 4:return po(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Ra(e,t,r,l,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,I(Hr,r._currentValue),r._currentValue=o,i!==null)if(Ie(i.value,o)){if(i.children===l.children&&!fe.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=We(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),xi(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(g(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Yt(t,n),l=_e(l),r=r(l),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,l=ze(r,t.pendingProps),l=ze(r.type,l),za(e,t,r,l,n);case 15:return zs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Cr(e,t),t.tag=1,de(r)?(e=!0,Br(t)):e=!1,Yt(t,n),Ns(t,r,l),Si(t,r,l,n),Ci(null,t,r,!0,e,n);case 19:return Is(e,t,n);case 22:return Ps(e,t,n)}throw Error(g(156,t.tag))};function Ys(e,t){return Eu(e,t)}function hd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new hd(e,t,n,r)}function zo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vd(e){if(typeof e=="function")return zo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ki)return 11;if(e===Gi)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")zo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dt:return _t(n.children,l,i,t);case Qi:o=8,l|=8;break;case Gl:return e=Ee(12,n,t,l|2),e.elementType=Gl,e.lanes=i,e;case Xl:return e=Ee(13,n,t,l),e.elementType=Xl,e.lanes=i,e;case Yl:return e=Ee(19,n,t,l),e.elementType=Yl,e.lanes=i,e;case iu:return cl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ru:o=10;break e;case lu:o=9;break e;case Ki:o=11;break e;case Gi:o=14;break e;case Je:o=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function _t(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function cl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=iu,e.lanes=n,e.stateNode={isHidden:!1},e}function Hl(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Po(e,t,n,r,l,i,o,a,u){return e=new gd(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(i),e}function yd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zs(e){if(!e)return dt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(de(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(de(n))return Zu(e,n,t)}return t}function Js(e,t,n,r,l,i,o,a,u){return e=Po(n,r,!0,e,l,i,o,a,u),e.context=Zs(null),n=e.current,r=oe(),l=st(n),i=We(r,l),i.callback=t??null,at(n,i,l),e.current.lanes=l,Yn(e,l,r),pe(e,r),e}function fl(e,t,n,r){var l=t.current,i=oe(),o=st(l);return n=Zs(n),t.context===null?t.context=n:t.pendingContext=n,t=We(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,o),e!==null&&(Me(e,l,o,i),Sr(e,l,o)),o}function br(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ba(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function To(e,t){Ba(e,t),(e=e.alternate)&&Ba(e,t)}function wd(){return null}var qs=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lo(e){this._internalRoot=e}dl.prototype.render=Lo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));fl(e,t,null,null)};dl.prototype.unmount=Lo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){fl(null,e,null,null)}),t[Ke]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<be.length&&t!==0&&t<be[n].priority;n++);be.splice(n,0,e),n===0&&Lu(e)}};function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Va(){}function kd(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=br(o);i.call(c)}}var o=Js(t,r,e,0,null,!1,!1,"",Va);return e._reactRootContainer=o,e[Ke]=o.current,Un(e.nodeType===8?e.parentNode:e),Pt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=br(u);a.call(c)}}var u=Po(e,0,!1,null,null,!1,!1,"",Va);return e._reactRootContainer=u,e[Ke]=u.current,Un(e.nodeType===8?e.parentNode:e),Pt(function(){fl(t,u,n,r)}),u}function ml(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=br(o);a.call(u)}}fl(t,o,e,l)}else o=kd(n,t,e,l,r);return br(o)}Ru=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(Zi(t,n|1),pe(t,W()),!(L&6)&&(rn=W()+500,ht()))}break;case 13:Pt(function(){var r=Ge(e,1);if(r!==null){var l=oe();Me(r,e,1,l)}}),To(e,1)}};Ji=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=oe();Me(t,e,134217728,n)}To(e,134217728)}};zu=function(e){if(e.tag===13){var t=st(e),n=Ge(e,t);if(n!==null){var r=oe();Me(n,e,t,r)}To(e,t)}};Pu=function(){return M};Tu=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};ii=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ll(r);if(!l)throw Error(g(90));au(r),ql(r,l)}}}break;case"textarea":su(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};vu=No;gu=Pt;var xd={usingClientEntryPoint:!1,Events:[Jn,At,ll,mu,hu,No]},gn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ed={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ku(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||wd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gr.isDisabled&&gr.supportsFiber)try{el=gr.inject(Ed),je=gr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xd;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mo(t))throw Error(g(200));return yd(e,t,null,n)};ye.createRoot=function(e,t){if(!Mo(e))throw Error(g(299));var n=!1,r="",l=qs;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Po(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Un(e.nodeType===8?e.parentNode:e),new Lo(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=ku(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Pt(e)};ye.hydrate=function(e,t,n){if(!pl(t))throw Error(g(200));return ml(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!Mo(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=qs;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Js(t,null,e,1,n??null,l,!1,i,o),e[Ke]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new dl(t)};ye.render=function(e,t,n){if(!pl(t))throw Error(g(200));return ml(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!pl(e))throw Error(g(40));return e._reactRootContainer?(Pt(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ye.unstable_batchedUpdates=No;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pl(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return ml(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function bs(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bs)}catch(e){console.error(e)}}bs(),ba.exports=ye;var Sd=ba.exports,$a=Sd;Ql.createRoot=$a.createRoot,Ql.hydrateRoot=$a.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ec=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=He.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...a},u)=>He.createElement("svg",{ref:u,...Nd,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ec("lucide",l),...a},[...o.map(([c,h])=>He.createElement(c,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=(e,t)=>{const n=He.forwardRef(({className:r,...l},i)=>He.createElement(Cd,{ref:i,iconNode:t,className:ec(`lucide-${_d(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=ee("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=ee("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=ee("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=ee("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=ee("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=ee("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=ee("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=ee("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ee("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=ee("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=ee("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=ee("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=ee("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=ee("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=ee("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=ee("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Wd=[{title:"Home",id:"home"},{title:"About",id:"about"},{title:"Service",id:"service"},{title:"Contact",id:"contact"}],Qd=[{id:"hunza",title:"Hunza Valley",text:"Terraced orchards, glacial peaks, and villages irrigated by 2,000-year-old channels carved straight into the mountainside. Hunza is the valley every other itinerary is measured against.",mainImage:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",raisedImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNgSle7KSvQlrZGMPIOXLXNSCK4FWhXR_GBzZVBA42Q&s=10",reverse:!1},{id:"fairy-meadows",title:"Fairy Meadows",text:"A pine-forest plateau facing Nanga Parbat's sheer north wall — the ninth-highest mountain on earth, close enough that you can hear the seracs shift at night.",mainImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Kk0XzZHU1hhNbN7FeQ9MeWgB42nFwoAjkuvsXfYAOw&s=10",raisedImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBbVb7ZqhV6gPpUvWsZAoYGh-fTmH-aubIE9hTyZHdQ&s=10",reverse:!0},{id:"deosai",title:"Deosai Plains",text:"The second-highest plateau on earth: 4,100 square kilometers of wildflowers, brown bears, and a night sky with no light pollution for fifty kilometers in any direction.",mainImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXS9a7bkhTBthAP6Jy5Lu0_w70i0ikOb1PXOhvnCi9Mg&s=10",raisedImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMAXD1MfIAecK25V-bZ3roBsi3Temmq59ezUbyKNk8w&s=10",reverse:!1}],Kd=[{id:"hunza-trek",name:"Hunza Valley Trek",days:6,price:"PKR 45,000",image:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&q=80",text:"Village-to-village walking beneath Rakaposhi's north face."},{id:"fairy-meadows",name:"Fairy Meadows Base Camp",days:4,price:"PKR 38,000",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Kk0XzZHU1hhNbN7FeQ9MeWgB42nFwoAjkuvsXfYAOw&s=10",text:"A jeep track, a pine forest, and Nanga Parbat rising straight ahead."},{id:"swat-valley",name:"Swat Valley Discovery",days:3,price:"PKR 22,000",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNgSle7KSvQlrZGMPIOXLXNSCK4FWhXR_GBzZVBA42Q&s=10",text:"Terraced fields and Buddhist ruins in the Switzerland of Pakistan."},{id:"k2-basecamp",name:"K2 Base Camp Expedition",days:14,price:"PKR 165,000",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBbVb7ZqhV6gPpUvWsZAoYGh-fTmH-aubIE9hTyZHdQ&s=10",text:"The Baltoro glacier and four 8,000m peaks in one sightline."},{id:"deosai",name:"Deosai Plains Camping",days:3,price:"PKR 28,000",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXS9a7bkhTBthAP6Jy5Lu0_w70i0ikOb1PXOhvnCi9Mg&s=10",text:"Wildflowers, brown bears, and the darkest skies in the north."},{id:"chitral",name:"Chitral & Kalash Valleys",days:7,price:"PKR 52,000",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMAXD1MfIAecK25V-bZ3roBsi3Temmq59ezUbyKNk8w&s=10",text:"Cross the Lowari Pass into a centuries-old distinct culture."}],Gd=[{id:"guiding",icon:Td,title:"Guided Trekking",text:"Local guides who grew up on these trails lead every route, at a pace set by the group."},{id:"permits",icon:jd,title:"Permits & Documentation",text:"We handle trekking permits, national park fees, and any required local registrations."},{id:"gear",icon:zd,title:"Gear Rental",text:"Tents, sleeping bags, and cold-weather gear available to rent so you can pack light."},{id:"planning",icon:Pd,title:"Custom Itineraries",text:"Tell us your dates and fitness level — we'll build a route that actually fits them."}];function Ha({onNavClick:e,orientation:t="row"}){return React.createElement("ul",{className:`nav-links nav-links--${t}`},Wd.map(n=>React.createElement("li",{key:n.id},React.createElement("button",{onClick:()=>e(n.id)},n.title))))}function Xd({onNavClick:e}){const[t,n]=He.useState(!1),r=l=>{n(!1),e(l)};return React.createElement("header",{className:"navbar"},React.createElement("div",{className:"navbar__inner"},React.createElement("button",{className:"navbar__logo",onClick:()=>r("home")},"Kohsar",React.createElement("span",null,"Journeys")),React.createElement("div",{className:"navbar__desktop"},React.createElement(Ha,{onNavClick:r,orientation:"row"}),React.createElement("button",{className:"btn btn--primary",onClick:()=>r("contact")},"Sign Up")),React.createElement("button",{className:"navbar__toggle",onClick:()=>n(l=>!l),"aria-label":"Toggle menu"},t?React.createElement($d,{size:24}):React.createElement(Od,{size:24}))),React.createElement("div",{className:`navbar__sidebar ${t?"navbar__sidebar--open":""}`},React.createElement(Ha,{onNavClick:r,orientation:"column"}),React.createElement("button",{className:"btn btn--primary",onClick:()=>r("contact")},"Sign Up")))}function Yd({image:e,eyebrow:t,title:n,text:r,buttonText:l,onButtonClick:i}){return React.createElement("section",{id:"home",className:"hero",style:{backgroundImage:`linear-gradient(180deg, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.8)), url(${e})`}},React.createElement("div",{className:"hero__content"},React.createElement("div",{className:"hero__badge"},React.createElement(Ud,{size:14,fill:"currentColor"}),React.createElement("span",null,"Rated 4.9/5 by 1,200+ Explorers")),React.createElement("p",{className:"hero__eyebrow"},t),React.createElement("h1",{className:"hero__title"},n),React.createElement("p",{className:"hero__text"},r),React.createElement("button",{className:"btn btn--primary btn--lg btn--hero animate-bounce-subtle",onClick:i},l)))}function Zd(){return React.createElement("section",{className:"stats-bar"},React.createElement("div",{className:"stats-bar__inner"},React.createElement("div",{className:"stat-item"},React.createElement(Rd,{size:28,className:"stat-item__icon"}),React.createElement("div",null,React.createElement("h4",null,"10+ Years"),React.createElement("p",null,"Guiding Experience"))),React.createElement("div",{className:"stat-item"},React.createElement(Vd,{size:28,className:"stat-item__icon"}),React.createElement("div",null,React.createElement("h4",null,"5,000+"),React.createElement("p",null,"Happy Trekkers"))),React.createElement("div",{className:"stat-item"},React.createElement(Ad,{size:28,className:"stat-item__icon"}),React.createElement("div",null,React.createElement("h4",null,"100% Safely"),React.createElement("p",null,"Track Record")))))}function Jd({destination:e}){const{title:t,text:n,mainImage:r,raisedImage:l,reverse:i}=e;return React.createElement("div",{className:`destination ${i?"destination--reverse":""}`},React.createElement("div",{className:"destination__images"},React.createElement("div",{className:"destination__main-wrap"},React.createElement("img",{src:r,alt:t,className:"destination__main-image",loading:"lazy"})),React.createElement("img",{src:l,alt:"",className:"destination__raised-image",loading:"lazy"})),React.createElement("div",{className:"destination__text"},React.createElement("p",{className:"destination__eyebrow"},"Explore peaks"),React.createElement("h3",null,t),React.createElement("p",{className:"destination__desc"},n)))}function qd(){return React.createElement("section",{className:"section"},React.createElement("div",{className:"section__heading"},React.createElement("span",{className:"section__subtitle"},"Incredible Places"),React.createElement("h2",{className:"gradient-text"},"Popular destinations"),React.createElement("div",{className:"section__divider"}),React.createElement("p",null,"The routes people ask for by name.")),React.createElement("div",{className:"destinations-list"},Qd.map(e=>React.createElement(Jd,{key:e.id,destination:e}))))}function bd({trip:e}){return React.createElement("article",{className:"trip-card"},React.createElement("div",{className:"trip-card__image-wrap"},React.createElement("img",{src:e.image,alt:e.name,className:"trip-card__image",loading:"lazy"}),React.createElement("span",{className:"trip-card__duration"},e.days," Days")),React.createElement("div",{className:"trip-card__body"},React.createElement("h3",null,e.name),React.createElement("p",null,e.text),React.createElement("div",{className:"trip-card__meta"},React.createElement("span",{className:"trip-card__price"},e.price),React.createElement("button",{className:"trip-card__link"},"Book Now →"))))}function ep(){return React.createElement("section",{className:"section section--muted"},React.createElement("div",{className:"section__heading"},React.createElement("span",{className:"section__subtitle"},"Explore Package"),React.createElement("h2",{className:"gradient-text"},"Recent trips"),React.createElement("div",{className:"section__divider"}),React.createElement("p",null,"Six routes across the north, from a weekend plateau camp to a two-week glacier trek.")),React.createElement("div",{className:"trip-grid"},Kd.map(e=>React.createElement(bd,{key:e.id,trip:e}))))}function tp({service:e}){const t=e.icon;return React.createElement("div",{className:"service-card"},React.createElement("div",{className:"service-card__icon-wrapper"},React.createElement(t,{size:26,strokeWidth:1.8})),React.createElement("h3",null,e.title),React.createElement("p",null,e.text))}function np(){return React.createElement("section",{id:"service",className:"section"},React.createElement("div",{className:"section__heading"},React.createElement("span",{className:"section__subtitle"},"Our Services"),React.createElement("h2",{className:"gradient-text"},"What we handle"),React.createElement("div",{className:"section__divider"}),React.createElement("p",null,'Everything between "I want to go" and standing at the trailhead.')),React.createElement("div",{className:"service-grid"},Gd.map(e=>React.createElement(tp,{key:e.id,service:e}))))}function rp(){return React.createElement("section",{id:"about",className:"section section--muted"},React.createElement("div",{className:"about"},React.createElement("div",{className:"section__heading"},React.createElement("span",{className:"section__subtitle"},"Who We Are"),React.createElement("h2",{className:"gradient-text"},"About Kohsar Journeys"),React.createElement("div",{className:"section__divider"})),React.createElement("p",{className:"about__para"},"We started in 2014 with a single jeep and a handful of routes through Gilgit-Baltistan that most agencies weren't running yet. A decade later, our guides are still the same people who grew up walking these valleys — not contractors we hired in from the city."),React.createElement("p",{className:"about__para"},"Every itinerary on this site has been walked by our own team, more than once, in more than one season. If a trail changes — a bridge washes out, a pass closes early — we know before the trip leaves, not after.")))}function lp(){const[e,t]=He.useState(!1),n=r=>{r.preventDefault(),t(!0)};return React.createElement("section",{id:"contact",className:"section"},React.createElement("div",{className:"section__heading"},React.createElement("span",{className:"section__subtitle"},"Get In Touch"),React.createElement("h2",{className:"gradient-text"},"Plan a trip"),React.createElement("div",{className:"section__divider"}),React.createElement("p",null,"Tell us roughly what you're after — we'll reply with a route and a price.")),React.createElement("form",{className:"contact-form",onSubmit:n},React.createElement("div",{className:"contact-form__row"},React.createElement("input",{type:"text",placeholder:"Name",required:!0}),React.createElement("input",{type:"email",placeholder:"Email",required:!0})),React.createElement("input",{type:"text",placeholder:"Subject",required:!0}),React.createElement("textarea",{placeholder:"Message",rows:5,required:!0}),React.createElement("button",{type:"submit",className:"btn btn--primary btn--submit"},e?"Sent — thank you":"Send message")))}function ip(){return React.createElement("footer",{className:"footer"},React.createElement("div",{className:"footer__top"},React.createElement("div",null,React.createElement("p",{className:"footer__logo"},"Kohsar",React.createElement("span",null,"Journeys")),React.createElement("p",{className:"footer__tagline"},"Small-group treks through Hunza, Gilgit-Baltistan, and Chitral.")),React.createElement("div",{className:"footer__social"},React.createElement("a",{href:"#","aria-label":"Facebook"},React.createElement(Ld,{size:18})),React.createElement("a",{href:"#","aria-label":"Twitter"},React.createElement(Bd,{size:18})),React.createElement("a",{href:"#","aria-label":"Instagram"},React.createElement(Md,{size:18})),React.createElement("a",{href:"#","aria-label":"Youtube"},React.createElement(Hd,{size:18})))),React.createElement("div",{className:"footer__bottom"},React.createElement("div",null,React.createElement("h4",null,"Company"),React.createElement("a",{href:"#about"},"About"),React.createElement("a",{href:"#service"},"Service"),React.createElement("a",{href:"#home"},"Careers")),React.createElement("div",null,React.createElement("h4",null,"Destinations"),React.createElement("a",{href:"#home"},"Hunza Valley"),React.createElement("a",{href:"#home"},"Fairy Meadows"),React.createElement("a",{href:"#home"},"Deosai Plains")),React.createElement("div",null,React.createElement("h4",null,"Support"),React.createElement("a",{href:"#contact"},"Contact"),React.createElement("a",{href:"#service"},"Gear rental"),React.createElement("a",{href:"#service"},"Permits")),React.createElement("div",null,React.createElement("h4",null,"Reach us"),React.createElement("p",null,React.createElement(Dd,{size:14})," Islamabad, Pakistan"),React.createElement("p",null,React.createElement(Fd,{size:14})," +92 300 0000000"),React.createElement("p",null,React.createElement(Id,{size:14})," hello@kohsarjourneys.pk"))),React.createElement("p",{className:"footer__muted"},"© 2026 Kohsar Journeys. Built with absolute premium aesthetic standards."))}function op(){const e=t=>{var n;(n=document.getElementById(t))==null||n.scrollIntoView({behavior:"smooth"})};return React.createElement("div",{className:"site"},React.createElement("style",null,ap),React.createElement(Xd,{onNavClick:e}),React.createElement(Yd,{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eK8OPtw0jILOHgRTXw5uTIGvImarUkQ_lFQEgEV0Tg&s=10",eyebrow:"Northern Pakistan, on foot",title:"The mountains don't move. Your itinerary should.",text:"Small-group treks through Hunza, Gilgit-Baltistan, and Chitral — planned by guides who grew up on these trails.",buttonText:"See recent trips",onButtonClick:()=>e("trips")}),React.createElement(Zd,null),React.createElement(qd,null),React.createElement("div",{id:"trips"},React.createElement(ep,null)),React.createElement(np,null),React.createElement(rp,null),React.createElement(lp,null),React.createElement(ip,null))}const ap=`
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
`;Ql.createRoot(document.getElementById("root")).render(wl.createElement(wl.StrictMode,null,wl.createElement(op,null)));
