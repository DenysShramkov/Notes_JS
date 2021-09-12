/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((module) => {

function myModule() {
	this.hello = function() {
		console.log('Hello');
	};

	this.goodBye = function() {
		console.log('bye!');
	};
} //по сути функция конструктор

module.exports = myModule; //Это синтаксис command.js, чтобы данный модуль можно было использовать в другом js файле
//это для экспорта

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
const myModule = __webpack_require__(/*! ./main */ "./src/js/main.js"); //для экспорта модуля из файла main

const myModuleInstance = new myModule(); //создаем экземпляр

myModuleInstance.hello(); //можем пользоваться модулем
myModuleInstance.goodBye(); //однако браузер не сможет собрать модули
//он не знает, что такое require, module
//любая модульная система должна быть собрана сборщиком в один результрирующий файл
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map