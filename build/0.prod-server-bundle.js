exports.ids = [0];
exports.modules = {

/***/ "./data recursive ^\\.\\/.*\\/bio\\.md$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./link/bio.md": "./data/link/bio.md",
	"./zelda/bio.md": "./data/zelda/bio.md"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
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
module.exports = webpackContext;
webpackContext.id = "./data recursive ^\\.\\/.*\\/bio\\.md$";

/***/ }),

/***/ "./data recursive ^\\.\\/.*\\/siteConfig\\.js$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./link/siteConfig.js": "./data/link/siteConfig.js",
	"./zelda/siteConfig.js": "./data/zelda/siteConfig.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
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
module.exports = webpackContext;
webpackContext.id = "./data recursive ^\\.\\/.*\\/siteConfig\\.js$";

/***/ }),

/***/ "./data/link/bio.md":
/***/ (function(module, exports) {

module.exports = {"title":"About Link","author":"Link","__content":"<h1 id=\"long-ago-in-the-kingdom-of-hyrule\">Long Ago in the Kingdom of Hyrule</h1>\n<p>Our Hero wakes up. He is alone. He must find his sword.</p>\n"}

/***/ }),

/***/ "./data/link/siteConfig.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  aboutImage: "link.jpg"
};

/***/ }),

/***/ "./data/zelda/bio.md":
/***/ (function(module, exports) {

module.exports = {"title":"About Zelda","author":"Zelda","__content":"<h1 id=\"how-did-you-get-past-the-guards-\">How did you get past the guards?</h1>\n<p>Zelda wakes in a dark dungeon. Link has found her.</p>\n"}

/***/ }),

/***/ "./data/zelda/siteConfig.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  aboutImage: "zelda.png",
  aboutText: "Hello from Zelda"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"minimize\":true}!./src/css/About.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".profile{display:flex;align-items:center;justify-content:center;height:100vh;flex-flow:column}.profile>img{border-radius:100%;border:5px;width:300px;box-shadow:0 0 20px #000}h1{font-size:5em;font-family:sans-serif;color:#fff;text-shadow:0 0 20px #000;text-align:left}", ""]);

// exports


/***/ }),

/***/ "./src/components/About.js":
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

__webpack_require__("./src/css/About.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var siteConfig = __webpack_require__("./data recursive ^\\.\\/.*\\/siteConfig\\.js$")("./" + props.site + "/siteConfig.js");
  var imagePath = __webpack_require__("./src/images recursive ^\\.\\/.*$")("./" + siteConfig.aboutImage);
  var MarkdownData = __webpack_require__("./data recursive ^\\.\\/.*\\/bio\\.md$")("./" + props.site + "/bio.md");
  (0, _universalImport3.default)({
    id: "../css//theme.css",
    file: "/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/About.js",
    load: function load() {
      return Promise.all([__webpack_require__("./src/css lazy recursive ^\\.\\/.*\\/theme\\.css$")("./" + props.site + "/theme.css"), (0, _importCss3.default)("css/" + props.site + "-theme.css", {})]).then(function (proms) {
        return proms[0];
      });
    },
    path: function path() {
      return _path3.default.join(__dirname, "../css/" + props.site + "/theme.css");
    },
    resolve: function resolve() {
      return /*require.resolve*/(__webpack_require__("./src/css weak recursive ^\\.\\/.*\\/theme\\.css$").resolve("./" + props.site + "/theme.css"));
    },
    chunkName: function chunkName() {
      return "css/" + props.site + "-theme.css";
    }
  });

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
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
    )
  );
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ "./src/css lazy recursive ^\\.\\/.*\\/theme\\.css$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./link/theme.css": [
		"./src/css/link/theme.css",
		5
	],
	"./zelda/theme.css": [
		"./src/css/zelda/theme.css",
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/css lazy recursive ^\\.\\/.*\\/theme\\.css$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/css weak recursive ^\\.\\/.*\\/theme\\.css$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./link/theme.css": "./src/css/link/theme.css",
	"./zelda/theme.css": "./src/css/zelda/theme.css"
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
webpackContext.id = "./src/css weak recursive ^\\.\\/.*\\/theme\\.css$";
module.exports = webpackContext;

/***/ }),

/***/ "./src/css/About.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"minimize\":true}!./src/css/About.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-2!./About.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-2!./About.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/images recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./link.jpg": "./src/images/link.jpg",
	"./zelda.png": "./src/images/zelda.png"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
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
module.exports = webpackContext;
webpackContext.id = "./src/images recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/images/link.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/link.jpg";

/***/ }),

/***/ "./src/images/zelda.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/zelda.png";

/***/ })

};;