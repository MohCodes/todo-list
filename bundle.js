/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  height: 95vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.titleDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10%;\n  width: 100%;\n}\n\n.mainDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90%;\n  width: 100%;\n  flex-wrap: nowrap;\n}\n\n.mainContainerDiv {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  flex-direction: column;\n}\n\n.sideContainerDiv {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  height: 99.2%;\n  width: 20%;\n  flex-direction: column;\n  background-color: #ffb4a2;\n  border: #6d6875 ridge;\n}\n\n.mainContent {\n  border: #6d6875 ridge;\n\n  height: 85%;\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 5%;\n  background-color: #e5989b;\n}\n\n.mainContentTitle {\n  border: #6d6875 ridge;\n  height: 15%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 3rem;\n  font-style: Sans-serif;\n  background-color: #e5989b;\n}\n\n.tab {\n  border: #6d6875 ridge;\n  height: 5%;\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50%;\n  cursor: pointer;\n  background-color: #b5838d;\n}\n\n.todo {\n  border: #6d6875 ridge;\n  height: 20%;\n  width: 20%;\n  margin-top: 5%;\n  margin-left: 5%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #ffcdb2;\n}\n\n.projectModal {\n  position: absolute;\n  margin: auto;\n  width: 30%;\n  height: 40%;\n  border: #6d6875 ridge;\n  background-color: #ffb4a2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.projectModalContent {\n  margin-top: 5%;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3%;\n  background-color: #ffb4a2;\n}\n\n.projectModalTitle {\n  height: 10%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.projectModalInput {\n  width: 50%;\n  height: 4%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.projectModalOptions {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-end;\n  flex-direction: row;\n  height: 10%;\n  width: 90%;\n  background-color: #ffb4a2;\n}\n\n.projectOptions {\n  border: #6d6875 ridge;\n  height: 80%;\n  display: flex;\n  width: 20%;\n  justify-content: center;\n  align-items: center;\n  background-color: #b5838d;\n  margin-bottom: 0.2rem;\n}\n\n.topDiv {\n  border: #6d6875 ridge;\n  border-top-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70%;\n  width: 100%;\n  cursor: pointer;\n  flex-direction: column;\n  gap: 30%;\n}\n\n.bottomDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30%;\n  width: 10%;\n  cursor: pointer;\n}\n\n.todoDisplay {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border: #6d6875 ridge;\n  height: 35%;\n  width: 25%;\n  flex-direction: column;\n  background-color: #ffcdb2;\n  margin-left: 0.5rem;\n}\n.todoTopDiv {\n  /* border: #6d6875 ridge; */\n  border-top-style: none;\n  height: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  width: 90%;\n  gap: 10%;\n  flex-wrap: wrap;\n}\n.todoBotDiv {\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 5%;\n  cursor: pointer;\n}\n\n.todoModalDescriptionInput {\n  height: 20%;\n  text-align: justify;\n}\n\n.todoModalPriorityInput {\n  height: 10%;\n}\n\n.todoModalSubmit {\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[".container {\n  height: 95vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.titleDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10%;\n  width: 100%;\n}\n\n.mainDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90%;\n  width: 100%;\n  flex-wrap: nowrap;\n}\n\n.mainContainerDiv {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  flex-direction: column;\n}\n\n.sideContainerDiv {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  height: 99.2%;\n  width: 20%;\n  flex-direction: column;\n  background-color: #ffb4a2;\n  border: #6d6875 ridge;\n}\n\n.mainContent {\n  border: #6d6875 ridge;\n\n  height: 85%;\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 5%;\n  background-color: #e5989b;\n}\n\n.mainContentTitle {\n  border: #6d6875 ridge;\n  height: 15%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 3rem;\n  font-style: Sans-serif;\n  background-color: #e5989b;\n}\n\n.tab {\n  border: #6d6875 ridge;\n  height: 5%;\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50%;\n  cursor: pointer;\n  background-color: #b5838d;\n}\n\n.todo {\n  border: #6d6875 ridge;\n  height: 20%;\n  width: 20%;\n  margin-top: 5%;\n  margin-left: 5%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #ffcdb2;\n}\n\n.projectModal {\n  position: absolute;\n  margin: auto;\n  width: 30%;\n  height: 40%;\n  border: #6d6875 ridge;\n  background-color: #ffb4a2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.projectModalContent {\n  margin-top: 5%;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3%;\n  background-color: #ffb4a2;\n}\n\n.projectModalTitle {\n  height: 10%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.projectModalInput {\n  width: 50%;\n  height: 4%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.projectModalOptions {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-end;\n  flex-direction: row;\n  height: 10%;\n  width: 90%;\n  background-color: #ffb4a2;\n}\n\n.projectOptions {\n  border: #6d6875 ridge;\n  height: 80%;\n  display: flex;\n  width: 20%;\n  justify-content: center;\n  align-items: center;\n  background-color: #b5838d;\n  margin-bottom: 0.2rem;\n}\n\n.topDiv {\n  border: #6d6875 ridge;\n  border-top-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70%;\n  width: 100%;\n  cursor: pointer;\n  flex-direction: column;\n  gap: 30%;\n}\n\n.bottomDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30%;\n  width: 10%;\n  cursor: pointer;\n}\n\n.todoDisplay {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border: #6d6875 ridge;\n  height: 35%;\n  width: 25%;\n  flex-direction: column;\n  background-color: #ffcdb2;\n  margin-left: 0.5rem;\n}\n.todoTopDiv {\n  /* border: #6d6875 ridge; */\n  border-top-style: none;\n  height: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  width: 90%;\n  gap: 10%;\n  flex-wrap: wrap;\n}\n.todoBotDiv {\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 5%;\n  cursor: pointer;\n}\n\n.todoModalDescriptionInput {\n  height: 20%;\n  text-align: justify;\n}\n\n.todoModalPriorityInput {\n  height: 10%;\n}\n\n.todoModalSubmit {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayingTodos": () => (/* binding */ displayingTodos),
/* harmony export */   "modals": () => (/* binding */ modals),
/* harmony export */   "mainPage": () => (/* binding */ mainPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");




const container = document.getElementById('container');

const mainPage = (() => {
  const mainContainers = () => {
    const titleDiv = document.createElement('div');
    titleDiv.className = 'titleDiv';
    titleDiv.setAttribute('id', 'titleDiv');
    container.appendChild(titleDiv);

    const mainDiv = document.createElement('div');
    mainDiv.className = 'mainDiv';
    mainDiv.setAttribute('id', 'mainDiv');
    container.appendChild(mainDiv);

    const sideContainerDiv = document.createElement('div');
    sideContainerDiv.className = 'sideContainerDiv';
    sideContainerDiv.setAttribute('id', 'sideContainerDiv');
    mainDiv.appendChild(sideContainerDiv);

    const mainContainerDiv = document.createElement('div');
    mainContainerDiv.className = 'mainContainerDiv';
    mainContainerDiv.setAttribute('id', 'mainContainerDiv');
    mainDiv.appendChild(mainContainerDiv);
  };

  const mainContainerContent = () => {
    mainContainers();

    const mainContentTitle = document.createElement('div');
    mainContentTitle.className = 'mainContentTitle';
    mainContentTitle.setAttribute('id', 'mainContentTitle');
    mainContainerDiv.appendChild(mainContentTitle);
    mainContentTitle.textContent = 'projects';

    const mainContent = document.createElement('div');
    mainContent.className = 'mainContent';
    mainContent.setAttribute('id', 'mainContent');
    mainContainerDiv.appendChild(mainContent);
  };

  const sideContainerContent = () => {
    mainContainerContent();

    const homeTab = document.createElement('div');
    homeTab.className = 'homeTab tab';
    homeTab.setAttribute('id', 'homeTab');
    homeTab.textContent = 'Home';
    sideContainerDiv.appendChild(homeTab);
    homeTab.addEventListener('click', displayingTodos.projectDivs);

    const newProject = document.createElement('div');
    newProject.className = 'newProject tab';
    newProject.setAttribute('id', 'newProject');
    newProject.textContent = 'New Project';
    sideContainerDiv.appendChild(newProject);
    newProject.addEventListener('click', modals.newProjectModal);

    const newTodo = document.createElement('div');
    newTodo.className = 'newTodo tab';
    newTodo.setAttribute('id', 'newTodo');
    newTodo.textContent = 'Add To Do';
    sideContainerDiv.appendChild(newTodo);
    newTodo.style.display = 'none';
    newTodo.addEventListener('click', () => {
      const todoModal = document.createElement('div');
      todoModal.className = 'projectModal todoModal';
      todoModal.id = 'todoModal';
      container.appendChild(todoModal);

      const todoModalContent = document.createElement('div');
      todoModalContent.className = 'projectModalContent TodoModalContent';
      todoModalContent.id = 'todoModalContent';
      todoModal.appendChild(todoModalContent);

      const todoModalTitle = document.createElement('div');
      todoModalTitle.className = 'projectModalTitle todoModalTitle';
      todoModalTitle.id = 'todoModalTitle';
      todoModalContent.appendChild(todoModalTitle);
      todoModalTitle.textContent = 'Enter To Do Title';

      const todoModalTitleInput = document.createElement('input');
      todoModalTitleInput.className = 'projectModalInput todoModalTitleInput';
      todoModalTitleInput.id = ' TodoModalInput';
      todoModalContent.appendChild(todoModalTitleInput);

      const todoModalDescription = document.createElement('div');
      todoModalDescription.className = ' todoModalDescription';
      todoModalDescription.id = 'todoModalDescription';
      todoModalContent.appendChild(todoModalDescription);
      todoModalDescription.textContent = 'Enter Description';

      const todoModalDescriptionInput = document.createElement('TEXTAREA');
      todoModalDescriptionInput.className = 'projectModalInput todoModalDescriptionInput';
      todoModalDescriptionInput.id = ' todoModalDescriptionInput';
      todoModalContent.appendChild(todoModalDescriptionInput);

      const todoModalPriority = document.createElement('div');
      todoModalPriority.className = ' todoModalDescription todoModalPriority';
      todoModalPriority.setAttribute('for', 'todoModalPriorityInput');
      todoModalPriority.id = 'todoModalDescription';
      todoModalContent.appendChild(todoModalPriority);
      todoModalPriority.textContent = 'Select Priority';

      const todoModalPriorityInput = document.createElement('select');
      todoModalPriorityInput.className = 'projectModalInput todoModalPriorityInput';
      todoModalPriorityInput.id = ' todoModalPriorityInput';
      todoModalContent.appendChild(todoModalPriorityInput);

      const todoModalPriorityHigh = document.createElement('option');
      todoModalPriorityHigh.setAttribute('value', 'High');
      todoModalPriorityHigh.textContent = 'High';
      todoModalPriorityInput.appendChild(todoModalPriorityHigh);

      const todoModalPriorityMedium = document.createElement('option');
      todoModalPriorityMedium.setAttribute('value', 'Medium');
      todoModalPriorityMedium.textContent = 'Medium';
      todoModalPriorityInput.appendChild(todoModalPriorityMedium);

      const todoModalPriorityLow = document.createElement('option');
      todoModalPriorityLow.setAttribute('value', 'Low');
      todoModalPriorityLow.textContent = 'Low';
      todoModalPriorityInput.appendChild(todoModalPriorityLow);

      const todoModalDueDate = document.createElement('div');
      todoModalDueDate.className = 'projectModalDueDate TodoModalDueDate';
      todoModalDueDate.id = 'projectModalDueDate';
      todoModalContent.appendChild(todoModalDueDate);
      todoModalDueDate.textContent = 'Enter Due Date';

      const todoModalDueDateInput = document.createElement('input');
      todoModalDueDateInput.setAttribute('type', 'date');
      todoModalDueDateInput.className = 'projectModalDueDateInput todoModalDueDateInput';
      todoModalDueDateInput.id = ' todoModalDueDateInput';
      todoModalContent.appendChild(todoModalDueDateInput);

      const todoModalOptions = document.createElement('div');
      todoModalOptions.className = 'projectModalOptions todoModalOptions';
      todoModalOptions.id = ' todoModalOptions';
      todoModal.appendChild(todoModalOptions);

      const todoModalCancel = document.createElement('div');
      todoModalCancel.className = 'projectModalCancel projectOptions todoModalCancel';
      todoModalCancel.id = ' todoModalCancel';
      todoModalOptions.appendChild(todoModalCancel);
      todoModalCancel.textContent = 'Cancel';
      todoModalCancel.addEventListener('click', () => {
        todoModal.style.display = 'none';
      });

      const todoModalSubmit = document.createElement('div');
      todoModalSubmit.className = 'projectModalSubmit projectOptions todoModalSubmit';
      todoModalSubmit.id = ' todoModalSubmit';
      todoModalOptions.appendChild(todoModalSubmit);
      todoModalSubmit.textContent = 'Submit';
      todoModalSubmit.addEventListener('click', (event) => {
        todoModal.style.display = 'none';
        const todoTitleValue = todoModalTitleInput.value;
        const todoDescriptionValue = todoModalDescriptionInput.value;
        const todoPriorityValue = todoModalPriorityInput.value;
        const todoDueDateValue = todoModalDueDateInput.value;
        const newTodoObject = new _createTodo__WEBPACK_IMPORTED_MODULE_2__.todoObject(todoTitleValue, todoDescriptionValue, todoPriorityValue, todoDueDateValue);
        displayingTodos.gangang(newTodoObject);
      });
    });
  };

  return { sideContainerContent };
})();

const modals = (() => {
  const newProjectModal = () => {
    const projectModal = document.createElement('div');
    projectModal.className = 'projectModal';
    projectModal.id = 'projectModal';
    container.appendChild(projectModal);

    const projectModalContent = document.createElement('div');
    projectModalContent.className = 'projectModalContent';
    projectModalContent.id = 'projectModalContent';
    projectModal.appendChild(projectModalContent);

    const projectModalTitle = document.createElement('div');
    projectModalTitle.className = 'projectModalTitle';
    projectModalTitle.id = 'projectModalTitle';
    projectModalContent.appendChild(projectModalTitle);
    projectModalTitle.textContent = 'Enter Project Name';

    const projectModalInput = document.createElement('input');
    projectModalInput.className = 'projectModalInput';
    projectModalInput.id = ' projectModalInput';
    projectModalContent.appendChild(projectModalInput);

    const projectModalDueDate = document.createElement('div');
    projectModalDueDate.className = 'projectModalDueDate';
    projectModalDueDate.id = 'projectModalDueDate';
    projectModalContent.appendChild(projectModalDueDate);
    projectModalDueDate.textContent = 'Enter Due Date';

    const projectModalDueDateInput = document.createElement('input');
    projectModalDueDateInput.setAttribute('type', 'date');
    projectModalDueDateInput.className = 'projectModalDueDateInput';
    projectModalDueDateInput.id = ' projectModalDueDateInput';
    projectModalContent.appendChild(projectModalDueDateInput);

    const projectModalOptions = document.createElement('div');
    projectModalOptions.className = 'projectModalOptions';
    projectModalOptions.id = ' projectModalOptions';
    projectModal.appendChild(projectModalOptions);

    const projectModalCancel = document.createElement('div');
    projectModalCancel.className = 'projectModalCancel projectOptions';
    projectModalCancel.id = ' projectModalCancel';
    projectModalOptions.appendChild(projectModalCancel);
    projectModalCancel.textContent = 'Cancel';
    projectModalCancel.addEventListener('click', () => {
      projectModal.style.display = 'none';
    });

    const projectModalSubmit = document.createElement('div');
    projectModalSubmit.className = 'projectModalSubmit projectOptions';
    projectModalSubmit.id = ' projectModalSubmit';
    projectModalOptions.appendChild(projectModalSubmit);
    projectModalSubmit.textContent = 'Submit';
    projectModalSubmit.addEventListener('click', () => {
      projectModal.style.display = 'none';

      const newTodo = [];
      const newProjects = new _createTodo__WEBPACK_IMPORTED_MODULE_2__.projectObject(projectModalInput.value, projectModalDueDateInput.value, newTodo);
      _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects.push(newProjects);
      displayingTodos.projectDivs();
      console.log(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects);
      (0,_index__WEBPACK_IMPORTED_MODULE_1__.setData)();
      console.log(localStorage);
      return { newTodo };
    });
  };

  const projectComponentsPage = () => {
    const projectPage = document.createElement('div');
    projectPage.className = 'projectPage';
    projectPage.id = 'projectPage';
  };

  return { newProjectModal, projectComponentsPage };
})();

const displayingTodos = (() => {
  const projectDivs = () => {
    const newTodoButton = document.getElementById('newTodo');
    mainContentTitle.textContent = 'Projects';
    newTodoButton.style.display = 'none';
    mainContent.innerHTML = '';
    for (let i = 0; i < _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects.length; i++) {
      const temp = document.createElement('div');
      temp.className = `project${i} todo`;
      temp.id = `project${i}`;
      temp.setAttribute('data-value', `${i}`);
      mainContent.appendChild(temp);

      // opening object function
      const openProject = (event) => {
        globalThis.arrayDataValue = event.target.getAttribute('data-value');
        mainContent.innerHTML = '';
        mainContentTitle.textContent = `${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].projectTitle}`;
        for (let z = 0; z < _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo.length; z++) {
          const newTodoButton = document.getElementById('newTodo');
          newTodoButton.style.display = '';

          const todoDisplay = document.createElement('div');
          todoDisplay.className = 'todoDisplay';
          todoDisplay.id = `todoDisplay${z}`;
          todoDisplay.setAttribute('data-value', `${z}`);
          mainContent.appendChild(todoDisplay);

          const todoTopDiv = document.createElement('div');
          todoTopDiv.className = 'todoTopDiv';
          todoTopDiv.id = `todoTopDiv${z}`;
          todoTopDiv.setAttribute('data-value', `${z}`);
          todoDisplay.appendChild(todoTopDiv);

          const todoTitle = document.createElement('div');
          todoTitle.className = 'todoTitle';
          todoTitle.id = `todoTitle${z}`;
          todoTitle.setAttribute('data-value', `${z}`);
          todoTopDiv.appendChild(todoTitle);
          todoTitle.textContent = `Title: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z].title}`;

          const todoDescription = document.createElement('div');
          todoDescription.className = 'todoDescription';
          todoDescription.id = `todoDescription${z}`;
          todoDescription.setAttribute('data-value', `${z}`);
          todoTopDiv.appendChild(todoDescription);
          todoDescription.textContent = `Description: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z].description}`;

          const todoDueDate = document.createElement('div');
          todoDueDate.className = 'todoDueDate';
          todoDueDate.id = `todoDueDate${z}`;
          todoDueDate.setAttribute('data-value', `${z}`);
          todoTopDiv.appendChild(todoDueDate);
          todoDueDate.textContent = `Due Date: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z].priority}`;

          const todoPriority = document.createElement('div');
          todoPriority.className = 'todoPriority';
          todoPriority.id = `todoPriority${z}`;
          todoPriority.setAttribute('data-value', `${z}`);
          todoTopDiv.appendChild(todoPriority);
          todoPriority.textContent = `Priority: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z].dueDate}`;

          const todoBotDiv = document.createElement('div');
          todoBotDiv.className = 'todoBotDiv';
          todoBotDiv.id = `todoBotDiv${z}`;
          todoBotDiv.setAttribute('data-value', `${z}`);
          todoDisplay.appendChild(todoBotDiv);
          todoBotDiv.textContent = 'X';

          const reTodo = (event) => {
            const todoArrayValue = event.target.getAttribute('data-value');
            _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo.splice(todoArrayValue, 1);

            ///
            mainContent.innerHTML = '';
            for (let z = 0; z < _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo.length; z++) {
              const todoDisplay = document.createElement('div');
              todoDisplay.className = 'todoDisplay';
              todoDisplay.id = `todoDisplay${z}`;
              todoDisplay.setAttribute('data-value', `${z}`);
              mainContent.appendChild(todoDisplay);

              const todoTopDiv = document.createElement('div');
              todoTopDiv.className = 'todoTopDiv';
              todoTopDiv.id = `todoTopDiv${z}`;
              todoTopDiv.setAttribute('data-value', `${z}`);
              todoDisplay.appendChild(todoTopDiv);

              const todoTitle = document.createElement('div');
              todoTitle.className = 'todoTitle';
              todoTitle.id = `todoTitle${z}`;
              todoTitle.setAttribute('data-value', `${z}`);
              todoTopDiv.appendChild(todoTitle);
              todoTitle.textContent = `Title: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z].title}`;

              const todoDescription = document.createElement('div');
              todoDescription.className = 'todoDescription';
              todoDescription.id = `todoDescription${z}`;
              todoDescription.setAttribute('data-value', `${z}`);
              todoTopDiv.appendChild(todoDescription);
              todoDescription.textContent = `Description: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z].description}`;

              const todoDueDate = document.createElement('div');
              todoDueDate.className = 'todoDueDate';
              todoDueDate.id = `todoDueDate${z}`;
              todoDueDate.setAttribute('data-value', `${z}`);
              todoTopDiv.appendChild(todoDueDate);
              todoDueDate.textContent = `Due Date: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z].dueDate}`;

              const todoPriority = document.createElement('div');
              todoPriority.className = 'todoPriority';
              todoPriority.id = `todoPriority${z}`;
              todoPriority.setAttribute('data-value', `${z}`);
              todoTopDiv.appendChild(todoPriority);
              todoPriority.textContent = `Priority: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z].priority}`;

              const todoBotDiv = document.createElement('div');
              todoBotDiv.className = 'todoBotDiv';
              todoBotDiv.id = `todoBotDiv${z}`;
              todoBotDiv.setAttribute('data-value', `${z}`);
              todoDisplay.appendChild(todoBotDiv);
              todoBotDiv.textContent = 'X';
              todoBotDiv.addEventListener('click', reTodo);

              const newTodoButton = document.getElementById('newTodo');
              newTodoButton.style.display = '';
            }
            (0,_index__WEBPACK_IMPORTED_MODULE_1__.setData)();
            console.log(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo);
          };

          todoBotDiv.addEventListener('click', reTodo);

          // todoDisplay.textContent = `${projects[arrayDataValue]["todo"][z]['title']},${projects[arrayDataValue]["todo"][z]['dueDate']}`
          console.log(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z]);
        }
      };
      const topDiv = document.createElement('div');
      topDiv.className = 'topDiv';
      topDiv.id = `topDiv${i}`;
      topDiv.setAttribute('data-value', `${i}`);
      temp.appendChild(topDiv);
      topDiv.textContent = `Project Title: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[i].projectTitle}`;
      topDiv.addEventListener('click', () => {
        openProject(event);
        const newTodoButton = document.getElementById('newTodo');
        newTodoButton.style.display = '';
      });
      const projectDueDate = document.createElement('div');
      projectDueDate.className = 'projectDueDate';
      projectDueDate.id = 'projectDueDate';
      projectDueDate.setAttribute('data-value', `${i}`);
      topDiv.appendChild(projectDueDate);
      projectDueDate.textContent = `Due Date: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[i].dueDate}`;

      const bottomDiv = document.createElement('div');
      bottomDiv.className = 'bottomDiv';
      bottomDiv.id = `bottomDiv${i}`;
      bottomDiv.setAttribute('data-value', `${i}`);
      temp.appendChild(bottomDiv);
      bottomDiv.textContent = 'X';

      // removing project functionality
      const removeProject = (event) => {
        const item = event.target.getAttribute('data-value');
        _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects.splice(item, 1);
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.setData)();
        console.log(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects);
        projectDivs();
      };
      bottomDiv.addEventListener('click', removeProject);
    }
  };

  const gangang = (obj) => {
    _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo.push(obj);
    projectDivs();
    const gang = document.getElementById([`topDiv${arrayDataValue}`]);
    gang.click();
    (0,_index__WEBPACK_IMPORTED_MODULE_1__.setData)();
  };

  return { projectDivs, gangang };
})();




/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectObject": () => (/* binding */ projectObject),
/* harmony export */   "todoObject": () => (/* binding */ todoObject),
/* harmony export */   "todoList": () => (/* binding */ todoList),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "defaultProject": () => (/* binding */ defaultProject)
/* harmony export */ });
class projectObject {
  constructor(projectTitle, dueDate, todo) {
    this.projectTitle = projectTitle;
    this.dueDate = dueDate;
    this.todo = todo;
  }
}

class todoObject {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

/// data structure for project/ todo list [ Project object 
//containing a subarray with many todo objects]

const todog2 = [];
const todog1 = new todoObject('Go Shopping', 'Get Bread', '03/12/2021', 'High');
const todog3 = new todoObject('Go Shopping', 'Get Bananas', '03/12/2021', 'High');
todog2.push(todog1, todog3);
const defaultProject = new projectObject('default', '03/12/2021', todog2);
const projects = [defaultProject];
const todoList = [];



/// //create page for each project upon clicking an array is created and filled with a todo object


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setData": () => (/* binding */ setData)
/* harmony export */ });
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");





function setData() {
    localStorage.setItem('projects', JSON.stringify(_createTodo__WEBPACK_IMPORTED_MODULE_0__.projects));
}
_DOM__WEBPACK_IMPORTED_MODULE_1__.mainPage.sideContainerContent();
_DOM__WEBPACK_IMPORTED_MODULE_1__.displayingTodos.projectDivs();







/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxzREFBc0QsaUJBQWlCLG9CQUFvQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixHQUFHLGFBQWEsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGdCQUFnQixHQUFHLGNBQWMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGdCQUFnQixzQkFBc0IsR0FBRyx1QkFBdUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGVBQWUsMkJBQTJCLEdBQUcsdUJBQXVCLGtCQUFrQixnQ0FBZ0MsNEJBQTRCLGtCQUFrQixlQUFlLDJCQUEyQiw4QkFBOEIsMEJBQTBCLEdBQUcsa0JBQWtCLDBCQUEwQixrQkFBa0IsZ0JBQWdCLGtCQUFrQixnQ0FBZ0MsNEJBQTRCLHdCQUF3QixvQkFBb0IsWUFBWSw4QkFBOEIsR0FBRyx1QkFBdUIsMEJBQTBCLGdCQUFnQixnQkFBZ0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLG9CQUFvQiwyQkFBMkIsOEJBQThCLEdBQUcsVUFBVSwwQkFBMEIsZUFBZSxlQUFlLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixvQkFBb0IsOEJBQThCLEdBQUcsV0FBVywwQkFBMEIsZ0JBQWdCLGVBQWUsbUJBQW1CLG9CQUFvQixrQkFBa0IsNEJBQTRCLHdCQUF3QiwyQkFBMkIsOEJBQThCLEdBQUcsbUJBQW1CLHVCQUF1QixpQkFBaUIsZUFBZSxnQkFBZ0IsMEJBQTBCLDhCQUE4QixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyx3QkFBd0IsbUJBQW1CLGdCQUFnQixlQUFlLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixZQUFZLDhCQUE4QixHQUFHLHdCQUF3QixnQkFBZ0IsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsc0JBQXNCLGVBQWUsZUFBZSxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLHdCQUF3QixrQkFBa0Isa0NBQWtDLDBCQUEwQix3QkFBd0IsZ0JBQWdCLGVBQWUsOEJBQThCLEdBQUcscUJBQXFCLDBCQUEwQixnQkFBZ0Isa0JBQWtCLGVBQWUsNEJBQTRCLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLEdBQUcsYUFBYSwwQkFBMEIsMkJBQTJCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixnQkFBZ0Isb0JBQW9CLDJCQUEyQixhQUFhLEdBQUcsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixlQUFlLG9CQUFvQixHQUFHLGtCQUFrQixrQkFBa0Isa0NBQWtDLHdCQUF3QiwwQkFBMEIsZ0JBQWdCLGVBQWUsMkJBQTJCLDhCQUE4Qix3QkFBd0IsR0FBRyxlQUFlLDhCQUE4Qiw2QkFBNkIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsNEJBQTRCLDJCQUEyQixlQUFlLGFBQWEsb0JBQW9CLEdBQUcsZUFBZSxnQkFBZ0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLGNBQWMsb0JBQW9CLEdBQUcsZ0NBQWdDLGdCQUFnQix3QkFBd0IsR0FBRyw2QkFBNkIsZ0JBQWdCLEdBQUcsc0JBQXNCLG9CQUFvQixHQUFHLFNBQVMsZ0ZBQWdGLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxzQ0FBc0MsaUJBQWlCLG9CQUFvQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixHQUFHLGFBQWEsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGdCQUFnQixHQUFHLGNBQWMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGdCQUFnQixzQkFBc0IsR0FBRyx1QkFBdUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGVBQWUsMkJBQTJCLEdBQUcsdUJBQXVCLGtCQUFrQixnQ0FBZ0MsNEJBQTRCLGtCQUFrQixlQUFlLDJCQUEyQiw4QkFBOEIsMEJBQTBCLEdBQUcsa0JBQWtCLDBCQUEwQixrQkFBa0IsZ0JBQWdCLGtCQUFrQixnQ0FBZ0MsNEJBQTRCLHdCQUF3QixvQkFBb0IsWUFBWSw4QkFBOEIsR0FBRyx1QkFBdUIsMEJBQTBCLGdCQUFnQixnQkFBZ0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLG9CQUFvQiwyQkFBMkIsOEJBQThCLEdBQUcsVUFBVSwwQkFBMEIsZUFBZSxlQUFlLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixvQkFBb0IsOEJBQThCLEdBQUcsV0FBVywwQkFBMEIsZ0JBQWdCLGVBQWUsbUJBQW1CLG9CQUFvQixrQkFBa0IsNEJBQTRCLHdCQUF3QiwyQkFBMkIsOEJBQThCLEdBQUcsbUJBQW1CLHVCQUF1QixpQkFBaUIsZUFBZSxnQkFBZ0IsMEJBQTBCLDhCQUE4QixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyx3QkFBd0IsbUJBQW1CLGdCQUFnQixlQUFlLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixZQUFZLDhCQUE4QixHQUFHLHdCQUF3QixnQkFBZ0IsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsc0JBQXNCLGVBQWUsZUFBZSxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLHdCQUF3QixrQkFBa0Isa0NBQWtDLDBCQUEwQix3QkFBd0IsZ0JBQWdCLGVBQWUsOEJBQThCLEdBQUcscUJBQXFCLDBCQUEwQixnQkFBZ0Isa0JBQWtCLGVBQWUsNEJBQTRCLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLEdBQUcsYUFBYSwwQkFBMEIsMkJBQTJCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixnQkFBZ0Isb0JBQW9CLDJCQUEyQixhQUFhLEdBQUcsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixlQUFlLG9CQUFvQixHQUFHLGtCQUFrQixrQkFBa0Isa0NBQWtDLHdCQUF3QiwwQkFBMEIsZ0JBQWdCLGVBQWUsMkJBQTJCLDhCQUE4Qix3QkFBd0IsR0FBRyxlQUFlLDhCQUE4Qiw2QkFBNkIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsNEJBQTRCLDJCQUEyQixlQUFlLGFBQWEsb0JBQW9CLEdBQUcsZUFBZSxnQkFBZ0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLGNBQWMsb0JBQW9CLEdBQUcsZ0NBQWdDLGdCQUFnQix3QkFBd0IsR0FBRyw2QkFBNkIsZ0JBQWdCLEdBQUcsc0JBQXNCLG9CQUFvQixHQUFHLHFCQUFxQjtBQUM1aFU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNhO0FBR1o7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1EQUFVO0FBQzVDO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FB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ZTtBQUN2QixRQUFRLCtDQUFPO0FBQ2Ysb0JBQW9CLGlEQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlEQUFRO0FBQ1o7QUFDQSxtREFBbUQsZUFBZTtBQUNsRTtBQUNBLElBQUksK0NBQU87QUFDWDs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyYjdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTRTs7QUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzZFO0FBQ1o7Ozs7QUFJakU7QUFDQSxvREFBb0QsaURBQVE7QUFDNUQ7QUFDQSwrREFBNkI7QUFDN0IsNkRBQTJCOzs7OztBQU8xQjs7Ozs7OztVQ2hCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUb2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDk1dmg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRpdGxlRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpbkRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lckRpdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlQ29udGFpbmVyRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGhlaWdodDogOTkuMiU7XFxuICB3aWR0aDogMjAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI0YTI7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxuXFxuICBoZWlnaHQ6IDg1JTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5ODliO1xcbn1cXG5cXG4ubWFpbkNvbnRlbnRUaXRsZSB7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXN0eWxlOiBTYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OTg5YjtcXG59XFxuXFxuLnRhYiB7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxuICBoZWlnaHQ6IDUlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjU4MzhkO1xcbn1cXG5cXG4udG9kbyB7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHdpZHRoOiAyMCU7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RiMjtcXG59XFxuXFxuLnByb2plY3RNb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiA0MCU7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNGEyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TW9kYWxDb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjRhMjtcXG59XFxuXFxuLnByb2plY3RNb2RhbFRpdGxlIHtcXG4gIGhlaWdodDogMTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdE1vZGFsSW5wdXQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdE1vZGFsT3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjRhMjtcXG59XFxuXFxuLnByb2plY3RPcHRpb25zIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAyMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjU4MzhkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG4udG9wRGl2IHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwJTtcXG59XFxuXFxuLmJvdHRvbURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogMTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb0Rpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogMzUlO1xcbiAgd2lkdGg6IDI1JTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGIyO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuLnRvZG9Ub3BEaXYge1xcbiAgLyogYm9yZGVyOiAjNmQ2ODc1IHJpZGdlOyAqL1xcbiAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGdhcDogMTAlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4udG9kb0JvdERpdiB7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDUlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dCB7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi50b2RvTW9kYWxQcmlvcml0eUlucHV0IHtcXG4gIGhlaWdodDogMTAlO1xcbn1cXG5cXG4udG9kb01vZGFsU3VibWl0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7O0VBRVosYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7O0VBRXJCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixPQUFPO0VBQ1AseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFFBQVE7RUFDUixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDk1dmg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRpdGxlRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpbkRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lckRpdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlQ29udGFpbmVyRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGhlaWdodDogOTkuMiU7XFxuICB3aWR0aDogMjAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI0YTI7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxuXFxuICBoZWlnaHQ6IDg1JTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5ODliO1xcbn1cXG5cXG4ubWFpbkNvbnRlbnRUaXRsZSB7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXN0eWxlOiBTYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OTg5YjtcXG59XFxuXFxuLnRhYiB7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxuICBoZWlnaHQ6IDUlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjU4MzhkO1xcbn1cXG5cXG4udG9kbyB7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHdpZHRoOiAyMCU7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RiMjtcXG59XFxuXFxuLnByb2plY3RNb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiA0MCU7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNGEyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TW9kYWxDb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjRhMjtcXG59XFxuXFxuLnByb2plY3RNb2RhbFRpdGxlIHtcXG4gIGhlaWdodDogMTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdE1vZGFsSW5wdXQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdE1vZGFsT3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjRhMjtcXG59XFxuXFxuLnByb2plY3RPcHRpb25zIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAyMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjU4MzhkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG4udG9wRGl2IHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwJTtcXG59XFxuXFxuLmJvdHRvbURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMCU7XFxuICB3aWR0aDogMTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb0Rpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogMzUlO1xcbiAgd2lkdGg6IDI1JTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGIyO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuLnRvZG9Ub3BEaXYge1xcbiAgLyogYm9yZGVyOiAjNmQ2ODc1IHJpZGdlOyAqL1xcbiAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcXG4gIGhlaWdodDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGdhcDogMTAlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4udG9kb0JvdERpdiB7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDUlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dCB7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi50b2RvTW9kYWxQcmlvcml0eUlucHV0IHtcXG4gIGhlaWdodDogMTAlO1xcbn1cXG5cXG4udG9kb01vZGFsU3VibWl0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNldERhdGEgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7XG4gIHByb2plY3RPYmplY3QsIHRvZG9PYmplY3QsIHRvZG9MaXN0LCBwcm9qZWN0cyxcbn0gZnJvbSAnLi9jcmVhdGVUb2RvJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5jb25zdCBtYWluUGFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW5Db250YWluZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXYuY2xhc3NOYW1lID0gJ3RpdGxlRGl2JztcbiAgICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlRGl2Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LmNsYXNzTmFtZSA9ICdtYWluRGl2JztcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkRpdicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuICAgIGNvbnN0IHNpZGVDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlQ29udGFpbmVyRGl2LmNsYXNzTmFtZSA9ICdzaWRlQ29udGFpbmVyRGl2JztcbiAgICBzaWRlQ29udGFpbmVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2lkZUNvbnRhaW5lckRpdicpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoc2lkZUNvbnRhaW5lckRpdik7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRhaW5lckRpdi5jbGFzc05hbWUgPSAnbWFpbkNvbnRhaW5lckRpdic7XG4gICAgbWFpbkNvbnRhaW5lckRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5Db250YWluZXJEaXYnKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5Db250YWluZXJEaXYpO1xuICB9O1xuXG4gIGNvbnN0IG1haW5Db250YWluZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIG1haW5Db250YWluZXJzKCk7XG5cbiAgICBjb25zdCBtYWluQ29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS5jbGFzc05hbWUgPSAnbWFpbkNvbnRlbnRUaXRsZSc7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5Db250ZW50VGl0bGUnKTtcbiAgICBtYWluQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50VGl0bGUpO1xuICAgIG1haW5Db250ZW50VGl0bGUudGV4dENvbnRlbnQgPSAncHJvamVjdHMnO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc05hbWUgPSAnbWFpbkNvbnRlbnQnO1xuICAgIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkNvbnRlbnQnKTtcbiAgICBtYWluQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgfTtcblxuICBjb25zdCBzaWRlQ29udGFpbmVyQ29udGVudCA9ICgpID0+IHtcbiAgICBtYWluQ29udGFpbmVyQ29udGVudCgpO1xuXG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVUYWIuY2xhc3NOYW1lID0gJ2hvbWVUYWIgdGFiJztcbiAgICBob21lVGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZVRhYicpO1xuICAgIGhvbWVUYWIudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgc2lkZUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheWluZ1RvZG9zLnByb2plY3REaXZzKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTmFtZSA9ICduZXdQcm9qZWN0IHRhYic7XG4gICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Byb2plY3QnKTtcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcbiAgICBzaWRlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbHMubmV3UHJvamVjdE1vZGFsKTtcblxuICAgIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUb2RvLmNsYXNzTmFtZSA9ICduZXdUb2RvIHRhYic7XG4gICAgbmV3VG9kby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1RvZG8nKTtcbiAgICBuZXdUb2RvLnRleHRDb250ZW50ID0gJ0FkZCBUbyBEbyc7XG4gICAgc2lkZUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICBuZXdUb2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9kb01vZGFsLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWwgdG9kb01vZGFsJztcbiAgICAgIHRvZG9Nb2RhbC5pZCA9ICd0b2RvTW9kYWwnO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Nb2RhbCk7XG5cbiAgICAgIGNvbnN0IHRvZG9Nb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvZG9Nb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbENvbnRlbnQgVG9kb01vZGFsQ29udGVudCc7XG4gICAgICB0b2RvTW9kYWxDb250ZW50LmlkID0gJ3RvZG9Nb2RhbENvbnRlbnQnO1xuICAgICAgdG9kb01vZGFsLmFwcGVuZENoaWxkKHRvZG9Nb2RhbENvbnRlbnQpO1xuXG4gICAgICBjb25zdCB0b2RvTW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9kb01vZGFsVGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbFRpdGxlIHRvZG9Nb2RhbFRpdGxlJztcbiAgICAgIHRvZG9Nb2RhbFRpdGxlLmlkID0gJ3RvZG9Nb2RhbFRpdGxlJztcbiAgICAgIHRvZG9Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb01vZGFsVGl0bGUpO1xuICAgICAgdG9kb01vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnRW50ZXIgVG8gRG8gVGl0bGUnO1xuXG4gICAgICBjb25zdCB0b2RvTW9kYWxUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHRvZG9Nb2RhbFRpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbElucHV0IHRvZG9Nb2RhbFRpdGxlSW5wdXQnO1xuICAgICAgdG9kb01vZGFsVGl0bGVJbnB1dC5pZCA9ICcgVG9kb01vZGFsSW5wdXQnO1xuICAgICAgdG9kb01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxUaXRsZUlucHV0KTtcblxuICAgICAgY29uc3QgdG9kb01vZGFsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvZG9Nb2RhbERlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICcgdG9kb01vZGFsRGVzY3JpcHRpb24nO1xuICAgICAgdG9kb01vZGFsRGVzY3JpcHRpb24uaWQgPSAndG9kb01vZGFsRGVzY3JpcHRpb24nO1xuICAgICAgdG9kb01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxEZXNjcmlwdGlvbik7XG4gICAgICB0b2RvTW9kYWxEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdFbnRlciBEZXNjcmlwdGlvbic7XG5cbiAgICAgIGNvbnN0IHRvZG9Nb2RhbERlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdURVhUQVJFQScpO1xuICAgICAgdG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsSW5wdXQgdG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dCc7XG4gICAgICB0b2RvTW9kYWxEZXNjcmlwdGlvbklucHV0LmlkID0gJyB0b2RvTW9kYWxEZXNjcmlwdGlvbklucHV0JztcbiAgICAgIHRvZG9Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAgIGNvbnN0IHRvZG9Nb2RhbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b2RvTW9kYWxQcmlvcml0eS5jbGFzc05hbWUgPSAnIHRvZG9Nb2RhbERlc2NyaXB0aW9uIHRvZG9Nb2RhbFByaW9yaXR5JztcbiAgICAgIHRvZG9Nb2RhbFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9Nb2RhbFByaW9yaXR5SW5wdXQnKTtcbiAgICAgIHRvZG9Nb2RhbFByaW9yaXR5LmlkID0gJ3RvZG9Nb2RhbERlc2NyaXB0aW9uJztcbiAgICAgIHRvZG9Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb01vZGFsUHJpb3JpdHkpO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnU2VsZWN0IFByaW9yaXR5JztcblxuICAgICAgY29uc3QgdG9kb01vZGFsUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHlJbnB1dC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsSW5wdXQgdG9kb01vZGFsUHJpb3JpdHlJbnB1dCc7XG4gICAgICB0b2RvTW9kYWxQcmlvcml0eUlucHV0LmlkID0gJyB0b2RvTW9kYWxQcmlvcml0eUlucHV0JztcbiAgICAgIHRvZG9Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb01vZGFsUHJpb3JpdHlJbnB1dCk7XG5cbiAgICAgIGNvbnN0IHRvZG9Nb2RhbFByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxQcmlvcml0eUhpZ2gpO1xuXG4gICAgICBjb25zdCB0b2RvTW9kYWxQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdNZWRpdW0nKTtcbiAgICAgIHRvZG9Nb2RhbFByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICB0b2RvTW9kYWxQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHRvZG9Nb2RhbFByaW9yaXR5TWVkaXVtKTtcblxuICAgICAgY29uc3QgdG9kb01vZGFsUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHRvZG9Nb2RhbFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG4gICAgICB0b2RvTW9kYWxQcmlvcml0eUxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxQcmlvcml0eUxvdyk7XG5cbiAgICAgIGNvbnN0IHRvZG9Nb2RhbER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvZG9Nb2RhbER1ZURhdGUuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbER1ZURhdGUgVG9kb01vZGFsRHVlRGF0ZSc7XG4gICAgICB0b2RvTW9kYWxEdWVEYXRlLmlkID0gJ3Byb2plY3RNb2RhbER1ZURhdGUnO1xuICAgICAgdG9kb01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxEdWVEYXRlKTtcbiAgICAgIHRvZG9Nb2RhbER1ZURhdGUudGV4dENvbnRlbnQgPSAnRW50ZXIgRHVlIERhdGUnO1xuXG4gICAgICBjb25zdCB0b2RvTW9kYWxEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgdG9kb01vZGFsRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICB0b2RvTW9kYWxEdWVEYXRlSW5wdXQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbER1ZURhdGVJbnB1dCB0b2RvTW9kYWxEdWVEYXRlSW5wdXQnO1xuICAgICAgdG9kb01vZGFsRHVlRGF0ZUlucHV0LmlkID0gJyB0b2RvTW9kYWxEdWVEYXRlSW5wdXQnO1xuICAgICAgdG9kb01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxEdWVEYXRlSW5wdXQpO1xuXG4gICAgICBjb25zdCB0b2RvTW9kYWxPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b2RvTW9kYWxPcHRpb25zLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxPcHRpb25zIHRvZG9Nb2RhbE9wdGlvbnMnO1xuICAgICAgdG9kb01vZGFsT3B0aW9ucy5pZCA9ICcgdG9kb01vZGFsT3B0aW9ucyc7XG4gICAgICB0b2RvTW9kYWwuYXBwZW5kQ2hpbGQodG9kb01vZGFsT3B0aW9ucyk7XG5cbiAgICAgIGNvbnN0IHRvZG9Nb2RhbENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9kb01vZGFsQ2FuY2VsLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxDYW5jZWwgcHJvamVjdE9wdGlvbnMgdG9kb01vZGFsQ2FuY2VsJztcbiAgICAgIHRvZG9Nb2RhbENhbmNlbC5pZCA9ICcgdG9kb01vZGFsQ2FuY2VsJztcbiAgICAgIHRvZG9Nb2RhbE9wdGlvbnMuYXBwZW5kQ2hpbGQodG9kb01vZGFsQ2FuY2VsKTtcbiAgICAgIHRvZG9Nb2RhbENhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgdG9kb01vZGFsQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB0b2RvTW9kYWxTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvZG9Nb2RhbFN1Ym1pdC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsU3VibWl0IHByb2plY3RPcHRpb25zIHRvZG9Nb2RhbFN1Ym1pdCc7XG4gICAgICB0b2RvTW9kYWxTdWJtaXQuaWQgPSAnIHRvZG9Nb2RhbFN1Ym1pdCc7XG4gICAgICB0b2RvTW9kYWxPcHRpb25zLmFwcGVuZENoaWxkKHRvZG9Nb2RhbFN1Ym1pdCk7XG4gICAgICB0b2RvTW9kYWxTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgIHRvZG9Nb2RhbFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICB0b2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlVmFsdWUgPSB0b2RvTW9kYWxUaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25WYWx1ZSA9IHRvZG9Nb2RhbERlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eVZhbHVlID0gdG9kb01vZGFsUHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb0R1ZURhdGVWYWx1ZSA9IHRvZG9Nb2RhbER1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3VG9kb09iamVjdCA9IG5ldyB0b2RvT2JqZWN0KHRvZG9UaXRsZVZhbHVlLCB0b2RvRGVzY3JpcHRpb25WYWx1ZSwgdG9kb1ByaW9yaXR5VmFsdWUsIHRvZG9EdWVEYXRlVmFsdWUpO1xuICAgICAgICBkaXNwbGF5aW5nVG9kb3MuZ2FuZ2FuZyhuZXdUb2RvT2JqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IHNpZGVDb250YWluZXJDb250ZW50IH07XG59KSgpO1xuXG5jb25zdCBtb2RhbHMgPSAoKCkgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdE1vZGFsLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWwnO1xuICAgIHByb2plY3RNb2RhbC5pZCA9ICdwcm9qZWN0TW9kYWwnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TW9kYWwpO1xuXG4gICAgY29uc3QgcHJvamVjdE1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RNb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbENvbnRlbnQnO1xuICAgIHByb2plY3RNb2RhbENvbnRlbnQuaWQgPSAncHJvamVjdE1vZGFsQ29udGVudCc7XG4gICAgcHJvamVjdE1vZGFsLmFwcGVuZENoaWxkKHByb2plY3RNb2RhbENvbnRlbnQpO1xuXG4gICAgY29uc3QgcHJvamVjdE1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TW9kYWxUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsVGl0bGUnO1xuICAgIHByb2plY3RNb2RhbFRpdGxlLmlkID0gJ3Byb2plY3RNb2RhbFRpdGxlJztcbiAgICBwcm9qZWN0TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RNb2RhbFRpdGxlKTtcbiAgICBwcm9qZWN0TW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdFbnRlciBQcm9qZWN0IE5hbWUnO1xuXG4gICAgY29uc3QgcHJvamVjdE1vZGFsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RNb2RhbElucHV0LmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxJbnB1dCc7XG4gICAgcHJvamVjdE1vZGFsSW5wdXQuaWQgPSAnIHByb2plY3RNb2RhbElucHV0JztcbiAgICBwcm9qZWN0TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RNb2RhbElucHV0KTtcblxuICAgIGNvbnN0IHByb2plY3RNb2RhbER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TW9kYWxEdWVEYXRlLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxEdWVEYXRlJztcbiAgICBwcm9qZWN0TW9kYWxEdWVEYXRlLmlkID0gJ3Byb2plY3RNb2RhbER1ZURhdGUnO1xuICAgIHByb2plY3RNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdE1vZGFsRHVlRGF0ZSk7XG4gICAgcHJvamVjdE1vZGFsRHVlRGF0ZS50ZXh0Q29udGVudCA9ICdFbnRlciBEdWUgRGF0ZSc7XG5cbiAgICBjb25zdCBwcm9qZWN0TW9kYWxEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RNb2RhbER1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIHByb2plY3RNb2RhbER1ZURhdGVJbnB1dC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsRHVlRGF0ZUlucHV0JztcbiAgICBwcm9qZWN0TW9kYWxEdWVEYXRlSW5wdXQuaWQgPSAnIHByb2plY3RNb2RhbER1ZURhdGVJbnB1dCc7XG4gICAgcHJvamVjdE1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TW9kYWxEdWVEYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgcHJvamVjdE1vZGFsT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RNb2RhbE9wdGlvbnMuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbE9wdGlvbnMnO1xuICAgIHByb2plY3RNb2RhbE9wdGlvbnMuaWQgPSAnIHByb2plY3RNb2RhbE9wdGlvbnMnO1xuICAgIHByb2plY3RNb2RhbC5hcHBlbmRDaGlsZChwcm9qZWN0TW9kYWxPcHRpb25zKTtcblxuICAgIGNvbnN0IHByb2plY3RNb2RhbENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RNb2RhbENhbmNlbC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsQ2FuY2VsIHByb2plY3RPcHRpb25zJztcbiAgICBwcm9qZWN0TW9kYWxDYW5jZWwuaWQgPSAnIHByb2plY3RNb2RhbENhbmNlbCc7XG4gICAgcHJvamVjdE1vZGFsT3B0aW9ucy5hcHBlbmRDaGlsZChwcm9qZWN0TW9kYWxDYW5jZWwpO1xuICAgIHByb2plY3RNb2RhbENhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHByb2plY3RNb2RhbENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvamVjdE1vZGFsU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdE1vZGFsU3VibWl0LmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxTdWJtaXQgcHJvamVjdE9wdGlvbnMnO1xuICAgIHByb2plY3RNb2RhbFN1Ym1pdC5pZCA9ICcgcHJvamVjdE1vZGFsU3VibWl0JztcbiAgICBwcm9qZWN0TW9kYWxPcHRpb25zLmFwcGVuZENoaWxkKHByb2plY3RNb2RhbFN1Ym1pdCk7XG4gICAgcHJvamVjdE1vZGFsU3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgcHJvamVjdE1vZGFsU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIGNvbnN0IG5ld1RvZG8gPSBbXTtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3RzID0gbmV3IHByb2plY3RPYmplY3QocHJvamVjdE1vZGFsSW5wdXQudmFsdWUsIHByb2plY3RNb2RhbER1ZURhdGVJbnB1dC52YWx1ZSwgbmV3VG9kbyk7XG4gICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3RzKTtcbiAgICAgIGRpc3BsYXlpbmdUb2Rvcy5wcm9qZWN0RGl2cygpO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgICAgc2V0RGF0YSgpO1xuICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbiAgICAgIHJldHVybiB7IG5ld1RvZG8gfTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Q29tcG9uZW50c1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0UGFnZS5jbGFzc05hbWUgPSAncHJvamVjdFBhZ2UnO1xuICAgIHByb2plY3RQYWdlLmlkID0gJ3Byb2plY3RQYWdlJztcbiAgfTtcblxuICByZXR1cm4geyBuZXdQcm9qZWN0TW9kYWwsIHByb2plY3RDb21wb25lbnRzUGFnZSB9O1xufSkoKTtcblxuY29uc3QgZGlzcGxheWluZ1RvZG9zID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdERpdnMgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUb2RvJyk7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlbXAuY2xhc3NOYW1lID0gYHByb2plY3Qke2l9IHRvZG9gO1xuICAgICAgdGVtcC5pZCA9IGBwcm9qZWN0JHtpfWA7XG4gICAgICB0ZW1wLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke2l9YCk7XG4gICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0ZW1wKTtcblxuICAgICAgLy8gb3BlbmluZyBvYmplY3QgZnVuY3Rpb25cbiAgICAgIGNvbnN0IG9wZW5Qcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGdsb2JhbFRoaXMuYXJyYXlEYXRhVmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG4gICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBtYWluQ29udGVudFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdLnByb2plY3RUaXRsZX1gO1xuICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IHByb2plY3RzW2FycmF5RGF0YVZhbHVlXS50b2RvLmxlbmd0aDsgeisrKSB7XG4gICAgICAgICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUb2RvJyk7XG4gICAgICAgICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHRvZG9EaXNwbGF5LmNsYXNzTmFtZSA9ICd0b2RvRGlzcGxheSc7XG4gICAgICAgICAgdG9kb0Rpc3BsYXkuaWQgPSBgdG9kb0Rpc3BsYXkke3p9YDtcbiAgICAgICAgICB0b2RvRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBgJHt6fWApO1xuICAgICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRvZG9EaXNwbGF5KTtcblxuICAgICAgICAgIGNvbnN0IHRvZG9Ub3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0b2RvVG9wRGl2LmNsYXNzTmFtZSA9ICd0b2RvVG9wRGl2JztcbiAgICAgICAgICB0b2RvVG9wRGl2LmlkID0gYHRvZG9Ub3BEaXYke3p9YDtcbiAgICAgICAgICB0b2RvVG9wRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke3p9YCk7XG4gICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb1RvcERpdik7XG5cbiAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0b2RvVGl0bGUuY2xhc3NOYW1lID0gJ3RvZG9UaXRsZSc7XG4gICAgICAgICAgdG9kb1RpdGxlLmlkID0gYHRvZG9UaXRsZSR7en1gO1xuICAgICAgICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBgJHt6fWApO1xuICAgICAgICAgIHRvZG9Ub3BEaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdLnRvZG9bel0udGl0bGV9YDtcblxuICAgICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAndG9kb0Rlc2NyaXB0aW9uJztcbiAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uaWQgPSBgdG9kb0Rlc2NyaXB0aW9uJHt6fWA7XG4gICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke3p9YCk7XG4gICAgICAgICAgdG9kb1RvcERpdi5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtwcm9qZWN0c1thcnJheURhdGFWYWx1ZV0udG9kb1t6XS5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0b2RvRHVlRGF0ZS5jbGFzc05hbWUgPSAndG9kb0R1ZURhdGUnO1xuICAgICAgICAgIHRvZG9EdWVEYXRlLmlkID0gYHRvZG9EdWVEYXRlJHt6fWA7XG4gICAgICAgICAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgYCR7en1gKTtcbiAgICAgICAgICB0b2RvVG9wRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtwcm9qZWN0c1thcnJheURhdGFWYWx1ZV0udG9kb1t6XS5wcmlvcml0eX1gO1xuXG4gICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdG9kb1ByaW9yaXR5LmNsYXNzTmFtZSA9ICd0b2RvUHJpb3JpdHknO1xuICAgICAgICAgIHRvZG9Qcmlvcml0eS5pZCA9IGB0b2RvUHJpb3JpdHkke3p9YDtcbiAgICAgICAgICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgYCR7en1gKTtcbiAgICAgICAgICB0b2RvVG9wRGl2LmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG4gICAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RzW2FycmF5RGF0YVZhbHVlXS50b2RvW3pdLmR1ZURhdGV9YDtcblxuICAgICAgICAgIGNvbnN0IHRvZG9Cb3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0b2RvQm90RGl2LmNsYXNzTmFtZSA9ICd0b2RvQm90RGl2JztcbiAgICAgICAgICB0b2RvQm90RGl2LmlkID0gYHRvZG9Cb3REaXYke3p9YDtcbiAgICAgICAgICB0b2RvQm90RGl2LnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke3p9YCk7XG4gICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb0JvdERpdik7XG4gICAgICAgICAgdG9kb0JvdERpdi50ZXh0Q29udGVudCA9ICdYJztcblxuICAgICAgICAgIGNvbnN0IHJlVG9kbyA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb0FycmF5VmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG4gICAgICAgICAgICBwcm9qZWN0c1thcnJheURhdGFWYWx1ZV0udG9kby5zcGxpY2UodG9kb0FycmF5VmFsdWUsIDEpO1xuXG4gICAgICAgICAgICAvLy9cbiAgICAgICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBwcm9qZWN0c1thcnJheURhdGFWYWx1ZV0udG9kby5sZW5ndGg7IHorKykge1xuICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICB0b2RvRGlzcGxheS5jbGFzc05hbWUgPSAndG9kb0Rpc3BsYXknO1xuICAgICAgICAgICAgICB0b2RvRGlzcGxheS5pZCA9IGB0b2RvRGlzcGxheSR7en1gO1xuICAgICAgICAgICAgICB0b2RvRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBgJHt6fWApO1xuICAgICAgICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvRGlzcGxheSk7XG5cbiAgICAgICAgICAgICAgY29uc3QgdG9kb1RvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICB0b2RvVG9wRGl2LmNsYXNzTmFtZSA9ICd0b2RvVG9wRGl2JztcbiAgICAgICAgICAgICAgdG9kb1RvcERpdi5pZCA9IGB0b2RvVG9wRGl2JHt6fWA7XG4gICAgICAgICAgICAgIHRvZG9Ub3BEaXYuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgYCR7en1gKTtcbiAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb1RvcERpdik7XG5cbiAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIHRvZG9UaXRsZS5jbGFzc05hbWUgPSAndG9kb1RpdGxlJztcbiAgICAgICAgICAgICAgdG9kb1RpdGxlLmlkID0gYHRvZG9UaXRsZSR7en1gO1xuICAgICAgICAgICAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgYCR7en1gKTtcbiAgICAgICAgICAgICAgdG9kb1RvcERpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdLnRvZG9bel0udGl0bGV9YDtcblxuICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICd0b2RvRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uaWQgPSBgdG9kb0Rlc2NyaXB0aW9uJHt6fWA7XG4gICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBgJHt6fWApO1xuICAgICAgICAgICAgICB0b2RvVG9wRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtwcm9qZWN0c1thcnJheURhdGFWYWx1ZV0udG9kb1t6XS5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIHRvZG9EdWVEYXRlLmNsYXNzTmFtZSA9ICd0b2RvRHVlRGF0ZSc7XG4gICAgICAgICAgICAgIHRvZG9EdWVEYXRlLmlkID0gYHRvZG9EdWVEYXRlJHt6fWA7XG4gICAgICAgICAgICAgIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke3p9YCk7XG4gICAgICAgICAgICAgIHRvZG9Ub3BEaXYuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICAgICAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtwcm9qZWN0c1thcnJheURhdGFWYWx1ZV0udG9kb1t6XS5kdWVEYXRlfWA7XG5cbiAgICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIHRvZG9Qcmlvcml0eS5jbGFzc05hbWUgPSAndG9kb1ByaW9yaXR5JztcbiAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5LmlkID0gYHRvZG9Qcmlvcml0eSR7en1gO1xuICAgICAgICAgICAgICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgYCR7en1gKTtcbiAgICAgICAgICAgICAgdG9kb1RvcERpdi5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuICAgICAgICAgICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdLnRvZG9bel0ucHJpb3JpdHl9YDtcblxuICAgICAgICAgICAgICBjb25zdCB0b2RvQm90RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIHRvZG9Cb3REaXYuY2xhc3NOYW1lID0gJ3RvZG9Cb3REaXYnO1xuICAgICAgICAgICAgICB0b2RvQm90RGl2LmlkID0gYHRvZG9Cb3REaXYke3p9YDtcbiAgICAgICAgICAgICAgdG9kb0JvdERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBgJHt6fWApO1xuICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b2RvQm90RGl2KTtcbiAgICAgICAgICAgICAgdG9kb0JvdERpdi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgdG9kb0JvdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlVG9kbyk7XG5cbiAgICAgICAgICAgICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUb2RvJyk7XG4gICAgICAgICAgICAgIG5ld1RvZG9CdXR0b24uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0RGF0YSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdLnRvZG8pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0b2RvQm90RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVUb2RvKTtcblxuICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdW1widG9kb1wiXVt6XVsndGl0bGUnXX0sJHtwcm9qZWN0c1thcnJheURhdGFWYWx1ZV1bXCJ0b2RvXCJdW3pdWydkdWVEYXRlJ119YFxuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2FycmF5RGF0YVZhbHVlXS50b2RvW3pdKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHRvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9wRGl2LmNsYXNzTmFtZSA9ICd0b3BEaXYnO1xuICAgICAgdG9wRGl2LmlkID0gYHRvcERpdiR7aX1gO1xuICAgICAgdG9wRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke2l9YCk7XG4gICAgICB0ZW1wLmFwcGVuZENoaWxkKHRvcERpdik7XG4gICAgICB0b3BEaXYudGV4dENvbnRlbnQgPSBgUHJvamVjdCBUaXRsZTogJHtwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGV9YDtcbiAgICAgIHRvcERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgb3BlblByb2plY3QoZXZlbnQpO1xuICAgICAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1RvZG8nKTtcbiAgICAgICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHByb2plY3REdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qZWN0RHVlRGF0ZS5jbGFzc05hbWUgPSAncHJvamVjdER1ZURhdGUnO1xuICAgICAgcHJvamVjdER1ZURhdGUuaWQgPSAncHJvamVjdER1ZURhdGUnO1xuICAgICAgcHJvamVjdER1ZURhdGUuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgYCR7aX1gKTtcbiAgICAgIHRvcERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSk7XG4gICAgICBwcm9qZWN0RHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtwcm9qZWN0c1tpXS5kdWVEYXRlfWA7XG5cbiAgICAgIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYm90dG9tRGl2LmNsYXNzTmFtZSA9ICdib3R0b21EaXYnO1xuICAgICAgYm90dG9tRGl2LmlkID0gYGJvdHRvbURpdiR7aX1gO1xuICAgICAgYm90dG9tRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke2l9YCk7XG4gICAgICB0ZW1wLmFwcGVuZENoaWxkKGJvdHRvbURpdik7XG4gICAgICBib3R0b21EaXYudGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgICAgIC8vIHJlbW92aW5nIHByb2plY3QgZnVuY3Rpb25hbGl0eVxuICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaXRlbSwgMSk7XG4gICAgICAgIHNldERhdGEoKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgICAgICBwcm9qZWN0RGl2cygpO1xuICAgICAgfTtcbiAgICAgIGJvdHRvbURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVByb2plY3QpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnYW5nYW5nID0gKG9iaikgPT4ge1xuICAgIHByb2plY3RzW2FycmF5RGF0YVZhbHVlXS50b2RvLnB1c2gob2JqKTtcbiAgICBwcm9qZWN0RGl2cygpO1xuICAgIGNvbnN0IGdhbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChbYHRvcERpdiR7YXJyYXlEYXRhVmFsdWV9YF0pO1xuICAgIGdhbmcuY2xpY2soKTtcbiAgICBzZXREYXRhKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcHJvamVjdERpdnMsIGdhbmdhbmcgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRpc3BsYXlpbmdUb2RvcywgbW9kYWxzLCBtYWluUGFnZSB9O1xuIiwiY2xhc3MgcHJvamVjdE9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RUaXRsZSwgZHVlRGF0ZSwgdG9kbykge1xuICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy50b2RvID0gdG9kbztcbiAgfVxufVxuXG5jbGFzcyB0b2RvT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuLy8vIGRhdGEgc3RydWN0dXJlIGZvciBwcm9qZWN0LyB0b2RvIGxpc3QgWyBQcm9qZWN0IG9iamVjdCBcbi8vY29udGFpbmluZyBhIHN1YmFycmF5IHdpdGggbWFueSB0b2RvIG9iamVjdHNdXG5cbmNvbnN0IHRvZG9nMiA9IFtdO1xuY29uc3QgdG9kb2cxID0gbmV3IHRvZG9PYmplY3QoJ0dvIFNob3BwaW5nJywgJ0dldCBCcmVhZCcsICcwMy8xMi8yMDIxJywgJ0hpZ2gnKTtcbmNvbnN0IHRvZG9nMyA9IG5ldyB0b2RvT2JqZWN0KCdHbyBTaG9wcGluZycsICdHZXQgQmFuYW5hcycsICcwMy8xMi8yMDIxJywgJ0hpZ2gnKTtcbnRvZG9nMi5wdXNoKHRvZG9nMSwgdG9kb2czKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IHByb2plY3RPYmplY3QoJ2RlZmF1bHQnLCAnMDMvMTIvMjAyMScsIHRvZG9nMik7XG5jb25zdCBwcm9qZWN0cyA9IFtkZWZhdWx0UHJvamVjdF07XG5jb25zdCB0b2RvTGlzdCA9IFtdO1xuXG5leHBvcnQge1xuICBwcm9qZWN0T2JqZWN0LFxuICB0b2RvT2JqZWN0LFxuICB0b2RvTGlzdCxcbiAgcHJvamVjdHMsXG4gIGRlZmF1bHRQcm9qZWN0LFxuXG59O1xuXG4vLy8gLy9jcmVhdGUgcGFnZSBmb3IgZWFjaCBwcm9qZWN0IHVwb24gY2xpY2tpbmcgYW4gYXJyYXkgaXMgY3JlYXRlZCBhbmQgZmlsbGVkIHdpdGggYSB0b2RvIG9iamVjdFxuIiwiaW1wb3J0IHt0b2RvTGlzdE9iamVjdCwgdG9kb0xpc3QsZGVmYXVsdFByb2plY3QscHJvamVjdHN9IGZyb20gXCIuL2NyZWF0ZVRvZG9cIlxuaW1wb3J0e21haW5QYWdlLGRpc3BsYXlpbmdUb2RvcyxldmVudENsaWNrRnVuY3Rpb25zfSBmcm9tIFwiLi9ET01cIlxuXG5cblxuZnVuY3Rpb24gc2V0RGF0YSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxubWFpblBhZ2Uuc2lkZUNvbnRhaW5lckNvbnRlbnQoKTtcbmRpc3BsYXlpbmdUb2Rvcy5wcm9qZWN0RGl2cygpO1xuXG5cblxuXG5leHBvcnR7c2V0RGF0YVxuXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=