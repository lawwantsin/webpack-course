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

var path = __webpack_require__("path");
var webpack = __webpack_require__("webpack");
var HTMLWebpackPlugin = __webpack_require__("html-webpack-plugin");

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
  }), new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development"),
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkdownData = __webpack_require__("./data/post.md");
var imagePath = __webpack_require__("./src/images/link.jpg");

var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "profile" },
        _react2.default.createElement("img", { src: imagePath }),
        _react2.default.createElement(
          "h2",
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

/***/ "./src/server/main.js":
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


var isProd = "development" === "production";
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
  console.log("Middleware enabled");
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

  __REACT_HOT_LOADER__.register(server, "server", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/server/main.js");

  __REACT_HOT_LOADER__.register(isProd, "isProd", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/server/main.js");

  __REACT_HOT_LOADER__.register(isDev, "isDev", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/server/main.js");

  __REACT_HOT_LOADER__.register(PORT, "PORT", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/server/main.js");
}();

;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/server/main.js");


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