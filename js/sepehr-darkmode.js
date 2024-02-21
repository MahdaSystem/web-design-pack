/*
  Sepehr-Darkmode v0.1 | github.com/qwerty13
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("darkmode-js", [], factory);
	else if(typeof exports === 'object')
		exports["darkmode-js"] = factory();
	else
		root["darkmode-js"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /**/ (function(modules) { // webpackBootstrap
/**/ 	var installedModules = {};
/**/
/**/ 	function __webpack_require__(moduleId) {
/**/
/**/ 		if(installedModules[moduleId]) {
/**/ 			return installedModules[moduleId].exports;
/**/ 		}
/**/ 		var module = installedModules[moduleId] = {
/**/ 			i: moduleId,
/**/ 			l: false,
/**/ 			exports: {}
/**/ 		};
/**/
/**/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/**/ 		module.l = true;
/**/
/**/ 		return module.exports;
/**/ 	}
/**/
/**/ 	__webpack_require__.m = modules;
/**/ 	__webpack_require__.c = installedModules;
/**/ 	__webpack_require__.d = function(exports, name, getter) {
/**/ 		if(!__webpack_require__.o(exports, name)) {
/**/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/**/ 		}
/**/ 	};
/**/ 	__webpack_require__.r = function(exports) {
/**/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/**/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/**/ 		}
/**/ 		Object.defineProperty(exports, '__esModule', { value: true });
/**/ 	};
/**/
/**/ 	__webpack_require__.t = function(value, mode) {
/**/ 		if(mode & 1) value = __webpack_require__(value);
/**/ 		if(mode & 8) return value;
/**/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/**/ 		var ns = Object.create(null);
/**/ 		__webpack_require__.r(ns);
/**/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/**/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/**/ 		return ns;
/**/ 	};
/**/
/**/ 	__webpack_require__.n = function(module) {
/**/ 		var getter = module && module.__esModule ?
/**/ 			function getDefault() { return module['default']; } :
/**/ 			function getModuleExports() { return module; };
/**/ 		__webpack_require__.d(getter, 'a', getter);
/**/ 		return getter;
/**/ 	};
/**/
/**/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/**/
/**/ 	__webpack_require__.p = "";
/**/
/**/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/**/ })
/******/
/**/ ({

/***/ "./src/darkmode.js":
/*!*************************!*\
  !*** ./src/darkmode.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IS_BROWSER = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IS_BROWSER = typeof window !== 'undefined';
exports.IS_BROWSER = IS_BROWSER;

var Darkmode =
/*#__PURE__*/
function () {
  function Darkmode(options) {
    _classCallCheck(this, Darkmode);

    if (!IS_BROWSER) {
      return;
    }

    var defaultOptions = {
      saveInCookies: true,
      autoMatchOsTheme: true
    };
    options = Object.assign({}, defaultOptions, options);
    var darkmodeActivated = window.localStorage.getItem('darkmode') === 'true';
    var preferedThemeOs = options.autoMatchOsTheme && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var darkmodeNeverActivatedByAction = window.localStorage.getItem('darkmode') === null;

    if (darkmodeActivated === true && options.saveInCookies || darkmodeNeverActivatedByAction && preferedThemeOs) {
      document.body.classList.add('darkmode--activated');
    }

    this.saveInCookies = options.saveInCookies;
    this.time = options.time;
  }

  _createClass(Darkmode, [{
    key: "addStyle",
    value: function addStyle(css) {
      var linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('type', 'text/css');
      linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
      document.head.appendChild(linkElement);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!IS_BROWSER) {
        return;
      }

      var isDarkmode = this.isActivated();
      document.body.classList.toggle('darkmode--activated');
      window.localStorage.setItem('darkmode', !isDarkmode);
    }
  }, {
    key: "isActivated",
    value: function isActivated() {
      if (!IS_BROWSER) {
        return null;
      }

      return document.body.classList.contains('darkmode--activated');
    }
  }]);

  return Darkmode;
}();

exports.default = Darkmode;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _darkmode = _interopRequireWildcard(__webpack_require__(/*! ./darkmode */ "./src/darkmode.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = _darkmode.default;
/* eslint-disable */

exports.default = _default;

if (_darkmode.IS_BROWSER) {
  (function (window) {
    window.Darkmode = _darkmode.default;
  })(window);
}
/* eslint-enable */


module.exports = exports["default"];

/***/ })

/******/ });
});