/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_gift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gift */ \"./src/modules/gift.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ \"./src/modules/burger.js\");\n/* harmony import */ var _modules_arrowBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/arrowBtn */ \"./src/modules/arrowBtn.js\");\n/* harmony import */ var _modules_dropDownMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dropDownMenu */ \"./src/modules/dropDownMenu.js\");\n/* harmony import */ var _modules_modalWindows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modalWindows */ \"./src/modules/modalWindows.js\");\n\n\n\n\n\n\n\n\n\n// Подарок\nconst gift = new _modules_gift__WEBPACK_IMPORTED_MODULE_0__.default();\n\ngift.giftAppear();\n\n// Фиксация Бургер Меню \nconst burger = new _modules_burger__WEBPACK_IMPORTED_MODULE_1__.default();\n\nburger.burgerFix();\n\n// Появление стрелки\nconst arrow = new _modules_arrowBtn__WEBPACK_IMPORTED_MODULE_2__.default();\n\narrow.getVisible();\n\n// Выпадающее меню \nconst dropDown = new _modules_dropDownMenu__WEBPACK_IMPORTED_MODULE_3__.default();\n\ndropDown.drop();\n\n// Модальные окна\nconst modalWindow = new _modules_modalWindows__WEBPACK_IMPORTED_MODULE_4__.default();\n\nmodalWindow.showModal();\n\n//# sourceURL=webpack://diplom.com/./src/index.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_gift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gift */ \"./src/modules/gift.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ \"./src/modules/burger.js\");\n/* harmony import */ var _modules_arrowBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/arrowBtn */ \"./src/modules/arrowBtn.js\");\n/* harmony import */ var _modules_dropDownMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dropDownMenu */ \"./src/modules/dropDownMenu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Подарок\r\nconst gift = new _modules_gift__WEBPACK_IMPORTED_MODULE_0__.default();\r\ngift.giftAppear();\r\n\r\n// Фиксация Бургер Меню \r\nconst burger = new _modules_burger__WEBPACK_IMPORTED_MODULE_1__.default();\r\n\r\nburger.burgerFix();\r\nburger.showPopup();\r\n\r\n// Появление стрелки\r\nconst arrow = new _modules_arrowBtn__WEBPACK_IMPORTED_MODULE_2__.default();\r\n\r\narrow.getVisible();\r\n\r\n// Выпадающее меню \r\nconst dropDown = new _modules_dropDownMenu__WEBPACK_IMPORTED_MODULE_3__.default();\r\n\r\ndropDown.drop();\n\n//# sourceURL=webpack://diplom.com/./src/index.js?");
>>>>>>> 7cae80a793a8cba28c0de0a52ea771c9bf59b14b

/***/ }),

/***/ "./src/modules/arrowBtn.js":
/*!*********************************!*\
  !*** ./src/modules/arrowBtn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nclass ArrowBtn {\n    constructor() {\n        this.arrowBtn = document.getElementById('totop');\n        this.headerBlock = document.querySelector('.header-main');\n    }\n\n    getVisible() {\n        let posBlock = this.headerBlock.offsetTop + this.headerBlock.offsetHeight;\n        \n        window.addEventListener('scroll', () => {\n            if (document.documentElement.scrollTop > posBlock) {\n                this.arrowBtn.classList.add('active');\n            } else {\n                this.arrowBtn.classList.remove('active');\n            }\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowBtn);\n\n//# sourceURL=webpack://diplom.com/./src/modules/arrowBtn.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass ArrowBtn {\r\n    constructor() {\r\n        this.arrowBtn = document.getElementById('totop');\r\n        this.headerBlock = document.querySelector('.header-main');\r\n    }\r\n\r\n    getVisible() {\r\n        let posBlock = this.headerBlock.offsetTop + this.headerBlock.offsetHeight;\r\n        \r\n        window.addEventListener('scroll', () => {\r\n            if (document.documentElement.scrollTop > posBlock) {\r\n                this.arrowBtn.classList.add('active');\r\n            } else {\r\n                this.arrowBtn.classList.remove('active');\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowBtn);\n\n//# sourceURL=webpack://diplom.com/./src/modules/arrowBtn.js?");
>>>>>>> 7cae80a793a8cba28c0de0a52ea771c9bf59b14b

/***/ }),

/***/ "./src/modules/burger.js":
/*!*******************************!*\
  !*** ./src/modules/burger.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nclass Burger {\n    constructor() {\n        this.burgerMenu = document.querySelector('.hidden-large').querySelector('img');\n        this.menu = document.querySelector('.hidden-small');\n        this.topMenu = document.querySelector('.top-menu');\n\n        this.popup = document.querySelector('.popup-menu');\n    }\n\n    burgerFix() {\n        let posMenu = this.topMenu.offsetTop;\n\n        window.addEventListener('scroll', () => {\n            let display = window.getComputedStyle(this.burgerMenu).getPropertyValue(\"display\");\n\n            if (display === 'block' && document.documentElement.scrollTop > posMenu) {\n                this.topMenu.classList.add('fixed');\n            } else {\n                this.topMenu.classList.remove('fixed');\n            }\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);\n\n//# sourceURL=webpack://diplom.com/./src/modules/burger.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass Burger {\r\n    constructor() {\r\n        this.burgerMenu = document.querySelector('.hidden-large');\r\n        this.menu = document.querySelector('.hidden-small');\r\n        this.topMenu = document.querySelector('.top-menu');\r\n\r\n        this.popup = document.querySelector('.popup-menu');\r\n        // this.popupWindow = document.querySelector('')\r\n    }\r\n\r\n    burgerFix() {\r\n        let posMenu = this.topMenu.offsetTop;\r\n\r\n        window.addEventListener('scroll', () => {\r\n            let display = window.getComputedStyle(this.burgerMenu).getPropertyValue(\"display\");\r\n\r\n            if (display === 'block' && document.documentElement.scrollTop > posMenu) {\r\n                this.topMenu.classList.add('fixed');\r\n            } else {\r\n                this.topMenu.classList.remove('fixed');\r\n            }\r\n        });\r\n    }\r\n\r\n    showPopup() {\r\n        this.burgerMenu.addEventListener('click', () => {\r\n            this.popup.style.display = 'flex';\r\n        })\r\n\r\n        this.popup.addEventListener('click', (e) => {\r\n            let target = e.target;\r\n\r\n            if (target.tagName === 'IMG' || target.tagName === 'A') {\r\n                this.popup.style.display = 'none';\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);\n\n//# sourceURL=webpack://diplom.com/./src/modules/burger.js?");
>>>>>>> 7cae80a793a8cba28c0de0a52ea771c9bf59b14b

/***/ }),

/***/ "./src/modules/dropDownMenu.js":
/*!*************************************!*\
  !*** ./src/modules/dropDownMenu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nclass DropDown {\n    constructor() {\n        this.select = document.querySelector('.club-select'),\n        this.selectList = this.select.querySelector('ul');\n    }\n\n    drop() {\n        window.addEventListener('click', (e) => {\n            let target = e.target;\n\n            if (target.closest('.club-select')) {\n                this.selectList.classList.add('active');\n            } else if (!target.closest('ul')) {\n                this.selectList.classList.remove('active');\n            }\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropDown);\n\n//# sourceURL=webpack://diplom.com/./src/modules/dropDownMenu.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass DropDown {\r\n    constructor() {\r\n        this.select = document.querySelector('.club-select'),\r\n        this.selectList = this.select.querySelector('ul');\r\n    }\r\n\r\n    drop() {\r\n        window.addEventListener('click', (e) => {\r\n            let target = e.target;\r\n\r\n            if (target.closest('.club-select')) {\r\n                this.selectList.classList.add('active');\r\n            } else if (!target.closest('ul')) {\r\n                this.selectList.classList.remove('active');\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropDown);\n\n//# sourceURL=webpack://diplom.com/./src/modules/dropDownMenu.js?");
>>>>>>> 7cae80a793a8cba28c0de0a52ea771c9bf59b14b

/***/ }),

/***/ "./src/modules/gift.js":
/*!*****************************!*\
  !*** ./src/modules/gift.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nclass Gift {\n    giftAppear() {\n        const giftWindow = document.getElementById('gift'),\n              giftBtn = document.querySelector('.fixed-gift');\n        \n        giftBtn.addEventListener('click', () => {\n            giftWindow.style.display = 'block';\n            giftBtn.style.display = 'none';\n        });\n\n        giftWindow.addEventListener('click', (e) => {\n            let target = e.target,\n                closeBtn = target.classList.contains('close-btn') ? true : false;\n            target = target.closest('.form-content');\n            if (!target || closeBtn) {\n                giftWindow.style.display = 'none';\n            }\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gift);\n\n//# sourceURL=webpack://diplom.com/./src/modules/gift.js?");

/***/ }),

/***/ "./src/modules/modalWindows.js":
/*!*************************************!*\
  !*** ./src/modules/modalWindows.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass ModalWindows {\r\n    constructor() {\r\n        this.modalBtn = document.querySelectorAll('[data-popup]');\r\n        this.modalWindow = document.querySelectorAll('.popup');\r\n    }\r\n\r\n    showModal() {\r\n        this.modalBtn.forEach((btn) => {\r\n\r\n            btn.addEventListener('click', () => {\r\n                let popup = document.querySelector(btn.getAttribute('data-popup'));\r\n                popup.style.display = 'flex';\r\n            });\r\n            \r\n        });\r\n\r\n        this.modalWindow.forEach((bg) => {\r\n            bg.addEventListener('click', (e) => {\r\n                let target = e.target;\r\n    \r\n                if (target.tagName === 'IMG'\r\n                 || target.tagName === 'A'\r\n                 || target.closest('.overlay')) {\r\n    \r\n                    bg.style.display = 'none';\r\n    \r\n                }\r\n            });\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalWindows);\n\n//# sourceURL=webpack://diplom.com/./src/modules/modalWindows.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass Gift {\r\n    giftAppear() {\r\n        const giftWindow = document.getElementById('gift'),\r\n              giftBtn = document.querySelector('.fixed-gift');\r\n        \r\n        giftBtn.addEventListener('click', () => {\r\n            giftWindow.style.display = 'block';\r\n            giftBtn.style.display = 'none';\r\n        });\r\n\r\n        giftWindow.addEventListener('click', (e) => {\r\n            let target = e.target,\r\n                closeBtn = target.classList.contains('close-btn') ? true : false;\r\n            target = target.closest('.form-content');\r\n            if (!target || closeBtn) {\r\n                giftWindow.style.display = 'none';\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gift);\n\n//# sourceURL=webpack://diplom.com/./src/modules/gift.js?");
>>>>>>> 7cae80a793a8cba28c0de0a52ea771c9bf59b14b

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;