module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/render.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/post.md":
/***/ (function(module, exports) {

module.exports = {"title":"Our first Post","author":"Link","__content":"<h1 id=\"long-ago-in-the-kingdom-of-hyrule\">Long Ago in the Kingdom of Hyrule</h1>\n<p>Our Hero wakes up. He is alone. He must find his sword.</p>\n"}

/***/ }),

/***/ "./src/components/About.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkdownData = __webpack_require__("./data/post.md");
var imagePath = __webpack_require__("./src/images/link.jpg");

exports.default = function () {
  return _react2.default.createElement(
    "div",
    { className: "profile" },
    _react2.default.createElement("img", { src: imagePath }),
    _react2.default.createElement(
      "h1",
      null,
      MarkdownData.title
    ),
    _react2.default.createElement("div", {
      className: "content",
      dangerouslySetInnerHTML: { __html: MarkdownData.__content }
    })
  );
};

/***/ }),

/***/ "./src/components/Article.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "Article"
    )
  );
};

/***/ }),

/***/ "./src/components/Gallery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "Gallery"
    )
  );
};

/***/ }),

/***/ "./src/components/Routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("react-router-dom");

var _Gallery = __webpack_require__("./src/components/Gallery.js");

var _Gallery2 = _interopRequireDefault(_Gallery);

var _About = __webpack_require__("./src/components/About.js");

var _About2 = _interopRequireDefault(_About);

var _Article = __webpack_require__("./src/components/Article.js");

var _Article2 = _interopRequireDefault(_Article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { className: "nav" },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/" },
        "Gallery"
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/about" },
        "About"
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/article" },
        "Article"
      )
    ),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _Gallery2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: "/about", component: _About2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: "/article", component: _Article2.default })
  );
};

/***/ }),

/***/ "./src/images/link.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/link.jpg";

/***/ }),

/***/ "./src/server/render.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__("react-dom/server");

var _reactRouter = __webpack_require__("react-router");

var _Routes = __webpack_require__("./src/components/Routes.js");

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return function (req, res) {
    res.send("\n    <html>\n      <head>\n        <link href=\"/main.css\" rel=\"stylesheet\" />\n      </head>\n      <body>\n        <div id=\"react-root\">" + (0, _server.renderToString)(_react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: req.url, context: {} },
      _react2.default.createElement(_Routes2.default, null)
    )) + "</div>\n        <script src='vendor-bundle.js'></script>\n        <script src='main-bundle.js'></script>\n      </body>\n    </html>\n  ");
  };
};

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });