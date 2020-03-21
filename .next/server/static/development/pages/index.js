module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: Index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tictactoe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tictactoe */ "./pages/tictactoe.js");





var _jsxFileName = "/Users/mwldeveloper/Repos/tic-tac-toe/pages/index.js";


var Index =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _PureComponent);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tictactoe__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/tictactoe.js":
/*!****************************!*\
  !*** ./pages/tictactoe.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TicTacToe; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! timers */ "timers");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/mwldeveloper/Repos/tic-tac-toe/pages/tictactoe.js";




var TicTacToe =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TicTacToe, _PureComponent);

  function TicTacToe(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TicTacToe);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TicTacToe).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "endGame", function () {
      document.getElementById('u1').innerHTML = '';
      document.getElementById('u2').innerHTML = '';
      document.getElementById('u3').innerHTML = '';
      document.getElementById('m1').innerHTML = '';
      document.getElementById('m2').innerHTML = '';
      document.getElementById('m3').innerHTML = '';
      document.getElementById('l1').innerHTML = '';
      document.getElementById('l2').innerHTML = '';
      document.getElementById('l3').innerHTML = '';

      _this.setState({
        tictoc: true,
        msg: 'none',
        player: 'block',
        mainbox: 'none',
        p1: '',
        p2: '',
        won: false,
        dev: false,
        finalmsg: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setKey", function (e) {
      var id = e.target.id;
      var cls = e.target.className;
      var val;

      if (_this.state.won == false) {
        if (document.getElementById(id).innerHTML === '') {
          _this.setState({
            tictoc: !_this.state.tictoc
          });

          if (_this.state.tictoc == true) {
            val = 'X';

            _this.playAudio('x');
          } else {
            val = 'O';

            _this.playAudio('o');
          }

          (document.getElementById(id).innerHTML = val) && (document.getElementById(id).style.textShadow = val == 'X' ? '6px 6px 21px #d2d282' : '6px 6px 21px #92bae2');
          Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
            _this.callWinner(cls);
          }, 500);
        }
      }

      console.log(document.getElementById(id).innerHTML);
      console.log(val);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "callWinner", function (cls) {
      var div = document.getElementById;
      var u1 = document.getElementById('u1').innerHTML;
      var u2 = document.getElementById('u2').innerHTML;
      var u3 = document.getElementById('u3').innerHTML;
      var m1 = document.getElementById('m1').innerHTML;
      var m2 = document.getElementById('m2').innerHTML;
      var m3 = document.getElementById('m3').innerHTML;
      var l1 = document.getElementById('l1').innerHTML;
      var l2 = document.getElementById('l2').innerHTML;
      var l3 = document.getElementById('l3').innerHTML;

      if (_this.state.won == false) {
        if (u1 != '' && u2 != '' && u3 != '') {
          if (u1 === u2 && u1 == u3) {
            document.getElementById('u1').className = cls + ' spinner';
            document.getElementById('u2').className = cls + ' spinner';
            document.getElementById('u3').className = cls + ' spinner';

            if (u1 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (m1 != '' && m2 != '' && m3 != '') {
          if (m1 == m2 && m1 == m3) {
            document.getElementById('m1').className = cls + ' spinner';
            document.getElementById('m2').className = cls + ' spinner';
            document.getElementById('m3').className = cls + ' spinner';

            if (m1 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (l1 != '' && l2 != '' && l3 != '') {
          if (l1 == l2 && l1 == l3) {
            document.getElementById('l1').className = cls + ' spinner';
            document.getElementById('l2').className = cls + ' spinner';
            document.getElementById('l3').className = cls + ' spinner';

            if (l1 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (u1 != '' && m1 != '' && l1 != '') {
          if (u1 == l1 && u1 == m1) {
            document.getElementById('u1').className = cls + ' spinner';
            document.getElementById('l1').className = cls + ' spinner';
            document.getElementById('m1').className = cls + ' spinner';

            if (u1 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (u2 != '' && m2 != '' && l2 != '') {
          if (u2 == m2 && u2 == l2) {
            document.getElementById('u2').className = cls + ' spinner';
            document.getElementById('m2').className = cls + ' spinner';
            document.getElementById('l2').className = cls + ' spinner';

            if (u2 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (u3 != '' && l3 != '' && m3 != '') {
          if (u3 == m3 && u3 == l3) {
            document.getElementById('u3').className = cls + ' spinner';
            document.getElementById('m3').className = cls + ' spinner';
            document.getElementById('l3').className = cls + ' spinner';

            if (u3 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (u1 != '' && m2 != '' && l3 != '') {
          if (u1 == m2 && u1 == l3) {
            document.getElementById('u1').className = cls + ' spinner';
            document.getElementById('m2').className = cls + ' spinner';
            document.getElementById('l3').className = cls + ' spinner';

            if (u1 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (u3 != '' && m2 != '' && l1 != '') {
          if (u3 == m2 && u3 == l1) {
            document.getElementById('u3').className = cls + ' spinner';
            document.getElementById('m2').className = cls + ' spinner';
            document.getElementById('l1').className = cls + ' spinner';

            if (u3 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (u1 != '' && u2 != '' && u3 != '' && m1 != '' && m2 != '' && m3 != '' && l1 != '' && l2 != '' && l3 != '') {
          document.getElementById('u1').className = cls + ' text-flicker-out-glow';
          document.getElementById('u2').className = cls + ' text-flicker-out-glow';
          document.getElementById('u3').className = cls + ' text-flicker-out-glow';
          document.getElementById('l1').className = cls + ' text-flicker-out-glow';
          document.getElementById('l2').className = cls + ' text-flicker-out-glow';
          document.getElementById('l3').className = cls + ' text-flicker-out-glow';
          document.getElementById('m1').className = cls + ' text-flicker-out-glow';
          document.getElementById('m2').className = cls + ' text-flicker-out-glow';
          document.getElementById('m3').className = cls + ' text-flicker-out-glow';

          _this.setState({
            won: false,
            finalmsg: 'g'
          }, function () {
            _this.playAudio('gover');

            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              return _this.endGame();
            }, 4000);
          });
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "p1nm", function (e) {
      var val = e.target.value.trim();

      _this.setState({
        p1: val
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "p2nm", function (e) {
      var val = e.target.value.trim();

      _this.setState({
        p2: val
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "startGame", function () {
      _this.setState({
        player: 'none',
        mainbox: 'block'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMusic", function () {
      _this.setState({
        music: !_this.state.music
      }, function () {
        if (_this.state.music) {
          _this.start.play();
        } else if (!_this.state.music) {
          _this.start.pause();
        }
      });
    });

    _this.state = {
      tictoc: true,
      msg: 'block',
      mainbox: 'none',
      player: 'none',
      finalmsg: '',
      p1: '',
      p2: '',
      won: false,
      music: false,
      audio: true
    };

    _this.playAudio = function (val) {
      if (_this.state.audio) {
        switch (val) {
          case 'x':
            _this.x.play();

            break;

          case 'o':
            _this.o.play();

            break;

          case 'win':
            _this.win.play();

            break;

          case 'gover':
            _this.gover.play();

            break;

          default:
            console.log('no sound');
            break;
        }
      }
    };

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TicTacToe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
        _this2.setState({
          msg: 'none',
          player: 'block'
        });
      }, 2000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.won == true) {
        this.playAudio('win');
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "main",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'body',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, this.state.music == true && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        title: "Turn Off Music",
        onClick: this.handleMusic,
        src: "data:image/png;base64,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",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'onMusic',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }), this.state.music == false && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        title: "Turn On Music",
        onClick: this.handleMusic,
        src: "data:image/png;base64,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",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'offMusic',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }), this.state.audio == true && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        onClick: function onClick() {
          return _this3.setState({
            audio: false
          });
        },
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9ZqRq5OS9IqXUWphKGZHWxesl8-bZeImID4Oju-EK5YzfmzX&s",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'onSound',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }), this.state.audio == false && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        onClick: function onClick() {
          return _this3.setState({
            audio: true
          });
        },
        src: "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/mute-icon-18-256.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'offSound',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'msg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "Welcome to Tic-Toc-Toe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'footerDev',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, "Developed By Rohit Ninawe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(x) {
          _this3.x = x;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/SOUND14.WAV",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(o) {
          _this3.o = o;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Sound2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(win) {
          _this3.win = win;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Drumroll-2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(gover) {
          _this3.gover = gover;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/SOUND42.WAV",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        loop: true,
        ref: function ref(start) {
          _this3.start = start;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Theme-Introshort.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'mainBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'gameDisplay',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plHeading',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, "Player 1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, "Player 2")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plName',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginLeft: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, " ", this.state.p1, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginRight: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, " ", this.state.p2, " "))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'finalMsg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, this.state.won == true ? this.state.finalmsg == 'x' ? this.state.p1 == '' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, "Player 1 won") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, this.state.p1 + ' won') : this.state.finalmsg == 'o' ? this.state.p2 == '' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, "Player 2 won") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, " ", this.state.p2 + ' won', " ") : null : this.state.finalmsg == 'g' && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, "Game Over")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'lu sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u2",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ru sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u3",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m1",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'm sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m2",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m3",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'll sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l1",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l2",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rl sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l3",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerDetails',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerNames',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 1",
        value: this.state.p1,
        onChange: this.p1nm,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 2",
        value: this.state.p2,
        onChange: this.p2nm,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtnDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.startGame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["760289659", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        },
        __self: this
      }, "ENTER"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "760289659",
        dynamic: [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player],
        __self: this
      }, ".ply1.__jsx-style-dynamic-selector{width:41%;font-size:1.6em;height:70px;border-radius:40px;font-weight:700;padding-left:40px;outline:none;font-family:cursive;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:50px;right:40px;height:40px;cursor:pointer;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:100px;right:40px;height:40px;cursor:pointer;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:100px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:35px;right:20px;height:70px;cursor:pointer;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:98px;right:26px;height:43px;cursor:pointer;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:medium;}.music.__jsx-style-dynamic-selector{color:white;}.gameDisplay.__jsx-style-dynamic-selector{height:100px;}span.__jsx-style-dynamic-selector{color:white;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1.6em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1em;}.playerDetails.__jsx-style-dynamic-selector{display:".concat(this.state.player, ";}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px;}.playerNames.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.text-flicker-out-glow.__jsx-style-dynamic-selector{-webkit-animation:text-flicker-out-glow 0.2s linear 20 both;-webkit-animation:text-flicker-out-glow-__jsx-style-dynamic-selector 0.2s linear 20 both;animation:text-flicker-out-glow-__jsx-style-dynamic-selector 0.2s linear 20 both;}.body.__jsx-style-dynamic-selector{background-color:black;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.XOSpan.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.enterBtn.__jsx-style-dynamic-selector{height:50px;background-color:aqua;border-radius:8px;outline:none;width:175px;padding:4px;font-size:1.1em;font-family:cursive;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:500px;height:200px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:3em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:2em;}.mainBox.__jsx-style-dynamic-selector{display:").concat(this.state.mainbox, ";}.box.__jsx-style-dynamic-selector{height:400px;width:450px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.spinner.__jsx-style-dynamic-selector{-webkit-animation-name:spinner-__jsx-style-dynamic-selector;animation-name:spinner-__jsx-style-dynamic-selector;-webkit-animation-duration:1500ms;animation-duration:1500ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.lu.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 1px 1px 0px;}.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:4em;}.ru.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 0px 1px 1px;}.m.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px;}.ll.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 1px 0px 0px;}.rl.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 0px 0px 1px;}.rowBox.__jsx-style-dynamic-selector{height:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:7em;}@-webkit-keyframes text-flicker-out-glow{0%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}14.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}15%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}24.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}25%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}39.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}40%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}44.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}45%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}69.4%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}69.5%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}79.4%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}79.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}89.8%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}89.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:none;}90%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}100%.__jsx-style-dynamic-selector{opacity:0;}}@-webkit-keyframes text-flicker-out-glow-__jsx-style-dynamic-selector{0%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%{opacity:0;text-shadow:none;}14.9%{opacity:0;text-shadow:none;}15%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%{opacity:0;text-shadow:none;}24.9%{opacity:0;text-shadow:none;}25%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%{opacity:0;text-shadow:none;}39.9%{opacity:0;text-shadow:none;}40%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%{opacity:0;text-shadow:none;}44.9%{opacity:0;text-shadow:none;}45%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%{opacity:0;text-shadow:none;}69.4%{opacity:0;text-shadow:none;}69.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%{opacity:0;text-shadow:none;}79.4%{opacity:0;text-shadow:none;}79.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%{opacity:0;text-shadow:none;}89.8%{opacity:0;text-shadow:none;}89.9%{opacity:1;text-shadow:none;}90%{opacity:0;text-shadow:none;}100%{opacity:0;}}@keyframes text-flicker-out-glow-__jsx-style-dynamic-selector{0%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%{opacity:0;text-shadow:none;}14.9%{opacity:0;text-shadow:none;}15%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%{opacity:0;text-shadow:none;}24.9%{opacity:0;text-shadow:none;}25%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%{opacity:0;text-shadow:none;}39.9%{opacity:0;text-shadow:none;}40%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%{opacity:0;text-shadow:none;}44.9%{opacity:0;text-shadow:none;}45%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%{opacity:0;text-shadow:none;}69.4%{opacity:0;text-shadow:none;}69.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%{opacity:0;text-shadow:none;}79.4%{opacity:0;text-shadow:none;}79.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%{opacity:0;text-shadow:none;}89.8%{opacity:0;text-shadow:none;}89.9%{opacity:1;text-shadow:none;}90%{opacity:0;text-shadow:none;}100%{opacity:0;}}@-webkit-keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@-webkit-keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media screen and (max-width:479px){.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:1.5em;margin-bottom:100px;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:x-small;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:29px;cursor:pointer;right:28px;height:25px;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:27px;height:25px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:15px;cursor:pointer;right:13px;height:47px;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:23px;height:29px;}.playerDetails.__jsx-style-dynamic-selector{display:").concat(this.state.player, ";width:280px;height:180px;}.ply1.__jsx-style-dynamic-selector{width:35%;font-size:0.75em;height:40px;border-radius:40px;font-weight:700;padding-left:30px;outline:none;font-family:cursive;}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90px;}.enterBtn.__jsx-style-dynamic-selector{height:30px;background-color:aqua;border-radius:8px;outline:none;width:100px;padding:4px;font-size:0.75em;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{height:80px;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:70px;font-size:medium;}.box.__jsx-style-dynamic-selector{height:280px;width:280px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:600;font-size:1.2em;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:250px;height:100px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:75px;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:1.2em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:0.8em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:500;font-size:1em;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9td2xkZXZlbG9wZXIvUmVwb3MvdGljLXRhYy10b2UvcGFnZXMvdGljdGFjdG9lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1mVyxBQUcyQixBQVVRLEFBT0EsQUFPTCxBQU1LLEFBT0EsQUFPQSxBQUtOLEFBR0MsQUFHRCxBQUdDLEFBT0EsQUFPd0IsQUFHeEIsQUFNRixBQUtpRCxBQVFyQyxBQVFWLEFBZ0JELEFBVUMsQUFRRCxBQUlBLEFBSXlCLEFBR3hCLEFBWVUsQUFNSixBQUtrQixBQUtsQixBQUtBLEFBS0EsQUFLQSxBQUtMLEFBSUQsQUFTRCxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUtBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBTW9GLEFBTWxFLEFBTUEsQUFNSCxBQUtrRSxBQU1oRSxBQUdFLEFBS0wsQUFHRSxBQU1TLEFBT25CLEFBTUEsQUFRQSxBQVFBLEFBUUEsQUFPbUIsQUFLM0IsQUFVRyxBQU1ELEFBV0EsQUFJQyxBQVFBLEFBYUEsQUFRQSxBQVNELEFBSUEsQUFLQyxBQU9BLFVBOW5CRyxBQWdONkksQUFJQSxBQUkxSSxBQUlBLEFBSXlJLEFBSUEsQUFJekksQUFJQSxBQUlzRyxBQUlBLEFBSXRHLEFBSUEsQUFJa0UsQUFJQSxBQUlsRSxBQUlBLEFBSWtFLEFBSUEsQUFJQSxBQUlsRSxBQUlBLEFBSWtFLEFBSUEsQUFJbEUsQUFJQSxBQUk4QixBQUk5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QTBHcEIsQUF3YkEsU0F6aEI0QixNQVI1QixJQStEQSxVQVJtQyxBQThiQyxNQXJIbEMsQ0F2WHFCLFVBZ1dyQixVQVlBLEVBM1dvQixBQXFXcEIsSUFZQSxpQkFoWGdCLFNBdUJsQixBQXNlcUIsZUFoZHFCLEFBOGJDLElBbUIzQyxvQ0FoZEEsQUE4YkEscUJBM2VBIiwiZmlsZSI6Ii9Vc2Vycy9td2xkZXZlbG9wZXIvUmVwb3MvdGljLXRhYy10b2UvcGFnZXMvdGljdGFjdG9lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tICd0aW1lcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY1RhY1RvZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpY3RvYzogdHJ1ZSxcbiAgICAgIG1zZzogJ2Jsb2NrJyxcbiAgICAgIG1haW5ib3g6ICdub25lJyxcbiAgICAgIHBsYXllcjogJ25vbmUnLFxuICAgICAgZmluYWxtc2c6ICcnLFxuICAgICAgcDE6ICcnLFxuICAgICAgcDI6ICcnLFxuICAgICAgd29uOiBmYWxzZSxcbiAgICAgIG11c2ljOiBmYWxzZSxcbiAgICAgIGF1ZGlvOiB0cnVlXG4gICAgfVxuICAgIHRoaXMucGxheUF1ZGlvID0gKHZhbCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8pIHtcbiAgICAgICAgc3dpdGNoICh2YWwpIHtcbiAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgIHRoaXMueC5wbGF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdvJzpcbiAgICAgICAgICAgIHRoaXMuby5wbGF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd3aW4nOlxuICAgICAgICAgICAgdGhpcy53aW4ucGxheSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZ292ZXInOlxuICAgICAgICAgICAgdGhpcy5nb3Zlci5wbGF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHNvdW5kJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbXNnOiAnbm9uZScsXG4gICAgICAgIHBsYXllcjogJ2Jsb2NrJyxcbiAgICAgIH0pXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIGVuZEdhbWUgPSAoKSA9PiB7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5pbm5lckhUTUwgPSAnJztcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGljdG9jOiB0cnVlLFxuICAgICAgbXNnOiAnbm9uZScsXG4gICAgICBwbGF5ZXI6ICdibG9jaycsXG4gICAgICBtYWluYm94OiAnbm9uZScsXG4gICAgICBwMTogJycsXG4gICAgICBwMjogJycsXG4gICAgICB3b246IGZhbHNlLFxuICAgICAgZGV2OiBmYWxzZSxcbiAgICAgIGZpbmFsbXNnOiAnJyxcbiAgICB9KVxuICB9XG5cbiAgc2V0S2V5ID0gKGUpID0+IHtcbiAgICB2YXIgaWQgPSBlLnRhcmdldC5pZDtcbiAgICB2YXIgY2xzID0gZS50YXJnZXQuY2xhc3NOYW1lO1xuICAgIHZhciB2YWw7XG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGljdG9jOiAhdGhpcy5zdGF0ZS50aWN0b2NcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGljdG9jID09IHRydWUpIHtcbiAgICAgICAgICB2YWwgPSAnWCdcbiAgICAgICAgICB0aGlzLnBsYXlBdWRpbygneCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFsID0gJ08nXG4gICAgICAgICAgdGhpcy5wbGF5QXVkaW8oJ28nKVxuICAgICAgICB9XG4gICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9IHZhbCkgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gKHZhbCA9PSAnWCcgPyAnNnB4IDZweCAyMXB4ICNkMmQyODInIDogJzZweCA2cHggMjFweCAjOTJiYWUyJykpKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhbGxXaW5uZXIoY2xzKVxuICAgICAgICB9LCA1MDBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MKVxuICAgIGNvbnNvbGUubG9nKHZhbClcbiAgfVxuXG4gIGNhbGxXaW5uZXIgPSAoY2xzKSA9PiB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkXG4gICAgdmFyIHUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuaW5uZXJIVE1MO1xuICAgIHZhciB1MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmlubmVySFRNTDtcbiAgICB2YXIgdTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5pbm5lckhUTUw7XG4gICAgdmFyIG0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuaW5uZXJIVE1MO1xuICAgIHZhciBtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmlubmVySFRNTDtcbiAgICB2YXIgbTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5pbm5lckhUTUw7XG4gICAgdmFyIGwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuaW5uZXJIVE1MO1xuICAgIHZhciBsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmlubmVySFRNTDtcbiAgICB2YXIgbDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5pbm5lckhUTUw7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgodTEgIT0gJycpICYmICh1MiAhPSAnJykgJiYgKHUzICE9ICcnKSkge1xuICAgICAgICBpZiAoKHUxID09PSB1MikgJiYgKHUxID09IHUzKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAodTEgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKChtMSAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobTMgIT0gJycpKSB7XG4gICAgICAgIGlmICgobTEgPT0gbTIpICYmIChtMSA9PSBtMykpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKG0xID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKGwxICE9ICcnKSAmJiAobDIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcbiAgICAgICAgaWYgKChsMSA9PSBsMikgJiYgKGwxID09IGwzKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAobDEgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKG0xICE9ICcnKSAmJiAobDEgIT0gJycpKSB7XG4gICAgICAgIGlmICgodTEgPT0gbDEpICYmICh1MSA9PSBtMSkpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKHUxID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgodTIgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKGwyICE9ICcnKSkge1xuICAgICAgICBpZiAoKHUyID09IG0yKSAmJiAodTIgPT0gbDIpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmICh1MiA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKHUzICE9ICcnKSAmJiAobDMgIT0gJycpICYmIChtMyAhPSAnJykpIHtcbiAgICAgICAgaWYgKCh1MyA9PSBtMykgJiYgKHUzID09IGwzKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAodTMgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgodTEgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKGwzICE9ICcnKSkge1xuICAgICAgICBpZiAoKHUxID09IG0yKSAmJiAodTEgPT0gbDMpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmICh1MSA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MyAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobDEgIT0gJycpKSB7XG4gICAgICAgIGlmICgodTMgPT0gbTIpICYmICh1MyA9PSBsMSkpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKHUzID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgodTEgIT0gJycpICYmICh1MiAhPSAnJykgJiYgKHUzICE9ICcnKSAmJiAobTEgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKG0zICE9ICcnKSAmJiAobDEgIT0gJycpICYmIChsMiAhPSAnJykgJiYgKGwzICE9ICcnKSkge1xuXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgd29uOiBmYWxzZSxcbiAgICAgICAgICBmaW5hbG1zZzogJ2cnXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsYXlBdWRpbygnZ292ZXInKVxuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMClcbiAgICAgICAgfSlcblxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcDFubSA9IChlKSA9PiB7XG4gICAgdmFyIHZhbCA9IChlLnRhcmdldC52YWx1ZSkudHJpbSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcDE6IHZhbFxuICAgIH0pXG4gIH1cblxuICBwMm5tID0gKGUpID0+IHtcbiAgICB2YXIgdmFsID0gKGUudGFyZ2V0LnZhbHVlKS50cmltKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwMjogdmFsXG4gICAgfSlcbiAgfVxuXG4gIHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBsYXllcjogJ25vbmUnLFxuICAgICAgbWFpbmJveDogJ2Jsb2NrJyxcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlTXVzaWMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtdXNpYzogIXRoaXMuc3RhdGUubXVzaWNcbiAgICB9LCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5tdXNpYykge1xuICAgICAgICB0aGlzLnN0YXJ0LnBsYXkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLnN0YXRlLm11c2ljKSB7XG4gICAgICAgIHRoaXMuc3RhcnQucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IHRydWUpIHtcbiAgICAgIHRoaXMucGxheUF1ZGlvKCd3aW4nKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD0nbWFpbicgY2xhc3NOYW1lPSdib2R5Jz5cbiAgICAgICAge3RoaXMuc3RhdGUubXVzaWMgPT0gdHJ1ZSAmJlxuICAgICAgICAgIDxpbWcgdGl0bGU9J1R1cm4gT2ZmIE11c2ljJyBjbGFzc05hbWU9J29uTXVzaWMnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTXVzaWN9IHNyYz0nZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQWVGQk1WRVVBQUFELy8vL0J3Y0ZxYW1vek16Tzd1N3NyS3lzaUlpSTlQVDAyTmpiTHk4dkV4TVMxdGJYVDA5UDQrUGp3OFBCZFhWM2EydHBFUkVSOGZId1hGeGVIaDRmajQrUHE2dXF1cnE1eGNYRkxTMHRZV0ZoalkyTlJVVkVORFEzaTR1S1NrcEtob2FFZkh4K0ppWW1Sa1pHY25KeC9mMzhURXhOOUpKZmVBQUFJSVVsRVFWUjRuTzJkMlhhcVNoQkFJN01nalVDWVJVREYvUDhmM21pU2s1aEc3YUY2SUpmOW1yVU92US9ZWTNYVnk4dk0yYnUxbWFaWmxsWmJ6OTJyYmcwNFRsMlZ4ZW9meGRBY1ZEY0prdlh1dU1sWHQwUmxxN3BaVUhqcEVCU3JDZUpLZGRNZzhJNTJHRTNwWFY5anFycDV2SGdudjBQMzlLNkt0ZW9tOHVEMVlmUlE3MEtvdXBXc3VNM3d1Mk81dzZpNnFReTRkYldaN0ZnbTZSTFY3YVhFMm1XYnA1L21UOUNzWHFKWGpRYjUyL3NrbU0zQTc1M0xrRnJ2bmJoUjNYSWl2S01SM3gzMUhoT2RWVGYrT1U0ZkYxUy92VnMwL3lIdWs1SGwwL3pKb05yaFBvZjFyaVFjOWVabzZEUnAyZkhydlZQcXVGSjB6TjRHZUh1NkdqcFZPYjBZWWpWOFUyMTBnNU51bUVhOVI0YXZxcVcrY1ZLallCejE1bURvWkNISG9LZTU0ZDZwdVVlOSsyeFVUMHdQZFRYQURBdjNERjJWZW02VGxiRklQYldHN3E2M0gyK3p6TnZRTFAxY3ZKNHF3NzI1NmVDSEJYME1UWnRuTVVTTjdjaVVlMTFYdmtRNTJZWldrL2t5WDU1c3cvYWtRaytlNFhZUVBleXBOVnlMbmJXb042eGlOZCtuTk1OQnBaOEVRMWY2OENEWnNGYld3MGd5YkpRTENqWnNROVYrcTVWaENSUmNCNnIxVm1JTjN6YXE3UzZJTkV4VnkxMFJhT2lxZHZ0QW9LSDZidlNLT01PemFyVlBoQmxhbXJ4Q2NZYWoydG5vTjZJTUhRM0crZzlFR1o2bDdhVTlRNURobTYxYTdCK0NETGNLRi9XL0VHUjRVdTMxalJqRFE2bmE2eHN4aHE0V2MrNFBGc1BGY0RHVUJZcTZPSjQ4a1B3TGhsSHVqODAxNGlLWjJEYVp2V0VlbHVrUEIzdzZQRy9EemhqTTJ5UGVMZmFoenRjUXhXVzJ4VTZ3WDdFdDlwa2FvbkEwNjZsUW9QMGd4OUFSdTdRSVQ2MXpKNlp5UDg3Zk1FNGZCVmZzKzFrYm9zSS9QNHRTdzFZMTh6R01ZdnRNME5qalRBMEwvMmJVZTBBMlI4UElHS3MxNmFPeGJWcnREU1BqdUtOcDQ4d01JNk5LS0E4NHNlTWdqUTBqWThjUTNqc1hRNVJ2ZG15UG5vVmhFVzkyek5kQTlEZk1nOUxraWE2djlEYk03ZDdrREozUTJURGZaQTEvWklpMmhsRlpKU0RoeW5vYUludDdnTHBocHA4aDZtQnprT2hsaUlxNDNBSS9XaWZEM0IrNHhvVnBURjBNQzN2Y0Nia0lvWWRoWVovRTZMMUlNN1NNKzNxUmNXNEZCa1JLTXJ3ZmxCaW1hN0gzQVJVYnh0QTlKNDVTUTFSS3VHU2wwaENOTW03R0t6UkV2WWduWVNnMExFVThDRWVkWVNmcG9xTTZROFp0RjJxVUdXNWszZnRYWmlndGw1RXl3MHpFWTZaWURJRllEQVd5R0FLeEdBcmtmemdlaXJsaGlSdEt5K2k3R0FMeDl3MDlMSDV1TVFSak1RUmlNUlRJWWdnRWJpaXRUTUZpQ01SaUtKREZFSWpGVUNDTElSQ0xvVUQraDRaaThwY3VoZ0paRElINCs0WUpkaDMzN3h1YUloNHp4V0lJaEhERHZldXN2YVJ1MzZrOXozSmYvNFZiL1FWRHF6WFQwZjVSNkFOMVFYbXF0c2sxNkhIdWhvYzJIWTNwRWpRb0xJL2IxNWtidGlmN2NVcml6azZ4TzZUek1keW5Ca0VsaFFoN3dYTXhQUFNzaGRmbVliZy9zVmRwa1dTSWVBTDMzSXdudloyWVNqcVFob2NkWDRKQzdRM2JralBGcEJoRExJczNxK0ZieXAwa1ZHOURaK0JQTUttMW9RTlJFa05uUXhla2tKZkdoanVZRktqNkdsWkFPVjdGMUQva045eFhVTFhteE5Td2JIOG5hSTFvcjNTWm1sZnBiSCszajlhd2hjdVZyYWVoQzVoSldrOUR5SFJ2V2hwaU94Ri96ZEFDelFVdXBxWno4N3VycHpKOGNFMWFIOFBmYjRIR0VHcW8xOWJRQVM1T281OGhkRVorTHNNa0hmejRuZTZMT0RnbGx6L3NmcTk2eUExZDZIUjl6SWJXT1poZXZPVzlnMmVDSlRjMG9Xc2ZqeXgyVGpzK3JBd1FZdStoYUFqLzZiY0JXSkRCMEcxTzlITXFZa044cDFXMm9aTnVXRDRqWWtQUTZjeVZuc3J2Y08vSDl3eFNRenhKTGkvb1NDTllCYXc5T2FtaEMxNnBMYUtJTUU5czlwR0sxSEFOWHA0bUo5OWRPUEU4bk5Td0JqUDd3aWZON2JybUt4eVRFMllzMndGNWZVT1lqc005YzI3TmtocGl1Y2g0S2NnQ2VUemUweEZpUS9CaWJTRlI3R1hEMzhHUkdtSzVxamxCUk9QOUZtRGZpOVFRaXpQZ3BDRHBaN0QxT2dzZG9TRjAyVXVTaFVVQ1VnTXZyc2tNZ1NkdGlPRE1vb1laZ2trTmdjZkQvdmtUc1UwelJrZ05QZENxaWZuekJ5WlFtK3VraGc1a0ZXK0M0NkExMkw0ZXFTSG8ybUo0K2l0OGhhdTBHU1praHBCZGplODlmeHJjUkovWUVHNk5uejhQdzRLc0JrdHMrQUwxbVpLc2ZBZWdaMTBJbjM4eG53RFZteWVacm5rZ1QvcUU0RGNCK3g5THNtZ0NQUjhKaUd1TTRERUFMSkFJdGdEUCtZWW0wYytSdndjbld2YkNicTdUWEpIYjg1NEFvNEVrd01TRDNWeW5DbU8xK0VhTTRrZ1VJOVREbHRVdXFkSWpjKzI0eFlUVlB5RG5oeXZxMEt1YS9Rc0tDSDhQVUd1S0wyZ1BEMWc3VlBMOTN4Tnc3ZmVlMHZBbE1SaGFFTm5rZ3hKdy9VSkVuNURPR21pL1ZPUlRiT0FmZ0k4UElwYnJoeFZkSTRLTS9BWENuK0xGcElkck42eFA1TDFCa05MNHdSODFHNHgzNHV1ZXlERXFxVXF6WFVpQmo0Q1l6dEt2T09tenp3bjVsVVVmMkpYQmRxVWQwMGY2aFh1TTBYUjdFQ3BzeG1zT0FKUGZuOWc4Z2hlczFJNjd2SWdpOUVFVUZYa1hiekxpZFRVR1ZzeVRpd2drVy9uQmE4dzBPL1h2SE5PcThmZ0MxR0hqa2dJSVFXQkErMUxFOVNzVVJNTjM0bnNMOTY5UUJHdklwWVhBc2prY0FLN3dwZVZJcGdOdUFleUxMUTNFekJacWZaanIyTTFjMkFQOUVCbVdUYktBbWJlaFFWTHRGUVlja00vVUZwSVBIUWlJaVp1djUwRHhCZjlMaklYYy9JT0RlMXMvVm0zd2xKTExEeG15cWdPeHczVzFJOUs0Ri8ybVp0K1B5cy82djhFTERhdGlvT3RNQm9OdFZ4RWQ5UjRsYm1DNW8wTngzcXNGbEJ1TEtKU1dtUTJNaE9JS1FoUktxeWNEU2tyb21OdXBqRHFjSW5EVHpkTTVYQlNNc2tvY0N1R3c3Uis5eU56dXpabjFMeE5ZYlRxRUU2dkd3dWlyZWtiRHcwUDJCOGZibmJNZm1MWGxhcjZDK01GLzhKeXlCUmI1aXpvQUFBQUFTVVZPUks1Q1lJST0nIC8+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMuc3RhdGUubXVzaWMgPT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIHRpdGxlPSdUdXJuIE9uIE11c2ljJyBjbGFzc05hbWU9J29mZk11c2ljJyBvbkNsaWNrPXt0aGlzLmhhbmRsZU11c2ljfSBzcmM9J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT0VBQUFEaENBTUFBQUFKYlNKSUFBQUFoRkJNVkVVQUFBRC8vLy90N2UyUGo0L3M3T3lNakl6dzhQRDE5ZldlbnA3NysvdEtTa3FKaVltenM3T1hsNWZNek14cWFtcm01dWJiMjlzSUNBaDRlSGpQejgvR3hzWWhJU0ZrWkdTcnE2dWpvNk1tSmlhRWhJUndjSEJGUlVXL3Y3KzN0N2M2T2pvWEZ4Y3ZMeTlUVTFOY1hGd2pJeU1URXhNMk5qWjhmSHhBUUVCU1VsSkpTVWxyemovaUFBQUg4MGxFUVZSNG5PMmQ2M3JxdUE2R0NhRWNDb0dra0hJczBKYTJ0TDMvKzl0ZEpWWVNJdHRTc0p2TWZ2VCttcGxsWituRGlTMUxzcWZURVFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkI4TXZtTk44T0ovdnBJa25pN21EUWplTmtrZTRQNjNEKyt0aTBiYmZ4Y2dvblNUd0tqUFNTUTNqNkR3cjl1dHNuRm1rbCttbjAzYlROZEdhcmhLR3R3THhweXlsOHJXdXErOGRIMDlaYnVaLzA2OHNMZ203VDl0dlk5WWhLUmlQOEN6MDByY0RHd0NRcVdheWk3ZkxyOC9qeTl0enBQTHcvYmo2L1QvTm9YWnlQMnY0WjN1UFM0djF3L21udXFkcTJmY2tZVnRRbHE3TkYyeS9MckhuUHU0azNVcDVENDlXUzJsSDlOSHVmMXJtZ0lHOHhmbU4wbkdhOXh0NU1jOE1KM3MwdHM2ZWFvYjY4Mk9VTzlhNmwzSTZQNnFmeFlaVkxGcG1kZDlvVzc5L0wyWHdjclZlVEgxYXJhRHhmZmova2MzRHJKeHJselJ3cmYvSnhDbGZUUk9mdHhISDJEMVBUMDllRGQ3b3BVYkJoR2svaFRhMS94Zjk0bksvVEhuV0hzVFk4ZmNoeDZjSWdHSGhZV21kcW5ybjg2OE5ydEkrTmdpb1lKcWpmYjd6L1FMTWsvTmZZZzhRb3MzUDFzKzg5SDVqaWZ0RlBwZGtrMWlWSkRDK05COC9PcEdXa21aM3BsTFB2TGZLaWV6UTRTMzJDSGFGcTdGeGluVkVyTWRJOU9jcmIyRWN4ekJ2M0hVdThWV0F3c0F1MGoySlllaUx4dzZYeFlaY3c2aTNTdy9wdWV6N3Zsc3ZkZVR1T0p0TkNsQ29oQ0xTTllsaHU3SFFVbDRHQk9GM1BYeldmMmVNa2E0VDdRdEgxczB5TFJuamRtRHI5VWhqajJucnBjR2RaZlE5WlUzUm5VUkZvR3NXN2F1TSt3MCt3c0tvTzNENjhwL1JVay9BSytUTkVvSDRVRVlFL0VwMTVOMm54c2IxOStFcnVxU2JoRVBrelZLRm11a0VGT2xTbzdPeW4wWW4zZlN0L0ZYVnBLbC9XNVJkRVdtb0V1dnNRdTlraitUM1Y3aEFQUStFU3F5OHFMdEJsZURKN3BHNVIwL091ck5FRTJtaWpxQkhvY0NwOXJ2MmpiWlE1TTAwRHlpaHFYdEVhUXJROFpRK04yVDNCVlRqcFd0aEgwZjhJZGpxNzdLbkdYU3dLUkZuMVd3dWJSSHd0ZGpxQ25jNDJleXcvSUFnQkxNUGlhWmFJQzNTZEExRUwxNFRkVTQxKzhHUm9aSkw0SnlPWXV6U1lZMkpHalg1Z3pJL3FweHRjb1B1bzFqNTdjc1R1Q2JhYk04QzZVZFM4b2s0bm1WOVUyRm9mU3JTYWJva0g0eEx4QUo2UFBLVEtXWEREM1FYWFU3dGFaT0JMQWo2eUhsQnVLVDhEQ0VFWWF5SUhIMFZrWEdzcHNLSGVsaDI3NXpvZ2Q2V05vcWZRdVFwRzZGd3ZQYUNRTVB3VWliNXFBZW9yaEszem1kRFlMdEZiOGtQOUJlU3NLQUFLU1pPVUpsamlmUVR6TGRBTkNtbExxVm1pdi9RVnBBQnZVR2hLekJRd3ZhZ2U4M012OVJYQ1RFTXRwdEdQb3M4RTVGSDlKVGZNcGVSdGlXNFV2V1pZMVFhNGhrSlk4ZW5aOFQydTBMMHZXdUMrdmtMdzJqUlIvU3FOakNFbzVQczBFZGRBL1ZUanMvQVBGUEw5MGp6ZlIydHZXaTQ4amlJbzVPOHR3R0p0L2hCdi9zY1NRU0YvZnpnSDh5aVo5OFo4R2xESTMrTkRKQ29nRlBrMTU1ZUNRcUpqZ25VbEZIMDF1TGNBTS9tUktIQVc3UE53ay90RFdQSDUwVVJ3K05EMFdoRnFHTVBMS0g2cXAvTWp3ckF0Q1libWh2UTRqUStKa0h4Z0Z5WVdxc1BONDY5SnZ2eVZSRWdna1YydkhEQnlZV3JWZEx6MFdUMmFuM3ZLUzQxTXZ3NDM1dTErRlBNZmxZMEtKcHVpZ0RYeUZxNUhVVVdpYXNRcUQyQ1Z0a2tiY2s5S0ljMjVMSkVmWXRDMWFFWCtFQ1pFZnAzVkdXdzY0ZzNha1FPRzZZSmZ2cExYaStIYjU1Yms4ZUUwaVNuUGlmTUdGcUV4NGJiVVlzQ0V5QSsyNVhXYjJNYWtOZlUwVVBURjN3SkRzUkVXVDJ4UFRaUXFvYlM2endqd2hsZGRQcnl1RFI4WnozVnRNT1h6TjRqNXIxTjFhbHBVbXdoTGttMXo4YjVicDhuZ2gxNnlIMTQrV25nVGtibVBWVitLdk5MdTZrc2gybUlzR2ZvWVh0ZTd4K3Rqdm4zR29tMnRxUkVHS3czdTh4SS81TDNJRjBUTVhXaExuVGNrbjdSUnp5L0NJWGIwc0hwYmF2WGhzWm8vMStRYXl1Q3hxTUxwVy92NjV1KzhCZXhqMFUvN2hYWk1YeE14YjhlWkdaaENNTGNOUCtWZFJiZVlxbk5QSkV2VXVTZlhSN3ZBcVVFS2Y1NHdOUmphV0ZRYnpxNFpTaXJleVVlOTlHbmdGcHcvaEJMRDZqZ3NUS0pLR0dKUmE4N0VHSTA4bkNHRjlFTWxKamczYVNwVEkxTG5pNmZ0WkJyM0I0TjRrYTUzdjNNV0xJZ1Y5NWx4MjBtTlNKMFhkdW5WaDlVOW5QSTR4cldWakNHc0UrVnh6M1AxZ05NL2VuTzFCNzZlRUtab2V3Mk5TQ3FENnpOWnlSSFl2TUlaWmQ0dno5TkhlNGNDbEp0UWZES3htL2hEK2RUYXpONmhRSTBvajB1STYxcDV5ZWRNTkhXS1ZWeENYYmpMRVRQZUdQSUxqaHh5c050M29leDZmZG83RktDZnkzVFB6bTVleGxVY2c2V3dHVzBYVFBkNGxibGE4am4zMHpYcHRWVnZ1ZEp5NVpqUTArOTE2bzNjd2JucjRtcHZ6ZWpaakxaZldEUGkxVEU3K3ZCYmlqRzhRbHZyTTY2bmZPcm1nbitHMkNHc2kwdXVVMGpVS0EzcGZnSmZzRzYwckZSKzJRb0tMOVRJV2ptRXZsWUVXQ3lDTXA4MmZCMGRhd3lSMU1YWjJxbnBheTlaM3lGV3ZmWFVOWGJwTmIxdG9zWGtGZmo3WmxvMG1sd21NcllHOHlvYzhXZG80aDgvTTVPN08yUnVnQ0hRRURDN3F6cXA3R3NrZmNGNFRZMG1QNTRuY0t2dUtKbWNuVitxVmh0NnVJV1NIOW9jbno1ODNHeDRFNFFnMjRWR3QrazNRYnpKdXZVWFZ1dlprRFpRTGNvODhLRjhpbTFKUE5Sa1kvWkxnanEzMDdTTjFDeVFmeVNvZmN3TUxuaHliTm82TjR3MUc2bWs0WUM4UzNiVmQzVXdhWFIvN29IWkt2OGZHdlNudy84M2VZcmoxK2wwcjcwWlZ4QUVRUkFFUVJBRVFSQUVRUkFFUVJBRVFSQUVRUkFFUVJBRVFmZzcvZ2R2RFZaOXQ5c21CQUFBQUFCSlJVNUVya0pnZ2c9PScgLz5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5hdWRpbyA9PSB0cnVlICYmXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J29uU291bmQnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhdWRpbzogZmFsc2UgfSl9IHNyYz0naHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjU1Y5WnFScTVPUzlJcVhVV3BoS0daSFd4ZXNsOC1iWmVJbUlENE9qdS1FSzVZemZtelgmcycgLz5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5hdWRpbyA9PSBmYWxzZSAmJlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvZmZTb3VuZCcgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGF1ZGlvOiB0cnVlIH0pfSBzcmM9J2h0dHBzOi8vaWNvbnNwbGFjZS5jb20vd3AtY29udGVudC91cGxvYWRzL19pY29ucy9mZmZmZmYvMjU2L3BuZy9tdXRlLWljb24tMTgtMjU2LnBuZycgLz5cbiAgICAgICAgfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21zZyc+V2VsY29tZSB0byBUaWMtVG9jLVRvZTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb290ZXJEZXYnPkRldmVsb3BlZCBCeSBSb2hpdCBOaW5hd2U8L3NwYW4+XG4gICAgICAgIDxhdWRpbyByZWY9eyh4KSA9PiB7IHRoaXMueCA9IHg7IH19PlxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiaHR0cDovL3Nwcm90dC5waHlzaWNzLndpc2MuZWR1L3dvcC9zb3VuZHMvU09VTkQxNC5XQVZcIiB0eXBlPVwiYXVkaW8vd2F2XCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gcmVmPXsobykgPT4geyB0aGlzLm8gPSBvOyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHA6Ly9zcHJvdHQucGh5c2ljcy53aXNjLmVkdS93b3Avc291bmRzL1NvdW5kMi53YXZcIiB0eXBlPVwiYXVkaW8vd2F2XCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gcmVmPXsod2luKSA9PiB7IHRoaXMud2luID0gd2luOyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHA6Ly9zcHJvdHQucGh5c2ljcy53aXNjLmVkdS93b3Avc291bmRzL0RydW1yb2xsLTIud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cbiAgICAgICAgICA8L3NvdXJjZT5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgPGF1ZGlvIHJlZj17KGdvdmVyKSA9PiB7IHRoaXMuZ292ZXIgPSBnb3ZlcjsgfX0+XG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9TT1VORDQyLldBVlwiIHR5cGU9XCJhdWRpby93YXZcIiA+XG4gICAgICAgICAgPC9zb3VyY2U+XG4gICAgICAgIDwvYXVkaW8+XG4gICAgICAgIDxhdWRpbyBsb29wPXt0cnVlfSByZWY9eyhzdGFydCkgPT4geyB0aGlzLnN0YXJ0ID0gc3RhcnQ7IH19PlxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiaHR0cDovL3Nwcm90dC5waHlzaWNzLndpc2MuZWR1L3dvcC9zb3VuZHMvVGhlbWUtSW50cm9zaG9ydC53YXZcIiB0eXBlPVwiYXVkaW8vd2F2XCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkJveCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbWVEaXNwbGF5Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbEhlYWRpbmcnPlxuICAgICAgICAgICAgICA8c3Bhbj5QbGF5ZXIgMTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+UGxheWVyIDI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbE5hbWUnPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+IHt0aGlzLnN0YXRlLnAxfSA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+IHt0aGlzLnN0YXRlLnAyfSA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYWxNc2cnPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUud29uID09IHRydWUgP1xuICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5maW5hbG1zZyA9PSAneCdcbiAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUucDEgPT0gJycgPyA8c3Bhbj5QbGF5ZXIgMSB3b248L3NwYW4+IDogPHNwYW4+e3RoaXMuc3RhdGUucDEgKyAnIHdvbid9PC9zcGFuPilcbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ28nID9cbiAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnAyID09ICcnID8gPHNwYW4+UGxheWVyIDIgd29uPC9zcGFuPiA6IDxzcGFuPiB7dGhpcy5zdGF0ZS5wMiArICcgd29uJ30gPC9zcGFuPilcbiAgICAgICAgICAgICAgICAgIDogbnVsbCkpXG4gICAgICAgICAgICAgIDogKHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ2cnICYmIDxzcGFuPkdhbWUgT3Zlcjwvc3Bhbj4pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94Jz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0JveCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsdSBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9IGlkPSd1MScgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgc2VwQm94Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfSBpZD0ndTInID48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncnUgc2VwQm94Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfSBpZD0ndTMnID48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dCb3gnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J20xJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbSBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMicgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J20zJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Qm94Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xsIHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2wxJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2wyJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmwgc2VwQm94Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbDMnIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllckRldGFpbHMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXJOYW1lcyc+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdwbHkxJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDEnXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnAxfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wMW5tfVxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMFwiIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3BseTEnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQbGF5ZXIgMidcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucDJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnAybm19XG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwXCIgLz5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbnRlckJ0bkRpdic+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZW50ZXJCdG4nIG9uQ2xpY2s9e3RoaXMuc3RhcnRHYW1lfT5FTlRFUjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgICAucGx5MXtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDElO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub25NdXNpY3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm9uU291bmR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZmluYWxNc2d7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub2ZmTXVzaWN7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMzVweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5vZmZTb3VuZHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA5OHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDNweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZvb3RlckRldntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tdXNpY3tcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7IFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5nYW1lRGlzcGxheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGxIZWFkaW5ne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGxOYW1le1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBsYXllckRldGFpbHN7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLnBsYXllcn07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmVudGVyQnRuRGl2e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbGF5ZXJOYW1lc3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudGV4dC1mbGlja2VyLW91dC1nbG93IHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdGV4dC1mbGlja2VyLW91dC1nbG93IDAuMnMgbGluZWFyIDIwIGJvdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHRleHQtZmxpY2tlci1vdXQtZ2xvdyAwLjJzIGxpbmVhciAyMCBib3RoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltNy5lemdpZi5jb20vdG1wL2V6Z2lmLTctMTMwYmYwYjhjNzY5LmdpZlwiKTtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6ICAgICBjb3ZlcjsgICAgICAgICAgICAgICAgICAgICAgLyogPC0tLS0tLSAqL1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiAgIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuWE9TcGFue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDpub25lOyBcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTsgXG4gICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDpub25lOyBcbiAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6bm9uZTsgXG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6bm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vdGV4dC1zaGFkb3c6IDZweCA2cHggMjFweCAjZDJkMjgyOyAgZm9yIFhcbiAgICAgICAgICAgICAgLy90ZXh0LXNoYWRvdzogNnB4IDZweCAyMXB4ICM5MmJhZTI7ICBmb3IgT1xuXG4gICAgICAgICAgICAgIC5lbnRlckJ0bntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTc1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRldk1zZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuVFlNc2d7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kZXZOYW1le1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWFpbkJveCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLm1haW5ib3h9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJveHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsaXA7XG4gICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uLW5hbWU6IHNwaW47XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3Bpbm5lcntcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc3Bpbm5lcjtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDBtcztcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmx1e1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDBweCAxcHggMXB4IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubXNne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tc2d9O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucnV7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5te1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGx7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDFweCAwcHggMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ybHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDBweCAxcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJvd0JveHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzLjMzJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXBCb3h7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN2VtO1xuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdGV4dC1mbGlja2VyLW91dC1nbG93IHtcbiAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDEzLjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTQlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDIyLjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAyMyUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAyNC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDI1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDM0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0Mi45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQzJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQ0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNTQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1NSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA2OS40JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDY5LjUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNjkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA3MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA3OS40JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDc5LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgODAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgODkuOCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4OS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDkwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQGtleWZyYW1lcyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cge1xuICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTMuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxNCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxNC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDE1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMjIuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDIzJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDI0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMjUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAzNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAzOS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQyLjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDMlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0NSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1NC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDU1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDY5LjQlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNjkuNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA2OS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDc5LjQlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNzkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4OS44JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDg5LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOTAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgQGtleWZyYW1lcyBmbGlwIHtcbiAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxuICAgICAgICAgICAgICAgICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNzBkZWcpO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDgwJSB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDAuOTUsIDAuOTUsIDAuOTUpIHRyYW5zbGF0ZTNkKDAsIDAsIDApXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5tc2d7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLm1zZ307XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5mb290ZXJEZXZ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5vbk11c2lje1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDI5cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLm9uU291bmR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNjFweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAub2ZmTXVzaWN7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0N3B4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm9mZlNvdW5ke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDYxcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjlweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGxheWVyRGV0YWlsc3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGx5MXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmVudGVyQnRuRGl2e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmVudGVyQnRue1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5nYW1lRGlzcGxheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5maW5hbE1zZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbGlwO1xuICAgICAgICAgICAgICAgIC8vICBhbmltYXRpb24tbmFtZTogc3BpbjtcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XG4gICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuZGV2TXNne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLlRZTXNne1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kZXZOYW1le1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAucGxOYW1le1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcEJveHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1ZW07XG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/mwldeveloper/Repos/tic-tac-toe/pages/tictactoe.js */")));
    }
  }]);

  return TicTacToe;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mwldeveloper/Repos/tic-tac-toe/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("timers");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map