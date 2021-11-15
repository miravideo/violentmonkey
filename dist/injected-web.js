if (window['Violentmonkey:m5cki3DB3pg='] !== 1)
        window['Violentmonkey:m5cki3DB3pg='] = function (IS_FIREFOX,__HANDSHAKE_ID__,__VAULT_ID__) {
          const module = { __proto__: null };
          /* eslint-disable no-unused-vars */

/**
 * This file is used by both `injected` and `injected-web` entries.
 * `global` is used instead of WebPack's polyfill which we disable in webpack.conf.js.
 * `export` is stripped in the final output and is only used for our NodeJS test scripts.
 * WARNING! Don't use exported functions from #/common anywhere in injected!
 */
const global = function _() {
  return this || globalThis; // eslint-disable-line no-undef
}();
/** These two are unforgeable so we extract them primarily to improve minification.
 * The document's value can change only in about:blank but we don't inject there. */


const {
  document,
  window
} = global;
const PROTO = 'prototype';
const IS_TOP = window.top === window;
const WINDOW_CLOSE = 'window.close';
const WINDOW_FOCUS = 'window.focus';
const NS_HTML = 'http://www.w3.org/1999/xhtml';
const CALLBACK_ID = '__CBID';

const getObjectTypeTag = val => val && safeCall(slice, safeCall(objectToString, val), 8, -1);

const isFunction = val => typeof val === 'function';

const isObject = val => val !== null && typeof val === 'object'; // TODO: maybe use `val[toStringTagSym]` when strict_min_version > 78


const isPromise = val => getObjectTypeTag(val) === 'Promise';

const isString = val => typeof val === 'string';

const getOwnProp = (obj, key) => safeCall(hasOwnProperty, obj, key) ? obj[key] : undefined;
/** Workaround for array eavesdropping via prototype setters like '0','1',...
 * on `push` and `arr[i] = 123`, as well as via getters if you read beyond
 * its length or from an unassigned `hole`. */


const setOwnProp = (obj, key, value) => defineProperty(obj, key, {
  __proto__: null,
  value,
  configurable: true,
  enumerable: true,
  writable: true
});

const vmOwnFuncToString = () => '[Violentmonkey property]';
/** Using __proto__ because Object.create(null) may be spoofed */


const createNullObj = () => ({
  __proto__: null
}); // WARNING! `obj` must use __proto__:null


const ensureNestedProp = (obj, bucketId, key, defaultValue) => {
  var _bucket$key;

  const bucket = obj[bucketId] || (obj[bucketId] = createNullObj());
  const val = (_bucket$key = bucket[key]) != null ? _bucket$key : bucket[key] = defaultValue != null ? defaultValue : createNullObj();
  return val;
};

const promiseResolve = () => (async () => {})();

const vmOwnFunc = (func, toString) => defineProperty(func, 'toString', {
  __proto__: null,
  value: toString || vmOwnFuncToString
}); // Avoiding the need to safe-guard a bunch of methods so we use just one


const getUniqIdSafe = (prefix = 'VM') => `${prefix}${mathRandom()}`;
/** args is [tags?, ...rest] */


const log = (level, ...args) => {
  let s = '[Violentmonkey]';
  if (args[0]) safeCall(forEach, args[0], tag => {
    s += `[${tag}]`;
  });
  args[0] = s;
  safeCall(apply, logging[level], logging, args);
};
/**
 * Picks into `this`
 * WARNING! `this` must use __proto__:null or already have own properties on the picked keys.
 * @param {Object} obj
 * @param {string[]} keys
 * @returns {Object} same object as `this`
 */


const pickIntoThis = function pickIntoThis(obj, keys) {
  if (obj) {
    safeCall(forEach, keys, key => {
      if (safeCall(hasOwnProperty, obj, key)) {
        this[key] = obj[key];
      }
    });
  }

  return this;
};
/**
 * Object.defineProperty seems to be inherently broken: it reads inherited props from desc
 * (even though the purpose of this API is to define own props) and then complains when it finds
 * invalid props like an inherited setter when you only provide `{value}`.
 */


const safeDefineProperty = (obj, key, desc) => defineProperty(obj, key, assign(createNullObj(), desc));
/* eslint-disable one-var, one-var-declaration-per-line, no-unused-vars,
   prefer-const, import/no-mutable-exports */

/**
 * `safeCall` is used by our modified babel-plugin-safe-bind.js.
 * `export` is stripped in the final output and is only used for our NodeJS test scripts.
 */
let // window
BlobSafe, CustomEventSafe, DOMParserSafe, ErrorSafe, FileReaderSafe, KeyboardEventSafe, MouseEventSafe, Object, PromiseSafe, ProxySafe, ResponseSafe, SymbolSafe, fire, off, on, openWindow, safeIsFinite, // Symbol
toStringTagSym, // Object
apply, assign, bind, defineProperty, describeProperty, getOwnPropertyNames, getOwnPropertySymbols, objectKeys, objectValues, // Object.prototype
hasOwnProperty, objectToString,
/** Array.prototype can be eavesdropped via setters like '0','1',...
 * on `push` and `arr[i] = 123`, as well as via getters if you read beyond
 * its length or from an unassigned `hole`. */
concat, filter, forEach, indexOf, // Element.prototype
remove, // String.prototype
charCodeAt, slice, // safeCall
safeCall, // various methods
createObjectURL, funcToString, ArrayIsArray, jsonParse, logging, mathRandom, parseFromString, // DOMParser
readAsDataURL, // FileReader
safeResponseBlob, // Response - safe = "safe global" to disambiguate the name
stopImmediatePropagation, regexpReplace, then, // various getters
getBlobType, // Blob
getCurrentScript, // Document
getDetail, // CustomEvent
getReaderResult, // FileReader
getRelatedTarget; // MouseEvent

/**
 * VAULT consists of the parent's safe globals to protect our communications/globals
 * from a page that creates an iframe with src = location and modifies its contents
 * immediately after adding it to DOM via direct manipulation in frame.contentWindow
 * or window[0] before our content script runs at document_start, https://crbug.com/1261964 */

const VAULT = (() => {
  let ArrayP;
  let ElementP;
  let ObjectSafe;
  let StringP;
  let i = -1;
  let call;
  let res;
  let src = global; // FF defines some stuff only on `global` in content mode

  if (__VAULT_ID__) {
    res = window[__VAULT_ID__];
    delete window[__VAULT_ID__];
  }

  if (!res) {
    res = createNullObj();
  } else if (!isFunction(res[0])) {
    src = res[0];
    res = createNullObj();
  }

  res = [// window
  BlobSafe = res[i += 1] || src.Blob, CustomEventSafe = res[i += 1] || src.CustomEvent, DOMParserSafe = res[i += 1] || src.DOMParser, ErrorSafe = res[i += 1] || src.Error, FileReaderSafe = res[i += 1] || src.FileReader, KeyboardEventSafe = res[i += 1] || src.KeyboardEvent, MouseEventSafe = res[i += 1] || src.MouseEvent, Object = res[i += 1] || src.Object, PromiseSafe = res[i += 1] || src.Promise, SymbolSafe = res[i += 1] || src.Symbol, // In FF content mode global.Proxy !== window.Proxy
  ProxySafe = res[i += 1] || src.Proxy, ResponseSafe = res[i += 1] || src.Response, fire = res[i += 1] || src.dispatchEvent, safeIsFinite = res[i += 1] || src.isFinite, // Firefox defines `isFinite` on `global`
  off = res[i += 1] || src.removeEventListener, on = res[i += 1] || src.addEventListener, openWindow = res[i += 1] || src.open, // Object - using ObjectSafe to pacify eslint without disabling the rule
  defineProperty = (ObjectSafe = Object) && res[i += 1] || ObjectSafe.defineProperty, describeProperty = res[i += 1] || ObjectSafe.getOwnPropertyDescriptor, getOwnPropertyNames = res[i += 1] || ObjectSafe.getOwnPropertyNames, getOwnPropertySymbols = res[i += 1] || ObjectSafe.getOwnPropertySymbols, assign = res[i += 1] || ObjectSafe.assign, objectKeys = res[i += 1] || ObjectSafe.keys, objectValues = res[i += 1] || ObjectSafe.values, apply = res[i += 1] || ObjectSafe.apply, bind = res[i += 1] || ObjectSafe.bind, // Object.prototype
  hasOwnProperty = res[i += 1] || ObjectSafe[PROTO].hasOwnProperty, objectToString = res[i += 1] || ObjectSafe[PROTO].toString, // Array.prototype
  concat = res[i += 1] || (ArrayP = src.Array[PROTO]).concat, filter = res[i += 1] || ArrayP.filter, forEach = res[i += 1] || ArrayP.forEach, indexOf = res[i += 1] || ArrayP.indexOf, // Element.prototype
  remove = res[i += 1] || (ElementP = src.Element[PROTO]).remove, // String.prototype
  charCodeAt = res[i += 1] || (StringP = src.String[PROTO]).charCodeAt, slice = res[i += 1] || StringP.slice, // safeCall
  safeCall = res[i += 1] || (call = ObjectSafe.call).bind(call), // various methods
  createObjectURL = res[i += 1] || src.URL.createObjectURL, funcToString = res[i += 1] || safeCall.toString, ArrayIsArray = res[i += 1] || src.Array.isArray, jsonParse = res[i += 1] || src.JSON.parse, logging = res[i += 1] || assign({
    __proto__: null
  }, src.console), mathRandom = res[i += 1] || src.Math.random, parseFromString = res[i += 1] || DOMParserSafe[PROTO].parseFromString, readAsDataURL = res[i += 1] || FileReaderSafe[PROTO].readAsDataURL, safeResponseBlob = res[i += 1] || ResponseSafe[PROTO].blob, stopImmediatePropagation = res[i += 1] || src.Event[PROTO].stopImmediatePropagation, regexpReplace = res[i += 1] || src.RegExp[PROTO][SymbolSafe.replace], then = res[i += 1] || PromiseSafe[PROTO].then, // various getters
  getBlobType = res[i += 1] || describeProperty(BlobSafe[PROTO], 'type').get, getCurrentScript = res[i += 1] || describeProperty(src.Document[PROTO], 'currentScript').get, getDetail = res[i += 1] || describeProperty(CustomEventSafe[PROTO], 'detail').get, getReaderResult = res[i += 1] || describeProperty(FileReaderSafe[PROTO], 'result').get, getRelatedTarget = res[i += 1] || describeProperty(MouseEventSafe[PROTO], 'relatedTarget').get]; // Well-known Symbols are unforgeable

  toStringTagSym = SymbolSafe.toStringTag;
  return res;
})();module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = { __proto__: null };          for (let i = 0, c, str = "cdmnoprt"; i < str.length && (c = str[i++]);)            defineProperty(__webpack_require__, c, { __proto__: null, value: undefined, writable: true });
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: { __proto__: null }, __proto__: null
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		safeCall(modules[moduleId], module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			defineProperty(exports, name, {__proto__: null, enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(true) {
/******/ 			defineProperty(exports, toStringTagSym, {__proto__: null, value: 'Module' });
/******/ 		}
/******/ 		defineProperty(exports, '__esModule', {__proto__: null, value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = { __proto__: null };
/******/ 		__webpack_require__.r(ns);
/******/ 		defineProperty(ns, 'default', {__proto__: null, enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(const key in value) __webpack_require__.d(ns, key, () => value[key]);
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = (obj, key) => safeCall(hasOwnProperty, obj, key);
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/injected/web/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/consts.js":
/*!******************************!*\
  !*** ./src/common/consts.js ***!
  \******************************/
/*! exports provided: IS_DEV, KEY_GLOBAL_ID, BUILD_IN_SCRIPT_SRC, INJECT_AUTO, INJECT_PAGE, INJECT_CONTENT, INJECT_MAPPING, CMD_SCRIPT_ADD, CMD_SCRIPT_UPDATE, METABLOCK_RE, INJECTABLE_TAB_URL_RE, browser, TIMEOUT_MAX, TIMEOUT_HOUR, TIMEOUT_24HOURS, TIMEOUT_WEEK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DEV", function() { return IS_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_GLOBAL_ID", function() { return KEY_GLOBAL_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILD_IN_SCRIPT_SRC", function() { return BUILD_IN_SCRIPT_SRC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_AUTO", function() { return INJECT_AUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_PAGE", function() { return INJECT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_CONTENT", function() { return INJECT_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_MAPPING", function() { return INJECT_MAPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMD_SCRIPT_ADD", function() { return CMD_SCRIPT_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMD_SCRIPT_UPDATE", function() { return CMD_SCRIPT_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METABLOCK_RE", function() { return METABLOCK_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECTABLE_TAB_URL_RE", function() { return INJECTABLE_TAB_URL_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browser", function() { return browser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_MAX", function() { return TIMEOUT_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_HOUR", function() { return TIMEOUT_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_24HOURS", function() { return TIMEOUT_24HOURS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_WEEK", function() { return TIMEOUT_WEEK; });
// SAFETY WARNING! Exports used by `injected` must make ::safe() calls and use __proto__:null
// for global event bus and save some build in info
const IS_DEV = true;
const KEY_GLOBAL_ID = '_GLOBAL_ID_';
const BUILD_IN_SCRIPT_SRC = 'https://mira-1255830993.cos.ap-shanghai.myqcloud.com/lab/plugin/base.user.js';
const INJECT_AUTO = 'auto';
const INJECT_PAGE = 'page';
const INJECT_CONTENT = 'content';
const INJECT_MAPPING = {
  __proto__: null,
  // `auto` tries to provide `window` from the real page as `unsafeWindow`
  [INJECT_AUTO]: [INJECT_PAGE, INJECT_CONTENT],
  // inject into page context
  [INJECT_PAGE]: [INJECT_PAGE],
  // inject into content context only
  [INJECT_CONTENT]: [INJECT_CONTENT]
};
const CMD_SCRIPT_ADD = 'AddScript';
const CMD_SCRIPT_UPDATE = 'UpdateScript'; // Allow metadata lines to start with WHITESPACE? '//' SPACE
// Allow anything to follow the predefined text of the metaStart/End
// The SPACE must be on the same line and specifically \x20 as \s would also match \r\n\t
// Note: when there's no valid metablock, an empty string is matched for convenience

const METABLOCK_RE = /(?:^|\n)\s*\/\/\x20==UserScript==([\s\S]*?\n)\s*\/\/\x20==\/UserScript==|$/;
const INJECTABLE_TAB_URL_RE = /^(https?|file|ftps?):/; // `browser` is a local variable since we remove the global `chrome` and `browser` in injected*
// to prevent exposing them to userscripts with `@inject-into content`

const {
  browser
} = global; // setTimeout truncates the delay to a 32-bit signed integer so the max delay is ~24 days

const TIMEOUT_MAX = 0x7FFFFFFF;
const TIMEOUT_HOUR = 60 * 60 * 1000;
const TIMEOUT_24HOURS = 24 * 60 * 60 * 1000;
const TIMEOUT_WEEK = 7 * 24 * 60 * 60 * 1000;

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! exports provided: normalizeKeys, i18n, toString, memoize, debounce, throttle, noop, getUniqId, buffer2string, blob2base64, string2uint8array, compareVersion, formatTime, formatByteLength, isEmpty, ensureArray, requestLocalFile, isRemote, request, dumpScriptValue, defaultImage, initHooks, sendCmd, sendCmdDirectly, sendTabCmd, sendMessage, sendMessageRetry, leftpad, getLocaleString, getScriptName, getFullUrl, encodeFilename, decodeFilename, getActiveTab, makePause, trueJoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultImage", function() { return defaultImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHooks", function() { return initHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCmd", function() { return sendCmd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCmdDirectly", function() { return sendCmdDirectly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendTabCmd", function() { return sendTabCmd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageRetry", function() { return sendMessageRetry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftpad", function() { return leftpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocaleString", function() { return getLocaleString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScriptName", function() { return getScriptName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullUrl", function() { return getFullUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeFilename", function() { return encodeFilename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeFilename", function() { return decodeFilename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveTab", function() { return getActiveTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePause", function() { return makePause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trueJoin", function() { return trueJoin; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./src/common/object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/common/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeKeys", function() { return _object__WEBPACK_IMPORTED_MODULE_1__["normalizeKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["toString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["throttle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUniqId", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getUniqId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buffer2string", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["buffer2string"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blob2base64", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["blob2base64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "string2uint8array", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["string2uint8array"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareVersion", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["compareVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["formatTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatByteLength", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["formatByteLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ensureArray", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["ensureArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestLocalFile", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["requestLocalFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRemote", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isRemote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dumpScriptValue", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["dumpScriptValue"]; });

// SAFETY WARNING! Exports used by `injected` must make ::safe() calls and use __proto__:null





const defaultImage = '/public/images/icon128.png';
function initHooks() {
  const hooks = [];

  function fire(data) {
    hooks.slice().forEach(cb => {
      cb(data);
    });
  }

  function hook(callback) {
    hooks.push(callback);
    return () => {
      const i = hooks.indexOf(callback);
      if (i >= 0) hooks.splice(i, 1);
    };
  }

  return {
    hook,
    fire
  };
}
/**
 * Used by `injected`
 * @param {string} cmd
 * @param data
 * @param {{retry?: boolean, ignoreError?: boolean}} [options]
 * @return {Promise}
 */

function sendCmd(cmd, data, options) {
  return sendMessage({
    cmd,
    data
  }, options);
} // These need `src` parameter so we'll use sendCmd for them. We could have forged `src` via
// browser.tabs.getCurrent but there's no need as they normally use only a tiny amount of data.

const COMMANDS_WITH_SRC = ['ConfirmInstall', 'Notification', 'TabClose', 'TabFocus', 'TabOpen', 'UpdateValue'
/*
  These are used only by content scripts where sendCmdDirectly can't be used anyway
  'GetInjected',
  'GetRequestId',
  'HttpRequest',
  'InjectionFeedback',
  'SetPopup',
*/
];

const getBgPage = () => _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].extension.getBackgroundPage == null ? void 0 : _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].extension.getBackgroundPage();
/**
 * Sends the command+data directly so it's synchronous and faster than sendCmd thanks to deepCopy.
 * WARNING! Make sure `cmd` handler doesn't use `src` or `cmd` is listed in COMMANDS_WITH_SRC.
 */


function sendCmdDirectly(cmd, data, options) {
  const bg = !COMMANDS_WITH_SRC.includes(cmd) && getBgPage();
  return bg && bg !== window && bg.deepCopy ? bg.handleCommandMessage(bg.deepCopy({
    cmd,
    data
  })).then(_object__WEBPACK_IMPORTED_MODULE_1__["deepCopy"]) : sendCmd(cmd, data, options);
}
/**
 * @param {number} tabId
 * @param {string} cmd
 * @param data
 * @param {{frameId?: number}} [options]
 * @return {Promise}
 */

function sendTabCmd(tabId, cmd, data, options) {
  return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].tabs.sendMessage(tabId, {
    cmd,
    data
  }, options).catch(_util__WEBPACK_IMPORTED_MODULE_2__["noop"]);
} // Used by `injected`

function sendMessage(payload, {
  retry
} = {}) {
  if (retry) return sendMessageRetry(payload);
  let promise = _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].runtime.sendMessage(payload); // Ignoring errors when sending from the background script because it's a broadcast

  if (false) {}

  return promise;
}
/**
 * Used by `injected`
 * The active tab page and its [content] scripts load before the extension's
 * persistent background script when Chrome starts with a URL via command line
 * or when configured to restore the session, https://crbug.com/314686
 */

async function sendMessageRetry(payload, retries = 10) {
  let pauseDuration = 10;

  for (; retries > 0; retries -= 1) {
    try {
      const data = await sendMessage(payload);
      if (data) return data;
    } catch (e) {
      if (!`${e}`.includes('Could not establish connection.')) {
        throw e;
      }
    }

    await makePause(pauseDuration);
    pauseDuration *= 2;
  }

  throw new Error('Violentmonkey cannot connect to the background page.');
}
function leftpad(input, length, pad = '0') {
  let num = input.toString();

  while (num.length < length) num = `${pad}${num}`;

  return num;
}
/**
 * Get locale attributes such as `@name:zh-CN`
 */

function getLocaleString(meta, key) {
  const localeMeta = navigator.languages // Use `lang.toLowerCase()` since v2.6.5
  .map(lang => meta[`${key}:${lang}`] || meta[`${key}:${lang.toLowerCase()}`]).find(Boolean);
  return localeMeta || meta[key] || '';
}
function getScriptName(script) {
  var _script$props$id;

  return script.custom.name || getLocaleString(script.meta, 'name') || `#${(_script$props$id = script.props.id) != null ? _script$props$id : Object(_util__WEBPACK_IMPORTED_MODULE_2__["i18n"])('labelNoName')}`;
}
function getFullUrl(url, base) {
  const obj = new URL(url, base); // Use protocol whitelist to filter URLs

  if (!['http:', 'https:', 'ftp:', 'data:'].includes(obj.protocol)) obj.protocol = 'http:';
  return obj.href;
}
function encodeFilename(name) {
  // `escape` generated URI has % in it
  return name.replace(/[-\\/:*?"<>|%\s]/g, m => {
    let code = m.charCodeAt(0).toString(16);
    if (code.length < 2) code = `0${code}`;
    return `-${code}`;
  });
}
function decodeFilename(filename) {
  return filename.replace(/-([0-9a-f]{2})/g, (_m, g) => String.fromCharCode(parseInt(g, 16)));
}
async function getActiveTab() {
  return (await _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].tabs.query({
    active: true,
    currentWindow: true
  }))[0] || ( // Chrome bug workaround when an undocked devtools window is focused
  await _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].tabs.query({
    active: true,
    windowId: (await _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].windows.getCurrent()).id
  }))[0];
}
function makePause(ms) {
  return ms < 0 ? Promise.resolve() : new Promise(resolve => setTimeout(resolve, ms));
}
function trueJoin(separator) {
  return this.filter(Boolean).join(separator);
}

/***/ }),

/***/ "./src/common/object.js":
/*!******************************!*\
  !*** ./src/common/object.js ***!
  \******************************/
/*! exports provided: normalizeKeys, objectGet, objectSet, objectPick, mapEntry, forEachEntry, forEachKey, forEachValue, deepCopy, deepEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeKeys", function() { return normalizeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectGet", function() { return objectGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectSet", function() { return objectSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectPick", function() { return objectPick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapEntry", function() { return mapEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEachEntry", function() { return forEachEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEachKey", function() { return forEachKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEachValue", function() { return forEachValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
function normalizeKeys(key) {
  if (key == null) return [];
  if (Array.isArray(key)) return key;
  return `${key}`.split('.').filter(Boolean);
}
function objectGet(obj, rawKey, def) {
  const keys = normalizeKeys(rawKey);
  let res = obj;
  keys.every(key => {
    if (res && typeof res === 'object' && key in res) {
      res = res[key];
      return true;
    }

    res = def;
    return false;
  });
  return res;
}
function objectSet(obj, rawKey, val) {
  const keys = normalizeKeys(rawKey);
  if (!keys.length) return val;
  const root = obj || {};
  let sub = root;
  const lastKey = keys.pop();
  keys.forEach(key => {
    sub = sub[key] || (sub[key] = {});
  });

  if (typeof val === 'undefined') {
    delete sub[lastKey];
  } else {
    sub[lastKey] = val;
  }

  return root;
}
/**
 * @param {{}} obj
 * @param {string[]} keys
 * @param {function(value,key):?} [transform]
 * @returns {{}}
 */

function objectPick(obj, keys, transform) {
  return keys.reduce((res, key) => {
    let value = obj == null ? void 0 : obj[key];
    if (transform) value = transform(value, key);
    if (value != null) res[key] = value;
    return res;
  }, {});
} // invoked as obj::mapEntry(([key, value], i, allEntries) => transformedValue)

function mapEntry(func) {
  return Object.entries(this).reduce((res, entry, i, allEntries) => {
    res[entry[0]] = func(entry, i, allEntries);
    return res;
  }, {});
} // invoked as obj::forEachEntry(([key, value], i, allEntries) => {})

function forEachEntry(func) {
  if (this) Object.entries(this).forEach(func);
} // invoked as obj::forEachKey(key => {}, i, allKeys)

function forEachKey(func) {
  if (this) Object.keys(this).forEach(func);
} // invoked as obj::forEachValue(value => {}, i, allValues)

function forEachValue(func) {
  if (this) Object.values(this).forEach(func);
} // Needed for Firefox's browser.storage API which fails on Vue observables

function deepCopy(src) {
  return src && (Array.isArray(src) && src.map(deepCopy) // Used in safe context
  // eslint-disable-next-line no-restricted-syntax
  || typeof src === 'object' && safeCall(mapEntry, src, ([, val]) => deepCopy(val))) || src;
} // Simplified deep equality checker

function deepEqual(a, b) {
  let res;

  if (!a || !b || typeof a !== typeof b || typeof a !== 'object') {
    res = a === b;
  } else if (Array.isArray(a)) {
    res = a.length === b.length && a.every((item, i) => deepEqual(item, b[i]));
  } else {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    res = keysA.length === keysB.length && keysA.every(key => keysB.includes(key) && deepEqual(a[key], b[key]));
  }

  return res;
}

/***/ }),

/***/ "./src/common/util.js":
/*!****************************!*\
  !*** ./src/common/util.js ***!
  \****************************/
/*! exports provided: i18n, toString, memoize, debounce, throttle, noop, getUniqId, buffer2string, blob2base64, string2uint8array, compareVersion, formatTime, formatByteLength, isEmpty, ensureArray, requestLocalFile, isRemote, request, dumpScriptValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniqId", function() { return getUniqId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer2string", function() { return buffer2string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blob2base64", function() { return blob2base64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string2uint8array", function() { return string2uint8array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareVersion", function() { return compareVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatByteLength", function() { return formatByteLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureArray", function() { return ensureArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestLocalFile", function() { return requestLocalFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRemote", function() { return isRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dumpScriptValue", function() { return dumpScriptValue; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
// SAFETY WARNING! Exports used by `injected` must make ::safe() calls and use __proto__:null

function i18n(name, args) {
  return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["browser"].i18n.getMessage(name, args) || name;
}
function toString(param) {
  if (param == null) return '';
  return `${param}`;
}
function memoize(func, resolver = toString) {
  const cacheMap = {};

  function memoized(...args) {
    // Used in safe context
    // eslint-disable-next-line no-restricted-syntax
    const key = resolver(...args);
    let cache = cacheMap[key];

    if (!cache) {
      cache = {
        value: func.apply(this, args)
      };
      cacheMap[key] = cache;
    }

    return cache.value;
  }

  return memoized;
}
function debounce(func, time) {
  let startTime;
  let timer;
  let callback;
  time = Math.max(0, +time || 0);

  function checkTime() {
    timer = null;
    if (performance.now() >= startTime) callback();else checkTimer();
  }

  function checkTimer() {
    if (!timer) {
      const delta = startTime - performance.now();
      timer = setTimeout(checkTime, delta);
    }
  }

  function debouncedFunction(...args) {
    startTime = performance.now() + time;

    callback = () => {
      callback = null;
      func.apply(this, args);
    };

    checkTimer();
  }

  return debouncedFunction;
}
function throttle(func, time) {
  let lastTime = 0;
  time = Math.max(0, +time || 0);

  function throttledFunction(...args) {
    const now = performance.now();

    if (lastTime + time < now) {
      lastTime = now;
      func.apply(this, args);
    }
  }

  return throttledFunction;
}
function noop() {}
function getUniqId(prefix = 'VM') {
  const now = performance.now();
  return prefix + Math.floor((now - Math.floor(now)) * 1e12).toString(36) + Math.floor(Math.random() * 1e12).toString(36);
}
/**
 * @param {ArrayBuffer|Uint8Array|Array} buf
 * @param {number} [offset]
 * @param {number} [length]
 * @return {string} a binary string i.e. one byte per character
 */

function buffer2string(buf, offset = 0, length = 1e99) {
  // The max number of arguments varies between JS engines but it's >32k so we're safe
  const sliceSize = 8192;
  const slices = [];
  const arrayLen = buf.length; // present on Uint8Array/Array

  const end = Math.min(arrayLen || buf.byteLength, offset + length);
  const needsSlicing = arrayLen == null || offset || end > sliceSize;

  for (; offset < end; offset += sliceSize) {
    slices.push(String.fromCharCode.apply(null, needsSlicing ? new Uint8Array(buf, offset, Math.min(sliceSize, end - offset)) : buf));
  }

  return slices.join('');
}
/**
 * Faster than buffer2string+btoa: 2x in Chrome, 10x in FF
 * @param {Blob} blob
 * @param {number} [offset]
 * @param {number} [length]
 * @return {Promise<string>} base64-encoded contents
 */

function blob2base64(blob, offset = 0, length = 1e99) {
  if (offset || length < blob.size) {
    blob = blob.slice(offset, offset + length);
  }

  return !blob.size ? '' : new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onload = () => {
      const res = reader.result;
      resolve(res.slice(res.indexOf(',') + 1));
    };
  });
}
function string2uint8array(str) {
  const len = str.length;
  const array = new Uint8Array(len);

  for (let i = 0; i < len; i += 1) {
    array[i] = str.charCodeAt(i);
  }

  return array;
}
const VERSION_RE = /^(.*?)-([-.0-9a-z]+)|$/i;
const DIGITS_RE = /^\d+$/; // using regexp to avoid +'1e2' being parsed as 100

/** @return -1 | 0 | 1 */

function compareVersion(ver1, ver2) {
  // Used in safe context
  // eslint-disable-next-line no-restricted-syntax
  const [, main1 = ver1 || '', pre1] = VERSION_RE.exec(ver1); // eslint-disable-next-line no-restricted-syntax

  const [, main2 = ver2 || '', pre2] = VERSION_RE.exec(ver2);
  const delta = compareVersionChunk(main1, main2) || !pre1 - !pre2 // 1.2.3-pre-release is less than 1.2.3
  || pre1 && compareVersionChunk(pre1, pre2, true); // if pre1 is present, pre2 is too

  return delta < 0 ? -1 : +!!delta;
}

function compareVersionChunk(ver1, ver2, isSemverMode) {
  const parts1 = ver1.split('.');
  const parts2 = ver2.split('.');
  const len1 = parts1.length;
  const len2 = parts2.length;
  const len = (isSemverMode ? Math.min : Math.max)(len1, len2);
  let delta;

  for (let i = 0; !delta && i < len; i += 1) {
    const a = parts1[i];
    const b = parts2[i];

    if (isSemverMode) {
      delta = DIGITS_RE.test(a) && DIGITS_RE.test(b) ? a - b : a > b || a < b && -1;
    } else {
      delta = (parseInt(a, 10) || 0) - (parseInt(b, 10) || 0);
    }
  }

  return delta || isSemverMode && len1 - len2;
}

const units = [['min', 60], ['h', 24], ['d', 1000, 365], ['y']];
function formatTime(duration) {
  duration /= 60 * 1000;
  const unitInfo = units.find(item => {
    const max = item[1];
    if (!max || duration < max) return true;
    const step = item[2] || max;
    duration /= step;
    return false;
  });
  return `${duration | 0}${unitInfo[0]}`;
}
const formatByteLength = len => !len ? '' : len < 1024 && `${len} B` || len < 1024 * 1024 && `${len >> 10} k` // eslint-disable-line no-bitwise
|| `${+(len / (1024 * 1024)).toFixed(1)} M` // allow fractions for megabytes
; // Used by `injected`

function isEmpty(obj) {
  for (const key in obj) {
    if (safeCall(hasOwnProperty, obj, key)) {
      return false;
    }
  }

  return true;
}
function ensureArray(data) {
  return Array.isArray(data) ? data : [data];
}
const binaryTypes = ['blob', 'arraybuffer'];
async function requestLocalFile(url, options = {}) {
  // only GET method is allowed for local files
  // headers is meaningless
  return new Promise((resolve, reject) => {
    const result = {};
    const xhr = new XMLHttpRequest();
    const {
      responseType
    } = options;
    xhr.open('GET', url, true);
    if (binaryTypes.includes(responseType)) xhr.responseType = responseType;

    xhr.onload = () => {
      // status for `file:` protocol will always be `0`
      result.status = xhr.status || 200;
      result.data = binaryTypes.includes(responseType) ? xhr.response : xhr.responseText;

      if (responseType === 'json') {
        try {
          result.data = JSON.parse(result.data);
        } catch (_unused) {// ignore invalid JSON
        }
      }

      if (result.status > 300) {
        reject(result);
      } else {
        resolve(result);
      }
    };

    xhr.onerror = () => {
      result.status = -1;
      reject(result);
    };

    xhr.send();
  });
}
/**
 * Excludes `text/html` to avoid LINK header that Chrome uses to prefetch js and css,
 * because GreasyFork's 404 error response causes CSP violations in console of our page.
 */

const FORCED_ACCEPT = {
  'greasyfork.org': 'application/javascript, text/plain, text/css'
};
const isRemote = url => url && !/^(file:|data:|https?:\/\/(localhost|127\.0\.0\.1[:/]))/.test(url);
/** @typedef {{
  url: string,
  status: number,
  headers: Headers,
  data: string|ArrayBuffer|Blob|Object
}} VMRequestResponse */

/**
 * Make a request.
 * @param {string} url
 * @param {RequestInit} options
 * @return Promise<VMRequestResponse>
 */

async function request(url, options = {}) {
  // fetch does not support local file
  if (url.startsWith('file://')) return requestLocalFile(url, options);
  const {
    body,
    headers,
    responseType
  } = options;
  const isBodyObj = body && safeCall({}.toString, body) === '[object Object]';
  const hostname = url.split('/', 3)[2];
  const accept = FORCED_ACCEPT[hostname]; // Not using ...spread because Babel mistakenly adds its polyfill to injected-web

  const init = Object.assign({
    cache: isRemote(url) ? undefined : 'no-cache'
  }, options, {
    body: isBodyObj ? JSON.stringify(body) : body,
    headers: isBodyObj || accept ? Object.assign({}, headers, isBodyObj && {
      'Content-Type': 'application/json'
    }, accept && {
      accept
    }) : headers
  });
  const result = {
    url,
    status: -1
  };

  try {
    const resp = await fetch(url, init);
    const loadMethod = {
      arraybuffer: 'arrayBuffer',
      blob: 'blob',
      json: 'json'
    }[responseType] || 'text'; // status for `file:` protocol will always be `0`

    result.status = resp.status || 200;
    result.headers = resp.headers;
    result.data = await resp[loadMethod]();
  } catch (_unused2) {
    /* NOP */
  }

  if (result.status < 0 || result.status > 300) throw result;
  return result;
} // Used by `injected`

const SIMPLE_VALUE_TYPE = {
  __proto__: null,
  string: 's',
  number: 'n',
  boolean: 'b'
}; // Used by `injected`

function dumpScriptValue(value, jsonDump = JSON.stringify) {
  if (value !== undefined) {
    const simple = SIMPLE_VALUE_TYPE[typeof value];
    return `${simple || 'o'}${simple ? value : jsonDump(value)}`;
  }
}

/***/ }),

/***/ "./src/injected/util/index.js":
/*!************************************!*\
  !*** ./src/injected/util/index.js ***!
  \************************************/
/*! exports provided: dumpScriptValue, isEmpty, IS_DEV, KEY_GLOBAL_ID, BUILD_IN_SCRIPT_SRC, INJECT_AUTO, INJECT_PAGE, INJECT_CONTENT, INJECT_MAPPING, CMD_SCRIPT_ADD, CMD_SCRIPT_UPDATE, METABLOCK_RE, INJECTABLE_TAB_URL_RE, browser, TIMEOUT_MAX, TIMEOUT_HOUR, TIMEOUT_24HOURS, TIMEOUT_WEEK, fireBridgeEvent, bindEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireBridgeEvent", function() { return fireBridgeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindEvents", function() { return bindEvents; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dumpScriptValue", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["dumpScriptValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["isEmpty"]; });

/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IS_DEV", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["IS_DEV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KEY_GLOBAL_ID", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["KEY_GLOBAL_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BUILD_IN_SCRIPT_SRC", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["BUILD_IN_SCRIPT_SRC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECT_AUTO", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_AUTO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECT_PAGE", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_PAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECT_CONTENT", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_CONTENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECT_MAPPING", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECT_MAPPING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CMD_SCRIPT_ADD", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["CMD_SCRIPT_ADD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CMD_SCRIPT_UPDATE", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["CMD_SCRIPT_UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "METABLOCK_RE", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["METABLOCK_RE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INJECTABLE_TAB_URL_RE", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["INJECTABLE_TAB_URL_RE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browser", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["browser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_MAX", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_MAX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_HOUR", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_HOUR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_24HOURS", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_24HOURS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_WEEK", function() { return _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_1__["TIMEOUT_WEEK"]; });

/* eslint-disable no-restricted-imports */

/* WARNING!
 * Make sure all re-exported functions survive in a spoofed/broken environment:
 * use only ::safe() globals that are initialized in a corresponding safe-globals* file,
 * use __proto__:null or get/set own props explicitly. */


const fireBridgeEvent = (eventId, msg, cloneInto) => {
  const detail = cloneInto ? cloneInto(msg, document) : msg;
  const evtMain = new CustomEventSafe(eventId, {
    __proto__: null,
    detail
  });
  safeCall(fire, window, evtMain);
};
const bindEvents = (srcId, destId, bridge, cloneInto) => {
  /* Using a separate event for `node` because CustomEvent can't transfer nodes,
   * whereas MouseEvent (and some others) can't transfer objects without stringification. */
  let incomingNodeEvent;
  safeCall(on, window, srcId, e => {
    safeCall(stopImmediatePropagation, e);

    if (false) {}

    if (!incomingNodeEvent) {
      // CustomEvent is the main message
      const data = safeCall(getDetail, e);
      incomingNodeEvent = data.node && data;
      if (!incomingNodeEvent) bridge.onHandle(data);
    } else {
      // MouseEvent is the second event when the main event has `node: true`
      incomingNodeEvent.node = safeCall(getRelatedTarget, e);
      bridge.onHandle(incomingNodeEvent);
      incomingNodeEvent = null;
    }
  }, true);

  bridge.post = (cmd, data, {
    dataKey
  } = bridge, node) => {
    // Constructing the event now so we don't send anything if it throws on invalid `node`
    const evtNode = node && new MouseEventSafe(destId, {
      __proto__: null,
      relatedTarget: node
    });
    fireBridgeEvent(destId, {
      cmd,
      data,
      dataKey,
      node: !!evtNode
    }, cloneInto);
    if (evtNode) safeCall(fire, window, evtNode);
  };
};

/***/ }),

/***/ "./src/injected/web/bridge.js":
/*!************************************!*\
  !*** ./src/injected/web/bridge.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const handlers = createNullObj();
const callbacks = createNullObj();
/**
 * @property {UAInjected} ua
 */

const bridge = {
  __proto__: null,
  callbacks,

  addHandlers(obj) {
    assign(handlers, obj);
  },

  onHandle({
    cmd,
    data,
    node
  }) {
    const fn = handlers[cmd];
    if (fn) safeCall(fn, node, data);
  },

  send(cmd, data, context, node) {
    return new PromiseSafe(resolve => {
      postWithCallback(cmd, data, context, node, resolve);
    });
  },

  syncCall: postWithCallback
};

function postWithCallback(cmd, data, context, node, cb, customCallbackId) {
  const id = getUniqIdSafe();
  callbacks[id] = cb;

  if (customCallbackId) {
    setOwnProp(data, customCallbackId, id);
  } else {
    data = {
      [CALLBACK_ID]: id,
      data
    };
  }

  bridge.post(cmd, data, context, node);
}

/* harmony default export */ __webpack_exports__["default"] = (bridge);

/***/ }),

/***/ "./src/injected/web/gm-api-wrapper.js":
/*!********************************************!*\
  !*** ./src/injected/web/gm-api-wrapper.js ***!
  \********************************************/
/*! exports provided: makeGmApiWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGmApiWrapper", function() { return makeGmApiWrapper; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");
/* harmony import */ var _gm_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gm-api */ "./src/injected/web/gm-api.js");
/* harmony import */ var _gm_global_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gm-global-wrapper */ "./src/injected/web/gm-global-wrapper.js");
/* harmony import */ var _util_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util-web */ "./src/injected/web/util-web.js");




/** Name in Greasemonkey4 -> name in GM */

const GM4_ALIAS = {
  __proto__: null,
  getResourceUrl: 'getResourceURL',
  xmlHttpRequest: 'xmlhttpRequest'
};
const GM4_ASYNC = {
  __proto__: null,
  getResourceUrl: 1,
  getValue: 1,
  deleteValue: 1,
  setValue: 1,
  listValues: 1
};
let gmApi;
let componentUtils;
/**
 * @param {VMScript & VMInjectedScript} script
 * @returns {Object}
 */

function makeGmApiWrapper(script) {
  // Add GM functions
  // Reference: http://wiki.greasespot.net/Greasemonkey_Manual:API
  const {
    meta
  } = script;
  const grant = meta.grant;

  if (grant.length === 1 && grant[0] === 'none') {
    grant.length = 0;
  }

  const {
    id
  } = script.props;
  const resources = assign(createNullObj(), meta.resources);
  /** @namespace VMInjectedScript.Context */

  const context = {
    id,
    script,
    resources,
    dataKey: script.dataKey,
    resCache: createNullObj()
  };
  const gmInfo = makeGmInfo(script, resources);
  const gm = {
    __proto__: null,
    GM: {
      __proto__: null,
      info: gmInfo
    },
    GM_info: gmInfo,
    unsafeWindow: global
  };

  if (!componentUtils) {
    componentUtils = Object(_util_web__WEBPACK_IMPORTED_MODULE_3__["makeComponentUtils"])();
  }

  assign(gm, componentUtils);

  if (safeCall(indexOf, grant, WINDOW_CLOSE) >= 0) {
    gm.close = vmOwnFunc(() => _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('TabClose', 0, context));
  }

  if (safeCall(indexOf, grant, WINDOW_FOCUS) >= 0) {
    gm.focus = vmOwnFunc(() => _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('TabFocus', 0, context));
  }

  if (!gmApi && grant.length) gmApi = Object(_gm_api__WEBPACK_IMPORTED_MODULE_1__["makeGmApi"])();
  safeCall(forEach, grant, name => {
    const gm4name = safeCall(slice, name, 0, 3) === 'GM.' && safeCall(slice, name, 3);
    const fn = gmApi[gm4name ? `GM_${GM4_ALIAS[gm4name] || gm4name}` : name];

    if (fn) {
      if (gm4name) {
        gm.GM[gm4name] = makeGmMethodCaller(fn, context, GM4_ASYNC[gm4name]);
      } else {
        gm[name] = makeGmMethodCaller(fn, context);
      }
    }
  });
  return grant.length ? Object(_gm_global_wrapper__WEBPACK_IMPORTED_MODULE_2__["makeGlobalWrapper"])(gm) : gm;
}

function makeGmInfo(script, resources) {
  // TODO: move into background.js
  const {
    meta
  } = script;
  const metaCopy = createNullObj();
  let val;
  safeCall(forEach, objectKeys(meta), key => {
    val = meta[key];

    switch (key) {
      case 'match': // -> matches

      case 'excludeMatch':
        // -> excludeMatches
        key += 'e';
      // fallthrough

      case 'exclude': // -> excludes

      case 'include':
        // -> includes
        key += 's';
        val = Object(_util_web__WEBPACK_IMPORTED_MODULE_3__["safeConcat"])([], val);
        break;

      default:
    }

    metaCopy[key] = val;
  });
  safeCall(forEach, ['description', 'name', 'namespace', 'runAt', 'version'], key => {
    if (!metaCopy[key]) metaCopy[key] = '';
  });
  val = objectKeys(resources);
  safeCall(forEach, val, (name, i) => {
    val[i] = {
      name,
      url: resources[name]
    };
  });
  metaCopy.resources = val;
  metaCopy.unwrap = false; // deprecated, always `false`

  return {
    uuid: script.props.uuid,
    scriptMetaStr: script.metaStr,
    scriptWillUpdate: !!script.config.shouldUpdate,
    scriptHandler: 'Violentmonkey',
    version: "2.13.0.12",
    injectInto: _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].mode,
    platform: assign({}, _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].ua),
    script: metaCopy
  };
}

function makeGmMethodCaller(gmMethod, context, isAsync) {
  // keeping the native console.log intact
  return gmMethod === gmApi.GM_log ? gmMethod : vmOwnFunc(isAsync ? async (...args) => safeCall(apply, gmMethod, context, args) : safeCall(bind, gmMethod, context));
}

/***/ }),

/***/ "./src/injected/web/gm-api.js":
/*!************************************!*\
  !*** ./src/injected/web/gm-api.js ***!
  \************************************/
/*! exports provided: makeGmApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGmApi", function() { return makeGmApi; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/injected/util/index.js");
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/injected/web/store.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs */ "./src/injected/web/tabs.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requests */ "./src/injected/web/requests.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications */ "./src/injected/web/notifications.js");
/* harmony import */ var _gm_values__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gm-values */ "./src/injected/web/gm-values.js");
/* harmony import */ var _util_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util-web */ "./src/injected/web/util-web.js");
// eslint-disable-next-line no-restricted-imports









function makeGmApi() {
  return {
    __proto__: null,

    GM_addGlobalListener(key, fn) {
      return addListener(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["KEY_GLOBAL_ID"], key, fn);
    },

    GM_removeGlobalListener(listenerId) {
      return removeListener(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["KEY_GLOBAL_ID"], listenerId);
    },

    GM_sendGlobalEvent(key, event) {
      var _changeHooks$KEY_GLOB;

      const hooks = (_changeHooks$KEY_GLOB = _gm_values__WEBPACK_IMPORTED_MODULE_7__["changeHooks"][_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["KEY_GLOBAL_ID"]]) == null ? void 0 : _changeHooks$KEY_GLOB[key];
      if (!hooks) return;
      safeCall(forEach, objectValues(hooks), fn => {
        try {
          fn(key, event);
        } catch (e) {
          log('error', ['GM_sendGlobalEvent', 'callback'], e);
        }
      });
    },

    GM_regFn(key, fn) {
      var _changeHooks$KEY_GLOB2;

      const hooks = (_changeHooks$KEY_GLOB2 = _gm_values__WEBPACK_IMPORTED_MODULE_7__["changeHooks"][_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["KEY_GLOBAL_ID"]]) == null ? void 0 : _changeHooks$KEY_GLOB2[key];
      if (hooks) throw `duplicate reg ${key}`;
      addListener(_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["KEY_GLOBAL_ID"], key, fn);
    },

    GM_invokeFn(key, arg) {
      var _changeHooks$KEY_GLOB3;

      const hooks = (_changeHooks$KEY_GLOB3 = _gm_values__WEBPACK_IMPORTED_MODULE_7__["changeHooks"][_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_0__["KEY_GLOBAL_ID"]]) == null ? void 0 : _changeHooks$KEY_GLOB3[key];
      if (!hooks) throw `has not reg ${key}`;
      const fn = hooks[objectKeys(hooks)[0]];
      return fn(arg);
    },

    GM_deleteValue(key) {
      const {
        id
      } = this;
      const values = Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["loadValues"])(id);
      const oldRaw = values[key];
      delete values[key]; // using `undefined` to match the documentation and TM for GM_addValueChangeListener

      Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["dumpValue"])(id, key, undefined, null, oldRaw, this);
    },

    GM_getValue(key, def) {
      const raw = Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["loadValues"])(this.id)[key];
      return raw ? Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["decodeValue"])(raw) : def;
    },

    GM_listValues() {
      return objectKeys(Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["loadValues"])(this.id));
    },

    GM_setValue(key, val) {
      const {
        id
      } = this;
      const raw = Object(_util__WEBPACK_IMPORTED_MODULE_1__["dumpScriptValue"])(val, _util_web__WEBPACK_IMPORTED_MODULE_8__["jsonDump"]) || null;
      const values = Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["loadValues"])(id);
      const oldRaw = values[key];
      values[key] = raw;
      Object(_gm_values__WEBPACK_IMPORTED_MODULE_7__["dumpValue"])(id, key, val, raw, oldRaw, this);
    },

    /**
     * @callback GMValueChangeListener
     * @param {String} key
     * @param {?} oldValue - `undefined` means value was created
     * @param {?} newValue - `undefined` means value was removed
     * @param {boolean} remote - `true` means value was modified in another tab
     */

    /**
     * @param {String} key - name of the value to monitor
     * @param {GMValueChangeListener} fn - callback
     * @returns {String} listenerId
     */
    GM_addValueChangeListener(key, fn) {
      return addListener(this.id, key, fn);
    },

    /**
     * @param {String} listenerId
     */
    GM_removeValueChangeListener(listenerId) {
      return removeListener(this.id, listenerId);
    },

    GM_getResourceText(name) {
      return getResource(this, name);
    },

    GM_getResourceURL(name) {
      return getResource(this, name, true);
    },

    GM_registerMenuCommand(cap, func) {
      const {
        id
      } = this;
      const key = `${id}:${cap}`;
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].commands[key] = func;
      _bridge__WEBPACK_IMPORTED_MODULE_2__["default"].post('RegisterMenu', {
        id,
        cap
      }, this);
      return cap;
    },

    GM_unregisterMenuCommand(cap) {
      const {
        id
      } = this;
      const key = `${id}:${cap}`;
      delete _store__WEBPACK_IMPORTED_MODULE_3__["default"].commands[key];
      _bridge__WEBPACK_IMPORTED_MODULE_2__["default"].post('UnregisterMenu', {
        id,
        cap
      }, this);
    },

    GM_download(arg1, name) {
      // not using ... as it calls Babel's polyfill that calls unsafe Object.xxx
      const opts = createNullObj();
      let onload;

      if (isString(arg1)) {
        opts.url = arg1;
        opts.name = name;
      } else if (arg1) {
        name = arg1.name;
        onload = arg1.onload;
        safeCall(pickIntoThis, opts, arg1, ['url', 'headers', 'timeout', 'onerror', 'onprogress', 'ontimeout']);
      }

      if (!name || !isString(name)) {
        throw new ErrorSafe('Required parameter "name" is missing or not a string.');
      }

      assign(opts, {
        method: 'GET',
        responseType: 'blob',
        overrideMimeType: 'application/octet-stream',
        // Must be present and a function to trigger downloadBlob in content bridge
        onload: isFunction(onload) ? onload : () => {}
      });
      return Object(_requests__WEBPACK_IMPORTED_MODULE_5__["onRequestCreate"])(opts, this, name);
    },

    GM_xmlhttpRequest(opts) {
      return Object(_requests__WEBPACK_IMPORTED_MODULE_5__["onRequestCreate"])(opts, this);
    },

    /**
     * Bypasses site's CSP for inline `style`, `link`, and `script`.
     * @param {Node} [parent]
     * @param {string} tag
     * @param {Object} [attributes]
     * @returns {HTMLElement} it also has .then() so it should be compatible with TM
     */
    GM_addElement(parent, tag, attributes) {
      return isString(parent) ? webAddElement(null, parent, tag, this) : webAddElement(parent, tag, attributes, this);
    },

    /**
     * Bypasses site's CSP for inline `style`.
     * @param {string} css
     * @returns {HTMLElement} it also has .then() so it should be compatible with TM and old VM
     */
    GM_addStyle(css) {
      return webAddElement(null, 'style', {
        textContent: css,
        id: getUniqIdSafe('VMst')
      }, this);
    },

    GM_openInTab(url, options) {
      return Object(_tabs__WEBPACK_IMPORTED_MODULE_4__["onTabCreate"])(isObject(options) ? assign(createNullObj(), options, {
        url
      }) : {
        active: !options,
        url
      }, this);
    },

    GM_notification(text, title, image, onclick) {
      const options = isObject(text) ? text : {
        __proto__: null,
        text,
        title,
        image,
        onclick
      };

      if (!options.text) {
        throw new ErrorSafe('GM_notification: `text` is required!');
      }

      const id = Object(_notifications__WEBPACK_IMPORTED_MODULE_6__["onNotificationCreate"])(options, this);
      return {
        remove: vmOwnFunc(() => _bridge__WEBPACK_IMPORTED_MODULE_2__["default"].send('RemoveNotification', id, this))
      };
    },

    GM_setClipboard(data, type) {
      _bridge__WEBPACK_IMPORTED_MODULE_2__["default"].post('SetClipboard', {
        data,
        type
      }, this);
    },

    // using the native console.log so the output has a clickable link to the caller's source
    GM_log: logging.log
  };
}

function addListener(id, key, fn) {
  if (!isString(key)) key = `${key}`;
  if (!isFunction(fn)) return;
  const hooks = ensureNestedProp(_gm_values__WEBPACK_IMPORTED_MODULE_7__["changeHooks"], id, key);
  const i = safeCall(indexOf, objectValues(hooks), fn);
  let listenerId = i >= 0 && objectKeys(hooks)[i];

  if (!listenerId) {
    listenerId = getUniqIdSafe('VMvc');
    hooks[listenerId] = fn;
  }

  return listenerId;
}

function removeListener(id, listenerId) {
  const keyHooks = _gm_values__WEBPACK_IMPORTED_MODULE_7__["changeHooks"][id];
  if (!keyHooks) return;

  for (const key in keyHooks) {
    /* proto is null */
    // eslint-disable-line guard-for-in
    const hooks = keyHooks[key];

    if (listenerId in hooks) {
      delete hooks[listenerId];
      if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(hooks)) delete keyHooks[key];
      break;
    }
  }

  if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(keyHooks)) delete _gm_values__WEBPACK_IMPORTED_MODULE_7__["changeHooks"][id];
}

function webAddElement(parent, tag, attrs, context) {
  let el;
  let errorInfo;
  _bridge__WEBPACK_IMPORTED_MODULE_2__["default"].syncCall('AddElement', {
    tag,
    attrs
  }, context, parent, function _(res) {
    el = this;
    errorInfo = res;
  }, 'cbId'); // DOM error in content script can't be caught by a page-mode userscript so we rethrow it here

  if (errorInfo) {
    const err = new ErrorSafe(errorInfo[0]);
    err.stack += `\n${errorInfo[1]}`;
    throw err;
  }
  /* A Promise polyfill is not actually necessary because DOM messaging is synchronous,
     but we keep it for compatibility with GM_addStyle in VM of 2017-2019
     https://github.com/violentmonkey/violentmonkey/issues/217
     as well as for GM_addElement in Tampermonkey. */


  return setOwnProp(el, 'then', async cb => // Preventing infinite resolve loop
  delete el.then // Native Promise ignores non-function
  && (isFunction(cb) ? cb(el) : el));
}

function getResource(context, name, isBlob) {
  const {
    id,
    resCache,
    resources
  } = context;
  const key = resources[name];

  if (key) {
    let res = resCache[key];

    if (!res) {
      _bridge__WEBPACK_IMPORTED_MODULE_2__["default"].syncCall('GetResource', {
        id,
        isBlob,
        key
      }, context, null, response => {
        res = response;
      });

      if (res !== true && isBlob) {
        res = createObjectURL(res);
      }

      resCache[key] = res;
    }

    return res === true ? key : res;
  }
}

/***/ }),

/***/ "./src/injected/web/gm-global-wrapper.js":
/*!***********************************************!*\
  !*** ./src/injected/web/gm-global-wrapper.js ***!
  \***********************************************/
/*! exports provided: makeGlobalWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGlobalWrapper", function() { return makeGlobalWrapper; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/injected/util/index.js");
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");
/* harmony import */ var _util_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util-web */ "./src/injected/web/util-web.js");



/** The index strings that look exactly like integers can't be forged
 * but for example '011' doesn't look like 11 so it's allowed */

const isFrameIndex = key => key >= 0 && key <= 0xFFFFFFFE && key === `${+key}`;

const scopeSym = SymbolSafe.unscopables;
const globalKeysSet = Object(_util_web__WEBPACK_IMPORTED_MODULE_2__["FastLookup"])();

const globalKeys = function makeGlobalKeys() {
  const kWrappedJSObject = 'wrappedJSObject';
  const names = getOwnPropertyNames(window); // True if `names` is usable as is, but FF is bugged: its names have duplicates

  let ok = !IS_FIREFOX;
  safeCall(forEach, names, key => {
    if (isFrameIndex(key)) {
      ok = false;
    } else {
      globalKeysSet.add(key);
    }
  });
  /* Chrome and FF page mode: `global` is `window`
     FF content mode: `global` is different, some props e.g. `isFinite` are defined only there */

  if (global !== window) {
    safeCall(forEach, getOwnPropertyNames(global), key => {
      if (!isFrameIndex(key)) {
        globalKeysSet.add(key);
        ok = false;
      }
    });
  } // wrappedJSObject is not included in getOwnPropertyNames so we add it explicitly.


  if (IS_FIREFOX && _bridge__WEBPACK_IMPORTED_MODULE_1__["default"].mode === _util__WEBPACK_IMPORTED_MODULE_0__["INJECT_CONTENT"] && kWrappedJSObject in global && !globalKeysSet.has(kWrappedJSObject)) {
    globalKeysSet.add(kWrappedJSObject);
    if (ok) setOwnProp(names, names.length, kWrappedJSObject);
  }

  return ok ? names : globalKeysSet.toArray();
}();

const inheritedKeys = createNullObj();
/* These can be redefined but can't be assigned, see sandbox-globals.html */

const readonlyKeys = {
  __proto__: null,
  applicationCache: 1,
  caches: 1,
  closed: 1,
  crossOriginIsolated: 1,
  crypto: 1,
  customElements: 1,
  frameElement: 1,
  history: 1,
  indexedDB: 1,
  isSecureContext: 1,
  localStorage: 1,
  mozInnerScreenX: 1,
  mozInnerScreenY: 1,
  navigator: 1,
  sessionStorage: 1,
  speechSynthesis: 1,
  styleMedia: 1,
  trustedTypes: 1
};
/* These can't be redefined, see sandbox-globals.html */

const unforgeables = {
  __proto__: null,
  Infinity: 1,
  NaN: 1,
  document: 1,
  location: 1,
  top: 1,
  undefined: 1,
  window: 1
};
/* ~50 methods like alert/fetch/moveBy that need `window` as `this`, see sandbox-globals.html */

const MAYBE = vmOwnFunc; // something that can't be imitated by the page

const boundMethods = {
  __proto__: null,
  addEventListener: MAYBE,
  alert: MAYBE,
  atobSafe: MAYBE,
  blur: MAYBE,
  btoa: MAYBE,
  cancelAnimationFrame: MAYBE,
  cancelIdleCallback: MAYBE,
  captureEvents: MAYBE,
  clearInterval: MAYBE,
  clearTimeout: MAYBE,
  close: MAYBE,
  confirm: MAYBE,
  createImageBitmap: MAYBE,
  dispatchEvent: MAYBE,
  dump: MAYBE,
  fetch: MAYBE,
  find: MAYBE,
  focus: MAYBE,
  getComputedStyle: MAYBE,
  getDefaultComputedStyle: MAYBE,
  getSelection: MAYBE,
  matchMedia: MAYBE,
  moveBy: MAYBE,
  moveTo: MAYBE,
  open: MAYBE,
  openDatabase: MAYBE,
  postMessage: MAYBE,
  print: MAYBE,
  prompt: MAYBE,
  queueMicrotask: MAYBE,
  releaseEvents: MAYBE,
  removeEventListener: MAYBE,
  requestAnimationFrame: MAYBE,
  requestIdleCallback: MAYBE,
  resizeBy: MAYBE,
  resizeTo: MAYBE,
  scroll: MAYBE,
  scrollBy: MAYBE,
  scrollByLines: MAYBE,
  scrollByPages: MAYBE,
  scrollTo: MAYBE,
  setInterval: MAYBE,
  setResizable: MAYBE,
  setTimeout: MAYBE,
  sizeToContent: MAYBE,
  stop: MAYBE,
  updateCommands: MAYBE,
  webkitCancelAnimationFrame: MAYBE,
  webkitRequestAnimationFrame: MAYBE,
  webkitRequestFileSystem: MAYBE,
  webkitResolveLocalFileSystemURL: MAYBE
};

for (const name in unforgeables) {
  /* proto is null */
  // eslint-disable-line guard-for-in
  let thisObj;
  let info = describeProperty(thisObj = global, name) || describeProperty(thisObj = window, name);
  let fn;

  if (info) {
    info = assign(createNullObj(), info); // currently only `document` and `window`

    if (fn = info.get) info.get = safeCall(bind, fn, thisObj); // currently only `location`

    if (fn = info.set) info.set = safeCall(bind, fn, thisObj);
    unforgeables[name] = info;
  } else {
    delete unforgeables[name];
  }
}

safeCall(forEach, [EventTarget, Object], src => {
  safeCall(forEach, getOwnPropertyNames(src[PROTO]), key => {
    inheritedKeys[key] = 1;
  });
});
/**
 * @desc Wrap helpers to prevent unexpected modifications.
 */

function makeGlobalWrapper(local) {
  const events = createNullObj();
  const readonlys = assign(createNullObj(), readonlyKeys);
  let globals = globalKeysSet; // will be copied only if modified

  /* Browsers may return [object Object] for Object.prototype.toString(window)
     on our `window` proxy so jQuery libs see it as a plain object and throw
     when trying to clone its recursive properties like `self` and `window`. */

  safeDefineProperty(local, toStringTagSym, {
    get: () => 'Window'
  });
  const wrapper = new ProxySafe(local, {
    __proto__: null,

    defineProperty(_, name, desc) {
      const isStr = isString(name);

      if (!isStr || !isFrameIndex(name)) {
        safeDefineProperty(local, name, desc);
        if (isStr) setEventHandler(name);
        delete readonlys[name];
      }

      return true;
    },

    deleteProperty(_, name) {
      if (!(name in unforgeables) && delete local[name]) {
        if (globals.has(name)) {
          if (globals === globalKeysSet) {
            globals = globalKeysSet.clone();
          }

          globals.delete(name);
        }

        return true;
      }
    },

    // Reducing "steppability" so it doesn't get in the way of debugging other parts of our code.
    // eslint-disable-next-line no-return-assign, no-nested-ternary
    get: (_, name) => name === 'undefined' || name === scopeSym ? undefined : (_ = local[name]) !== undefined || name in local ? _ : resolveProp(name, wrapper, globals, local),

    getOwnPropertyDescriptor(_, name) {
      const ownDesc = describeProperty(local, name);
      const desc = ownDesc || globals.has(name) && describeProperty(global, name);
      if (!desc) return;

      if (getOwnProp(desc, 'value') === window) {
        desc.value = wrapper;
      } // preventing spec violation - we must mirror an unknown unforgeable prop


      if (!ownDesc && !getOwnProp(desc, 'configurable')) {
        const get = getOwnProp(desc, 'get');
        if (get) desc.get = safeCall(bind, get, global);
        safeDefineProperty(local, name, desc);
      }

      return desc;
    },

    has: (_, name) => name in local || name in inheritedKeys || globals.has(name),
    ownKeys: () => makeOwnKeys(local, globals),

    preventExtensions() {},

    set(_, name, value) {
      const isStr = isString(name);
      let readonly = readonlys[name];

      if (readonly === 1) {
        readonly = globals.has(name) ? 2 : 0;
        readonlys[name] = readonly;
      }

      if (!readonly && (!isStr || !isFrameIndex(name))) {
        local[name] = value;
        if (isStr) setEventHandler(name, value, globals, events);
      }

      return true;
    }

  });

  for (const name in unforgeables) {
    /* proto is null */
    // eslint-disable-line guard-for-in
    const desc = unforgeables[name];

    if (name === 'window' || name === 'top' && IS_TOP) {
      delete desc.get;
      delete desc.set;
      desc.value = wrapper;
    }
    /* proto is already null */
    // eslint-disable-next-line no-restricted-syntax


    defineProperty(local, name, desc);
  }

  return wrapper;
}

function makeOwnKeys(local, globals) {
  /** Note that arrays can be eavesdropped via prototype setters like '0','1',...
   * on `push` and `arr[i] = 123`, as well as via getters if you read beyond
   * its length or from an unassigned `hole`. */
  const names = safeCall(filter, getOwnPropertyNames(local), notIncludedIn, globals);
  const symbols = safeCall(filter, getOwnPropertySymbols(local), notIncludedIn, globals);
  const frameIndexes = [];

  for (let i = 0, s; getObjectTypeTag(global[s = `${i}`]) === 'Window'; i += 1) {
    if (!(s in local)) {
      setOwnProp(frameIndexes, s, s);
    }
  }

  return Object(_util_web__WEBPACK_IMPORTED_MODULE_2__["safeConcat"])([], globals === globalKeysSet ? globalKeys : globals.toArray(), frameIndexes, names, symbols);
}

function resolveProp(name, wrapper, globals, local) {
  let value = boundMethods[name];

  if (value === MAYBE) {
    value = window[name];

    if (isFunction(value)) {
      value = safeCall(bind, value, window);
    }

    boundMethods[name] = value;
  }

  const canCopy = value || name in inheritedKeys || globals.has(name);

  if (!value && (canCopy || isString(name) && isFrameIndex(name))) {
    value = global[name];
  }

  if (value === window) {
    value = wrapper;
  }

  if (canCopy && (isFunction(value) || isObject(value) && name !== 'event' // window.event contains the current event so it's always different
  )) {
    local[name] = value;
  }

  return value;
}

function setEventHandler(name, value, globals, events) {
  // Spoofed String index getters won't be called within length, length itself is unforgeable
  if (name.length < 3 || name[0] !== 'o' || name[1] !== 'n' || !globals.has(name)) {
    return;
  }

  name = safeCall(slice, name, 2);
  safeCall(off, window, name, events[name]);

  if (isFunction(value)) {
    // the handler will be unique so that one script couldn't remove something global
    // like console.log set by another script
    safeCall(on, window, name, events[name] = safeCall(bind, value, window));
  } else {
    delete events[name];
  }
}
/** @this {FastLookup|Set} */


function notIncludedIn(key) {
  return !this.has(key);
}

/***/ }),

/***/ "./src/injected/web/gm-values.js":
/*!***************************************!*\
  !*** ./src/injected/web/gm-values.js ***!
  \***************************************/
/*! exports provided: changeHooks, loadValues, dumpValue, decodeValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHooks", function() { return changeHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadValues", function() { return loadValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dumpValue", function() { return dumpValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeValue", function() { return decodeValue; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/injected/web/store.js");

 // Nested objects: scriptId -> keyName -> listenerId -> GMValueChangeListener

const changeHooks = createNullObj();
const dataDecoders = {
  __proto__: null,
  o: jsonParse,
  n: val => +val,
  b: val => val === 'true'
};
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  UpdatedValues(updates) {
    const {
      partial
    } = updates;
    safeCall(forEach, objectKeys(updates), id => {
      const oldData = _store__WEBPACK_IMPORTED_MODULE_1__["default"].values[id];

      if (oldData) {
        const update = updates[id];
        const keyHooks = changeHooks[id];
        if (keyHooks) changedRemotely(keyHooks, oldData, update);
        if (partial) applyPartialUpdate(oldData, update);else _store__WEBPACK_IMPORTED_MODULE_1__["default"].values[id] = update;
      }
    });
  }

});
function loadValues(id) {
  return _store__WEBPACK_IMPORTED_MODULE_1__["default"].values[id];
}
function dumpValue(id, key, val, raw, oldRaw, context) {
  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('UpdateValue', {
    id,
    key,
    value: raw
  }, context);

  if (raw !== oldRaw) {
    var _changeHooks$id;

    const hooks = (_changeHooks$id = changeHooks[id]) == null ? void 0 : _changeHooks$id[key];
    if (hooks) notifyChange(hooks, key, val, raw, oldRaw);
  }
}
function decodeValue(raw) {
  const type = raw[0];
  const handle = dataDecoders[type];
  let val = safeCall(slice, raw, 1);

  try {
    if (handle) val = handle(val);
  } catch (e) {
    if (false) {}
  }

  return val;
}

function applyPartialUpdate(data, update) {
  safeCall(forEach, objectKeys(update), key => {
    const val = update[key];
    if (val) data[key] = val;else delete data[key];
  });
}

function changedRemotely(keyHooks, data, update) {
  safeCall(forEach, objectKeys(update), key => {
    const hooks = keyHooks[key];

    if (hooks) {
      let raw = update[key];
      if (!raw) raw = undefined; // partial `update` currently uses null for deleted values

      const oldRaw = data[key];

      if (oldRaw !== raw) {
        data[key] = raw; // will be deleted later in applyPartialUpdate if empty

        notifyChange(hooks, key, undefined, raw, oldRaw, true);
      }
    }
  });
}

function notifyChange(hooks, key, val, raw, oldRaw, remote = false) {
  // converting `null` from messaging to `undefined` to match the documentation and TM
  const oldVal = (oldRaw || undefined) && decodeValue(oldRaw);
  const newVal = val === undefined && raw ? decodeValue(raw) : val;
  safeCall(forEach, objectValues(hooks), fn => {
    try {
      fn(key, oldVal, newVal, remote);
    } catch (e) {
      log('error', ['GM_addValueChangeListener', 'callback'], e);
    }
  });
}

/***/ }),

/***/ "./src/injected/web/index.js":
/*!***********************************!*\
  !*** ./src/injected/web/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initialize; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/injected/web/store.js");
/* harmony import */ var _gm_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gm-api-wrapper */ "./src/injected/web/gm-api-wrapper.js");
/* harmony import */ var _gm_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gm-values */ "./src/injected/web/gm-values.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications */ "./src/injected/web/notifications.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requests */ "./src/injected/web/requests.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs */ "./src/injected/web/tabs.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./src/injected/util/index.js");







 // Make sure to call safe::methods() in code that may run after userscripts

const sendSetTimeout = () => _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].send('SetTimeout', 0); // Waiting for injection of content mode scripts that don't run on document-start


let resolvers;
let waiters;
function initialize(webId, contentId, invokeHost) {
  let invokeGuest;

  if (__HANDSHAKE_ID__) {
    safeCall(on, window, __HANDSHAKE_ID__ + 1, e => {
      e = safeCall(getDetail, e);
      webId = e[0];
      contentId = e[1];
    }, {
      __proto__: null,
      once: true,
      capture: true
    });
    safeCall(fire, window, new CustomEventSafe(__HANDSHAKE_ID__));
  }

  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].dataKey = contentId;

  if (invokeHost) {
    resolvers = createNullObj();
    waiters = createNullObj();
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].mode = _util__WEBPACK_IMPORTED_MODULE_7__["INJECT_CONTENT"];

    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post = (cmd, data, context, node) => {
      invokeHost({
        cmd,
        data,
        node,
        dataKey: (context || _bridge__WEBPACK_IMPORTED_MODULE_0__["default"]).dataKey
      }, _util__WEBPACK_IMPORTED_MODULE_7__["INJECT_CONTENT"]);
    };

    invokeGuest = (cmd, data, realm, node) => {
      if (false) {}
      _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].onHandle({
        cmd,
        data,
        node
      });
    };

    global.chrome = undefined;
    global.browser = undefined;
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
      RunAt: name => resolvers[name]()
    });
  } else {
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].mode = _util__WEBPACK_IMPORTED_MODULE_7__["INJECT_PAGE"];
    Object(_util__WEBPACK_IMPORTED_MODULE_7__["bindEvents"])(webId, contentId, _bridge__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
      /** @this {Node} contentWindow */
      WriteVault(id) {
        this[id] = VAULT;
      }

    });
  }

  return invokeGuest;
}
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  Command({
    id,
    cap,
    evt
  }) {
    const constructor = evt.key ? KeyboardEventSafe : MouseEventSafe;
    const fn = _store__WEBPACK_IMPORTED_MODULE_1__["default"].commands[`${id}:${cap}`];
    if (fn) fn(new constructor(evt.type, evt));
  },

  /** @this {Node} */
  Callback({
    id,
    data
  }) {
    const fn = _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].callbacks[id];
    delete _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].callbacks[id];
    if (fn) safeCall(fn, this, data);
  },

  ScriptData({
    info,
    items,
    runAt
  }) {
    if (info) {
      assign(_bridge__WEBPACK_IMPORTED_MODULE_0__["default"], info);
    }

    if (items) {
      if (waiters && runAt !== 'start') {
        waiters[runAt] = new PromiseSafe(resolve => {
          resolvers[runAt] = resolve;
        });
      }

      safeCall(forEach, items, createScriptData); // FF bug workaround to enable processing of sourceURL in injected page scripts

      if (IS_FIREFOX && _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].mode === _util__WEBPACK_IMPORTED_MODULE_7__["INJECT_PAGE"]) {
        _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('InjectList', runAt);
      }
    }
  },

  Expose() {
    window.external.Violentmonkey = {
      version: "2.13.0.12",
      isInstalled: (name, namespace) => _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].send('GetScriptVer', {
        meta: {
          name,
          namespace
        }
      })
    };
  }

});

function createScriptData(item) {
  const {
    dataKey
  } = item;
  _store__WEBPACK_IMPORTED_MODULE_1__["default"].values[item.props.id] = item.values || createNullObj();

  if (window[dataKey]) {
    // executeScript ran before GetInjected response
    onCodeSet(item, window[dataKey]);
  } else {
    safeDefineProperty(window, dataKey, {
      configurable: true,
      set: fn => onCodeSet(item, fn)
    });
  }
}

async function onCodeSet(item, fn) {
  var _waiters;

  const {
    dataKey,
    stage
  } = item; // deleting now to prevent interception via DOMNodeRemoved on el::remove()

  delete window[dataKey];

  if (false) {}

  const run = () => {
    _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('Run', item.props.id, item);
    safeCall(fn, Object(_gm_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["makeGmApiWrapper"])(item), logging.error);
  };

  const el = safeCall(getCurrentScript, document);
  const wait = (_waiters = waiters) == null ? void 0 : _waiters[stage];
  if (el) safeCall(remove, el);

  if (wait) {
    waiters[stage] = safeCall(then, stage === 'idle' ? safeCall(then, wait, sendSetTimeout) : wait, run);
  } else {
    run();
  }
}

/***/ }),

/***/ "./src/injected/web/notifications.js":
/*!*******************************************!*\
  !*** ./src/injected/web/notifications.js ***!
  \*******************************************/
/*! exports provided: onNotificationCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNotificationCreate", function() { return onNotificationCreate; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");

let lastId = 0;
const notifications = createNullObj();
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  NotificationClicked(id) {
    var _notifications$id;

    const fn = (_notifications$id = notifications[id]) == null ? void 0 : _notifications$id.onclick;
    if (fn) fn();
  },

  NotificationClosed(id) {
    const options = notifications[id];

    if (options) {
      delete notifications[id];
      const fn = options.ondone;
      if (fn) fn();
    }
  }

});
function onNotificationCreate(options, context) {
  lastId += 1;
  notifications[lastId] = options;
  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('Notification', {
    id: lastId,
    text: options.text,
    title: options.title,
    image: options.image
  }, context);
  return lastId;
}

/***/ }),

/***/ "./src/injected/web/requests.js":
/*!**************************************!*\
  !*** ./src/injected/web/requests.js ***!
  \**************************************/
/*! exports provided: onRequestCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRequestCreate", function() { return onRequestCreate; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");

const idMap = createNullObj();
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  HttpRequested(msg) {
    const req = idMap[msg.id];
    if (req) callback(req, msg);
  }

});
function onRequestCreate(opts, context, fileName) {
  if (!opts.url) throw new ErrorSafe('Required parameter "url" is missing.');
  const scriptId = context.id;
  const id = getUniqIdSafe(`VMxhr${scriptId}`);
  const req = {
    __proto__: null,
    id,
    scriptId,
    opts
  };
  start(req, context, fileName);
  return {
    abort() {
      _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('AbortRequest', id, context);
    }

  };
}

function parseData(req, msg) {
  let res = req.raw;

  switch (req.opts.responseType) {
    case 'json':
      res = jsonParse(res);
      break;

    case 'document':
      res = safeCall(parseFromString, new DOMParserSafe(), res, // Cutting everything after , or ; and trimming whitespace
      safeCall(regexpReplace, /[,;].*|\s+/g, msg.contentType, '') || 'text/html');
      break;

    default:
  } // `response` is sent only when changed so we need to remember it for response-less events


  req.response = res; // `raw` is decoded once per `response` change so we reuse the result just like native XHR

  delete req.raw;
  return res;
} // request object functions


function callback(req, msg) {
  const {
    opts
  } = req;
  const cb = opts[`on${msg.type}`];

  if (cb) {
    const {
      data,
      downloadId
    } = msg;

    if (downloadId) {
      cb(msg);
      if (msg.type === 'load') delete idMap[req.id];
      return;
    }

    const {
      response,
      responseHeaders: headers,
      responseText: text
    } = data;

    if (response && !('raw' in req)) {
      req.raw = response;
    }

    defineProperty(data, 'response', {
      __proto__: null,

      get() {
        const value = 'raw' in req ? parseData(req, msg) : req.response;
        defineProperty(this, 'response', {
          __proto__: null,
          value
        });
        return value;
      }

    });
    if (headers != null) req.headers = headers;
    if (text != null) req.text = getOwnProp(text, 0) === 'same' ? response : text;
    setOwnProp(data, 'context', opts.context);
    setOwnProp(data, 'responseHeaders', req.headers);
    setOwnProp(data, 'responseText', req.text);
    cb(data);
  }

  if (msg.type === 'loadend') delete idMap[req.id];
}

async function start(req, context, fileName) {
  const {
    id,
    opts,
    scriptId
  } = req; // withCredentials is for GM4 compatibility and used only if `anonymous` is not set,
  // it's true by default per the standard/historical behavior of gmxhr

  const {
    data,
    withCredentials = true,
    anonymous = !withCredentials
  } = opts;
  idMap[id] = req;
  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('HttpRequest', safeCall(pickIntoThis, {
    __proto__: null,
    id,
    scriptId,
    anonymous,
    fileName,
    data: data == null && [] // `binary` is for TM/GM-compatibility + non-objects = must use a string `data`
    || (opts.binary || !isObject(data)) && [`${data}`] // FF56+ can send any cloneable data directly, FF52-55 can't due to https://bugzil.la/1371246
    || IS_FIREFOX && _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].ua.browserVersion >= 56 && [data] // TODO: support huge data by splitting it to multiple messages
    || (await encodeBody(data)),
    eventsToNotify: safeCall(filter, ['abort', 'error', 'load', 'loadend', 'loadstart', 'progress', 'readystatechange', 'timeout'], key => isFunction(getOwnProp(opts, `on${key}`))),
    xhrType: getResponseType(opts.responseType)
  }, opts, ['headers', 'method', 'overrideMimeType', 'password', 'timeout', 'url', 'user']), context);
}

function getResponseType({
  responseType = ''
}) {
  switch (responseType) {
    case 'arraybuffer':
    case 'blob':
      return responseType;

    case 'document':
    case 'json':
    case 'text':
    case '':
      break;

    default:
      log('warn', null, `Unknown responseType "${responseType}",` + ' see https://violentmonkey.github.io/api/gm/#gm_xmlhttprequest for more detail.');
  }

  return '';
}
/**
 * Polyfill for Chrome's inability to send complex types over extension messaging.
 * We're encoding the body here, not in content, because we want to support FormData
 * and ReadableStream, which Chrome can't transfer to isolated world via CustomEvent.
 */


async function encodeBody(body) {
  const wasBlob = getObjectTypeTag(body) === 'Blob';
  const blob = wasBlob ? body : await safeCall(safeResponseBlob, new ResponseSafe(body));
  const reader = new FileReaderSafe();
  return new PromiseSafe(resolve => {
    safeCall(on, reader, 'load', () => resolve([safeCall(getReaderResult, reader), safeCall(getBlobType, blob), wasBlob]));
    safeCall(readAsDataURL, reader, blob);
  });
}

/***/ }),

/***/ "./src/injected/web/store.js":
/*!***********************************!*\
  !*** ./src/injected/web/store.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  __proto__: null,
  commands: createNullObj(),
  values: createNullObj()
});

/***/ }),

/***/ "./src/injected/web/tabs.js":
/*!**********************************!*\
  !*** ./src/injected/web/tabs.js ***!
  \**********************************/
/*! exports provided: onTabCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onTabCreate", function() { return onTabCreate; });
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");

let lastId = 0;
const tabs = createNullObj();
_bridge__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlers({
  TabClosed(key) {
    const item = tabs[key];

    if (item) {
      item.closed = true;
      delete tabs[key];
      const fn = item.onclose;
      if (fn) fn();
    }
  }

});
function onTabCreate(data, context) {
  lastId += 1;
  const key = lastId;
  const item = {
    onclose: null,
    closed: false,

    close() {
      _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('TabClose', key, context);
    }

  };
  tabs[key] = item;
  _bridge__WEBPACK_IMPORTED_MODULE_0__["default"].post('TabOpen', {
    key,
    data
  }, context);
  return item;
}

/***/ }),

/***/ "./src/injected/web/util-web.js":
/*!**************************************!*\
  !*** ./src/injected/web/util-web.js ***!
  \**************************************/
/*! exports provided: safeConcat, jsonDump, FastLookup, makeComponentUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeConcat", function() { return safeConcat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonDump", function() { return jsonDump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastLookup", function() { return FastLookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeComponentUtils", function() { return makeComponentUtils; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/injected/util/index.js");
/* harmony import */ var _bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bridge */ "./src/injected/web/bridge.js");


const isConcatSpreadableSym = SymbolSafe.isConcatSpreadable;
const safeConcat = (dest, ...arrays) => {
  if (!dest[isConcatSpreadableSym]) {
    setOwnProp(dest, isConcatSpreadableSym, true);
    safeCall(forEach, arrays, arr => setOwnProp(arr, isConcatSpreadableSym, true));
  }

  return safeCall(apply, concat, dest, arrays);
}; // Reference: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON#Polyfill

const escMap = {
  __proto__: null,
  '"': '\\"',
  '\\': '\\\\',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t'
}; // TODO: handle \u2028\u2029 when Chrome's JSON.stringify starts to escape them

const escRE = /[\\"\u0000-\u001F]/g; // eslint-disable-line no-control-regex

const hex = '0123456789ABCDEF';

const escCharCode = num => `\\u00${hex[num >> 4] // eslint-disable-line no-bitwise
}${hex[num % 16]}`;

const escFunc = m => escMap[m] || escCharCode(safeCall(charCodeAt, m, 0));
/**
 * When running in the page context we must beware of sites that override Array#toJSON
 * leading to an invalid result, which is why our jsonDump() ignores toJSON.
 * Thus, we use the native JSON.stringify() only in the content script context and only until
 * a userscript is injected into this context (due to `@inject-into` and/or a CSP problem).
 */


const jsonDump = (value, stack) => {
  let res;

  switch (value === null ? res = 'null' : typeof value) {
    case 'bigint':
    case 'number':
      res = safeIsFinite(value) ? `${value}` : 'null';
      break;

    case 'boolean':
      res = `${value}`;
      break;

    case 'string':
      res = `"${safeCall(regexpReplace, escRE, value, escFunc)}"`;
      break;

    case 'object':
      if (!stack) {
        stack = [value]; // Creating the array here, only when type is object.
      } else if (safeCall(indexOf, stack, value) >= 0) {
        throw new ErrorSafe('Converting circular structure to JSON');
      } else {
        setOwnProp(stack, stack.length, value);
      }

      if (ArrayIsArray(value)) {
        res = '['; // Must enumerate all values to include holes in sparse arrays

        for (let i = 0, len = value.length; i < len; i += 1) {
          var _jsonDump;

          res += `${i ? ',' : ''}${(_jsonDump = jsonDump(value[i], stack)) != null ? _jsonDump : 'null'}`;
        }

        res += ']';
      } else {
        res = '{';
        safeCall(forEach, objectKeys(value), key => {
          const v = jsonDump(value[key], stack); // JSON.stringify skips keys with `undefined` or incompatible values

          if (v !== undefined) {
            res += `${res.length > 1 ? ',' : ''}${jsonDump(key)}:${v}`;
          }
        });
        res += '}';
      }

      stack.length -= 1;
      break;

    default:
  }

  return res;
};
/**
 * 2x faster than `Set`, 5x faster than flat object
 * @param {Object} [hubs]
 */

const FastLookup = (hubs = createNullObj()) => {
  /** @namespace FastLookup */
  return {
    add(val) {
      getHub(val, true)[val] = true;
    },

    clone() {
      const clone = createNullObj();

      for (const group in hubs) {
        /* proto is null */
        // eslint-disable-line guard-for-in
        clone[group] = assign(createNullObj(), hubs[group]);
      }

      return FastLookup(clone);
    },

    delete(val) {
      var _getHub;

      (_getHub = getHub(val)) == null ? true : delete _getHub[val];
    },

    has: val => {
      var _getHub2;

      return (_getHub2 = getHub(val)) == null ? void 0 : _getHub2[val];
    },
    toArray: () => {
      const values = objectValues(hubs);
      safeCall(forEach, values, (val, i) => {
        values[i] = objectKeys(val);
      });
      return safeConcat([], values);
    }
  };

  function getHub(val, autoCreate) {
    const group = val.length ? val[0] : ''; // length is unforgeable, index getters aren't

    const hub = hubs[group] || (autoCreate ? hubs[group] = createNullObj() : null);
    return hub;
  }
};
/**
 * Adding the polyfills in Chrome (always as it doesn't provide them)
 * and in Firefox page mode (while preserving the native ones in content mode)
 * for compatibility with many [old] scripts that use these utils blindly
 */

const makeComponentUtils = () => {
  const CLONE_INTO = 'cloneInto';
  const CREATE_OBJECT_IN = 'createObjectIn';
  const EXPORT_FUNCTION = 'exportFunction';
  const src = IS_FIREFOX && _bridge__WEBPACK_IMPORTED_MODULE_1__["default"].mode === _util__WEBPACK_IMPORTED_MODULE_0__["INJECT_CONTENT"] && global;

  const defineIn = !src && ((target, as, val) => {
    if (as && (as = getOwnProp(as, 'defineAs'))) {
      setOwnProp(target, as, val);
    }

    return val;
  });

  return {
    [CLONE_INTO]: src && src[CLONE_INTO] || (obj => obj),
    [CREATE_OBJECT_IN]: src && src[CREATE_OBJECT_IN] || ((target, as) => defineIn(target, as, {})),
    [EXPORT_FUNCTION]: src && src[EXPORT_FUNCTION] || ((func, target, as) => defineIn(target, as, func))
  };
};

/***/ })

/******/ });
          const { exports } = module;
          return exports.__esModule ? exports.default : exports;
        };0;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL3dlYi9icmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL3dlYi9nbS1hcGktd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvd2ViL2dtLWFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvd2ViL2dtLWdsb2JhbC13cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC93ZWIvZ20tdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC93ZWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL3dlYi9ub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmplY3RlZC93ZWIvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL3dlYi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5qZWN0ZWQvd2ViL3RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luamVjdGVkL3dlYi91dGlsLXdlYi5qcyJdLCJuYW1lcyI6WyJJU19ERVYiLCJLRVlfR0xPQkFMX0lEIiwiQlVJTERfSU5fU0NSSVBUX1NSQyIsIklOSkVDVF9BVVRPIiwiSU5KRUNUX1BBR0UiLCJJTkpFQ1RfQ09OVEVOVCIsIklOSkVDVF9NQVBQSU5HIiwiX19wcm90b19fIiwiQ01EX1NDUklQVF9BREQiLCJDTURfU0NSSVBUX1VQREFURSIsIk1FVEFCTE9DS19SRSIsIklOSkVDVEFCTEVfVEFCX1VSTF9SRSIsImJyb3dzZXIiLCJnbG9iYWwiLCJUSU1FT1VUX01BWCIsIlRJTUVPVVRfSE9VUiIsIlRJTUVPVVRfMjRIT1VSUyIsIlRJTUVPVVRfV0VFSyIsImRlZmF1bHRJbWFnZSIsImluaXRIb29rcyIsImhvb2tzIiwiZmlyZSIsImRhdGEiLCJzbGljZSIsImZvckVhY2giLCJjYiIsImhvb2siLCJjYWxsYmFjayIsInB1c2giLCJpIiwiaW5kZXhPZiIsInNwbGljZSIsInNlbmRDbWQiLCJjbWQiLCJvcHRpb25zIiwic2VuZE1lc3NhZ2UiLCJDT01NQU5EU19XSVRIX1NSQyIsImdldEJnUGFnZSIsImV4dGVuc2lvbiIsImdldEJhY2tncm91bmRQYWdlIiwic2VuZENtZERpcmVjdGx5IiwiYmciLCJpbmNsdWRlcyIsIndpbmRvdyIsImRlZXBDb3B5IiwiaGFuZGxlQ29tbWFuZE1lc3NhZ2UiLCJ0aGVuIiwic2VuZFRhYkNtZCIsInRhYklkIiwidGFicyIsImNhdGNoIiwibm9vcCIsInBheWxvYWQiLCJyZXRyeSIsInNlbmRNZXNzYWdlUmV0cnkiLCJwcm9taXNlIiwicnVudGltZSIsInJldHJpZXMiLCJwYXVzZUR1cmF0aW9uIiwiZSIsIm1ha2VQYXVzZSIsIkVycm9yIiwibGVmdHBhZCIsImlucHV0IiwibGVuZ3RoIiwicGFkIiwibnVtIiwidG9TdHJpbmciLCJnZXRMb2NhbGVTdHJpbmciLCJtZXRhIiwia2V5IiwibG9jYWxlTWV0YSIsIm5hdmlnYXRvciIsImxhbmd1YWdlcyIsIm1hcCIsImxhbmciLCJ0b0xvd2VyQ2FzZSIsImZpbmQiLCJCb29sZWFuIiwiZ2V0U2NyaXB0TmFtZSIsInNjcmlwdCIsImN1c3RvbSIsIm5hbWUiLCJwcm9wcyIsImlkIiwiaTE4biIsImdldEZ1bGxVcmwiLCJ1cmwiLCJiYXNlIiwib2JqIiwiVVJMIiwicHJvdG9jb2wiLCJocmVmIiwiZW5jb2RlRmlsZW5hbWUiLCJyZXBsYWNlIiwibSIsImNvZGUiLCJjaGFyQ29kZUF0IiwiZGVjb2RlRmlsZW5hbWUiLCJmaWxlbmFtZSIsIl9tIiwiZyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwiZ2V0QWN0aXZlVGFiIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93Iiwid2luZG93SWQiLCJ3aW5kb3dzIiwiZ2V0Q3VycmVudCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidHJ1ZUpvaW4iLCJzZXBhcmF0b3IiLCJmaWx0ZXIiLCJqb2luIiwibm9ybWFsaXplS2V5cyIsIkFycmF5IiwiaXNBcnJheSIsInNwbGl0Iiwib2JqZWN0R2V0IiwicmF3S2V5IiwiZGVmIiwia2V5cyIsInJlcyIsImV2ZXJ5Iiwib2JqZWN0U2V0IiwidmFsIiwicm9vdCIsInN1YiIsImxhc3RLZXkiLCJwb3AiLCJvYmplY3RQaWNrIiwidHJhbnNmb3JtIiwicmVkdWNlIiwidmFsdWUiLCJtYXBFbnRyeSIsImZ1bmMiLCJPYmplY3QiLCJlbnRyaWVzIiwiZW50cnkiLCJhbGxFbnRyaWVzIiwiZm9yRWFjaEVudHJ5IiwiZm9yRWFjaEtleSIsImZvckVhY2hWYWx1ZSIsInZhbHVlcyIsInNyYyIsImRlZXBFcXVhbCIsImEiLCJiIiwiaXRlbSIsImtleXNBIiwia2V5c0IiLCJhcmdzIiwiZ2V0TWVzc2FnZSIsInBhcmFtIiwibWVtb2l6ZSIsInJlc29sdmVyIiwiY2FjaGVNYXAiLCJtZW1vaXplZCIsImNhY2hlIiwiYXBwbHkiLCJkZWJvdW5jZSIsInRpbWUiLCJzdGFydFRpbWUiLCJ0aW1lciIsIk1hdGgiLCJtYXgiLCJjaGVja1RpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNoZWNrVGltZXIiLCJkZWx0YSIsImRlYm91bmNlZEZ1bmN0aW9uIiwidGhyb3R0bGUiLCJsYXN0VGltZSIsInRocm90dGxlZEZ1bmN0aW9uIiwiZ2V0VW5pcUlkIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJidWZmZXIyc3RyaW5nIiwiYnVmIiwib2Zmc2V0Iiwic2xpY2VTaXplIiwic2xpY2VzIiwiYXJyYXlMZW4iLCJlbmQiLCJtaW4iLCJieXRlTGVuZ3RoIiwibmVlZHNTbGljaW5nIiwiVWludDhBcnJheSIsImJsb2IyYmFzZTY0IiwiYmxvYiIsInNpemUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsInN0cmluZzJ1aW50OGFycmF5Iiwic3RyIiwibGVuIiwiYXJyYXkiLCJWRVJTSU9OX1JFIiwiRElHSVRTX1JFIiwiY29tcGFyZVZlcnNpb24iLCJ2ZXIxIiwidmVyMiIsIm1haW4xIiwicHJlMSIsImV4ZWMiLCJtYWluMiIsInByZTIiLCJjb21wYXJlVmVyc2lvbkNodW5rIiwiaXNTZW12ZXJNb2RlIiwicGFydHMxIiwicGFydHMyIiwibGVuMSIsImxlbjIiLCJ0ZXN0IiwidW5pdHMiLCJmb3JtYXRUaW1lIiwiZHVyYXRpb24iLCJ1bml0SW5mbyIsInN0ZXAiLCJmb3JtYXRCeXRlTGVuZ3RoIiwidG9GaXhlZCIsImlzRW1wdHkiLCJoYXNPd25Qcm9wZXJ0eSIsImVuc3VyZUFycmF5IiwiYmluYXJ5VHlwZXMiLCJyZXF1ZXN0TG9jYWxGaWxlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJyZXNwb25zZVR5cGUiLCJvcGVuIiwic3RhdHVzIiwicmVzcG9uc2UiLCJyZXNwb25zZVRleHQiLCJKU09OIiwicGFyc2UiLCJvbmVycm9yIiwic2VuZCIsIkZPUkNFRF9BQ0NFUFQiLCJpc1JlbW90ZSIsInJlcXVlc3QiLCJzdGFydHNXaXRoIiwiYm9keSIsImhlYWRlcnMiLCJpc0JvZHlPYmoiLCJob3N0bmFtZSIsImFjY2VwdCIsImluaXQiLCJhc3NpZ24iLCJ1bmRlZmluZWQiLCJzdHJpbmdpZnkiLCJyZXNwIiwiZmV0Y2giLCJsb2FkTWV0aG9kIiwiYXJyYXlidWZmZXIiLCJqc29uIiwiU0lNUExFX1ZBTFVFX1RZUEUiLCJzdHJpbmciLCJudW1iZXIiLCJib29sZWFuIiwiZHVtcFNjcmlwdFZhbHVlIiwianNvbkR1bXAiLCJzaW1wbGUiLCJmaXJlQnJpZGdlRXZlbnQiLCJldmVudElkIiwibXNnIiwiY2xvbmVJbnRvIiwiZGV0YWlsIiwiZG9jdW1lbnQiLCJldnRNYWluIiwiQ3VzdG9tRXZlbnRTYWZlIiwiYmluZEV2ZW50cyIsInNyY0lkIiwiZGVzdElkIiwiYnJpZGdlIiwiaW5jb21pbmdOb2RlRXZlbnQiLCJvbiIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInByb2Nlc3MiLCJnZXREZXRhaWwiLCJub2RlIiwib25IYW5kbGUiLCJnZXRSZWxhdGVkVGFyZ2V0IiwicG9zdCIsImRhdGFLZXkiLCJldnROb2RlIiwiTW91c2VFdmVudFNhZmUiLCJyZWxhdGVkVGFyZ2V0IiwiaGFuZGxlcnMiLCJjcmVhdGVOdWxsT2JqIiwiY2FsbGJhY2tzIiwiYWRkSGFuZGxlcnMiLCJmbiIsImNvbnRleHQiLCJQcm9taXNlU2FmZSIsInBvc3RXaXRoQ2FsbGJhY2siLCJzeW5jQ2FsbCIsImN1c3RvbUNhbGxiYWNrSWQiLCJnZXRVbmlxSWRTYWZlIiwic2V0T3duUHJvcCIsIkNBTExCQUNLX0lEIiwiR000X0FMSUFTIiwiZ2V0UmVzb3VyY2VVcmwiLCJ4bWxIdHRwUmVxdWVzdCIsIkdNNF9BU1lOQyIsImdldFZhbHVlIiwiZGVsZXRlVmFsdWUiLCJzZXRWYWx1ZSIsImxpc3RWYWx1ZXMiLCJnbUFwaSIsImNvbXBvbmVudFV0aWxzIiwibWFrZUdtQXBpV3JhcHBlciIsImdyYW50IiwicmVzb3VyY2VzIiwicmVzQ2FjaGUiLCJnbUluZm8iLCJtYWtlR21JbmZvIiwiZ20iLCJHTSIsImluZm8iLCJHTV9pbmZvIiwidW5zYWZlV2luZG93IiwibWFrZUNvbXBvbmVudFV0aWxzIiwiV0lORE9XX0NMT1NFIiwiY2xvc2UiLCJ2bU93bkZ1bmMiLCJXSU5ET1dfRk9DVVMiLCJmb2N1cyIsIm1ha2VHbUFwaSIsImdtNG5hbWUiLCJtYWtlR21NZXRob2RDYWxsZXIiLCJtYWtlR2xvYmFsV3JhcHBlciIsIm1ldGFDb3B5Iiwib2JqZWN0S2V5cyIsInNhZmVDb25jYXQiLCJ1bndyYXAiLCJ1dWlkIiwic2NyaXB0TWV0YVN0ciIsIm1ldGFTdHIiLCJzY3JpcHRXaWxsVXBkYXRlIiwiY29uZmlnIiwic2hvdWxkVXBkYXRlIiwic2NyaXB0SGFuZGxlciIsInZlcnNpb24iLCJpbmplY3RJbnRvIiwibW9kZSIsInBsYXRmb3JtIiwidWEiLCJnbU1ldGhvZCIsImlzQXN5bmMiLCJHTV9sb2ciLCJiaW5kIiwiR01fYWRkR2xvYmFsTGlzdGVuZXIiLCJhZGRMaXN0ZW5lciIsIkdNX3JlbW92ZUdsb2JhbExpc3RlbmVyIiwibGlzdGVuZXJJZCIsInJlbW92ZUxpc3RlbmVyIiwiR01fc2VuZEdsb2JhbEV2ZW50IiwiZXZlbnQiLCJjaGFuZ2VIb29rcyIsIm9iamVjdFZhbHVlcyIsImxvZyIsIkdNX3JlZ0ZuIiwiR01faW52b2tlRm4iLCJhcmciLCJHTV9kZWxldGVWYWx1ZSIsImxvYWRWYWx1ZXMiLCJvbGRSYXciLCJkdW1wVmFsdWUiLCJHTV9nZXRWYWx1ZSIsInJhdyIsImRlY29kZVZhbHVlIiwiR01fbGlzdFZhbHVlcyIsIkdNX3NldFZhbHVlIiwiR01fYWRkVmFsdWVDaGFuZ2VMaXN0ZW5lciIsIkdNX3JlbW92ZVZhbHVlQ2hhbmdlTGlzdGVuZXIiLCJHTV9nZXRSZXNvdXJjZVRleHQiLCJnZXRSZXNvdXJjZSIsIkdNX2dldFJlc291cmNlVVJMIiwiR01fcmVnaXN0ZXJNZW51Q29tbWFuZCIsImNhcCIsInN0b3JlIiwiY29tbWFuZHMiLCJHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQiLCJHTV9kb3dubG9hZCIsImFyZzEiLCJvcHRzIiwiaXNTdHJpbmciLCJwaWNrSW50b1RoaXMiLCJFcnJvclNhZmUiLCJtZXRob2QiLCJvdmVycmlkZU1pbWVUeXBlIiwiaXNGdW5jdGlvbiIsIm9uUmVxdWVzdENyZWF0ZSIsIkdNX3htbGh0dHBSZXF1ZXN0IiwiR01fYWRkRWxlbWVudCIsInBhcmVudCIsInRhZyIsImF0dHJpYnV0ZXMiLCJ3ZWJBZGRFbGVtZW50IiwiR01fYWRkU3R5bGUiLCJjc3MiLCJ0ZXh0Q29udGVudCIsIkdNX29wZW5JblRhYiIsIm9uVGFiQ3JlYXRlIiwiaXNPYmplY3QiLCJHTV9ub3RpZmljYXRpb24iLCJ0ZXh0IiwidGl0bGUiLCJpbWFnZSIsIm9uY2xpY2siLCJvbk5vdGlmaWNhdGlvbkNyZWF0ZSIsInJlbW92ZSIsIkdNX3NldENsaXBib2FyZCIsInR5cGUiLCJsb2dnaW5nIiwiZW5zdXJlTmVzdGVkUHJvcCIsImtleUhvb2tzIiwiYXR0cnMiLCJlbCIsImVycm9ySW5mbyIsIl8iLCJlcnIiLCJzdGFjayIsImlzQmxvYiIsImNyZWF0ZU9iamVjdFVSTCIsImlzRnJhbWVJbmRleCIsInNjb3BlU3ltIiwiU3ltYm9sU2FmZSIsInVuc2NvcGFibGVzIiwiZ2xvYmFsS2V5c1NldCIsIkZhc3RMb29rdXAiLCJnbG9iYWxLZXlzIiwibWFrZUdsb2JhbEtleXMiLCJrV3JhcHBlZEpTT2JqZWN0IiwibmFtZXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2siLCJJU19GSVJFRk9YIiwiYWRkIiwiaGFzIiwidG9BcnJheSIsImluaGVyaXRlZEtleXMiLCJyZWFkb25seUtleXMiLCJhcHBsaWNhdGlvbkNhY2hlIiwiY2FjaGVzIiwiY2xvc2VkIiwiY3Jvc3NPcmlnaW5Jc29sYXRlZCIsImNyeXB0byIsImN1c3RvbUVsZW1lbnRzIiwiZnJhbWVFbGVtZW50IiwiaGlzdG9yeSIsImluZGV4ZWREQiIsImlzU2VjdXJlQ29udGV4dCIsImxvY2FsU3RvcmFnZSIsIm1veklubmVyU2NyZWVuWCIsIm1veklubmVyU2NyZWVuWSIsInNlc3Npb25TdG9yYWdlIiwic3BlZWNoU3ludGhlc2lzIiwic3R5bGVNZWRpYSIsInRydXN0ZWRUeXBlcyIsInVuZm9yZ2VhYmxlcyIsIkluZmluaXR5IiwiTmFOIiwibG9jYXRpb24iLCJ0b3AiLCJNQVlCRSIsImJvdW5kTWV0aG9kcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGVydCIsImF0b2JTYWZlIiwiYmx1ciIsImJ0b2EiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbmNlbElkbGVDYWxsYmFjayIsImNhcHR1cmVFdmVudHMiLCJjbGVhckludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwiY29uZmlybSIsImNyZWF0ZUltYWdlQml0bWFwIiwiZGlzcGF0Y2hFdmVudCIsImR1bXAiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUiLCJnZXRTZWxlY3Rpb24iLCJtYXRjaE1lZGlhIiwibW92ZUJ5IiwibW92ZVRvIiwib3BlbkRhdGFiYXNlIiwicG9zdE1lc3NhZ2UiLCJwcmludCIsInByb21wdCIsInF1ZXVlTWljcm90YXNrIiwicmVsZWFzZUV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwicmVzaXplQnkiLCJyZXNpemVUbyIsInNjcm9sbCIsInNjcm9sbEJ5Iiwic2Nyb2xsQnlMaW5lcyIsInNjcm9sbEJ5UGFnZXMiLCJzY3JvbGxUbyIsInNldEludGVydmFsIiwic2V0UmVzaXphYmxlIiwic2l6ZVRvQ29udGVudCIsInN0b3AiLCJ1cGRhdGVDb21tYW5kcyIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0iLCJ3ZWJraXRSZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMIiwidGhpc09iaiIsImRlc2NyaWJlUHJvcGVydHkiLCJnZXQiLCJzZXQiLCJFdmVudFRhcmdldCIsIlBST1RPIiwibG9jYWwiLCJldmVudHMiLCJyZWFkb25seXMiLCJnbG9iYWxzIiwic2FmZURlZmluZVByb3BlcnR5IiwidG9TdHJpbmdUYWdTeW0iLCJ3cmFwcGVyIiwiUHJveHlTYWZlIiwiZGVmaW5lUHJvcGVydHkiLCJkZXNjIiwiaXNTdHIiLCJzZXRFdmVudEhhbmRsZXIiLCJkZWxldGVQcm9wZXJ0eSIsImNsb25lIiwiZGVsZXRlIiwicmVzb2x2ZVByb3AiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJvd25EZXNjIiwiZ2V0T3duUHJvcCIsIm93bktleXMiLCJtYWtlT3duS2V5cyIsInByZXZlbnRFeHRlbnNpb25zIiwicmVhZG9ubHkiLCJJU19UT1AiLCJub3RJbmNsdWRlZEluIiwic3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZyYW1lSW5kZXhlcyIsInMiLCJnZXRPYmplY3RUeXBlVGFnIiwiY2FuQ29weSIsIm9mZiIsImRhdGFEZWNvZGVycyIsIm8iLCJqc29uUGFyc2UiLCJuIiwiVXBkYXRlZFZhbHVlcyIsInVwZGF0ZXMiLCJwYXJ0aWFsIiwib2xkRGF0YSIsInVwZGF0ZSIsImNoYW5nZWRSZW1vdGVseSIsImFwcGx5UGFydGlhbFVwZGF0ZSIsIm5vdGlmeUNoYW5nZSIsImhhbmRsZSIsInJlbW90ZSIsIm9sZFZhbCIsIm5ld1ZhbCIsInNlbmRTZXRUaW1lb3V0IiwicmVzb2x2ZXJzIiwid2FpdGVycyIsImluaXRpYWxpemUiLCJ3ZWJJZCIsImNvbnRlbnRJZCIsImludm9rZUhvc3QiLCJpbnZva2VHdWVzdCIsIm9uY2UiLCJjYXB0dXJlIiwicmVhbG0iLCJjb25zb2xlIiwiY2hyb21lIiwiUnVuQXQiLCJXcml0ZVZhdWx0IiwiVkFVTFQiLCJDb21tYW5kIiwiZXZ0IiwiY29uc3RydWN0b3IiLCJLZXlib2FyZEV2ZW50U2FmZSIsIkNhbGxiYWNrIiwiU2NyaXB0RGF0YSIsIml0ZW1zIiwicnVuQXQiLCJjcmVhdGVTY3JpcHREYXRhIiwiRXhwb3NlIiwiZXh0ZXJuYWwiLCJWaW9sZW50bW9ua2V5IiwiaXNJbnN0YWxsZWQiLCJuYW1lc3BhY2UiLCJvbkNvZGVTZXQiLCJjb25maWd1cmFibGUiLCJzdGFnZSIsInJ1biIsImVycm9yIiwiZ2V0Q3VycmVudFNjcmlwdCIsIndhaXQiLCJsYXN0SWQiLCJub3RpZmljYXRpb25zIiwiTm90aWZpY2F0aW9uQ2xpY2tlZCIsIk5vdGlmaWNhdGlvbkNsb3NlZCIsIm9uZG9uZSIsImlkTWFwIiwiSHR0cFJlcXVlc3RlZCIsInJlcSIsImZpbGVOYW1lIiwic2NyaXB0SWQiLCJzdGFydCIsImFib3J0IiwicGFyc2VEYXRhIiwicGFyc2VGcm9tU3RyaW5nIiwiRE9NUGFyc2VyU2FmZSIsInJlZ2V4cFJlcGxhY2UiLCJjb250ZW50VHlwZSIsImRvd25sb2FkSWQiLCJyZXNwb25zZUhlYWRlcnMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJhbm9ueW1vdXMiLCJiaW5hcnkiLCJicm93c2VyVmVyc2lvbiIsImVuY29kZUJvZHkiLCJldmVudHNUb05vdGlmeSIsInhoclR5cGUiLCJnZXRSZXNwb25zZVR5cGUiLCJ3YXNCbG9iIiwic2FmZVJlc3BvbnNlQmxvYiIsIlJlc3BvbnNlU2FmZSIsIkZpbGVSZWFkZXJTYWZlIiwiZ2V0UmVhZGVyUmVzdWx0IiwiZ2V0QmxvYlR5cGUiLCJUYWJDbG9zZWQiLCJvbmNsb3NlIiwiaXNDb25jYXRTcHJlYWRhYmxlU3ltIiwiaXNDb25jYXRTcHJlYWRhYmxlIiwiZGVzdCIsImFycmF5cyIsImFyciIsImNvbmNhdCIsImVzY01hcCIsImVzY1JFIiwiaGV4IiwiZXNjQ2hhckNvZGUiLCJlc2NGdW5jIiwic2FmZUlzRmluaXRlIiwiQXJyYXlJc0FycmF5IiwidiIsImh1YnMiLCJnZXRIdWIiLCJncm91cCIsImF1dG9DcmVhdGUiLCJodWIiLCJDTE9ORV9JTlRPIiwiQ1JFQVRFX09CSkVDVF9JTiIsIkVYUE9SVF9GVU5DVElPTiIsImRlZmluZUluIiwidGFyZ2V0IiwiYXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q2xCLENBQUNHLE1BQUQsRUFBU0MsRUFBVCxLQUFnQkYsUUFBUSxDQUFDQyxNQUFELEVBQVNDLEVBQVQsRUFBYSxFQUFiLENBRE4sQ0FKZjtBQU9MLEtBQUNILGVBQUQsR0FBbUJ6Z0IsR0FBRyxJQUFJQSxHQUFHLENBQUN5Z0IsZUFBRCxDQUFWLEtBQ2pCLENBQUNsaEIsSUFBRCxFQUFPb2hCLE1BQVAsRUFBZUMsRUFBZixLQUFzQkYsUUFBUSxDQUFDQyxNQUFELEVBQVNDLEVBQVQsRUFBYXJoQixJQUFiLENBRGI7QUFQZCxHQUFQO0FBV0QsQ0F0Qk0sQyIsImZpbGUiOiJpbmplY3RlZC13ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHsgX19wcm90b19fOiBudWxsIH07ICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBjLCBzdHIgPSBcImNkbW5vcHJ0XCI7IGkgPCBzdHIubGVuZ3RoICYmIChjID0gc3RyW2krK10pOykgICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfcmVxdWlyZV9fLCBjLCB7IF9fcHJvdG9fXzogbnVsbCwgdmFsdWU6IHVuZGVmaW5lZCwgd3JpdGFibGU6IHRydWUgfSk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHsgX19wcm90b19fOiBudWxsIH0sIF9fcHJvdG9fXzogbnVsbFxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRzYWZlQ2FsbChtb2R1bGVzW21vZHVsZUlkXSwgbW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRkZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7X19wcm90b19fOiBudWxsLCBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0cnVlKSB7XG4gXHRcdFx0ZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgdG9TdHJpbmdUYWdTeW0sIHtfX3Byb3RvX186IG51bGwsIHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRkZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtfX3Byb3RvX186IG51bGwsIHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0geyBfX3Byb3RvX186IG51bGwgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0ZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0Jywge19fcHJvdG9fXzogbnVsbCwgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcihjb25zdCBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCAoKSA9PiB2YWx1ZVtrZXldKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwga2V5KSA9PiBzYWZlQ2FsbChoYXNPd25Qcm9wZXJ0eSwgb2JqLCBrZXkpO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5qZWN0ZWQvd2ViL2luZGV4LmpzXCIpO1xuIiwiLy8gU0FGRVRZIFdBUk5JTkchIEV4cG9ydHMgdXNlZCBieSBgaW5qZWN0ZWRgIG11c3QgbWFrZSA6OnNhZmUoKSBjYWxscyBhbmQgdXNlIF9fcHJvdG9fXzpudWxsXG5cbi8vIGZvciBnbG9iYWwgZXZlbnQgYnVzIGFuZCBzYXZlIHNvbWUgYnVpbGQgaW4gaW5mb1xuZXhwb3J0IGNvbnN0IElTX0RFViA9IHRydWU7XG5leHBvcnQgY29uc3QgS0VZX0dMT0JBTF9JRCA9ICdfR0xPQkFMX0lEXyc7XG5leHBvcnQgY29uc3QgQlVJTERfSU5fU0NSSVBUX1NSQyA9ICdodHRwczovL21pcmEtMTI1NTgzMDk5My5jb3MuYXAtc2hhbmdoYWkubXlxY2xvdWQuY29tL2xhYi9wbHVnaW4vYmFzZS51c2VyLmpzJztcblxuZXhwb3J0IGNvbnN0IElOSkVDVF9BVVRPID0gJ2F1dG8nO1xuZXhwb3J0IGNvbnN0IElOSkVDVF9QQUdFID0gJ3BhZ2UnO1xuZXhwb3J0IGNvbnN0IElOSkVDVF9DT05URU5UID0gJ2NvbnRlbnQnO1xuXG5leHBvcnQgY29uc3QgSU5KRUNUX01BUFBJTkcgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgLy8gYGF1dG9gIHRyaWVzIHRvIHByb3ZpZGUgYHdpbmRvd2AgZnJvbSB0aGUgcmVhbCBwYWdlIGFzIGB1bnNhZmVXaW5kb3dgXG4gIFtJTkpFQ1RfQVVUT106IFtJTkpFQ1RfUEFHRSwgSU5KRUNUX0NPTlRFTlRdLFxuICAvLyBpbmplY3QgaW50byBwYWdlIGNvbnRleHRcbiAgW0lOSkVDVF9QQUdFXTogW0lOSkVDVF9QQUdFXSxcbiAgLy8gaW5qZWN0IGludG8gY29udGVudCBjb250ZXh0IG9ubHlcbiAgW0lOSkVDVF9DT05URU5UXTogW0lOSkVDVF9DT05URU5UXSxcbn07XG5cbmV4cG9ydCBjb25zdCBDTURfU0NSSVBUX0FERCA9ICdBZGRTY3JpcHQnO1xuZXhwb3J0IGNvbnN0IENNRF9TQ1JJUFRfVVBEQVRFID0gJ1VwZGF0ZVNjcmlwdCc7XG5cbi8vIEFsbG93IG1ldGFkYXRhIGxpbmVzIHRvIHN0YXJ0IHdpdGggV0hJVEVTUEFDRT8gJy8vJyBTUEFDRVxuLy8gQWxsb3cgYW55dGhpbmcgdG8gZm9sbG93IHRoZSBwcmVkZWZpbmVkIHRleHQgb2YgdGhlIG1ldGFTdGFydC9FbmRcbi8vIFRoZSBTUEFDRSBtdXN0IGJlIG9uIHRoZSBzYW1lIGxpbmUgYW5kIHNwZWNpZmljYWxseSBcXHgyMCBhcyBcXHMgd291bGQgYWxzbyBtYXRjaCBcXHJcXG5cXHRcbi8vIE5vdGU6IHdoZW4gdGhlcmUncyBubyB2YWxpZCBtZXRhYmxvY2ssIGFuIGVtcHR5IHN0cmluZyBpcyBtYXRjaGVkIGZvciBjb252ZW5pZW5jZVxuZXhwb3J0IGNvbnN0IE1FVEFCTE9DS19SRSA9IC8oPzpefFxcbilcXHMqXFwvXFwvXFx4MjA9PVVzZXJTY3JpcHQ9PShbXFxzXFxTXSo/XFxuKVxccypcXC9cXC9cXHgyMD09XFwvVXNlclNjcmlwdD09fCQvO1xuXG5leHBvcnQgY29uc3QgSU5KRUNUQUJMRV9UQUJfVVJMX1JFID0gL14oaHR0cHM/fGZpbGV8ZnRwcz8pOi87XG5cbi8vIGBicm93c2VyYCBpcyBhIGxvY2FsIHZhcmlhYmxlIHNpbmNlIHdlIHJlbW92ZSB0aGUgZ2xvYmFsIGBjaHJvbWVgIGFuZCBgYnJvd3NlcmAgaW4gaW5qZWN0ZWQqXG4vLyB0byBwcmV2ZW50IGV4cG9zaW5nIHRoZW0gdG8gdXNlcnNjcmlwdHMgd2l0aCBgQGluamVjdC1pbnRvIGNvbnRlbnRgXG5leHBvcnQgY29uc3QgeyBicm93c2VyIH0gPSBnbG9iYWw7XG5cbi8vIHNldFRpbWVvdXQgdHJ1bmNhdGVzIHRoZSBkZWxheSB0byBhIDMyLWJpdCBzaWduZWQgaW50ZWdlciBzbyB0aGUgbWF4IGRlbGF5IGlzIH4yNCBkYXlzXG5leHBvcnQgY29uc3QgVElNRU9VVF9NQVggPSAweDdGRkZfRkZGRjtcbmV4cG9ydCBjb25zdCBUSU1FT1VUX0hPVVIgPSA2MCAqIDYwICogMTAwMDtcbmV4cG9ydCBjb25zdCBUSU1FT1VUXzI0SE9VUlMgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuZXhwb3J0IGNvbnN0IFRJTUVPVVRfV0VFSyA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuIiwiLy8gU0FGRVRZIFdBUk5JTkchIEV4cG9ydHMgdXNlZCBieSBgaW5qZWN0ZWRgIG11c3QgbWFrZSA6OnNhZmUoKSBjYWxscyBhbmQgdXNlIF9fcHJvdG9fXzpudWxsXG5cbmltcG9ydCB7IGJyb3dzZXIgfSBmcm9tICcjL2NvbW1vbi9jb25zdHMnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICcuL29iamVjdCc7XG5pbXBvcnQgeyBpMThuLCBub29wIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IHsgbm9ybWFsaXplS2V5cyB9IGZyb20gJy4vb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SW1hZ2UgPSAnL3B1YmxpYy9pbWFnZXMvaWNvbjEyOC5wbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhvb2tzKCkge1xuICBjb25zdCBob29rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGZpcmUoZGF0YSkge1xuICAgIGhvb2tzLnNsaWNlKCkuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgIGNiKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaG9vayhjYWxsYmFjaykge1xuICAgIGhvb2tzLnB1c2goY2FsbGJhY2spO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBpID0gaG9va3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaSA+PSAwKSBob29rcy5zcGxpY2UoaSwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IGhvb2ssIGZpcmUgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGBpbmplY3RlZGBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbWRcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0ge3tyZXRyeT86IGJvb2xlYW4sIGlnbm9yZUVycm9yPzogYm9vbGVhbn19IFtvcHRpb25zXVxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDbWQoY21kLCBkYXRhLCBvcHRpb25zKSB7XG4gIHJldHVybiBzZW5kTWVzc2FnZSh7IGNtZCwgZGF0YSB9LCBvcHRpb25zKTtcbn1cblxuLy8gVGhlc2UgbmVlZCBgc3JjYCBwYXJhbWV0ZXIgc28gd2UnbGwgdXNlIHNlbmRDbWQgZm9yIHRoZW0uIFdlIGNvdWxkIGhhdmUgZm9yZ2VkIGBzcmNgIHZpYVxuLy8gYnJvd3Nlci50YWJzLmdldEN1cnJlbnQgYnV0IHRoZXJlJ3Mgbm8gbmVlZCBhcyB0aGV5IG5vcm1hbGx5IHVzZSBvbmx5IGEgdGlueSBhbW91bnQgb2YgZGF0YS5cbmNvbnN0IENPTU1BTkRTX1dJVEhfU1JDID0gW1xuICAnQ29uZmlybUluc3RhbGwnLFxuICAnTm90aWZpY2F0aW9uJyxcbiAgJ1RhYkNsb3NlJyxcbiAgJ1RhYkZvY3VzJyxcbiAgJ1RhYk9wZW4nLFxuICAnVXBkYXRlVmFsdWUnLFxuLypcbiAgVGhlc2UgYXJlIHVzZWQgb25seSBieSBjb250ZW50IHNjcmlwdHMgd2hlcmUgc2VuZENtZERpcmVjdGx5IGNhbid0IGJlIHVzZWQgYW55d2F5XG4gICdHZXRJbmplY3RlZCcsXG4gICdHZXRSZXF1ZXN0SWQnLFxuICAnSHR0cFJlcXVlc3QnLFxuICAnSW5qZWN0aW9uRmVlZGJhY2snLFxuICAnU2V0UG9wdXAnLFxuKi9cbl07XG5jb25zdCBnZXRCZ1BhZ2UgPSAoKSA9PiBicm93c2VyLmV4dGVuc2lvbi5nZXRCYWNrZ3JvdW5kUGFnZT8uKCk7XG5cbi8qKlxuICogU2VuZHMgdGhlIGNvbW1hbmQrZGF0YSBkaXJlY3RseSBzbyBpdCdzIHN5bmNocm9ub3VzIGFuZCBmYXN0ZXIgdGhhbiBzZW5kQ21kIHRoYW5rcyB0byBkZWVwQ29weS5cbiAqIFdBUk5JTkchIE1ha2Ugc3VyZSBgY21kYCBoYW5kbGVyIGRvZXNuJ3QgdXNlIGBzcmNgIG9yIGBjbWRgIGlzIGxpc3RlZCBpbiBDT01NQU5EU19XSVRIX1NSQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRDbWREaXJlY3RseShjbWQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgY29uc3QgYmcgPSAhQ09NTUFORFNfV0lUSF9TUkMuaW5jbHVkZXMoY21kKSAmJiBnZXRCZ1BhZ2UoKTtcbiAgcmV0dXJuIGJnICYmIGJnICE9PSB3aW5kb3cgJiYgYmcuZGVlcENvcHlcbiAgICA/IGJnLmhhbmRsZUNvbW1hbmRNZXNzYWdlKGJnLmRlZXBDb3B5KHsgY21kLCBkYXRhIH0pKS50aGVuKGRlZXBDb3B5KVxuICAgIDogc2VuZENtZChjbWQsIGRhdGEsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJJZFxuICogQHBhcmFtIHtzdHJpbmd9IGNtZFxuICogQHBhcmFtIGRhdGFcbiAqIEBwYXJhbSB7e2ZyYW1lSWQ/OiBudW1iZXJ9fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZW5kVGFiQ21kKHRhYklkLCBjbWQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgeyBjbWQsIGRhdGEgfSwgb3B0aW9ucykuY2F0Y2gobm9vcCk7XG59XG5cbi8vIFVzZWQgYnkgYGluamVjdGVkYFxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKHBheWxvYWQsIHsgcmV0cnkgfSA9IHt9KSB7XG4gIGlmIChyZXRyeSkgcmV0dXJuIHNlbmRNZXNzYWdlUmV0cnkocGF5bG9hZCk7XG4gIGxldCBwcm9taXNlID0gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHBheWxvYWQpO1xuICAvLyBJZ25vcmluZyBlcnJvcnMgd2hlbiBzZW5kaW5nIGZyb20gdGhlIGJhY2tncm91bmQgc2NyaXB0IGJlY2F1c2UgaXQncyBhIGJyb2FkY2FzdFxuICBpZiAoIXByb2Nlc3MuZW52LklTX0lOSkVDVEVEICYmIHdpbmRvdyA9PT0gZ2V0QmdQYWdlKCkpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS5jYXRjaChub29wKTtcbiAgfVxuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGBpbmplY3RlZGBcbiAqIFRoZSBhY3RpdmUgdGFiIHBhZ2UgYW5kIGl0cyBbY29udGVudF0gc2NyaXB0cyBsb2FkIGJlZm9yZSB0aGUgZXh0ZW5zaW9uJ3NcbiAqIHBlcnNpc3RlbnQgYmFja2dyb3VuZCBzY3JpcHQgd2hlbiBDaHJvbWUgc3RhcnRzIHdpdGggYSBVUkwgdmlhIGNvbW1hbmQgbGluZVxuICogb3Igd2hlbiBjb25maWd1cmVkIHRvIHJlc3RvcmUgdGhlIHNlc3Npb24sIGh0dHBzOi8vY3JidWcuY29tLzMxNDY4NlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2VSZXRyeShwYXlsb2FkLCByZXRyaWVzID0gMTApIHtcbiAgbGV0IHBhdXNlRHVyYXRpb24gPSAxMDtcbiAgZm9yICg7IHJldHJpZXMgPiAwOyByZXRyaWVzIC09IDEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlbmRNZXNzYWdlKHBheWxvYWQpO1xuICAgICAgaWYgKGRhdGEpIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghYCR7ZX1gLmluY2x1ZGVzKCdDb3VsZCBub3QgZXN0YWJsaXNoIGNvbm5lY3Rpb24uJykpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgbWFrZVBhdXNlKHBhdXNlRHVyYXRpb24pO1xuICAgIHBhdXNlRHVyYXRpb24gKj0gMjtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ1Zpb2xlbnRtb25rZXkgY2Fubm90IGNvbm5lY3QgdG8gdGhlIGJhY2tncm91bmQgcGFnZS4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRwYWQoaW5wdXQsIGxlbmd0aCwgcGFkID0gJzAnKSB7XG4gIGxldCBudW0gPSBpbnB1dC50b1N0cmluZygpO1xuICB3aGlsZSAobnVtLmxlbmd0aCA8IGxlbmd0aCkgbnVtID0gYCR7cGFkfSR7bnVtfWA7XG4gIHJldHVybiBudW07XG59XG5cbi8qKlxuICogR2V0IGxvY2FsZSBhdHRyaWJ1dGVzIHN1Y2ggYXMgYEBuYW1lOnpoLUNOYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlU3RyaW5nKG1ldGEsIGtleSkge1xuICBjb25zdCBsb2NhbGVNZXRhID0gbmF2aWdhdG9yLmxhbmd1YWdlc1xuICAvLyBVc2UgYGxhbmcudG9Mb3dlckNhc2UoKWAgc2luY2UgdjIuNi41XG4gIC5tYXAobGFuZyA9PiBtZXRhW2Ake2tleX06JHtsYW5nfWBdIHx8IG1ldGFbYCR7a2V5fToke2xhbmcudG9Mb3dlckNhc2UoKX1gXSlcbiAgLmZpbmQoQm9vbGVhbik7XG4gIHJldHVybiBsb2NhbGVNZXRhIHx8IG1ldGFba2V5XSB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmlwdE5hbWUoc2NyaXB0KSB7XG4gIHJldHVybiBzY3JpcHQuY3VzdG9tLm5hbWUgfHwgZ2V0TG9jYWxlU3RyaW5nKHNjcmlwdC5tZXRhLCAnbmFtZScpXG4gICAgfHwgYCMke3NjcmlwdC5wcm9wcy5pZCA/PyBpMThuKCdsYWJlbE5vTmFtZScpfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsVXJsKHVybCwgYmFzZSkge1xuICBjb25zdCBvYmogPSBuZXcgVVJMKHVybCwgYmFzZSk7XG4gIC8vIFVzZSBwcm90b2NvbCB3aGl0ZWxpc3QgdG8gZmlsdGVyIFVSTHNcbiAgaWYgKCFbXG4gICAgJ2h0dHA6JyxcbiAgICAnaHR0cHM6JyxcbiAgICAnZnRwOicsXG4gICAgJ2RhdGE6JyxcbiAgXS5pbmNsdWRlcyhvYmoucHJvdG9jb2wpKSBvYmoucHJvdG9jb2wgPSAnaHR0cDonO1xuICByZXR1cm4gb2JqLmhyZWY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVGaWxlbmFtZShuYW1lKSB7XG4gIC8vIGBlc2NhcGVgIGdlbmVyYXRlZCBVUkkgaGFzICUgaW4gaXRcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvWy1cXFxcLzoqP1wiPD58JVxcc10vZywgKG0pID0+IHtcbiAgICBsZXQgY29kZSA9IG0uY2hhckNvZGVBdCgwKS50b1N0cmluZygxNik7XG4gICAgaWYgKGNvZGUubGVuZ3RoIDwgMikgY29kZSA9IGAwJHtjb2RlfWA7XG4gICAgcmV0dXJuIGAtJHtjb2RlfWA7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlRmlsZW5hbWUoZmlsZW5hbWUpIHtcbiAgcmV0dXJuIGZpbGVuYW1lLnJlcGxhY2UoLy0oWzAtOWEtZl17Mn0pL2csIChfbSwgZykgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChnLCAxNikpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2ZVRhYigpIHtcbiAgcmV0dXJuIChcbiAgICBhd2FpdCBicm93c2VyLnRhYnMucXVlcnkoe1xuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZSxcbiAgICB9KVxuICApWzBdIHx8IChcbiAgICAvLyBDaHJvbWUgYnVnIHdvcmthcm91bmQgd2hlbiBhbiB1bmRvY2tlZCBkZXZ0b29scyB3aW5kb3cgaXMgZm9jdXNlZFxuICAgIGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7XG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICB3aW5kb3dJZDogKGF3YWl0IGJyb3dzZXIud2luZG93cy5nZXRDdXJyZW50KCkpLmlkLFxuICAgIH0pXG4gIClbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUGF1c2UobXMpIHtcbiAgcmV0dXJuIG1zIDwgMFxuICAgID8gUHJvbWlzZS5yZXNvbHZlKClcbiAgICA6IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJ1ZUpvaW4oc2VwYXJhdG9yKSB7XG4gIHJldHVybiB0aGlzLmZpbHRlcihCb29sZWFuKS5qb2luKHNlcGFyYXRvcik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplS2V5cyhrZXkpIHtcbiAgaWYgKGtleSA9PSBudWxsKSByZXR1cm4gW107XG4gIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHJldHVybiBrZXk7XG4gIHJldHVybiBgJHtrZXl9YC5zcGxpdCgnLicpLmZpbHRlcihCb29sZWFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEdldChvYmosIHJhd0tleSwgZGVmKSB7XG4gIGNvbnN0IGtleXMgPSBub3JtYWxpemVLZXlzKHJhd0tleSk7XG4gIGxldCByZXMgPSBvYmo7XG4gIGtleXMuZXZlcnkoKGtleSkgPT4ge1xuICAgIGlmIChyZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgKGtleSBpbiByZXMpKSB7XG4gICAgICByZXMgPSByZXNba2V5XTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXMgPSBkZWY7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFNldChvYmosIHJhd0tleSwgdmFsKSB7XG4gIGNvbnN0IGtleXMgPSBub3JtYWxpemVLZXlzKHJhd0tleSk7XG4gIGlmICgha2V5cy5sZW5ndGgpIHJldHVybiB2YWw7XG4gIGNvbnN0IHJvb3QgPSBvYmogfHwge307XG4gIGxldCBzdWIgPSByb290O1xuICBjb25zdCBsYXN0S2V5ID0ga2V5cy5wb3AoKTtcbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBzdWIgPSBzdWJba2V5XSB8fCAoc3ViW2tleV0gPSB7fSk7XG4gIH0pO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkZWxldGUgc3ViW2xhc3RLZXldO1xuICB9IGVsc2Uge1xuICAgIHN1YltsYXN0S2V5XSA9IHZhbDtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3t9fSBvYmpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWUsa2V5KTo/fSBbdHJhbnNmb3JtXVxuICogQHJldHVybnMge3t9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0UGljayhvYmosIGtleXMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoKHJlcywga2V5KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gb2JqPy5ba2V5XTtcbiAgICBpZiAodHJhbnNmb3JtKSB2YWx1ZSA9IHRyYW5zZm9ybSh2YWx1ZSwga2V5KTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkgcmVzW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gcmVzO1xuICB9LCB7fSk7XG59XG5cbi8vIGludm9rZWQgYXMgb2JqOjptYXBFbnRyeSgoW2tleSwgdmFsdWVdLCBpLCBhbGxFbnRyaWVzKSA9PiB0cmFuc2Zvcm1lZFZhbHVlKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcEVudHJ5KGZ1bmMpIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMpLnJlZHVjZSgocmVzLCBlbnRyeSwgaSwgYWxsRW50cmllcykgPT4ge1xuICAgIHJlc1tlbnRyeVswXV0gPSBmdW5jKGVudHJ5LCBpLCBhbGxFbnRyaWVzKTtcbiAgICByZXR1cm4gcmVzO1xuICB9LCB7fSk7XG59XG5cbi8vIGludm9rZWQgYXMgb2JqOjpmb3JFYWNoRW50cnkoKFtrZXksIHZhbHVlXSwgaSwgYWxsRW50cmllcykgPT4ge30pXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaEVudHJ5KGZ1bmMpIHtcbiAgaWYgKHRoaXMpIE9iamVjdC5lbnRyaWVzKHRoaXMpLmZvckVhY2goZnVuYyk7XG59XG5cbi8vIGludm9rZWQgYXMgb2JqOjpmb3JFYWNoS2V5KGtleSA9PiB7fSwgaSwgYWxsS2V5cylcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoS2V5KGZ1bmMpIHtcbiAgaWYgKHRoaXMpIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goZnVuYyk7XG59XG5cbi8vIGludm9rZWQgYXMgb2JqOjpmb3JFYWNoVmFsdWUodmFsdWUgPT4ge30sIGksIGFsbFZhbHVlcylcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoVmFsdWUoZnVuYykge1xuICBpZiAodGhpcykgT2JqZWN0LnZhbHVlcyh0aGlzKS5mb3JFYWNoKGZ1bmMpO1xufVxuXG4vLyBOZWVkZWQgZm9yIEZpcmVmb3gncyBicm93c2VyLnN0b3JhZ2UgQVBJIHdoaWNoIGZhaWxzIG9uIFZ1ZSBvYnNlcnZhYmxlc1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5KHNyYykge1xuICByZXR1cm4gc3JjICYmIChcbiAgICBBcnJheS5pc0FycmF5KHNyYykgJiYgc3JjLm1hcChkZWVwQ29weSlcbiAgICAvLyBVc2VkIGluIHNhZmUgY29udGV4dFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIHx8IHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIHNyYzo6bWFwRW50cnkoKFssIHZhbF0pID0+IGRlZXBDb3B5KHZhbCkpXG4gICkgfHwgc3JjO1xufVxuXG4vLyBTaW1wbGlmaWVkIGRlZXAgZXF1YWxpdHkgY2hlY2tlclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XG4gIGxldCByZXM7XG4gIGlmICghYSB8fCAhYiB8fCB0eXBlb2YgYSAhPT0gdHlwZW9mIGIgfHwgdHlwZW9mIGEgIT09ICdvYmplY3QnKSB7XG4gICAgcmVzID0gYSA9PT0gYjtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgcmVzID0gYS5sZW5ndGggPT09IGIubGVuZ3RoXG4gICAgICAmJiBhLmV2ZXJ5KChpdGVtLCBpKSA9PiBkZWVwRXF1YWwoaXRlbSwgYltpXSkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMoYSk7XG4gICAgY29uc3Qga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcbiAgICByZXMgPSBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aFxuICAgICAgJiYga2V5c0EuZXZlcnkoa2V5ID0+IGtleXNCLmluY2x1ZGVzKGtleSkgJiYgZGVlcEVxdWFsKGFba2V5XSwgYltrZXldKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbiIsIi8vIFNBRkVUWSBXQVJOSU5HISBFeHBvcnRzIHVzZWQgYnkgYGluamVjdGVkYCBtdXN0IG1ha2UgOjpzYWZlKCkgY2FsbHMgYW5kIHVzZSBfX3Byb3RvX186bnVsbFxuXG5pbXBvcnQgeyBicm93c2VyIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG4obmFtZSwgYXJncykge1xuICByZXR1cm4gYnJvd3Nlci5pMThuLmdldE1lc3NhZ2UobmFtZSwgYXJncykgfHwgbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nKHBhcmFtKSB7XG4gIGlmIChwYXJhbSA9PSBudWxsKSByZXR1cm4gJyc7XG4gIHJldHVybiBgJHtwYXJhbX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlciA9IHRvU3RyaW5nKSB7XG4gIGNvbnN0IGNhY2hlTWFwID0ge307XG4gIGZ1bmN0aW9uIG1lbW9pemVkKC4uLmFyZ3MpIHtcbiAgICAvLyBVc2VkIGluIHNhZmUgY29udGV4dFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGNvbnN0IGtleSA9IHJlc29sdmVyKC4uLmFyZ3MpO1xuICAgIGxldCBjYWNoZSA9IGNhY2hlTWFwW2tleV07XG4gICAgaWYgKCFjYWNoZSkge1xuICAgICAgY2FjaGUgPSB7XG4gICAgICAgIHZhbHVlOiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpLFxuICAgICAgfTtcbiAgICAgIGNhY2hlTWFwW2tleV0gPSBjYWNoZTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlLnZhbHVlO1xuICB9XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHRpbWUpIHtcbiAgbGV0IHN0YXJ0VGltZTtcbiAgbGV0IHRpbWVyO1xuICBsZXQgY2FsbGJhY2s7XG4gIHRpbWUgPSBNYXRoLm1heCgwLCArdGltZSB8fCAwKTtcbiAgZnVuY3Rpb24gY2hlY2tUaW1lKCkge1xuICAgIHRpbWVyID0gbnVsbDtcbiAgICBpZiAocGVyZm9ybWFuY2Uubm93KCkgPj0gc3RhcnRUaW1lKSBjYWxsYmFjaygpO1xuICAgIGVsc2UgY2hlY2tUaW1lcigpO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrVGltZXIoKSB7XG4gICAgaWYgKCF0aW1lcikge1xuICAgICAgY29uc3QgZGVsdGEgPSBzdGFydFRpbWUgLSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChjaGVja1RpbWUsIGRlbHRhKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVib3VuY2VkRnVuY3Rpb24oLi4uYXJncykge1xuICAgIHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpICsgdGltZTtcbiAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgICBjaGVja1RpbWVyKCk7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlZEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgdGltZSkge1xuICBsZXQgbGFzdFRpbWUgPSAwO1xuICB0aW1lID0gTWF0aC5tYXgoMCwgK3RpbWUgfHwgMCk7XG4gIGZ1bmN0aW9uIHRocm90dGxlZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBpZiAobGFzdFRpbWUgKyB0aW1lIDwgbm93KSB7XG4gICAgICBsYXN0VGltZSA9IG5vdztcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aHJvdHRsZWRGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcUlkKHByZWZpeCA9ICdWTScpIHtcbiAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIHJldHVybiBwcmVmaXhcbiAgICArIE1hdGguZmxvb3IoKG5vdyAtIE1hdGguZmxvb3Iobm93KSkgKiAxZTEyKS50b1N0cmluZygzNilcbiAgICArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlMTIpLnRvU3RyaW5nKDM2KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfFVpbnQ4QXJyYXl8QXJyYXl9IGJ1ZlxuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRdXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF1cbiAqIEByZXR1cm4ge3N0cmluZ30gYSBiaW5hcnkgc3RyaW5nIGkuZS4gb25lIGJ5dGUgcGVyIGNoYXJhY3RlclxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVmZmVyMnN0cmluZyhidWYsIG9mZnNldCA9IDAsIGxlbmd0aCA9IDFlOTkpIHtcbiAgLy8gVGhlIG1heCBudW1iZXIgb2YgYXJndW1lbnRzIHZhcmllcyBiZXR3ZWVuIEpTIGVuZ2luZXMgYnV0IGl0J3MgPjMyayBzbyB3ZSdyZSBzYWZlXG4gIGNvbnN0IHNsaWNlU2l6ZSA9IDgxOTI7XG4gIGNvbnN0IHNsaWNlcyA9IFtdO1xuICBjb25zdCBhcnJheUxlbiA9IGJ1Zi5sZW5ndGg7IC8vIHByZXNlbnQgb24gVWludDhBcnJheS9BcnJheVxuICBjb25zdCBlbmQgPSBNYXRoLm1pbihhcnJheUxlbiB8fCBidWYuYnl0ZUxlbmd0aCwgb2Zmc2V0ICsgbGVuZ3RoKTtcbiAgY29uc3QgbmVlZHNTbGljaW5nID0gYXJyYXlMZW4gPT0gbnVsbCB8fCBvZmZzZXQgfHwgZW5kID4gc2xpY2VTaXplO1xuICBmb3IgKDsgb2Zmc2V0IDwgZW5kOyBvZmZzZXQgKz0gc2xpY2VTaXplKSB7XG4gICAgc2xpY2VzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLFxuICAgICAgbmVlZHNTbGljaW5nXG4gICAgICAgID8gbmV3IFVpbnQ4QXJyYXkoYnVmLCBvZmZzZXQsIE1hdGgubWluKHNsaWNlU2l6ZSwgZW5kIC0gb2Zmc2V0KSlcbiAgICAgICAgOiBidWYpKTtcbiAgfVxuICByZXR1cm4gc2xpY2VzLmpvaW4oJycpO1xufVxuXG4vKipcbiAqIEZhc3RlciB0aGFuIGJ1ZmZlcjJzdHJpbmcrYnRvYTogMnggaW4gQ2hyb21lLCAxMHggaW4gRkZcbiAqIEBwYXJhbSB7QmxvYn0gYmxvYlxuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRdXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF1cbiAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gYmFzZTY0LWVuY29kZWQgY29udGVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJsb2IyYmFzZTY0KGJsb2IsIG9mZnNldCA9IDAsIGxlbmd0aCA9IDFlOTkpIHtcbiAgaWYgKG9mZnNldCB8fCBsZW5ndGggPCBibG9iLnNpemUpIHtcbiAgICBibG9iID0gYmxvYi5zbGljZShvZmZzZXQsIG9mZnNldCArIGxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuICFibG9iLnNpemUgPyAnJyA6IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICByZXNvbHZlKHJlcy5zbGljZShyZXMuaW5kZXhPZignLCcpICsgMSkpO1xuICAgIH07XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nMnVpbnQ4YXJyYXkoc3RyKSB7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGFycmF5W2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5jb25zdCBWRVJTSU9OX1JFID0gL14oLio/KS0oWy0uMC05YS16XSspfCQvaTtcbmNvbnN0IERJR0lUU19SRSA9IC9eXFxkKyQvOyAvLyB1c2luZyByZWdleHAgdG8gYXZvaWQgKycxZTInIGJlaW5nIHBhcnNlZCBhcyAxMDBcblxuLyoqIEByZXR1cm4gLTEgfCAwIHwgMSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uKHZlcjEsIHZlcjIpIHtcbiAgLy8gVXNlZCBpbiBzYWZlIGNvbnRleHRcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGNvbnN0IFssIG1haW4xID0gdmVyMSB8fCAnJywgcHJlMV0gPSBWRVJTSU9OX1JFLmV4ZWModmVyMSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICBjb25zdCBbLCBtYWluMiA9IHZlcjIgfHwgJycsIHByZTJdID0gVkVSU0lPTl9SRS5leGVjKHZlcjIpO1xuICBjb25zdCBkZWx0YSA9IGNvbXBhcmVWZXJzaW9uQ2h1bmsobWFpbjEsIG1haW4yKVxuICAgIHx8ICFwcmUxIC0gIXByZTIgLy8gMS4yLjMtcHJlLXJlbGVhc2UgaXMgbGVzcyB0aGFuIDEuMi4zXG4gICAgfHwgcHJlMSAmJiBjb21wYXJlVmVyc2lvbkNodW5rKHByZTEsIHByZTIsIHRydWUpOyAvLyBpZiBwcmUxIGlzIHByZXNlbnQsIHByZTIgaXMgdG9vXG4gIHJldHVybiBkZWx0YSA8IDAgPyAtMSA6ICshIWRlbHRhO1xufVxuXG5mdW5jdGlvbiBjb21wYXJlVmVyc2lvbkNodW5rKHZlcjEsIHZlcjIsIGlzU2VtdmVyTW9kZSkge1xuICBjb25zdCBwYXJ0czEgPSB2ZXIxLnNwbGl0KCcuJyk7XG4gIGNvbnN0IHBhcnRzMiA9IHZlcjIuc3BsaXQoJy4nKTtcbiAgY29uc3QgbGVuMSA9IHBhcnRzMS5sZW5ndGg7XG4gIGNvbnN0IGxlbjIgPSBwYXJ0czIubGVuZ3RoO1xuICBjb25zdCBsZW4gPSAoaXNTZW12ZXJNb2RlID8gTWF0aC5taW4gOiBNYXRoLm1heCkobGVuMSwgbGVuMik7XG4gIGxldCBkZWx0YTtcbiAgZm9yIChsZXQgaSA9IDA7ICFkZWx0YSAmJiBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBjb25zdCBhID0gcGFydHMxW2ldO1xuICAgIGNvbnN0IGIgPSBwYXJ0czJbaV07XG4gICAgaWYgKGlzU2VtdmVyTW9kZSkge1xuICAgICAgZGVsdGEgPSBESUdJVFNfUkUudGVzdChhKSAmJiBESUdJVFNfUkUudGVzdChiKVxuICAgICAgICA/IGEgLSBiXG4gICAgICAgIDogYSA+IGIgfHwgYSA8IGIgJiYgLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbHRhID0gKHBhcnNlSW50KGEsIDEwKSB8fCAwKSAtIChwYXJzZUludChiLCAxMCkgfHwgMCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWx0YSB8fCBpc1NlbXZlck1vZGUgJiYgKGxlbjEgLSBsZW4yKTtcbn1cblxuY29uc3QgdW5pdHMgPSBbXG4gIFsnbWluJywgNjBdLFxuICBbJ2gnLCAyNF0sXG4gIFsnZCcsIDEwMDAsIDM2NV0sXG4gIFsneSddLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lKGR1cmF0aW9uKSB7XG4gIGR1cmF0aW9uIC89IDYwICogMTAwMDtcbiAgY29uc3QgdW5pdEluZm8gPSB1bml0cy5maW5kKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbWF4ID0gaXRlbVsxXTtcbiAgICBpZiAoIW1heCB8fCBkdXJhdGlvbiA8IG1heCkgcmV0dXJuIHRydWU7XG4gICAgY29uc3Qgc3RlcCA9IGl0ZW1bMl0gfHwgbWF4O1xuICAgIGR1cmF0aW9uIC89IHN0ZXA7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgcmV0dXJuIGAke2R1cmF0aW9uIHwgMH0ke3VuaXRJbmZvWzBdfWA7XG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRCeXRlTGVuZ3RoID0gbGVuID0+IChcbiAgIWxlbiA/ICcnXG4gICAgOiBsZW4gPCAxMDI0ICYmIGAke2xlbn0gQmBcbiAgICB8fCBsZW4gPCAxMDI0ICogMTAyNCAmJiBgJHtsZW4gPj4gMTB9IGtgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYml0d2lzZVxuICAgIHx8IGAkeysobGVuIC8gKDEwMjQgKiAxMDI0KSkudG9GaXhlZCgxKX0gTWAgLy8gYWxsb3cgZnJhY3Rpb25zIGZvciBtZWdhYnl0ZXNcbik7XG5cbi8vIFVzZWQgYnkgYGluamVjdGVkYFxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChvYmo6Omhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVBcnJheShkYXRhKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXTtcbn1cblxuY29uc3QgYmluYXJ5VHlwZXMgPSBbXG4gICdibG9iJyxcbiAgJ2FycmF5YnVmZmVyJyxcbl07XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdExvY2FsRmlsZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAvLyBvbmx5IEdFVCBtZXRob2QgaXMgYWxsb3dlZCBmb3IgbG9jYWwgZmlsZXNcbiAgLy8gaGVhZGVycyBpcyBtZWFuaW5nbGVzc1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IHsgcmVzcG9uc2VUeXBlIH0gPSBvcHRpb25zO1xuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgIGlmIChiaW5hcnlUeXBlcy5pbmNsdWRlcyhyZXNwb25zZVR5cGUpKSB4aHIucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xuICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvLyBzdGF0dXMgZm9yIGBmaWxlOmAgcHJvdG9jb2wgd2lsbCBhbHdheXMgYmUgYDBgXG4gICAgICByZXN1bHQuc3RhdHVzID0geGhyLnN0YXR1cyB8fCAyMDA7XG4gICAgICByZXN1bHQuZGF0YSA9IGJpbmFyeVR5cGVzLmluY2x1ZGVzKHJlc3BvbnNlVHlwZSkgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgaWYgKHJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0LmRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gaWdub3JlIGludmFsaWQgSlNPTlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA+IDMwMCkge1xuICAgICAgICByZWplY3QocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgcmVzdWx0LnN0YXR1cyA9IC0xO1xuICAgICAgcmVqZWN0KHJlc3VsdCk7XG4gICAgfTtcbiAgICB4aHIuc2VuZCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFeGNsdWRlcyBgdGV4dC9odG1sYCB0byBhdm9pZCBMSU5LIGhlYWRlciB0aGF0IENocm9tZSB1c2VzIHRvIHByZWZldGNoIGpzIGFuZCBjc3MsXG4gKiBiZWNhdXNlIEdyZWFzeUZvcmsncyA0MDQgZXJyb3IgcmVzcG9uc2UgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIGNvbnNvbGUgb2Ygb3VyIHBhZ2UuXG4gKi9cbmNvbnN0IEZPUkNFRF9BQ0NFUFQgPSB7XG4gICdncmVhc3lmb3JrLm9yZyc6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCB0ZXh0L3BsYWluLCB0ZXh0L2NzcycsXG59O1xuXG5leHBvcnQgY29uc3QgaXNSZW1vdGUgPSB1cmwgPT4gdXJsXG4gICYmICEoL14oZmlsZTp8ZGF0YTp8aHR0cHM/OlxcL1xcLyhsb2NhbGhvc3R8MTI3XFwuMFxcLjBcXC4xWzovXSkpLy50ZXN0KHVybCkpO1xuXG4vKiogQHR5cGVkZWYge3tcbiAgdXJsOiBzdHJpbmcsXG4gIHN0YXR1czogbnVtYmVyLFxuICBoZWFkZXJzOiBIZWFkZXJzLFxuICBkYXRhOiBzdHJpbmd8QXJyYXlCdWZmZXJ8QmxvYnxPYmplY3Rcbn19IFZNUmVxdWVzdFJlc3BvbnNlICovXG4vKipcbiAqIE1ha2UgYSByZXF1ZXN0LlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtSZXF1ZXN0SW5pdH0gb3B0aW9uc1xuICogQHJldHVybiBQcm9taXNlPFZNUmVxdWVzdFJlc3BvbnNlPlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAvLyBmZXRjaCBkb2VzIG5vdCBzdXBwb3J0IGxvY2FsIGZpbGVcbiAgaWYgKHVybC5zdGFydHNXaXRoKCdmaWxlOi8vJykpIHJldHVybiByZXF1ZXN0TG9jYWxGaWxlKHVybCwgb3B0aW9ucyk7XG4gIGNvbnN0IHsgYm9keSwgaGVhZGVycywgcmVzcG9uc2VUeXBlIH0gPSBvcHRpb25zO1xuICBjb25zdCBpc0JvZHlPYmogPSBib2R5ICYmIGJvZHk6Oih7fSkudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gIGNvbnN0IGhvc3RuYW1lID0gdXJsLnNwbGl0KCcvJywgMylbMl07XG4gIGNvbnN0IGFjY2VwdCA9IEZPUkNFRF9BQ0NFUFRbaG9zdG5hbWVdO1xuICAvLyBOb3QgdXNpbmcgLi4uc3ByZWFkIGJlY2F1c2UgQmFiZWwgbWlzdGFrZW5seSBhZGRzIGl0cyBwb2x5ZmlsbCB0byBpbmplY3RlZC13ZWJcbiAgY29uc3QgaW5pdCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGNhY2hlOiBpc1JlbW90ZSh1cmwpID8gdW5kZWZpbmVkIDogJ25vLWNhY2hlJyxcbiAgfSwgb3B0aW9ucywge1xuICAgIGJvZHk6IGlzQm9keU9iaiA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSxcbiAgICBoZWFkZXJzOiBpc0JvZHlPYmogfHwgYWNjZXB0XG4gICAgICA/IE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIGlzQm9keU9iaiAmJiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYWNjZXB0ICYmIHsgYWNjZXB0IH0pXG4gICAgICA6IGhlYWRlcnMsXG4gIH0pO1xuICBjb25zdCByZXN1bHQgPSB7IHVybCwgc3RhdHVzOiAtMSB9O1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgIGNvbnN0IGxvYWRNZXRob2QgPSB7XG4gICAgICBhcnJheWJ1ZmZlcjogJ2FycmF5QnVmZmVyJyxcbiAgICAgIGJsb2I6ICdibG9iJyxcbiAgICAgIGpzb246ICdqc29uJyxcbiAgICB9W3Jlc3BvbnNlVHlwZV0gfHwgJ3RleHQnO1xuICAgIC8vIHN0YXR1cyBmb3IgYGZpbGU6YCBwcm90b2NvbCB3aWxsIGFsd2F5cyBiZSBgMGBcbiAgICByZXN1bHQuc3RhdHVzID0gcmVzcC5zdGF0dXMgfHwgMjAwO1xuICAgIHJlc3VsdC5oZWFkZXJzID0gcmVzcC5oZWFkZXJzO1xuICAgIHJlc3VsdC5kYXRhID0gYXdhaXQgcmVzcFtsb2FkTWV0aG9kXSgpO1xuICB9IGNhdGNoIHsgLyogTk9QICovIH1cbiAgaWYgKHJlc3VsdC5zdGF0dXMgPCAwIHx8IHJlc3VsdC5zdGF0dXMgPiAzMDApIHRocm93IHJlc3VsdDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gVXNlZCBieSBgaW5qZWN0ZWRgXG5jb25zdCBTSU1QTEVfVkFMVUVfVFlQRSA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBzdHJpbmc6ICdzJyxcbiAgbnVtYmVyOiAnbicsXG4gIGJvb2xlYW46ICdiJyxcbn07XG5cbi8vIFVzZWQgYnkgYGluamVjdGVkYFxuZXhwb3J0IGZ1bmN0aW9uIGR1bXBTY3JpcHRWYWx1ZSh2YWx1ZSwganNvbkR1bXAgPSBKU09OLnN0cmluZ2lmeSkge1xuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IFNJTVBMRV9WQUxVRV9UWVBFW3R5cGVvZiB2YWx1ZV07XG4gICAgcmV0dXJuIGAke3NpbXBsZSB8fCAnbyd9JHtzaW1wbGUgPyB2YWx1ZSA6IGpzb25EdW1wKHZhbHVlKX1gO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWltcG9ydHMgKi9cblxuLyogV0FSTklORyFcbiAqIE1ha2Ugc3VyZSBhbGwgcmUtZXhwb3J0ZWQgZnVuY3Rpb25zIHN1cnZpdmUgaW4gYSBzcG9vZmVkL2Jyb2tlbiBlbnZpcm9ubWVudDpcbiAqIHVzZSBvbmx5IDo6c2FmZSgpIGdsb2JhbHMgdGhhdCBhcmUgaW5pdGlhbGl6ZWQgaW4gYSBjb3JyZXNwb25kaW5nIHNhZmUtZ2xvYmFscyogZmlsZSxcbiAqIHVzZSBfX3Byb3RvX186bnVsbCBvciBnZXQvc2V0IG93biBwcm9wcyBleHBsaWNpdGx5LiAqL1xuXG5leHBvcnQge1xuICBkdW1wU2NyaXB0VmFsdWUsXG4gIGlzRW1wdHksXG59IGZyb20gJyMvY29tbW9uJztcbmV4cG9ydCAqIGZyb20gJyMvY29tbW9uL2NvbnN0cyc7XG5cbmV4cG9ydCBjb25zdCBmaXJlQnJpZGdlRXZlbnQgPSAoZXZlbnRJZCwgbXNnLCBjbG9uZUludG8pID0+IHtcbiAgY29uc3QgZGV0YWlsID0gY2xvbmVJbnRvID8gY2xvbmVJbnRvKG1zZywgZG9jdW1lbnQpIDogbXNnO1xuICBjb25zdCBldnRNYWluID0gbmV3IEN1c3RvbUV2ZW50U2FmZShldmVudElkLCB7IF9fcHJvdG9fXzogbnVsbCwgZGV0YWlsIH0pO1xuICB3aW5kb3c6OmZpcmUoZXZ0TWFpbik7XG59O1xuXG5leHBvcnQgY29uc3QgYmluZEV2ZW50cyA9IChzcmNJZCwgZGVzdElkLCBicmlkZ2UsIGNsb25lSW50bykgPT4ge1xuICAvKiBVc2luZyBhIHNlcGFyYXRlIGV2ZW50IGZvciBgbm9kZWAgYmVjYXVzZSBDdXN0b21FdmVudCBjYW4ndCB0cmFuc2ZlciBub2RlcyxcbiAgICogd2hlcmVhcyBNb3VzZUV2ZW50IChhbmQgc29tZSBvdGhlcnMpIGNhbid0IHRyYW5zZmVyIG9iamVjdHMgd2l0aG91dCBzdHJpbmdpZmljYXRpb24uICovXG4gIGxldCBpbmNvbWluZ05vZGVFdmVudDtcbiAgd2luZG93OjpvbihzcmNJZCwgZSA9PiB7XG4gICAgZTo6c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSB7XG4gICAgICBjb25zb2xlLmluZm8oYFticmlkZ2UuJHticmlkZ2UuaWRzID8gJ2hvc3QnIDogJ2d1ZXN0LndlYid9XSByZWNlaXZlZGAsXG4gICAgICAgIGluY29taW5nTm9kZUV2ZW50ID8gZTo6Z2V0UmVsYXRlZFRhcmdldCgpIDogZTo6Z2V0RGV0YWlsKCkpO1xuICAgIH1cbiAgICBpZiAoIWluY29taW5nTm9kZUV2ZW50KSB7XG4gICAgICAvLyBDdXN0b21FdmVudCBpcyB0aGUgbWFpbiBtZXNzYWdlXG4gICAgICBjb25zdCBkYXRhID0gZTo6Z2V0RGV0YWlsKCk7XG4gICAgICBpbmNvbWluZ05vZGVFdmVudCA9IGRhdGEubm9kZSAmJiBkYXRhO1xuICAgICAgaWYgKCFpbmNvbWluZ05vZGVFdmVudCkgYnJpZGdlLm9uSGFuZGxlKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNb3VzZUV2ZW50IGlzIHRoZSBzZWNvbmQgZXZlbnQgd2hlbiB0aGUgbWFpbiBldmVudCBoYXMgYG5vZGU6IHRydWVgXG4gICAgICBpbmNvbWluZ05vZGVFdmVudC5ub2RlID0gZTo6Z2V0UmVsYXRlZFRhcmdldCgpO1xuICAgICAgYnJpZGdlLm9uSGFuZGxlKGluY29taW5nTm9kZUV2ZW50KTtcbiAgICAgIGluY29taW5nTm9kZUV2ZW50ID0gbnVsbDtcbiAgICB9XG4gIH0sIHRydWUpO1xuICBicmlkZ2UucG9zdCA9IChjbWQsIGRhdGEsIHsgZGF0YUtleSB9ID0gYnJpZGdlLCBub2RlKSA9PiB7XG4gICAgLy8gQ29uc3RydWN0aW5nIHRoZSBldmVudCBub3cgc28gd2UgZG9uJ3Qgc2VuZCBhbnl0aGluZyBpZiBpdCB0aHJvd3Mgb24gaW52YWxpZCBgbm9kZWBcbiAgICBjb25zdCBldnROb2RlID0gbm9kZSAmJiBuZXcgTW91c2VFdmVudFNhZmUoZGVzdElkLCB7IF9fcHJvdG9fXzogbnVsbCwgcmVsYXRlZFRhcmdldDogbm9kZSB9KTtcbiAgICBmaXJlQnJpZGdlRXZlbnQoZGVzdElkLCB7IGNtZCwgZGF0YSwgZGF0YUtleSwgbm9kZTogISFldnROb2RlIH0sIGNsb25lSW50byk7XG4gICAgaWYgKGV2dE5vZGUpIHdpbmRvdzo6ZmlyZShldnROb2RlKTtcbiAgfTtcbn07XG4iLCJjb25zdCBoYW5kbGVycyA9IGNyZWF0ZU51bGxPYmooKTtcbmNvbnN0IGNhbGxiYWNrcyA9IGNyZWF0ZU51bGxPYmooKTtcbi8qKlxuICogQHByb3BlcnR5IHtVQUluamVjdGVkfSB1YVxuICovXG5jb25zdCBicmlkZ2UgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgY2FsbGJhY2tzLFxuICBhZGRIYW5kbGVycyhvYmopIHtcbiAgICBhc3NpZ24oaGFuZGxlcnMsIG9iaik7XG4gIH0sXG4gIG9uSGFuZGxlKHsgY21kLCBkYXRhLCBub2RlIH0pIHtcbiAgICBjb25zdCBmbiA9IGhhbmRsZXJzW2NtZF07XG4gICAgaWYgKGZuKSBub2RlOjpmbihkYXRhKTtcbiAgfSxcbiAgc2VuZChjbWQsIGRhdGEsIGNvbnRleHQsIG5vZGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VTYWZlKHJlc29sdmUgPT4ge1xuICAgICAgcG9zdFdpdGhDYWxsYmFjayhjbWQsIGRhdGEsIGNvbnRleHQsIG5vZGUsIHJlc29sdmUpO1xuICAgIH0pO1xuICB9LFxuICBzeW5jQ2FsbDogcG9zdFdpdGhDYWxsYmFjayxcbn07XG5cbmZ1bmN0aW9uIHBvc3RXaXRoQ2FsbGJhY2soY21kLCBkYXRhLCBjb250ZXh0LCBub2RlLCBjYiwgY3VzdG9tQ2FsbGJhY2tJZCkge1xuICBjb25zdCBpZCA9IGdldFVuaXFJZFNhZmUoKTtcbiAgY2FsbGJhY2tzW2lkXSA9IGNiO1xuICBpZiAoY3VzdG9tQ2FsbGJhY2tJZCkge1xuICAgIHNldE93blByb3AoZGF0YSwgY3VzdG9tQ2FsbGJhY2tJZCwgaWQpO1xuICB9IGVsc2Uge1xuICAgIGRhdGEgPSB7IFtDQUxMQkFDS19JRF06IGlkLCBkYXRhIH07XG4gIH1cbiAgYnJpZGdlLnBvc3QoY21kLCBkYXRhLCBjb250ZXh0LCBub2RlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnJpZGdlO1xuIiwiaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5pbXBvcnQgeyBtYWtlR21BcGkgfSBmcm9tICcuL2dtLWFwaSc7XG5pbXBvcnQgeyBtYWtlR2xvYmFsV3JhcHBlciB9IGZyb20gJy4vZ20tZ2xvYmFsLXdyYXBwZXInO1xuaW1wb3J0IHsgbWFrZUNvbXBvbmVudFV0aWxzLCBzYWZlQ29uY2F0IH0gZnJvbSAnLi91dGlsLXdlYic7XG5cbi8qKiBOYW1lIGluIEdyZWFzZW1vbmtleTQgLT4gbmFtZSBpbiBHTSAqL1xuY29uc3QgR000X0FMSUFTID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIGdldFJlc291cmNlVXJsOiAnZ2V0UmVzb3VyY2VVUkwnLFxuICB4bWxIdHRwUmVxdWVzdDogJ3htbGh0dHBSZXF1ZXN0Jyxcbn07XG5jb25zdCBHTTRfQVNZTkMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2V0UmVzb3VyY2VVcmw6IDEsXG4gIGdldFZhbHVlOiAxLFxuICBkZWxldGVWYWx1ZTogMSxcbiAgc2V0VmFsdWU6IDEsXG4gIGxpc3RWYWx1ZXM6IDEsXG59O1xubGV0IGdtQXBpO1xubGV0IGNvbXBvbmVudFV0aWxzO1xuXG4vKipcbiAqIEBwYXJhbSB7Vk1TY3JpcHQgJiBWTUluamVjdGVkU2NyaXB0fSBzY3JpcHRcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlR21BcGlXcmFwcGVyKHNjcmlwdCkge1xuICAvLyBBZGQgR00gZnVuY3Rpb25zXG4gIC8vIFJlZmVyZW5jZTogaHR0cDovL3dpa2kuZ3JlYXNlc3BvdC5uZXQvR3JlYXNlbW9ua2V5X01hbnVhbDpBUElcbiAgY29uc3QgeyBtZXRhIH0gPSBzY3JpcHQ7XG4gIGNvbnN0IGdyYW50ID0gbWV0YS5ncmFudDtcbiAgaWYgKGdyYW50Lmxlbmd0aCA9PT0gMSAmJiBncmFudFswXSA9PT0gJ25vbmUnKSB7XG4gICAgZ3JhbnQubGVuZ3RoID0gMDtcbiAgfVxuICBjb25zdCB7IGlkIH0gPSBzY3JpcHQucHJvcHM7XG4gIGNvbnN0IHJlc291cmNlcyA9IGFzc2lnbihjcmVhdGVOdWxsT2JqKCksIG1ldGEucmVzb3VyY2VzKTtcbiAgLyoqIEBuYW1lc3BhY2UgVk1JbmplY3RlZFNjcmlwdC5Db250ZXh0ICovXG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgaWQsXG4gICAgc2NyaXB0LFxuICAgIHJlc291cmNlcyxcbiAgICBkYXRhS2V5OiBzY3JpcHQuZGF0YUtleSxcbiAgICByZXNDYWNoZTogY3JlYXRlTnVsbE9iaigpLFxuICB9O1xuICBjb25zdCBnbUluZm8gPSBtYWtlR21JbmZvKHNjcmlwdCwgcmVzb3VyY2VzKTtcbiAgY29uc3QgZ20gPSB7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIEdNOiB7XG4gICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICBpbmZvOiBnbUluZm8sXG4gICAgfSxcbiAgICBHTV9pbmZvOiBnbUluZm8sXG4gICAgdW5zYWZlV2luZG93OiBnbG9iYWwsXG4gIH07XG4gIGlmICghY29tcG9uZW50VXRpbHMpIHtcbiAgICBjb21wb25lbnRVdGlscyA9IG1ha2VDb21wb25lbnRVdGlscygpO1xuICB9XG4gIGFzc2lnbihnbSwgY29tcG9uZW50VXRpbHMpO1xuICBpZiAoZ3JhbnQ6OmluZGV4T2YoV0lORE9XX0NMT1NFKSA+PSAwKSB7XG4gICAgZ20uY2xvc2UgPSB2bU93bkZ1bmMoKCkgPT4gYnJpZGdlLnBvc3QoJ1RhYkNsb3NlJywgMCwgY29udGV4dCkpO1xuICB9XG4gIGlmIChncmFudDo6aW5kZXhPZihXSU5ET1dfRk9DVVMpID49IDApIHtcbiAgICBnbS5mb2N1cyA9IHZtT3duRnVuYygoKSA9PiBicmlkZ2UucG9zdCgnVGFiRm9jdXMnLCAwLCBjb250ZXh0KSk7XG4gIH1cbiAgaWYgKCFnbUFwaSAmJiBncmFudC5sZW5ndGgpIGdtQXBpID0gbWFrZUdtQXBpKCk7XG4gIGdyYW50Ojpmb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgZ200bmFtZSA9IG5hbWU6OnNsaWNlKDAsIDMpID09PSAnR00uJyAmJiBuYW1lOjpzbGljZSgzKTtcbiAgICBjb25zdCBmbiA9IGdtQXBpW2dtNG5hbWUgPyBgR01fJHtHTTRfQUxJQVNbZ200bmFtZV0gfHwgZ200bmFtZX1gIDogbmFtZV07XG4gICAgaWYgKGZuKSB7XG4gICAgICBpZiAoZ200bmFtZSkge1xuICAgICAgICBnbS5HTVtnbTRuYW1lXSA9IG1ha2VHbU1ldGhvZENhbGxlcihmbiwgY29udGV4dCwgR000X0FTWU5DW2dtNG5hbWVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdtW25hbWVdID0gbWFrZUdtTWV0aG9kQ2FsbGVyKGZuLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZ3JhbnQubGVuZ3RoID8gbWFrZUdsb2JhbFdyYXBwZXIoZ20pIDogZ207XG59XG5cbmZ1bmN0aW9uIG1ha2VHbUluZm8oc2NyaXB0LCByZXNvdXJjZXMpIHtcbiAgLy8gVE9ETzogbW92ZSBpbnRvIGJhY2tncm91bmQuanNcbiAgY29uc3QgeyBtZXRhIH0gPSBzY3JpcHQ7XG4gIGNvbnN0IG1ldGFDb3B5ID0gY3JlYXRlTnVsbE9iaigpO1xuICBsZXQgdmFsO1xuICBvYmplY3RLZXlzKG1ldGEpOjpmb3JFYWNoKChrZXkpID0+IHtcbiAgICB2YWwgPSBtZXRhW2tleV07XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdtYXRjaCc6IC8vIC0+IG1hdGNoZXNcbiAgICBjYXNlICdleGNsdWRlTWF0Y2gnOiAvLyAtPiBleGNsdWRlTWF0Y2hlc1xuICAgICAga2V5ICs9ICdlJztcbiAgICAgIC8vIGZhbGx0aHJvdWdoXG4gICAgY2FzZSAnZXhjbHVkZSc6IC8vIC0+IGV4Y2x1ZGVzXG4gICAgY2FzZSAnaW5jbHVkZSc6IC8vIC0+IGluY2x1ZGVzXG4gICAgICBrZXkgKz0gJ3MnO1xuICAgICAgdmFsID0gc2FmZUNvbmNhdChbXSwgdmFsKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgfVxuICAgIG1ldGFDb3B5W2tleV0gPSB2YWw7XG4gIH0pO1xuICBbXG4gICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVzcGFjZScsXG4gICAgJ3J1bkF0JyxcbiAgICAndmVyc2lvbicsXG4gIF06OmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghbWV0YUNvcHlba2V5XSkgbWV0YUNvcHlba2V5XSA9ICcnO1xuICB9KTtcbiAgdmFsID0gb2JqZWN0S2V5cyhyZXNvdXJjZXMpO1xuICB2YWw6OmZvckVhY2goKG5hbWUsIGkpID0+IHtcbiAgICB2YWxbaV0gPSB7IG5hbWUsIHVybDogcmVzb3VyY2VzW25hbWVdIH07XG4gIH0pO1xuICBtZXRhQ29weS5yZXNvdXJjZXMgPSB2YWw7XG4gIG1ldGFDb3B5LnVud3JhcCA9IGZhbHNlOyAvLyBkZXByZWNhdGVkLCBhbHdheXMgYGZhbHNlYFxuICByZXR1cm4ge1xuICAgIHV1aWQ6IHNjcmlwdC5wcm9wcy51dWlkLFxuICAgIHNjcmlwdE1ldGFTdHI6IHNjcmlwdC5tZXRhU3RyLFxuICAgIHNjcmlwdFdpbGxVcGRhdGU6ICEhc2NyaXB0LmNvbmZpZy5zaG91bGRVcGRhdGUsXG4gICAgc2NyaXB0SGFuZGxlcjogJ1Zpb2xlbnRtb25rZXknLFxuICAgIHZlcnNpb246IHByb2Nlc3MuZW52LlZNX1ZFUixcbiAgICBpbmplY3RJbnRvOiBicmlkZ2UubW9kZSxcbiAgICBwbGF0Zm9ybTogYXNzaWduKHt9LCBicmlkZ2UudWEpLFxuICAgIHNjcmlwdDogbWV0YUNvcHksXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VHbU1ldGhvZENhbGxlcihnbU1ldGhvZCwgY29udGV4dCwgaXNBc3luYykge1xuICAvLyBrZWVwaW5nIHRoZSBuYXRpdmUgY29uc29sZS5sb2cgaW50YWN0XG4gIHJldHVybiBnbU1ldGhvZCA9PT0gZ21BcGkuR01fbG9nID8gZ21NZXRob2QgOiB2bU93bkZ1bmMoXG4gICAgaXNBc3luY1xuICAgICAgPyAoYXN5bmMgKC4uLmFyZ3MpID0+IGdtTWV0aG9kOjphcHBseShjb250ZXh0LCBhcmdzKSlcbiAgICAgIDogZ21NZXRob2Q6OmJpbmQoY29udGV4dCksXG4gICk7XG59XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1pbXBvcnRzXG5pbXBvcnQgeyBLRVlfR0xPQkFMX0lEIH0gZnJvbSAnIy9jb21tb24vY29uc3RzJztcbmltcG9ydCB7IGR1bXBTY3JpcHRWYWx1ZSwgaXNFbXB0eSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgeyBvblRhYkNyZWF0ZSB9IGZyb20gJy4vdGFicyc7XG5pbXBvcnQgeyBvblJlcXVlc3RDcmVhdGUgfSBmcm9tICcuL3JlcXVlc3RzJztcbmltcG9ydCB7IG9uTm90aWZpY2F0aW9uQ3JlYXRlIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zJztcbmltcG9ydCB7IGRlY29kZVZhbHVlLCBkdW1wVmFsdWUsIGxvYWRWYWx1ZXMsIGNoYW5nZUhvb2tzIH0gZnJvbSAnLi9nbS12YWx1ZXMnO1xuaW1wb3J0IHsganNvbkR1bXAgfSBmcm9tICcuL3V0aWwtd2ViJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VHbUFwaSgpIHtcbiAgcmV0dXJuIHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgR01fYWRkR2xvYmFsTGlzdGVuZXIoa2V5LCBmbikge1xuICAgICAgcmV0dXJuIGFkZExpc3RlbmVyKEtFWV9HTE9CQUxfSUQsIGtleSwgZm4pO1xuICAgIH0sXG4gICAgR01fcmVtb3ZlR2xvYmFsTGlzdGVuZXIobGlzdGVuZXJJZCkge1xuICAgICAgcmV0dXJuIHJlbW92ZUxpc3RlbmVyKEtFWV9HTE9CQUxfSUQsIGxpc3RlbmVySWQpO1xuICAgIH0sXG4gICAgR01fc2VuZEdsb2JhbEV2ZW50KGtleSwgZXZlbnQpIHtcbiAgICAgIGNvbnN0IGhvb2tzID0gY2hhbmdlSG9va3NbS0VZX0dMT0JBTF9JRF0/LltrZXldO1xuICAgICAgaWYgKCFob29rcykgcmV0dXJuO1xuICAgICAgb2JqZWN0VmFsdWVzKGhvb2tzKTo6Zm9yRWFjaChmbiA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm4oa2V5LCBldmVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBsb2coJ2Vycm9yJywgWydHTV9zZW5kR2xvYmFsRXZlbnQnLCAnY2FsbGJhY2snXSwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgR01fcmVnRm4oa2V5LCBmbikge1xuICAgICAgY29uc3QgaG9va3MgPSBjaGFuZ2VIb29rc1tLRVlfR0xPQkFMX0lEXT8uW2tleV07XG4gICAgICBpZiAoaG9va3MpIHRocm93IGBkdXBsaWNhdGUgcmVnICR7a2V5fWA7XG4gICAgICBhZGRMaXN0ZW5lcihLRVlfR0xPQkFMX0lELCBrZXksIGZuKTtcbiAgICB9LFxuICAgIEdNX2ludm9rZUZuKGtleSwgYXJnKSB7XG4gICAgICBjb25zdCBob29rcyA9IGNoYW5nZUhvb2tzW0tFWV9HTE9CQUxfSURdPy5ba2V5XTtcbiAgICAgIGlmICghaG9va3MpIHRocm93IGBoYXMgbm90IHJlZyAke2tleX1gO1xuICAgICAgY29uc3QgZm4gPSBob29rc1tvYmplY3RLZXlzKGhvb2tzKVswXV07XG4gICAgICByZXR1cm4gZm4oYXJnKTtcbiAgICB9LFxuICAgIEdNX2RlbGV0ZVZhbHVlKGtleSkge1xuICAgICAgY29uc3QgeyBpZCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGxvYWRWYWx1ZXMoaWQpO1xuICAgICAgY29uc3Qgb2xkUmF3ID0gdmFsdWVzW2tleV07XG4gICAgICBkZWxldGUgdmFsdWVzW2tleV07XG4gICAgICAvLyB1c2luZyBgdW5kZWZpbmVkYCB0byBtYXRjaCB0aGUgZG9jdW1lbnRhdGlvbiBhbmQgVE0gZm9yIEdNX2FkZFZhbHVlQ2hhbmdlTGlzdGVuZXJcbiAgICAgIGR1bXBWYWx1ZShpZCwga2V5LCB1bmRlZmluZWQsIG51bGwsIG9sZFJhdywgdGhpcyk7XG4gICAgfSxcbiAgICBHTV9nZXRWYWx1ZShrZXksIGRlZikge1xuICAgICAgY29uc3QgcmF3ID0gbG9hZFZhbHVlcyh0aGlzLmlkKVtrZXldO1xuICAgICAgcmV0dXJuIHJhdyA/IGRlY29kZVZhbHVlKHJhdykgOiBkZWY7XG4gICAgfSxcbiAgICBHTV9saXN0VmFsdWVzKCkge1xuICAgICAgcmV0dXJuIG9iamVjdEtleXMobG9hZFZhbHVlcyh0aGlzLmlkKSk7XG4gICAgfSxcbiAgICBHTV9zZXRWYWx1ZShrZXksIHZhbCkge1xuICAgICAgY29uc3QgeyBpZCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHJhdyA9IGR1bXBTY3JpcHRWYWx1ZSh2YWwsIGpzb25EdW1wKSB8fCBudWxsO1xuICAgICAgY29uc3QgdmFsdWVzID0gbG9hZFZhbHVlcyhpZCk7XG4gICAgICBjb25zdCBvbGRSYXcgPSB2YWx1ZXNba2V5XTtcbiAgICAgIHZhbHVlc1trZXldID0gcmF3O1xuICAgICAgZHVtcFZhbHVlKGlkLCBrZXksIHZhbCwgcmF3LCBvbGRSYXcsIHRoaXMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGNhbGxiYWNrIEdNVmFsdWVDaGFuZ2VMaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0gez99IG9sZFZhbHVlIC0gYHVuZGVmaW5lZGAgbWVhbnMgdmFsdWUgd2FzIGNyZWF0ZWRcbiAgICAgKiBAcGFyYW0gez99IG5ld1ZhbHVlIC0gYHVuZGVmaW5lZGAgbWVhbnMgdmFsdWUgd2FzIHJlbW92ZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbW90ZSAtIGB0cnVlYCBtZWFucyB2YWx1ZSB3YXMgbW9kaWZpZWQgaW4gYW5vdGhlciB0YWJcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gbmFtZSBvZiB0aGUgdmFsdWUgdG8gbW9uaXRvclxuICAgICAqIEBwYXJhbSB7R01WYWx1ZUNoYW5nZUxpc3RlbmVyfSBmbiAtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge1N0cmluZ30gbGlzdGVuZXJJZFxuICAgICAqL1xuICAgIEdNX2FkZFZhbHVlQ2hhbmdlTGlzdGVuZXIoa2V5LCBmbikge1xuICAgICAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMuaWQsIGtleSwgZm4pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxpc3RlbmVySWRcbiAgICAgKi9cbiAgICBHTV9yZW1vdmVWYWx1ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVySWQpIHtcbiAgICAgIHJldHVybiByZW1vdmVMaXN0ZW5lcih0aGlzLmlkLCBsaXN0ZW5lcklkKTtcbiAgICB9LFxuICAgIEdNX2dldFJlc291cmNlVGV4dChuYW1lKSB7XG4gICAgICByZXR1cm4gZ2V0UmVzb3VyY2UodGhpcywgbmFtZSk7XG4gICAgfSxcbiAgICBHTV9nZXRSZXNvdXJjZVVSTChuYW1lKSB7XG4gICAgICByZXR1cm4gZ2V0UmVzb3VyY2UodGhpcywgbmFtZSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBHTV9yZWdpc3Rlck1lbnVDb21tYW5kKGNhcCwgZnVuYykge1xuICAgICAgY29uc3QgeyBpZCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGtleSA9IGAke2lkfToke2NhcH1gO1xuICAgICAgc3RvcmUuY29tbWFuZHNba2V5XSA9IGZ1bmM7XG4gICAgICBicmlkZ2UucG9zdCgnUmVnaXN0ZXJNZW51JywgeyBpZCwgY2FwIH0sIHRoaXMpO1xuICAgICAgcmV0dXJuIGNhcDtcbiAgICB9LFxuICAgIEdNX3VucmVnaXN0ZXJNZW51Q29tbWFuZChjYXApIHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXM7XG4gICAgICBjb25zdCBrZXkgPSBgJHtpZH06JHtjYXB9YDtcbiAgICAgIGRlbGV0ZSBzdG9yZS5jb21tYW5kc1trZXldO1xuICAgICAgYnJpZGdlLnBvc3QoJ1VucmVnaXN0ZXJNZW51JywgeyBpZCwgY2FwIH0sIHRoaXMpO1xuICAgIH0sXG4gICAgR01fZG93bmxvYWQoYXJnMSwgbmFtZSkge1xuICAgICAgLy8gbm90IHVzaW5nIC4uLiBhcyBpdCBjYWxscyBCYWJlbCdzIHBvbHlmaWxsIHRoYXQgY2FsbHMgdW5zYWZlIE9iamVjdC54eHhcbiAgICAgIGNvbnN0IG9wdHMgPSBjcmVhdGVOdWxsT2JqKCk7XG4gICAgICBsZXQgb25sb2FkO1xuICAgICAgaWYgKGlzU3RyaW5nKGFyZzEpKSB7XG4gICAgICAgIG9wdHMudXJsID0gYXJnMTtcbiAgICAgICAgb3B0cy5uYW1lID0gbmFtZTtcbiAgICAgIH0gZWxzZSBpZiAoYXJnMSkge1xuICAgICAgICBuYW1lID0gYXJnMS5uYW1lO1xuICAgICAgICBvbmxvYWQgPSBhcmcxLm9ubG9hZDtcbiAgICAgICAgb3B0czo6cGlja0ludG9UaGlzKGFyZzEsIFtcbiAgICAgICAgICAndXJsJyxcbiAgICAgICAgICAnaGVhZGVycycsXG4gICAgICAgICAgJ3RpbWVvdXQnLFxuICAgICAgICAgICdvbmVycm9yJyxcbiAgICAgICAgICAnb25wcm9ncmVzcycsXG4gICAgICAgICAgJ29udGltZW91dCcsXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgICAgaWYgKCFuYW1lIHx8ICFpc1N0cmluZyhuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3JTYWZlKCdSZXF1aXJlZCBwYXJhbWV0ZXIgXCJuYW1lXCIgaXMgbWlzc2luZyBvciBub3QgYSBzdHJpbmcuJyk7XG4gICAgICB9XG4gICAgICBhc3NpZ24ob3B0cywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcbiAgICAgICAgb3ZlcnJpZGVNaW1lVHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgICAgIC8vIE11c3QgYmUgcHJlc2VudCBhbmQgYSBmdW5jdGlvbiB0byB0cmlnZ2VyIGRvd25sb2FkQmxvYiBpbiBjb250ZW50IGJyaWRnZVxuICAgICAgICBvbmxvYWQ6IGlzRnVuY3Rpb24ob25sb2FkKSA/IG9ubG9hZCA6ICgoKSA9PiB7fSksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvblJlcXVlc3RDcmVhdGUob3B0cywgdGhpcywgbmFtZSk7XG4gICAgfSxcbiAgICBHTV94bWxodHRwUmVxdWVzdChvcHRzKSB7XG4gICAgICByZXR1cm4gb25SZXF1ZXN0Q3JlYXRlKG9wdHMsIHRoaXMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQnlwYXNzZXMgc2l0ZSdzIENTUCBmb3IgaW5saW5lIGBzdHlsZWAsIGBsaW5rYCwgYW5kIGBzY3JpcHRgLlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gW3BhcmVudF1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXVxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gaXQgYWxzbyBoYXMgLnRoZW4oKSBzbyBpdCBzaG91bGQgYmUgY29tcGF0aWJsZSB3aXRoIFRNXG4gICAgICovXG4gICAgR01fYWRkRWxlbWVudChwYXJlbnQsIHRhZywgYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuIGlzU3RyaW5nKHBhcmVudClcbiAgICAgICAgPyB3ZWJBZGRFbGVtZW50KG51bGwsIHBhcmVudCwgdGFnLCB0aGlzKVxuICAgICAgICA6IHdlYkFkZEVsZW1lbnQocGFyZW50LCB0YWcsIGF0dHJpYnV0ZXMsIHRoaXMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQnlwYXNzZXMgc2l0ZSdzIENTUCBmb3IgaW5saW5lIGBzdHlsZWAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNzc1xuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gaXQgYWxzbyBoYXMgLnRoZW4oKSBzbyBpdCBzaG91bGQgYmUgY29tcGF0aWJsZSB3aXRoIFRNIGFuZCBvbGQgVk1cbiAgICAgKi9cbiAgICBHTV9hZGRTdHlsZShjc3MpIHtcbiAgICAgIHJldHVybiB3ZWJBZGRFbGVtZW50KG51bGwsICdzdHlsZScsIHsgdGV4dENvbnRlbnQ6IGNzcywgaWQ6IGdldFVuaXFJZFNhZmUoJ1ZNc3QnKSB9LCB0aGlzKTtcbiAgICB9LFxuICAgIEdNX29wZW5JblRhYih1cmwsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBvblRhYkNyZWF0ZShcbiAgICAgICAgaXNPYmplY3Qob3B0aW9ucylcbiAgICAgICAgICA/IGFzc2lnbihjcmVhdGVOdWxsT2JqKCksIG9wdGlvbnMsIHsgdXJsIH0pXG4gICAgICAgICAgOiB7IGFjdGl2ZTogIW9wdGlvbnMsIHVybCB9LFxuICAgICAgICB0aGlzLFxuICAgICAgKTtcbiAgICB9LFxuICAgIEdNX25vdGlmaWNhdGlvbih0ZXh0LCB0aXRsZSwgaW1hZ2UsIG9uY2xpY2spIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBpc09iamVjdCh0ZXh0KSA/IHRleHQgOiB7XG4gICAgICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGltYWdlLFxuICAgICAgICBvbmNsaWNrLFxuICAgICAgfTtcbiAgICAgIGlmICghb3B0aW9ucy50ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvclNhZmUoJ0dNX25vdGlmaWNhdGlvbjogYHRleHRgIGlzIHJlcXVpcmVkIScpO1xuICAgICAgfVxuICAgICAgY29uc3QgaWQgPSBvbk5vdGlmaWNhdGlvbkNyZWF0ZShvcHRpb25zLCB0aGlzKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogdm1Pd25GdW5jKCgpID0+IGJyaWRnZS5zZW5kKCdSZW1vdmVOb3RpZmljYXRpb24nLCBpZCwgdGhpcykpLFxuICAgICAgfTtcbiAgICB9LFxuICAgIEdNX3NldENsaXBib2FyZChkYXRhLCB0eXBlKSB7XG4gICAgICBicmlkZ2UucG9zdCgnU2V0Q2xpcGJvYXJkJywgeyBkYXRhLCB0eXBlIH0sIHRoaXMpO1xuICAgIH0sXG4gICAgLy8gdXNpbmcgdGhlIG5hdGl2ZSBjb25zb2xlLmxvZyBzbyB0aGUgb3V0cHV0IGhhcyBhIGNsaWNrYWJsZSBsaW5rIHRvIHRoZSBjYWxsZXIncyBzb3VyY2VcbiAgICBHTV9sb2c6IGxvZ2dpbmcubG9nLFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihpZCwga2V5LCBmbikge1xuICBpZiAoIWlzU3RyaW5nKGtleSkpIGtleSA9IGAke2tleX1gO1xuICBpZiAoIWlzRnVuY3Rpb24oZm4pKSByZXR1cm47XG4gIGNvbnN0IGhvb2tzID0gZW5zdXJlTmVzdGVkUHJvcChjaGFuZ2VIb29rcywgaWQsIGtleSk7XG4gIGNvbnN0IGkgPSBvYmplY3RWYWx1ZXMoaG9va3MpOjppbmRleE9mKGZuKTtcbiAgbGV0IGxpc3RlbmVySWQgPSBpID49IDAgJiYgb2JqZWN0S2V5cyhob29rcylbaV07XG4gIGlmICghbGlzdGVuZXJJZCkge1xuICAgIGxpc3RlbmVySWQgPSBnZXRVbmlxSWRTYWZlKCdWTXZjJyk7XG4gICAgaG9va3NbbGlzdGVuZXJJZF0gPSBmbjtcbiAgfVxuICByZXR1cm4gbGlzdGVuZXJJZDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoaWQsIGxpc3RlbmVySWQpIHtcbiAgY29uc3Qga2V5SG9va3MgPSBjaGFuZ2VIb29rc1tpZF07XG4gIGlmICgha2V5SG9va3MpIHJldHVybjtcbiAgZm9yIChjb25zdCBrZXkgaW4ga2V5SG9va3MpIHsgLyogcHJvdG8gaXMgbnVsbCAqLy8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ3VhcmQtZm9yLWluXG4gICAgY29uc3QgaG9va3MgPSBrZXlIb29rc1trZXldO1xuICAgIGlmIChsaXN0ZW5lcklkIGluIGhvb2tzKSB7XG4gICAgICBkZWxldGUgaG9va3NbbGlzdGVuZXJJZF07XG4gICAgICBpZiAoaXNFbXB0eShob29rcykpIGRlbGV0ZSBrZXlIb29rc1trZXldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmIChpc0VtcHR5KGtleUhvb2tzKSkgZGVsZXRlIGNoYW5nZUhvb2tzW2lkXTtcbn1cblxuZnVuY3Rpb24gd2ViQWRkRWxlbWVudChwYXJlbnQsIHRhZywgYXR0cnMsIGNvbnRleHQpIHtcbiAgbGV0IGVsO1xuICBsZXQgZXJyb3JJbmZvO1xuICBicmlkZ2Uuc3luY0NhbGwoJ0FkZEVsZW1lbnQnLCB7IHRhZywgYXR0cnMgfSwgY29udGV4dCwgcGFyZW50LCBmdW5jdGlvbiBfKHJlcykge1xuICAgIGVsID0gdGhpcztcbiAgICBlcnJvckluZm8gPSByZXM7XG4gIH0sICdjYklkJyk7XG4gIC8vIERPTSBlcnJvciBpbiBjb250ZW50IHNjcmlwdCBjYW4ndCBiZSBjYXVnaHQgYnkgYSBwYWdlLW1vZGUgdXNlcnNjcmlwdCBzbyB3ZSByZXRocm93IGl0IGhlcmVcbiAgaWYgKGVycm9ySW5mbykge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvclNhZmUoZXJyb3JJbmZvWzBdKTtcbiAgICBlcnIuc3RhY2sgKz0gYFxcbiR7ZXJyb3JJbmZvWzFdfWA7XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIC8qIEEgUHJvbWlzZSBwb2x5ZmlsbCBpcyBub3QgYWN0dWFsbHkgbmVjZXNzYXJ5IGJlY2F1c2UgRE9NIG1lc3NhZ2luZyBpcyBzeW5jaHJvbm91cyxcbiAgICAgYnV0IHdlIGtlZXAgaXQgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBHTV9hZGRTdHlsZSBpbiBWTSBvZiAyMDE3LTIwMTlcbiAgICAgaHR0cHM6Ly9naXRodWIuY29tL3Zpb2xlbnRtb25rZXkvdmlvbGVudG1vbmtleS9pc3N1ZXMvMjE3XG4gICAgIGFzIHdlbGwgYXMgZm9yIEdNX2FkZEVsZW1lbnQgaW4gVGFtcGVybW9ua2V5LiAqL1xuICByZXR1cm4gc2V0T3duUHJvcChlbCwgJ3RoZW4nLCBhc3luYyBjYiA9PiAoXG4gICAgLy8gUHJldmVudGluZyBpbmZpbml0ZSByZXNvbHZlIGxvb3BcbiAgICBkZWxldGUgZWwudGhlblxuICAgIC8vIE5hdGl2ZSBQcm9taXNlIGlnbm9yZXMgbm9uLWZ1bmN0aW9uXG4gICAgJiYgKGlzRnVuY3Rpb24oY2IpID8gY2IoZWwpIDogZWwpXG4gICkpO1xufVxuXG5mdW5jdGlvbiBnZXRSZXNvdXJjZShjb250ZXh0LCBuYW1lLCBpc0Jsb2IpIHtcbiAgY29uc3QgeyBpZCwgcmVzQ2FjaGUsIHJlc291cmNlcyB9ID0gY29udGV4dDtcbiAgY29uc3Qga2V5ID0gcmVzb3VyY2VzW25hbWVdO1xuICBpZiAoa2V5KSB7XG4gICAgbGV0IHJlcyA9IHJlc0NhY2hlW2tleV07XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgIGJyaWRnZS5zeW5jQ2FsbCgnR2V0UmVzb3VyY2UnLCB7IGlkLCBpc0Jsb2IsIGtleSB9LCBjb250ZXh0LCBudWxsLCByZXNwb25zZSA9PiB7XG4gICAgICAgIHJlcyA9IHJlc3BvbnNlO1xuICAgICAgfSk7XG4gICAgICBpZiAocmVzICE9PSB0cnVlICYmIGlzQmxvYikge1xuICAgICAgICByZXMgPSBjcmVhdGVPYmplY3RVUkwocmVzKTtcbiAgICAgIH1cbiAgICAgIHJlc0NhY2hlW2tleV0gPSByZXM7XG4gICAgfVxuICAgIHJldHVybiByZXMgPT09IHRydWUgPyBrZXkgOiByZXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IElOSkVDVF9DT05URU5UIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcbmltcG9ydCB7IEZhc3RMb29rdXAsIHNhZmVDb25jYXQgfSBmcm9tICcuL3V0aWwtd2ViJztcblxuLyoqIFRoZSBpbmRleCBzdHJpbmdzIHRoYXQgbG9vayBleGFjdGx5IGxpa2UgaW50ZWdlcnMgY2FuJ3QgYmUgZm9yZ2VkXG4gKiBidXQgZm9yIGV4YW1wbGUgJzAxMScgZG9lc24ndCBsb29rIGxpa2UgMTEgc28gaXQncyBhbGxvd2VkICovXG5jb25zdCBpc0ZyYW1lSW5kZXggPSBrZXkgPT4ga2V5ID49IDAgJiYga2V5IDw9IDB4RkZGRl9GRkZFICYmIGtleSA9PT0gYCR7K2tleX1gO1xuY29uc3Qgc2NvcGVTeW0gPSBTeW1ib2xTYWZlLnVuc2NvcGFibGVzO1xuY29uc3QgZ2xvYmFsS2V5c1NldCA9IEZhc3RMb29rdXAoKTtcbmNvbnN0IGdsb2JhbEtleXMgPSAoZnVuY3Rpb24gbWFrZUdsb2JhbEtleXMoKSB7XG4gIGNvbnN0IGtXcmFwcGVkSlNPYmplY3QgPSAnd3JhcHBlZEpTT2JqZWN0JztcbiAgY29uc3QgbmFtZXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdyk7XG4gIC8vIFRydWUgaWYgYG5hbWVzYCBpcyB1c2FibGUgYXMgaXMsIGJ1dCBGRiBpcyBidWdnZWQ6IGl0cyBuYW1lcyBoYXZlIGR1cGxpY2F0ZXNcbiAgbGV0IG9rID0gIUlTX0ZJUkVGT1g7XG4gIG5hbWVzOjpmb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGlzRnJhbWVJbmRleChrZXkpKSB7XG4gICAgICBvayA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxLZXlzU2V0LmFkZChrZXkpO1xuICAgIH1cbiAgfSk7XG4gIC8qIENocm9tZSBhbmQgRkYgcGFnZSBtb2RlOiBgZ2xvYmFsYCBpcyBgd2luZG93YFxuICAgICBGRiBjb250ZW50IG1vZGU6IGBnbG9iYWxgIGlzIGRpZmZlcmVudCwgc29tZSBwcm9wcyBlLmcuIGBpc0Zpbml0ZWAgYXJlIGRlZmluZWQgb25seSB0aGVyZSAqL1xuICBpZiAoZ2xvYmFsICE9PSB3aW5kb3cpIHtcbiAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzKGdsb2JhbCk6OmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICghaXNGcmFtZUluZGV4KGtleSkpIHtcbiAgICAgICAgZ2xvYmFsS2V5c1NldC5hZGQoa2V5KTtcbiAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyB3cmFwcGVkSlNPYmplY3QgaXMgbm90IGluY2x1ZGVkIGluIGdldE93blByb3BlcnR5TmFtZXMgc28gd2UgYWRkIGl0IGV4cGxpY2l0bHkuXG4gIGlmIChJU19GSVJFRk9YXG4gICAgJiYgYnJpZGdlLm1vZGUgPT09IElOSkVDVF9DT05URU5UXG4gICAgJiYga1dyYXBwZWRKU09iamVjdCBpbiBnbG9iYWxcbiAgICAmJiAhZ2xvYmFsS2V5c1NldC5oYXMoa1dyYXBwZWRKU09iamVjdCkpIHtcbiAgICBnbG9iYWxLZXlzU2V0LmFkZChrV3JhcHBlZEpTT2JqZWN0KTtcbiAgICBpZiAob2spIHNldE93blByb3AobmFtZXMsIG5hbWVzLmxlbmd0aCwga1dyYXBwZWRKU09iamVjdCk7XG4gIH1cbiAgcmV0dXJuIG9rID8gbmFtZXMgOiBnbG9iYWxLZXlzU2V0LnRvQXJyYXkoKTtcbn0oKSk7XG5jb25zdCBpbmhlcml0ZWRLZXlzID0gY3JlYXRlTnVsbE9iaigpO1xuLyogVGhlc2UgY2FuIGJlIHJlZGVmaW5lZCBidXQgY2FuJ3QgYmUgYXNzaWduZWQsIHNlZSBzYW5kYm94LWdsb2JhbHMuaHRtbCAqL1xuY29uc3QgcmVhZG9ubHlLZXlzID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIGFwcGxpY2F0aW9uQ2FjaGU6IDEsXG4gIGNhY2hlczogMSxcbiAgY2xvc2VkOiAxLFxuICBjcm9zc09yaWdpbklzb2xhdGVkOiAxLFxuICBjcnlwdG86IDEsXG4gIGN1c3RvbUVsZW1lbnRzOiAxLFxuICBmcmFtZUVsZW1lbnQ6IDEsXG4gIGhpc3Rvcnk6IDEsXG4gIGluZGV4ZWREQjogMSxcbiAgaXNTZWN1cmVDb250ZXh0OiAxLFxuICBsb2NhbFN0b3JhZ2U6IDEsXG4gIG1veklubmVyU2NyZWVuWDogMSxcbiAgbW96SW5uZXJTY3JlZW5ZOiAxLFxuICBuYXZpZ2F0b3I6IDEsXG4gIHNlc3Npb25TdG9yYWdlOiAxLFxuICBzcGVlY2hTeW50aGVzaXM6IDEsXG4gIHN0eWxlTWVkaWE6IDEsXG4gIHRydXN0ZWRUeXBlczogMSxcbn07XG4vKiBUaGVzZSBjYW4ndCBiZSByZWRlZmluZWQsIHNlZSBzYW5kYm94LWdsb2JhbHMuaHRtbCAqL1xuY29uc3QgdW5mb3JnZWFibGVzID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIEluZmluaXR5OiAxLFxuICBOYU46IDEsXG4gIGRvY3VtZW50OiAxLFxuICBsb2NhdGlvbjogMSxcbiAgdG9wOiAxLFxuICB1bmRlZmluZWQ6IDEsXG4gIHdpbmRvdzogMSxcbn07XG4vKiB+NTAgbWV0aG9kcyBsaWtlIGFsZXJ0L2ZldGNoL21vdmVCeSB0aGF0IG5lZWQgYHdpbmRvd2AgYXMgYHRoaXNgLCBzZWUgc2FuZGJveC1nbG9iYWxzLmh0bWwgKi9cbmNvbnN0IE1BWUJFID0gdm1Pd25GdW5jOyAvLyBzb21ldGhpbmcgdGhhdCBjYW4ndCBiZSBpbWl0YXRlZCBieSB0aGUgcGFnZVxuY29uc3QgYm91bmRNZXRob2RzID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIGFkZEV2ZW50TGlzdGVuZXI6IE1BWUJFLFxuICBhbGVydDogTUFZQkUsXG4gIGF0b2JTYWZlOiBNQVlCRSxcbiAgYmx1cjogTUFZQkUsXG4gIGJ0b2E6IE1BWUJFLFxuICBjYW5jZWxBbmltYXRpb25GcmFtZTogTUFZQkUsXG4gIGNhbmNlbElkbGVDYWxsYmFjazogTUFZQkUsXG4gIGNhcHR1cmVFdmVudHM6IE1BWUJFLFxuICBjbGVhckludGVydmFsOiBNQVlCRSxcbiAgY2xlYXJUaW1lb3V0OiBNQVlCRSxcbiAgY2xvc2U6IE1BWUJFLFxuICBjb25maXJtOiBNQVlCRSxcbiAgY3JlYXRlSW1hZ2VCaXRtYXA6IE1BWUJFLFxuICBkaXNwYXRjaEV2ZW50OiBNQVlCRSxcbiAgZHVtcDogTUFZQkUsXG4gIGZldGNoOiBNQVlCRSxcbiAgZmluZDogTUFZQkUsXG4gIGZvY3VzOiBNQVlCRSxcbiAgZ2V0Q29tcHV0ZWRTdHlsZTogTUFZQkUsXG4gIGdldERlZmF1bHRDb21wdXRlZFN0eWxlOiBNQVlCRSxcbiAgZ2V0U2VsZWN0aW9uOiBNQVlCRSxcbiAgbWF0Y2hNZWRpYTogTUFZQkUsXG4gIG1vdmVCeTogTUFZQkUsXG4gIG1vdmVUbzogTUFZQkUsXG4gIG9wZW46IE1BWUJFLFxuICBvcGVuRGF0YWJhc2U6IE1BWUJFLFxuICBwb3N0TWVzc2FnZTogTUFZQkUsXG4gIHByaW50OiBNQVlCRSxcbiAgcHJvbXB0OiBNQVlCRSxcbiAgcXVldWVNaWNyb3Rhc2s6IE1BWUJFLFxuICByZWxlYXNlRXZlbnRzOiBNQVlCRSxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogTUFZQkUsXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZTogTUFZQkUsXG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IE1BWUJFLFxuICByZXNpemVCeTogTUFZQkUsXG4gIHJlc2l6ZVRvOiBNQVlCRSxcbiAgc2Nyb2xsOiBNQVlCRSxcbiAgc2Nyb2xsQnk6IE1BWUJFLFxuICBzY3JvbGxCeUxpbmVzOiBNQVlCRSxcbiAgc2Nyb2xsQnlQYWdlczogTUFZQkUsXG4gIHNjcm9sbFRvOiBNQVlCRSxcbiAgc2V0SW50ZXJ2YWw6IE1BWUJFLFxuICBzZXRSZXNpemFibGU6IE1BWUJFLFxuICBzZXRUaW1lb3V0OiBNQVlCRSxcbiAgc2l6ZVRvQ29udGVudDogTUFZQkUsXG4gIHN0b3A6IE1BWUJFLFxuICB1cGRhdGVDb21tYW5kczogTUFZQkUsXG4gIHdlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lOiBNQVlCRSxcbiAgd2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBNQVlCRSxcbiAgd2Via2l0UmVxdWVzdEZpbGVTeXN0ZW06IE1BWUJFLFxuICB3ZWJraXRSZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMOiBNQVlCRSxcbn07XG5cbmZvciAoY29uc3QgbmFtZSBpbiB1bmZvcmdlYWJsZXMpIHsgLyogcHJvdG8gaXMgbnVsbCAqLy8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ3VhcmQtZm9yLWluXG4gIGxldCB0aGlzT2JqO1xuICBsZXQgaW5mbyA9IChcbiAgICBkZXNjcmliZVByb3BlcnR5KHRoaXNPYmogPSBnbG9iYWwsIG5hbWUpXG4gICAgfHwgZGVzY3JpYmVQcm9wZXJ0eSh0aGlzT2JqID0gd2luZG93LCBuYW1lKVxuICApO1xuICBsZXQgZm47XG4gIGlmIChpbmZvKSB7XG4gICAgaW5mbyA9IGFzc2lnbihjcmVhdGVOdWxsT2JqKCksIGluZm8pO1xuICAgIC8vIGN1cnJlbnRseSBvbmx5IGBkb2N1bWVudGAgYW5kIGB3aW5kb3dgXG4gICAgaWYgKChmbiA9IGluZm8uZ2V0KSkgaW5mby5nZXQgPSBmbjo6YmluZCh0aGlzT2JqKTtcbiAgICAvLyBjdXJyZW50bHkgb25seSBgbG9jYXRpb25gXG4gICAgaWYgKChmbiA9IGluZm8uc2V0KSkgaW5mby5zZXQgPSBmbjo6YmluZCh0aGlzT2JqKTtcbiAgICB1bmZvcmdlYWJsZXNbbmFtZV0gPSBpbmZvO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSB1bmZvcmdlYWJsZXNbbmFtZV07XG4gIH1cbn1cbltFdmVudFRhcmdldCwgT2JqZWN0XTo6Zm9yRWFjaChzcmMgPT4ge1xuICBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNyY1tQUk9UT10pOjpmb3JFYWNoKGtleSA9PiB7XG4gICAgaW5oZXJpdGVkS2V5c1trZXldID0gMTtcbiAgfSk7XG59KTtcblxuLyoqXG4gKiBAZGVzYyBXcmFwIGhlbHBlcnMgdG8gcHJldmVudCB1bmV4cGVjdGVkIG1vZGlmaWNhdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlR2xvYmFsV3JhcHBlcihsb2NhbCkge1xuICBjb25zdCBldmVudHMgPSBjcmVhdGVOdWxsT2JqKCk7XG4gIGNvbnN0IHJlYWRvbmx5cyA9IGFzc2lnbihjcmVhdGVOdWxsT2JqKCksIHJlYWRvbmx5S2V5cyk7XG4gIGxldCBnbG9iYWxzID0gZ2xvYmFsS2V5c1NldDsgLy8gd2lsbCBiZSBjb3BpZWQgb25seSBpZiBtb2RpZmllZFxuICAvKiBCcm93c2VycyBtYXkgcmV0dXJuIFtvYmplY3QgT2JqZWN0XSBmb3IgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyh3aW5kb3cpXG4gICAgIG9uIG91ciBgd2luZG93YCBwcm94eSBzbyBqUXVlcnkgbGlicyBzZWUgaXQgYXMgYSBwbGFpbiBvYmplY3QgYW5kIHRocm93XG4gICAgIHdoZW4gdHJ5aW5nIHRvIGNsb25lIGl0cyByZWN1cnNpdmUgcHJvcGVydGllcyBsaWtlIGBzZWxmYCBhbmQgYHdpbmRvd2AuICovXG4gIHNhZmVEZWZpbmVQcm9wZXJ0eShsb2NhbCwgdG9TdHJpbmdUYWdTeW0sIHsgZ2V0OiAoKSA9PiAnV2luZG93JyB9KTtcbiAgY29uc3Qgd3JhcHBlciA9IG5ldyBQcm94eVNhZmUobG9jYWwsIHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgZGVmaW5lUHJvcGVydHkoXywgbmFtZSwgZGVzYykge1xuICAgICAgY29uc3QgaXNTdHIgPSBpc1N0cmluZyhuYW1lKTtcbiAgICAgIGlmICghaXNTdHIgfHwgIWlzRnJhbWVJbmRleChuYW1lKSkge1xuICAgICAgICBzYWZlRGVmaW5lUHJvcGVydHkobG9jYWwsIG5hbWUsIGRlc2MpO1xuICAgICAgICBpZiAoaXNTdHIpIHNldEV2ZW50SGFuZGxlcihuYW1lKTtcbiAgICAgICAgZGVsZXRlIHJlYWRvbmx5c1tuYW1lXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgZGVsZXRlUHJvcGVydHkoXywgbmFtZSkge1xuICAgICAgaWYgKCEobmFtZSBpbiB1bmZvcmdlYWJsZXMpICYmIGRlbGV0ZSBsb2NhbFtuYW1lXSkge1xuICAgICAgICBpZiAoZ2xvYmFscy5oYXMobmFtZSkpIHtcbiAgICAgICAgICBpZiAoZ2xvYmFscyA9PT0gZ2xvYmFsS2V5c1NldCkge1xuICAgICAgICAgICAgZ2xvYmFscyA9IGdsb2JhbEtleXNTZXQuY2xvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZ2xvYmFscy5kZWxldGUobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBSZWR1Y2luZyBcInN0ZXBwYWJpbGl0eVwiIHNvIGl0IGRvZXNuJ3QgZ2V0IGluIHRoZSB3YXkgb2YgZGVidWdnaW5nIG90aGVyIHBhcnRzIG9mIG91ciBjb2RlLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXR1cm4tYXNzaWduLCBuby1uZXN0ZWQtdGVybmFyeVxuICAgIGdldDogKF8sIG5hbWUpID0+IChuYW1lID09PSAndW5kZWZpbmVkJyB8fCBuYW1lID09PSBzY29wZVN5bSA/IHVuZGVmaW5lZFxuICAgICAgOiAoXyA9IGxvY2FsW25hbWVdKSAhPT0gdW5kZWZpbmVkIHx8IG5hbWUgaW4gbG9jYWwgPyBfXG4gICAgICAgIDogcmVzb2x2ZVByb3AobmFtZSwgd3JhcHBlciwgZ2xvYmFscywgbG9jYWwpXG4gICAgKSxcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXywgbmFtZSkge1xuICAgICAgY29uc3Qgb3duRGVzYyA9IGRlc2NyaWJlUHJvcGVydHkobG9jYWwsIG5hbWUpO1xuICAgICAgY29uc3QgZGVzYyA9IG93bkRlc2MgfHwgZ2xvYmFscy5oYXMobmFtZSkgJiYgZGVzY3JpYmVQcm9wZXJ0eShnbG9iYWwsIG5hbWUpO1xuICAgICAgaWYgKCFkZXNjKSByZXR1cm47XG4gICAgICBpZiAoZ2V0T3duUHJvcChkZXNjLCAndmFsdWUnKSA9PT0gd2luZG93KSB7XG4gICAgICAgIGRlc2MudmFsdWUgPSB3cmFwcGVyO1xuICAgICAgfVxuICAgICAgLy8gcHJldmVudGluZyBzcGVjIHZpb2xhdGlvbiAtIHdlIG11c3QgbWlycm9yIGFuIHVua25vd24gdW5mb3JnZWFibGUgcHJvcFxuICAgICAgaWYgKCFvd25EZXNjICYmICFnZXRPd25Qcm9wKGRlc2MsICdjb25maWd1cmFibGUnKSkge1xuICAgICAgICBjb25zdCBnZXQgPSBnZXRPd25Qcm9wKGRlc2MsICdnZXQnKTtcbiAgICAgICAgaWYgKGdldCkgZGVzYy5nZXQgPSBnZXQ6OmJpbmQoZ2xvYmFsKTtcbiAgICAgICAgc2FmZURlZmluZVByb3BlcnR5KGxvY2FsLCBuYW1lLCBkZXNjKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXNjO1xuICAgIH0sXG4gICAgaGFzOiAoXywgbmFtZSkgPT4gbmFtZSBpbiBsb2NhbCB8fCBuYW1lIGluIGluaGVyaXRlZEtleXMgfHwgZ2xvYmFscy5oYXMobmFtZSksXG4gICAgb3duS2V5czogKCkgPT4gbWFrZU93bktleXMobG9jYWwsIGdsb2JhbHMpLFxuICAgIHByZXZlbnRFeHRlbnNpb25zKCkge30sXG4gICAgc2V0KF8sIG5hbWUsIHZhbHVlKSB7XG4gICAgICBjb25zdCBpc1N0ciA9IGlzU3RyaW5nKG5hbWUpO1xuICAgICAgbGV0IHJlYWRvbmx5ID0gcmVhZG9ubHlzW25hbWVdO1xuICAgICAgaWYgKHJlYWRvbmx5ID09PSAxKSB7XG4gICAgICAgIHJlYWRvbmx5ID0gZ2xvYmFscy5oYXMobmFtZSkgPyAyIDogMDtcbiAgICAgICAgcmVhZG9ubHlzW25hbWVdID0gcmVhZG9ubHk7XG4gICAgICB9XG4gICAgICBpZiAoIXJlYWRvbmx5ICYmICghaXNTdHIgfHwgIWlzRnJhbWVJbmRleChuYW1lKSkpIHtcbiAgICAgICAgbG9jYWxbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGlzU3RyKSBzZXRFdmVudEhhbmRsZXIobmFtZSwgdmFsdWUsIGdsb2JhbHMsIGV2ZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICB9KTtcbiAgZm9yIChjb25zdCBuYW1lIGluIHVuZm9yZ2VhYmxlcykgeyAvKiBwcm90byBpcyBudWxsICovLy8gZXNsaW50LWRpc2FibGUtbGluZSBndWFyZC1mb3ItaW5cbiAgICBjb25zdCBkZXNjID0gdW5mb3JnZWFibGVzW25hbWVdO1xuICAgIGlmIChuYW1lID09PSAnd2luZG93JyB8fCBuYW1lID09PSAndG9wJyAmJiBJU19UT1ApIHtcbiAgICAgIGRlbGV0ZSBkZXNjLmdldDtcbiAgICAgIGRlbGV0ZSBkZXNjLnNldDtcbiAgICAgIGRlc2MudmFsdWUgPSB3cmFwcGVyO1xuICAgIH1cbiAgICAvKiBwcm90byBpcyBhbHJlYWR5IG51bGwgKi8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBkZWZpbmVQcm9wZXJ0eShsb2NhbCwgbmFtZSwgZGVzYyk7XG4gIH1cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIG1ha2VPd25LZXlzKGxvY2FsLCBnbG9iYWxzKSB7XG4gIC8qKiBOb3RlIHRoYXQgYXJyYXlzIGNhbiBiZSBlYXZlc2Ryb3BwZWQgdmlhIHByb3RvdHlwZSBzZXR0ZXJzIGxpa2UgJzAnLCcxJywuLi5cbiAgICogb24gYHB1c2hgIGFuZCBgYXJyW2ldID0gMTIzYCwgYXMgd2VsbCBhcyB2aWEgZ2V0dGVycyBpZiB5b3UgcmVhZCBiZXlvbmRcbiAgICogaXRzIGxlbmd0aCBvciBmcm9tIGFuIHVuYXNzaWduZWQgYGhvbGVgLiAqL1xuICBjb25zdCBuYW1lcyA9IGdldE93blByb3BlcnR5TmFtZXMobG9jYWwpOjpmaWx0ZXIobm90SW5jbHVkZWRJbiwgZ2xvYmFscyk7XG4gIGNvbnN0IHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMobG9jYWwpOjpmaWx0ZXIobm90SW5jbHVkZWRJbiwgZ2xvYmFscyk7XG4gIGNvbnN0IGZyYW1lSW5kZXhlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMCwgczsgZ2V0T2JqZWN0VHlwZVRhZyhnbG9iYWxbcyA9IGAke2l9YF0pID09PSAnV2luZG93JzsgaSArPSAxKSB7XG4gICAgaWYgKCEocyBpbiBsb2NhbCkpIHtcbiAgICAgIHNldE93blByb3AoZnJhbWVJbmRleGVzLCBzLCBzKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNhZmVDb25jYXQoXG4gICAgW10sXG4gICAgZ2xvYmFscyA9PT0gZ2xvYmFsS2V5c1NldCA/IGdsb2JhbEtleXMgOiBnbG9iYWxzLnRvQXJyYXkoKSxcbiAgICBmcmFtZUluZGV4ZXMsXG4gICAgbmFtZXMsXG4gICAgc3ltYm9scyxcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVByb3AobmFtZSwgd3JhcHBlciwgZ2xvYmFscywgbG9jYWwpIHtcbiAgbGV0IHZhbHVlID0gYm91bmRNZXRob2RzW25hbWVdO1xuICBpZiAodmFsdWUgPT09IE1BWUJFKSB7XG4gICAgdmFsdWUgPSB3aW5kb3dbbmFtZV07XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlOjpiaW5kKHdpbmRvdyk7XG4gICAgfVxuICAgIGJvdW5kTWV0aG9kc1tuYW1lXSA9IHZhbHVlO1xuICB9XG4gIGNvbnN0IGNhbkNvcHkgPSB2YWx1ZSB8fCBuYW1lIGluIGluaGVyaXRlZEtleXMgfHwgZ2xvYmFscy5oYXMobmFtZSk7XG4gIGlmICghdmFsdWUgJiYgKGNhbkNvcHkgfHwgaXNTdHJpbmcobmFtZSkgJiYgaXNGcmFtZUluZGV4KG5hbWUpKSkge1xuICAgIHZhbHVlID0gZ2xvYmFsW25hbWVdO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gd2luZG93KSB7XG4gICAgdmFsdWUgPSB3cmFwcGVyO1xuICB9XG4gIGlmIChjYW5Db3B5ICYmIChcbiAgICBpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc09iamVjdCh2YWx1ZSkgJiYgbmFtZSAhPT0gJ2V2ZW50J1xuICAgIC8vIHdpbmRvdy5ldmVudCBjb250YWlucyB0aGUgY3VycmVudCBldmVudCBzbyBpdCdzIGFsd2F5cyBkaWZmZXJlbnRcbiAgKSkge1xuICAgIGxvY2FsW25hbWVdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBzZXRFdmVudEhhbmRsZXIobmFtZSwgdmFsdWUsIGdsb2JhbHMsIGV2ZW50cykge1xuICAvLyBTcG9vZmVkIFN0cmluZyBpbmRleCBnZXR0ZXJzIHdvbid0IGJlIGNhbGxlZCB3aXRoaW4gbGVuZ3RoLCBsZW5ndGggaXRzZWxmIGlzIHVuZm9yZ2VhYmxlXG4gIGlmIChuYW1lLmxlbmd0aCA8IDMgfHwgbmFtZVswXSAhPT0gJ28nIHx8IG5hbWVbMV0gIT09ICduJyB8fCAhZ2xvYmFscy5oYXMobmFtZSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbmFtZSA9IG5hbWU6OnNsaWNlKDIpO1xuICB3aW5kb3c6Om9mZihuYW1lLCBldmVudHNbbmFtZV0pO1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAvLyB0aGUgaGFuZGxlciB3aWxsIGJlIHVuaXF1ZSBzbyB0aGF0IG9uZSBzY3JpcHQgY291bGRuJ3QgcmVtb3ZlIHNvbWV0aGluZyBnbG9iYWxcbiAgICAvLyBsaWtlIGNvbnNvbGUubG9nIHNldCBieSBhbm90aGVyIHNjcmlwdFxuICAgIHdpbmRvdzo6b24obmFtZSwgZXZlbnRzW25hbWVdID0gdmFsdWU6OmJpbmQod2luZG93KSk7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIGV2ZW50c1tuYW1lXTtcbiAgfVxufVxuXG4vKiogQHRoaXMge0Zhc3RMb29rdXB8U2V0fSAqL1xuZnVuY3Rpb24gbm90SW5jbHVkZWRJbihrZXkpIHtcbiAgcmV0dXJuICF0aGlzLmhhcyhrZXkpO1xufVxuIiwiaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbi8vIE5lc3RlZCBvYmplY3RzOiBzY3JpcHRJZCAtPiBrZXlOYW1lIC0+IGxpc3RlbmVySWQgLT4gR01WYWx1ZUNoYW5nZUxpc3RlbmVyXG5leHBvcnQgY29uc3QgY2hhbmdlSG9va3MgPSBjcmVhdGVOdWxsT2JqKCk7XG5cbmNvbnN0IGRhdGFEZWNvZGVycyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBvOiBqc29uUGFyc2UsXG4gIG46IHZhbCA9PiArdmFsLFxuICBiOiB2YWwgPT4gdmFsID09PSAndHJ1ZScsXG59O1xuXG5icmlkZ2UuYWRkSGFuZGxlcnMoe1xuICBVcGRhdGVkVmFsdWVzKHVwZGF0ZXMpIHtcbiAgICBjb25zdCB7IHBhcnRpYWwgfSA9IHVwZGF0ZXM7XG4gICAgb2JqZWN0S2V5cyh1cGRhdGVzKTo6Zm9yRWFjaChpZCA9PiB7XG4gICAgICBjb25zdCBvbGREYXRhID0gc3RvcmUudmFsdWVzW2lkXTtcbiAgICAgIGlmIChvbGREYXRhKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHVwZGF0ZXNbaWRdO1xuICAgICAgICBjb25zdCBrZXlIb29rcyA9IGNoYW5nZUhvb2tzW2lkXTtcbiAgICAgICAgaWYgKGtleUhvb2tzKSBjaGFuZ2VkUmVtb3RlbHkoa2V5SG9va3MsIG9sZERhdGEsIHVwZGF0ZSk7XG4gICAgICAgIGlmIChwYXJ0aWFsKSBhcHBseVBhcnRpYWxVcGRhdGUob2xkRGF0YSwgdXBkYXRlKTtcbiAgICAgICAgZWxzZSBzdG9yZS52YWx1ZXNbaWRdID0gdXBkYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVmFsdWVzKGlkKSB7XG4gIHJldHVybiBzdG9yZS52YWx1ZXNbaWRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHVtcFZhbHVlKGlkLCBrZXksIHZhbCwgcmF3LCBvbGRSYXcsIGNvbnRleHQpIHtcbiAgYnJpZGdlLnBvc3QoJ1VwZGF0ZVZhbHVlJywgeyBpZCwga2V5LCB2YWx1ZTogcmF3IH0sIGNvbnRleHQpO1xuICBpZiAocmF3ICE9PSBvbGRSYXcpIHtcbiAgICBjb25zdCBob29rcyA9IGNoYW5nZUhvb2tzW2lkXT8uW2tleV07XG4gICAgaWYgKGhvb2tzKSBub3RpZnlDaGFuZ2UoaG9va3MsIGtleSwgdmFsLCByYXcsIG9sZFJhdyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVZhbHVlKHJhdykge1xuICBjb25zdCB0eXBlID0gcmF3WzBdO1xuICBjb25zdCBoYW5kbGUgPSBkYXRhRGVjb2RlcnNbdHlwZV07XG4gIGxldCB2YWwgPSByYXc6OnNsaWNlKDEpO1xuICB0cnkge1xuICAgIGlmIChoYW5kbGUpIHZhbCA9IGhhbmRsZSh2YWwpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52LkRFQlVHKSBsb2coJ3dhcm4nLCBbJ0dNX2dldFZhbHVlJ10sIGUpO1xuICB9XG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGFwcGx5UGFydGlhbFVwZGF0ZShkYXRhLCB1cGRhdGUpIHtcbiAgb2JqZWN0S2V5cyh1cGRhdGUpOjpmb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgdmFsID0gdXBkYXRlW2tleV07XG4gICAgaWYgKHZhbCkgZGF0YVtrZXldID0gdmFsO1xuICAgIGVsc2UgZGVsZXRlIGRhdGFba2V5XTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZWRSZW1vdGVseShrZXlIb29rcywgZGF0YSwgdXBkYXRlKSB7XG4gIG9iamVjdEtleXModXBkYXRlKTo6Zm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IGhvb2tzID0ga2V5SG9va3Nba2V5XTtcbiAgICBpZiAoaG9va3MpIHtcbiAgICAgIGxldCByYXcgPSB1cGRhdGVba2V5XTtcbiAgICAgIGlmICghcmF3KSByYXcgPSB1bmRlZmluZWQ7IC8vIHBhcnRpYWwgYHVwZGF0ZWAgY3VycmVudGx5IHVzZXMgbnVsbCBmb3IgZGVsZXRlZCB2YWx1ZXNcbiAgICAgIGNvbnN0IG9sZFJhdyA9IGRhdGFba2V5XTtcbiAgICAgIGlmIChvbGRSYXcgIT09IHJhdykge1xuICAgICAgICBkYXRhW2tleV0gPSByYXc7IC8vIHdpbGwgYmUgZGVsZXRlZCBsYXRlciBpbiBhcHBseVBhcnRpYWxVcGRhdGUgaWYgZW1wdHlcbiAgICAgICAgbm90aWZ5Q2hhbmdlKGhvb2tzLCBrZXksIHVuZGVmaW5lZCwgcmF3LCBvbGRSYXcsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5vdGlmeUNoYW5nZShob29rcywga2V5LCB2YWwsIHJhdywgb2xkUmF3LCByZW1vdGUgPSBmYWxzZSkge1xuICAvLyBjb252ZXJ0aW5nIGBudWxsYCBmcm9tIG1lc3NhZ2luZyB0byBgdW5kZWZpbmVkYCB0byBtYXRjaCB0aGUgZG9jdW1lbnRhdGlvbiBhbmQgVE1cbiAgY29uc3Qgb2xkVmFsID0gKG9sZFJhdyB8fCB1bmRlZmluZWQpICYmIGRlY29kZVZhbHVlKG9sZFJhdyk7XG4gIGNvbnN0IG5ld1ZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkICYmIHJhdyA/IGRlY29kZVZhbHVlKHJhdykgOiB2YWw7XG4gIG9iamVjdFZhbHVlcyhob29rcyk6OmZvckVhY2goZm4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBmbihrZXksIG9sZFZhbCwgbmV3VmFsLCByZW1vdGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZygnZXJyb3InLCBbJ0dNX2FkZFZhbHVlQ2hhbmdlTGlzdGVuZXInLCAnY2FsbGJhY2snXSwgZSk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBicmlkZ2UgZnJvbSAnLi9icmlkZ2UnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHsgbWFrZUdtQXBpV3JhcHBlciB9IGZyb20gJy4vZ20tYXBpLXdyYXBwZXInO1xuaW1wb3J0ICcuL2dtLXZhbHVlcyc7XG5pbXBvcnQgJy4vbm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgJy4vcmVxdWVzdHMnO1xuaW1wb3J0ICcuL3RhYnMnO1xuaW1wb3J0IHsgYmluZEV2ZW50cywgSU5KRUNUX1BBR0UsIElOSkVDVF9DT05URU5UIH0gZnJvbSAnLi4vdXRpbCc7XG5cbi8vIE1ha2Ugc3VyZSB0byBjYWxsIHNhZmU6Om1ldGhvZHMoKSBpbiBjb2RlIHRoYXQgbWF5IHJ1biBhZnRlciB1c2Vyc2NyaXB0c1xuXG5jb25zdCBzZW5kU2V0VGltZW91dCA9ICgpID0+IGJyaWRnZS5zZW5kKCdTZXRUaW1lb3V0JywgMCk7XG4vLyBXYWl0aW5nIGZvciBpbmplY3Rpb24gb2YgY29udGVudCBtb2RlIHNjcmlwdHMgdGhhdCBkb24ndCBydW4gb24gZG9jdW1lbnQtc3RhcnRcbmxldCByZXNvbHZlcnM7XG5sZXQgd2FpdGVycztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZShcbiAgd2ViSWQsXG4gIGNvbnRlbnRJZCxcbiAgaW52b2tlSG9zdCxcbikge1xuICBsZXQgaW52b2tlR3Vlc3Q7XG4gIGlmIChwcm9jZXNzLmVudi5IQU5EU0hBS0VfSUQpIHtcbiAgICB3aW5kb3c6Om9uKHByb2Nlc3MuZW52LkhBTkRTSEFLRV9JRCArIHByb2Nlc3MuZW52LkhBTkRTSEFLRV9BQ0ssIGUgPT4ge1xuICAgICAgZSA9IGU6OmdldERldGFpbCgpO1xuICAgICAgd2ViSWQgPSBlWzBdO1xuICAgICAgY29udGVudElkID0gZVsxXTtcbiAgICB9LCB7IF9fcHJvdG9fXzogbnVsbCwgb25jZTogdHJ1ZSwgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICB3aW5kb3c6OmZpcmUobmV3IEN1c3RvbUV2ZW50U2FmZShwcm9jZXNzLmVudi5IQU5EU0hBS0VfSUQpKTtcbiAgfVxuICBicmlkZ2UuZGF0YUtleSA9IGNvbnRlbnRJZDtcbiAgaWYgKGludm9rZUhvc3QpIHtcbiAgICByZXNvbHZlcnMgPSBjcmVhdGVOdWxsT2JqKCk7XG4gICAgd2FpdGVycyA9IGNyZWF0ZU51bGxPYmooKTtcbiAgICBicmlkZ2UubW9kZSA9IElOSkVDVF9DT05URU5UO1xuICAgIGJyaWRnZS5wb3N0ID0gKGNtZCwgZGF0YSwgY29udGV4dCwgbm9kZSkgPT4ge1xuICAgICAgaW52b2tlSG9zdCh7IGNtZCwgZGF0YSwgbm9kZSwgZGF0YUtleTogKGNvbnRleHQgfHwgYnJpZGdlKS5kYXRhS2V5IH0sIElOSkVDVF9DT05URU5UKTtcbiAgICB9O1xuICAgIGludm9rZUd1ZXN0ID0gKGNtZCwgZGF0YSwgcmVhbG0sIG5vZGUpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5pbmZvKCdbYnJpZGdlLmd1ZXN0LmNvbnRlbnRdIHJlY2VpdmVkJywgeyBjbWQsIGRhdGEsIG5vZGUgfSk7XG4gICAgICBicmlkZ2Uub25IYW5kbGUoeyBjbWQsIGRhdGEsIG5vZGUgfSk7XG4gICAgfTtcbiAgICBnbG9iYWwuY2hyb21lID0gdW5kZWZpbmVkO1xuICAgIGdsb2JhbC5icm93c2VyID0gdW5kZWZpbmVkO1xuICAgIGJyaWRnZS5hZGRIYW5kbGVycyh7XG4gICAgICBSdW5BdDogbmFtZSA9PiByZXNvbHZlcnNbbmFtZV0oKSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBicmlkZ2UubW9kZSA9IElOSkVDVF9QQUdFO1xuICAgIGJpbmRFdmVudHMod2ViSWQsIGNvbnRlbnRJZCwgYnJpZGdlKTtcbiAgICBicmlkZ2UuYWRkSGFuZGxlcnMoe1xuICAgICAgLyoqIEB0aGlzIHtOb2RlfSBjb250ZW50V2luZG93ICovXG4gICAgICBXcml0ZVZhdWx0KGlkKSB7XG4gICAgICAgIHRoaXNbaWRdID0gVkFVTFQ7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBpbnZva2VHdWVzdDtcbn1cblxuYnJpZGdlLmFkZEhhbmRsZXJzKHtcbiAgQ29tbWFuZCh7IGlkLCBjYXAsIGV2dCB9KSB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBldnQua2V5ID8gS2V5Ym9hcmRFdmVudFNhZmUgOiBNb3VzZUV2ZW50U2FmZTtcbiAgICBjb25zdCBmbiA9IHN0b3JlLmNvbW1hbmRzW2Ake2lkfToke2NhcH1gXTtcbiAgICBpZiAoZm4pIGZuKG5ldyBjb25zdHJ1Y3RvcihldnQudHlwZSwgZXZ0KSk7XG4gIH0sXG4gIC8qKiBAdGhpcyB7Tm9kZX0gKi9cbiAgQ2FsbGJhY2soeyBpZCwgZGF0YSB9KSB7XG4gICAgY29uc3QgZm4gPSBicmlkZ2UuY2FsbGJhY2tzW2lkXTtcbiAgICBkZWxldGUgYnJpZGdlLmNhbGxiYWNrc1tpZF07XG4gICAgaWYgKGZuKSB0aGlzOjpmbihkYXRhKTtcbiAgfSxcbiAgU2NyaXB0RGF0YSh7IGluZm8sIGl0ZW1zLCBydW5BdCB9KSB7XG4gICAgaWYgKGluZm8pIHtcbiAgICAgIGFzc2lnbihicmlkZ2UsIGluZm8pO1xuICAgIH1cbiAgICBpZiAoaXRlbXMpIHtcbiAgICAgIGlmICh3YWl0ZXJzICYmIHJ1bkF0ICE9PSAnc3RhcnQnKSB7XG4gICAgICAgIHdhaXRlcnNbcnVuQXRdID0gbmV3IFByb21pc2VTYWZlKHJlc29sdmUgPT4geyByZXNvbHZlcnNbcnVuQXRdID0gcmVzb2x2ZTsgfSk7XG4gICAgICB9XG4gICAgICBpdGVtczo6Zm9yRWFjaChjcmVhdGVTY3JpcHREYXRhKTtcbiAgICAgIC8vIEZGIGJ1ZyB3b3JrYXJvdW5kIHRvIGVuYWJsZSBwcm9jZXNzaW5nIG9mIHNvdXJjZVVSTCBpbiBpbmplY3RlZCBwYWdlIHNjcmlwdHNcbiAgICAgIGlmIChJU19GSVJFRk9YICYmIGJyaWRnZS5tb2RlID09PSBJTkpFQ1RfUEFHRSkge1xuICAgICAgICBicmlkZ2UucG9zdCgnSW5qZWN0TGlzdCcsIHJ1bkF0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIEV4cG9zZSgpIHtcbiAgICB3aW5kb3cuZXh0ZXJuYWwuVmlvbGVudG1vbmtleSA9IHtcbiAgICAgIHZlcnNpb246IHByb2Nlc3MuZW52LlZNX1ZFUixcbiAgICAgIGlzSW5zdGFsbGVkOiAobmFtZSwgbmFtZXNwYWNlKSA9PiAoXG4gICAgICAgIGJyaWRnZS5zZW5kKCdHZXRTY3JpcHRWZXInLCB7IG1ldGE6IHsgbmFtZSwgbmFtZXNwYWNlIH0gfSlcbiAgICAgICksXG4gICAgfTtcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBjcmVhdGVTY3JpcHREYXRhKGl0ZW0pIHtcbiAgY29uc3QgeyBkYXRhS2V5IH0gPSBpdGVtO1xuICBzdG9yZS52YWx1ZXNbaXRlbS5wcm9wcy5pZF0gPSBpdGVtLnZhbHVlcyB8fCBjcmVhdGVOdWxsT2JqKCk7XG4gIGlmICh3aW5kb3dbZGF0YUtleV0pIHsgLy8gZXhlY3V0ZVNjcmlwdCByYW4gYmVmb3JlIEdldEluamVjdGVkIHJlc3BvbnNlXG4gICAgb25Db2RlU2V0KGl0ZW0sIHdpbmRvd1tkYXRhS2V5XSk7XG4gIH0gZWxzZSB7XG4gICAgc2FmZURlZmluZVByb3BlcnR5KHdpbmRvdywgZGF0YUtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgc2V0OiBmbiA9PiBvbkNvZGVTZXQoaXRlbSwgZm4pLFxuICAgIH0pO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9uQ29kZVNldChpdGVtLCBmbikge1xuICBjb25zdCB7IGRhdGFLZXksIHN0YWdlIH0gPSBpdGVtO1xuICAvLyBkZWxldGluZyBub3cgdG8gcHJldmVudCBpbnRlcmNlcHRpb24gdmlhIERPTU5vZGVSZW1vdmVkIG9uIGVsOjpyZW1vdmUoKVxuICBkZWxldGUgd2luZG93W2RhdGFLZXldO1xuICBpZiAocHJvY2Vzcy5lbnYuREVCVUcpIHtcbiAgICBsb2coJ2luZm8nLCBbYnJpZGdlLm1vZGVdLCBpdGVtLmRpc3BsYXlOYW1lKTtcbiAgfVxuICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgYnJpZGdlLnBvc3QoJ1J1bicsIGl0ZW0ucHJvcHMuaWQsIGl0ZW0pO1xuICAgIG1ha2VHbUFwaVdyYXBwZXIoaXRlbSk6OmZuKGxvZ2dpbmcuZXJyb3IpO1xuICB9O1xuICBjb25zdCBlbCA9IGRvY3VtZW50OjpnZXRDdXJyZW50U2NyaXB0KCk7XG4gIGNvbnN0IHdhaXQgPSB3YWl0ZXJzPy5bc3RhZ2VdO1xuICBpZiAoZWwpIGVsOjpyZW1vdmUoKTtcbiAgaWYgKHdhaXQpIHtcbiAgICB3YWl0ZXJzW3N0YWdlXSA9IChzdGFnZSA9PT0gJ2lkbGUnID8gd2FpdDo6dGhlbihzZW5kU2V0VGltZW91dCkgOiB3YWl0KTo6dGhlbihydW4pO1xuICB9IGVsc2Uge1xuICAgIHJ1bigpO1xuICB9XG59XG4iLCJpbXBvcnQgYnJpZGdlIGZyb20gJy4vYnJpZGdlJztcblxubGV0IGxhc3RJZCA9IDA7XG5jb25zdCBub3RpZmljYXRpb25zID0gY3JlYXRlTnVsbE9iaigpO1xuXG5icmlkZ2UuYWRkSGFuZGxlcnMoe1xuICBOb3RpZmljYXRpb25DbGlja2VkKGlkKSB7XG4gICAgY29uc3QgZm4gPSBub3RpZmljYXRpb25zW2lkXT8ub25jbGljaztcbiAgICBpZiAoZm4pIGZuKCk7XG4gIH0sXG4gIE5vdGlmaWNhdGlvbkNsb3NlZChpZCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBub3RpZmljYXRpb25zW2lkXTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgZGVsZXRlIG5vdGlmaWNhdGlvbnNbaWRdO1xuICAgICAgY29uc3QgZm4gPSBvcHRpb25zLm9uZG9uZTtcbiAgICAgIGlmIChmbikgZm4oKTtcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTm90aWZpY2F0aW9uQ3JlYXRlKG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgbGFzdElkICs9IDE7XG4gIG5vdGlmaWNhdGlvbnNbbGFzdElkXSA9IG9wdGlvbnM7XG4gIGJyaWRnZS5wb3N0KCdOb3RpZmljYXRpb24nLCB7XG4gICAgaWQ6IGxhc3RJZCxcbiAgICB0ZXh0OiBvcHRpb25zLnRleHQsXG4gICAgdGl0bGU6IG9wdGlvbnMudGl0bGUsXG4gICAgaW1hZ2U6IG9wdGlvbnMuaW1hZ2UsXG4gIH0sIGNvbnRleHQpO1xuICByZXR1cm4gbGFzdElkO1xufVxuIiwiaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5cbmNvbnN0IGlkTWFwID0gY3JlYXRlTnVsbE9iaigpO1xuXG5icmlkZ2UuYWRkSGFuZGxlcnMoe1xuICBIdHRwUmVxdWVzdGVkKG1zZykge1xuICAgIGNvbnN0IHJlcSA9IGlkTWFwW21zZy5pZF07XG4gICAgaWYgKHJlcSkgY2FsbGJhY2socmVxLCBtc2cpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlcXVlc3RDcmVhdGUob3B0cywgY29udGV4dCwgZmlsZU5hbWUpIHtcbiAgaWYgKCFvcHRzLnVybCkgdGhyb3cgbmV3IEVycm9yU2FmZSgnUmVxdWlyZWQgcGFyYW1ldGVyIFwidXJsXCIgaXMgbWlzc2luZy4nKTtcbiAgY29uc3Qgc2NyaXB0SWQgPSBjb250ZXh0LmlkO1xuICBjb25zdCBpZCA9IGdldFVuaXFJZFNhZmUoYFZNeGhyJHtzY3JpcHRJZH1gKTtcbiAgY29uc3QgcmVxID0ge1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBpZCxcbiAgICBzY3JpcHRJZCxcbiAgICBvcHRzLFxuICB9O1xuICBzdGFydChyZXEsIGNvbnRleHQsIGZpbGVOYW1lKTtcbiAgcmV0dXJuIHtcbiAgICBhYm9ydCgpIHtcbiAgICAgIGJyaWRnZS5wb3N0KCdBYm9ydFJlcXVlc3QnLCBpZCwgY29udGV4dCk7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRhKHJlcSwgbXNnKSB7XG4gIGxldCByZXMgPSByZXEucmF3O1xuICBzd2l0Y2ggKHJlcS5vcHRzLnJlc3BvbnNlVHlwZSkge1xuICBjYXNlICdqc29uJzpcbiAgICByZXMgPSBqc29uUGFyc2UocmVzKTtcbiAgICBicmVhaztcbiAgY2FzZSAnZG9jdW1lbnQnOlxuICAgIHJlcyA9IG5ldyBET01QYXJzZXJTYWZlKCk6OnBhcnNlRnJvbVN0cmluZyhyZXMsXG4gICAgICAvLyBDdXR0aW5nIGV2ZXJ5dGhpbmcgYWZ0ZXIgLCBvciA7IGFuZCB0cmltbWluZyB3aGl0ZXNwYWNlXG4gICAgICAvWyw7XS4qfFxccysvZzo6cmVnZXhwUmVwbGFjZShtc2cuY29udGVudFR5cGUsICcnKSB8fCAndGV4dC9odG1sJyk7XG4gICAgYnJlYWs7XG4gIGRlZmF1bHQ6XG4gIH1cbiAgLy8gYHJlc3BvbnNlYCBpcyBzZW50IG9ubHkgd2hlbiBjaGFuZ2VkIHNvIHdlIG5lZWQgdG8gcmVtZW1iZXIgaXQgZm9yIHJlc3BvbnNlLWxlc3MgZXZlbnRzXG4gIHJlcS5yZXNwb25zZSA9IHJlcztcbiAgLy8gYHJhd2AgaXMgZGVjb2RlZCBvbmNlIHBlciBgcmVzcG9uc2VgIGNoYW5nZSBzbyB3ZSByZXVzZSB0aGUgcmVzdWx0IGp1c3QgbGlrZSBuYXRpdmUgWEhSXG4gIGRlbGV0ZSByZXEucmF3O1xuICByZXR1cm4gcmVzO1xufVxuXG4vLyByZXF1ZXN0IG9iamVjdCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGNhbGxiYWNrKHJlcSwgbXNnKSB7XG4gIGNvbnN0IHsgb3B0cyB9ID0gcmVxO1xuICBjb25zdCBjYiA9IG9wdHNbYG9uJHttc2cudHlwZX1gXTtcbiAgaWYgKGNiKSB7XG4gICAgY29uc3QgeyBkYXRhLCBkb3dubG9hZElkIH0gPSBtc2c7XG4gICAgaWYgKGRvd25sb2FkSWQpIHtcbiAgICAgIGNiKG1zZyk7XG4gICAgICBpZiAobXNnLnR5cGUgPT09ICdsb2FkJykgZGVsZXRlIGlkTWFwW3JlcS5pZF07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHJlc3BvbnNlLFxuICAgICAgcmVzcG9uc2VIZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgcmVzcG9uc2VUZXh0OiB0ZXh0LFxuICAgIH0gPSBkYXRhO1xuICAgIGlmIChyZXNwb25zZSAmJiAhKCdyYXcnIGluIHJlcSkpIHtcbiAgICAgIHJlcS5yYXcgPSByZXNwb25zZTtcbiAgICB9XG4gICAgZGVmaW5lUHJvcGVydHkoZGF0YSwgJ3Jlc3BvbnNlJywge1xuICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgZ2V0KCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9ICdyYXcnIGluIHJlcSA/IHBhcnNlRGF0YShyZXEsIG1zZykgOiByZXEucmVzcG9uc2U7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICdyZXNwb25zZScsIHsgX19wcm90b19fOiBudWxsLCB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAoaGVhZGVycyAhPSBudWxsKSByZXEuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgaWYgKHRleHQgIT0gbnVsbCkgcmVxLnRleHQgPSBnZXRPd25Qcm9wKHRleHQsIDApID09PSAnc2FtZScgPyByZXNwb25zZSA6IHRleHQ7XG4gICAgc2V0T3duUHJvcChkYXRhLCAnY29udGV4dCcsIG9wdHMuY29udGV4dCk7XG4gICAgc2V0T3duUHJvcChkYXRhLCAncmVzcG9uc2VIZWFkZXJzJywgcmVxLmhlYWRlcnMpO1xuICAgIHNldE93blByb3AoZGF0YSwgJ3Jlc3BvbnNlVGV4dCcsIHJlcS50ZXh0KTtcbiAgICBjYihkYXRhKTtcbiAgfVxuICBpZiAobXNnLnR5cGUgPT09ICdsb2FkZW5kJykgZGVsZXRlIGlkTWFwW3JlcS5pZF07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0KHJlcSwgY29udGV4dCwgZmlsZU5hbWUpIHtcbiAgY29uc3QgeyBpZCwgb3B0cywgc2NyaXB0SWQgfSA9IHJlcTtcbiAgLy8gd2l0aENyZWRlbnRpYWxzIGlzIGZvciBHTTQgY29tcGF0aWJpbGl0eSBhbmQgdXNlZCBvbmx5IGlmIGBhbm9ueW1vdXNgIGlzIG5vdCBzZXQsXG4gIC8vIGl0J3MgdHJ1ZSBieSBkZWZhdWx0IHBlciB0aGUgc3RhbmRhcmQvaGlzdG9yaWNhbCBiZWhhdmlvciBvZiBnbXhoclxuICBjb25zdCB7IGRhdGEsIHdpdGhDcmVkZW50aWFscyA9IHRydWUsIGFub255bW91cyA9ICF3aXRoQ3JlZGVudGlhbHMgfSA9IG9wdHM7XG4gIGlkTWFwW2lkXSA9IHJlcTtcbiAgYnJpZGdlLnBvc3QoJ0h0dHBSZXF1ZXN0Jywge1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBpZCxcbiAgICBzY3JpcHRJZCxcbiAgICBhbm9ueW1vdXMsXG4gICAgZmlsZU5hbWUsXG4gICAgZGF0YTogZGF0YSA9PSBudWxsICYmIFtdXG4gICAgICAvLyBgYmluYXJ5YCBpcyBmb3IgVE0vR00tY29tcGF0aWJpbGl0eSArIG5vbi1vYmplY3RzID0gbXVzdCB1c2UgYSBzdHJpbmcgYGRhdGFgXG4gICAgICB8fCAob3B0cy5iaW5hcnkgfHwgIWlzT2JqZWN0KGRhdGEpKSAmJiBbYCR7ZGF0YX1gXVxuICAgICAgLy8gRkY1NisgY2FuIHNlbmQgYW55IGNsb25lYWJsZSBkYXRhIGRpcmVjdGx5LCBGRjUyLTU1IGNhbid0IGR1ZSB0byBodHRwczovL2J1Z3ppbC5sYS8xMzcxMjQ2XG4gICAgICB8fCBJU19GSVJFRk9YICYmIGJyaWRnZS51YS5icm93c2VyVmVyc2lvbiA+PSA1NiAmJiBbZGF0YV1cbiAgICAgIC8vIFRPRE86IHN1cHBvcnQgaHVnZSBkYXRhIGJ5IHNwbGl0dGluZyBpdCB0byBtdWx0aXBsZSBtZXNzYWdlc1xuICAgICAgfHwgYXdhaXQgZW5jb2RlQm9keShkYXRhKSxcbiAgICBldmVudHNUb05vdGlmeTogW1xuICAgICAgJ2Fib3J0JyxcbiAgICAgICdlcnJvcicsXG4gICAgICAnbG9hZCcsXG4gICAgICAnbG9hZGVuZCcsXG4gICAgICAnbG9hZHN0YXJ0JyxcbiAgICAgICdwcm9ncmVzcycsXG4gICAgICAncmVhZHlzdGF0ZWNoYW5nZScsXG4gICAgICAndGltZW91dCcsXG4gICAgXTo6ZmlsdGVyKGtleSA9PiBpc0Z1bmN0aW9uKGdldE93blByb3Aob3B0cywgYG9uJHtrZXl9YCkpKSxcbiAgICB4aHJUeXBlOiBnZXRSZXNwb25zZVR5cGUob3B0cy5yZXNwb25zZVR5cGUpLFxuICB9OjpwaWNrSW50b1RoaXMob3B0cywgW1xuICAgICdoZWFkZXJzJyxcbiAgICAnbWV0aG9kJyxcbiAgICAnb3ZlcnJpZGVNaW1lVHlwZScsXG4gICAgJ3Bhc3N3b3JkJyxcbiAgICAndGltZW91dCcsXG4gICAgJ3VybCcsXG4gICAgJ3VzZXInLFxuICBdKSwgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGdldFJlc3BvbnNlVHlwZSh7IHJlc3BvbnNlVHlwZSA9ICcnIH0pIHtcbiAgc3dpdGNoIChyZXNwb25zZVR5cGUpIHtcbiAgY2FzZSAnYXJyYXlidWZmZXInOlxuICBjYXNlICdibG9iJzpcbiAgICByZXR1cm4gcmVzcG9uc2VUeXBlO1xuICBjYXNlICdkb2N1bWVudCc6XG4gIGNhc2UgJ2pzb24nOlxuICBjYXNlICd0ZXh0JzpcbiAgY2FzZSAnJzpcbiAgICBicmVhaztcbiAgZGVmYXVsdDpcbiAgICBsb2coJ3dhcm4nLCBudWxsLCBgVW5rbm93biByZXNwb25zZVR5cGUgXCIke3Jlc3BvbnNlVHlwZX1cIixgXG4gICAgICArICcgc2VlIGh0dHBzOi8vdmlvbGVudG1vbmtleS5naXRodWIuaW8vYXBpL2dtLyNnbV94bWxodHRwcmVxdWVzdCBmb3IgbW9yZSBkZXRhaWwuJyk7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFBvbHlmaWxsIGZvciBDaHJvbWUncyBpbmFiaWxpdHkgdG8gc2VuZCBjb21wbGV4IHR5cGVzIG92ZXIgZXh0ZW5zaW9uIG1lc3NhZ2luZy5cbiAqIFdlJ3JlIGVuY29kaW5nIHRoZSBib2R5IGhlcmUsIG5vdCBpbiBjb250ZW50LCBiZWNhdXNlIHdlIHdhbnQgdG8gc3VwcG9ydCBGb3JtRGF0YVxuICogYW5kIFJlYWRhYmxlU3RyZWFtLCB3aGljaCBDaHJvbWUgY2FuJ3QgdHJhbnNmZXIgdG8gaXNvbGF0ZWQgd29ybGQgdmlhIEN1c3RvbUV2ZW50LlxuICovXG5hc3luYyBmdW5jdGlvbiBlbmNvZGVCb2R5KGJvZHkpIHtcbiAgY29uc3Qgd2FzQmxvYiA9IGdldE9iamVjdFR5cGVUYWcoYm9keSkgPT09ICdCbG9iJztcbiAgY29uc3QgYmxvYiA9IHdhc0Jsb2IgPyBib2R5IDogYXdhaXQgbmV3IFJlc3BvbnNlU2FmZShib2R5KTo6c2FmZVJlc3BvbnNlQmxvYigpO1xuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlclNhZmUoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlU2FmZShyZXNvbHZlID0+IHtcbiAgICByZWFkZXI6Om9uKCdsb2FkJywgKCkgPT4gcmVzb2x2ZShbXG4gICAgICByZWFkZXI6OmdldFJlYWRlclJlc3VsdCgpLFxuICAgICAgYmxvYjo6Z2V0QmxvYlR5cGUoKSxcbiAgICAgIHdhc0Jsb2IsXG4gICAgXSkpO1xuICAgIHJlYWRlcjo6cmVhZEFzRGF0YVVSTChibG9iKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgY29tbWFuZHM6IGNyZWF0ZU51bGxPYmooKSxcbiAgdmFsdWVzOiBjcmVhdGVOdWxsT2JqKCksXG59O1xuIiwiaW1wb3J0IGJyaWRnZSBmcm9tICcuL2JyaWRnZSc7XG5cbmxldCBsYXN0SWQgPSAwO1xuY29uc3QgdGFicyA9IGNyZWF0ZU51bGxPYmooKTtcblxuYnJpZGdlLmFkZEhhbmRsZXJzKHtcbiAgVGFiQ2xvc2VkKGtleSkge1xuICAgIGNvbnN0IGl0ZW0gPSB0YWJzW2tleV07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGl0ZW0uY2xvc2VkID0gdHJ1ZTtcbiAgICAgIGRlbGV0ZSB0YWJzW2tleV07XG4gICAgICBjb25zdCBmbiA9IGl0ZW0ub25jbG9zZTtcbiAgICAgIGlmIChmbikgZm4oKTtcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uVGFiQ3JlYXRlKGRhdGEsIGNvbnRleHQpIHtcbiAgbGFzdElkICs9IDE7XG4gIGNvbnN0IGtleSA9IGxhc3RJZDtcbiAgY29uc3QgaXRlbSA9IHtcbiAgICBvbmNsb3NlOiBudWxsLFxuICAgIGNsb3NlZDogZmFsc2UsXG4gICAgY2xvc2UoKSB7XG4gICAgICBicmlkZ2UucG9zdCgnVGFiQ2xvc2UnLCBrZXksIGNvbnRleHQpO1xuICAgIH0sXG4gIH07XG4gIHRhYnNba2V5XSA9IGl0ZW07XG4gIGJyaWRnZS5wb3N0KCdUYWJPcGVuJywgeyBrZXksIGRhdGEgfSwgY29udGV4dCk7XG4gIHJldHVybiBpdGVtO1xufVxuIiwiaW1wb3J0IHsgSU5KRUNUX0NPTlRFTlQgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBicmlkZ2UgZnJvbSAnLi9icmlkZ2UnO1xuXG5jb25zdCBpc0NvbmNhdFNwcmVhZGFibGVTeW0gPSBTeW1ib2xTYWZlLmlzQ29uY2F0U3ByZWFkYWJsZTtcblxuZXhwb3J0IGNvbnN0IHNhZmVDb25jYXQgPSAoZGVzdCwgLi4uYXJyYXlzKSA9PiB7XG4gIGlmICghZGVzdFtpc0NvbmNhdFNwcmVhZGFibGVTeW1dKSB7XG4gICAgc2V0T3duUHJvcChkZXN0LCBpc0NvbmNhdFNwcmVhZGFibGVTeW0sIHRydWUpO1xuICAgIGFycmF5czo6Zm9yRWFjaChhcnIgPT4gc2V0T3duUHJvcChhcnIsIGlzQ29uY2F0U3ByZWFkYWJsZVN5bSwgdHJ1ZSkpO1xuICB9XG4gIHJldHVybiBjb25jYXQ6OmFwcGx5KGRlc3QsIGFycmF5cyk7XG59O1xuXG4vLyBSZWZlcmVuY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0pTT04jUG9seWZpbGxcbmNvbnN0IGVzY01hcCA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICAnXCInOiAnXFxcXFwiJyxcbiAgJ1xcXFwnOiAnXFxcXFxcXFwnLFxuICAnXFxiJzogJ1xcXFxiJyxcbiAgJ1xcZic6ICdcXFxcZicsXG4gICdcXG4nOiAnXFxcXG4nLFxuICAnXFxyJzogJ1xcXFxyJyxcbiAgJ1xcdCc6ICdcXFxcdCcsXG59O1xuLy8gVE9ETzogaGFuZGxlIFxcdTIwMjhcXHUyMDI5IHdoZW4gQ2hyb21lJ3MgSlNPTi5zdHJpbmdpZnkgc3RhcnRzIHRvIGVzY2FwZSB0aGVtXG5jb25zdCBlc2NSRSA9IC9bXFxcXFwiXFx1MDAwMC1cXHUwMDFGXS9nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbmNvbnN0IGhleCA9ICcwMTIzNDU2Nzg5QUJDREVGJztcbmNvbnN0IGVzY0NoYXJDb2RlID0gbnVtID0+IGBcXFxcdTAwJHtcbiAgaGV4W251bSA+PiA0XSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWJpdHdpc2Vcbn0ke1xuICBoZXhbbnVtICUgMTZdXG59YDtcbmNvbnN0IGVzY0Z1bmMgPSBtID0+IGVzY01hcFttXSB8fCBlc2NDaGFyQ29kZShtOjpjaGFyQ29kZUF0KDApKTtcbi8qKlxuICogV2hlbiBydW5uaW5nIGluIHRoZSBwYWdlIGNvbnRleHQgd2UgbXVzdCBiZXdhcmUgb2Ygc2l0ZXMgdGhhdCBvdmVycmlkZSBBcnJheSN0b0pTT05cbiAqIGxlYWRpbmcgdG8gYW4gaW52YWxpZCByZXN1bHQsIHdoaWNoIGlzIHdoeSBvdXIganNvbkR1bXAoKSBpZ25vcmVzIHRvSlNPTi5cbiAqIFRodXMsIHdlIHVzZSB0aGUgbmF0aXZlIEpTT04uc3RyaW5naWZ5KCkgb25seSBpbiB0aGUgY29udGVudCBzY3JpcHQgY29udGV4dCBhbmQgb25seSB1bnRpbFxuICogYSB1c2Vyc2NyaXB0IGlzIGluamVjdGVkIGludG8gdGhpcyBjb250ZXh0IChkdWUgdG8gYEBpbmplY3QtaW50b2AgYW5kL29yIGEgQ1NQIHByb2JsZW0pLlxuICovXG5leHBvcnQgY29uc3QganNvbkR1bXAgPSAodmFsdWUsIHN0YWNrKSA9PiB7XG4gIGxldCByZXM7XG4gIHN3aXRjaCAodmFsdWUgPT09IG51bGwgPyAocmVzID0gJ251bGwnKSA6IHR5cGVvZiB2YWx1ZSkge1xuICBjYXNlICdiaWdpbnQnOlxuICBjYXNlICdudW1iZXInOlxuICAgIHJlcyA9IHNhZmVJc0Zpbml0ZSh2YWx1ZSkgPyBgJHt2YWx1ZX1gIDogJ251bGwnO1xuICAgIGJyZWFrO1xuICBjYXNlICdib29sZWFuJzpcbiAgICByZXMgPSBgJHt2YWx1ZX1gO1xuICAgIGJyZWFrO1xuICBjYXNlICdzdHJpbmcnOlxuICAgIHJlcyA9IGBcIiR7ZXNjUkU6OnJlZ2V4cFJlcGxhY2UodmFsdWUsIGVzY0Z1bmMpfVwiYDtcbiAgICBicmVhaztcbiAgY2FzZSAnb2JqZWN0JzpcbiAgICBpZiAoIXN0YWNrKSB7XG4gICAgICBzdGFjayA9IFt2YWx1ZV07IC8vIENyZWF0aW5nIHRoZSBhcnJheSBoZXJlLCBvbmx5IHdoZW4gdHlwZSBpcyBvYmplY3QuXG4gICAgfSBlbHNlIGlmIChzdGFjazo6aW5kZXhPZih2YWx1ZSkgPj0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yU2FmZSgnQ29udmVydGluZyBjaXJjdWxhciBzdHJ1Y3R1cmUgdG8gSlNPTicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRPd25Qcm9wKHN0YWNrLCBzdGFjay5sZW5ndGgsIHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKEFycmF5SXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJlcyA9ICdbJztcbiAgICAgIC8vIE11c3QgZW51bWVyYXRlIGFsbCB2YWx1ZXMgdG8gaW5jbHVkZSBob2xlcyBpbiBzcGFyc2UgYXJyYXlzXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgcmVzICs9IGAke2kgPyAnLCcgOiAnJ30ke2pzb25EdW1wKHZhbHVlW2ldLCBzdGFjaykgPz8gJ251bGwnfWA7XG4gICAgICB9XG4gICAgICByZXMgKz0gJ10nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSAneyc7XG4gICAgICBvYmplY3RLZXlzKHZhbHVlKTo6Zm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHYgPSBqc29uRHVtcCh2YWx1ZVtrZXldLCBzdGFjayk7XG4gICAgICAgIC8vIEpTT04uc3RyaW5naWZ5IHNraXBzIGtleXMgd2l0aCBgdW5kZWZpbmVkYCBvciBpbmNvbXBhdGlibGUgdmFsdWVzXG4gICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXMgKz0gYCR7cmVzLmxlbmd0aCA+IDEgPyAnLCcgOiAnJ30ke2pzb25EdW1wKGtleSl9OiR7dn1gO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlcyArPSAnfSc7XG4gICAgfVxuICAgIHN0YWNrLmxlbmd0aCAtPSAxO1xuICAgIGJyZWFrO1xuICBkZWZhdWx0OlxuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIDJ4IGZhc3RlciB0aGFuIGBTZXRgLCA1eCBmYXN0ZXIgdGhhbiBmbGF0IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IFtodWJzXVxuICovXG5leHBvcnQgY29uc3QgRmFzdExvb2t1cCA9IChodWJzID0gY3JlYXRlTnVsbE9iaigpKSA9PiB7XG4gIC8qKiBAbmFtZXNwYWNlIEZhc3RMb29rdXAgKi9cbiAgcmV0dXJuIHtcbiAgICBhZGQodmFsKSB7XG4gICAgICBnZXRIdWIodmFsLCB0cnVlKVt2YWxdID0gdHJ1ZTtcbiAgICB9LFxuICAgIGNsb25lKCkge1xuICAgICAgY29uc3QgY2xvbmUgPSBjcmVhdGVOdWxsT2JqKCk7XG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIGluIGh1YnMpIHsgLyogcHJvdG8gaXMgbnVsbCAqLy8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ3VhcmQtZm9yLWluXG4gICAgICAgIGNsb25lW2dyb3VwXSA9IGFzc2lnbihjcmVhdGVOdWxsT2JqKCksIGh1YnNbZ3JvdXBdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBGYXN0TG9va3VwKGNsb25lKTtcbiAgICB9LFxuICAgIGRlbGV0ZSh2YWwpIHtcbiAgICAgIGRlbGV0ZSBnZXRIdWIodmFsKT8uW3ZhbF07XG4gICAgfSxcbiAgICBoYXM6IHZhbCA9PiBnZXRIdWIodmFsKT8uW3ZhbF0sXG4gICAgdG9BcnJheTogKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWVzID0gb2JqZWN0VmFsdWVzKGh1YnMpO1xuICAgICAgdmFsdWVzOjpmb3JFYWNoKCh2YWwsIGkpID0+IHsgdmFsdWVzW2ldID0gb2JqZWN0S2V5cyh2YWwpOyB9KTtcbiAgICAgIHJldHVybiBzYWZlQ29uY2F0KFtdLCB2YWx1ZXMpO1xuICAgIH0sXG4gIH07XG4gIGZ1bmN0aW9uIGdldEh1Yih2YWwsIGF1dG9DcmVhdGUpIHtcbiAgICBjb25zdCBncm91cCA9IHZhbC5sZW5ndGggPyB2YWxbMF0gOiAnJzsgLy8gbGVuZ3RoIGlzIHVuZm9yZ2VhYmxlLCBpbmRleCBnZXR0ZXJzIGFyZW4ndFxuICAgIGNvbnN0IGh1YiA9IGh1YnNbZ3JvdXBdIHx8IChcbiAgICAgIGF1dG9DcmVhdGUgPyAoaHVic1tncm91cF0gPSBjcmVhdGVOdWxsT2JqKCkpXG4gICAgICAgIDogbnVsbFxuICAgICk7XG4gICAgcmV0dXJuIGh1YjtcbiAgfVxufTtcblxuLyoqXG4gKiBBZGRpbmcgdGhlIHBvbHlmaWxscyBpbiBDaHJvbWUgKGFsd2F5cyBhcyBpdCBkb2Vzbid0IHByb3ZpZGUgdGhlbSlcbiAqIGFuZCBpbiBGaXJlZm94IHBhZ2UgbW9kZSAod2hpbGUgcHJlc2VydmluZyB0aGUgbmF0aXZlIG9uZXMgaW4gY29udGVudCBtb2RlKVxuICogZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBtYW55IFtvbGRdIHNjcmlwdHMgdGhhdCB1c2UgdGhlc2UgdXRpbHMgYmxpbmRseVxuICovXG5leHBvcnQgY29uc3QgbWFrZUNvbXBvbmVudFV0aWxzID0gKCkgPT4ge1xuICBjb25zdCBDTE9ORV9JTlRPID0gJ2Nsb25lSW50byc7XG4gIGNvbnN0IENSRUFURV9PQkpFQ1RfSU4gPSAnY3JlYXRlT2JqZWN0SW4nO1xuICBjb25zdCBFWFBPUlRfRlVOQ1RJT04gPSAnZXhwb3J0RnVuY3Rpb24nO1xuICBjb25zdCBzcmMgPSBJU19GSVJFRk9YICYmIGJyaWRnZS5tb2RlID09PSBJTkpFQ1RfQ09OVEVOVCAmJiBnbG9iYWw7XG4gIGNvbnN0IGRlZmluZUluID0gIXNyYyAmJiAoKHRhcmdldCwgYXMsIHZhbCkgPT4ge1xuICAgIGlmIChhcyAmJiAoYXMgPSBnZXRPd25Qcm9wKGFzLCAnZGVmaW5lQXMnKSkpIHtcbiAgICAgIHNldE93blByb3AodGFyZ2V0LCBhcywgdmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgW0NMT05FX0lOVE9dOiBzcmMgJiYgc3JjW0NMT05FX0lOVE9dIHx8IChcbiAgICAgIG9iaiA9PiBvYmpcbiAgICApLFxuICAgIFtDUkVBVEVfT0JKRUNUX0lOXTogc3JjICYmIHNyY1tDUkVBVEVfT0JKRUNUX0lOXSB8fCAoXG4gICAgICAodGFyZ2V0LCBhcykgPT4gZGVmaW5lSW4odGFyZ2V0LCBhcywge30pXG4gICAgKSxcbiAgICBbRVhQT1JUX0ZVTkNUSU9OXTogc3JjICYmIHNyY1tFWFBPUlRfRlVOQ1RJT05dIHx8IChcbiAgICAgIChmdW5jLCB0YXJnZXQsIGFzKSA9PiBkZWZpbmVJbih0YXJnZXQsIGFzLCBmdW5jKVxuICAgICksXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==