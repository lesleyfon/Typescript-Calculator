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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.ts":
/*!********************!*\
  !*** ./app/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dashBoard_1 = __webpack_require__(/*! ./dashBoard */ \"./app/dashBoard.ts\");\nvar dashBoard = new dashBoard_1.DashBoard();\nvar numbers = document.querySelectorAll(\"[data-number]\");\nvar operand = document.querySelectorAll(\"[data-operand]\");\nnumbers.forEach(function (number) {\n    number.addEventListener(\"click\", function (e) {\n        dashBoard.captureNumber(e.target);\n    });\n});\noperand.forEach(function (element) {\n    element.addEventListener(\"click\", function (event) {\n        dashBoard.captureSign(event.target);\n    });\n});\n\n\n//# sourceURL=webpack:///./app/app.ts?");

/***/ }),

/***/ "./app/dashBoard.ts":
/*!**************************!*\
  !*** ./app/dashBoard.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DashBoard = /** @class */ (function () {\n    function DashBoard() {\n        this.total = 0;\n        this.totalInputValues = {};\n        this.inputField = document.querySelector('input');\n        this.displayField = document.querySelector('.display');\n    }\n    DashBoard.prototype.captureNumber = function (elem) {\n        var _a;\n        if ([\"*\", \"/\", \"+\", \"-\"].includes(this.inputField.value)) {\n            console.log(this.totalInputValues);\n            this.totalInputValues = __assign(__assign({}, this.totalInputValues), (_a = {}, _a[this.inputField.value + String(Object.keys(this.totalInputValues).length)] = this.inputField.value, _a));\n            this.inputField.value = '';\n        }\n        this.inputField.value += elem.innerText;\n    };\n    DashBoard.prototype.captureSign = function (elem) {\n        var _a, _b;\n        this.totalInputValues = __assign(__assign({}, this.totalInputValues), (_a = {}, _a[this.inputField.value + \"obj\" + String(Object.keys(this.totalInputValues).length)] = this.inputField.value, _a));\n        this.displayField.innerText = Object.values(this.totalInputValues)[Object.values(this.totalInputValues).length - 1];\n        if (elem.innerText === \"=\") {\n            this.total = this.calculateTotal(this.totalInputValues);\n            this.inputField.value = '';\n            this.displayField.innerText = String(this.total);\n            this.totalInputValues = (_b = {},\n                _b[this.total + 'obj'] = String(this.total),\n                _b);\n            return;\n        }\n        this.inputField.value = elem.innerText;\n    };\n    DashBoard.prototype.calculateTotal = function (operationObj) {\n        var arr = Object.values(operationObj);\n        for (var i = 0; i < arr.length; i++) {\n            if ([\"*\", \"/\", \"+\", \"-\"].includes(arr[i])) {\n                //is the current number is a sign we call the operation method that accept current number, the next number after the sign and the sign\n                this.total = this.operation(this.total, parseFloat(arr[i + 1]), arr[i]);\n                // after this operation remove the sign number at i + 1\n                arr.splice(i + 1, 1);\n            }\n            else {\n                this.total = parseFloat(arr[i]);\n            }\n        }\n        return this.total;\n    };\n    DashBoard.prototype.operation = function (prev, curr, operator) {\n        switch (operator) {\n            case \"+\":\n                prev = prev + curr;\n                return prev;\n            case \"-\":\n                prev = prev - curr;\n                return prev;\n            case \"*\":\n                prev = prev * curr;\n                return prev;\n            case \"/\":\n                prev = prev / curr;\n                return prev;\n            default:\n                break;\n        }\n        return prev;\n    };\n    return DashBoard;\n}());\nexports.DashBoard = DashBoard;\n\n\n//# sourceURL=webpack:///./app/dashBoard.ts?");

/***/ })

/******/ });