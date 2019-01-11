(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Tabbar/tabbar.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./src/Tabbar/tabbar.css?uxType=page":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./src/Tabbar/tabbar.css?uxType=page ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center",
    "height": "500px"
  },
  ".footer-container": {
    "width": "100%",
    "height": "65px",
    "position": "fixed",
    "bottom": "0px",
    "marginBottom": "0px",
    "backgroundColor": "#FFFFFF",
    "borderTopWidth": "1px",
    "borderTopColor": "#CCCCCC",
    "zIndex": 999
  },
  ".footer-item": {
    "width": "25%",
    "display": "flex",
    "flexDirection": "column"
  },
  ".footer-item-img": {
    "marginLeft": "32px",
    "width": "30px",
    "height": "30px"
  },
  ".tab-text": {
    "textAlign": "center",
    "fontSize": "12px"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Index/index.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Index/index.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "text",
      "attr": {
        "value": "首页"
      }
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/My/my.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/My/my.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "text",
      "attr": {
        "value": "我的"
      }
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Tabbar/tabbar.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Tabbar/tabbar.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "block",
      "attr": {},
      "shown": function () {return this.flag==0},
      "children": [
        {
          "type": "index",
          "attr": {}
        }
      ]
    },
    {
      "type": "block",
      "attr": {},
      "shown": function () {return (this.flag==1)&&!(this.flag==0)},
      "children": [
        {
          "type": "type",
          "attr": {}
        }
      ]
    },
    {
      "type": "block",
      "attr": {},
      "shown": function () {return (this.flag==2)&&!(this.flag==0)&&!(this.flag==1)},
      "children": [
        {
          "type": "my",
          "attr": {}
        }
      ]
    },
    {
      "type": "tabs",
      "attr": {},
      "children": [
        {
          "type": "tab-bar",
          "attr": {},
          "classList": [
            "footer-container"
          ],
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": function () {return this.tabBar.list},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "footer-item"
                  ],
                  "events": {
                    "click": function (evt) {this.setIndex(this.$idx,evt)}
                  },
                  "children": [
                    {
                      "type": "block",
                      "attr": {},
                      "shown": function () {return this.$idx==this.flag},
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.tabBar.list[this.$idx].selected_icon}
                          },
                          "classList": [
                            "footer-item-img"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.tabBar.list[this.$idx].name}
                          },
                          "classList": [
                            "tab-text"
                          ],
                          "style": {
                            "color": function () {return this.tabBar.list[this.$idx].selected_color}
                          }
                        }
                      ]
                    },
                    {
                      "type": "block",
                      "attr": {},
                      "shown": function () {return !(this.$idx==this.flag)},
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.tabBar.list[this.$idx].icon}
                          },
                          "classList": [
                            "footer-item-img"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.tabBar.list[this.$idx].name}
                          },
                          "classList": [
                            "tab-text"
                          ],
                          "style": {
                            "color": function () {return this.tabBar.list[this.$idx].color}
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Type/type.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Type/type.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "text",
      "attr": {
        "value": "分类"
      }
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=e:\\quickAPPProject\\test\\test_tabbar\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Tabbar/tabbar.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=e:/quickAPPProject/test/test_tabbar/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Tabbar/tabbar.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = {
  data: function () {return {
    flag: 0,
    tabBar: {
      list: [{
        name: '首页',
        icon: '../Common/home.png',
        color: '#666666',
        selected_color: '#1296db',
        selected_icon: '../Common/home_selected.png'
      }, {
        name: '分类',
        icon: '../Common/type.png',
        color: '#666666',
        selected_color: '#1296db',
        selected_icon: '../Common/type_selected.png'
      }, {
        name: '我的',
        icon: '../Common/my.png',
        color: '#666666',
        selected_color: '#1296db',
        selected_icon: '../Common/my_selected.png'
      }]
    }
  }},
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: this.tabBar.list[this.flag].name
    });
  },
  setIndex: function setIndex(pos) {
    this.flag = pos;
    this.$page.setTitleBar({
      text: this.tabBar.list[pos].name
    });
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/Index/index.ux?uxType=comp&name=index":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/Index/index.ux?uxType=comp&name=index ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Index/index.ux?uxType=comp")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_module$.exports.template = $app_template$
})


/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/My/my.ux?uxType=comp&name=my":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/My/my.ux?uxType=comp&name=my ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./my.ux?uxType=comp */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/My/my.ux?uxType=comp")

$app_define$('@app-component/my', [], function($app_require$, $app_exports$, $app_module$){
     $app_module$.exports.template = $app_template$
})


/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/Type/type.ux?uxType=comp&name=type":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/Type/type.ux?uxType=comp&name=type ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./type.ux?uxType=comp */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Type/type.ux?uxType=comp")

$app_define$('@app-component/type', [], function($app_require$, $app_exports$, $app_module$){
     $app_module$.exports.template = $app_template$
})


/***/ }),

/***/ "./src/Tabbar/tabbar.ux?uxType=page":
/*!******************************************!*\
  !*** ./src/Tabbar/tabbar.ux?uxType=page ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!../Index/index.ux?uxType=comp&name=index */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/Index/index.ux?uxType=comp&name=index")
__webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!../Type/type.ux?uxType=comp&name=type */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/Type/type.ux?uxType=comp&name=type")
__webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!../My/my.ux?uxType=comp&name=my */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/My/my.ux?uxType=comp&name=my")
var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./tabbar.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Tabbar/tabbar.ux?uxType=page")
var $app_style$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./tabbar.css?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./src/Tabbar/tabbar.css?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!../../node_modules/babel-loader?plugins[]=e:/quickAPPProject/test/test_tabbar/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!../../node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./tabbar.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=e:\\quickAPPProject\\test\\test_tabbar\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Tabbar/tabbar.ux?uxType=page")

$app_define$('@app-component/tabbar', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/tabbar',{ packagerVersion: '0.0.5'})


/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=tabbar.js.map