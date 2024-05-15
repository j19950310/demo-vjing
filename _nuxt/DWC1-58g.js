const __vite__fileDeps=["./BgQcVF-M.js","./B9IRc0Jd.js","./error-404.JekaaCis.css","./Cy98dti4.js","./error-500.CNP9nqm1.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xl(t,e){const n=new Set(t.split(","));return i=>n.has(i)}const rt={},cr=[],Zt=()=>{},gm=()=>!1,fs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ql=t=>t.startsWith("onUpdate:"),ht=Object.assign,$l=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_m=Object.prototype.hasOwnProperty,We=(t,e)=>_m.call(t,e),Pe=Array.isArray,ur=t=>hs(t)==="[object Map]",wh=t=>hs(t)==="[object Set]",vm=t=>hs(t)==="[object RegExp]",Ie=t=>typeof t=="function",at=t=>typeof t=="string",Bi=t=>typeof t=="symbol",tt=t=>t!==null&&typeof t=="object",Rh=t=>(tt(t)||Ie(t))&&Ie(t.then)&&Ie(t.catch),Ch=Object.prototype.toString,hs=t=>Ch.call(t),xm=t=>hs(t).slice(8,-1),Ph=t=>hs(t)==="[object Object]",jl=t=>at(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fr=Xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ym=/-(\w)/g,xn=Fo(t=>t.replace(ym,(e,n)=>n?n.toUpperCase():"")),Sm=/\B([A-Z])/g,Cr=Fo(t=>t.replace(Sm,"-$1").toLowerCase()),Bo=Fo(t=>t.charAt(0).toUpperCase()+t.slice(1)),aa=Fo(t=>t?`on${Bo(t)}`:""),li=(t,e)=>!Object.is(t,e),qr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Lh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Mm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ih=t=>{const e=at(t)?Number(t):NaN;return isNaN(e)?t:e};let Fc;const Dh=()=>Fc||(Fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ho(t){if(Pe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=at(i)?Am(i):Ho(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(at(t)||tt(t))return t}const Em=/;(?![^(]*\))/g,Tm=/:([^]+)/,bm=/\/\*[^]*?\*\//g;function Am(t){const e={};return t.replace(bm,"").split(Em).forEach(n=>{if(n){const i=n.split(Tm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ko(t){let e="";if(at(t))e=t;else if(Pe(t))for(let n=0;n<t.length;n++){const i=ko(t[n]);i&&(e+=i+" ")}else if(tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function wm(t){if(!t)return null;let{class:e,style:n}=t;return e&&!at(e)&&(t.class=ko(e)),n&&(t.style=Ho(n)),t}const Rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cm=Xl(Rm);function Uh(t){return!!t||t===""}const Mw=t=>at(t)?t:t==null?"":Pe(t)||tt(t)&&(t.toString===Ch||!Ie(t.toString))?JSON.stringify(t,Nh,2):String(t),Nh=(t,e)=>e&&e.__v_isRef?Nh(t,e.value):ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[la(i,s)+" =>"]=r,n),{})}:wh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>la(n))}:Bi(e)?la(e):tt(e)&&!Pe(e)&&!Ph(e)?String(e):e,la=(t,e="")=>{var n;return Bi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class Oh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Pm(t){return new Oh(t)}function Lm(t,e=kt){e&&e.active&&e.effects.push(t)}function Fh(){return kt}function Im(t){kt&&kt.cleanups.push(t)}let Ui;class Yl{constructor(e,n,i,r){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Lm(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,fi();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Dm(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),hi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ii,n=Ui;try{return ii=!0,Ui=this,this._runnings++,Bc(this),this.fn()}finally{Hc(this),this._runnings--,Ui=n,ii=e}}stop(){this.active&&(Bc(this),Hc(this),this.onStop&&this.onStop(),this.active=!1)}}function Dm(t){return t.value}function Bc(t){t._trackId++,t._depsLength=0}function Hc(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Bh(t.deps[e],t);t.deps.length=t._depsLength}}function Bh(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ii=!0,sl=0;const Hh=[];function fi(){Hh.push(ii),ii=!1}function hi(){const t=Hh.pop();ii=t===void 0?!0:t}function Kl(){sl++}function Zl(){for(sl--;!sl&&ol.length;)ol.shift()()}function kh(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&Bh(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ol=[];function zh(t,e,n){Kl();for(const i of t.keys()){let r;i._dirtyLevel<e&&(r??(r=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&ol.push(i.scheduler)))}Zl()}const Vh=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},vo=new WeakMap,Ni=Symbol(""),al=Symbol("");function Nt(t,e,n){if(ii&&Ui){let i=vo.get(t);i||vo.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Vh(()=>i.delete(n))),kh(Ui,r)}}function Ln(t,e,n,i,r,s){const o=vo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Pe(t)){const l=Number(i);o.forEach((u,c)=>{(c==="length"||!Bi(c)&&c>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Pe(t)?jl(n)&&a.push(o.get("length")):(a.push(o.get(Ni)),ur(t)&&a.push(o.get(al)));break;case"delete":Pe(t)||(a.push(o.get(Ni)),ur(t)&&a.push(o.get(al)));break;case"set":ur(t)&&a.push(o.get(Ni));break}Kl();for(const l of a)l&&zh(l,4);Zl()}function Um(t,e){const n=vo.get(t);return n&&n.get(e)}const Nm=Xl("__proto__,__v_isRef,__isVue"),Gh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bi)),kc=Om();function Om(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=qe(this);for(let s=0,o=this.length;s<o;s++)Nt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fi(),Kl();const i=qe(this)[e].apply(this,n);return Zl(),hi(),i}}),t}function Fm(t){Bi(t)||(t=String(t));const e=qe(this);return Nt(e,"has",t),e.hasOwnProperty(t)}class Wh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Km:jh:s?$h:qh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Pe(e);if(!r){if(o&&We(kc,n))return Reflect.get(kc,n,i);if(n==="hasOwnProperty")return Fm}const a=Reflect.get(e,n,i);return(Bi(n)?Gh.has(n):Nm(n))||(r||Nt(e,"get",n),s)?a:At(a)?o&&jl(n)?a:a.value:tt(a)?r?Yh(a):di(a):a}}class Xh extends Wh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=yr(s);if(!xo(i)&&!yr(i)&&(s=qe(s),i=qe(i)),!Pe(e)&&At(s)&&!At(i))return l?!1:(s.value=i,!0)}const o=Pe(e)&&jl(n)?Number(n)<e.length:We(e,n),a=Reflect.set(e,n,i,r);return e===qe(r)&&(o?li(i,s)&&Ln(e,"set",n,i):Ln(e,"add",n,i)),a}deleteProperty(e,n){const i=We(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Ln(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Bi(n)||!Gh.has(n))&&Nt(e,"has",n),i}ownKeys(e){return Nt(e,"iterate",Pe(e)?"length":Ni),Reflect.ownKeys(e)}}class Bm extends Wh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hm=new Xh,km=new Bm,zm=new Xh(!0);const Jl=t=>t,zo=t=>Reflect.getPrototypeOf(t);function Rs(t,e,n=!1,i=!1){t=t.__v_raw;const r=qe(t),s=qe(e);n||(li(e,s)&&Nt(r,"get",e),Nt(r,"get",s));const{has:o}=zo(r),a=i?Jl:n?tc:es;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Cs(t,e=!1){const n=this.__v_raw,i=qe(n),r=qe(t);return e||(li(t,r)&&Nt(i,"has",t),Nt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ps(t,e=!1){return t=t.__v_raw,!e&&Nt(qe(t),"iterate",Ni),Reflect.get(t,"size",t)}function zc(t){t=qe(t);const e=qe(this);return zo(e).has.call(e,t)||(e.add(t),Ln(e,"add",t,t)),this}function Vc(t,e){e=qe(e);const n=qe(this),{has:i,get:r}=zo(n);let s=i.call(n,t);s||(t=qe(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?li(e,o)&&Ln(n,"set",t,e):Ln(n,"add",t,e),this}function Gc(t){const e=qe(this),{has:n,get:i}=zo(e);let r=n.call(e,t);r||(t=qe(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Ln(e,"delete",t,void 0),s}function Wc(){const t=qe(this),e=t.size!==0,n=t.clear();return e&&Ln(t,"clear",void 0,void 0),n}function Ls(t,e){return function(i,r){const s=this,o=s.__v_raw,a=qe(o),l=e?Jl:t?tc:es;return!t&&Nt(a,"iterate",Ni),o.forEach((u,c)=>i.call(r,l(u),l(c),s))}}function Is(t,e,n){return function(...i){const r=this.__v_raw,s=qe(r),o=ur(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...i),c=n?Jl:e?tc:es;return!e&&Nt(s,"iterate",l?al:Ni),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}},[Symbol.iterator](){return this}}}}function Hn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vm(){const t={get(s){return Rs(this,s)},get size(){return Ps(this)},has:Cs,add:zc,set:Vc,delete:Gc,clear:Wc,forEach:Ls(!1,!1)},e={get(s){return Rs(this,s,!1,!0)},get size(){return Ps(this)},has:Cs,add:zc,set:Vc,delete:Gc,clear:Wc,forEach:Ls(!1,!0)},n={get(s){return Rs(this,s,!0)},get size(){return Ps(this,!0)},has(s){return Cs.call(this,s,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:Ls(!0,!1)},i={get(s){return Rs(this,s,!0,!0)},get size(){return Ps(this,!0)},has(s){return Cs.call(this,s,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:Ls(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Is(s,!1,!1),n[s]=Is(s,!0,!1),e[s]=Is(s,!1,!0),i[s]=Is(s,!0,!0)}),[t,n,e,i]}const[Gm,Wm,Xm,qm]=Vm();function Ql(t,e){const n=e?t?qm:Xm:t?Wm:Gm;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(We(n,r)&&r in i?n:i,r,s)}const $m={get:Ql(!1,!1)},jm={get:Ql(!1,!0)},Ym={get:Ql(!0,!1)};const qh=new WeakMap,$h=new WeakMap,jh=new WeakMap,Km=new WeakMap;function Zm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jm(t){return t.__v_skip||!Object.isExtensible(t)?0:Zm(xm(t))}function di(t){return yr(t)?t:ec(t,!1,Hm,$m,qh)}function ds(t){return ec(t,!1,zm,jm,$h)}function Yh(t){return ec(t,!0,km,Ym,jh)}function ec(t,e,n,i,r){if(!tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Jm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function $r(t){return yr(t)?$r(t.__v_raw):!!(t&&t.__v_isReactive)}function yr(t){return!!(t&&t.__v_isReadonly)}function xo(t){return!!(t&&t.__v_isShallow)}function Kh(t){return t?!!t.__v_raw:!1}function qe(t){const e=t&&t.__v_raw;return e?qe(e):t}function Qm(t){return Object.isExtensible(t)&&Lh(t,"__v_skip",!0),t}const es=t=>tt(t)?di(t):t,tc=t=>tt(t)?Yh(t):t;class Zh{constructor(e,n,i,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Yl(()=>e(this._value),()=>co(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=qe(this);return(!e._cacheable||e.effect.dirty)&&li(e._value,e._value=e.effect.run())&&co(e,4),Jh(e),e.effect._dirtyLevel>=2&&co(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function eg(t,e,n=!1){let i,r;const s=Ie(t);return s?(i=t,r=Zt):(i=t.get,r=t.set),new Zh(i,r,s||!r,n)}function Jh(t){var e;ii&&Ui&&(t=qe(t),kh(Ui,(e=t.dep)!=null?e:t.dep=Vh(()=>t.dep=void 0,t instanceof Zh?t:void 0)))}function co(t,e=4,n){t=qe(t);const i=t.dep;i&&zh(i,e)}function At(t){return!!(t&&t.__v_isRef===!0)}function st(t){return Qh(t,!1)}function ts(t){return Qh(t,!0)}function Qh(t,e){return At(t)?t:new tg(t,e)}class tg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:qe(e),this._value=n?e:es(e)}get value(){return Jh(this),this._value}set value(e){const n=this.__v_isShallow||xo(e)||yr(e);e=n?e:qe(e),li(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:es(e),co(this,4))}}function it(t){return At(t)?t.value:t}const ng={get:(t,e,n)=>it(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return At(r)&&!At(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function ed(t){return $r(t)?t:new Proxy(t,ng)}class ig{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Um(qe(this._object),this._key)}}class rg{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function sg(t,e,n){return At(t)?t:Ie(t)?new rg(t):tt(t)&&arguments.length>1?og(t,e,n):st(t)}function og(t,e,n){const i=t[e];return At(i)?i:new ig(t,e,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ri(t,e,n,i){try{return i?t(...i):t()}catch(r){Pr(r,e,n)}}function en(t,e,n,i){if(Ie(t)){const r=ri(t,e,n,i);return r&&Rh(r)&&r.catch(s=>{Pr(s,e,n)}),r}if(Pe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(en(t[s],e,n,i));return r}}function Pr(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){fi(),ri(l,null,10,[t,o,a]),hi();return}}ag(t,n,r,i)}function ag(t,e,n,i=!0){console.error(t)}let ns=!1,ll=!1;const bt=[];let pn=0;const hr=[];let Kn=null,Ci=0;const td=Promise.resolve();let nc=null;function ps(t){const e=nc||td;return t?e.then(this?t.bind(this):t):e}function lg(t){let e=pn+1,n=bt.length;for(;e<n;){const i=e+n>>>1,r=bt[i],s=is(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function Vo(t){(!bt.length||!bt.includes(t,ns&&t.allowRecurse?pn+1:pn))&&(t.id==null?bt.push(t):bt.splice(lg(t.id),0,t),nd())}function nd(){!ns&&!ll&&(ll=!0,nc=td.then(id))}function cg(t){const e=bt.indexOf(t);e>pn&&bt.splice(e,1)}function cl(t){Pe(t)?hr.push(...t):(!Kn||!Kn.includes(t,t.allowRecurse?Ci+1:Ci))&&hr.push(t),nd()}function Xc(t,e,n=ns?pn+1:0){for(;n<bt.length;n++){const i=bt[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;bt.splice(n,1),n--,i()}}}function yo(t){if(hr.length){const e=[...new Set(hr)].sort((n,i)=>is(n)-is(i));if(hr.length=0,Kn){Kn.push(...e);return}for(Kn=e,Ci=0;Ci<Kn.length;Ci++)Kn[Ci]();Kn=null,Ci=0}}const is=t=>t.id==null?1/0:t.id,ug=(t,e)=>{const n=is(t)-is(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function id(t){ll=!1,ns=!0,bt.sort(ug);try{for(pn=0;pn<bt.length;pn++){const e=bt[pn];e&&e.active!==!1&&ri(e,null,14)}}finally{pn=0,bt.length=0,yo(),ns=!1,nc=null,(bt.length||hr.length)&&id()}}function fg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||rt;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[c]||rt;h&&(r=n.map(d=>at(d)?d.trim():d)),f&&(r=n.map(Mm))}let a,l=i[a=aa(e)]||i[a=aa(xn(e))];!l&&s&&(l=i[a=aa(Cr(e))]),l&&en(l,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,en(u,t,6,r)}}function rd(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ie(t)){const l=u=>{const c=rd(u,e,!0);c&&(a=!0,ht(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(tt(t)&&i.set(t,null),null):(Pe(s)?s.forEach(l=>o[l]=null):ht(o,s),tt(t)&&i.set(t,o),o)}function Go(t,e){return!t||!fs(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(t,e[0].toLowerCase()+e.slice(1))||We(t,Cr(e))||We(t,e))}let Vt=null,Wo=null;function So(t){const e=Vt;return Vt=t,Wo=t&&t.type.__scopeId||null,e}function Ew(t){Wo=t}function Tw(){Wo=null}function sd(t,e=Vt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&su(-1);const s=So(e);let o;try{o=t(...r)}finally{So(s),i._d&&su(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ca(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:g,inheritAttrs:v}=t,m=So(t);let p,S;try{if(n.shapeFlag&4){const M=r||i,R=M;p=Yt(u.call(R,M,c,f,d,h,g)),S=a}else{const M=e;p=Yt(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),S=e.props?a:dg(a)}}catch(M){Yr.length=0,Pr(M,t,1),p=lt(Gt)}let _=p;if(S&&v!==!1){const M=Object.keys(S),{shapeFlag:R}=_;M.length&&R&7&&(s&&M.some(ql)&&(S=pg(S,s)),_=Dn(_,S,!1,!0))}return n.dirs&&(_=Dn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),p=_,So(m),p}function hg(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(ss(r)){if(r.type!==Gt||r.children==="v-if"){if(n)return;n=r}}else return}return n}const dg=t=>{let e;for(const n in t)(n==="class"||n==="style"||fs(n))&&((e||(e={}))[n]=t[n]);return e},pg=(t,e)=>{const n={};for(const i in t)(!ql(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function mg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?qc(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(o[h]!==i[h]&&!Go(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?qc(i,o,u):!0:!!o;return!1}function qc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Go(n,s))return!0}return!1}function ic({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const od="components";function bw(t,e){return ld(od,t,!0,e)||t}const ad=Symbol.for("v-ndc");function gg(t){return at(t)?ld(od,t,!1)||t:t||ad}function ld(t,e,n=!0,i=!1){const r=Vt||dt;if(r){const s=r.type;{const a=vl(s,!1);if(a&&(a===e||a===xn(e)||a===Bo(xn(e))))return s}const o=$c(r[t]||s[t],e)||$c(r.appContext[t],e);return!o&&i?s:o}}function $c(t,e){return t&&(t[e]||t[xn(e)]||t[Bo(xn(e))])}const cd=t=>t.__isSuspense;let ul=0;const _g={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,u){if(t==null)vg(e,n,i,r,s,o,a,l,u);else{if(s&&s.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}xg(t,e,n,i,r,o,a,l,u)}},hydrate:yg,create:rc,normalize:Sg},ud=_g;function rs(t,e){const n=t.props&&t.props[e];Ie(n)&&n()}function vg(t,e,n,i,r,s,o,a,l){const{p:u,o:{createElement:c}}=l,f=c("div"),h=t.suspense=rc(t,r,i,e,f,n,s,o,a,l);u(null,h.pendingBranch=t.ssContent,f,null,i,h,s,o),h.deps>0?(rs(t,"onPending"),rs(t,"onFallback"),u(null,t.ssFallback,e,n,i,null,s,o),dr(h,t.ssFallback)):h.resolve(!1,!0)}function xg(t,e,n,i,r,s,o,a,{p:l,um:u,o:{createElement:c}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:v,isInFallback:m,isHydrating:p}=f;if(v)f.pendingBranch=h,on(h,v)?(l(v,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(p||(l(g,d,n,i,r,null,s,o,a),dr(f,d)))):(f.pendingId=ul++,p?(f.isHydrating=!1,f.activeBranch=v):u(v,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=c("div"),m?(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,d,n,i,r,null,s,o,a),dr(f,d))):g&&on(h,g)?(l(g,h,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&on(h,g))l(g,h,n,i,r,f,s,o,a),dr(f,h);else if(rs(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=ul++,l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:S,pendingId:_}=f;S>0?setTimeout(()=>{f.pendingId===_&&f.fallback(d)},S):S===0&&f.fallback(d)}}function rc(t,e,n,i,r,s,o,a,l,u,c=!1){const{p:f,m:h,um:d,n:g,o:{parentNode:v,remove:m}}=u;let p;const S=Mg(t);S&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const _=t.props?Ih(t.props.timeout):void 0,M=s,R={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:ul++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(T=!1,C=!1){const{vnode:I,activeBranch:E,pendingBranch:y,pendingId:F,effects:O,parentComponent:L,container:K}=R;let Q=!1;R.isHydrating?R.isHydrating=!1:T||(Q=E&&y.transition&&y.transition.mode==="out-in",Q&&(E.transition.afterLeave=()=>{F===R.pendingId&&(h(y,K,s===M?g(E):s,0),cl(O))}),E&&(v(E.el)!==R.hiddenContainer&&(s=g(E)),d(E,L,R,!0)),Q||h(y,K,s,0)),dr(R,y),R.pendingBranch=null,R.isInFallback=!1;let W=R.parent,te=!1;for(;W;){if(W.pendingBranch){W.effects.push(...O),te=!0;break}W=W.parent}!te&&!Q&&cl(O),R.effects=[],S&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!C&&e.resolve()),rs(I,"onResolve")},fallback(T){if(!R.pendingBranch)return;const{vnode:C,activeBranch:I,parentComponent:E,container:y,namespace:F}=R;rs(C,"onFallback");const O=g(I),L=()=>{R.isInFallback&&(f(null,T,y,O,E,null,F,a,l),dr(R,T))},K=T.transition&&T.transition.mode==="out-in";K&&(I.transition.afterLeave=L),R.isInFallback=!0,d(I,E,null,!0),K||L()},move(T,C,I){R.activeBranch&&h(R.activeBranch,T,C,I),R.container=T},next(){return R.activeBranch&&g(R.activeBranch)},registerDep(T,C){const I=!!R.pendingBranch;I&&R.deps++;const E=T.vnode.el;T.asyncDep.catch(y=>{Pr(y,T,0)}).then(y=>{if(T.isUnmounted||R.isUnmounted||R.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:F}=T;_l(T,y,!1),E&&(F.el=E);const O=!E&&T.subTree.el;C(T,F,v(E||T.subTree.el),E?null:g(T.subTree),R,o,l),O&&m(O),ic(T,F.el),I&&--R.deps===0&&R.resolve()})},unmount(T,C){R.isUnmounted=!0,R.activeBranch&&d(R.activeBranch,n,T,C),R.pendingBranch&&d(R.pendingBranch,n,T,C)}};return R}function yg(t,e,n,i,r,s,o,a,l){const u=e.suspense=rc(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),c=l(t,u.pendingBranch=e.ssContent,n,u,s,o);return u.deps===0&&u.resolve(!1,!0),c}function Sg(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=jc(i?n.default:n),t.ssFallback=i?jc(n.fallback):lt(Gt)}function jc(t){let e;if(Ie(t)){const n=Mr&&t._c;n&&(t._d=!1,Rn()),t=t(),n&&(t._d=!0,e=Jt,Nd())}return Pe(t)&&(t=hg(t)),t=Yt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function fd(t,e){e&&e.pendingBranch?Pe(t)?e.effects.push(...t):e.effects.push(t):cl(t)}function dr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,ic(i,r))}function Mg(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Eg=Symbol.for("v-scx"),Tg=()=>Wt(Eg);function Aw(t,e){return sc(t,null,e)}const Ds={};function si(t,e,n){return sc(t,e,n)}function sc(t,e,{immediate:n,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=rt){if(e&&s){const T=e;e=(...C)=>{T(...C),R()}}const l=dt,u=T=>i===!0?T:or(T,i===!1?1:void 0);let c,f=!1,h=!1;if(At(t)?(c=()=>t.value,f=xo(t)):$r(t)?(c=()=>u(t),f=!0):Pe(t)?(h=!0,f=t.some(T=>$r(T)||xo(T)),c=()=>t.map(T=>{if(At(T))return T.value;if($r(T))return u(T);if(Ie(T))return ri(T,l,2)})):Ie(t)?e?c=()=>ri(t,l,2):c=()=>(d&&d(),en(t,l,3,[g])):c=Zt,e&&i){const T=c;c=()=>or(T())}let d,g=T=>{d=_.onStop=()=>{ri(T,l,4),d=_.onStop=void 0}},v;if(vs)if(g=Zt,e?n&&en(e,l,3,[c(),h?[]:void 0,g]):c(),r==="sync"){const T=Tg();v=T.__watcherHandles||(T.__watcherHandles=[])}else return Zt;let m=h?new Array(t.length).fill(Ds):Ds;const p=()=>{if(!(!_.active||!_.dirty))if(e){const T=_.run();(i||f||(h?T.some((C,I)=>li(C,m[I])):li(T,m)))&&(d&&d(),en(e,l,3,[T,m===Ds?void 0:h&&m[0]===Ds?[]:m,g]),m=T)}else _.run()};p.allowRecurse=!!e;let S;r==="sync"?S=p:r==="post"?S=()=>vt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),S=()=>Vo(p));const _=new Yl(c,Zt,S),M=Fh(),R=()=>{_.stop(),M&&$l(M.effects,_)};return e?n?p():m=_.run():r==="post"?vt(_.run.bind(_),l&&l.suspense):_.run(),v&&v.push(R),R}function bg(t,e,n){const i=this.proxy,r=at(t)?t.includes(".")?hd(i,t):()=>i[t]:t.bind(i,i);let s;Ie(e)?s=e:(s=e.handler,n=e);const o=_s(this),a=sc(r,s.bind(i),n);return o(),a}function hd(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function or(t,e=1/0,n){if(e<=0||!tt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,At(t))or(t.value,e,n);else if(Pe(t))for(let i=0;i<t.length;i++)or(t[i],e,n);else if(wh(t)||ur(t))t.forEach(i=>{or(i,e,n)});else if(Ph(t))for(const i in t)or(t[i],e,n);return t}function fn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(fi(),en(l,n,8,[t.el,a,t,e]),hi())}}const Zn=Symbol("_leaveCb"),Us=Symbol("_enterCb");function Ag(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qo(()=>{t.isMounted=!0}),$o(()=>{t.isUnmounting=!0}),t}const $t=[Function,Array],dd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},wg={name:"BaseTransition",props:dd,setup(t,{slots:e}){const n=uc(),i=Ag();return()=>{const r=e.default&&md(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const h of r)if(h.type!==Gt){s=h;break}}const o=qe(t),{mode:a}=o;if(i.isLeaving)return ua(s);const l=Yc(s);if(!l)return ua(s);const u=fl(l,o,i,n);Mo(l,u);const c=n.subTree,f=c&&Yc(c);if(f&&f.type!==Gt&&!on(l,f)){const h=fl(f,o,i,n);if(Mo(f,h),a==="out-in"&&l.type!==Gt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},ua(s);a==="in-out"&&l.type!==Gt&&(h.delayLeave=(d,g,v)=>{const m=pd(i,f);m[String(f.key)]=f,d[Zn]=()=>{g(),d[Zn]=void 0,delete u.delayedLeave},u.delayedLeave=v})}return s}}},Rg=wg;function pd(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function fl(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:f,onLeave:h,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:v,onAppear:m,onAfterAppear:p,onAppearCancelled:S}=e,_=String(t.key),M=pd(n,t),R=(I,E)=>{I&&en(I,i,9,E)},T=(I,E)=>{const y=E[1];R(I,E),Pe(I)?I.every(F=>F.length<=1)&&y():I.length<=1&&y()},C={mode:s,persisted:o,beforeEnter(I){let E=a;if(!n.isMounted)if(r)E=v||a;else return;I[Zn]&&I[Zn](!0);const y=M[_];y&&on(t,y)&&y.el[Zn]&&y.el[Zn](),R(E,[I])},enter(I){let E=l,y=u,F=c;if(!n.isMounted)if(r)E=m||l,y=p||u,F=S||c;else return;let O=!1;const L=I[Us]=K=>{O||(O=!0,K?R(F,[I]):R(y,[I]),C.delayedLeave&&C.delayedLeave(),I[Us]=void 0)};E?T(E,[I,L]):L()},leave(I,E){const y=String(t.key);if(I[Us]&&I[Us](!0),n.isUnmounting)return E();R(f,[I]);let F=!1;const O=I[Zn]=L=>{F||(F=!0,E(),L?R(g,[I]):R(d,[I]),I[Zn]=void 0,M[y]===t&&delete M[y])};M[y]=t,h?T(h,[I,O]):O()},clone(I){return fl(I,e,n,i)}};return C}function ua(t){if(gs(t))return t=Dn(t),t.children=null,t}function Yc(t){if(!gs(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ie(n.default))return n.default()}}function Mo(t,e){t.shapeFlag&6&&t.component?Mo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function md(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===zt?(o.patchFlag&128&&r++,i=i.concat(md(o.children,e,a))):(e||o.type!==Gt)&&i.push(a!=null?Dn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function ms(t,e){return Ie(t)?ht({name:t.name},e,{setup:t}):t}const pr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Kc(t){Ie(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,u,c=0;const f=()=>(c++,l=null,h()),h=()=>{let d;return l||(d=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((v,m)=>{a(g,()=>v(f()),()=>m(g),c+1)});throw g}).then(g=>d!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),u=g,g)))};return ms({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const d=dt;if(u)return()=>fa(u,d);const g=S=>{l=null,Pr(S,d,13,!i)};if(o&&d.suspense||vs)return h().then(S=>()=>fa(S,d)).catch(S=>(g(S),()=>i?lt(i,{error:S}):null));const v=st(!1),m=st(),p=st(!!r);return r&&setTimeout(()=>{p.value=!1},r),s!=null&&setTimeout(()=>{if(!v.value&&!m.value){const S=new Error(`Async component timed out after ${s}ms.`);g(S),m.value=S}},s),h().then(()=>{v.value=!0,d.parent&&gs(d.parent.vnode)&&(d.parent.effect.dirty=!0,Vo(d.parent.update))}).catch(S=>{g(S),m.value=S}),()=>{if(v.value&&u)return fa(u,d);if(m.value&&i)return lt(i,{error:m.value});if(n&&!p.value)return lt(n)}}})}function fa(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=lt(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const gs=t=>t.type.__isKeepAlive,Cg={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=uc(),i=n.ctx;if(!i.renderer)return()=>{const S=e.default&&e.default();return S&&S.length===1?S[0]:S};const r=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:f}}}=i,h=f("div");i.activate=(S,_,M,R,T)=>{const C=S.component;u(S,_,M,0,a),l(C.vnode,S,_,M,C,a,R,S.slotScopeIds,T),vt(()=>{C.isDeactivated=!1,C.a&&qr(C.a);const I=S.props&&S.props.onVnodeMounted;I&&Lt(I,C.parent,S)},a)},i.deactivate=S=>{const _=S.component;u(S,h,null,1,a),vt(()=>{_.da&&qr(_.da);const M=S.props&&S.props.onVnodeUnmounted;M&&Lt(M,_.parent,S),_.isDeactivated=!0},a)};function d(S){ha(S),c(S,n,a,!0)}function g(S){r.forEach((_,M)=>{const R=vl(_.type);R&&(!S||!S(R))&&v(M)})}function v(S){const _=r.get(S);!o||!on(_,o)?d(_):o&&ha(o),r.delete(S),s.delete(S)}si(()=>[t.include,t.exclude],([S,_])=>{S&&g(M=>Vr(S,M)),_&&g(M=>!Vr(_,M))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&r.set(m,da(n.subTree))};return qo(p),_d(p),$o(()=>{r.forEach(S=>{const{subTree:_,suspense:M}=n,R=da(_);if(S.type===R.type&&S.key===R.key){ha(R);const T=R.component.da;T&&vt(T,M);return}d(S)})}),()=>{if(m=null,!e.default)return null;const S=e.default(),_=S[0];if(S.length>1)return o=null,S;if(!ss(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let M=da(_);const R=M.type,T=vl(pr(M)?M.type.__asyncResolved||{}:R),{include:C,exclude:I,max:E}=t;if(C&&(!T||!Vr(C,T))||I&&T&&Vr(I,T))return o=M,_;const y=M.key==null?R:M.key,F=r.get(y);return M.el&&(M=Dn(M),_.shapeFlag&128&&(_.ssContent=M)),m=y,F?(M.el=F.el,M.component=F.component,M.transition&&Mo(M,M.transition),M.shapeFlag|=512,s.delete(y),s.add(y)):(s.add(y),E&&s.size>parseInt(E,10)&&v(s.values().next().value)),M.shapeFlag|=256,o=M,cd(_.type)?_:M}}},Pg=Cg;function Vr(t,e){return Pe(t)?t.some(n=>Vr(n,e)):at(t)?t.split(",").includes(e):vm(t)?t.test(e):!1}function Lg(t,e){gd(t,"a",e)}function Ig(t,e){gd(t,"da",e)}function gd(t,e,n=dt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Xo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)gs(r.parent.vnode)&&Dg(i,e,n,r),r=r.parent}}function Dg(t,e,n,i){const r=Xo(e,t,i,!0);vd(()=>{$l(i[e],r)},n)}function ha(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function da(t){return t.shapeFlag&128?t.ssContent:t}function Xo(t,e,n=dt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;fi();const a=_s(n),l=en(e,n,t,o);return a(),hi(),l});return i?r.unshift(s):r.push(s),s}}const On=t=>(e,n=dt)=>(!vs||t==="sp")&&Xo(t,(...i)=>e(...i),n),Ug=On("bm"),qo=On("m"),Ng=On("bu"),_d=On("u"),$o=On("bum"),vd=On("um"),Og=On("sp"),Fg=On("rtg"),Bg=On("rtc");function xd(t,e=dt){Xo("ec",t,e)}const hl=t=>t?zd(t)?fc(t)||t.proxy:hl(t.parent):null,jr=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hl(t.parent),$root:t=>hl(t.root),$emit:t=>t.emit,$options:t=>oc(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Vo(t.update)}),$nextTick:t=>t.n||(t.n=ps.bind(t.proxy)),$watch:t=>bg.bind(t)}),pa=(t,e)=>t!==rt&&!t.__isScriptSetup&&We(t,e),Hg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(pa(i,e))return o[e]=1,i[e];if(r!==rt&&We(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&We(u,e))return o[e]=3,s[e];if(n!==rt&&We(n,e))return o[e]=4,n[e];dl&&(o[e]=0)}}const c=jr[e];let f,h;if(c)return e==="$attrs"&&Nt(t.attrs,"get",""),c(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==rt&&We(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,We(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return pa(r,e)?(r[e]=n,!0):i!==rt&&We(i,e)?(i[e]=n,!0):We(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==rt&&We(t,o)||pa(e,o)||(a=s[0])&&We(a,o)||We(i,o)||We(jr,o)||We(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:We(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zc(t){return Pe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dl=!0;function kg(t){const e=oc(t),n=t.proxy,i=t.ctx;dl=!1,e.beforeCreate&&Jc(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:_,unmounted:M,render:R,renderTracked:T,renderTriggered:C,errorCaptured:I,serverPrefetch:E,expose:y,inheritAttrs:F,components:O,directives:L,filters:K}=e;if(u&&zg(u,i,null),o)for(const te in o){const H=o[te];Ie(H)&&(i[te]=H.bind(n))}if(r){const te=r.call(n,n);tt(te)&&(t.data=di(te))}if(dl=!0,s)for(const te in s){const H=s[te],fe=Ie(H)?H.bind(n,n):Ie(H.get)?H.get.bind(n,n):Zt,he=!Ie(H)&&Ie(H.set)?H.set.bind(n):Zt,Ee=an({get:fe,set:he});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Re=>Ee.value=Re})}if(a)for(const te in a)yd(a[te],i,n,te);if(l){const te=Ie(l)?l.call(n):l;Reflect.ownKeys(te).forEach(H=>{gr(H,te[H])})}c&&Jc(c,t,"c");function W(te,H){Pe(H)?H.forEach(fe=>te(fe.bind(n))):H&&te(H.bind(n))}if(W(Ug,f),W(qo,h),W(Ng,d),W(_d,g),W(Lg,v),W(Ig,m),W(xd,I),W(Bg,T),W(Fg,C),W($o,S),W(vd,M),W(Og,E),Pe(y))if(y.length){const te=t.exposed||(t.exposed={});y.forEach(H=>{Object.defineProperty(te,H,{get:()=>n[H],set:fe=>n[H]=fe})})}else t.exposed||(t.exposed={});R&&t.render===Zt&&(t.render=R),F!=null&&(t.inheritAttrs=F),O&&(t.components=O),L&&(t.directives=L)}function zg(t,e,n=Zt){Pe(t)&&(t=pl(t));for(const i in t){const r=t[i];let s;tt(r)?"default"in r?s=Wt(r.from||i,r.default,!0):s=Wt(r.from||i):s=Wt(r),At(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Jc(t,e,n){en(Pe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function yd(t,e,n,i){const r=i.includes(".")?hd(n,i):()=>n[i];if(at(t)){const s=e[t];Ie(s)&&si(r,s)}else if(Ie(t))si(r,t.bind(n));else if(tt(t))if(Pe(t))t.forEach(s=>yd(s,e,n,i));else{const s=Ie(t.handler)?t.handler.bind(n):e[t.handler];Ie(s)&&si(r,s,t)}}function oc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>Eo(l,u,o,!0)),Eo(l,e,o)),tt(e)&&s.set(e,l),l}function Eo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Eo(t,s,n,!0),r&&r.forEach(o=>Eo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Vg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Vg={data:Qc,props:eu,emits:eu,methods:Gr,computed:Gr,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Gr,directives:Gr,watch:Wg,provide:Qc,inject:Gg};function Qc(t,e){return e?t?function(){return ht(Ie(t)?t.call(this,this):t,Ie(e)?e.call(this,this):e)}:e:t}function Gg(t,e){return Gr(pl(t),pl(e))}function pl(t){if(Pe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Gr(t,e){return t?ht(Object.create(null),t,e):e}function eu(t,e){return t?Pe(t)&&Pe(e)?[...new Set([...t,...e])]:ht(Object.create(null),Zc(t),Zc(e??{})):e}function Wg(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const i in e)n[i]=Rt(t[i],e[i]);return n}function Sd(){return{app:null,config:{isNativeTag:gm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xg=0;function qg(t,e){return function(i,r=null){Ie(i)||(i=ht({},i)),r!=null&&!tt(r)&&(r=null);const s=Sd(),o=new WeakSet;let a=!1;const l=s.app={_uid:Xg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Gd,get config(){return s.config},set config(u){},use(u,...c){return o.has(u)||(u&&Ie(u.install)?(o.add(u),u.install(l,...c)):Ie(u)&&(o.add(u),u(l,...c))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,c){return c?(s.components[u]=c,l):s.components[u]},directive(u,c){return c?(s.directives[u]=c,l):s.directives[u]},mount(u,c,f){if(!a){const h=lt(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),c&&e?e(h,u):t(h,u,f),a=!0,l._container=u,u.__vue_app__=l,fc(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,c){return s.provides[u]=c,l},runWithContext(u){const c=mr;mr=l;try{return u()}finally{mr=c}}};return l}}let mr=null;function gr(t,e){if(dt){let n=dt.provides;const i=dt.parent&&dt.parent.provides;i===n&&(n=dt.provides=Object.create(i)),n[t]=e}}function Wt(t,e,n=!1){const i=dt||Vt;if(i||mr){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:mr._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ie(e)?e.call(i&&i.proxy):e}}function Md(){return!!(dt||Vt||mr)}const Ed={},Td=()=>Object.create(Ed),bd=t=>Object.getPrototypeOf(t)===Ed;function $g(t,e,n,i=!1){const r={},s=Td();t.propsDefaults=Object.create(null),Ad(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:ds(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function jg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=qe(r),[l]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(Go(t.emitsOptions,h))continue;const d=e[h];if(l)if(We(s,h))d!==s[h]&&(s[h]=d,u=!0);else{const g=xn(h);r[g]=ml(l,a,g,d,t,!1)}else d!==s[h]&&(s[h]=d,u=!0)}}}else{Ad(t,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!We(e,f)&&((c=Cr(f))===f||!We(e,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=ml(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!We(e,f))&&(delete s[f],u=!0)}u&&Ln(t.attrs,"set","")}function Ad(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fr(l))continue;const u=e[l];let c;r&&We(r,c=xn(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:Go(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=qe(n),u=a||rt;for(let c=0;c<s.length;c++){const f=s[c];n[f]=ml(r,l,f,u[f],t,!We(u,f))}}return o}function ml(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=We(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ie(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=_s(r);i=u[n]=l.call(null,e),c()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Cr(n))&&(i=!0))}return i}function wd(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ie(t)){const c=f=>{l=!0;const[h,d]=wd(f,e,!0);ht(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!l)return tt(t)&&i.set(t,cr),cr;if(Pe(s))for(let c=0;c<s.length;c++){const f=xn(s[c]);tu(f)&&(o[f]=rt)}else if(s)for(const c in s){const f=xn(c);if(tu(f)){const h=s[c],d=o[f]=Pe(h)||Ie(h)?{type:h}:ht({},h);if(d){const g=ru(Boolean,d.type),v=ru(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||We(d,"default"))&&a.push(f)}}}const u=[o,a];return tt(t)&&i.set(t,u),u}function tu(t){return t[0]!=="$"&&!fr(t)}function nu(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function iu(t,e){return nu(t)===nu(e)}function ru(t,e){return Pe(e)?e.findIndex(n=>iu(n,t)):Ie(e)&&iu(e,t)?0:-1}const Rd=t=>t[0]==="_"||t==="$stable",ac=t=>Pe(t)?t.map(Yt):[Yt(t)],Yg=(t,e,n)=>{if(e._n)return e;const i=sd((...r)=>ac(e(...r)),n);return i._c=!1,i},Cd=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Rd(r))continue;const s=t[r];if(Ie(s))e[r]=Yg(r,s,i);else if(s!=null){const o=ac(s);e[r]=()=>o}}},Pd=(t,e)=>{const n=ac(e);t.slots.default=()=>n},Kg=(t,e)=>{const n=t.slots=Td();if(t.vnode.shapeFlag&32){const i=e._;i?(ht(n,e),Lh(n,"_",i,!0)):Cd(e,n)}else e&&Pd(t,e)},Zg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=rt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(ht(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Cd(e,r)),o=e}else e&&(Pd(t,e),o={default:1});if(s)for(const a in r)!Rd(a)&&o[a]==null&&delete r[a]};function To(t,e,n,i,r=!1){if(Pe(t)){t.forEach((h,d)=>To(h,e&&(Pe(e)?e[d]:e),n,i,r));return}if(pr(i)&&!r)return;const s=i.shapeFlag&4?fc(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,u=e&&e.r,c=a.refs===rt?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(at(u)?(c[u]=null,We(f,u)&&(f[u]=null)):At(u)&&(u.value=null)),Ie(l))ri(l,a,12,[o,c]);else{const h=at(l),d=At(l);if(h||d){const g=()=>{if(t.f){const v=h?We(f,l)?f[l]:c[l]:l.value;r?Pe(v)&&$l(v,s):Pe(v)?v.includes(s)||v.push(s):h?(c[l]=[s],We(f,l)&&(f[l]=c[l])):(l.value=[s],t.k&&(c[t.k]=l.value))}else h?(c[l]=o,We(f,l)&&(f[l]=o)):d&&(l.value=o,t.k&&(c[t.k]=o))};o?(g.id=-1,vt(g,n)):g()}}}let kn=!1;const Jg=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Qg=t=>t.namespaceURI.includes("MathML"),Ns=t=>{if(Jg(t))return"svg";if(Qg(t))return"mathml"},Os=t=>t.nodeType===8;function e_(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:u}}=t,c=(_,M)=>{if(!M.hasChildNodes()){n(null,_,M),yo(),M._vnode=_;return}kn=!1,f(M.firstChild,_,null,null,null),yo(),M._vnode=_,kn&&console.error("Hydration completed but contains mismatches.")},f=(_,M,R,T,C,I=!1)=>{I=I||!!M.dynamicChildren;const E=Os(_)&&_.data==="[",y=()=>v(_,M,R,T,C,E),{type:F,ref:O,shapeFlag:L,patchFlag:K}=M;let Q=_.nodeType;M.el=_,K===-2&&(I=!1,M.dynamicChildren=null);let W=null;switch(F){case Sr:Q!==3?M.children===""?(l(M.el=r(""),o(_),_),W=_):W=y():(_.data!==M.children&&(kn=!0,_.data=M.children),W=s(_));break;case Gt:S(_)?(W=s(_),p(M.el=_.content.firstChild,_,R)):Q!==8||E?W=y():W=s(_);break;case uo:if(E&&(_=s(_),Q=_.nodeType),Q===1||Q===3){W=_;const te=!M.children.length;for(let H=0;H<M.staticCount;H++)te&&(M.children+=W.nodeType===1?W.outerHTML:W.data),H===M.staticCount-1&&(M.anchor=W),W=s(W);return E?s(W):W}else y();break;case zt:E?W=g(_,M,R,T,C,I):W=y();break;default:if(L&1)(Q!==1||M.type.toLowerCase()!==_.tagName.toLowerCase())&&!S(_)?W=y():W=h(_,M,R,T,C,I);else if(L&6){M.slotScopeIds=C;const te=o(_);if(E?W=m(_):Os(_)&&_.data==="teleport start"?W=m(_,_.data,"teleport end"):W=s(_),e(M,te,null,R,T,Ns(te),I),pr(M)){let H;E?(H=lt(zt),H.anchor=W?W.previousSibling:te.lastChild):H=_.nodeType===3?kd(""):lt("div"),H.el=_,M.component.subTree=H}}else L&64?Q!==8?W=y():W=M.type.hydrate(_,M,R,T,C,I,t,d):L&128&&(W=M.type.hydrate(_,M,R,T,Ns(o(_)),C,I,t,f))}return O!=null&&To(O,null,T,M),W},h=(_,M,R,T,C,I)=>{I=I||!!M.dynamicChildren;const{type:E,props:y,patchFlag:F,shapeFlag:O,dirs:L,transition:K}=M,Q=E==="input"||E==="option";if(Q||F!==-1){L&&fn(M,null,R,"created");let W=!1;if(S(_)){W=Id(T,K)&&R&&R.vnode.props&&R.vnode.props.appear;const H=_.content.firstChild;W&&K.beforeEnter(H),p(H,_,R),M.el=_=H}if(O&16&&!(y&&(y.innerHTML||y.textContent))){let H=d(_.firstChild,M,_,R,T,C,I);for(;H;){kn=!0;const fe=H;H=H.nextSibling,a(fe)}}else O&8&&_.textContent!==M.children&&(kn=!0,_.textContent=M.children);if(y)if(Q||!I||F&48)for(const H in y)(Q&&(H.endsWith("value")||H==="indeterminate")||fs(H)&&!fr(H)||H[0]===".")&&i(_,H,null,y[H],void 0,void 0,R);else y.onClick&&i(_,"onClick",null,y.onClick,void 0,void 0,R);let te;(te=y&&y.onVnodeBeforeMount)&&Lt(te,R,M),L&&fn(M,null,R,"beforeMount"),((te=y&&y.onVnodeMounted)||L||W)&&fd(()=>{te&&Lt(te,R,M),W&&K.enter(_),L&&fn(M,null,R,"mounted")},T)}return _.nextSibling},d=(_,M,R,T,C,I,E)=>{E=E||!!M.dynamicChildren;const y=M.children,F=y.length;for(let O=0;O<F;O++){const L=E?y[O]:y[O]=Yt(y[O]);if(_)_=f(_,L,T,C,I,E);else{if(L.type===Sr&&!L.children)continue;kn=!0,n(null,L,R,null,T,C,Ns(R),I)}}return _},g=(_,M,R,T,C,I)=>{const{slotScopeIds:E}=M;E&&(C=C?C.concat(E):E);const y=o(_),F=d(s(_),M,y,R,T,C,I);return F&&Os(F)&&F.data==="]"?s(M.anchor=F):(kn=!0,l(M.anchor=u("]"),y,F),F)},v=(_,M,R,T,C,I)=>{if(kn=!0,M.el=null,I){const F=m(_);for(;;){const O=s(_);if(O&&O!==F)a(O);else break}}const E=s(_),y=o(_);return a(_),n(null,M,y,E,R,T,Ns(y),C),E},m=(_,M="[",R="]")=>{let T=0;for(;_;)if(_=s(_),_&&Os(_)&&(_.data===M&&T++,_.data===R)){if(T===0)return s(_);T--}return _},p=(_,M,R)=>{const T=M.parentNode;T&&T.replaceChild(_,M);let C=R;for(;C;)C.vnode.el===M&&(C.vnode.el=C.subTree.el=_),C=C.parent},S=_=>_.nodeType===1&&_.tagName.toLowerCase()==="template";return[c,f]}const vt=fd;function t_(t){return Ld(t)}function n_(t){return Ld(t,e_)}function Ld(t,e){const n=Dh();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=Zt,insertStaticContent:g}=t,v=(w,P,z,q=null,X=null,oe=null,b=void 0,x=null,U=!!P.dynamicChildren)=>{if(w===P)return;w&&!on(w,P)&&(q=B(w),Re(w,X,oe,!0),w=null),P.patchFlag===-2&&(U=!1,P.dynamicChildren=null);const{type:N,ref:G,shapeFlag:Y}=P;switch(N){case Sr:m(w,P,z,q);break;case Gt:p(w,P,z,q);break;case uo:w==null&&S(P,z,q,b);break;case zt:O(w,P,z,q,X,oe,b,x,U);break;default:Y&1?R(w,P,z,q,X,oe,b,x,U):Y&6?L(w,P,z,q,X,oe,b,x,U):(Y&64||Y&128)&&N.process(w,P,z,q,X,oe,b,x,U,D)}G!=null&&X&&To(G,w&&w.ref,oe,P||w,!P)},m=(w,P,z,q)=>{if(w==null)i(P.el=a(P.children),z,q);else{const X=P.el=w.el;P.children!==w.children&&u(X,P.children)}},p=(w,P,z,q)=>{w==null?i(P.el=l(P.children||""),z,q):P.el=w.el},S=(w,P,z,q)=>{[w.el,w.anchor]=g(w.children,P,z,q,w.el,w.anchor)},_=({el:w,anchor:P},z,q)=>{let X;for(;w&&w!==P;)X=h(w),i(w,z,q),w=X;i(P,z,q)},M=({el:w,anchor:P})=>{let z;for(;w&&w!==P;)z=h(w),r(w),w=z;r(P)},R=(w,P,z,q,X,oe,b,x,U)=>{P.type==="svg"?b="svg":P.type==="math"&&(b="mathml"),w==null?T(P,z,q,X,oe,b,x,U):E(w,P,X,oe,b,x,U)},T=(w,P,z,q,X,oe,b,x)=>{let U,N;const{props:G,shapeFlag:Y,transition:ae,dirs:ne}=w;if(U=w.el=o(w.type,oe,G&&G.is,G),Y&8?c(U,w.children):Y&16&&I(w.children,U,null,q,X,ma(w,oe),b,x),ne&&fn(w,null,q,"created"),C(U,w,w.scopeId,b,q),G){for(const ye in G)ye!=="value"&&!fr(ye)&&s(U,ye,null,G[ye],oe,w.children,q,X,pe);"value"in G&&s(U,"value",null,G.value,oe),(N=G.onVnodeBeforeMount)&&Lt(N,q,w)}ne&&fn(w,null,q,"beforeMount");const se=Id(X,ae);se&&ae.beforeEnter(U),i(U,P,z),((N=G&&G.onVnodeMounted)||se||ne)&&vt(()=>{N&&Lt(N,q,w),se&&ae.enter(U),ne&&fn(w,null,q,"mounted")},X)},C=(w,P,z,q,X)=>{if(z&&d(w,z),q)for(let oe=0;oe<q.length;oe++)d(w,q[oe]);if(X){let oe=X.subTree;if(P===oe){const b=X.vnode;C(w,b,b.scopeId,b.slotScopeIds,X.parent)}}},I=(w,P,z,q,X,oe,b,x,U=0)=>{for(let N=U;N<w.length;N++){const G=w[N]=x?Jn(w[N]):Yt(w[N]);v(null,G,P,z,q,X,oe,b,x)}},E=(w,P,z,q,X,oe,b)=>{const x=P.el=w.el;let{patchFlag:U,dynamicChildren:N,dirs:G}=P;U|=w.patchFlag&16;const Y=w.props||rt,ae=P.props||rt;let ne;if(z&&_i(z,!1),(ne=ae.onVnodeBeforeUpdate)&&Lt(ne,z,P,w),G&&fn(P,w,z,"beforeUpdate"),z&&_i(z,!0),N?y(w.dynamicChildren,N,x,z,q,ma(P,X),oe):b||H(w,P,x,null,z,q,ma(P,X),oe,!1),U>0){if(U&16)F(x,P,Y,ae,z,q,X);else if(U&2&&Y.class!==ae.class&&s(x,"class",null,ae.class,X),U&4&&s(x,"style",Y.style,ae.style,X),U&8){const se=P.dynamicProps;for(let ye=0;ye<se.length;ye++){const le=se[ye],xe=Y[le],De=ae[le];(De!==xe||le==="value")&&s(x,le,xe,De,X,w.children,z,q,pe)}}U&1&&w.children!==P.children&&c(x,P.children)}else!b&&N==null&&F(x,P,Y,ae,z,q,X);((ne=ae.onVnodeUpdated)||G)&&vt(()=>{ne&&Lt(ne,z,P,w),G&&fn(P,w,z,"updated")},q)},y=(w,P,z,q,X,oe,b)=>{for(let x=0;x<P.length;x++){const U=w[x],N=P[x],G=U.el&&(U.type===zt||!on(U,N)||U.shapeFlag&70)?f(U.el):z;v(U,N,G,null,q,X,oe,b,!0)}},F=(w,P,z,q,X,oe,b)=>{if(z!==q){if(z!==rt)for(const x in z)!fr(x)&&!(x in q)&&s(w,x,z[x],null,b,P.children,X,oe,pe);for(const x in q){if(fr(x))continue;const U=q[x],N=z[x];U!==N&&x!=="value"&&s(w,x,N,U,b,P.children,X,oe,pe)}"value"in q&&s(w,"value",z.value,q.value,b)}},O=(w,P,z,q,X,oe,b,x,U)=>{const N=P.el=w?w.el:a(""),G=P.anchor=w?w.anchor:a("");let{patchFlag:Y,dynamicChildren:ae,slotScopeIds:ne}=P;ne&&(x=x?x.concat(ne):ne),w==null?(i(N,z,q),i(G,z,q),I(P.children||[],z,G,X,oe,b,x,U)):Y>0&&Y&64&&ae&&w.dynamicChildren?(y(w.dynamicChildren,ae,z,X,oe,b,x),(P.key!=null||X&&P===X.subTree)&&Dd(w,P,!0)):H(w,P,z,G,X,oe,b,x,U)},L=(w,P,z,q,X,oe,b,x,U)=>{P.slotScopeIds=x,w==null?P.shapeFlag&512?X.ctx.activate(P,z,q,b,U):K(P,z,q,X,oe,b,U):Q(w,P,U)},K=(w,P,z,q,X,oe,b)=>{const x=w.component=c_(w,q,X);if(gs(w)&&(x.ctx.renderer=D),u_(x),x.asyncDep){if(X&&X.registerDep(x,W),!w.el){const U=x.subTree=lt(Gt);p(null,U,P,z)}}else W(x,w,P,z,X,oe,b)},Q=(w,P,z)=>{const q=P.component=w.component;if(mg(w,P,z))if(q.asyncDep&&!q.asyncResolved){te(q,P,z);return}else q.next=P,cg(q.update),q.effect.dirty=!0,q.update();else P.el=w.el,q.vnode=P},W=(w,P,z,q,X,oe,b)=>{const x=()=>{if(w.isMounted){let{next:G,bu:Y,u:ae,parent:ne,vnode:se}=w;{const we=Ud(w);if(we){G&&(G.el=se.el,te(w,G,b)),we.asyncDep.then(()=>{w.isUnmounted||x()});return}}let ye=G,le;_i(w,!1),G?(G.el=se.el,te(w,G,b)):G=se,Y&&qr(Y),(le=G.props&&G.props.onVnodeBeforeUpdate)&&Lt(le,ne,G,se),_i(w,!0);const xe=ca(w),De=w.subTree;w.subTree=xe,v(De,xe,f(De.el),B(De),w,X,oe),G.el=xe.el,ye===null&&ic(w,xe.el),ae&&vt(ae,X),(le=G.props&&G.props.onVnodeUpdated)&&vt(()=>Lt(le,ne,G,se),X)}else{let G;const{el:Y,props:ae}=P,{bm:ne,m:se,parent:ye}=w,le=pr(P);if(_i(w,!1),ne&&qr(ne),!le&&(G=ae&&ae.onVnodeBeforeMount)&&Lt(G,ye,P),_i(w,!0),Y&&ge){const xe=()=>{w.subTree=ca(w),ge(Y,w.subTree,w,X,null)};le?P.type.__asyncLoader().then(()=>!w.isUnmounted&&xe()):xe()}else{const xe=w.subTree=ca(w);v(null,xe,z,q,w,X,oe),P.el=xe.el}if(se&&vt(se,X),!le&&(G=ae&&ae.onVnodeMounted)){const xe=P;vt(()=>Lt(G,ye,xe),X)}(P.shapeFlag&256||ye&&pr(ye.vnode)&&ye.vnode.shapeFlag&256)&&w.a&&vt(w.a,X),w.isMounted=!0,P=z=q=null}},U=w.effect=new Yl(x,Zt,()=>Vo(N),w.scope),N=w.update=()=>{U.dirty&&U.run()};N.id=w.uid,_i(w,!0),N()},te=(w,P,z)=>{P.component=w;const q=w.vnode.props;w.vnode=P,w.next=null,jg(w,P.props,q,z),Zg(w,P.children,z),fi(),Xc(w),hi()},H=(w,P,z,q,X,oe,b,x,U=!1)=>{const N=w&&w.children,G=w?w.shapeFlag:0,Y=P.children,{patchFlag:ae,shapeFlag:ne}=P;if(ae>0){if(ae&128){he(N,Y,z,q,X,oe,b,x,U);return}else if(ae&256){fe(N,Y,z,q,X,oe,b,x,U);return}}ne&8?(G&16&&pe(N,X,oe),Y!==N&&c(z,Y)):G&16?ne&16?he(N,Y,z,q,X,oe,b,x,U):pe(N,X,oe,!0):(G&8&&c(z,""),ne&16&&I(Y,z,q,X,oe,b,x,U))},fe=(w,P,z,q,X,oe,b,x,U)=>{w=w||cr,P=P||cr;const N=w.length,G=P.length,Y=Math.min(N,G);let ae;for(ae=0;ae<Y;ae++){const ne=P[ae]=U?Jn(P[ae]):Yt(P[ae]);v(w[ae],ne,z,null,X,oe,b,x,U)}N>G?pe(w,X,oe,!0,!1,Y):I(P,z,q,X,oe,b,x,U,Y)},he=(w,P,z,q,X,oe,b,x,U)=>{let N=0;const G=P.length;let Y=w.length-1,ae=G-1;for(;N<=Y&&N<=ae;){const ne=w[N],se=P[N]=U?Jn(P[N]):Yt(P[N]);if(on(ne,se))v(ne,se,z,null,X,oe,b,x,U);else break;N++}for(;N<=Y&&N<=ae;){const ne=w[Y],se=P[ae]=U?Jn(P[ae]):Yt(P[ae]);if(on(ne,se))v(ne,se,z,null,X,oe,b,x,U);else break;Y--,ae--}if(N>Y){if(N<=ae){const ne=ae+1,se=ne<G?P[ne].el:q;for(;N<=ae;)v(null,P[N]=U?Jn(P[N]):Yt(P[N]),z,se,X,oe,b,x,U),N++}}else if(N>ae)for(;N<=Y;)Re(w[N],X,oe,!0),N++;else{const ne=N,se=N,ye=new Map;for(N=se;N<=ae;N++){const Ve=P[N]=U?Jn(P[N]):Yt(P[N]);Ve.key!=null&&ye.set(Ve.key,N)}let le,xe=0;const De=ae-se+1;let we=!1,Se=0;const Ue=new Array(De);for(N=0;N<De;N++)Ue[N]=0;for(N=ne;N<=Y;N++){const Ve=w[N];if(xe>=De){Re(Ve,X,oe,!0);continue}let Ce;if(Ve.key!=null)Ce=ye.get(Ve.key);else for(le=se;le<=ae;le++)if(Ue[le-se]===0&&on(Ve,P[le])){Ce=le;break}Ce===void 0?Re(Ve,X,oe,!0):(Ue[Ce-se]=N+1,Ce>=Se?Se=Ce:we=!0,v(Ve,P[Ce],z,null,X,oe,b,x,U),xe++)}const ke=we?i_(Ue):cr;for(le=ke.length-1,N=De-1;N>=0;N--){const Ve=se+N,Ce=P[Ve],k=Ve+1<G?P[Ve+1].el:q;Ue[N]===0?v(null,Ce,z,k,X,oe,b,x,U):we&&(le<0||N!==ke[le]?Ee(Ce,z,k,2):le--)}}},Ee=(w,P,z,q,X=null)=>{const{el:oe,type:b,transition:x,children:U,shapeFlag:N}=w;if(N&6){Ee(w.component.subTree,P,z,q);return}if(N&128){w.suspense.move(P,z,q);return}if(N&64){b.move(w,P,z,D);return}if(b===zt){i(oe,P,z);for(let Y=0;Y<U.length;Y++)Ee(U[Y],P,z,q);i(w.anchor,P,z);return}if(b===uo){_(w,P,z);return}if(q!==2&&N&1&&x)if(q===0)x.beforeEnter(oe),i(oe,P,z),vt(()=>x.enter(oe),X);else{const{leave:Y,delayLeave:ae,afterLeave:ne}=x,se=()=>i(oe,P,z),ye=()=>{Y(oe,()=>{se(),ne&&ne()})};ae?ae(oe,se,ye):ye()}else i(oe,P,z)},Re=(w,P,z,q=!1,X=!1)=>{const{type:oe,props:b,ref:x,children:U,dynamicChildren:N,shapeFlag:G,patchFlag:Y,dirs:ae}=w;if(x!=null&&To(x,null,z,w,!0),G&256){P.ctx.deactivate(w);return}const ne=G&1&&ae,se=!pr(w);let ye;if(se&&(ye=b&&b.onVnodeBeforeUnmount)&&Lt(ye,P,w),G&6)de(w.component,z,q);else{if(G&128){w.suspense.unmount(z,q);return}ne&&fn(w,null,P,"beforeUnmount"),G&64?w.type.remove(w,P,z,X,D,q):N&&(oe!==zt||Y>0&&Y&64)?pe(N,P,z,!1,!0):(oe===zt&&Y&384||!X&&G&16)&&pe(U,P,z),q&&Ge(w)}(se&&(ye=b&&b.onVnodeUnmounted)||ne)&&vt(()=>{ye&&Lt(ye,P,w),ne&&fn(w,null,P,"unmounted")},z)},Ge=w=>{const{type:P,el:z,anchor:q,transition:X}=w;if(P===zt){ee(z,q);return}if(P===uo){M(w);return}const oe=()=>{r(z),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(w.shapeFlag&1&&X&&!X.persisted){const{leave:b,delayLeave:x}=X,U=()=>b(z,oe);x?x(w.el,oe,U):U()}else oe()},ee=(w,P)=>{let z;for(;w!==P;)z=h(w),r(w),w=z;r(P)},de=(w,P,z)=>{const{bum:q,scope:X,update:oe,subTree:b,um:x}=w;q&&qr(q),X.stop(),oe&&(oe.active=!1,Re(b,w,P,z)),x&&vt(x,P),vt(()=>{w.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},pe=(w,P,z,q=!1,X=!1,oe=0)=>{for(let b=oe;b<w.length;b++)Re(w[b],P,z,q,X)},B=w=>w.shapeFlag&6?B(w.component.subTree):w.shapeFlag&128?w.suspense.next():h(w.anchor||w.el);let ce=!1;const re=(w,P,z)=>{w==null?P._vnode&&Re(P._vnode,null,null,!0):v(P._vnode||null,w,P,null,null,null,z),ce||(ce=!0,Xc(),yo(),ce=!1),P._vnode=w},D={p:v,um:Re,m:Ee,r:Ge,mt:K,mc:I,pc:H,pbc:y,n:B,o:t};let be,ge;return e&&([be,ge]=e(D)),{render:re,hydrate:be,createApp:qg(re,be)}}function ma({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _i({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Id(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Dd(t,e,n=!1){const i=t.children,r=e.children;if(Pe(i)&&Pe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Jn(r[s]),a.el=o.el),n||Dd(o,a)),a.type===Sr&&(a.el=o.el)}}function i_(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Ud(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ud(e)}const r_=t=>t.__isTeleport,zt=Symbol.for("v-fgt"),Sr=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),uo=Symbol.for("v-stc"),Yr=[];let Jt=null;function Rn(t=!1){Yr.push(Jt=t?null:[])}function Nd(){Yr.pop(),Jt=Yr[Yr.length-1]||null}let Mr=1;function su(t){Mr+=t}function Od(t){return t.dynamicChildren=Mr>0?Jt||cr:null,Nd(),Mr>0&&Jt&&Jt.push(t),t}function Fd(t,e,n,i,r,s){return Od(lc(t,e,n,i,r,s,!0))}function rr(t,e,n,i,r){return Od(lt(t,e,n,i,r,!0))}function ss(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}const Bd=({key:t})=>t??null,fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?at(t)||At(t)||Ie(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function lc(t,e=null,n=null,i=0,r=null,s=t===zt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bd(e),ref:e&&fo(e),scopeId:Wo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vt};return a?(cc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=at(n)?8:16),Mr>0&&!o&&Jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Jt.push(l),l}const lt=s_;function s_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===ad)&&(t=Gt),ss(t)){const a=Dn(t,e,!0);return n&&cc(a,n),Mr>0&&!s&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(t)]=a:Jt.push(a)),a.patchFlag|=-2,a}if(p_(t)&&(t=t.__vccOpts),e){e=Hd(e);let{class:a,style:l}=e;a&&!at(a)&&(e.class=ko(a)),tt(l)&&(Kh(l)&&!Pe(l)&&(l=ht({},l)),e.style=Ho(l))}const o=at(t)?1:cd(t)?128:r_(t)?64:tt(t)?4:Ie(t)?2:0;return lc(t,e,n,i,r,o,s,!0)}function Hd(t){return t?Kh(t)||bd(t)?ht({},t):t:null}function Dn(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,u=e?o_(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Bd(u),ref:e&&e.ref?n&&s?Pe(s)?s.concat(fo(e)):[s,fo(e)]:fo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dn(t.ssContent),ssFallback:t.ssFallback&&Dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&(c.transition=l.clone(c)),c}function kd(t=" ",e=0){return lt(Sr,null,t,e)}function Yt(t){return t==null||typeof t=="boolean"?lt(Gt):Pe(t)?lt(zt,null,t.slice()):typeof t=="object"?Jn(t):lt(Sr,null,String(t))}function Jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dn(t)}function cc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Pe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),cc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!bd(e)?e._ctx=Vt:r===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),i&64?(n=16,e=[kd(e)]):n=8);t.children=e,t.shapeFlag|=n}function o_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ko([e.class,i.class]));else if(r==="style")e.style=Ho([e.style,i.style]);else if(fs(r)){const s=e[r],o=i[r];o&&s!==o&&!(Pe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Lt(t,e,n,i=null){en(t,e,7,[n,i])}const a_=Sd();let l_=0;function c_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||a_,s={uid:l_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Oh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wd(i,r),emitsOptions:rd(i,r),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:i.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=fg.bind(null,s),t.ce&&t.ce(s),s}let dt=null;const uc=()=>dt||Vt;let bo,gl;{const t=Dh(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};bo=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),gl=e("__VUE_SSR_SETTERS__",n=>vs=n)}const _s=t=>{const e=dt;return bo(t),t.scope.on(),()=>{t.scope.off(),bo(e)}},ou=()=>{dt&&dt.scope.off(),bo(null)};function zd(t){return t.vnode.shapeFlag&4}let vs=!1;function u_(t,e=!1){e&&gl(e);const{props:n,children:i}=t.vnode,r=zd(t);$g(t,n,r,e),Kg(t,i);const s=r?f_(t,e):void 0;return e&&gl(!1),s}function f_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Hg);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?d_(t):null,s=_s(t);fi();const o=ri(i,t,0,[t.props,r]);if(hi(),s(),Rh(o)){if(o.then(ou,ou),e)return o.then(a=>{_l(t,a,e)}).catch(a=>{Pr(a,t,0)});t.asyncDep=o}else _l(t,o,e)}else Vd(t,e)}function _l(t,e,n){Ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:tt(e)&&(t.setupState=ed(e)),Vd(t,n)}let au;function Vd(t,e,n){const i=t.type;if(!t.render){if(!e&&au&&!i.render){const r=i.template||oc(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,u=ht(ht({isCustomElement:s,delimiters:a},o),l);i.render=au(r,u)}}t.render=i.render||Zt}{const r=_s(t);fi();try{kg(t)}finally{hi(),r()}}}const h_={get(t,e){return Nt(t,"get",""),t[e]}};function d_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,h_),slots:t.slots,emit:t.emit,expose:e}}function fc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ed(Qm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jr)return jr[n](t)},has(e,n){return n in e||n in jr}}))}function vl(t,e=!0){return Ie(t)?t.displayName||t.name:t.name||e&&t.__name}function p_(t){return Ie(t)&&"__vccOpts"in t}const an=(t,e)=>eg(t,e,vs);function In(t,e,n){const i=arguments.length;return i===2?tt(e)&&!Pe(e)?ss(e)?lt(t,null,[e]):lt(t,e):lt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ss(n)&&(n=[n]),lt(t,e,n))}const Gd="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const m_="http://www.w3.org/2000/svg",g_="http://www.w3.org/1998/Math/MathML",Qn=typeof document<"u"?document:null,lu=Qn&&Qn.createElement("template"),__={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Qn.createElementNS(m_,t):e==="mathml"?Qn.createElementNS(g_,t):Qn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{lu.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=lu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zn="transition",Nr="animation",os=Symbol("_vtc"),hc=(t,{slots:e})=>In(Rg,v_(t),e);hc.displayName="Transition";const Wd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};hc.props=ht({},dd,Wd);const vi=(t,e=[])=>{Pe(t)?t.forEach(n=>n(...e)):t&&t(...e)},cu=t=>t?Pe(t)?t.some(e=>e.length>1):t.length>1:!1;function v_(t){const e={};for(const O in t)O in Wd||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,g=x_(r),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:S,onEnterCancelled:_,onLeave:M,onLeaveCancelled:R,onBeforeAppear:T=p,onAppear:C=S,onAppearCancelled:I=_}=e,E=(O,L,K)=>{xi(O,L?c:a),xi(O,L?u:o),K&&K()},y=(O,L)=>{O._isLeaving=!1,xi(O,f),xi(O,d),xi(O,h),L&&L()},F=O=>(L,K)=>{const Q=O?C:S,W=()=>E(L,O,K);vi(Q,[L,W]),uu(()=>{xi(L,O?l:s),Vn(L,O?c:a),cu(Q)||fu(L,i,v,W)})};return ht(e,{onBeforeEnter(O){vi(p,[O]),Vn(O,s),Vn(O,o)},onBeforeAppear(O){vi(T,[O]),Vn(O,l),Vn(O,u)},onEnter:F(!1),onAppear:F(!0),onLeave(O,L){O._isLeaving=!0;const K=()=>y(O,L);Vn(O,f),Vn(O,h),M_(),uu(()=>{O._isLeaving&&(xi(O,f),Vn(O,d),cu(M)||fu(O,i,m,K))}),vi(M,[O,K])},onEnterCancelled(O){E(O,!1),vi(_,[O])},onAppearCancelled(O){E(O,!0),vi(I,[O])},onLeaveCancelled(O){y(O),vi(R,[O])}})}function x_(t){if(t==null)return null;if(tt(t))return[ga(t.enter),ga(t.leave)];{const e=ga(t);return[e,e]}}function ga(t){return Ih(t)}function Vn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[os]||(t[os]=new Set)).add(e)}function xi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[os];n&&(n.delete(e),n.size||(t[os]=void 0))}function uu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let y_=0;function fu(t,e,n,i){const r=t._endId=++y_,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=S_(t,e);if(!o)return i();const u=o+"end";let c=0;const f=()=>{t.removeEventListener(u,h),s()},h=d=>{d.target===t&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),t.addEventListener(u,h)}function S_(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${zn}Delay`),s=i(`${zn}Duration`),o=hu(r,s),a=i(`${Nr}Delay`),l=i(`${Nr}Duration`),u=hu(a,l);let c=null,f=0,h=0;e===zn?o>0&&(c=zn,f=o,h=s.length):e===Nr?u>0&&(c=Nr,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?zn:Nr:null,h=c?c===zn?s.length:l.length:0);const d=c===zn&&/\b(transform|all)(,|$)/.test(i(`${zn}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:d}}function hu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>du(n)+du(t[i])))}function du(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function M_(){return document.body.offsetHeight}function E_(t,e,n){const i=t[os];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pu=Symbol("_vod"),T_=Symbol("_vsh"),b_=Symbol(""),A_=/(^|;)\s*display\s*:/;function w_(t,e,n){const i=t.style,r=at(n);let s=!1;if(n&&!r){if(e)if(at(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ho(i,a,"")}else for(const o in e)n[o]==null&&ho(i,o,"");for(const o in n)o==="display"&&(s=!0),ho(i,o,n[o])}else if(r){if(e!==n){const o=i[b_];o&&(n+=";"+o),i.cssText=n,s=A_.test(n)}}else e&&t.removeAttribute("style");pu in t&&(t[pu]=s?i.display:"",t[T_]&&(i.display="none"))}const mu=/\s*!important$/;function ho(t,e,n){if(Pe(n))n.forEach(i=>ho(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=R_(t,e);mu.test(n)?t.setProperty(Cr(i),n.replace(mu,""),"important"):t[i]=n}}const gu=["Webkit","Moz","ms"],_a={};function R_(t,e){const n=_a[e];if(n)return n;let i=xn(e);if(i!=="filter"&&i in t)return _a[e]=i;i=Bo(i);for(let r=0;r<gu.length;r++){const s=gu[r]+i;if(s in t)return _a[e]=s}return e}const _u="http://www.w3.org/1999/xlink";function C_(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_u,e.slice(6,e.length)):t.setAttributeNS(_u,e,n);else{const s=Cm(e);n==null||s&&!Uh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function P_(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?t.getAttribute("value")||"":t.value,c=n??"";(u!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Uh(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function L_(t,e,n,i){t.addEventListener(e,n,i)}function I_(t,e,n,i){t.removeEventListener(e,n,i)}const vu=Symbol("_vei");function D_(t,e,n,i,r=null){const s=t[vu]||(t[vu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=U_(e);if(i){const u=s[e]=F_(i,r);L_(t,a,u,l)}else o&&(I_(t,a,o,l),s[e]=void 0)}}const xu=/(?:Once|Passive|Capture)$/;function U_(t){let e;if(xu.test(t)){e={};let i;for(;i=t.match(xu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cr(t.slice(2)),e]}let va=0;const N_=Promise.resolve(),O_=()=>va||(N_.then(()=>va=0),va=Date.now());function F_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;en(B_(i,n.value),e,5,[i])};return n.value=t,n.attached=O_(),n}function B_(t,e){if(Pe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const yu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,H_=(t,e,n,i,r,s,o,a,l)=>{const u=r==="svg";e==="class"?E_(t,i,u):e==="style"?w_(t,n,i):fs(e)?ql(e)||D_(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):k_(t,e,i,u))?P_(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),C_(t,e,i,u))};function k_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&yu(e)&&Ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return yu(e)&&at(n)?!1:e in t}const Xd=ht({patchProp:H_},__);let Kr,Su=!1;function z_(){return Kr||(Kr=t_(Xd))}function V_(){return Kr=Su?Kr:n_(Xd),Su=!0,Kr}const G_=(...t)=>{const e=z_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=$d(i);if(!r)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,qd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},W_=(...t)=>{const e=V_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=$d(i);if(r)return n(r,!0,qd(r))},e};function qd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $d(t){return at(t)?document.querySelector(t):t}const X_=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,q_=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,$_=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function j_(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Y_(t);return}return e}function Y_(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Ao(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const i=n.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!$_.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(X_.test(t)||q_.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,j_)}return JSON.parse(t)}catch(i){if(e.strict)throw i;return t}}const K_=/#/g,Z_=/&/g,J_=/\//g,Q_=/=/g,dc=/\+/g,ev=/%5e/gi,tv=/%60/gi,nv=/%7c/gi,iv=/%20/gi;function rv(t){return encodeURI(""+t).replace(nv,"|")}function xl(t){return rv(typeof t=="string"?t:JSON.stringify(t)).replace(dc,"%2B").replace(iv,"+").replace(K_,"%23").replace(Z_,"%26").replace(tv,"`").replace(ev,"^").replace(J_,"%2F")}function xa(t){return xl(t).replace(Q_,"%3D")}function wo(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function sv(t){return wo(t.replace(dc," "))}function ov(t){return wo(t.replace(dc," "))}function av(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=sv(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=ov(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function lv(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${xa(t)}=${xl(n)}`).join("&"):`${xa(t)}=${xl(e)}`:xa(t)}function cv(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>lv(e,t[e])).filter(Boolean).join("&")}const uv=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,fv=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,hv=/^([/\\]\s*){2,}[^/\\]/,dv=/^[\s\0]*(blob|data|javascript|vbscript):$/i,pv=/\/$|\/\?|\/#/,mv=/^\.?\//;function Hi(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?uv.test(t):fv.test(t)||(e.acceptRelative?hv.test(t):!1)}function gv(t){return!!t&&dv.test(t)}function yl(t="",e){return e?pv.test(t):t.endsWith("/")}function pc(t="",e){if(!e)return(yl(t)?t.slice(0,-1):t)||"/";if(!yl(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");r>=0&&(n=t.slice(0,r),i=t.slice(r));const[s,...o]=n.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function Sl(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(yl(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");if(r>=0&&(n=t.slice(0,r),i=t.slice(r),!n))return i;const[s,...o]=n.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function _v(t=""){return t.startsWith("/")}function Mu(t=""){return _v(t)?t:"/"+t}function vv(t,e){if(Yd(e)||Hi(t))return t;const n=pc(e);return t.startsWith(n)?t:mc(n,t)}function Eu(t,e){if(Yd(e))return t;const n=pc(e);if(!t.startsWith(n))return t;const i=t.slice(n.length);return i[0]==="/"?i:"/"+i}function jd(t,e){const n=jo(t),i={...av(n.search),...e};return n.search=cv(i),Sv(n)}function Yd(t){return!t||t==="/"}function xv(t){return t&&t!=="/"}function mc(t,...e){let n=t||"";for(const i of e.filter(r=>xv(r)))if(n){const r=i.replace(mv,"");n=Sl(n)+r}else n=i;return n}function Kd(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),i=[];let r=0;for(const c of n)if(!(!c||c==="/")){for(const[f,h]of c.split(e).entries())if(!(!h||h===".")){if(h===".."){if(i.length===1&&Hi(i[0]))continue;i.pop(),r--;continue}if(f===1&&((o=i[i.length-1])!=null&&o.endsWith(":/"))){i[i.length-1]+="/"+h;continue}i.push(h),r++}}let s=i.join("/");return r>=0?(a=n[0])!=null&&a.startsWith("/")&&!s.startsWith("/")?s="/"+s:(l=n[0])!=null&&l.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,(u=n[n.length-1])!=null&&u.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function yv(t,e,n={}){return n.trailingSlash||(t=Sl(t),e=Sl(e)),n.leadingSlash||(t=Mu(t),e=Mu(e)),n.encoding||(t=wo(t),e=wo(e)),t===e}const Zd=Symbol.for("ufo:protocolRelative");function jo(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,h=""]=n;return{protocol:f.toLowerCase(),pathname:h,href:f+h,auth:"",host:"",search:"",hash:""}}if(!Hi(t,{acceptRelative:!0}))return e?jo(e+t):Tu(t);const[,i="",r,s=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[],{pathname:l,search:u,hash:c}=Tu(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:u,hash:c,[Zd]:!i}}function Tu(t=""){const[e="",n="",i=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:i}}function Sv(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",i=t.hash||"",r=t.auth?t.auth+"@":"",s=t.host||"";return(t.protocol||t[Zd]?(t.protocol||"")+"//":"")+r+s+e+n+i}class Mv extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function Ev(t){var l,u,c,f,h;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((c=t.request)==null?void 0:c.method)||((f=t.options)==null?void 0:f.method)||"GET",i=((h=t.request)==null?void 0:h.url)||String(t.request)||"/",r=`[${n}] ${JSON.stringify(i)}`,s=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new Mv(o,t.error?{cause:t.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(a,d,{get(){return t[d]}});for(const[d,g]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,d,{get(){return t.response&&t.response[g]}});return a}const Tv=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function bu(t="GET"){return Tv.has(t.toUpperCase())}function bv(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const Av=new Set(["image/svg","application/xml","application/xhtml","application/html"]),wv=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Rv(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return wv.test(e)?"json":Av.has(e)||e.startsWith("text/")?"text":"blob"}function Cv(t,e,n=globalThis.Headers){const i={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(i.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(i.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){i.headers=new n((e==null?void 0:e.headers)||{});for(const[r,s]of new n((t==null?void 0:t.headers)||{}))i.headers.set(r,s)}return i}const Pv=new Set([408,409,425,429,500,502,503,504]),Lv=new Set([101,204,205,304]);function Jd(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=t;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let c;typeof a.options.retry=="number"?c=a.options.retry:c=bu(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(c>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):Pv.has(f))){const h=a.options.retryDelay||0;return h>0&&await new Promise(d=>setTimeout(d,h)),s(a.request,{...a.options,retry:c-1})}}const u=Ev(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,s),u}const s=async function(l,u={}){var d;const c={request:l,options:Cv(u,t.defaults,n),response:void 0,error:void 0};c.options.method=(d=c.options.method)==null?void 0:d.toUpperCase(),c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=vv(c.request,c.options.baseURL)),(c.options.query||c.options.params)&&(c.request=jd(c.request,{...c.options.params,...c.options.query}))),c.options.body&&bu(c.options.method)&&(bv(c.options.body)?(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")):("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half")));let f;if(!c.options.signal&&c.options.timeout){const g=new i;f=setTimeout(()=>g.abort(),c.options.timeout),c.options.signal=g.signal}try{c.response=await e(c.request,c.options)}catch(g){return c.error=g,c.options.onRequestError&&await c.options.onRequestError(c),await r(c)}finally{f&&clearTimeout(f)}if(c.response.body&&!Lv.has(c.response.status)&&c.options.method!=="HEAD"){const g=(c.options.parseResponse?"json":c.options.responseType)||Rv(c.response.headers.get("content-type")||"");switch(g){case"json":{const v=await c.response.text(),m=c.options.parseResponse||Ao;c.response._data=m(v);break}case"stream":{c.response._data=c.response.body;break}default:c.response._data=await c.response[g]()}}return c.options.onResponse&&await c.options.onResponse(c),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await c.options.onResponseError(c),await r(c)):c.response},o=async function(l,u){return(await s(l,u))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={})=>Jd({...t,defaults:{...t.defaults,...a}}),o}const gc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Iv=gc.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),Dv=gc.Headers,Uv=gc.AbortController,Nv=Jd({fetch:Iv,Headers:Dv,AbortController:Uv}),Ov=Nv,Fv=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Ro=Fv().app,Bv=()=>Ro.baseURL,Hv=()=>Ro.buildAssetsDir,_c=(...t)=>Kd(Qd(),Hv(),...t),Qd=(...t)=>{const e=Ro.cdnURL||Ro.baseURL;return t.length?Kd(e,...t):e};globalThis.__buildAssetsURL=_c,globalThis.__publicAssetsURL=Qd;globalThis.$fetch||(globalThis.$fetch=Ov.create({baseURL:Bv()}));function Ml(t,e={},n){for(const i in t){const r=t[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?Ml(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const kv={run:t=>t()},zv=()=>kv,ep=typeof console.createTask<"u"?console.createTask:zv;function Vv(t,e){const n=e.shift(),i=ep(n);return t.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function Gv(t,e){const n=e.shift(),i=ep(n);return Promise.all(t.map(r=>i.run(()=>r(...e))))}function ya(t,e){for(const n of[...t])n(e)}class Wv{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,i={}){if(!e||typeof n!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(e,r),i}removeHook(e,n){if(this._hooks[e]){const i=this._hooks[e].indexOf(n);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Ml(e),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const n=Ml(e);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(Vv,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(Gv,e,...n)}callHookWith(e,n,...i){const r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&ya(this._before,r);const s=e(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&ya(this._after,r)}):(this._after&&r&&ya(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function tp(){return new Wv}function Xv(t={}){let e,n=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r&&e===void 0){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;El.add(u);try{const c=r?r.run(o,a):a();return n||(e=void 0),await c}finally{El.delete(u)}}}}function qv(t={}){const e={};return{get(n,i={}){return e[n]||(e[n]=Xv({...t,...i})),e[n],e[n]}}}const Co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Au="__unctx__",$v=Co[Au]||(Co[Au]=qv()),jv=(t,e={})=>$v.get(t,e),wu="__unctx_async_handlers__",El=Co[wu]||(Co[wu]=new Set);function as(t){const e=[];for(const r of El){const s=r();s&&e.push(s)}const n=()=>{for(const r of e)r()};let i=t();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const np=jv("nuxt-app",{asyncContext:!1}),Yv="__nuxt_plugin";function Kv(t){let e=0;const n={_scope:Pm(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.11.2"},get vue(){return n.vueApp.version}},payload:di({data:{},state:{},once:new Set,_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:r=>n._scope.run(()=>Qv(n,r)),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=tp(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(r,s)=>{const o="$"+r;Fs(n,o,s),Fs(n.vueApp.config.globalProperties,o,s)},Fs(n.vueApp,"$nuxt",n),Fs(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",s=>{n.callHook("app:chunkError",{error:s.payload})}),window.useNuxtApp=window.useNuxtApp||ct;const r=n.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});n.hook("app:mounted",r)}const i=n.payload.config;return n.provide("config",i),n}async function Zv(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const i in n)t.provide(i,n[i])}}async function Jv(t,e){const n=[],i=[],r=[],s=[];let o=0;async function a(l){var c;const u=((c=l.dependsOn)==null?void 0:c.filter(f=>e.some(h=>h._name===f)&&!n.includes(f)))??[];if(u.length>0)i.push([new Set(u),l]);else{const f=Zv(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(i.map(async([h,d])=>{h.has(l._name)&&(h.delete(l._name),h.size===0&&(o++,await a(d)))})))});l.parallel?r.push(f.catch(h=>s.push(h))):await f}}for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s.length)throw s[0]}function pi(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[Yv]:!0,_name:e})}function Qv(t,e,n){const i=()=>e();return np.set(t),t.vueApp.runWithContext(i)}function e0(){var e;let t;return Md()&&(t=(e=uc())==null?void 0:e.appContext.app.$nuxt),t=t||np.tryUse(),t||null}function ct(){const t=e0();if(!t)throw new Error("[nuxt] instance unavailable");return t}function vc(t){return ct().$config}function Fs(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function t0(t,e){return{ctx:{table:t},matchAll:n=>rp(n,t)}}function ip(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([i,r])=>[i,ip(r)])):new Map(Object.entries(t[n]));return e}function n0(t){return t0(ip(t))}function rp(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const i=[];for(const[s,o]of Ru(e.wildcard))(t===s||t.startsWith(s+"/"))&&i.push(o);for(const[s,o]of Ru(e.dynamic))if(t.startsWith(s+"/")){const a="/"+t.slice(s.length).split("/").splice(2).join("/");i.push(...rp(a,o))}const r=e.static.get(t);return r&&i.push(r),i.filter(Boolean)}function Ru(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Sa(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Tl(t,e,n=".",i){if(!Sa(e))return Tl(t,{},n,i);const r=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const o=t[s];o!=null&&(i&&i(r,s,o,n)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:Sa(o)&&Sa(r[s])?r[s]=Tl(o,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=o))}return r}function sp(t){return(...e)=>e.reduce((n,i)=>Tl(n,i,"",t),{})}const op=sp(),i0=sp((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function r0(t,e){try{return e in t}catch{return!1}}var s0=Object.defineProperty,o0=(t,e,n)=>e in t?s0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ai=(t,e,n)=>(o0(t,typeof e!="symbol"?e+"":e,n),n);class bl extends Error{constructor(e,n={}){super(e,n),Ai(this,"statusCode",500),Ai(this,"fatal",!1),Ai(this,"unhandled",!1),Ai(this,"statusMessage"),Ai(this,"data"),Ai(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:wl(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=ap(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}Ai(bl,"__h3_error__",!0);function Al(t){if(typeof t=="string")return new bl(t);if(a0(t))return t;const e=new bl(t.message??t.statusMessage??"",{cause:t.cause||t});if(r0(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=wl(t.statusCode,e.statusCode):t.status&&(e.statusCode=wl(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;ap(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function a0(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const l0=/[^\u0009\u0020-\u007E]/g;function ap(t=""){return t.replace(l0,"")}function wl(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const c0=Symbol("layout-meta"),Yo=Symbol("route"),Fn=()=>{var t;return(t=ct())==null?void 0:t.$router},lp=()=>Md()?Wt(Yo,ct()._route):ct()._route;const u0=()=>{try{if(ct()._processingMiddleware)return!0}catch{return!1}return!1},ww=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:jd(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){const{target:a="_blank",windowFeatures:l={}}=e.open,u=Object.entries(l).filter(([c,f])=>f!==void 0).map(([c,f])=>`${c.toLowerCase()}=${f}`).join(", ");return open(n,a,u),Promise.resolve()}const i=(e==null?void 0:e.external)||Hi(n,{acceptRelative:!0});if(i){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const a=jo(n).protocol;if(a&&gv(a))throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)}const r=u0();if(!i&&r)return t;const s=Fn(),o=ct();return i?(o._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,r?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?s.replace(t):s.push(t)},cp="__nuxt_error",Ko=()=>sg(ct().payload,"error"),ar=t=>{const e=Zo(t);try{const n=ct(),i=Ko();n.hooks.callHook("app:error",e),i.value=i.value||e}catch{throw e}return e},f0=async(t={})=>{const e=ct(),n=Ko();e.callHook("app:error:cleared",t),t.redirect&&await Fn().replace(t.redirect),n.value=null},h0=t=>!!t&&typeof t=="object"&&cp in t,Zo=t=>{const e=Al(t);return Object.defineProperty(e,cp,{value:!0,configurable:!1,writable:!1}),e},d0=-1,p0=-2,m0=-3,g0=-4,_0=-5,v0=-6;function x0(t,e){return y0(JSON.parse(t),e)}function y0(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,i=Array(n.length);function r(s,o=!1){if(s===d0)return;if(s===m0)return NaN;if(s===g0)return 1/0;if(s===_0)return-1/0;if(s===v0)return-0;if(o)throw new Error("Invalid input");if(s in i)return i[s];const a=n[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return i[s]=u(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const c=new Set;i[s]=c;for(let d=1;d<a.length;d+=1)c.add(r(a[d]));break;case"Map":const f=new Map;i[s]=f;for(let d=1;d<a.length;d+=2)f.set(r(a[d]),r(a[d+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const h=Object.create(null);i[s]=h;for(let d=1;d<a.length;d+=2)h[a[d]]=r(a[d+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let u=0;u<a.length;u+=1){const c=a[u];c!==p0&&(l[u]=r(c))}}else{const l={};i[s]=l;for(const u in a){const c=a[u];l[u]=r(c)}}return i[s]}return r(0)}function S0(t){return Array.isArray(t)?t:[t]}const M0=["title","titleTemplate","script","style","noscript"],po=["base","meta","link","style","script","noscript"],E0=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],T0=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],up=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],b0=typeof window<"u";function xc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Cu(t){return t._h||xc(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function fp(t,e){const{props:n,tag:i}=t;if(T0.includes(i))return i;if(i==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];i==="meta"&&r.push("name","property","http-equiv");for(const s of r)if(typeof n[s]<"u"){const o=String(n[s]);return`${i}:${s}:${o}`}return!1}function Pu(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function A0(t,e,n){const i={tag:t,props:await hp(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return up.forEach(r=>{const s=typeof i.props[r]<"u"?i.props[r]:n[r];typeof s<"u"&&((!["innerHTML","textContent","children"].includes(r)||M0.includes(i.tag))&&(i[r==="children"?"innerHTML":r]=s),delete i.props[r])}),i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function w0(t,e){var i;const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,r])=>r).map(([r,s])=>t==="style"?`${r}:${s}`:r)),(i=Array.isArray(e)?e.join(n):e)==null?void 0:i.split(n).filter(r=>r.trim()).filter(Boolean).join(n)}async function hp(t,e){for(const n of Object.keys(t)){if(["class","style"].includes(n)){t[n]=w0(n,t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!up.includes(n)){const i=String(t[n]),r=n.startsWith("data-");i==="true"||i===""?t[n]=r?"true":!0:t[n]||(r&&i==="false"?t[n]="false":delete t[n])}}return t}const R0=10;async function C0(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,i])=>typeof i<"u"&&E0.includes(n)).forEach(([n,i])=>{const r=S0(i);e.push(...r.map(s=>A0(n,s,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,i)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<R0)+i,n))}const Lu={base:-10,title:10},Iu={critical:-80,high:-10,low:20};function Po(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in Lu&&(e=Lu[t.tag]),typeof n=="string"&&n in Iu?e+Iu[n]:e)}const P0=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Du=["onload","onerror","onabort","onprogress","onloadstart"],Gn="%separator";function mo(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function i(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((l,u)=>l&&l[u]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let r=t;try{r=decodeURI(t)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=i(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,u)=>`${a}${u}`).trim())}),t.includes(Gn)&&(t.endsWith(Gn)&&(t=t.slice(0,-Gn.length).trim()),t.startsWith(Gn)&&(t=t.slice(Gn.length).trim()),t=t.replace(new RegExp(`\\${Gn}\\s*\\${Gn}`,"g"),Gn),t=mo(t,{separator:n},n)),t}async function dp(t,e={}){var c;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const i={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",i),!i.shouldRender)return;const r=(await t.resolveTags()).map(f=>({tag:f,id:po.includes(f.tag)?Cu(f):f.tag,shouldRender:!0}));let s=t._dom;if(!s){s={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const f of["body","head"]){const h=(c=n[f])==null?void 0:c.children,d=[];for(const g of[...h].filter(v=>po.includes(v.tagName.toLowerCase()))){const v={tag:g.tagName.toLowerCase(),props:await hp(g.getAttributeNames().reduce((S,_)=>({...S,[_]:g.getAttribute(_)}),{})),innerHTML:g.innerHTML};let m=1,p=fp(v);for(;p&&d.find(S=>S._d===p);)p=`${p}:${m++}`;v._d=p||void 0,d.push(v),s.elMap[g.getAttribute("data-hid")||Cu(v)]=g}}}s.pendingSideEffects={...s.sideEffects||{}},s.sideEffects={};function o(f,h,d){const g=`${f}:${h}`;s.sideEffects[g]=d,delete s.pendingSideEffects[g]}function a({id:f,$el:h,tag:d}){const g=d.tag.endsWith("Attrs");s.elMap[f]=h,g||(["textContent","innerHTML"].forEach(v=>{d[v]&&d[v]!==h[v]&&(h[v]=d[v])}),o(f,"el",()=>{var v;(v=s.elMap[f])==null||v.remove(),delete s.elMap[f]}));for(const[v,m]of Object.entries(d._eventHandlers||{}))h.getAttribute(`data-${v}`)!==""&&((d.tag==="bodyAttrs"?n.defaultView:h).addEventListener(v.replace("on",""),m.bind(h)),h.setAttribute(`data-${v}`,""));Object.entries(d.props).forEach(([v,m])=>{const p=`attr:${v}`;if(v==="class")for(const S of(m||"").split(" ").filter(Boolean))g&&o(f,`${p}:${S}`,()=>h.classList.remove(S)),!h.classList.contains(S)&&h.classList.add(S);else if(v==="style")for(const S of(m||"").split(";").filter(Boolean)){const[_,...M]=S.split(":").map(R=>R.trim());o(f,`${p}:${S}:${_}`,()=>{h.style.removeProperty(_)}),h.style.setProperty(_,M.join(":"))}else h.getAttribute(v)!==m&&h.setAttribute(v,m===!0?"":String(m)),g&&o(f,p,()=>h.removeAttribute(v))})}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of r){const{tag:h,shouldRender:d,id:g}=f;if(d){if(h.tag==="title"){n.title=h.textContent;continue}f.$el=f.$el||s.elMap[g],f.$el?a(f):po.includes(h.tag)&&l.push(f)}}for(const f of l){const h=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),a(f),u[h]=u[h]||n.createDocumentFragment(),u[h].appendChild(f.$el)}for(const f of r)await t.hooks.callHook("dom:renderTag",f,n,o);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose),Object.values(s.pendingSideEffects).forEach(f=>f()),t._dom=s,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:r})}async function L0(t,e={}){const n=e.delayFn||(i=>setTimeout(i,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(i=>n(async()=>{await dp(t,e),delete t._domUpdatePromise,i()}))}function I0(t){return e=>{var i,r;const n=((r=(i=e.resolvedOptions.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(s){L0(s,t)}}}}}const D0=["templateParams","htmlAttrs","bodyAttrs"],U0={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(i=>{t.props[i]&&(t.key=t.props[i],delete t.props[i])});const n=fp(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(i=>{const r=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,s=e[r];if(s){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&D0.includes(i.tag)&&(a="merge"),a==="merge"){const l=s.props;["class","style"].forEach(u=>{l[u]&&(i.props[u]?(u==="style"&&!l[u].endsWith(";")&&(l[u]+=";"),i.props[u]=`${l[u]} ${i.props[u]}`):i.props[u]=l[u])}),e[r].props={...l,...i.props};return}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);return}else if(Po(i)>Po(s))return}const o=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if(po.includes(i.tag)&&o===0){delete e[r];return}e[r]=i});const n=[];Object.values(e).forEach(i=>{const r=i._duped;delete i._duped,n.push(i),r&&n.push(...r)}),t.tags=n,t.tags=t.tags.filter(i=>!(i.tag==="meta"&&(i.props.name||i.props.property)&&!i.props.content))}}},N0={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},O0=["script","link","bodyAttrs"],F0=t=>({hooks:{"tags:resolve":function(e){for(const n of e.tags.filter(i=>O0.includes(i.tag)))Object.entries(n.props).forEach(([i,r])=>{i.startsWith("on")&&typeof r=="function"&&(t.ssr&&Du.includes(i)?n.props[i]=`this.dataset.${i}fired = true`:delete n.props[i],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[i]=r)}),t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||xc(n.props.src||n.props.href))},"dom:renderTag":function({$el:e,tag:n}){var i,r;for(const s of Object.keys((e==null?void 0:e.dataset)||{}).filter(o=>Du.some(a=>`${a}fired`===o))){const o=s.replace("fired","");(r=(i=n._eventHandlers)==null?void 0:i[o])==null||r.call(e,new Event(o.replace("on","")))}}}}),B0=["link","style","script","noscript"],H0={hooks:{"tag:normalise":({tag:t})=>{t.key&&B0.includes(t.tag)&&(t.props["data-hid"]=t._h=xc(t.key))}}},k0={hooks:{"tags:resolve":t=>{const e=n=>{var i;return(i=t.tags.find(r=>r._d===n))==null?void 0:i._p};for(const{prefix:n,offset:i}of P0)for(const r of t.tags.filter(s=>typeof s.tagPriority=="string"&&s.tagPriority.startsWith(n))){const s=e(r.tagPriority.replace(n,""));typeof s<"u"&&(r._p=s+i)}t.tags.sort((n,i)=>n._p-i._p).sort((n,i)=>Po(n)-Po(i))}}},z0={meta:"content",link:"href",htmlAttrs:"lang"},V0=t=>({hooks:{"tags:resolve":e=>{var a;const{tags:n}=e,i=(a=n.find(l=>l.tag==="title"))==null?void 0:a.textContent,r=n.findIndex(l=>l.tag==="templateParams"),s=r!==-1?n[r].props:{},o=s.separator||"|";delete s.separator,s.pageTitle=mo(s.pageTitle||i||"",s,o);for(const l of n.filter(u=>u.processTemplateParams!==!1)){const u=z0[l.tag];u&&typeof l.props[u]=="string"?l.props[u]=mo(l.props[u],s,o):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(c=>{typeof l[c]=="string"&&(l[c]=mo(l[c],s,o))})}t._templateParams=s,t._separator=o,e.tags=n.filter(l=>l.tag!=="templateParams")}}}),G0={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(r=>r.tag==="titleTemplate");const i=e.findIndex(r=>r.tag==="title");if(i!==-1&&n!==-1){const r=Pu(e[n].textContent,e[i].textContent);r!==null?e[i].textContent=r||e[i].textContent:delete e[i]}else if(n!==-1){const r=Pu(e[n].textContent);r!==null&&(e[n].textContent=r,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}},W0={hooks:{"tags:afterResolve":function(t){for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let pp;function X0(t={}){const e=q0(t);return e.use(I0()),pp=e}function Uu(t,e){return!t||t==="server"&&e||t==="client"&&!e}function q0(t={}){const e=tp();e.addHooks(t.hooks||{}),t.document=t.document||(b0?document:void 0);const n=!t.document,i=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let r=0,s=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return s},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(c=>c.key===u.key))&&(o.push(u),Uu(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const c={_i:r++,input:l,...u};return Uu(c.mode,n)&&(s.push(c),i()),{dispose(){s=s.filter(f=>f._i!==c._i),e.callHook("entries:updated",a),i()},patch(f){s=s.map(h=>(h._i===c._i&&(h.input=c.input=f),h)),i()}}},async resolveTags(){const l={tags:[],entries:[...s]};await e.callHook("entries:resolve",l);for(const u of l.entries){const c=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(c):c),u.resolvedInput)for(const f of await C0(u)){const h={tag:f,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",h),l.tags.push(h.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[U0,N0,F0,H0,k0,V0,G0,W0,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function $0(){return pp}const j0=Gd.startsWith("3");function Y0(t){return typeof t=="function"?t():it(t)}function Rl(t,e=""){if(t instanceof Promise)return t;const n=Y0(t);return!t||!n?n:Array.isArray(n)?n.map(i=>Rl(i,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,r])=>i==="titleTemplate"||i.startsWith("on")?[i,it(r)]:[i,Rl(r,i)])):n}const K0={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Rl(e.input)}}},mp="usehead";function Z0(t){return{install(n){j0&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(mp,t))}}.install}function J0(t={}){t.domDelayFn=t.domDelayFn||(n=>ps(()=>setTimeout(()=>n(),0)));const e=X0(t);return e.use(K0),e.install=Z0(e),e}const Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Pl="__unhead_injection_handler__";function Q0(t){Cl[Pl]=t}function Rw(){if(Pl in Cl)return Cl[Pl]();const t=Wt(mp);return t||$0()}const ex={nuxt:{buildId:"ae38aad1-efa5-40b2-a8c3-78fbfdb29831"}},tx=i0(ex);function gp(){const t=ct();return t._appConfig||(t._appConfig=di(tx)),t._appConfig}const Ll=!1,nx=!1,Cw={componentName:"NuxtLink"},ix="#__nuxt";let go,_p;function rx(){var e;const t=(e=gp().nuxt)==null?void 0:e.buildId;return go=$fetch(_c(`builds/meta/${t}.json`)),go.then(n=>{_p=n0(n.matcher)}),go}function Jo(){return go||rx()}async function yc(t){return await Jo(),op({},..._p.matchAll(t).reverse())}function Nu(t,e={}){const n=ox(t,e),i=ct(),r=i._payloadCache=i._payloadCache||{};return n in r||(r[n]=ax(t).then(s=>s?vp(n).then(o=>o||(delete r[n],null)):(r[n]=null,null))),r[n]}const sx="_payload.json";function ox(t,e={}){var r;const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Hi(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const i=e.hash||(e.fresh?Date.now():(r=gp().nuxt)==null?void 0:r.buildId);return mc(vc().app.baseURL,n.pathname,sx+(i?`?${i}`:""))}async function vp(t){const e=fetch(t).then(n=>n.text().then(xp));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function ax(t=lp().path){if(t=pc(t),(await Jo()).prerendered.includes(t))return!0;const n=await yc(t);return!!n.prerender&&!n.redirect}let Bs=null;async function lx(){if(Bs)return Bs;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await xp(t.textContent||""),n=t.dataset.src?await vp(t.dataset.src):void 0;return Bs={...e,...n,...window.__NUXT__},Bs}async function xp(t){return await x0(t,ct()._payloadRevivers)}function cx(t,e){ct()._payloadRevivers[t]=e}const Ou={NuxtError:t=>Zo(t),EmptyShallowRef:t=>ts(t==="_"?void 0:t==="0n"?BigInt(0):Ao(t)),EmptyRef:t=>st(t==="_"?void 0:t==="0n"?BigInt(0):Ao(t)),ShallowRef:t=>ts(t),ShallowReactive:t=>ds(t),Ref:t=>st(t),Reactive:t=>di(t)},ux=pi({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const i in Ou)cx(i,Ou[i]);Object.assign(t.payload,([e,n]=as(()=>t.runWithContext(lx)),e=await e,n(),e)),window.__NUXT__=t.payload}}),fx=[],hx=pi({name:"nuxt:head",enforce:"pre",setup(t){const e=J0({plugins:fx});Q0(()=>ct().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const i=async()=>{n=!1,await dp(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||i()}),t.hooks.hook("app:error",i),t.hooks.hook("app:suspense:resolve",i)}}});/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const sr=typeof document<"u";function dx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ze=Object.assign;function Ma(t,e){const n={};for(const i in e){const r=e[i];n[i]=cn(r)?r.map(t):t(r)}return n}const Zr=()=>{},cn=Array.isArray,yp=/#/g,px=/&/g,mx=/\//g,gx=/=/g,_x=/\?/g,Sp=/\+/g,vx=/%5B/g,xx=/%5D/g,Mp=/%5E/g,yx=/%60/g,Ep=/%7B/g,Sx=/%7C/g,Tp=/%7D/g,Mx=/%20/g;function Sc(t){return encodeURI(""+t).replace(Sx,"|").replace(vx,"[").replace(xx,"]")}function Ex(t){return Sc(t).replace(Ep,"{").replace(Tp,"}").replace(Mp,"^")}function Il(t){return Sc(t).replace(Sp,"%2B").replace(Mx,"+").replace(yp,"%23").replace(px,"%26").replace(yx,"`").replace(Ep,"{").replace(Tp,"}").replace(Mp,"^")}function Tx(t){return Il(t).replace(gx,"%3D")}function bx(t){return Sc(t).replace(yp,"%23").replace(_x,"%3F")}function Ax(t){return t==null?"":bx(t).replace(mx,"%2F")}function ls(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const wx=/\/$/,Rx=t=>t.replace(wx,"");function Ea(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Ix(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ls(o)}}function Cx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Fu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Px(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Er(e.matched[i],n.matched[r])&&bp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Er(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Lx(t[n],e[n]))return!1;return!0}function Lx(t,e){return cn(t)?Bu(t,e):cn(e)?Bu(e,t):t===e}function Bu(t,e){return cn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Ix(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}var cs;(function(t){t.pop="pop",t.push="push"})(cs||(cs={}));var Jr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jr||(Jr={}));function Dx(t){if(!t)if(sr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Rx(t)}const Ux=/^[^#]+#/;function Nx(t,e){return t.replace(Ux,"#")+e}function Ox(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Qo=()=>({left:window.scrollX,top:window.scrollY});function Fx(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Ox(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Hu(t,e){return(history.state?history.state.position-e:-1)+t}const Dl=new Map;function Bx(t,e){Dl.set(t,e)}function Hx(t){const e=Dl.get(t);return Dl.delete(t),e}let kx=()=>location.protocol+"//"+location.host;function Ap(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Fu(l,"")}return Fu(n,t)+i+r}function zx(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=Ap(t,location),g=n.value,v=e.value;let m=0;if(h){if(n.value=d,e.value=h,o&&o===g){o=null;return}m=v?h.position-v.position:0}else i(d);r.forEach(p=>{p(n.value,g,{delta:m,type:cs.pop,direction:m?m>0?Jr.forward:Jr.back:Jr.unknown})})};function l(){o=n.value}function u(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function c(){const{history:h}=window;h.state&&h.replaceState(Ze({},h.state,{scroll:Qo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function ku(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Qo():null}}function Vx(t){const{history:e,location:n}=window,i={value:Ap(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:kx()+t+l;try{e[c?"replaceState":"pushState"](u,"",h),r.value=u}catch(d){console.error(d),n[c?"replace":"assign"](h)}}function o(l,u){const c=Ze({},e.state,ku(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});s(l,c,!0),i.value=l}function a(l,u){const c=Ze({},r.value,e.state,{forward:l,scroll:Qo()});s(c.current,c,!0);const f=Ze({},ku(i.value,l,null),{position:c.position+1},u);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function wp(t){t=Dx(t);const e=Vx(t),n=zx(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Ze({location:"",base:t,go:i,createHref:Nx.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Gx(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),wp(t)}function Wx(t){return typeof t=="string"||t&&typeof t=="object"}function Rp(t){return typeof t=="string"||typeof t=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cp=Symbol("");var zu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zu||(zu={}));function Tr(t,e){return Ze(new Error,{type:t,[Cp]:!0},e)}function Sn(t,e){return t instanceof Error&&Cp in t&&(e==null||!!(t.type&e))}const Vu="[^/]+?",Xx={sensitive:!1,strict:!1,start:!0,end:!0},qx=/[.+*?^${}()[\]/\\]/g;function $x(t,e){const n=Ze({},Xx,e),i=[];let r=n.start?"^":"";const s=[];for(const u of t){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const h=u[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(qx,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=h;s.push({name:g,repeatable:v,optional:m});const S=p||Vu;if(S!==Vu){d+=10;try{new RegExp(`(${S})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+M.message)}}let _=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(_=m&&u.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),r+=_,d+=20,m&&(d+=-8),v&&(d+=-20),S===".*"&&(d+=-50)}c.push(d)}i.push(c)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let h=1;h<c.length;h++){const d=c[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(u){let c="",f=!1;for(const h of t){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const d of h)if(d.type===0)c+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:m}=d,p=g in u?u[g]:"";if(cn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=cn(p)?p.join("/"):p;if(!S)if(m)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);c+=S}}return c||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function jx(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Yx(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=jx(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Gu(i))return 1;if(Gu(r))return-1}return r.length-i.length}function Gu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Kx={type:0,value:""},Zx=/[a-zA-Z0-9_]/;function Jx(t){if(!t)return[[]];if(t==="/")return[[Kx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${u}": ${d}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,u="",c="";function f(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:Zx.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function Qx(t,e,n){const i=$x(Jx(t.path),n),r=Ze(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ey(t,e){const n=[],i=new Map;e=qu({strict:!1,end:!0,sensitive:!1},e);function r(c){return i.get(c)}function s(c,f,h){const d=!h,g=ty(c);g.aliasOf=h&&h.record;const v=qu(e,c),m=[g];if("alias"in c){const _=typeof c.alias=="string"?[c.alias]:c.alias;for(const M of _)m.push(Ze({},g,{components:h?h.record.components:g.components,path:M,aliasOf:h?h.record:g}))}let p,S;for(const _ of m){const{path:M}=_;if(f&&M[0]!=="/"){const R=f.record.path,T=R[R.length-1]==="/"?"":"/";_.path=f.record.path+(M&&T+M)}if(p=Qx(_,f,v),h?h.alias.push(p):(S=S||p,S!==p&&S.alias.push(p),d&&c.name&&!Xu(p)&&o(c.name)),g.children){const R=g.children;for(let T=0;T<R.length;T++)s(R[T],p,h&&h.children[T])}h=h||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return S?()=>{o(S)}:Zr}function o(c){if(Rp(c)){const f=i.get(c);f&&(i.delete(c),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(c);f>-1&&(n.splice(f,1),c.record.name&&i.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return n}function l(c){let f=0;for(;f<n.length&&Yx(c,n[f])>=0&&(c.record.path!==n[f].record.path||!Pp(c,n[f]));)f++;n.splice(f,0,c),c.record.name&&!Xu(c)&&i.set(c.record.name,c)}function u(c,f){let h,d={},g,v;if("name"in c&&c.name){if(h=i.get(c.name),!h)throw Tr(1,{location:c});v=h.record.name,d=Ze(Wu(f.params,h.keys.filter(S=>!S.optional).concat(h.parent?h.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),c.params&&Wu(c.params,h.keys.map(S=>S.name))),g=h.stringify(d)}else if(c.path!=null)g=c.path,h=n.find(S=>S.re.test(g)),h&&(d=h.parse(g),v=h.record.name);else{if(h=f.name?i.get(f.name):n.find(S=>S.re.test(f.path)),!h)throw Tr(1,{location:c,currentLocation:f});v=h.record.name,d=Ze({},f.params,c.params),g=h.stringify(d)}const m=[];let p=h;for(;p;)m.unshift(p.record),p=p.parent;return{name:v,path:g,params:d,matched:m,meta:iy(m)}}return t.forEach(c=>s(c)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Wu(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function ty(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ny(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ny(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Xu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function iy(t){return t.reduce((e,n)=>Ze(e,n.meta),{})}function qu(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Pp(t,e){return e.children.some(n=>n===t||Pp(t,n))}function ry(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Sp," "),o=s.indexOf("="),a=ls(o<0?s:s.slice(0,o)),l=o<0?null:ls(s.slice(o+1));if(a in e){let u=e[a];cn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function $u(t){let e="";for(let n in t){const i=t[n];if(n=Tx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(cn(i)?i.map(s=>s&&Il(s)):[i&&Il(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function sy(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=cn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const oy=Symbol(""),ju=Symbol(""),Mc=Symbol(""),Lp=Symbol(""),Ul=Symbol("");function Or(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ei(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=h=>{h===!1?l(Tr(4,{from:n,to:e})):h instanceof Error?l(h):Wx(h)?l(Tr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},c=s(()=>t.call(i&&i.instances[r],e,n,u));let f=Promise.resolve(c);t.length<3&&(f=f.then(u)),f.catch(h=>l(h))})}function Ta(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(ay(l)){const c=(l.__vccOpts||l)[e];c&&s.push(ei(c,n,i,o,a,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=dx(c)?c.default:c;o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&ei(d,n,i,o,a,r)()}))}}return s}function ay(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yu(t){const e=Wt(Mc),n=Wt(Lp),i=an(()=>{const l=it(t.to);return e.resolve(l)}),r=an(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const h=f.findIndex(Er.bind(null,c));if(h>-1)return h;const d=Ku(l[u-2]);return u>1&&Ku(c)===d&&f[f.length-1].path!==d?f.findIndex(Er.bind(null,l[u-2])):h}),s=an(()=>r.value>-1&&fy(n.params,i.value.params)),o=an(()=>r.value>-1&&r.value===n.matched.length-1&&bp(n.params,i.value.params));function a(l={}){return uy(l)?e[it(t.replace)?"replace":"push"](it(t.to)).catch(Zr):Promise.resolve()}return{route:i,href:an(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const ly=ms({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yu,setup(t,{slots:e}){const n=di(Yu(t)),{options:i}=Wt(Mc),r=an(()=>({[Zu(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Zu(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:In("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),cy=ly;function uy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fy(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!cn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Ku(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zu=(t,e,n)=>t??e??n,hy=ms({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Wt(Ul),r=an(()=>t.route||i.value),s=Wt(ju,0),o=an(()=>{let u=it(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=an(()=>r.value.matched[o.value]);gr(ju,an(()=>o.value+1)),gr(oy,a),gr(Ul,r);const l=st();return si(()=>[l.value,a.value,t.name],([u,c,f],[h,d,g])=>{c&&(c.instances[f]=u,d&&d!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!Er(c,d)||!h)&&(c.enterCallbacks[f]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,c=t.name,f=a.value,h=f&&f.components[c];if(!h)return Ju(n.default,{Component:h,route:u});const d=f.props[c],g=d?d===!0?u.params:typeof d=="function"?d(u):d:null,m=In(h,Ze({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Ju(n.default,{Component:m,route:u})||m}}});function Ju(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ip=hy;function dy(t){const e=ey(t.routes,t),n=t.parseQuery||ry,i=t.stringifyQuery||$u,r=t.history,s=Or(),o=Or(),a=Or(),l=ts(sn);let u=sn;sr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ma.bind(null,B=>""+B),f=Ma.bind(null,Ax),h=Ma.bind(null,ls);function d(B,ce){let re,D;return Rp(B)?(re=e.getRecordMatcher(B),D=ce):D=B,e.addRoute(D,re)}function g(B){const ce=e.getRecordMatcher(B);ce&&e.removeRoute(ce)}function v(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,ce){if(ce=Ze({},ce||l.value),typeof B=="string"){const P=Ea(n,B,ce.path),z=e.resolve({path:P.path},ce),q=r.createHref(P.fullPath);return Ze(P,z,{params:h(z.params),hash:ls(P.hash),redirectedFrom:void 0,href:q})}let re;if(B.path!=null)re=Ze({},B,{path:Ea(n,B.path,ce.path).path});else{const P=Ze({},B.params);for(const z in P)P[z]==null&&delete P[z];re=Ze({},B,{params:f(P)}),ce.params=f(ce.params)}const D=e.resolve(re,ce),be=B.hash||"";D.params=c(h(D.params));const ge=Cx(i,Ze({},B,{hash:Ex(be),path:D.path})),w=r.createHref(ge);return Ze({fullPath:ge,hash:be,query:i===$u?sy(B.query):B.query||{}},D,{redirectedFrom:void 0,href:w})}function S(B){return typeof B=="string"?Ea(n,B,l.value.path):Ze({},B)}function _(B,ce){if(u!==B)return Tr(8,{from:ce,to:B})}function M(B){return C(B)}function R(B){return M(Ze(S(B),{replace:!0}))}function T(B){const ce=B.matched[B.matched.length-1];if(ce&&ce.redirect){const{redirect:re}=ce;let D=typeof re=="function"?re(B):re;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=S(D):{path:D},D.params={}),Ze({query:B.query,hash:B.hash,params:D.path!=null?{}:B.params},D)}}function C(B,ce){const re=u=p(B),D=l.value,be=B.state,ge=B.force,w=B.replace===!0,P=T(re);if(P)return C(Ze(S(P),{state:typeof P=="object"?Ze({},be,P.state):be,force:ge,replace:w}),ce||re);const z=re;z.redirectedFrom=ce;let q;return!ge&&Px(i,D,re)&&(q=Tr(16,{to:z,from:D}),Ee(D,D,!0,!1)),(q?Promise.resolve(q):y(z,D)).catch(X=>Sn(X)?Sn(X,2)?X:he(X):H(X,z,D)).then(X=>{if(X){if(Sn(X,2))return C(Ze({replace:w},S(X.to),{state:typeof X.to=="object"?Ze({},be,X.to.state):be,force:ge}),ce||z)}else X=O(z,D,!0,w,be);return F(z,D,X),X})}function I(B,ce){const re=_(B,ce);return re?Promise.reject(re):Promise.resolve()}function E(B){const ce=ee.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(B):B()}function y(B,ce){let re;const[D,be,ge]=py(B,ce);re=Ta(D.reverse(),"beforeRouteLeave",B,ce);for(const P of D)P.leaveGuards.forEach(z=>{re.push(ei(z,B,ce))});const w=I.bind(null,B,ce);return re.push(w),pe(re).then(()=>{re=[];for(const P of s.list())re.push(ei(P,B,ce));return re.push(w),pe(re)}).then(()=>{re=Ta(be,"beforeRouteUpdate",B,ce);for(const P of be)P.updateGuards.forEach(z=>{re.push(ei(z,B,ce))});return re.push(w),pe(re)}).then(()=>{re=[];for(const P of ge)if(P.beforeEnter)if(cn(P.beforeEnter))for(const z of P.beforeEnter)re.push(ei(z,B,ce));else re.push(ei(P.beforeEnter,B,ce));return re.push(w),pe(re)}).then(()=>(B.matched.forEach(P=>P.enterCallbacks={}),re=Ta(ge,"beforeRouteEnter",B,ce,E),re.push(w),pe(re))).then(()=>{re=[];for(const P of o.list())re.push(ei(P,B,ce));return re.push(w),pe(re)}).catch(P=>Sn(P,8)?P:Promise.reject(P))}function F(B,ce,re){a.list().forEach(D=>E(()=>D(B,ce,re)))}function O(B,ce,re,D,be){const ge=_(B,ce);if(ge)return ge;const w=ce===sn,P=sr?history.state:{};re&&(D||w?r.replace(B.fullPath,Ze({scroll:w&&P&&P.scroll},be)):r.push(B.fullPath,be)),l.value=B,Ee(B,ce,re,w),he()}let L;function K(){L||(L=r.listen((B,ce,re)=>{if(!de.listening)return;const D=p(B),be=T(D);if(be){C(Ze(be,{replace:!0}),D).catch(Zr);return}u=D;const ge=l.value;sr&&Bx(Hu(ge.fullPath,re.delta),Qo()),y(D,ge).catch(w=>Sn(w,12)?w:Sn(w,2)?(C(w.to,D).then(P=>{Sn(P,20)&&!re.delta&&re.type===cs.pop&&r.go(-1,!1)}).catch(Zr),Promise.reject()):(re.delta&&r.go(-re.delta,!1),H(w,D,ge))).then(w=>{w=w||O(D,ge,!1),w&&(re.delta&&!Sn(w,8)?r.go(-re.delta,!1):re.type===cs.pop&&Sn(w,20)&&r.go(-1,!1)),F(D,ge,w)}).catch(Zr)}))}let Q=Or(),W=Or(),te;function H(B,ce,re){he(B);const D=W.list();return D.length?D.forEach(be=>be(B,ce,re)):console.error(B),Promise.reject(B)}function fe(){return te&&l.value!==sn?Promise.resolve():new Promise((B,ce)=>{Q.add([B,ce])})}function he(B){return te||(te=!B,K(),Q.list().forEach(([ce,re])=>B?re(B):ce()),Q.reset()),B}function Ee(B,ce,re,D){const{scrollBehavior:be}=t;if(!sr||!be)return Promise.resolve();const ge=!re&&Hx(Hu(B.fullPath,0))||(D||!re)&&history.state&&history.state.scroll||null;return ps().then(()=>be(B,ce,ge)).then(w=>w&&Fx(w)).catch(w=>H(w,B,ce))}const Re=B=>r.go(B);let Ge;const ee=new Set,de={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:v,resolve:p,options:t,push:M,replace:R,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:fe,install(B){const ce=this;B.component("RouterLink",cy),B.component("RouterView",Ip),B.config.globalProperties.$router=ce,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>it(l)}),sr&&!Ge&&l.value===sn&&(Ge=!0,M(r.location).catch(be=>{}));const re={};for(const be in sn)Object.defineProperty(re,be,{get:()=>l.value[be],enumerable:!0});B.provide(Mc,ce),B.provide(Lp,ds(re)),B.provide(Ul,l);const D=B.unmount;ee.add(B),B.unmount=function(){ee.delete(B),ee.size<1&&(u=sn,L&&L(),L=null,l.value=sn,Ge=!1,te=!1),D()}}};function pe(B){return B.reduce((ce,re)=>ce.then(()=>E(re)),Promise.resolve())}return de}function py(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Er(u,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Er(u,l))||r.push(l))}return[n,i,r]}const my=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var i;return((i=t.params[n.slice(1)])==null?void 0:i.toString())||""}),Nl=(t,e)=>{const n=t.route.matched.find(r=>{var s;return((s=r.components)==null?void 0:s.default)===t.Component.type}),i=e??(n==null?void 0:n.meta.key)??(n&&my(t.route,n));return typeof i=="function"?i(t.route):i},gy=(t,e)=>({default:()=>t?In(Pg,t===!0?{}:t,e):e});function Ec(t){return Array.isArray(t)?t:[t]}const _y="modulepreload",vy=function(t,e){return t[0]==="."?new URL(t,e).href:t},Qu={},xy=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.all(n.map(l=>{if(l=vy(l,i),l in Qu)return;Qu[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(!!i)for(let d=s.length-1;d>=0;d--){const g=s[d];if(g.href===l&&(!u||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":_y,u||(h.as="script",h.crossOrigin=""),h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((d,g)=>{h.addEventListener("load",d),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}return r.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Ol=(...t)=>xy(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),ba=null,ef=[{name:"index",path:"/",meta:{},alias:[],redirect:ba==null?void 0:ba.redirect,component:()=>Ol(()=>import("./c1j71eaS.js"),[],import.meta.url).then(t=>t.default||t)}],yy=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var i;return e?In(t,e,n):(i=n.default)==null?void 0:i.call(n)}});function tf(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var i;return((i=t.params[n.slice(1)])==null?void 0:i.toString())||""});return typeof e=="function"?e(t):e}function Sy(t,e){return t===e||e===sn?!1:tf(t)!==tf(e)?!0:!t.matched.every((i,r)=>{var s,o;return i.components&&i.components.default===((o=(s=e.matched[r])==null?void 0:s.components)==null?void 0:o.default)})}const My={scrollBehavior(t,e,n){var u;const i=ct(),r=((u=Fn().options)==null?void 0:u.scrollBehaviorType)??"auto";let s=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!s&&e&&t&&o!==!1&&Sy(t,e)&&(s={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:nf(t.hash),behavior:r}:!1;const a=c=>!!(c.meta.pageTransition??Ll),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(c=>{i.hooks.hookOnce(l,async()=>{await new Promise(f=>setTimeout(f,0)),t.hash&&(s={el:t.hash,top:nf(t.hash),behavior:r}),c(s)})})}};function nf(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}const Ey={hashMode:!1,scrollBehaviorType:"auto"},Ft={...Ey,...My},Ty=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const i=ct(),r=Fn();if(([e,n]=as(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=Zo({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=r.beforeResolve(u=>{if(a(),u===t){const c=r.afterEach(async()=>{c(),await i.runWithContext(()=>ar(o)),window.history.pushState({},"",t.fullPath)});return!1}})},by=async t=>{let e,n;const i=([e,n]=as(()=>yc(t.path)),e=await e,n(),e);if(i.redirect)return Hi(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},Ay=[Ty,by],Qr={};function wy(t,e,n){const{pathname:i,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){const u=s.includes(t.slice(o))?t.slice(o).length:1;let c=s.slice(u);return c[0]!=="/"&&(c="/"+c),Eu(c,"")}const a=Eu(i,t),l=!n||yv(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":r)+s}const Ry=pi({name:"nuxt:router",enforce:"pre",async setup(t){var m,p;let e,n,i=vc().app.baseURL;Ft.hashMode&&!i.includes("#")&&(i+="#");const r=((m=Ft.history)==null?void 0:m.call(Ft,i))??(Ft.hashMode?Gx(i):wp(i)),s=((p=Ft.routes)==null?void 0:p.call(Ft,ef))??ef;let o;const a=dy({...Ft,scrollBehavior:(S,_,M)=>{if(_===sn){o=M;return}if(Ft.scrollBehavior){if(a.options.scrollBehavior=Ft.scrollBehavior,"scrollRestoration"in window.history){const R=a.beforeEach(()=>{R(),window.history.scrollRestoration="manual"})}return Ft.scrollBehavior(S,sn,o||M)}},history:r,routes:s});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=ts(a.currentRoute.value);a.afterEach((S,_)=>{l.value=_}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=wy(i,window.location,t.payload.path),c=ts(a.currentRoute.value),f=()=>{c.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((S,_)=>{var M,R,T,C;((R=(M=S.matched[0])==null?void 0:M.components)==null?void 0:R.default)===((C=(T=_.matched[0])==null?void 0:T.components)==null?void 0:C.default)&&f()});const h={};for(const S in c.value)Object.defineProperty(h,S,{get:()=>c.value[S]});t._route=ds(h),t._middleware=t._middleware||{global:[],named:{}};try{[e,n]=as(()=>a.isReady()),await e,n()}catch(S){[e,n]=as(()=>t.runWithContext(()=>ar(S))),await e,n()}const d=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const g=t.payload.state._layout;a.beforeEach(async(S,_)=>{var M;await t.callHook("page:loading:start"),S.meta=di(S.meta),t.isHydrating&&g&&!yr(S.meta.layout)&&(S.meta.layout=g),t._processingMiddleware=!0;{const R=new Set([...Ay,...t._middleware.global]);for(const T of S.matched){const C=T.meta.middleware;if(C)for(const I of Ec(C))R.add(I)}{const T=await t.runWithContext(()=>yc(S.path));if(T.appMiddleware)for(const C in T.appMiddleware)T.appMiddleware[C]?R.add(C):R.delete(C)}for(const T of R){const C=typeof T=="string"?t._middleware.named[T]||await((M=Qr[T])==null?void 0:M.call(Qr).then(E=>E.default||E)):T;if(!C)throw new Error(`Unknown route middleware: '${T}'.`);const I=await t.runWithContext(()=>C(S,_));if(!t.payload.serverRendered&&t.isHydrating&&(I===!1||I instanceof Error)){const E=I||Al({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>ar(E)),!1}if(I!==!0&&(I||I===!1))return I}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")});const v=Ko();return a.afterEach(async(S,_,M)=>{delete t._processingMiddleware,!t.isHydrating&&v.value&&await t.runWithContext(f0),M&&await t.callHook("page:loading:end"),S.matched.length===0&&await t.runWithContext(()=>ar(Al({statusCode:404,fatal:!1,statusMessage:`Page not found: ${S.fullPath}`,data:{path:S.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in d&&(d.name=void 0),await a.replace({...d,force:!0}),a.options.scrollBehavior=Ft.scrollBehavior}catch(S){await t.runWithContext(()=>ar(S))}}),{provide:{router:a}}}}),rf=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),Pw=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Dp=t=>{const e=ct();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{rf(t)}):rf(t)},Cy=pi({name:"nuxt:payload",setup(t){Fn().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const i=await Nu(e.path);i&&Object.assign(t.static.data,i.data)}),Dp(()=>{var e;t.hooks.hook("link:prefetch",async n=>{jo(n).protocol||await Nu(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Jo,1e3)})}}),Py=pi(t=>{let e;async function n(){const i=await Jo();e&&clearTimeout(e),e=setTimeout(n,1e3*60*60);try{const r=await $fetch(_c("builds/latest.json")+`?${Date.now()}`);r.id!==i.id&&t.hooks.callHook("app:manifest:update",r)}catch{}}Dp(()=>{e=setTimeout(n,1e3*60*60)})}),Ly=pi({name:"nuxt:global-components"}),Hs={},Iy=pi({name:"nuxt:prefetch",setup(t){const e=Fn();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var r;const i=(r=n==null?void 0:n.meta)==null?void 0:r.layout;i&&typeof Hs[i]=="function"&&await Hs[i]()})}),t.hooks.hook("link:prefetch",n=>{if(Hi(n))return;const i=e.resolve(n);if(!i)return;const r=i.meta.layout;let s=Ec(i.meta.middleware);s=s.filter(o=>typeof o=="string");for(const o of s)typeof Qr[o]=="function"&&Qr[o]();r&&typeof Hs[r]=="function"&&Hs[r]()})}});function Dy(t={}){const e=t.path||window.location.pathname;let n={};try{n=Ao(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:ct().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const Uy=pi({name:"nuxt:chunk-reload",setup(t){const e=Fn(),n=vc(),i=new Set;e.beforeEach(()=>{i.clear()}),t.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const a="href"in s&&s.href[0]==="#"?n.app.baseURL+s.href:mc(n.app.baseURL,s.fullPath);Dy({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}}),Ny=[ux,hx,Ry,Cy,Py,Ly,Iy,Uy],Oy=1024,Fy=async()=>{const t=st(null),e=st(0),n=new(window.AudioContext||window.webkitAudioContext),i=n.createAnalyser();i.fftSize=Oy;const r=i.frequencyBinCount,s=new Uint8Array(i.frequencyBinCount),o=await navigator.mediaDevices.getUserMedia({audio:!0});n.createMediaStreamSource(o).connect(i);const l=()=>{i.getByteFrequencyData(s);const u=s.reduce((c,f)=>c+f,0)/s.length;e.value=u,t.value=requestAnimationFrame(l)};return l(),{bufferLength:r,dataArray:s,audioContext:n,animationFrameId:t,volumeRef:e}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tc="164",By=0,sf=1,Hy=2,Up=1,ky=2,wn=3,ci=0,Dt=1,Cn=2,oi=0,_r=1,of=2,af=3,lf=4,zy=5,Pi=100,Vy=101,Gy=102,Wy=103,Xy=104,qy=200,$y=201,jy=202,Yy=203,Fl=204,Bl=205,Ky=206,Zy=207,Jy=208,Qy=209,eS=210,tS=211,nS=212,iS=213,rS=214,sS=0,oS=1,aS=2,Lo=3,lS=4,cS=5,uS=6,fS=7,Np=0,hS=1,dS=2,ai=0,pS=1,mS=2,gS=3,_S=4,vS=5,xS=6,yS=7,Op=300,br=301,Ar=302,Hl=303,kl=304,ea=306,zl=1e3,Ii=1001,Vl=1002,Qt=1003,SS=1004,ks=1005,ln=1006,Aa=1007,Di=1008,ui=1009,MS=1010,ES=1011,Fp=1012,Bp=1013,wr=1014,ni=1015,ta=1016,Hp=1017,kp=1018,xs=1020,TS=35902,bS=1021,AS=1022,gn=1023,wS=1024,RS=1025,vr=1026,us=1027,CS=1028,zp=1029,PS=1030,Vp=1031,Gp=1033,wa=33776,Ra=33777,Ca=33778,Pa=33779,cf=35840,uf=35841,ff=35842,hf=35843,df=36196,pf=37492,mf=37496,gf=37808,_f=37809,vf=37810,xf=37811,yf=37812,Sf=37813,Mf=37814,Ef=37815,Tf=37816,bf=37817,Af=37818,wf=37819,Rf=37820,Cf=37821,La=36492,Pf=36494,Lf=36495,LS=36283,If=36284,Df=36285,Uf=36286,IS=3200,DS=3201,US=0,NS=1,ti="",hn="srgb",mi="srgb-linear",bc="display-p3",na="display-p3-linear",Io="linear",et="srgb",Do="rec709",Uo="p3",zi=7680,Nf=519,OS=512,FS=513,BS=514,Wp=515,HS=516,kS=517,zS=518,VS=519,Of=35044,Ff="300 es",Pn=2e3,No=2001;class Lr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ia=Math.PI/180,Gl=180/Math.PI;function ys(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[t&255]+Et[t>>8&255]+Et[t>>16&255]+Et[t>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[n&63|128]+Et[n>>8&255]+"-"+Et[n>>16&255]+Et[n>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function It(t,e,n){return Math.max(e,Math.min(n,t))}function GS(t,e){return(t%e+e)%e}function Da(t,e,n){return(1-n)*t+n*e}function Fr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Pt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=r[0],m=r[3],p=r[6],S=r[1],_=r[4],M=r[7],R=r[2],T=r[5],C=r[8];return s[0]=o*v+a*S+l*R,s[3]=o*m+a*_+l*T,s[6]=o*p+a*M+l*C,s[1]=u*v+c*S+f*R,s[4]=u*m+c*_+f*T,s[7]=u*p+c*M+f*C,s[2]=h*v+d*S+g*R,s[5]=h*m+d*_+g*T,s[8]=h*p+d*M+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,d=u*s-o*l,g=n*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(c*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=d*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ua.makeScale(e,n)),this}rotate(e){return this.premultiply(Ua.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ua.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new He;function Xp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Oo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function WS(){const t=Oo("canvas");return t.style.display="block",t}const Bf={};function XS(t){t in Bf||(Bf[t]=!0,console.warn(t))}const Hf=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kf=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zs={[mi]:{transfer:Io,primaries:Do,toReference:t=>t,fromReference:t=>t},[hn]:{transfer:et,primaries:Do,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[na]:{transfer:Io,primaries:Uo,toReference:t=>t.applyMatrix3(kf),fromReference:t=>t.applyMatrix3(Hf)},[bc]:{transfer:et,primaries:Uo,toReference:t=>t.convertSRGBToLinear().applyMatrix3(kf),fromReference:t=>t.applyMatrix3(Hf).convertLinearToSRGB()}},qS=new Set([mi,na]),Je={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!qS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=zs[e].toReference,r=zs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return zs[t].primaries},getTransfer:function(t){return t===ti?Io:zs[t].transfer}};function xr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Na(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Vi;class $S{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vi===void 0&&(Vi=Oo("canvas")),Vi.width=e.width,Vi.height=e.height;const i=Vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Oo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xr(n[i]/255)*255):n[i]=xr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jS=0;class qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oa(r[o].image)):s.push(Oa(r[o]))}else s=Oa(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Oa(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$S.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YS=0;class Ut extends Lr{constructor(e=Ut.DEFAULT_IMAGE,n=Ut.DEFAULT_MAPPING,i=Ii,r=Ii,s=ln,o=Di,a=gn,l=ui,u=Ut.DEFAULT_ANISOTROPY,c=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=ys(),this.name="",this.source=new qp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Op;Ut.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(d+1)/2,R=(p+1)/2,T=(c+h)/4,C=(f+v)/4,I=(g+m)/4;return _>M&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=C/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=I/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=I/s),this.set(i,r,s,n),this}let S=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-c)*(h-c));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-v)/S,this.z=(h-c)/S,this.w=Math.acos((u+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KS extends Lr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new qp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends KS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $p extends Ut{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ZS extends Ut{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ss{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==h||u!==d||c!==g){let m=1-a;const p=l*h+u*d+c*g+f*v,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const R=Math.sqrt(_),T=Math.atan2(R,p*S);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const M=a*S;if(l=l*m+h*M,u=u*m+d*M,c=c*m+g*M,f=f*m+v*M,m===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=R,u*=R,c*=R,f*=R}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[n]=a*g+c*f+l*d-u*h,e[n+1]=l*g+c*h+u*f-a*d,e[n+2]=u*g+c*d+a*h-l*f,e[n+3]=c*g-a*f-l*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"YXZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"ZXY":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"ZYX":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"YZX":this._x=h*c*f+u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f-h*d*g;break;case"XZY":this._x=h*c*f-u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new Z,zf=new Ss;class Ms{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tn):tn.fromBufferAttribute(s,o),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vs.copy(i.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Gs.subVectors(this.max,Br),Gi.subVectors(e.a,Br),Wi.subVectors(e.b,Br),Xi.subVectors(e.c,Br),Wn.subVectors(Wi,Gi),Xn.subVectors(Xi,Wi),yi.subVectors(Gi,Xi);let n=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-yi.z,yi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,yi.z,0,-yi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-yi.y,yi.x,0];return!Ba(n,Gi,Wi,Xi,Gs)||(n=[1,0,0,0,1,0,0,0,1],!Ba(n,Gi,Wi,Xi,Gs))?!1:(Ws.crossVectors(Wn,Xn),n=[Ws.x,Ws.y,Ws.z],Ba(n,Gi,Wi,Xi,Gs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],tn=new Z,Vs=new Ms,Gi=new Z,Wi=new Z,Xi=new Z,Wn=new Z,Xn=new Z,yi=new Z,Br=new Z,Gs=new Z,Ws=new Z,Si=new Z;function Ba(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Si.fromArray(t,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=e.dot(Si),u=n.dot(Si),c=i.dot(Si);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const JS=new Ms,Hr=new Z,Ha=new Z;class Ac{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):JS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const n=Hr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(Ha)),this.expandByPoint(Hr.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new Z,ka=new Z,Xs=new Z,qn=new Z,za=new Z,qs=new Z,Va=new Z;class QS{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=En.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,n),En.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ka.copy(e).add(n).multiplyScalar(.5),Xs.copy(n).sub(e).normalize(),qn.copy(this.origin).sub(ka);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Xs),a=qn.dot(this.direction),l=-qn.dot(Xs),u=qn.lengthSq(),c=Math.abs(1-o*o);let f,h,d,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const v=1/c;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ka).addScaledVector(Xs,h),d}intersectSphere(e,n){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),r=En.dot(En)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,n,i,r,s){za.subVectors(n,e),qs.subVectors(i,e),Va.crossVectors(za,qs);let o=this.direction.dot(Va),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(qs.crossVectors(qn,qs));if(l<0)return null;const u=a*this.direction.dot(za.cross(qn));if(u<0||l+u>o)return null;const c=-a*qn.dot(Va);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,a,l,u,c,f,h,d,g,v,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,h,d,g,v,m)}set(e,n,i,r,s,o,a,l,u,c,f,h,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,d=o*f,g=a*c,v=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=d+g*u,n[5]=h-v*u,n[9]=-a*l,n[2]=v-h*u,n[6]=g+d*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,d=l*f,g=u*c,v=u*f;n[0]=h+v*a,n[4]=g*a-d,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=d*a-g,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,d=l*f,g=u*c,v=u*f;n[0]=h-v*a,n[4]=-o*f,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*c,n[9]=v-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,d=o*f,g=a*c,v=a*f;n[0]=l*c,n[4]=g*u-d,n[8]=h*u+v,n[1]=l*f,n[5]=v*u+h,n[9]=d*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*u,g=a*l,v=a*u;n[0]=l*c,n[4]=v-h*f,n[8]=g*f+d,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=d*f+g,n[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*u,g=a*l,v=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+v,n[5]=o*c,n[9]=d*f-g,n[2]=g*f-d,n[6]=a*c,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eM,e,tM)}lookAt(e,n,i){const r=this.elements;return Bt.subVectors(e,n),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),$n.crossVectors(i,Bt),$n.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),$n.crossVectors(i,Bt)),$n.normalize(),$s.crossVectors(Bt,$n),r[0]=$n.x,r[4]=$s.x,r[8]=Bt.x,r[1]=$n.y,r[5]=$s.y,r[9]=Bt.y,r[2]=$n.z,r[6]=$s.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],_=i[7],M=i[11],R=i[15],T=r[0],C=r[4],I=r[8],E=r[12],y=r[1],F=r[5],O=r[9],L=r[13],K=r[2],Q=r[6],W=r[10],te=r[14],H=r[3],fe=r[7],he=r[11],Ee=r[15];return s[0]=o*T+a*y+l*K+u*H,s[4]=o*C+a*F+l*Q+u*fe,s[8]=o*I+a*O+l*W+u*he,s[12]=o*E+a*L+l*te+u*Ee,s[1]=c*T+f*y+h*K+d*H,s[5]=c*C+f*F+h*Q+d*fe,s[9]=c*I+f*O+h*W+d*he,s[13]=c*E+f*L+h*te+d*Ee,s[2]=g*T+v*y+m*K+p*H,s[6]=g*C+v*F+m*Q+p*fe,s[10]=g*I+v*O+m*W+p*he,s[14]=g*E+v*L+m*te+p*Ee,s[3]=S*T+_*y+M*K+R*H,s[7]=S*C+_*F+M*Q+R*fe,s[11]=S*I+_*O+M*W+R*he,s[15]=S*E+_*L+M*te+R*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*d-i*l*d)+v*(+n*l*d-n*u*h+s*o*h-r*o*d+r*u*c-s*l*c)+m*(+n*u*f-n*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+p*(-r*a*c-n*l*f+n*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=f*m*u-v*h*u+v*l*d-a*m*d-f*l*p+a*h*p,_=g*h*u-c*m*u-g*l*d+o*m*d+c*l*p-o*h*p,M=c*v*u-g*f*u+g*a*d-o*v*d-c*a*p+o*f*p,R=g*f*l-c*v*l-g*a*h+o*v*h+c*a*m-o*f*m,T=n*S+i*_+r*M+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=S*C,e[1]=(v*h*s-f*m*s-v*r*d+i*m*d+f*r*p-i*h*p)*C,e[2]=(a*m*s-v*l*s+v*r*u-i*m*u-a*r*p+i*l*p)*C,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*d-i*l*d)*C,e[4]=_*C,e[5]=(c*m*s-g*h*s+g*r*d-n*m*d-c*r*p+n*h*p)*C,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*p-n*l*p)*C,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*d+n*l*d)*C,e[8]=M*C,e[9]=(g*f*s-c*v*s-g*i*d+n*v*d+c*i*p-n*f*p)*C,e[10]=(o*v*s-g*a*s+g*i*u-n*v*u-o*i*p+n*a*p)*C,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*d-n*a*d)*C,e[12]=R*C,e[13]=(c*v*r-g*f*r+g*i*h-n*v*h-c*i*m+n*f*m)*C,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*C,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,h=s*u,d=s*c,g=s*f,v=o*c,m=o*f,p=a*f,S=l*u,_=l*c,M=l*f,R=i.x,T=i.y,C=i.z;return r[0]=(1-(v+p))*R,r[1]=(d+M)*R,r[2]=(g-_)*R,r[3]=0,r[4]=(d-M)*T,r[5]=(1-(h+p))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(g+_)*C,r[9]=(m-S)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),a=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const u=1/s,c=1/o,f=1/a;return nn.elements[0]*=u,nn.elements[1]*=u,nn.elements[2]*=u,nn.elements[4]*=c,nn.elements[5]*=c,nn.elements[6]*=c,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,n.setFromRotationMatrix(nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Pn){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let d,g;if(a===Pn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===No)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Pn){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),h=(n+e)*u,d=(i+r)*c;let g,v;if(a===Pn)g=(o+s)*f,v=-2*f;else if(a===No)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qi=new Z,nn=new pt,eM=new Z(0,0,0),tM=new Z(1,1,1),$n=new Z,$s=new Z,Bt=new Z,Vf=new pt,Gf=new Ss;class Un{constructor(e=0,n=0,i=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-It(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gf.setFromEuler(this),this.setFromQuaternion(Gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class jp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nM=0;const Wf=new Z,$i=new Ss,Tn=new pt,js=new Z,kr=new Z,iM=new Z,rM=new Ss,Xf=new Z(1,0,0),qf=new Z(0,1,0),$f=new Z(0,0,1),jf={type:"added"},sM={type:"removed"},ji={type:"childadded",child:null},Ga={type:"childremoved",child:null};class Xt extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new Z,n=new Un,i=new Ss,r=new Z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new He}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $i.setFromAxisAngle(e,n),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,n){return $i.setFromAxisAngle(e,n),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Xf,e)}rotateY(e){return this.rotateOnAxis(qf,e)}rotateZ(e){return this.rotateOnAxis($f,e)}translateOnAxis(e,n){return Wf.copy(e).applyQuaternion(this.quaternion),this.position.add(Wf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xf,e)}translateY(e){return this.translateOnAxis(qf,e)}translateZ(e){return this.translateOnAxis($f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?js.copy(e):js.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(kr,js,this.up):Tn.lookAt(js,kr,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Tn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jf),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sM),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jf),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,iM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,rM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new Z(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new Z,bn=new Z,Wa=new Z,An=new Z,Yi=new Z,Ki=new Z,Yf=new Z,Xa=new Z,qa=new Z,$a=new Z;class mn{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),rn.subVectors(e,n),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){rn.subVectors(r,n),bn.subVectors(i,n),Wa.subVectors(e,n);const o=rn.dot(rn),a=rn.dot(bn),l=rn.dot(Wa),u=bn.dot(bn),c=bn.dot(Wa),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static isFrontFacing(e,n,i,r){return rn.subVectors(i,n),bn.subVectors(e,n),rn.cross(bn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),rn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return mn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return mn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,i),Ki.subVectors(s,i),Xa.subVectors(e,i);const l=Yi.dot(Xa),u=Ki.dot(Xa);if(l<=0&&u<=0)return n.copy(i);qa.subVectors(e,r);const c=Yi.dot(qa),f=Ki.dot(qa);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Yi,o);$a.subVectors(e,s);const d=Yi.dot($a),g=Ki.dot($a);if(g>=0&&d<=g)return n.copy(s);const v=d*u-l*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(Ki,a);const m=c*g-d*f;if(m<=0&&f-c>=0&&d-g>=0)return Yf.subVectors(s,r),a=(f-c)/(f-c+(d-g)),n.copy(r).addScaledVector(Yf,a);const p=1/(m+v+h);return o=v*p,a=h*p,n.copy(i).addScaledVector(Yi,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function ja(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=GS(e,1),n=It(n,0,1),i=It(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ja(o,s,e+1/3),this.g=ja(o,s,e),this.b=ja(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hn){const i=Yp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Je.fromWorkingColorSpace(Tt.copy(this),e),Math.round(It(Tt.r*255,0,255))*65536+Math.round(It(Tt.g*255,0,255))*256+Math.round(It(Tt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Tt.copy(this),n);const i=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Tt.copy(this),n),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=hn){Je.fromWorkingColorSpace(Tt.copy(this),e);const n=Tt.r,i=Tt.g,r=Tt.b;return e!==hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+n,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(jn),e.getHSL(Ys);const i=Da(jn.h,Ys.h,n),r=Da(jn.s,Ys.s,n),s=Da(jn.l,Ys.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ye;Ye.NAMES=Yp;let oM=0;class Es extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=_r,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Bl,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==Bl&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kp extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new Z,Ks=new $e;class vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Of,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return XS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ks.fromBufferAttribute(this,n),Ks.applyMatrix3(e),this.setXY(n,Ks.x,Ks.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyMatrix3(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyMatrix4(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyNormalMatrix(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.transformDirection(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Of&&(e.usage=this.usage),e}}class Zp extends vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Jp extends vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Oi extends vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let aM=0;const jt=new pt,Ya=new Xt,Zi=new Z,Ht=new Ms,zr=new Ms,_t=new Z;class ki extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xp(e)?Jp:Zp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,n,i){return jt.makeTranslation(e,n,i),this.applyMatrix4(jt),this}scale(e,n,i){return jt.makeScale(e,n,i),this.applyMatrix4(jt),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Ht.min,zr.min),Ht.expandByPoint(_t),_t.addVectors(Ht.max,zr.max),Ht.expandByPoint(_t)):(Ht.expandByPoint(zr.min),Ht.expandByPoint(zr.max))}Ht.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)_t.fromBufferAttribute(a,u),l&&(Zi.fromBufferAttribute(e,u),_t.add(Zi)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new Z,l[I]=new Z;const u=new Z,c=new Z,f=new Z,h=new $e,d=new $e,g=new $e,v=new Z,m=new Z;function p(I,E,y){u.fromBufferAttribute(i,I),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,I),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,y),c.sub(u),f.sub(u),d.sub(h),g.sub(h);const F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(F),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(F),a[I].add(v),a[E].add(v),a[y].add(v),l[I].add(m),l[E].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,E=S.length;I<E;++I){const y=S[I],F=y.start,O=y.count;for(let L=F,K=F+O;L<K;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const _=new Z,M=new Z,R=new Z,T=new Z;function C(I){R.fromBufferAttribute(r,I),T.copy(R);const E=a[I];_.copy(E),_.sub(R.multiplyScalar(R.dot(E))).normalize(),M.crossVectors(T,E);const F=M.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,F)}for(let I=0,E=S.length;I<E;++I){const y=S[I],F=y.start,O=y.count;for(let L=F,K=F+O;L<K;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,u=new Z,c=new Z,f=new Z;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,d=n.count;h<d;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)_t.fromBufferAttribute(e,n),_t.normalize(),e.setXYZ(n,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*c;for(let p=0;p<c;p++)h[g++]=u[d++]}return new vn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ki,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=e(h,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kf=new pt,Mi=new QS,Zs=new Ac,Zf=new Z,Ji=new Z,Qi=new Z,er=new Z,Ka=new Z,Js=new Z,Qs=new $e,eo=new $e,to=new $e,Jf=new Z,Qf=new Z,eh=new Z,no=new Z,io=new Z;class _n extends Xt{constructor(e=new ki,n=new Kp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Ka.fromBufferAttribute(f,e),o?Js.addScaledVector(Ka,c):Js.addScaledVector(Ka.sub(n),c))}n.add(Js)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(Zs.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Zs,Zf)===null||Mi.origin.distanceToSquared(Zf)>(e.far-e.near)**2))&&(Kf.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Kf),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,R=_;M<R;M+=3){const T=a.getX(M),C=a.getX(M+1),I=a.getX(M+2);r=ro(this,p,e,i,u,c,f,T,C,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);r=ro(this,o,e,i,u,c,f,S,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,R=_;M<R;M+=3){const T=M,C=M+1,I=M+2;r=ro(this,p,e,i,u,c,f,T,C,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const S=m,_=m+1,M=m+2;r=ro(this,o,e,i,u,c,f,S,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function lM(t,e,n,i,r,s,o,a){let l;if(e.side===Dt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ci,a),l===null)return null;io.copy(a),io.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(io);return u<n.near||u>n.far?null:{distance:u,point:io.clone(),object:t}}function ro(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ji),t.getVertexPosition(l,Qi),t.getVertexPosition(u,er);const c=lM(t,e,n,i,Ji,Qi,er,no);if(c){r&&(Qs.fromBufferAttribute(r,a),eo.fromBufferAttribute(r,l),to.fromBufferAttribute(r,u),c.uv=mn.getInterpolation(no,Ji,Qi,er,Qs,eo,to,new $e)),s&&(Qs.fromBufferAttribute(s,a),eo.fromBufferAttribute(s,l),to.fromBufferAttribute(s,u),c.uv1=mn.getInterpolation(no,Ji,Qi,er,Qs,eo,to,new $e)),o&&(Jf.fromBufferAttribute(o,a),Qf.fromBufferAttribute(o,l),eh.fromBufferAttribute(o,u),c.normal=mn.getInterpolation(no,Ji,Qi,er,Jf,Qf,eh,new Z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new Z,materialIndex:0};mn.getNormal(Ji,Qi,er,f.normal),c.face=f}return c}class Ts extends ki{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oi(u,3)),this.setAttribute("normal",new Oi(c,3)),this.setAttribute("uv",new Oi(f,2));function g(v,m,p,S,_,M,R,T,C,I,E){const y=M/C,F=R/I,O=M/2,L=R/2,K=T/2,Q=C+1,W=I+1;let te=0,H=0;const fe=new Z;for(let he=0;he<W;he++){const Ee=he*F-L;for(let Re=0;Re<Q;Re++){const Ge=Re*y-O;fe[v]=Ge*S,fe[m]=Ee*_,fe[p]=K,u.push(fe.x,fe.y,fe.z),fe[v]=0,fe[m]=0,fe[p]=T>0?1:-1,c.push(fe.x,fe.y,fe.z),f.push(Re/C),f.push(1-he/I),te+=1}}for(let he=0;he<I;he++)for(let Ee=0;Ee<C;Ee++){const Re=h+Ee+Q*he,Ge=h+Ee+Q*(he+1),ee=h+(Ee+1)+Q*(he+1),de=h+(Ee+1)+Q*he;l.push(Re,Ge,de),l.push(Ge,ee,de),H+=6}a.addGroup(d,H,E),d+=H,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ct(t){const e={};for(let n=0;n<t.length;n++){const i=Rr(t[n]);for(const r in i)e[r]=i[r]}return e}function cM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const uM={clone:Rr,merge:Ct};var fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=hM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=cM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class em extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Pn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new Z,th=new $e,nh=new $e;class Kt extends em{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,n){return this.getViewBounds(e,th,nh),n.subVectors(nh,th)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const tr=-90,nr=1;class dM extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kt(tr,nr,e,n);r.layers=this.layers,this.add(r);const s=new Kt(tr,nr,e,n);s.layers=this.layers,this.add(s);const o=new Kt(tr,nr,e,n);o.layers=this.layers,this.add(o);const a=new Kt(tr,nr,e,n);a.layers=this.layers,this.add(a);const l=new Kt(tr,nr,e,n);l.layers=this.layers,this.add(l);const u=new Kt(tr,nr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===No)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class tm extends Ut{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:br,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pM extends Fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new tm(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ts(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:oi});s.uniforms.tEquirect.value=n;const o=new _n(r,s),a=n.minFilter;return n.minFilter===Di&&(n.minFilter=ln),new dM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Za=new Z,mM=new Z,gM=new He;class wi{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Za.subVectors(i,n).cross(mM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Za),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gM.getNormalMatrix(e),r=this.coplanarPoint(Za).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Ac,so=new Z;class nm{constructor(e=new wi,n=new wi,i=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Pn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],d=r[8],g=r[9],v=r[10],m=r[11],p=r[12],S=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,h-u,m-d,M-p).normalize(),i[1].setComponents(l+s,h+u,m+d,M+p).normalize(),i[2].setComponents(l+o,h+c,m+g,M+S).normalize(),i[3].setComponents(l-o,h-c,m-g,M-S).normalize(),i[4].setComponents(l-a,h-f,m-v,M-_).normalize(),n===Pn)i[5].setComponents(l+a,h+f,m+v,M+_).normalize();else if(n===No)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ei.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(so.x=r.normal.x>0?e.max.x:e.min.x,so.y=r.normal.y>0?e.max.y:e.min.y,so.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function im(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _M(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=t.SHORT;else if(u instanceof Uint32Array)d=t.UNSIGNED_INT;else if(u instanceof Int32Array)d=t.INT;else if(u instanceof Int8Array)d=t.BYTE;else if(u instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,a),f.count===-1&&h.length===0&&t.bufferSubData(u,0,c),h.length!==0){for(let d=0,g=h.length;d<g;d++){const v=h[d];t.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class bs extends ki{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,d=[],g=[],v=[],m=[];for(let p=0;p<c;p++){const S=p*h-o;for(let _=0;_<u;_++){const M=_*f-s;g.push(M,-S,0),v.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const _=S+u*p,M=S+u*(p+1),R=S+1+u*(p+1),T=S+1+u*p;d.push(_,M,T),d.push(M,R,T)}this.setIndex(d),this.setAttribute("position",new Oi(g,3)),this.setAttribute("normal",new Oi(v,3)),this.setAttribute("uv",new Oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.widthSegments,e.heightSegments)}}var vM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,RM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,IM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",YM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,KM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_E=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,DE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,UE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,NE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$T=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,YT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:vM,alphahash_pars_fragment:xM,alphamap_fragment:yM,alphamap_pars_fragment:SM,alphatest_fragment:MM,alphatest_pars_fragment:EM,aomap_fragment:TM,aomap_pars_fragment:bM,batching_pars_vertex:AM,batching_vertex:wM,begin_vertex:RM,beginnormal_vertex:CM,bsdfs:PM,iridescence_fragment:LM,bumpmap_pars_fragment:IM,clipping_planes_fragment:DM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:NM,clipping_planes_vertex:OM,color_fragment:FM,color_pars_fragment:BM,color_pars_vertex:HM,color_vertex:kM,common:zM,cube_uv_reflection_fragment:VM,defaultnormal_vertex:GM,displacementmap_pars_vertex:WM,displacementmap_vertex:XM,emissivemap_fragment:qM,emissivemap_pars_fragment:$M,colorspace_fragment:jM,colorspace_pars_fragment:YM,envmap_fragment:KM,envmap_common_pars_fragment:ZM,envmap_pars_fragment:JM,envmap_pars_vertex:QM,envmap_physical_pars_fragment:uE,envmap_vertex:eE,fog_vertex:tE,fog_pars_vertex:nE,fog_fragment:iE,fog_pars_fragment:rE,gradientmap_pars_fragment:sE,lightmap_pars_fragment:oE,lights_lambert_fragment:aE,lights_lambert_pars_fragment:lE,lights_pars_begin:cE,lights_toon_fragment:fE,lights_toon_pars_fragment:hE,lights_phong_fragment:dE,lights_phong_pars_fragment:pE,lights_physical_fragment:mE,lights_physical_pars_fragment:gE,lights_fragment_begin:_E,lights_fragment_maps:vE,lights_fragment_end:xE,logdepthbuf_fragment:yE,logdepthbuf_pars_fragment:SE,logdepthbuf_pars_vertex:ME,logdepthbuf_vertex:EE,map_fragment:TE,map_pars_fragment:bE,map_particle_fragment:AE,map_particle_pars_fragment:wE,metalnessmap_fragment:RE,metalnessmap_pars_fragment:CE,morphinstance_vertex:PE,morphcolor_vertex:LE,morphnormal_vertex:IE,morphtarget_pars_vertex:DE,morphtarget_vertex:UE,normal_fragment_begin:NE,normal_fragment_maps:OE,normal_pars_fragment:FE,normal_pars_vertex:BE,normal_vertex:HE,normalmap_pars_fragment:kE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:VE,clearcoat_pars_fragment:GE,iridescence_pars_fragment:WE,opaque_fragment:XE,packing:qE,premultiplied_alpha_fragment:$E,project_vertex:jE,dithering_fragment:YE,dithering_pars_fragment:KE,roughnessmap_fragment:ZE,roughnessmap_pars_fragment:JE,shadowmap_pars_fragment:QE,shadowmap_pars_vertex:eT,shadowmap_vertex:tT,shadowmask_pars_fragment:nT,skinbase_vertex:iT,skinning_pars_vertex:rT,skinning_vertex:sT,skinnormal_vertex:oT,specularmap_fragment:aT,specularmap_pars_fragment:lT,tonemapping_fragment:cT,tonemapping_pars_fragment:uT,transmission_fragment:fT,transmission_pars_fragment:hT,uv_pars_fragment:dT,uv_pars_vertex:pT,uv_vertex:mT,worldpos_vertex:gT,background_vert:_T,background_frag:vT,backgroundCube_vert:xT,backgroundCube_frag:yT,cube_vert:ST,cube_frag:MT,depth_vert:ET,depth_frag:TT,distanceRGBA_vert:bT,distanceRGBA_frag:AT,equirect_vert:wT,equirect_frag:RT,linedashed_vert:CT,linedashed_frag:PT,meshbasic_vert:LT,meshbasic_frag:IT,meshlambert_vert:DT,meshlambert_frag:UT,meshmatcap_vert:NT,meshmatcap_frag:OT,meshnormal_vert:FT,meshnormal_frag:BT,meshphong_vert:HT,meshphong_frag:kT,meshphysical_vert:zT,meshphysical_frag:VT,meshtoon_vert:GT,meshtoon_frag:WT,points_vert:XT,points_frag:qT,shadow_vert:$T,shadow_frag:jT,sprite_vert:YT,sprite_frag:KT},me={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},dn={basic:{uniforms:Ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ct([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ct([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ct([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ct([me.points,me.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ct([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ct([me.common,me.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ct([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ct([me.sprite,me.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Ct([me.common,me.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Ct([me.lights,me.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};dn.physical={uniforms:Ct([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const oo={r:0,b:0,g:0},Ti=new Un,ZT=new pt;function JT(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,u,c,f=null,h=0,d=null;function g(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?n:e).get(_)),_}function v(S){let _=!1;const M=g(S);M===null?p(a,l):M&&M.isColor&&(p(M,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function m(S,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===ea)?(c===void 0&&(c=new _n(new Ts(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Rr(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ti.copy(_.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(Ti)),c.material.toneMapped=Je.getTransfer(M.colorSpace)!==et,(f!==M||h!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new _n(new bs(2,2),new Nn({name:"BackgroundMaterial",uniforms:Rr(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Je.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null))}function p(S,_){S.getRGB(oo,Qp(t)),i.buffers.color.setClear(oo.r,oo.g,oo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:v,addToRenderList:m}}function QT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,F,O,L,K){let Q=!1;const W=f(L,O,F);s!==W&&(s=W,u(s.object)),Q=d(y,L,O,K),Q&&g(y,L,O,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(y,F,O,L),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function u(y){return t.bindVertexArray(y)}function c(y){return t.deleteVertexArray(y)}function f(y,F,O){const L=O.wireframe===!0;let K=i[y.id];K===void 0&&(K={},i[y.id]=K);let Q=K[F.id];Q===void 0&&(Q={},K[F.id]=Q);let W=Q[L];return W===void 0&&(W=h(l()),Q[L]=W),W}function h(y){const F=[],O=[],L=[];for(let K=0;K<n;K++)F[K]=0,O[K]=0,L[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:L,object:y,attributes:{},index:null}}function d(y,F,O,L){const K=s.attributes,Q=F.attributes;let W=0;const te=O.getAttributes();for(const H in te)if(te[H].location>=0){const he=K[H];let Ee=Q[H];if(Ee===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor)),he===void 0||he.attribute!==Ee||Ee&&he.data!==Ee.data)return!0;W++}return s.attributesNum!==W||s.index!==L}function g(y,F,O,L){const K={},Q=F.attributes;let W=0;const te=O.getAttributes();for(const H in te)if(te[H].location>=0){let he=Q[H];he===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(he=y.instanceColor));const Ee={};Ee.attribute=he,he&&he.data&&(Ee.data=he.data),K[H]=Ee,W++}s.attributes=K,s.attributesNum=W,s.index=L}function v(){const y=s.newAttributes;for(let F=0,O=y.length;F<O;F++)y[F]=0}function m(y){p(y,0)}function p(y,F){const O=s.newAttributes,L=s.enabledAttributes,K=s.attributeDivisors;O[y]=1,L[y]===0&&(t.enableVertexAttribArray(y),L[y]=1),K[y]!==F&&(t.vertexAttribDivisor(y,F),K[y]=F)}function S(){const y=s.newAttributes,F=s.enabledAttributes;for(let O=0,L=F.length;O<L;O++)F[O]!==y[O]&&(t.disableVertexAttribArray(O),F[O]=0)}function _(y,F,O,L,K,Q,W){W===!0?t.vertexAttribIPointer(y,F,O,K,Q):t.vertexAttribPointer(y,F,O,L,K,Q)}function M(y,F,O,L){v();const K=L.attributes,Q=O.getAttributes(),W=F.defaultAttributeValues;for(const te in Q){const H=Q[te];if(H.location>=0){let fe=K[te];if(fe===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),fe!==void 0){const he=fe.normalized,Ee=fe.itemSize,Re=e.get(fe);if(Re===void 0)continue;const Ge=Re.buffer,ee=Re.type,de=Re.bytesPerElement,pe=ee===t.INT||ee===t.UNSIGNED_INT||fe.gpuType===Bp;if(fe.isInterleavedBufferAttribute){const B=fe.data,ce=B.stride,re=fe.offset;if(B.isInstancedInterleavedBuffer){for(let D=0;D<H.locationSize;D++)p(H.location+D,B.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let D=0;D<H.locationSize;D++)m(H.location+D);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let D=0;D<H.locationSize;D++)_(H.location+D,Ee/H.locationSize,ee,he,ce*de,(re+Ee/H.locationSize*D)*de,pe)}else{if(fe.isInstancedBufferAttribute){for(let B=0;B<H.locationSize;B++)p(H.location+B,fe.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let B=0;B<H.locationSize;B++)m(H.location+B);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let B=0;B<H.locationSize;B++)_(H.location+B,Ee/H.locationSize,ee,he,Ee*de,Ee/H.locationSize*B*de,pe)}}else if(W!==void 0){const he=W[te];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(H.location,he);break;case 3:t.vertexAttrib3fv(H.location,he);break;case 4:t.vertexAttrib4fv(H.location,he);break;default:t.vertexAttrib1fv(H.location,he)}}}}S()}function R(){I();for(const y in i){const F=i[y];for(const O in F){const L=F[O];for(const K in L)c(L[K].object),delete L[K];delete F[O]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const F=i[y.id];for(const O in F){const L=F[O];for(const K in L)c(L[K].object),delete L[K];delete F[O]}delete i[y.id]}function C(y){for(const F in i){const O=i[F];if(O[y.id]===void 0)continue;const L=O[y.id];for(const K in L)c(L[K].object),delete L[K];delete O[y.id]}}function I(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function eb(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<f;d++)this.render(u[d],c[d]);else{h.multiDrawArraysWEBGL(i,u,0,c,0,f);let d=0;for(let g=0;g<f;g++)d+=c[g];n.update(d,i,1)}}function l(u,c,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=c[v];for(let v=0;v<h.length;v++)n.update(g,i,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==gn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ui&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ni&&!C)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:M,maxSamples:R}}function nb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new wi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const S=s?0:i,_=S*4;let M=p.clippingState||null;l.value=M,M=c(g,h,_,d);for(let R=0;R!==_;++R)M[R]=n[R];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=d;_!==v;++_,M+=4)o.copy(f[_]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ib(t){let e=new WeakMap;function n(o,a){return a===Hl?o.mapping=br:a===kl&&(o.mapping=Ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hl||a===kl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new pM(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class rb extends em{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const lr=4,ih=[.125,.215,.35,.446,.526,.582],Li=20,Ja=new rb,rh=new Ye;let Qa=null,el=0,tl=0,nl=!1;const Ri=(1+Math.sqrt(5))/2,ir=1/Ri,sh=[new Z(-Ri,ir,0),new Z(Ri,ir,0),new Z(-ir,0,Ri),new Z(ir,0,Ri),new Z(0,Ri,-ir),new Z(0,Ri,ir),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Qa=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===br||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ta,format:gn,colorSpace:mi,depthBuffer:!1},r=ah(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sb(s)),this._blurMaterial=ob(s,e,n)}return r}_compileMaterial(e){const n=new _n(this._lodPlanes[0],e);this._renderer.compile(n,Ja)}_sceneToCubeUV(e,n,i,r){const a=new Kt(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(rh),c.toneMapping=ai,c.autoClear=!1;const d=new Kp({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new _n(new Ts,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(rh),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const _=this._cubeSize;ao(r,S*_,p>2?_:0,_,_),c.setRenderTarget(r),v&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===br||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ao(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ja)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sh[(r-s-1)%sh.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new _n(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Li-1),v=s/g,m=isFinite(s)?1+Math.floor(c*v):Li;m>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const p=[];let S=0;for(let C=0;C<Li;++C){const I=C/v,E=Math.exp(-I*I/2);p.push(E),C===0?S+=E:C<m&&(S+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const M=this._sizeLods[r],R=3*M*(r>_-lr?r-_+lr:0),T=4*(this._cubeSize-M);ao(n,R,T,3*M,2*M),l.setRenderTarget(n),l.render(f,Ja)}}function sb(t){const e=[],n=[],i=[];let r=t;const s=t-lr+1+ih.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-lr?l=ih[o-t+lr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*d),_=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let T=0;T<d;T++){const C=T%3*2/3-1,I=T>2?0:-1,E=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];S.set(E,v*g*T),_.set(h,m*g*T);const y=[T,T,T,T,T,T];M.set(y,p*g*T)}const R=new ki;R.setAttribute("position",new vn(S,v)),R.setAttribute("uv",new vn(_,m)),R.setAttribute("faceIndex",new vn(M,p)),e.push(R),r>lr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ah(t,e,n){const i=new Fi(t,e,n);return i.texture.mapping=ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ao(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ob(t,e,n){const i=new Float32Array(Li),r=new Z(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function lh(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ch(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ab(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Hl||l===kl,c=l===br||l===Ar;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new oh(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&r(d)?(n===null&&(n=new oh(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function lb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cb(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],t.ARRAY_BUFFER)}}function u(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let _=0,M=S.length;_<M;_+=3){const R=S[_+0],T=S[_+1],C=S[_+2];h.push(R,T,T,C,C,R)}}else if(g!==void 0){const S=g.array;v=g.version;for(let _=0,M=S.length/3-1;_<M;_+=3){const R=_+0,T=_+1,C=_+2;h.push(R,T,T,C,C,R)}}else return;const m=new(Xp(h)?Jp:Zp)(h,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function c(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function ub(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*o),n.update(d,i,1)}function u(h,d,g){g!==0&&(t.drawElementsInstanced(i,d,s,h*o,g),n.update(d,i,g))}function c(h,d,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(h[m]/o,d[m]);else{v.multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];n.update(m,i,1)}}function f(h,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)u(h[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S];for(let S=0;S<v.length;S++)n.update(p,i,v[S])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function fb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hb(t,e,n){const i=new WeakMap,r=new xt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let _=0;d===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let M=a.attributes.position.count*_,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*R*4*f),C=new $p(T,M,R,f);C.type=ni,C.needsUpdate=!0;const I=_*4;for(let y=0;y<f;y++){const F=m[y],O=p[y],L=S[y],K=M*R*4*y;for(let Q=0;Q<F.count;Q++){const W=Q*I;d===!0&&(r.fromBufferAttribute(F,Q),T[K+W+0]=r.x,T[K+W+1]=r.y,T[K+W+2]=r.z,T[K+W+3]=0),g===!0&&(r.fromBufferAttribute(O,Q),T[K+W+4]=r.x,T[K+W+5]=r.y,T[K+W+6]=r.z,T[K+W+7]=0),v===!0&&(r.fromBufferAttribute(L,Q),T[K+W+8]=r.x,T[K+W+9]=r.y,T[K+W+10]=r.z,T[K+W+11]=L.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new $e(M,R)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let d=0;for(let v=0;v<u.length;v++)d+=u[v];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function db(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class rm extends Ut{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:vr,c!==vr&&c!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===vr&&(i=wr),i===void 0&&c===us&&(i=xs),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const sm=new Ut,om=new rm(1,1);om.compareFunction=Wp;const am=new $p,lm=new ZS,cm=new tm,uh=[],fh=[],hh=new Float32Array(16),dh=new Float32Array(9),ph=new Float32Array(4);function Ir(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=uh[r];if(s===void 0&&(s=new Float32Array(r),uh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ia(t,e){let n=fh[e];n===void 0&&(n=new Int32Array(e),fh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function pb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mt(n,e))return;t.uniform2fv(this.addr,e),gt(n,e)}}function gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(mt(n,e))return;t.uniform3fv(this.addr,e),gt(n,e)}}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mt(n,e))return;t.uniform4fv(this.addr,e),gt(n,e)}}function vb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),gt(n,e)}else{if(mt(n,i))return;ph.set(i),t.uniformMatrix2fv(this.addr,!1,ph),gt(n,i)}}function xb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),gt(n,e)}else{if(mt(n,i))return;dh.set(i),t.uniformMatrix3fv(this.addr,!1,dh),gt(n,i)}}function yb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),gt(n,e)}else{if(mt(n,i))return;hh.set(i),t.uniformMatrix4fv(this.addr,!1,hh),gt(n,i)}}function Sb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mt(n,e))return;t.uniform2iv(this.addr,e),gt(n,e)}}function Eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mt(n,e))return;t.uniform3iv(this.addr,e),gt(n,e)}}function Tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mt(n,e))return;t.uniform4iv(this.addr,e),gt(n,e)}}function bb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mt(n,e))return;t.uniform2uiv(this.addr,e),gt(n,e)}}function wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mt(n,e))return;t.uniform3uiv(this.addr,e),gt(n,e)}}function Rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mt(n,e))return;t.uniform4uiv(this.addr,e),gt(n,e)}}function Cb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?om:sm;n.setTexture2D(e||s,r)}function Pb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||lm,r)}function Lb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||cm,r)}function Ib(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||am,r)}function Db(t){switch(t){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return _b;case 35674:return vb;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return Sb;case 35667:case 35671:return Mb;case 35668:case 35672:return Eb;case 35669:case 35673:return Tb;case 5125:return bb;case 36294:return Ab;case 36295:return wb;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Ub(t,e){t.uniform1fv(this.addr,e)}function Nb(t,e){const n=Ir(e,this.size,2);t.uniform2fv(this.addr,n)}function Ob(t,e){const n=Ir(e,this.size,3);t.uniform3fv(this.addr,n)}function Fb(t,e){const n=Ir(e,this.size,4);t.uniform4fv(this.addr,n)}function Bb(t,e){const n=Ir(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Hb(t,e){const n=Ir(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function kb(t,e){const n=Ir(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zb(t,e){t.uniform1iv(this.addr,e)}function Vb(t,e){t.uniform2iv(this.addr,e)}function Gb(t,e){t.uniform3iv(this.addr,e)}function Wb(t,e){t.uniform4iv(this.addr,e)}function Xb(t,e){t.uniform1uiv(this.addr,e)}function qb(t,e){t.uniform2uiv(this.addr,e)}function $b(t,e){t.uniform3uiv(this.addr,e)}function jb(t,e){t.uniform4uiv(this.addr,e)}function Yb(t,e,n){const i=this.cache,r=e.length,s=ia(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||sm,s[o])}function Kb(t,e,n){const i=this.cache,r=e.length,s=ia(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||lm,s[o])}function Zb(t,e,n){const i=this.cache,r=e.length,s=ia(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||cm,s[o])}function Jb(t,e,n){const i=this.cache,r=e.length,s=ia(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||am,s[o])}function Qb(t){switch(t){case 5126:return Ub;case 35664:return Nb;case 35665:return Ob;case 35666:return Fb;case 35674:return Bb;case 35675:return Hb;case 35676:return kb;case 5124:case 35670:return zb;case 35667:case 35671:return Vb;case 35668:case 35672:return Gb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return qb;case 36295:return $b;case 36296:return jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Jb}}class eA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Db(n.type)}}class tA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Qb(n.type)}}class nA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function mh(t,e){t.seq.push(e),t.map[e.id]=e}function iA(t,e,n){const i=t.name,r=i.length;for(il.lastIndex=0;;){const s=il.exec(i),o=il.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){mh(n,u===void 0?new eA(a,t,e):new tA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new nA(a),mh(n,f)),n=f}}}class _o{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);iA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function gh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rA=37297;let sA=0;function oA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function aA(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Uo&&n===Do?i="LinearDisplayP3ToLinearSRGB":e===Do&&n===Uo&&(i="LinearSRGBToLinearDisplayP3"),t){case mi:case na:return[i,"LinearTransferOETF"];case hn:case bc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function _h(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+oA(t.getShaderSource(e),o)}else return r}function lA(t,e){const n=aA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function cA(t,e){let n;switch(e){case pS:n="Linear";break;case mS:n="Reinhard";break;case gS:n="OptimizedCineon";break;case _S:n="ACESFilmic";break;case xS:n="AgX";break;case yS:n="Neutral";break;case vS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function uA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function fA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Wr(t){return t!==""}function vh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(t){return t.replace(dA,mA)}const pA=new Map;function mA(t,e){let n=Be[e];if(n===void 0){const i=pA.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wl(n)}const gA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(t){return t.replace(gA,_A)}function _A(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ky?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function xA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case br:case Ar:e="ENVMAP_TYPE_CUBE";break;case ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function SA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Np:e="ENVMAP_BLENDING_MULTIPLY";break;case hS:e="ENVMAP_BLENDING_MIX";break;case dS:e="ENVMAP_BLENDING_ADD";break}return e}function MA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function EA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=vA(n),u=xA(n),c=yA(n),f=SA(n),h=MA(n),d=uA(n),g=fA(s),v=r.createProgram();let m,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Sh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[Sh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ai?"#define TONE_MAPPING":"",n.toneMapping!==ai?Be.tonemapping_pars_fragment:"",n.toneMapping!==ai?cA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,lA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wr).join(`
`)),o=Wl(o),o=vh(o,n),o=xh(o,n),a=Wl(a),a=vh(a,n),a=xh(a,n),o=yh(o),a=yh(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=S+m+o,M=S+p+a,R=gh(r,r.VERTEX_SHADER,_),T=gh(r,r.FRAGMENT_SHADER,M);r.attachShader(v,R),r.attachShader(v,T),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(F){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(v).trim(),L=r.getShaderInfoLog(R).trim(),K=r.getShaderInfoLog(T).trim();let Q=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,R,T);else{const te=_h(r,R,"vertex"),H=_h(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+te+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||K==="")&&(W=!1);W&&(F.diagnostics={runnable:Q,programLog:O,vertexShader:{log:L,prefix:m},fragmentShader:{log:K,prefix:p}})}r.deleteShader(R),r.deleteShader(T),I=new _o(r,v),E=hA(r,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,rA)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}let TA=0;class bA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new AA(e),n.set(e,i)),i}}class AA{constructor(e){this.id=TA++,this.code=e,this.usedTimes=0}}function wA(t,e,n,i,r,s,o){const a=new jp,l=new bA,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,y,F,O,L){const K=O.fog,Q=L.geometry,W=E.isMeshStandardMaterial?O.environment:null,te=(E.isMeshStandardMaterial?n:e).get(E.envMap||W),H=te&&te.mapping===ea?te.image.height:null,fe=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const he=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ee=he!==void 0?he.length:0;let Re=0;Q.morphAttributes.position!==void 0&&(Re=1),Q.morphAttributes.normal!==void 0&&(Re=2),Q.morphAttributes.color!==void 0&&(Re=3);let Ge,ee,de,pe;if(fe){const Ke=dn[fe];Ge=Ke.vertexShader,ee=Ke.fragmentShader}else Ge=E.vertexShader,ee=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),pe=l.getFragmentShaderID(E);const B=t.getRenderTarget(),ce=L.isInstancedMesh===!0,re=L.isBatchedMesh===!0,D=!!E.map,be=!!E.matcap,ge=!!te,w=!!E.aoMap,P=!!E.lightMap,z=!!E.bumpMap,q=!!E.normalMap,X=!!E.displacementMap,oe=!!E.emissiveMap,b=!!E.metalnessMap,x=!!E.roughnessMap,U=E.anisotropy>0,N=E.clearcoat>0,G=E.dispersion>0,Y=E.iridescence>0,ae=E.sheen>0,ne=E.transmission>0,se=U&&!!E.anisotropyMap,ye=N&&!!E.clearcoatMap,le=N&&!!E.clearcoatNormalMap,xe=N&&!!E.clearcoatRoughnessMap,De=Y&&!!E.iridescenceMap,we=Y&&!!E.iridescenceThicknessMap,Se=ae&&!!E.sheenColorMap,Ue=ae&&!!E.sheenRoughnessMap,ke=!!E.specularMap,Ve=!!E.specularColorMap,Ce=!!E.specularIntensityMap,k=ne&&!!E.transmissionMap,ue=ne&&!!E.thicknessMap,ie=!!E.gradientMap,_e=!!E.alphaMap,Me=E.alphaTest>0,Xe=!!E.alphaHash,Qe=!!E.extensions;let ot=ai;E.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ot=t.toneMapping);const yt={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:ee,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:re,instancing:ce,instancingColor:ce&&L.instanceColor!==null,instancingMorph:ce&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:mi,alphaToCoverage:!!E.alphaToCoverage,map:D,matcap:be,envMap:ge,envMapMode:ge&&te.mapping,envMapCubeUVHeight:H,aoMap:w,lightMap:P,bumpMap:z,normalMap:q,displacementMap:h&&X,emissiveMap:oe,normalMapObjectSpace:q&&E.normalMapType===NS,normalMapTangentSpace:q&&E.normalMapType===US,metalnessMap:b,roughnessMap:x,anisotropy:U,anisotropyMap:se,clearcoat:N,clearcoatMap:ye,clearcoatNormalMap:le,clearcoatRoughnessMap:xe,dispersion:G,iridescence:Y,iridescenceMap:De,iridescenceThicknessMap:we,sheen:ae,sheenColorMap:Se,sheenRoughnessMap:Ue,specularMap:ke,specularColorMap:Ve,specularIntensityMap:Ce,transmission:ne,transmissionMap:k,thicknessMap:ue,gradientMap:ie,opaque:E.transparent===!1&&E.blending===_r&&E.alphaToCoverage===!1,alphaMap:_e,alphaTest:Me,alphaHash:Xe,combine:E.combine,mapUv:D&&v(E.map.channel),aoMapUv:w&&v(E.aoMap.channel),lightMapUv:P&&v(E.lightMap.channel),bumpMapUv:z&&v(E.bumpMap.channel),normalMapUv:q&&v(E.normalMap.channel),displacementMapUv:X&&v(E.displacementMap.channel),emissiveMapUv:oe&&v(E.emissiveMap.channel),metalnessMapUv:b&&v(E.metalnessMap.channel),roughnessMapUv:x&&v(E.roughnessMap.channel),anisotropyMapUv:se&&v(E.anisotropyMap.channel),clearcoatMapUv:ye&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:we&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(E.sheenRoughnessMap.channel),specularMapUv:ke&&v(E.specularMap.channel),specularColorMapUv:Ve&&v(E.specularColorMap.channel),specularIntensityMapUv:Ce&&v(E.specularIntensityMap.channel),transmissionMapUv:k&&v(E.transmissionMap.channel),thicknessMapUv:ue&&v(E.thicknessMap.channel),alphaMapUv:_e&&v(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(q||U),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!Q.attributes.uv&&(D||_e),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Re,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,useLegacyLights:t._useLegacyLights,decodeVideoTexture:D&&E.map.isVideoTexture===!0&&Je.getTransfer(E.map.colorSpace)===et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Cn,flipSided:E.side===Dt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qe&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return yt.vertexUv1s=u.has(1),yt.vertexUv2s=u.has(2),yt.vertexUv3s=u.has(3),u.clear(),yt}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)y.push(F),y.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(S(y,E),_(y,E),y.push(t.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function S(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function _(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),E.push(a.mask)}function M(E){const y=g[E.type];let F;if(y){const O=dn[y];F=uM.clone(O.uniforms)}else F=E.uniforms;return F}function R(E,y){let F;for(let O=0,L=c.length;O<L;O++){const K=c[O];if(K.cacheKey===y){F=K,++F.usedTimes;break}}return F===void 0&&(F=new EA(t,y,E,s),c.push(F)),F}function T(E){if(--E.usedTimes===0){const y=c.indexOf(E);c[y]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:I}}function RA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function CA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Mh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Eh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,d,g,v,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):n.push(p)}function l(f,h,d,g,v,m){const p=o(f,h,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):n.unshift(p)}function u(f,h){n.length>1&&n.sort(f||CA),i.length>1&&i.sort(h||Mh),r.length>1&&r.sort(h||Mh)}function c(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function PA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Eh,t.set(i,[o])):r>=s.length?(o=new Eh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function LA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new Ye};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function IA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let DA=0;function UA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NA(t){const e=new LA,n=IA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Z);const r=new Z,s=new pt,o=new pt;function a(u,c){let f=0,h=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let g=0,v=0,m=0,p=0,S=0,_=0,M=0,R=0,T=0,C=0,I=0;u.sort(UA);const E=c===!0?Math.PI:1;for(let F=0,O=u.length;F<O;F++){const L=u[F],K=L.color,Q=L.intensity,W=L.distance,te=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=K.r*Q*E,h+=K.g*Q*E,d+=K.b*Q*E;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],Q);I++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const fe=L.shadow,he=n.get(L);he.shadowBias=fe.bias,he.shadowNormalBias=fe.normalBias,he.shadowRadius=fe.radius,he.shadowMapSize=fe.mapSize,i.directionalShadow[g]=he,i.directionalShadowMap[g]=te,i.directionalShadowMatrix[g]=L.shadow.matrix,_++}i.directional[g]=H,g++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(K).multiplyScalar(Q*E),H.distance=W,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[m]=H;const fe=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,fe.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[m]=fe.matrix,L.castShadow){const he=n.get(L);he.shadowBias=fe.bias,he.shadowNormalBias=fe.normalBias,he.shadowRadius=fe.radius,he.shadowMapSize=fe.mapSize,i.spotShadow[m]=he,i.spotShadowMap[m]=te,R++}m++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(K).multiplyScalar(Q),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=H,p++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*E),H.distance=L.distance,H.decay=L.decay,L.castShadow){const fe=L.shadow,he=n.get(L);he.shadowBias=fe.bias,he.shadowNormalBias=fe.normalBias,he.shadowRadius=fe.radius,he.shadowMapSize=fe.mapSize,he.shadowCameraNear=fe.camera.near,he.shadowCameraFar=fe.camera.far,i.pointShadow[v]=he,i.pointShadowMap[v]=te,i.pointShadowMatrix[v]=L.shadow.matrix,M++}i.point[v]=H,v++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(Q*E),H.groundColor.copy(L.groundColor).multiplyScalar(Q*E),i.hemi[S]=H,S++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==g||y.pointLength!==v||y.spotLength!==m||y.rectAreaLength!==p||y.hemiLength!==S||y.numDirectionalShadows!==_||y.numPointShadows!==M||y.numSpotShadows!==R||y.numSpotMaps!==T||y.numLightProbes!==I)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=v,i.hemi.length=S,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=R+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,y.directionalLength=g,y.pointLength=v,y.spotLength=m,y.rectAreaLength=p,y.hemiLength=S,y.numDirectionalShadows=_,y.numPointShadows=M,y.numSpotShadows=R,y.numSpotMaps=T,y.numLightProbes=I,i.version=DA++)}function l(u,c){let f=0,h=0,d=0,g=0,v=0;const m=c.matrixWorldInverse;for(let p=0,S=u.length;p<S;p++){const _=u[p];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(_.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Th(t){const e=new NA(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(c){e.setup(n,c)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function OA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Th(t),e.set(r,[a])):s>=o.length?(a=new Th(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class FA extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BA extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zA(t,e,n){let i=new nm;const r=new $e,s=new $e,o=new xt,a=new FA({depthPacking:DS}),l=new BA,u={},c=n.maxTextureSize,f={[ci]:Dt,[Dt]:ci,[Cn]:Cn},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:HA,fragmentShader:kA}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new ki;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _n(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Up;let p=this.type;this.render=function(T,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),y=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),O=t.state;O.setBlending(oi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const L=p!==wn&&this.type===wn,K=p===wn&&this.type!==wn;for(let Q=0,W=T.length;Q<W;Q++){const te=T[Q],H=te.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const fe=H.getFrameExtents();if(r.multiply(fe),s.copy(H.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/fe.x),r.x=s.x*fe.x,H.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/fe.y),r.y=s.y*fe.y,H.mapSize.y=s.y)),H.map===null||L===!0||K===!0){const Ee=this.type!==wn?{minFilter:Qt,magFilter:Qt}:{};H.map!==null&&H.map.dispose(),H.map=new Fi(r.x,r.y,Ee),H.map.texture.name=te.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const he=H.getViewportCount();for(let Ee=0;Ee<he;Ee++){const Re=H.getViewport(Ee);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),O.viewport(o),H.updateMatrices(te,Ee),i=H.getFrustum(),M(C,I,H.camera,te,this.type)}H.isPointLightShadow!==!0&&this.type===wn&&S(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(E,y,F)};function S(T,C){const I=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fi(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,I,h,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,I,d,v,null)}function _(T,C,I,E){let y=null;const F=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)y=F;else if(y=I.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=y.uuid,L=C.uuid;let K=u[O];K===void 0&&(K={},u[O]=K);let Q=K[L];Q===void 0&&(Q=y.clone(),K[L]=Q,C.addEventListener("dispose",R)),y=Q}if(y.visible=C.visible,y.wireframe=C.wireframe,E===wn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=t.properties.get(y);O.light=I}return y}function M(T,C,I,E,y){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===wn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const L=e.update(T),K=T.material;if(Array.isArray(K)){const Q=L.groups;for(let W=0,te=Q.length;W<te;W++){const H=Q[W],fe=K[H.materialIndex];if(fe&&fe.visible){const he=_(T,fe,E,y);T.onBeforeShadow(t,T,C,I,L,he,H),t.renderBufferDirect(I,null,L,he,T,H),T.onAfterShadow(t,T,C,I,L,he,H)}}}else if(K.visible){const Q=_(T,K,E,y);T.onBeforeShadow(t,T,C,I,L,Q,null),t.renderBufferDirect(I,null,L,Q,T,null),T.onAfterShadow(t,T,C,I,L,Q,null)}}const O=T.children;for(let L=0,K=O.length;L<K;L++)M(O[L],C,I,E,y)}function R(T){T.target.removeEventListener("dispose",R);for(const I in u){const E=u[I],y=T.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function VA(t){function e(){let k=!1;const ue=new xt;let ie=null;const _e=new xt(0,0,0,0);return{setMask:function(Me){ie!==Me&&!k&&(t.colorMask(Me,Me,Me,Me),ie=Me)},setLocked:function(Me){k=Me},setClear:function(Me,Xe,Qe,ot,yt){yt===!0&&(Me*=ot,Xe*=ot,Qe*=ot),ue.set(Me,Xe,Qe,ot),_e.equals(ue)===!1&&(t.clearColor(Me,Xe,Qe,ot),_e.copy(ue))},reset:function(){k=!1,ie=null,_e.set(-1,0,0,0)}}}function n(){let k=!1,ue=null,ie=null,_e=null;return{setTest:function(Me){Me?pe(t.DEPTH_TEST):B(t.DEPTH_TEST)},setMask:function(Me){ue!==Me&&!k&&(t.depthMask(Me),ue=Me)},setFunc:function(Me){if(ie!==Me){switch(Me){case sS:t.depthFunc(t.NEVER);break;case oS:t.depthFunc(t.ALWAYS);break;case aS:t.depthFunc(t.LESS);break;case Lo:t.depthFunc(t.LEQUAL);break;case lS:t.depthFunc(t.EQUAL);break;case cS:t.depthFunc(t.GEQUAL);break;case uS:t.depthFunc(t.GREATER);break;case fS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=Me}},setLocked:function(Me){k=Me},setClear:function(Me){_e!==Me&&(t.clearDepth(Me),_e=Me)},reset:function(){k=!1,ue=null,ie=null,_e=null}}}function i(){let k=!1,ue=null,ie=null,_e=null,Me=null,Xe=null,Qe=null,ot=null,yt=null;return{setTest:function(Ke){k||(Ke?pe(t.STENCIL_TEST):B(t.STENCIL_TEST))},setMask:function(Ke){ue!==Ke&&!k&&(t.stencilMask(Ke),ue=Ke)},setFunc:function(Ke,un,wt){(ie!==Ke||_e!==un||Me!==wt)&&(t.stencilFunc(Ke,un,wt),ie=Ke,_e=un,Me=wt)},setOp:function(Ke,un,wt){(Xe!==Ke||Qe!==un||ot!==wt)&&(t.stencilOp(Ke,un,wt),Xe=Ke,Qe=un,ot=wt)},setLocked:function(Ke){k=Ke},setClear:function(Ke){yt!==Ke&&(t.clearStencil(Ke),yt=Ke)},reset:function(){k=!1,ue=null,ie=null,_e=null,Me=null,Xe=null,Qe=null,ot=null,yt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],d=null,g=!1,v=null,m=null,p=null,S=null,_=null,M=null,R=null,T=new Ye(0,0,0),C=0,I=!1,E=null,y=null,F=null,O=null,L=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,W=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(te)[1]),Q=W>=1):te.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Q=W>=2);let H=null,fe={};const he=t.getParameter(t.SCISSOR_BOX),Ee=t.getParameter(t.VIEWPORT),Re=new xt().fromArray(he),Ge=new xt().fromArray(Ee);function ee(k,ue,ie,_e){const Me=new Uint8Array(4),Xe=t.createTexture();t.bindTexture(k,Xe),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<ie;Qe++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(ue+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return Xe}const de={};de[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),s.setFunc(Lo),z(!1),q(sf),pe(t.CULL_FACE),w(oi);function pe(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function B(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function ce(k,ue){return c[k]!==ue?(t.bindFramebuffer(k,ue),c[k]=ue,k===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=ue),k===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function re(k,ue){let ie=h,_e=!1;if(k){ie=f.get(ue),ie===void 0&&(ie=[],f.set(ue,ie));const Me=k.textures;if(ie.length!==Me.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let Xe=0,Qe=Me.length;Xe<Qe;Xe++)ie[Xe]=t.COLOR_ATTACHMENT0+Xe;ie.length=Me.length,_e=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,_e=!0);_e&&t.drawBuffers(ie)}function D(k){return d!==k?(t.useProgram(k),d=k,!0):!1}const be={[Pi]:t.FUNC_ADD,[Vy]:t.FUNC_SUBTRACT,[Gy]:t.FUNC_REVERSE_SUBTRACT};be[Wy]=t.MIN,be[Xy]=t.MAX;const ge={[qy]:t.ZERO,[$y]:t.ONE,[jy]:t.SRC_COLOR,[Fl]:t.SRC_ALPHA,[eS]:t.SRC_ALPHA_SATURATE,[Jy]:t.DST_COLOR,[Ky]:t.DST_ALPHA,[Yy]:t.ONE_MINUS_SRC_COLOR,[Bl]:t.ONE_MINUS_SRC_ALPHA,[Qy]:t.ONE_MINUS_DST_COLOR,[Zy]:t.ONE_MINUS_DST_ALPHA,[tS]:t.CONSTANT_COLOR,[nS]:t.ONE_MINUS_CONSTANT_COLOR,[iS]:t.CONSTANT_ALPHA,[rS]:t.ONE_MINUS_CONSTANT_ALPHA};function w(k,ue,ie,_e,Me,Xe,Qe,ot,yt,Ke){if(k===oi){g===!0&&(B(t.BLEND),g=!1);return}if(g===!1&&(pe(t.BLEND),g=!0),k!==zy){if(k!==v||Ke!==I){if((m!==Pi||_!==Pi)&&(t.blendEquation(t.FUNC_ADD),m=Pi,_=Pi),Ke)switch(k){case _r:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case of:t.blendFunc(t.ONE,t.ONE);break;case af:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case _r:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case of:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case af:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}p=null,S=null,M=null,R=null,T.set(0,0,0),C=0,v=k,I=Ke}return}Me=Me||ue,Xe=Xe||ie,Qe=Qe||_e,(ue!==m||Me!==_)&&(t.blendEquationSeparate(be[ue],be[Me]),m=ue,_=Me),(ie!==p||_e!==S||Xe!==M||Qe!==R)&&(t.blendFuncSeparate(ge[ie],ge[_e],ge[Xe],ge[Qe]),p=ie,S=_e,M=Xe,R=Qe),(ot.equals(T)===!1||yt!==C)&&(t.blendColor(ot.r,ot.g,ot.b,yt),T.copy(ot),C=yt),v=k,I=!1}function P(k,ue){k.side===Cn?B(t.CULL_FACE):pe(t.CULL_FACE);let ie=k.side===Dt;ue&&(ie=!ie),z(ie),k.blending===_r&&k.transparent===!1?w(oi):w(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const _e=k.stencilWrite;o.setTest(_e),_e&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),oe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):B(t.SAMPLE_ALPHA_TO_COVERAGE)}function z(k){E!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),E=k)}function q(k){k!==By?(pe(t.CULL_FACE),k!==y&&(k===sf?t.cullFace(t.BACK):k===Hy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):B(t.CULL_FACE),y=k}function X(k){k!==F&&(Q&&t.lineWidth(k),F=k)}function oe(k,ue,ie){k?(pe(t.POLYGON_OFFSET_FILL),(O!==ue||L!==ie)&&(t.polygonOffset(ue,ie),O=ue,L=ie)):B(t.POLYGON_OFFSET_FILL)}function b(k){k?pe(t.SCISSOR_TEST):B(t.SCISSOR_TEST)}function x(k){k===void 0&&(k=t.TEXTURE0+K-1),H!==k&&(t.activeTexture(k),H=k)}function U(k,ue,ie){ie===void 0&&(H===null?ie=t.TEXTURE0+K-1:ie=H);let _e=fe[ie];_e===void 0&&(_e={type:void 0,texture:void 0},fe[ie]=_e),(_e.type!==k||_e.texture!==ue)&&(H!==ie&&(t.activeTexture(ie),H=ie),t.bindTexture(k,ue||de[k]),_e.type=k,_e.texture=ue)}function N(){const k=fe[H];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function G(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(k){Re.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Re.copy(k))}function Ue(k){Ge.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Ge.copy(k))}function ke(k,ue){let ie=l.get(ue);ie===void 0&&(ie=new WeakMap,l.set(ue,ie));let _e=ie.get(k);_e===void 0&&(_e=t.getUniformBlockIndex(ue,k.name),ie.set(k,_e))}function Ve(k,ue){const _e=l.get(ue).get(k);a.get(ue)!==_e&&(t.uniformBlockBinding(ue,_e,k.__bindingPointIndex),a.set(ue,_e))}function Ce(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},H=null,fe={},c={},f=new WeakMap,h=[],d=null,g=!1,v=null,m=null,p=null,S=null,_=null,M=null,R=null,T=new Ye(0,0,0),C=0,I=!1,E=null,y=null,F=null,O=null,L=null,Re.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:B,bindFramebuffer:ce,drawBuffers:re,useProgram:D,setBlending:w,setMaterial:P,setFlipSided:z,setCullFace:q,setLineWidth:X,setPolygonOffset:oe,setScissorTest:b,activeTexture:x,bindTexture:U,unbindTexture:N,compressedTexImage2D:G,compressedTexImage3D:Y,texImage2D:De,texImage3D:we,updateUBOMapping:ke,uniformBlockBinding:Ve,texStorage2D:le,texStorage3D:xe,texSubImage2D:ae,texSubImage3D:ne,compressedTexSubImage2D:se,compressedTexSubImage3D:ye,scissor:Se,viewport:Ue,reset:Ce}}function GA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $e,c=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return d?new OffscreenCanvas(b,x):Oo("canvas")}function v(b,x,U){let N=1;const G=oe(b);if((G.width>U||G.height>U)&&(N=U/Math.max(G.width,G.height)),N<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(N*G.width),ae=Math.floor(N*G.height);f===void 0&&(f=g(Y,ae));const ne=x?g(Y,ae):f;return ne.width=Y,ne.height=ae,ne.getContext("2d").drawImage(b,0,0,Y,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+Y+"x"+ae+")."),ne}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Qt&&b.minFilter!==ln}function p(b){t.generateMipmap(b)}function S(b,x,U,N,G=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=x;if(x===t.RED&&(U===t.FLOAT&&(Y=t.R32F),U===t.HALF_FLOAT&&(Y=t.R16F),U===t.UNSIGNED_BYTE&&(Y=t.R8)),x===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.R8UI),U===t.UNSIGNED_SHORT&&(Y=t.R16UI),U===t.UNSIGNED_INT&&(Y=t.R32UI),U===t.BYTE&&(Y=t.R8I),U===t.SHORT&&(Y=t.R16I),U===t.INT&&(Y=t.R32I)),x===t.RG&&(U===t.FLOAT&&(Y=t.RG32F),U===t.HALF_FLOAT&&(Y=t.RG16F),U===t.UNSIGNED_BYTE&&(Y=t.RG8)),x===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(Y=t.RG8UI),U===t.UNSIGNED_SHORT&&(Y=t.RG16UI),U===t.UNSIGNED_INT&&(Y=t.RG32UI),U===t.BYTE&&(Y=t.RG8I),U===t.SHORT&&(Y=t.RG16I),U===t.INT&&(Y=t.RG32I)),x===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),x===t.RGBA){const ae=G?Io:Je.getTransfer(N);U===t.FLOAT&&(Y=t.RGBA32F),U===t.HALF_FLOAT&&(Y=t.RGBA16F),U===t.UNSIGNED_BYTE&&(Y=ae===et?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qt&&b.minFilter!==ln?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function M(b){const x=b.target;x.removeEventListener("dispose",M),T(x),x.isVideoTexture&&c.delete(x)}function R(b){const x=b.target;x.removeEventListener("dispose",R),I(x)}function T(b){const x=i.get(b);if(x.__webglInit===void 0)return;const U=b.source,N=h.get(U);if(N){const G=N[x.__cacheKey];G.usedTimes--,G.usedTimes===0&&C(b),Object.keys(N).length===0&&h.delete(U)}i.remove(b)}function C(b){const x=i.get(b);t.deleteTexture(x.__webglTexture);const U=b.source,N=h.get(U);delete N[x.__cacheKey],o.memory.textures--}function I(b){const x=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(x.__webglFramebuffer[N]))for(let G=0;G<x.__webglFramebuffer[N].length;G++)t.deleteFramebuffer(x.__webglFramebuffer[N][G]);else t.deleteFramebuffer(x.__webglFramebuffer[N]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[N])}else{if(Array.isArray(x.__webglFramebuffer))for(let N=0;N<x.__webglFramebuffer.length;N++)t.deleteFramebuffer(x.__webglFramebuffer[N]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let N=0;N<x.__webglColorRenderbuffer.length;N++)x.__webglColorRenderbuffer[N]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[N]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=b.textures;for(let N=0,G=U.length;N<G;N++){const Y=i.get(U[N]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(U[N])}i.remove(b)}let E=0;function y(){E=0}function F(){const b=E;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),E+=1,b}function O(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function L(b,x){const U=i.get(b);if(b.isVideoTexture&&q(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const N=b.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(U,b,x);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+x)}function K(b,x){const U=i.get(b);if(b.version>0&&U.__version!==b.version){Re(U,b,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+x)}function Q(b,x){const U=i.get(b);if(b.version>0&&U.__version!==b.version){Re(U,b,x);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+x)}function W(b,x){const U=i.get(b);if(b.version>0&&U.__version!==b.version){Ge(U,b,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+x)}const te={[zl]:t.REPEAT,[Ii]:t.CLAMP_TO_EDGE,[Vl]:t.MIRRORED_REPEAT},H={[Qt]:t.NEAREST,[SS]:t.NEAREST_MIPMAP_NEAREST,[ks]:t.NEAREST_MIPMAP_LINEAR,[ln]:t.LINEAR,[Aa]:t.LINEAR_MIPMAP_NEAREST,[Di]:t.LINEAR_MIPMAP_LINEAR},fe={[OS]:t.NEVER,[VS]:t.ALWAYS,[FS]:t.LESS,[Wp]:t.LEQUAL,[BS]:t.EQUAL,[zS]:t.GEQUAL,[HS]:t.GREATER,[kS]:t.NOTEQUAL};function he(b,x){if(x.type===ni&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ln||x.magFilter===Aa||x.magFilter===ks||x.magFilter===Di||x.minFilter===ln||x.minFilter===Aa||x.minFilter===ks||x.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,te[x.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,te[x.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,te[x.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,H[x.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,H[x.minFilter]),x.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Qt||x.minFilter!==ks&&x.minFilter!==Di||x.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ee(b,x){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",M));const N=x.source;let G=h.get(N);G===void 0&&(G={},h.set(N,G));const Y=O(x);if(Y!==b.__cacheKey){G[Y]===void 0&&(G[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),G[Y].usedTimes++;const ae=G[b.__cacheKey];ae!==void 0&&(G[b.__cacheKey].usedTimes--,ae.usedTimes===0&&C(x)),b.__cacheKey=Y,b.__webglTexture=G[Y].texture}return U}function Re(b,x,U){let N=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(N=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(N=t.TEXTURE_3D);const G=Ee(b,x),Y=x.source;n.bindTexture(N,b.__webglTexture,t.TEXTURE0+U);const ae=i.get(Y);if(Y.version!==ae.__version||G===!0){n.activeTexture(t.TEXTURE0+U);const ne=Je.getPrimaries(Je.workingColorSpace),se=x.colorSpace===ti?null:Je.getPrimaries(x.colorSpace),ye=x.colorSpace===ti||ne===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let le=v(x.image,!1,r.maxTextureSize);le=X(x,le);const xe=s.convert(x.format,x.colorSpace),De=s.convert(x.type);let we=S(x.internalFormat,xe,De,x.colorSpace,x.isVideoTexture);he(N,x);let Se;const Ue=x.mipmaps,ke=x.isVideoTexture!==!0,Ve=ae.__version===void 0||G===!0,Ce=Y.dataReady,k=_(x,le);if(x.isDepthTexture)we=t.DEPTH_COMPONENT16,x.type===ni?we=t.DEPTH_COMPONENT32F:x.type===wr?we=t.DEPTH_COMPONENT24:x.type===xs&&(we=t.DEPTH24_STENCIL8),Ve&&(ke?n.texStorage2D(t.TEXTURE_2D,1,we,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,we,le.width,le.height,0,xe,De,null));else if(x.isDataTexture)if(Ue.length>0){ke&&Ve&&n.texStorage2D(t.TEXTURE_2D,k,we,Ue[0].width,Ue[0].height);for(let ue=0,ie=Ue.length;ue<ie;ue++)Se=Ue[ue],ke?Ce&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Se.width,Se.height,xe,De,Se.data):n.texImage2D(t.TEXTURE_2D,ue,we,Se.width,Se.height,0,xe,De,Se.data);x.generateMipmaps=!1}else ke?(Ve&&n.texStorage2D(t.TEXTURE_2D,k,we,le.width,le.height),Ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,xe,De,le.data)):n.texImage2D(t.TEXTURE_2D,0,we,le.width,le.height,0,xe,De,le.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ke&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,k,we,Ue[0].width,Ue[0].height,le.depth);for(let ue=0,ie=Ue.length;ue<ie;ue++)Se=Ue[ue],x.format!==gn?xe!==null?ke?Ce&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Se.width,Se.height,le.depth,xe,Se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,we,Se.width,Se.height,le.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?Ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Se.width,Se.height,le.depth,xe,De,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,we,Se.width,Se.height,le.depth,0,xe,De,Se.data)}else{ke&&Ve&&n.texStorage2D(t.TEXTURE_2D,k,we,Ue[0].width,Ue[0].height);for(let ue=0,ie=Ue.length;ue<ie;ue++)Se=Ue[ue],x.format!==gn?xe!==null?ke?Ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,Se.width,Se.height,xe,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,we,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?Ce&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Se.width,Se.height,xe,De,Se.data):n.texImage2D(t.TEXTURE_2D,ue,we,Se.width,Se.height,0,xe,De,Se.data)}else if(x.isDataArrayTexture)ke?(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,k,we,le.width,le.height,le.depth),Ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,De,le.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,le.width,le.height,le.depth,0,xe,De,le.data);else if(x.isData3DTexture)ke?(Ve&&n.texStorage3D(t.TEXTURE_3D,k,we,le.width,le.height,le.depth),Ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,De,le.data)):n.texImage3D(t.TEXTURE_3D,0,we,le.width,le.height,le.depth,0,xe,De,le.data);else if(x.isFramebufferTexture){if(Ve)if(ke)n.texStorage2D(t.TEXTURE_2D,k,we,le.width,le.height);else{let ue=le.width,ie=le.height;for(let _e=0;_e<k;_e++)n.texImage2D(t.TEXTURE_2D,_e,we,ue,ie,0,xe,De,null),ue>>=1,ie>>=1}}else if(Ue.length>0){if(ke&&Ve){const ue=oe(Ue[0]);n.texStorage2D(t.TEXTURE_2D,k,we,ue.width,ue.height)}for(let ue=0,ie=Ue.length;ue<ie;ue++)Se=Ue[ue],ke?Ce&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,xe,De,Se):n.texImage2D(t.TEXTURE_2D,ue,we,xe,De,Se);x.generateMipmaps=!1}else if(ke){if(Ve){const ue=oe(le);n.texStorage2D(t.TEXTURE_2D,k,we,ue.width,ue.height)}Ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,De,le)}else n.texImage2D(t.TEXTURE_2D,0,we,xe,De,le);m(x)&&p(N),ae.__version=Y.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Ge(b,x,U){if(x.image.length!==6)return;const N=Ee(b,x),G=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+U);const Y=i.get(G);if(G.version!==Y.__version||N===!0){n.activeTexture(t.TEXTURE0+U);const ae=Je.getPrimaries(Je.workingColorSpace),ne=x.colorSpace===ti?null:Je.getPrimaries(x.colorSpace),se=x.colorSpace===ti||ae===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,le=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let ie=0;ie<6;ie++)!ye&&!le?xe[ie]=v(x.image[ie],!0,r.maxCubemapSize):xe[ie]=le?x.image[ie].image:x.image[ie],xe[ie]=X(x,xe[ie]);const De=xe[0],we=s.convert(x.format,x.colorSpace),Se=s.convert(x.type),Ue=S(x.internalFormat,we,Se,x.colorSpace),ke=x.isVideoTexture!==!0,Ve=Y.__version===void 0||N===!0,Ce=G.dataReady;let k=_(x,De);he(t.TEXTURE_CUBE_MAP,x);let ue;if(ye){ke&&Ve&&n.texStorage2D(t.TEXTURE_CUBE_MAP,k,Ue,De.width,De.height);for(let ie=0;ie<6;ie++){ue=xe[ie].mipmaps;for(let _e=0;_e<ue.length;_e++){const Me=ue[_e];x.format!==gn?we!==null?ke?Ce&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,0,0,Me.width,Me.height,we,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,0,0,Me.width,Me.height,we,Se,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e,Ue,Me.width,Me.height,0,we,Se,Me.data)}}}else{if(ue=x.mipmaps,ke&&Ve){ue.length>0&&k++;const ie=oe(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,k,Ue,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){ke?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,xe[ie].width,xe[ie].height,we,Se,xe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,xe[ie].width,xe[ie].height,0,we,Se,xe[ie].data);for(let _e=0;_e<ue.length;_e++){const Xe=ue[_e].image[ie].image;ke?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,0,0,Xe.width,Xe.height,we,Se,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,Ue,Xe.width,Xe.height,0,we,Se,Xe.data)}}else{ke?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we,Se,xe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,we,Se,xe[ie]);for(let _e=0;_e<ue.length;_e++){const Me=ue[_e];ke?Ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,0,0,we,Se,Me.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e+1,Ue,we,Se,Me.image[ie])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),Y.__version=G.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ee(b,x,U,N,G,Y){const ae=s.convert(U.format,U.colorSpace),ne=s.convert(U.type),se=S(U.internalFormat,ae,ne,U.colorSpace);if(!i.get(x).__hasExternalTextures){const le=Math.max(1,x.width>>Y),xe=Math.max(1,x.height>>Y);G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?n.texImage3D(G,Y,se,le,xe,x.depth,0,ae,ne,null):n.texImage2D(G,Y,se,le,xe,0,ae,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),z(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,N,G,i.get(U).__webglTexture,0,P(x)):(G===t.TEXTURE_2D||G>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,N,G,i.get(U).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(b,x,U){if(t.bindRenderbuffer(t.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let N=t.DEPTH_COMPONENT24;if(U||z(x)){const G=x.depthTexture;G&&G.isDepthTexture&&(G.type===ni?N=t.DEPTH_COMPONENT32F:G.type===wr&&(N=t.DEPTH_COMPONENT24));const Y=P(x);z(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,N,x.width,x.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,N,x.width,x.height)}else t.renderbufferStorage(t.RENDERBUFFER,N,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const N=P(x);U&&z(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,N,t.DEPTH24_STENCIL8,x.width,x.height):z(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N,t.DEPTH24_STENCIL8,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const N=x.textures;for(let G=0;G<N.length;G++){const Y=N[G],ae=s.convert(Y.format,Y.colorSpace),ne=s.convert(Y.type),se=S(Y.internalFormat,ae,ne,Y.colorSpace),ye=P(x);U&&z(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,se,x.width,x.height):z(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,se,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,se,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),L(x.depthTexture,0);const N=i.get(x.depthTexture).__webglTexture,G=P(x);if(x.depthTexture.format===vr)z(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,N,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,N,0);else if(x.depthTexture.format===us)z(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,N,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function B(b){const x=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");pe(x.__webglFramebuffer,b)}else if(U){x.__webglDepthbuffer=[];for(let N=0;N<6;N++)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[N]),x.__webglDepthbuffer[N]=t.createRenderbuffer(),de(x.__webglDepthbuffer[N],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),de(x.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(b,x,U){const N=i.get(b);x!==void 0&&ee(N.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&B(b)}function re(b){const x=b.texture,U=i.get(b),N=i.get(x);b.addEventListener("dispose",R);const G=b.textures,Y=b.isWebGLCubeRenderTarget===!0,ae=G.length>1;if(ae||(N.__webglTexture===void 0&&(N.__webglTexture=t.createTexture()),N.__version=x.version,o.memory.textures++),Y){U.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[ne]=[];for(let se=0;se<x.mipmaps.length;se++)U.__webglFramebuffer[ne][se]=t.createFramebuffer()}else U.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)U.__webglFramebuffer[ne]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ae)for(let ne=0,se=G.length;ne<se;ne++){const ye=i.get(G[ne]);ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&z(b)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ne=0;ne<G.length;ne++){const se=G[ne];U.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ne]);const ye=s.convert(se.format,se.colorSpace),le=s.convert(se.type),xe=S(se.internalFormat,ye,le,se.colorSpace,b.isXRRenderTarget===!0),De=P(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,xe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,U.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),de(U.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture),he(t.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)ee(U.__webglFramebuffer[ne][se],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else ee(U.__webglFramebuffer[ne],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let ne=0,se=G.length;ne<se;ne++){const ye=G[ne],le=i.get(ye);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),he(t.TEXTURE_2D,ye),ee(U.__webglFramebuffer,b,ye,t.COLOR_ATTACHMENT0+ne,t.TEXTURE_2D,0),m(ye)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ne=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,N.__webglTexture),he(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)ee(U.__webglFramebuffer[se],b,x,t.COLOR_ATTACHMENT0,ne,se);else ee(U.__webglFramebuffer,b,x,t.COLOR_ATTACHMENT0,ne,0);m(x)&&p(ne),n.unbindTexture()}b.depthBuffer&&B(b)}function D(b){const x=b.textures;for(let U=0,N=x.length;U<N;U++){const G=x[U];if(m(G)){const Y=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ae=i.get(G).__webglTexture;n.bindTexture(Y,ae),p(Y),n.unbindTexture()}}}const be=[],ge=[];function w(b){if(b.samples>0){if(z(b)===!1){const x=b.textures,U=b.width,N=b.height;let G=t.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(b),ne=x.length>1;if(ne)for(let se=0;se<x.length;se++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let se=0;se<x.length;se++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(G|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(G|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[se]);const ye=i.get(x[se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,U,N,0,0,U,N,G,t.NEAREST),l===!0&&(be.length=0,ge.length=0,be.push(t.COLOR_ATTACHMENT0+se),b.depthBuffer&&b.resolveDepthBuffer===!1&&(be.push(Y),ge.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,be))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let se=0;se<x.length;se++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,ae.__webglColorRenderbuffer[se]);const ye=i.get(x[se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function P(b){return Math.min(r.maxSamples,b.samples)}function z(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function q(b){const x=o.render.frame;c.get(b)!==x&&(c.set(b,x),b.update())}function X(b,x){const U=b.colorSpace,N=b.format,G=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==mi&&U!==ti&&(Je.getTransfer(U)===et?(N!==gn||G!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=y,this.setTexture2D=L,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=ce,this.setupRenderTarget=re,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=z}function WA(t,e){function n(i,r=ti){let s;const o=Je.getTransfer(r);if(i===ui)return t.UNSIGNED_BYTE;if(i===Hp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===kp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===TS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===MS)return t.BYTE;if(i===ES)return t.SHORT;if(i===Fp)return t.UNSIGNED_SHORT;if(i===Bp)return t.INT;if(i===wr)return t.UNSIGNED_INT;if(i===ni)return t.FLOAT;if(i===ta)return t.HALF_FLOAT;if(i===bS)return t.ALPHA;if(i===AS)return t.RGB;if(i===gn)return t.RGBA;if(i===wS)return t.LUMINANCE;if(i===RS)return t.LUMINANCE_ALPHA;if(i===vr)return t.DEPTH_COMPONENT;if(i===us)return t.DEPTH_STENCIL;if(i===CS)return t.RED;if(i===zp)return t.RED_INTEGER;if(i===PS)return t.RG;if(i===Vp)return t.RG_INTEGER;if(i===Gp)return t.RGBA_INTEGER;if(i===wa||i===Ra||i===Ca||i===Pa)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cf||i===uf||i===ff||i===hf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ff)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===df||i===pf||i===mf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===df||i===pf)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gf||i===_f||i===vf||i===xf||i===yf||i===Sf||i===Mf||i===Ef||i===Tf||i===bf||i===Af||i===wf||i===Rf||i===Cf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_f)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ef)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Af)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cf)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===La||i===Pf||i===Lf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===La)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===LS||i===If||i===Df||i===Uf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===La)return s.COMPRESSED_RED_RGTC1_EXT;if(i===If)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Df)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class XA extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lo extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qA={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(u,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&h>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new lo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const $A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Ut,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Nn({vertexShader:$A,fragmentShader:jA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _n(new bs(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class KA extends Lr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,d=null,g=null;const v=new YA,m=n.getContextAttributes();let p=null,S=null;const _=[],M=[],R=new $e;let T=null;const C=new Kt;C.layers.enable(1),C.viewport=new xt;const I=new Kt;I.layers.enable(2),I.viewport=new xt;const E=[C,I],y=new XA;y.layers.enable(1),y.layers.enable(2);let F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=_[ee];return de===void 0&&(de=new rl,_[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=_[ee];return de===void 0&&(de=new rl,_[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=_[ee];return de===void 0&&(de=new rl,_[ee]=de),de.getHandSpace()};function L(ee){const de=M.indexOf(ee.inputSource);if(de===-1)return;const pe=_[de];pe!==void 0&&(pe.update(ee.inputSource,ee.frame,u||o),pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function K(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Q);for(let ee=0;ee<_.length;ee++){const de=M[ee];de!==null&&(M[ee]=null,_[ee].disconnect(de))}F=null,O=null,v.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,S=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ee){u=ee},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Fi(d.framebufferWidth,d.framebufferHeight,{format:gn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,pe=null,B=null;m.depth&&(B=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=m.stencil?us:vr,pe=m.stencil?xs:wr);const ce={colorFormat:n.RGBA8,depthFormat:B,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Fi(h.textureWidth,h.textureHeight,{format:gn,type:ui,depthTexture:new rm(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(ee){for(let de=0;de<ee.removed.length;de++){const pe=ee.removed[de],B=M.indexOf(pe);B>=0&&(M[B]=null,_[B].disconnect(pe))}for(let de=0;de<ee.added.length;de++){const pe=ee.added[de];let B=M.indexOf(pe);if(B===-1){for(let re=0;re<_.length;re++)if(re>=M.length){M.push(pe),B=re;break}else if(M[re]===null){M[re]=pe,B=re;break}if(B===-1)break}const ce=_[B];ce&&ce.connect(pe)}}const W=new Z,te=new Z;function H(ee,de,pe){W.setFromMatrixPosition(de.matrixWorld),te.setFromMatrixPosition(pe.matrixWorld);const B=W.distanceTo(te),ce=de.projectionMatrix.elements,re=pe.projectionMatrix.elements,D=ce[14]/(ce[10]-1),be=ce[14]/(ce[10]+1),ge=(ce[9]+1)/ce[5],w=(ce[9]-1)/ce[5],P=(ce[8]-1)/ce[0],z=(re[8]+1)/re[0],q=D*P,X=D*z,oe=B/(-P+z),b=oe*-P;de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(b),ee.translateZ(oe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const x=D+oe,U=be+oe,N=q-b,G=X+(B-b),Y=ge*be/U*x,ae=w*be/U*x;ee.projectionMatrix.makePerspective(N,G,Y,ae,x,U),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function fe(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;v.texture!==null&&(ee.near=v.depthNear,ee.far=v.depthFar),y.near=I.near=C.near=ee.near,y.far=I.far=C.far=ee.far,(F!==y.near||O!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),F=y.near,O=y.far,C.near=F,C.far=O,I.near=F,I.far=O,C.updateProjectionMatrix(),I.updateProjectionMatrix(),ee.updateProjectionMatrix());const de=ee.parent,pe=y.cameras;fe(y,de);for(let B=0;B<pe.length;B++)fe(pe[B],de);pe.length===2?H(y,C,I):y.projectionMatrix.copy(C.projectionMatrix),he(ee,y,de)};function he(ee,de,pe){pe===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Gl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null};let Ee=null;function Re(ee,de){if(c=de.getViewerPose(u||o),g=de,c!==null){const pe=c.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let B=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,B=!0);for(let re=0;re<pe.length;re++){const D=pe[re];let be=null;if(d!==null)be=d.getViewport(D);else{const w=f.getViewSubImage(h,D);be=w.viewport,re===0&&(e.setRenderTargetTextures(S,w.colorTexture,h.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(S))}let ge=E[re];ge===void 0&&(ge=new Kt,ge.layers.enable(re),ge.viewport=new xt,E[re]=ge),ge.matrix.fromArray(D.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(D.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(be.x,be.y,be.width,be.height),re===0&&(y.matrix.copy(ge.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),B===!0&&y.cameras.push(ge)}const ce=r.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const re=f.getDepthInformation(pe[0]);re&&re.isValid&&re.texture&&v.init(e,re,r.renderState)}}for(let pe=0;pe<_.length;pe++){const B=M[pe],ce=_[pe];B!==null&&ce!==void 0&&ce.update(B,de,u||o)}v.render(e,y),Ee&&Ee(ee,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const Ge=new im;Ge.setAnimationLoop(Re),this.setAnimationLoop=function(ee){Ee=ee},this.dispose=function(){}}}const bi=new Un,ZA=new pt;function JA(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qp(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,_):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),_=S.envMap,M=S.envMapRotation;if(_&&(m.envMap.value=_,bi.copy(M),bi.x*=-1,bi.y*=-1,bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(bi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const R=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*R,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=_*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){const M=_.program;i.uniformBlockBinding(S,M)}function u(S,_){let M=r[S.id];M===void 0&&(g(S),M=c(S),r[S.id]=M,S.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(S,R);const T=e.render.frame;s[S.id]!==T&&(h(S),s[S.id]=T)}function c(S){const _=f();S.__bindingPointIndex=_;const M=t.createBuffer(),R=S.__size,T=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const _=r[S.id],M=S.uniforms,R=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,C=M.length;T<C;T++){const I=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,y=I.length;E<y;E++){const F=I[E];if(d(F,T,E,R)===!0){const O=F.__offset,L=Array.isArray(F.value)?F.value:[F.value];let K=0;for(let Q=0;Q<L.length;Q++){const W=L[Q],te=v(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,O+K,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,K),K+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(S,_,M,R){const T=S.value,C=_+"_"+M;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{const I=R[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(S){const _=S.uniforms;let M=0;const R=16;for(let C=0,I=_.length;C<I;C++){const E=Array.isArray(_[C])?_[C]:[_[C]];for(let y=0,F=E.length;y<F;y++){const O=E[y],L=Array.isArray(O.value)?O.value:[O.value];for(let K=0,Q=L.length;K<Q;K++){const W=L[K],te=v(W),H=M%R;H!==0&&R-H<te.boundary&&(M+=R-H),O.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=te.storage}}}const T=M%R;return T>0&&(M+=R-T),S.__size=M,S.__cache={},this}function v(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){const _=S.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class ew{constructor(e={}){const{canvas:n=WS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this._useLegacyLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;const _=this;let M=!1,R=0,T=0,C=null,I=-1,E=null;const y=new xt,F=new xt;let O=null;const L=new Ye(0);let K=0,Q=n.width,W=n.height,te=1,H=null,fe=null;const he=new xt(0,0,Q,W),Ee=new xt(0,0,Q,W);let Re=!1;const Ge=new nm;let ee=!1,de=!1;const pe=new pt,B=new Z,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return C===null?te:1}let D=i;function be(A,V){return n.getContext(A,V)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tc}`),n.addEventListener("webglcontextlost",k,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",ie,!1),D===null){const V="webgl2";if(D=be(V,A),D===null)throw be(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ge,w,P,z,q,X,oe,b,x,U,N,G,Y,ae,ne,se,ye,le,xe,De,we,Se,Ue,ke;function Ve(){ge=new lb(D),ge.init(),Se=new WA(D,ge),w=new tb(D,ge,e,Se),P=new VA(D),z=new fb(D),q=new RA,X=new GA(D,ge,P,q,w,Se,z),oe=new ib(_),b=new ab(_),x=new _M(D),Ue=new QT(D,x),U=new cb(D,x,z,Ue),N=new db(D,U,x,z),xe=new hb(D,w,X),se=new nb(q),G=new wA(_,oe,b,ge,w,Ue,se),Y=new JA(_,q),ae=new PA,ne=new OA(ge),le=new JT(_,oe,b,P,N,h,l),ye=new zA(_,N,w),ke=new QA(D,z,w,P),De=new eb(D,ge,z),we=new ub(D,ge,z),z.programs=G.programs,_.capabilities=w,_.extensions=ge,_.properties=q,_.renderLists=ae,_.shadowMap=ye,_.state=P,_.info=z}Ve();const Ce=new KA(_,D);this.xr=Ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(Q,W,!1))},this.getSize=function(A){return A.set(Q,W)},this.setSize=function(A,V,J=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=A,W=V,n.width=Math.floor(A*te),n.height=Math.floor(V*te),J===!0&&(n.style.width=A+"px",n.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(Q*te,W*te).floor()},this.setDrawingBufferSize=function(A,V,J){Q=A,W=V,te=J,n.width=Math.floor(A*J),n.height=Math.floor(V*J),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(he)},this.setViewport=function(A,V,J,$){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,V,J,$),P.viewport(y.copy(he).multiplyScalar(te).round())},this.getScissor=function(A){return A.copy(Ee)},this.setScissor=function(A,V,J,$){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,V,J,$),P.scissor(F.copy(Ee).multiplyScalar(te).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(A){P.setScissorTest(Re=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){fe=A},this.getClearColor=function(A){return A.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(A=!0,V=!0,J=!0){let $=0;if(A){let j=!1;if(C!==null){const ve=C.texture.format;j=ve===Gp||ve===Vp||ve===zp}if(j){const ve=C.texture.type,Te=ve===ui||ve===wr||ve===Fp||ve===xs||ve===Hp||ve===kp,Ae=le.getClearColor(),Le=le.getClearAlpha(),Ne=Ae.r,Fe=Ae.g,ze=Ae.b;Te?(d[0]=Ne,d[1]=Fe,d[2]=ze,d[3]=Le,D.clearBufferuiv(D.COLOR,0,d)):(g[0]=Ne,g[1]=Fe,g[2]=ze,g[3]=Le,D.clearBufferiv(D.COLOR,0,g))}else $|=D.COLOR_BUFFER_BIT}V&&($|=D.DEPTH_BUFFER_BIT),J&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",k,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),ae.dispose(),ne.dispose(),q.dispose(),oe.dispose(),b.dispose(),N.dispose(),Ue.dispose(),ke.dispose(),G.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ke),Ce.removeEventListener("sessionend",un),wt.stop()};function k(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=z.autoReset,V=ye.enabled,J=ye.autoUpdate,$=ye.needsUpdate,j=ye.type;Ve(),z.autoReset=A,ye.enabled=V,ye.autoUpdate=J,ye.needsUpdate=$,ye.type=j}function ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _e(A){const V=A.target;V.removeEventListener("dispose",_e),Me(V)}function Me(A){Xe(A),q.remove(A)}function Xe(A){const V=q.get(A).programs;V!==void 0&&(V.forEach(function(J){G.releaseProgram(J)}),A.isShaderMaterial&&G.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,J,$,j,ve){V===null&&(V=ce);const Te=j.isMesh&&j.matrixWorld.determinant()<0,Ae=hm(A,V,J,$,j);P.setMaterial($,Te);let Le=J.index,Ne=1;if($.wireframe===!0){if(Le=U.getWireframeAttribute(J),Le===void 0)return;Ne=2}const Fe=J.drawRange,ze=J.attributes.position;let ut=Fe.start*Ne,St=(Fe.start+Fe.count)*Ne;ve!==null&&(ut=Math.max(ut,ve.start*Ne),St=Math.min(St,(ve.start+ve.count)*Ne)),Le!==null?(ut=Math.max(ut,0),St=Math.min(St,Le.count)):ze!=null&&(ut=Math.max(ut,0),St=Math.min(St,ze.count));const Ot=St-ut;if(Ot<0||Ot===1/0)return;Ue.setup(j,$,Ae,J,Le);let yn,je=De;if(Le!==null&&(yn=x.get(Le),je=we,je.setIndex(yn)),j.isMesh)$.wireframe===!0?(P.setLineWidth($.wireframeLinewidth*re()),je.setMode(D.LINES)):je.setMode(D.TRIANGLES);else if(j.isLine){let Oe=$.linewidth;Oe===void 0&&(Oe=1),P.setLineWidth(Oe*re()),j.isLineSegments?je.setMode(D.LINES):j.isLineLoop?je.setMode(D.LINE_LOOP):je.setMode(D.LINE_STRIP)}else j.isPoints?je.setMode(D.POINTS):j.isSprite&&je.setMode(D.TRIANGLES);if(j.isBatchedMesh)j._multiDrawInstances!==null?je.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances):je.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)je.renderInstances(ut,Ot,j.count);else if(J.isInstancedBufferGeometry){const Oe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Dr=Math.min(J.instanceCount,Oe);je.renderInstances(ut,Ot,Dr)}else je.render(ut,Ot)};function Qe(A,V,J){A.transparent===!0&&A.side===Cn&&A.forceSinglePass===!1?(A.side=Dt,A.needsUpdate=!0,ws(A,V,J),A.side=ci,A.needsUpdate=!0,ws(A,V,J),A.side=Cn):ws(A,V,J)}this.compile=function(A,V,J=null){J===null&&(J=A),m=ne.get(J),m.init(V),S.push(m),J.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),A!==J&&A.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(_._useLegacyLights);const $=new Set;return A.traverse(function(j){const ve=j.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const Ae=ve[Te];Qe(Ae,J,j),$.add(Ae)}else Qe(ve,J,j),$.add(ve)}),S.pop(),m=null,$},this.compileAsync=function(A,V,J=null){const $=this.compile(A,V,J);return new Promise(j=>{function ve(){if($.forEach(function(Te){q.get(Te).currentProgram.isReady()&&$.delete(Te)}),$.size===0){j(A);return}setTimeout(ve,10)}ge.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ot=null;function yt(A){ot&&ot(A)}function Ke(){wt.stop()}function un(){wt.start()}const wt=new im;wt.setAnimationLoop(yt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(A){ot=A,Ce.setAnimationLoop(A),A===null?wt.stop():wt.start()},Ce.addEventListener("sessionstart",Ke),Ce.addEventListener("sessionend",un),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(V),V=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,V,C),m=ne.get(A,S.length),m.init(V),S.push(m),pe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ge.setFromProjectionMatrix(pe),de=this.localClippingEnabled,ee=se.init(this.clippingPlanes,de),v=ae.get(A,p.length),v.init(),p.push(v),Cc(A,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(H,fe);const J=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1;J&&le.addToRenderList(v,A),this.info.render.frame++,ee===!0&&se.beginShadows();const $=m.state.shadowsArray;ye.render($,A,V),ee===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,ve=v.transmissive;if(m.setupLights(_._useLegacyLights),V.isArrayCamera){const Te=V.cameras;if(ve.length>0)for(let Ae=0,Le=Te.length;Ae<Le;Ae++){const Ne=Te[Ae];Lc(j,ve,A,Ne)}J&&le.render(A);for(let Ae=0,Le=Te.length;Ae<Le;Ae++){const Ne=Te[Ae];Pc(v,A,Ne,Ne.viewport)}}else ve.length>0&&Lc(j,ve,A,V),J&&le.render(A),Pc(v,A,V);C!==null&&(X.updateMultisampleRenderTarget(C),X.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(_,A,V),Ue.resetDefaultState(),I=-1,E=null,S.pop(),S.length>0?(m=S[S.length-1],ee===!0&&se.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Cc(A,V,J,$){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ge.intersectsSprite(A)){$&&B.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const Te=N.update(A),Ae=A.material;Ae.visible&&v.push(A,Te,Ae,J,B.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ge.intersectsObject(A))){const Te=N.update(A),Ae=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),B.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),B.copy(Te.boundingSphere.center)),B.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(Ae)){const Le=Te.groups;for(let Ne=0,Fe=Le.length;Ne<Fe;Ne++){const ze=Le[Ne],ut=Ae[ze.materialIndex];ut&&ut.visible&&v.push(A,Te,ut,J,B.z,ze)}}else Ae.visible&&v.push(A,Te,Ae,J,B.z,null)}}const ve=A.children;for(let Te=0,Ae=ve.length;Te<Ae;Te++)Cc(ve[Te],V,J,$)}function Pc(A,V,J,$){const j=A.opaque,ve=A.transmissive,Te=A.transparent;m.setupLightsView(J),ee===!0&&se.setGlobalState(_.clippingPlanes,J),$&&P.viewport(y.copy($)),j.length>0&&As(j,V,J),ve.length>0&&As(ve,V,J),Te.length>0&&As(Te,V,J),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Lc(A,V,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Fi(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?ta:ui,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ve=m.state.transmissionRenderTarget[$.id],Te=$.viewport||y;ve.setSize(Te.z,Te.w);const Ae=_.getRenderTarget();_.setRenderTarget(ve),_.getClearColor(L),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear();const Le=_.toneMapping;_.toneMapping=ai;const Ne=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),ee===!0&&se.setGlobalState(_.clippingPlanes,$),As(A,J,$),X.updateMultisampleRenderTarget(ve),X.updateRenderTargetMipmap(ve),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ze=0,ut=V.length;ze<ut;ze++){const St=V[ze],Ot=St.object,yn=St.geometry,je=St.material,Oe=St.group;if(je.side===Cn&&Ot.layers.test($.layers)){const Dr=je.side;je.side=Dt,je.needsUpdate=!0,Ic(Ot,J,$,yn,je,Oe),je.side=Dr,je.needsUpdate=!0,Fe=!0}}Fe===!0&&(X.updateMultisampleRenderTarget(ve),X.updateRenderTargetMipmap(ve))}_.setRenderTarget(Ae),_.setClearColor(L,K),Ne!==void 0&&($.viewport=Ne),_.toneMapping=Le}function As(A,V,J){const $=V.isScene===!0?V.overrideMaterial:null;for(let j=0,ve=A.length;j<ve;j++){const Te=A[j],Ae=Te.object,Le=Te.geometry,Ne=$===null?Te.material:$,Fe=Te.group;Ae.layers.test(J.layers)&&Ic(Ae,V,J,Le,Ne,Fe)}}function Ic(A,V,J,$,j,ve){A.onBeforeRender(_,V,J,$,j,ve),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(_,V,J,$,A,ve),j.transparent===!0&&j.side===Cn&&j.forceSinglePass===!1?(j.side=Dt,j.needsUpdate=!0,_.renderBufferDirect(J,V,$,j,A,ve),j.side=ci,j.needsUpdate=!0,_.renderBufferDirect(J,V,$,j,A,ve),j.side=Cn):_.renderBufferDirect(J,V,$,j,A,ve),A.onAfterRender(_,V,J,$,j,ve)}function ws(A,V,J){V.isScene!==!0&&(V=ce);const $=q.get(A),j=m.state.lights,ve=m.state.shadowsArray,Te=j.state.version,Ae=G.getParameters(A,j.state,ve,V,J),Le=G.getProgramCacheKey(Ae);let Ne=$.programs;$.environment=A.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(A.isMeshStandardMaterial?b:oe).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ne===void 0&&(A.addEventListener("dispose",_e),Ne=new Map,$.programs=Ne);let Fe=Ne.get(Le);if(Fe!==void 0){if($.currentProgram===Fe&&$.lightsStateVersion===Te)return Uc(A,Ae),Fe}else Ae.uniforms=G.getUniforms(A),A.onBuild(J,Ae,_),A.onBeforeCompile(Ae,_),Fe=G.acquireProgram(Ae,Le),Ne.set(Le,Fe),$.uniforms=Ae.uniforms;const ze=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=se.uniform),Uc(A,Ae),$.needsLights=pm(A),$.lightsStateVersion=Te,$.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.directionalShadowMap.value=j.state.directionalShadowMap,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotShadowMap.value=j.state.spotShadowMap,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMap.value=j.state.pointShadowMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=Fe,$.uniformsList=null,Fe}function Dc(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=_o.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Uc(A,V){const J=q.get(A);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function hm(A,V,J,$,j){V.isScene!==!0&&(V=ce),X.resetTextureUnits();const ve=V.fog,Te=$.isMeshStandardMaterial?V.environment:null,Ae=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:mi,Le=($.isMeshStandardMaterial?b:oe).get($.envMap||Te),Ne=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Fe=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ze=!!J.morphAttributes.position,ut=!!J.morphAttributes.normal,St=!!J.morphAttributes.color;let Ot=ai;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ot=_.toneMapping);const yn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,je=yn!==void 0?yn.length:0,Oe=q.get($),Dr=m.state.lights;if(ee===!0&&(de===!0||A!==E)){const qt=A===E&&$.id===I;se.setState($,A,qt)}let nt=!1;$.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Dr.state.version||Oe.outputColorSpace!==Ae||j.isBatchedMesh&&Oe.batching===!1||!j.isBatchedMesh&&Oe.batching===!0||j.isInstancedMesh&&Oe.instancing===!1||!j.isInstancedMesh&&Oe.instancing===!0||j.isSkinnedMesh&&Oe.skinning===!1||!j.isSkinnedMesh&&Oe.skinning===!0||j.isInstancedMesh&&Oe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Oe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Oe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Oe.instancingMorph===!1&&j.morphTexture!==null||Oe.envMap!==Le||$.fog===!0&&Oe.fog!==ve||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==se.numPlanes||Oe.numIntersection!==se.numIntersection)||Oe.vertexAlphas!==Ne||Oe.vertexTangents!==Fe||Oe.morphTargets!==ze||Oe.morphNormals!==ut||Oe.morphColors!==St||Oe.toneMapping!==Ot||Oe.morphTargetsCount!==je)&&(nt=!0):(nt=!0,Oe.__version=$.version);let gi=Oe.currentProgram;nt===!0&&(gi=ws($,V,j));let Nc=!1,Ur=!1,ra=!1;const Mt=gi.getUniforms(),Bn=Oe.uniforms;if(P.useProgram(gi.program)&&(Nc=!0,Ur=!0,ra=!0),$.id!==I&&(I=$.id,Ur=!0),Nc||E!==A){Mt.setValue(D,"projectionMatrix",A.projectionMatrix),Mt.setValue(D,"viewMatrix",A.matrixWorldInverse);const qt=Mt.map.cameraPosition;qt!==void 0&&qt.setValue(D,B.setFromMatrixPosition(A.matrixWorld)),w.logarithmicDepthBuffer&&Mt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Mt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Ur=!0,ra=!0)}if(j.isSkinnedMesh){Mt.setOptional(D,j,"bindMatrix"),Mt.setOptional(D,j,"bindMatrixInverse");const qt=j.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Mt.setValue(D,"boneTexture",qt.boneTexture,X))}j.isBatchedMesh&&(Mt.setOptional(D,j,"batchingTexture"),Mt.setValue(D,"batchingTexture",j._matricesTexture,X));const sa=J.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0)&&xe.update(j,J,gi),(Ur||Oe.receiveShadow!==j.receiveShadow)&&(Oe.receiveShadow=j.receiveShadow,Mt.setValue(D,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Bn.envMap.value=Le,Bn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(Bn.envMapIntensity.value=V.environmentIntensity),Ur&&(Mt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Oe.needsLights&&dm(Bn,ra),ve&&$.fog===!0&&Y.refreshFogUniforms(Bn,ve),Y.refreshMaterialUniforms(Bn,$,te,W,m.state.transmissionRenderTarget[A.id]),_o.upload(D,Dc(Oe),Bn,X)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(_o.upload(D,Dc(Oe),Bn,X),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Mt.setValue(D,"center",j.center),Mt.setValue(D,"modelViewMatrix",j.modelViewMatrix),Mt.setValue(D,"normalMatrix",j.normalMatrix),Mt.setValue(D,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const qt=$.uniformsGroups;for(let oa=0,mm=qt.length;oa<mm;oa++){const Oc=qt[oa];ke.update(Oc,gi),ke.bind(Oc,gi)}}return gi}function dm(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function pm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,V,J){q.get(A.texture).__webglTexture=V,q.get(A.depthTexture).__webglTexture=J;const $=q.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=J===void 0,$.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const J=q.get(A);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,J=0){C=A,R=V,T=J;let $=!0,j=null,ve=!1,Te=!1;if(A){const Le=q.get(A);Le.__useDefaultFramebuffer!==void 0?(P.bindFramebuffer(D.FRAMEBUFFER,null),$=!1):Le.__webglFramebuffer===void 0?X.setupRenderTarget(A):Le.__hasExternalTextures&&X.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Te=!0);const Fe=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[V])?j=Fe[V][J]:j=Fe[V],ve=!0):A.samples>0&&X.useMultisampledRTT(A)===!1?j=q.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?j=Fe[J]:j=Fe,y.copy(A.viewport),F.copy(A.scissor),O=A.scissorTest}else y.copy(he).multiplyScalar(te).floor(),F.copy(Ee).multiplyScalar(te).floor(),O=Re;if(P.bindFramebuffer(D.FRAMEBUFFER,j)&&$&&P.drawBuffers(A,j),P.viewport(y),P.scissor(F),P.setScissorTest(O),ve){const Le=q.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,J)}else if(Te){const Le=q.get(A.texture),Ne=V||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.__webglTexture,J||0,Ne)}I=-1},this.readRenderTargetPixels=function(A,V,J,$,j,ve,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){P.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const Le=A.texture,Ne=Le.format,Fe=Le.type;if(!w.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-$&&J>=0&&J<=A.height-j&&D.readPixels(V,J,$,j,Se.convert(Ne),Se.convert(Fe),ve)}finally{const Le=C!==null?q.get(C).__webglFramebuffer:null;P.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(A,V,J=0){const $=Math.pow(2,-J),j=Math.floor(V.image.width*$),ve=Math.floor(V.image.height*$);X.setTexture2D(V,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,A.x,A.y,j,ve),P.unbindTexture()},this.copyTextureToTexture=function(A,V,J,$=0){const j=V.image.width,ve=V.image.height,Te=Se.convert(J.format),Ae=Se.convert(J.type);X.setTexture2D(J,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,J.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,J.unpackAlignment),V.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,$,A.x,A.y,j,ve,Te,Ae,V.image.data):V.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,$,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Te,V.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,$,A.x,A.y,Te,Ae,V.image),$===0&&J.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),P.unbindTexture()},this.copyTextureToTexture3D=function(A,V,J,$,j=0){const ve=A.max.x-A.min.x,Te=A.max.y-A.min.y,Ae=A.max.z-A.min.z,Le=Se.convert($.format),Ne=Se.convert($.type);let Fe;if($.isData3DTexture)X.setTexture3D($,0),Fe=D.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)X.setTexture2DArray($,0),Fe=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,$.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,$.unpackAlignment);const ze=D.getParameter(D.UNPACK_ROW_LENGTH),ut=D.getParameter(D.UNPACK_IMAGE_HEIGHT),St=D.getParameter(D.UNPACK_SKIP_PIXELS),Ot=D.getParameter(D.UNPACK_SKIP_ROWS),yn=D.getParameter(D.UNPACK_SKIP_IMAGES),je=J.isCompressedTexture?J.mipmaps[j]:J.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,je.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,je.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,A.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,A.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,A.min.z),J.isDataTexture||J.isData3DTexture?D.texSubImage3D(Fe,j,V.x,V.y,V.z,ve,Te,Ae,Le,Ne,je.data):$.isCompressedArrayTexture?D.compressedTexSubImage3D(Fe,j,V.x,V.y,V.z,ve,Te,Ae,Le,je.data):D.texSubImage3D(Fe,j,V.x,V.y,V.z,ve,Te,Ae,Le,Ne,je),D.pixelStorei(D.UNPACK_ROW_LENGTH,ze),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),D.pixelStorei(D.UNPACK_SKIP_PIXELS,St),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,yn),j===0&&$.generateMipmaps&&D.generateMipmap(Fe),P.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?X.setTextureCube(A,0):A.isData3DTexture?X.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?X.setTexture2DArray(A,0):X.setTexture2D(A,0),P.unbindTexture()},this.resetState=function(){R=0,T=0,C=null,P.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===bc?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===na?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tw extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class nw extends Es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);function iw(t){return Fh()?(Im(t),!0):!1}function um(t){return typeof t=="function"?t():it(t)}const rw=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const sw=Object.prototype.toString,ow=t=>sw.call(t)==="[object Object]",aw=()=>{};function fm(t){var e;const n=um(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Rc=rw?window:void 0;function Xr(...t){let e,n,i,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,r]=t,e=Rc):[e,n,i,r]=t,!e)return aw;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const s=[],o=()=>{s.forEach(c=>c()),s.length=0},a=(c,f,h,d)=>(c.addEventListener(f,h,d),()=>c.removeEventListener(f,h,d)),l=si(()=>[fm(e),um(r)],([c,f])=>{if(o(),!c)return;const h=ow(f)?{...f}:f;s.push(...n.flatMap(d=>i.map(g=>a(c,d,g,h))))},{immediate:!0,flush:"post"}),u=()=>{l(),o()};return iw(u),u}const lw={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof Touch?null:[t.movementX,t.movementY]};function cw(t={}){const{type:e="page",touch:n=!0,resetOnTouchEnds:i=!1,initialValue:r={x:0,y:0},window:s=Rc,target:o=s,scroll:a=!0,eventFilter:l}=t;let u=null;const c=st(r.x),f=st(r.y),h=st(null),d=typeof e=="function"?e:lw[e],g=R=>{const T=d(R);u=R,T&&([c.value,f.value]=T,h.value="mouse")},v=R=>{if(R.touches.length>0){const T=d(R.touches[0]);T&&([c.value,f.value]=T,h.value="touch")}},m=()=>{if(!u||!s)return;const R=d(u);u instanceof MouseEvent&&R&&(c.value=R[0]+s.scrollX,f.value=R[1]+s.scrollY)},p=()=>{c.value=r.x,f.value=r.y},S=l?R=>l(()=>g(R),{}):R=>g(R),_=l?R=>l(()=>v(R),{}):R=>v(R),M=l?()=>l(()=>m(),{}):()=>m();if(o){const R={passive:!0};Xr(o,["mousemove","dragover"],S,R),n&&e!=="movement"&&(Xr(o,["touchstart","touchmove"],_,R),i&&Xr(o,"touchend",p,R)),a&&e==="page"&&Xr(s,"scroll",M,{passive:!0})}return{x:c,y:f,sourceType:h}}function uw(t,e={}){const{handleOutside:n=!0,window:i=Rc}=e,r=e.type||"page",{x:s,y:o,sourceType:a}=cw(e),l=st(t??(i==null?void 0:i.document.body)),u=st(0),c=st(0),f=st(0),h=st(0),d=st(0),g=st(0),v=st(!0);let m=()=>{};return i&&(m=si([l,s,o],()=>{const p=fm(l);if(!p)return;const{left:S,top:_,width:M,height:R}=p.getBoundingClientRect();f.value=S+(r==="page"?i.pageXOffset:0),h.value=_+(r==="page"?i.pageYOffset:0),d.value=R,g.value=M;const T=s.value-f.value,C=o.value-h.value;v.value=M===0||R===0||T<0||C<0||T>M||C>R,(n||!v.value)&&(u.value=T,c.value=C)},{immediate:!0}),Xr(document,"mouseleave",()=>{v.value=!0})),{x:s,y:o,sourceType:a,elementX:u,elementY:c,elementPositionX:f,elementPositionY:h,elementHeight:d,elementWidth:g,isOutside:v,stop:m}}const fw={__name:"Demo",setup(t){const e=st(null),{x:n,y:i,isOutside:r}=uw(e),s=st(null),o=async()=>{try{await navigator.mediaDevices.getUserMedia({audio:!0}),console.log("Microphone permission granted")}catch(a){console.error("Microphone permission denied:",a)}};return qo(async()=>{const l=await(await fetch("/shader.frag")).text();await o();const{bufferLength:u,dataArray:c,audioContext:f,volumeRef:h,animationFrameId:d}=await Fy(),g=new tw,{width:v,height:m}=e.value.getBoundingClientRect(),p={u_time:{type:"f",value:1},u_color:{type:"v3",value:new Ye(16711680)},u_volume:{type:"f",value:h.value},u_audioData:{type:"fv1",value:new Uint8Array(u)},u_resolution:{type:"v2",value:new $e(v,m)},u_mouse:{type:"v2",value:new $e(n.value,i.value)}},S=new Kt(75,v/m,.1,1e3);S.position.z=500;const _=new ew;_.setSize(v,m),e.value.appendChild(_.domElement);const M=new bs(500,500);new nw({color:16777215,linewidth:1,linecap:"round",linejoin:"round"});const R=new Nn({uniforms:p,vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:l}),T=new _n(M,R);g.add(T),g.add(S);function C(){const{width:I,height:E}=e.value.getBoundingClientRect();requestAnimationFrame(C),_.render(g,S),p.u_time.value+=.001,p.u_resolution.value.x=I,p.u_resolution.value.y=E,p.u_mouse.value.x=n.value,p.u_mouse.value.y=i.value,p.u_volume.value=h.value,p.u_time.value+=h.value*.05}console.log(M),s.value=f,C(),window.addEventListener("resize",()=>{const{width:I,height:E}=document.querySelector("#demo").getBoundingClientRect();_.setSize(I,E),S.aspect=I/E,S.updateProjectionMatrix()})}),$o(()=>{s.value&&(console.log("close audioContext"),s.value.close())}),(a,l)=>(Rn(),Fd("div",{id:"demo",ref_key:"self",ref:e},null,512))}},hw=ms({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,i={};for(const r in t.route)Object.defineProperty(i,r,{get:()=>e===t.renderKey?t.route[r]:n[r]});return gr(Yo,ds(i)),()=>In(t.vnode,{ref:t.vnodeRef})}}),dw=ms({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,expose:n}){const i=ct(),r=st(),s=Wt(Yo,null);let o;n({pageRef:r});const a=Wt(c0,null);let l;const u=i.deferHydration();if(i.isHydrating){const c=i.hooks.hookOnce("app:error",u);Fn().beforeEach(c)}return t.pageKey&&si(()=>t.pageKey,(c,f)=>{c!==f&&i.callHook("page:loading:start")}),()=>In(Ip,{name:t.name,route:t.route,...e},{default:c=>{const f=mw(s,c.route,c.Component),h=s&&s.matched.length===c.route.matched.length;if(!c.Component){if(l&&!h)return l;u();return}if(l&&a&&!a.isCurrent(c.route))return l;if(f&&s&&(!a||a!=null&&a.isCurrent(s)))return h?l:null;const d=Nl(c,t.pageKey);!i.isHydrating&&!gw(s,c.route,c.Component)&&o===d&&i.callHook("page:loading:end"),o=d;const g=!!(t.transition??c.route.meta.pageTransition??Ll),v=g&&pw([t.transition,c.route.meta.pageTransition,Ll,{onAfterLeave:()=>{i.callHook("page:transition:finish",c.Component)}}].filter(Boolean)),m=t.keepalive??c.route.meta.keepalive??nx;return l=yy(hc,g&&v,gy(m,In(ud,{suspensible:!0,onPending:()=>i.callHook("page:start",c.Component),onResolve:()=>{ps(()=>i.callHook("page:finish",c.Component).then(()=>i.callHook("page:loading:end")).finally(u))}},{default:()=>{const p=In(hw,{key:d||void 0,vnode:c.Component,route:c.route,renderKey:d||void 0,trackRootNodes:g,vnodeRef:r});return m&&(p.type.name=c.Component.type.name||c.Component.type.__name||"RouteProvider"),p}}))).default(),l}})}});function pw(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?Ec(n.onAfterLeave):void 0}));return op(...e)}function mw(t,e,n){if(!t)return!1;const i=e.matched.findIndex(r=>{var s;return((s=r.components)==null?void 0:s.default)===(n==null?void 0:n.type)});return!i||i===-1?!1:e.matched.slice(0,i).some((r,s)=>{var o,a,l;return((o=r.components)==null?void 0:o.default)!==((l=(a=t.matched[s])==null?void 0:a.components)==null?void 0:l.default)})||n&&Nl({route:e,Component:n})!==Nl({route:t,Component:n})}function gw(t,e,n){return t?e.matched.findIndex(r=>{var s;return((s=r.components)==null?void 0:s.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const _w=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},vw={};function xw(t,e){const n=fw,i=dw;return Rn(),Fd(zt,null,[lc("div",null,[lt(n)]),lt(i)],64)}const yw=_w(vw,[["render",xw]]),Sw={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,c=r?Kc(()=>Ol(()=>import("./BgQcVF-M.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(f=>f.default||f)):Kc(()=>Ol(()=>import("./Cy98dti4.js"),__vite__mapDeps([3,1,4]),import.meta.url).then(f=>f.default||f));return(f,h)=>(Rn(),rr(it(c),wm(Hd({statusCode:it(i),statusMessage:it(s),description:it(o),stack:it(a)})),null,16))}},bh={__name:"nuxt-root",setup(t){const e=()=>null,n=ct(),i=n.deferHydration();if(n.isHydrating){const a=n.hooks.hookOnce("app:error",i);Fn().beforeEach(a)}const r=!1;gr(Yo,lp()),n.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const s=Ko();xd((a,l,u)=>{if(n.hooks.callHook("vue:error",a,l,u).catch(c=>console.error("[nuxt] Error in `vue:error` hook",c)),h0(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>ar(a)),!1});const o=!1;return(a,l)=>(Rn(),rr(ud,{onResolve:it(i)},{default:sd(()=>[it(s)?(Rn(),rr(it(Sw),{key:0,error:it(s)},null,8,["error"])):it(o)?(Rn(),rr(it(e),{key:1,context:it(o)},null,8,["context"])):it(r)?(Rn(),rr(gg(it(r)),{key:2})):(Rn(),rr(it(yw),{key:3}))]),_:1},8,["onResolve"]))}};let Ah;{let t;Ah=async function(){var o,a;if(t)return t;const i=!!((o=window.__NUXT__)!=null&&o.serverRendered||((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?W_(bh):G_(bh),r=Kv({vueApp:i});async function s(l){await r.callHook("app:error",l),r.payload.error=r.payload.error||Zo(l)}i.config.errorHandler=s;try{await Jv(r,Ny)}catch(l){s(l)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(ix),await r.hooks.callHook("app:mounted",i),await ps()}catch(l){s(l)}return i.config.errorHandler===s&&(i.config.errorHandler=void 0),i},t=Ah().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{sd as A,kd as B,Ew as C,Tw as D,Rw as E,Aw as F,si as G,Ig as H,Lg as I,Rl as J,uc as K,lp as L,it as M,_w as _,Dp as a,rf as b,an as c,ms as d,$o as e,Pw as f,In as g,Hi as h,bw as i,mc as j,av as k,vc as l,ct as m,Cw as n,qo as o,jo as p,ww as q,st as r,pc as s,Rn as t,Fn as u,Fd as v,Sl as w,lc as x,Mw as y,lt as z};
