{ /* eslint-disable no-unused-vars */

/**
 * This file is used by entire `src` except `injected`.
 * `global` is used instead of WebPack's polyfill which we disable in webpack.conf.js.
 * `safeCall` is used by our modified babel-plugin-safe-bind.js.
 * Standard globals are extracted for better minification and marginally improved lookup speed.
 * Not exporting NodeJS built-in globals as this file is imported in the test scripts.
 */
const global = function _() {
  return this || globalThis; // eslint-disable-line no-undef
}();

const {
  Boolean,
  Error,
  Object,
  Promise,
  document,
  window
} = global;
const PromiseSafe = Promise; // alias used by browser.js

const ErrorSafe = Error; // alias used by browser.js

const {
  hasOwnProperty,
  toString: objectToString
} = {};
const safeCall = Object.call.bind(Object.call);
const IS_FIREFOX = !global.chrome.app;/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"options/index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
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
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/options/index.js","common-ui","public/lib/codemirror","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/app.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/app.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/ui/icon */ "./src/common/ui/icon.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/keyboard */ "./src/common/keyboard.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/options/utils/index.js");
/* harmony import */ var _tab_installed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab-installed */ "./src/options/views/tab-installed.vue");
/* harmony import */ var _tab_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-settings */ "./src/options/views/tab-settings/index.vue");
/* harmony import */ var _tab_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-about */ "./src/options/views/tab-about.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const tabs = [{
  name: 'scripts',
  comp: _tab_installed__WEBPACK_IMPORTED_MODULE_4__["default"],
  label: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('sideMenuInstalled')
}, {
  name: 'settings',
  comp: _tab_settings__WEBPACK_IMPORTED_MODULE_5__["default"],
  label: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('sideMenuSettings')
}, {
  name: 'about',
  comp: _tab_about__WEBPACK_IMPORTED_MODULE_6__["default"],
  label: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('sideMenuAbout')
}];
const extName = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('extName');
const conditionNotEdit = '!editScript';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Icon: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },

  data() {
    const [name, tabFunc] = _utils__WEBPACK_IMPORTED_MODULE_3__["store"].route.paths;
    return {
      tabs,
      aside: false,
      // Speedup and deflicker for initial page load:
      // skip rendering the aside when starting in the editor for a new script.
      canRenderAside: name !== 'scripts' || tabFunc !== '_new' && !Number(tabFunc),
      store: _utils__WEBPACK_IMPORTED_MODULE_3__["store"]
    };
  },

  computed: {
    current() {
      const name = this.store.route.paths[0];
      return tabs.find(tab => tab.name === name) || tabs[0];
    },

    tabComponent() {
      return this.current.comp;
    }

  },
  watch: {
    'store.title'(title) {
      document.title = title ? `${title} - ${extName}` : extName;
    },

    'store.route.paths'() {
      // First time showing the aside we need to tell v-if to keep it forever
      this.canRenderAside = true;
      this.updateContext();
    }

  },
  methods: {
    updateContext() {
      const isScriptsTab = this.current.name === 'scripts';
      const {
        paths
      } = this.store.route;
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_2__["keyboardService"].setContext('editScript', isScriptsTab && paths[1]);
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_2__["keyboardService"].setContext('tabScripts', isScriptsTab && !paths[1]);
    },

    switchTab(step) {
      const index = this.tabs.indexOf(this.current);
      const switchTo = this.tabs[(index + step + this.tabs.length) % this.tabs.length];
      window.location.hash = (switchTo == null ? void 0 : switchTo.name) || '';
    }

  },

  mounted() {
    this.disposeList = [_Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_2__["keyboardService"].register('a-pageup', () => this.switchTab(-1), {
      condition: conditionNotEdit
    }), _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_2__["keyboardService"].register('a-pagedown', () => this.switchTab(1), {
      condition: conditionNotEdit
    })];
    _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_2__["keyboardService"].enable();
    this.updateContext();
  },

  beforeDestroy() {
    var _this$disposeList;

    (_this$disposeList = this.disposeList) == null ? void 0 : _this$disposeList.forEach(dispose => {
      dispose();
    });
    _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_2__["keyboardService"].disable();
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/help.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/help.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['hotkeys']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/ui */ "./src/common/ui/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/keyboard */ "./src/common/keyboard.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/ui/code */ "./src/common/ui/code.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/common/options */ "./src/common/options.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/common/router */ "./src/common/router.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./src/options/utils/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings */ "./src/options/views/edit/settings.vue");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./values */ "./src/options/views/edit/values.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_externals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/common/ui/externals */ "./src/common/ui/externals.vue");
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./help */ "./src/options/views/edit/help.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












const CUSTOM_PROPS = {
  name: '',
  runAt: '',
  homepageURL: '',
  updateURL: '',
  downloadURL: '',
  origInclude: true,
  origExclude: true,
  origMatch: true,
  origExcludeMatch: true
};
const CUSTOM_LISTS = ['include', 'match', 'exclude', 'excludeMatch'];

const fromList = list => list // Adding a new row so the user can click it and type, just like in an empty textarea.
? `${list.join('\n')}\n` : '';

const toList = text => text.split('\n').map(line => line.trim()).filter(Boolean);

let savedSettings;
let shouldSavePositionOnSave;
/** @param {chrome.windows.Window} [wnd] */

const savePosition = async wnd => {
  if (_Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_6__["default"].get('editorWindow')) {
    if (!wnd) wnd = await browser.windows.getCurrent();
    /* chrome.windows API can't set both the state and coords, so we have to choose:
     * either we save the min/max state and lose the coords on restore,
     * or we lose the min/max state and save the normal coords.
     * Let's assume those who use a window prefer it at a certain position most of the time,
     * and occasionally minimize/maximize it, but wouldn't want to save the state. */

    if (wnd.state === 'normal') {
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_6__["default"].set('editorWindowPos', Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["objectPick"])(wnd, ['left', 'top', 'width', 'height']));
    }
  }
};
/** @param {chrome.windows.Window} _ */


const setupSavePosition = ({
  id: curWndId,
  tabs
}) => {
  if (tabs.length === 1) {
    const {
      onBoundsChanged
    } = global.chrome.windows;

    if (onBoundsChanged) {
      // triggered on moving/resizing, Chrome 86+
      onBoundsChanged.addListener(wnd => {
        if (wnd.id === curWndId) savePosition(wnd);
      });
    } else {
      // triggered on resizing only
      window.addEventListener('resize', Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["debounce"])(savePosition, 100));
      shouldSavePositionOnSave = true;
    }
  }
};

let K_SAVE; // deduced from the current CodeMirror keymap

const K_PREV_PANEL = 'Alt-PageUp';
const K_NEXT_PANEL = 'Alt-PageDown';

const compareString = (a, b) => a < b ? -1 : a > b;

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['initial'],
  components: {
    VmCode: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_code__WEBPACK_IMPORTED_MODULE_5__["default"],
    VmSettings: _settings__WEBPACK_IMPORTED_MODULE_9__["default"],
    VmValues: _values__WEBPACK_IMPORTED_MODULE_10__["default"],
    VmExternals: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_externals__WEBPACK_IMPORTED_MODULE_11__["default"],
    VmHelp: _help__WEBPACK_IMPORTED_MODULE_12__["default"]
  },

  data() {
    return {
      nav: 'code',
      canSave: false,
      script: null,
      code: '',
      codeDirty: false,
      settings: {},
      commands: {
        save: this.save,
        close: this.close,
        showHelp: () => {
          this.nav = 'help';
        }
      },
      hotkeys: null
    };
  },

  computed: {
    navItems() {
      const {
        meta,
        props
      } = this.script || {};
      const req = (meta == null ? void 0 : meta.require.length) && '@require';
      const res = !Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(meta == null ? void 0 : meta.resources) && '@resource';
      const size = _utils__WEBPACK_IMPORTED_MODULE_8__["store"].storageSize;
      return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        code: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["i18n"])('editNavCode'),
        settings: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["i18n"])('editNavSettings')
      }, (props == null ? void 0 : props.id) && {
        values: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["i18n"])('editNavValues') + (size ? ` (${Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["formatByteLength"])(size)})` : '')
      }, {}, (req || res) && {
        externals: safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["trueJoin"], [req, res], '/')
      }, {
        help: '?'
      });
    },

    scriptName() {
      const {
        script
      } = this;
      const scriptName = (script == null ? void 0 : script.meta) && Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["getScriptName"])(script);
      _utils__WEBPACK_IMPORTED_MODULE_8__["store"].title = scriptName;
      return scriptName;
    }

  },
  watch: {
    nav(val) {
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_4__["keyboardService"].setContext('tabCode', val === 'code');
    },

    canSave(val) {
      this.toggleUnloadSentry(val);
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_4__["keyboardService"].setContext('canSave', val);
    },

    // usually errors for resources
    'initial.error'(error) {
      if (error) {
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_3__["showMessage"])({
          text: `${this.initial.message}\n\n${error}`
        });
      }
    }

  },

  created() {
    this.script = this.initial;
    this.toggleUnloadSentry = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_7__["getUnloadSentry"])(null, () => {
      this.$refs.code.cm.focus();
    });

    if (_Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_6__["default"].get('editorWindow') && global.history.length === 1) {
      var _browser$windows;

      (_browser$windows = browser.windows) == null ? void 0 : _browser$windows.getCurrent({
        populate: true
      }).then(setupSavePosition);
    }
  },

  async mounted() {
    var _this$script, _this$script$props, _config$notifyUpdates;

    _utils__WEBPACK_IMPORTED_MODULE_8__["store"].storageSize = 0;
    this.nav = 'code';
    const id = (_this$script = this.script) == null ? void 0 : (_this$script$props = _this$script.props) == null ? void 0 : _this$script$props.id;

    if (id) {
      this.code = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmdDirectly"])('GetScriptCode', id);
    } else {
      const {
        script,
        code
      } = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmdDirectly"])('NewScript', _Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_7__["route"].paths[2]);
      this.script = script;
      this.code = code;
    }

    const {
      custom,
      config
    } = this.script;
    const {
      noframes
    } = custom;
    this.settings = {
      config: {
        notifyUpdates: `${(_config$notifyUpdates = config.notifyUpdates) != null ? _config$notifyUpdates : ''}`,
        // Needs to match Vue model type so deepEqual can work properly
        shouldUpdate: Boolean(config.shouldUpdate)
      },
      custom: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, CUSTOM_PROPS, {}, Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["objectPick"])(custom, Object.keys(CUSTOM_PROPS)), {}, Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["objectPick"])(custom, CUSTOM_LISTS, fromList), {
        runAt: custom.runAt || '',
        noframes: noframes == null ? '' : +noframes // it was boolean in old VM

      })
    };
    savedSettings = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["deepCopy"])(this.settings);
    this.$watch('codeDirty', this.onChange);
    this.$watch('settings', this.onChange, {
      deep: true
    }); // hotkeys

    {
      var _hotkeys$find;

      const navLabels = Object.values(this.navItems);
      const hotkeys = [[K_PREV_PANEL, ` ${navLabels.join(' < ')}`], [K_NEXT_PANEL, ` ${navLabels.join(' > ')}`], ...Object.entries(this.$refs.code.expandKeyMap()).sort((a, b) => compareString(a[1], b[1]) || compareString(a[0], b[0]))];
      K_SAVE = (_hotkeys$find = hotkeys.find(([, cmd]) => cmd === 'save')) == null ? void 0 : _hotkeys$find[0];

      if (!K_SAVE) {
        K_SAVE = 'Ctrl-S';
        hotkeys.unshift([K_SAVE, 'save']);
      }

      this.hotkeys = hotkeys;
    }
    this.disposeList = [_Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_4__["keyboardService"].register('a-pageup', this.switchPrevPanel), _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_4__["keyboardService"].register('a-pagedown', this.switchNextPanel), _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_4__["keyboardService"].register(K_SAVE.replace('Ctrl-', 'ctrlcmd-'), this.save), _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_4__["keyboardService"].register('escape', () => {
      this.nav = 'code';
    }, {
      condition: '!tabCode'
    })];
  },

  methods: {
    async save() {
      if (!this.canSave) return;
      if (shouldSavePositionOnSave) savePosition();
      const {
        settings
      } = this;
      const {
        config,
        custom
      } = settings;
      const {
        notifyUpdates
      } = config;
      const {
        noframes
      } = custom;

      try {
        var _this$script2, _this$script2$props, _res$where;

        const codeComponent = this.$refs.code;
        const id = (_this$script2 = this.script) == null ? void 0 : (_this$script2$props = _this$script2.props) == null ? void 0 : _this$script2$props.id;
        const res = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmdDirectly"])('ParseScript', {
          id,
          code: codeComponent.getRealContent(),
          config: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, config, {
            notifyUpdates: notifyUpdates ? +notifyUpdates : null
          }),
          custom: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["objectPick"])(custom, Object.keys(CUSTOM_PROPS)), {}, Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["objectPick"])(custom, CUSTOM_LISTS, toList), {
            noframes: noframes ? +noframes : null
          }),
          // User created scripts MUST be marked `isNew` so that
          // the backend is able to check namespace conflicts,
          // otherwise the script with same namespace will be overridden
          isNew: !id,
          message: ''
        });
        savedSettings = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["deepCopy"])(settings);
        codeComponent.cm.markClean();
        this.codeDirty = false; // triggers onChange which sets canSave

        this.canSave = false; // ...and set it explicitly in case codeDirty was false

        if (res == null ? void 0 : (_res$where = res.where) == null ? void 0 : _res$where.id) this.script = res.update;
      } catch (err) {
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_3__["showConfirmation"])(`${err.message || err}`, {
          cancel: false
        });
      }
    },

    close(cm) {
      if (cm && this.nav !== 'code') {
        this.nav = 'code';
      } else {
        var _document$activeEleme;

        this.$emit('close'); // FF doesn't emit `blur` when CodeMirror's textarea is removed

        if (IS_FIREFOX) (_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.blur();
      }
    },

    saveClose() {
      this.save().then(this.close);
    },

    switchPanel(step) {
      const keys = Object.keys(this.navItems);
      this.nav = keys[(keys.indexOf(this.nav) + step + keys.length) % keys.length];
    },

    switchPrevPanel() {
      this.switchPanel(-1);
    },

    switchNextPanel() {
      this.switchPanel(1);
    },

    onChange() {
      this.canSave = this.codeDirty || !Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["deepEqual"])(this.settings, savedSettings);
    }

  },

  beforeDestroy() {
    var _this$disposeList;

    _utils__WEBPACK_IMPORTED_MODULE_8__["store"].title = null;
    this.toggleUnloadSentry(false);
    (_this$disposeList = this.disposeList) == null ? void 0 : _this$disposeList.forEach(dispose => {
      dispose();
    });
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/ui */ "./src/common/ui/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const highlightMetaKeys = str => {
  var _str$match;

  return ((_str$match = str.match(/^(.*?)(@[-a-z]+)(.*)/)) == null ? void 0 : _str$match.slice(1)) || [str, '', ''];
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['active', 'settings', 'value'],
  computed: {
    custom() {
      return this.settings.custom || {};
    },

    config() {
      return this.settings.config || {};
    },

    placeholders() {
      const {
        value
      } = this;
      return {
        name: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectGet"])(value, 'meta.name'),
        homepageURL: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectGet"])(value, 'meta.homepageURL'),
        updateURL: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectGet"])(value, 'meta.updateURL') || Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('hintUseDownloadURL'),
        downloadURL: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectGet"])(value, 'meta.downloadURL') || Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_1__["objectGet"])(value, 'custom.lastInstallURL')
      };
    },

    textInputs() {
      return [['name', Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('labelName')], ['homepageURL', Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('labelHomepageURL')], ['updateURL', Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('labelUpdateURL')], ['downloadURL', Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('labelDownloadURL')]];
    },

    textAreas() {
      return [['include', 'origInclude', ...highlightMetaKeys(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('labelInclude'))], ['match', 'origMatch', ...highlightMetaKeys(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('labelMatch'))], ['exclude', 'origExclude', ...highlightMetaKeys(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('labelExclude'))], ['excludeMatch', 'origExcludeMatch', ...highlightMetaKeys(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])('labelExcludeMatch'))]];
    }

  },
  watch: {
    active(val) {
      if (val) {
        this.$refs.container.querySelector('input').focus();
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_2__["autofitElementsHeight"])(this.$refs.area);
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/values.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/values.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/keyboard */ "./src/common/keyboard.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/ui/icon */ "./src/common/ui/icon.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/storage */ "./src/common/storage.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/ui */ "./src/common/ui/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./src/options/utils/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const PAGE_SIZE = 25;
const MAX_LENGTH = 1024;
const MAX_JSON_DURATION = 10; // ms

let scriptStorageKey;
let focusedElement;

const reparseJson = str => {
  try {
    return JSON.stringify(JSON.parse(str), null, '  ');
  } catch (e) {
    // This shouldn't happen but the storage may get corrupted or modified directly
    return str;
  }
};

const getActiveElement = () => document.activeElement;

const flipPage = (vm, dir) => {
  vm.page = Math.max(1, Math.min(vm.totalPages, vm.page + dir));
};

const conditionNotEdit = {
  condition: '!edit'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['active', 'script'],
  components: {
    Icon: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_3__["default"]
  },

  data() {
    return {
      current: null,
      page: null,
      values: null,
      trash: null
    };
  },

  computed: {
    keys() {
      return Object.keys(this.values || {}).sort();
    },

    totalPages() {
      return Math.ceil(this.keys.length / PAGE_SIZE);
    },

    pageKeys() {
      const offset = PAGE_SIZE * (this.page - 1);
      return this.keys.slice(offset, offset + PAGE_SIZE);
    }

  },

  mounted() {
    this.$refs.container.addEventListener('focusin', evt => {
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_1__["keyboardService"].setContext('edit', 'selectionEnd' in evt.target);
    });
  },

  watch: {
    active(val) {
      if (val) {
        var _ref, _this$script;

        (_ref = this.current ? this.$refs.value : focusedElement) == null ? void 0 : _ref.focus();
        _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].value.getOne(this.script.props.id).then(data => {
          if (!this.values && this.setData(data) && this.keys.length) {
            this.autofocus(true);
          }
        });
        scriptStorageKey = _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_4__["default"].value.prefix + ((_this$script = this.script) == null ? void 0 : _this$script.props.id);
        this.disposeList = [_Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_1__["keyboardService"].register('pageup', () => flipPage(this, -1), conditionNotEdit), _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_1__["keyboardService"].register('pagedown', () => flipPage(this, 1), conditionNotEdit)];
      } else {
        var _this$disposeList;

        (_this$disposeList = this.disposeList) == null ? void 0 : _this$disposeList.forEach(dispose => dispose());
      }

      browser.storage.onChanged[`${val ? 'add' : 'remove'}Listener`](this.onStorageChanged);
    },

    current(val, oldVal) {
      if (val) {
        focusedElement = getActiveElement();
        this.initial = val.value;
        this.$nextTick(() => {
          const el = this.$refs[val.isNew ? 'key' : 'value'];
          el.setSelectionRange(0, 0);
          el.focus();
        });
      } else if (oldVal) {
        var _focusedElement;

        (_focusedElement = focusedElement) == null ? void 0 : _focusedElement.focus();
      }
    },

    page() {
      focusedElement = null;
      this.autofocus();
    }

  },
  methods: {
    autofocus(andClick) {
      this.$nextTick(() => {
        this.$refs.editAll[andClick ? 'click' : 'focus']();
      });
    },

    getLength(key) {
      const len = this.values[key].length - 1;
      return len < 10000 ? len : Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["formatByteLength"])(len);
    },

    getValue(key, sliced) {
      let value = this.values[key];
      const type = value[0];
      value = value.slice(1);
      if (type === 's') value = JSON.stringify(value);else if (!sliced) value = reparseJson(value);

      if (sliced && value.length > MAX_LENGTH) {
        value = value.slice(0, MAX_LENGTH);
      }

      return value;
    },

    getValueAll() {
      return `{\n  ${this.keys.map(key => `${JSON.stringify(key)}: ${this.getValue(key)}`).join(',\n').replace(/\n/g, '\n  ') // also handles nested linebreaks inside objects/arrays
      }\n}`;
    },

    setData(values = {}) {
      if (!Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["deepEqual"])(this.values, values)) {
        this.values = values;
        this.page = Math.min(this.page, this.totalPages) || 1;
        this.calcSize();
        return true;
      }
    },

    calcSize() {
      _utils__WEBPACK_IMPORTED_MODULE_6__["store"].storageSize = this.keys.reduce((sum, key) => sum + this.values[key].length - 1, 0);
    },

    updateValue({
      key,
      jsonValue,
      rawValue = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["dumpScriptValue"])(jsonValue) || ''
    }) {
      const {
        id
      } = this.script.props;
      return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["sendCmdDirectly"])('UpdateValue', {
        id,
        key,
        value: rawValue
      }).then(() => {
        if (rawValue) {
          this.$set(this.values, key, rawValue);
        } else {
          this.$delete(this.values, key);
        }

        this.calcSize();
      });
    },

    onNew() {
      this.current = {
        isNew: true,
        key: '',
        value: ''
      };
    },

    async onRemove(key) {
      var _this$current;

      (this.trash || (this.trash = {}))[key + Math.random()] = [key, this.values[key], this.getValue(key, true), this.getLength(key)];
      await this.updateValue({
        key
      });

      if (((_this$current = this.current) == null ? void 0 : _this$current.key) === key) {
        this.current = null;
      }
    },

    onRestore(trashKey) {
      const {
        trash
      } = this;
      const [key, rawValue] = trash[trashKey];
      delete trash[trashKey];
      if (Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(trash)) this.trash = null;
      this.updateValue({
        key,
        rawValue
      });
    },

    onEdit(key) {
      this.current = {
        isNew: false,
        key,
        value: this.getValue(key)
      };
    },

    onEditAll() {
      this.current = {
        isAll: true,
        value: this.getValueAll()
      };
    },

    async onSave() {
      const {
        current
      } = this;

      if (current.jsonPaused) {
        current.jsonPaused = false;
        this.onChange();
      }

      if (current.error) {
        const pos = +current.error.match(/position\s+(\d+)|$/)[1] || 0;
        this.$refs.value.setSelectionRange(pos, pos + 1);
        this.$refs.value.focus();
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_5__["showMessage"])({
          text: current.error
        });
        return;
      }

      this.current = null;

      if (current.isAll) {
        await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["sendCmdDirectly"])('SetValueStores', [{
          where: {
            id: this.script.props.id
          },
          store: safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_2__["mapEntry"], current.jsonValue, ([, val]) => Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["dumpScriptValue"])(val) || '')
        }]);
      } else {
        await this.updateValue(current);
      }
    },

    onCancel() {
      this.current = null;
    },

    onChange() {
      const {
        current
      } = this;
      current.error = null;
      if (current.jsonPaused) return;
      const t0 = performance.now();
      const str = current.value.trim();

      try {
        current.jsonValue = str ? JSON.parse(str) : undefined;
      } catch (e) {
        current.error = e.message || e;
        current.jsonValue = undefined;
      }

      current.jsonPaused = performance.now() - t0 > MAX_JSON_DURATION;
    },

    onStorageChanged(changes) {
      var _changes$scriptStorag;

      const data = (_changes$scriptStorag = changes[scriptStorageKey]) == null ? void 0 : _changes$scriptStorag.newValue;

      if (data) {
        const {
          current
        } = this;
        const currentKey = current == null ? void 0 : current.key;
        const valueGetter = current && (currentKey ? this.getValue : this.getValueAll);
        const oldText = valueGetter && valueGetter(currentKey);
        this.setData(data);

        if (current) {
          const newText = valueGetter(currentKey);
          const curText = current.value;

          if (curText === newText) {
            current.isNew = false;
          } else if (curText === oldText) {
            // Updating the current value only if it wasn't yet changed by the user.
            // Keeping the same this.current to avoid triggering `watch` observer
            Object.keys(current).filter(k => k !== 'key' && k !== 'value').forEach(k => delete current[k]);
            current.value = newText;
          }
        }
      } else {
        _utils__WEBPACK_IMPORTED_MODULE_6__["store"].storageSize = 0;
      }
    },

    onUpDown(evt) {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_1__["handleTabNavigation"])(evt.key === 'ArrowDown' && 1 || evt.target !== this.$refs.editAll && -1 || 0); // Prevents Up from escaping the table since we don't listen for Down outside
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/script-item.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/script-item.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vueleton/lib/tooltip/bundle */ "./node_modules/vueleton/lib/tooltip/bundle.js");
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/ui/icon */ "./src/common/ui/icon.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/keyboard */ "./src/common/keyboard.js");
/* harmony import */ var _utils_dragging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dragging */ "./src/options/utils/dragging.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const itemMargin = 8;
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['script', 'draggable', 'visible', 'nameClickable', 'focused', 'hotkeys', 'showHotkeys'],
  components: {
    Icon: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_2__["default"],
    Tooltip: (vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_0___default())
  },

  data() {
    return {
      canRender: this.visible && !this.script.custom.buildIn
    };
  },

  computed: {
    canUpdate() {
      const {
        script
      } = this;
      return script.config.shouldUpdate && (script.custom.updateURL || script.meta.updateURL || script.custom.downloadURL || script.meta.downloadURL || script.custom.lastInstallURL);
    },

    homepageURL() {
      const {
        script
      } = this;
      return script.custom.homepageURL || script.meta.homepageURL || script.meta.homepage;
    },

    author() {
      const text = this.script.meta.author;
      if (!text) return;
      const matches = text.match(/^(.*?)\s<(\S*?@\S*?)>$/);
      return {
        email: matches && matches[2],
        name: matches ? matches[1] : text
      };
    },

    labelEnable() {
      return this.script.config.enabled ? this.i18n('buttonDisable') : this.i18n('buttonEnable');
    },

    description() {
      return this.script.custom.description || Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleString"])(this.script.meta, 'description');
    },

    updatedAt() {
      const {
        props,
        config
      } = this.script;
      const ret = {};
      let lastModified;

      if (config.removed) {
        ({
          lastModified
        } = props);
      } else {
        // XXX use `lastModified` as a fallback for scripts without `lastUpdated`
        lastModified = props.lastUpdated || props.lastModified;
      }

      if (lastModified) {
        const date = new Date(lastModified);
        ret.show = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(Date.now() - lastModified);

        if (config.removed) {
          ret.title = this.i18n('labelRemovedAt', date.toLocaleString());
        } else {
          ret.title = this.i18n('labelLastUpdatedAt', date.toLocaleString());
        }
      }

      return ret;
    },

    tabIndex() {
      return this.focused ? 0 : -1;
    }

  },
  watch: {
    visible(visible) {
      // Leave it if the element is already rendered
      if (visible) this.canRender = true;
    },

    focused(value, prevValue) {
      const {
        $el
      } = this;

      if (value && !prevValue && $el) {
        const rect = $el.getBoundingClientRect();
        const pRect = $el.parentNode.getBoundingClientRect();
        let delta = 0;

        if (rect.bottom > pRect.bottom - itemMargin) {
          delta += rect.bottom - pRect.bottom + itemMargin;
        } else if (rect.top < pRect.top + itemMargin) {
          delta -= pRect.top - rect.top + itemMargin;
        }

        if (!Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_3__["isInput"])(document.activeElement)) {
          // focus without scrolling, then scroll smoothly
          $el.focus({
            preventScroll: true
          });
        }

        this.$emit('scrollDelta', delta);
      }
    }

  },

  mounted() {
    Object(_utils_dragging__WEBPACK_IMPORTED_MODULE_4__["default"])(this.$el, {
      onDrop: (from, to) => this.$emit('move', {
        from,
        to
      })
    });
  },

  methods: {
    onEdit() {
      this.$emit('edit', this.script);
    },

    onRemove() {
      this.$emit('remove', this.script);
    },

    onRestore() {
      this.$emit('restore', this.script);
    },

    onToggle() {
      this.$emit('toggle', this.script);
    },

    onUpdate() {
      this.$emit('update', this.script);
    },

    onFocus() {
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_3__["keyboardService"].setContext('scriptFocus', true);
    },

    onBlur() {
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_3__["keyboardService"].setContext('scriptFocus', false);
    },

    toggleTip(e) {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_3__["toggleTip"])(e.target);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-about.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-about.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    const manifest = browser.runtime.getManifest();
    return {
      name: manifest.name,
      version: manifest.version,
      language: browser.i18n.getUILanguage()
    };
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-installed.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-installed.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vueleton_lib_dropdown_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vueleton/lib/dropdown/bundle */ "./node_modules/vueleton/lib/dropdown/bundle.js");
/* harmony import */ var vueleton_lib_dropdown_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vueleton_lib_dropdown_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vueleton/lib/tooltip/bundle */ "./node_modules/vueleton/lib/tooltip/bundle.js");
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/options */ "./src/common/options.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/ui */ "./src/common/ui/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/ui/setting-check */ "./src/common/ui/setting-check.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_hook_setting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/common/hook-setting */ "./src/common/hook-setting.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/common/ui/icon */ "./src/common/ui/icon.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_locale_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/common/ui/locale-group */ "./src/common/ui/locale-group.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/common/router */ "./src/common/router.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/common/storage */ "./src/common/storage.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/common/keyboard */ "./src/common/keyboard.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_options__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/options */ "./src/options/index.js");
/* harmony import */ var _script_item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./script-item */ "./src/options/views/script-item.vue");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit */ "./src/options/views/edit/index.vue");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils */ "./src/options/utils/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

















const filterOptions = {
  sort: {
    exec: {
      title: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('filterExecutionOrder')
    },
    alpha: {
      title: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('filterAlphabeticalOrder'),
      compare: ({
        $cache: {
          lowerName: a
        }
      }, {
        $cache: {
          lowerName: b
        }
      }) => a < b ? -1 : a > b
    },
    update: {
      title: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('filterLastUpdateOrder'),
      compare: ({
        props: {
          lastUpdated: a
        }
      }, {
        props: {
          lastUpdated: b
        }
      }) => (+b || 0) - (+a || 0)
    }
  }
};
const filtersSort = {
  value: null,
  title: null
};
const filters = {
  searchScope: null,
  showEnabledFirst: null,
  showOrder: null,
  viewSingleColumn: null,
  viewTable: null,

  get sort() {
    return filtersSort;
  },

  set sort(value) {
    const option = filterOptions.sort[value];

    if (option) {
      filtersSort.value = value;
      filtersSort.title = option.title;
    } else {
      filters.sort = Object.keys(filterOptions.sort)[0];
    }
  }

};

const combinedCompare = cmpFunc => filters.showEnabledFirst ? (a, b) => b.config.enabled - a.config.enabled || cmpFunc(a, b) : cmpFunc;

safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_9__["forEachKey"], filters, key => {
  Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_hook_setting__WEBPACK_IMPORTED_MODULE_6__["default"])(`filters.${key}`, val => {
    filters[key] = val;
  });
});
const MAX_BATCH_DURATION = 100;
let step = 0;
let columnsForTableMode = [];
let columnsForCardsMode = [];
const conditionAll = 'tabScripts';
const conditionSearch = `${conditionAll} && inputFocus`;
const conditionNotSearch = `${conditionAll} && !inputFocus`;
const conditionScriptFocused = `${conditionNotSearch} && selectedScript && !showRecycle`;
const conditionScriptFocusedRecycle = `${conditionNotSearch} && selectedScript && showRecycle`;
const conditionHotkeys = `${conditionNotSearch} && selectedScript && showHotkeys`;
const scriptHotkeys = {
  edit: 'e,Enter',
  toggle: 'space',
  update: 'r',
  restore: 'r',
  remove: 'x'
};

const registerHotkey = (callback, items) => items.map(([key, condition, caseSensitive]) => _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_12__["keyboardService"].register(key, callback, {
  condition,
  caseSensitive
}));

const explodeKeys = (multi, ...args) => multi.split(/\s*,\s*/).map(key => [key, ...args]);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ScriptItem: _script_item__WEBPACK_IMPORTED_MODULE_14__["default"],
    Edit: _edit__WEBPACK_IMPORTED_MODULE_15__["default"],
    Tooltip: (vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1___default()),
    SettingCheck: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_check__WEBPACK_IMPORTED_MODULE_5__["default"],
    LocaleGroup: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_locale_group__WEBPACK_IMPORTED_MODULE_8__["default"],
    Dropdown: (vueleton_lib_dropdown_bundle__WEBPACK_IMPORTED_MODULE_0___default()),
    Icon: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_7__["default"]
  },

  data() {
    return {
      scriptHotkeys,
      store: _utils__WEBPACK_IMPORTED_MODULE_16__["store"],
      filterOptions,
      filters,
      filteredScripts: [],
      focusedIndex: -1,
      script: null,
      search: null,
      searchError: null,
      modal: null,
      menuNewActive: false,
      showRecycle: false,
      sortedScripts: [],
      removing: false,
      showHotkeys: false,
      // Speedup and deflicker for initial page load:
      // skip rendering the script list when starting in the editor.
      canRenderScripts: !_utils__WEBPACK_IMPORTED_MODULE_16__["store"].route.paths[1],
      batchRender: {
        limit: step
      },
      numColumns: null
    };
  },

  watch: {
    search: 'scheduleSearch',
    'filters.sort.value': 'updateLater',
    'filters.showEnabledFirst': 'updateLater',
    'filters.viewSingleColumn': 'adjustScriptWidth',
    'filters.viewTable': 'adjustScriptWidth',

    showRecycle(value) {
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_12__["keyboardService"].setContext('showRecycle', value);
      this.focusedIndex = -1;
      this.onUpdate();
    },

    scripts: 'refreshUI',
    'store.route.paths.1': 'onHashChange',

    selectedScript(script) {
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_12__["keyboardService"].setContext('selectedScript', script);
    },

    showHotkeys(value) {
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_12__["keyboardService"].setContext('showHotkeys', value);
    }

  },
  computed: {
    currentSortCompare() {
      var _filterOptions$sort$f;

      return (_filterOptions$sort$f = filterOptions.sort[filters.sort.value]) == null ? void 0 : _filterOptions$sort$f.compare;
    },

    selectedScript() {
      return this.filteredScripts[this.focusedIndex];
    },

    message() {
      if (this.store.loading) {
        return null;
      }

      const scripts = this.sortedScripts;

      if (this.search ? !scripts.find(s => s.$cache.show !== false) : !scripts.length) {
        return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('labelNoSearchScripts');
      }

      return null;
    },

    scripts() {
      return this.store.installedScripts;
    },

    searchNeedsCodeIds() {
      return this.search && ['code', 'all'].includes(filters.searchScope) && this.store.scripts.filter(s => s.$cache.code == null).map(s => s.props.id);
    },

    trash() {
      return this.store.removedScripts;
    }

  },
  methods: {
    async refreshUI() {
      const ids = this.searchNeedsCodeIds;
      if (ids == null ? void 0 : ids.length) await this.getCodeFromStorage(ids);
      this.onUpdate();
      this.onHashChange();
    },

    onUpdate() {
      const scripts = [...(this.showRecycle ? this.trash : this.scripts)];
      const numFound = this.search ? this.performSearch(scripts) : scripts.length;
      const cmp = this.currentSortCompare;
      if (cmp) scripts.sort(combinedCompare(cmp));
      this.sortedScripts = scripts;
      this.filteredScripts = this.search ? scripts.filter(({
        $cache
      }) => $cache.show) : scripts;
      this.selectScript(this.focusedIndex);
      if (!step || numFound < step) this.renderScripts();else this.debouncedRender();
    },

    updateLater() {
      this.debouncedUpdate();
    },

    updateAll() {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmd"])('CheckUpdateAll');
    },

    async installFromURL() {
      try {
        var _url;

        let url = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_4__["showConfirmation"])(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('hintInputURL'), {
          input: '',
          ok: {
            type: 'submit'
          }
        });
        url = (_url = url) == null ? void 0 : _url.trim();

        if (url) {
          if (!url.includes('://')) url = `https://${url}`;
          if (new URL(url)) await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmd"])('ConfirmInstall', {
            url
          });
        }
      } catch (err) {
        if (err) Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_4__["showMessage"])({
          text: err
        });
      }
    },

    moveScript(data) {
      if (data.from === data.to) return;

      if (data.from === 0 || data.to === 0) {
        // forbid to move the build-in script!! force refresh!!
        window.location.reload();
        return;
      }

      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmd"])('Move', {
        id: this.scripts[data.from].props.id,
        offset: data.to - data.from
      }).then(() => {
        const {
          scripts
        } = this;
        const i = Math.min(data.from, data.to);
        const j = Math.max(data.from, data.to);
        const seq = [scripts.slice(0, i), scripts.slice(i, j + 1), scripts.slice(j + 1)];

        if (i === data.to) {
          seq[1].unshift(seq[1].pop());
        } else {
          seq[1].push(seq[1].shift());
        }

        this.store.scripts = [...seq.flat(), ...this.trash];
      });
    },

    onOrderChange(e) {
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__["default"].set('filters.sort', e.target.value);
    },

    onScopeChange(e) {
      if (this.search) this.scheduleSearch();
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__["default"].set('filters.searchScope', e.target.value);
    },

    onStateChange(active) {
      this.menuNewActive = active;
    },

    editScript(id) {
      const pathname = ['scripts', id].filter(Boolean).join('/');

      if (!id && pathname === Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_10__["lastRoute"])().pathname) {
        window.history.back();
      } else {
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_10__["setRoute"])(pathname);
      }
    },

    onHashChange() {
      const [tab, id] = this.store.route.paths;

      if (id === '_new') {
        this.script = {};
      } else {
        const nid = id && +id || null;
        this.script = nid && this.scripts.find(script => script.props.id === nid);

        if (!this.script) {
          // First time showing the list we need to tell v-if to keep it forever
          if (!this.canRenderScripts) {
            Object(_Users_ZhaoJun_Desktop_violentmonkey_src_options__WEBPACK_IMPORTED_MODULE_13__["loadData"])();
            this.canRenderScripts = true;
          }

          this.debouncedRender(); // Strip the invalid id from the URL so |App| can render the aside,
          // which was hidden to avoid flicker on initial page load directly into the editor.

          if (id) Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_10__["setRoute"])(tab, true);
        }
      }
    },

    async renderScripts() {
      if (!this.canRenderScripts) return;
      const {
        length
      } = this.sortedScripts;
      let limit = 9;
      const batchRender = {
        limit
      };
      this.batchRender = batchRender;
      const startTime = performance.now(); // If we entered a new loop of rendering, this.batchRender will no longer be batchRender

      while (limit < length && batchRender === this.batchRender) {
        if (step && this.search) {
          // Only visible items contribute to the batch size
          for (let vis = 0; vis < step && limit < length; limit += 1) {
            vis += this.sortedScripts[limit].$cache.show ? 1 : 0;
          }
        } else {
          limit += step || 1;
        }

        batchRender.limit = limit;
        await new Promise(resolve => this.$nextTick(resolve));

        if (!step && performance.now() - startTime >= MAX_BATCH_DURATION) {
          step = limit * 2; // the first batch is slow to render because it has more work to do
        }

        if (step && limit < length) await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["makePause"])();
      }
    },

    performSearch(scripts) {
      let searchRE;
      let count = 0;
      const [, expr = this.search.replace(/[.+^*$?|\\()[\]{}]/g, '\\$&'), flags = 'i'] = this.search.match(/^\/(.+?)\/(\w*)$|$/);
      const scope = filters.searchScope;
      const scopeName = scope === 'name' || scope === 'all';
      const scopeCode = scope === 'code' || scope === 'all';

      try {
        searchRE = expr && new RegExp(expr, flags);
        scripts.forEach(({
          $cache
        }) => {
          $cache.show = !expr || scopeName && searchRE.test($cache.search) || scopeCode && searchRE.test($cache.code);
          count += $cache.show;
        });
        this.searchError = null;
      } catch (err) {
        this.searchError = err.message;
      }

      return count;
    },

    async scheduleSearch() {
      const ids = this.searchNeedsCodeIds;
      if (ids == null ? void 0 : ids.length) await this.getCodeFromStorage(ids);
      this.debouncedUpdate();
    },

    async getCodeFromStorage(ids) {
      const data = await _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_11__["default"].code.getMulti(ids);
      this.store.scripts.forEach(({
        $cache,
        props: {
          id
        }
      }) => {
        if (id in data) $cache.code = data[id];
      });
    },

    async emptyRecycleBin() {
      try {
        await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_4__["showConfirmation"])(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('buttonEmptyRecycleBin'));
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmd"])('CheckRemove', {
          force: true
        });
        _utils__WEBPACK_IMPORTED_MODULE_16__["store"].scripts = _utils__WEBPACK_IMPORTED_MODULE_16__["store"].scripts.filter(script => !script.config.removed);
      } catch (e) {// NOP
      }
    },

    adjustScriptWidth() {
      const widths = filters.viewTable ? columnsForTableMode : columnsForCardsMode;
      this.numColumns = filters.viewSingleColumn ? 1 : widths.findIndex(w => window.innerWidth < w) + 1 || widths.length + 1;
    },

    selectScript(index) {
      index = Math.min(index, this.filteredScripts.length - 1);
      index = Math.max(index, -1);

      if (index !== this.focusedIndex) {
        this.focusedIndex = index;
      }
    },

    markRemove(script, removed) {
      if (script.custom.buildIn) return;
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmd"])('MarkRemoved', {
        id: script.props.id,
        removed
      });
    },

    handleActionEdit(script) {
      if (script.custom.buildIn) return;
      this.editScript(script.props.id);
    },

    handleActionRemove(script) {
      this.markRemove(script, 1);
      this.removing = true;
      setTimeout(() => {
        this.removing = false;
      }, 1000);
    },

    handleActionRestore(script) {
      this.markRemove(script, 0);
    },

    handleActionToggle(script) {
      if (script.custom.buildIn) return;
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmd"])('UpdateScriptInfo', {
        id: script.props.id,
        config: {
          enabled: script.config.enabled ? 0 : 1
        }
      });
    },

    handleActionUpdate(script) {
      if (script.custom.buildIn) return;
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmd"])('CheckUpdate', script.props.id);
    },

    handleSmoothScroll(delta) {
      if (!delta) return;
      const el = this.$refs.scriptList;
      el.scroll({
        top: el.scrollTop + delta,
        behavior: 'smooth'
      });
    }

  },

  created() {
    this.debouncedUpdate = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["debounce"])(this.onUpdate, 100);
    this.debouncedRender = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["debounce"])(this.renderScripts);
  },

  mounted() {
    // Ensure the correct UI is shown when mounted:
    // * on subsequent navigation via history back/forward;
    // * on first initialization in some weird case the scripts got loaded early.
    if (!_utils__WEBPACK_IMPORTED_MODULE_16__["store"].loading) this.refreshUI(); // Extract --columns-cards and --columns-table from `:root` or `html` selector. CustomCSS may override it.

    if (!columnsForCardsMode.length) {
      const style = getComputedStyle(document.documentElement);
      [columnsForCardsMode, columnsForTableMode] = ['cards', 'table'].map(type => {
        var _style$getPropertyVal;

        return ((_style$getPropertyVal = style.getPropertyValue(`--columns-${type}`)) == null ? void 0 : _style$getPropertyVal.split(',').map(Number).filter(Boolean)) || [];
      });
      global.addEventListener('resize', this.adjustScriptWidth);
    }

    this.adjustScriptWidth();
    this.disposeList = [...(IS_FIREFOX ? [_Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_12__["keyboardService"].register('tab', () => {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_12__["handleTabNavigation"])(1);
    }), _Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_12__["keyboardService"].register('s-tab', () => {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_keyboard__WEBPACK_IMPORTED_MODULE_12__["handleTabNavigation"])(-1);
    })] : []), ...registerHotkey(() => {
      var _this$$refs$search;

      (_this$$refs$search = this.$refs.search) == null ? void 0 : _this$$refs$search.focus();
    }, [['ctrlcmd-f', conditionAll], ['/', conditionNotSearch, true]]), ...registerHotkey(() => {
      var _this$$refs$search2;

      (_this$$refs$search2 = this.$refs.search) == null ? void 0 : _this$$refs$search2.blur();
    }, [['enter', conditionSearch]]), ...registerHotkey(() => {
      this.showHotkeys = false;
    }, [['escape', conditionHotkeys], ['q', conditionHotkeys, true]]), ...registerHotkey(() => {
      let index = this.focusedIndex;
      if (index < 0) index = 0;else index += this.numColumns;

      if (index < this.filteredScripts.length) {
        this.selectScript(index);
      }
    }, [['ctrlcmd-down', conditionAll], ['down', conditionAll], ['j', conditionNotSearch, true]]), ...registerHotkey(() => {
      const index = this.focusedIndex - this.numColumns;

      if (index >= 0) {
        this.selectScript(index);
      }
    }, [['ctrlcmd-up', conditionAll], ['up', conditionAll], ['k', conditionNotSearch, true]]), ...registerHotkey(() => {
      this.selectScript(this.focusedIndex - 1);
    }, [['ctrlcmd-left', conditionAll], ['left', conditionNotSearch], ['h', conditionNotSearch, true]]), ...registerHotkey(() => {
      this.selectScript(this.focusedIndex + 1);
    }, [['ctrlcmd-right', conditionAll], ['right', conditionNotSearch], ['l', conditionNotSearch, true]]), ...registerHotkey(() => {
      this.selectScript(0);
    }, [['ctrlcmd-home', conditionAll], ['g g', conditionNotSearch, true]]), ...registerHotkey(() => {
      this.selectScript(this.filteredScripts.length - 1);
    }, [['ctrlcmd-end', conditionAll], ['G', conditionNotSearch, true]]), ...registerHotkey(() => {
      this.handleActionEdit(this.selectedScript);
    }, explodeKeys(scriptHotkeys.edit, conditionScriptFocused, true)), ...registerHotkey(() => {
      this.handleActionRemove(this.selectedScript);
    }, [['delete', conditionScriptFocused], [scriptHotkeys.remove, conditionScriptFocused, true]]), ...registerHotkey(() => {
      this.handleActionUpdate(this.selectedScript);
    }, [[scriptHotkeys.update, conditionScriptFocused, true]]), ...registerHotkey(() => {
      this.handleActionToggle(this.selectedScript);
    }, [[scriptHotkeys.toggle, conditionScriptFocused, true]]), ...registerHotkey(() => {
      this.handleActionRestore(this.selectedScript);
    }, [[scriptHotkeys.restore, conditionScriptFocusedRecycle, true]])];
  },

  beforeDestroy() {
    var _this$disposeList;

    (_this$disposeList = this.disposeList) == null ? void 0 : _this$disposeList.forEach(dispose => {
      dispose();
    });
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vueleton/lib/tooltip/bundle */ "./node_modules/vueleton/lib/tooltip/bundle.js");
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/consts */ "./src/common/consts.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/ui/setting-check */ "./src/common/ui/setting-check.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/common/options */ "./src/common/options.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options_defaults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/common/options-defaults */ "./src/common/options-defaults.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_hook_setting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/common/hook-setting */ "./src/common/hook-setting.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/common/ui/icon */ "./src/common/ui/icon.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_locale_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/common/ui/locale-group */ "./src/common/ui/locale-group.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_zip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/common/zip */ "./src/common/zip.js");
/* harmony import */ var _vm_import__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vm-import */ "./src/options/views/tab-settings/vm-import.vue");
/* harmony import */ var _vm_export__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vm-export */ "./src/options/views/tab-settings/vm-export.vue");
/* harmony import */ var _vm_sync__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vm-sync */ "./src/options/views/tab-settings/vm-sync.vue");
/* harmony import */ var _vm_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vm-editor */ "./src/options/views/tab-settings/vm-editor.vue");
/* harmony import */ var _vm_template__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vm-template */ "./src/options/views/tab-settings/vm-template.vue");
/* harmony import */ var _vm_blacklist__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vm-blacklist */ "./src/options/views/tab-settings/vm-blacklist.vue");
/* harmony import */ var _vm_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vm-css */ "./src/options/views/tab-settings/vm-css.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


















const badgeColorEnum = {
  badgeColor: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('titleBadgeColor'),
  badgeColorBlocked: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('titleBadgeColorBlocked')
};
const badgeColorNames = Object.keys(badgeColorEnum);
const badgeColorItem = {
  enum: badgeColorEnum,
  // exposing to the template
  normalize: (value, name) => /^#[0-9a-f]{6}$/i.test(value) ? value : _Users_ZhaoJun_Desktop_violentmonkey_src_common_options_defaults__WEBPACK_IMPORTED_MODULE_7__["default"][name]
};

const items = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
  autoUpdate: {
    normalize: value => Math.max(0, Math.min(365, +value || 0))
  },
  defaultInjectInto: {
    enum: {
      [_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_3__["INJECT_AUTO"]]: '',
      [_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_3__["INJECT_PAGE"]]: '',
      [_Users_ZhaoJun_Desktop_violentmonkey_src_common_consts__WEBPACK_IMPORTED_MODULE_3__["INJECT_CONTENT"]]: ''
    }
  },
  showBadge: {
    enum: {
      '': Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('labelBadgeNone'),
      unique: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('labelBadgeUnique'),
      total: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('labelBadgeTotal')
    }
  },
  'filtersPopup.hideDisabled': {
    enum: {
      '': Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('optionPopupShowDisabled'),
      group: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('optionPopupGroupDisabled'),
      hide: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('optionPopupHideDisabled')
    }
  },
  'filtersPopup.sort': {
    enum: {
      exec: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('filterExecutionOrder'),
      alpha: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('filterAlphabeticalOrder')
    }
  },
  uiTheme: {
    enum: {
      '': Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('optionUiThemeAuto'),
      dark: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('optionUiThemeDark'),
      light: Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('optionUiThemeLight')
    }
  }
}, safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_5__["mapEntry"], badgeColorEnum, () => badgeColorItem));

const normalizeEnum = (value, name) => safeCall(hasOwnProperty, items[name].enum, value) ? value : Object.keys(items[name].enum)[0];

const getItemUpdater = (name, normalize) => Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["debounce"])((value, oldValue) => {
  value = normalize(value, name);
  oldValue = normalize(oldValue, name);
  if (value !== oldValue) _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_6__["default"].set(name, value);
}, 50);

const settings = safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_5__["mapEntry"], items, () => null);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Icon: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_9__["default"],
    VmImport: _vm_import__WEBPACK_IMPORTED_MODULE_12__["default"],
    VmExport: _vm_export__WEBPACK_IMPORTED_MODULE_13__["default"],
    VmSync: _vm_sync__WEBPACK_IMPORTED_MODULE_14__["default"],
    VmEditor: _vm_editor__WEBPACK_IMPORTED_MODULE_15__["default"],
    VmTemplate: _vm_template__WEBPACK_IMPORTED_MODULE_16__["default"],
    VmBlacklist: _vm_blacklist__WEBPACK_IMPORTED_MODULE_17__["default"],
    VmCss: _vm_css__WEBPACK_IMPORTED_MODULE_18__["default"],
    SettingCheck: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_check__WEBPACK_IMPORTED_MODULE_4__["default"],
    LocaleGroup: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_locale_group__WEBPACK_IMPORTED_MODULE_10__["default"],
    Tooltip: (vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1___default())
  },

  data() {
    return {
      showAdvanced: false,
      expose: null,
      items,
      settings
    };
  },

  computed: {
    editorWindowHint() {
      var _global$chrome$window;

      return ((_global$chrome$window = global.chrome.windows) == null ? void 0 : _global$chrome$window.onBoundsChanged) ? null : this.i18n('optionEditorWindowHint');
    },

    isCustomBadgeColor() {
      return badgeColorNames.some(name => settings[name] !== _Users_ZhaoJun_Desktop_violentmonkey_src_common_options_defaults__WEBPACK_IMPORTED_MODULE_7__["default"][name]);
    }

  },
  methods: {
    onResetBadgeColors() {
      badgeColorNames.forEach(name => {
        settings[name] = _Users_ZhaoJun_Desktop_violentmonkey_src_common_options_defaults__WEBPACK_IMPORTED_MODULE_7__["default"][name];
      });
    }

  },

  created() {
    this.revokers = [];
    safeCall(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_5__["forEachEntry"], items, ([name, {
      normalize = normalizeEnum
    }]) => {
      this.revokers.push(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_hook_setting__WEBPACK_IMPORTED_MODULE_8__["default"])(name, val => {
        settings[name] = normalize(val, name);
      }));
      this.$watch(() => settings[name], getItemUpdater(name, normalize));
    });
    this.expose = Object.keys(_Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_6__["default"].get('expose')).map(k => [k, decodeURIComponent(k)]); // Preload zip.js when user visits settings tab

    Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_zip__WEBPACK_IMPORTED_MODULE_11__["default"])();
  },

  beforeDestroy() {
    this.revokers.forEach(revoke => {
      revoke();
    });
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-blacklist.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-blacklist.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/ui */ "./src/common/ui/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/ui/setting-text */ "./src/common/ui/setting-text.vue");
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SettingText: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_text__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    onSave() {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_1__["showMessage"])({
        text: this.i18n('msgSavedBlacklist')
      });
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["sendCmd"])('BlacklistReset');
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-css.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-css.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/ui */ "./src/common/ui/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/ui/setting-text */ "./src/common/ui/setting-text.vue");
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SettingText: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_text__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    onSave() {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_0__["showMessage"])({
        text: this.i18n('msgSavedCustomCSS')
      });
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-editor.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-editor.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/options */ "./src/common/options.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_hook_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/hook-setting */ "./src/common/hook-setting.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/storage */ "./src/common/storage.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/ui */ "./src/common/ui/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/ui/setting-text */ "./src/common/ui/setting-text.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const keyThemeCSS = 'editorTheme';
const keyThemeNAME = 'editorThemeName';
const keyThemeNAMES = 'editorThemeNames';
const gh = 'github.com';
const ghREPO = 'codemirror/CodeMirror';
const ghBRANCH = 'master';
const ghPATH = 'theme';
const ghURL = `https://${gh}/${ghREPO}/tree/${ghBRANCH}/${ghPATH}`;
const DEFAULT = 'default';

const createData = () => ({
  hint: null,
  busy: false,
  error: null,
  css: null,
  theme: DEFAULT,
  themes: [],
  DEFAULT,
  ghURL
});

const previewLINES = 20;
const previewLENGTH = 100;

const makeTextPreview = css => css ? css.split('\n', previewLINES + 1).map((s, i) => i === previewLINES && '...' || s.length > previewLENGTH && `${s.slice(0, previewLENGTH)}...` || s).join('\n') : null;

/* harmony default export */ __webpack_exports__["default"] = ({
  data: createData,
  components: {
    SettingText: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_text__WEBPACK_IMPORTED_MODULE_5__["default"]
  },

  beforeDestroy() {
    this.revokers.forEach(revoke => revoke());
    this.revokers = null;
  },

  async mounted() {
    this.$refs.editor.$el.addEventListener('dblclick', this.toggleBoolean);

    if (!this.revokers) {
      [this.themes] = await Promise.all([_Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_3__["default"].base.getOne(keyThemeNAMES), _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_1__["default"].ready]);
      this.css = makeTextPreview(_Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_1__["default"].get(keyThemeCSS));
      this.revokers = [['theme', keyThemeNAME]].map(([prop, opt]) => {
        const setValue = val => {
          this[prop] = val != null ? val : createData()[prop];
        };

        setValue(_Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_1__["default"].get(opt));
        return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_hook_setting__WEBPACK_IMPORTED_MODULE_2__["default"])(opt, setValue);
      });
      this.$watch('theme', async val => {
        const url = val && val !== DEFAULT && `https://raw.githubusercontent.com/${ghREPO}/${ghBRANCH}/${ghPATH}/${val}.css`;
        const css = url && (await this.fetch(url));
        _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_1__["default"].set(keyThemeNAME, !url || css ? val : DEFAULT);
        _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_1__["default"].set(keyThemeCSS, css || '');
        this.css = makeTextPreview(css);
      });
    }
  },

  methods: {
    async fetch(url, method = 'text') {
      const el = document.activeElement;
      this.busy = true;

      try {
        const res = await (await fetch(url))[method]();
        this.error = null;
        return res;
      } catch (e) {
        this.error = e.message || e.code || `${e}`;
      } finally {
        this.busy = false;
        this.$nextTick(() => el == null ? void 0 : el.focus());
      }
    },

    async getThemes() {
      var _await$this$fetch;

      const apiThemesUrl = `https://api.${gh}/repos/${ghREPO}/contents/${ghPATH}`;
      const themes = (_await$this$fetch = await this.fetch(apiThemesUrl, 'json')) == null ? void 0 : _await$this$fetch.map(file => /[-\w]+\.css$/.test(file.name) && file.type === 'file' && file.name.slice(0, -4)).filter(name => name && name !== DEFAULT);

      if (themes) {
        this.themes = themes;
        _Users_ZhaoJun_Desktop_violentmonkey_src_common_storage__WEBPACK_IMPORTED_MODULE_3__["default"].base.set(keyThemeNAMES, themes);
      }
    },

    onSave() {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_4__["showMessage"])({
        text: this.$refs.editor.error || this.i18n('msgSavedEditorOptions')
      });
    },

    toggleBoolean(event) {
      const el =
      /** @type HTMLTextAreaElement */
      event.target;
      const {
        selectionStart: start,
        selectionEnd: end,
        value
      } = el;
      const toggled = {
        false: 'true',
        true: 'false'
      }[value.slice(start, end)]; // FF can't run execCommand on textarea, https://bugzil.la/1220696#c24

      if (toggled && !document.execCommand('insertText', false, toggled)) {
        el.value = value.slice(0, start) + toggled + value.slice(end);
        el.setSelectionRange(start + toggled.length, start + toggled.length);
        el.dispatchEvent(new Event('input'));

        el.onblur = () => el.dispatchEvent(new Event('change'));
      }
    },

    async toggleStateHint() {
      if (this.hint) {
        this.hint = null;
        return;
      }

      const HIDE_OPTS = [// we activate only one mode: js
      'mode', // duh
      'value', // these accept only a function
      'configureMouse', 'lineNumberFormatter', 'specialCharPlaceholder'];
      const opts = {};
      Object.entries(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, (await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! codemirror */ "./node_modules/codemirror/lib/codemirror.js", 7))).defaults, {}, (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./src/common/ui/code */ "./src/common/ui/code.vue"))).default.data().cmDefaults, {}, _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_1__["default"].get('editor'))) // sort by keys alphabetically to make it more readable
      .sort(([a], [b]) => a < b ? -1 : a > b).filter(([key, val]) => !HIDE_OPTS.includes(key) && typeof val !== 'function').forEach(([key, val]) => {
        opts[key] = val;
      });
      this.hint = JSON.stringify(opts, null, '  ');
      setTimeout(() => {
        if (this.$el.getBoundingClientRect().bottom > window.innerHeight) {
          this.$el.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-export.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-export.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vueleton_lib_modal_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vueleton/lib/modal/bundle */ "./node_modules/vueleton/lib/modal/bundle.js");
/* harmony import */ var vueleton_lib_modal_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vueleton_lib_modal_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vueleton/lib/tooltip/bundle */ "./node_modules/vueleton/lib/tooltip/bundle.js");
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/ui/icon */ "./src/common/ui/icon.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/date */ "./src/common/date.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/object */ "./src/common/object.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/common/options */ "./src/common/options.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/common/ua */ "./src/common/ua.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_check__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/common/ui/setting-check */ "./src/common/ui/setting-check.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/common/ui/setting-text */ "./src/common/ui/setting-text.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_download__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/common/download */ "./src/common/download.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_zip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/common/zip */ "./src/common/zip.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils */ "./src/options/utils/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/**
 * Note:
 * - Firefox does not support multiline <select>
 */

if (IS_FIREFOX) _utils__WEBPACK_IMPORTED_MODULE_12__["store"].ffDownload = {};
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SettingCheck: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_check__WEBPACK_IMPORTED_MODULE_8__["default"],
    SettingText: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_text__WEBPACK_IMPORTED_MODULE_9__["default"],
    Icon: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_2__["default"],
    Modal: (vueleton_lib_modal_bundle__WEBPACK_IMPORTED_MODULE_0___default()),
    Tooltip: (vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1___default())
  },

  data() {
    return {
      store: _utils__WEBPACK_IMPORTED_MODULE_12__["store"],
      dateTokens: Object.keys(_Users_ZhaoJun_Desktop_violentmonkey_src_common_date__WEBPACK_IMPORTED_MODULE_4__["DATE_FMT"]).join(', '),
      exporting: false
    };
  },

  methods: {
    async handleExport() {
      try {
        this.exporting = true;
        download((await exportData()), this.getFileName());
      } finally {
        this.exporting = false;
      }
    },

    getFileName() {
      var _tpl$value;

      const {
        tpl
      } = this.$refs;
      return tpl && `${Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_date__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(((_tpl$value = tpl.value) == null ? void 0 : _tpl$value.trim()) || tpl.defaultValue)}.zip`;
    }

  }
});

function download(blob, fileName) {
  /* Old FF can't download blobs https://bugzil.la/1420419, fixed by enabling OOP:
   * v56 in Windows https://bugzil.la/1357486
   * v61 in MacOS https://bugzil.la/1385403
   * v63 in Linux https://bugzil.la/1357487 */
  const FF = _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_7__["default"].firefox; // eslint-disable-next-line no-nested-ternary

  if (FF && (_Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_7__["default"].os === 'win' ? FF < 56 : _Users_ZhaoJun_Desktop_violentmonkey_src_common_ua__WEBPACK_IMPORTED_MODULE_7__["default"].os === 'mac' ? FF < 61 : FF < 63)) {
    const reader = new FileReader();

    reader.onload = () => {
      _utils__WEBPACK_IMPORTED_MODULE_12__["store"].ffDownload = {
        name: fileName,
        url: reader.result
      };
    };

    reader.readAsDataURL(blob);
  } else {
    Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_download__WEBPACK_IMPORTED_MODULE_10__["downloadBlob"])(blob, fileName);
  }
}

function normalizeFilename(name) {
  return name.replace(/[\\/:*?"<>|]/g, '-');
}

async function exportData() {
  const withValues = _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_6__["default"].get('exportValues');
  const data = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_3__["sendCmdDirectly"])('ExportZip', {
    values: withValues
  });
  const names = {};
  const vm = {
    scripts: {},
    settings: _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_6__["default"].get()
  };
  delete vm.settings.sync;
  if (withValues) vm.values = {};
  const files = (Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_object__WEBPACK_IMPORTED_MODULE_5__["objectGet"])(data, 'items') || []).map(({
    script,
    code
  }) => {
    let name = normalizeFilename(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_3__["getScriptName"])(script));

    if (names[name]) {
      names[name] += 1;
      name = `${name}_${names[name]}`;
    } else names[name] = 1;

    const {
      lastModified,
      lastUpdated
    } = script.props;
    const info = {
      custom: script.custom,
      config: script.config,
      position: script.props.position,
      lastModified,
      lastUpdated
    };

    if (withValues) {
      // `values` are related to scripts by `props.id` in Violentmonkey,
      // but by the global `props.uri` when exported.
      const values = data.values[script.props.id];
      if (values) vm.values[script.props.uri] = values;
    }

    vm.scripts[name] = info;
    return {
      name: `${name}.user.js`,
      content: code,
      lastModDate: new Date(lastUpdated || lastModified)
    };
  });
  files.push({
    name: 'violentmonkey',
    content: JSON.stringify(vm)
  });
  const zip = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_zip__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const blobWriter = new zip.BlobWriter('application/zip');
  const writer = new zip.ZipWriter(blobWriter, {
    bufferedWrite: true,
    keepOrder: false
  });
  await Promise.all(files.map(file => writer.add(file.name, new zip.TextReader(file.content), {
    lastModDate: file.lastModDate
  })));
  const blob = await writer.close();
  return blob;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-import.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-import.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vueleton/lib/tooltip/bundle */ "./node_modules/vueleton/lib/tooltip/bundle.js");
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/options */ "./src/common/options.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/ui/setting-check */ "./src/common/ui/setting-check.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_zip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/zip */ "./src/common/zip.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/common/ui */ "./src/common/ui/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const reports = [];
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SettingCheck: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_check__WEBPACK_IMPORTED_MODULE_4__["default"],
    Tooltip: (vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_1___default())
  },

  data() {
    return {
      reports,
      vacuuming: false,
      labelVacuum: this.i18n('buttonVacuum')
    };
  },

  methods: {
    pickBackup() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.zip';

      input.onchange = () => {
        var _input$files;

        return importBackup((_input$files = input.files) == null ? void 0 : _input$files[0]);
      };

      input.click();
    },

    async vacuum() {
      this.vacuuming = true;
      this.labelVacuum = this.i18n('buttonVacuuming');
      const {
        fixes,
        errors
      } = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('Vacuum');
      const errorText = errors == null ? void 0 : errors.join('\n');
      this.vacuuming = false;
      this.labelVacuum = this.i18n('buttonVacuumed') + (fixes ? ` (${fixes})` : '');
      if (errorText) Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_6__["showMessage"])({
        text: errorText
      });
    }

  },

  mounted() {
    const toggleDragDrop = initDragDrop(this.$refs.buttonImport);
    window.addEventListener('hashchange', toggleDragDrop);
    toggleDragDrop();
  }

});

async function importBackup(file) {
  if (!file) return;
  reports.length = 0;
  const zip = await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_zip__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const reader = new zip.ZipReader(new zip.BlobReader(file));
  const entries = (await reader.getEntries().catch(report)) || [];
  if (reports.length) return;
  report('', file.name, 'info');
  const uriMap = {};
  const total = entries.reduce((n, entry) => {
    var _entry$filename;

    return n + ((_entry$filename = entry.filename) == null ? void 0 : _entry$filename.endsWith('.user.js'));
  }, 0);
  const vmEntry = entries.find(entry => {
    var _entry$filename2;

    return ((_entry$filename2 = entry.filename) == null ? void 0 : _entry$filename2.toLowerCase()) === 'violentmonkey';
  });
  const vm = vmEntry && (await readContents(vmEntry)) || {};
  if (!vm.scripts) vm.scripts = {};
  if (!vm.values) vm.values = {};
  await processAll(readScriptOptions, '.options.json');
  await processAll(readScript, '.user.js');

  if (_Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__["default"].get('importScriptData')) {
    await processAll(readScriptStorage, '.storage.json');
    Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('SetValueStores', toObjectArray(vm.values, ([uri, store]) => store && {
      where: {
        uri
      },
      store
    }));
  }

  if (_Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_3__["default"].get('importSettings')) {
    Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('SetOptions', toObjectArray(vm.settings, ([key, value]) => key !== 'sync' && {
      key,
      value
    }));
  }

  Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('CheckPosition');
  Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_6__["showMessage"])({
    text: reportProgress()
  });
  await reader.close();

  function parseJson(text, entry) {
    try {
      return JSON.parse(text);
    } catch (e) {
      report(e, entry.filename, null);
    }
  }

  function processAll(transform, suffix) {
    return Promise.all(entries.map(async entry => {
      const {
        filename
      } = entry;

      if (filename == null ? void 0 : filename.endsWith(suffix)) {
        const contents = await readContents(entry);
        return contents && transform(entry, contents, filename.slice(0, -suffix.length));
      }
    }));
  }

  async function readContents(entry) {
    const text = await entry.getData(new zip.TextWriter());
    return entry.filename.endsWith('.js') ? text : parseJson(text, entry);
  }

  async function readScript(entry, code, name) {
    var _more$enabled, _more$update, _more$props, _more$props2;

    const {
      filename
    } = entry;
    const more = vm.scripts[name];

    const data = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      code
    }, more && {
      custom: more.custom,
      config: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        enabled: (_more$enabled = more.enabled) != null ? _more$enabled : 1,
        // Import data from older version
        shouldUpdate: (_more$update = more.update) != null ? _more$update : 1
      }, more.config),
      position: more.position,
      props: {
        lastModified: more.lastModified || ((_more$props = more.props) == null ? void 0 : _more$props.lastModified) // Import data from Tampermonkey
        || +entry.lastModDate,
        lastUpdated: more.lastUpdated || ((_more$props2 = more.props) == null ? void 0 : _more$props2.lastUpdated) // Import data from Tampermonkey
        || +entry.lastModDate
      }
    });

    try {
      uriMap[name] = (await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('ParseScript', data)).update.props.uri;
      reportProgress(filename);
    } catch (e) {
      report(e, filename, 'script');
    }
  }

  async function readScriptOptions(entry, json, name) {
    const {
      meta,
      settings = {},
      options: opts
    } = json;
    if (!meta || !opts) return;
    const ovr = opts.override || {};
    reports[0].text = 'Tampermonkey';
    /** @type VMScript */

    vm.scripts[name] = {
      config: {
        enabled: settings.enabled !== false ? 1 : 0,
        shouldUpdate: opts.check_for_updates ? 1 : 0
      },
      custom: {
        downloadURL: typeof meta.file_url === 'string' ? meta.file_url : undefined,
        noframes: ovr.noframes == null ? undefined : +!!ovr.noframes,
        runAt: /^document-(start|body|end|idle)$/.test(opts.run_at) ? opts.run_at : undefined,
        exclude: toStringArray(ovr.use_excludes),
        include: toStringArray(ovr.use_includes),
        match: toStringArray(ovr.use_matches),
        origExclude: ovr.merge_excludes !== false,
        // will also set to true if absent
        origInclude: ovr.merge_includes !== false,
        origMatch: ovr.merge_matches !== false
      },
      position: +settings.position || undefined,
      props: {
        lastModified: +meta.modified,
        lastUpdated: +meta.modified
      }
    };
  }

  async function readScriptStorage(entry, json, name) {
    reports[0].text = 'Tampermonkey';
    vm.values[uriMap[name]] = json.data;
  }

  function report(text, name, type = 'critical') {
    reports.push({
      text,
      name,
      type
    });
  }

  function reportProgress(filename = '') {
    const count = Object.keys(uriMap).length;
    const text = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('msgImported', [count === total ? count : `${count} / ${total}`]);
    reports[0].name = text; // keeping the message in the first column so it doesn't jump around

    reports[0].text = filename;
    return text;
  }

  function toObjectArray(obj, transform) {
    return Object.entries(obj || {}).map(transform).filter(Boolean);
  }

  function toStringArray(data) {
    return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["ensureArray"])(data).filter(item => typeof item === 'string');
  }
}

function initDragDrop(targetElement) {
  let leaveTimer;

  const showAllowedState = state => targetElement.classList.toggle('drop-allowed', state);

  const onDragEnd = () => showAllowedState(false);

  const onDragLeave = () => {
    clearTimeout(leaveTimer);
    leaveTimer = setTimeout(onDragEnd, 250);
  };

  const onDragOver = evt => {
    clearTimeout(leaveTimer);
    const hasFiles = evt.dataTransfer.types.includes('Files');
    if (hasFiles) evt.preventDefault();
    showAllowedState(hasFiles);
  };

  const onDrop = async evt => {
    evt.preventDefault();
    showAllowedState(false);

    try {
      // storing it now because `files` will be null after await
      const file = evt.dataTransfer.files[0];
      await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_6__["showConfirmation"])(Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"])('buttonImportData'));
      targetElement.disabled = true;
      await importBackup(file);
      targetElement.disabled = false;
    } catch (e) {
      /* NOP */
    }
  };

  return () => {
    const isSettingsTab = window.location.hash === '#settings';
    const onOff = document[`${isSettingsTab ? 'add' : 'remove'}EventListener`];
    safeCall(onOff, document, 'dragend', onDragEnd);
    safeCall(onOff, document, 'dragleave', onDragLeave);
    safeCall(onOff, document, 'dragover', onDragOver);
    safeCall(onOff, document, 'drop', onDrop);
  };
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-sync.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-sync.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vueleton/lib/tooltip/bundle */ "./node_modules/vueleton/lib/tooltip/bundle.js");
/* harmony import */ var vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common/options */ "./src/common/options.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/ui/setting-check */ "./src/common/ui/setting-check.vue");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_hook_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/hook-setting */ "./src/common/hook-setting.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/ui/icon */ "./src/common/ui/icon.vue");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./src/options/utils/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const SYNC_CURRENT = 'sync.current';
const syncConfig = {
  current: ''
};
Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_hook_setting__WEBPACK_IMPORTED_MODULE_4__["default"])(SYNC_CURRENT, value => {
  syncConfig.current = value || '';
});
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SettingCheck: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_check__WEBPACK_IMPORTED_MODULE_3__["default"],
    Icon: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_icon__WEBPACK_IMPORTED_MODULE_5__["default"],
    Tooltip: (vueleton_lib_tooltip_bundle__WEBPACK_IMPORTED_MODULE_0___default())
  },

  data() {
    return {
      syncConfig,
      store: _utils__WEBPACK_IMPORTED_MODULE_6__["store"]
    };
  },

  computed: {
    syncServices() {
      const states = this.store.sync;

      if (states && states.length) {
        return [{
          displayName: this.i18n('labelSyncDisabled'),
          name: '',
          properties: {}
        }, ...states];
      }

      return null;
    },

    service() {
      if (this.syncServices) {
        const current = this.syncConfig.current || '';
        let service = this.syncServices.find(item => item.name === current);

        if (!service) {
          console.warn('Invalid current service:', current);
          service = this.syncServices[0];
        }

        return service;
      }

      return null;
    },

    state() {
      const {
        service
      } = this;

      if (service) {
        const canAuthorize = ['idle', 'error'].includes(service.syncState) && ['no-auth', 'unauthorized', 'error', 'authorized'].includes(service.authState);
        const canSync = canAuthorize && service.authState === 'authorized';
        return {
          message: this.getMessage(),
          label: this.getLabel(),
          canAuthorize,
          canSync,
          authType: service.properties.authType,
          userConfig: service.userConfig || {}
        };
      }

      return null;
    }

  },
  methods: {
    onSaveUserConfig() {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('SyncSetConfig', this.state.userConfig).catch(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["noop"]);
    },

    onSyncChange(e) {
      const {
        value
      } = e.target;
      _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_2__["default"].set(SYNC_CURRENT, value);
    },

    onAuthorize() {
      const {
        service
      } = this;

      if (['authorized'].includes(service.authState)) {
        // revoke
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('SyncRevoke');
      } else if (['no-auth', 'unauthorized', 'error'].includes(service.authState)) {
        // authorize
        Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('SyncAuthorize');
      }
    },

    onSync() {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_1__["sendCmd"])('SyncStart');
    },

    getMessage() {
      const {
        service
      } = this;
      if (service.authState === 'initializing') return this.i18n('msgSyncInit');
      if (service.authState === 'no-auth') return this.i18n('msgSyncNoAuthYet');
      if (service.authState === 'error') return this.i18n('msgSyncInitError');
      if (service.authState === 'unauthorized') return this.i18n('msgSyncInitError');
      if (service.syncState === 'error') return this.i18n('msgSyncError');
      if (service.syncState === 'ready') return this.i18n('msgSyncReady');

      if (service.syncState === 'syncing') {
        let progress = '';

        if (service.progress && service.progress.total) {
          progress = ` (${service.progress.finished}/${service.progress.total})`;
        }

        return this.i18n('msgSyncing') + progress;
      }

      if (service.lastSync) {
        const lastSync = new Date(service.lastSync).toLocaleString();
        return this.i18n('lastSync', lastSync);
      }
    },

    getLabel() {
      const {
        service
      } = this;
      if (service.authState === 'authorizing') return this.i18n('labelSyncAuthorizing');
      if (service.authState === 'authorized') return this.i18n('labelSyncRevoke');
      return this.i18n('labelSyncAuthorize');
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-template.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-template.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/ui */ "./src/common/ui/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/ui/setting-text */ "./src/common/ui/setting-text.vue");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SettingText: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_setting_text__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    onSave() {
      Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_ui__WEBPACK_IMPORTED_MODULE_0__["showMessage"])({
        text: this.i18n('msgSavedScriptTemplate')
      });
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./scripts/fake-dep-loader.js?!./node_modules/vue-loader/lib/index.js?!./src/common/ui/locale-group.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./scripts/fake-dep-loader.js??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./src/common/ui/locale-group.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
//
//
//
//
//
//
//
//

const SEP = '\x02';
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['i18nKey'],
  computed: {
    parts() {
      return Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["i18n"])(this.i18nKey, [SEP]).split(SEP);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./scripts/fake-dep-loader.js?!./node_modules/vue-loader/lib/index.js?!./src/common/ui/setting-text.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./scripts/fake-dep-loader.js??ref--7-0!./node_modules/vue-loader/lib??vue-loader-options!./src/common/ui/setting-text.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/router */ "./src/common/router.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object */ "./src/common/object.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options */ "./src/common/options.js");
/* harmony import */ var _options_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../options-defaults */ "./src/common/options-defaults.js");
/* harmony import */ var _hook_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hook-setting */ "./src/common/hook-setting.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: String,
    json: Boolean,
    disabled: Boolean,
    hasSave: {
      type: Boolean,
      default: true
    },
    hasReset: Boolean,
    rows: Number
  },

  data() {
    return {
      value: null,
      placeholder: null,
      savedValue: null
    };
  },

  computed: {
    parsedData() {
      let value;
      let error;

      if (this.json) {
        try {
          value = JSON.parse(this.value);
        } catch (e) {
          error = e.message || e;
        }
      } else {
        value = this.value;
      }

      return {
        value,
        error
      };
    },

    isDirty() {
      return !Object(_object__WEBPACK_IMPORTED_MODULE_1__["deepEqual"])(this.parsedData.value, this.savedValue || '');
    },

    canSave() {
      return !this.parsedData.error && this.isDirty;
    },

    canReset() {
      return !Object(_object__WEBPACK_IMPORTED_MODULE_1__["deepEqual"])(this.parsedData.value, this.defaultValue || '');
    }

  },
  watch: {
    isDirty(state) {
      this.toggleUnloadSentry(state);
    }

  },

  created() {
    const handle = this.json ? value => JSON.stringify(value, null, '  ') : // XXX compatible with old data format
    value => Array.isArray(value) ? value.join('\n') : value || '';
    const defaultValue = Object(_object__WEBPACK_IMPORTED_MODULE_1__["objectGet"])(_options_defaults__WEBPACK_IMPORTED_MODULE_3__["default"], this.name);
    this.revoke = Object(_hook_setting__WEBPACK_IMPORTED_MODULE_4__["default"])(this.name, val => {
      this.savedValue = val;
      this.value = handle(val);
    });
    this.defaultValue = defaultValue;
    this.placeholder = handle(defaultValue);
    this.toggleUnloadSentry = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_0__["getUnloadSentry"])(() => {
      // Reset to saved value after confirming loss of data.
      // The component won't be destroyed on tab change, so the changes are actually kept.
      // Here we reset it to make sure the user loses the changes when leaving the settings tab.
      // Otherwise the user may be confused about where the changes are after switching back.
      this.value = handle(this.savedValue);
    });
  },

  beforeDestroy() {
    this.revoke();
    this.toggleUnloadSentry(false);
  },

  methods: {
    onChange() {
      // Auto save if there is no `Save` button
      if (!this.hasSave && this.canSave) this.onSave();
    },

    onSave() {
      _options__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.name, this.parsedData.value);
      this.$emit('save');
    },

    onReset() {
      const el = this.$refs.text;
      /* Focusing to allow quick Ctrl-Z to undo.
       * Focusing also prevents layout shift when `reset` button auto-hides. */

      el.focus();

      if (!this.hasSave) {
        // No save button = something rather trivial e.g. the export file name
        _options__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.name, this.defaultValue);
      } else {
        // Save button exists = let the user undo the input
        el.select();

        if (!document.execCommand('insertText', false, this.placeholder)) {
          this.value = this.placeholder;
        }
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/help.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/help.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.edit-help h3 {\n    margin: .5em 0;\n}\n.edit-help .keyboard {\n    column-width: 25em;\n}\n.edit-help .keyboard h3 {\n      column-span: all;\n}\n.edit-help .keyboard dl {\n      display: flex;\n      align-items: center;\n      padding: .25em 0;\n}\n.edit-help .keyboard dt {\n      text-align: right;\n      padding-right: .5em;\n      flex: 0 40%;\n      font-weight: bold;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/index.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/index.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.edit {\n  z-index: 2000;\n}\n.edit-header {\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid var(--fill-3);\n}\n.edit-name {\n    font-weight: bold;\n}\n.edit-body {\n    padding: .5rem 1rem;\n    overflow: auto;\n    background: var(--bg);\n}\n.edit-nav-item {\n    display: inline-block;\n    padding: 8px 16px;\n    cursor: pointer\n}\n.edit-nav-item.active {\n      background: var(--bg);\n      box-shadow: 0 -1px 1px var(--fill-7);\n}\n.edit-nav-item:not(.active):hover {\n      background: var(--fill-0-5);\n      box-shadow: 0 -1px 1px var(--fill-4);\n}\n.edit .edit-externals {\n    --border: 0;\n}\n.edit .edit-externals .select {\n      padding-top: 0.5em\n}\n@media (max-width: 1599px) {\n.edit .edit-externals .select {\n        resize: vertical\n}\n.edit .edit-externals .select[style*=height] {\n          max-height: 80%;\n}\n.edit .edit-externals .select[style*=width] {\n          width: auto !important;\n}\n}\n@media (min-width: 1600px) {\n.edit .edit-externals {\n      flex-direction: row;\n}\n.edit .edit-externals .select {\n        resize: horizontal;\n        min-width: 15em;\n        width: 30%;\n        max-height: none;\n        border-bottom: none\n}\n.edit .edit-externals .select[style*=height] {\n          height: auto !important;\n}\n.edit .edit-externals .select[style*=width] {\n          max-width: 80%;\n}\n}\n@media (max-width: 767px) {\n.edit-hint {\n    display: none;\n}\n}\n@media (max-width: 500px) {\n.edit-name {\n    display: none;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/settings.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/settings.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.edit-settings.edit-body { /* using 2 classes to ensure we override .edit-body in index.vue*/\n    column-width: calc((1920px - 12em)/2);\n    grid-column-gap: 4em;\n    column-gap: 4em;\n    padding-left: 4em;\n    padding-right: 4em;\n}\n.edit-settings h4 {\n    margin: 2em 0 1em;\n}\n.edit-settings table {\n    border-spacing: 0 1em;\n    page-break-inside: avoid;\n    break-inside: avoid;\n}\n.edit-settings tr {\n    margin-bottom: 1em;\n}\n.edit-settings tr > :nth-child(1) {\n      white-space: nowrap;\n      break-inside: avoid-column;\n      padding-right: .5em;\n}\n.edit-settings tr > :nth-child(1) > :nth-child(2) {\n        margin-left: 1em;\n}\n.edit-settings tr > :nth-child(2) {\n      width: 100%;\n}\n.edit-settings tr input[type=checkbox] + span {\n      -moz-user-select: none;\n           user-select: none;\n}\n.edit-settings tr input[type=text] {\n      width: 100%;\n}\n.edit-settings tr[focus-within] code {\n    text-decoration: underline;\n}\n.edit-settings tr:focus-within code {\n    text-decoration: underline;\n}\n.edit-settings code {\n    background: none;\n    font-weight: bold;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/values.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/values.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.edit-values-row {\n    border: 1px solid var(--fill-2);\n    cursor: pointer;\n}\n.main > .edit-values-row:first-child {\n      padding: 8px 6px;\n}\n.edit-values-row:not(:first-child) {\n      border-top: 0;\n}\n.edit-values-row > * {\n      font-size: 12px;\n      padding: 4px 6px\n}\n.edit-values-row > *:first-child {\n        position: relative;\n        flex: 0 0 30%;\n        max-width: 240px;\n}\n.edit-values-row > *:not(:first-child) {\n        border-left: 1px solid var(--fill-2);\n}\n.edit-values-row pre {\n      width: 5em;\n      text-align: right;\n}\n.edit-values-row:focus,\n    .edit-values-row:hover {\n      background-color: var(--fill-0-5);\n}\n.edit-values-row:focus a, .edit-values-row:hover a {\n        text-decoration: underline;\n}\n.edit-values-row:focus {\n      text-decoration: underline;\n}\n.edit-values-row:focus .edit-values-btn,\n    .edit-values-row:hover .edit-values-btn {\n      display: block;\n}\n.edit-values-row .del:active {\n      color: #fff;\n      background: red;\n}\n.edit-values-empty {\n    color: var(--fill-7);\n}\n.edit-values-panel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 50%;\n    height: 100%;\n    padding: 8px;\n    box-shadow: -5px 0 5px var(--fill-2);\n    background: var(--bg);\n    z-index: 10\n}\n@media (max-width: 767px) {\n.edit-values-panel {\n      width: 100%\n}\n}\n.edit-values-panel .control {\n      display: flex;\n      align-items: center;\n}\n.edit-values-panel .control h4 {\n        flex: auto;\n        width: 0;\n}\n.edit-values-panel input {\n      width: 100%;\n}\n.edit-values-panel label {\n      display: flex;\n      flex-direction: column\n}\n.edit-values-panel label:last-child,\n      .edit-values-panel label:last-child textarea {\n        flex: auto;\n        height: 0;\n}\n.edit-values-panel label > textarea, .edit-values-panel label input {\n        margin: .25em 0;\n        padding: .25em;\n}\n.edit-values-panel textarea {\n      width: 100%;\n      word-break: break-all;\n      resize: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/script-item.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/script-item.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dragging {\n  /* using both classes to override normal .script regardless of bundling order*/\n}\n.dragging.script {\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    z-index: 9;\n    transition: none;\n    pointer-events: none;\n    background-color: hsl(34, 75%, 93%)\n}\n@media (prefers-color-scheme: dark) {\n.dragging.script {\n      background: hsl(34, 15%, 15%)\n}\n}\n.dragging.script.disabled {\n      background-color: hsl(34, 30%, 88%)\n}\n@media (prefers-color-scheme: dark) {\n.dragging.script.disabled {\n        background: hsl(34, 10%, 12%)\n}\n}\n.dragging-noscroll {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: \"\";\n    touch-action: none;\n}\n.dragging-placeholder {\n    visibility: hidden;\n}\n\n/* The icon should use the real size we generate in `dist` to ensure crispness*/\n.script {\n  position: relative;\n  margin: 8px 0 0 8px;\n  padding: 12px 10px 5px;\n  border: 1px solid var(--fill-3);\n  border-radius: .3rem;\n  transition: transform .25s\n  /* added in Chrome 41, FF64*/\n}\n@media (pointer: coarse) {\n.script {\n    transition: none\n}\n}\n\n/* fallback for pre-FF64*/\n.touch .script {\n    transition: none;\n}\n@media (prefers-reduced-motion: reduce) {\n.script {\n    transition: none\n}\n}\n.script {\n  background: var(--bg);\n  width: calc((100% - 8px)/var(--num-columns) - 8px);\n  height: 70px\n}\n.script:hover {\n    border-color: var(--fill-5);\n}\n.script .secondary {\n    color: var(--fill-8);\n    font-size: small;\n}\n.script.disabled,\n  .script.removed {\n    background: var(--fill-1);\n    color: var(--fill-6);\n}\n.script.disabled .secondary {\n      color: var(--fill-5);\n}\n.script.removed {\n    height: 54px;\n    padding-bottom: 10px;\n}\n.script.removed .secondary {\n      display: none;\n}\n.script.focused {\n    /* bring the focused item to the front so that the box-shadow will not be overlapped*/\n    /* by the next item*/\n    z-index: 1;\n    box-shadow: 1px 2px 9px var(--fill-7)\n}\n.script.focused:focus {\n      box-shadow: 1px 2px 9px var(--fill-9);\n}\n.script.error {\n    border-color: rgba(255,0,0,0.53333);\n}\n.script.error [*|href=\"#refresh\"] {\n      fill: #f00;\n}\n.script.error .script-message {\n      color: #f00;\n}\n.script-buttons {\n    line-height: 1;\n    color: hsl(215, 13%, 28%)\n}\n@media (prefers-color-scheme: dark) {\n.script-buttons {\n      color: hsl(215, 10%, 55%)\n}\n}\n.script-buttons > .flex {\n      align-items: center;\n}\n.removed .script-buttons {\n      display: none;\n}\n.script-buttons .disabled {\n      color: var(--fill-2);\n}\n.script-buttons .disabled [data-hotkey]::after {\n        content: none;\n}\n.script-buttons .icon {\n      display: block;\n}\n.script-info {\n    line-height: 1.5;\n    align-items: center;\n}\n.script-icon {\n    width: 38px;\n    height: 38px;\n    float: left;\n    cursor: pointer;\n}\n.script-icon a {\n      display: block;\n}\n.script-icon img {\n      display: block;\n      width: 100%;\n      height: 100%\n}\n.script-icon img:not([src]) {\n        visibility: hidden; /* hiding the empty outline border while the image loads*/\n}\n.disabled .script-icon img, .removed .script-icon img {\n        filter: grayscale(.8);\n        opacity: .5;\n}\n.removed .script-icon {\n      width: 32px;\n      height: 32px;\n}\n.script-name {\n    font-weight: 500;\n    font-size: 14px;\n}\n.disabled .script-name {\n      color: var(--fill-8);\n}\n.script-author {\n    display: flex;\n    align-items: center;\n    max-width: 30%;\n}\n.script-author > .ellipsis {\n      display: inline-block;\n      max-width: 100px;\n}\n.script-message {\n    white-space: nowrap;\n}\n.hotkeys [data-hotkey] {\n  position: relative\n}\n.hotkeys [data-hotkey]::after {\n    content: attr(data-hotkey);\n    position: absolute;\n    left: 50%;\n    bottom: 80%;\n    transform-origin: bottom;\n    transform: translate(-50%,0);\n    padding: .2em;\n    background: #fe6;\n    color: #333;\n    border: 1px solid #880;\n    border-radius: .2em;\n    font: .8rem monospace; /* monospace usually provides differentiation between l and I, 0 and O*/\n    line-height: 1;\n}\n.scripts {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  padding: 0 0 8px 0\n}\n.scripts[data-table][data-columns=\"1\"] .script,\n    .scripts[data-table][data-columns=\"2\"] .script:nth-child(odd),\n    .scripts[data-table][data-columns=\"3\"] .script:nth-child(3n + 1),\n    .scripts[data-table][data-columns=\"4\"] .script:nth-child(4n + 1) {\n      border-left: none;\n      margin-left: 0;\n}\n.scripts[data-table][data-columns=\"1\"] .script:nth-child(even), .scripts[data-table][data-columns=\"3\"] .script:nth-child(even) {\n        background-color: var(--fill-0-5);\n}\n.scripts[data-table][data-columns=\"2\"] .script:nth-child(4n + 2),\n      .scripts[data-table][data-columns=\"2\"] .script:nth-child(4n + 3) {\n        background-color: var(--fill-0-5);\n}\n.scripts[data-table][data-columns=\"4\"] .script:nth-child(8n + 2),\n      .scripts[data-table][data-columns=\"4\"] .script:nth-child(8n + 4),\n      .scripts[data-table][data-columns=\"4\"] .script:nth-child(8n + 5),\n      .scripts[data-table][data-columns=\"4\"] .script:nth-child(8n + 7) {\n        background-color: var(--fill-0-5);\n}\n.scripts[data-table] .script {\n      display: flex;\n      align-items: center;\n      height: 2.5rem;\n      /* --num-columns is set in tab-installed.vue*/\n      width: calc((100% - 8px*(var(--num-columns) - 1))/var(--num-columns));\n      margin: -1px 0 0 8px;\n      padding: 0 16px 0 8px;\n      border-radius: 0;\n      background: none\n}\n.scripts[data-table] .script:hover::after {\n        /* using a separate element with z-index higher than a sibling's overlapped border*/\n        content: '';\n        position: absolute;\n        top: -1px;\n        left: -1px;\n        right: -1px;\n        bottom: -1px;\n        border: 1px solid var(--fill-6);\n        pointer-events: none;\n        z-index: 2;\n}\n.scripts[data-table] .script-name {\n        cursor: pointer;\n}\n.scripts[data-table] .script-icon {\n        width: 2rem;\n        height: 2rem;\n        order: 1;\n        margin-left: .5rem;\n}\n.scripts[data-table] .script-info {\n        order: 2;\n        flex: 1;\n        margin-left: .5rem;\n        line-height: 1.2;\n}\n\n/* not using 1.1 as it cuts descender in \"g\" */\n.scripts[data-table] .script-info .updated, .scripts[data-table] .script-info .version {\n          width: 6em;\n          text-align: right;\n          color: var(--fill-8);\n}\n.scripts[data-table] .script-info .updated {\n          width: 3em;\n}\n.scripts[data-table] .script-buttons {\n        margin: 0;\n        min-width: 14rem;\n}\n.scripts[data-table] .script-buttons > .flex {\n          width: auto;\n}\n.scripts[data-table] .script-buttons > .flex > :first-child { /* edit button */\n            display: none;\n}\n.scripts[data-table] .script-author > .ellipsis {\n        max-width: 15vw;\n}\n.scripts[data-table] .script-message:not(:empty) {\n        position: absolute;\n        right: .5em;\n        top: 2em;\n        z-index: 3;\n        font-size: smaller;\n        padding: 1px .5em;\n        border-radius: .5em;\n        border: 1px solid var(--fill-5);\n        background: var(--bg);\n}\n.scripts:not([data-table]) [data-hotkey-table]::after {\n      content: none;\n}\n.scripts[data-show-order] .script-order::after {\n    content: '. ';\n}\n.scripts:not([data-show-order]) .script-order {\n    display: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-about.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-about.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.current {\n  color: green\n}\n@media (prefers-color-scheme: dark) {\n.current {\n    color: greenyellow\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-installed.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-installed.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n:root {\n  --columns-cards: 1300, 1900, 2500; /* 1366x768, 1920x1080, 2560x1440*/\n  --columns-table: 1600, 2500, 3400; /* 1680x1050, 2560x1440, 3440x1440*/\n}\n.tab.tab-installed {\n  padding: 0;\n}\n.tab.tab-installed header {\n    height: 4rem;\n    align-items: center;\n    padding: 0 1rem;\n    line-height: 1;\n    border-bottom: 1px solid var(--fill-5);\n}\n.tab.tab-installed .vl-dropdown-menu {\n    white-space: nowrap;\n}\n.tab.tab-installed .vl-dropdown.active .vl-tooltip-wrap {\n    display: none;\n}\n@media (max-width: 500px) { /* same size as `hidden-sm` in #/common/ui/style/style.css*/\n.tab.tab-installed .vl-dropdown-right .vl-dropdown-menu {\n      position: fixed;\n      top: auto;\n      left: 0;\n      right: auto;\n}\n}\n.backdrop {\n  text-align: center;\n  color: var(--fill-8);\n}\n.scripts {\n  overflow-y: auto;\n}\n.backdrop > *,\n.backdrop::after {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 2rem;\n}\n.backdrop::after {\n  content: ' ';\n  width: 0;\n  height: 100%;\n}\n.mask {\n  background: rgba(0,0,0,.08);\n  /*transition: opacity 1s;*/\n}\n.dropdown-menu-item {\n  display: block;\n  width: 100%;\n  padding: .5rem;\n  text-decoration: none;\n  color: var(--fill-9);\n  cursor: pointer\n}\n.dropdown-menu-item:focus,\n  .dropdown-menu-item:hover {\n    color: inherit;\n    background: var(--fill-0-5);\n}\n.filter-search {\n  height: 2rem;\n}\n.filter-search label {\n    position: relative;\n}\n.filter-search .icon {\n    position: absolute;\n    height: 100%;\n    top: 0;\n    right: .5rem;\n}\n.filter-search input {\n    width: 14rem;\n    max-width: calc(100vw - 16rem);\n    padding-left: .5rem;\n    padding-right: 2rem;\n    height: 100%;\n}\n.filter-search-tooltip {\n    white-space: pre-wrap;\n}\n.filter-sort .vl-dropdown-menu {\n    padding: 1rem;\n}\n.filter-sort .vl-dropdown-menu > :nth-last-child(n + 2) {\n      margin-bottom: .5rem;\n}\n.trash-button {\n  position: relative;\n}\n.trash-button b {\n    position: absolute;\n    font-size: 10px;\n    line-height: 1;\n    text-align: center;\n    left: 0;\n    right: 0;\n    bottom: -4px;\n}\n.trash-button.active b {\n    display: none;\n}\n.trash-hint {\n  line-height: 1.5;\n  color: var(--fill-6);\n  align-items: center;\n  justify-items: center;\n  place-items: center;\n}\n.trash-animate {\n  animation: .5s linear rotate;\n}\n@keyframes rotate {\n0% {\n    transform: scale(1.2) rotate(0);\n}\n100% {\n    transform: scale(1.2) rotate(360deg);\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.tab-settings {\n  overflow-y: auto;\n}\n.tab-settings label {\n    display: inline-block;\n}\n.tab-settings label > * {\n      vertical-align: middle;\n}\n.tab-settings label.valign-tb * {\n      vertical-align: text-bottom;\n}\n.tab-settings textarea {\n    height: 10em;\n}\n.tab-settings input[type=\"number\"] {\n    width: 3.5em;\n    padding-left: .25em;\n}\n.show-advanced {\n  margin: 20px 0;\n}\n.show-advanced .rotate {\n    transform: rotate(-90deg);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-editor.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-editor.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.dim-hint {\n  font-size: .85rem;\n  color: var(--fill-8);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-export.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-export.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.export .modal-content {\n    width: 13rem;\n}\n.export .icon {\n    width: 16px;\n    height: 16px;\n    fill: var(--fg);\n}\n.export .tpl {\n    max-width: 30em\n}\n.export .tpl[focus-within] ~ [hidden] {\n      display: initial;\n}\n.export .tpl:focus-within ~ [hidden] {\n      display: initial;\n}\n.export .tpl textarea {\n      height: auto;\n      resize: none;\n      white-space: nowrap;\n      overflow: hidden;\n      min-width: 10em;\n}\n.export .tpl button[disabled] { /* Hide a disabled `reset` button*/\n      display: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-import.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-import.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\nbutton.drop-allowed {\n  background-color: green;\n  color: white;\n}\n.import-report {\n  white-space: pre-wrap;\n  padding-top: 1rem;\n  font-size: 90%;\n  color: #c80\n}\n.import-report:empty {\n    display: none;\n}\n.import-report td {\n    padding: 1px .5em 3px;\n    vertical-align: top; /* in case of super long multiline text*/\n}\n.import-report [data-type=\"critical\"] {\n    color: #fff;\n    background-color: red;\n    font-weight: bold;\n}\n.import-report [data-type=\"script\"] {\n    color: red;\n}\n.import-report [data-type=\"info\"] {\n    color: blue;\n}\n@media (prefers-color-scheme: dark) {\n.import-report {\n    color: #a83;\n}\n.import-report [data-type=\"info\"] {\n      color: #fff;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-sync.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-sync.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.sync-server-url > input {\n    width: 400px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/options/style.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./src/options/style.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html,\nbody {\n  height: 100%;\n}\naside {\n  position: relative;\n  z-index: 1000;\n}\n.aside-content {\n  width: 14rem;\n  height: 100%;\n  padding: 4rem 1rem 0;\n  text-align: right;\n  border: solid var(--fill-5);\n  border-width: 0 1px 0 0\n}\n@media (prefers-color-scheme: dark) {\n.aside-content {\n    border-color: var(--fill-3)\n}\n}\n.aside-content {\n  background: var(--fill-0-5);\n}\n.aside-content img {\n    width: 5rem;\n    height: 5rem;\n}\n.aside-menu {\n  border-top: 1px solid var(--fill-4)\n}\n@media (prefers-color-scheme: dark) {\n.aside-menu {\n    border-color: var(--fill-3)\n}\n}\n.aside-menu > a {\n    display: block;\n    padding-top: .6rem;\n    padding-bottom: .6rem;\n    font-size: 1rem;\n    font-weight: 500;\n    color: var(--fill-8)\n}\n.aside-menu > a.active,\n    .aside-menu > a:hover {\n      color: var(--fg);\n}\n.aside-menu [data-num-scripts]::before {\n    content: '(' attr(data-num-scripts) ') ';\n}\n.text-red {\n  color: red;\n}\n.text-right {\n  text-align: right;\n}\nsection {\n  position: relative;\n  margin-top: 2rem;\n  padding: 1.2rem .8rem .8rem;\n  border: none;\n  border-top: 1px solid var(--fill-4)\n}\n@media (prefers-color-scheme: dark) {\nsection {\n    border-color: var(--fill-3)\n}\n}\nsection > h3 {\n    position: absolute;\n    margin: 0;\n    padding: 0 .2rem;\n    top: -.6em;\n    left: .8rem;\n    line-height: 1;\n    background: var(--bg);\n}\nsection > h4 {\n    margin-bottom: .3rem;\n}\nsection > p {\n    margin-bottom: .3rem;\n}\n.tab {\n  position: relative;\n  padding: 1.2rem;\n  overflow-y: auto;\n  background: var(--bg);\n}\n.vl-modal {\n  z-index: 3000;\n}\n.in-out-appear > .modal-content, .in-out-enter > .modal-content, .in-out-leave-active > .modal-content {\n      transform: translateY(-120%);\n}\n.in-out-appear > .vl-modal-backdrop, .in-out-enter > .vl-modal-backdrop, .in-out-leave-active > .vl-modal-backdrop {\n      opacity: 0;\n}\n.in-out-appear-active,\n    .in-out-appear-active > .modal-content,\n    .in-out-enter-active,\n    .in-out-enter-active > .modal-content,\n    .in-out-leave-active,\n    .in-out-leave-active > .modal-content {\n      transition: transform .5s;\n}\n.in-out-appear-active > .vl-modal-backdrop, .in-out-enter-active > .vl-modal-backdrop, .in-out-leave-active > .vl-modal-backdrop {\n      transition: opacity .5s;\n}\n@media (max-width: 767px) {\n.page-options {\n    flex-direction: column;\n}\n.tab {\n    width: auto !important;\n}\n.aside-content {\n    display: flex;\n    width: auto;\n    height: 3rem;\n    padding: 0;\n    border-width: 0 0 1px 0;\n}\n.aside-content img {\n      width: 3rem;\n      height: 3rem;\n      margin: 0 .5rem 0 1.25rem;\n}\n.aside-content h1 {\n      align-self: center;\n      font-size: 1.25rem;\n      margin: 0;\n}\n.aside-menu {\n    display: flex;\n    border: none;\n}\n.aside-menu a {\n      padding: 0 0 0 1.5rem;\n      display: flex;\n      flex-direction: column; /* stretch to full height... */\n      justify-content: center; /* ...and center vertically */\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vueleton/lib/dropdown/style.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-0-1!./node_modules/vueleton/lib/dropdown/style.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vl-dropdown{position:relative;display:inline-block}.vl-dropdown-toggle{cursor:pointer}.vl-dropdown-menu{position:absolute;z-index:10}.vl-dropdown-right .vl-dropdown-menu{right:0}.vl-dropdown-down .vl-dropdown-menu{top:100%;margin-top:5px}.vl-dropdown-up .vl-dropdown-menu{bottom:100%;margin-bottom:5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/common/ui/locale-group.vue?vue&type=template&id=3739aa5c&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/common/ui/locale-group.vue?vue&type=template&id=3739aa5c& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    [
      _vm._v(" " + _vm._s(_vm.parts[0]) + " "),
      _vm._t("default"),
      _vm._v(" " + _vm._s(_vm.parts[1]) + " ")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/common/ui/setting-text.vue?vue&type=template&id=3d4b389a&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/common/ui/setting-text.vue?vue&type=template&id=3d4b389a& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.value,
            expression: "value"
          }
        ],
        ref: "text",
        staticClass: "monospace-font",
        class: { "has-error": _vm.parsedData.error },
        attrs: {
          spellcheck: "false",
          disabled: _vm.disabled,
          title: _vm.parsedData.error,
          placeholder: _vm.placeholder,
          rows: _vm.rows
        },
        domProps: { value: _vm.value },
        on: {
          change: _vm.onChange,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.value = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _vm.hasSave
        ? _c("button", {
            attrs: { disabled: _vm.disabled || !_vm.canSave },
            domProps: { textContent: _vm._s(_vm.i18n("buttonSave")) },
            on: { click: _vm.onSave }
          })
        : _vm._e(),
      _vm.hasReset
        ? _c("button", {
            attrs: { disabled: _vm.disabled || !_vm.canReset },
            domProps: { textContent: _vm._s(_vm.i18n("buttonReset")) },
            on: { click: _vm.onReset }
          })
        : _vm._e(),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/app.vue?vue&type=template&id=e76b6274&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/app.vue?vue&type=template&id=e76b6274& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-options flex h-100" },
    [
      _vm.canRenderAside
        ? _c("aside", { class: { "show-aside": _vm.aside } }, [
            _c("div", { staticClass: "aside-content" }, [
              _c("img", { attrs: { src: "/public/images/icon128.png" } }),
              _c("h1", {
                staticClass: "hidden-sm",
                domProps: { textContent: _vm._s(_vm.i18n("extName")) }
              }),
              _c(
                "div",
                { staticClass: "aside-menu" },
                _vm._l(_vm.tabs, function(tab) {
                  return _c("a", {
                    key: tab.name,
                    class: { active: tab === _vm.current },
                    attrs: {
                      href: "#" + tab.name,
                      "data-num-scripts":
                        (tab.name === "scripts" &&
                          _vm.store.installedScripts.length) ||
                        null
                    },
                    domProps: { textContent: _vm._s(tab.label) }
                  })
                }),
                0
              )
            ])
          ])
        : _vm._e(),
      _c(
        "keep-alive",
        [
          _c(_vm.tabComponent, {
            tag: "component",
            staticClass: "tab flex-auto"
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/help.vue?vue&type=template&id=2d98548b&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/help.vue?vue&type=template&id=2d98548b& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "edit-help mb-2c" }, [
    _c("div", [
      _c("h3", {
        domProps: { innerHTML: _vm._s(_vm.i18n("editHelpDocumention")) }
      }),
      _c(
        "a",
        {
          attrs: {
            href: "https://violentmonkey.github.io/api/",
            rel: "noopener noreferrer",
            target: "_blank"
          }
        },
        [_vm._v("violentmonkey.github.io/api/")]
      )
    ]),
    _c(
      "div",
      { staticClass: "keyboard" },
      [
        _c("h3", {
          domProps: { textContent: _vm._s(_vm.i18n("editHelpKeyboard")) }
        }),
        _vm._l(_vm.hotkeys, function(ref) {
          var key = ref[0]
          var cmd = ref[1]
          return _c("dl", { key: key }, [
            _c("dt", {
              staticClass: "monospace-font",
              domProps: { textContent: _vm._s(key) }
            }),
            _c("dd", { domProps: { textContent: _vm._s(cmd) } })
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/index.vue?vue&type=template&id=0a9c2d78&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/index.vue?vue&type=template&id=0a9c2d78& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "edit frame flex flex-col fixed-full" }, [
    _c("div", { staticClass: "edit-header flex mr-1c" }, [
      _c(
        "nav",
        _vm._l(_vm.navItems, function(label, navKey) {
          return _c("div", {
            key: navKey,
            staticClass: "edit-nav-item",
            class: { active: _vm.nav === navKey },
            domProps: { textContent: _vm._s(label) },
            on: {
              click: function($event) {
                _vm.nav = navKey
              }
            }
          })
        }),
        0
      ),
      _c("div", {
        staticClass: "edit-name text-center ellipsis flex-1",
        domProps: { textContent: _vm._s(_vm.scriptName) }
      }),
      _c("div", { staticClass: "edit-hint text-right ellipsis" }, [
        _c("a", {
          attrs: {
            href:
              "https://violentmonkey.github.io/posts/how-to-edit-scripts-with-your-favorite-editor/",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          domProps: { textContent: _vm._s(_vm.i18n("editHowToHint")) }
        })
      ]),
      _c("div", { staticClass: "edit-buttons" }, [
        _c("button", {
          attrs: { disabled: !_vm.canSave },
          domProps: { textContent: _vm._s(_vm.i18n("buttonSave")) },
          on: { click: _vm.save }
        }),
        _c("button", {
          attrs: { disabled: !_vm.canSave },
          domProps: { textContent: _vm._s(_vm.i18n("buttonSaveClose")) },
          on: { click: _vm.saveClose }
        }),
        _c("button", {
          domProps: { textContent: _vm._s(_vm.i18n("buttonClose")) },
          on: { click: _vm.close }
        })
      ])
    ]),
    _c(
      "div",
      { staticClass: "frame-block flex-auto pos-rel" },
      [
        _c("vm-code", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.nav === "code",
              expression: "nav === 'code'"
            }
          ],
          ref: "code",
          staticClass: "abs-full",
          attrs: { active: _vm.nav === "code", commands: _vm.commands },
          on: {
            "code-dirty": function($event) {
              _vm.codeDirty = $event
            }
          },
          model: {
            value: _vm.code,
            callback: function($$v) {
              _vm.code = $$v
            },
            expression: "code"
          }
        }),
        _c("vm-settings", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.nav === "settings",
              expression: "nav === 'settings'"
            }
          ],
          staticClass: "abs-full edit-body",
          attrs: {
            active: _vm.nav === "settings",
            settings: _vm.settings,
            value: _vm.script
          }
        }),
        _c("vm-values", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.nav === "values",
              expression: "nav === 'values'"
            }
          ],
          staticClass: "abs-full edit-body",
          attrs: { active: _vm.nav === "values", script: _vm.script }
        }),
        _vm.nav === "externals"
          ? _c("vm-externals", {
              staticClass: "abs-full",
              model: {
                value: _vm.script,
                callback: function($$v) {
                  _vm.script = $$v
                },
                expression: "script"
              }
            })
          : _vm._e(),
        _c("vm-help", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.nav === "help",
              expression: "nav === 'help'"
            }
          ],
          staticClass: "abs-full edit-body",
          attrs: { hotkeys: _vm.hotkeys }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/settings.vue?vue&type=template&id=78bfd126&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/settings.vue?vue&type=template&id=78bfd126& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "container", staticClass: "edit-settings" }, [
    _c("h4", {
      domProps: { textContent: _vm._s(_vm.i18n("editLabelSettings")) }
    }),
    _c(
      "div",
      { staticClass: "form-group condensed" },
      [
        _c("label", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.config.shouldUpdate,
                expression: "config.shouldUpdate"
              }
            ],
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.config.shouldUpdate)
                ? _vm._i(_vm.config.shouldUpdate, null) > -1
                : _vm.config.shouldUpdate
            },
            on: {
              change: function($event) {
                var $$a = _vm.config.shouldUpdate,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 &&
                      _vm.$set(_vm.config, "shouldUpdate", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.config,
                        "shouldUpdate",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.config, "shouldUpdate", $$c)
                }
              }
            }
          }),
          _c("span", {
            domProps: { textContent: _vm._s(_vm.i18n("labelAllowUpdate")) }
          })
        ]),
        _c("span", {
          domProps: { textContent: _vm._s(_vm.i18n("labelNotifyThisUpdated")) }
        }),
        _vm._l(
          [
            [_vm.i18n("genericOn"), "1"],
            [_vm.i18n("genericOff"), "0"],
            [_vm.i18n("genericUseGlobal"), ""]
          ],
          function(ref) {
            var text = ref[0]
            var value = ref[1]
            return _c("label", { key: value, staticClass: "ml-1" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.config.notifyUpdates,
                    expression: "config.notifyUpdates"
                  }
                ],
                attrs: { type: "radio" },
                domProps: {
                  value: value,
                  checked: _vm._q(_vm.config.notifyUpdates, value)
                },
                on: {
                  change: function($event) {
                    return _vm.$set(_vm.config, "notifyUpdates", value)
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { domProps: { textContent: _vm._s(text) } })
            ])
          }
        )
      ],
      2
    ),
    _c("h4", { domProps: { textContent: _vm._s(_vm.i18n("editLabelMeta")) } }),
    _c(
      "table",
      [
        _c("tr", [
          _c("td", [
            _c("code", [_vm._v("@run-at")]),
            _c("p", {
              domProps: { textContent: _vm._s(_vm.i18n("labelRunAt")) }
            })
          ]),
          _c("td", [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.custom.runAt,
                    expression: "custom.runAt"
                  }
                ],
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.custom,
                      "runAt",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", {
                  attrs: { value: "" },
                  domProps: {
                    textContent: _vm._s(_vm.i18n("labelRunAtDefault"))
                  }
                }),
                _c("option", { attrs: { value: "document-start" } }, [
                  _vm._v("document-start")
                ]),
                _c("option", { attrs: { value: "document-body" } }, [
                  _vm._v("document-body")
                ]),
                _c("option", { attrs: { value: "document-end" } }, [
                  _vm._v("document-end")
                ]),
                _c("option", { attrs: { value: "document-idle" } }, [
                  _vm._v("document-idle")
                ])
              ]
            )
          ])
        ]),
        _c("tr", [
          _c("td", [
            _vm._m(0),
            _c("p", {
              domProps: { textContent: _vm._s(_vm.i18n("labelNoFrames")) }
            })
          ]),
          _c("td", [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.custom.noframes,
                    expression: "custom.noframes"
                  }
                ],
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.custom,
                      "noframes",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", {
                  attrs: { value: "" },
                  domProps: {
                    textContent: _vm._s(_vm.i18n("labelRunAtDefault"))
                  }
                }),
                _c("option", {
                  attrs: { value: "0" },
                  domProps: { textContent: _vm._s(_vm.i18n("genericOn")) }
                }),
                _c("option", {
                  attrs: { value: "1" },
                  domProps: { textContent: _vm._s(_vm.i18n("genericOff")) }
                })
              ]
            )
          ])
        ]),
        _vm._l(_vm.textInputs, function(ref) {
          var name = ref[0]
          var label = ref[1]
          return _c("tr", { key: name }, [
            _c("td", [
              _c("code", { domProps: { textContent: _vm._s("@" + name) } }),
              _c("p", { domProps: { textContent: _vm._s(label) } })
            ]),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.custom[name],
                    expression: "custom[name]"
                  }
                ],
                attrs: { type: "text", placeholder: _vm.placeholders[name] },
                domProps: { value: _vm.custom[name] },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.custom, name, $event.target.value)
                  }
                }
              })
            ])
          ])
        })
      ],
      2
    ),
    _c(
      "table",
      _vm._l(_vm.textAreas, function(ref) {
        var name = ref[0]
        var orig = ref[1]
        var labelA = ref[2]
        var code = ref[3]
        var labelB = ref[4]
        return _c("tr", { key: name }, [
          _c("td", [
            _c("p", [
              _c("span", { domProps: { textContent: _vm._s(labelA) } }),
              _c("code", { domProps: { textContent: _vm._s(code) } }),
              _c("span", { domProps: { textContent: _vm._s(labelB) } })
            ]),
            _c("label", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.custom[orig],
                    expression: "custom[orig]"
                  }
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.custom[orig])
                    ? _vm._i(_vm.custom[orig], null) > -1
                    : _vm.custom[orig]
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.custom[orig],
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && _vm.$set(_vm.custom, orig, $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.custom,
                            orig,
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.custom, orig, $$c)
                    }
                  }
                }
              }),
              _c("span", {
                domProps: { textContent: _vm._s(_vm.i18n("labelKeepOriginal")) }
              })
            ])
          ]),
          _c("td", [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.custom[name],
                  expression: "custom[name]"
                }
              ],
              ref: "area",
              refInFor: true,
              attrs: { spellcheck: "false" },
              domProps: { value: _vm.custom[name] },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.custom, name, $event.target.value)
                }
              }
            })
          ])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("code", [
      _vm._v("@"),
      _c("s", { staticStyle: { color: "var(--fill-6)" } }, [_vm._v("no")]),
      _vm._v("frames")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/values.vue?vue&type=template&id=cc517528&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/values.vue?vue&type=template&id=cc517528& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "container", staticClass: "edit-values" }, [
    _c("div", { staticClass: "mb-1" }, [
      _c("button", { on: { click: _vm.onNew } }, [_vm._v("+")]),
      _vm.totalPages > 1
        ? _c("div", { staticClass: "inline-block ml-2" }, [
            _c(
              "button",
              {
                attrs: { disabled: _vm.page === 1 },
                on: {
                  click: function($event) {
                    _vm.page -= 1
                  }
                }
              },
              [_vm._v("←")]
            ),
            _c("span", {
              staticClass: "ml-1",
              domProps: { textContent: _vm._s(_vm.page) }
            }),
            _vm._v(" / "),
            _c("span", {
              staticClass: "mr-1",
              domProps: { textContent: _vm._s(_vm.totalPages) }
            }),
            _c(
              "button",
              {
                attrs: { disabled: _vm.page >= _vm.totalPages },
                on: {
                  click: function($event) {
                    _vm.page += 1
                  }
                }
              },
              [_vm._v("→")]
            )
          ])
        : _vm._e(),
      _c("span", { staticClass: "ml-2 mr-2c" }, [
        _c(
          "span",
          [
            _vm.totalPages > 1
              ? [
                  _c("kbd", [_vm._v("PageUp")]),
                  _vm._v(", "),
                  _c("kbd", [_vm._v("PageDown")]),
                  _vm._v(", ")
                ]
              : _vm._e(),
            _c("kbd", [_vm._v("↑")]),
            _vm._v(", "),
            _c("kbd", [_vm._v("↓")]),
            _vm._v(", "),
            _c("kbd", [_vm._v("Tab")]),
            _vm._v(", "),
            _c("kbd", [_vm._v("Shift-Tab")]),
            _vm._v(", ")
          ],
          2
        ),
        _c("span", [
          _c("kbd", [_vm._v("Enter")]),
          _vm._v(": " + _vm._s(_vm.i18n("buttonEdit")) + ",")
        ]),
        _c("span", [
          _c("kbd", [_vm._v("Ctrl-Del")]),
          _vm._v(": " + _vm._s(_vm.i18n("buttonRemove")))
        ])
      ])
    ]),
    _c(
      "div",
      {
        staticClass: "edit-values-table main",
        on: {
          keydown: [
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "down", 40, $event.key, [
                  "Down",
                  "ArrowDown"
                ])
              ) {
                return null
              }
              if (
                $event.ctrlKey ||
                $event.shiftKey ||
                $event.altKey ||
                $event.metaKey
              ) {
                return null
              }
              return _vm.onUpDown($event)
            },
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
              ) {
                return null
              }
              if (
                $event.ctrlKey ||
                $event.shiftKey ||
                $event.altKey ||
                $event.metaKey
              ) {
                return null
              }
              return _vm.onUpDown($event)
            }
          ]
        }
      },
      [
        _c("a", {
          ref: "editAll",
          staticClass: "edit-values-row flex",
          attrs: { tabindex: "0" },
          domProps: { textContent: _vm._s(_vm.i18n("editValueAllHint")) },
          on: { click: _vm.onEditAll }
        }),
        _vm._l(_vm.pageKeys, function(key) {
          return _c(
            "div",
            {
              key: key,
              staticClass: "edit-values-row flex",
              on: {
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "delete", [8, 46], $event.key, [
                      "Backspace",
                      "Delete",
                      "Del"
                    ])
                  ) {
                    return null
                  }
                  if (!$event.ctrlKey) {
                    return null
                  }
                  if ($event.shiftKey || $event.altKey || $event.metaKey) {
                    return null
                  }
                  return _vm.onRemove(key)
                },
                click: function($event) {
                  return _vm.onEdit(key)
                }
              }
            },
            [
              _c("div", { staticClass: "ellipsis" }, [
                _c("a", {
                  attrs: { tabindex: "0" },
                  domProps: { textContent: _vm._s(key) }
                })
              ]),
              _c("div", {
                staticClass: "ellipsis flex-auto",
                domProps: { textContent: _vm._s(_vm.getValue(key, true)) }
              }),
              _c("pre", {
                domProps: { textContent: _vm._s(_vm.getLength(key)) }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "del",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.onRemove(key)
                    }
                  }
                },
                [_c("icon", { attrs: { name: "trash" } })],
                1
              )
            ]
          )
        })
      ],
      2
    ),
    _vm.trash
      ? _c("h3", {
          domProps: { textContent: _vm._s(_vm.i18n("headerRecycleBin")) }
        })
      : _vm._e(),
    _vm.trash
      ? _c(
          "div",
          {
            staticClass: "edit-values-table trash",
            on: {
              keydown: [
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "down", 40, $event.key, [
                      "Down",
                      "ArrowDown"
                    ])
                  ) {
                    return null
                  }
                  if (
                    $event.ctrlKey ||
                    $event.shiftKey ||
                    $event.altKey ||
                    $event.metaKey
                  ) {
                    return null
                  }
                  return _vm.onUpDown($event)
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "up", 38, $event.key, [
                      "Up",
                      "ArrowUp"
                    ])
                  ) {
                    return null
                  }
                  if (
                    $event.ctrlKey ||
                    $event.shiftKey ||
                    $event.altKey ||
                    $event.metaKey
                  ) {
                    return null
                  }
                  return _vm.onUpDown($event)
                }
              ]
            }
          },
          _vm._l(_vm.trash, function(ref, trashKey) {
            var key = ref[0]
            var val = ref[1]
            var displayVal = ref[2]
            var len = ref[3]
            return _c(
              "div",
              {
                key: trashKey,
                staticClass: "edit-values-row flex",
                on: {
                  click: function($event) {
                    return _vm.onRestore(trashKey)
                  }
                }
              },
              [
                _c("a", {
                  staticClass: "ellipsis",
                  attrs: { tabindex: "0" },
                  domProps: { textContent: _vm._s(key) }
                }),
                _c("s", {
                  staticClass: "ellipsis flex-auto",
                  domProps: { textContent: _vm._s(displayVal) }
                }),
                _c("pre", { domProps: { textContent: _vm._s(len) } })
              ]
            )
          }),
          0
        )
      : _vm._e(),
    !_vm.keys.length
      ? _c("div", {
          staticClass: "edit-values-empty mt-1",
          domProps: { textContent: _vm._s(_vm.i18n("noValues")) }
        })
      : _vm._e(),
    _vm.current
      ? _c("div", { staticClass: "edit-values-panel flex flex-col mb-1c" }, [
          _c("div", { staticClass: "control" }, [
            _c("h4", {
              domProps: {
                textContent: _vm._s(
                  _vm.current.isAll
                    ? _vm.i18n("labelEditValueAll")
                    : _vm.i18n("labelEditValue")
                )
              }
            }),
            _c("div", [
              _c("button", {
                class: { "has-error": _vm.current.error },
                attrs: {
                  title: _vm.current.error,
                  disabled:
                    _vm.current.error || _vm.current.value === _vm.initial
                },
                domProps: { textContent: _vm._s(_vm.i18n("editValueSave")) },
                on: { click: _vm.onSave }
              }),
              _c("button", {
                domProps: { textContent: _vm._s(_vm.i18n("editValueCancel")) },
                on: { click: _vm.onCancel }
              })
            ])
          ]),
          _c(
            "label",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.current.isAll,
                  expression: "!current.isAll"
                }
              ]
            },
            [
              _c("span", {
                domProps: { textContent: _vm._s(_vm.i18n("valueLabelKey")) }
              }),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.current.key,
                    expression: "current.key"
                  }
                ],
                ref: "key",
                attrs: {
                  type: "text",
                  readOnly: !_vm.current.isNew,
                  spellcheck: "false"
                },
                domProps: { value: _vm.current.key },
                on: {
                  keydown: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "esc", 27, $event.key, [
                        "Esc",
                        "Escape"
                      ])
                    ) {
                      return null
                    }
                    if (
                      $event.ctrlKey ||
                      $event.shiftKey ||
                      $event.altKey ||
                      $event.metaKey
                    ) {
                      return null
                    }
                    $event.stopPropagation()
                    return _vm.onCancel($event)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.current, "key", $event.target.value)
                  }
                }
              })
            ]
          ),
          _c("label", [
            _c("span", {
              domProps: {
                textContent: _vm._s(
                  _vm.current.isAll
                    ? _vm.i18n("valueLabelValueAll")
                    : _vm.i18n("valueLabelValue")
                )
              }
            }),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.current.value,
                  expression: "current.value"
                }
              ],
              ref: "value",
              attrs: { spellcheck: "false" },
              domProps: { value: _vm.current.value },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.current, "value", $event.target.value)
                  },
                  _vm.onChange
                ],
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "esc", 27, $event.key, [
                      "Esc",
                      "Escape"
                    ])
                  ) {
                    return null
                  }
                  if (
                    $event.ctrlKey ||
                    $event.shiftKey ||
                    $event.altKey ||
                    $event.metaKey
                  ) {
                    return null
                  }
                  $event.stopPropagation()
                  return _vm.onCancel($event)
                }
              }
            })
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/script-item.vue?vue&type=template&id=0aac107a&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/script-item.vue?vue&type=template&id=0aac107a& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "script",
      class: {
        disabled: !_vm.script.config.enabled,
        removed: _vm.script.config.removed,
        error: _vm.script.error,
        focused: _vm.focused,
        hotkeys: _vm.focused && _vm.showHotkeys
      },
      attrs: { tabIndex: _vm.tabIndex, draggable: _vm.draggable },
      on: { focus: _vm.onFocus, blur: _vm.onBlur }
    },
    [
      _c("div", { staticClass: "script-icon hidden-xs" }, [
        _c(
          "a",
          {
            attrs: {
              "data-hotkey": _vm.hotkeys.edit,
              "data-hotkey-table": "",
              tabIndex: "-1"
            },
            on: { click: _vm.onEdit }
          },
          [_c("img", { attrs: { src: _vm.script.safeIcon } })]
        )
      ]),
      _c(
        "div",
        { staticClass: "script-info flex ml-1c" },
        [
          _c("span", {
            staticClass: "script-order",
            domProps: { textContent: _vm._s(_vm.script.props.position) }
          }),
          _c("span", {
            staticClass: "script-name ellipsis flex-auto",
            attrs: { tabIndex: _vm.nameClickable ? _vm.tabIndex : -1 },
            domProps: { textContent: _vm._s(_vm.script.$cache.name) },
            on: {
              click: function($event) {
                if (
                  $event.ctrlKey ||
                  $event.shiftKey ||
                  $event.altKey ||
                  $event.metaKey
                ) {
                  return null
                }
                _vm.nameClickable && _vm.onEdit()
              }
            }
          }),
          _vm.canRender
            ? [
                _vm.author
                  ? _c(
                      "tooltip",
                      {
                        staticClass: "script-author ml-1c hidden-sm",
                        attrs: {
                          content:
                            _vm.i18n("labelAuthor") + _vm.script.meta.author,
                          align: "end"
                        }
                      },
                      [
                        _c("icon", { attrs: { name: "author" } }),
                        _vm.author.email
                          ? _c("a", {
                              staticClass: "ellipsis",
                              attrs: {
                                href: "mailto:" + _vm.author.email,
                                tabIndex: _vm.tabIndex
                              },
                              domProps: { textContent: _vm._s(_vm.author.name) }
                            })
                          : _c("span", {
                              staticClass: "ellipsis",
                              domProps: { textContent: _vm._s(_vm.author.name) }
                            })
                      ],
                      1
                    )
                  : _vm._e(),
                _c("span", {
                  staticClass: "version ellipsis",
                  domProps: {
                    textContent: _vm._s(
                      _vm.script.meta.version
                        ? "v" + _vm.script.meta.version
                        : ""
                    )
                  }
                }),
                _c(
                  "tooltip",
                  {
                    staticClass: "updated hidden-sm ml-1c",
                    attrs: { content: _vm.updatedAt.title, align: "end" }
                  },
                  [_vm._v(" " + _vm._s(_vm.updatedAt.show) + " ")]
                ),
                _vm.script.config.removed
                  ? _c(
                      "div",
                      [
                        _c(
                          "tooltip",
                          {
                            attrs: {
                              content: _vm.i18n("buttonRestore"),
                              placement: "left"
                            }
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "btn-ghost",
                                attrs: {
                                  "data-hotkey": _vm.hotkeys.restore,
                                  tabIndex: _vm.tabIndex
                                },
                                on: { click: _vm.onRestore }
                              },
                              [_c("icon", { attrs: { name: "undo" } })],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ]
            : _vm._e()
        ],
        2
      ),
      _c(
        "div",
        { staticClass: "script-buttons flex" },
        [
          _vm.canRender
            ? [
                _c(
                  "div",
                  { staticClass: "flex-auto flex flex-wrap" },
                  [
                    _c(
                      "tooltip",
                      {
                        attrs: {
                          content: _vm.i18n("buttonEdit"),
                          align: "start"
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "btn-ghost",
                            attrs: {
                              "data-hotkey": _vm.hotkeys.edit,
                              tabIndex: _vm.tabIndex
                            },
                            on: { click: _vm.onEdit }
                          },
                          [_c("icon", { attrs: { name: "code" } })],
                          1
                        )
                      ]
                    ),
                    _c(
                      "tooltip",
                      { attrs: { content: _vm.labelEnable, align: "start" } },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "btn-ghost",
                            attrs: {
                              "data-hotkey": _vm.hotkeys.toggle,
                              tabIndex: _vm.tabIndex
                            },
                            on: { click: _vm.onToggle }
                          },
                          [
                            _c("icon", {
                              attrs: {
                                name:
                                  "toggle-" +
                                  (_vm.script.config.enabled ? "on" : "off")
                              }
                            })
                          ],
                          1
                        )
                      ]
                    ),
                    _c(
                      "tooltip",
                      {
                        attrs: {
                          disabled: !_vm.canUpdate || _vm.script.checking,
                          content: _vm.i18n("buttonUpdate"),
                          align: "start"
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "btn-ghost",
                            attrs: {
                              "data-hotkey": _vm.hotkeys.update,
                              tabIndex: _vm.canUpdate ? _vm.tabIndex : -1
                            },
                            on: { click: _vm.onUpdate }
                          },
                          [_c("icon", { attrs: { name: "refresh" } })],
                          1
                        )
                      ]
                    ),
                    _c("span", { staticClass: "sep" }),
                    _c(
                      "tooltip",
                      {
                        attrs: {
                          disabled: !_vm.homepageURL,
                          content: _vm.i18n("buttonHome"),
                          align: "start"
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "btn-ghost",
                            attrs: {
                              target: "_blank",
                              rel: "noopener noreferrer",
                              href: _vm.homepageURL,
                              tabIndex: _vm.homepageURL ? _vm.tabIndex : -1
                            }
                          },
                          [_c("icon", { attrs: { name: "home" } })],
                          1
                        )
                      ]
                    ),
                    _c(
                      "tooltip",
                      {
                        attrs: {
                          disabled: !_vm.description,
                          content: _vm.description,
                          align: "start"
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "btn-ghost",
                            attrs: {
                              tabIndex: _vm.description ? _vm.tabIndex : -1
                            },
                            on: { click: _vm.toggleTip }
                          },
                          [_c("icon", { attrs: { name: "info" } })],
                          1
                        )
                      ]
                    ),
                    _c(
                      "tooltip",
                      {
                        attrs: {
                          disabled: !_vm.script.meta.supportURL,
                          content: _vm.i18n("buttonSupport"),
                          align: "start"
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "btn-ghost",
                            attrs: {
                              target: "_blank",
                              rel: "noopener noreferrer",
                              tabIndex: _vm.script.meta.supportURL
                                ? _vm.tabIndex
                                : -1,
                              href: _vm.script.meta.supportURL
                            }
                          },
                          [_c("icon", { attrs: { name: "question" } })],
                          1
                        )
                      ]
                    ),
                    _c("div", {
                      staticClass: "script-message",
                      attrs: { title: _vm.script.error },
                      domProps: { textContent: _vm._s(_vm.script.message) }
                    })
                  ],
                  1
                ),
                _c(
                  "tooltip",
                  {
                    attrs: { content: _vm.i18n("buttonRemove"), align: "end" }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "btn-ghost",
                        attrs: {
                          "data-hotkey": _vm.hotkeys.remove,
                          tabIndex: _vm.tabIndex
                        },
                        on: { click: _vm.onRemove }
                      },
                      [_c("icon", { attrs: { name: "trash" } })],
                      1
                    )
                  ]
                )
              ]
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-about.vue?vue&type=template&id=378b1f8c&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-about.vue?vue&type=template&id=378b1f8c& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tab-about mb-2c" }, [
    _c("h1", { staticClass: "mt-0 mr-1c" }, [
      _c("span", { domProps: { textContent: _vm._s(_vm.name) } }),
      _c("small", { domProps: { textContent: _vm._s("v" + _vm.version) } })
    ]),
    _c("p", { domProps: { textContent: _vm._s(_vm.i18n("extDescription")) } }),
    _c("div", [
      _c("a", {
        attrs: {
          href: "https://violentmonkey.github.io/donate/",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        domProps: { textContent: _vm._s(_vm.i18n("labelDonate")) }
      }),
      _c("span", { staticClass: "text-red" }, [_vm._v(" ♥")])
    ]),
    _c("div", [
      _c("label", {
        domProps: { textContent: _vm._s(_vm.i18n("labelRelated")) }
      }),
      _c("ul", [
        _c("li", [
          _c("a", {
            attrs: {
              href: "https://violentmonkey.github.io",
              target: "_blank",
              rel: "noopener noreferrer"
            },
            domProps: { textContent: _vm._s(_vm.i18n("labelHomepage")) }
          })
        ]),
        _c("li", [
          _c("a", {
            attrs: {
              href: "https://github.com/violentmonkey/violentmonkey/issues",
              target: "_blank",
              rel: "noopener noreferrer"
            },
            domProps: { textContent: _vm._s(_vm.i18n("labelFeedback")) }
          })
        ]),
        _c("li", [
          _c("a", {
            attrs: {
              href:
                "https://github.com/violentmonkey/violentmonkey/graphs/contributors",
              target: "_blank",
              rel: "noopener noreferrer"
            },
            domProps: { textContent: _vm._s(_vm.i18n("labelContributors")) }
          })
        ]),
        _c("li", [
          _c("a", {
            attrs: {
              href: "https://violentmonkey.github.io/privacy/",
              target: "_blank",
              rel: "noopener noreferrer"
            },
            domProps: { textContent: _vm._s(_vm.i18n("labelPrivacyPolicy")) }
          })
        ])
      ])
    ]),
    _c("div", [
      _c("label", {
        domProps: { textContent: _vm._s(_vm.i18n("labelCurrentLang")) }
      }),
      _c("span", {
        staticClass: "current",
        domProps: { textContent: _vm._s(_vm.language) }
      }),
      _vm._v(" | "),
      _c("a", {
        attrs: {
          href: "https://violentmonkey.github.io/localization/",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        domProps: { textContent: _vm._s(_vm.i18n("labelHelpTranslate")) }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-installed.vue?vue&type=template&id=e0cb19b2&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-installed.vue?vue&type=template&id=e0cb19b2& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tab-installed flex flex-col" },
    [
      _vm.canRenderScripts
        ? _c("div", { staticClass: "flex flex-col flex-auto" }, [
            _c(
              "header",
              { staticClass: "flex" },
              [
                !_vm.showRecycle
                  ? _c(
                      "div",
                      { staticClass: "flex-auto" },
                      [
                        _c(
                          "dropdown",
                          {
                            class: { active: _vm.menuNewActive },
                            attrs: { closeAfterClick: true },
                            on: { stateChange: _vm.onStateChange }
                          },
                          [
                            _c(
                              "tooltip",
                              {
                                attrs: {
                                  slot: "toggle",
                                  content: _vm.i18n("buttonNew"),
                                  placement: "bottom",
                                  align: "start"
                                },
                                slot: "toggle"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn-ghost",
                                    attrs: { tabindex: "0" }
                                  },
                                  [_c("icon", { attrs: { name: "plus" } })],
                                  1
                                )
                              ]
                            ),
                            _c("a", {
                              staticClass: "dropdown-menu-item",
                              attrs: { tabindex: "0" },
                              domProps: {
                                textContent: _vm._s(_vm.i18n("buttonNew"))
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.editScript("_new")
                                }
                              }
                            }),
                            _c("a", {
                              staticClass: "dropdown-menu-item",
                              attrs: {
                                href: "https://openuserjs.org/",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              },
                              domProps: {
                                textContent: _vm._s(
                                  _vm.i18n("installFrom", "OpenUserJS")
                                )
                              }
                            }),
                            _c("a", {
                              staticClass: "dropdown-menu-item",
                              attrs: {
                                href: "https://greasyfork.org/scripts",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              },
                              domProps: {
                                textContent: _vm._s(
                                  _vm.i18n("installFrom", "GreasyFork")
                                )
                              }
                            }),
                            _c("a", {
                              staticClass: "dropdown-menu-item",
                              attrs: { tabindex: "0" },
                              domProps: {
                                textContent: _vm._s(
                                  _vm.i18n("buttonInstallFromURL")
                                )
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.installFromURL($event)
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "tooltip",
                          {
                            attrs: {
                              content: _vm.i18n("buttonUpdateAll"),
                              placement: "bottom",
                              align: "start"
                            }
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "btn-ghost",
                                attrs: { tabindex: "0" },
                                on: { click: _vm.updateAll }
                              },
                              [_c("icon", { attrs: { name: "refresh" } })],
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  : _c("div", {
                      staticClass: "flex-auto",
                      domProps: {
                        textContent: _vm._s(
                          "" +
                            _vm.i18n("headerRecycleBin") +
                            (_vm.trash.length
                              ? " (" + _vm.trash.length + ")"
                              : "")
                        )
                      }
                    }),
                _c(
                  "tooltip",
                  {
                    attrs: {
                      content: _vm.i18n("buttonRecycleBin"),
                      placement: "bottom"
                    }
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "btn-ghost trash-button",
                        class: {
                          active: _vm.showRecycle,
                          filled: _vm.trash.length
                        },
                        attrs: { tabindex: "0" },
                        on: {
                          click: function($event) {
                            _vm.showRecycle = !_vm.showRecycle
                          }
                        }
                      },
                      [
                        _c("icon", {
                          class: { "trash-animate": _vm.removing },
                          attrs: { name: "trash" }
                        }),
                        _vm.trash.length
                          ? _c("b", {
                              domProps: {
                                textContent: _vm._s(_vm.trash.length)
                              }
                            })
                          : _vm._e()
                      ],
                      1
                    )
                  ]
                ),
                _c(
                  "dropdown",
                  { staticClass: "filter-sort", attrs: { align: "right" } },
                  [
                    _c(
                      "tooltip",
                      {
                        attrs: {
                          slot: "toggle",
                          content: _vm.i18n("labelSettings"),
                          placement: "bottom"
                        },
                        slot: "toggle"
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "btn-ghost",
                            attrs: { tabindex: "0" }
                          },
                          [_c("icon", { attrs: { name: "cog" } })],
                          1
                        )
                      ]
                    ),
                    _c(
                      "div",
                      [
                        _c(
                          "locale-group",
                          { attrs: { "i18n-key": "labelFilterSort" } },
                          [
                            _c(
                              "select",
                              {
                                domProps: { value: _vm.filters.sort.value },
                                on: { change: _vm.onOrderChange }
                              },
                              _vm._l(_vm.filterOptions.sort, function(
                                option,
                                name
                              ) {
                                return _c("option", {
                                  key: name,
                                  domProps: {
                                    value: name,
                                    textContent: _vm._s(option.title)
                                  }
                                })
                              }),
                              0
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.currentSortCompare,
                            expression: "currentSortCompare"
                          }
                        ]
                      },
                      [
                        _c("setting-check", {
                          attrs: {
                            name: "filters.showEnabledFirst",
                            label: _vm.i18n("optionShowEnabledFirst")
                          }
                        })
                      ],
                      1
                    ),
                    _c(
                      "div",
                      [
                        _c("setting-check", {
                          attrs: {
                            name: "filters.showOrder",
                            label: _vm.i18n("labelShowOrder")
                          }
                        })
                      ],
                      1
                    ),
                    _c(
                      "div",
                      { staticClass: "mr-2c" },
                      [
                        _c("setting-check", {
                          attrs: {
                            name: "filters.viewTable",
                            label: _vm.i18n("labelViewTable")
                          }
                        }),
                        _c("setting-check", {
                          attrs: {
                            name: "filters.viewSingleColumn",
                            label: _vm.i18n("labelViewSingleColumn")
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _c(
                  "form",
                  {
                    staticClass: "filter-search hidden-xs flex",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                      }
                    }
                  },
                  [
                    _c("tooltip", { attrs: { placement: "bottom" } }, [
                      _c(
                        "label",
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.search,
                                expression: "search"
                              }
                            ],
                            ref: "search",
                            class: { "has-error": _vm.searchError },
                            attrs: {
                              type: "search",
                              placeholder: _vm.i18n("labelSearchScript"),
                              id: "installed-search"
                            },
                            domProps: { value: _vm.search },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.search = $event.target.value
                              }
                            }
                          }),
                          _c("icon", { attrs: { name: "search" } })
                        ],
                        1
                      ),
                      _c(
                        "pre",
                        {
                          staticClass: "filter-search-tooltip",
                          attrs: { slot: "content" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.searchError || _vm.i18n("titleSearchHint")
                            )
                          },
                          slot: "content"
                        },
                        [_vm._v("          ")]
                      )
                    ]),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.filters.searchScope,
                            expression: "filters.searchScope"
                          }
                        ],
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.filters,
                                "searchScope",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            _vm.onScopeChange
                          ]
                        }
                      },
                      [
                        _c("option", {
                          attrs: { value: "name" },
                          domProps: {
                            textContent: _vm._s(_vm.i18n("filterScopeName"))
                          }
                        }),
                        _c("option", {
                          attrs: { value: "code" },
                          domProps: {
                            textContent: _vm._s(_vm.i18n("filterScopeCode"))
                          }
                        }),
                        _c("option", {
                          attrs: { value: "all" },
                          domProps: {
                            textContent: _vm._s(_vm.i18n("filterScopeAll"))
                          }
                        })
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm.showRecycle
              ? _c(
                  "div",
                  { staticClass: "trash-hint mx-1 my-1 flex flex-col" },
                  [
                    _c("span", {
                      domProps: {
                        textContent: _vm._s(_vm.i18n("hintRecycleBin"))
                      }
                    }),
                    _vm.trash.length
                      ? _c("a", {
                          attrs: { tabindex: "0" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.i18n("buttonEmptyRecycleBin")
                            )
                          },
                          on: { click: _vm.emptyRecycleBin }
                        })
                      : _vm._e()
                  ]
                )
              : _vm._e(),
            _c(
              "div",
              {
                ref: "scriptList",
                staticClass: "scripts flex-auto",
                style: "--num-columns:" + _vm.numColumns,
                attrs: {
                  "data-columns": _vm.numColumns,
                  "data-show-order": _vm.filters.showOrder,
                  "data-table": _vm.filters.viewTable
                }
              },
              _vm._l(_vm.sortedScripts, function(script, index) {
                return _c("script-item", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.search || script.$cache.show !== false,
                      expression: "!search || script.$cache.show !== false"
                    }
                  ],
                  key: script.props.id,
                  attrs: {
                    focused: _vm.selectedScript === script,
                    showHotkeys: _vm.showHotkeys,
                    script: script,
                    draggable:
                      _vm.filters.sort.value === "exec" &&
                      !script.config.removed,
                    visible: index < _vm.batchRender.limit,
                    nameClickable: _vm.filters.viewTable,
                    hotkeys: _vm.scriptHotkeys
                  },
                  on: {
                    edit: _vm.handleActionEdit,
                    remove: _vm.handleActionRemove,
                    restore: _vm.handleActionRestore,
                    toggle: _vm.handleActionToggle,
                    update: _vm.handleActionUpdate,
                    move: _vm.moveScript,
                    scrollDelta: _vm.handleSmoothScroll
                  },
                  nativeOn: {
                    tiptoggle: function($event) {
                      _vm.showHotkeys = !_vm.showHotkeys
                    }
                  }
                })
              }),
              1
            )
          ])
        : _vm._e(),
      _vm.script
        ? _c("edit", {
            attrs: { initial: _vm.script },
            on: {
              close: function($event) {
                return _vm.editScript()
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/index.vue?vue&type=template&id=20bbc289&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/index.vue?vue&type=template&id=20bbc289& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tab-settings mb-1c" },
    [
      _c("h1", {
        staticClass: "mt-0",
        domProps: { textContent: _vm._s(_vm.i18n("labelSettings")) }
      }),
      _c("section", { staticClass: "mb-1c" }, [
        _c("h3", {
          domProps: { textContent: _vm._s(_vm.i18n("optionPopup")) }
        }),
        _c(
          "div",
          [
            _c("setting-check", {
              attrs: {
                name: "autoReload",
                label: _vm.i18n("labelAutoReloadCurrentTab")
              }
            })
          ],
          1
        ),
        _c(
          "div",
          [
            _c(
              "setting-check",
              {
                ref: "EW",
                staticClass: "mr-2",
                attrs: { name: "editorWindow" }
              },
              [
                _c(
                  "tooltip",
                  {
                    attrs: {
                      content: _vm.editorWindowHint,
                      disabled: !_vm.editorWindowHint
                    }
                  },
                  [
                    _c("span", {
                      domProps: {
                        textContent: _vm._s(_vm.i18n("optionEditorWindow"))
                      }
                    })
                  ]
                )
              ],
              1
            ),
            _c("setting-check", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: (_vm.$refs.EW || {}).value,
                  expression: "($refs.EW || {}).value"
                }
              ],
              attrs: {
                name: "editorWindowSimple",
                label: _vm.i18n("optionEditorWindowSimple")
              }
            })
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "ml-2c" },
          [
            _c(
              "label",
              [
                _c(
                  "locale-group",
                  { attrs: { "i18n-key": "labelPopupSort" } },
                  _vm._l(["filtersPopup.sort"], function(opt) {
                    return _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.settings[opt],
                            expression: "settings[opt]"
                          }
                        ],
                        key: opt,
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.settings,
                              opt,
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.items[opt].enum, function(title, value) {
                        return _c("option", {
                          key: opt + ":" + value,
                          domProps: { value: value, textContent: _vm._s(title) }
                        })
                      }),
                      0
                    )
                  }),
                  0
                )
              ],
              1
            ),
            _c(
              "label",
              _vm._l(["filtersPopup.hideDisabled"], function(opt) {
                return _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.settings[opt],
                        expression: "settings[opt]"
                      }
                    ],
                    key: opt,
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.settings,
                          opt,
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.items[opt].enum, function(title, value) {
                    return _c("option", {
                      key: opt + ":" + value,
                      domProps: { value: value, textContent: _vm._s(title) }
                    })
                  }),
                  0
                )
              }),
              0
            ),
            _c("setting-check", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.settings["filtersPopup.hideDisabled"],
                  expression: "!settings['filtersPopup.hideDisabled']"
                }
              ],
              attrs: {
                name: "filtersPopup.enabledFirst",
                label: _vm.i18n("optionPopupEnabledFirst")
              }
            })
          ],
          1
        ),
        _c("div", { staticClass: "mr-2c" }, [
          _c(
            "label",
            [
              _c("span", {
                domProps: { textContent: _vm._s(_vm.i18n("labelBadge")) }
              }),
              _vm._l(["showBadge"], function(opt) {
                return _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.settings[opt],
                        expression: "settings[opt]"
                      }
                    ],
                    key: opt,
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.settings,
                          opt,
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.items[opt].enum, function(title, value) {
                    return _c("option", {
                      key: opt + ":" + value,
                      domProps: { value: value, textContent: _vm._s(title) }
                    })
                  }),
                  0
                )
              })
            ],
            2
          ),
          _c(
            "label",
            [
              _c("span", {
                domProps: { textContent: _vm._s(_vm.i18n("labelBadgeColors")) }
              }),
              _vm._l(_vm.items.badgeColor.enum, function(title, name) {
                return _c(
                  "tooltip",
                  { key: "bc:" + name, attrs: { content: title } },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.settings[name],
                          expression: "settings[name]"
                        }
                      ],
                      attrs: { type: "color" },
                      domProps: { value: _vm.settings[name] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.settings, name, $event.target.value)
                        }
                      }
                    })
                  ]
                )
              }),
              _c("button", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isCustomBadgeColor,
                    expression: "isCustomBadgeColor"
                  }
                ],
                staticClass: "ml-1",
                domProps: { textContent: _vm._s(_vm.i18n("buttonReset")) },
                on: { click: _vm.onResetBadgeColors }
              })
            ],
            2
          )
        ])
      ]),
      _c("section", { staticClass: "mb-1c" }, [
        _c("h3", {
          domProps: { textContent: _vm._s(_vm.i18n("titleScriptUpdated")) }
        }),
        _c("div", [
          _c(
            "label",
            [
              _c("locale-group", { attrs: { "i18n-key": "labelAutoUpdate" } }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.settings.autoUpdate,
                      expression: "settings.autoUpdate"
                    }
                  ],
                  attrs: { type: "number", min: "0", max: "365", step: "1/" },
                  domProps: { value: _vm.settings.autoUpdate },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.settings, "autoUpdate", $event.target.value)
                    }
                  }
                })
              ])
            ],
            1
          )
        ]),
        _c(
          "div",
          [
            _c("setting-check", {
              attrs: {
                name: "notifyUpdates",
                label: _vm.i18n("labelNotifyUpdates")
              }
            }),
            _c("setting-check", {
              staticClass: "ml-2",
              attrs: {
                name: "notifyUpdatesGlobal",
                label: _vm.i18n("labelNotifyUpdatesGlobal")
              }
            })
          ],
          1
        )
      ]),
      _c(
        "section",
        { staticClass: "mb-2c" },
        [
          _c("h3", {
            domProps: { textContent: _vm._s(_vm.i18n("labelBackup")) }
          }),
          _c("vm-import"),
          _c("vm-export")
        ],
        1
      ),
      _c("vm-sync"),
      _c("div", { staticClass: "show-advanced" }, [
        _c(
          "button",
          {
            on: {
              click: function($event) {
                _vm.showAdvanced = !_vm.showAdvanced
              }
            }
          },
          [
            _c("span", {
              domProps: { textContent: _vm._s(_vm.i18n("labelAdvanced")) }
            }),
            _c("icon", {
              class: { rotate: _vm.showAdvanced },
              attrs: { name: "arrow" }
            })
          ],
          1
        )
      ]),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showAdvanced,
              expression: "showAdvanced"
            }
          ]
        },
        [
          _c("section", { staticClass: "mb-1c" }, [
            _c("h3", {
              domProps: { textContent: _vm._s(_vm.i18n("labelGeneral")) }
            }),
            _c("div", [
              _c(
                "label",
                [
                  _c(
                    "locale-group",
                    { attrs: { "i18n-key": "optionUiTheme" } },
                    _vm._l(["uiTheme"], function(opt) {
                      return _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.settings[opt],
                              expression: "settings[opt]"
                            }
                          ],
                          key: opt,
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.settings,
                                opt,
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.items[opt].enum, function(title, value) {
                          return _c("option", {
                            key: opt + ":" + value,
                            domProps: {
                              value: value,
                              textContent: _vm._s(title)
                            }
                          })
                        }),
                        0
                      )
                    }),
                    0
                  )
                ],
                1
              )
            ]),
            _c("div", { staticClass: "mr-2c" }, [
              _c(
                "label",
                [
                  _c("span", {
                    domProps: {
                      textContent: _vm._s(_vm.i18n("labelInjectionMode"))
                    }
                  }),
                  _vm._l(["defaultInjectInto"], function(opt) {
                    return _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.settings[opt],
                            expression: "settings[opt]"
                          }
                        ],
                        key: opt,
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.settings,
                              opt,
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.items[opt].enum, function(_, mode) {
                        return _c("option", {
                          key: opt + ":" + mode,
                          domProps: { value: mode, textContent: _vm._s(mode) }
                        })
                      }),
                      0
                    )
                  }),
                  _c("a", {
                    staticClass: "ml-1",
                    attrs: {
                      href:
                        "https://violentmonkey.github.io/posts/inject-into-context/",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    },
                    domProps: {
                      textContent: _vm._s(_vm.i18n("learnInjectionMode"))
                    }
                  })
                ],
                2
              ),
              _c(
                "label",
                [
                  _c("setting-check", { attrs: { name: "xhrInject" } }),
                  _c(
                    "tooltip",
                    { attrs: { content: _vm.i18n("labelXhrInjectHint") } },
                    [
                      _c(
                        "locale-group",
                        { attrs: { "i18n-key": "labelXhrInject" } },
                        [_c("code", [_vm._v("page")])]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _c(
              "div",
              [
                _c(
                  "locale-group",
                  {
                    staticClass: "mr-1c",
                    attrs: { "i18n-key": "labelExposeStatus" }
                  },
                  _vm._l(_vm.expose, function(ref) {
                    var key = ref[0]
                    var host = ref[1]
                    return _c(
                      "setting-check",
                      {
                        key: host,
                        staticClass: "mr-1c valign-tb",
                        attrs: { name: "expose." + key }
                      },
                      [
                        _c("span", { domProps: { textContent: _vm._s(host) } }),
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "https://" + host,
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [_vm._v("↗")]
                        )
                      ]
                    )
                  }),
                  1
                )
              ],
              1
            )
          ]),
          _c("vm-editor"),
          _c("vm-template"),
          _c("vm-blacklist"),
          _c("vm-css")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-blacklist.vue?vue&type=template&id=602dc7a0&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-blacklist.vue?vue&type=template&id=602dc7a0& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("h3", {
        domProps: { textContent: _vm._s(_vm.i18n("labelBlacklist")) }
      }),
      _c("p", [
        _vm._v(" " + _vm._s(_vm.i18n("descBlacklist")) + " "),
        _c("a", {
          attrs: {
            href:
              "https://violentmonkey.github.io/posts/smart-rules-for-blacklist/#blacklist-patterns",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          domProps: { textContent: _vm._s(_vm.i18n("learnBlacklist")) }
        })
      ]),
      _c("setting-text", {
        attrs: { name: "blacklist" },
        on: { save: _vm.onSave }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-css.vue?vue&type=template&id=0a2929c6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-css.vue?vue&type=template&id=0a2929c6& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("h3", {
        domProps: { textContent: _vm._s(_vm.i18n("labelCustomCSS")) }
      }),
      _c("p", { domProps: { innerHTML: _vm._s(_vm.i18n("descCustomCSS")) } }),
      _c("setting-text", {
        attrs: { name: "customCSS" },
        on: { save: _vm.onSave }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-editor.vue?vue&type=template&id=00b9a2fa&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-editor.vue?vue&type=template&id=00b9a2fa& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("h3", { domProps: { textContent: _vm._s(_vm.i18n("labelEditor")) } }),
      _c("div", { staticClass: "mr-1c flex center-items" }, [
        _c("span", {
          domProps: { textContent: _vm._s(_vm.i18n("labelTheme")) }
        }),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.theme,
                expression: "theme"
              }
            ],
            attrs: { disabled: _vm.busy, title: _vm.css },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.theme = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          [
            _c("option", {
              domProps: {
                value: _vm.DEFAULT,
                textContent: _vm._s(_vm.i18n("labelRunAtDefault"))
              }
            }),
            _c("option", {
              attrs: { value: "" },
              domProps: { textContent: _vm._s(_vm.i18n("labelBadgeNone")) }
            }),
            !_vm.themes && _vm.theme && _vm.theme !== _vm.DEFAULT
              ? _c("option", {
                  attrs: { "data-active": "" },
                  domProps: { textContent: _vm._s(_vm.theme) }
                })
              : _vm._e(),
            _vm._l(_vm.themes, function(name, i) {
              return _c("option", {
                key: "th:" + i,
                domProps: { textContent: _vm._s(name) }
              })
            })
          ],
          2
        ),
        _c("button", {
          attrs: { disabled: _vm.busy },
          domProps: { textContent: _vm._s(_vm.i18n("buttonDownloadThemes")) },
          on: { click: _vm.getThemes }
        }),
        _c("a", { attrs: { href: _vm.ghURL, target: "_blank" } }, [
          _vm._v("↗")
        ]),
        _c("p", { domProps: { textContent: _vm._s(_vm.error) } })
      ]),
      _c("p", {
        staticClass: "my-1",
        domProps: { innerHTML: _vm._s(_vm.i18n("descEditorOptions")) }
      }),
      _c(
        "setting-text",
        {
          ref: "editor",
          attrs: { name: "editor", json: true, "has-reset": true },
          on: { save: _vm.onSave }
        },
        [
          _c("button", {
            domProps: {
              textContent: _vm._s(_vm.i18n("buttonShowEditorState"))
            },
            on: { click: _vm.toggleStateHint }
          })
        ]
      ),
      _c("pre", {
        staticClass: "monospace-font dim-hint",
        domProps: { textContent: _vm._s(_vm.hint) }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-export.vue?vue&type=template&id=69f619c1&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-export.vue?vue&type=template&id=69f619c1& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "export" },
    [
      _c(
        "div",
        { staticClass: "flex flex-wrap center-items mr-1c" },
        [
          _c("button", {
            attrs: { disabled: _vm.exporting },
            domProps: { textContent: _vm._s(_vm.i18n("buttonExportData")) },
            on: { click: _vm.handleExport }
          }),
          _c("setting-text", {
            ref: "tpl",
            staticClass: "tpl flex flex-1 center-items ml-1c",
            attrs: {
              name: "exportNameTemplate",
              "has-reset": "",
              "has-save": false,
              rows: 1
            }
          }),
          _c(
            "tooltip",
            {
              attrs: {
                content: _vm.i18n("msgDateFormatInfo", _vm.dateTokens),
                placement: "left"
              }
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://momentjs.com/docs/#/displaying/format/",
                    target: "_blank"
                  }
                },
                [_c("icon", { attrs: { name: "info" } })],
                1
              )
            ]
          ),
          _c("span", {
            attrs: { hidden: "" },
            domProps: { textContent: _vm._s(_vm.getFileName()) }
          })
        ],
        1
      ),
      _c(
        "div",
        { staticClass: "mt-1" },
        [
          _c("setting-check", {
            attrs: {
              name: "exportValues",
              label: _vm.i18n("labelExportScriptData")
            }
          })
        ],
        1
      ),
      _vm.store.ffDownload
        ? _c(
            "modal",
            {
              attrs: {
                transition: "in-out",
                visible: !!_vm.store.ffDownload.url
              },
              on: {
                close: function($event) {
                  _vm.store.ffDownload = {}
                }
              }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      download: _vm.store.ffDownload.name,
                      href: _vm.store.ffDownload.url
                    }
                  },
                  [
                    _vm._v(" Right click and save as"),
                    _c("br"),
                    _c("strong", [_vm._v("scripts.zip")])
                  ]
                )
              ])
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-import.vue?vue&type=template&id=47a9cd9c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-import.vue?vue&type=template&id=47a9cd9c& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("button", {
        ref: "buttonImport",
        domProps: { textContent: _vm._s(_vm.i18n("buttonImportData")) },
        on: { click: _vm.pickBackup }
      }),
      _c("tooltip", { attrs: { content: _vm.i18n("hintVacuum") } }, [
        _c("button", {
          attrs: { disabled: _vm.vacuuming },
          domProps: { textContent: _vm._s(_vm.labelVacuum) },
          on: { click: _vm.vacuum }
        })
      ]),
      _c(
        "div",
        { staticClass: "mt-1 flex flex-col" },
        [
          _c("setting-check", {
            attrs: {
              name: "importScriptData",
              label: _vm.i18n("labelImportScriptData")
            }
          }),
          _c("setting-check", {
            attrs: {
              name: "importSettings",
              label: _vm.i18n("labelImportSettings")
            }
          })
        ],
        1
      ),
      _c(
        "table",
        { staticClass: "import-report" },
        _vm._l(_vm.reports, function(ref, i) {
          var type = ref.type
          var name = ref.name
          var text = ref.text
          return _c("tr", { key: i, attrs: { "data-type": type } }, [
            name
              ? _c("td", { domProps: { textContent: _vm._s(name) } })
              : _vm._e(),
            _c("td", {
              attrs: { colspan: name ? null : 2 },
              domProps: { textContent: _vm._s(text) }
            })
          ])
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-sync.vue?vue&type=template&id=1e93a330&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-sync.vue?vue&type=template&id=1e93a330& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "mt-1c" }, [
    _c("h3", { domProps: { textContent: _vm._s(_vm.i18n("labelSync")) } }),
    _vm.state
      ? _c(
          "div",
          { staticClass: "flex flex-wrap center-items" },
          [
            _c("span", {
              domProps: { textContent: _vm._s(_vm.i18n("labelSyncService")) }
            }),
            _c(
              "select",
              {
                staticClass: "mx-1",
                domProps: { value: _vm.syncConfig.current },
                on: { change: _vm.onSyncChange }
              },
              _vm._l(_vm.syncServices, function(service) {
                return _c("option", {
                  key: service.name,
                  domProps: {
                    value: service.name,
                    textContent: _vm._s(service.displayName)
                  }
                })
              }),
              0
            ),
            _vm.service.name && _vm.state.authType === "oauth"
              ? _c("button", {
                  attrs: { disabled: !_vm.state.canAuthorize },
                  domProps: { textContent: _vm._s(_vm.state.label) },
                  on: { click: _vm.onAuthorize }
                })
              : _vm._e(),
            _vm.service.name
              ? _c(
                  "tooltip",
                  {
                    staticClass: "stretch-self flex mr-1",
                    attrs: { content: _vm.i18n("labelSync") }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "flex center-items",
                        attrs: { disabled: !_vm.state.canSync },
                        on: { click: _vm.onSync }
                      },
                      [_c("icon", { attrs: { name: "refresh" } })],
                      1
                    )
                  ]
                )
              : _vm._e(),
            _vm.state
              ? _c("p", {
                  domProps: { textContent: _vm._s(_vm.state.message) }
                })
              : _vm._e()
          ],
          1
        )
      : _vm._e(),
    _vm.state && _vm.state.authType === "password"
      ? _c("fieldset", { staticClass: "mt-1c" }, [
          _c("label", { staticClass: "sync-server-url" }, [
            _c("span", {
              domProps: { textContent: _vm._s(_vm.i18n("labelSyncServerUrl")) }
            }),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.state.userConfig.serverUrl,
                  expression: "state.userConfig.serverUrl"
                }
              ],
              attrs: { type: "url", disabled: !_vm.state.canAuthorize },
              domProps: { value: _vm.state.userConfig.serverUrl },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.state.userConfig,
                    "serverUrl",
                    $event.target.value
                  )
                }
              }
            })
          ]),
          _c("div", { staticClass: "mr-2c" }, [
            _c("label", [
              _c("span", {
                domProps: { textContent: _vm._s(_vm.i18n("labelSyncUsername")) }
              }),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.state.userConfig.username,
                    expression: "state.userConfig.username"
                  }
                ],
                attrs: {
                  type: "text",
                  disabled:
                    !_vm.state.canAuthorize || _vm.state.userConfig.anonymous
                },
                domProps: { value: _vm.state.userConfig.username },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.state.userConfig,
                      "username",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _c("label", { staticClass: "inline-block" }, [
              _c("span", {
                domProps: { textContent: _vm._s(_vm.i18n("labelSyncPassword")) }
              }),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.state.userConfig.password,
                    expression: "state.userConfig.password"
                  }
                ],
                attrs: {
                  type: "password",
                  disabled:
                    !_vm.state.canAuthorize || _vm.state.userConfig.anonymous
                },
                domProps: { value: _vm.state.userConfig.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.state.userConfig,
                      "password",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _c("label", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.state.userConfig.anonymous,
                    expression: "state.userConfig.anonymous"
                  }
                ],
                attrs: { type: "checkbox", disabled: !_vm.state.canAuthorize },
                domProps: {
                  checked: Array.isArray(_vm.state.userConfig.anonymous)
                    ? _vm._i(_vm.state.userConfig.anonymous, null) > -1
                    : _vm.state.userConfig.anonymous
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.state.userConfig.anonymous,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(
                            _vm.state.userConfig,
                            "anonymous",
                            $$a.concat([$$v])
                          )
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.state.userConfig,
                            "anonymous",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.state.userConfig, "anonymous", $$c)
                    }
                  }
                }
              }),
              _c("span", {
                domProps: {
                  textContent: _vm._s(_vm.i18n("labelSyncAnonymous"))
                }
              })
            ])
          ]),
          _c("div", [
            _c("button", {
              attrs: { disabled: !_vm.state.canAuthorize },
              domProps: { textContent: _vm._s(_vm.i18n("buttonSave")) },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.onSaveUserConfig($event)
                }
              }
            })
          ])
        ])
      : _vm._e(),
    _vm.service && _vm.service.name
      ? _c(
          "div",
          [
            _c("setting-check", {
              attrs: {
                name: "syncScriptStatus",
                label: _vm.i18n("labelSyncScriptStatus")
              }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-template.vue?vue&type=template&id=06971372&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-template.vue?vue&type=template&id=06971372& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("h3", {
        domProps: { textContent: _vm._s(_vm.i18n("labelScriptTemplate")) }
      }),
      _c("setting-text", {
        attrs: { name: "scriptTemplate", "has-reset": "" },
        on: { save: _vm.onSave }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/help.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/help.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./help.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/help.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("22b3a990", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/index.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("8950f020", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/settings.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/settings.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/settings.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("67121510", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/values.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/edit/values.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./values.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/values.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("9be4d3d0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/script-item.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/script-item.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../node_modules/vue-loader/lib??vue-loader-options!./script-item.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/script-item.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("65eb5497", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-about.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-about.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tab-about.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-about.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("bdbb32d2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-installed.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-installed.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tab-installed.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-installed.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5b715712", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/index.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("75912501", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-editor.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-editor.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-editor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-editor.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2aa989e3", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-export.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-export.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-export.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-export.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1a6495f1", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-import.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-import.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-import.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-import.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("25852b5a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-sync.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/options/views/tab-settings/vm-sync.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-sync.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-sync.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2629ca3f", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/options/style.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-2-2!./src/options/style.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!./style.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/options/style.css?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6e158366", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vueleton/lib/dropdown/bundle.js":
/*!******************************************************!*\
  !*** ./node_modules/vueleton/lib/dropdown/bundle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index */ "./node_modules/vueleton/lib/dropdown/index.js");
__webpack_require__(/*! ./style */ "./node_modules/vueleton/lib/dropdown/style.js");

/***/ }),

/***/ "./node_modules/vueleton/lib/dropdown/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vueleton/lib/dropdown/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function e(e,t,o,n,s,i,d,c,l,r){"boolean"!=typeof d&&(l=c,c=d,d=!1);const a="function"==typeof o?o.options:o;let u;if(e&&e.render&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns,a._compiled=!0,s&&(a.functional=!0)),n&&(a._scopeId=n),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},a._ssrRegister=u):t&&(u=d?function(e){t.call(this,r(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,c(e))}),u)if(a.functional){const e=a.render;a.render=function(t,o){return u.call(o),e(t,o)}}else{const e=a.beforeCreate;a.beforeCreate=e?[].concat(e,u):[u]}return o}const t=e({render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"vl-dropdown",class:"vl-dropdown-"+e.align+" vl-dropdown-"+e.direction,on:{mouseup:e.onMouseUp}},[o("div",{staticClass:"vl-dropdown-toggle",on:{click:e.onToggle,focus:e.onFocus,blur:e.onBlur}},[e._t("toggle")],2),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"vl-dropdown-menu",on:{mousedown:function(e){e.stopPropagation()}}},[e._t("default")],2)])},staticRenderFns:[]},undefined,{props:{closeAfterClick:{type:Boolean,default:!1},toggleOnOnly:{type:Boolean,default:!1},focusOpen:{type:Boolean,default:!1},align:{type:String,default:"left"},direction:{type:String,default:"down"}},data:()=>({active:!1}),watch:{active(e,t){e!==t&&(e?document.addEventListener("mousedown",this.onClose,!1):document.removeEventListener("mousedown",this.onClose,!1),this.$emit("stateChange",e))}},methods:{onToggle(){this.active=!this.active},onOpen(){this.active=!0},onClose(){this.active=!1},onFocus(){this.focusOpen&&this.onOpen()},onBlur(){const{activeElement:e}=document;e===document.body||this.$el.contains(e)||this.onClose()},onMouseUp(){this.closeAfterClick&&this.onClose()}}},undefined,false,undefined,!1,void 0,void 0,void 0);t.install=function(e){e.component("vl-dropdown",t)},module.exports=t;


/***/ }),

/***/ "./node_modules/vueleton/lib/dropdown/style.css":
/*!******************************************************!*\
  !*** ./node_modules/vueleton/lib/dropdown/style.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--3-oneOf-0-1!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vueleton/lib/dropdown/style.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("25a399c0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vueleton/lib/dropdown/style.js":
/*!*****************************************************!*\
  !*** ./node_modules/vueleton/lib/dropdown/style.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./style.css */ "./node_modules/vueleton/lib/dropdown/style.css");

/***/ }),

/***/ "./src/common/date.js":
/*!****************************!*\
  !*** ./src/common/date.js ***!
  \****************************/
/*! exports provided: DATE_FMT, formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FMT", function() { return DATE_FMT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
const DAY_MS = 24 * 3600e3;
const WEEK_MS = 7 * 24 * 3600e3; // Using simple padding functions because String#padStart is Chrome57+ but our minimum is 55

const pad2 = num => `${num < 10 ? '0' : ''}${num}`;

const pad3 = num => `${num < 10 && '00' || num < 100 && '0' || ''}${num}`;

const getYear = date => date.getFullYear();

const getDayOfYear = date => Math.floor((date - new Date(getYear(date), 0, 1)) / DAY_MS) + 1;

const getWeekOfYear = date => Math.floor((date - new Date(getYear(date), 0, 1)) / WEEK_MS) + 1;

const toLocaleString = (date, opts) => date.toLocaleString([navigator.language], opts);
/** @type {Object<string,(Date)=>string>} */


const DATE_FMT = {
  M: date => date.getMonth() + 1,
  // 1 2 ... 11 12
  MM: date => pad2(date.getMonth() + 1),
  // 01 02 ... 11 12
  MMM: date => toLocaleString(date, {
    month: 'short'
  }),
  // Jan Feb
  MMMM: date => toLocaleString(date, {
    month: 'long'
  }),
  // January February
  Q: date => Math.floor(date.getMonth() / 3) + 1,
  // 1 2 3 4
  D: date => date.getDate(),
  // 1 2 ... 30 31
  DD: date => pad2(date.getDate()),
  // 01 02 ... 30 31
  DDD: getDayOfYear,
  // 1 2 ... 364 365
  DDDD: date => pad3(getDayOfYear(date)),
  // 001 002 ... 364 365
  d: date => date.getDay(),
  // 0 1 ... 5 6
  dd: date => toLocaleString(date, {
    weekday: 'short'
  }).slice(0, 2),
  // Su Mo ... Fr Sa
  ddd: date => toLocaleString(date, {
    weekday: 'short'
  }),
  // Sun Mon ... Fri Sat
  dddd: date => toLocaleString(date, {
    weekday: 'long'
  }),
  // Sunday Monday ... Friday Saturday
  w: getWeekOfYear,
  // 1 2 ... 52 53
  ww: date => pad2(getWeekOfYear(date)),
  // 01 02 ... 52 53
  Y: getYear,
  YY: date => pad2(getYear(date) % 100),
  YYYY: date => `${getYear(date)}`.slice(-4),
  H: date => date.getHours(),
  // 0 1 ... 22 23
  HH: date => pad2(date.getHours()),
  // 00 01 ... 22 23
  m: date => date.getMinutes(),
  // 0 1 ... 58 59
  mm: date => pad2(date.getMinutes()),
  // 00 01 ... 58 59
  s: date => date.getSeconds(),
  // 0 1 ... 58 59
  ss: date => pad2(date.getSeconds()),
  // 00 01 ... 58 59
  S: date => `${+date}`.slice(-3, -2),
  // fractional second 0 1 ... 8 9
  SS: date => `${+date}`.slice(-3, -1),
  // fractional second 00 01 ... 98 99
  SSS: date => `${+date}`.slice(-3),
  // fractional second 000 001 ... 998 999
  ZZ: date => {
    // -0700 -0600 ... +0600 +0700
    const tz = date.getTimezoneOffset();
    const tza = Math.abs(tz);
    return `${tz < 0 ? '-' : '+'}${pad2(Math.floor(tza / 60))}${pad2(Math.floor(tza % 60))}`;
  }
};
let re;
function formatDate(tpl, date = new Date()) {
  if (!re) {
    re = new RegExp(`${// moment.js escaping for [literal text]
    /\[([^[\]]*)]/.source}|${// Matching longest first to allow omitting separators e.g. HHMM
    Object.keys(DATE_FMT).sort((a, b) => b.length - a.length).join('|')}`, 'g');
  }

  return tpl.replace(re, (s, literal) => safeCall(hasOwnProperty, DATE_FMT, s) ? DATE_FMT[s](date) : literal != null ? literal : s);
}

/***/ }),

/***/ "./src/common/download.js":
/*!********************************!*\
  !*** ./src/common/download.js ***!
  \********************************/
/*! exports provided: downloadBlob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadBlob", function() { return downloadBlob; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");

function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name || '';
  a.dispatchEvent(new MouseEvent('click'));
  Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_0__["makePause"])(3000).then(() => URL.revokeObjectURL(url));
}

/***/ }),

/***/ "./src/common/ui/locale-group.vue":
/*!****************************************!*\
  !*** ./src/common/ui/locale-group.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_group_vue_vue_type_template_id_3739aa5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale-group.vue?vue&type=template&id=3739aa5c& */ "./src/common/ui/locale-group.vue?vue&type=template&id=3739aa5c&");
/* harmony import */ var _locale_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-group.vue?vue&type=script&lang=js& */ "./src/common/ui/locale-group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _locale_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _locale_group_vue_vue_type_template_id_3739aa5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _locale_group_vue_vue_type_template_id_3739aa5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/common/ui/locale-group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/common/ui/locale-group.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/common/ui/locale-group.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_scripts_fake_dep_loader_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_locale_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../scripts/fake-dep-loader.js??ref--7-0!../../../node_modules/vue-loader/lib??vue-loader-options!./locale-group.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./scripts/fake-dep-loader.js?!./node_modules/vue-loader/lib/index.js?!./src/common/ui/locale-group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_scripts_fake_dep_loader_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_locale_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/common/ui/locale-group.vue?vue&type=template&id=3739aa5c&":
/*!***********************************************************************!*\
  !*** ./src/common/ui/locale-group.vue?vue&type=template&id=3739aa5c& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_locale_group_vue_vue_type_template_id_3739aa5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./locale-group.vue?vue&type=template&id=3739aa5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/common/ui/locale-group.vue?vue&type=template&id=3739aa5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_locale_group_vue_vue_type_template_id_3739aa5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_locale_group_vue_vue_type_template_id_3739aa5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/common/ui/setting-text.vue":
/*!****************************************!*\
  !*** ./src/common/ui/setting-text.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setting_text_vue_vue_type_template_id_3d4b389a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-text.vue?vue&type=template&id=3d4b389a& */ "./src/common/ui/setting-text.vue?vue&type=template&id=3d4b389a&");
/* harmony import */ var _setting_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting-text.vue?vue&type=script&lang=js& */ "./src/common/ui/setting-text.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _setting_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _setting_text_vue_vue_type_template_id_3d4b389a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _setting_text_vue_vue_type_template_id_3d4b389a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/common/ui/setting-text.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/common/ui/setting-text.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/common/ui/setting-text.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_scripts_fake_dep_loader_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../scripts/fake-dep-loader.js??ref--7-0!../../../node_modules/vue-loader/lib??vue-loader-options!./setting-text.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./scripts/fake-dep-loader.js?!./node_modules/vue-loader/lib/index.js?!./src/common/ui/setting-text.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_scripts_fake_dep_loader_js_ref_7_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/common/ui/setting-text.vue?vue&type=template&id=3d4b389a&":
/*!***********************************************************************!*\
  !*** ./src/common/ui/setting-text.vue?vue&type=template&id=3d4b389a& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_text_vue_vue_type_template_id_3d4b389a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./setting-text.vue?vue&type=template&id=3d4b389a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/common/ui/setting-text.vue?vue&type=template&id=3d4b389a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_text_vue_vue_type_template_id_3d4b389a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_text_vue_vue_type_template_id_3d4b389a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/common/zip.js":
/*!***************************!*\
  !*** ./src/common/zip.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/common/util.js");


function loadJS(url) {
  return new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.src = url;
    el.onload = resolve;
    el.onerror = reject;
    document.body.append(el);
  });
}

const loadZip = Object(_util__WEBPACK_IMPORTED_MODULE_0__["memoize"])(async () => {
  await loadJS('/public/lib/zip-no-worker.min.js');
  const {
    zip
  } = window;
  const workerScripts = ['/public/lib/z-worker.js'];
  zip.configure({
    workerScripts: {
      deflate: workerScripts,
      inflate: workerScripts
    }
  });
  return zip;
});
/* harmony default export */ __webpack_exports__["default"] = (loadZip);

/***/ }),

/***/ "./src/options/index.js":
/*!******************************!*\
  !*** ./src/options/index.js ***!
  \******************************/
/*! exports provided: loadData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/browser */ "./src/common/browser.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ZhaoJun_Desktop_violentmonkey_src_common_browser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/common/handlers */ "./src/common/handlers.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_load_script_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/common/load-script-icon */ "./src/common/load-script-icon.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/options */ "./src/common/options.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/common/ui/style */ "./src/common/ui/style/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/options/utils/index.js");
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/app */ "./src/options/views/app.vue");









vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.i18n = _Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["i18n"];
Object.assign(_utils__WEBPACK_IMPORTED_MODULE_7__["store"], {
  loading: false,
  sync: [],
  title: null
});
initialize();

function initialize() {
  initMain();
  const vm = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    render: h => h(_views_app__WEBPACK_IMPORTED_MODULE_8__["default"])
  }).$mount();
  document.body.append(vm.$el);
}

async function initScript(script) {
  const meta = script.meta || {};
  const localeName = Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["getLocaleString"])(meta, 'name');
  const search = [meta.name, localeName, meta.description, Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["getLocaleString"])(meta, 'description'), script.custom.name, script.custom.description].filter(Boolean).join('\n');
  const name = script.custom.name || localeName;
  const lowerName = name.toLowerCase();
  script.$cache = {
    search,
    name,
    lowerName
  };

  if (!(await Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common_load_script_icon__WEBPACK_IMPORTED_MODULE_4__["loadScriptIcon"])(script, _utils__WEBPACK_IMPORTED_MODULE_7__["store"].cache))) {
    script.safeIcon = `/public/images/icon${_utils__WEBPACK_IMPORTED_MODULE_7__["store"].HiDPI ? 128 : script.config.removed && 32 || 38}.png`;
  }
}

async function loadData() {
  const id = _utils__WEBPACK_IMPORTED_MODULE_7__["store"].route.paths[1];
  const params = id ? [+id].filter(Boolean) : null;
  const [{
    cache,
    scripts,
    sync
  }] = await Promise.all([Object(_Users_ZhaoJun_Desktop_violentmonkey_src_common__WEBPACK_IMPORTED_MODULE_2__["sendCmdDirectly"])('GetData', params, {
    retry: true
  }), _Users_ZhaoJun_Desktop_violentmonkey_src_common_options__WEBPACK_IMPORTED_MODULE_5__["default"].ready]);
  _utils__WEBPACK_IMPORTED_MODULE_7__["store"].cache = cache;
  scripts == null ? void 0 : scripts.forEach(initScript);
  _utils__WEBPACK_IMPORTED_MODULE_7__["store"].scripts = scripts;
  _utils__WEBPACK_IMPORTED_MODULE_7__["store"].sync = sync;
  _utils__WEBPACK_IMPORTED_MODULE_7__["store"].loading = false;
}

function initMain() {
  _utils__WEBPACK_IMPORTED_MODULE_7__["store"].loading = true;
  loadData();
  Object.assign(_Users_ZhaoJun_Desktop_violentmonkey_src_common_handlers__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ScriptsUpdated() {
      loadData();
    },

    UpdateSync(data) {
      _utils__WEBPACK_IMPORTED_MODULE_7__["store"].sync = data;
    },

    AddScript({
      update
    }) {
      update.message = '';
      initScript(update);
      _utils__WEBPACK_IMPORTED_MODULE_7__["store"].scripts.push(update);
    },

    UpdateScript(data) {
      if (!data) return;
      const index = _utils__WEBPACK_IMPORTED_MODULE_7__["store"].scripts.findIndex(item => item.props.id === data.where.id);

      if (index >= 0) {
        const updated = Object.assign({}, _utils__WEBPACK_IMPORTED_MODULE_7__["store"].scripts[index], data.update);
        if (updated.error && !data.update.error) updated.error = null;
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(_utils__WEBPACK_IMPORTED_MODULE_7__["store"].scripts, index, updated);
        initScript(updated);
      }
    },

    RemoveScript(id) {
      const i = _utils__WEBPACK_IMPORTED_MODULE_7__["store"].scripts.findIndex(script => script.props.id === id);
      if (i >= 0) _utils__WEBPACK_IMPORTED_MODULE_7__["store"].scripts.splice(i, 1);
    }

  });
}

/***/ }),

/***/ "./src/options/style.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************!*\
  !*** ./src/options/style.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!./style.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/options/style.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/utils/dragging.js":
/*!***************************************!*\
  !*** ./src/options/utils/dragging.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return enableDragging; });
const SCROLL_GAP = 50; // px per one 60fps frame so the max is ~1200px per second (~one page)

const MAX_SCROLL_SPEED = 20;
const ONE_FRAME_MS = 16; // touch-and-hold duration in ms before recognizing dragstart (needed to allow fling-scrolling)

const LONGPRESS_DELAY = 500;
const DROP_EVENT_RELAY = 'VM-drop-event-relay';
const isTouch = ('ontouchstart' in document);
const eventNames = isTouch ? {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
} : {
  start: 'dragstart',
  move: 'mousemove',
  end: 'mouseup'
}; // inserting a scroll blocker as the first element of the list to avoid changing the list's
// style/class as it would be slooooooooooow due to style recalc on all of its children

const noScroll = isTouch && Object.assign(document.createElement('div'), {
  className: 'dragging-noscroll'
});
const eventsToSuppress = ['scroll', 'mouseenter', 'mouseleave'];
const {
  addEventListener: on,
  removeEventListener: off
} = EventTarget.prototype;
let dragged;
let elements;
let height;
let index;
let lastIndex;
let longPressEvent;
let longPressTimer;
let offsetX;
let offsetY;
let original;
let parent;
let scrollEdgeTop;
let scrollEdgeBottom;
let scrollTimer;
let scrollSpeed;
let scrollTimestamp;
let xyCache;
/**
 * @param {Element} el
 * @param {function(from,to)} onDrop
 */

function enableDragging(el, {
  onDrop
}) {
  if (!parent) {
    parent = el.parentElement; // pre-FF64 doesn't support `@media (pointer: coarse)`

    if (isTouch && !matchMedia('(pointer: coarse)').matches) {
      parent.classList.add('touch');
    }
  }

  safeCall(on, el, eventNames.start, isTouch ? onTouchStart : onDragStart);
  safeCall(on, el, DROP_EVENT_RELAY, () => onDrop(index, lastIndex));
}

function onTouchStart(e) {
  original = this;
  longPressEvent = e;
  longPressTimer = setTimeout(onTouchMoveDetect, LONGPRESS_DELAY, 'timer');
  safeCall(on, document, eventNames.move, onTouchMoveDetect);
  safeCall(on, document, eventNames.end, onTouchEndDetect);
}

function onTouchMoveDetect(e) {
  onTouchEndDetect();

  if (e === 'timer') {
    safeCall(onDragStart, original, longPressEvent);

    if (IS_FIREFOX && parentCanScroll()) {
      // FF bug workaround: prevent the script list container from scrolling on drag
      parent.scrollTop += 1;
      parent.scrollTop -= 1;
    }
  }
}

function onTouchEndDetect() {
  clearTimeout(longPressTimer);
  safeCall(off, document, eventNames.move, onTouchMoveDetect);
  safeCall(off, document, eventNames.end, onTouchEndDetect);
}

function onDragStart(e) {
  var _e$touches;

  original = this;
  if (e.cancelable) e.preventDefault();
  const {
    clientX: x,
    clientY: y
  } = ((_e$touches = e.touches) == null ? void 0 : _e$touches[0]) || e;
  const rect = original.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();
  dragged = original.cloneNode(true);
  elements = [...parent.children];
  index = elements.indexOf(original);
  lastIndex = index;
  elements.splice(index, 1);
  height = rect.height;
  offsetX = x - rect.left;
  offsetY = y - rect.top;
  scrollEdgeTop = parentRect.top + SCROLL_GAP;
  scrollEdgeBottom = parentRect.bottom - SCROLL_GAP;
  xyCache = {};
  original.classList.add('dragging-placeholder');
  dragged.classList.add('dragging');
  dragged.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
  dragged.style.width = `${rect.width}px`;
  parent.appendChild(dragged);
  if (isTouch) parent.insertAdjacentElement('afterBegin', noScroll);
  safeCall(on, document, eventNames.move, onDragMouseMove);
  safeCall(on, document, eventNames.end, onDragMouseUp);
}

function onDragMouseMove(e) {
  var _e$touches2;

  const {
    clientX: x,
    clientY: y,
    target
  } = ((_e$touches2 = e.touches) == null ? void 0 : _e$touches2[0]) || e;
  let moved;
  const hovered = isTouch ? scriptFromPoint(x, y) : target.closest == null ? void 0 : target.closest('.script'); // FF bug: despite placeholder having `pointer-events:none` it's still reported in `target`

  if (hovered && hovered !== original) {
    const rect = hovered.getBoundingClientRect();
    const isDown = y > rect.top + rect.height / 2;
    moved = original !== hovered[`${isDown ? 'next' : 'previous'}ElementSibling`];

    if (moved) {
      hovered.insertAdjacentElement(isDown ? 'afterEnd' : 'beforeBegin', original);
      animate(elements.indexOf(hovered) + isDown);
    }
  }

  dragged.style.transform = `translate(${x - offsetX}px, ${y - offsetY}px)`;
  if (maybeScroll(y) || moved) xyCache = {};
}

function onDragMouseUp() {
  safeCall(off, document, eventNames.move, onDragMouseMove);
  safeCall(off, document, eventNames.end, onDragMouseUp);
  stopScrolling();
  dragged.remove();
  if (isTouch) noScroll.remove();
  original.classList.remove('dragging-placeholder');
  original.dispatchEvent(new Event(DROP_EVENT_RELAY));
}

function animate(hoveredIndex) {
  const delta = lastIndex < hoveredIndex ? height : -height;
  const group = elements.slice(...(lastIndex < hoveredIndex ? [lastIndex, hoveredIndex] : [hoveredIndex, lastIndex]));
  group.forEach(el => {
    el.style.transition = 'none';
    el.style.transform = `translateY(${delta}px)`;
  });
  setTimeout(() => group.forEach(el => el.removeAttribute('style')));
  lastIndex = hoveredIndex;
}

function parentCanScroll() {
  return parent.scrollHeight > parent.clientHeight;
}

function maybeScroll(y) {
  const delta = parentCanScroll() && Math.min(1, Math.max(0, y - scrollEdgeBottom, scrollEdgeTop - y) / SCROLL_GAP);
  if (!delta && scrollTimer) stopScrolling();
  if (delta && !scrollTimer) startScrolling();
  scrollSpeed = delta && (y > scrollEdgeBottom ? 1 : -1) * (1 + delta * MAX_SCROLL_SPEED | 0);
  scrollTimestamp = performance.now();
  return !!delta;
}

function doScroll() {
  // normalize scroll speed: on slower devices the step will be bigger
  const ts = performance.now();
  const distance = scrollSpeed * (ts - scrollTimestamp) / ONE_FRAME_MS;
  parent.scrollTop += distance;
  scrollTimestamp = ts;
}

function startScrolling() {
  scrollTimer = setInterval(doScroll, ONE_FRAME_MS);
  eventsToSuppress.forEach(name => safeCall(on, window, name, stopPropagation, true));
}

function stopScrolling() {
  eventsToSuppress.forEach(name => safeCall(off, window, name, stopPropagation, true));
  if (scrollTimer) clearInterval(scrollTimer);
  scrollTimer = 0;
} // primary goal: don't update Vueleton/tooltip while drag-scrolling


function stopPropagation(e) {
  e.stopPropagation();
} // touch devices are usually slooooow so touchmove causes jank due to frequent elementFromPoint


function scriptFromPoint(x, y) {
  var _document$elementFrom;

  const key = `${x}:${y}`;
  const el = xyCache[key] || (xyCache[key] = (_document$elementFrom = document.elementFromPoint(x, y)) == null ? void 0 : _document$elementFrom.closest('.script'));
  return el;
}

/***/ }),

/***/ "./src/options/utils/index.js":
/*!************************************!*\
  !*** ./src/options/utils/index.js ***!
  \************************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/router */ "./src/common/router.js");
/* harmony import */ var _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_favicon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common/ui/favicon */ "./src/common/ui/favicon.js");


const store = {
  route: _Users_ZhaoJun_Desktop_violentmonkey_src_common_router__WEBPACK_IMPORTED_MODULE_0__["route"],
  scripts: [],

  get installedScripts() {
    return store.scripts.filter(script => !script.config.removed);
  },

  get removedScripts() {
    return store.scripts.filter(script => script.config.removed);
  },

  HiDPI: _Users_ZhaoJun_Desktop_violentmonkey_src_common_ui_favicon__WEBPACK_IMPORTED_MODULE_1__["isHiDPI"],
  storageSize: 0
};

/***/ }),

/***/ "./src/options/views/app.vue":
/*!***********************************!*\
  !*** ./src/options/views/app.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_e76b6274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=e76b6274& */ "./src/options/views/app.vue?vue&type=template&id=e76b6274&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./src/options/views/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css?vue&type=style&index=0&lang=css& */ "./src/options/style.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_e76b6274___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_e76b6274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/app.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/options/views/app.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/app.vue?vue&type=template&id=e76b6274&":
/*!******************************************************************!*\
  !*** ./src/options/views/app.vue?vue&type=template&id=e76b6274& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_e76b6274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=e76b6274& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/app.vue?vue&type=template&id=e76b6274&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_e76b6274___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_e76b6274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/edit/help.vue":
/*!*****************************************!*\
  !*** ./src/options/views/edit/help.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _help_vue_vue_type_template_id_2d98548b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.vue?vue&type=template&id=2d98548b& */ "./src/options/views/edit/help.vue?vue&type=template&id=2d98548b&");
/* harmony import */ var _help_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.vue?vue&type=script&lang=js& */ "./src/options/views/edit/help.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _help_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help.vue?vue&type=style&index=0&lang=css& */ "./src/options/views/edit/help.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _help_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _help_vue_vue_type_template_id_2d98548b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _help_vue_vue_type_template_id_2d98548b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/edit/help.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/edit/help.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/options/views/edit/help.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_help_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./help.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/help.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_help_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/edit/help.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./src/options/views/edit/help.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_help_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./help.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/help.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_help_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_help_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_help_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_help_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_help_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/views/edit/help.vue?vue&type=template&id=2d98548b&":
/*!************************************************************************!*\
  !*** ./src/options/views/edit/help.vue?vue&type=template&id=2d98548b& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_help_vue_vue_type_template_id_2d98548b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./help.vue?vue&type=template&id=2d98548b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/help.vue?vue&type=template&id=2d98548b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_help_vue_vue_type_template_id_2d98548b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_help_vue_vue_type_template_id_2d98548b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/edit/index.vue":
/*!******************************************!*\
  !*** ./src/options/views/edit/index.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0a9c2d78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0a9c2d78& */ "./src/options/views/edit/index.vue?vue&type=template&id=0a9c2d78&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/options/views/edit/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./src/options/views/edit/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0a9c2d78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0a9c2d78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/edit/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/edit/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/options/views/edit/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/edit/index.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./src/options/views/edit/index.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/views/edit/index.vue?vue&type=template&id=0a9c2d78&":
/*!*************************************************************************!*\
  !*** ./src/options/views/edit/index.vue?vue&type=template&id=0a9c2d78& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a9c2d78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0a9c2d78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/index.vue?vue&type=template&id=0a9c2d78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a9c2d78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0a9c2d78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/edit/settings.vue":
/*!*********************************************!*\
  !*** ./src/options/views/edit/settings.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_vue_vue_type_template_id_78bfd126___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=78bfd126& */ "./src/options/views/edit/settings.vue?vue&type=template&id=78bfd126&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./src/options/views/edit/settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.vue?vue&type=style&index=0&lang=css& */ "./src/options/views/edit/settings.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_78bfd126___WEBPACK_IMPORTED_MODULE_0__["render"],
  _settings_vue_vue_type_template_id_78bfd126___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/edit/settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/edit/settings.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/options/views/edit/settings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/edit/settings.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./src/options/views/edit/settings.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/settings.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/views/edit/settings.vue?vue&type=template&id=78bfd126&":
/*!****************************************************************************!*\
  !*** ./src/options/views/edit/settings.vue?vue&type=template&id=78bfd126& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_78bfd126___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=template&id=78bfd126& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/settings.vue?vue&type=template&id=78bfd126&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_78bfd126___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_78bfd126___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/edit/values.vue":
/*!*******************************************!*\
  !*** ./src/options/views/edit/values.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _values_vue_vue_type_template_id_cc517528___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./values.vue?vue&type=template&id=cc517528& */ "./src/options/views/edit/values.vue?vue&type=template&id=cc517528&");
/* harmony import */ var _values_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./values.vue?vue&type=script&lang=js& */ "./src/options/views/edit/values.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _values_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./values.vue?vue&type=style&index=0&lang=css& */ "./src/options/views/edit/values.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _values_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _values_vue_vue_type_template_id_cc517528___WEBPACK_IMPORTED_MODULE_0__["render"],
  _values_vue_vue_type_template_id_cc517528___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/edit/values.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/edit/values.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/options/views/edit/values.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./values.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/values.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/edit/values.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./src/options/views/edit/values.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./values.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/values.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/views/edit/values.vue?vue&type=template&id=cc517528&":
/*!**************************************************************************!*\
  !*** ./src/options/views/edit/values.vue?vue&type=template&id=cc517528& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_template_id_cc517528___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./values.vue?vue&type=template&id=cc517528& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/edit/values.vue?vue&type=template&id=cc517528&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_template_id_cc517528___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_values_vue_vue_type_template_id_cc517528___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/script-item.vue":
/*!*******************************************!*\
  !*** ./src/options/views/script-item.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_item_vue_vue_type_template_id_0aac107a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script-item.vue?vue&type=template&id=0aac107a& */ "./src/options/views/script-item.vue?vue&type=template&id=0aac107a&");
/* harmony import */ var _script_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script-item.vue?vue&type=script&lang=js& */ "./src/options/views/script-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _script_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script-item.vue?vue&type=style&index=0&lang=css& */ "./src/options/views/script-item.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _script_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _script_item_vue_vue_type_template_id_0aac107a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _script_item_vue_vue_type_template_id_0aac107a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/script-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/script-item.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/options/views/script-item.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./script-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/script-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/script-item.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./src/options/views/script-item.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../node_modules/vue-loader/lib??vue-loader-options!./script-item.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/script-item.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/views/script-item.vue?vue&type=template&id=0aac107a&":
/*!**************************************************************************!*\
  !*** ./src/options/views/script-item.vue?vue&type=template&id=0aac107a& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_template_id_0aac107a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./script-item.vue?vue&type=template&id=0aac107a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/script-item.vue?vue&type=template&id=0aac107a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_template_id_0aac107a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_script_item_vue_vue_type_template_id_0aac107a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/tab-about.vue":
/*!*****************************************!*\
  !*** ./src/options/views/tab-about.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab_about_vue_vue_type_template_id_378b1f8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-about.vue?vue&type=template&id=378b1f8c& */ "./src/options/views/tab-about.vue?vue&type=template&id=378b1f8c&");
/* harmony import */ var _tab_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-about.vue?vue&type=script&lang=js& */ "./src/options/views/tab-about.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tab_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-about.vue?vue&type=style&index=0&lang=css& */ "./src/options/views/tab-about.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tab_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tab_about_vue_vue_type_template_id_378b1f8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tab_about_vue_vue_type_template_id_378b1f8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/tab-about.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/tab-about.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/options/views/tab-about.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./tab-about.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-about.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/tab-about.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./src/options/views/tab-about.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tab-about.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-about.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/views/tab-about.vue?vue&type=template&id=378b1f8c&":
/*!************************************************************************!*\
  !*** ./src/options/views/tab-about.vue?vue&type=template&id=378b1f8c& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_about_vue_vue_type_template_id_378b1f8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tab-about.vue?vue&type=template&id=378b1f8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-about.vue?vue&type=template&id=378b1f8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_about_vue_vue_type_template_id_378b1f8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_about_vue_vue_type_template_id_378b1f8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/tab-installed.vue":
/*!*********************************************!*\
  !*** ./src/options/views/tab-installed.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab_installed_vue_vue_type_template_id_e0cb19b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-installed.vue?vue&type=template&id=e0cb19b2& */ "./src/options/views/tab-installed.vue?vue&type=template&id=e0cb19b2&");
/* harmony import */ var _tab_installed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-installed.vue?vue&type=script&lang=js& */ "./src/options/views/tab-installed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tab_installed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-installed.vue?vue&type=style&index=0&lang=css& */ "./src/options/views/tab-installed.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tab_installed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tab_installed_vue_vue_type_template_id_e0cb19b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tab_installed_vue_vue_type_template_id_e0cb19b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/tab-installed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/tab-installed.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/options/views/tab-installed.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./tab-installed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-installed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/tab-installed.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./src/options/views/tab-installed.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../node_modules/vue-loader/lib??vue-loader-options!./tab-installed.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-installed.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/views/tab-installed.vue?vue&type=template&id=e0cb19b2&":
/*!****************************************************************************!*\
  !*** ./src/options/views/tab-installed.vue?vue&type=template&id=e0cb19b2& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_template_id_e0cb19b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./tab-installed.vue?vue&type=template&id=e0cb19b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-installed.vue?vue&type=template&id=e0cb19b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_template_id_e0cb19b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_installed_vue_vue_type_template_id_e0cb19b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/tab-settings/index.vue":
/*!**************************************************!*\
  !*** ./src/options/views/tab-settings/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_20bbc289___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=20bbc289& */ "./src/options/views/tab-settings/index.vue?vue&type=template&id=20bbc289&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/options/views/tab-settings/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./src/options/views/tab-settings/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_20bbc289___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_20bbc289___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/tab-settings/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/tab-settings/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/options/views/tab-settings/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/tab-settings/index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./src/options/views/tab-settings/index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/views/tab-settings/index.vue?vue&type=template&id=20bbc289&":
/*!*********************************************************************************!*\
  !*** ./src/options/views/tab-settings/index.vue?vue&type=template&id=20bbc289& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_20bbc289___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=20bbc289& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/index.vue?vue&type=template&id=20bbc289&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_20bbc289___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_20bbc289___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/tab-settings/vm-blacklist.vue":
/*!*********************************************************!*\
  !*** ./src/options/views/tab-settings/vm-blacklist.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vm_blacklist_vue_vue_type_template_id_602dc7a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-blacklist.vue?vue&type=template&id=602dc7a0& */ "./src/options/views/tab-settings/vm-blacklist.vue?vue&type=template&id=602dc7a0&");
/* harmony import */ var _vm_blacklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vm-blacklist.vue?vue&type=script&lang=js& */ "./src/options/views/tab-settings/vm-blacklist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vm_blacklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vm_blacklist_vue_vue_type_template_id_602dc7a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vm_blacklist_vue_vue_type_template_id_602dc7a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/tab-settings/vm-blacklist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/tab-settings/vm-blacklist.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-blacklist.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_blacklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-blacklist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-blacklist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_blacklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/tab-settings/vm-blacklist.vue?vue&type=template&id=602dc7a0&":
/*!****************************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-blacklist.vue?vue&type=template&id=602dc7a0& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_blacklist_vue_vue_type_template_id_602dc7a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-blacklist.vue?vue&type=template&id=602dc7a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-blacklist.vue?vue&type=template&id=602dc7a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_blacklist_vue_vue_type_template_id_602dc7a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_blacklist_vue_vue_type_template_id_602dc7a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/tab-settings/vm-css.vue":
/*!***************************************************!*\
  !*** ./src/options/views/tab-settings/vm-css.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vm_css_vue_vue_type_template_id_0a2929c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-css.vue?vue&type=template&id=0a2929c6& */ "./src/options/views/tab-settings/vm-css.vue?vue&type=template&id=0a2929c6&");
/* harmony import */ var _vm_css_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vm-css.vue?vue&type=script&lang=js& */ "./src/options/views/tab-settings/vm-css.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vm_css_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vm_css_vue_vue_type_template_id_0a2929c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vm_css_vue_vue_type_template_id_0a2929c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/tab-settings/vm-css.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/tab-settings/vm-css.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-css.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_css_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-css.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-css.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_css_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/tab-settings/vm-css.vue?vue&type=template&id=0a2929c6&":
/*!**********************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-css.vue?vue&type=template&id=0a2929c6& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_css_vue_vue_type_template_id_0a2929c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-css.vue?vue&type=template&id=0a2929c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-css.vue?vue&type=template&id=0a2929c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_css_vue_vue_type_template_id_0a2929c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_css_vue_vue_type_template_id_0a2929c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/tab-settings/vm-editor.vue":
/*!******************************************************!*\
  !*** ./src/options/views/tab-settings/vm-editor.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vm_editor_vue_vue_type_template_id_00b9a2fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-editor.vue?vue&type=template&id=00b9a2fa& */ "./src/options/views/tab-settings/vm-editor.vue?vue&type=template&id=00b9a2fa&");
/* harmony import */ var _vm_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vm-editor.vue?vue&type=script&lang=js& */ "./src/options/views/tab-settings/vm-editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vm_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vm-editor.vue?vue&type=style&index=0&lang=css& */ "./src/options/views/tab-settings/vm-editor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vm_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vm_editor_vue_vue_type_template_id_00b9a2fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vm_editor_vue_vue_type_template_id_00b9a2fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/tab-settings/vm-editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/tab-settings/vm-editor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-editor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-editor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/tab-settings/vm-editor.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-editor.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-editor.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-editor.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/views/tab-settings/vm-editor.vue?vue&type=template&id=00b9a2fa&":
/*!*************************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-editor.vue?vue&type=template&id=00b9a2fa& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_editor_vue_vue_type_template_id_00b9a2fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-editor.vue?vue&type=template&id=00b9a2fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-editor.vue?vue&type=template&id=00b9a2fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_editor_vue_vue_type_template_id_00b9a2fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_editor_vue_vue_type_template_id_00b9a2fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/tab-settings/vm-export.vue":
/*!******************************************************!*\
  !*** ./src/options/views/tab-settings/vm-export.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vm_export_vue_vue_type_template_id_69f619c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-export.vue?vue&type=template&id=69f619c1& */ "./src/options/views/tab-settings/vm-export.vue?vue&type=template&id=69f619c1&");
/* harmony import */ var _vm_export_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vm-export.vue?vue&type=script&lang=js& */ "./src/options/views/tab-settings/vm-export.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vm_export_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vm-export.vue?vue&type=style&index=0&lang=css& */ "./src/options/views/tab-settings/vm-export.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vm_export_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vm_export_vue_vue_type_template_id_69f619c1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vm_export_vue_vue_type_template_id_69f619c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/tab-settings/vm-export.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/tab-settings/vm-export.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-export.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-export.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-export.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/tab-settings/vm-export.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-export.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-export.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-export.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/views/tab-settings/vm-export.vue?vue&type=template&id=69f619c1&":
/*!*************************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-export.vue?vue&type=template&id=69f619c1& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_template_id_69f619c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-export.vue?vue&type=template&id=69f619c1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-export.vue?vue&type=template&id=69f619c1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_template_id_69f619c1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_export_vue_vue_type_template_id_69f619c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/tab-settings/vm-import.vue":
/*!******************************************************!*\
  !*** ./src/options/views/tab-settings/vm-import.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vm_import_vue_vue_type_template_id_47a9cd9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-import.vue?vue&type=template&id=47a9cd9c& */ "./src/options/views/tab-settings/vm-import.vue?vue&type=template&id=47a9cd9c&");
/* harmony import */ var _vm_import_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vm-import.vue?vue&type=script&lang=js& */ "./src/options/views/tab-settings/vm-import.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vm_import_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vm-import.vue?vue&type=style&index=0&lang=css& */ "./src/options/views/tab-settings/vm-import.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vm_import_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vm_import_vue_vue_type_template_id_47a9cd9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vm_import_vue_vue_type_template_id_47a9cd9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/tab-settings/vm-import.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/tab-settings/vm-import.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-import.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_import_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-import.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-import.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_import_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/tab-settings/vm-import.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-import.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_import_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-import.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-import.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_import_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_import_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_import_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_import_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_import_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/views/tab-settings/vm-import.vue?vue&type=template&id=47a9cd9c&":
/*!*************************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-import.vue?vue&type=template&id=47a9cd9c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_import_vue_vue_type_template_id_47a9cd9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-import.vue?vue&type=template&id=47a9cd9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-import.vue?vue&type=template&id=47a9cd9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_import_vue_vue_type_template_id_47a9cd9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_import_vue_vue_type_template_id_47a9cd9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/tab-settings/vm-sync.vue":
/*!****************************************************!*\
  !*** ./src/options/views/tab-settings/vm-sync.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vm_sync_vue_vue_type_template_id_1e93a330___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-sync.vue?vue&type=template&id=1e93a330& */ "./src/options/views/tab-settings/vm-sync.vue?vue&type=template&id=1e93a330&");
/* harmony import */ var _vm_sync_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vm-sync.vue?vue&type=script&lang=js& */ "./src/options/views/tab-settings/vm-sync.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vm_sync_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vm-sync.vue?vue&type=style&index=0&lang=css& */ "./src/options/views/tab-settings/vm-sync.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vm_sync_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vm_sync_vue_vue_type_template_id_1e93a330___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vm_sync_vue_vue_type_template_id_1e93a330___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/tab-settings/vm-sync.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/tab-settings/vm-sync.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-sync.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_sync_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-sync.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-sync.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_sync_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/tab-settings/vm-sync.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-sync.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_sync_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-2-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--3-oneOf-2-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-sync.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-sync.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_sync_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_sync_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_sync_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_sync_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_sync_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/options/views/tab-settings/vm-sync.vue?vue&type=template&id=1e93a330&":
/*!***********************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-sync.vue?vue&type=template&id=1e93a330& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_sync_vue_vue_type_template_id_1e93a330___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-sync.vue?vue&type=template&id=1e93a330& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-sync.vue?vue&type=template&id=1e93a330&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_sync_vue_vue_type_template_id_1e93a330___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_sync_vue_vue_type_template_id_1e93a330___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/options/views/tab-settings/vm-template.vue":
/*!********************************************************!*\
  !*** ./src/options/views/tab-settings/vm-template.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vm_template_vue_vue_type_template_id_06971372___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vm-template.vue?vue&type=template&id=06971372& */ "./src/options/views/tab-settings/vm-template.vue?vue&type=template&id=06971372&");
/* harmony import */ var _vm_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vm-template.vue?vue&type=script&lang=js& */ "./src/options/views/tab-settings/vm-template.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vm_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vm_template_vue_vue_type_template_id_06971372___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vm_template_vue_vue_type_template_id_06971372___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/options/views/tab-settings/vm-template.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/options/views/tab-settings/vm-template.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-template.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-template.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-template.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/options/views/tab-settings/vm-template.vue?vue&type=template&id=06971372&":
/*!***************************************************************************************!*\
  !*** ./src/options/views/tab-settings/vm-template.vue?vue&type=template&id=06971372& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_template_vue_vue_type_template_id_06971372___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./vm-template.vue?vue&type=template&id=06971372& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/options/views/tab-settings/vm-template.vue?vue&type=template&id=06971372&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_template_vue_vue_type_template_id_06971372___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vm_template_vue_vue_type_template_id_06971372___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });}