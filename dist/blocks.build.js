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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar _wp$blockEditor = wp.blockEditor,\n    InspectorControls = _wp$blockEditor.InspectorControls,\n    PanelColorSettings = _wp$blockEditor.PanelColorSettings,\n    getColorClassName = _wp$blockEditor.getColorClassName,\n    withColors = _wp$blockEditor.withColors;\nvar Fragment = wp.element.Fragment;\nvar __ = wp.i18n.__;\n\n\nvar BlockWithColorSettings = function BlockWithColorSettings(props) {\n\tvar textColor = props.textColor,\n\t    setTextColor = props.setTextColor; // Props received from withColors\n\n\tvar divClass = void 0;\n\tvar divStyles = {};\n\tif (textColor != undefined) {\n\t\tif (textColor.class != undefined) {\n\t\t\tdivClass = textColor.class;\n\t\t} else {\n\t\t\tdivStyles.color = textColor.color;\n\t\t}\n\t}\n\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(PanelColorSettings, {\n\t\t\t\ttitle: __('Color settings'),\n\t\t\t\tcolorSettings: [{\n\t\t\t\t\tvalue: textColor.color,\n\t\t\t\t\tonChange: setTextColor,\n\t\t\t\t\tlabel: __('Text color')\n\t\t\t\t}]\n\t\t\t})\n\t\t),\n\t\twp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: divClass, style: divStyles },\n\t\t\t'This is default text'\n\t\t)\n\t);\n};\n\nregisterBlockType('awp/colorsettings', {\n\ttitle: __('Color Settings Demo!'),\n\ticon: 'carrot',\n\tcategory: 'common',\n\tattributes: {\n\t\ttextColor: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tcustomTextColor: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\t//edit: BlockWithColorSettings,\n\tedit: withColors({ textColor: 'color' })(BlockWithColorSettings),\n\tsave: function save(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    textColor = _props$attributes.textColor,\n\t\t    customTextColor = _props$attributes.customTextColor;\n\n\t\tvar divClass = void 0;\n\t\tvar divStyles = {};\n\t\tif (textColor != undefined) {\n\t\t\tdivClass = getColorClassName('color', textColor);\n\t\t}\n\t\tif (customTextColor != undefined) {\n\t\t\tdivStyles.color = customTextColor;\n\t\t}\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: divClass, style: divStyles },\n\t\t\t'PanelColorSettings Demo'\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkYmxvY2tFZGl0b3IgPSB3cC5ibG9ja0VkaXRvcixcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRibG9ja0VkaXRvci5JbnNwZWN0b3JDb250cm9scyxcbiAgICBQYW5lbENvbG9yU2V0dGluZ3MgPSBfd3AkYmxvY2tFZGl0b3IuUGFuZWxDb2xvclNldHRpbmdzLFxuICAgIGdldENvbG9yQ2xhc3NOYW1lID0gX3dwJGJsb2NrRWRpdG9yLmdldENvbG9yQ2xhc3NOYW1lLFxuICAgIHdpdGhDb2xvcnMgPSBfd3AkYmxvY2tFZGl0b3Iud2l0aENvbG9ycztcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG52YXIgX18gPSB3cC5pMThuLl9fO1xuXG5cbnZhciBCbG9ja1dpdGhDb2xvclNldHRpbmdzID0gZnVuY3Rpb24gQmxvY2tXaXRoQ29sb3JTZXR0aW5ncyhwcm9wcykge1xuXHR2YXIgdGV4dENvbG9yID0gcHJvcHMudGV4dENvbG9yLFxuXHQgICAgc2V0VGV4dENvbG9yID0gcHJvcHMuc2V0VGV4dENvbG9yOyAvLyBQcm9wcyByZWNlaXZlZCBmcm9tIHdpdGhDb2xvcnNcblxuXHR2YXIgZGl2Q2xhc3MgPSB2b2lkIDA7XG5cdHZhciBkaXZTdHlsZXMgPSB7fTtcblx0aWYgKHRleHRDb2xvciAhPSB1bmRlZmluZWQpIHtcblx0XHRpZiAodGV4dENvbG9yLmNsYXNzICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGl2Q2xhc3MgPSB0ZXh0Q29sb3IuY2xhc3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpdlN0eWxlcy5jb2xvciA9IHRleHRDb2xvci5jb2xvcjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdEZyYWdtZW50LFxuXHRcdG51bGwsXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsQ29sb3JTZXR0aW5ncywge1xuXHRcdFx0XHR0aXRsZTogX18oJ0NvbG9yIHNldHRpbmdzJyksXG5cdFx0XHRcdGNvbG9yU2V0dGluZ3M6IFt7XG5cdFx0XHRcdFx0dmFsdWU6IHRleHRDb2xvci5jb2xvcixcblx0XHRcdFx0XHRvbkNoYW5nZTogc2V0VGV4dENvbG9yLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnVGV4dCBjb2xvcicpXG5cdFx0XHRcdH1dXG5cdFx0XHR9KVxuXHRcdCksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogZGl2Q2xhc3MsIHN0eWxlOiBkaXZTdHlsZXMgfSxcblx0XHRcdCdUaGlzIGlzIGRlZmF1bHQgdGV4dCdcblx0XHQpXG5cdCk7XG59O1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnYXdwL2NvbG9yc2V0dGluZ3MnLCB7XG5cdHRpdGxlOiBfXygnQ29sb3IgU2V0dGluZ3MgRGVtbyEnKSxcblx0aWNvbjogJ2NhcnJvdCcsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0YXR0cmlidXRlczoge1xuXHRcdHRleHRDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdGN1c3RvbVRleHRDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9XG5cdH0sXG5cdC8vZWRpdDogQmxvY2tXaXRoQ29sb3JTZXR0aW5ncyxcblx0ZWRpdDogd2l0aENvbG9ycyh7IHRleHRDb2xvcjogJ2NvbG9yJyB9KShCbG9ja1dpdGhDb2xvclNldHRpbmdzKSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHZhciBfcHJvcHMkYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIHRleHRDb2xvciA9IF9wcm9wcyRhdHRyaWJ1dGVzLnRleHRDb2xvcixcblx0XHQgICAgY3VzdG9tVGV4dENvbG9yID0gX3Byb3BzJGF0dHJpYnV0ZXMuY3VzdG9tVGV4dENvbG9yO1xuXG5cdFx0dmFyIGRpdkNsYXNzID0gdm9pZCAwO1xuXHRcdHZhciBkaXZTdHlsZXMgPSB7fTtcblx0XHRpZiAodGV4dENvbG9yICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGl2Q2xhc3MgPSBnZXRDb2xvckNsYXNzTmFtZSgnY29sb3InLCB0ZXh0Q29sb3IpO1xuXHRcdH1cblx0XHRpZiAoY3VzdG9tVGV4dENvbG9yICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGl2U3R5bGVzLmNvbG9yID0gY3VzdG9tVGV4dENvbG9yO1xuXHRcdH1cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogZGl2Q2xhc3MsIHN0eWxlOiBkaXZTdHlsZXMgfSxcblx0XHRcdCdQYW5lbENvbG9yU2V0dGluZ3MgRGVtbydcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);