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
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index */ "./src/index.js");
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");



const container = document.getElementById('container')


const mainPage  = (()=>{

const mainContainers = () =>{
    const titleDiv = document.createElement('div');
titleDiv.className = "titleDiv";
titleDiv.setAttribute('id',"titleDiv");
container.appendChild(titleDiv);

const mainDiv = document.createElement('div');
mainDiv.className = "mainDiv";
mainDiv.setAttribute('id',"mainDiv");
container.appendChild(mainDiv);

 const sideContainerDiv = document.createElement('div');
 sideContainerDiv.className = "sideContainerDiv";
 sideContainerDiv.setAttribute('id',"sideContainerDiv");
 mainDiv.appendChild(sideContainerDiv);

 const mainContainerDiv = document.createElement('div');
 mainContainerDiv.className = "mainContainerDiv";
 mainContainerDiv.setAttribute('id',"mainContainerDiv");
 mainDiv.appendChild(mainContainerDiv);
}


const mainContainerContent = ()=>{
    mainContainers();

    const mainContentTitle = document.createElement('div');
    mainContentTitle.className = "mainContentTitle";
    mainContentTitle.setAttribute('id',"mainContentTitle");
    mainContainerDiv.appendChild(mainContentTitle);
    mainContentTitle.textContent = "projects"

    const mainContent = document.createElement('div');
    mainContent.className = "mainContent";
    mainContent.setAttribute('id',"mainContent");
    mainContainerDiv.appendChild(mainContent);

}

const sideContainerContent = ()=>{
    mainContainerContent();

    const homeTab = document.createElement('div');
    homeTab.className = "homeTab tab";
    homeTab.setAttribute('id',"homeTab");
    homeTab.textContent = "Home"
    sideContainerDiv.appendChild(homeTab);
    homeTab.addEventListener('click',displayingTodos.projectDivs)

    const newProject = document.createElement('div');
    newProject.className = "newProject tab";
    newProject.setAttribute('id',"newProject");
    newProject.textContent = "New Project"
    sideContainerDiv.appendChild(newProject);
    newProject.addEventListener('click',modals.newProjectModal)
 

    const newTodo = document.createElement('div');
    newTodo.className = "newTodo tab";
    newTodo.setAttribute('id',"newTodo");
    newTodo.textContent = "Add To Do"
    sideContainerDiv.appendChild(newTodo);
    newTodo.style.display= "none";
    newTodo.addEventListener('click',function(){
        
        const todoModal = document.createElement('div')
        todoModal.className = 'projectModal todoModal'
        todoModal.id = 'todoModal'
        container.appendChild(todoModal)

        const todoModalContent = document.createElement('div')
        todoModalContent.className = 'projectModalContent TodoModalContent'
        todoModalContent.id = 'todoModalContent'
        todoModal.appendChild(todoModalContent)

        const todoModalTitle = document.createElement('div')
        todoModalTitle.className = 'projectModalTitle todoModalTitle'
        todoModalTitle.id = 'todoModalTitle'
        todoModalContent.appendChild(todoModalTitle)
        todoModalTitle.textContent = "Enter To Do Title"

        const todoModalTitleInput = document.createElement('input')
        todoModalTitleInput.className = 'projectModalInput todoModalTitleInput'
        todoModalTitleInput.id = ' TodoModalInput'
        todoModalContent.appendChild(todoModalTitleInput)

        const todoModalDescription = document.createElement('div')
        todoModalDescription.className = ' todoModalDescription'
        todoModalDescription.id = 'todoModalDescription'
        todoModalContent.appendChild(todoModalDescription)
        todoModalDescription.textContent = "Enter Description"

        const todoModalDescriptionInput = document.createElement('TEXTAREA')
        todoModalDescriptionInput.className = 'projectModalInput todoModalDescriptionInput'
        todoModalDescriptionInput.id = ' todoModalDescriptionInput'
        todoModalContent.appendChild( todoModalDescriptionInput)


        const todoModalPriority = document.createElement('div')
        todoModalPriority.className = ' todoModalDescription todoModalPriority'
        todoModalPriority.setAttribute('for','todoModalPriorityInput')
        todoModalPriority.id = 'todoModalDescription'
        todoModalContent.appendChild(todoModalPriority)
        todoModalPriority.textContent = "Select Priority"

        const todoModalPriorityInput = document.createElement('select')
        todoModalPriorityInput.className = 'projectModalInput todoModalPriorityInput'
        todoModalPriorityInput.id = ' todoModalPriorityInput'
        todoModalContent.appendChild( todoModalPriorityInput)

        const todoModalPriorityHigh = document.createElement('option')
        todoModalPriorityHigh.setAttribute('value','High')
        todoModalPriorityHigh.textContent = "High"
        todoModalPriorityInput.appendChild(todoModalPriorityHigh)

        const todoModalPriorityMedium = document.createElement('option')
        todoModalPriorityMedium.setAttribute('value','Medium')
        todoModalPriorityMedium.textContent = "Medium"
        todoModalPriorityInput.appendChild(todoModalPriorityMedium)

        const todoModalPriorityLow = document.createElement('option')
        todoModalPriorityLow.setAttribute('value','Low')
        todoModalPriorityLow.textContent = "Low"
        todoModalPriorityInput.appendChild(todoModalPriorityLow)



        const todoModalDueDate = document.createElement('div')
        todoModalDueDate.className = 'projectModalDueDate TodoModalDueDate'
        todoModalDueDate.id = 'projectModalDueDate'
        todoModalContent.appendChild(todoModalDueDate)
        todoModalDueDate.textContent = "Enter Due Date"

        const todoModalDueDateInput = document.createElement('input')
        todoModalDueDateInput.setAttribute('type','date')
        todoModalDueDateInput.className = 'projectModalDueDateInput todoModalDueDateInput'
        todoModalDueDateInput.id = ' todoModalDueDateInput'
        todoModalContent.appendChild( todoModalDueDateInput)




        const todoModalOptions = document.createElement('div')
        todoModalOptions.className = 'projectModalOptions todoModalOptions'
        todoModalOptions.id = ' todoModalOptions'
        todoModal.appendChild(todoModalOptions)


        const todoModalCancel = document.createElement('div')
        todoModalCancel.className = 'projectModalCancel projectOptions todoModalCancel'
        todoModalCancel.id = ' todoModalCancel'
        todoModalOptions.appendChild( todoModalCancel)
        todoModalCancel.textContent = "Cancel"
        todoModalCancel.addEventListener('click',function(){
            todoModal.style.display = "none";
        })

        const todoModalSubmit = document.createElement('div')
        todoModalSubmit.className = 'projectModalSubmit projectOptions todoModalSubmit'
        todoModalSubmit.id = ' todoModalSubmit'
        todoModalOptions.appendChild( todoModalSubmit)
        todoModalSubmit.textContent = "Submit"
        todoModalSubmit.addEventListener('click',function (event){
            todoModal.style.display='none'
            const todoTitleValue= todoModalTitleInput.value;
            const todoDescriptionValue=todoModalDescriptionInput.value;
            const todoPriorityValue = todoModalPriorityInput.value;
            const todoDueDateValue = todoModalDueDateInput.value;
            const newTodoObject = new _createTodo__WEBPACK_IMPORTED_MODULE_2__.todoObject (todoTitleValue,todoDescriptionValue,todoPriorityValue,todoDueDateValue);
            displayingTodos.gangang(newTodoObject)
        })

    })

}

    return{sideContainerContent}
})();

const modals  = (()=>{

    const newProjectModal = ()=>{


        const projectModal = document.createElement('div')
        projectModal.className = 'projectModal'
        projectModal.id = 'projectModal'
        container.appendChild(projectModal)

        const projectModalContent = document.createElement('div')
        projectModalContent.className = 'projectModalContent'
        projectModalContent.id = 'projectModalContent'
        projectModal.appendChild(projectModalContent)

        const projectModalTitle = document.createElement('div')
        projectModalTitle.className = 'projectModalTitle'
        projectModalTitle.id = 'projectModalTitle'
        projectModalContent.appendChild(projectModalTitle)
        projectModalTitle.textContent = "Enter Project Name"

        const projectModalInput = document.createElement('input')
        projectModalInput.className = 'projectModalInput'
        projectModalInput.id = ' projectModalInput'
        projectModalContent.appendChild( projectModalInput)



        const projectModalDueDate = document.createElement('div')
        projectModalDueDate.className = 'projectModalDueDate'
        projectModalDueDate.id = 'projectModalDueDate'
        projectModalContent.appendChild(projectModalDueDate)
        projectModalDueDate.textContent = "Enter Due Date"

        const projectModalDueDateInput = document.createElement('input')
        projectModalDueDateInput.setAttribute('type','date')
        projectModalDueDateInput.className = 'projectModalDueDateInput'
        projectModalDueDateInput.id = ' projectModalDueDateInput'
        projectModalContent.appendChild( projectModalDueDateInput)




        const projectModalOptions = document.createElement('div')
        projectModalOptions.className = 'projectModalOptions'
        projectModalOptions.id = ' projectModalOptions'
        projectModal.appendChild(projectModalOptions)


        const projectModalCancel = document.createElement('div')
        projectModalCancel.className = 'projectModalCancel projectOptions'
        projectModalCancel.id = ' projectModalCancel'
        projectModalOptions.appendChild( projectModalCancel)
        projectModalCancel.textContent = "Cancel"
        projectModalCancel.addEventListener('click',function(){
            projectModal.style.display = "none";
        })

        const projectModalSubmit = document.createElement('div')
        projectModalSubmit.className = 'projectModalSubmit projectOptions'
        projectModalSubmit.id = ' projectModalSubmit'
        projectModalOptions.appendChild( projectModalSubmit)
        projectModalSubmit.textContent = "Submit"
        projectModalSubmit.addEventListener('click',function(){
            projectModal.style.display = "none";
            
            let newTodo = [];
            let newProjects = new _createTodo__WEBPACK_IMPORTED_MODULE_2__.projectObject (projectModalInput.value,projectModalDueDateInput.value,newTodo);
            _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects.push(newProjects);
            displayingTodos.projectDivs();
            console.log(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects)
            ;(0,_src_index__WEBPACK_IMPORTED_MODULE_1__.setData)()
            console.log(localStorage)
            return{newTodo}
 
        })

    }

    const projectComponentsPage = ()=>{
        const projectPage = document.createElement('div');
        projectPage.className ="projectPage";
        projectPage.id = "projectPage"; 

    }


return{newProjectModal,projectComponentsPage}
})()



const displayingTodos  = (()=>{

    const projectDivs = ()=>{
        const newTodoButton = document.getElementById("newTodo")
        mainContentTitle.textContent = `Projects`
        newTodoButton.style.display = "none"
        mainContent.innerHTML = "";
        for(let i=0;i<_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects.length;i++){
            let temp = document.createElement('div');
            temp.className = `project${i} todo`;
            temp.id =`project${i}`
            temp.setAttribute("data-value",`${i}`)
            mainContent.appendChild(temp);
       

            //opening object function
            const openProject = (event)=>{
            globalThis.arrayDataValue = event.target.getAttribute('data-value')
            mainContent.innerHTML="";
            mainContentTitle.textContent = `${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["projectTitle"]}`
            for(let z = 0;z<_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"].length;z++){

            const newTodoButton = document.getElementById("newTodo")
            newTodoButton.style.display = ""

            const todoDisplay = document.createElement('div')
            todoDisplay.className = `todoDisplay`;
            todoDisplay.id =`todoDisplay${z}`
            todoDisplay.setAttribute("data-value",`${z}`)
            mainContent.appendChild(todoDisplay);


            const todoTopDiv = document.createElement('div')
            todoTopDiv.className = `todoTopDiv`;
            todoTopDiv.id =`todoTopDiv${z}`
            todoTopDiv.setAttribute("data-value",`${z}`)
            todoDisplay.appendChild(todoTopDiv);

            const todoTitle = document.createElement('div')
            todoTitle.className = `todoTitle`;
            todoTitle.id =`todoTitle${z}`
            todoTitle.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoTitle);
            todoTitle.textContent = `Title: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"][z]['title']}`

            const todoDescription = document.createElement('div')
            todoDescription.className = `todoDescription`;
            todoDescription.id =`todoDescription${z}`
            todoDescription.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoDescription);
            todoDescription.textContent = `Description: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"][z]['description']}`

            const todoDueDate = document.createElement('div')
            todoDueDate.className = `todoDueDate`;
            todoDueDate.id =`todoDueDate${z}`
            todoDueDate.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoDueDate);
            todoDueDate.textContent = `Due Date: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"][z]['priority']}`

            const todoPriority = document.createElement('div')
            todoPriority.className = `todoPriority`;
            todoPriority.id =`todoPriority${z}`
            todoPriority.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoPriority);
            todoPriority.textContent = `Priority: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"][z]['dueDate']}`

            const todoBotDiv = document.createElement('div')
            todoBotDiv.className = `todoBotDiv`;
            todoBotDiv.id =`todoBotDiv${z}`
            todoBotDiv.setAttribute("data-value",`${z}`)
            todoDisplay.appendChild(todoBotDiv);
            todoBotDiv.textContent = "X"

            const reTodo = (event)=>{
                const todoArrayValue = event.target.getAttribute('data-value')
                _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"].splice(todoArrayValue,1);

                ///
                mainContent.innerHTML="";
                for(let z = 0;z<_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"].length;z++){
                const todoDisplay = document.createElement('div')
                todoDisplay.className = `todoDisplay`;
                todoDisplay.id =`todoDisplay${z}`
                todoDisplay.setAttribute("data-value",`${z}`)
                mainContent.appendChild(todoDisplay);
    
                const todoTopDiv = document.createElement('div')
                todoTopDiv.className = `todoTopDiv`;
                todoTopDiv.id =`todoTopDiv${z}`
                todoTopDiv.setAttribute("data-value",`${z}`)
                todoDisplay.appendChild(todoTopDiv);

                const todoTitle = document.createElement('div')
            todoTitle.className = `todoTitle`;
            todoTitle.id =`todoTitle${z}`
            todoTitle.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoTitle);
            todoTitle.textContent = `Title: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"][z]['title']}`

            const todoDescription = document.createElement('div')
            todoDescription.className = `todoDescription`;
            todoDescription.id =`todoDescription${z}`
            todoDescription.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoDescription);
            todoDescription.textContent = `Description: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"][z]['description']}`

            const todoDueDate = document.createElement('div')
            todoDueDate.className = `todoDueDate`;
            todoDueDate.id =`todoDueDate${z}`
            todoDueDate.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoDueDate);
            todoDueDate.textContent = `Due Date: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"][z]['dueDate']}`

            const todoPriority = document.createElement('div')
            todoPriority.className = `todoPriority`;
            todoPriority.id =`todoPriority${z}`
            todoPriority.setAttribute("data-value",`${z}`)
            todoTopDiv.appendChild(todoPriority);
            todoPriority.textContent = `Priority: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"][z]['priority']}`

    
            const todoBotDiv = document.createElement('div')
            todoBotDiv.className = `todoBotDiv`;
            todoBotDiv.id =`todoBotDiv${z}`
            todoBotDiv.setAttribute("data-value",`${z}`)
            todoDisplay.appendChild(todoBotDiv);
            todoBotDiv.textContent = "X"
            todoBotDiv.addEventListener('click', reTodo)

            const newTodoButton = document.getElementById("newTodo")
            newTodoButton.style.display = ""
                }
                (0,_src_index__WEBPACK_IMPORTED_MODULE_1__.setData)()
            console.log(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"])
            }

            todoBotDiv.addEventListener('click', reTodo)

            // todoDisplay.textContent = `${projects[arrayDataValue]["todo"][z]['title']},${projects[arrayDataValue]["todo"][z]['dueDate']}`
            console.log(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"][z])
            }
     

        };
            let topDiv = document.createElement('div');
            topDiv.className = `topDiv`;
            topDiv.id =`topDiv${i}`
            topDiv.setAttribute('data-value',`${i}`)
            temp.appendChild(topDiv);
            topDiv.textContent = `Project Title: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[i].projectTitle}`
            topDiv.addEventListener('click',function(){
                openProject(event)
                const newTodoButton = document.getElementById("newTodo")
                newTodoButton.style.display = ""
                
            })
            let projectDueDate = document.createElement('div')
            projectDueDate.className = "projectDueDate"
            projectDueDate.id = "projectDueDate"
            projectDueDate.setAttribute('data-value',`${i}`)
            topDiv.appendChild(projectDueDate);
            projectDueDate.textContent = `Due Date: ${_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[i].dueDate}`
            
            let bottomDiv = document.createElement('div');
            bottomDiv.className = `bottomDiv`;
            bottomDiv.id =`bottomDiv${i}`
            bottomDiv.setAttribute('data-value',`${i}`)
            temp.appendChild(bottomDiv);
            bottomDiv.textContent = "X"
          

            //removing project functionality
            const removeProject = (event)=>{
                const item = event.target.getAttribute('data-value')
                _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects.splice(item,1);
                (0,_src_index__WEBPACK_IMPORTED_MODULE_1__.setData)()
                console.log(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects)
                projectDivs();

        }
        bottomDiv.addEventListener('click',removeProject)
        
    }

}

const gangang = (obj)=>{
    _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue]["todo"].push(obj);
    projectDivs();
    const gang = document.getElementById([`topDiv${arrayDataValue}`])
    gang.click()
    ;(0,_src_index__WEBPACK_IMPORTED_MODULE_1__.setData)()
}

    return{projectDivs,gangang}
})()





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
    constructor(projectTitle,dueDate,todo){
        this.projectTitle= projectTitle;
        this.dueDate = dueDate;
        this.todo = todo;
    }
    
}

class todoObject{
    constructor(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        }
    }
    
///data structure for project/ todo list [ Project object containing a subarray with many todo objects]

const todog2 = []
const todog1 = new todoObject("Go Shopping", "Get Bread",`03/12/2021`,"High")
const todog3 = new todoObject("Go Shopping", "Get Bananas",`03/12/2021`,"High")
todog2.push(todog1,todog3);
const defaultProject = new projectObject("default",`03/12/2021`,todog2);
const projects = [defaultProject];
const todoList = [];






        /////create page for each project upon clicking an array is created and filled with a todo object

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxtREFBVTtBQUNoRDtBQUNBLFNBQVM7O0FBRVQsS0FBSzs7QUFFTDs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7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YnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyIHtcXG4gIGhlaWdodDogOTV2aDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4udGl0bGVEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcblxcbi5tYWluQ29udGFpbmVyRGl2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGVDb250YWluZXJEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgaGVpZ2h0OiA5OS4yJTtcXG4gIHdpZHRoOiAyMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjRhMjtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG59XFxuXFxuLm1haW5Db250ZW50IHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG5cXG4gIGhlaWdodDogODUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTk4OWI7XFxufVxcblxcbi5tYWluQ29udGVudFRpdGxlIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogMTUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtc3R5bGU6IFNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5ODliO1xcbn1cXG5cXG4udGFiIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogNSU7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTgzOGQ7XFxufVxcblxcbi50b2RvIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogMjAlO1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGIyO1xcbn1cXG5cXG4ucHJvamVjdE1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI0YTI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3RNb2RhbENvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNGEyO1xcbn1cXG5cXG4ucHJvamVjdE1vZGFsVGl0bGUge1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TW9kYWxJbnB1dCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA0JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TW9kYWxPcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNGEyO1xcbn1cXG5cXG4ucHJvamVjdE9wdGlvbnMge1xcbiAgYm9yZGVyOiAjNmQ2ODc1IHJpZGdlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDIwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTgzOGQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxufVxcblxcbi50b3BEaXYge1xcbiAgYm9yZGVyOiAjNmQ2ODc1IHJpZGdlO1xcbiAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzAlO1xcbn1cXG5cXG4uYm90dG9tRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiAxMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvRGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAjNmQ2ODc1IHJpZGdlO1xcbiAgaGVpZ2h0OiAzNSU7XFxuICB3aWR0aDogMjUlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNkYjI7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG4udG9kb1RvcERpdiB7XFxuICAvKiBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7ICovXFxuICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogOTAlO1xcbiAgZ2FwOiAxMCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi50b2RvQm90RGl2IHtcXG4gIGhlaWdodDogMTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNSU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvTW9kYWxEZXNjcmlwdGlvbklucHV0IHtcXG4gIGhlaWdodDogMjAlO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLnRvZG9Nb2RhbFByaW9yaXR5SW5wdXQge1xcbiAgaGVpZ2h0OiAxMCU7XFxufVxcblxcbi50b2RvTW9kYWxTdWJtaXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTs7RUFFWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNi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YXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4udGl0bGVEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcblxcbi5tYWluQ29udGFpbmVyRGl2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGVDb250YWluZXJEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgaGVpZ2h0OiA5OS4yJTtcXG4gIHdpZHRoOiAyMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjRhMjtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG59XFxuXFxuLm1haW5Db250ZW50IHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG5cXG4gIGhlaWdodDogODUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTk4OWI7XFxufVxcblxcbi5tYWluQ29udGVudFRpdGxlIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogMTUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtc3R5bGU6IFNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5ODliO1xcbn1cXG5cXG4udGFiIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogNSU7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTgzOGQ7XFxufVxcblxcbi50b2RvIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogMjAlO1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGIyO1xcbn1cXG5cXG4ucHJvamVjdE1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI0YTI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3RNb2RhbENvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNGEyO1xcbn1cXG5cXG4ucHJvamVjdE1vZGFsVGl0bGUge1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TW9kYWxJbnB1dCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA0JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TW9kYWxPcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNGEyO1xcbn1cXG5cXG4ucHJvamVjdE9wdGlvbnMge1xcbiAgYm9yZGVyOiAjNmQ2ODc1IHJpZGdlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDIwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTgzOGQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxufVxcblxcbi50b3BEaXYge1xcbiAgYm9yZGVyOiAjNmQ2ODc1IHJpZGdlO1xcbiAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzAlO1xcbn1cXG5cXG4uYm90dG9tRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiAxMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvRGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAjNmQ2ODc1IHJpZGdlO1xcbiAgaGVpZ2h0OiAzNSU7XFxuICB3aWR0aDogMjUlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNkYjI7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG4udG9kb1RvcERpdiB7XFxuICAvKiBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7ICovXFxuICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogOTAlO1xcbiAgZ2FwOiAxMCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi50b2RvQm90RGl2IHtcXG4gIGhlaWdodDogMTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNSU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvTW9kYWxEZXNjcmlwdGlvbklucHV0IHtcXG4gIGhlaWdodDogMjAlO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLnRvZG9Nb2RhbFByaW9yaXR5SW5wdXQge1xcbiAgaGVpZ2h0OiAxMCU7XFxufVxcblxcbi50b2RvTW9kYWxTdWJtaXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBzZXREYXRhIH0gZnJvbSAnLi4vc3JjL2luZGV4JztcbmltcG9ydCB7IHByb2plY3RPYmplY3QsdG9kb09iamVjdCx0b2RvTGlzdCxwcm9qZWN0cyB9IGZyb20gJy4vY3JlYXRlVG9kbyc7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcblxuXG5jb25zdCBtYWluUGFnZSAgPSAoKCk9PntcblxuY29uc3QgbWFpbkNvbnRhaW5lcnMgPSAoKSA9PntcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGl0bGVEaXYuY2xhc3NOYW1lID0gXCJ0aXRsZURpdlwiO1xudGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsXCJ0aXRsZURpdlwiKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW5EaXYuY2xhc3NOYW1lID0gXCJtYWluRGl2XCI7XG5tYWluRGl2LnNldEF0dHJpYnV0ZSgnaWQnLFwibWFpbkRpdlwiKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuIGNvbnN0IHNpZGVDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiBzaWRlQ29udGFpbmVyRGl2LmNsYXNzTmFtZSA9IFwic2lkZUNvbnRhaW5lckRpdlwiO1xuIHNpZGVDb250YWluZXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsXCJzaWRlQ29udGFpbmVyRGl2XCIpO1xuIG1haW5EaXYuYXBwZW5kQ2hpbGQoc2lkZUNvbnRhaW5lckRpdik7XG5cbiBjb25zdCBtYWluQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gbWFpbkNvbnRhaW5lckRpdi5jbGFzc05hbWUgPSBcIm1haW5Db250YWluZXJEaXZcIjtcbiBtYWluQ29udGFpbmVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLFwibWFpbkNvbnRhaW5lckRpdlwiKTtcbiBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5Db250YWluZXJEaXYpO1xufVxuXG5cbmNvbnN0IG1haW5Db250YWluZXJDb250ZW50ID0gKCk9PntcbiAgICBtYWluQ29udGFpbmVycygpO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50VGl0bGUuY2xhc3NOYW1lID0gXCJtYWluQ29udGVudFRpdGxlXCI7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJyxcIm1haW5Db250ZW50VGl0bGVcIik7XG4gICAgbWFpbkNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChtYWluQ29udGVudFRpdGxlKTtcbiAgICBtYWluQ29udGVudFRpdGxlLnRleHRDb250ZW50ID0gXCJwcm9qZWN0c1wiXG5cbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTmFtZSA9IFwibWFpbkNvbnRlbnRcIjtcbiAgICBtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJyxcIm1haW5Db250ZW50XCIpO1xuICAgIG1haW5Db250YWluZXJEaXYuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuXG59XG5cbmNvbnN0IHNpZGVDb250YWluZXJDb250ZW50ID0gKCk9PntcbiAgICBtYWluQ29udGFpbmVyQ29udGVudCgpO1xuXG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVUYWIuY2xhc3NOYW1lID0gXCJob21lVGFiIHRhYlwiO1xuICAgIGhvbWVUYWIuc2V0QXR0cmlidXRlKCdpZCcsXCJob21lVGFiXCIpO1xuICAgIGhvbWVUYWIudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxuICAgIHNpZGVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gICAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGlzcGxheWluZ1RvZG9zLnByb2plY3REaXZzKVxuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gXCJuZXdQcm9qZWN0IHRhYlwiO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsXCJuZXdQcm9qZWN0XCIpO1xuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCJcbiAgICBzaWRlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG1vZGFscy5uZXdQcm9qZWN0TW9kYWwpXG4gXG5cbiAgICBjb25zdCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VG9kby5jbGFzc05hbWUgPSBcIm5ld1RvZG8gdGFiXCI7XG4gICAgbmV3VG9kby5zZXRBdHRyaWJ1dGUoJ2lkJyxcIm5ld1RvZG9cIik7XG4gICAgbmV3VG9kby50ZXh0Q29udGVudCA9IFwiQWRkIFRvIERvXCJcbiAgICBzaWRlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuICAgIG5ld1RvZG8uc3R5bGUuZGlzcGxheT0gXCJub25lXCI7XG4gICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRvZG9Nb2RhbC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsIHRvZG9Nb2RhbCdcbiAgICAgICAgdG9kb01vZGFsLmlkID0gJ3RvZG9Nb2RhbCdcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Nb2RhbClcblxuICAgICAgICBjb25zdCB0b2RvTW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kb01vZGFsQ29udGVudC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsQ29udGVudCBUb2RvTW9kYWxDb250ZW50J1xuICAgICAgICB0b2RvTW9kYWxDb250ZW50LmlkID0gJ3RvZG9Nb2RhbENvbnRlbnQnXG4gICAgICAgIHRvZG9Nb2RhbC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxDb250ZW50KVxuXG4gICAgICAgIGNvbnN0IHRvZG9Nb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kb01vZGFsVGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbFRpdGxlIHRvZG9Nb2RhbFRpdGxlJ1xuICAgICAgICB0b2RvTW9kYWxUaXRsZS5pZCA9ICd0b2RvTW9kYWxUaXRsZSdcbiAgICAgICAgdG9kb01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxUaXRsZSlcbiAgICAgICAgdG9kb01vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIkVudGVyIFRvIERvIFRpdGxlXCJcblxuICAgICAgICBjb25zdCB0b2RvTW9kYWxUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICB0b2RvTW9kYWxUaXRsZUlucHV0LmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxJbnB1dCB0b2RvTW9kYWxUaXRsZUlucHV0J1xuICAgICAgICB0b2RvTW9kYWxUaXRsZUlucHV0LmlkID0gJyBUb2RvTW9kYWxJbnB1dCdcbiAgICAgICAgdG9kb01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxUaXRsZUlucHV0KVxuXG4gICAgICAgIGNvbnN0IHRvZG9Nb2RhbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kb01vZGFsRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJyB0b2RvTW9kYWxEZXNjcmlwdGlvbidcbiAgICAgICAgdG9kb01vZGFsRGVzY3JpcHRpb24uaWQgPSAndG9kb01vZGFsRGVzY3JpcHRpb24nXG4gICAgICAgIHRvZG9Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb01vZGFsRGVzY3JpcHRpb24pXG4gICAgICAgIHRvZG9Nb2RhbERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJFbnRlciBEZXNjcmlwdGlvblwiXG5cbiAgICAgICAgY29uc3QgdG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RFWFRBUkVBJylcbiAgICAgICAgdG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsSW5wdXQgdG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dCdcbiAgICAgICAgdG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dC5pZCA9ICcgdG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dCdcbiAgICAgICAgdG9kb01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCggdG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dClcblxuXG4gICAgICAgIGNvbnN0IHRvZG9Nb2RhbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kb01vZGFsUHJpb3JpdHkuY2xhc3NOYW1lID0gJyB0b2RvTW9kYWxEZXNjcmlwdGlvbiB0b2RvTW9kYWxQcmlvcml0eSdcbiAgICAgICAgdG9kb01vZGFsUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCd0b2RvTW9kYWxQcmlvcml0eUlucHV0JylcbiAgICAgICAgdG9kb01vZGFsUHJpb3JpdHkuaWQgPSAndG9kb01vZGFsRGVzY3JpcHRpb24nXG4gICAgICAgIHRvZG9Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb01vZGFsUHJpb3JpdHkpXG4gICAgICAgIHRvZG9Nb2RhbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJTZWxlY3QgUHJpb3JpdHlcIlxuXG4gICAgICAgIGNvbnN0IHRvZG9Nb2RhbFByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgICB0b2RvTW9kYWxQcmlvcml0eUlucHV0LmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxJbnB1dCB0b2RvTW9kYWxQcmlvcml0eUlucHV0J1xuICAgICAgICB0b2RvTW9kYWxQcmlvcml0eUlucHV0LmlkID0gJyB0b2RvTW9kYWxQcmlvcml0eUlucHV0J1xuICAgICAgICB0b2RvTW9kYWxDb250ZW50LmFwcGVuZENoaWxkKCB0b2RvTW9kYWxQcmlvcml0eUlucHV0KVxuXG4gICAgICAgIGNvbnN0IHRvZG9Nb2RhbFByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHRvZG9Nb2RhbFByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnSGlnaCcpXG4gICAgICAgIHRvZG9Nb2RhbFByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiXG4gICAgICAgIHRvZG9Nb2RhbFByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQodG9kb01vZGFsUHJpb3JpdHlIaWdoKVxuXG4gICAgICAgIGNvbnN0IHRvZG9Nb2RhbFByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgdG9kb01vZGFsUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ01lZGl1bScpXG4gICAgICAgIHRvZG9Nb2RhbFByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIlxuICAgICAgICB0b2RvTW9kYWxQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHRvZG9Nb2RhbFByaW9yaXR5TWVkaXVtKVxuXG4gICAgICAgIGNvbnN0IHRvZG9Nb2RhbFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgdG9kb01vZGFsUHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ0xvdycpXG4gICAgICAgIHRvZG9Nb2RhbFByaW9yaXR5TG93LnRleHRDb250ZW50ID0gXCJMb3dcIlxuICAgICAgICB0b2RvTW9kYWxQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHRvZG9Nb2RhbFByaW9yaXR5TG93KVxuXG5cblxuICAgICAgICBjb25zdCB0b2RvTW9kYWxEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kb01vZGFsRHVlRGF0ZS5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsRHVlRGF0ZSBUb2RvTW9kYWxEdWVEYXRlJ1xuICAgICAgICB0b2RvTW9kYWxEdWVEYXRlLmlkID0gJ3Byb2plY3RNb2RhbER1ZURhdGUnXG4gICAgICAgIHRvZG9Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb01vZGFsRHVlRGF0ZSlcbiAgICAgICAgdG9kb01vZGFsRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRW50ZXIgRHVlIERhdGVcIlxuXG4gICAgICAgIGNvbnN0IHRvZG9Nb2RhbER1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgdG9kb01vZGFsRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuICAgICAgICB0b2RvTW9kYWxEdWVEYXRlSW5wdXQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbER1ZURhdGVJbnB1dCB0b2RvTW9kYWxEdWVEYXRlSW5wdXQnXG4gICAgICAgIHRvZG9Nb2RhbER1ZURhdGVJbnB1dC5pZCA9ICcgdG9kb01vZGFsRHVlRGF0ZUlucHV0J1xuICAgICAgICB0b2RvTW9kYWxDb250ZW50LmFwcGVuZENoaWxkKCB0b2RvTW9kYWxEdWVEYXRlSW5wdXQpXG5cblxuXG5cbiAgICAgICAgY29uc3QgdG9kb01vZGFsT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRvZG9Nb2RhbE9wdGlvbnMuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbE9wdGlvbnMgdG9kb01vZGFsT3B0aW9ucydcbiAgICAgICAgdG9kb01vZGFsT3B0aW9ucy5pZCA9ICcgdG9kb01vZGFsT3B0aW9ucydcbiAgICAgICAgdG9kb01vZGFsLmFwcGVuZENoaWxkKHRvZG9Nb2RhbE9wdGlvbnMpXG5cblxuICAgICAgICBjb25zdCB0b2RvTW9kYWxDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b2RvTW9kYWxDYW5jZWwuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbENhbmNlbCBwcm9qZWN0T3B0aW9ucyB0b2RvTW9kYWxDYW5jZWwnXG4gICAgICAgIHRvZG9Nb2RhbENhbmNlbC5pZCA9ICcgdG9kb01vZGFsQ2FuY2VsJ1xuICAgICAgICB0b2RvTW9kYWxPcHRpb25zLmFwcGVuZENoaWxkKCB0b2RvTW9kYWxDYW5jZWwpXG4gICAgICAgIHRvZG9Nb2RhbENhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcbiAgICAgICAgdG9kb01vZGFsQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgdG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB0b2RvTW9kYWxTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b2RvTW9kYWxTdWJtaXQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbFN1Ym1pdCBwcm9qZWN0T3B0aW9ucyB0b2RvTW9kYWxTdWJtaXQnXG4gICAgICAgIHRvZG9Nb2RhbFN1Ym1pdC5pZCA9ICcgdG9kb01vZGFsU3VibWl0J1xuICAgICAgICB0b2RvTW9kYWxPcHRpb25zLmFwcGVuZENoaWxkKCB0b2RvTW9kYWxTdWJtaXQpXG4gICAgICAgIHRvZG9Nb2RhbFN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCJcbiAgICAgICAgdG9kb01vZGFsU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbiAoZXZlbnQpe1xuICAgICAgICAgICAgdG9kb01vZGFsLnN0eWxlLmRpc3BsYXk9J25vbmUnXG4gICAgICAgICAgICBjb25zdCB0b2RvVGl0bGVWYWx1ZT0gdG9kb01vZGFsVGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvblZhbHVlPXRvZG9Nb2RhbERlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHlWYWx1ZSA9IHRvZG9Nb2RhbFByaW9yaXR5SW5wdXQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZVZhbHVlID0gdG9kb01vZGFsRHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmV3VG9kb09iamVjdCA9IG5ldyB0b2RvT2JqZWN0ICh0b2RvVGl0bGVWYWx1ZSx0b2RvRGVzY3JpcHRpb25WYWx1ZSx0b2RvUHJpb3JpdHlWYWx1ZSx0b2RvRHVlRGF0ZVZhbHVlKTtcbiAgICAgICAgICAgIGRpc3BsYXlpbmdUb2Rvcy5nYW5nYW5nKG5ld1RvZG9PYmplY3QpXG4gICAgICAgIH0pXG5cbiAgICB9KVxuXG59XG5cbiAgICByZXR1cm57c2lkZUNvbnRhaW5lckNvbnRlbnR9XG59KSgpO1xuXG5jb25zdCBtb2RhbHMgID0gKCgpPT57XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSAoKT0+e1xuXG5cbiAgICAgICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdE1vZGFsLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWwnXG4gICAgICAgIHByb2plY3RNb2RhbC5pZCA9ICdwcm9qZWN0TW9kYWwnXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TW9kYWwpXG5cbiAgICAgICAgY29uc3QgcHJvamVjdE1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RNb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbENvbnRlbnQnXG4gICAgICAgIHByb2plY3RNb2RhbENvbnRlbnQuaWQgPSAncHJvamVjdE1vZGFsQ29udGVudCdcbiAgICAgICAgcHJvamVjdE1vZGFsLmFwcGVuZENoaWxkKHByb2plY3RNb2RhbENvbnRlbnQpXG5cbiAgICAgICAgY29uc3QgcHJvamVjdE1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0TW9kYWxUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsVGl0bGUnXG4gICAgICAgIHByb2plY3RNb2RhbFRpdGxlLmlkID0gJ3Byb2plY3RNb2RhbFRpdGxlJ1xuICAgICAgICBwcm9qZWN0TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RNb2RhbFRpdGxlKVxuICAgICAgICBwcm9qZWN0TW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiRW50ZXIgUHJvamVjdCBOYW1lXCJcblxuICAgICAgICBjb25zdCBwcm9qZWN0TW9kYWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgcHJvamVjdE1vZGFsSW5wdXQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbElucHV0J1xuICAgICAgICBwcm9qZWN0TW9kYWxJbnB1dC5pZCA9ICcgcHJvamVjdE1vZGFsSW5wdXQnXG4gICAgICAgIHByb2plY3RNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoIHByb2plY3RNb2RhbElucHV0KVxuXG5cblxuICAgICAgICBjb25zdCBwcm9qZWN0TW9kYWxEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdE1vZGFsRHVlRGF0ZS5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsRHVlRGF0ZSdcbiAgICAgICAgcHJvamVjdE1vZGFsRHVlRGF0ZS5pZCA9ICdwcm9qZWN0TW9kYWxEdWVEYXRlJ1xuICAgICAgICBwcm9qZWN0TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RNb2RhbER1ZURhdGUpXG4gICAgICAgIHByb2plY3RNb2RhbER1ZURhdGUudGV4dENvbnRlbnQgPSBcIkVudGVyIER1ZSBEYXRlXCJcblxuICAgICAgICBjb25zdCBwcm9qZWN0TW9kYWxEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIHByb2plY3RNb2RhbER1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJylcbiAgICAgICAgcHJvamVjdE1vZGFsRHVlRGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxEdWVEYXRlSW5wdXQnXG4gICAgICAgIHByb2plY3RNb2RhbER1ZURhdGVJbnB1dC5pZCA9ICcgcHJvamVjdE1vZGFsRHVlRGF0ZUlucHV0J1xuICAgICAgICBwcm9qZWN0TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKCBwcm9qZWN0TW9kYWxEdWVEYXRlSW5wdXQpXG5cblxuXG5cbiAgICAgICAgY29uc3QgcHJvamVjdE1vZGFsT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RNb2RhbE9wdGlvbnMuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbE9wdGlvbnMnXG4gICAgICAgIHByb2plY3RNb2RhbE9wdGlvbnMuaWQgPSAnIHByb2plY3RNb2RhbE9wdGlvbnMnXG4gICAgICAgIHByb2plY3RNb2RhbC5hcHBlbmRDaGlsZChwcm9qZWN0TW9kYWxPcHRpb25zKVxuXG5cbiAgICAgICAgY29uc3QgcHJvamVjdE1vZGFsQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdE1vZGFsQ2FuY2VsLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxDYW5jZWwgcHJvamVjdE9wdGlvbnMnXG4gICAgICAgIHByb2plY3RNb2RhbENhbmNlbC5pZCA9ICcgcHJvamVjdE1vZGFsQ2FuY2VsJ1xuICAgICAgICBwcm9qZWN0TW9kYWxPcHRpb25zLmFwcGVuZENoaWxkKCBwcm9qZWN0TW9kYWxDYW5jZWwpXG4gICAgICAgIHByb2plY3RNb2RhbENhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcbiAgICAgICAgcHJvamVjdE1vZGFsQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBwcm9qZWN0TW9kYWxTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0TW9kYWxTdWJtaXQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbFN1Ym1pdCBwcm9qZWN0T3B0aW9ucydcbiAgICAgICAgcHJvamVjdE1vZGFsU3VibWl0LmlkID0gJyBwcm9qZWN0TW9kYWxTdWJtaXQnXG4gICAgICAgIHByb2plY3RNb2RhbE9wdGlvbnMuYXBwZW5kQ2hpbGQoIHByb2plY3RNb2RhbFN1Ym1pdClcbiAgICAgICAgcHJvamVjdE1vZGFsU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxuICAgICAgICBwcm9qZWN0TW9kYWxTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbmV3VG9kbyA9IFtdO1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3RzID0gbmV3IHByb2plY3RPYmplY3QgKHByb2plY3RNb2RhbElucHV0LnZhbHVlLHByb2plY3RNb2RhbER1ZURhdGVJbnB1dC52YWx1ZSxuZXdUb2RvKTtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdHMpO1xuICAgICAgICAgICAgZGlzcGxheWluZ1RvZG9zLnByb2plY3REaXZzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgICAgIHNldERhdGEoKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxuICAgICAgICAgICAgcmV0dXJue25ld1RvZG99XG4gXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0Q29tcG9uZW50c1BhZ2UgPSAoKT0+e1xuICAgICAgICBjb25zdCBwcm9qZWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0UGFnZS5jbGFzc05hbWUgPVwicHJvamVjdFBhZ2VcIjtcbiAgICAgICAgcHJvamVjdFBhZ2UuaWQgPSBcInByb2plY3RQYWdlXCI7IFxuXG4gICAgfVxuXG5cbnJldHVybntuZXdQcm9qZWN0TW9kYWwscHJvamVjdENvbXBvbmVudHNQYWdlfVxufSkoKVxuXG5cblxuY29uc3QgZGlzcGxheWluZ1RvZG9zICA9ICgoKT0+e1xuXG4gICAgY29uc3QgcHJvamVjdERpdnMgPSAoKT0+e1xuICAgICAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUb2RvXCIpXG4gICAgICAgIG1haW5Db250ZW50VGl0bGUudGV4dENvbnRlbnQgPSBgUHJvamVjdHNgXG4gICAgICAgIG5ld1RvZG9CdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8cHJvamVjdHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGVtcC5jbGFzc05hbWUgPSBgcHJvamVjdCR7aX0gdG9kb2A7XG4gICAgICAgICAgICB0ZW1wLmlkID1gcHJvamVjdCR7aX1gXG4gICAgICAgICAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIixgJHtpfWApXG4gICAgICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICAgICBcblxuICAgICAgICAgICAgLy9vcGVuaW5nIG9iamVjdCBmdW5jdGlvblxuICAgICAgICAgICAgY29uc3Qgb3BlblByb2plY3QgPSAoZXZlbnQpPT57XG4gICAgICAgICAgICBnbG9iYWxUaGlzLmFycmF5RGF0YVZhbHVlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpXG4gICAgICAgICAgICBtYWluQ29udGVudC5pbm5lckhUTUw9XCJcIjtcbiAgICAgICAgICAgIG1haW5Db250ZW50VGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1thcnJheURhdGFWYWx1ZV1bXCJwcm9qZWN0VGl0bGVcIl19YFxuICAgICAgICAgICAgZm9yKGxldCB6ID0gMDt6PHByb2plY3RzW2FycmF5RGF0YVZhbHVlXVtcInRvZG9cIl0ubGVuZ3RoO3orKyl7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1RvZG9cIilcbiAgICAgICAgICAgIG5ld1RvZG9CdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiXCJcblxuICAgICAgICAgICAgY29uc3QgdG9kb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdG9kb0Rpc3BsYXkuY2xhc3NOYW1lID0gYHRvZG9EaXNwbGF5YDtcbiAgICAgICAgICAgIHRvZG9EaXNwbGF5LmlkID1gdG9kb0Rpc3BsYXkke3p9YFxuICAgICAgICAgICAgdG9kb0Rpc3BsYXkuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLGAke3p9YClcbiAgICAgICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRvZG9EaXNwbGF5KTtcblxuXG4gICAgICAgICAgICBjb25zdCB0b2RvVG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRvZG9Ub3BEaXYuY2xhc3NOYW1lID0gYHRvZG9Ub3BEaXZgO1xuICAgICAgICAgICAgdG9kb1RvcERpdi5pZCA9YHRvZG9Ub3BEaXYke3p9YFxuICAgICAgICAgICAgdG9kb1RvcERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsYCR7en1gKVxuICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb1RvcERpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0b2RvVGl0bGUuY2xhc3NOYW1lID0gYHRvZG9UaXRsZWA7XG4gICAgICAgICAgICB0b2RvVGl0bGUuaWQgPWB0b2RvVGl0bGUke3p9YFxuICAgICAgICAgICAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIixgJHt6fWApXG4gICAgICAgICAgICB0b2RvVG9wRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdW1widG9kb1wiXVt6XVsndGl0bGUnXX1gXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gYHRvZG9EZXNjcmlwdGlvbmA7XG4gICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uaWQgPWB0b2RvRGVzY3JpcHRpb24ke3p9YFxuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIixgJHt6fWApXG4gICAgICAgICAgICB0b2RvVG9wRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgRGVzY3JpcHRpb246ICR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdW1widG9kb1wiXVt6XVsnZGVzY3JpcHRpb24nXX1gXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRvZG9EdWVEYXRlLmNsYXNzTmFtZSA9IGB0b2RvRHVlRGF0ZWA7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS5pZCA9YHRvZG9EdWVEYXRlJHt6fWBcbiAgICAgICAgICAgIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIixgJHt6fWApXG4gICAgICAgICAgICB0b2RvVG9wRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgICAgICAgICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke3Byb2plY3RzW2FycmF5RGF0YVZhbHVlXVtcInRvZG9cIl1bel1bJ3ByaW9yaXR5J119YFxuXG4gICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LmNsYXNzTmFtZSA9IGB0b2RvUHJpb3JpdHlgO1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LmlkID1gdG9kb1ByaW9yaXR5JHt6fWBcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsYCR7en1gKVxuICAgICAgICAgICAgdG9kb1RvcERpdi5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RzW2FycmF5RGF0YVZhbHVlXVtcInRvZG9cIl1bel1bJ2R1ZURhdGUnXX1gXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9Cb3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdG9kb0JvdERpdi5jbGFzc05hbWUgPSBgdG9kb0JvdERpdmA7XG4gICAgICAgICAgICB0b2RvQm90RGl2LmlkID1gdG9kb0JvdERpdiR7en1gXG4gICAgICAgICAgICB0b2RvQm90RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIixgJHt6fWApXG4gICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b2RvQm90RGl2KTtcbiAgICAgICAgICAgIHRvZG9Cb3REaXYudGV4dENvbnRlbnQgPSBcIlhcIlxuXG4gICAgICAgICAgICBjb25zdCByZVRvZG8gPSAoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0FycmF5VmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJylcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1thcnJheURhdGFWYWx1ZV1bXCJ0b2RvXCJdLnNwbGljZSh0b2RvQXJyYXlWYWx1ZSwxKTtcblxuICAgICAgICAgICAgICAgIC8vL1xuICAgICAgICAgICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTD1cIlwiO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgeiA9IDA7ejxwcm9qZWN0c1thcnJheURhdGFWYWx1ZV1bXCJ0b2RvXCJdLmxlbmd0aDt6Kyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICB0b2RvRGlzcGxheS5jbGFzc05hbWUgPSBgdG9kb0Rpc3BsYXlgO1xuICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LmlkID1gdG9kb0Rpc3BsYXkke3p9YFxuICAgICAgICAgICAgICAgIHRvZG9EaXNwbGF5LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIixgJHt6fWApXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0Rpc3BsYXkpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9Ub3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIHRvZG9Ub3BEaXYuY2xhc3NOYW1lID0gYHRvZG9Ub3BEaXZgO1xuICAgICAgICAgICAgICAgIHRvZG9Ub3BEaXYuaWQgPWB0b2RvVG9wRGl2JHt6fWBcbiAgICAgICAgICAgICAgICB0b2RvVG9wRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIixgJHt6fWApXG4gICAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb1RvcERpdik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdG9kb1RpdGxlLmNsYXNzTmFtZSA9IGB0b2RvVGl0bGVgO1xuICAgICAgICAgICAgdG9kb1RpdGxlLmlkID1gdG9kb1RpdGxlJHt6fWBcbiAgICAgICAgICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsYCR7en1gKVxuICAgICAgICAgICAgdG9kb1RvcERpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gYFRpdGxlOiAke3Byb2plY3RzW2FycmF5RGF0YVZhbHVlXVtcInRvZG9cIl1bel1bJ3RpdGxlJ119YFxuXG4gICAgICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IGB0b2RvRGVzY3JpcHRpb25gO1xuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmlkID1gdG9kb0Rlc2NyaXB0aW9uJHt6fWBcbiAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsYCR7en1gKVxuICAgICAgICAgICAgdG9kb1RvcERpdi5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke3Byb2plY3RzW2FycmF5RGF0YVZhbHVlXVtcInRvZG9cIl1bel1bJ2Rlc2NyaXB0aW9uJ119YFxuXG4gICAgICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS5jbGFzc05hbWUgPSBgdG9kb0R1ZURhdGVgO1xuICAgICAgICAgICAgdG9kb0R1ZURhdGUuaWQgPWB0b2RvRHVlRGF0ZSR7en1gXG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsYCR7en1gKVxuICAgICAgICAgICAgdG9kb1RvcERpdi5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtwcm9qZWN0c1thcnJheURhdGFWYWx1ZV1bXCJ0b2RvXCJdW3pdWydkdWVEYXRlJ119YFxuXG4gICAgICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LmNsYXNzTmFtZSA9IGB0b2RvUHJpb3JpdHlgO1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LmlkID1gdG9kb1ByaW9yaXR5JHt6fWBcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsYCR7en1gKVxuICAgICAgICAgICAgdG9kb1RvcERpdi5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RzW2FycmF5RGF0YVZhbHVlXVtcInRvZG9cIl1bel1bJ3ByaW9yaXR5J119YFxuXG4gICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvQm90RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRvZG9Cb3REaXYuY2xhc3NOYW1lID0gYHRvZG9Cb3REaXZgO1xuICAgICAgICAgICAgdG9kb0JvdERpdi5pZCA9YHRvZG9Cb3REaXYke3p9YFxuICAgICAgICAgICAgdG9kb0JvdERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsYCR7en1gKVxuICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb0JvdERpdik7XG4gICAgICAgICAgICB0b2RvQm90RGl2LnRleHRDb250ZW50ID0gXCJYXCJcbiAgICAgICAgICAgIHRvZG9Cb3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZVRvZG8pXG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1RvZG9cIilcbiAgICAgICAgICAgIG5ld1RvZG9CdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0RGF0YSgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1thcnJheURhdGFWYWx1ZV1bXCJ0b2RvXCJdKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b2RvQm90RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVUb2RvKVxuXG4gICAgICAgICAgICAvLyB0b2RvRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW2FycmF5RGF0YVZhbHVlXVtcInRvZG9cIl1bel1bJ3RpdGxlJ119LCR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdW1widG9kb1wiXVt6XVsnZHVlRGF0ZSddfWBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2FycmF5RGF0YVZhbHVlXVtcInRvZG9cIl1bel0pXG4gICAgICAgICAgICB9XG4gICAgIFxuXG4gICAgICAgIH07XG4gICAgICAgICAgICBsZXQgdG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b3BEaXYuY2xhc3NOYW1lID0gYHRvcERpdmA7XG4gICAgICAgICAgICB0b3BEaXYuaWQgPWB0b3BEaXYke2l9YFxuICAgICAgICAgICAgdG9wRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsYCR7aX1gKVxuICAgICAgICAgICAgdGVtcC5hcHBlbmRDaGlsZCh0b3BEaXYpO1xuICAgICAgICAgICAgdG9wRGl2LnRleHRDb250ZW50ID0gYFByb2plY3QgVGl0bGU6ICR7cHJvamVjdHNbaV0ucHJvamVjdFRpdGxlfWBcbiAgICAgICAgICAgIHRvcERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBvcGVuUHJvamVjdChldmVudClcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUb2RvXCIpXG4gICAgICAgICAgICAgICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJcIlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS5jbGFzc05hbWUgPSBcInByb2plY3REdWVEYXRlXCJcbiAgICAgICAgICAgIHByb2plY3REdWVEYXRlLmlkID0gXCJwcm9qZWN0RHVlRGF0ZVwiXG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLGAke2l9YClcbiAgICAgICAgICAgIHRvcERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSk7XG4gICAgICAgICAgICBwcm9qZWN0RHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtwcm9qZWN0c1tpXS5kdWVEYXRlfWBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYm90dG9tRGl2LmNsYXNzTmFtZSA9IGBib3R0b21EaXZgO1xuICAgICAgICAgICAgYm90dG9tRGl2LmlkID1gYm90dG9tRGl2JHtpfWBcbiAgICAgICAgICAgIGJvdHRvbURpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLGAke2l9YClcbiAgICAgICAgICAgIHRlbXAuYXBwZW5kQ2hpbGQoYm90dG9tRGl2KTtcbiAgICAgICAgICAgIGJvdHRvbURpdi50ZXh0Q29udGVudCA9IFwiWFwiXG4gICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgcHJvamVjdCBmdW5jdGlvbmFsaXR5XG4gICAgICAgICAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJylcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaXRlbSwxKTtcbiAgICAgICAgICAgICAgICBzZXREYXRhKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGl2cygpO1xuXG4gICAgICAgIH1cbiAgICAgICAgYm90dG9tRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZW1vdmVQcm9qZWN0KVxuICAgICAgICBcbiAgICB9XG5cbn1cblxuY29uc3QgZ2FuZ2FuZyA9IChvYmopPT57XG4gICAgcHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdW1widG9kb1wiXS5wdXNoKG9iaik7XG4gICAgcHJvamVjdERpdnMoKTtcbiAgICBjb25zdCBnYW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoW2B0b3BEaXYke2FycmF5RGF0YVZhbHVlfWBdKVxuICAgIGdhbmcuY2xpY2soKVxuICAgIHNldERhdGEoKVxufVxuXG4gICAgcmV0dXJue3Byb2plY3REaXZzLGdhbmdhbmd9XG59KSgpXG5cblxuXG5leHBvcnR7ZGlzcGxheWluZ1RvZG9zLG1vZGFscywgbWFpblBhZ2V9IiwiXG5cbmNsYXNzIHByb2plY3RPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3RUaXRsZSxkdWVEYXRlLHRvZG8pe1xuICAgICAgICB0aGlzLnByb2plY3RUaXRsZT0gcHJvamVjdFRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnRvZG8gPSB0b2RvO1xuICAgIH1cbiAgICBcbn1cblxuY2xhc3MgdG9kb09iamVjdHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbi8vL2RhdGEgc3RydWN0dXJlIGZvciBwcm9qZWN0LyB0b2RvIGxpc3QgWyBQcm9qZWN0IG9iamVjdCBjb250YWluaW5nIGEgc3ViYXJyYXkgd2l0aCBtYW55IHRvZG8gb2JqZWN0c11cblxuY29uc3QgdG9kb2cyID0gW11cbmNvbnN0IHRvZG9nMSA9IG5ldyB0b2RvT2JqZWN0KFwiR28gU2hvcHBpbmdcIiwgXCJHZXQgQnJlYWRcIixgMDMvMTIvMjAyMWAsXCJIaWdoXCIpXG5jb25zdCB0b2RvZzMgPSBuZXcgdG9kb09iamVjdChcIkdvIFNob3BwaW5nXCIsIFwiR2V0IEJhbmFuYXNcIixgMDMvMTIvMjAyMWAsXCJIaWdoXCIpXG50b2RvZzIucHVzaCh0b2RvZzEsdG9kb2czKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IHByb2plY3RPYmplY3QoXCJkZWZhdWx0XCIsYDAzLzEyLzIwMjFgLHRvZG9nMik7XG5jb25zdCBwcm9qZWN0cyA9IFtkZWZhdWx0UHJvamVjdF07XG5jb25zdCB0b2RvTGlzdCA9IFtdO1xuXG5cblxuXG5leHBvcnR7cHJvamVjdE9iamVjdCxcbiAgICAgICAgdG9kb09iamVjdCxcbiAgICAgICAgdG9kb0xpc3QsXG4gICAgICAgIHByb2plY3RzLFxuICAgICAgICBkZWZhdWx0UHJvamVjdFxuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8vLy9jcmVhdGUgcGFnZSBmb3IgZWFjaCBwcm9qZWN0IHVwb24gY2xpY2tpbmcgYW4gYXJyYXkgaXMgY3JlYXRlZCBhbmQgZmlsbGVkIHdpdGggYSB0b2RvIG9iamVjdCIsImltcG9ydCB7dG9kb0xpc3RPYmplY3QsIHRvZG9MaXN0LGRlZmF1bHRQcm9qZWN0LHByb2plY3RzfSBmcm9tIFwiLi9jcmVhdGVUb2RvXCJcbmltcG9ydHttYWluUGFnZSxkaXNwbGF5aW5nVG9kb3MsZXZlbnRDbGlja0Z1bmN0aW9uc30gZnJvbSBcIi4vRE9NXCJcblxuXG5cbmZ1bmN0aW9uIHNldERhdGEoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cbm1haW5QYWdlLnNpZGVDb250YWluZXJDb250ZW50KCk7XG5kaXNwbGF5aW5nVG9kb3MucHJvamVjdERpdnMoKTtcblxuXG5cblxuZXhwb3J0e3NldERhdGFcblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9