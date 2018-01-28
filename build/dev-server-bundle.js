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

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/react-universal-component/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__("./node_modules/react-universal-component/dist/requireUniversalModule.js");

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__("./node_modules/react-universal-component/dist/report-chunks.js");

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__("hoist-non-react-statics");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__("./node_modules/react-universal-component/dist/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;
        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react-universal-component/dist/report-chunks.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),

/***/ "./node_modules/react-universal-component/dist/requireUniversalModule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__("./node_modules/react-universal-component/dist/utils.js");

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),

/***/ "./node_modules/react-universal-component/dist/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "development" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (true) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react-universal-component/server.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  flushModuleIds: __webpack_require__("./node_modules/react-universal-component/dist/requireUniversalModule.js").flushModuleIds,
  flushChunkNames: __webpack_require__("./node_modules/react-universal-component/dist/requireUniversalModule.js").flushChunkNames,
  clearChunks: __webpack_require__("./node_modules/react-universal-component/dist/requireUniversalModule.js").clearChunks,
  ReportChunks: __webpack_require__("./node_modules/react-universal-component/dist/report-chunks.js").default
}


/***/ }),

/***/ "./node_modules/webpack-flush-chunks/dist/createApiWithCss.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCssHash = exports.stylesAsString = exports.isCss = exports.isJs = exports.getJsFileRegex = undefined;

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _fs = __webpack_require__("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEV = "development" === 'development';

/** CREATE API WITH CSS */

exports.default = function (files, filesOrderedForCss, stats, outputPath) {
  var publicPath = stats.publicPath.replace(/\/$/, '');
  var regex = getJsFileRegex(files);
  var scripts = files.filter(function (file) {
    return isJs(regex, file);
  });
  var stylesheets = filesOrderedForCss.filter(isCss);
  var cssHashRaw = createCssHash(stats);

  var api = {
    // 1) Use as React components using ReactDOM.renderToStaticMarkup, eg:
    // <html><Styles /><Js /><html>
    Js: function Js() {
      return _react2.default.createElement(
        'span',
        null,
        scripts.map(function (file, key) {
          return _react2.default.createElement('script', {
            type: 'text/javascript',
            src: publicPath + '/' + file,
            key: key,
            defer: true
          });
        })
      );
    },
    Styles: function Styles() {
      return _react2.default.createElement(
        'span',
        null,
        stylesheets.map(function (file, key) {
          return _react2.default.createElement('link', { rel: 'stylesheet', href: publicPath + '/' + file, key: key });
        })
      );
    },

    // 2) Use as string, eg: `${styles} ${js}`
    js: {
      toString: function toString() {
        return (
          // lazy-loaded in case not used
          scripts.map(function (file) {
            return '<script type=\'text/javascript\' src=\'' + publicPath + '/' + file + '\' defer></script>';
          }).join('\n')
        );
      }
    },
    styles: {
      toString: function toString() {
        return (
          // lazy-loaded in case not used
          stylesheets.map(function (file) {
            return '<link rel=\'stylesheet\' href=\'' + publicPath + '/' + file + '\' />';
          }).join('\n')
        );
      }
    },

    // 3) Embed the raw css without needing to load another file.
    // Use as a React component (<Css />) or a string (`${css}`):
    // NOTE: during development, HMR requires stylesheets.
    Css: function Css() {
      return DEV ? api.Styles() : _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'style',
          null,
          stylesAsString(stylesheets, outputPath)
        )
      );
    },
    css: {
      toString: function toString() {
        return (
          // lazy-loaded in case not used
          DEV ? api.styles.toString() : '<style>' + stylesAsString(stylesheets, outputPath) + '</style>'
        );
      }
    },

    // 4) names of files without publicPath or outputPath prefixed:
    scripts: scripts,
    stylesheets: stylesheets,

    // 5) for completeness provide the paths even though they were inputs:
    publicPath: publicPath,
    outputPath: outputPath,

    // 6) special goodness for dual-file import()
    cssHashRaw: cssHashRaw,
    CssHash: function CssHash() {
      return _react2.default.createElement('script', {
        type: 'text/javascript',
        dangerouslySetInnerHTML: {
          __html: 'window.__CSS_CHUNKS__ = ' + JSON.stringify(cssHashRaw)
        }
      });
    },
    cssHash: {
      toString: function toString() {
        return '<script type=\'text/javascript\'>window.__CSS_CHUNKS__= ' + JSON.stringify(cssHashRaw) + '</script>';
      }
    }
  };

  return api;
};

/** HELPERS */

var getJsFileRegex = exports.getJsFileRegex = function getJsFileRegex(files) {
  var isUsingExtractCssChunk = !!files.find(function (file) {
    return file.includes('no_css');
  });
  return isUsingExtractCssChunk ? /\.no_css\.js$/ : /\.js$/;
};

var isJs = exports.isJs = function isJs(regex, file) {
  return regex.test(file) && !/\.hot-update\.js$/.test(file);
};

var isCss = exports.isCss = function isCss(file) {
  return (/\.css$/.test(file)
  );
};

var stylesAsString = exports.stylesAsString = function stylesAsString(stylesheets, outputPath) {
  if (!outputPath) {
    throw new Error('No `outputPath` was provided as an option to `flushChunks`. \n      Please provide one so stylesheets can be read from the\n      file system since you\'re embedding the css as a string.');
  }

  var path = outputPath.replace(/\/$/, '');

  return stylesheets.map(function (file) {
    var filePath = path + '/' + file;
    return _fs2.default.readFileSync(filePath, 'utf8');
  }).join('\n').replace(/\/\*# sourceMappingURL=.+\*\//g, ''); // hide prod sourcemap err
};

var createCssHash = exports.createCssHash = function createCssHash(_ref) {
  var assetsByChunkName = _ref.assetsByChunkName,
      publicPath = _ref.publicPath;
  return Object.keys(assetsByChunkName).reduce(function (hash, name) {
    if (!assetsByChunkName[name] || !assetsByChunkName[name].find) return hash;
    var file = assetsByChunkName[name].find(function (file) {
      return file.endsWith('.css');
    });
    if (file) hash[name] = '' + publicPath + file;
    return hash;
  }, {});
};

/***/ }),

/***/ "./node_modules/webpack-flush-chunks/dist/flushChunks.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filesFromChunks = exports.concatFilesAtKeys = exports.normalizePath = exports.isUnique = exports.createFilesByModuleId = exports.createFilesByPath = exports.flushWebpack = exports.flushBabel = exports.flush = exports.flushFilesPure = exports.flushFiles = exports.flushChunks = undefined;

var _createApiWithCss = __webpack_require__("./node_modules/webpack-flush-chunks/dist/createApiWithCss.js");

var _createApiWithCss2 = _interopRequireDefault(_createApiWithCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var filesByPath = null;
var filesByModuleId = null;

var IS_WEBPACK = typeof __webpack_require__ !== 'undefined';
var IS_TEST = "development" === 'test';
var defaults = {
  before: ['bootstrap', 'vendor'],
  after: ['main']
};

/** PUBLIC API */

exports.default = function (stats, opts) {
  return flushChunks(stats, IS_WEBPACK, opts);
};

var flushChunks = function flushChunks(stats, isWebpack) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var beforeEntries = opts.before || defaults.before;
  var jsBefore = filesFromChunks(beforeEntries, stats.assetsByChunkName);

  var files = opts.chunkNames ? filesFromChunks(opts.chunkNames, stats.assetsByChunkName, true) : flush(opts.moduleIds || [], stats, opts.rootDir, isWebpack);

  var afterEntries = opts.after || defaults.after;
  var jsAfter = filesFromChunks(afterEntries, stats.assetsByChunkName);

  return (0, _createApiWithCss2.default)([].concat(_toConsumableArray(jsBefore), _toConsumableArray(files), _toConsumableArray(jsAfter)), [].concat(_toConsumableArray(jsBefore), _toConsumableArray(jsAfter.reverse()), _toConsumableArray(files)), stats, opts.outputPath);
};

var flushFiles = function flushFiles(stats, opts) {
  return flushFilesPure(stats, IS_WEBPACK, opts);
};

var flushFilesPure = function flushFilesPure(stats, isWebpack, opts) {
  var files = opts.chunkNames ? filesFromChunks(opts.chunkNames, stats.assetsByChunkName) : flush(opts.moduleIds || [], stats, opts.rootDir, isWebpack);

  var filter = opts.filter;

  if (filter) {
    if (typeof filter === 'function') {
      return files.filter(filter);
    }

    var regex = filter instanceof RegExp ? filter : new RegExp('.' + filter + '$');
    return files.filter(function (file) {
      return regex.test(file);
    });
  }

  return files;
};

/** BABEL VS. WEBPACK FLUSHING */

var flush = function flush(moduleIds, stats, rootDir, isWebpack) {
  return !isWebpack ? flushBabel(moduleIds, stats, rootDir).filter(isUnique) : flushWebpack(moduleIds, stats).filter(isUnique);
};

var flushBabel = function flushBabel(paths, stats, rootDir) {
  if (!rootDir) {
    throw new Error('No `rootDir` was provided as an option to `flushChunks`.\n      Please provide one so modules rendered server-side can be\n      paired to their webpack equivalents client-side, and their\n      corresponding chunks.');
  }

  var dir = rootDir; // satisfy flow

  filesByPath = filesByPath && !IS_TEST ? filesByPath // cached
  : createFilesByPath(stats);

  return concatFilesAtKeys(filesByPath, paths.map(function (p) {
    return normalizePath(p, dir);
  }));
};

var flushWebpack = function flushWebpack(ids, stats) {
  filesByModuleId = filesByModuleId && !IS_TEST ? filesByModuleId // cached
  : createFilesByModuleId(stats);

  return concatFilesAtKeys(filesByModuleId, ids);
};

/** CREATE FILES MAP */

var createFilesByPath = function createFilesByPath(_ref) {
  var chunks = _ref.chunks,
      modules = _ref.modules;

  var filesByChunk = chunks.reduce(function (chunks, chunk) {
    chunks[chunk.id] = chunk.files;
    return chunks;
  }, {});

  return modules.reduce(function (filesByPath, module) {
    var filePath = module.name;
    var files = concatFilesAtKeys(filesByChunk, module.chunks);

    filesByPath[filePath] = files.filter(isUnique);
    return filesByPath;
  }, {});
};

var createFilesByModuleId = function createFilesByModuleId(stats) {
  var filesByPath = createFilesByPath(stats);

  return stats.modules.reduce(function (filesByModuleId, module) {
    var filePath = module.name;
    var id = module.id;

    filesByModuleId[id] = filesByPath[filePath];
    return filesByModuleId;
  }, {});
};

/** HELPERS */

var isUnique = function isUnique(v, i, self) {
  return self.indexOf(v) === i;
};

var normalizePath = function normalizePath(path, rootDir) {
  return path.replace(rootDir, '.').replace(/\.js$/, '') + '.js';
};

var concatFilesAtKeys = function concatFilesAtKeys(inputFilesMap, pathsOrIdsOrChunks) {
  return pathsOrIdsOrChunks.reduce(function (files, key) {
    return files.concat(inputFilesMap[key] || []);
  }, []);
};

var filesFromChunks = function filesFromChunks(chunkNames, assets, checkChunkNames) {
  var _ref2;

  var hasChunk = function hasChunk(entry) {
    var result = !!(assets[entry] || assets[entry + '-']);
    if (!result && checkChunkNames) {
      console.warn('[FLUSH CHUNKS]: Unable to find ' + entry + ' in Webpack chunks. Please check usage of Babel plugin.');
    }

    return result;
  };

  var entryToFiles = function entryToFiles(entry) {
    return assets[entry] || assets[entry + '-'];
  };

  return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(chunkNames.filter(hasChunk).map(entryToFiles)));
};

/** EXPORTS FOR TESTS */

exports.flushChunks = flushChunks;
exports.flushFiles = flushFiles;
exports.flushFilesPure = flushFilesPure;
exports.flush = flush;
exports.flushBabel = flushBabel;
exports.flushWebpack = flushWebpack;
exports.createFilesByPath = createFilesByPath;
exports.createFilesByModuleId = createFilesByModuleId;
exports.isUnique = isUnique;
exports.normalizePath = normalizePath;
exports.concatFilesAtKeys = concatFilesAtKeys;
exports.filesFromChunks = filesFromChunks;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


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
	"./Routes.js": "./src/components/Routes.js"
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
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(_Routes2.default, null)
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

/***/ "./src/components/Article.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./src/css/Article.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
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

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Article.js");
}();

;

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

var _importCss2 = __webpack_require__("./src/node_modules/babel-plugin-universal-import/importCss.js");

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__("./src/node_modules/babel-plugin-universal-import/universalImport.js");

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

/***/ "./src/components/Routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__("path");

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__("./src/node_modules/babel-plugin-universal-import/importCss.js");

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__("./src/node_modules/babel-plugin-universal-import/universalImport.js");

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("react-router-dom");

var _reactUniversalComponent = __webpack_require__("./node_modules/react-universal-component/dist/index.js");

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactRouter = __webpack_require__("react-router");

__webpack_require__("./src/css/nav.css");

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

var _default = function _default() {
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
        { path: "/about" },
        _react2.default.createElement(UniversalComponent, { page: "About" })
      ),
      _react2.default.createElement(
        _reactRouterDom.Route,
        { path: "/article" },
        _react2.default.createElement(UniversalComponent, { page: "Article" })
      )
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UniversalComponent, "UniversalComponent", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Routes.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Routes.js");
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ "./src/css/About.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".profile{display:flex;-ms-align-items:center;align-items:center;justify-content:center;height:100vh;flex-flow:column}.profile>img{border-radius:100%;border:5px;width:300px;box-shadow:0 0 20px #000}h1{font-size:5em;font-family:sans-serif;color:#fff;text-shadow:0 0 20px #000;text-align:left}", ""]);

// exports


/***/ }),

/***/ "./src/css/Article.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/css/Gallery.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/css/nav.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".nav{width:100%;line-height:2em;background-color:#000}.nav a{color:#fff;text-decoration:none;padding:0 20px}", ""]);

// exports


/***/ }),

/***/ "./src/images/link.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/link.jpg";

/***/ }),

/***/ "./src/node_modules/babel-plugin-universal-import/importCss.js":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */

var ADDED = {}

module.exports = function(chunkName, options) {
  var opts = options || {}
  var href = getHref(chunkName)
  if (!href) {
    if ("development" === 'development' && !opts.disableWarnings) {
      if (typeof window === 'undefined' || !window.__CSS_CHUNKS__) {
        console.warn(
          '[UNIVERSAL-IMPORT] no css chunks hash found at "window.__CSS_CHUNKS__". Make sure you are using: https://www.npmjs.com/package/extract-css-chunks-webpack-plugin . If you are not serving CSS, disregard this message.'
        )
        return
      }

      console.warn(
        '[UNIVERSAL-IMPORT] no chunk, ',
        chunkName,
        ', found in "window.__CSS_CHUNKS__". If you are not serving CSS for this chunk, disregard this message.'
      )
    }

    return
  }

  if (ADDED[href] === true) {
    return Promise.resolve()
  }
  ADDED[href] = true

  var head = document.getElementsByTagName('head')[0]
  var link = document.createElement('link')

  link.charset = 'utf-8'
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.timeout = 30000

  return new Promise(function(resolve, reject) {
    var timeout
    var img

    var onload = function() {
      // Check if we created the img tag.
      // If we did then the chunk was loaded via img.src
      // and we need to set the link.href which will then
      // load the resource from cache
      if (img) {
        link.href = href
        img.onerror = null // avoid mem leaks in IE.
      }
      link.onerror = null // avoid mem leaks in IE.
      clearTimeout(timeout)
      resolve()
    }

    link.onerror = function() {
      link.onerror = link.onload = null // avoid mem leaks in IE.
      clearTimeout(timeout)
      var message = 'could not load css chunk: ' + chunkName
      reject(new Error(message))
    }

    if (isOnloadSupported() && 'onload' in link) {
      link.onload = onload
      link.href = href
    } else {
      // Use img.src as a fallback to loading the css chunk in browsers
      // which don’t support link.onload
      // We use the img.onerror handler because an error will always fire
      // when parsing the response
      // Then we know the resource has been loaded
      img = document.createElement('img')
      img.onerror = onload
      img.src = href
    }

    timeout = setTimeout(link.onerror, link.timeout)
    head.appendChild(link)
  })
}

function getHref(chunkName) {
  if (typeof window === 'undefined' || !window.__CSS_CHUNKS__) return null
  return window.__CSS_CHUNKS__[chunkName]
}

// Checks whether the browser supports link.onload
// Reference: https://pie.gd/test/script-link-events/
function isOnloadSupported() {
  var userAgent = navigator.userAgent
  var supportedMajor = 535
  var supportedMinor = 24
  var match = userAgent.match(/\ AppleWebKit\/(\d+)\.(\d+)/)
  if (match) {
    var major = +match[1]
    var minor = +match[2]
    return (
      (major === supportedMajor && minor >= supportedMinor) ||
      major > supportedMajor
    )
  }
  // All other browsers support it
  return true
}


/***/ }),

/***/ "./src/node_modules/babel-plugin-universal-import/universalImport.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* eslint-disable */

module.exports = function(config, makeThennable) {
  if (makeThennable === false) return config

  var load = config.load
  config.then = function(cb) {
    return load().then(function(res) {
      return cb && cb(res)
    })
  }
  config.catch = function(cb) {
    return load().catch(function(e) {
      return cb && cb(e)
    })
  }
  return config
}

var isSet = false

function setHasPlugin() {
  if (isSet) return
  var universal
  var isWebpack = typeof __webpack_require__ !== 'undefined'

  try {
    if (isWebpack) {
      var weakId = /*require.resolve*/("./node_modules/react-universal-component/dist/index.js")
      universal = __webpack_require__(weakId)
    } else {
      var pkg = 'react-universal-component'
      universal = module.require(pkg)
    }

    if (universal) {
      universal.setHasBabelPlugin()
      isSet = true
    }
  } catch (e) {}
}

setHasPlugin()

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

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

var _server2 = __webpack_require__("./node_modules/react-universal-component/server.js");

var _webpackFlushChunks = __webpack_require__("./node_modules/webpack-flush-chunks/dist/flushChunks.js");

var _webpackFlushChunks2 = _interopRequireDefault(_webpackFlushChunks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var clientStats = _ref.clientStats;
  return function (req, res) {
    var _flushChunks = (0, _webpackFlushChunks2.default)(clientStats, {
      chunkNames: (0, _server2.flushChunkNames)()
    }),
        js = _flushChunks.js,
        styles = _flushChunks.styles,
        cssHash = _flushChunks.cssHash;

    res.send("\n    <html>\n      <head>\n        " + styles + "\n      </head>\n      <body>\n        <div id=\"react-root\">" + (0, _server.renderToString)(_react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: req.url, context: {} },
      _react2.default.createElement(_Routes2.default, null)
    )) + "</div>\n        " + js + "\n        " + cssHash + "\n      </body>\n    </html>\n  ");
  };
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/lawrencewhiteside/Web/courses/webpack-course/src/server/render.js");
}();

;

/***/ }),

/***/ "fs":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "hoist-non-react-statics":
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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