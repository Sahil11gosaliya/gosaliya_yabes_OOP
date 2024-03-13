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
})({"j2YDk":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var _celestialJs = require("./celestial.js");
var _gsapJs = require("./gsap.js");
var _sliderJs = require("./slider.js");
(0, _gsapJs.greensock)();
(0, _sliderJs.setupSlider)();
// Sun
const sun = new (0, _celestialJs.CelestialBody)("Sun", "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. The Sun's diameter is about 1.39 million kilometers, i.e., 109 times that of Earth, and its mass is about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System.", 1392700, 1.989e30, 274, "5,500\xb0C", 0, "N/A", "N/A", "25.05 days", "Hydrogen, Helium", "Contains 99.8% of the total mass of the Solar System", "No", "Plasma", "No rain" // Rains
);
// Planets
const mercury = new (0, _celestialJs.CelestialBody)("Mercury", "Mercury is the smallest and innermost planet in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods. Mercury is a rocky planet, composed mostly of silicate minerals and metals. It has no natural satellites and no substantial atmosphere, meaning it has a surface that is heavily cratered and similar in appearance to the Moon.", 4879, 3.3011e23, 3.7, "-173 to 427\xb0C", 0, "0.39 AU", "88 days", "58.7 days", "Minimal (Hydrogen, Helium)", "Smallest planet, no significant atmosphere", "No", "Rocky", "No rain");
const venus = new (0, _celestialJs.CelestialBody)("Venus", "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. It is often called Earth's sister planet because of their similar size, mass, proximity to the Sun, and bulk composition. However, it has a dense atmosphere that consists mainly of carbon dioxide, which causes a runaway greenhouse effect that raises its surface temperature to about 462 degrees Celsius.", 12104, 4.867e24, 8.87, "462\xb0C", 0, "0.72 AU", "225 days", "-243 days (retrograde rotation)", "Carbon dioxide, Nitrogen", "Hottest planet, thick atmosphere", "No", "Rocky", "Sulfuric acid rain");
const earth = new (0, _celestialJs.CelestialBody)("Earth", "Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. It is home to millions of species, including humans. Earth's atmosphere primarily consists of nitrogen and oxygen. It has one natural satellite, the Moon, which plays a significant role in stabilizing Earth's axial tilt and thus its climate.", 12756, 5.972e24, 9.807, "-88 to 58\xb0C", 1, "1 AU", "365.25 days", "24 hours", "Nitrogen, Oxygen", "Only planet known to support life", "Yes", "Water, land", "Water rain");
const mars = new (0, _celestialJs.CelestialBody)("Mars", "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury. It is often called the 'Red Planet' because of its reddish appearance, which is caused by iron oxide prevalent on its surface. Mars has surface features reminiscent of both the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.", 6779, 6.417e23, 3.721, "-153 to 20\xb0C", 2, "1.52 AU", "687 days", "24.6 hours", "Carbon dioxide, Nitrogen, Argon", "Largest volcano and canyon in the solar system", "Potentially in the past", "Desert, icy poles", "No rain (frozen water and carbon dioxide snow)");
const jupiter = new (0, _celestialJs.CelestialBody)("Jupiter", "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun but is two and a half times the mass of all the other planets in the Solar System combined. Jupiter is primarily composed of hydrogen and helium. It lacks a well-defined solid surface, but it may have a solid core at its center.", 139820, 1.898e27, 24.79, "-108\xb0C", 79, "5.20 AU", "12 years", "9.9 hours", "Hydrogen, Helium", "Largest planet, Great Red Spot", "No", "Gas giant", "No rain (ammonia crystals)");
const saturn = new (0, _celestialJs.CelestialBody)("Saturn", "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has a prominent ring system that consists of nine continuous main rings and three discontinuous arcs. Saturn is primarily composed of hydrogen and helium.", 116460, 5.683e26, 10.44, "-139\xb0C", 82, "9.58 AU", "29 years", "10.7 hours", "Hydrogen, Helium", "Extensive ring system", "No", "Gas giant", "No rain (ammonia crystals)");
const uranus = new (0, _celestialJs.CelestialBody)("Uranus", "Uranus is the seventh planet from the Sun and the third-largest in the Solar System. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of -224\xb0C. Like the other giant planets, Uranus has a ring system, a magnetosphere, and numerous moons. The atmosphere of Uranus is composed primarily of hydrogen and helium.", 50724, 8.681e25, 8.69, "-195\xb0C", 27, "19.22 AU", "84 years", "-17.2 hours (retrograde rotation)", "Hydrogen, Helium, Methane", "Rotates on its side, coldest atmosphere", "No", "Ice giant", "No rain (methane ice crystals)");
const neptune = new (0, _celestialJs.CelestialBody)("Neptune", "Neptune is the eighth planet from the Sun and the fourth-largest in the Solar System. It is named after the Roman god of the sea and has the fastest winds in the Solar System, reaching speeds of up to 2,100 kilometers per hour. Neptune's atmosphere is primarily composed of hydrogen, helium, and methane.", 49244, 1.024e26, 11.15, "-201\xb0C", 14, "30.05 AU", "165 years", "16 hours", "Hydrogen, Helium, Methane", "Strongest winds in the solar system", "No", "Ice giant", "No rain (methane ice crystals)");
const pluto = new (0, _celestialJs.CelestialBody)("Pluto", "Although no longer officially a planet, Pluto is a large world in the Kuiper belt, a ring of bodies beyond Neptune. It was discovered in 1930 and was long considered the ninth planet. However, in 2006, the International Astronomical Union reclassified Pluto as a 'dwarf planet' due to its small size and eccentric orbit.", 2376, 1.309e22, 0.62, "-229\xb0C", 5, "39.48 AU", "248 years", "-153.3 hours", "Nitrogen, Methane, Carbon Monoxide", "Dwarf planet, heart-shaped glacier", "Potentially in the past", "Icy plains, mountains", "Nitrogen snow");
const bodies = [
    sun,
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
    pluto
];
// Append celestial body properties to respective HTML elements
const appendProperties = (element, celestialBody)=>{
    const propertiesDiv = celestialBody.createItemElement();
    element.querySelector(".properties").appendChild(propertiesDiv);
};
const celestialElements = [
    document.querySelector(".item.sun"),
    document.querySelector(".item.mercury"),
    document.querySelector(".item.venus"),
    document.querySelector(".item.earth"),
    document.querySelector(".item.mars"),
    document.querySelector(".item.jupiter"),
    document.querySelector(".item.saturn"),
    document.querySelector(".item.uranus"),
    document.querySelector(".item.neptune"),
    document.querySelector(".item.pluto")
];
celestialElements.forEach((element, index)=>{
    appendProperties(element, bodies[index]);
});

},{"./celestial.js":"3uzEh","./gsap.js":"1TTwU","./slider.js":"aMYz0"}],"3uzEh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CelestialBody", ()=>CelestialBody);
class CelestialBody {
    constructor(name, description, diameter, mass, gravity, temperatureRange, numberOfMoons, distanceFromSun, orbitalPeriod, rotationPeriod, atmosphericComposition, specialFeatures, possibleLife, surfaceConditions, rains){
        this.name = name;
        this.description = description;
        this.diameter = diameter; // in kilometers
        this.mass = mass; // in kilograms
        this.gravity = gravity; // in m/s²
        this.temperatureRange = temperatureRange;
        this.numberOfMoons = numberOfMoons;
        this.distanceFromSun = distanceFromSun; // in AU or MKm
        this.orbitalPeriod = orbitalPeriod;
        this.rotationPeriod = rotationPeriod;
        this.atmosphericComposition = atmosphericComposition;
        this.specialFeatures = specialFeatures;
        this.possibleLife = possibleLife;
        this.surfaceConditions = surfaceConditions;
        this.rains = rains;
    }
    createItemElement() {
        const item = document.createElement("li");
        item.className = "item";
        const content = document.createElement("div");
        content.className = "content";
        // Title and description
        const title = document.createElement("h2");
        title.className = "title";
        title.textContent = this.name;
        const description = document.createElement("p");
        description.className = "description";
        description.textContent = this.description;
        // Properties
        const propertiesDiv = document.createElement("div");
        propertiesDiv.className = "properties";
        const properties = [
            {
                label: "Diameter",
                value: `${this.diameter} km`
            },
            {
                label: "Mass",
                value: `${this.mass} kg`
            },
            {
                label: "Gravity",
                value: `${this.gravity} m/s\xb2`
            },
            {
                label: "Temperature Range",
                value: `${this.temperatureRange} \xb0C`
            },
            {
                label: "Number of Moons",
                value: `${this.numberOfMoons}`
            },
            {
                label: "Distance from Sun",
                value: `${this.distanceFromSun} AU`
            },
            {
                label: "Orbital Period",
                value: `${this.orbitalPeriod}`
            },
            {
                label: "Rotation Period",
                value: `${this.rotationPeriod}`
            },
            {
                label: "Atmospheric Composition",
                value: `${this.atmosphericComposition}`
            },
            {
                label: "Special Features",
                value: `${this.specialFeatures}`
            },
            {
                label: "Possible Life",
                value: `${this.possibleLife}`
            },
            {
                label: "Surface Conditions",
                value: `${this.surfaceConditions}`
            },
            {
                label: "Rains",
                value: `${this.rains}`
            }
        ];
        properties.forEach((prop)=>{
            const propertyParagraph = document.createElement("p");
            const strong = document.createElement("strong");
            strong.textContent = `${prop.label}:`;
            propertyParagraph.appendChild(strong);
            propertyParagraph.innerHTML += ` <span class="${prop.label.toLowerCase()}">${prop.value}</span>`;
            propertiesDiv.appendChild(propertyParagraph);
        });
        // Append elements to content
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(propertiesDiv);
        // Append content to the item
        item.appendChild(content);
        return item;
    }
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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"1TTwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "greensock", ()=>greensock);
function greensock() {
    const introTextElements = document.querySelectorAll(".properties");
    introTextElements.forEach((element)=>{
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play play none reverse"
            }
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aMYz0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setupSlider", ()=>setupSlider);
function setupSlider() {
    // Slider navigation activation function
    function activate(e) {
        const slider = document.querySelector(".slider");
        const items = slider.querySelectorAll(".item");
        if (e.target.matches(".next")) slider.append(items[0]);
        if (e.target.matches(".prev")) slider.prepend(items[items.length - 1]);
    }
    // Attaching click event listener to the document for slider navigation
    document.addEventListener("click", activate, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["j2YDk","1SICI"], "1SICI", "parcelRequirec115")

//# sourceMappingURL=index.18dbc454.js.map
