exports.ids = [1];
exports.modules = {

/***/ "./data recursive ^\\.\\/.*\\.md$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./link/bio.md": "./data/link/bio.md",
	"./link/post.md": "./data/link/post.md",
	"./link/post2.md": "./data/link/post2.md",
	"./zelda/bio.md": "./data/zelda/bio.md",
	"./zelda/post.md": "./data/zelda/post.md",
	"./zelda/post2.md": "./data/zelda/post2.md"
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
webpackContext.id = "./data recursive ^\\.\\/.*\\.md$";

/***/ }),

/***/ "./data/link/bio.md":
/***/ (function(module, exports) {

module.exports = {"title":"About Link","author":"Link","__content":"<h1 id=\"long-ago-in-the-kingdom-of-hyrule\">Long Ago in the Kingdom of Hyrule</h1>\n<p>Our Hero wakes up. He is alone. He must find his sword.</p>\n"}

/***/ }),

/***/ "./data/link/post.md":
/***/ (function(module, exports) {

module.exports = {"title":"Title","author":"Link","__content":"<h1 id=\"title-of-an-article\">Title of an article</h1>\n<p>My name is Link and I&#39;ll be damned.</p>\n"}

/***/ }),

/***/ "./data/link/post2.md":
/***/ (function(module, exports) {

module.exports = {"title":"Title","author":"Link","__content":"<h1 id=\"post-two\">Post Two</h1>\n<p>My name is Link and I&#39;ll be damned.</p>\n"}

/***/ }),

/***/ "./data/zelda/bio.md":
/***/ (function(module, exports) {

module.exports = {"title":"About Zelda","author":"Zelda","__content":"<h1 id=\"how-did-you-get-past-the-guards-\">How did you get past the guards?</h1>\n<p>Zelda wakes in a dark dungeon. Link has found her.</p>\n"}

/***/ }),

/***/ "./data/zelda/post.md":
/***/ (function(module, exports) {

module.exports = {"title":"Title to an Article","author":"Zelda","__content":"<h1 id=\"this-is-an-article\">This is an article</h1>\n<p>My name is Zelda and I&#39;m in no distress.</p>\n"}

/***/ }),

/***/ "./data/zelda/post2.md":
/***/ (function(module, exports) {

module.exports = {"title":"Title to an Article","author":"Zelda","__content":"<h1 id=\"post-two\">Post Two</h1>\n<p>My name is Zelda and I&#39;m in no distress.</p>\n"}

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"minimize\":true}!./src/css/Article.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/components/Article.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./src/css/Article.css");

var _NotFound = __webpack_require__("./src/components/NotFound.js");

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  try {
    var MarkdownData = __webpack_require__("./data recursive ^\\.\\/.*\\.md$")("./" + props.site + "/" + props.params.slug + ".md");
    return _react2.default.createElement("div", {
      className: "content",
      dangerouslySetInnerHTML: { __html: MarkdownData.__content }
    });
  } catch (error) {
    return _react2.default.createElement(_NotFound2.default, null);
  }
};

/***/ }),

/***/ "./src/css/Article.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"minimize\":true}!./src/css/Article.css");
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
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-2!./Article.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-2!./Article.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

};;