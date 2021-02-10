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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_gift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gift */ \"./src/modules/gift.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ \"./src/modules/burger.js\");\n/* harmony import */ var _modules_arrowBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/arrowBtn */ \"./src/modules/arrowBtn.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_dropDownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dropDownMenu */ \"./src/modules/dropDownMenu.js\");\n/* harmony import */ var _modules_modalWindows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modalWindows */ \"./src/modules/modalWindows.js\");\n/* harmony import */ var _modules_sendFormModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendFormModal */ \"./src/modules/sendFormModal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Подарок\r\nconst gift = new _modules_gift__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\ndocument.getElementById('gift') ? gift.giftAppear() : '';\r\n\r\n// Калькулятор\r\nconst calculator = new _modules_calculator__WEBPACK_IMPORTED_MODULE_3__.default();\r\n\r\ndocument.getElementById('price-total') ? calculator.calc() : '';\r\n\r\n// Фиксация Бургер Меню \r\nconst burger = new _modules_burger__WEBPACK_IMPORTED_MODULE_1__.default();\r\n\r\nburger.render();\r\n\r\n// Появление стрелки\r\nconst arrow = new _modules_arrowBtn__WEBPACK_IMPORTED_MODULE_2__.default();\r\n\r\narrow.getVisible();\r\n\r\n// Выпадающее меню \r\nconst dropDown = new _modules_dropDownMenu__WEBPACK_IMPORTED_MODULE_4__.default();\r\n\r\ndropDown.drop();\r\n\r\n// Модальные окна\r\nconst modalWindow = new _modules_modalWindows__WEBPACK_IMPORTED_MODULE_5__.default();\r\n\r\nmodalWindow.showModal();\r\n\r\n// Отправка форм в модальных окнах\r\nconst sendFormModal = new _modules_sendFormModal__WEBPACK_IMPORTED_MODULE_6__.default();\r\n\r\nsendFormModal.sendAjax();\n\n//# sourceURL=webpack://diplom.com/./src/index.js?");

/***/ }),

/***/ "./src/modules/arrowBtn.js":
/*!*********************************!*\
  !*** ./src/modules/arrowBtn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass ArrowBtn {\r\n    constructor() {\r\n        this.arrowBtn = document.getElementById('totop');\r\n        this.headerBlock = document.querySelector('.header-main');\r\n    }\r\n\r\n    getVisible() {\r\n        let posBlock = this.headerBlock.offsetTop + this.headerBlock.offsetHeight;\r\n        \r\n        window.addEventListener('scroll', () => {\r\n            if (document.documentElement.scrollTop > posBlock) {\r\n                this.arrowBtn.classList.add('active');\r\n            } else {\r\n                this.arrowBtn.classList.remove('active');\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowBtn);\n\n//# sourceURL=webpack://diplom.com/./src/modules/arrowBtn.js?");

/***/ }),

/***/ "./src/modules/burger.js":
/*!*******************************!*\
  !*** ./src/modules/burger.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass Burger {\r\n    constructor() {\r\n        this.burgerMenu = document.querySelector('.hidden-large').querySelector('img');\r\n        this.menu = document.querySelector('.hidden-small');\r\n        this.topMenu = document.querySelector('.top-menu');\r\n\r\n        this.popup = document.querySelector('.popup-menu');\r\n    }\r\n\r\n    render() {\r\n        checkResize.apply(this);\r\n        window.addEventListener('resize', checkResize.bind(this));\r\n        \r\n        function checkResize() {\r\n            if (window.innerWidth < 768) {\r\n                this.menu.style.display = 'none';\r\n                document.querySelector('.hidden-large').style.display = 'block';\r\n                \r\n            } else {\r\n                this.menu.style.display = 'flex';\r\n                document.querySelector('.hidden-large').style.display = 'none';\r\n            }\r\n        }\r\n        \r\n        this.burgerFix();\r\n    }\r\n\r\n    burgerFix() {\r\n        let posMenu = this.topMenu.offsetTop;\r\n\r\n        window.addEventListener('scroll', () => {\r\n            if (window.innerWidth < 768 && document.documentElement.scrollTop > posMenu) {\r\n                this.topMenu.classList.add('fixed');\r\n            } else {\r\n                this.topMenu.classList.remove('fixed');\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);\n\n//# sourceURL=webpack://diplom.com/./src/modules/burger.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n\r\nclass Calculator {\r\n    constructor() {\r\n        this.promo = document.getElementById('promo');\r\n        this.form = document.getElementById('card_order');\r\n        this.total = document.getElementById('price-total');\r\n        this.cards = this.form.querySelectorAll('[name=\"card-type\"]');\r\n        this.clubs = this.form.querySelectorAll('[name=\"club-name\"]') ? this.form.querySelectorAll('[name=\"club-name\"]') : '';\r\n    }\r\n\r\n    calc() {\r\n        this.form.addEventListener('change', () => {\r\n            let clubName;\r\n\r\n            if (this.clubs) \r\n                this.clubs.forEach((club) => {\r\n                    if (club.checked) clubName = club.value;\r\n                });\r\n\r\n            this.cards.forEach((card => {\r\n                if (card.checked && this.clubs) {\r\n                    let price = card.getAttribute(`data-price-${clubName}`);\r\n                    this.promo.value === 'ТЕЛО2019' ? price -= price*0.3 : '';\r\n                    this.total.innerText = Math.round(price);\r\n                } else if (card.checked) {\r\n                    this.total.innerText = card.getAttribute(`data-price`);\r\n                }\r\n            }))\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);\n\n//# sourceURL=webpack://diplom.com/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/dropDownMenu.js":
/*!*************************************!*\
  !*** ./src/modules/dropDownMenu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass DropDown {\r\n    constructor() {\r\n        this.select = document.querySelector('.club-select'),\r\n        this.selectList = this.select.querySelector('ul');\r\n    }\r\n\r\n    drop() {\r\n        window.addEventListener('click', (e) => {\r\n            let target = e.target;\r\n\r\n            if (target.closest('.club-select')) {\r\n                this.selectList.classList.add('active');\r\n            } else if (!target.closest('ul')) {\r\n                this.selectList.classList.remove('active');\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropDown);\n\n//# sourceURL=webpack://diplom.com/./src/modules/dropDownMenu.js?");

/***/ }),

/***/ "./src/modules/gift.js":
/*!*****************************!*\
  !*** ./src/modules/gift.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\n    class Gift {\n        giftAppear() {\n            const giftWindow = document.getElementById('gift'),\n                giftBtn = document.querySelector('.fixed-gift');\n            \n            giftBtn.addEventListener('click', () => {\n                giftWindow.style.display = 'block';\n                giftBtn.style.display = 'none';\n            });\n\n            giftWindow.addEventListener('click', (e) => {\n                let target = e.target,\n                    closeBtn = target.classList.contains('close-btn') ? true : false;\n                target = target.closest('.form-content');\n                if (!target || closeBtn) {\n                    giftWindow.style.display = 'none';\n                }\n            });\n        }\n    }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gift);\n\n//# sourceURL=webpack://diplom.com/./src/modules/gift.js?");

/***/ }),

/***/ "./src/modules/modalWindows.js":
/*!*************************************!*\
  !*** ./src/modules/modalWindows.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass ModalWindows {\r\n    constructor() {\r\n        this.modalBtn = document.querySelectorAll('[data-popup]');\r\n        this.modalWindow = document.querySelectorAll('.popup');\r\n    }\r\n\r\n    showModal() {\r\n        this.modalBtn.forEach((btn) => {\r\n\r\n            btn.addEventListener('click', () => {\r\n                let popup = document.querySelector(btn.getAttribute('data-popup'));\r\n                popup.style.display = 'flex';\r\n            });\r\n            \r\n        });\r\n\r\n        this.modalWindow.forEach((bg) => {\r\n            bg.addEventListener('click', (e) => {\r\n                let target = e.target;\r\n    \r\n                if (target.tagName === 'IMG'\r\n                 || target.tagName === 'A'\r\n                 || target.classList.contains('close-btn')\r\n                 || target.closest('.overlay')) {\r\n    \r\n                    bg.style.display = 'none';\r\n    \r\n                }\r\n            });\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalWindows);\n\n//# sourceURL=webpack://diplom.com/./src/modules/modalWindows.js?");

/***/ }),

/***/ "./src/modules/sendFormModal.js":
/*!**************************************!*\
  !*** ./src/modules/sendFormModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass sendFormModal {\r\n    constructor() {\r\n        this.forms = document.querySelectorAll('form');\r\n        this.popup = document.querySelectorAll('.popup');\r\n        this.errorBlock = document.getElementById('error');\r\n        this.errorText = error.querySelector('.error-text');\r\n        this.thanksBlock = document.getElementById('thanks');\r\n    }\r\n\r\n    postData(form, body) {\r\n        return fetch('./server.php', {\r\n            method: 'POST',\r\n            headers: {\r\n            'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(body)\r\n        });\r\n    }\r\n\r\n    sendAjax() {\r\n        const loadingAnim = document.createElement('div');\r\n        console.log(this.errorBlock);\r\n        loadingAnim.style.cssText = ` \r\n            width: 3em;\r\n            height: 3em;\r\n            margin: auto;\r\n            background-color: #337ab7;\r\n            border-radius: 100%;\r\n            animation: sk-spinner-pulse 1.0s infinite ease-in-out;\r\n        `;\r\n\r\n        loadingAnim.animate([\r\n            { transform: 'scale(0)' },\r\n            { transform: 'scale(1.0)',\r\n              opacity: '0' }\r\n            ],\r\n            {\r\n                duration: 1000,\r\n              iterations: Infinity\r\n        });\r\n        \r\n        this.forms.forEach( (form) => {\r\n            let checkbox = form.querySelector('[type=\"checkbox\"]');\r\n\r\n            form.addEventListener('submit', (event) => {\r\n                try {\r\n                    event.preventDefault();\r\n                    if (checkbox && !checkbox.checked) {\r\n                        throw new Error('Дайте согласие на обработку персональных данных');\r\n                    }\r\n\r\n                    if (form.id == 'footer_form') {\r\n                        let checked = [...form.querySelectorAll('[type=\"radio\"]')].some((radio) => radio.checked);\r\n\r\n                        if (!checked) throw new Error('Выберите удобный для Вас клуб');\r\n                    }\r\n\r\n                    for (let i = 0, len = form.elements.length; i < len; ++i) {\r\n                        form.elements[i].tagName === 'BUTTON' ? form.elements[i].disabled = true : form.elements[i].readOnly = true;\r\n                    }\r\n                    \r\n                    form.appendChild(loadingAnim);\r\n                    const formPhone = form.querySelector('[name=\"phone\"]');\r\n                    formPhone.value = formPhone.value.replace(/\\D/g, '');\r\n                    \r\n                    const formData = new FormData(form);\r\n                    let body = {};\r\n                    formData.forEach((val, key) => {\r\n                        body[key] = val;\r\n                    });\r\n                    \r\n                    this.postData(form, body)\r\n                    .then((response) => {\r\n                        if (response.status !== 200) {\r\n                            throw new Error('status network not 200');\r\n                        }\r\n                        loadingAnim.remove();\r\n    \r\n                        for (let i = 0, len = form.elements.length; i < len; ++i) {\r\n                            form.elements[i].tagName === 'BUTTON' ? form.elements[i].disabled = '' : form.elements[i].readOnly = false;\r\n                        }\r\n    \r\n                        this.popup.forEach((item) => item.style.display = 'none');\r\n                        this.thanksBlock.style.display = 'block';\r\n                        \r\n                    })\r\n                    .catch(error => {\r\n                        loadingAnim.remove();\r\n    \r\n                        for (let i = 0, len = form.elements.length; i < len; ++i) {\r\n                            form.elements[i].tagName === 'BUTTON' ? form.elements[i].disabled = '' : form.elements[i].readOnly = false;\r\n                        }\r\n    \r\n                        this.popup.forEach((item) => item.style.display = 'none');\r\n                        errorBlock.style.display = 'block';\r\n                    });\r\n    \r\n                    form.reset();\r\n                } catch(err) {\r\n                    this.errorText.innerText = err.message;\r\n\r\n                    this.popup.forEach((item) => item.style.display = 'none');\r\n                    this.errorBlock.style.display = 'block';\r\n                }\r\n            });\r\n            \r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendFormModal);\n\n//# sourceURL=webpack://diplom.com/./src/modules/sendFormModal.js?");

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