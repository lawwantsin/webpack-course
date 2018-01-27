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

/***/ "./src/components lazy recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./About": [
		"./src/components/About.js",
		0
	],
	"./About.js": [
		"./src/components/About.js",
		0
	],
	"./AppRoot": [
		"./src/components/AppRoot.js",
		0
	],
	"./AppRoot.js": [
		"./src/components/AppRoot.js",
		0
	],
	"./Article": [
		"./src/components/Article.js",
		0
	],
	"./Article.js": [
		"./src/components/Article.js",
		0
	],
	"./Gallery": [
		"./src/components/Gallery.js",
		0
	],
	"./Gallery.js": [
		"./src/components/Gallery.js",
		0
	],
	"./Routes": [
		"./src/components/Routes.js"
	],
	"./Routes.js": [
		"./src/components/Routes.js"
	],
	"./nav.css": [
		"./src/components/nav.css"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/components lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/components weak recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./About": "./src/components/About.js",
	"./About.js": "./src/components/About.js",
	"./AppRoot": "./src/components/AppRoot.js",
	"./AppRoot.js": "./src/components/AppRoot.js",
	"./Article": "./src/components/Article.js",
	"./Article.js": "./src/components/Article.js",
	"./Gallery": "./src/components/Gallery.js",
	"./Gallery.js": "./src/components/Gallery.js",
	"./Routes": "./src/components/Routes.js",
	"./Routes.js": "./src/components/Routes.js",
	"./nav.css": "./src/components/nav.css"
};
function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!__webpack_require__.m[id])
		throw new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
	return __webpack_require__(id);
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = "./src/components weak recursive ^\\.\\/.*$";
module.exports = webpackContext;

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

/***/ "./src/components/AppRoot.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("react-router-dom");

var _Routes = __webpack_require__("./src/components/Routes.js");

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(_Routes2.default, null)
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

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
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__("path");

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__("babel-plugin-universal-import/importCss");

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__("babel-plugin-universal-import/universalImport");

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getBundle = function getBundle() {
  (0, _universalImport3.default)({
    id: "lodash",
    file: "/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Gallery.js",
    load: function load() {
      return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "lodash")), (0, _importCss3.default)("lodash", {})]).then(function (proms) {
        return proms[0];
      });
    },
    path: function path() {
      return _path3.default.join(__dirname, "lodash");
    },
    resolve: function resolve() {
      return /*require.resolve*/("lodash");
    },
    chunkName: function chunkName() {
      return "lodash";
    }
  }).then(function (_) {
    console.log("imported", _);
  });
};

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      { onClick: getBundle },
      "Gallery"
    )
  );
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ "./src/components/Routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__("path");

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__("babel-plugin-universal-import/importCss");

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__("babel-plugin-universal-import/universalImport");

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("react-router-dom");

var _reactUniversalComponent = __webpack_require__("react-universal-component");

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactRouter = __webpack_require__("react-router");

__webpack_require__("./src/components/nav.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UniversalComponent = (0, _reactUniversalComponent2.default)(function (props) {
  return (0, _universalImport3.default)({
    id: "./",
    file: "/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Routes.js",
    load: function load() {
      return Promise.all([__webpack_require__("./src/components lazy recursive ^\\.\\/.*$")("./" + props.page), (0, _importCss3.default)("" + props.page, {})]).then(function (proms) {
        return proms[0];
      });
    },
    path: function path() {
      return _path3.default.join(__dirname, "./" + props.page);
    },
    resolve: function resolve() {
      return /*require.resolve*/(__webpack_require__("./src/components weak recursive ^\\.\\/.*$").resolve("./" + props.page));
    },
    chunkName: function chunkName() {
      return "" + props.page;
    }
  });
});

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
    _react2.default.createElement(
      _reactRouter.Switch,
      null,
      _react2.default.createElement(
        _reactRouterDom.Route,
        { exact: true, path: "/" },
        _react2.default.createElement(UniversalComponent, { page: "Gallery" })
      ),
      _react2.default.createElement(
        _reactRouterDom.Route,
        { path: "about" },
        _react2.default.createElement(UniversalComponent, { page: "About" })
      ),
      _react2.default.createElement(
        _reactRouterDom.Route,
        { path: "article" },
        _react2.default.createElement(UniversalComponent, { page: "Article" })
      )
    )
  );
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ "./src/components/nav.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
      { location: req.originalUrl, context: {} },
      _react2.default.createElement(_Routes2.default, null)
    )) + "</div>\n        <script src='vendor-bundle.js'></script>\n        <script src='main-bundle.js'></script>\n      </body>\n    </html>\n  ");
  };
};

/***/ }),

/***/ "babel-plugin-universal-import/importCss":
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),

/***/ "babel-plugin-universal-import/universalImport":
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require("path");

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

/***/ }),

/***/ "react-universal-component":
/***/ (function(module, exports) {

module.exports = require("react-universal-component");

/***/ })

/******/ });