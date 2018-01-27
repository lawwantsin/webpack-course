exports.ids = [1];
exports.modules = {

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

__webpack_require__("./src/css/Gallery.css");

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

var _default = function _default() {
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

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getBundle, "getBundle", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Gallery.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Gallery.js");
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ "./src/css/Gallery.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })

};;