function i0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function o0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ff={exports:{}},Yo={},Df={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vi=Symbol.for("react.element"),s0=Symbol.for("react.portal"),a0=Symbol.for("react.fragment"),l0=Symbol.for("react.strict_mode"),u0=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),f0=Symbol.for("react.context"),d0=Symbol.for("react.forward_ref"),p0=Symbol.for("react.suspense"),h0=Symbol.for("react.memo"),m0=Symbol.for("react.lazy"),Wu=Symbol.iterator;function g0(e){return e===null||typeof e!="object"?null:(e=Wu&&e[Wu]||e["@@iterator"],typeof e=="function"?e:null)}var Uf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vf=Object.assign,Bf={};function pr(e,t,n){this.props=e,this.context=t,this.refs=Bf,this.updater=n||Uf}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hf(){}Hf.prototype=pr.prototype;function Il(e,t,n){this.props=e,this.context=t,this.refs=Bf,this.updater=n||Uf}var Tl=Il.prototype=new Hf;Tl.constructor=Il;Vf(Tl,pr.prototype);Tl.isPureReactComponent=!0;var Ku=Array.isArray,Wf=Object.prototype.hasOwnProperty,bl={current:null},Kf={key:!0,ref:!0,__self:!0,__source:!0};function Qf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Wf.call(t,r)&&!Kf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vi,type:e,key:o,ref:s,props:i,_owner:bl.current}}function y0(e,t){return{$$typeof:vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zl(e){return typeof e=="object"&&e!==null&&e.$$typeof===vi}function v0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qu=/\/+/g;function Us(e,t){return typeof e=="object"&&e!==null&&e.key!=null?v0(""+e.key):t.toString(36)}function Xi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case vi:case s0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Us(s,0):r,Ku(i)?(n="",e!=null&&(n=e.replace(Qu,"$&/")+"/"),Xi(i,t,n,"",function(u){return u})):i!=null&&(zl(i)&&(i=y0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Qu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Ku(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Us(o,a);s+=Xi(o,t,n,l,i)}else if(l=g0(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Us(o,a++),s+=Xi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function $i(e,t,n){if(e==null)return e;var r=[],i=0;return Xi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function x0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},Gi={transition:null},w0={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Gi,ReactCurrentOwner:bl};function Yf(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:$i,forEach:function(e,t,n){$i(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $i(e,function(){t++}),t},toArray:function(e){return $i(e,function(t){return t})||[]},only:function(e){if(!zl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=pr;b.Fragment=a0;b.Profiler=u0;b.PureComponent=Il;b.StrictMode=l0;b.Suspense=p0;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w0;b.act=Yf;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=bl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Wf.call(t,l)&&!Kf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:vi,type:e.type,key:i,ref:o,props:r,_owner:s}};b.createContext=function(e){return e={$$typeof:f0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:c0,_context:e},e.Consumer=e};b.createElement=Qf;b.createFactory=function(e){var t=Qf.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:d0,render:e}};b.isValidElement=zl;b.lazy=function(e){return{$$typeof:m0,_payload:{_status:-1,_result:e},_init:x0}};b.memo=function(e,t){return{$$typeof:h0,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=Gi.transition;Gi.transition={};try{e()}finally{Gi.transition=t}};b.unstable_act=Yf;b.useCallback=function(e,t){return Oe.current.useCallback(e,t)};b.useContext=function(e){return Oe.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};b.useEffect=function(e,t){return Oe.current.useEffect(e,t)};b.useId=function(){return Oe.current.useId()};b.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return Oe.current.useMemo(e,t)};b.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};b.useRef=function(e){return Oe.current.useRef(e)};b.useState=function(e){return Oe.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return Oe.current.useTransition()};b.version="18.3.1";Df.exports=b;var R=Df.exports;const V=o0(R),Yu=i0({__proto__:null,default:V},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0=R,k0=Symbol.for("react.element"),C0=Symbol.for("react.fragment"),E0=Object.prototype.hasOwnProperty,$0=S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N0={key:!0,ref:!0,__self:!0,__source:!0};function Xf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)E0.call(t,r)&&!N0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:k0,type:e,key:o,ref:s,props:i,_owner:$0.current}}Yo.Fragment=C0;Yo.jsx=Xf;Yo.jsxs=Xf;Ff.exports=Yo;var S=Ff.exports,Ca={},Gf={exports:{}},He={},Jf={exports:{}},Zf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,L){var j=_.length;_.push(L);e:for(;0<j;){var D=j-1>>>1,Q=_[D];if(0<i(Q,L))_[D]=L,_[j]=Q,j=D;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var L=_[0],j=_.pop();if(j!==L){_[0]=j;e:for(var D=0,Q=_.length,cn=Q>>>1;D<cn;){var tt=2*(D+1)-1,Ft=_[tt],Ae=tt+1,Nt=_[Ae];if(0>i(Ft,j))Ae<Q&&0>i(Nt,Ft)?(_[D]=Nt,_[Ae]=j,D=Ae):(_[D]=Ft,_[tt]=j,D=tt);else if(Ae<Q&&0>i(Nt,j))_[D]=Nt,_[Ae]=j,D=Ae;else break e}}return L}function i(_,L){var j=_.sortIndex-L.sortIndex;return j!==0?j:_.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,p=null,c=3,v=!1,g=!1,y=!1,$=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=_)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function x(_){if(y=!1,m(_),!g)if(n(l)!==null)g=!0,ft(k);else{var L=n(u);L!==null&&dt(x,L.startTime-_)}}function k(_,L){g=!1,y&&(y=!1,h(P),P=-1),v=!0;var j=c;try{for(m(L),p=n(l);p!==null&&(!(p.expirationTime>L)||_&&!ae());){var D=p.callback;if(typeof D=="function"){p.callback=null,c=p.priorityLevel;var Q=D(p.expirationTime<=L);L=e.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(l)&&r(l),m(L)}else r(l);p=n(l)}if(p!==null)var cn=!0;else{var tt=n(u);tt!==null&&dt(x,tt.startTime-L),cn=!1}return cn}finally{p=null,c=j,v=!1}}var C=!1,w=null,P=-1,K=5,I=-1;function ae(){return!(e.unstable_now()-I<K)}function Mt(){if(w!==null){var _=e.unstable_now();I=_;var L=!0;try{L=w(!0,_)}finally{L?Et():(C=!1,w=null)}}else C=!1}var Et;if(typeof f=="function")Et=function(){f(Mt)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,$t=ct.port2;ct.port1.onmessage=Mt,Et=function(){$t.postMessage(null)}}else Et=function(){$(Mt,0)};function ft(_){w=_,C||(C=!0,Et())}function dt(_,L){P=$(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,ft(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(_){switch(c){case 1:case 2:case 3:var L=3;break;default:L=c}var j=c;c=L;try{return _()}finally{c=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var j=c;c=_;try{return L()}finally{c=j}},e.unstable_scheduleCallback=function(_,L,j){var D=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?D+j:D):j=D,_){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=j+Q,_={id:d++,callback:L,priorityLevel:_,startTime:j,expirationTime:Q,sortIndex:-1},j>D?(_.sortIndex=j,t(u,_),n(l)===null&&_===n(u)&&(y?(h(P),P=-1):y=!0,dt(x,j-D))):(_.sortIndex=Q,t(l,_),g||v||(g=!0,ft(k))),_},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(_){var L=c;return function(){var j=c;c=L;try{return _.apply(this,arguments)}finally{c=j}}}})(Zf);Jf.exports=Zf;var _0=Jf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=R,Be=_0;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qf=new Set,Qr={};function Pn(e,t){tr(e,t),tr(e+"Capture",t)}function tr(e,t){for(Qr[e]=t,e=0;e<t.length;e++)qf.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ea=Object.prototype.hasOwnProperty,P0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xu={},Gu={};function L0(e){return Ea.call(Gu,e)?!0:Ea.call(Xu,e)?!1:P0.test(e)?Gu[e]=!0:(Xu[e]=!0,!1)}function j0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R0(e,t,n,r){if(t===null||typeof t>"u"||j0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Al=/[\-:]([a-z])/g;function Ml(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Al,Ml);xe[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Al,Ml);xe[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Al,Ml);xe[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fl(e,t,n,r){var i=xe.hasOwnProperty(t)?xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(R0(t,n,i,r)&&(n=null),r||i===null?L0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ni=Symbol.for("react.element"),bn=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),$a=Symbol.for("react.profiler"),ed=Symbol.for("react.provider"),td=Symbol.for("react.context"),Ul=Symbol.for("react.forward_ref"),Na=Symbol.for("react.suspense"),_a=Symbol.for("react.suspense_list"),Vl=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),nd=Symbol.for("react.offscreen"),Ju=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=Ju&&e[Ju]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Vs;function jr(e){if(Vs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vs=t&&t[1]||""}return`
`+Vs+e}var Bs=!1;function Hs(e,t){if(!e||Bs)return"";Bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Bs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jr(e):""}function I0(e){switch(e.tag){case 5:return jr(e.type);case 16:return jr("Lazy");case 13:return jr("Suspense");case 19:return jr("SuspenseList");case 0:case 2:case 15:return e=Hs(e.type,!1),e;case 11:return e=Hs(e.type.render,!1),e;case 1:return e=Hs(e.type,!0),e;default:return""}}function Oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case bn:return"Portal";case $a:return"Profiler";case Dl:return"StrictMode";case Na:return"Suspense";case _a:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case td:return(e.displayName||"Context")+".Consumer";case ed:return(e._context.displayName||"Context")+".Provider";case Ul:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vl:return t=e.displayName||null,t!==null?t:Oa(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return Oa(e(t))}catch{}}return null}function T0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oa(t);case 8:return t===Dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function b0(e){var t=rd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){e._valueTracker||(e._valueTracker=b0(e))}function id(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pa(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Zu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function od(e,t){t=t.checked,t!=null&&Fl(e,"checked",t,!1)}function La(e,t){od(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ja(e,t.type,n):t.hasOwnProperty("defaultValue")&&ja(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ja(e,t,n){(t!=="number"||go(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rr=Array.isArray;function Yn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ec(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Rr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function sd(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ad(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ia(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ad(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oi,ld=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oi=Oi||document.createElement("div"),Oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z0=["Webkit","ms","Moz","O"];Object.keys(zr).forEach(function(e){z0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zr[t]=zr[e]})});function ud(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zr.hasOwnProperty(e)&&zr[e]?(""+t).trim():t+"px"}function cd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ud(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var A0=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(e,t){if(t){if(A0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ba(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var za=null;function Bl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Aa=null,Xn=null,Gn=null;function nc(e){if(e=Si(e)){if(typeof Aa!="function")throw Error(E(280));var t=e.stateNode;t&&(t=qo(t),Aa(e.stateNode,e.type,t))}}function fd(e){Xn?Gn?Gn.push(e):Gn=[e]:Xn=e}function dd(){if(Xn){var e=Xn,t=Gn;if(Gn=Xn=null,nc(e),t)for(e=0;e<t.length;e++)nc(t[e])}}function pd(e,t){return e(t)}function hd(){}var Ws=!1;function md(e,t,n){if(Ws)return e(t,n);Ws=!0;try{return pd(e,t,n)}finally{Ws=!1,(Xn!==null||Gn!==null)&&(hd(),dd())}}function Xr(e,t){var n=e.stateNode;if(n===null)return null;var r=qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Ma=!1;if(It)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Ma=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Ma=!1}function M0(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ar=!1,yo=null,vo=!1,Fa=null,F0={onError:function(e){Ar=!0,yo=e}};function D0(e,t,n,r,i,o,s,a,l){Ar=!1,yo=null,M0.apply(F0,arguments)}function U0(e,t,n,r,i,o,s,a,l){if(D0.apply(this,arguments),Ar){if(Ar){var u=yo;Ar=!1,yo=null}else throw Error(E(198));vo||(vo=!0,Fa=u)}}function Ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rc(e){if(Ln(e)!==e)throw Error(E(188))}function V0(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return rc(i),e;if(o===r)return rc(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function yd(e){return e=V0(e),e!==null?vd(e):null}function vd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vd(e);if(t!==null)return t;e=e.sibling}return null}var xd=Be.unstable_scheduleCallback,ic=Be.unstable_cancelCallback,B0=Be.unstable_shouldYield,H0=Be.unstable_requestPaint,re=Be.unstable_now,W0=Be.unstable_getCurrentPriorityLevel,Hl=Be.unstable_ImmediatePriority,wd=Be.unstable_UserBlockingPriority,xo=Be.unstable_NormalPriority,K0=Be.unstable_LowPriority,Sd=Be.unstable_IdlePriority,Xo=null,St=null;function Q0(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Xo,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:G0,Y0=Math.log,X0=Math.LN2;function G0(e){return e>>>=0,e===0?32:31-(Y0(e)/X0|0)|0}var Pi=64,Li=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ir(a):(o&=s,o!==0&&(r=Ir(o)))}else s=n&~i,s!==0?r=Ir(s):o!==0&&(r=Ir(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),i=1<<n,r|=e[n],t&=~i;return r}function J0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-st(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=J0(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kd(){var e=Pi;return Pi<<=1,!(Pi&4194240)&&(Pi=64),e}function Ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function q0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Wl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function Cd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ed,Kl,$d,Nd,_d,Ua=!1,ji=[],Xt=null,Gt=null,Jt=null,Gr=new Map,Jr=new Map,Wt=[],em="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oc(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(t.pointerId)}}function Sr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Si(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tm(e,t,n,r,i){switch(t){case"focusin":return Xt=Sr(Xt,e,t,n,r,i),!0;case"dragenter":return Gt=Sr(Gt,e,t,n,r,i),!0;case"mouseover":return Jt=Sr(Jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Gr.set(o,Sr(Gr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Jr.set(o,Sr(Jr.get(o)||null,e,t,n,r,i)),!0}return!1}function Od(e){var t=hn(e.target);if(t!==null){var n=Ln(t);if(n!==null){if(t=n.tag,t===13){if(t=gd(n),t!==null){e.blockedOn=t,_d(e.priority,function(){$d(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);za=r,n.target.dispatchEvent(r),za=null}else return t=Si(n),t!==null&&Kl(t),e.blockedOn=n,!1;t.shift()}return!0}function sc(e,t,n){Ji(e)&&n.delete(t)}function nm(){Ua=!1,Xt!==null&&Ji(Xt)&&(Xt=null),Gt!==null&&Ji(Gt)&&(Gt=null),Jt!==null&&Ji(Jt)&&(Jt=null),Gr.forEach(sc),Jr.forEach(sc)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ua||(Ua=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,nm)))}function Zr(e){function t(i){return kr(i,e)}if(0<ji.length){kr(ji[0],e);for(var n=1;n<ji.length;n++){var r=ji[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&kr(Xt,e),Gt!==null&&kr(Gt,e),Jt!==null&&kr(Jt,e),Gr.forEach(t),Jr.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)Od(n),n.blockedOn===null&&Wt.shift()}var Jn=At.ReactCurrentBatchConfig,So=!0;function rm(e,t,n,r){var i=B,o=Jn.transition;Jn.transition=null;try{B=1,Ql(e,t,n,r)}finally{B=i,Jn.transition=o}}function im(e,t,n,r){var i=B,o=Jn.transition;Jn.transition=null;try{B=4,Ql(e,t,n,r)}finally{B=i,Jn.transition=o}}function Ql(e,t,n,r){if(So){var i=Va(e,t,n,r);if(i===null)na(e,t,r,ko,n),oc(e,r);else if(tm(i,e,t,n,r))r.stopPropagation();else if(oc(e,r),t&4&&-1<em.indexOf(e)){for(;i!==null;){var o=Si(i);if(o!==null&&Ed(o),o=Va(e,t,n,r),o===null&&na(e,t,r,ko,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else na(e,t,r,null,n)}}var ko=null;function Va(e,t,n,r){if(ko=null,e=Bl(r),e=hn(e),e!==null)if(t=Ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ko=e,null}function Pd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W0()){case Hl:return 1;case wd:return 4;case xo:case K0:return 16;case Sd:return 536870912;default:return 16}default:return 16}}var Qt=null,Yl=null,Zi=null;function Ld(){if(Zi)return Zi;var e,t=Yl,n=t.length,r,i="value"in Qt?Qt.value:Qt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Zi=i.slice(e,1<r?1-r:void 0)}function qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function ac(){return!1}function We(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ri:ac,this.isPropagationStopped=ac,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=We(hr),wi=te({},hr,{view:0,detail:0}),om=We(wi),Qs,Ys,Cr,Go=te({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cr&&(Cr&&e.type==="mousemove"?(Qs=e.screenX-Cr.screenX,Ys=e.screenY-Cr.screenY):Ys=Qs=0,Cr=e),Qs)},movementY:function(e){return"movementY"in e?e.movementY:Ys}}),lc=We(Go),sm=te({},Go,{dataTransfer:0}),am=We(sm),lm=te({},wi,{relatedTarget:0}),Xs=We(lm),um=te({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),cm=We(um),fm=te({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dm=We(fm),pm=te({},hr,{data:0}),uc=We(pm),hm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ym(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gm[e])?!!t[e]:!1}function Gl(){return ym}var vm=te({},wi,{key:function(e){if(e.key){var t=hm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xm=We(vm),wm=te({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cc=We(wm),Sm=te({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),km=We(Sm),Cm=te({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Em=We(Cm),$m=te({},Go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nm=We($m),_m=[9,13,27,32],Jl=It&&"CompositionEvent"in window,Mr=null;It&&"documentMode"in document&&(Mr=document.documentMode);var Om=It&&"TextEvent"in window&&!Mr,jd=It&&(!Jl||Mr&&8<Mr&&11>=Mr),fc=" ",dc=!1;function Rd(e,t){switch(e){case"keyup":return _m.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function Pm(e,t){switch(e){case"compositionend":return Id(t);case"keypress":return t.which!==32?null:(dc=!0,fc);case"textInput":return e=t.data,e===fc&&dc?null:e;default:return null}}function Lm(e,t){if(An)return e==="compositionend"||!Jl&&Rd(e,t)?(e=Ld(),Zi=Yl=Qt=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jd&&t.locale!=="ko"?null:t.data;default:return null}}var jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jm[e.type]:t==="textarea"}function Td(e,t,n,r){fd(r),t=Co(t,"onChange"),0<t.length&&(n=new Xl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,qr=null;function Rm(e){Wd(e,0)}function Jo(e){var t=Dn(e);if(id(t))return e}function Im(e,t){if(e==="change")return t}var bd=!1;if(It){var Gs;if(It){var Js="oninput"in document;if(!Js){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),Js=typeof hc.oninput=="function"}Gs=Js}else Gs=!1;bd=Gs&&(!document.documentMode||9<document.documentMode)}function mc(){Fr&&(Fr.detachEvent("onpropertychange",zd),qr=Fr=null)}function zd(e){if(e.propertyName==="value"&&Jo(qr)){var t=[];Td(t,qr,e,Bl(e)),md(Rm,t)}}function Tm(e,t,n){e==="focusin"?(mc(),Fr=t,qr=n,Fr.attachEvent("onpropertychange",zd)):e==="focusout"&&mc()}function bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(qr)}function zm(e,t){if(e==="click")return Jo(t)}function Am(e,t){if(e==="input"||e==="change")return Jo(t)}function Mm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Mm;function ei(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ea.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yc(e,t){var n=gc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gc(n)}}function Ad(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ad(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Md(){for(var e=window,t=go();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=go(e.document)}return t}function Zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fm(e){var t=Md(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ad(n.ownerDocument.documentElement,n)){if(r!==null&&Zl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=yc(n,o);var s=yc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dm=It&&"documentMode"in document&&11>=document.documentMode,Mn=null,Ba=null,Dr=null,Ha=!1;function vc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ha||Mn==null||Mn!==go(r)||(r=Mn,"selectionStart"in r&&Zl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&ei(Dr,r)||(Dr=r,r=Co(Ba,"onSelect"),0<r.length&&(t=new Xl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function Ii(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fn={animationend:Ii("Animation","AnimationEnd"),animationiteration:Ii("Animation","AnimationIteration"),animationstart:Ii("Animation","AnimationStart"),transitionend:Ii("Transition","TransitionEnd")},Zs={},Fd={};It&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function Zo(e){if(Zs[e])return Zs[e];if(!Fn[e])return e;var t=Fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fd)return Zs[e]=t[n];return e}var Dd=Zo("animationend"),Ud=Zo("animationiteration"),Vd=Zo("animationstart"),Bd=Zo("transitionend"),Hd=new Map,xc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(e,t){Hd.set(e,t),Pn(t,[e])}for(var qs=0;qs<xc.length;qs++){var ea=xc[qs],Um=ea.toLowerCase(),Vm=ea[0].toUpperCase()+ea.slice(1);an(Um,"on"+Vm)}an(Dd,"onAnimationEnd");an(Ud,"onAnimationIteration");an(Vd,"onAnimationStart");an("dblclick","onDoubleClick");an("focusin","onFocus");an("focusout","onBlur");an(Bd,"onTransitionEnd");tr("onMouseEnter",["mouseout","mouseover"]);tr("onMouseLeave",["mouseout","mouseover"]);tr("onPointerEnter",["pointerout","pointerover"]);tr("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function wc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,U0(r,t,void 0,e),e.currentTarget=null}function Wd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;wc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;wc(i,a,u),o=l}}}if(vo)throw e=Fa,vo=!1,Fa=null,e}function X(e,t){var n=t[Xa];n===void 0&&(n=t[Xa]=new Set);var r=e+"__bubble";n.has(r)||(Kd(t,e,2,!1),n.add(r))}function ta(e,t,n){var r=0;t&&(r|=4),Kd(n,e,r,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[Ti]){e[Ti]=!0,qf.forEach(function(n){n!=="selectionchange"&&(Bm.has(n)||ta(n,!1,e),ta(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,ta("selectionchange",!1,t))}}function Kd(e,t,n,r){switch(Pd(t)){case 1:var i=rm;break;case 4:i=im;break;default:i=Ql}n=i.bind(null,t,n,e),i=void 0,!Ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function na(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=hn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}md(function(){var u=o,d=Bl(n),p=[];e:{var c=Hd.get(e);if(c!==void 0){var v=Xl,g=e;switch(e){case"keypress":if(qi(n)===0)break e;case"keydown":case"keyup":v=xm;break;case"focusin":g="focus",v=Xs;break;case"focusout":g="blur",v=Xs;break;case"beforeblur":case"afterblur":v=Xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=km;break;case Dd:case Ud:case Vd:v=cm;break;case Bd:v=Em;break;case"scroll":v=om;break;case"wheel":v=Nm;break;case"copy":case"cut":case"paste":v=dm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=cc}var y=(t&4)!==0,$=!y&&e==="scroll",h=y?c!==null?c+"Capture":null:c;y=[];for(var f=u,m;f!==null;){m=f;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,h!==null&&(x=Xr(f,h),x!=null&&y.push(ni(f,x,m)))),$)break;f=f.return}0<y.length&&(c=new v(c,g,null,n,d),p.push({event:c,listeners:y}))}}if(!(t&7)){e:{if(c=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",c&&n!==za&&(g=n.relatedTarget||n.fromElement)&&(hn(g)||g[Tt]))break e;if((v||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?hn(g):null,g!==null&&($=Ln(g),g!==$||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(y=lc,x="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=cc,x="onPointerLeave",h="onPointerEnter",f="pointer"),$=v==null?c:Dn(v),m=g==null?c:Dn(g),c=new y(x,f+"leave",v,n,d),c.target=$,c.relatedTarget=m,x=null,hn(d)===u&&(y=new y(h,f+"enter",g,n,d),y.target=m,y.relatedTarget=$,x=y),$=x,v&&g)t:{for(y=v,h=g,f=0,m=y;m;m=jn(m))f++;for(m=0,x=h;x;x=jn(x))m++;for(;0<f-m;)y=jn(y),f--;for(;0<m-f;)h=jn(h),m--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break t;y=jn(y),h=jn(h)}y=null}else y=null;v!==null&&Sc(p,c,v,y,!1),g!==null&&$!==null&&Sc(p,$,g,y,!0)}}e:{if(c=u?Dn(u):window,v=c.nodeName&&c.nodeName.toLowerCase(),v==="select"||v==="input"&&c.type==="file")var k=Im;else if(pc(c))if(bd)k=Am;else{k=bm;var C=Tm}else(v=c.nodeName)&&v.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(k=zm);if(k&&(k=k(e,u))){Td(p,k,n,d);break e}C&&C(e,c,u),e==="focusout"&&(C=c._wrapperState)&&C.controlled&&c.type==="number"&&ja(c,"number",c.value)}switch(C=u?Dn(u):window,e){case"focusin":(pc(C)||C.contentEditable==="true")&&(Mn=C,Ba=u,Dr=null);break;case"focusout":Dr=Ba=Mn=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,vc(p,n,d);break;case"selectionchange":if(Dm)break;case"keydown":case"keyup":vc(p,n,d)}var w;if(Jl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else An?Rd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(jd&&n.locale!=="ko"&&(An||P!=="onCompositionStart"?P==="onCompositionEnd"&&An&&(w=Ld()):(Qt=d,Yl="value"in Qt?Qt.value:Qt.textContent,An=!0)),C=Co(u,P),0<C.length&&(P=new uc(P,e,null,n,d),p.push({event:P,listeners:C}),w?P.data=w:(w=Id(n),w!==null&&(P.data=w)))),(w=Om?Pm(e,n):Lm(e,n))&&(u=Co(u,"onBeforeInput"),0<u.length&&(d=new uc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=w))}Wd(p,t)})}function ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Co(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Xr(e,n),o!=null&&r.unshift(ni(e,o,i)),o=Xr(e,t),o!=null&&r.push(ni(e,o,i))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Xr(n,o),l!=null&&s.unshift(ni(n,l,a))):i||(l=Xr(n,o),l!=null&&s.push(ni(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Hm=/\r\n?/g,Wm=/\u0000|\uFFFD/g;function kc(e){return(typeof e=="string"?e:""+e).replace(Hm,`
`).replace(Wm,"")}function bi(e,t,n){if(t=kc(t),kc(e)!==t&&n)throw Error(E(425))}function Eo(){}var Wa=null,Ka=null;function Qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ya=typeof setTimeout=="function"?setTimeout:void 0,Km=typeof clearTimeout=="function"?clearTimeout:void 0,Cc=typeof Promise=="function"?Promise:void 0,Qm=typeof queueMicrotask=="function"?queueMicrotask:typeof Cc<"u"?function(e){return Cc.resolve(null).then(e).catch(Ym)}:Ya;function Ym(e){setTimeout(function(){throw e})}function ra(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Zr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zr(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ec(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),xt="__reactFiber$"+mr,ri="__reactProps$"+mr,Tt="__reactContainer$"+mr,Xa="__reactEvents$"+mr,Xm="__reactListeners$"+mr,Gm="__reactHandles$"+mr;function hn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ec(e);e!==null;){if(n=e[xt])return n;e=Ec(e)}return t}e=n,n=e.parentNode}return null}function Si(e){return e=e[xt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function qo(e){return e[ri]||null}var Ga=[],Un=-1;function ln(e){return{current:e}}function J(e){0>Un||(e.current=Ga[Un],Ga[Un]=null,Un--)}function Y(e,t){Un++,Ga[Un]=e.current,e.current=t}var sn={},Ee=ln(sn),Ie=ln(!1),Sn=sn;function nr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function $o(){J(Ie),J(Ee)}function $c(e,t,n){if(Ee.current!==sn)throw Error(E(168));Y(Ee,t),Y(Ie,n)}function Qd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,T0(e)||"Unknown",i));return te({},n,r)}function No(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Sn=Ee.current,Y(Ee,e),Y(Ie,Ie.current),!0}function Nc(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Qd(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,J(Ie),J(Ee),Y(Ee,e)):J(Ie),Y(Ie,n)}var Pt=null,es=!1,ia=!1;function Yd(e){Pt===null?Pt=[e]:Pt.push(e)}function Jm(e){es=!0,Yd(e)}function un(){if(!ia&&Pt!==null){ia=!0;var e=0,t=B;try{var n=Pt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,es=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),xd(Hl,un),i}finally{B=t,ia=!1}}return null}var Vn=[],Bn=0,_o=null,Oo=0,Qe=[],Ye=0,kn=null,Lt=1,jt="";function dn(e,t){Vn[Bn++]=Oo,Vn[Bn++]=_o,_o=e,Oo=t}function Xd(e,t,n){Qe[Ye++]=Lt,Qe[Ye++]=jt,Qe[Ye++]=kn,kn=e;var r=Lt;e=jt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var o=32-st(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Lt=1<<32-st(t)+i|n<<i|r,jt=o+e}else Lt=1<<o|n<<i|r,jt=e}function ql(e){e.return!==null&&(dn(e,1),Xd(e,1,0))}function eu(e){for(;e===_o;)_o=Vn[--Bn],Vn[Bn]=null,Oo=Vn[--Bn],Vn[Bn]=null;for(;e===kn;)kn=Qe[--Ye],Qe[Ye]=null,jt=Qe[--Ye],Qe[Ye]=null,Lt=Qe[--Ye],Qe[Ye]=null}var Ue=null,De=null,Z=!1,ot=null;function Gd(e,t){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _c(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,De=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kn!==null?{id:Lt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,De=null,!0):!1;default:return!1}}function Ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Za(e){if(Z){var t=De;if(t){var n=t;if(!_c(e,t)){if(Ja(e))throw Error(E(418));t=Zt(n.nextSibling);var r=Ue;t&&_c(e,t)?Gd(r,n):(e.flags=e.flags&-4097|2,Z=!1,Ue=e)}}else{if(Ja(e))throw Error(E(418));e.flags=e.flags&-4097|2,Z=!1,Ue=e}}}function Oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function zi(e){if(e!==Ue)return!1;if(!Z)return Oc(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qa(e.type,e.memoizedProps)),t&&(t=De)){if(Ja(e))throw Jd(),Error(E(418));for(;t;)Gd(e,t),t=Zt(t.nextSibling)}if(Oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Ue?Zt(e.stateNode.nextSibling):null;return!0}function Jd(){for(var e=De;e;)e=Zt(e.nextSibling)}function rr(){De=Ue=null,Z=!1}function tu(e){ot===null?ot=[e]:ot.push(e)}var Zm=At.ReactCurrentBatchConfig;function Er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ai(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pc(e){var t=e._init;return t(e._payload)}function Zd(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=nn(h,f),h.index=0,h.sibling=null,h}function o(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,f,m,x){return f===null||f.tag!==6?(f=fa(m,h.mode,x),f.return=h,f):(f=i(f,m),f.return=h,f)}function l(h,f,m,x){var k=m.type;return k===zn?d(h,f,m.props.children,x,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Bt&&Pc(k)===f.type)?(x=i(f,m.props),x.ref=Er(h,f,m),x.return=h,x):(x=so(m.type,m.key,m.props,null,h.mode,x),x.ref=Er(h,f,m),x.return=h,x)}function u(h,f,m,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=da(m,h.mode,x),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function d(h,f,m,x,k){return f===null||f.tag!==7?(f=xn(m,h.mode,x,k),f.return=h,f):(f=i(f,m),f.return=h,f)}function p(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=fa(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ni:return m=so(f.type,f.key,f.props,null,h.mode,m),m.ref=Er(h,null,f),m.return=h,m;case bn:return f=da(f,h.mode,m),f.return=h,f;case Bt:var x=f._init;return p(h,x(f._payload),m)}if(Rr(f)||xr(f))return f=xn(f,h.mode,m,null),f.return=h,f;Ai(h,f)}return null}function c(h,f,m,x){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(h,f,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ni:return m.key===k?l(h,f,m,x):null;case bn:return m.key===k?u(h,f,m,x):null;case Bt:return k=m._init,c(h,f,k(m._payload),x)}if(Rr(m)||xr(m))return k!==null?null:d(h,f,m,x,null);Ai(h,m)}return null}function v(h,f,m,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(m)||null,a(f,h,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ni:return h=h.get(x.key===null?m:x.key)||null,l(f,h,x,k);case bn:return h=h.get(x.key===null?m:x.key)||null,u(f,h,x,k);case Bt:var C=x._init;return v(h,f,m,C(x._payload),k)}if(Rr(x)||xr(x))return h=h.get(m)||null,d(f,h,x,k,null);Ai(f,x)}return null}function g(h,f,m,x){for(var k=null,C=null,w=f,P=f=0,K=null;w!==null&&P<m.length;P++){w.index>P?(K=w,w=null):K=w.sibling;var I=c(h,w,m[P],x);if(I===null){w===null&&(w=K);break}e&&w&&I.alternate===null&&t(h,w),f=o(I,f,P),C===null?k=I:C.sibling=I,C=I,w=K}if(P===m.length)return n(h,w),Z&&dn(h,P),k;if(w===null){for(;P<m.length;P++)w=p(h,m[P],x),w!==null&&(f=o(w,f,P),C===null?k=w:C.sibling=w,C=w);return Z&&dn(h,P),k}for(w=r(h,w);P<m.length;P++)K=v(w,h,P,m[P],x),K!==null&&(e&&K.alternate!==null&&w.delete(K.key===null?P:K.key),f=o(K,f,P),C===null?k=K:C.sibling=K,C=K);return e&&w.forEach(function(ae){return t(h,ae)}),Z&&dn(h,P),k}function y(h,f,m,x){var k=xr(m);if(typeof k!="function")throw Error(E(150));if(m=k.call(m),m==null)throw Error(E(151));for(var C=k=null,w=f,P=f=0,K=null,I=m.next();w!==null&&!I.done;P++,I=m.next()){w.index>P?(K=w,w=null):K=w.sibling;var ae=c(h,w,I.value,x);if(ae===null){w===null&&(w=K);break}e&&w&&ae.alternate===null&&t(h,w),f=o(ae,f,P),C===null?k=ae:C.sibling=ae,C=ae,w=K}if(I.done)return n(h,w),Z&&dn(h,P),k;if(w===null){for(;!I.done;P++,I=m.next())I=p(h,I.value,x),I!==null&&(f=o(I,f,P),C===null?k=I:C.sibling=I,C=I);return Z&&dn(h,P),k}for(w=r(h,w);!I.done;P++,I=m.next())I=v(w,h,P,I.value,x),I!==null&&(e&&I.alternate!==null&&w.delete(I.key===null?P:I.key),f=o(I,f,P),C===null?k=I:C.sibling=I,C=I);return e&&w.forEach(function(Mt){return t(h,Mt)}),Z&&dn(h,P),k}function $(h,f,m,x){if(typeof m=="object"&&m!==null&&m.type===zn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ni:e:{for(var k=m.key,C=f;C!==null;){if(C.key===k){if(k=m.type,k===zn){if(C.tag===7){n(h,C.sibling),f=i(C,m.props.children),f.return=h,h=f;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Bt&&Pc(k)===C.type){n(h,C.sibling),f=i(C,m.props),f.ref=Er(h,C,m),f.return=h,h=f;break e}n(h,C);break}else t(h,C);C=C.sibling}m.type===zn?(f=xn(m.props.children,h.mode,x,m.key),f.return=h,h=f):(x=so(m.type,m.key,m.props,null,h.mode,x),x.ref=Er(h,f,m),x.return=h,h=x)}return s(h);case bn:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=da(m,h.mode,x),f.return=h,h=f}return s(h);case Bt:return C=m._init,$(h,f,C(m._payload),x)}if(Rr(m))return g(h,f,m,x);if(xr(m))return y(h,f,m,x);Ai(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=fa(m,h.mode,x),f.return=h,h=f),s(h)):n(h,f)}return $}var ir=Zd(!0),qd=Zd(!1),Po=ln(null),Lo=null,Hn=null,nu=null;function ru(){nu=Hn=Lo=null}function iu(e){var t=Po.current;J(Po),e._currentValue=t}function qa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){Lo=e,nu=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(nu!==e)if(e={context:e,memoizedValue:t,next:null},Hn===null){if(Lo===null)throw Error(E(308));Hn=e,Lo.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return t}var mn=null;function ou(e){mn===null?mn=[e]:mn.push(e)}function ep(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ou(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,ou(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wl(e,n)}}function Lc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jo(e,t,n,r){var i=e.updateQueue;Ht=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,d=u=l=null,a=o;do{var c=a.lane,v=a.eventTime;if((r&c)===c){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,y=a;switch(c=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){p=g.call(v,p,c);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,c=typeof g=="function"?g.call(v,p,c):g,c==null)break e;p=te({},p,c);break e;case 2:Ht=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,c=i.effects,c===null?i.effects=[a]:c.push(a))}else v={eventTime:v,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=p):d=d.next=v,s|=c;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;c=a,a=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);En|=s,e.lanes=s,e.memoizedState=p}}function jc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ki={},kt=ln(ki),ii=ln(ki),oi=ln(ki);function gn(e){if(e===ki)throw Error(E(174));return e}function au(e,t){switch(Y(oi,t),Y(ii,e),Y(kt,ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ia(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ia(t,e)}J(kt),Y(kt,t)}function or(){J(kt),J(ii),J(oi)}function np(e){gn(oi.current);var t=gn(kt.current),n=Ia(t,e.type);t!==n&&(Y(ii,e),Y(kt,n))}function lu(e){ii.current===e&&(J(kt),J(ii))}var q=ln(0);function Ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oa=[];function uu(){for(var e=0;e<oa.length;e++)oa[e]._workInProgressVersionPrimary=null;oa.length=0}var to=At.ReactCurrentDispatcher,sa=At.ReactCurrentBatchConfig,Cn=0,ee=null,le=null,fe=null,Io=!1,Ur=!1,si=0,qm=0;function we(){throw Error(E(321))}function cu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function fu(e,t,n,r,i,o){if(Cn=o,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?rg:ig,e=n(r,i),Ur){o=0;do{if(Ur=!1,si=0,25<=o)throw Error(E(301));o+=1,fe=le=null,t.updateQueue=null,to.current=og,e=n(r,i)}while(Ur)}if(to.current=To,t=le!==null&&le.next!==null,Cn=0,fe=le=ee=null,Io=!1,t)throw Error(E(300));return e}function du(){var e=si!==0;return si=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ee.memoizedState=fe=e:fe=fe.next=e,fe}function Ze(){if(le===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=fe===null?ee.memoizedState:fe.next;if(t!==null)fe=t,le=e;else{if(e===null)throw Error(E(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},fe===null?ee.memoizedState=fe=e:fe=fe.next=e}return fe}function ai(e,t){return typeof t=="function"?t(e):t}function aa(e){var t=Ze(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Cn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,ee.lanes|=d,En|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ut(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ee.lanes|=o,En|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function la(e){var t=Ze(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ut(o,t.memoizedState)||(Re=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function rp(){}function ip(e,t){var n=ee,r=Ze(),i=t(),o=!ut(r.memoizedState,i);if(o&&(r.memoizedState=i,Re=!0),r=r.queue,pu(ap.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,li(9,sp.bind(null,n,r,i,t),void 0,null),he===null)throw Error(E(349));Cn&30||op(n,t,i)}return i}function op(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sp(e,t,n,r){t.value=n,t.getSnapshot=r,lp(t)&&up(e)}function ap(e,t,n){return n(function(){lp(t)&&up(e)})}function lp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function up(e){var t=bt(e,1);t!==null&&at(t,e,1,-1)}function Rc(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:e},t.queue=e,e=e.dispatch=ng.bind(null,ee,e),[t.memoizedState,e]}function li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cp(){return Ze().memoizedState}function no(e,t,n,r){var i=ht();ee.flags|=e,i.memoizedState=li(1|t,n,void 0,r===void 0?null:r)}function ts(e,t,n,r){var i=Ze();r=r===void 0?null:r;var o=void 0;if(le!==null){var s=le.memoizedState;if(o=s.destroy,r!==null&&cu(r,s.deps)){i.memoizedState=li(t,n,o,r);return}}ee.flags|=e,i.memoizedState=li(1|t,n,o,r)}function Ic(e,t){return no(8390656,8,e,t)}function pu(e,t){return ts(2048,8,e,t)}function fp(e,t){return ts(4,2,e,t)}function dp(e,t){return ts(4,4,e,t)}function pp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hp(e,t,n){return n=n!=null?n.concat([e]):null,ts(4,4,pp.bind(null,t,e),n)}function hu(){}function mp(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gp(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yp(e,t,n){return Cn&21?(ut(n,t)||(n=kd(),ee.lanes|=n,En|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function eg(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=sa.transition;sa.transition={};try{e(!1),t()}finally{B=n,sa.transition=r}}function vp(){return Ze().memoizedState}function tg(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xp(e))wp(t,n);else if(n=ep(e,t,n,r),n!==null){var i=_e();at(n,e,r,i),Sp(n,t,r)}}function ng(e,t,n){var r=tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xp(e))wp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ut(a,s)){var l=t.interleaved;l===null?(i.next=i,ou(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ep(e,t,i,r),n!==null&&(i=_e(),at(n,e,r,i),Sp(n,t,r))}}function xp(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function wp(e,t){Ur=Io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wl(e,n)}}var To={readContext:Je,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},rg={readContext:Je,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Ic,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,pp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tg.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:Rc,useDebugValue:hu,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=Rc(!1),t=e[0];return e=eg.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,i=ht();if(Z){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),he===null)throw Error(E(349));Cn&30||op(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ic(ap.bind(null,r,o,e),[e]),r.flags|=2048,li(9,sp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ht(),t=he.identifierPrefix;if(Z){var n=jt,r=Lt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ig={readContext:Je,useCallback:mp,useContext:Je,useEffect:pu,useImperativeHandle:hp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:gp,useReducer:aa,useRef:cp,useState:function(){return aa(ai)},useDebugValue:hu,useDeferredValue:function(e){var t=Ze();return yp(t,le.memoizedState,e)},useTransition:function(){var e=aa(ai)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:rp,useSyncExternalStore:ip,useId:vp,unstable_isNewReconciler:!1},og={readContext:Je,useCallback:mp,useContext:Je,useEffect:pu,useImperativeHandle:hp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:gp,useReducer:la,useRef:cp,useState:function(){return la(ai)},useDebugValue:hu,useDeferredValue:function(e){var t=Ze();return le===null?t.memoizedState=e:yp(t,le.memoizedState,e)},useTransition:function(){var e=la(ai)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:rp,useSyncExternalStore:ip,useId:vp,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function el(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ns={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),i=tn(e),o=Rt(r,i);o.payload=t,n!=null&&(o.callback=n),t=qt(e,o,i),t!==null&&(at(t,e,i,r),eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),i=tn(e),o=Rt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=qt(e,o,i),t!==null&&(at(t,e,i,r),eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=tn(e),i=Rt(n,r);i.tag=2,t!=null&&(i.callback=t),t=qt(e,i,r),t!==null&&(at(t,e,r,n),eo(t,e,r))}};function Tc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ei(n,r)||!ei(i,o):!0}function kp(e,t,n){var r=!1,i=sn,o=t.contextType;return typeof o=="object"&&o!==null?o=Je(o):(i=Te(t)?Sn:Ee.current,r=t.contextTypes,o=(r=r!=null)?nr(e,i):sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ns,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ns.enqueueReplaceState(t,t.state,null)}function tl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},su(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Je(o):(o=Te(t)?Sn:Ee.current,i.context=nr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(el(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ns.enqueueReplaceState(i,i.state,null),jo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",r=t;do n+=I0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ua(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function nl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sg=typeof WeakMap=="function"?WeakMap:Map;function Cp(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zo||(zo=!0,dl=r),nl(e,t)},n}function Ep(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){nl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){nl(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function zc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=wg.bind(null,e,t,n),t.then(e,e))}function Ac(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,qt(n,t,1))),n.lanes|=1),e)}var ag=At.ReactCurrentOwner,Re=!1;function Ne(e,t,n,r){t.child=e===null?qd(t,null,n,r):ir(t,e.child,n,r)}function Fc(e,t,n,r,i){n=n.render;var o=t.ref;return Zn(t,i),r=fu(e,t,n,r,o,i),n=du(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(Z&&n&&ql(t),t.flags|=1,Ne(e,t,r,i),t.child)}function Dc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ku(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$p(e,t,o,r,i)):(e=so(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ei,n(s,r)&&e.ref===t.ref)return zt(e,t,i)}return t.flags|=1,e=nn(o,r),e.ref=t.ref,e.return=t,t.child=e}function $p(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ei(o,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,zt(e,t,i)}return rl(e,t,n,r,i)}function Np(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Kn,Fe),Fe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Kn,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(Kn,Fe),Fe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(Kn,Fe),Fe|=r;return Ne(e,t,i,n),t.child}function _p(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rl(e,t,n,r,i){var o=Te(n)?Sn:Ee.current;return o=nr(t,o),Zn(t,i),n=fu(e,t,n,r,o,i),r=du(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(Z&&r&&ql(t),t.flags|=1,Ne(e,t,n,i),t.child)}function Uc(e,t,n,r,i){if(Te(n)){var o=!0;No(t)}else o=!1;if(Zn(t,i),t.stateNode===null)ro(e,t),kp(t,n,r),tl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Te(n)?Sn:Ee.current,u=nr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bc(t,s,r,u),Ht=!1;var c=t.memoizedState;s.state=c,jo(t,r,s,i),l=t.memoizedState,a!==r||c!==l||Ie.current||Ht?(typeof d=="function"&&(el(t,n,d,r),l=t.memoizedState),(a=Ht||Tc(t,n,a,r,c,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,tp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:rt(t.type,a),s.props=u,p=t.pendingProps,c=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Je(l):(l=Te(n)?Sn:Ee.current,l=nr(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||c!==l)&&bc(t,s,r,l),Ht=!1,c=t.memoizedState,s.state=c,jo(t,r,s,i);var g=t.memoizedState;a!==p||c!==g||Ie.current||Ht?(typeof v=="function"&&(el(t,n,v,r),g=t.memoizedState),(u=Ht||Tc(t,n,u,r,c,g,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return il(e,t,n,r,o,i)}function il(e,t,n,r,i,o){_p(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Nc(t,n,!1),zt(e,t,o);r=t.stateNode,ag.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ir(t,e.child,null,o),t.child=ir(t,null,a,o)):Ne(e,t,a,o),t.memoizedState=r.state,i&&Nc(t,n,!0),t.child}function Op(e){var t=e.stateNode;t.pendingContext?$c(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$c(e,t.context,!1),au(e,t.containerInfo)}function Vc(e,t,n,r,i){return rr(),tu(i),t.flags|=256,Ne(e,t,n,r),t.child}var ol={dehydrated:null,treeContext:null,retryLane:0};function sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pp(e,t,n){var r=t.pendingProps,i=q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(q,i&1),e===null)return Za(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=os(s,r,0,null),e=xn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=sl(n),t.memoizedState=ol,e):mu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return lg(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=nn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=nn(a,o):(o=xn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?sl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ol,r}return o=e.child,e=o.sibling,r=nn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function mu(e,t){return t=os({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mi(e,t,n,r){return r!==null&&tu(r),ir(t,e.child,null,n),e=mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ua(Error(E(422))),Mi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=os({mode:"visible",children:r.children},i,0,null),o=xn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ir(t,e.child,null,s),t.child.memoizedState=sl(s),t.memoizedState=ol,o);if(!(t.mode&1))return Mi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=ua(o,r,void 0),Mi(e,t,s,r)}if(a=(s&e.childLanes)!==0,Re||a){if(r=he,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,bt(e,i),at(r,e,i,-1))}return Su(),r=ua(Error(E(421))),Mi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Sg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,De=Zt(i.nextSibling),Ue=t,Z=!0,ot=null,e!==null&&(Qe[Ye++]=Lt,Qe[Ye++]=jt,Qe[Ye++]=kn,Lt=e.id,jt=e.overflow,kn=t),t=mu(t,r.children),t.flags|=4096,t)}function Bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qa(e.return,t,n)}function ca(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Lp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ne(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bc(e,n,t);else if(e.tag===19)Bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ca(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ca(t,!0,n,null,o);break;case"together":ca(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ug(e,t,n){switch(t.tag){case 3:Op(t),rr();break;case 5:np(t);break;case 1:Te(t.type)&&No(t);break;case 4:au(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Po,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Pp(e,t,n):(Y(q,q.current&1),e=zt(e,t,n),e!==null?e.sibling:null);Y(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Np(e,t,n)}return zt(e,t,n)}var jp,al,Rp,Ip;jp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};al=function(){};Rp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gn(kt.current);var o=null;switch(n){case"input":i=Pa(e,i),r=Pa(e,r),o=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),o=[];break;case"textarea":i=Ra(e,i),r=Ra(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Eo)}Ta(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&X("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ip=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cg(e,t,n){var r=t.pendingProps;switch(eu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Te(t.type)&&$o(),Se(t),null;case 3:return r=t.stateNode,or(),J(Ie),J(Ee),uu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(ml(ot),ot=null))),al(e,t),Se(t),null;case 5:lu(t);var i=gn(oi.current);if(n=t.type,e!==null&&t.stateNode!=null)Rp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Se(t),null}if(e=gn(kt.current),zi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[xt]=t,r[ri]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Tr.length;i++)X(Tr[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Zu(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":ec(r,o),X("invalid",r)}Ta(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&bi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&bi(r.textContent,a,e),i=["children",""+a]):Qr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&X("scroll",r)}switch(n){case"input":_i(r),qu(r,o,!0);break;case"textarea":_i(r),tc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Eo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ad(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[xt]=t,e[ri]=r,jp(e,t,!1,!1),t.stateNode=e;e:{switch(s=ba(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tr.length;i++)X(Tr[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":Zu(e,r),i=Pa(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),X("invalid",e);break;case"textarea":ec(e,r),i=Ra(e,r),X("invalid",e);break;default:i=r}Ta(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?cd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ld(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Yr(e,l):typeof l=="number"&&Yr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&X("scroll",e):l!=null&&Fl(e,o,l,s))}switch(n){case"input":_i(e),qu(e,r,!1);break;case"textarea":_i(e),tc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Yn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)Ip(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=gn(oi.current),gn(kt.current),zi(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(o=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:bi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Se(t),null;case 13:if(J(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&De!==null&&t.mode&1&&!(t.flags&128))Jd(),rr(),t.flags|=98560,o=!1;else if(o=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[xt]=t}else rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),o=!1}else ot!==null&&(ml(ot),ot=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ue===0&&(ue=3):Su())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return or(),al(e,t),e===null&&ti(t.stateNode.containerInfo),Se(t),null;case 10:return iu(t.type._context),Se(t),null;case 17:return Te(t.type)&&$o(),Se(t),null;case 19:if(J(q),o=t.memoizedState,o===null)return Se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)$r(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ro(e),s!==null){for(t.flags|=128,$r(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>ar&&(t.flags|=128,r=!0,$r(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ro(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Z)return Se(t),null}else 2*re()-o.renderingStartTime>ar&&n!==1073741824&&(t.flags|=128,r=!0,$r(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=q.current,Y(q,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return wu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function fg(e,t){switch(eu(t),t.tag){case 1:return Te(t.type)&&$o(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),J(Ie),J(Ee),uu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return lu(t),null;case 13:if(J(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(q),null;case 4:return or(),null;case 10:return iu(t.type._context),null;case 22:case 23:return wu(),null;case 24:return null;default:return null}}var Fi=!1,Ce=!1,dg=typeof WeakSet=="function"?WeakSet:Set,O=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function ll(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Hc=!1;function pg(e,t){if(Wa=So,e=Md(),Zl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,p=e,c=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)c=p,p=v;for(;;){if(p===e)break t;if(c===n&&++u===i&&(a=s),c===o&&++d===r&&(l=s),(v=p.nextSibling)!==null)break;p=c,c=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ka={focusedElem:e,selectionRange:n},So=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,$=g.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:rt(t.type,y),$);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(x){ne(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return g=Hc,Hc=!1,g}function Vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ll(t,n,o)}i=i.next}while(i!==r)}}function rs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ul(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tp(e){var t=e.alternate;t!==null&&(e.alternate=null,Tp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[ri],delete t[Xa],delete t[Xm],delete t[Gm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bp(e){return e.tag===5||e.tag===3||e.tag===4}function Wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Eo));else if(r!==4&&(e=e.child,e!==null))for(cl(e,t,n),e=e.sibling;e!==null;)cl(e,t,n),e=e.sibling}function fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}var ge=null,it=!1;function Ut(e,t,n){for(n=n.child;n!==null;)zp(e,t,n),n=n.sibling}function zp(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Xo,n)}catch{}switch(n.tag){case 5:Ce||Wn(n,t);case 6:var r=ge,i=it;ge=null,Ut(e,t,n),ge=r,it=i,ge!==null&&(it?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(it?(e=ge,n=n.stateNode,e.nodeType===8?ra(e.parentNode,n):e.nodeType===1&&ra(e,n),Zr(e)):ra(ge,n.stateNode));break;case 4:r=ge,i=it,ge=n.stateNode.containerInfo,it=!0,Ut(e,t,n),ge=r,it=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ll(n,t,s),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!Ce&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Ut(e,t,n),Ce=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function Kc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dg),t.forEach(function(r){var i=kg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ge=a.stateNode,it=!1;break e;case 3:ge=a.stateNode.containerInfo,it=!0;break e;case 4:ge=a.stateNode.containerInfo,it=!0;break e}a=a.return}if(ge===null)throw Error(E(160));zp(o,s,i),ge=null,it=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ap(t,e),t=t.sibling}function Ap(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),pt(e),r&4){try{Vr(3,e,e.return),rs(3,e)}catch(y){ne(e,e.return,y)}try{Vr(5,e,e.return)}catch(y){ne(e,e.return,y)}}break;case 1:nt(t,e),pt(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(nt(t,e),pt(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var i=e.stateNode;try{Yr(i,"")}catch(y){ne(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&od(i,o),ba(a,s);var u=ba(a,o);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?cd(i,p):d==="dangerouslySetInnerHTML"?ld(i,p):d==="children"?Yr(i,p):Fl(i,d,p,u)}switch(a){case"input":La(i,o);break;case"textarea":sd(i,o);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Yn(i,!!o.multiple,v,!1):c!==!!o.multiple&&(o.defaultValue!=null?Yn(i,!!o.multiple,o.defaultValue,!0):Yn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ri]=o}catch(y){ne(e,e.return,y)}}break;case 6:if(nt(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ne(e,e.return,y)}}break;case 3:if(nt(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zr(t.containerInfo)}catch(y){ne(e,e.return,y)}break;case 4:nt(t,e),pt(e);break;case 13:nt(t,e),pt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(vu=re())),r&4&&Kc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||d,nt(t,e),Ce=u):nt(t,e),pt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(p=O=d;O!==null;){switch(c=O,v=c.child,c.tag){case 0:case 11:case 14:case 15:Vr(4,c,c.return);break;case 1:Wn(c,c.return);var g=c.stateNode;if(typeof g.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:Wn(c,c.return);break;case 22:if(c.memoizedState!==null){Yc(p);continue}}v!==null?(v.return=c,O=v):Yc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ud("display",s))}catch(y){ne(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ne(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nt(t,e),pt(e),r&4&&Kc(e);break;case 21:break;default:nt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bp(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yr(i,""),r.flags&=-33);var o=Wc(e);fl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Wc(e);cl(e,a,s);break;default:throw Error(E(161))}}catch(l){ne(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hg(e,t,n){O=e,Mp(e)}function Mp(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Fi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ce;a=Fi;var u=Ce;if(Fi=s,(Ce=l)&&!u)for(O=i;O!==null;)s=O,l=s.child,s.tag===22&&s.memoizedState!==null?Xc(i):l!==null?(l.return=s,O=l):Xc(i);for(;o!==null;)O=o,Mp(o),o=o.sibling;O=i,Fi=a,Ce=u}Qc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):Qc(e)}}function Qc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||rs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&jc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Zr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||t.flags&512&&ul(t)}catch(c){ne(t,t.return,c)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Yc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Xc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(l){ne(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ne(t,i,l)}}var o=t.return;try{ul(t)}catch(l){ne(t,o,l)}break;case 5:var s=t.return;try{ul(t)}catch(l){ne(t,s,l)}}}catch(l){ne(t,t.return,l)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var mg=Math.ceil,bo=At.ReactCurrentDispatcher,gu=At.ReactCurrentOwner,Ge=At.ReactCurrentBatchConfig,A=0,he=null,se=null,ve=0,Fe=0,Kn=ln(0),ue=0,ui=null,En=0,is=0,yu=0,Br=null,Le=null,vu=0,ar=1/0,_t=null,zo=!1,dl=null,en=null,Di=!1,Yt=null,Ao=0,Hr=0,pl=null,io=-1,oo=0;function _e(){return A&6?re():io!==-1?io:io=re()}function tn(e){return e.mode&1?A&2&&ve!==0?ve&-ve:Zm.transition!==null?(oo===0&&(oo=kd()),oo):(e=B,e!==0||(e=window.event,e=e===void 0?16:Pd(e.type)),e):1}function at(e,t,n,r){if(50<Hr)throw Hr=0,pl=null,Error(E(185));xi(e,n,r),(!(A&2)||e!==he)&&(e===he&&(!(A&2)&&(is|=n),ue===4&&Kt(e,ve)),be(e,r),n===1&&A===0&&!(t.mode&1)&&(ar=re()+500,es&&un()))}function be(e,t){var n=e.callbackNode;Z0(e,t);var r=wo(e,e===he?ve:0);if(r===0)n!==null&&ic(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ic(n),t===1)e.tag===0?Jm(Gc.bind(null,e)):Yd(Gc.bind(null,e)),Qm(function(){!(A&6)&&un()}),n=null;else{switch(Cd(r)){case 1:n=Hl;break;case 4:n=wd;break;case 16:n=xo;break;case 536870912:n=Sd;break;default:n=xo}n=Kp(n,Fp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fp(e,t){if(io=-1,oo=0,A&6)throw Error(E(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=wo(e,e===he?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Mo(e,r);else{t=r;var i=A;A|=2;var o=Up();(he!==e||ve!==t)&&(_t=null,ar=re()+500,vn(e,t));do try{vg();break}catch(a){Dp(e,a)}while(!0);ru(),bo.current=o,A=i,se!==null?t=0:(he=null,ve=0,t=ue)}if(t!==0){if(t===2&&(i=Da(e),i!==0&&(r=i,t=hl(e,i))),t===1)throw n=ui,vn(e,0),Kt(e,r),be(e,re()),n;if(t===6)Kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!gg(i)&&(t=Mo(e,r),t===2&&(o=Da(e),o!==0&&(r=o,t=hl(e,o))),t===1))throw n=ui,vn(e,0),Kt(e,r),be(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:pn(e,Le,_t);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=vu+500-re(),10<t)){if(wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ya(pn.bind(null,e,Le,_t),t);break}pn(e,Le,_t);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-st(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mg(r/1960))-r,10<r){e.timeoutHandle=Ya(pn.bind(null,e,Le,_t),r);break}pn(e,Le,_t);break;case 5:pn(e,Le,_t);break;default:throw Error(E(329))}}}return be(e,re()),e.callbackNode===n?Fp.bind(null,e):null}function hl(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(vn(e,t).flags|=256),e=Mo(e,t),e!==2&&(t=Le,Le=n,t!==null&&ml(t)),e}function ml(e){Le===null?Le=e:Le.push.apply(Le,e)}function gg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ut(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~yu,t&=~is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function Gc(e){if(A&6)throw Error(E(327));qn();var t=wo(e,0);if(!(t&1))return be(e,re()),null;var n=Mo(e,t);if(e.tag!==0&&n===2){var r=Da(e);r!==0&&(t=r,n=hl(e,r))}if(n===1)throw n=ui,vn(e,0),Kt(e,t),be(e,re()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Le,_t),be(e,re()),null}function xu(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(ar=re()+500,es&&un())}}function $n(e){Yt!==null&&Yt.tag===0&&!(A&6)&&qn();var t=A;A|=1;var n=Ge.transition,r=B;try{if(Ge.transition=null,B=1,e)return e()}finally{B=r,Ge.transition=n,A=t,!(A&6)&&un()}}function wu(){Fe=Kn.current,J(Kn)}function vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Km(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(eu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$o();break;case 3:or(),J(Ie),J(Ee),uu();break;case 5:lu(r);break;case 4:or();break;case 13:J(q);break;case 19:J(q);break;case 10:iu(r.type._context);break;case 22:case 23:wu()}n=n.return}if(he=e,se=e=nn(e.current,null),ve=Fe=t,ue=0,ui=null,yu=is=En=0,Le=Br=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}mn=null}return e}function Dp(e,t){do{var n=se;try{if(ru(),to.current=To,Io){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Io=!1}if(Cn=0,fe=le=ee=null,Ur=!1,si=0,gu.current=null,n===null||n.return===null){ue=1,ui=t,se=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ve,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var c=d.alternate;c?(d.updateQueue=c.updateQueue,d.memoizedState=c.memoizedState,d.lanes=c.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Ac(s);if(v!==null){v.flags&=-257,Mc(v,s,a,o,t),v.mode&1&&zc(o,u,t),t=v,l=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(l),t.updateQueue=y}else g.add(l);break e}else{if(!(t&1)){zc(o,u,t),Su();break e}l=Error(E(426))}}else if(Z&&a.mode&1){var $=Ac(s);if($!==null){!($.flags&65536)&&($.flags|=256),Mc($,s,a,o,t),tu(sr(l,a));break e}}o=l=sr(l,a),ue!==4&&(ue=2),Br===null?Br=[o]:Br.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Cp(o,l,t);Lc(o,h);break e;case 1:a=l;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(en===null||!en.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ep(o,a,t);Lc(o,x);break e}}o=o.return}while(o!==null)}Bp(n)}catch(k){t=k,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Up(){var e=bo.current;return bo.current=To,e===null?To:e}function Su(){(ue===0||ue===3||ue===2)&&(ue=4),he===null||!(En&268435455)&&!(is&268435455)||Kt(he,ve)}function Mo(e,t){var n=A;A|=2;var r=Up();(he!==e||ve!==t)&&(_t=null,vn(e,t));do try{yg();break}catch(i){Dp(e,i)}while(!0);if(ru(),A=n,bo.current=r,se!==null)throw Error(E(261));return he=null,ve=0,ue}function yg(){for(;se!==null;)Vp(se)}function vg(){for(;se!==null&&!B0();)Vp(se)}function Vp(e){var t=Wp(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?Bp(e):se=t,gu.current=null}function Bp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fg(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,se=null;return}}else if(n=cg(n,t,Fe),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ue===0&&(ue=5)}function pn(e,t,n){var r=B,i=Ge.transition;try{Ge.transition=null,B=1,xg(e,t,n,r)}finally{Ge.transition=i,B=r}return null}function xg(e,t,n,r){do qn();while(Yt!==null);if(A&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(q0(e,o),e===he&&(se=he=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Di||(Di=!0,Kp(xo,function(){return qn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ge.transition,Ge.transition=null;var s=B;B=1;var a=A;A|=4,gu.current=null,pg(e,n),Ap(n,e),Fm(Ka),So=!!Wa,Ka=Wa=null,e.current=n,hg(n),H0(),A=a,B=s,Ge.transition=o}else e.current=n;if(Di&&(Di=!1,Yt=e,Ao=i),o=e.pendingLanes,o===0&&(en=null),Q0(n.stateNode),be(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zo)throw zo=!1,e=dl,dl=null,e;return Ao&1&&e.tag!==0&&qn(),o=e.pendingLanes,o&1?e===pl?Hr++:(Hr=0,pl=e):Hr=0,un(),null}function qn(){if(Yt!==null){var e=Cd(Ao),t=Ge.transition,n=B;try{if(Ge.transition=null,B=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,Ao=0,A&6)throw Error(E(331));var i=A;for(A|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:Vr(8,d,o)}var p=d.child;if(p!==null)p.return=d,O=p;else for(;O!==null;){d=O;var c=d.sibling,v=d.return;if(Tp(d),d===u){O=null;break}if(c!==null){c.return=v,O=c;break}O=v}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var $=y.sibling;y.sibling=null,y=$}while(y!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,O=h;break e}O=o.return}}var f=e.current;for(O=f;O!==null;){s=O;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,O=m;else e:for(s=f;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rs(9,a)}}catch(k){ne(a,a.return,k)}if(a===s){O=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,O=x;break e}O=a.return}}if(A=i,un(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Xo,e)}catch{}r=!0}return r}finally{B=n,Ge.transition=t}}return!1}function Jc(e,t,n){t=sr(n,t),t=Cp(e,t,1),e=qt(e,t,1),t=_e(),e!==null&&(xi(e,1,t),be(e,t))}function ne(e,t,n){if(e.tag===3)Jc(e,e,n);else for(;t!==null;){if(t.tag===3){Jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=sr(n,e),e=Ep(t,e,1),t=qt(t,e,1),e=_e(),t!==null&&(xi(t,1,e),be(t,e));break}}t=t.return}}function wg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(ve&n)===n&&(ue===4||ue===3&&(ve&130023424)===ve&&500>re()-vu?vn(e,0):yu|=n),be(e,t)}function Hp(e,t){t===0&&(e.mode&1?(t=Li,Li<<=1,!(Li&130023424)&&(Li=4194304)):t=1);var n=_e();e=bt(e,t),e!==null&&(xi(e,t,n),be(e,n))}function Sg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hp(e,n)}function kg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Hp(e,n)}var Wp;Wp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,ug(e,t,n);Re=!!(e.flags&131072)}else Re=!1,Z&&t.flags&1048576&&Xd(t,Oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var i=nr(t,Ee.current);Zn(t,n),i=fu(null,t,r,e,i,n);var o=du();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(o=!0,No(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,su(t),i.updater=ns,t.stateNode=i,i._reactInternals=t,tl(t,r,e,n),t=il(null,t,r,!0,o,n)):(t.tag=0,Z&&o&&ql(t),Ne(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Eg(r),e=rt(r,e),i){case 0:t=rl(null,t,r,e,n);break e;case 1:t=Uc(null,t,r,e,n);break e;case 11:t=Fc(null,t,r,e,n);break e;case 14:t=Dc(null,t,r,rt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),rl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),Uc(e,t,r,i,n);case 3:e:{if(Op(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,tp(e,t),jo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=sr(Error(E(423)),t),t=Vc(e,t,r,n,i);break e}else if(r!==i){i=sr(Error(E(424)),t),t=Vc(e,t,r,n,i);break e}else for(De=Zt(t.stateNode.containerInfo.firstChild),Ue=t,Z=!0,ot=null,n=qd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rr(),r===i){t=zt(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return np(t),e===null&&Za(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Qa(r,i)?s=null:o!==null&&Qa(r,o)&&(t.flags|=32),_p(e,t),Ne(e,t,s,n),t.child;case 6:return e===null&&Za(t),null;case 13:return Pp(e,t,n);case 4:return au(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),Fc(e,t,r,i,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Y(Po,r._currentValue),r._currentValue=s,o!==null)if(ut(o.value,s)){if(o.children===i.children&&!Ie.current){t=zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Rt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qa(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),qa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ne(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Zn(t,n),i=Je(i),r=r(i),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,i=rt(r,t.pendingProps),i=rt(r.type,i),Dc(e,t,r,i,n);case 15:return $p(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),ro(e,t),t.tag=1,Te(r)?(e=!0,No(t)):e=!1,Zn(t,n),kp(t,r,i),tl(t,r,i,n),il(null,t,r,!0,e,n);case 19:return Lp(e,t,n);case 22:return Np(e,t,n)}throw Error(E(156,t.tag))};function Kp(e,t){return xd(e,t)}function Cg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,n,r){return new Cg(e,t,n,r)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eg(e){if(typeof e=="function")return ku(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ul)return 11;if(e===Vl)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=Xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function so(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ku(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case zn:return xn(n.children,i,o,t);case Dl:s=8,i|=8;break;case $a:return e=Xe(12,n,t,i|2),e.elementType=$a,e.lanes=o,e;case Na:return e=Xe(13,n,t,i),e.elementType=Na,e.lanes=o,e;case _a:return e=Xe(19,n,t,i),e.elementType=_a,e.lanes=o,e;case nd:return os(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ed:s=10;break e;case td:s=9;break e;case Ul:s=11;break e;case Vl:s=14;break e;case Bt:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Xe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function xn(e,t,n,r){return e=Xe(7,e,r,t),e.lanes=n,e}function os(e,t,n,r){return e=Xe(22,e,r,t),e.elementType=nd,e.lanes=n,e.stateNode={isHidden:!1},e}function fa(e,t,n){return e=Xe(6,e,null,t),e.lanes=n,e}function da(e,t,n){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $g(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ks(0),this.expirationTimes=Ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cu(e,t,n,r,i,o,s,a,l){return e=new $g(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(o),e}function Ng(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qp(e){if(!e)return sn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Te(n))return Qd(e,n,t)}return t}function Yp(e,t,n,r,i,o,s,a,l){return e=Cu(n,r,!0,e,i,o,s,a,l),e.context=Qp(null),n=e.current,r=_e(),i=tn(n),o=Rt(r,i),o.callback=t??null,qt(n,o,i),e.current.lanes=i,xi(e,i,r),be(e,r),e}function ss(e,t,n,r){var i=t.current,o=_e(),s=tn(i);return n=Qp(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qt(i,t,s),e!==null&&(at(e,i,s,o),eo(e,i,s)),s}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eu(e,t){Zc(e,t),(e=e.alternate)&&Zc(e,t)}function _g(){return null}var Xp=typeof reportError=="function"?reportError:function(e){console.error(e)};function $u(e){this._internalRoot=e}as.prototype.render=$u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));ss(e,t,null,null)};as.prototype.unmount=$u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){ss(null,e,null,null)}),t[Tt]=null}};function as(e){this._internalRoot=e}as.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&Od(e)}};function Nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qc(){}function Og(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Fo(s);o.call(u)}}var s=Yp(t,r,e,0,null,!1,!1,"",qc);return e._reactRootContainer=s,e[Tt]=s.current,ti(e.nodeType===8?e.parentNode:e),$n(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Fo(l);a.call(u)}}var l=Cu(e,0,!1,null,null,!1,!1,"",qc);return e._reactRootContainer=l,e[Tt]=l.current,ti(e.nodeType===8?e.parentNode:e),$n(function(){ss(t,l,n,r)}),l}function us(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Fo(s);a.call(l)}}ss(t,s,e,i)}else s=Og(n,t,e,i,r);return Fo(s)}Ed=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ir(t.pendingLanes);n!==0&&(Wl(t,n|1),be(t,re()),!(A&6)&&(ar=re()+500,un()))}break;case 13:$n(function(){var r=bt(e,1);if(r!==null){var i=_e();at(r,e,1,i)}}),Eu(e,1)}};Kl=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=_e();at(t,e,134217728,n)}Eu(e,134217728)}};$d=function(e){if(e.tag===13){var t=tn(e),n=bt(e,t);if(n!==null){var r=_e();at(n,e,t,r)}Eu(e,t)}};Nd=function(){return B};_d=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Aa=function(e,t,n){switch(t){case"input":if(La(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qo(r);if(!i)throw Error(E(90));id(r),La(r,i)}}}break;case"textarea":sd(e,n);break;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}};pd=xu;hd=$n;var Pg={usingClientEntryPoint:!1,Events:[Si,Dn,qo,fd,dd,xu]},Nr={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lg={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yd(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||_g,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{Xo=Ui.inject(Lg),St=Ui}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pg;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nu(t))throw Error(E(200));return Ng(e,t,null,n)};He.createRoot=function(e,t){if(!Nu(e))throw Error(E(299));var n=!1,r="",i=Xp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cu(e,1,!1,null,null,n,!1,r,i),e[Tt]=t.current,ti(e.nodeType===8?e.parentNode:e),new $u(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=yd(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return $n(e)};He.hydrate=function(e,t,n){if(!ls(t))throw Error(E(200));return us(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!Nu(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Xp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Yp(t,null,e,1,n??null,i,!1,o,s),e[Tt]=t.current,ti(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new as(t)};He.render=function(e,t,n){if(!ls(t))throw Error(E(200));return us(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!ls(e))throw Error(E(40));return e._reactRootContainer?($n(function(){us(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};He.unstable_batchedUpdates=xu;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ls(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return us(e,t,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function Gp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gp)}catch(e){console.error(e)}}Gp(),Gf.exports=He;var jg=Gf.exports,ef=jg;Ca.createRoot=ef.createRoot,Ca.hydrateRoot=ef.hydrateRoot;var pe=function(){return pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},pe.apply(this,arguments)};function ci(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Rg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var G="-ms-",Wr="-moz-",U="-webkit-",Jp="comm",cs="rule",_u="decl",Ig="@import",Zp="@keyframes",Tg="@layer",qp=Math.abs,Ou=String.fromCharCode,gl=Object.assign;function bg(e,t){return de(e,0)^45?(((t<<2^de(e,0))<<2^de(e,1))<<2^de(e,2))<<2^de(e,3):0}function eh(e){return e.trim()}function Ot(e,t){return(e=t.exec(e))?e[0]:e}function T(e,t,n){return e.replace(t,n)}function ao(e,t,n){return e.indexOf(t,n)}function de(e,t){return e.charCodeAt(t)|0}function lr(e,t,n){return e.slice(t,n)}function gt(e){return e.length}function th(e){return e.length}function br(e,t){return t.push(e),e}function zg(e,t){return e.map(t).join("")}function tf(e,t){return e.filter(function(n){return!Ot(n,t)})}var fs=1,ur=1,nh=0,qe=0,ie=0,gr="";function ds(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:fs,column:ur,length:s,return:"",siblings:a}}function Vt(e,t){return gl(ds("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Rn(e){for(;e.root;)e=Vt(e.root,{children:[e]});br(e,e.siblings)}function Ag(){return ie}function Mg(){return ie=qe>0?de(gr,--qe):0,ur--,ie===10&&(ur=1,fs--),ie}function lt(){return ie=qe<nh?de(gr,qe++):0,ur++,ie===10&&(ur=1,fs++),ie}function wn(){return de(gr,qe)}function lo(){return qe}function ps(e,t){return lr(gr,e,t)}function yl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fg(e){return fs=ur=1,nh=gt(gr=e),qe=0,[]}function Dg(e){return gr="",e}function pa(e){return eh(ps(qe-1,vl(e===91?e+2:e===40?e+1:e)))}function Ug(e){for(;(ie=wn())&&ie<33;)lt();return yl(e)>2||yl(ie)>3?"":" "}function Vg(e,t){for(;--t&&lt()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return ps(e,lo()+(t<6&&wn()==32&&lt()==32))}function vl(e){for(;lt();)switch(ie){case e:return qe;case 34:case 39:e!==34&&e!==39&&vl(ie);break;case 40:e===41&&vl(e);break;case 92:lt();break}return qe}function Bg(e,t){for(;lt()&&e+ie!==57;)if(e+ie===84&&wn()===47)break;return"/*"+ps(t,qe-1)+"*"+Ou(e===47?e:lt())}function Hg(e){for(;!yl(wn());)lt();return ps(e,qe)}function Wg(e){return Dg(uo("",null,null,null,[""],e=Fg(e),0,[0],e))}function uo(e,t,n,r,i,o,s,a,l){for(var u=0,d=0,p=s,c=0,v=0,g=0,y=1,$=1,h=1,f=0,m="",x=i,k=o,C=r,w=m;$;)switch(g=f,f=lt()){case 40:if(g!=108&&de(w,p-1)==58){ao(w+=T(pa(f),"&","&\f"),"&\f",qp(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:w+=pa(f);break;case 9:case 10:case 13:case 32:w+=Ug(g);break;case 92:w+=Vg(lo()-1,7);continue;case 47:switch(wn()){case 42:case 47:br(Kg(Bg(lt(),lo()),t,n,l),l);break;default:w+="/"}break;case 123*y:a[u++]=gt(w)*h;case 125*y:case 59:case 0:switch(f){case 0:case 125:$=0;case 59+d:h==-1&&(w=T(w,/\f/g,"")),v>0&&gt(w)-p&&br(v>32?rf(w+";",r,n,p-1,l):rf(T(w," ","")+";",r,n,p-2,l),l);break;case 59:w+=";";default:if(br(C=nf(w,t,n,u,d,i,a,m,x=[],k=[],p,o),o),f===123)if(d===0)uo(w,t,C,C,x,o,p,a,k);else switch(c===99&&de(w,3)===110?100:c){case 100:case 108:case 109:case 115:uo(e,C,C,r&&br(nf(e,C,C,0,0,i,a,m,i,x=[],p,k),k),i,k,p,a,r?x:k);break;default:uo(w,C,C,C,[""],k,0,a,k)}}u=d=v=0,y=h=1,m=w="",p=s;break;case 58:p=1+gt(w),v=g;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Mg()==125)continue}switch(w+=Ou(f),f*y){case 38:h=d>0?1:(w+="\f",-1);break;case 44:a[u++]=(gt(w)-1)*h,h=1;break;case 64:wn()===45&&(w+=pa(lt())),c=wn(),d=p=gt(m=w+=Hg(lo())),f++;break;case 45:g===45&&gt(w)==2&&(y=0)}}return o}function nf(e,t,n,r,i,o,s,a,l,u,d,p){for(var c=i-1,v=i===0?o:[""],g=th(v),y=0,$=0,h=0;y<r;++y)for(var f=0,m=lr(e,c+1,c=qp($=s[y])),x=e;f<g;++f)(x=eh($>0?v[f]+" "+m:T(m,/&\f/g,v[f])))&&(l[h++]=x);return ds(e,t,n,i===0?cs:a,l,u,d,p)}function Kg(e,t,n,r){return ds(e,t,n,Jp,Ou(Ag()),lr(e,2,-2),0,r)}function rf(e,t,n,r,i){return ds(e,t,n,_u,lr(e,0,r),lr(e,r+1,-1),r,i)}function rh(e,t,n){switch(bg(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Wr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Wr+e+G+e+e;case 5936:switch(de(e,t+11)){case 114:return U+e+G+T(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+G+T(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+G+T(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+G+e+e;case 6165:return U+e+G+"flex-"+e+e;case 5187:return U+e+T(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return U+e+G+"flex-item-"+T(e,/flex-|-self/g,"")+(Ot(e,/flex-|baseline/)?"":G+"grid-row-"+T(e,/flex-|-self/g,""))+e;case 4675:return U+e+G+"flex-line-pack"+T(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+G+T(e,"shrink","negative")+e;case 5292:return U+e+G+T(e,"basis","preferred-size")+e;case 6060:return U+"box-"+T(e,"-grow","")+U+e+G+T(e,"grow","positive")+e;case 4554:return U+T(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return T(T(T(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return T(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return T(T(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!Ot(e,/flex-|baseline/))return G+"grid-column-align"+lr(e,t)+e;break;case 2592:case 3360:return G+T(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Ot(r.props,/grid-\w+-end/)})?~ao(e+(n=n[t].value),"span",0)?e:G+T(e,"-start","")+e+G+"grid-row-span:"+(~ao(n,"span",0)?Ot(n,/\d+/):+Ot(n,/\d+/)-+Ot(e,/\d+/))+";":G+T(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ot(r.props,/grid-\w+-start/)})?e:G+T(T(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return T(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gt(e)-1-t>6)switch(de(e,t+1)){case 109:if(de(e,t+4)!==45)break;case 102:return T(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Wr+(de(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ao(e,"stretch",0)?rh(T(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return T(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return G+i+":"+o+u+(s?G+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(de(e,t+6)===121)return T(e,":",":"+U)+e;break;case 6444:switch(de(e,de(e,14)===45?18:11)){case 120:return T(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(de(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+G+"$2box$3")+e;case 100:return T(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return T(e,"scroll-","scroll-snap-")+e}return e}function Do(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Qg(e,t,n,r){switch(e.type){case Tg:if(e.children.length)break;case Ig:case _u:return e.return=e.return||e.value;case Jp:return"";case Zp:return e.return=e.value+"{"+Do(e.children,r)+"}";case cs:if(!gt(e.value=e.props.join(",")))return""}return gt(n=Do(e.children,r))?e.return=e.value+"{"+n+"}":""}function Yg(e){var t=th(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function Xg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Gg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case _u:e.return=rh(e.value,e.length,n);return;case Zp:return Do([Vt(e,{value:T(e.value,"@","@"+U)})],r);case cs:if(e.length)return zg(n=e.props,function(i){switch(Ot(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Rn(Vt(e,{props:[T(i,/:(read-\w+)/,":"+Wr+"$1")]})),Rn(Vt(e,{props:[i]})),gl(e,{props:tf(n,r)});break;case"::placeholder":Rn(Vt(e,{props:[T(i,/:(plac\w+)/,":"+U+"input-$1")]})),Rn(Vt(e,{props:[T(i,/:(plac\w+)/,":"+Wr+"$1")]})),Rn(Vt(e,{props:[T(i,/:(plac\w+)/,G+"input-$1")]})),Rn(Vt(e,{props:[i]})),gl(e,{props:tf(n,r)});break}return""})}}var ih={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Me={},cr=typeof process<"u"&&Me!==void 0&&(Me.REACT_APP_SC_ATTR||Me.SC_ATTR)||"data-styled",oh="active",sh="data-styled-version",hs="6.1.11",Pu=`/*!sc*/
`,Lu=typeof window<"u"&&"HTMLElement"in window,Jg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Me!==void 0&&Me.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Me.REACT_APP_SC_DISABLE_SPEEDY!==""?Me.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Me.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Me!==void 0&&Me.SC_DISABLE_SPEEDY!==void 0&&Me.SC_DISABLE_SPEEDY!==""&&Me.SC_DISABLE_SPEEDY!=="false"&&Me.SC_DISABLE_SPEEDY),Zg={},ms=Object.freeze([]),fr=Object.freeze({});function ah(e,t,n){return n===void 0&&(n=fr),e.theme!==n.theme&&e.theme||t||n.theme}var lh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,e1=/(^-|-$)/g;function of(e){return e.replace(qg,"-").replace(e1,"")}var t1=/(a)(d)/gi,Vi=52,sf=function(e){return String.fromCharCode(e+(e>25?39:97))};function xl(e){var t,n="";for(t=Math.abs(e);t>Vi;t=t/Vi|0)n=sf(t%Vi)+n;return(sf(t%Vi)+n).replace(t1,"$1-$2")}var ha,uh=5381,Qn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ch=function(e){return Qn(uh,e)};function fh(e){return xl(ch(e)>>>0)}function n1(e){return e.displayName||e.name||"Component"}function ma(e){return typeof e=="string"&&!0}var dh=typeof Symbol=="function"&&Symbol.for,ph=dh?Symbol.for("react.memo"):60115,r1=dh?Symbol.for("react.forward_ref"):60112,i1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s1=((ha={})[r1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ha[ph]=hh,ha);function af(e){return("type"in(t=e)&&t.type.$$typeof)===ph?hh:"$$typeof"in e?s1[e.$$typeof]:i1;var t}var a1=Object.defineProperty,l1=Object.getOwnPropertyNames,lf=Object.getOwnPropertySymbols,u1=Object.getOwnPropertyDescriptor,c1=Object.getPrototypeOf,uf=Object.prototype;function mh(e,t,n){if(typeof t!="string"){if(uf){var r=c1(t);r&&r!==uf&&mh(e,r,n)}var i=l1(t);lf&&(i=i.concat(lf(t)));for(var o=af(e),s=af(t),a=0;a<i.length;++a){var l=i[a];if(!(l in o1||n&&n[l]||s&&l in s||o&&l in o)){var u=u1(t,l);try{a1(e,l,u)}catch{}}}}return e}function Nn(e){return typeof e=="function"}function ju(e){return typeof e=="object"&&"styledComponentId"in e}function yn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function wl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function fi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sl(e,t,n){if(n===void 0&&(n=!1),!n&&!fi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sl(e[r],t[r]);else if(fi(t))for(var r in t)e[r]=Sl(e[r],t[r]);return e}function Ru(e,t){Object.defineProperty(e,"toString",{value:t})}function _n(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var f1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw _n(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Pu);return n},e}(),co=new Map,Uo=new Map,fo=1,Bi=function(e){if(co.has(e))return co.get(e);for(;Uo.has(fo);)fo++;var t=fo++;return co.set(e,t),Uo.set(t,e),t},d1=function(e,t){fo=t+1,co.set(e,t),Uo.set(t,e)},p1="style[".concat(cr,"][").concat(sh,'="').concat(hs,'"]'),h1=new RegExp("^".concat(cr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),m1=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},g1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Pu),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(h1);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(d1(d,u),m1(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function y1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(cr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(cr,oh),r.setAttribute(sh,hs);var s=y1();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},v1=function(){function e(t){this.element=gh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw _n(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),x1=function(){function e(t){this.element=gh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),w1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),cf=Lu,S1={isServer:!Lu,useCSSOMInjection:!Jg},Vo=function(){function e(t,n,r){t===void 0&&(t=fr),n===void 0&&(n={});var i=this;this.options=pe(pe({},S1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Lu&&cf&&(cf=!1,function(o){for(var s=document.querySelectorAll(p1),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(cr)!==oh&&(g1(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ru(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(p){var c=function(h){return Uo.get(h)}(p);if(c===void 0)return"continue";var v=o.names.get(c),g=s.getGroup(p);if(v===void 0||g.length===0)return"continue";var y="".concat(cr,".g").concat(p,'[id="').concat(c,'"]'),$="";v!==void 0&&v.forEach(function(h){h.length>0&&($+="".concat(h,","))}),l+="".concat(g).concat(y,'{content:"').concat($,'"}').concat(Pu)},d=0;d<a;d++)u(d);return l}(i)})}return e.registerId=function(t){return Bi(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(pe(pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new w1(i):r?new v1(i):new x1(i)}(this.options),new f1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Bi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Bi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Bi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),k1=/&/g,C1=/^\s*\/\/.*$/gm;function yh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=yh(n.children,t)),n})}function E1(e){var t,n,r,i=fr,o=i.options,s=o===void 0?fr:o,a=i.plugins,l=a===void 0?ms:a,u=function(c,v,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):c},d=l.slice();d.push(function(c){c.type===cs&&c.value.includes("&")&&(c.props[0]=c.props[0].replace(k1,n).replace(r,u))}),s.prefix&&d.push(Gg),d.push(Qg);var p=function(c,v,g,y){v===void 0&&(v=""),g===void 0&&(g=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var $=c.replace(C1,""),h=Wg(g||v?"".concat(g," ").concat(v," { ").concat($," }"):$);s.namespace&&(h=yh(h,s.namespace));var f=[];return Do(h,Yg(d.concat(Xg(function(m){return f.push(m)})))),f};return p.hash=l.length?l.reduce(function(c,v){return v.name||_n(15),Qn(c,v.name)},uh).toString():"",p}var $1=new Vo,kl=E1(),vh=V.createContext({shouldForwardProp:void 0,styleSheet:$1,stylis:kl});vh.Consumer;V.createContext(void 0);function Cl(){return R.useContext(vh)}var N1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=kl);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ru(this,function(){throw _n(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=kl),this.name+t.hash},e}(),_1=function(e){return e>="A"&&e<="Z"};function ff(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var xh=function(e){return e==null||e===!1||e===""},wh=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!xh(o)&&(Array.isArray(o)&&o.isCss||Nn(o)?r.push("".concat(ff(i),":"),o,";"):fi(o)?r.push.apply(r,ci(ci(["".concat(i," {")],wh(o),!1),["}"],!1)):r.push("".concat(ff(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ih||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function rn(e,t,n,r){if(xh(e))return[];if(ju(e))return[".".concat(e.styledComponentId)];if(Nn(e)){if(!Nn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return rn(i,t,n,r)}var o;return e instanceof N1?n?(e.inject(n,r),[e.getName(r)]):[e]:fi(e)?wh(e):Array.isArray(e)?Array.prototype.concat.apply(ms,e.map(function(s){return rn(s,t,n,r)})):[e.toString()]}function Sh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Nn(n)&&!ju(n))return!1}return!0}var O1=ch(hs),P1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Sh(t),this.componentId=n,this.baseHash=Qn(O1,n),this.baseStyle=r,Vo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=yn(i,this.staticRulesId);else{var o=wl(rn(this.rules,t,n,r)),s=xl(Qn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=yn(i,s),this.staticRulesId=s}else{for(var l=Qn(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var c=wl(rn(p,t,n,r));l=Qn(l,c+d),u+=c}}if(u){var v=xl(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=yn(i,v)}}return i},e}(),di=V.createContext(void 0);di.Consumer;function L1(e){var t=V.useContext(di),n=R.useMemo(function(){return function(r,i){if(!r)throw _n(14);if(Nn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw _n(8);return i?pe(pe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?V.createElement(di.Provider,{value:n},e.children):null}var ga={};function j1(e,t,n){var r=ju(e),i=e,o=!ma(e),s=t.attrs,a=s===void 0?ms:s,l=t.componentId,u=l===void 0?function(x,k){var C=typeof x!="string"?"sc":of(x);ga[C]=(ga[C]||0)+1;var w="".concat(C,"-").concat(fh(hs+C+ga[C]));return k?"".concat(k,"-").concat(w):w}(t.displayName,t.parentComponentId):l,d=t.displayName,p=d===void 0?function(x){return ma(x)?"styled.".concat(x):"Styled(".concat(n1(x),")")}(e):d,c=t.displayName&&t.componentId?"".concat(of(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;g=function(x,k){return y(x,k)&&$(x,k)}}else g=y}var h=new P1(n,c,r?i.componentStyle:void 0);function f(x,k){return function(C,w,P){var K=C.attrs,I=C.componentStyle,ae=C.defaultProps,Mt=C.foldedComponentIds,Et=C.styledComponentId,ct=C.target,$t=V.useContext(di),ft=Cl(),dt=C.shouldForwardProp||ft.shouldForwardProp,_=ah(w,$t,ae)||fr,L=function(Ft,Ae,Nt){for(var vr,fn=pe(pe({},Ae),{className:void 0,theme:Nt}),Ds=0;Ds<Ft.length;Ds+=1){var Ei=Nn(vr=Ft[Ds])?vr(fn):vr;for(var Dt in Ei)fn[Dt]=Dt==="className"?yn(fn[Dt],Ei[Dt]):Dt==="style"?pe(pe({},fn[Dt]),Ei[Dt]):Ei[Dt]}return Ae.className&&(fn.className=yn(fn.className,Ae.className)),fn}(K,w,_),j=L.as||ct,D={};for(var Q in L)L[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&L.theme===_||(Q==="forwardedAs"?D.as=L.forwardedAs:dt&&!dt(Q,j)||(D[Q]=L[Q]));var cn=function(Ft,Ae){var Nt=Cl(),vr=Ft.generateAndInjectStyles(Ae,Nt.styleSheet,Nt.stylis);return vr}(I,L),tt=yn(Mt,Et);return cn&&(tt+=" "+cn),L.className&&(tt+=" "+L.className),D[ma(j)&&!lh.has(j)?"class":"className"]=tt,D.ref=P,R.createElement(j,D)}(m,x,k)}f.displayName=p;var m=V.forwardRef(f);return m.attrs=v,m.componentStyle=h,m.displayName=p,m.shouldForwardProp=g,m.foldedComponentIds=r?yn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=c,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(k){for(var C=[],w=1;w<arguments.length;w++)C[w-1]=arguments[w];for(var P=0,K=C;P<K.length;P++)Sl(k,K[P],!0);return k}({},i.defaultProps,x):x}}),Ru(m,function(){return".".concat(m.styledComponentId)}),o&&mh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function df(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var pf=function(e){return Object.assign(e,{isCss:!0})};function kh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Nn(e)||fi(e))return pf(rn(df(ms,ci([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?rn(r):pf(rn(df(r,t)))}function El(e,t,n){if(n===void 0&&(n=fr),!t)throw _n(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,kh.apply(void 0,ci([i],o,!1)))};return r.attrs=function(i){return El(e,t,pe(pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return El(e,t,pe(pe({},n),i))},r}var Ch=function(e){return El(j1,e)},z=Ch;lh.forEach(function(e){z[e]=Ch(e)});var R1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Sh(t),Vo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(wl(rn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Vo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function I1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=kh.apply(void 0,ci([e],t,!1)),i="sc-global-".concat(fh(JSON.stringify(r))),o=new R1(r,i),s=function(l){var u=Cl(),d=V.useContext(di),p=V.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(p,l,u.styleSheet,d,u.stylis),V.useLayoutEffect(function(){if(!u.styleSheet.server)return a(p,l,u.styleSheet,d,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,l,u.styleSheet,d,u.stylis]),null};function a(l,u,d,p,c){if(o.isStatic)o.renderStyles(l,Zg,d,c);else{var v=pe(pe({},u),{theme:ah(u,p,s.defaultProps)});o.renderStyles(l,v,d,c)}}return V.memo(s)}const T1={},b1=I1`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #222222;
  height: 100vh;
}
`;function z1(){if(console&&console.warn){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t)}}const hf={};function $l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&hf[t[0]]||(typeof t[0]=="string"&&(hf[t[0]]=new Date),z1(...t))}const Eh=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}};function mf(e,t,n){e.loadNamespaces(t,Eh(e,n))}function gf(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{e.options.ns.indexOf(i)<0&&e.options.ns.push(i)}),e.loadLanguages(t,Eh(e,r))}function A1(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=t.languages[0],i=t.options?t.options.fallbackLng:!1,o=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const s=(a,l)=>{const u=t.services.backendConnector.state[`${a}|${l}`];return u===-1||u===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||s(r,e)&&(!i||s(o,e)))}function M1(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!t.languages||!t.languages.length?($l("i18n.languages were undefined or empty",t.languages),!0):t.options.ignoreJSONStructure!==void 0?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(i,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}):A1(e,t,n)}const F1=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,D1={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},U1=e=>D1[e],V1=e=>e.replace(F1,U1);let Nl={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:V1};function B1(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Nl={...Nl,...e}}function H1(){return Nl}let $h;function W1(e){$h=e}function K1(){return $h}const Q1={type:"3rdParty",init(e){B1(e.options.react),W1(e)}},Y1=R.createContext();class X1{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const G1=(e,t)=>{const n=R.useRef();return R.useEffect(()=>{n.current=e},[e,t]),n.current};function Nh(e,t,n,r){return e.getFixedT(t,n,r)}function J1(e,t,n,r){return R.useCallback(Nh(e,t,n,r),[e,t,n,r])}function On(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=t,{i18n:r,defaultNS:i}=R.useContext(Y1)||{},o=n||r||K1();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new X1),!o){$l("You will need to pass in an i18next instance by using initReactI18next");const x=(C,w)=>typeof w=="string"?w:w&&typeof w=="object"&&typeof w.defaultValue=="string"?w.defaultValue:Array.isArray(C)?C[C.length-1]:C,k=[x,{},!1];return k.t=x,k.i18n={},k.ready=!1,k}o.options.react&&o.options.react.wait!==void 0&&$l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const s={...H1(),...o.options.react,...t},{useSuspense:a,keyPrefix:l}=s;let u=i||o.options&&o.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(u);const d=(o.isInitialized||o.initializedStoreOnce)&&u.every(x=>M1(x,o,s)),p=J1(o,t.lng||null,s.nsMode==="fallback"?u:u[0],l),c=()=>p,v=()=>Nh(o,t.lng||null,s.nsMode==="fallback"?u:u[0],l),[g,y]=R.useState(c);let $=u.join();t.lng&&($=`${t.lng}${$}`);const h=G1($),f=R.useRef(!0);R.useEffect(()=>{const{bindI18n:x,bindI18nStore:k}=s;f.current=!0,!d&&!a&&(t.lng?gf(o,t.lng,u,()=>{f.current&&y(v)}):mf(o,u,()=>{f.current&&y(v)})),d&&h&&h!==$&&f.current&&y(v);function C(){f.current&&y(v)}return x&&o&&o.on(x,C),k&&o&&o.store.on(k,C),()=>{f.current=!1,x&&o&&x.split(" ").forEach(w=>o.off(w,C)),k&&o&&k.split(" ").forEach(w=>o.store.off(w,C))}},[o,$]),R.useEffect(()=>{f.current&&d&&y(c)},[o,l,d]);const m=[g,o,d];if(m.t=g,m.i18n=o,m.ready=d,d||!d&&!a)return m;throw new Promise(x=>{t.lng?gf(o,t.lng,u,()=>x()):mf(o,u,()=>x())})}const _h="/portifolio/assets/mini_logo_header-XZdODAov.png",Z1=z.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 6%;

  @media screen and (max-width: 1040px) {
    justify-content: space-evenly;
  }
`,q1=z.img`
  width: 13rem;
  height: 7.5rem;
`,ey=z.div`
  ul {
    list-style-type: none;
  }
  li {
    display: inline-block;
    padding: 0 1.875rem;
  }
  a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    transition: 0.2s;
  }
  a:hover {
    color: #7d7d7d;
    transform: scale(1.1);
  }

  @media screen and (max-width: 1040px) {
    width: 200px;
    line-height: 1.7rem;
  }
`,ty=z.select`
  color: white;
  background: transparent;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
  text-align: center;
  cursor: pointer;
`,ny=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;

  p {
    color: white;
  }
`,ry=z.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.4rem;
`;function iy(){const[e,t]=R.useState(),{i18n:n}=On(),{t:r}=On();R.useEffect(()=>{t(n.language)},[]);const i=o=>{n.changeLanguage(o),t(o)};return S.jsxs(Z1,{children:[S.jsxs(ny,{children:[S.jsx(q1,{src:_h}),S.jsxs(ry,{children:[S.jsxs("p",{children:[r("idioma"),": "]}),S.jsxs(ty,{onChange:o=>i(o.target.value),value:e,children:[S.jsx("option",{value:"pt",children:" Português 🇧🇷"}),S.jsx("option",{value:"en",children:" English 🇺🇸 "})]})]})]}),S.jsx(ey,{children:S.jsxs("ul",{children:[S.jsx("li",{children:S.jsx("a",{href:"#beginning",children:r("inicio")})}),S.jsx("li",{children:S.jsx("a",{href:"#speciality",children:r("especialidades")})}),S.jsx("li",{children:S.jsx("a",{href:"#aboutMe",children:r("sobre")})}),S.jsx("li",{children:S.jsx("a",{href:"#download-cv",children:r("curriculo")})}),S.jsx("li",{children:S.jsx("a",{href:"#form",children:r("fale_comigo")})})]})})]})}function oy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function sy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var ay=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(sy(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=oy(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ke="-ms-",Bo="-moz-",M="-webkit-",Oh="comm",Iu="rule",Tu="decl",ly="@import",Ph="@keyframes",uy="@layer",cy=Math.abs,gs=String.fromCharCode,fy=Object.assign;function dy(e,t){return ye(e,0)^45?(((t<<2^ye(e,0))<<2^ye(e,1))<<2^ye(e,2))<<2^ye(e,3):0}function Lh(e){return e.trim()}function py(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function _l(e,t){return e.indexOf(t)}function ye(e,t){return e.charCodeAt(t)|0}function pi(e,t,n){return e.slice(t,n)}function yt(e){return e.length}function bu(e){return e.length}function Hi(e,t){return t.push(e),e}function hy(e,t){return e.map(t).join("")}var ys=1,dr=1,jh=0,ze=0,oe=0,yr="";function vs(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ys,column:dr,length:s,return:""}}function _r(e,t){return fy(vs("",null,null,"",null,null,0),e,{length:-e.length},t)}function my(){return oe}function gy(){return oe=ze>0?ye(yr,--ze):0,dr--,oe===10&&(dr=1,ys--),oe}function Ve(){return oe=ze<jh?ye(yr,ze++):0,dr++,oe===10&&(dr=1,ys++),oe}function Ct(){return ye(yr,ze)}function po(){return ze}function Ci(e,t){return pi(yr,e,t)}function hi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rh(e){return ys=dr=1,jh=yt(yr=e),ze=0,[]}function Ih(e){return yr="",e}function ho(e){return Lh(Ci(ze-1,Ol(e===91?e+2:e===40?e+1:e)))}function yy(e){for(;(oe=Ct())&&oe<33;)Ve();return hi(e)>2||hi(oe)>3?"":" "}function vy(e,t){for(;--t&&Ve()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return Ci(e,po()+(t<6&&Ct()==32&&Ve()==32))}function Ol(e){for(;Ve();)switch(oe){case e:return ze;case 34:case 39:e!==34&&e!==39&&Ol(oe);break;case 40:e===41&&Ol(e);break;case 92:Ve();break}return ze}function xy(e,t){for(;Ve()&&e+oe!==57;)if(e+oe===84&&Ct()===47)break;return"/*"+Ci(t,ze-1)+"*"+gs(e===47?e:Ve())}function wy(e){for(;!hi(Ct());)Ve();return Ci(e,ze)}function Sy(e){return Ih(mo("",null,null,null,[""],e=Rh(e),0,[0],e))}function mo(e,t,n,r,i,o,s,a,l){for(var u=0,d=0,p=s,c=0,v=0,g=0,y=1,$=1,h=1,f=0,m="",x=i,k=o,C=r,w=m;$;)switch(g=f,f=Ve()){case 40:if(g!=108&&ye(w,p-1)==58){_l(w+=F(ho(f),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:w+=ho(f);break;case 9:case 10:case 13:case 32:w+=yy(g);break;case 92:w+=vy(po()-1,7);continue;case 47:switch(Ct()){case 42:case 47:Hi(ky(xy(Ve(),po()),t,n),l);break;default:w+="/"}break;case 123*y:a[u++]=yt(w)*h;case 125*y:case 59:case 0:switch(f){case 0:case 125:$=0;case 59+d:h==-1&&(w=F(w,/\f/g,"")),v>0&&yt(w)-p&&Hi(v>32?vf(w+";",r,n,p-1):vf(F(w," ","")+";",r,n,p-2),l);break;case 59:w+=";";default:if(Hi(C=yf(w,t,n,u,d,i,a,m,x=[],k=[],p),o),f===123)if(d===0)mo(w,t,C,C,x,o,p,a,k);else switch(c===99&&ye(w,3)===110?100:c){case 100:case 108:case 109:case 115:mo(e,C,C,r&&Hi(yf(e,C,C,0,0,i,a,m,i,x=[],p),k),i,k,p,a,r?x:k);break;default:mo(w,C,C,C,[""],k,0,a,k)}}u=d=v=0,y=h=1,m=w="",p=s;break;case 58:p=1+yt(w),v=g;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&gy()==125)continue}switch(w+=gs(f),f*y){case 38:h=d>0?1:(w+="\f",-1);break;case 44:a[u++]=(yt(w)-1)*h,h=1;break;case 64:Ct()===45&&(w+=ho(Ve())),c=Ct(),d=p=yt(m=w+=wy(po())),f++;break;case 45:g===45&&yt(w)==2&&(y=0)}}return o}function yf(e,t,n,r,i,o,s,a,l,u,d){for(var p=i-1,c=i===0?o:[""],v=bu(c),g=0,y=0,$=0;g<r;++g)for(var h=0,f=pi(e,p+1,p=cy(y=s[g])),m=e;h<v;++h)(m=Lh(y>0?c[h]+" "+f:F(f,/&\f/g,c[h])))&&(l[$++]=m);return vs(e,t,n,i===0?Iu:a,l,u,d)}function ky(e,t,n){return vs(e,t,n,Oh,gs(my()),pi(e,2,-2),0)}function vf(e,t,n,r){return vs(e,t,n,Tu,pi(e,0,r),pi(e,r+1,-1),r)}function er(e,t){for(var n="",r=bu(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Cy(e,t,n,r){switch(e.type){case uy:if(e.children.length)break;case ly:case Tu:return e.return=e.return||e.value;case Oh:return"";case Ph:return e.return=e.value+"{"+er(e.children,r)+"}";case Iu:e.value=e.props.join(",")}return yt(n=er(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ey(e){var t=bu(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function $y(e){return function(t){t.root||(t=t.return)&&e(t)}}var Ny=function(t,n,r){for(var i=0,o=0;i=o,o=Ct(),i===38&&o===12&&(n[r]=1),!hi(o);)Ve();return Ci(t,ze)},_y=function(t,n){var r=-1,i=44;do switch(hi(i)){case 0:i===38&&Ct()===12&&(n[r]=1),t[r]+=Ny(ze-1,n,r);break;case 2:t[r]+=ho(i);break;case 4:if(i===44){t[++r]=Ct()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=gs(i)}while(i=Ve());return t},Oy=function(t,n){return Ih(_y(Rh(t),n))},xf=new WeakMap,Py=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!xf.get(r))&&!i){xf.set(t,!0);for(var o=[],s=Oy(n,o),a=r.props,l=0,u=0;l<s.length;l++)for(var d=0;d<a.length;d++,u++)t.props[u]=o[l]?s[l].replace(/&\f/g,a[d]):a[d]+" "+s[l]}}},Ly=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Th(e,t){switch(dy(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Bo+e+ke+e+e;case 6828:case 4268:return M+e+ke+e+e;case 6165:return M+e+ke+"flex-"+e+e;case 5187:return M+e+F(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return M+e+ke+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return M+e+ke+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return M+e+ke+F(e,"shrink","negative")+e;case 5292:return M+e+ke+F(e,"basis","preferred-size")+e;case 6060:return M+"box-"+F(e,"-grow","")+M+e+ke+F(e,"grow","positive")+e;case 4554:return M+F(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yt(e)-1-t>6)switch(ye(e,t+1)){case 109:if(ye(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Bo+(ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_l(e,"stretch")?Th(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ye(e,t+1)!==115)break;case 6444:switch(ye(e,yt(e)-3-(~_l(e,"!important")&&10))){case 107:return F(e,":",":"+M)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(ye(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+ke+"$2box$3")+e}break;case 5936:switch(ye(e,t+11)){case 114:return M+e+ke+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+ke+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+ke+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return M+e+ke+e+e}return e}var jy=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Tu:t.return=Th(t.value,t.length);break;case Ph:return er([_r(t,{value:F(t.value,"@","@"+M)})],i);case Iu:if(t.length)return hy(t.props,function(o){switch(py(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return er([_r(t,{props:[F(o,/:(read-\w+)/,":"+Bo+"$1")]})],i);case"::placeholder":return er([_r(t,{props:[F(o,/:(plac\w+)/,":"+M+"input-$1")]}),_r(t,{props:[F(o,/:(plac\w+)/,":"+Bo+"$1")]}),_r(t,{props:[F(o,/:(plac\w+)/,ke+"input-$1")]})],i)}return""})}},Ry=[jy],Iy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var $=y.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||Ry,o={},s,a=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var $=y.getAttribute("data-emotion").split(" "),h=1;h<$.length;h++)o[$[h]]=!0;a.push(y)});var l,u=[Py,Ly];{var d,p=[Cy,$y(function(y){d.insert(y)})],c=Ey(u.concat(i,p)),v=function($){return er(Sy($),c)};l=function($,h,f,m){d=f,v($?$+"{"+h.styles+"}":h.styles),m&&(g.inserted[h.name]=!0)}}var g={key:n,sheet:new ay({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return g.sheet.hydrate(a),g},bh={exports:{}},H={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me=typeof Symbol=="function"&&Symbol.for,zu=me?Symbol.for("react.element"):60103,Au=me?Symbol.for("react.portal"):60106,xs=me?Symbol.for("react.fragment"):60107,ws=me?Symbol.for("react.strict_mode"):60108,Ss=me?Symbol.for("react.profiler"):60114,ks=me?Symbol.for("react.provider"):60109,Cs=me?Symbol.for("react.context"):60110,Mu=me?Symbol.for("react.async_mode"):60111,Es=me?Symbol.for("react.concurrent_mode"):60111,$s=me?Symbol.for("react.forward_ref"):60112,Ns=me?Symbol.for("react.suspense"):60113,Ty=me?Symbol.for("react.suspense_list"):60120,_s=me?Symbol.for("react.memo"):60115,Os=me?Symbol.for("react.lazy"):60116,by=me?Symbol.for("react.block"):60121,zy=me?Symbol.for("react.fundamental"):60117,Ay=me?Symbol.for("react.responder"):60118,My=me?Symbol.for("react.scope"):60119;function Ke(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zu:switch(e=e.type,e){case Mu:case Es:case xs:case Ss:case ws:case Ns:return e;default:switch(e=e&&e.$$typeof,e){case Cs:case $s:case Os:case _s:case ks:return e;default:return t}}case Au:return t}}}function zh(e){return Ke(e)===Es}H.AsyncMode=Mu;H.ConcurrentMode=Es;H.ContextConsumer=Cs;H.ContextProvider=ks;H.Element=zu;H.ForwardRef=$s;H.Fragment=xs;H.Lazy=Os;H.Memo=_s;H.Portal=Au;H.Profiler=Ss;H.StrictMode=ws;H.Suspense=Ns;H.isAsyncMode=function(e){return zh(e)||Ke(e)===Mu};H.isConcurrentMode=zh;H.isContextConsumer=function(e){return Ke(e)===Cs};H.isContextProvider=function(e){return Ke(e)===ks};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zu};H.isForwardRef=function(e){return Ke(e)===$s};H.isFragment=function(e){return Ke(e)===xs};H.isLazy=function(e){return Ke(e)===Os};H.isMemo=function(e){return Ke(e)===_s};H.isPortal=function(e){return Ke(e)===Au};H.isProfiler=function(e){return Ke(e)===Ss};H.isStrictMode=function(e){return Ke(e)===ws};H.isSuspense=function(e){return Ke(e)===Ns};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xs||e===Es||e===Ss||e===ws||e===Ns||e===Ty||typeof e=="object"&&e!==null&&(e.$$typeof===Os||e.$$typeof===_s||e.$$typeof===ks||e.$$typeof===Cs||e.$$typeof===$s||e.$$typeof===zy||e.$$typeof===Ay||e.$$typeof===My||e.$$typeof===by)};H.typeOf=Ke;bh.exports=H;var Fy=bh.exports,Ah=Fy,Dy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Uy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mh={};Mh[Ah.ForwardRef]=Dy;Mh[Ah.Memo]=Uy;var Vy=!0;function Fh(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Fu=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Vy===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Dh=function(t,n,r){Fu(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function By(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Hy=/[A-Z]|^ms/g,Wy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Uh=function(t){return t.charCodeAt(1)===45},wf=function(t){return t!=null&&typeof t!="boolean"},ya=Rg(function(e){return Uh(e)?e:e.replace(Hy,"-$&").toLowerCase()}),Sf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Wy,function(r,i,o){return vt={name:i,styles:o,next:vt},i})}return ih[t]!==1&&!Uh(t)&&typeof n=="number"&&n!==0?n+"px":n};function mi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return vt={name:n.name,styles:n.styles,next:vt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)vt={name:r.name,styles:r.styles,next:vt},r=r.next;var i=n.styles+";";return i}return Ky(e,t,n)}case"function":{if(e!==void 0){var o=vt,s=n(e);return vt=o,mi(e,t,s)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Ky(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=mi(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":wf(s)&&(r+=ya(o)+":"+Sf(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var a=0;a<s.length;a++)wf(s[a])&&(r+=ya(o)+":"+Sf(o,s[a])+";");else{var l=mi(e,t,s);switch(o){case"animation":case"animationName":{r+=ya(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var kf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,vt,Du=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";vt=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=mi(r,n,s)):o+=s[0];for(var a=1;a<t.length;a++)o+=mi(r,n,t[a]),i&&(o+=s[a]);kf.lastIndex=0;for(var l="",u;(u=kf.exec(o))!==null;)l+="-"+u[1];var d=By(o)+l;return{name:d,styles:o,next:vt}},Qy=function(t){return t()},Yy=Yu.useInsertionEffect?Yu.useInsertionEffect:!1,Vh=Yy||Qy,Uu={}.hasOwnProperty,Bh=R.createContext(typeof HTMLElement<"u"?Iy({key:"css"}):null);Bh.Provider;var Hh=function(t){return R.forwardRef(function(n,r){var i=R.useContext(Bh);return t(n,i,r)})},Wh=R.createContext({}),Pl="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Xy=function(t,n){var r={};for(var i in n)Uu.call(n,i)&&(r[i]=n[i]);return r[Pl]=t,r},Gy=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Fu(n,r,i),Vh(function(){return Dh(n,r,i)}),null},Jy=Hh(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Pl],o=[r],s="";typeof e.className=="string"?s=Fh(t.registered,o,e.className):e.className!=null&&(s=e.className+" ");var a=Du(o,void 0,R.useContext(Wh));s+=t.key+"-"+a.name;var l={};for(var u in e)Uu.call(e,u)&&u!=="css"&&u!==Pl&&(l[u]=e[u]);return l.ref=n,l.className=s,R.createElement(R.Fragment,null,R.createElement(Gy,{cache:t,serialized:a,isStringTag:typeof i=="string"}),R.createElement(i,l))}),Zy=Jy,qy=S.Fragment;function ce(e,t,n){return Uu.call(t,"css")?S.jsx(Zy,Xy(e,t),n):S.jsx(e,t,n)}function Kh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Du(t)}var N=function(){var t=Kh.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},ev=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var s=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))s=e(o);else{s="";for(var a in o)o[a]&&a&&(s&&(s+=" "),s+=a)}break}default:s=o}s&&(i&&(i+=" "),i+=s)}}return i};function tv(e,t,n){var r=[],i=Fh(e,r,n);return r.length<2?n:i+t(r)}var nv=function(t){var n=t.cache,r=t.serializedArr;return Vh(function(){for(var i=0;i<r.length;i++)Dh(n,r[i],!1)}),null},va=Hh(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,d=new Array(u),p=0;p<u;p++)d[p]=arguments[p];var c=Du(d,t.registered);return r.push(c),Fu(t,c,!1),t.key+"-"+c.name},o=function(){for(var u=arguments.length,d=new Array(u),p=0;p<u;p++)d[p]=arguments[p];return tv(t.registered,i,ev(d))},s={css:i,cx:o,theme:R.useContext(Wh)},a=e.children(s);return n=!0,R.createElement(R.Fragment,null,R.createElement(nv,{cache:t,serializedArr:r}),a)}),rv=Object.defineProperty,iv=(e,t,n)=>t in e?rv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wi=(e,t,n)=>(iv(e,typeof t!="symbol"?t+"":t,n),n),Ll=new Map,Ki=new WeakMap,Cf=0,ov=void 0;function sv(e){return e?(Ki.has(e)||(Cf+=1,Ki.set(e,Cf.toString())),Ki.get(e)):"0"}function av(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?sv(e.root):e[t]}`).toString()}function lv(e){const t=av(e);let n=Ll.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(s=>{s.forEach(a=>{var l;const u=a.isIntersecting&&i.some(d=>a.intersectionRatio>=d);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=r.get(a.target))==null||l.forEach(d=>{d(u,a)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Ll.set(t,n)}return n}function Qh(e,t,n={},r=ov){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:o,elements:s}=lv(n),a=s.get(e)||[];return s.has(e)||s.set(e,a),a.push(t),o.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(s.delete(e),o.unobserve(e)),s.size===0&&(o.disconnect(),Ll.delete(i))}}function uv(e){return typeof e.children!="function"}var Ef=class extends R.Component{constructor(e){super(e),Wi(this,"node",null),Wi(this,"_unobserveCb",null),Wi(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Wi(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),uv(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=Qh(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:v,entry:g}=this.state;return e({inView:v,entry:g,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:o,onChange:s,skip:a,trackVisibility:l,delay:u,initialInView:d,fallbackInView:p,...c}=this.props;return R.createElement(t||"div",{ref:this.handleNode,...c},e)}};function Yh({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:s,initialInView:a,fallbackInView:l,onChange:u}={}){var d;const[p,c]=R.useState(null),v=R.useRef(),[g,y]=R.useState({inView:!!a,entry:void 0});v.current=u,R.useEffect(()=>{if(s||!p)return;let m;return m=Qh(p,(x,k)=>{y({inView:x,entry:k}),v.current&&v.current(x,k),k.isIntersecting&&o&&m&&(m(),m=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{m&&m()}},[Array.isArray(e)?e.toString():e,p,i,r,o,s,n,l,t]);const $=(d=g.entry)==null?void 0:d.target,h=R.useRef();!p&&$&&!o&&!s&&h.current!==$&&(h.current=$,y({inView:!!a,entry:void 0}));const f=[c,g.inView,g.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var Xh={exports:{}},W={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=Symbol.for("react.element"),Bu=Symbol.for("react.portal"),Ps=Symbol.for("react.fragment"),Ls=Symbol.for("react.strict_mode"),js=Symbol.for("react.profiler"),Rs=Symbol.for("react.provider"),Is=Symbol.for("react.context"),cv=Symbol.for("react.server_context"),Ts=Symbol.for("react.forward_ref"),bs=Symbol.for("react.suspense"),zs=Symbol.for("react.suspense_list"),As=Symbol.for("react.memo"),Ms=Symbol.for("react.lazy"),fv=Symbol.for("react.offscreen"),Gh;Gh=Symbol.for("react.module.reference");function et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Vu:switch(e=e.type,e){case Ps:case js:case Ls:case bs:case zs:return e;default:switch(e=e&&e.$$typeof,e){case cv:case Is:case Ts:case Ms:case As:case Rs:return e;default:return t}}case Bu:return t}}}W.ContextConsumer=Is;W.ContextProvider=Rs;W.Element=Vu;W.ForwardRef=Ts;W.Fragment=Ps;W.Lazy=Ms;W.Memo=As;W.Portal=Bu;W.Profiler=js;W.StrictMode=Ls;W.Suspense=bs;W.SuspenseList=zs;W.isAsyncMode=function(){return!1};W.isConcurrentMode=function(){return!1};W.isContextConsumer=function(e){return et(e)===Is};W.isContextProvider=function(e){return et(e)===Rs};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vu};W.isForwardRef=function(e){return et(e)===Ts};W.isFragment=function(e){return et(e)===Ps};W.isLazy=function(e){return et(e)===Ms};W.isMemo=function(e){return et(e)===As};W.isPortal=function(e){return et(e)===Bu};W.isProfiler=function(e){return et(e)===js};W.isStrictMode=function(e){return et(e)===Ls};W.isSuspense=function(e){return et(e)===bs};W.isSuspenseList=function(e){return et(e)===zs};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ps||e===js||e===Ls||e===bs||e===zs||e===fv||typeof e=="object"&&e!==null&&(e.$$typeof===Ms||e.$$typeof===As||e.$$typeof===Rs||e.$$typeof===Is||e.$$typeof===Ts||e.$$typeof===Gh||e.getModuleId!==void 0)};W.typeOf=et;Xh.exports=W;var dv=Xh.exports;N`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;N`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;N`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;N`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;N`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;N`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;N`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;N`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;N`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;N`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;N`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;N`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;N`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const pv=N`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,hv=N`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mv=N`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gv=N`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yv=N`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hu=N`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vv=N`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xv=N`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wv=N`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sv=N`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,kv=N`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Cv=N`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ev=N`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function $v({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Hu,iterationCount:i=1}){return Kh`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Nv(e){return e==null}function _v(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Jh(e,t){return n=>n?e():t()}function gi(e){return Jh(e,()=>null)}function jl(e){return gi(()=>({opacity:0}))(e)}const Zh=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:s=Hu,triggerOnce:a=!1,className:l,style:u,childClassName:d,childStyle:p,children:c,onVisibilityChange:v}=e,g=R.useMemo(()=>$v({keyframes:s,duration:i}),[i,s]);return Nv(c)?null:_v(c)?ce(Pv,{...e,animationStyles:g,children:String(c)}):dv.isFragment(c)?ce(qh,{...e,animationStyles:g}):ce(qy,{children:R.Children.map(c,(y,$)=>{if(!R.isValidElement(y))return null;const h=r+(t?$*i*n:0);switch(y.type){case"ol":case"ul":return ce(va,{children:({cx:f})=>ce(y.type,{...y.props,className:f(l,y.props.className),style:Object.assign({},u,y.props.style),children:ce(Zh,{...e,children:y.props.children})})});case"li":return ce(Ef,{threshold:o,triggerOnce:a,onChange:v,children:({inView:f,ref:m})=>ce(va,{children:({cx:x})=>ce(y.type,{...y.props,ref:m,className:x(d,y.props.className),css:gi(()=>g)(f),style:Object.assign({},p,y.props.style,jl(!f),{animationDelay:h+"ms"})})})});default:return ce(Ef,{threshold:o,triggerOnce:a,onChange:v,children:({inView:f,ref:m})=>ce("div",{ref:m,className:l,css:gi(()=>g)(f),style:Object.assign({},u,jl(!f),{animationDelay:h+"ms"}),children:ce(va,{children:({cx:x})=>ce(y.type,{...y.props,className:x(d,y.props.className),style:Object.assign({},p,y.props.style)})})})})}})})},Ov={display:"inline-block",whiteSpace:"pre"},Pv=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:o=1e3,fraction:s=0,triggerOnce:a=!1,className:l,style:u,children:d,onVisibilityChange:p}=e,{ref:c,inView:v}=Yh({triggerOnce:a,threshold:s,onChange:p});return Jh(()=>ce("div",{ref:c,className:l,style:Object.assign({},u,Ov),children:d.split("").map((g,y)=>ce("span",{css:gi(()=>t)(v),style:{animationDelay:i+y*o*r+"ms"},children:g},y))}),()=>ce(qh,{...e,children:d}))(n)},qh=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:o,children:s,onVisibilityChange:a}=e,{ref:l,inView:u}=Yh({triggerOnce:r,threshold:n,onChange:a});return ce("div",{ref:l,className:i,css:gi(()=>t)(u),style:Object.assign({},o,jl(!u)),children:s})};N`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;N`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;N`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;N`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;N`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;N`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Lv=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,jv=N`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Rv=N`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Iv=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Tv=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,bv=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,zv=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Av=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Mv=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Fv=N`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Dv=N`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Uv=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Vv=N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Bv(e,t,n){switch(n){case"bottom-left":return t?jv:hv;case"bottom-right":return t?Rv:mv;case"down":return e?t?Tv:yv:t?Iv:gv;case"left":return e?t?zv:vv:t?bv:Hu;case"right":return e?t?Mv:wv:t?Av:xv;case"top-left":return t?Fv:Sv;case"top-right":return t?Dv:kv;case"up":return e?t?Vv:Ev:t?Uv:Cv;default:return t?Lv:pv}}const je=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,o=R.useMemo(()=>Bv(t,r,n),[t,n,r]);return ce(Zh,{keyframes:o,...i})};N`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;N`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;N`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;N`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;N`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;N`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;N`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;N`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;N`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;N`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;N`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;N`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;N`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;N`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;N`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;N`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;N`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;N`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;N`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;N`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;N`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;N`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;N`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;N`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;N`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;N`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;N`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;N`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;N`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;N`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;N`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;N`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;N`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;N`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Hv="/portifolio/assets/main_transparent-C9BFPtuR.png",Wv=z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  padding: 6.25rem 6%;

  @media screen and (max-width: 1040px) {
    flex-direction: column;
  }
`,Kv=z.div`
  h1 {
    color: #fff;
    font-size: 2.375rem;
    line-height: 2.5rem;
  }
  h1 span {
    color: #00ff08;
  }
  p {
    color: #fff;
    margin: 2.5rem 0;
    text-align: justify;
  }
  p span {
    color: #00ff08;
  }

  @media screen and (max-width: 1040px) {
    h1 {
      display: block;
    }
  }
`,Qv=z.div`
  img {
    position: relative;
    animation: flutuar 2s ease-in-out infinite alternate;
  }

  @keyframes flutuar {
    0% {
      top: -30px;
    }
    100% {
      top: 0px;
    }
  }
`,Yv=z.img`
  width: 25rem;
  height: 25rem;
`,Xv=z.button`
  padding: 10px 40px;
  font-size: 18px;
  font-weight: 600;
  background-color: #00ff08;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 0px 8px #00ff08;
    transform: scale(1.1);
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;function Gv(){const{t:e}=On();return S.jsxs(Wv,{id:"beginning",children:[S.jsx(je,{duration:2e3,direction:"up",children:S.jsxs(Kv,{children:[S.jsxs("h1",{children:[e("titulo_beginning"),S.jsx("span",{children:"."})]}),S.jsxs("p",{children:[e("beginning_paragrafo_1")," ",e("beginning_paragrafo_2")," ",S.jsx("span",{children:"front-end"})," ",e("beginning_paragrafo_3")," ",S.jsx("span",{children:"full-stack"})," ",e("beginning_paragrafo_4")," ",S.jsx("span",{children:"React, React Native, Node, e Typescript"}),"."," ",e("beginning_paragrafo_5")," ",S.jsx("span",{children:"PJ"})," ",e("beginning_paragrafo_6")," ",S.jsx("span",{children:"CLT"}),","," ",e("beginning_paragrafo_7")]}),S.jsx(Xv,{children:S.jsx("a",{href:"#form",children:e("entre_em_contato")})})]})}),S.jsx(je,{duration:2e3,direction:"up",children:S.jsx(Qv,{children:S.jsx(Yv,{src:Hv})})})]})}const Jv=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 6%;

  h2 {
    color: #fff;
    font-size: 38px;
    text-align: center;
  }
  span {
    color: #00ff08;
  }

  @media screen and (max-width: 1040px) {
    margin-bottom: 5rem;
  }
`,Zv=z.div`
  display: flex;
  gap: 60px;

  @media screen and (max-width: 1040px) {
    flex-direction: column;
  }
`,xa=z.div`
  color: #fff;
  padding: 40px;
  margin-top: 45px;
  border-radius: 20px;
  transition: 0.2s;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 28px;
    margin: 15px 0;
  }
  p {
    text-align: justify;
  }

  i {
    font-size: 70px;
    color: #00ff08;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #ffffff6e;
  }
`;function qv(){const{t:e}=On();return S.jsxs(Jv,{id:"speciality",children:[S.jsx(je,{duration:2e3,direction:"up",children:S.jsxs("h2",{children:[e("minhas"),S.jsxs("span",{children:[" ",e("especialidades")]})]})}),S.jsx(Zv,{children:S.jsxs(je,{duration:2e3,direction:"up",cascade:!0,damping:.2,children:[S.jsxs(xa,{children:[S.jsx("i",{className:"bi bi-window-fullscreen"}),S.jsx("h3",{children:"Web"}),S.jsx("p",{children:e("web_texto")})]}),S.jsxs(xa,{children:[S.jsx("i",{className:"bi bi-phone"}),S.jsx("h3",{children:"Mobile"}),S.jsx("p",{children:e("mobile_texto")})]}),S.jsxs(xa,{children:[S.jsx("i",{className:"bi bi-diagram-3"}),S.jsx("h3",{children:"Back-end"}),S.jsx("p",{children:e("back_texto")})]})]})})]})}const ex="/portifolio/assets/Eu-rVjfNsmZ.jpeg",tx=z.div`
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 10rem 6% 6.25rem 6%;

  @media screen and (max-width: 1040px) {
    flex-direction: column-reverse;
  }
`,nx=z.img`
  border: 2px solid #00ff08;
  border-radius: 20px;
  width: 350px;
  height: 450px;
`,rx=z.div`
  color: #fff;

  h2 {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 30px;
  }

  span {
    color: #00ff08;
  }

  p {
    margin: 20px 0;
    text-align: justify;
  }
`,wa=z.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #00ff08;
  font-size: 30px;
  cursor: pointer;
  margin: 0 5px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 0px 8px #00ff08;
    transform: scale(1.1);
  }

  i {
    color: black;
  }
`;function ix(){const{t:e}=On();return S.jsxs(tx,{id:"aboutMe",children:[S.jsx(je,{duration:2e3,direction:"left",children:S.jsx(nx,{src:ex})}),S.jsx(je,{duration:2e3,direction:"right",children:S.jsxs(rx,{children:[S.jsxs("h2",{children:[e("titulo_about_me")," ",S.jsx("span",{children:"Lucas Mattos."})]}),S.jsx("p",{children:e("about_paragrafo_1")}),S.jsx("p",{children:e("about_paragrafo_2")}),S.jsx("p",{children:e("about_paragrafo_3")}),S.jsxs("div",{children:[S.jsx("a",{href:"https://github.com/Lcsmattos",target:"_blank",children:S.jsx(wa,{children:S.jsx("i",{className:"bi bi-github"})})}),S.jsx("a",{href:"https://www.linkedin.com/in/lcsmattos/",target:"_blank",children:S.jsx(wa,{children:S.jsx("i",{className:"bi bi-linkedin"})})}),S.jsx("a",{href:"https://wa.me/5512997343377?text=Olá,%20Vim%20pelo%20link%20do%20seu%20portifólio",target:"_blank",children:S.jsx(wa,{children:S.jsx("i",{className:"bi bi-whatsapp"})})})]})]})})]})}const ox="/portifolio/assets/CV_Lucas_Mattos_2024_portugues-DtQR7dZE.pdf",sx="/portifolio/assets/CV_Lucas_Mattos_2024_ingles-FmfMk3a9.pdf",ax=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6.25rem 6% 10rem 6%;

  h2 {
    color: #fff;
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-bottom: 1.875rem;
  }
  span {
    color: #00ff08;
  }
`,lx=z.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  a {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  @media screen and (max-width: 1040px) {
    flex-direction: column;

    a {
      width: 100%;
    }
  }
`,$f=z.button`
  padding: 5px 15px;
  border-radius: 30px;
  border: none;
  background-color: #00ff08;
  font-size: 1.562rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  flex: 1;
  color: black;

  &:hover {
    box-shadow: 0px 0px 8px #00ff08;
    transform: scale(1.05);
  }

  @media screen and (max-width: 1040px) {
    font-size: 1.2rem;
  }
`,ux=z(je)`
  width: 100%;
  display: flex;
  justify-content: center;
`;function cx(){const{t:e}=On();return S.jsxs(ax,{id:"download-cv",children:[S.jsx(je,{duration:2e3,children:S.jsxs("h2",{children:[e("baixar")," ",S.jsxs("span",{children:[e("curriculo"),"."]})]})}),S.jsx(ux,{duration:2e3,delay:500,children:S.jsxs(lx,{children:[S.jsx("a",{href:ox,target:"_blank",children:S.jsxs($f,{children:[" ",e("portugues")]})}),S.jsx("a",{href:sx,target:"_blank",children:S.jsxs($f,{children:[" ",e("ingles")]})})]})})]})}var mt=function(){return mt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mt.apply(this,arguments)};function fx(e){var t,n,r,i,o=Number(String((t=e.speed)!==null&&t!==void 0?t:1)),s=(n=e.fill)!==null&&n!==void 0?n:"#fff",a=e.stroke,l=e.fillOpacity,u=e.strokeOpacity;return V.createElement("svg",mt({},mt(mt({},e),{className:e.className?"icon-loading ".concat(e.className):"icon-loading",fill:void 0,fillOpacity:void 0,height:(r=e.height)!==null&&r!==void 0?r:140,speed:void 0,stroke:void 0,strokeOpacity:void 0,strokeWidth:void 0,width:(i=e.width)!==null&&i!==void 0?i:135}),{viewBox:"0 0 135 140"}),V.createElement("rect",mt({y:10,width:15,height:120,rx:6},{fill:s,stroke:a,fillOpacity:l,strokeOpacity:u}),V.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"".concat(1/o,"s"),values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),V.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"".concat(1/o,"s"),values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),V.createElement("rect",mt({x:30,y:10,width:15,height:120,rx:6},{fill:s,stroke:a,fillOpacity:l,strokeOpacity:u}),V.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"".concat(1/o,"s"),values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),V.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"".concat(1/o,"s"),values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),V.createElement("rect",mt({x:60,width:15,height:140,rx:6},{fill:s,stroke:a,fillOpacity:l,strokeOpacity:u}),V.createElement("animate",{attributeName:"height",begin:"0s",dur:"".concat(1/o,"s"),values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),V.createElement("animate",{attributeName:"y",begin:"0s",dur:"".concat(1/o,"s"),values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),V.createElement("rect",mt({x:90,y:10,width:15,height:120,rx:6},{fill:s,stroke:a,fillOpacity:l,strokeOpacity:u}),V.createElement("animate",{attributeName:"height",begin:"0.25s",dur:"".concat(1/o,"s"),values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),V.createElement("animate",{attributeName:"y",begin:"0.25s",dur:"".concat(1/o,"s"),values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})),V.createElement("rect",mt({x:120,y:10,width:15,height:120,rx:6},{fill:s,stroke:a,fillOpacity:l,strokeOpacity:u}),V.createElement("animate",{attributeName:"height",begin:"0.5s",dur:"".concat(1/o,"s"),values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),V.createElement("animate",{attributeName:"y",begin:"0.5s",dur:"".concat(1/o,"s"),values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})))}var dx=fx;const px=z.div`
  padding: 6.25rem 6%;

  box-shadow: 0px 0px 40px 15px #ffffff15;

  h2 {
    color: #fff;
    font-size: 38px;
    text-align: center;
  }

  span {
    color: #00ff08;
  }
`,hx=z.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
`,Qi=z.input`
  width: 100%;
  background-color: #00000032;
  border: 0;
  outline: 0;
  padding: 20px 15px;
  border-radius: 15px;
  color: #fff;
  font-size: 18px;

  &::placeholder {
    color: #fff;
  }
`,mx=z.textarea`
  width: 100%;
  background-color: #00000032;
  border: 0;
  outline: 0;
  padding: 20px 15px;
  border-radius: 15px;
  color: #fff;
  font-size: 18px;

  resize: none;
  min-height: 200px;
  max-height: 200px;

  &::placeholder {
    color: #fff;
  }
`,gx=z.button`
  padding: 20px 40px;
  text-align: center;
  margin-top: 10px;
  border: none;
  border-radius: 30px;
  background-color: #00ff08;
  color: #000;
  font-weight: 00;
  cursor: pointer;
  flex: 1;
  font-size: 20px;

  &:hover {
    box-shadow: 0px 0px 8px #00ff08;
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
    box-shadow: none;
    transform: scale(1);
    padding: 5px 0px;
  }
`;function yx(){const[e,t]=R.useState(!1),{t:n}=On();return S.jsxs(px,{id:"form",children:[S.jsx(je,{duration:2e3,direction:"up",children:S.jsxs("h2",{children:[n("fale"),S.jsxs("span",{children:[" ",n("comigo")]})]})}),S.jsxs(hx,{method:"POST",action:"https://formsubmit.co/lcsmattos7@gmail.com",onSubmit:()=>t(!0),children:[S.jsx(Qi,{type:"hidden",name:"_next",value:"https://lcsmattos.github.io/portifolio"}),S.jsx(je,{duration:2e3,direction:"left",children:S.jsx(Qi,{type:"text",name:"nome",placeholder:n("nome"),required:!0})}),S.jsx(je,{duration:2e3,direction:"right",children:S.jsx(Qi,{type:"email",name:"email",placeholder:n("email"),required:!0})}),S.jsx(je,{duration:2e3,direction:"left",children:S.jsx(Qi,{type:"tel",name:"celular",placeholder:n("celular")})}),S.jsx(je,{duration:2e3,direction:"right",children:S.jsx(mx,{placeholder:n("mensagem"),required:!0,name:"mensagem",id:"mensagem"})}),S.jsx(je,{duration:2e3,direction:"up",style:{display:"flex"},children:S.jsx(gx,{type:"submit",id:"btn-enviar",disabled:e,children:e?S.jsx(dx,{height:50}):S.jsx(S.Fragment,{children:n("enviar")})})})]})]})}const vx=z.footer`
  padding: 0 6%;
`,xx=z.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,wx=z.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-top: 2px solid #00ff08;
  padding: 20px 0;

  p i {
    color: #00ff08;
    font-size: 20px;
    margin-right: 15px;
  }

  p a {
    color: #fff;
  }
`,Sx=z.div`
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin: 10px 0;
    gap: 5px;
  }
`,Sa=z.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #00ff08;
  font-size: 30px;
  cursor: pointer;
  margin: 0 5px;
  transition: 0.2s;

  i {
    color: black;
  }
`,kx=z.img`
  width: 13rem;
  height: 7.5rem;
  margin: 1rem;
`;function Cx(){return S.jsxs(vx,{children:[S.jsxs(xx,{children:[S.jsx(kx,{src:_h,alt:"logo do Lucas"}),S.jsxs(Sx,{children:[S.jsx("a",{href:"https://github.com/Lcsmattos",target:"_blank",children:S.jsx(Sa,{children:S.jsx("i",{className:"bi bi-github"})})}),S.jsx("a",{href:"https://www.linkedin.com/in/lcsmattos/",target:"_blank",children:S.jsx(Sa,{children:S.jsx("i",{className:"bi bi-linkedin"})})}),S.jsx("a",{href:"https://wa.me/5512997343377?text=Olá,%20Vim%20pelo%20link%20do%20seu%20portifólio",target:"_blank",children:S.jsx(Sa,{children:S.jsx("i",{className:"bi bi-whatsapp"})})})]})]}),S.jsxs(wx,{children:[S.jsxs("p",{children:[S.jsx("i",{className:"bi bi-mailbox-flag"}),S.jsx("a",{href:"mailto:email@email.com",children:"lcsmattos7@gmail.com"})]}),S.jsxs("p",{children:[S.jsx("i",{className:"bi bi-telephone"}),S.jsx("a",{children:"+55 (12)9.9734-3377"})]})]})]})}function Ex(){return S.jsxs(S.Fragment,{children:[S.jsx(iy,{}),S.jsxs("main",{children:[S.jsx(Gv,{}),S.jsx(qv,{}),S.jsx(ix,{}),S.jsx(cx,{}),S.jsx(yx,{})]}),S.jsx(Cx,{})]})}const $x={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class Ho{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||$x,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new Ho(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Ho(this.logger,t)}}var wt=new Ho;class Fs{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t].delete(n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(s=>{let[a,l]=s;for(let u=0;u<l;u++)a(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(s=>{let[a,l]=s;for(let u=0;u<l;u++)a.apply(a,[t,...r])})}}function Or(){let e,t;const n=new Promise((r,i)=>{e=r,t=i});return n.resolve=e,n.reject=t,n}function Nf(e){return e==null?"":""+e}function Nx(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}const _x=/###/g;function Kr(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(_x,"."):a}function i(){return!e||typeof e=="string"}const o=typeof t!="string"?t:t.split(".");let s=0;for(;s<o.length-1;){if(i())return{};const a=r(o[s]);!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={},++s}return i()?{}:{obj:e,k:r(o[s])}}function _f(e,t,n){const{obj:r,k:i}=Kr(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let o=t[t.length-1],s=t.slice(0,t.length-1),a=Kr(e,s,Object);for(;a.obj===void 0&&s.length;)o=`${s[s.length-1]}.${o}`,s=s.slice(0,s.length-1),a=Kr(e,s,Object),a&&a.obj&&typeof a.obj[`${a.k}.${o}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${o}`]=n}function Ox(e,t,n,r){const{obj:i,k:o}=Kr(e,t,Object);i[o]=i[o]||[],i[o].push(n)}function Wo(e,t){const{obj:n,k:r}=Kr(e,t);if(n)return n[r]}function Px(e,t,n){const r=Wo(e,n);return r!==void 0?r:Wo(t,n)}function e0(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):e0(e[r],t[r],n):e[r]=t[r]);return e}function In(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Lx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function jx(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>Lx[t]):e}class Rx{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const n=this.regExpMap.get(t);if(n!==void 0)return n;const r=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,r),this.regExpQueue.push(t),r}}const Ix=[" ",",","?","!",";"],Tx=new Rx(20);function bx(e,t,n){t=t||"",n=n||"";const r=Ix.filter(s=>t.indexOf(s)<0&&n.indexOf(s)<0);if(r.length===0)return!0;const i=Tx.getRegExp(`(${r.map(s=>s==="?"?"\\?":s).join("|")})`);let o=!i.test(e);if(!o){const s=e.indexOf(n);s>0&&!i.test(e.substring(0,s))&&(o=!0)}return o}function Rl(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let i=e;for(let o=0;o<r.length;){if(!i||typeof i!="object")return;let s,a="";for(let l=o;l<r.length;++l)if(l!==o&&(a+=n),a+=r[l],s=i[a],s!==void 0){if(["string","number","boolean"].indexOf(typeof s)>-1&&l<r.length-1)continue;o+=l-o+1;break}i=s}return i}function Ko(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class Of extends Fs{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,s=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,n],r&&(Array.isArray(r)?a.push(...r):typeof r=="string"&&o?a.push(...r.split(o)):a.push(r)));const l=Wo(this.data,a);return!l&&!n&&!r&&t.indexOf(".")>-1&&(t=a[0],n=a[1],r=a.slice(2).join(".")),l||!s||typeof r!="string"?l:Rl(this.data&&this.data[t]&&this.data[t][n],r,o)}addResource(t,n,r,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const s=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[t,n];r&&(a=a.concat(s?r.split(s):r)),t.indexOf(".")>-1&&(a=t.split("."),i=n,n=a[1]),this.addNamespaces(n),_f(this.data,a,i),o.silent||this.emit("added",t,n,r,i)}addResources(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in r)(typeof r[o]=="string"||Array.isArray(r[o]))&&this.addResource(t,n,o,r[o],{silent:!0});i.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,i,o){let s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[t,n];t.indexOf(".")>-1&&(a=t.split("."),i=r,r=n,n=a[1]),this.addNamespaces(n);let l=Wo(this.data,a)||{};s.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?e0(l,r,o):l={...l,...r},_f(this.data,a,l),s.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var t0={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,n,r,i))}),t}};const Pf={};class Qo extends Fs{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Nx(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=wt.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const s=r&&t.indexOf(r)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!bx(t,r,i);if(s&&!a){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:o};const u=t.split(r);(r!==i||r===i&&this.options.ns.indexOf(u[0])>-1)&&(o=u.shift()),t=u.join(i)}return typeof o=="string"&&(o=[o]),{key:t,namespaces:o}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:s,namespaces:a}=this.extractFromKey(t[t.length-1],n),l=a[a.length-1],u=n.lng||this.language,d=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(d){const x=n.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${x}${s}`,usedKey:s,exactUsedKey:s,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${x}${s}`}return i?{res:s,usedKey:s,exactUsedKey:s,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:s}const p=this.resolve(t,n);let c=p&&p.res;const v=p&&p.usedKey||s,g=p&&p.exactUsedKey||s,y=Object.prototype.toString.apply(c),$=["[object Number]","[object Function]","[object RegExp]"],h=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,f=!this.i18nFormat||this.i18nFormat.handleAsObject;if(f&&c&&(typeof c!="string"&&typeof c!="boolean"&&typeof c!="number")&&$.indexOf(y)<0&&!(typeof h=="string"&&Array.isArray(c))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,c,{...n,ns:a}):`key '${s} (${this.language})' returned an object instead of string.`;return i?(p.res=x,p.usedParams=this.getUsedParamsDetails(n),p):x}if(o){const x=Array.isArray(c),k=x?[]:{},C=x?g:v;for(const w in c)if(Object.prototype.hasOwnProperty.call(c,w)){const P=`${C}${o}${w}`;k[w]=this.translate(P,{...n,joinArrays:!1,ns:a}),k[w]===P&&(k[w]=c[w])}c=k}}else if(f&&typeof h=="string"&&Array.isArray(c))c=c.join(h),c&&(c=this.extendTranslation(c,t,n,r));else{let x=!1,k=!1;const C=n.count!==void 0&&typeof n.count!="string",w=Qo.hasDefaultValue(n),P=C?this.pluralResolver.getSuffix(u,n.count,n):"",K=n.ordinal&&C?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",I=C&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),ae=I&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${P}`]||n[`defaultValue${K}`]||n.defaultValue;!this.isValidLookup(c)&&w&&(x=!0,c=ae),this.isValidLookup(c)||(k=!0,c=s);const Et=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&k?void 0:c,ct=w&&ae!==c&&this.options.updateMissing;if(k||x||ct){if(this.logger.log(ct?"updateKey":"missingKey",u,l,s,ct?ae:c),o){const _=this.resolve(s,{...n,keySeparator:!1});_&&_.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let $t=[];const ft=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ft&&ft[0])for(let _=0;_<ft.length;_++)$t.push(ft[_]);else this.options.saveMissingTo==="all"?$t=this.languageUtils.toResolveHierarchy(n.lng||this.language):$t.push(n.lng||this.language);const dt=(_,L,j)=>{const D=w&&j!==c?j:Et;this.options.missingKeyHandler?this.options.missingKeyHandler(_,l,L,D,ct,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(_,l,L,D,ct,n),this.emit("missingKey",_,l,L,c)};this.options.saveMissing&&(this.options.saveMissingPlurals&&C?$t.forEach(_=>{const L=this.pluralResolver.getSuffixes(_,n);I&&n[`defaultValue${this.options.pluralSeparator}zero`]&&L.indexOf(`${this.options.pluralSeparator}zero`)<0&&L.push(`${this.options.pluralSeparator}zero`),L.forEach(j=>{dt([_],s+j,n[`defaultValue${j}`]||ae)})}):dt($t,s,ae))}c=this.extendTranslation(c,t,n,p,r),k&&c===s&&this.options.appendNamespaceToMissingKey&&(c=`${l}:${s}`),(k||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?c=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${s}`:s,x?c:void 0):c=this.options.parseMissingKeyHandler(c))}return i?(p.res=c,p.usedParams=this.getUsedParamsDetails(n),p):c}extendTranslation(t,n,r,i,o){var s=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(u){const c=t.match(this.interpolator.nestingRegexp);d=c&&c.length}let p=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(p={...this.options.interpolation.defaultVariables,...p}),t=this.interpolator.interpolate(t,p,r.lng||this.language,r),u){const c=t.match(this.interpolator.nestingRegexp),v=c&&c.length;d<v&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(r.lng=i.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var c=arguments.length,v=new Array(c),g=0;g<c;g++)v[g]=arguments[g];return o&&o[0]===v[0]&&!r.context?(s.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`),null):s.translate(...v,n)},r)),r.interpolation&&this.interpolator.reset()}const a=r.postProcess||this.options.postProcess,l=typeof a=="string"?[a]:a;return t!=null&&l&&l.length&&r.applyPostProcessor!==!1&&(t=t0.handle(l,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,i,o,s,a;return typeof t=="string"&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(l,n),d=u.key;i=d;let p=u.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const c=n.count!==void 0&&typeof n.count!="string",v=c&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),g=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",y=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);p.forEach($=>{this.isValidLookup(r)||(a=$,!Pf[`${y[0]}-${$}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Pf[`${y[0]}-${$}`]=!0,this.logger.warn(`key "${i}" for languages "${y.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),y.forEach(h=>{if(this.isValidLookup(r))return;s=h;const f=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(f,d,h,$,n);else{let x;c&&(x=this.pluralResolver.getSuffix(h,n.count,n));const k=`${this.options.pluralSeparator}zero`,C=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(c&&(f.push(d+x),n.ordinal&&x.indexOf(C)===0&&f.push(d+x.replace(C,this.options.pluralSeparator)),v&&f.push(d+k)),g){const w=`${d}${this.options.contextSeparator}${n.context}`;f.push(w),c&&(f.push(w+x),n.ordinal&&x.indexOf(C)===0&&f.push(w+x.replace(C,this.options.pluralSeparator)),v&&f.push(w+k))}}let m;for(;m=f.pop();)this.isValidLookup(r)||(o=m,r=this.getResource(h,$,m,n))}))})}),{res:r,usedKey:i,exactUsedKey:o,usedLng:s,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,i):this.resourceStore.getResource(t,n,r,i)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&typeof t.replace!="string";let i=r?t.replace:t;if(r&&typeof t.count<"u"&&(i.count=t.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const o of n)delete i[o]}return i}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function ka(e){return e.charAt(0).toUpperCase()+e.slice(1)}class Lf{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=wt.create("languageUtils")}getScriptPartFromCode(t){if(t=Ko(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=Ko(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(i=>i.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=ka(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=ka(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=ka(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const i=this.getLanguagePartFromCode(r);if(this.isSupportedCode(i))return n=i;n=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&(o.indexOf("-")>0&&i.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===i||o.indexOf(i)===0&&i.length>1))return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Array.isArray(t))return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),i=[],o=s=>{s&&(this.isSupportedCode(s)?i.push(s):this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):typeof t=="string"&&o(this.formatLanguageCode(t)),r.forEach(s=>{i.indexOf(s)<0&&o(this.formatLanguageCode(s))}),i}}let zx=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Ax={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const Mx=["v1","v2","v3"],Fx=["v4"],jf={zero:0,one:1,two:2,few:3,many:4,other:5};function Dx(){const e={};return zx.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:Ax[t.fc]}})}),e}class Ux{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=wt.create("pluralResolver"),(!this.options.compatibilityJSON||Fx.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Dx()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Ko(t==="dev"?"en":t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(i=>`${n}${i}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((i,o)=>jf[i]-jf[o]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):r.numbers.map(i=>this.getSuffix(t,i,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,r);return i?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:this.getSuffixRetroCompatible(i,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let i=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!Mx.includes(this.options.compatibilityJSON)}}function Rf(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=Px(e,t,n);return!o&&i&&typeof n=="string"&&(o=Rl(e,n,r),o===void 0&&(o=Rl(t,n,r))),o}class Vx{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=wt.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:o,prefixEscaped:s,suffix:a,suffixEscaped:l,formatSeparator:u,unescapeSuffix:d,unescapePrefix:p,nestingPrefix:c,nestingPrefixEscaped:v,nestingSuffix:g,nestingSuffixEscaped:y,nestingOptionsSeparator:$,maxReplaces:h,alwaysFormat:f}=t.interpolation;this.escape=n!==void 0?n:jx,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=o?In(o):s||"{{",this.suffix=a?In(a):l||"}}",this.formatSeparator=u||",",this.unescapePrefix=d?"":p||"-",this.unescapeSuffix=this.unescapePrefix?"":d||"",this.nestingPrefix=c?In(c):v||In("$t("),this.nestingSuffix=g?In(g):y||In(")"),this.nestingOptionsSeparator=$||",",this.maxReplaces=h||1e3,this.alwaysFormat=f!==void 0?f:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(n,r)=>n&&n.source===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,n,r,i){let o,s,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(g){return g.replace(/\$/g,"$$$$")}const d=g=>{if(g.indexOf(this.formatSeparator)<0){const f=Rf(n,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(f,void 0,r,{...i,...n,interpolationkey:g}):f}const y=g.split(this.formatSeparator),$=y.shift().trim(),h=y.join(this.formatSeparator).trim();return this.format(Rf(n,l,$,this.options.keySeparator,this.options.ignoreJSONStructure),h,r,{...i,...n,interpolationkey:$})};this.resetRegExp();const p=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,c=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>u(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?u(this.escape(g)):u(g)}].forEach(g=>{for(a=0;o=g.regex.exec(t);){const y=o[1].trim();if(s=d(y),s===void 0)if(typeof p=="function"){const h=p(t,o,i);s=typeof h=="string"?h:""}else if(i&&Object.prototype.hasOwnProperty.call(i,y))s="";else if(c){s=o[0];continue}else this.logger.warn(`missed to pass in variable ${y} for interpolating ${t}`),s="";else typeof s!="string"&&!this.useRawValueToEscape&&(s=Nf(s));const $=g.safeValue(s);if(t=t.replace(o[0],$),c?(g.regex.lastIndex+=s.length,g.regex.lastIndex-=o[0].length):g.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,s;function a(l,u){const d=this.nestingOptionsSeparator;if(l.indexOf(d)<0)return l;const p=l.split(new RegExp(`${d}[ ]*{`));let c=`{${p[1]}`;l=p[0],c=this.interpolate(c,s);const v=c.match(/'/g),g=c.match(/"/g);(v&&v.length%2===0&&!g||g.length%2!==0)&&(c=c.replace(/'/g,'"'));try{s=JSON.parse(c),u&&(s={...u,...s})}catch(y){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,y),`${l}${d}${c}`}return s.defaultValue&&s.defaultValue.indexOf(this.prefix)>-1&&delete s.defaultValue,l}for(;i=this.nestingRegexp.exec(t);){let l=[];s={...r},s=s.replace&&typeof s.replace!="string"?s.replace:s,s.applyPostProcessor=!1,delete s.defaultValue;let u=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const d=i[1].split(this.formatSeparator).map(p=>p.trim());i[1]=d.shift(),l=d,u=!0}if(o=n(a.call(this,i[1].trim(),s),s),o&&i[0]===t&&typeof o!="string")return o;typeof o!="string"&&(o=Nf(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),u&&(o=l.reduce((d,p)=>this.format(d,p,r.lng,{...r,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}function Bx(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const i=r[1].substring(0,r[1].length-1);t==="currency"&&i.indexOf(":")<0?n.currency||(n.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?n.range||(n.range=i.trim()):i.split(";").forEach(s=>{if(s){const[a,...l]=s.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,""),d=a.trim();n[d]||(n[d]=u),u==="false"&&(n[d]=!1),u==="true"&&(n[d]=!0),isNaN(u)||(n[d]=parseInt(u,10))}})}return{formatName:t,formatOptions:n}}function Tn(e){const t={};return function(r,i,o){const s=i+JSON.stringify(o);let a=t[s];return a||(a=e(Ko(i),o),t[s]=a),a(r)}}class Hx{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=wt.create("formatter"),this.options=t,this.formats={number:Tn((n,r)=>{const i=new Intl.NumberFormat(n,{...r});return o=>i.format(o)}),currency:Tn((n,r)=>{const i=new Intl.NumberFormat(n,{...r,style:"currency"});return o=>i.format(o)}),datetime:Tn((n,r)=>{const i=new Intl.DateTimeFormat(n,{...r});return o=>i.format(o)}),relativetime:Tn((n,r)=>{const i=new Intl.RelativeTimeFormat(n,{...r});return o=>i.format(o,r.range||"day")}),list:Tn((n,r)=>{const i=new Intl.ListFormat(n,{...r});return o=>i.format(o)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=Tn(n)}format(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((a,l)=>{const{formatName:u,formatOptions:d}=Bx(l);if(this.formats[u]){let p=a;try{const c=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},v=c.locale||c.lng||i.locale||i.lng||r;p=this.formats[u](a,v,{...d,...i,...c})}catch(c){this.logger.warn(c)}return p}else this.logger.warn(`there was no format function for ${u}`);return a},t)}}function Wx(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class Kx extends Fs{constructor(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=wt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,i.backend,i)}queueLoad(t,n,r,i){const o={},s={},a={},l={};return t.forEach(u=>{let d=!0;n.forEach(p=>{const c=`${u}|${p}`;!r.reload&&this.store.hasResourceBundle(u,p)?this.state[c]=2:this.state[c]<0||(this.state[c]===1?s[c]===void 0&&(s[c]=!0):(this.state[c]=1,d=!1,s[c]===void 0&&(s[c]=!0),o[c]===void 0&&(o[c]=!0),l[p]===void 0&&(l[p]=!0)))}),d||(a[u]=!0)}),(Object.keys(o).length||Object.keys(s).length)&&this.queue.push({pending:s,pendingCount:Object.keys(s).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(s),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,n,r){const i=t.split("|"),o=i[0],s=i[1];n&&this.emit("failedLoading",o,s,n),r&&this.store.addResourceBundle(o,s,r,void 0,void 0,{skipCopy:!0}),this.state[t]=n?-1:2;const a={};this.queue.forEach(l=>{Ox(l.loaded,[o],s),Wx(l,t),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{a[u]||(a[u]={});const d=l.loaded[u];d.length&&d.forEach(p=>{a[u][p]===void 0&&(a[u][p]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(t,n,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,s=arguments.length>5?arguments[5]:void 0;if(!t.length)return s(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:i,wait:o,callback:s});return}this.readingCalls++;const a=(u,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(u&&d&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,i+1,o*2,s)},o);return}s(u,d)},l=this.backend[r].bind(this.backend);if(l.length===2){try{const u=l(t,n);u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}return}return l(t,n,a)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const o=this.queueLoad(t,n,r,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(s=>{this.loadOne(s)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),i=r[0],o=r[1];this.read(i,o,"read",void 0,void 0,(s,a)=>{s&&this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`,s),!s&&a&&this.logger.log(`${n}loaded namespace ${o} for language ${i}`,a),this.loaded(t,s,a)})}saveMissing(t,n,r,i,o){let s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const l={...s,isUpdate:o},u=this.backend.create.bind(this.backend);if(u.length<6)try{let d;u.length===5?d=u(t,n,r,i,l):d=u(t,n,r,i),d&&typeof d.then=="function"?d.then(p=>a(null,p)).catch(a):a(null,d)}catch(d){a(d)}else u(t,n,r,i,a,l)}!t||!t[0]||this.store.addResource(t[0],n,r,i)}}}function If(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Tf(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Yi(){}function Qx(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class yi extends Fs{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Tf(t),this.services={},this.logger=wt,this.modules={external:[]},Qx(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const i=If();this.options={...i,...this.options,...Tf(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function o(d){return d?typeof d=="function"?new d:d:null}if(!this.options.isClone){this.modules.logger?wt.init(o(this.modules.logger),this.options):wt.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:typeof Intl<"u"&&(d=Hx);const p=new Lf(this.options);this.store=new Of(this.options.resources,this.options);const c=this.services;c.logger=wt,c.resourceStore=this.store,c.languageUtils=p,c.pluralResolver=new Ux(p,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(c.formatter=o(d),c.formatter.init(c,this.options),this.options.interpolation.format=c.formatter.format.bind(c.formatter)),c.interpolator=new Vx(this.options),c.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},c.backendConnector=new Kx(o(this.modules.backend),c.resourceStore,c,this.options),c.backendConnector.on("*",function(v){for(var g=arguments.length,y=new Array(g>1?g-1:0),$=1;$<g;$++)y[$-1]=arguments[$];t.emit(v,...y)}),this.modules.languageDetector&&(c.languageDetector=o(this.modules.languageDetector),c.languageDetector.init&&c.languageDetector.init(c,this.options.detection,this.options)),this.modules.i18nFormat&&(c.i18nFormat=o(this.modules.i18nFormat),c.i18nFormat.init&&c.i18nFormat.init(this)),this.translator=new Qo(this.services,this.options),this.translator.on("*",function(v){for(var g=arguments.length,y=new Array(g>1?g-1:0),$=1;$<g;$++)y[$-1]=arguments[$];t.emit(v,...y)}),this.modules.external.forEach(v=>{v.init&&v.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Yi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return t.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return t.store[d](...arguments),t}});const l=Or(),u=()=>{const d=(p,c)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(c),r(p,c)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),l}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yi;const i=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const o=[],s=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(u=>{u!=="cimode"&&o.indexOf(u)<0&&o.push(u)})};i?s(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>s(l)),this.options.preload&&this.options.preload.forEach(a=>s(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(a)})}else r(null)}reloadResources(t,n,r){const i=Or();return t||(t=this.languages),n||(n=this.options.ns),r||(r=Yi),this.services.backendConnector.reload(t,n,o=>{i.resolve(),r(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&t0.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const i=Or();this.emit("languageChanging",t);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},s=(l,u)=>{u?(o(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,i.resolve(function(){return r.t(...arguments)}),n&&n(l,function(){return r.t(...arguments)})},a=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const u=typeof l=="string"?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||o(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,d=>{s(d,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),i}getFixedT(t,n,r){var i=this;const o=function(s,a){let l;if(typeof a!="object"){for(var u=arguments.length,d=new Array(u>2?u-2:0),p=2;p<u;p++)d[p-2]=arguments[p];l=i.options.overloadTranslationOptionHandler([s,a].concat(d))}else l={...a};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix=l.keyPrefix||r||o.keyPrefix;const c=i.options.keySeparator||".";let v;return l.keyPrefix&&Array.isArray(s)?v=s.map(g=>`${l.keyPrefix}${c}${g}`):v=l.keyPrefix?`${l.keyPrefix}${c}${s}`:s,i.t(v,l)};return typeof t=="string"?o.lng=t:o.lngs=t,o.ns=n,o.keyPrefix=r,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const s=(a,l)=>{const u=this.services.backendConnector.state[`${a}|${l}`];return u===-1||u===2};if(n.precheck){const a=n.precheck(this,s);if(a!==void 0)return a}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||s(r,t)&&(!i||s(o,t)))}loadNamespaces(t,n){const r=Or();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=Or();typeof t=="string"&&(t=[t]);const i=this.options.preload||[],o=t.filter(s=>i.indexOf(s)<0&&this.services.languageUtils.isSupportedCode(s));return o.length?(this.options.preload=i.concat(o),this.loadResources(s=>{r.resolve(),n&&n(s)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new Lf(If());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new yi(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yi;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new yi(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},r&&(o.store=new Of(this.store.data,i),o.services.resourceStore=o.store),o.translator=new Qo(o.services,i),o.translator.on("*",function(a){for(var l=arguments.length,u=new Array(l>1?l-1:0),d=1;d<l;d++)u[d-1]=arguments[d];o.emit(a,...u)}),o.init(i,n),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const $e=yi.createInstance();$e.createInstance=yi.createInstance;$e.createInstance;$e.dir;$e.init;$e.loadResources;$e.reloadResources;$e.use;$e.changeLanguage;$e.getFixedT;$e.t;$e.exists;$e.setDefaultNamespace;$e.hasLoadedNamespace;$e.loadNamespaces;$e.loadLanguages;const Yx={pt:{translation:{inicio:"Início",especialidades:"Especialidades",sobre:"Sobre",curriculo:"Currículo",fale_comigo:"Fale Comigo",idioma:"Idioma",titulo_beginning:"TRANSFORMANDO IDEIAS EM REALIDADE",paragrafo_1:'"No mundo do desenvolvimento de software, cada linha de código é um passo em direção à inovação e à solução de problemas complexos."',paragrafo_2:"Ofereço serviços de desenvolvimento",paragrafo_3:"ou",paragrafo_4:"com experiencia em",paragrafo_5:"Trabalhando tanto em modelo",paragrafo_6:"quanto",paragrafo_7:"transformo suas ideias em soluções digitais robustas e eficientes. Experiência em projetos de bancos digitais e e-commerces, combinando planejamento e execução para entregar resultados excepcionais.",entre_em_contato:"Entre em contato",minhas:"Minhas",web_texto:"Desenvolvimento de aplicações web modernas e responsivas utilizando React e Typescript. Desde páginas simples a complexas plataformas interativas, ofereço soluções que combinam desempenho, design intuitivo e escalabilidade.",mobile_texto:"Criação de aplicativos móveis eficientes e de alta performance com React Native. Proporciono uma experiência de usuário fluida e envolvente, atendendo às necessidades de diferentes plataformas,tanto iOS quanto Android.",back_texto:"Implementação de back-ends robustos e seguros usando Node.js e Typescript. Especializado em integrações com serviços terceiros, gerenciamento de banco de dados (MySQL, Knex) e desenvolvimento de regras de negócio, assegurando a eficiência e a confiabilidade das suas aplicações.",titulo_about_me:"Muito Prazer, sou o",about_paragrafo_1:"A minha trajetória se iniciou longe da programação. Sou formado em Direito e, apesar de ter atuado por um certo tempo, nunca me identifiquei com a área. Em 2020, com a pandemia e a necessidade de ficarmos em casa, comecei a estudar programação por conta própria, incentivado por alguns amigos. Acabei me identificando, pois sempre gostei de tecnologia e de aprender. Comecei pelo básico, com a lógica de programação e algumas linguagens, tanto do front-end quanto do back-end. Isso me permitiu navegar amplamente por diversas áreas de atuação de um programador.",about_paragrafo_2:"Após completar alguns cursos na área, em 2021 tive a oportunidade de trabalhar na Prudentte Gestão de Pagamentos, onde atuei como desenvolvedor full-stack desde o começo do projeto. Nesse local tive a oportunidade de crescer muito profissionalmente e expandir minhas competências técnicas e interpessoais. O projeto tinha como base Node.js no Back-end e React com Typescript no front-end. Paralelamente, em 2022, atuei como desenvolvedor front-end no projeto Intelivino por seis meses. Eles estavam em expansão do ecossistema de venda de vinhos. Este projeto utilizava React Native no app e React no front-end. Após meu vínculo se encerrar com ambas as empresas, em outubro de 2023, iniciei como desenvolvedor na Parcelamos Tudo, um projeto complexo com diversos ecossistemas. Atuei como desenvolvedor front-end por sete mêses utilizando React e Typescript na maior parte do projeto. Todas essas experiências me deram uma profunda compreensão do que significa ser um programador de excelência, e eu carrego esses aprendizados como uma postura profissional indissociável de quem eu sou.",about_paragrafo_3:"Hoje, quero continuar me aperfeiçoando na área através de novas oportunidades de trabalho que permitam tanto o meu desenvolvimento profissional como o crescimento pessoal. Minha ampla experiência na área e maleabilidade com relação às necessidades de cada tipo de projeto permitem com que eu me adapte à realidade e especificidade de cada tipo de ritmo de trabalho e de equipe.",baixar:"Baixar",portugues:"Português",ingles:"Inglês",fale:"Fale",comigo:"Comigo",nome:"Nome",email:"Email",celular:"Celular",mensagem:"Sua Mensagem :)",enviar:"Enviar"}},en:{translation:{inicio:"Opening",especialidades:"Specialties",sobre:"About",curriculo:"Curriculum",fale_comigo:"Contact Me",idioma:"Language",titulo_beginning:"TRANSFORMING IDEAS INTO REALITY",beginning_paragrafo_1:'"In the world of software development, every line of code is a step toward innovation and solving complex problems."',beginning_paragrafo_2:"I offer development services in",beginning_paragrafo_3:"or",beginning_paragrafo_4:"with experience in",beginning_paragrafo_5:"Working on model",beginning_paragrafo_6:"or",beginning_paragrafo_7:"transforming your ideas into robust and efficient digital solutions. Experience in digital banking and e-commerce projects, combining planning and execution to deliver exceptional results.",entre_em_contato:"Contact Me",minhas:"My",web_texto:"Development of modern and responsive web applications using React and Typescript. From simple pages to complex interactive platforms, I offer solutions that combine performance, intuitive design and scalability.",mobile_texto:"Creation of efficient and high-performance mobile applications with React Native. I provide a fluid and engaging user experience, meeting the needs of different platforms, both iOS and Android.",back_texto:"Implementation of robust and secure backends using Node.js and Typescript. Specialized in integrations with third-party services, database management (MySQL, Knex) and development of business rules, ensuring the efficiency and reliability of your applications.",titulo_about_me:"Nice to meet you, I'm",about_paragrafo_1:"My journey began far from programming. I have a degree in Law and, despite working in the field for a while, I never really identified with it. In 2020, with the pandemic and the necessity of staying home, I started studying programming on my own, encouraged by some friends. I ended up identifying with it because I always liked technology and learning. I started with the basics, such as programming logic and some languages, both front-end and back-end. This allowed me to broadly navigate through various areas of a programmer's work.",about_paragrafo_2:"After completing some courses in the field, in 2021 I had the opportunity to work at Prudentte Gestão de Pagamentos, where I worked as a full-stack developer from the beginning of the project. There, I had the chance to grow a lot professionally and expand my technical and interpersonal skills. The project was based on Node.js for the back-end and React with TypeScript for the front-end. Simultaneously, in 2022, I worked as a front-end developer on the Intelivino project for six months. They were expanding their wine sales ecosystem. This project used React Native for the app and React for the front-end. After my tenure with both companies ended in October 2023, I started as a developer at Parcelamos Tudo, a complex project with various ecosystems. I worked as a front-end developer for seven months, mainly using React and TypeScript. All these experiences have given me a deep understanding of what it means to be an excellent programmer, and I carry these learnings as an inseparable part of my professional identity.",about_paragrafo_3:"Today, I want to continue improving in the field through new job opportunities that allow for both my professional development and personal growth. My extensive experience in the field and flexibility regarding the needs of each type of project allow me to adapt to the reality and specificity of different work rhythms and team dynamics.",baixar:"Download",portugues:"Portuguese",ingles:"English",fale:"Contact",comigo:"Me",nome:"Name",email:"Email",celular:"Phone",mensagem:"Your Message :)",enviar:"Send"}}},{slice:Xx,forEach:Gx}=[];function Jx(e){return Gx.call(Xx.call(arguments,1),t=>{if(t)for(const n in t)e[n]===void 0&&(e[n]=t[n])}),e}const bf=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Zx=(e,t,n)=>{const r=n||{};r.path=r.path||"/";const i=encodeURIComponent(t);let o=`${e}=${i}`;if(r.maxAge>0){const s=r.maxAge-0;if(Number.isNaN(s))throw new Error("maxAge should be a Number");o+=`; Max-Age=${Math.floor(s)}`}if(r.domain){if(!bf.test(r.domain))throw new TypeError("option domain is invalid");o+=`; Domain=${r.domain}`}if(r.path){if(!bf.test(r.path))throw new TypeError("option path is invalid");o+=`; Path=${r.path}`}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o},zf={create(e,t,n,r){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+n*60*1e3)),r&&(i.domain=r),document.cookie=Zx(e,encodeURIComponent(t),i)},read(e){const t=`${e}=`,n=document.cookie.split(";");for(let r=0;r<n.length;r++){let i=n[r];for(;i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(t)===0)return i.substring(t.length,i.length)}return null},remove(e){this.create(e,"",-1)}};var qx={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return zf.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:r,cookieDomain:i,cookieOptions:o}=t;n&&typeof document<"u"&&zf.create(n,e,r,i,o)}},ew={name:"querystring",lookup(e){var r;let{lookupQuerystring:t}=e,n;if(typeof window<"u"){let{search:i}=window.location;!window.location.search&&((r=window.location.hash)==null?void 0:r.indexOf("?"))>-1&&(i=window.location.hash.substring(window.location.hash.indexOf("?")));const s=i.substring(1).split("&");for(let a=0;a<s.length;a++){const l=s[a].indexOf("=");l>0&&s[a].substring(0,l)===t&&(n=s[a].substring(l+1))}}return n}};let Pr=null;const Af=()=>{if(Pr!==null)return Pr;try{Pr=window!=="undefined"&&window.localStorage!==null;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Pr=!1}return Pr};var tw={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&Af())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&Af()&&window.localStorage.setItem(n,e)}};let Lr=null;const Mf=()=>{if(Lr!==null)return Lr;try{Lr=window!=="undefined"&&window.sessionStorage!==null;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Lr=!1}return Lr};var nw={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&Mf())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&Mf()&&window.sessionStorage.setItem(n,e)}},rw={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:n,userLanguage:r,language:i}=navigator;if(n)for(let o=0;o<n.length;o++)t.push(n[o]);r&&t.push(r),i&&t.push(i)}return t.length>0?t:void 0}},iw={name:"htmlTag",lookup(e){let{htmlTag:t}=e,n;const r=t||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(n=r.getAttribute("lang")),n}},ow={name:"path",lookup(e){var i;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(i=n[typeof t=="number"?t:0])==null?void 0:i.replace("/",""):void 0}},sw={name:"subdomain",lookup(e){var i,o;let{lookupFromSubdomainIndex:t}=e;const n=typeof t=="number"?t+1:1,r=typeof window<"u"&&((o=(i=window.location)==null?void 0:i.hostname)==null?void 0:o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(r)return r[n]}};function aw(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}}class n0{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t||{languageUtils:{}},this.options=Jx(n,this.options||{},aw()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=i=>i.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(qx),this.addDetector(ew),this.addDetector(tw),this.addDetector(nw),this.addDetector(rw),this.addDetector(iw),this.addDetector(ow),this.addDetector(sw)}addDetector(t){return this.detectors[t.name]=t,this}detect(t){t||(t=this.options.order);let n=[];return t.forEach(r=>{if(this.detectors[r]){let i=this.detectors[r].lookup(this.options);i&&typeof i=="string"&&(i=[i]),i&&(n=n.concat(i))}}),n=n.map(r=>this.options.convertDetectedLanguage(r)),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(t,n){n||(n=this.options.caches),n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||n.forEach(r=>{this.detectors[r]&&this.detectors[r].cacheUserLanguage(t,this.options)}))}}n0.type="languageDetector";const lw={order:["localStorage","querystring","cookie","sessionStorage","navigator","htmlTag","path","subdomain"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",lookupFromPathIndex:0,lookupFromSubdomainIndex:0,caches:["localStorage","cookie"],excludeCacheFor:["cimode"]},r0=new n0;r0.addDetector({name:"fbLangDetector",lookup(e){return console.log("lookup",e),"pt"},cacheUserLanguage(e,t){console.log("cacheUserLanguage",e,t)}});$e.use(r0).use(Q1).init({detection:lw,resources:Yx,fallbackLng:["pt","en"],interpolation:{escapeValue:!1}});function uw(){return S.jsxs(L1,{theme:T1,children:[S.jsx(Ex,{}),S.jsx(b1,{})]})}Ca.createRoot(document.getElementById("root")).render(S.jsx(V.StrictMode,{children:S.jsx(uw,{})}));
