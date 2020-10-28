/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/node */ \"./src/js/utils/node.js\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst app = new _utils_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('app'));\napp.html(`\n  <div class=\"row\">\n    <div class=\"col-auto\">\n      <button class=\"btn btn-primary\">Get started</button>\n    </div>\n  </div>\n`);\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/utils/node.js":
/*!******************************!*\
  !*** ./src/js/utils/node.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* -------------------------------------------------------------------------- */\n/*                                    Node                                    */\n/* -------------------------------------------------------------------------- */\n\nclass Node {\n  constructor(node) {\n    this.node = node;\n  }\n\n  addClass(className) {\n    this.isValidNode() && this.node.classList.add(className);\n  }\n\n  removeClass(className) {\n    this.isValidNode() && this.node.classList.remove(className);\n  }\n\n  toggleClass(className) {\n    this.isValidNode() && this.node.classList.toggle(className);\n  }\n\n  hasClass(className) {\n    this.isValidNode() && this.node.classList.contains(className);\n  }\n\n  data(key) {\n    if (this.isValidNode()) {\n      try {\n        return JSON.parse(this.node.dataset[this.camelize(key)]);\n      } catch (e) {\n        return this.node.dataset[this.camelize(key)];\n      }\n    }\n    return null;\n  }\n\n  attr(name) {\n    return this.isValidNode() && this.node[name];\n  }\n\n  setAttribute(name, value) {\n    this.isValidNode() && this.node.setAttribute(name, value);\n  }\n\n  removeAttribute(name) {\n    this.isValidNode() && this.node.removeAttribute(name);\n  }\n\n  setProp(name, value) {\n    this.isValidNode() && (this.node[name] = value);\n  }\n\n  html(html) {\n    this.isValidNode() && (this.node.innerHTML = html);\n  }\n\n  on(event, cb) {\n    this.isValidNode() && this.node.addEventListener(event, cb);\n  }\n\n  isValidNode() {\n    return !!this.node;\n  }\n\n  static camelize(str) {\n    const text = str.replace(/[-_\\s.]+(.)?/g, (_, c) =>\n      c ? c.toUpperCase() : ''\n    );\n    return `${text.substr(0, 1).toLowerCase()}${text.substr(1)}`;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Node);\n\n\n//# sourceURL=webpack:///./src/js/utils/node.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ })

/******/ });