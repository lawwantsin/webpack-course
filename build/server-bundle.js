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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/webpack.dev.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _stringify = __webpack_require__("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = __webpack_require__("path");
var webpack = __webpack_require__("webpack");
var HTMLWebpackPlugin = __webpack_require__("html-webpack-plugin");
var BundleAnalyzerPlugin = __webpack_require__("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    vendor: ["react", "lodash", "react-dom"],
    main: ["react-hot-loader/patch", "babel-runtime/regenerator", "webpack-hot-middleware/client?reload=true", "./src/main.js"]
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    stats: {
      colors: true
    }
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader"
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      }, { loader: "css-loader" }]
    }, {
      test: /\.jpg$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]"
        }
      }]
    }, {
      test: /\.html$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }, { loader: "extract-loader" }, {
        loader: "html-loader",
        options: {
          attrs: ["img:src"]
        }
      }]
    }, {
      test: /\.md$/,
      use: [{
        loader: "markdown-with-front-matter-loader"
      }]
    }]
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin({
    name: "vendor"
  }), new BundleAnalyzerPlugin({
    generateStatsFile: true,
    analyzerMode: "disabled"
  }), new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: (0, _stringify2.default)("development"),
      WEBPACK: true
    }
  }), new webpack.HotModuleReplacementPlugin(), // Enable HMR
  new webpack.NamedModulesPlugin(), new HTMLWebpackPlugin({
    template: "./src/index.ejs",
    inject: true,
    title: "Link's Journal"
  })]
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BundleAnalyzerPlugin, "BundleAnalyzerPlugin", "/Users/lawrencewhiteside/Web/courses/webpack-course/config/webpack.dev.js");
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ "./data/post.md":
/***/ (function(module, exports) {

module.exports = {"title":"The Journey Begins","author":"Link","__content":"<h1 id=\"long-ago-in-the-kingdom-of-hyrule\">Long Ago in the Kingdom of Hyrule</h1>\n<p>Our Hero wakes up.</p>\n"}

/***/ }),

/***/ "./src/components/AppRoot.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkdownData = __webpack_require__("./data/post.md");
var imagePath = __webpack_require__("./src/images/link.jpg");

var _default = function (_React$Component) {
  (0, _inherits3.default)(_default, _React$Component);

  function _default(props) {
    (0, _classCallCheck3.default)(this, _default);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || (0, _getPrototypeOf2.default)(_default)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "profile" },
        _react2.default.createElement("img", { src: imagePath }),
        _react2.default.createElement(
          "h1",
          { id: "title" },
          MarkdownData.title
        ),
        _react2.default.createElement("div", {
          className: "content",
          dangerouslySetInnerHTML: { __html: MarkdownData.__content }
        })
      );
    }
  }]);
  return _default;
}(_react2.default.Component);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/AppRoot.js");
}();

;

/***/ }),

/***/ "./src/images/link.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/link.jpg";

/***/ }),

/***/ "./src/server/express.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _express = __webpack_require__("express");

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__("path");

var _path2 = _interopRequireDefault(_path);

var _server = __webpack_require__("react-dom/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

var expressStaticGzip = __webpack_require__("express-static-gzip");


var isProd = "production" === "production";
var isDev = !isProd;
if (isDev) {
  var webpack = __webpack_require__("webpack");
  var config = __webpack_require__("./config/webpack.dev.js");
  var compiler = webpack(config);
  __webpack_require__("webpack-mild-compile")(compiler);

  var webpackDevMiddleware = __webpack_require__("webpack-dev-middleware")(compiler, config.devServer);

  var webpackHotMiddlware = __webpack_require__("webpack-hot-middleware")(compiler, config.devServer);

  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddlware);
  console.log("Dev enabled");
} else {
  var AppRoot = __webpack_require__("./src/components/AppRoot.js").default;
  server.use(expressStaticGzip("dist", {
    enableBrotli: true
  }));
  server.use("*", function (req, res) {
    res.send("\n      <html>\n        <head>\n          <link href=\"/main.css\" rel=\"stylesheet\" />\n        </head>\n        <body>\n          <div id=\"react-root\">\n            " + (0, _server.renderToString)(_react2.default.createElement(AppRoot, null)) + "\n          </div>\n          <script src='vendor-bundle.js'></script>\n          <script src='main-bundle.js'></script>\n        </body>\n      </html>\n    ");
  });
}

var PORT = 8080;
server.listen(PORT, function () {
  console.log("Server listening on http://localhost:" + PORT);
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(server, "server", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/server/express.js");

  __REACT_HOT_LOADER__.register(isProd, "isProd", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/server/express.js");

  __REACT_HOT_LOADER__.register(isDev, "isDev", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/server/express.js");

  __REACT_HOT_LOADER__.register(PORT, "PORT", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/server/express.js");
}();

;

/***/ }),

/***/ "./src/server/main.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("babel-core/register");
__webpack_require__("./src/server/express.js");
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/server/main.js");


/***/ }),

/***/ "babel-core/register":
/***/ (function(module, exports) {

module.exports = require("babel-core/register");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-static-gzip":
/***/ (function(module, exports) {

module.exports = require("express-static-gzip");

/***/ }),

/***/ "html-webpack-plugin":
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

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

/***/ "webpack":
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-bundle-analyzer":
/***/ (function(module, exports) {

module.exports = require("webpack-bundle-analyzer");

/***/ }),

/***/ "webpack-dev-middleware":
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "webpack-mild-compile":
/***/ (function(module, exports) {

module.exports = require("webpack-mild-compile");

/***/ })

/******/ });