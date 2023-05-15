// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9tRox":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _smoothScrollbar = require("smooth-scrollbar");
var _smoothScrollbarDefault = parcelHelpers.interopDefault(_smoothScrollbar);
const options = {
    "damping": 0.06,
    "alwaysShowTracks": true
};
(0, _smoothScrollbarDefault.default).init(document.querySelector("#my-scrollbar"), options);

},{"smooth-scrollbar":"7azJf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7azJf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollbarPlugin", ()=>(0, _plugin.ScrollbarPlugin));
var _tslib = require("tslib");
var _polyfills = require("./polyfills");
var _scrollbar = require("./scrollbar");
var _plugin = require("./plugin");
var _style = require("./style");
/**
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */ var SmoothScrollbar = /** @class */ function(_super) {
    (0, _tslib.__extends)(SmoothScrollbar, _super);
    function SmoothScrollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initializes a scrollbar on the given element.
     *
     * @param elem The DOM element that you want to initialize scrollbar to
     * @param [options] Initial options
     */ SmoothScrollbar.init = function(elem, options) {
        if (!elem || elem.nodeType !== 1) throw new TypeError("expect element to be DOM Element, but got " + elem);
        // attach stylesheet
        (0, _style.attachStyle)();
        if ((0, _scrollbar.scrollbarMap).has(elem)) return (0, _scrollbar.scrollbarMap).get(elem);
        return new (0, _scrollbar.Scrollbar)(elem, options);
    };
    /**
     * Automatically init scrollbar on all elements base on the selector `[data-scrollbar]`
     *
     * @param options Initial options
     */ SmoothScrollbar.initAll = function(options) {
        return Array.from(document.querySelectorAll("[data-scrollbar]"), function(elem) {
            return SmoothScrollbar.init(elem, options);
        });
    };
    /**
     * Check if there is a scrollbar on given element
     *
     * @param elem The DOM element that you want to check
     */ SmoothScrollbar.has = function(elem) {
        return (0, _scrollbar.scrollbarMap).has(elem);
    };
    /**
     * Gets scrollbar on the given element.
     * If no scrollbar instance exsits, returns `undefined`
     *
     * @param elem The DOM element that you want to check.
     */ SmoothScrollbar.get = function(elem) {
        return (0, _scrollbar.scrollbarMap).get(elem);
    };
    /**
     * Returns an array that contains all scrollbar instances
     */ SmoothScrollbar.getAll = function() {
        return Array.from((0, _scrollbar.scrollbarMap).values());
    };
    /**
     * Removes scrollbar on the given element
     */ SmoothScrollbar.destroy = function(elem) {
        var scrollbar = (0, _scrollbar.scrollbarMap).get(elem);
        if (scrollbar) scrollbar.destroy();
    };
    /**
     * Removes all scrollbar instances from current document
     */ SmoothScrollbar.destroyAll = function() {
        (0, _scrollbar.scrollbarMap).forEach(function(scrollbar) {
            scrollbar.destroy();
        });
    };
    /**
     * Attaches plugins to scrollbars
     *
     * @param ...Plugins Scrollbar plugin classes
     */ SmoothScrollbar.use = function() {
        var Plugins = [];
        for(var _i = 0; _i < arguments.length; _i++)Plugins[_i] = arguments[_i];
        return (0, _plugin.addPlugins).apply(void 0, Plugins);
    };
    /**
     * Attaches default style sheets to current document.
     * You don't need to call this method manually unless
     * you removed the default styles via `Scrollbar.detachStyle()`
     */ SmoothScrollbar.attachStyle = function() {
        return (0, _style.attachStyle)();
    };
    /**
     * Removes default styles from current document.
     * Use this method when you want to use your own css for scrollbars.
     */ SmoothScrollbar.detachStyle = function() {
        return (0, _style.detachStyle)();
    };
    SmoothScrollbar.version = "8.8.3";
    SmoothScrollbar.ScrollbarPlugin = (0, _plugin.ScrollbarPlugin);
    return SmoothScrollbar;
}((0, _scrollbar.Scrollbar));
exports.default = SmoothScrollbar;

},{"tslib":"euOof","./polyfills":"jyKyC","./scrollbar":"l2IRH","./plugin":"bSKNu","./style":"7J5rq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"euOof":[function(require,module,exports) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
parcelHelpers.export(exports, "__spread", ()=>__spread);
parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jyKyC":[function(require,module,exports) {

},{}],"l2IRH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrollbarMap", ()=>scrollbarMap);
parcelHelpers.export(exports, "Scrollbar", ()=>Scrollbar);
var _tslib = require("tslib");
var _utils = require("./utils");
var _options = require("./options");
var _ = require("./utils/");
var _1 = require("./decorators/");
var _2 = require("./track/");
var _3 = require("./geometry/");
var _4 = require("./scrolling/");
var _plugin = require("./plugin");
var _5 = require("./events/");
var scrollbarMap = new Map();
var Scrollbar = /** @class */ function() {
    function Scrollbar(containerEl, options) {
        var _this = this;
        /**
         * Current scrolling offsets
         */ this.offset = {
            x: 0,
            y: 0
        };
        /**
         * Max-allowed scrolling offsets
         */ this.limit = {
            x: Infinity,
            y: Infinity
        };
        /**
         * Container bounding rect
         */ this.bounding = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        // private _observer: ResizeObserver;
        this._plugins = [];
        this._momentum = {
            x: 0,
            y: 0
        };
        this._listeners = new Set();
        this.containerEl = containerEl;
        var contentEl = this.contentEl = document.createElement("div");
        this.options = new (0, _options.Options)(options);
        // mark as a scroll element
        containerEl.setAttribute("data-scrollbar", "true");
        // make container focusable
        containerEl.setAttribute("tabindex", "-1");
        (0, _.setStyle)(containerEl, {
            overflow: "hidden",
            outline: "none"
        });
        // enable touch event capturing in IE, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/39
        if (window.navigator.msPointerEnabled) containerEl.style.msTouchAction = "none";
        // mount content
        contentEl.className = "scroll-content";
        Array.from(containerEl.childNodes).forEach(function(node) {
            contentEl.appendChild(node);
        });
        containerEl.appendChild(contentEl);
        // attach track
        this.track = new (0, _2.TrackController)(this);
        // initial measuring
        this.size = this.getSize();
        // init plugins
        this._plugins = (0, _plugin.initPlugins)(this, this.options.plugins);
        // preserve scroll offset
        var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
        containerEl.scrollLeft = containerEl.scrollTop = 0;
        this.setPosition(scrollLeft, scrollTop, {
            withoutCallbacks: true
        });
        // FIXME: update typescript
        var ResizeObserver = window.ResizeObserver;
        // observe
        if (typeof ResizeObserver === "function") {
            this._observer = new ResizeObserver(function() {
                _this.update();
            });
            this._observer.observe(contentEl);
        }
        scrollbarMap.set(containerEl, this);
        // wait for DOM ready
        requestAnimationFrame(function() {
            _this._init();
        });
    }
    Object.defineProperty(Scrollbar.prototype, "parent", {
        /**
         * Parent scrollbar
         */ get: function() {
            var elem = this.containerEl.parentElement;
            while(elem){
                var parentScrollbar = scrollbarMap.get(elem);
                if (parentScrollbar) return parentScrollbar;
                elem = elem.parentElement;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollTop", {
        /**
         * Gets or sets `scrollbar.offset.y`
         */ get: function() {
            return this.offset.y;
        },
        set: function(y) {
            this.setPosition(this.scrollLeft, y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollLeft", {
        /**
         * Gets or sets `scrollbar.offset.x`
         */ get: function() {
            return this.offset.x;
        },
        set: function(x) {
            this.setPosition(x, this.scrollTop);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the size of the scrollbar container element
     * and the content wrapper element
     */ Scrollbar.prototype.getSize = function() {
        return (0, _3.getSize)(this);
    };
    /**
     * Forces scrollbar to update geometry infomation.
     *
     * By default, scrollbars are automatically updated with `100ms` debounce (or `MutationObserver` fires).
     * You can call this method to force an update when you modified contents
     */ Scrollbar.prototype.update = function() {
        (0, _3.update)(this);
        this._plugins.forEach(function(plugin) {
            plugin.onUpdate();
        });
    };
    /**
     * Checks if an element is visible in the current view area
     */ Scrollbar.prototype.isVisible = function(elem) {
        return (0, _3.isVisible)(this, elem);
    };
    /**
     * Sets the scrollbar to the given offset without easing
     */ Scrollbar.prototype.setPosition = function(x, y, options) {
        var _this = this;
        if (x === void 0) x = this.offset.x;
        if (y === void 0) y = this.offset.y;
        if (options === void 0) options = {};
        var status = (0, _4.setPosition)(this, x, y);
        if (!status || options.withoutCallbacks) return;
        this._listeners.forEach(function(fn) {
            fn.call(_this, status);
        });
    };
    /**
     * Scrolls to given position with easing function
     */ Scrollbar.prototype.scrollTo = function(x, y, duration, options) {
        if (x === void 0) x = this.offset.x;
        if (y === void 0) y = this.offset.y;
        if (duration === void 0) duration = 0;
        if (options === void 0) options = {};
        (0, _4.scrollTo)(this, x, y, duration, options);
    };
    /**
     * Scrolls the target element into visible area of scrollbar,
     * likes the DOM method `element.scrollIntoView().
     */ Scrollbar.prototype.scrollIntoView = function(elem, options) {
        if (options === void 0) options = {};
        (0, _4.scrollIntoView)(this, elem, options);
    };
    /**
     * Adds scrolling listener
     */ Scrollbar.prototype.addListener = function(fn) {
        if (typeof fn !== "function") throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
        this._listeners.add(fn);
    };
    /**
     * Removes listener previously registered with `scrollbar.addListener()`
     */ Scrollbar.prototype.removeListener = function(fn) {
        this._listeners.delete(fn);
    };
    /**
     * Adds momentum and applys delta transformers.
     */ Scrollbar.prototype.addTransformableMomentum = function(x, y, fromEvent, callback) {
        this._updateDebounced();
        var finalDelta = this._plugins.reduce(function(delta, plugin) {
            return plugin.transformDelta(delta, fromEvent) || delta;
        }, {
            x: x,
            y: y
        });
        var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
        if (willScroll) this.addMomentum(finalDelta.x, finalDelta.y);
        if (callback) callback.call(this, willScroll);
    };
    /**
     * Increases scrollbar's momentum
     */ Scrollbar.prototype.addMomentum = function(x, y) {
        this.setMomentum(this._momentum.x + x, this._momentum.y + y);
    };
    /**
     * Sets scrollbar's momentum to given value
     */ Scrollbar.prototype.setMomentum = function(x, y) {
        if (this.limit.x === 0) x = 0;
        if (this.limit.y === 0) y = 0;
        if (this.options.renderByPixels) {
            x = Math.round(x);
            y = Math.round(y);
        }
        this._momentum.x = x;
        this._momentum.y = y;
    };
    /**
     * Update options for specific plugin
     *
     * @param pluginName Name of the plugin
     * @param [options] An object includes the properties that you want to update
     */ Scrollbar.prototype.updatePluginOptions = function(pluginName, options) {
        this._plugins.forEach(function(plugin) {
            if (plugin.name === pluginName) Object.assign(plugin.options, options);
        });
    };
    Scrollbar.prototype.destroy = function() {
        var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
        (0, _.clearEventsOn)(this);
        this._listeners.clear();
        this.setMomentum(0, 0);
        cancelAnimationFrame(this._renderID);
        if (this._observer) this._observer.disconnect();
        scrollbarMap.delete(this.containerEl);
        // restore contents
        var childNodes = Array.from(contentEl.childNodes);
        while(containerEl.firstChild)containerEl.removeChild(containerEl.firstChild);
        childNodes.forEach(function(el) {
            containerEl.appendChild(el);
        });
        // reset scroll position
        (0, _.setStyle)(containerEl, {
            overflow: ""
        });
        containerEl.scrollTop = this.scrollTop;
        containerEl.scrollLeft = this.scrollLeft;
        // invoke plugin.onDestroy
        this._plugins.forEach(function(plugin) {
            plugin.onDestroy();
        });
        this._plugins.length = 0;
    };
    Scrollbar.prototype._init = function() {
        var _this = this;
        this.update();
        // init evet handlers
        Object.keys(_5).forEach(function(prop) {
            _5[prop](_this);
        });
        // invoke `plugin.onInit`
        this._plugins.forEach(function(plugin) {
            plugin.onInit();
        });
        this._render();
    };
    Scrollbar.prototype._updateDebounced = function() {
        this.update();
    };
    // check whether to propagate monmentum to parent scrollbar
    // the following situations are considered as `true`:
    //         1. continuous scrolling is enabled (automatically disabled when overscroll is enabled)
    //         2. scrollbar reaches one side and is not about to scroll on the other direction
    Scrollbar.prototype._shouldPropagateMomentum = function(deltaX, deltaY) {
        if (deltaX === void 0) deltaX = 0;
        if (deltaY === void 0) deltaY = 0;
        var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
        if (!options.continuousScrolling) return false;
        // force an update when scrollbar is "unscrollable", see #106
        if (limit.x === 0 && limit.y === 0) this._updateDebounced();
        var destX = (0, _utils.clamp)(deltaX + offset.x, 0, limit.x);
        var destY = (0, _utils.clamp)(deltaY + offset.y, 0, limit.y);
        var res = true;
        // offsets are not about to change
        // `&=` operator is not allowed for boolean types
        res = res && destX === offset.x;
        res = res && destY === offset.y;
        // current offsets are on the edge
        res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
        return res;
    };
    Scrollbar.prototype._render = function() {
        var _momentum = this._momentum;
        if (_momentum.x || _momentum.y) {
            var nextX = this._nextTick("x");
            var nextY = this._nextTick("y");
            _momentum.x = nextX.momentum;
            _momentum.y = nextY.momentum;
            this.setPosition(nextX.position, nextY.position);
        }
        var remain = (0, _tslib.__assign)({}, this._momentum);
        this._plugins.forEach(function(plugin) {
            plugin.onRender(remain);
        });
        this._renderID = requestAnimationFrame(this._render.bind(this));
    };
    Scrollbar.prototype._nextTick = function(direction) {
        var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
        var current = offset[direction];
        var remain = _momentum[direction];
        if (Math.abs(remain) <= 0.1) return {
            momentum: 0,
            position: current + remain
        };
        var nextMomentum = remain * (1 - options.damping);
        if (options.renderByPixels) nextMomentum |= 0;
        return {
            momentum: nextMomentum,
            position: current + remain - nextMomentum
        };
    };
    (0, _tslib.__decorate)([
        (0, _1.debounce)(100, true)
    ], Scrollbar.prototype, "_updateDebounced", null);
    return Scrollbar;
}();

},{"tslib":"euOof","./utils":"jzGiI","./options":"kuzUS","./utils/":"jzGiI","./decorators/":"bvgNp","./track/":"iNFGO","./geometry/":"jBiTP","./scrolling/":"jsAOK","./plugin":"bSKNu","./events/":"cHe8H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jzGiI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>(0, _clamp.clamp));
parcelHelpers.export(exports, "debounce", ()=>(0, _debounce.debounce));
var _eventHub = require("./event-hub");
parcelHelpers.exportAll(_eventHub, exports);
var _getPointerData = require("./get-pointer-data");
parcelHelpers.exportAll(_getPointerData, exports);
var _getPosition = require("./get-position");
parcelHelpers.exportAll(_getPosition, exports);
var _isOneOf = require("./is-one-of");
parcelHelpers.exportAll(_isOneOf, exports);
var _setStyle = require("./set-style");
parcelHelpers.exportAll(_setStyle, exports);
var _touchRecord = require("./touch-record");
parcelHelpers.exportAll(_touchRecord, exports);
var _clamp = require("./clamp");
var _debounce = require("./debounce");

},{"./event-hub":"3PIA4","./get-pointer-data":"l3sLH","./get-position":"6WLv8","./is-one-of":"8RovI","./set-style":"7lys4","./touch-record":"ezxNx","./clamp":"iH99d","./debounce":"5vm7W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PIA4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventScope", ()=>eventScope);
parcelHelpers.export(exports, "clearEventsOn", ()=>clearEventsOn);
var eventListenerOptions;
var eventMap = new WeakMap();
function getOptions() {
    if (eventListenerOptions !== undefined) return eventListenerOptions;
    var supportPassiveEvent = false;
    try {
        var noop = function() {};
        var options = Object.defineProperty({}, "passive", {
            enumerable: true,
            get: function() {
                supportPassiveEvent = true;
                return true;
            }
        });
        window.addEventListener("testPassive", noop, options);
        window.removeEventListener("testPassive", noop, options);
    } catch (e) {}
    eventListenerOptions = supportPassiveEvent ? {
        passive: false
    } : false;
    return eventListenerOptions;
}
function eventScope(scrollbar) {
    var configs = eventMap.get(scrollbar) || [];
    eventMap.set(scrollbar, configs);
    return function addEvent(elem, events, fn) {
        function handler(event) {
            // ignore default prevented events
            if (event.defaultPrevented) return;
            fn(event);
        }
        events.split(/\s+/g).forEach(function(eventName) {
            configs.push({
                elem: elem,
                eventName: eventName,
                handler: handler
            });
            elem.addEventListener(eventName, handler, getOptions());
        });
    };
}
function clearEventsOn(scrollbar) {
    var configs = eventMap.get(scrollbar);
    if (!configs) return;
    configs.forEach(function(_a) {
        var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
        elem.removeEventListener(eventName, handler, getOptions());
    });
    eventMap.delete(scrollbar);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l3sLH":[function(require,module,exports) {
/**
 * Get pointer/touch data
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPointerData", ()=>getPointerData);
function getPointerData(evt) {
    // if is touch event, return last item in touchList
    // else return original event
    return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6WLv8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Get pointer/finger position
 */ parcelHelpers.export(exports, "getPosition", ()=>getPosition);
var _getPointerData = require("./get-pointer-data");
function getPosition(evt) {
    var data = (0, _getPointerData.getPointerData)(evt);
    return {
        x: data.clientX,
        y: data.clientY
    };
}

},{"./get-pointer-data":"l3sLH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8RovI":[function(require,module,exports) {
/**
 * Check if `a` is one of `[...b]`
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isOneOf", ()=>isOneOf);
function isOneOf(a, b) {
    if (b === void 0) b = [];
    return b.some(function(v) {
        return a === v;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7lys4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setStyle", ()=>setStyle);
var VENDOR_PREFIX = [
    "webkit",
    "moz",
    "ms",
    "o"
];
var RE = new RegExp("^-(?!(?:" + VENDOR_PREFIX.join("|") + ")-)");
function autoPrefix(styles) {
    var res = {};
    Object.keys(styles).forEach(function(prop) {
        if (!RE.test(prop)) {
            res[prop] = styles[prop];
            return;
        }
        var val = styles[prop];
        prop = prop.replace(/^-/, "");
        res[prop] = val;
        VENDOR_PREFIX.forEach(function(prefix) {
            res["-" + prefix + "-" + prop] = val;
        });
    });
    return res;
}
function setStyle(elem, styles) {
    styles = autoPrefix(styles);
    Object.keys(styles).forEach(function(prop) {
        var cssProp = prop.replace(/^-/, "").replace(/-([a-z])/g, function(_, $1) {
            return $1.toUpperCase();
        });
        elem.style[cssProp] = styles[prop];
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ezxNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tracker", ()=>Tracker);
parcelHelpers.export(exports, "TouchRecord", ()=>TouchRecord);
var _tslib = require("tslib");
var _getPosition = require("./get-position");
var Tracker = /** @class */ function() {
    function Tracker(touch) {
        this.velocityMultiplier = window.devicePixelRatio;
        this.updateTime = Date.now();
        this.delta = {
            x: 0,
            y: 0
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.lastPosition = {
            x: 0,
            y: 0
        };
        this.lastPosition = (0, _getPosition.getPosition)(touch);
    }
    Tracker.prototype.update = function(touch) {
        var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
        var now = Date.now();
        var position = (0, _getPosition.getPosition)(touch);
        var delta = {
            x: -(position.x - lastPosition.x),
            y: -(position.y - lastPosition.y)
        };
        var duration = now - updateTime || 16.7;
        var vx = delta.x / duration * 16.7;
        var vy = delta.y / duration * 16.7;
        velocity.x = vx * this.velocityMultiplier;
        velocity.y = vy * this.velocityMultiplier;
        this.delta = delta;
        this.updateTime = now;
        this.lastPosition = position;
    };
    return Tracker;
}();
var TouchRecord = /** @class */ function() {
    function TouchRecord() {
        this._touchList = {};
    }
    Object.defineProperty(TouchRecord.prototype, "_primitiveValue", {
        get: function() {
            return {
                x: 0,
                y: 0
            };
        },
        enumerable: true,
        configurable: true
    });
    TouchRecord.prototype.isActive = function() {
        return this._activeTouchID !== undefined;
    };
    TouchRecord.prototype.getDelta = function() {
        var tracker = this._getActiveTracker();
        if (!tracker) return this._primitiveValue;
        return (0, _tslib.__assign)({}, tracker.delta);
    };
    TouchRecord.prototype.getVelocity = function() {
        var tracker = this._getActiveTracker();
        if (!tracker) return this._primitiveValue;
        return (0, _tslib.__assign)({}, tracker.velocity);
    };
    TouchRecord.prototype.getEasingDistance = function(damping) {
        var deAcceleration = 1 - damping;
        var distance = {
            x: 0,
            y: 0
        };
        var vel = this.getVelocity();
        Object.keys(vel).forEach(function(dir) {
            // ignore small velocity
            var v = Math.abs(vel[dir]) <= 10 ? 0 : vel[dir];
            while(v !== 0){
                distance[dir] += v;
                v = v * deAcceleration | 0;
            }
        });
        return distance;
    };
    TouchRecord.prototype.track = function(evt) {
        var _this = this;
        var targetTouches = evt.targetTouches;
        Array.from(targetTouches).forEach(function(touch) {
            _this._add(touch);
        });
        return this._touchList;
    };
    TouchRecord.prototype.update = function(evt) {
        var _this = this;
        var touches = evt.touches, changedTouches = evt.changedTouches;
        Array.from(touches).forEach(function(touch) {
            _this._renew(touch);
        });
        this._setActiveID(changedTouches);
        return this._touchList;
    };
    TouchRecord.prototype.release = function(evt) {
        var _this = this;
        delete this._activeTouchID;
        Array.from(evt.changedTouches).forEach(function(touch) {
            _this._delete(touch);
        });
    };
    TouchRecord.prototype._add = function(touch) {
        if (this._has(touch)) // reset tracker
        this._delete(touch);
        var tracker = new Tracker(touch);
        this._touchList[touch.identifier] = tracker;
    };
    TouchRecord.prototype._renew = function(touch) {
        if (!this._has(touch)) return;
        var tracker = this._touchList[touch.identifier];
        tracker.update(touch);
    };
    TouchRecord.prototype._delete = function(touch) {
        delete this._touchList[touch.identifier];
    };
    TouchRecord.prototype._has = function(touch) {
        return this._touchList.hasOwnProperty(touch.identifier);
    };
    TouchRecord.prototype._setActiveID = function(touches) {
        this._activeTouchID = touches[touches.length - 1].identifier;
    };
    TouchRecord.prototype._getActiveTracker = function() {
        var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
        return _touchList[_activeTouchID];
    };
    return TouchRecord;
}();

},{"tslib":"euOof","./get-position":"6WLv8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iH99d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
function clamp(value, lower, upper) {
    return Math.max(lower, Math.min(upper, value));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5vm7W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
function debounce(fn, wait, leading) {
    if (wait === void 0) wait = 0;
    var timer;
    var lastCalledAt = -Infinity;
    return function debouncedFn() {
        var _this = this;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (leading) {
            var now = Date.now();
            var elapsed = now - lastCalledAt;
            lastCalledAt = now;
            if (elapsed >= wait) fn.apply(this, args);
        } else return;
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(_this, args);
        }, wait);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kuzUS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Options", ()=>Options);
var _tslib = require("tslib");
var _ = require("./decorators/");
var Options = /** @class */ function() {
    function Options(config) {
        var _this = this;
        if (config === void 0) config = {};
        /**
         * Momentum reduction damping factor, a float value between `(0, 1)`.
         * The lower the value is, the more smooth the scrolling will be
         * (also the more paint frames).
         */ this.damping = 0.1;
        /**
         * Minimal size for scrollbar thumbs.
         */ this.thumbMinSize = 20;
        /**
         * Render every frame in integer pixel values
         * set to `true` to improve scrolling performance.
         */ this.renderByPixels = true;
        /**
         * Keep scrollbar tracks visible
         */ this.alwaysShowTracks = false;
        /**
         * Set to `true` to allow outer scrollbars continue scrolling
         * when current scrollbar reaches edge.
         */ this.continuousScrolling = true;
        /**
         * Delegate wheel events and touch events to the given element.
         * By default, the container element is used.
         * This option will be useful for dealing with fixed elements.
         */ this.delegateTo = null;
        /**
         * Options for plugins. Syntax:
         *   plugins[pluginName] = pluginOptions: any
         */ this.plugins = {};
        Object.keys(config).forEach(function(prop) {
            _this[prop] = config[prop];
        });
    }
    Object.defineProperty(Options.prototype, "wheelEventTarget", {
        get: function() {
            return this.delegateTo;
        },
        set: function(el) {
            console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.");
            this.delegateTo = el;
        },
        enumerable: true,
        configurable: true
    });
    (0, _tslib.__decorate)([
        (0, _.range)(0, 1)
    ], Options.prototype, "damping", void 0);
    (0, _tslib.__decorate)([
        (0, _.range)(0, Infinity)
    ], Options.prototype, "thumbMinSize", void 0);
    (0, _tslib.__decorate)([
        (0, _.boolean)
    ], Options.prototype, "renderByPixels", void 0);
    (0, _tslib.__decorate)([
        (0, _.boolean)
    ], Options.prototype, "alwaysShowTracks", void 0);
    (0, _tslib.__decorate)([
        (0, _.boolean)
    ], Options.prototype, "continuousScrolling", void 0);
    return Options;
}();

},{"tslib":"euOof","./decorators/":"bvgNp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bvgNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _range = require("./range");
parcelHelpers.exportAll(_range, exports);
var _boolean = require("./boolean");
parcelHelpers.exportAll(_boolean, exports);
var _debounce = require("./debounce");
parcelHelpers.exportAll(_debounce, exports);

},{"./range":"4vMHW","./boolean":"kWgZJ","./debounce":"ccT4N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4vMHW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "range", ()=>range);
var _utils = require("../utils");
function range(min, max) {
    if (min === void 0) min = -Infinity;
    if (max === void 0) max = Infinity;
    return function(proto, key) {
        var alias = "_" + key;
        Object.defineProperty(proto, key, {
            get: function() {
                return this[alias];
            },
            set: function(val) {
                Object.defineProperty(this, alias, {
                    value: (0, _utils.clamp)(val, min, max),
                    enumerable: false,
                    writable: true,
                    configurable: true
                });
            },
            enumerable: true,
            configurable: true
        });
    };
}

},{"../utils":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kWgZJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "boolean", ()=>boolean);
function boolean(proto, key) {
    var alias = "_" + key;
    Object.defineProperty(proto, key, {
        get: function() {
            return this[alias];
        },
        set: function(val) {
            Object.defineProperty(this, alias, {
                value: !!val,
                enumerable: false,
                writable: true,
                configurable: true
            });
        },
        enumerable: true,
        configurable: true
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccT4N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
var _tslib = require("tslib");
var _utils = require("../utils");
function debounce() {
    var options = [];
    for(var _i = 0; _i < arguments.length; _i++)options[_i] = arguments[_i];
    return function(_proto, key, descriptor) {
        var fn = descriptor.value;
        return {
            get: function() {
                if (!this.hasOwnProperty(key)) Object.defineProperty(this, key, {
                    value: (0, _utils.debounce).apply(void 0, (0, _tslib.__spreadArrays)([
                        fn
                    ], options))
                });
                return this[key];
            }
        };
    };
}

},{"tslib":"euOof","../utils":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNFGO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TrackController", ()=>TrackController);
var _tslib = require("tslib");
var _track = require("./track");
var _direction = require("./direction");
var _ = require("../decorators/");
var TrackController = /** @class */ function() {
    function TrackController(_scrollbar) {
        this._scrollbar = _scrollbar;
        var thumbMinSize = _scrollbar.options.thumbMinSize;
        this.xAxis = new (0, _track.ScrollbarTrack)((0, _direction.TrackDirection).X, thumbMinSize);
        this.yAxis = new (0, _track.ScrollbarTrack)((0, _direction.TrackDirection).Y, thumbMinSize);
        this.xAxis.attachTo(_scrollbar.containerEl);
        this.yAxis.attachTo(_scrollbar.containerEl);
        if (_scrollbar.options.alwaysShowTracks) {
            this.xAxis.show();
            this.yAxis.show();
        }
    }
    /**
     * Updates track appearance
     */ TrackController.prototype.update = function() {
        var _a = this._scrollbar, size = _a.size, offset = _a.offset;
        this.xAxis.update(offset.x, size.container.width, size.content.width);
        this.yAxis.update(offset.y, size.container.height, size.content.height);
    };
    /**
     * Automatically hide tracks when scrollbar is in idle state
     */ TrackController.prototype.autoHideOnIdle = function() {
        if (this._scrollbar.options.alwaysShowTracks) return;
        this.xAxis.hide();
        this.yAxis.hide();
    };
    (0, _tslib.__decorate)([
        (0, _.debounce)(300)
    ], TrackController.prototype, "autoHideOnIdle", null);
    return TrackController;
}();

},{"tslib":"euOof","./track":"6WVpd","./direction":"dYSG8","../decorators/":"bvgNp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6WVpd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollbarTrack", ()=>ScrollbarTrack);
var _thumb = require("./thumb");
var _ = require("../utils/");
var ScrollbarTrack = /** @class */ function() {
    function ScrollbarTrack(direction, thumbMinSize) {
        if (thumbMinSize === void 0) thumbMinSize = 0;
        /**
         * Track element
         */ this.element = document.createElement("div");
        this._isShown = false;
        this.element.className = "scrollbar-track scrollbar-track-" + direction;
        this.thumb = new (0, _thumb.ScrollbarThumb)(direction, thumbMinSize);
        this.thumb.attachTo(this.element);
    }
    /**
     * Attach to scrollbar container element
     *
     * @param scrollbarContainer Scrollbar container element
     */ ScrollbarTrack.prototype.attachTo = function(scrollbarContainer) {
        scrollbarContainer.appendChild(this.element);
    };
    /**
     * Show track immediately
     */ ScrollbarTrack.prototype.show = function() {
        if (this._isShown) return;
        this._isShown = true;
        this.element.classList.add("show");
    };
    /**
     * Hide track immediately
     */ ScrollbarTrack.prototype.hide = function() {
        if (!this._isShown) return;
        this._isShown = false;
        this.element.classList.remove("show");
    };
    ScrollbarTrack.prototype.update = function(scrollOffset, containerSize, pageSize) {
        (0, _.setStyle)(this.element, {
            display: pageSize <= containerSize ? "none" : "block"
        });
        this.thumb.update(scrollOffset, containerSize, pageSize);
    };
    return ScrollbarTrack;
}();

},{"./thumb":"jszc2","../utils/":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jszc2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollbarThumb", ()=>ScrollbarThumb);
var _direction = require("./direction");
var _ = require("../utils/");
var ScrollbarThumb = /** @class */ function() {
    function ScrollbarThumb(_direction, _minSize) {
        if (_minSize === void 0) _minSize = 0;
        this._direction = _direction;
        this._minSize = _minSize;
        /**
         * Thumb element
         */ this.element = document.createElement("div");
        /**
         * Display size of the thumb
         * will always be greater than `scrollbar.options.thumbMinSize`
         */ this.displaySize = 0;
        /**
         * Actual size of the thumb
         */ this.realSize = 0;
        /**
         * Thumb offset to the top
         */ this.offset = 0;
        this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction;
    }
    /**
     * Attach to track element
     *
     * @param trackEl Track element
     */ ScrollbarThumb.prototype.attachTo = function(trackEl) {
        trackEl.appendChild(this.element);
    };
    ScrollbarThumb.prototype.update = function(scrollOffset, containerSize, pageSize) {
        // calculate thumb size
        // pageSize > containerSize -> scrollable
        this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
        this.displaySize = Math.max(this.realSize, this._minSize);
        // calculate thumb offset
        this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
        (0, _.setStyle)(this.element, this._getStyle());
    };
    ScrollbarThumb.prototype._getStyle = function() {
        switch(this._direction){
            case (0, _direction.TrackDirection).X:
                return {
                    width: this.displaySize + "px",
                    "-transform": "translate3d(" + this.offset + "px, 0, 0)"
                };
            case (0, _direction.TrackDirection).Y:
                return {
                    height: this.displaySize + "px",
                    "-transform": "translate3d(0, " + this.offset + "px, 0)"
                };
            default:
                return null;
        }
    };
    return ScrollbarThumb;
}();

},{"./direction":"dYSG8","../utils/":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dYSG8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TrackDirection", ()=>TrackDirection);
var TrackDirection;
(function(TrackDirection) {
    TrackDirection["X"] = "x";
    TrackDirection["Y"] = "y";
})(TrackDirection || (TrackDirection = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jBiTP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getSize = require("./get-size");
parcelHelpers.exportAll(_getSize, exports);
var _isVisible = require("./is-visible");
parcelHelpers.exportAll(_isVisible, exports);
var _update = require("./update");
parcelHelpers.exportAll(_update, exports);

},{"./get-size":"eohy0","./is-visible":"99mev","./update":"kBOIE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eohy0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSize", ()=>getSize);
function getSize(scrollbar) {
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var containerStyles = getComputedStyle(containerEl);
    var paddings = [
        "paddingTop",
        "paddingBottom",
        "paddingLeft",
        "paddingRight"
    ].map(function(prop) {
        return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
    });
    var verticalPadding = paddings[0] + paddings[1];
    var horizontalPadding = paddings[2] + paddings[3];
    return {
        container: {
            // requires `overflow: hidden`
            width: containerEl.clientWidth,
            height: containerEl.clientHeight
        },
        content: {
            // border width and paddings should be included
            width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
            height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"99mev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isVisible", ()=>isVisible);
function isVisible(scrollbar, elem) {
    var bounding = scrollbar.bounding;
    var targetBounding = elem.getBoundingClientRect();
    // check overlapping
    var top = Math.max(bounding.top, targetBounding.top);
    var left = Math.max(bounding.left, targetBounding.left);
    var right = Math.min(bounding.right, targetBounding.right);
    var bottom = Math.min(bounding.bottom, targetBounding.bottom);
    return top < bottom && left < right;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBOIE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "update", ()=>update);
function update(scrollbar) {
    var newSize = scrollbar.getSize();
    var limit = {
        x: Math.max(newSize.content.width - newSize.container.width, 0),
        y: Math.max(newSize.content.height - newSize.container.height, 0)
    };
    // metrics
    var containerBounding = scrollbar.containerEl.getBoundingClientRect();
    var bounding = {
        top: Math.max(containerBounding.top, 0),
        right: Math.min(containerBounding.right, window.innerWidth),
        bottom: Math.min(containerBounding.bottom, window.innerHeight),
        left: Math.max(containerBounding.left, 0)
    };
    // assign props
    scrollbar.size = newSize;
    scrollbar.limit = limit;
    scrollbar.bounding = bounding;
    // update tracks
    scrollbar.track.update();
    // re-positioning
    scrollbar.setPosition();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsAOK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPosition = require("./set-position");
parcelHelpers.exportAll(_setPosition, exports);
var _scrollTo = require("./scroll-to");
parcelHelpers.exportAll(_scrollTo, exports);
var _scrollIntoView = require("./scroll-into-view");
parcelHelpers.exportAll(_scrollIntoView, exports);

},{"./set-position":"kNGmM","./scroll-to":"6bZgF","./scroll-into-view":"69B3G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNGmM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setPosition", ()=>setPosition);
var _tslib = require("tslib");
var _utils = require("../utils");
var _ = require("../utils/");
function setPosition(scrollbar, x, y) {
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
    if (options.renderByPixels) {
        x = Math.round(x);
        y = Math.round(y);
    }
    x = (0, _utils.clamp)(x, 0, limit.x);
    y = (0, _utils.clamp)(y, 0, limit.y);
    // position changed -> show track for 300ms
    if (x !== offset.x) track.xAxis.show();
    if (y !== offset.y) track.yAxis.show();
    if (!options.alwaysShowTracks) track.autoHideOnIdle();
    if (x === offset.x && y === offset.y) return null;
    offset.x = x;
    offset.y = y;
    (0, _.setStyle)(contentEl, {
        "-transform": "translate3d(" + -x + "px, " + -y + "px, 0)"
    });
    track.update();
    return {
        offset: (0, _tslib.__assign)({}, offset),
        limit: (0, _tslib.__assign)({}, limit)
    };
}

},{"tslib":"euOof","../utils":"jzGiI","../utils/":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6bZgF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrollTo", ()=>scrollTo);
var _utils = require("../utils");
var animationIDStorage = new WeakMap();
function scrollTo(scrollbar, x, y, duration, _a) {
    if (duration === void 0) duration = 0;
    var _b = _a === void 0 ? {} : _a, _c = _b.easing, easing = _c === void 0 ? defaultEasing : _c, callback = _b.callback;
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
    if (options.renderByPixels) {
        // ensure resolved with integer
        x = Math.round(x);
        y = Math.round(y);
    }
    var startX = offset.x;
    var startY = offset.y;
    var disX = (0, _utils.clamp)(x, 0, limit.x) - startX;
    var disY = (0, _utils.clamp)(y, 0, limit.y) - startY;
    var start = Date.now();
    function scroll() {
        var elapse = Date.now() - start;
        var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
        scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
        if (elapse >= duration) {
            if (typeof callback === "function") callback.call(scrollbar);
        } else {
            var animationID = requestAnimationFrame(scroll);
            animationIDStorage.set(scrollbar, animationID);
        }
    }
    cancelAnimationFrame(animationIDStorage.get(scrollbar));
    scroll();
}
/**
 * easeOutCubic
 */ function defaultEasing(t) {
    return Math.pow(t - 1, 3) + 1;
}

},{"../utils":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69B3G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrollIntoView", ()=>scrollIntoView);
var _utils = require("../utils");
function scrollIntoView(scrollbar, elem, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.alignToTop, alignToTop = _c === void 0 ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = _d === void 0 ? false : _d, _e = _b.offsetTop, offsetTop = _e === void 0 ? 0 : _e, _f = _b.offsetLeft, offsetLeft = _f === void 0 ? 0 : _f, _g = _b.offsetBottom, offsetBottom = _g === void 0 ? 0 : _g;
    var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
    if (!elem || !containerEl.contains(elem)) return;
    var targetBounding = elem.getBoundingClientRect();
    if (onlyScrollIfNeeded && scrollbar.isVisible(elem)) return;
    var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
    scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, (0, _utils.clamp)(delta, -offset.y, limit.y - offset.y));
}

},{"../utils":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSKNu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollbarPlugin", ()=>ScrollbarPlugin);
parcelHelpers.export(exports, "globalPlugins", ()=>globalPlugins);
parcelHelpers.export(exports, "addPlugins", ()=>addPlugins);
parcelHelpers.export(exports, "initPlugins", ()=>initPlugins);
var _tslib = require("tslib");
var ScrollbarPlugin = /** @class */ function() {
    function ScrollbarPlugin(scrollbar, options) {
        var _newTarget = this.constructor;
        this.scrollbar = scrollbar;
        this.name = _newTarget.pluginName;
        this.options = (0, _tslib.__assign)((0, _tslib.__assign)({}, _newTarget.defaultOptions), options);
    }
    ScrollbarPlugin.prototype.onInit = function() {};
    ScrollbarPlugin.prototype.onDestroy = function() {};
    ScrollbarPlugin.prototype.onUpdate = function() {};
    ScrollbarPlugin.prototype.onRender = function(_remainMomentum) {};
    ScrollbarPlugin.prototype.transformDelta = function(delta, _evt) {
        return (0, _tslib.__assign)({}, delta);
    };
    ScrollbarPlugin.pluginName = "";
    ScrollbarPlugin.defaultOptions = {};
    return ScrollbarPlugin;
}();
var globalPlugins = {
    order: new Set(),
    constructors: {}
};
function addPlugins() {
    var Plugins = [];
    for(var _i = 0; _i < arguments.length; _i++)Plugins[_i] = arguments[_i];
    Plugins.forEach(function(P) {
        var pluginName = P.pluginName;
        if (!pluginName) throw new TypeError("plugin name is required");
        globalPlugins.order.add(pluginName);
        globalPlugins.constructors[pluginName] = P;
    });
}
function initPlugins(scrollbar, options) {
    return Array.from(globalPlugins.order).filter(function(pluginName) {
        return options[pluginName] !== false;
    }).map(function(pluginName) {
        var Plugin = globalPlugins.constructors[pluginName];
        var instance = new Plugin(scrollbar, options[pluginName]);
        // bind plugin options to `scrollbar.options`
        options[pluginName] = instance.options;
        return instance;
    });
}

},{"tslib":"euOof","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHe8H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _keyboard = require("./keyboard");
parcelHelpers.exportAll(_keyboard, exports);
var _mouse = require("./mouse");
parcelHelpers.exportAll(_mouse, exports);
var _resize = require("./resize");
parcelHelpers.exportAll(_resize, exports);
var _select = require("./select");
parcelHelpers.exportAll(_select, exports);
var _touch = require("./touch");
parcelHelpers.exportAll(_touch, exports);
var _wheel = require("./wheel");
parcelHelpers.exportAll(_wheel, exports);

},{"./keyboard":"3O3aj","./mouse":"u2dyQ","./resize":"gCciD","./select":"2fmgh","./touch":"gsvLM","./wheel":"8pCgR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3O3aj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keyboardHandler", ()=>keyboardHandler);
var _ = require("../utils/");
var KEY_CODE;
(function(KEY_CODE) {
    KEY_CODE[KEY_CODE["TAB"] = 9] = "TAB";
    KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
    KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
    KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KEY_CODE[KEY_CODE["END"] = 35] = "END";
    KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
    KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
    KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
    KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
    KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
})(KEY_CODE || (KEY_CODE = {}));
function keyboardHandler(scrollbar) {
    var addEvent = (0, _.eventScope)(scrollbar);
    var container = scrollbar.containerEl;
    addEvent(container, "keydown", function(evt) {
        var activeElement = document.activeElement;
        if (activeElement !== container && !container.contains(activeElement)) return;
        if (isEditable(activeElement)) return;
        var delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
        if (!delta) return;
        var x = delta[0], y = delta[1];
        scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
            if (willScroll) evt.preventDefault();
            else {
                scrollbar.containerEl.blur();
                if (scrollbar.parent) scrollbar.parent.containerEl.focus();
            }
        });
    });
}
function getKeyDelta(scrollbar, keyCode) {
    var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
    switch(keyCode){
        case KEY_CODE.TAB:
            return handleTabKey(scrollbar);
        case KEY_CODE.SPACE:
            return [
                0,
                200
            ];
        case KEY_CODE.PAGE_UP:
            return [
                0,
                -size.container.height + 40
            ];
        case KEY_CODE.PAGE_DOWN:
            return [
                0,
                size.container.height - 40
            ];
        case KEY_CODE.END:
            return [
                0,
                limit.y - offset.y
            ];
        case KEY_CODE.HOME:
            return [
                0,
                -offset.y
            ];
        case KEY_CODE.LEFT:
            return [
                -40,
                0
            ];
        case KEY_CODE.UP:
            return [
                0,
                -40
            ];
        case KEY_CODE.RIGHT:
            return [
                40,
                0
            ];
        case KEY_CODE.DOWN:
            return [
                0,
                40
            ];
        default:
            return null;
    }
}
function handleTabKey(scrollbar) {
    // handle in next frame
    requestAnimationFrame(function() {
        scrollbar.scrollIntoView(document.activeElement, {
            offsetTop: scrollbar.size.container.height / 2,
            offsetLeft: scrollbar.size.container.width / 2,
            onlyScrollIfNeeded: true
        });
    });
}
function isEditable(elem) {
    if (elem.tagName === "INPUT" || elem.tagName === "SELECT" || elem.tagName === "TEXTAREA" || elem.isContentEditable) return !elem.disabled;
    return false;
}

},{"../utils/":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"u2dyQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mouseHandler", ()=>mouseHandler);
var _utils = require("../utils");
var _ = require("../utils/");
var Direction;
(function(Direction) {
    Direction[Direction["X"] = 0] = "X";
    Direction[Direction["Y"] = 1] = "Y";
})(Direction || (Direction = {}));
function mouseHandler(scrollbar) {
    var addEvent = (0, _.eventScope)(scrollbar);
    var container = scrollbar.containerEl;
    var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
    function calcMomentum(direction, clickPosition) {
        var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
        if (direction === Direction.X) {
            var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
            return (0, _utils.clamp)(clickPosition / totalWidth * size.content.width, 0, limit.x) - offset.x;
        }
        if (direction === Direction.Y) {
            var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
            return (0, _utils.clamp)(clickPosition / totalHeight * size.content.height, 0, limit.y) - offset.y;
        }
        return 0;
    }
    function getTrackDirection(elem) {
        if ((0, _.isOneOf)(elem, [
            xAxis.element,
            xAxis.thumb.element
        ])) return Direction.X;
        if ((0, _.isOneOf)(elem, [
            yAxis.element,
            yAxis.thumb.element
        ])) return Direction.Y;
        return void 0;
    }
    var isMouseDown;
    var isMouseMoving;
    var startOffsetToThumb;
    var trackDirection;
    var containerRect;
    addEvent(container, "click", function(evt) {
        if (isMouseMoving || !(0, _.isOneOf)(evt.target, [
            xAxis.element,
            yAxis.element
        ])) return;
        var track = evt.target;
        var direction = getTrackDirection(track);
        var rect = track.getBoundingClientRect();
        var clickPos = (0, _.getPosition)(evt);
        if (direction === Direction.X) {
            var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(calcMomentum(direction, offsetOnTrack), 0);
        }
        if (direction === Direction.Y) {
            var offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(0, calcMomentum(direction, offsetOnTrack));
        }
    });
    addEvent(container, "mousedown", function(evt) {
        if (!(0, _.isOneOf)(evt.target, [
            xAxis.thumb.element,
            yAxis.thumb.element
        ])) return;
        isMouseDown = true;
        var thumb = evt.target;
        var cursorPos = (0, _.getPosition)(evt);
        var thumbRect = thumb.getBoundingClientRect();
        trackDirection = getTrackDirection(thumb);
        // pointer offset to thumb
        startOffsetToThumb = {
            x: cursorPos.x - thumbRect.left,
            y: cursorPos.y - thumbRect.top
        };
        // container bounding rectangle
        containerRect = container.getBoundingClientRect();
        // prevent selection, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/48
        (0, _.setStyle)(scrollbar.containerEl, {
            "-user-select": "none"
        });
    });
    addEvent(window, "mousemove", function(evt) {
        if (!isMouseDown) return;
        isMouseMoving = true;
        var cursorPos = (0, _.getPosition)(evt);
        if (trackDirection === Direction.X) {
            // get percentage of pointer position in track
            // then tranform to px
            // don't need easing
            var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
            scrollbar.setMomentum(calcMomentum(trackDirection, offsetOnTrack), 0);
        }
        if (trackDirection === Direction.Y) {
            var offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
            scrollbar.setMomentum(0, calcMomentum(trackDirection, offsetOnTrack));
        }
    });
    addEvent(window, "mouseup blur", function() {
        isMouseDown = isMouseMoving = false;
        (0, _.setStyle)(scrollbar.containerEl, {
            "-user-select": ""
        });
    });
}

},{"../utils":"jzGiI","../utils/":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gCciD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeHandler", ()=>resizeHandler);
var _utils = require("../utils");
var _ = require("../utils/");
function resizeHandler(scrollbar) {
    var addEvent = (0, _.eventScope)(scrollbar);
    addEvent(window, "resize", (0, _utils.debounce)(scrollbar.update.bind(scrollbar), 300));
}

},{"../utils":"jzGiI","../utils/":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2fmgh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selectHandler", ()=>selectHandler);
var _utils = require("../utils");
var _ = require("../utils/");
function selectHandler(scrollbar) {
    var addEvent = (0, _.eventScope)(scrollbar);
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    var isSelected = false;
    var isContextMenuOpened = false; // flag to prevent selection when context menu is opened
    var animationID;
    function scroll(_a) {
        var x = _a.x, y = _a.y;
        if (!x && !y) return;
        var offset = scrollbar.offset, limit = scrollbar.limit;
        // DISALLOW delta transformation
        scrollbar.setMomentum((0, _utils.clamp)(offset.x + x, 0, limit.x) - offset.x, (0, _utils.clamp)(offset.y + y, 0, limit.y) - offset.y);
        animationID = requestAnimationFrame(function() {
            scroll({
                x: x,
                y: y
            });
        });
    }
    addEvent(window, "mousemove", function(evt) {
        if (!isSelected) return;
        cancelAnimationFrame(animationID);
        var dir = calcMomentum(scrollbar, evt);
        scroll(dir);
    });
    // prevent scrolling when context menu is opened
    // NOTE: `contextmenu` event may be fired
    //          1. BEFORE `selectstart`: when user right-clicks on the text content -> prevent future scrolling,
    //          2. AFTER `selectstart`: when user right-clicks on the blank area -> cancel current scrolling,
    //        so we need to both set the flag and cancel current scrolling
    addEvent(contentEl, "contextmenu", function() {
        // set the flag to prevent future scrolling
        isContextMenuOpened = true;
        // stop current scrolling
        cancelAnimationFrame(animationID);
        isSelected = false;
    });
    // reset context menu flag on mouse down
    // to ensure the scrolling is allowed in the next selection
    addEvent(contentEl, "mousedown", function() {
        isContextMenuOpened = false;
    });
    addEvent(contentEl, "selectstart", function() {
        if (isContextMenuOpened) return;
        cancelAnimationFrame(animationID);
        isSelected = true;
    });
    addEvent(window, "mouseup blur", function() {
        cancelAnimationFrame(animationID);
        isSelected = false;
        isContextMenuOpened = false;
    });
    // patch for touch devices
    addEvent(containerEl, "scroll", function(evt) {
        evt.preventDefault();
        containerEl.scrollTop = containerEl.scrollLeft = 0;
    });
}
function calcMomentum(scrollbar, evt) {
    var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    var _b = (0, _.getPosition)(evt), x = _b.x, y = _b.y;
    var res = {
        x: 0,
        y: 0
    };
    var padding = 20;
    if (x === 0 && y === 0) return res;
    if (x > right - padding) res.x = x - right + padding;
    else if (x < left + padding) res.x = x - left - padding;
    if (y > bottom - padding) res.y = y - bottom + padding;
    else if (y < top + padding) res.y = y - top - padding;
    res.x *= 2;
    res.y *= 2;
    return res;
}

},{"../utils":"jzGiI","../utils/":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gsvLM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "touchHandler", ()=>touchHandler);
var _ = require("../utils/");
var activeScrollbar;
function touchHandler(scrollbar) {
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var touchRecord = new (0, _.TouchRecord)();
    var addEvent = (0, _.eventScope)(scrollbar);
    var damping;
    var pointerCount = 0;
    addEvent(target, "touchstart", function(evt) {
        // start records
        touchRecord.track(evt);
        // stop scrolling
        scrollbar.setMomentum(0, 0);
        // save damping
        if (pointerCount === 0) {
            damping = scrollbar.options.damping;
            scrollbar.options.damping = Math.max(damping, 0.5); // less frames on touchmove
        }
        pointerCount++;
    });
    addEvent(target, "touchmove", function(evt) {
        if (activeScrollbar && activeScrollbar !== scrollbar) return;
        touchRecord.update(evt);
        var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
            if (willScroll && evt.cancelable) {
                evt.preventDefault();
                activeScrollbar = scrollbar;
            }
        });
    });
    addEvent(target, "touchcancel touchend", function(evt) {
        var delta = touchRecord.getEasingDistance(damping);
        scrollbar.addTransformableMomentum(delta.x, delta.y, evt);
        pointerCount--;
        // restore damping
        if (pointerCount === 0) scrollbar.options.damping = damping;
        touchRecord.release(evt);
        activeScrollbar = null;
    });
}

},{"../utils/":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pCgR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wheelHandler", ()=>wheelHandler);
var _ = require("../utils/");
function wheelHandler(scrollbar) {
    var addEvent = (0, _.eventScope)(scrollbar);
    var target = scrollbar.options.delegateTo || scrollbar.containerEl;
    var eventName = "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel";
    addEvent(target, eventName, function(evt) {
        var _a = normalizeDelta(evt), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
            if (willScroll) evt.preventDefault();
        });
    });
}
// Normalizing wheel delta
var DELTA_SCALE = {
    STANDARD: 1,
    OTHERS: -3
};
var DELTA_MODE = [
    1.0,
    28.0,
    500.0
];
var getDeltaMode = function(mode) {
    return DELTA_MODE[mode] || DELTA_MODE[0];
};
function normalizeDelta(evt) {
    if ("deltaX" in evt) {
        var mode = getDeltaMode(evt.deltaMode);
        return {
            x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
            y: evt.deltaY / DELTA_SCALE.STANDARD * mode
        };
    }
    if ("wheelDeltaX" in evt) return {
        x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
        y: evt.wheelDeltaY / DELTA_SCALE.OTHERS
    };
    // ie with touchpad
    return {
        x: 0,
        y: evt.wheelDelta / DELTA_SCALE.OTHERS
    };
}

},{"../utils/":"jzGiI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7J5rq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attachStyle", ()=>attachStyle);
parcelHelpers.export(exports, "detachStyle", ()=>detachStyle);
var TRACK_BG = "rgba(222, 222, 222, .75)";
var THUMB_BG = "rgba(0, 0, 0, .5)";
// sets content's display type to `flow-root` to suppress margin collapsing
var SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + THUMB_BG + ";\n  border-radius: 4px;\n}\n";
var STYLE_ID = "smooth-scrollbar-style";
var isStyleAttached = false;
function attachStyle() {
    if (isStyleAttached || typeof window === "undefined") return;
    var styleEl = document.createElement("style");
    styleEl.id = STYLE_ID;
    styleEl.textContent = SCROLLBAR_STYLE;
    if (document.head) document.head.appendChild(styleEl);
    isStyleAttached = true;
}
function detachStyle() {
    if (!isStyleAttached || typeof window === "undefined") return;
    var styleEl = document.getElementById(STYLE_ID);
    if (!styleEl || !styleEl.parentNode) return;
    styleEl.parentNode.removeChild(styleEl);
    isStyleAttached = false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9tRox","1SICI"], "1SICI", "parcelRequire1868")

//# sourceMappingURL=index.18dbc454.js.map
