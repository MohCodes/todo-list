/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



var container = document.getElementById('container');

var mainPage = function () {
  var mainContainers = function mainContainers() {
    var titleDiv = document.createElement('div');
    titleDiv.className = 'titleDiv';
    titleDiv.setAttribute('id', 'titleDiv');
    container.appendChild(titleDiv);
    var mainDiv = document.createElement('div');
    mainDiv.className = 'mainDiv';
    mainDiv.setAttribute('id', 'mainDiv');
    container.appendChild(mainDiv);
    var sideContainerDiv = document.createElement('div');
    sideContainerDiv.className = 'sideContainerDiv';
    sideContainerDiv.setAttribute('id', 'sideContainerDiv');
    mainDiv.appendChild(sideContainerDiv);
    var mainContainerDiv = document.createElement('div');
    mainContainerDiv.className = 'mainContainerDiv';
    mainContainerDiv.setAttribute('id', 'mainContainerDiv');
    mainDiv.appendChild(mainContainerDiv);
  };

  var mainContainerContent = function mainContainerContent() {
    mainContainers();
    var mainContentTitle = document.createElement('div');
    mainContentTitle.className = 'mainContentTitle';
    mainContentTitle.setAttribute('id', 'mainContentTitle');
    mainContainerDiv.appendChild(mainContentTitle);
    mainContentTitle.textContent = 'projects';
    var mainContent = document.createElement('div');
    mainContent.className = 'mainContent';
    mainContent.setAttribute('id', 'mainContent');
    mainContainerDiv.appendChild(mainContent);
  };

  var sideContainerContent = function sideContainerContent() {
    mainContainerContent();
    var homeTab = document.createElement('div');
    homeTab.className = 'homeTab tab';
    homeTab.setAttribute('id', 'homeTab');
    homeTab.textContent = 'Home';
    sideContainerDiv.appendChild(homeTab);
    homeTab.addEventListener('click', displayingTodos.projectDivs);
    var newProject = document.createElement('div');
    newProject.className = 'newProject tab';
    newProject.setAttribute('id', 'newProject');
    newProject.textContent = 'New Project';
    sideContainerDiv.appendChild(newProject);
    newProject.addEventListener('click', modals.newProjectModal);
    var newTodo = document.createElement('div');
    newTodo.className = 'newTodo tab';
    newTodo.setAttribute('id', 'newTodo');
    newTodo.textContent = 'Add To Do';
    sideContainerDiv.appendChild(newTodo);
    newTodo.style.display = 'none';
    newTodo.addEventListener('click', function () {
      var todoModal = document.createElement('div');
      todoModal.className = 'projectModal todoModal';
      todoModal.id = 'todoModal';
      container.appendChild(todoModal);
      var todoModalContent = document.createElement('div');
      todoModalContent.className = 'projectModalContent TodoModalContent';
      todoModalContent.id = 'todoModalContent';
      todoModal.appendChild(todoModalContent);
      var todoModalTitle = document.createElement('div');
      todoModalTitle.className = 'projectModalTitle todoModalTitle';
      todoModalTitle.id = 'todoModalTitle';
      todoModalContent.appendChild(todoModalTitle);
      todoModalTitle.textContent = 'Enter To Do Title';
      var todoModalTitleInput = document.createElement('input');
      todoModalTitleInput.className = 'projectModalInput todoModalTitleInput';
      todoModalTitleInput.id = ' TodoModalInput';
      todoModalContent.appendChild(todoModalTitleInput);
      var todoModalDescription = document.createElement('div');
      todoModalDescription.className = ' todoModalDescription';
      todoModalDescription.id = 'todoModalDescription';
      todoModalContent.appendChild(todoModalDescription);
      todoModalDescription.textContent = 'Enter Description';
      var todoModalDescriptionInput = document.createElement('TEXTAREA');
      todoModalDescriptionInput.className = 'projectModalInput todoModalDescriptionInput';
      todoModalDescriptionInput.id = ' todoModalDescriptionInput';
      todoModalContent.appendChild(todoModalDescriptionInput);
      var todoModalPriority = document.createElement('div');
      todoModalPriority.className = ' todoModalDescription todoModalPriority';
      todoModalPriority.setAttribute('for', 'todoModalPriorityInput');
      todoModalPriority.id = 'todoModalDescription';
      todoModalContent.appendChild(todoModalPriority);
      todoModalPriority.textContent = 'Select Priority';
      var todoModalPriorityInput = document.createElement('select');
      todoModalPriorityInput.className = 'projectModalInput todoModalPriorityInput';
      todoModalPriorityInput.id = ' todoModalPriorityInput';
      todoModalContent.appendChild(todoModalPriorityInput);
      var todoModalPriorityHigh = document.createElement('option');
      todoModalPriorityHigh.setAttribute('value', 'High');
      todoModalPriorityHigh.textContent = 'High';
      todoModalPriorityInput.appendChild(todoModalPriorityHigh);
      var todoModalPriorityMedium = document.createElement('option');
      todoModalPriorityMedium.setAttribute('value', 'Medium');
      todoModalPriorityMedium.textContent = 'Medium';
      todoModalPriorityInput.appendChild(todoModalPriorityMedium);
      var todoModalPriorityLow = document.createElement('option');
      todoModalPriorityLow.setAttribute('value', 'Low');
      todoModalPriorityLow.textContent = 'Low';
      todoModalPriorityInput.appendChild(todoModalPriorityLow);
      var todoModalDueDate = document.createElement('div');
      todoModalDueDate.className = 'projectModalDueDate TodoModalDueDate';
      todoModalDueDate.id = 'projectModalDueDate';
      todoModalContent.appendChild(todoModalDueDate);
      todoModalDueDate.textContent = 'Enter Due Date';
      var todoModalDueDateInput = document.createElement('input');
      todoModalDueDateInput.setAttribute('type', 'date');
      todoModalDueDateInput.className = 'projectModalDueDateInput todoModalDueDateInput';
      todoModalDueDateInput.id = ' todoModalDueDateInput';
      todoModalContent.appendChild(todoModalDueDateInput);
      var todoModalOptions = document.createElement('div');
      todoModalOptions.className = 'projectModalOptions todoModalOptions';
      todoModalOptions.id = ' todoModalOptions';
      todoModal.appendChild(todoModalOptions);
      var todoModalCancel = document.createElement('div');
      todoModalCancel.className = 'projectModalCancel projectOptions todoModalCancel';
      todoModalCancel.id = ' todoModalCancel';
      todoModalOptions.appendChild(todoModalCancel);
      todoModalCancel.textContent = 'Cancel';
      todoModalCancel.addEventListener('click', function () {
        todoModal.style.display = 'none';
      });
      var todoModalSubmit = document.createElement('div');
      todoModalSubmit.className = 'projectModalSubmit projectOptions todoModalSubmit';
      todoModalSubmit.id = ' todoModalSubmit';
      todoModalOptions.appendChild(todoModalSubmit);
      todoModalSubmit.textContent = 'Submit';
      todoModalSubmit.addEventListener('click', function (event) {
        todoModal.style.display = 'none';
        var todoTitleValue = todoModalTitleInput.value;
        var todoDescriptionValue = todoModalDescriptionInput.value;
        var todoPriorityValue = todoModalPriorityInput.value;
        var todoDueDateValue = todoModalDueDateInput.value;
        var newTodoObject = new _createTodo__WEBPACK_IMPORTED_MODULE_2__.todoObject(todoTitleValue, todoDescriptionValue, todoPriorityValue, todoDueDateValue);
        displayingTodos.gangang(newTodoObject);
      });
    });
  };

  return {
    sideContainerContent: sideContainerContent
  };
}();

var modals = function () {
  var newProjectModal = function newProjectModal() {
    var projectModal = document.createElement('div');
    projectModal.className = 'projectModal';
    projectModal.id = 'projectModal';
    container.appendChild(projectModal);
    var projectModalContent = document.createElement('div');
    projectModalContent.className = 'projectModalContent';
    projectModalContent.id = 'projectModalContent';
    projectModal.appendChild(projectModalContent);
    var projectModalTitle = document.createElement('div');
    projectModalTitle.className = 'projectModalTitle';
    projectModalTitle.id = 'projectModalTitle';
    projectModalContent.appendChild(projectModalTitle);
    projectModalTitle.textContent = 'Enter Project Name';
    var projectModalInput = document.createElement('input');
    projectModalInput.className = 'projectModalInput';
    projectModalInput.id = ' projectModalInput';
    projectModalContent.appendChild(projectModalInput);
    var projectModalDueDate = document.createElement('div');
    projectModalDueDate.className = 'projectModalDueDate';
    projectModalDueDate.id = 'projectModalDueDate';
    projectModalContent.appendChild(projectModalDueDate);
    projectModalDueDate.textContent = 'Enter Due Date';
    var projectModalDueDateInput = document.createElement('input');
    projectModalDueDateInput.setAttribute('type', 'date');
    projectModalDueDateInput.className = 'projectModalDueDateInput';
    projectModalDueDateInput.id = ' projectModalDueDateInput';
    projectModalContent.appendChild(projectModalDueDateInput);
    var projectModalOptions = document.createElement('div');
    projectModalOptions.className = 'projectModalOptions';
    projectModalOptions.id = ' projectModalOptions';
    projectModal.appendChild(projectModalOptions);
    var projectModalCancel = document.createElement('div');
    projectModalCancel.className = 'projectModalCancel projectOptions';
    projectModalCancel.id = ' projectModalCancel';
    projectModalOptions.appendChild(projectModalCancel);
    projectModalCancel.textContent = 'Cancel';
    projectModalCancel.addEventListener('click', function () {
      projectModal.style.display = 'none';
    });
    var projectModalSubmit = document.createElement('div');
    projectModalSubmit.className = 'projectModalSubmit projectOptions';
    projectModalSubmit.id = ' projectModalSubmit';
    projectModalOptions.appendChild(projectModalSubmit);
    projectModalSubmit.textContent = 'Submit';
    projectModalSubmit.addEventListener('click', function () {
      projectModal.style.display = 'none';
      var newTodo = [];
      var newProjects = new _createTodo__WEBPACK_IMPORTED_MODULE_2__.projectObject(projectModalInput.value, projectModalDueDateInput.value, newTodo);
      _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects.push(newProjects);
      displayingTodos.projectDivs();
      console.log(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects);
      (0,_index__WEBPACK_IMPORTED_MODULE_1__.setData)();
      console.log(localStorage);
      return {
        newTodo: newTodo
      };
    });
  };

  var projectComponentsPage = function projectComponentsPage() {
    var projectPage = document.createElement('div');
    projectPage.className = 'projectPage';
    projectPage.id = 'projectPage';
  };

  return {
    newProjectModal: newProjectModal,
    projectComponentsPage: projectComponentsPage
  };
}();

var displayingTodos = function () {
  var projectDivs = function projectDivs() {
    var newTodoButton = document.getElementById('newTodo');
    mainContentTitle.textContent = 'Projects';
    newTodoButton.style.display = 'none';
    mainContent.innerHTML = '';

    var _loop = function _loop(i) {
      var temp = document.createElement('div');
      temp.className = "project".concat(i, " todo");
      temp.id = "project".concat(i);
      temp.setAttribute('data-value', "".concat(i));
      mainContent.appendChild(temp); // opening object function

      var openProject = function openProject(event) {
        globalThis.arrayDataValue = event.target.getAttribute('data-value');
        mainContent.innerHTML = '';
        mainContentTitle.textContent = "".concat(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].projectTitle);

        var _loop2 = function _loop2(z) {
          var newTodoButton = document.getElementById('newTodo');
          newTodoButton.style.display = '';
          var todoDisplay = document.createElement('div');
          todoDisplay.className = 'todoDisplay';
          todoDisplay.id = "todoDisplay".concat(z);
          todoDisplay.setAttribute('data-value', "".concat(z));
          mainContent.appendChild(todoDisplay);
          var todoTopDiv = document.createElement('div');
          todoTopDiv.className = 'todoTopDiv';
          todoTopDiv.id = "todoTopDiv".concat(z);
          todoTopDiv.setAttribute('data-value', "".concat(z));
          todoDisplay.appendChild(todoTopDiv);
          var todoTitle = document.createElement('div');
          todoTitle.className = 'todoTitle';
          todoTitle.id = "todoTitle".concat(z);
          todoTitle.setAttribute('data-value', "".concat(z));
          todoTopDiv.appendChild(todoTitle);
          todoTitle.textContent = "Title: ".concat(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z].title);
          var todoDescription = document.createElement('div');
          todoDescription.className = 'todoDescription';
          todoDescription.id = "todoDescription".concat(z);
          todoDescription.setAttribute('data-value', "".concat(z));
          todoTopDiv.appendChild(todoDescription);
          todoDescription.textContent = "Description: ".concat(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z].description);
          var todoDueDate = document.createElement('div');
          todoDueDate.className = 'todoDueDate';
          todoDueDate.id = "todoDueDate".concat(z);
          todoDueDate.setAttribute('data-value', "".concat(z));
          todoTopDiv.appendChild(todoDueDate);
          todoDueDate.textContent = "Due Date: ".concat(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z].priority);
          var todoPriority = document.createElement('div');
          todoPriority.className = 'todoPriority';
          todoPriority.id = "todoPriority".concat(z);
          todoPriority.setAttribute('data-value', "".concat(z));
          todoTopDiv.appendChild(todoPriority);
          todoPriority.textContent = "Priority: ".concat(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z].dueDate);
          var todoBotDiv = document.createElement('div');
          todoBotDiv.className = 'todoBotDiv';
          todoBotDiv.id = "todoBotDiv".concat(z);
          todoBotDiv.setAttribute('data-value', "".concat(z));
          todoDisplay.appendChild(todoBotDiv);
          todoBotDiv.textContent = 'X';

          var reTodo = function reTodo(event) {
            var todoArrayValue = event.target.getAttribute('data-value');
            _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo.splice(todoArrayValue, 1); ///

            mainContent.innerHTML = '';

            for (var _z = 0; _z < _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo.length; _z++) {
              var _todoDisplay = document.createElement('div');

              _todoDisplay.className = 'todoDisplay';
              _todoDisplay.id = "todoDisplay".concat(_z);

              _todoDisplay.setAttribute('data-value', "".concat(_z));

              mainContent.appendChild(_todoDisplay);

              var _todoTopDiv = document.createElement('div');

              _todoTopDiv.className = 'todoTopDiv';
              _todoTopDiv.id = "todoTopDiv".concat(_z);

              _todoTopDiv.setAttribute('data-value', "".concat(_z));

              _todoDisplay.appendChild(_todoTopDiv);

              var _todoTitle = document.createElement('div');

              _todoTitle.className = 'todoTitle';
              _todoTitle.id = "todoTitle".concat(_z);

              _todoTitle.setAttribute('data-value', "".concat(_z));

              _todoTopDiv.appendChild(_todoTitle);

              _todoTitle.textContent = "Title: ".concat(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[_z].title);

              var _todoDescription = document.createElement('div');

              _todoDescription.className = 'todoDescription';
              _todoDescription.id = "todoDescription".concat(_z);

              _todoDescription.setAttribute('data-value', "".concat(_z));

              _todoTopDiv.appendChild(_todoDescription);

              _todoDescription.textContent = "Description: ".concat(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[_z].description);

              var _todoDueDate = document.createElement('div');

              _todoDueDate.className = 'todoDueDate';
              _todoDueDate.id = "todoDueDate".concat(_z);

              _todoDueDate.setAttribute('data-value', "".concat(_z));

              _todoTopDiv.appendChild(_todoDueDate);

              _todoDueDate.textContent = "Due Date: ".concat(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[_z].dueDate);

              var _todoPriority = document.createElement('div');

              _todoPriority.className = 'todoPriority';
              _todoPriority.id = "todoPriority".concat(_z);

              _todoPriority.setAttribute('data-value', "".concat(_z));

              _todoTopDiv.appendChild(_todoPriority);

              _todoPriority.textContent = "Priority: ".concat(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[_z].priority);

              var _todoBotDiv = document.createElement('div');

              _todoBotDiv.className = 'todoBotDiv';
              _todoBotDiv.id = "todoBotDiv".concat(_z);

              _todoBotDiv.setAttribute('data-value', "".concat(_z));

              _todoDisplay.appendChild(_todoBotDiv);

              _todoBotDiv.textContent = 'X';

              _todoBotDiv.addEventListener('click', reTodo);

              var _newTodoButton = document.getElementById('newTodo');

              _newTodoButton.style.display = '';
            }

            (0,_index__WEBPACK_IMPORTED_MODULE_1__.setData)();
            console.log(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo);
          };

          todoBotDiv.addEventListener('click', reTodo); // todoDisplay.textContent = `${projects[arrayDataValue]["todo"][z]['title']},${projects[arrayDataValue]["todo"][z]['dueDate']}`

          console.log(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo[z]);
        };

        for (var z = 0; z < _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo.length; z++) {
          _loop2(z);
        }
      };

      var topDiv = document.createElement('div');
      topDiv.className = 'topDiv';
      topDiv.id = "topDiv".concat(i);
      topDiv.setAttribute('data-value', "".concat(i));
      temp.appendChild(topDiv);
      topDiv.textContent = "Project Title: ".concat(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[i].projectTitle);
      topDiv.addEventListener('click', function () {
        openProject(event);
        var newTodoButton = document.getElementById('newTodo');
        newTodoButton.style.display = '';
      });
      var projectDueDate = document.createElement('div');
      projectDueDate.className = 'projectDueDate';
      projectDueDate.id = 'projectDueDate';
      projectDueDate.setAttribute('data-value', "".concat(i));
      topDiv.appendChild(projectDueDate);
      projectDueDate.textContent = "Due Date: ".concat(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[i].dueDate);
      var bottomDiv = document.createElement('div');
      bottomDiv.className = 'bottomDiv';
      bottomDiv.id = "bottomDiv".concat(i);
      bottomDiv.setAttribute('data-value', "".concat(i));
      temp.appendChild(bottomDiv);
      bottomDiv.textContent = 'X'; // removing project functionality

      var removeProject = function removeProject(event) {
        var item = event.target.getAttribute('data-value');
        _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects.splice(item, 1);
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.setData)();
        console.log(_createTodo__WEBPACK_IMPORTED_MODULE_2__.projects);
        projectDivs();
      };

      bottomDiv.addEventListener('click', removeProject);
    };

    for (var i = 0; i < _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects.length; i++) {
      _loop(i);
    }
  };

  var gangang = function gangang(obj) {
    _createTodo__WEBPACK_IMPORTED_MODULE_2__.projects[arrayDataValue].todo.push(obj);
    projectDivs();
    var gang = document.getElementById(["topDiv".concat(arrayDataValue)]);
    gang.click();
    (0,_index__WEBPACK_IMPORTED_MODULE_1__.setData)();
  };

  return {
    projectDivs: projectDivs,
    gangang: gangang
  };
}();



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
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var projectObject = /*#__PURE__*/_createClass(function projectObject(projectTitle, dueDate, todo) {
  _classCallCheck(this, projectObject);

  this.projectTitle = projectTitle;
  this.dueDate = dueDate;
  this.todo = todo;
});

var todoObject = /*#__PURE__*/_createClass(function todoObject(title, description, dueDate, priority) {
  _classCallCheck(this, todoObject);

  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}); /// data structure for project/ todo list [ Project object 
//containing a subarray with many todo objects]


var todog2 = [];
var todog1 = new todoObject('Go Shopping', 'Get Bread', '03/12/2021', 'High');
var todog3 = new todoObject('Go Shopping', 'Get Bananas', '03/12/2021', 'High');
todog2.push(todog1, todog3);
var defaultProject = new projectObject('default', '03/12/2021', todog2);
var projects = [defaultProject];
var todoList = [];
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


/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  height: 95vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.titleDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10%;\n  width: 100%;\n}\n\n.mainDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90%;\n  width: 100%;\n  flex-wrap: nowrap;\n}\n\n.mainContainerDiv {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.sideContainerDiv {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  height: 99.2%;\n  width: 20%;\n  flex-direction: column;\n  background-color: #ffb4a2;\n  border: #6d6875 ridge;\n}\n\n.mainContent {\n  border: #6d6875 ridge;\n  overflow: auto;\n  height: 85%;\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 5%;\n  background-color: #e5989b;\n}\n\n.mainContentTitle {\n  border: #6d6875 ridge;\n  height: 15%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 3rem;\n  font-style: Sans-serif;\n  background-color: #e5989b;\n}\n\n.tab {\n  border: #6d6875 ridge;\n  height: 5%;\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50%;\n  cursor: pointer;\n  background-color: #b5838d;\n}\n\n.todo {\n  border: #6d6875 ridge;\n  height: 20%;\n  width: 20%;\n  margin-top: 5%;\n  margin-left: 5%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #ffcdb2;\n}\n\n.projectModal {\n  position: absolute;\n  margin: auto;\n  width: 30%;\n  height: 40%;\n  border: #6d6875 ridge;\n  background-color: #ffb4a2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.projectModalContent {\n  margin-top: 5%;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3%;\n  background-color: #ffb4a2;\n}\n\n.projectModalTitle {\n  height: 10%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.projectModalInput {\n  width: 50%;\n  height: 4%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.projectModalOptions {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-end;\n  flex-direction: row;\n  height: 10%;\n  width: 90%;\n  background-color: #ffb4a2;\n}\n\n.projectOptions {\n  border: #6d6875 ridge;\n  height: 80%;\n  display: flex;\n  width: 20%;\n  justify-content: center;\n  align-items: center;\n  background-color: #b5838d;\n  margin-bottom: 0.2rem;\n}\n\n.topDiv {\n  border: #6d6875 ridge;\n  border-top-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70%;\n  width: 100%;\n  cursor: pointer;\n  flex-direction: column;\n  gap: 30%;\n}\n\n.bottomDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30%;\n  width: 10%;\n  cursor: pointer;\n}\n\n.todoDisplay {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border: #6d6875 ridge;\n  height: 35%;\n  width: 25%;\n  flex-direction: column;\n  background-color: #ffcdb2;\n  margin-left: 0.5rem;\n}\n.todoTopDiv {\n  /* border: #6d6875 ridge; */\n  border-top-style: none;\n  height: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  width: 90%;\n  gap: 10%;\n  flex-wrap: wrap;\n}\n.todoBotDiv {\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 5%;\n  cursor: pointer;\n}\n\n.todoModalDescriptionInput {\n  height: 20%;\n  text-align: justify;\n}\n\n.todoModalPriorityInput {\n  height: 10%;\n}\n\n.todoModalSubmit {\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[".container {\n  height: 95vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.titleDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10%;\n  width: 100%;\n}\n\n.mainDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90%;\n  width: 100%;\n  flex-wrap: nowrap;\n}\n\n.mainContainerDiv {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.sideContainerDiv {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  height: 99.2%;\n  width: 20%;\n  flex-direction: column;\n  background-color: #ffb4a2;\n  border: #6d6875 ridge;\n}\n\n.mainContent {\n  border: #6d6875 ridge;\n  overflow: auto;\n  height: 85%;\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 5%;\n  background-color: #e5989b;\n}\n\n.mainContentTitle {\n  border: #6d6875 ridge;\n  height: 15%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 3rem;\n  font-style: Sans-serif;\n  background-color: #e5989b;\n}\n\n.tab {\n  border: #6d6875 ridge;\n  height: 5%;\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50%;\n  cursor: pointer;\n  background-color: #b5838d;\n}\n\n.todo {\n  border: #6d6875 ridge;\n  height: 20%;\n  width: 20%;\n  margin-top: 5%;\n  margin-left: 5%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #ffcdb2;\n}\n\n.projectModal {\n  position: absolute;\n  margin: auto;\n  width: 30%;\n  height: 40%;\n  border: #6d6875 ridge;\n  background-color: #ffb4a2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.projectModalContent {\n  margin-top: 5%;\n  height: 90%;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3%;\n  background-color: #ffb4a2;\n}\n\n.projectModalTitle {\n  height: 10%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.projectModalInput {\n  width: 50%;\n  height: 4%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.projectModalOptions {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-end;\n  flex-direction: row;\n  height: 10%;\n  width: 90%;\n  background-color: #ffb4a2;\n}\n\n.projectOptions {\n  border: #6d6875 ridge;\n  height: 80%;\n  display: flex;\n  width: 20%;\n  justify-content: center;\n  align-items: center;\n  background-color: #b5838d;\n  margin-bottom: 0.2rem;\n}\n\n.topDiv {\n  border: #6d6875 ridge;\n  border-top-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70%;\n  width: 100%;\n  cursor: pointer;\n  flex-direction: column;\n  gap: 30%;\n}\n\n.bottomDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30%;\n  width: 10%;\n  cursor: pointer;\n}\n\n.todoDisplay {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border: #6d6875 ridge;\n  height: 35%;\n  width: 25%;\n  flex-direction: column;\n  background-color: #ffcdb2;\n  margin-left: 0.5rem;\n}\n.todoTopDiv {\n  /* border: #6d6875 ridge; */\n  border-top-style: none;\n  height: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  width: 90%;\n  gap: 10%;\n  flex-wrap: wrap;\n}\n.todoBotDiv {\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 5%;\n  cursor: pointer;\n}\n\n.todoModalDescriptionInput {\n  height: 20%;\n  text-align: justify;\n}\n\n.todoModalPriorityInput {\n  height: 10%;\n}\n\n.todoModalSubmit {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUb2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHNldERhdGEgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7XG4gIHByb2plY3RPYmplY3QsIHRvZG9PYmplY3QsIHRvZG9MaXN0LCBwcm9qZWN0cyxcbn0gZnJvbSAnLi9jcmVhdGVUb2RvJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5jb25zdCBtYWluUGFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW5Db250YWluZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXYuY2xhc3NOYW1lID0gJ3RpdGxlRGl2JztcbiAgICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlRGl2Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LmNsYXNzTmFtZSA9ICdtYWluRGl2JztcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkRpdicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuICAgIGNvbnN0IHNpZGVDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlQ29udGFpbmVyRGl2LmNsYXNzTmFtZSA9ICdzaWRlQ29udGFpbmVyRGl2JztcbiAgICBzaWRlQ29udGFpbmVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2lkZUNvbnRhaW5lckRpdicpO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoc2lkZUNvbnRhaW5lckRpdik7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRhaW5lckRpdi5jbGFzc05hbWUgPSAnbWFpbkNvbnRhaW5lckRpdic7XG4gICAgbWFpbkNvbnRhaW5lckRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5Db250YWluZXJEaXYnKTtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5Db250YWluZXJEaXYpO1xuICB9O1xuXG4gIGNvbnN0IG1haW5Db250YWluZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIG1haW5Db250YWluZXJzKCk7XG5cbiAgICBjb25zdCBtYWluQ29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS5jbGFzc05hbWUgPSAnbWFpbkNvbnRlbnRUaXRsZSc7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5Db250ZW50VGl0bGUnKTtcbiAgICBtYWluQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50VGl0bGUpO1xuICAgIG1haW5Db250ZW50VGl0bGUudGV4dENvbnRlbnQgPSAncHJvamVjdHMnO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc05hbWUgPSAnbWFpbkNvbnRlbnQnO1xuICAgIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkNvbnRlbnQnKTtcbiAgICBtYWluQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgfTtcblxuICBjb25zdCBzaWRlQ29udGFpbmVyQ29udGVudCA9ICgpID0+IHtcbiAgICBtYWluQ29udGFpbmVyQ29udGVudCgpO1xuXG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVUYWIuY2xhc3NOYW1lID0gJ2hvbWVUYWIgdGFiJztcbiAgICBob21lVGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZVRhYicpO1xuICAgIGhvbWVUYWIudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgc2lkZUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheWluZ1RvZG9zLnByb2plY3REaXZzKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTmFtZSA9ICduZXdQcm9qZWN0IHRhYic7XG4gICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Byb2plY3QnKTtcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcbiAgICBzaWRlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbHMubmV3UHJvamVjdE1vZGFsKTtcblxuICAgIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUb2RvLmNsYXNzTmFtZSA9ICduZXdUb2RvIHRhYic7XG4gICAgbmV3VG9kby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1RvZG8nKTtcbiAgICBuZXdUb2RvLnRleHRDb250ZW50ID0gJ0FkZCBUbyBEbyc7XG4gICAgc2lkZUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICBuZXdUb2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9kb01vZGFsLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWwgdG9kb01vZGFsJztcbiAgICAgIHRvZG9Nb2RhbC5pZCA9ICd0b2RvTW9kYWwnO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Nb2RhbCk7XG5cbiAgICAgIGNvbnN0IHRvZG9Nb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvZG9Nb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbENvbnRlbnQgVG9kb01vZGFsQ29udGVudCc7XG4gICAgICB0b2RvTW9kYWxDb250ZW50LmlkID0gJ3RvZG9Nb2RhbENvbnRlbnQnO1xuICAgICAgdG9kb01vZGFsLmFwcGVuZENoaWxkKHRvZG9Nb2RhbENvbnRlbnQpO1xuXG4gICAgICBjb25zdCB0b2RvTW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9kb01vZGFsVGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbFRpdGxlIHRvZG9Nb2RhbFRpdGxlJztcbiAgICAgIHRvZG9Nb2RhbFRpdGxlLmlkID0gJ3RvZG9Nb2RhbFRpdGxlJztcbiAgICAgIHRvZG9Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb01vZGFsVGl0bGUpO1xuICAgICAgdG9kb01vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnRW50ZXIgVG8gRG8gVGl0bGUnO1xuXG4gICAgICBjb25zdCB0b2RvTW9kYWxUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHRvZG9Nb2RhbFRpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbElucHV0IHRvZG9Nb2RhbFRpdGxlSW5wdXQnO1xuICAgICAgdG9kb01vZGFsVGl0bGVJbnB1dC5pZCA9ICcgVG9kb01vZGFsSW5wdXQnO1xuICAgICAgdG9kb01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxUaXRsZUlucHV0KTtcblxuICAgICAgY29uc3QgdG9kb01vZGFsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvZG9Nb2RhbERlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICcgdG9kb01vZGFsRGVzY3JpcHRpb24nO1xuICAgICAgdG9kb01vZGFsRGVzY3JpcHRpb24uaWQgPSAndG9kb01vZGFsRGVzY3JpcHRpb24nO1xuICAgICAgdG9kb01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxEZXNjcmlwdGlvbik7XG4gICAgICB0b2RvTW9kYWxEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdFbnRlciBEZXNjcmlwdGlvbic7XG5cbiAgICAgIGNvbnN0IHRvZG9Nb2RhbERlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdURVhUQVJFQScpO1xuICAgICAgdG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsSW5wdXQgdG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dCc7XG4gICAgICB0b2RvTW9kYWxEZXNjcmlwdGlvbklucHV0LmlkID0gJyB0b2RvTW9kYWxEZXNjcmlwdGlvbklucHV0JztcbiAgICAgIHRvZG9Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAgIGNvbnN0IHRvZG9Nb2RhbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b2RvTW9kYWxQcmlvcml0eS5jbGFzc05hbWUgPSAnIHRvZG9Nb2RhbERlc2NyaXB0aW9uIHRvZG9Nb2RhbFByaW9yaXR5JztcbiAgICAgIHRvZG9Nb2RhbFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG9Nb2RhbFByaW9yaXR5SW5wdXQnKTtcbiAgICAgIHRvZG9Nb2RhbFByaW9yaXR5LmlkID0gJ3RvZG9Nb2RhbERlc2NyaXB0aW9uJztcbiAgICAgIHRvZG9Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb01vZGFsUHJpb3JpdHkpO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnU2VsZWN0IFByaW9yaXR5JztcblxuICAgICAgY29uc3QgdG9kb01vZGFsUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHlJbnB1dC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsSW5wdXQgdG9kb01vZGFsUHJpb3JpdHlJbnB1dCc7XG4gICAgICB0b2RvTW9kYWxQcmlvcml0eUlucHV0LmlkID0gJyB0b2RvTW9kYWxQcmlvcml0eUlucHV0JztcbiAgICAgIHRvZG9Nb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb01vZGFsUHJpb3JpdHlJbnB1dCk7XG5cbiAgICAgIGNvbnN0IHRvZG9Nb2RhbFByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxQcmlvcml0eUhpZ2gpO1xuXG4gICAgICBjb25zdCB0b2RvTW9kYWxQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdNZWRpdW0nKTtcbiAgICAgIHRvZG9Nb2RhbFByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICB0b2RvTW9kYWxQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHRvZG9Nb2RhbFByaW9yaXR5TWVkaXVtKTtcblxuICAgICAgY29uc3QgdG9kb01vZGFsUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHRvZG9Nb2RhbFByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG4gICAgICB0b2RvTW9kYWxQcmlvcml0eUxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgdG9kb01vZGFsUHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxQcmlvcml0eUxvdyk7XG5cbiAgICAgIGNvbnN0IHRvZG9Nb2RhbER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvZG9Nb2RhbER1ZURhdGUuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbER1ZURhdGUgVG9kb01vZGFsRHVlRGF0ZSc7XG4gICAgICB0b2RvTW9kYWxEdWVEYXRlLmlkID0gJ3Byb2plY3RNb2RhbER1ZURhdGUnO1xuICAgICAgdG9kb01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxEdWVEYXRlKTtcbiAgICAgIHRvZG9Nb2RhbER1ZURhdGUudGV4dENvbnRlbnQgPSAnRW50ZXIgRHVlIERhdGUnO1xuXG4gICAgICBjb25zdCB0b2RvTW9kYWxEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgdG9kb01vZGFsRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICB0b2RvTW9kYWxEdWVEYXRlSW5wdXQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbER1ZURhdGVJbnB1dCB0b2RvTW9kYWxEdWVEYXRlSW5wdXQnO1xuICAgICAgdG9kb01vZGFsRHVlRGF0ZUlucHV0LmlkID0gJyB0b2RvTW9kYWxEdWVEYXRlSW5wdXQnO1xuICAgICAgdG9kb01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvTW9kYWxEdWVEYXRlSW5wdXQpO1xuXG4gICAgICBjb25zdCB0b2RvTW9kYWxPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b2RvTW9kYWxPcHRpb25zLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxPcHRpb25zIHRvZG9Nb2RhbE9wdGlvbnMnO1xuICAgICAgdG9kb01vZGFsT3B0aW9ucy5pZCA9ICcgdG9kb01vZGFsT3B0aW9ucyc7XG4gICAgICB0b2RvTW9kYWwuYXBwZW5kQ2hpbGQodG9kb01vZGFsT3B0aW9ucyk7XG5cbiAgICAgIGNvbnN0IHRvZG9Nb2RhbENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9kb01vZGFsQ2FuY2VsLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxDYW5jZWwgcHJvamVjdE9wdGlvbnMgdG9kb01vZGFsQ2FuY2VsJztcbiAgICAgIHRvZG9Nb2RhbENhbmNlbC5pZCA9ICcgdG9kb01vZGFsQ2FuY2VsJztcbiAgICAgIHRvZG9Nb2RhbE9wdGlvbnMuYXBwZW5kQ2hpbGQodG9kb01vZGFsQ2FuY2VsKTtcbiAgICAgIHRvZG9Nb2RhbENhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgdG9kb01vZGFsQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB0b2RvTW9kYWxTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvZG9Nb2RhbFN1Ym1pdC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsU3VibWl0IHByb2plY3RPcHRpb25zIHRvZG9Nb2RhbFN1Ym1pdCc7XG4gICAgICB0b2RvTW9kYWxTdWJtaXQuaWQgPSAnIHRvZG9Nb2RhbFN1Ym1pdCc7XG4gICAgICB0b2RvTW9kYWxPcHRpb25zLmFwcGVuZENoaWxkKHRvZG9Nb2RhbFN1Ym1pdCk7XG4gICAgICB0b2RvTW9kYWxTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgIHRvZG9Nb2RhbFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICB0b2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlVmFsdWUgPSB0b2RvTW9kYWxUaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb25WYWx1ZSA9IHRvZG9Nb2RhbERlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eVZhbHVlID0gdG9kb01vZGFsUHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb0R1ZURhdGVWYWx1ZSA9IHRvZG9Nb2RhbER1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3VG9kb09iamVjdCA9IG5ldyB0b2RvT2JqZWN0KHRvZG9UaXRsZVZhbHVlLCB0b2RvRGVzY3JpcHRpb25WYWx1ZSwgdG9kb1ByaW9yaXR5VmFsdWUsIHRvZG9EdWVEYXRlVmFsdWUpO1xuICAgICAgICBkaXNwbGF5aW5nVG9kb3MuZ2FuZ2FuZyhuZXdUb2RvT2JqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IHNpZGVDb250YWluZXJDb250ZW50IH07XG59KSgpO1xuXG5jb25zdCBtb2RhbHMgPSAoKCkgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdE1vZGFsLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWwnO1xuICAgIHByb2plY3RNb2RhbC5pZCA9ICdwcm9qZWN0TW9kYWwnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TW9kYWwpO1xuXG4gICAgY29uc3QgcHJvamVjdE1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RNb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbENvbnRlbnQnO1xuICAgIHByb2plY3RNb2RhbENvbnRlbnQuaWQgPSAncHJvamVjdE1vZGFsQ29udGVudCc7XG4gICAgcHJvamVjdE1vZGFsLmFwcGVuZENoaWxkKHByb2plY3RNb2RhbENvbnRlbnQpO1xuXG4gICAgY29uc3QgcHJvamVjdE1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TW9kYWxUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsVGl0bGUnO1xuICAgIHByb2plY3RNb2RhbFRpdGxlLmlkID0gJ3Byb2plY3RNb2RhbFRpdGxlJztcbiAgICBwcm9qZWN0TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RNb2RhbFRpdGxlKTtcbiAgICBwcm9qZWN0TW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdFbnRlciBQcm9qZWN0IE5hbWUnO1xuXG4gICAgY29uc3QgcHJvamVjdE1vZGFsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RNb2RhbElucHV0LmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxJbnB1dCc7XG4gICAgcHJvamVjdE1vZGFsSW5wdXQuaWQgPSAnIHByb2plY3RNb2RhbElucHV0JztcbiAgICBwcm9qZWN0TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RNb2RhbElucHV0KTtcblxuICAgIGNvbnN0IHByb2plY3RNb2RhbER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TW9kYWxEdWVEYXRlLmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxEdWVEYXRlJztcbiAgICBwcm9qZWN0TW9kYWxEdWVEYXRlLmlkID0gJ3Byb2plY3RNb2RhbER1ZURhdGUnO1xuICAgIHByb2plY3RNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdE1vZGFsRHVlRGF0ZSk7XG4gICAgcHJvamVjdE1vZGFsRHVlRGF0ZS50ZXh0Q29udGVudCA9ICdFbnRlciBEdWUgRGF0ZSc7XG5cbiAgICBjb25zdCBwcm9qZWN0TW9kYWxEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RNb2RhbER1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIHByb2plY3RNb2RhbER1ZURhdGVJbnB1dC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsRHVlRGF0ZUlucHV0JztcbiAgICBwcm9qZWN0TW9kYWxEdWVEYXRlSW5wdXQuaWQgPSAnIHByb2plY3RNb2RhbER1ZURhdGVJbnB1dCc7XG4gICAgcHJvamVjdE1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TW9kYWxEdWVEYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgcHJvamVjdE1vZGFsT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RNb2RhbE9wdGlvbnMuY2xhc3NOYW1lID0gJ3Byb2plY3RNb2RhbE9wdGlvbnMnO1xuICAgIHByb2plY3RNb2RhbE9wdGlvbnMuaWQgPSAnIHByb2plY3RNb2RhbE9wdGlvbnMnO1xuICAgIHByb2plY3RNb2RhbC5hcHBlbmRDaGlsZChwcm9qZWN0TW9kYWxPcHRpb25zKTtcblxuICAgIGNvbnN0IHByb2plY3RNb2RhbENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RNb2RhbENhbmNlbC5jbGFzc05hbWUgPSAncHJvamVjdE1vZGFsQ2FuY2VsIHByb2plY3RPcHRpb25zJztcbiAgICBwcm9qZWN0TW9kYWxDYW5jZWwuaWQgPSAnIHByb2plY3RNb2RhbENhbmNlbCc7XG4gICAgcHJvamVjdE1vZGFsT3B0aW9ucy5hcHBlbmRDaGlsZChwcm9qZWN0TW9kYWxDYW5jZWwpO1xuICAgIHByb2plY3RNb2RhbENhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHByb2plY3RNb2RhbENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvamVjdE1vZGFsU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdE1vZGFsU3VibWl0LmNsYXNzTmFtZSA9ICdwcm9qZWN0TW9kYWxTdWJtaXQgcHJvamVjdE9wdGlvbnMnO1xuICAgIHByb2plY3RNb2RhbFN1Ym1pdC5pZCA9ICcgcHJvamVjdE1vZGFsU3VibWl0JztcbiAgICBwcm9qZWN0TW9kYWxPcHRpb25zLmFwcGVuZENoaWxkKHByb2plY3RNb2RhbFN1Ym1pdCk7XG4gICAgcHJvamVjdE1vZGFsU3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgcHJvamVjdE1vZGFsU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIGNvbnN0IG5ld1RvZG8gPSBbXTtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3RzID0gbmV3IHByb2plY3RPYmplY3QocHJvamVjdE1vZGFsSW5wdXQudmFsdWUsIHByb2plY3RNb2RhbER1ZURhdGVJbnB1dC52YWx1ZSwgbmV3VG9kbyk7XG4gICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3RzKTtcbiAgICAgIGRpc3BsYXlpbmdUb2Rvcy5wcm9qZWN0RGl2cygpO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgICAgc2V0RGF0YSgpO1xuICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbiAgICAgIHJldHVybiB7IG5ld1RvZG8gfTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Q29tcG9uZW50c1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0UGFnZS5jbGFzc05hbWUgPSAncHJvamVjdFBhZ2UnO1xuICAgIHByb2plY3RQYWdlLmlkID0gJ3Byb2plY3RQYWdlJztcbiAgfTtcblxuICByZXR1cm4geyBuZXdQcm9qZWN0TW9kYWwsIHByb2plY3RDb21wb25lbnRzUGFnZSB9O1xufSkoKTtcblxuY29uc3QgZGlzcGxheWluZ1RvZG9zID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdERpdnMgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUb2RvJyk7XG4gICAgbWFpbkNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlbXAuY2xhc3NOYW1lID0gYHByb2plY3Qke2l9IHRvZG9gO1xuICAgICAgdGVtcC5pZCA9IGBwcm9qZWN0JHtpfWA7XG4gICAgICB0ZW1wLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke2l9YCk7XG4gICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0ZW1wKTtcblxuICAgICAgLy8gb3BlbmluZyBvYmplY3QgZnVuY3Rpb25cbiAgICAgIGNvbnN0IG9wZW5Qcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGdsb2JhbFRoaXMuYXJyYXlEYXRhVmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG4gICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBtYWluQ29udGVudFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdLnByb2plY3RUaXRsZX1gO1xuICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IHByb2plY3RzW2FycmF5RGF0YVZhbHVlXS50b2RvLmxlbmd0aDsgeisrKSB7XG4gICAgICAgICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUb2RvJyk7XG4gICAgICAgICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHRvZG9EaXNwbGF5LmNsYXNzTmFtZSA9ICd0b2RvRGlzcGxheSc7XG4gICAgICAgICAgdG9kb0Rpc3BsYXkuaWQgPSBgdG9kb0Rpc3BsYXkke3p9YDtcbiAgICAgICAgICB0b2RvRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBgJHt6fWApO1xuICAgICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRvZG9EaXNwbGF5KTtcblxuICAgICAgICAgIGNvbnN0IHRvZG9Ub3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0b2RvVG9wRGl2LmNsYXNzTmFtZSA9ICd0b2RvVG9wRGl2JztcbiAgICAgICAgICB0b2RvVG9wRGl2LmlkID0gYHRvZG9Ub3BEaXYke3p9YDtcbiAgICAgICAgICB0b2RvVG9wRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke3p9YCk7XG4gICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb1RvcERpdik7XG5cbiAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0b2RvVGl0bGUuY2xhc3NOYW1lID0gJ3RvZG9UaXRsZSc7XG4gICAgICAgICAgdG9kb1RpdGxlLmlkID0gYHRvZG9UaXRsZSR7en1gO1xuICAgICAgICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBgJHt6fWApO1xuICAgICAgICAgIHRvZG9Ub3BEaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdLnRvZG9bel0udGl0bGV9YDtcblxuICAgICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAndG9kb0Rlc2NyaXB0aW9uJztcbiAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uaWQgPSBgdG9kb0Rlc2NyaXB0aW9uJHt6fWA7XG4gICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke3p9YCk7XG4gICAgICAgICAgdG9kb1RvcERpdi5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtwcm9qZWN0c1thcnJheURhdGFWYWx1ZV0udG9kb1t6XS5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0b2RvRHVlRGF0ZS5jbGFzc05hbWUgPSAndG9kb0R1ZURhdGUnO1xuICAgICAgICAgIHRvZG9EdWVEYXRlLmlkID0gYHRvZG9EdWVEYXRlJHt6fWA7XG4gICAgICAgICAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgYCR7en1gKTtcbiAgICAgICAgICB0b2RvVG9wRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtwcm9qZWN0c1thcnJheURhdGFWYWx1ZV0udG9kb1t6XS5wcmlvcml0eX1gO1xuXG4gICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdG9kb1ByaW9yaXR5LmNsYXNzTmFtZSA9ICd0b2RvUHJpb3JpdHknO1xuICAgICAgICAgIHRvZG9Qcmlvcml0eS5pZCA9IGB0b2RvUHJpb3JpdHkke3p9YDtcbiAgICAgICAgICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgYCR7en1gKTtcbiAgICAgICAgICB0b2RvVG9wRGl2LmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG4gICAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Byb2plY3RzW2FycmF5RGF0YVZhbHVlXS50b2RvW3pdLmR1ZURhdGV9YDtcblxuICAgICAgICAgIGNvbnN0IHRvZG9Cb3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0b2RvQm90RGl2LmNsYXNzTmFtZSA9ICd0b2RvQm90RGl2JztcbiAgICAgICAgICB0b2RvQm90RGl2LmlkID0gYHRvZG9Cb3REaXYke3p9YDtcbiAgICAgICAgICB0b2RvQm90RGl2LnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke3p9YCk7XG4gICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb0JvdERpdik7XG4gICAgICAgICAgdG9kb0JvdERpdi50ZXh0Q29udGVudCA9ICdYJztcblxuICAgICAgICAgIGNvbnN0IHJlVG9kbyA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb0FycmF5VmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG4gICAgICAgICAgICBwcm9qZWN0c1thcnJheURhdGFWYWx1ZV0udG9kby5zcGxpY2UodG9kb0FycmF5VmFsdWUsIDEpO1xuXG4gICAgICAgICAgICAvLy9cbiAgICAgICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBwcm9qZWN0c1thcnJheURhdGFWYWx1ZV0udG9kby5sZW5ndGg7IHorKykge1xuICAgICAgICAgICAgICBjb25zdCB0b2RvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICB0b2RvRGlzcGxheS5jbGFzc05hbWUgPSAndG9kb0Rpc3BsYXknO1xuICAgICAgICAgICAgICB0b2RvRGlzcGxheS5pZCA9IGB0b2RvRGlzcGxheSR7en1gO1xuICAgICAgICAgICAgICB0b2RvRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBgJHt6fWApO1xuICAgICAgICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0b2RvRGlzcGxheSk7XG5cbiAgICAgICAgICAgICAgY29uc3QgdG9kb1RvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICB0b2RvVG9wRGl2LmNsYXNzTmFtZSA9ICd0b2RvVG9wRGl2JztcbiAgICAgICAgICAgICAgdG9kb1RvcERpdi5pZCA9IGB0b2RvVG9wRGl2JHt6fWA7XG4gICAgICAgICAgICAgIHRvZG9Ub3BEaXYuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgYCR7en1gKTtcbiAgICAgICAgICAgICAgdG9kb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9kb1RvcERpdik7XG5cbiAgICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIHRvZG9UaXRsZS5jbGFzc05hbWUgPSAndG9kb1RpdGxlJztcbiAgICAgICAgICAgICAgdG9kb1RpdGxlLmlkID0gYHRvZG9UaXRsZSR7en1gO1xuICAgICAgICAgICAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgYCR7en1gKTtcbiAgICAgICAgICAgICAgdG9kb1RvcERpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdLnRvZG9bel0udGl0bGV9YDtcblxuICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICd0b2RvRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uaWQgPSBgdG9kb0Rlc2NyaXB0aW9uJHt6fWA7XG4gICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBgJHt6fWApO1xuICAgICAgICAgICAgICB0b2RvVG9wRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtwcm9qZWN0c1thcnJheURhdGFWYWx1ZV0udG9kb1t6XS5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIHRvZG9EdWVEYXRlLmNsYXNzTmFtZSA9ICd0b2RvRHVlRGF0ZSc7XG4gICAgICAgICAgICAgIHRvZG9EdWVEYXRlLmlkID0gYHRvZG9EdWVEYXRlJHt6fWA7XG4gICAgICAgICAgICAgIHRvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke3p9YCk7XG4gICAgICAgICAgICAgIHRvZG9Ub3BEaXYuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICAgICAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtwcm9qZWN0c1thcnJheURhdGFWYWx1ZV0udG9kb1t6XS5kdWVEYXRlfWA7XG5cbiAgICAgICAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIHRvZG9Qcmlvcml0eS5jbGFzc05hbWUgPSAndG9kb1ByaW9yaXR5JztcbiAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5LmlkID0gYHRvZG9Qcmlvcml0eSR7en1gO1xuICAgICAgICAgICAgICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgYCR7en1gKTtcbiAgICAgICAgICAgICAgdG9kb1RvcERpdi5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuICAgICAgICAgICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdLnRvZG9bel0ucHJpb3JpdHl9YDtcblxuICAgICAgICAgICAgICBjb25zdCB0b2RvQm90RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIHRvZG9Cb3REaXYuY2xhc3NOYW1lID0gJ3RvZG9Cb3REaXYnO1xuICAgICAgICAgICAgICB0b2RvQm90RGl2LmlkID0gYHRvZG9Cb3REaXYke3p9YDtcbiAgICAgICAgICAgICAgdG9kb0JvdERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBgJHt6fWApO1xuICAgICAgICAgICAgICB0b2RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b2RvQm90RGl2KTtcbiAgICAgICAgICAgICAgdG9kb0JvdERpdi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgdG9kb0JvdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlVG9kbyk7XG5cbiAgICAgICAgICAgICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUb2RvJyk7XG4gICAgICAgICAgICAgIG5ld1RvZG9CdXR0b24uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0RGF0YSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdLnRvZG8pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0b2RvQm90RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVUb2RvKTtcblxuICAgICAgICAgIC8vIHRvZG9EaXNwbGF5LnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbYXJyYXlEYXRhVmFsdWVdW1widG9kb1wiXVt6XVsndGl0bGUnXX0sJHtwcm9qZWN0c1thcnJheURhdGFWYWx1ZV1bXCJ0b2RvXCJdW3pdWydkdWVEYXRlJ119YFxuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2FycmF5RGF0YVZhbHVlXS50b2RvW3pdKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHRvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9wRGl2LmNsYXNzTmFtZSA9ICd0b3BEaXYnO1xuICAgICAgdG9wRGl2LmlkID0gYHRvcERpdiR7aX1gO1xuICAgICAgdG9wRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke2l9YCk7XG4gICAgICB0ZW1wLmFwcGVuZENoaWxkKHRvcERpdik7XG4gICAgICB0b3BEaXYudGV4dENvbnRlbnQgPSBgUHJvamVjdCBUaXRsZTogJHtwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGV9YDtcbiAgICAgIHRvcERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgb3BlblByb2plY3QoZXZlbnQpO1xuICAgICAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1RvZG8nKTtcbiAgICAgICAgbmV3VG9kb0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHByb2plY3REdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qZWN0RHVlRGF0ZS5jbGFzc05hbWUgPSAncHJvamVjdER1ZURhdGUnO1xuICAgICAgcHJvamVjdER1ZURhdGUuaWQgPSAncHJvamVjdER1ZURhdGUnO1xuICAgICAgcHJvamVjdER1ZURhdGUuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgYCR7aX1gKTtcbiAgICAgIHRvcERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSk7XG4gICAgICBwcm9qZWN0RHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtwcm9qZWN0c1tpXS5kdWVEYXRlfWA7XG5cbiAgICAgIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYm90dG9tRGl2LmNsYXNzTmFtZSA9ICdib3R0b21EaXYnO1xuICAgICAgYm90dG9tRGl2LmlkID0gYGJvdHRvbURpdiR7aX1gO1xuICAgICAgYm90dG9tRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGAke2l9YCk7XG4gICAgICB0ZW1wLmFwcGVuZENoaWxkKGJvdHRvbURpdik7XG4gICAgICBib3R0b21EaXYudGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgICAgIC8vIHJlbW92aW5nIHByb2plY3QgZnVuY3Rpb25hbGl0eVxuICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaXRlbSwgMSk7XG4gICAgICAgIHNldERhdGEoKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgICAgICBwcm9qZWN0RGl2cygpO1xuICAgICAgfTtcbiAgICAgIGJvdHRvbURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVByb2plY3QpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnYW5nYW5nID0gKG9iaikgPT4ge1xuICAgIHByb2plY3RzW2FycmF5RGF0YVZhbHVlXS50b2RvLnB1c2gob2JqKTtcbiAgICBwcm9qZWN0RGl2cygpO1xuICAgIGNvbnN0IGdhbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChbYHRvcERpdiR7YXJyYXlEYXRhVmFsdWV9YF0pO1xuICAgIGdhbmcuY2xpY2soKTtcbiAgICBzZXREYXRhKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcHJvamVjdERpdnMsIGdhbmdhbmcgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRpc3BsYXlpbmdUb2RvcywgbW9kYWxzLCBtYWluUGFnZSB9O1xuIiwiY2xhc3MgcHJvamVjdE9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RUaXRsZSwgZHVlRGF0ZSwgdG9kbykge1xuICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy50b2RvID0gdG9kbztcbiAgfVxufVxuXG5jbGFzcyB0b2RvT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuLy8vIGRhdGEgc3RydWN0dXJlIGZvciBwcm9qZWN0LyB0b2RvIGxpc3QgWyBQcm9qZWN0IG9iamVjdCBcbi8vY29udGFpbmluZyBhIHN1YmFycmF5IHdpdGggbWFueSB0b2RvIG9iamVjdHNdXG5cbmNvbnN0IHRvZG9nMiA9IFtdO1xuY29uc3QgdG9kb2cxID0gbmV3IHRvZG9PYmplY3QoJ0dvIFNob3BwaW5nJywgJ0dldCBCcmVhZCcsICcwMy8xMi8yMDIxJywgJ0hpZ2gnKTtcbmNvbnN0IHRvZG9nMyA9IG5ldyB0b2RvT2JqZWN0KCdHbyBTaG9wcGluZycsICdHZXQgQmFuYW5hcycsICcwMy8xMi8yMDIxJywgJ0hpZ2gnKTtcbnRvZG9nMi5wdXNoKHRvZG9nMSwgdG9kb2czKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IHByb2plY3RPYmplY3QoJ2RlZmF1bHQnLCAnMDMvMTIvMjAyMScsIHRvZG9nMik7XG5jb25zdCBwcm9qZWN0cyA9IFtkZWZhdWx0UHJvamVjdF07XG5jb25zdCB0b2RvTGlzdCA9IFtdO1xuXG5leHBvcnQge1xuICBwcm9qZWN0T2JqZWN0LFxuICB0b2RvT2JqZWN0LFxuICB0b2RvTGlzdCxcbiAgcHJvamVjdHMsXG4gIGRlZmF1bHRQcm9qZWN0LFxuXG59O1xuXG4vLy8gLy9jcmVhdGUgcGFnZSBmb3IgZWFjaCBwcm9qZWN0IHVwb24gY2xpY2tpbmcgYW4gYXJyYXkgaXMgY3JlYXRlZCBhbmQgZmlsbGVkIHdpdGggYSB0b2RvIG9iamVjdFxuIiwiaW1wb3J0IHt0b2RvTGlzdE9iamVjdCwgdG9kb0xpc3QsZGVmYXVsdFByb2plY3QscHJvamVjdHN9IGZyb20gXCIuL2NyZWF0ZVRvZG9cIlxuaW1wb3J0e21haW5QYWdlLGRpc3BsYXlpbmdUb2RvcyxldmVudENsaWNrRnVuY3Rpb25zfSBmcm9tIFwiLi9ET01cIlxuXG5cblxuZnVuY3Rpb24gc2V0RGF0YSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxubWFpblBhZ2Uuc2lkZUNvbnRhaW5lckNvbnRlbnQoKTtcbmRpc3BsYXlpbmdUb2Rvcy5wcm9qZWN0RGl2cygpO1xuXG5cblxuXG5leHBvcnR7c2V0RGF0YVxuXG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiA5NXZoO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50aXRsZURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW5EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLm1haW5Db250YWluZXJEaXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5zaWRlQ29udGFpbmVyRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGhlaWdodDogOTkuMiU7XFxuICB3aWR0aDogMjAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI0YTI7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogODUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTk4OWI7XFxufVxcblxcbi5tYWluQ29udGVudFRpdGxlIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogMTUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtc3R5bGU6IFNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5ODliO1xcbn1cXG5cXG4udGFiIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogNSU7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTgzOGQ7XFxufVxcblxcbi50b2RvIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogMjAlO1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGIyO1xcbn1cXG5cXG4ucHJvamVjdE1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI0YTI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3RNb2RhbENvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNGEyO1xcbn1cXG5cXG4ucHJvamVjdE1vZGFsVGl0bGUge1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TW9kYWxJbnB1dCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA0JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TW9kYWxPcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNGEyO1xcbn1cXG5cXG4ucHJvamVjdE9wdGlvbnMge1xcbiAgYm9yZGVyOiAjNmQ2ODc1IHJpZGdlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDIwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTgzOGQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxufVxcblxcbi50b3BEaXYge1xcbiAgYm9yZGVyOiAjNmQ2ODc1IHJpZGdlO1xcbiAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzAlO1xcbn1cXG5cXG4uYm90dG9tRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiAxMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvRGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAjNmQ2ODc1IHJpZGdlO1xcbiAgaGVpZ2h0OiAzNSU7XFxuICB3aWR0aDogMjUlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNkYjI7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG4udG9kb1RvcERpdiB7XFxuICAvKiBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7ICovXFxuICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogOTAlO1xcbiAgZ2FwOiAxMCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi50b2RvQm90RGl2IHtcXG4gIGhlaWdodDogMTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNSU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvTW9kYWxEZXNjcmlwdGlvbklucHV0IHtcXG4gIGhlaWdodDogMjAlO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLnRvZG9Nb2RhbFByaW9yaXR5SW5wdXQge1xcbiAgaGVpZ2h0OiAxMCU7XFxufVxcblxcbi50b2RvTW9kYWxTdWJtaXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTs7RUFFWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtF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O0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixRQUFRO0VBQ1IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiA5NXZoO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50aXRsZURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW5EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLm1haW5Db250YWluZXJEaXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5zaWRlQ29udGFpbmVyRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGhlaWdodDogOTkuMiU7XFxuICB3aWR0aDogMjAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI0YTI7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogODUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTk4OWI7XFxufVxcblxcbi5tYWluQ29udGVudFRpdGxlIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogMTUlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtc3R5bGU6IFNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5ODliO1xcbn1cXG5cXG4udGFiIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogNSU7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTgzOGQ7XFxufVxcblxcbi50b2RvIHtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGhlaWdodDogMjAlO1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGIyO1xcbn1cXG5cXG4ucHJvamVjdE1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGJvcmRlcjogIzZkNjg3NSByaWRnZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI0YTI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3RNb2RhbENvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNGEyO1xcbn1cXG5cXG4ucHJvamVjdE1vZGFsVGl0bGUge1xcbiAgaGVpZ2h0OiAxMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TW9kYWxJbnB1dCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA0JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0TW9kYWxPcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNGEyO1xcbn1cXG5cXG4ucHJvamVjdE9wdGlvbnMge1xcbiAgYm9yZGVyOiAjNmQ2ODc1IHJpZGdlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDIwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNTgzOGQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxufVxcblxcbi50b3BEaXYge1xcbiAgYm9yZGVyOiAjNmQ2ODc1IHJpZGdlO1xcbiAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzAlO1xcbn1cXG5cXG4uYm90dG9tRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiAxMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvRGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAjNmQ2ODc1IHJpZGdlO1xcbiAgaGVpZ2h0OiAzNSU7XFxuICB3aWR0aDogMjUlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNkYjI7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG4udG9kb1RvcERpdiB7XFxuICAvKiBib3JkZXI6ICM2ZDY4NzUgcmlkZ2U7ICovXFxuICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogOTAlO1xcbiAgZ2FwOiAxMCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi50b2RvQm90RGl2IHtcXG4gIGhlaWdodDogMTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNSU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvTW9kYWxEZXNjcmlwdGlvbklucHV0IHtcXG4gIGhlaWdodDogMjAlO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLnRvZG9Nb2RhbFByaW9yaXR5SW5wdXQge1xcbiAgaGVpZ2h0OiAxMCU7XFxufVxcblxcbi50b2RvTW9kYWxTdWJtaXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJzZXREYXRhIiwicHJvamVjdE9iamVjdCIsInRvZG9PYmplY3QiLCJ0b2RvTGlzdCIsInByb2plY3RzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1haW5QYWdlIiwibWFpbkNvbnRhaW5lcnMiLCJ0aXRsZURpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsIm1haW5EaXYiLCJzaWRlQ29udGFpbmVyRGl2IiwibWFpbkNvbnRhaW5lckRpdiIsIm1haW5Db250YWluZXJDb250ZW50IiwibWFpbkNvbnRlbnRUaXRsZSIsInRleHRDb250ZW50IiwibWFpbkNvbnRlbnQiLCJzaWRlQ29udGFpbmVyQ29udGVudCIsImhvbWVUYWIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGxheWluZ1RvZG9zIiwicHJvamVjdERpdnMiLCJuZXdQcm9qZWN0IiwibW9kYWxzIiwibmV3UHJvamVjdE1vZGFsIiwibmV3VG9kbyIsInN0eWxlIiwiZGlzcGxheSIsInRvZG9Nb2RhbCIsImlkIiwidG9kb01vZGFsQ29udGVudCIsInRvZG9Nb2RhbFRpdGxlIiwidG9kb01vZGFsVGl0bGVJbnB1dCIsInRvZG9Nb2RhbERlc2NyaXB0aW9uIiwidG9kb01vZGFsRGVzY3JpcHRpb25JbnB1dCIsInRvZG9Nb2RhbFByaW9yaXR5IiwidG9kb01vZGFsUHJpb3JpdHlJbnB1dCIsInRvZG9Nb2RhbFByaW9yaXR5SGlnaCIsInRvZG9Nb2RhbFByaW9yaXR5TWVkaXVtIiwidG9kb01vZGFsUHJpb3JpdHlMb3ciLCJ0b2RvTW9kYWxEdWVEYXRlIiwidG9kb01vZGFsRHVlRGF0ZUlucHV0IiwidG9kb01vZGFsT3B0aW9ucyIsInRvZG9Nb2RhbENhbmNlbCIsInRvZG9Nb2RhbFN1Ym1pdCIsImV2ZW50IiwidG9kb1RpdGxlVmFsdWUiLCJ2YWx1ZSIsInRvZG9EZXNjcmlwdGlvblZhbHVlIiwidG9kb1ByaW9yaXR5VmFsdWUiLCJ0b2RvRHVlRGF0ZVZhbHVlIiwibmV3VG9kb09iamVjdCIsImdhbmdhbmciLCJwcm9qZWN0TW9kYWwiLCJwcm9qZWN0TW9kYWxDb250ZW50IiwicHJvamVjdE1vZGFsVGl0bGUiLCJwcm9qZWN0TW9kYWxJbnB1dCIsInByb2plY3RNb2RhbER1ZURhdGUiLCJwcm9qZWN0TW9kYWxEdWVEYXRlSW5wdXQiLCJwcm9qZWN0TW9kYWxPcHRpb25zIiwicHJvamVjdE1vZGFsQ2FuY2VsIiwicHJvamVjdE1vZGFsU3VibWl0IiwibmV3UHJvamVjdHMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInByb2plY3RDb21wb25lbnRzUGFnZSIsInByb2plY3RQYWdlIiwibmV3VG9kb0J1dHRvbiIsImlubmVySFRNTCIsImkiLCJ0ZW1wIiwib3BlblByb2plY3QiLCJnbG9iYWxUaGlzIiwiYXJyYXlEYXRhVmFsdWUiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJwcm9qZWN0VGl0bGUiLCJ6IiwidG9kb0Rpc3BsYXkiLCJ0b2RvVG9wRGl2IiwidG9kb1RpdGxlIiwidG9kbyIsInRpdGxlIiwidG9kb0Rlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJ0b2RvRHVlRGF0ZSIsInByaW9yaXR5IiwidG9kb1ByaW9yaXR5IiwiZHVlRGF0ZSIsInRvZG9Cb3REaXYiLCJyZVRvZG8iLCJ0b2RvQXJyYXlWYWx1ZSIsInNwbGljZSIsImxlbmd0aCIsInRvcERpdiIsInByb2plY3REdWVEYXRlIiwiYm90dG9tRGl2IiwicmVtb3ZlUHJvamVjdCIsIml0ZW0iLCJvYmoiLCJnYW5nIiwiY2xpY2siLCJ0b2RvZzIiLCJ0b2RvZzEiLCJ0b2RvZzMiLCJkZWZhdWx0UHJvamVjdCIsInRvZG9MaXN0T2JqZWN0IiwiZXZlbnRDbGlja0Z1bmN0aW9ucyIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==