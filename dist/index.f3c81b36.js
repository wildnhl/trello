let e,t;function i(e){return e&&e.__esModule?e.default:e}var n=globalThis,r={},s={},o=n.parcelRequire656e;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},n.parcelRequire656e=o);var l=o.register;function a(e){return document.querySelector(e)}function c(e){return document.querySelectorAll(e)}function d(){let e=new Date,t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0"),n=String(e.getSeconds()).padStart(2,"0");a(".clock").textContent=`${t}:${i}:${n}`}function u({id:e,title:t,description:i,createdAt:n,place:r,performer:s}){let o="",l="",a="",c="",d="",u="",h="";switch(d=""===i?"d-none":"",u=""===t?"d-none":"",h=""===s?"d-none":"",r){case"todo":o="selected",c="bg-todo";break;case"inprogress":l="selected",c="bg-inprogress";break;case"done":a="selected",c="bg-done"}return`
    <div class="card ${c} d-flex gap-2 flex-column p-1" id="${e}">
      <h3 class="card__title ${u}" >${t}</h3>
      <p class="card__description ${d}">${i}</p>
      <div class="d-flex gap-2 cardBtns">
        <select class="form-select" name="fromto" data-id="select-place">
          <option value="todo" ${o}>Todo</option>
          <option value="inprogress" ${l}>In progress</option>
          <option value="done" ${a}>Done</option>
        </select>
        <button
          class="btn btn-primary btn-sm"
          type="button"
          data-id="btn-edit"
          data-bs-toggle="modal"
          data-bs-target="#editModal"
        >
          Edit
        </button>
        <button
          class="btn btn-danger btn-sm"
          data-id="btn-delete"
          data-bs-toggle="modal"
          data-bs-target="#deleteSpecModal"
        >
          Delete
        </button>
      </div>
      <div class="cardBottom d-flex justify-content-between gap-2">
        <h3 class="card-date ${h}">Person: ${s}</h3>
        <h3 class="card-date ms-auto">${n}</h3>
      </div>
    </div>
    `}function h(e){let t=structuredClone(e).reverse(),i="",n="",r="";t.forEach(e=>{switch(e.place){case"todo":i+=u(e);break;case"inprogress":n+=u(e);break;case"done":r+=u(e)}}),a("#todo-content").innerHTML=i,a("#inprogress-content").innerHTML=n,a("#done-content").innerHTML=r,function(e){let t=e.filter(e=>"todo"===e.place),i=e.filter(e=>"inprogress"===e.place),n=e.filter(e=>"done"===e.place);a("#todo-count").textContent=t.length,a("#inprogress-count").textContent=i.length,a("#done-count").textContent=n.length}(t)}function f(e){return JSON.parse(localStorage.getItem(e))}function p(e,t){return localStorage.setItem(e,JSON.stringify(t))}l("9XQjG",function(e,t){var i,n,r,s;e.exports,e.exports=(i=o("4aYsb"),n=o("hPpy6"),r=o("frwB2"),s=o("7ckBV"),/**
   * Class definition
   */class extends r{constructor(e,t){if(super(),!(e=s.getElement(e)))return;this._element=e,this._config=this._getConfig(t),i.set(this._element,this.constructor.DATA_KEY,this)}// Public
dispose(){for(let e of(i.remove(this._element,this.constructor.DATA_KEY),n.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this)))this[e]=null}_queueCallback(e,t,i=!0){s.executeAfterTransition(e,t,i)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}// Static
static getInstance(e){return i.get(s.getElement(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.2"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}})}),l("4aYsb",function(e,t){e.exports,e.exports=function(){/**
   * --------------------------------------------------------------------------
   * Bootstrap dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   *//**
   * Constants
   */let e=new Map;return{set(t,i,n){e.has(t)||e.set(t,new Map);let r=e.get(t);// make it clear we only want one instance per element
// can be removed later when multiple key/instances are fine to be used
if(!r.has(i)&&0!==r.size){// eslint-disable-next-line no-console
console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(i,n)},get:(t,i)=>e.has(t)&&e.get(t).get(i)||null,remove(t,i){if(!e.has(t))return;let n=e.get(t);n.delete(i),0===n.size&&e.delete(t)}}}()}),l("hPpy6",function(e,t){e.exports,e.exports=function(e){/**
   * --------------------------------------------------------------------------
   * Bootstrap dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   *//**
   * Constants
   */let t=/[^.]*(?=\..*)\.|.*/,i=/\..*/,n=/::\d+$/,r={},s=1,o={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);/**
   * Private methods
   */function a(e,t){return t&&`${t}::${s++}`||e.uidEvent||s++}function c(e){let t=a(e);return e.uidEvent=t,r[t]=r[t]||{},r[t]}function d(e,t,i=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===i)}function u(e,t,i){let n="string"==typeof t,r=p(e);return l.has(r)||(r=e),[n,n?i:t||i,r]}function h(e,i,n,r,s){var l,h,f;if("string"!=typeof i||!e)return;let[p,_,b]=u(i,n,r);// in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
// this prevents the handler from being dispatched the same way as mouseover or mouseout does
i in o&&(l=_,_=function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return l.call(this,e)});let v=c(e),y=v[b]||(v[b]={}),E=d(y,_,p?n:null);if(E){E.oneOff=E.oneOff&&s;return}let A=a(_,i.replace(t,"")),w=p?(h=_,function t(i){let r=e.querySelectorAll(n);for(let{target:s}=i;s&&s!==this;s=s.parentNode)for(let o of r)if(o===s)return m(i,{delegateTarget:s}),t.oneOff&&g.off(e,i.type,n,h),h.apply(s,[i])}):(f=_,function t(i){return m(i,{delegateTarget:e}),t.oneOff&&g.off(e,i.type,f),f.apply(e,[i])});w.delegationSelector=p?n:null,w.callable=_,w.oneOff=s,w.uidEvent=A,y[A]=w,e.addEventListener(b,w,p)}function f(e,t,i,n,r){let s=d(t[i],n,r);s&&(e.removeEventListener(i,s,!!r),delete t[i][s.uidEvent])}function p(e){return o[// allow to get the native events from namespaced events ('click.bs.button' --> 'click')
e=e.replace(i,"")]||e}let g={on(e,t,i,n){h(e,t,i,n,!1)},one(e,t,i,n){h(e,t,i,n,!0)},off(e,t,i,r){if("string"!=typeof t||!e)return;let[s,o,l]=u(t,i,r),a=l!==t,d=c(e),h=d[l]||{},p=t.startsWith(".");if(void 0!==o){// Simplest case: handler is passed, remove that listener ONLY.
if(!Object.keys(h).length)return;f(e,d,l,o,s?i:null);return}if(p)for(let i of Object.keys(d))!function(e,t,i,n){let r=t[i]||{};for(let[s,o]of Object.entries(r))s.includes(n)&&f(e,t,i,o.callable,o.delegationSelector)}(e,d,i,t.slice(1));for(let[i,r]of Object.entries(h)){let s=i.replace(n,"");(!a||t.includes(s))&&f(e,d,l,r.callable,r.delegationSelector)}},trigger(t,i,n){if("string"!=typeof i||!t)return null;let r=e.getjQuery(),s=p(i),o=i!==s,l=null,a=!0,c=!0,d=!1;o&&r&&(l=r.Event(i,n),r(t).trigger(l),a=!l.isPropagationStopped(),c=!l.isImmediatePropagationStopped(),d=l.isDefaultPrevented());let u=m(new Event(i,{bubbles:a,cancelable:!0}),n);return d&&u.preventDefault(),c&&t.dispatchEvent(u),u.defaultPrevented&&l&&l.preventDefault(),u}};function m(e,t={}){for(let[i,n]of Object.entries(t))try{e[i]=n}catch(t){Object.defineProperty(e,i,{configurable:!0,get:()=>n})}return e}return g}(o("7ckBV"))}),l("7ckBV",function(e,t){e.exports,function(e){let t="transitionend",i=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),n=e=>{if(!e)return 0;// Get transition-duration of the element
let{transitionDuration:t,transitionDelay:i}=window.getComputedStyle(e),n=Number.parseFloat(t),r=Number.parseFloat(i);return(// Return 0 if element or transition duration is not found
n||r?(// If multiple durations are defined, take the first
t=t.split(",")[0],i=i.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(i))*1e3):0)},r=e=>{e.dispatchEvent(new Event(t))},s=e=>!!e&&"object"==typeof e&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),o=e=>{if(!document.documentElement.attachShadow)return null;// Can find the shadow root otherwise it'll return the document
if("function"==typeof e.getRootNode){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?o(e.parentNode):null},l=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,a=[],c=e=>{"loading"===document.readyState?(a.length||document.addEventListener("DOMContentLoaded",()=>{for(let e of a)e()}),a.push(e)):e()},d=(e,t=[],i=e)=>"function"==typeof e?e(...t):i;e.defineJQueryPlugin=e=>{c(()=>{let t=l();/* istanbul ignore if */if(t){let i=e.NAME,n=t.fn[i];t.fn[i]=e.jQueryInterface,t.fn[i].Constructor=e,t.fn[i].noConflict=()=>(t.fn[i]=n,e.jQueryInterface)}})},e.execute=d,e.executeAfterTransition=(e,i,s=!0)=>{if(!s){d(e);return}let o=n(i)+5,l=!1,a=({target:n})=>{n===i&&(l=!0,i.removeEventListener(t,a),d(e))};i.addEventListener(t,a),setTimeout(()=>{l||r(i)},o)},e.findShadowRoot=o,e.getElement=e=>// it's a jQuery object or a node element
    s(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(i(e)):null,e.getNextActiveElement=(e,t,i,n)=>{let r=e.length,s=e.indexOf(t);return(// if the element does not exist in the list return an element
// depending on the direction and if cycle is allowed
-1===s?!i&&n?e[r-1]:e[0]:(s+=i?1:-1,n&&(s=(s+r)%r),e[Math.max(0,Math.min(s,r-1))]))},e.getTransitionDurationFromElement=n,e.getUID=e=>{do e+=Math.floor(1e6*Math.random());while(document.getElementById(e))return e},e.getjQuery=l,e.isDisabled=e=>!!(!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled"))||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),e.isElement=s,e.isRTL=()=>"rtl"===document.documentElement.dir,e.isVisible=e=>{if(!s(e)||0===e.getClientRects().length)return!1;let t="visible"===getComputedStyle(e).getPropertyValue("visibility"),i=e.closest("details:not([open])");if(!i)return t;if(i!==e){let t=e.closest("summary");if(t&&t.parentNode!==i||null===t)return!1}return t},e.noop=()=>{},e.onDOMContentLoaded=c,e.parseSelector=i,e.reflow=e=>{e.offsetHeight;// eslint-disable-line no-unused-expressions
},e.toType=e=>null==e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),e.triggerTransitionEnd=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}(e.exports)}),l("frwB2",function(e,t){var i,n;e.exports,e.exports=(i=o("9ynGh"),n=o("7ckBV"),/**
   * --------------------------------------------------------------------------
   * Bootstrap util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   *//**
   * Class definition
   */class{// Getters
static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){let r=n.isElement(t)?i.getDataAttribute(t,"config"):{};// try to parse
return{...this.constructor.Default,..."object"==typeof r?r:{},...n.isElement(t)?i.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(let[i,r]of Object.entries(t)){let t=e[i],s=n.isElement(t)?"element":n.toType(t);if(!new RegExp(r).test(s))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${r}".`)}}})}),l("9ynGh",function(e,t){e.exports,e.exports=function(){/**
   * --------------------------------------------------------------------------
   * Bootstrap dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */function e(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function t(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}return{setDataAttribute(e,i,n){e.setAttribute(`data-bs-${t(i)}`,n)},removeDataAttribute(e,i){e.removeAttribute(`data-bs-${t(i)}`)},getDataAttributes(t){if(!t)return{};let i={},n=Object.keys(t.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"));for(let r of n){let n=r.replace(/^bs/,"");i[n=n.charAt(0).toLowerCase()+n.slice(1,n.length)]=e(t.dataset[r])}return i},getDataAttribute:(i,n)=>e(i.getAttribute(`data-bs-${t(n)}`))}}()}),l("fV4p7",function(e,t){e.exports,e.exports=function(e){/**
   * --------------------------------------------------------------------------
   * Bootstrap dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */let t=t=>{let i=t.getAttribute("data-bs-target");if(!i||"#"===i){let n=t.getAttribute("href");// The only valid content that could double as a selector are IDs or classes,
// so everything starting with `#` or `.`. If a "real" URL is used as the selector,
// `document.querySelector` will rightfully complain it is invalid.
// See https://github.com/twbs/bootstrap/issues/32273
if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),i=n&&"#"!==n?e.parseSelector(n.trim()):null}return i},i={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){let i=[],n=e.parentNode.closest(t);for(;n;)i.push(n),n=n.parentNode.closest(t);return i},prev(e,t){let i=e.previousElementSibling;for(;i;){if(i.matches(t))return[i];i=i.previousElementSibling}return[]},// TODO: this is now unused; remove later along with prev()
next(e,t){let i=e.nextElementSibling;for(;i;){if(i.matches(t))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){let i=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(i,t).filter(t=>!e.isDisabled(t)&&e.isVisible(t))},getSelectorFromElement(e){let n=t(e);return n&&i.findOne(n)?n:null},getElementFromSelector(e){let n=t(e);return n?i.findOne(n):null},getMultipleElementsFromSelector(e){let n=t(e);return n?i.find(n):[]}};return i}(o("7ckBV"))}),l("1yz0K",function(e,t){e.exports,e.exports=function(e,t,i){/**
   * --------------------------------------------------------------------------
   * Bootstrap util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   *//**
   * Constants
   */let n="backdrop",r="show",s=`mousedown.bs.${n}`,o={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,// if false, we use the backdrop helper without adding any element to the dom
rootElement:"body"// give the choice to place backdrop under different elements
},l={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};return(/**
   * Class definition
   */class extends t{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}// Getters
static get Default(){return o}static get DefaultType(){return l}static get NAME(){return n}// Public
show(e){if(!this._config.isVisible){i.execute(e);return}this._append();let t=this._getElement();this._config.isAnimated&&i.reflow(t),t.classList.add(r),this._emulateAnimation(()=>{i.execute(e)})}hide(e){if(!this._config.isVisible){i.execute(e);return}this._getElement().classList.remove(r),this._emulateAnimation(()=>{this.dispose(),i.execute(e)})}dispose(){this._isAppended&&(e.off(this._element,s),this._element.remove(),this._isAppended=!1)}// Private
_getElement(){if(!this._element){let e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return(// use getElement() with the default "body" to get a fresh Element on each instantiation
e.rootElement=i.getElement(e.rootElement),e)}_append(){if(this._isAppended)return;let t=this._getElement();this._config.rootElement.append(t),e.on(t,s,()=>{i.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){i.executeAfterTransition(e,this._getElement(),this._config.isAnimated)}})}(o("hPpy6"),o("frwB2"),o("7ckBV"))}),l("l5evo",function(e,t){var i,n,r,s;e.exports,i=e.exports,n=o("hPpy6"),r=o("fV4p7"),s=o("7ckBV"),i.enableDismissTrigger=(e,t="hide")=>{let i=`click.dismiss${e.EVENT_KEY}`,o=e.NAME;n.on(document,i,`[data-bs-dismiss="${o}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),s.isDisabled(this))return;let n=r.getElementFromSelector(this)||this.closest(`.${o}`),l=e.getOrCreateInstance(n);// Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
l[t]()})},Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})}),l("6PKpC",function(e,t){e.exports,e.exports=function(e,t,i){let n=".bs.focustrap",r=`focusin${n}`,s=`keydown.tab${n}`,o="backward",l={autofocus:!0,trapElement:null// The element to trap focus inside of
},a={autofocus:"boolean",trapElement:"element"};return(/**
   * Class definition
   */class extends i{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}// Getters
static get Default(){return l}static get DefaultType(){return a}static get NAME(){return"focustrap"}// Public
activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),e.off(document,n),e.on(document,r,e=>this._handleFocusin(e)),e.on(document,s,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,e.off(document,n))}// Private
_handleFocusin(e){let{trapElement:i}=this._config;if(e.target===document||e.target===i||i.contains(e.target))return;let n=t.focusableChildren(i);0===n.length?i.focus():this._lastTabNavDirection===o?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?o:"forward")}})}(o("hPpy6"),o("fV4p7"),o("frwB2"))}),l("6Ao2X",function(e,t){e.exports,e.exports=function(e,t,i){/**
   * --------------------------------------------------------------------------
   * Bootstrap util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   *//**
   * Constants
   */let n=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",r=".sticky-top",s="padding-right",o="margin-right";return(/**
   * Class definition
   */class{constructor(){this._element=document.body}// Public
getWidth(){// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),// give padding to element to balance the hidden scrollbar width
this._setElementAttributes(this._element,s,t=>t+e),// trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
this._setElementAttributes(n,s,t=>t+e),this._setElementAttributes(r,o,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,s),this._resetElementAttributes(n,s),this._resetElementAttributes(r,o)}isOverflowing(){return this.getWidth()>0}// Private
_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,i){let n=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+n)return;this._saveInitialAttribute(e,t);let r=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${i(Number.parseFloat(r))}px`)})}_saveInitialAttribute(t,i){let n=t.style.getPropertyValue(i);n&&e.setDataAttribute(t,i,n)}_resetElementAttributes(t,i){this._applyManipulationCallback(t,t=>{let n=e.getDataAttribute(t,i);// We only want to remove the property if the value is `null`; the value can also be zero
if(null===n){t.style.removeProperty(i);return}e.removeDataAttribute(t,i),t.style.setProperty(i,n)})}_applyManipulationCallback(e,n){if(i.isElement(e)){n(e);return}for(let i of t.find(e,this._element))n(i)}})}(o("9ynGh"),o("fV4p7"),o("7ckBV"))});var g={};g=function(e,t,i,n,r,s,o,l){let a=".bs.modal",c=`hide${a}`,d=`hidePrevented${a}`,u=`hidden${a}`,h=`show${a}`,f=`shown${a}`,p=`resize${a}`,g=`click.dismiss${a}`,m=`mousedown.dismiss${a}`,_=`keydown.dismiss${a}`,b=`click${a}.data-api`,v="modal-open",y="show",E="modal-static",A={backdrop:!0,focus:!0,keyboard:!0},w={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};/**
   * Class definition
   */class k extends e{constructor(e,t){super(e,t),this._dialog=i.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new l,this._addEventListeners()}// Getters
static get Default(){return A}static get DefaultType(){return w}static get NAME(){return"modal"}// Public
toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;let i=t.trigger(this._element,h,{relatedTarget:e});i.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(v),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;let e=t.trigger(this._element,c);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(y),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){t.off(window,a),t.off(this._dialog,a),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}// Private
_initializeBackDrop(){return new n({isVisible:!!this._config.backdrop,// 'static' option will be translated to true, and booleans will keep their value,
isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new s({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;let n=i.findOne(".modal-body",this._dialog);n&&(n.scrollTop=0),o.reflow(this._element),this._element.classList.add(y),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,t.trigger(this._element,f,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){t.on(this._element,_,e=>{if("Escape"===e.key){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),t.on(window,p,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),t.on(this._element,m,e=>{// a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
t.one(this._element,g,t=>{if(this._element===e.target&&this._element===t.target){if("static"===this._config.backdrop){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(v),this._resetAdjustments(),this._scrollBar.reset(),t.trigger(this._element,u)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){let e=t.trigger(this._element,d);if(e.defaultPrevented)return;let i=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;// return if the following background transition hasn't yet completed
"hidden"===n||this._element.classList.contains(E)||(i||(this._element.style.overflowY="hidden"),this._element.classList.add(E),this._queueCallback(()=>{this._element.classList.remove(E),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}/**
     * The following methods are used to handle overflowing modals
     */_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),i=t>0;if(i&&!e){let e=o.isRTL()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!i&&e){let e=o.isRTL()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}// Static
static jQueryInterface(e,t){return this.each(function(){let i=k.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===i[e])throw TypeError(`No method named "${e}"`);i[e](t)}})}}return(/**
   * Data API implementation
   */t.on(document,b,'[data-bs-toggle="modal"]',function(e){let n=i.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),t.one(n,h,e=>{e.defaultPrevented||t.one(n,u,()=>{o.isVisible(this)&&this.focus()})});// avoid conflict when clicking modal toggler while another one is open
let r=i.findOne(".modal.show");r&&k.getInstance(r).hide();let s=k.getOrCreateInstance(n);s.toggle(this)}),r.enableDismissTrigger(k),/**
   * jQuery
   */o.defineJQueryPlugin(k),k)}(o("9XQjG"),o("hPpy6"),o("fV4p7"),o("1yz0K"),o("l5evo"),o("6PKpC"),o("7ckBV"),o("6Ao2X"));class m{place="todo";id=Date.now();createdAt=new Date().toLocaleString();constructor(e,t,i){this.title=e.trim(),this.description=t.trim(),this.performer=i}}const _=new/*@__PURE__*/(i(g))(a("#modal-add"));// clear fileds when modal add card was cancel
function b(){a("#title-todo").value="",a("#description").value="",a(".select-performer").value=""}// click btn to open modal edit specific card
function v(i){if("btn-edit"===i.target.dataset.id){e=i.target.closest(".card").id;let n=t.find(t=>t.id==e);a("#title-todo-edit").value=n.title,a("#description-edit").value=n.description,a(".select-edit").value=n.performer}}// accept edited card changes
const y=new/*@__PURE__*/(i(g))(a("#editModal"));// click btn to open modal accept delete specific card
function E(t){"btn-delete"===t.target.dataset.id&&(e=t.target.closest(".card").id)}// toggle card group
function A(e){if("select-place"===e.target.dataset.id){let n=e.target.closest(".card").id,r=t.find(e=>n==e.id),s=t.filter(e=>"inprogress"===e.place);"inprogress"===e.target.value&&6===s.length?(e.target.value=r.place,new/*@__PURE__*/(i(g))(a("#tooMuchProgressModal")).show()):(r.place=e.target.value,h(t),p("trello-todos",t))}}async function w(e){let t=await fetch(e),i=await t.json(),n="";i.forEach(({name:e})=>{n+=`<option value="${e}">${e}</option>`});let r=c(".select-performer");for(let e of r)e.insertAdjacentHTML("beforeend",n)}null!=f("trello-todos")?h(t=f("trello-todos")):t=[],w("https://jsonplaceholder.typicode.com/users"),d(),setInterval(d,1e3);const k=a("#formModalAdd");k.addEventListener("submit",function(e){e.preventDefault();let i=a("#title-todo"),n=a("#description"),r=a(".select-performer"),s=new m(i.value,n.value,r.value);t.push(s),h(t),p("trello-todos",t),_.hide(),i.value="",n.value="",r.value=""});const T=a("#formModalEdit");T.addEventListener("submit",function(i){i.preventDefault();let n=t.find(t=>t.id==e);n.title=a("#title-todo-edit").value,n.description=a("#description-edit").value,n.performer=a(".select-edit").value,h(t),p("trello-todos",t),y.hide()});const S=c(".modal-add-close");for(const e of S)e.addEventListener("click",b);const x=c(".card-group");for(const e of x)e.addEventListener("click",v),e.addEventListener("click",E),e.addEventListener("change",A);const D=a("#deleteSpecifCard");D.addEventListener("click",// accept delete specific card
function(){let i=t.findIndex(t=>t.id==e);t.splice(i,1),h(t),p("trello-todos",t)});const C=a("#deleteAllDoneCards");C.addEventListener("click",// btn accept delete all card
function(){let e=t.filter(e=>"done"!==e.place);t.length=0,t.push(...e),h(t),p("trello-todos",t)});//# sourceMappingURL=index.f3c81b36.js.map

//# sourceMappingURL=index.f3c81b36.js.map
