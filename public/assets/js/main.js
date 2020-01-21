/*! smooth-scroll v16.1.1 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e})(),(function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),a=window.setTimeout((function(){e(n+o)}),o);return r=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})(),(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(q){"use strict";var I={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},F=function(){var n={};return Array.prototype.forEach.call(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}})),n},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},L=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},x=function(e){return e?(t=e,parseInt(q.getComputedStyle(t).height,10)+e.offsetTop):0;var t},H=function(e,t,n,o){if(t.emitEvents&&"function"==typeof q.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(o,e){var A,a,O,C,M={};M.cancelScroll=function(e){cancelAnimationFrame(C),C=null,e||H("scrollCancel",A)},M.animateScroll=function(i,c,e){M.cancelScroll();var s=F(A||I,e||{}),u="[object Number]"===Object.prototype.toString.call(i),t=u||!i.tagName?null:i;if(u||t){var l=q.pageYOffset;s.header&&!O&&(O=document.querySelector(s.header));var n,o,a,m,r,d,f,h,p=x(O),g=u?i:(function(e,t,n,o){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-t-n,0),o&&(a=Math.min(a,L()-q.innerHeight)),a})(t,p,parseInt("function"==typeof s.offset?s.offset(i,c):s.offset,10),s.clip),y=g-l,v=L(),w=0,S=(n=y,a=(o=s).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&a>o.durationMax?o.durationMax:o.durationMin&&a<o.durationMin?o.durationMin:parseInt(a,10)),E=function(e,t){var n,o,a,r=q.pageYOffset;if(e==t||r==t||(l<t&&q.innerHeight+r)>=v)return M.cancelScroll(!0),o=t,a=u,0===(n=i)&&document.body.focus(),a||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),q.scrollTo(0,o)),H("scrollStop",s,i,c),!(C=m=null)},b=function(e){var t,n,o;m||(m=e),w+=e-m,d=l+y*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(t=s).easing&&(o=n*n),"easeOutQuad"===t.easing&&(o=n*(2-n)),"easeInOutQuad"===t.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(o=n*n*n),"easeOutCubic"===t.easing&&(o=--n*n*n+1),"easeInOutCubic"===t.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(o=n*n*n*n),"easeOutQuart"===t.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(o=n*n*n*n*n),"easeOutQuint"===t.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(o=t.customEasing(n)),o||n),q.scrollTo(0,Math.floor(d)),E(d,g)||(C=q.requestAnimationFrame(b),m=e)};0===q.pageYOffset&&q.scrollTo(0,0),f=i,h=s,u||history.pushState&&h.updateURL&&history.pushState({smoothScroll:JSON.stringify(h),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),"matchMedia"in q&&q.matchMedia("(prefers-reduced-motion)").matches?q.scrollTo(0,Math.floor(g)):(H("scrollStart",s,i,c),M.cancelScroll(!0),q.requestAnimationFrame(b))}};var t=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(a=e.target.closest(o))&&"a"===a.tagName.toLowerCase()&&!e.target.closest(A.ignore)&&a.hostname===q.location.hostname&&a.pathname===q.location.pathname&&/#/.test(a.href)){var t,n;try{t=r(decodeURIComponent(a.hash))}catch(e){t=r(a.hash)}if(console.log(t),"#"===t){if(!A.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(t);(n=n||"#top"!==t?n:document.documentElement)&&(e.preventDefault(),(function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=q.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||q.pageYOffset},document.title,t||q.location.href)}})(A),M.animateScroll(n,a))}},n=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(A)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||M.animateScroll(t,null,{updateURL:!1})}};M.destroy=function(){A&&(document.removeEventListener("click",t,!1),q.removeEventListener("popstate",n,!1),M.cancelScroll(),C=O=a=A=null)};return (function(){if(!("querySelector"in document&&"addEventListener"in q&&"requestAnimationFrame"in q&&"closest"in q.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";M.destroy(),A=F(I,e||{}),O=A.header?document.querySelector(A.header):null,document.addEventListener("click",t,!1),A.updateURL&&A.popstate&&q.addEventListener("popstate",n,!1)})(),M}}));
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
'use strict';

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * A local reference to the document.
 */
var document = window.document;


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());

'use strict';

// TOOGLE PALETA COLORES 
const designArrowButton = document.querySelector('.bootcamp-arrow-button');
const div = document.querySelector('#js-toggle');
const elementHidden = document.querySelector('#toggle');

function hideNotDesignElements () {
  form.classList.add('hidden');
  arrowActiveForm.classList.remove('fa-chevron-up');
  arrowActiveForm.classList.add('fa-chevron-down');
  formationCardSection.classList.add('hidden');
  arrowActiveShare.classList.remove('fa-chevron-up');
  arrowActiveShare.classList.add('fa-chevron-down');
  coursesHidden.classList.add('hidden'); 
  coursesArrowButton.classList.remove('fa-chevron-up');
  coursesArrowButton.classList.add('fa-chevron-down');
  //shareCardButton.classList.add('hidden')
}

function toggle () {
  
  if (elementHidden.classList.contains('hidden')) {
  hideNotDesignElements ()
    div.style.borderBottom = "none";
    elementHidden.classList.remove('hidden');
    designArrowButton.classList.remove('fa-chevron-down');
    designArrowButton.classList.add('fa-chevron-up');
    formationIntroElement.style.borderBottom = "1px solid #33323242";
    courses.style.borderBottom = "1px solid #33323242";
    headerForm.style.borderBottom = "1px solid #33323242";
    coursesHidden.classList.add('hidden'); 
  coursesArrowButton.classList.remove('fa-chevron-up');
  coursesArrowButton.classList.add('fa-chevron-down');
  } else {
    elementHidden.classList.add('hidden'); 
    div.style.borderBottom = "1px solid #33323242";
    designArrowButton.classList.remove('fa-chevron-up');
    designArrowButton.classList.add('fa-chevron-down');
    coursesHidden.classList.add('hidden');
  }
}

div.addEventListener('click', toggle);

//Desplegar formulario
const arrowActiveForm = document.querySelector('.arrow-button-form');
const form = document.getElementById('masterFormation')
const headerForm = document.getElementById('masterHeader')
const formationmaster = document.querySelector('.formation__fill');

function hideNotFormElements () {
  elementHidden.classList.add('hidden');
  div.style.borderBottom = "1px solid #33323242";
  designArrowButton.classList.remove('fa-chevron-up');
  designArrowButton.classList.add('fa-chevron-down');
  formationCardSection.classList.add('hidden');
  arrowActiveShare.classList.remove('fa-chevron-up');
  arrowActiveShare.classList.add('fa-chevron-down');
  formationIntroElement.style.borderBottom = "1px solid #33323242";
  courses.style.borderBottom = "1px solid #33323242";
  coursesHidden.classList.add('hidden'); 
  coursesArrowButton.classList.remove('fa-chevron-up');
  coursesArrowButton.classList.add('fa-chevron-down');
  //shareCardButton.classList.add('hidden')
}

function showOrHideForm () {
  hideNotFormElements()
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    headerForm.style.borderBottom = "none";
    arrowActiveForm.classList.remove('fa-chevron-down');
    arrowActiveForm.classList.add('fa-chevron-up');
  } else {
    form.classList.add('hidden');
    headerForm.style.borderBottom = "1px solid #33323242";
    arrowActiveForm.classList.remove('fa-chevron-up');
    arrowActiveForm.classList.add('fa-chevron-down');
    coursesArrowButton.classList.remove('fa-chevron-up');
    coursesArrowButton.classList.add('fa-chevron-down');
    courses.style.borderBottom = "1px solid #33323242";
  }
}

headerForm.addEventListener('click', showOrHideForm);

//Desplegar share card
const formationButton = document.querySelector('.formation-button');
const shareSection = document.querySelector('.formation__share');
const formationIntroElement = document.getElementById('gradeHeader');
const arrowActiveShare = document.querySelector('.arrow-button-share');
const formationCardButton = document.querySelector('#formation-button');
const formationCardSection = document.querySelector('#formation-button-section');

function hiddeNotShareElements() {
  form.classList.add('hidden');
  headerForm.style.borderBottom = "1px solid #33323242";
  div.style.borderBottom = "1px solid #33323242";
  designArrowButton.classList.remove('fa-chevron-up');
  designArrowButton.classList.add('fa-chevron-down');
  elementHidden.classList.add('hidden');
  formationIntroElement.style.borderBottom = "1px solid #33323242";
  arrowActiveForm.classList.remove('fa-chevron-up');
  arrowActiveForm.classList.add('fa-chevron-down');
  courses.style.borderBottom = "1px solid #33323242";
  coursesHidden.classList.add('hidden'); 
  coursesArrowButton.classList.remove('fa-chevron-up');
  coursesArrowButton.classList.add('fa-chevron-down');
}

function showOrHideShare() {
  hiddeNotShareElements();
  if (formationCardSection.classList.contains('hidden')){
    formationCardSection.classList.remove('hidden');
    formationIntroElement.style.borderBottom = "none";
    arrowActiveShare.classList.remove('fa-chevron-down');
    arrowActiveShare.classList.add('fa-chevron-up');
  } else {
    formationCardSection.classList.add('hidden');
    formationIntroElement.style.borderBottom = "1px solid #33323242";
    arrowActiveShare.classList.remove('fa-chevron-up');
    arrowActiveShare.classList.add('fa-chevron-down');
    //shareCardButton.classList.add('hidden');
    coursesArrowButton.classList.remove('fa-chevron-up');
    coursesArrowButton.classList.add('fa-chevron-down');
    coursesHidden.classList.add('hidden'); 
    coursesArrowButton.classList.remove('fa-chevron-up');
    coursesArrowButton.classList.add('fa-chevron-down');
  }
  //validateInputs(); 
}

formationIntroElement.addEventListener('click', showOrHideShare);

//Desplegar courses card

const coursesArrowButton = document.querySelector('.courses-arrow-button');
const courses = document.querySelector('#js-toggle-courses');
const coursesHidden = document.querySelector('#toggle-courses');

function hideNotDesignElements () {
  form.classList.add('hidden');
  arrowActiveForm.classList.remove('fa-chevron-up');
  arrowActiveForm.classList.add('fa-chevron-down');
  formationCardSection.classList.add('hidden');
  arrowActiveShare.classList.remove('fa-chevron-up');
  arrowActiveShare.classList.add('fa-chevron-down');
  formationIntroElement.style.borderBottom = "1px solid #33323242";
  headerForm.style.borderBottom = "1px solid #33323242";
  elementHidden.style.borderBottom = "1px solid #33323242";
  div.style.borderBottom = "1px solid #33323242";
  //shareCardButton.classList.add('hidden')
}

function toggleCourses () {
  hideNotDesignElements ()
  if (coursesHidden.classList.contains('hidden')) {
      coursesHidden.classList.remove('hidden');
      courses.style.borderBottom = "none";
      coursesArrowButton.classList.remove('fa-chevron-down');
      coursesArrowButton.classList.add('fa-chevron-up');
      elementHidden.classList.add('hidden'); 
      //shareCardButton.classList.add('hidden');
      formationCardSection.classList.add('hidden');
      formationIntroElement.style.borderBottom = "1px solid #33323242";
      elementHidden.style.borderBottom = "1px solid #33323242";
      headerForm.style.borderBottom = "1px solid #33323242";
  } else {
      coursesHidden.classList.add('hidden'); 
      courses.style.borderBottom = "1px solid #33323242";
      coursesArrowButton.classList.remove('fa-chevron-up');
      coursesArrowButton.classList.add('fa-chevron-down');
  }
}

////////////////HEADER///////////////

courses.addEventListener('click', toggleCourses);

const author = document.getElementById('author');
const pageCategoryAbout = document.getElementById('pageCategoryAbout');
const pageCategoryWork = document.getElementById('pageCategoryWork');

function resizeAuthor () {
  if (windowSize.matches) { // If media query matches
    author.innerHTML="AB"
  } else {
    author.innerHTML="Ángela Benavente"
  }
}

let windowSize = window.matchMedia("(max-width: 550px)")
resizeAuthor(windowSize) // Call listener function at run time
windowSize.addListener(resizeAuthor)

////////////////////
const navigationButton = document.querySelector('#navigation__button')
const navigationBackground = document.querySelector('#navigation-background');
const aboutSection = document.querySelector('#about');
const firstProjectSection = document.querySelector('#anchor-1');
const secondProjectSection = document.querySelector('#second-project');
const thirdProjectSection = document.querySelector('#third-project');
const fourthProjectSection = document.querySelector('#fourth-project');
const projectImage = document.querySelector('#project-image');
const projectDescription = document.querySelector('#project-description');
const worksPosition = document.querySelector('#worksNavigationPosition');
const firstPosition = document.querySelector('#firstProjectPosition');
const secondPosition = document.querySelector('#secondProjectPosition');
const thirdPosition = document.querySelector('#thirdProjectPosition');
const fourthPosition = document.querySelector('#fourthProjectPosition');
const projectTitle = document.querySelector('#projectTitle');
const projectInformation = document.querySelector('#projectDescription');
const projectSkills = document.querySelector('#projectSkills');
const seePlaceButton = document.querySelector('#seePlaceButton');
const seeCodeButton = document.querySelector('#seeCodeButton');
const contactLinksHeader = document.querySelector('#contactLinksHeader');

/* function showList(){
  const listNavigation = document.querySelector('.navigation__list');
  if(listNavigation.classList.contains('showItems')){
  listNavigation.classList.remove('showItems');
  listNavigation.style.width = '0';
 
} else {
    listNavigation.classList.add('showItems')
    listNavigation.style.width = '100vw'
  }
}
navigationButton.addEventListener('click', showList) */


//////////////////////////
const headerTitle = document.getElementById('navigationInline');

/* Código limpio START */
const navigationProperties = {
  'anchor-1': {
    navigationBackgroundColor: '#1a3446',
    navigationButtonColor: '#1a3446',
    contactLinkColor: '#1a3446e8',
    headerTitleColor: '#fff',
    navLinkId: 'firstProjectPosition',
    pageCategoryAboutStyle: '400',
    pageCategoryWorkStyle: '600',
    pageCategoryWorkWeight: '2px solid white',
    pageCategoryAboutWeight: 'none',
    pageCategoryAboutColor: 'white',
    pageCategoryWorkColor: 'white'
  },
  'anchor-2': {
    navigationBackgroundColor: '#173d31',
    navigationButtonColor: '#173d31',
    contactLinkColor: '#173d31e8',
    headerTitleColor: '#fff',
    navLinkId: 'secondProjectPosition',
    pageCategoryAboutStyle: '400',
    pageCategoryWorkStyle: '600',
    pageCategoryWorkWeight: '2px solid white',
    pageCategoryAboutWeight: 'none',
    pageCategoryAboutColor: 'white',
    pageCategoryWorkColor: 'white'
  },
  'anchor-3': {
    navigationBackgroundColor: '#3e0c15',
    navigationButtonColor: '#3e0c15',
    contactLinkColor: '#3e0c15e8',
    headerTitleColor: '#fff',
    navLinkId: 'thirdProjectPosition',
    pageCategoryAboutStyle: '400',
    pageCategoryWorkStyle: '600',
    pageCategoryWorkWeight: '2px solid white',
    pageCategoryAboutWeight: 'none',
    pageCategoryAboutColor: 'white',
    pageCategoryWorkColor: 'white'
  },
  'anchor-4': {
    navigationBackgroundColor: '#1a4127',
    navigationButtonColor: '#1a4127',
    contactLinkColor: '#1a4127e8',
    headerTitleColor: '#fff',
    navLinkId: 'fourthProjectPosition',
    pageCategoryAboutStyle: '400',
    pageCategoryWorkStyle: '600',
    pageCategoryWorkWeight: '2px solid white',
    pageCategoryAboutWeight: 'none',
    pageCategoryAboutColor: 'white',
    pageCategoryWorkColor: 'white'
  },
  'anchor-5': {
    navigationBackgroundColor: '#472c22',
    navigationButtonColor: '#472c22',
    contactLinkColor: '#472c22e8',
    headerTitleColor: '#fff',
    navLinkId: 'fifthProjectPosition',
    pageCategoryAboutStyle: '400',
    pageCategoryWorkStyle: '600',
    pageCategoryWorkWeight: '2px solid white',
    pageCategoryAboutWeight: 'none',
    pageCategoryAboutColor: 'white',
    pageCategoryWorkColor: 'white'
  },
  'anchor-6': {
    navigationBackgroundColor: '#194a52',
    navigationButtonColor: '#194a52',
    contactLinkColor: '#194a52e8',
    headerTitleColor: '#fff',
    navLinkId: 'sixthProjectPosition',
    pageCategoryAboutStyle: '400',
    pageCategoryWorkStyle: '600',
    pageCategoryWorkWeight: '2px solid white',
    pageCategoryAboutWeight: 'none',
    pageCategoryAboutColor: 'white',
    pageCategoryWorkColor: 'white'
  },
  'anchor-7': {
    navigationBackgroundColor: '#473213',
    navigationButtonColor: '#473213',
    contactLinkColor: '#473213e8',
    headerTitleColor: '#fff',
    navLinkId: 'seventhProjectPosition',
    pageCategoryAboutStyle: '400',
    pageCategoryWorkStyle: '600',
    pageCategoryWorkWeight: '2px solid white',
    pageCategoryAboutWeight: 'none',
    pageCategoryAboutColor: 'white',
    pageCategoryWorkColor: 'white'
  },
  'about': {
    navigationBackgroundColor: '#252525',
    navigationButtonColor: '#252525',
    contactLinkColor: '#252525e8',
    headerTitleColor: 'black',
    pageCategoryAboutStyle: '600',
    pageCategoryWorkStyle: '400',
    pageCategoryAboutWeight: '2px solid black',
    pageCategoryWorkWeight: 'none',
    pageCategoryAboutColor: 'black',
    pageCategoryWorkColor: 'black',
  }
};

const navigationConfig = {
  currentSection: 'about'
};

const SELECTED_NAV_CLASS = 'selected';
const UNSELECTED_NAV_CLASS = 'unselected';

const selectNavLink = (navLinkId) => {
  // first, we unselect current selected nav link
  const selectedNavs = document.querySelectorAll(`.nav-work-link.${SELECTED_NAV_CLASS}`);

  selectedNavs.forEach((nav) => {
    nav.classList.remove(SELECTED_NAV_CLASS);
    nav.classList.add(UNSELECTED_NAV_CLASS);
  });

  // then we select desired nav link
  const nextSelectedNav = navLinkId && document.getElementById(navLinkId);

  if (nextSelectedNav) {
    nextSelectedNav.classList.add(SELECTED_NAV_CLASS);
    nextSelectedNav.classList.remove(UNSELECTED_NAV_CLASS);
  }
};

const changeHeaderProperties = (intersectionEntry) => {
  const targetId = intersectionEntry.target.id;
  const config = navigationProperties[targetId];

  if (navigationConfig.currentSection === targetId || !config) {
    return;
  }

  navigationConfig.currentSection = targetId;

  // change colors
  navigationBackground.style.backgroundColor = config.navigationBackgroundColor;
  navigationButton.style.backgroundColor = config.navigationButtonColor;
  contactLinksHeader.style.backgroundColor = config.contactLinkColor;
  headerTitle.style.color = config.headerTitleColor;
  pageCategoryWork.style.textDecoration = config.pageCategoryWorkStyle;
  pageCategoryAbout.style.textDecoration = config.pageCategoryAboutStyle;
  pageCategoryWork.style.borderBottom = config.pageCategoryWorkWeight;
  pageCategoryAbout.style.borderBottom = config.pageCategoryAboutWeight;
  pageCategoryWork.style.color = config.pageCategoryWorkColor;
  pageCategoryAbout.style.color = config.pageCategoryAboutColor;

  config.navLinkId && selectNavLink(config.navLinkId);
};

const HEADER_SIZE = 60;

const isVisibleAndTop = (entry) => {
  const { top, height } = entry.boundingClientRect;
  const viewportHeight = window.innerHeight;

  if (height === viewportHeight || Math.abs(height - viewportHeight) < 10) {
    const minTop = (viewportHeight - HEADER_SIZE) * -1;

    return entry.isIntersecting && top <= HEADER_SIZE && top >= minTop;
  }
}

const isVisibleAndBig = (entry) => {
  const { top, height } = entry.boundingClientRect;
  const viewportHeight = window.innerHeight;

  if (Math.abs(height - viewportHeight) > 10) {
    const visibleHeight = entry.intersectionRatio * height;
    let minVisibleHeight;

    if (top < 0) { // el elemento está por arriba
      minVisibleHeight = HEADER_SIZE;
    } else { // el elemento está por abajo
      minVisibleHeigh = viewportHeight - HEADER_SIZE;
    }

    return entry.isIntersecting && visibleHeight > minVisibleHeight;
  }
};

const changeNavigation = (entries) => {
  let visibleTopEntry = entries.reverse().find(isVisibleAndTop);
  visibleTopEntry = visibleTopEntry || entries.find(isVisibleAndBig);

  if (visibleTopEntry) {
    changeHeaderProperties(visibleTopEntry);
  }
};

const calcThreshold = (interval) => {
  const threshold = [];

  for (let current = 0; current < 1; current += interval) {
    threshold.push(current);
  }
  threshold.push(1);

  return threshold;
};

const startIntersectionObserver = () => {
  const targets = document.querySelectorAll('.listen-scroll');
  const observerOptions = {
    rootMargin: '0px',
    threshold: calcThreshold(0.02)
  };

  const observer = new IntersectionObserver(changeNavigation, observerOptions);

  targets.forEach((target) => {
    observer.observe(target);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('#home').classList.add('hidden'); // hide hero
  
    startIntersectionObserver();
  }, 7000);

  // navigation buttons
  const header = document.getElementById('header');
  const menuCheckbox = document.getElementById('navi-toggle');
  const hideMenu = () => {
    menuCheckbox.checked = false;
    return true;
  };

  header.querySelectorAll('.singleItem').forEach(link => {
    link.addEventListener('click', hideMenu);
  });
});

function loadFunction() {
  document.querySelector('.intro').classList.add('go'); // hero

  if (!("scrollBehavior" in document.documentElement.style)) {
    // scroll-behavior: smooth - is not supported
    const scroll = new SmoothScroll('a[data-scroll]', {
      speed: 600
    });
  }
}

window.addEventListener('load', loadFunction);

//# sourceMappingURL=main.js.map
