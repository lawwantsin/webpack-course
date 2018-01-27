exports.ids = [0];
exports.modules = {

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

__webpack_require__("./src/css/About.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkdownData = __webpack_require__("./data/post.md");
var imagePath = __webpack_require__("./src/images/link.jpg");

var _default = function _default() {
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

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/About.js");
}();

;

/***/ }),

/***/ "./src/css/About.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".profile{display:flex;-ms-align-items:center;align-items:center;justify-content:center;height:100vh;flex-flow:column}.profile>img{border-radius:100%;border:5px;width:300px;box-shadow:0 0 20px #000}h1{font-size:5em;font-family:sans-serif;color:#fff;text-shadow:0 0 20px #000;text-align:left}", ""]);

// exports


/***/ }),

/***/ "./src/images/link.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/link.jpg";

/***/ })

};;